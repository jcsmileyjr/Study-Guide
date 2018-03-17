/*A service that provides an arrays of study guides questions and answers to the controller */
myApp.factory('TestData',  function () {
    
    var scienceChp1 = [        
        {"question":"What is the color of the sun", "answer":"yellow", "userAnswer":"", "completed":false},
        {"question":"What is the color of the grass", "answer":"green", "userAnswer":"", "completed":false},
        {"question":"What is the color of a apple", "answer":"red", "userAnswer":"", "completed":false}
    ];
    
return {    
        //return requested test
        getData: function(test){
                //test if any array of objects matches "test", then return that array
                switch(test){
                    case "scienceChp1":
                        return scienceChp1;
                }
                
            },
        //test if any array of objects matches "currentTest", if so update the answer saved from the question.
        saveAnswer:function(currentTest, spot, answer){
            switch(currentTest){
                case "scienceChp1":
                    scienceChp1[spot].userAnswer = answer;
                    scienceChp1[spot].completed = true;
            }
        }
    
        }//end of the return
});