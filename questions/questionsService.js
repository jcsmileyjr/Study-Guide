/*A service that provides an arrays of study guides questions and answers to the controller */
myApp.factory('TestData',  function (Score) {
    
    var scienceChp1 = [        

        [{"question":"The color of an Apple", "answer":"Red", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},

        {"question":"The color of an Orange", "answer":"Orange", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},

        {"question":"The color of an Grape", "answer":"Purple", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},

        {"question":"The color of an fresh cut grass", "answer":"Green", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},

        {"question":"The color of newly minted gold bars", "answer":"Gold", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},

        {"question":"The color of the night sky", "answer":"Black", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},

        {"question":"The color of an a shiny quater", "answer":"Silver", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},

        {"question":"The color of an mud", "answer":"Brown", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},

        {"question":"The color of the sun", "answer":"Yellow", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},

        {"question":"The color of the ocean", "answer":"Blue", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},

        ],"Science Chapter 1"

    ];	
    
return {
		//from "Index-cards" vocabularyService.js
		//create an array of answers from the selected test
		getListOfAnswers: function(test){
			//test if any array of objects matches "test"
			switch(test){
				case "scienceChp1":
					//create a new array of just answers from the test
					var arrayOfAnswers = scienceChp1[0].map(function(x){return x.answer});
					arrayOfAnswers.sort();	//sort the array alphabetically
					return arrayOfAnswers;
			}		
		},	
		//update an exsisting test to include random encouragment
		upgradeData: function(test){
			//test if any array of objects matches "test"
			switch(test){
				case "scienceChp1":
					for(var i=0; i<scienceChp1[0].length;i++){
						scienceChp1[0][i].encouragement = Score.getPositiveFeedBack();
					}
					
			}
		},	
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