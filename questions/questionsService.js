/*A service that provides an arrays of study guides questions and answers to the controller */
myApp.factory('TestData',  function (Score) {
    
    var scienceChp1 = [        

        [{"question":"What is the periodic law", "answer":"The law that states that the repeating chemical and physical properties of elements change periodically with the atomic number of the element", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},

        {"question":"Father of the Periodic table is ", "answer":"Mendeleev", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},

        {"question":"Mendeleev arrange the Periodic table by?", "answer":"Atomic Mass", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},

        {"question":"Mosley arranged the periodic table according to increasing", "answer":"atomic numbers", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},

        {"question":"horizontal rows of periodic table are called", "answer":"periods", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},

        {"question":"vertical columns of the periodic able are called", "answer":"roots", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},

        {"question":"On the periodic table, Family is another name for a ", "answer":"Group", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},

        {"question":"an element that has properties of both metals and nonmetals", "answer":"metalloids", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},

        {"question":"What is the classification of most elements on the periodic table", "answer":"Metals", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},

        {"question":"Group number and example for Alkali Metals", "answer":"Group 1 & Li, Na, Ls", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},

        ],"Science Chapter 1"

    ];	
    
return {
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