(function(){
    angular
        .module("quizApp")
        .controller("showCtrl", ShowController);

    ShowController.$inject = ['quizMetrics'];

    function ShowController(quizMetrics){
        var ctrl = this;
        ctrl.name = '';
        ctrl.quizMetrics = quizMetrics;
        ctrl.activateQuiz = activateQuiz;

        function activateQuiz(){
            quizMetrics.changeState("quiz", true);
        }
    }

})();
