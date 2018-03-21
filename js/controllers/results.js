(function(){
    angular
        .module("quizApp")
        .controller("resultsCtrl", ResultsController);

    ResultsController.$inject = ['quizMetrics', 'DataService'];

    function ResultsController(quizMetrics, DataService){

        var ctrl = this;
        ctrl.quizMetrics = quizMetrics;
        ctrl.dataService = DataService;
        ctrl.getAnswerClass = getAnswerClass;
        ctrl.setActiveQuestion = setActiveQuestion;
        ctrl.reset = reset;
        ctrl.calculatePerc = calculatePerc;
        ctrl.activeQuestion = 0;

        function calculatePerc(){

            return quizMetrics.numCorrect / DataService.quizQuestions.length * 100;
        }

        function setActiveQuestion(index){

            ctrl.activeQuestion = index;
        }

        function getAnswerClass(index){

            if(index === quizMetrics.correctAnswers[ctrl.activeQuestion]){
                return "bg-success";
            }else if(index === DataService.quizQuestions[ctrl.activeQuestion].selected){
                return "bg-danger";
            }
        }

        function reset(){

            quizMetrics.changeState("results", false);
            quizMetrics.numCorrect = 0;

            for(var i = 0; i < DataService.quizQuestions.length; i++){
                var data = DataService.quizQuestions[i];

                data.selected = null;
                data.correct = null;
                quizMetrics.name = null;

            }
        }

    }

})();