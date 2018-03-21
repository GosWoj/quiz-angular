(function(){
    angular
        .module("quizApp")
        .factory("DataService", DataService);

    function DataService(){

        var dataObj = {
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };

        return dataObj;
    }

    var correctAnswers = [1, 3, 0, 1, 2];

    var quizQuestions  = [
        {
            type: "text",
            text: "Who is Ben Solo?",
            possibilities: [
                {
                    answer: "Rey"
                },
                {
                    answer: "Kylo Ren"
                },
                {
                    answer: "Obi Wan"
                },
                {
                    answer: "Luke"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "In how many languages is C-3P0 fluent?",
            possibilities: [
                {
                    answer: "Little less than 6 million"
                },
                {
                    answer: "Around 4 million"
                },
                {
                    answer: "Over nine thousand"
                },
                {
                    answer: "More than 6 million"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Who killed Jabba the Hutt?",
            possibilities: [
                {
                    answer: "https://opinionessoftheworld.files.wordpress.com/2012/08/princess-leia-1.jpg"
                },
                {
                    answer: "https://cdn.arstechnica.net/wp-content/uploads/2017/01/han-solo.jpg"
                },
                {
                    answer: "https://glowingwithme.com/wp-content/uploads/2016/01/Luke-Skywalker-Lightsaber.png"
                },
                {
                    answer: "https://cdn.vox-cdn.com/thumbor/4AuaiNCRQpe-RJXznIpaYuH5Hho=/0x0:768x432/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/49519125/boba-fett-disney.0.jpeg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which species stole the plans to the Death Star?",
            possibilities: [
                {
                    answer: "Hutt"
                },
                {
                    answer: "Bothans"
                },
                {
                    answer: "Jawa"
                },
                {
                    answer: "Humans"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the name of Boba Fett's ship?",
            possibilities: [
                {
                    answer: "Star Destroyer"
                },
                {
                    answer: "Tantive IV"
                },
                {
                    answer: "Slave 1"
                },
                {
                    answer: "Ebon Hawk"
                }
            ],
            selected: null,
            correct: null
        }
    ];
})();