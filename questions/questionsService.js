/*A service that provides an arrays of study guides questions and answers to the controller */
myApp.factory('TestData',  function () {
    
    var scienceChp1 = [        
        [{"question":"What is the color of the sun", "answer":"yellow", "userAnswer":"", "completed":false, "graded":false},
        {"question":"What is the color of the grass", "answer":"green", "userAnswer":"", "completed":false, "graded":false},
        {"question":"What is the color of a apple", "answer":"red", "userAnswer":"", "completed":false, "graded":false}],"Science Chapter 1"
    ];
    
return {    
        //return requested test
        getData: function(test){
            //test if any array of objects matches "test", then return that array
            switch(test){
                case "scienceChp1":
                    return scienceChp1[0];
            }
                
            },
        //test if any array of objects matches "currentTest", if so update the answer saved from the question.
        saveAnswer:function(currentTest, spot, answer){
            switch(currentTest){
                case "scienceChp1":
                    scienceChp1[0][spot].userAnswer = answer;
                    scienceChp1[0][spot].completed = true;
            }
        },
        //retreive the current index and name of test to change the linked graded property
        disableGradeButton:function(currentTest, spot){
            switch(currentTest){
                case "scienceChp1":
                    scienceChp1[0][spot].graded = true;
            }
        },
    
        //retrived the name of the requested test
        getTestName:function(test){
            //test if any array of objects matches "test", then return that array
            switch(test){
                case "scienceChp1":
                    return scienceChp1[1];
            }            
        }
    
        }//end of the return
});