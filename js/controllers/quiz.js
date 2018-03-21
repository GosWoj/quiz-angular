(function(){
    angular
        .module("quizApp")
        .controller("quizCtrl", QuizController);

    QuizController.$inject = ['quizMetrics', 'DataService', '$timeout', '$interval'];

    function QuizController(quizMetrics, DataService, $timeout, $interval){

        var ctrl = this;

        ctrl.quizMetrics = quizMetrics;
        ctrl.dataService = DataService;
        ctrl.questionAnswered = questionAnswered;
        ctrl.setActiveQuestion = setActiveQuestion;
        ctrl.selectAnswer = selectAnswer;
        ctrl.finaliseAnswers = finaliseAnswers;
        ctrl.activeQuestion = 0;
        ctrl.error = false;
        ctrl.finalise = false;
        ctrl.counter = 60;

        ctrl.countdown = function() {
                $timeout(function () {
                    ctrl.counter--;
                    if (ctrl.counter > 0) {
                        ctrl.countdown();
                    } else {
                        ctrl.finalise = true;
                    }
                }, 1000);
        };

        ctrl.activeTimer = function () {
            var setInterval = $interval(function () {
                if (ctrl.quizMetrics.quizActive) {
                    $interval.cancel(setInterval);
                    ctrl.countdown();
                }
            }, 1000);
        };

        ctrl.activeTimer();

        var numQuestionsAnswered = 0;

        function setActiveQuestion(index){
            if(index === undefined){
                var breakOut = false;
                var quizLength = DataService.quizQuestions.length - 1;

                while(!breakOut){
                    ctrl.activeQuestion = ctrl.activeQuestion < quizLength?++ctrl.activeQuestion:0;
                    if(ctrl.activeQuestion === 0){
                        ctrl.error = true;
                    }
                    if(DataService.quizQuestions[ctrl.activeQuestion].selected === null){
                        breakOut = true;
                    }
                }
            }else{
                ctrl.activeQuestion = index;
            }

        }

        function questionAnswered(){

            var quizLength = DataService.quizQuestions.length;
            numQuestionsAnswered = 0;

            for(var x = 0; x < quizLength; x++){
                if(DataService.quizQuestions[ctrl.activeQuestion].selected !== null){
                    numQuestionsAnswered++;
                    if(numQuestionsAnswered >= quizLength){
                        for(var i = 0; i < quizLength; i++){
                            if(DataService.quizQuestions[i].selected === null){
                                setActiveQuestion(i);
                                return;
                            }
                        }
                        ctrl.error = false;
                        ctrl.finalise = true;
                        return;
                    }
                }
            }
            ctrl.setActiveQuestion();
        }

        function selectAnswer(index){
            DataService.quizQuestions[ctrl.activeQuestion].selected = index;
        }

        function finaliseAnswers(){
            ctrl.finalise = false;
            numQuestionsAnswered = 0;
            ctrl.activeQuestion = 0;
            quizMetrics.markQuiz();
            quizMetrics.changeState("quiz", false);
            quizMetrics.changeState("results", true);
            ctrl.counter = 60;
            ctrl.activeTimer();
        }
    }

})();
