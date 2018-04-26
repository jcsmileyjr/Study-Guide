myApp.controller('questionsController',  function($scope,$window, TestData, Score){  
    
    //initialize varible use to show the "done" and "reset' buttons on the questions page
    $scope.takingTest = true;
    
    //initialize variable use to show the "correct"/"incorrect" radio options  and the correct answer on the questions page.
    $scope.checkingAnswers = false;
    
    //initialize the variable to disable the "Finish" button in the gra
    $scope.enableFinishButton = true;
    
    //record the current test name being taken
    $scope.currentTest = "scienceChp1";
    
    //get test name from the TestData service to be displayed 
    $scope.studyTestName = TestData.getTestName("scienceChp1");
    
    //get test data from the TestData service to be displayed 
    $scope.studyQuestions = TestData.getData("scienceChp1");    
    
    //determine how many questions are in the test for grading
    $scope.numberOfTestQuestions = $scope.studyQuestions.length;
    
    //get number of questions in the test and return to Score service for the completion rate feature
    Score.getNumberOfTestQuestions($scope.numberOfTestQuestions);
    
    //initialize varible use to show the number of test questions answered. This is use in the done and gradeAnswer function to enable submit buttons
    $scope.numberofTestQuestionAnswered = 0;
    
    //initialize the variable use to disable "check your answers" button based on the number of test questions to ensure student complete form
    $scope.completeEveryQuestion = true;
    
    //variable link to the mobile completion rate popup div
    $scope.showCompletionRate = false;

    //function to get student answer to a question saved to the question object it came from    
    $scope.done = function(index, answer){
        //Use the service to record the student's answer
        TestData.saveAnswer($scope.currentTest, index, answer);
        
        //add one for each question answer to be use with grading
        Score.addQuestionsAnswered()    
        
        //get the number of questions answer from the Score's service object
        $scope.numberofTestQuestionAnswered = Score.getQuestionsAnswered();
        
        //if the number of test questions answered matched the number of test questions, the "check your answer" button is re-enable.
        if($scope.numberOfTestQuestions == $scope.numberofTestQuestionAnswered){
            $scope.completeEveryQuestion = false;
            
        }
        
        $scope.showCompletionRatePopUp();
    }
	
	//tip from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_keycode
	//Use the above done command but as a "enter" keyboard event
	$scope.DoneWithKeyboardEnterCommand = function($event, index, answer){
		var x = $event.keyCode;	//use the event to determine the keyboard code from the ng-keypress directive.
		if(x == 13)	// if the key code is the keyboard enter key
			$scope.done(index, answer);	//run the done method
	}
    
    //method to show the completion rate every 3 questions answer for a few seconds.
    $scope.showCompletionRatePopUp = function(){
        $scope.updatedNumber = Score.getQuestionsAnswered();
        console.log($scope.updatedNumber);
        if(($scope.updatedNumber % 3)!==0){
            $scope.showCompletionRate = true;
            $window.setTimeout($scope.hideCompletionRatePopUp, 1000); 
        }

        console.log($scope.updatedNumber % 3);
    }
    
    
    $scope.hideCompletionRatePopUp = function(){
        $scope.showCompletionRate = false;
    }
    
    
    //function to switch student from taking test to grading of the test
    $scope.checkAnswers = function(){
        $scope.takingTest = false;  //removed the completed and reset buttons
        $scope.checkingAnswers = true; // add the radio options and done button
        Score.showScoreBoard(true); //show the current grade UI elements in the nav
    }
    
    //keep count of how many answers was graded. This is use in the gradeAnswer function to enable the "Finish" button on the grading answers section of the app.
    $scope.countOfGradedAnswers = 0;
    
    //function use to count how many answers the student got correct to tally up grade. Based on the number of answers graded, the "Finish" button is enable so the student can view the final grade.
    $scope.gradeAnswer = function(checked, index){
        if(checked == "correct") {
            //add one correct answer to tally if correct to be use with grading 
            Score.addScore();
            
            //update number of correct answers to be display on final grade page
            Score.addCorrectAnswer();
            
            //Disable the done button by changing the graded property in the linked database object property
            TestData.disableGradeButton($scope.currentTest, index);
            
        
        }
        if(checked =="incorrect"){
            //Disable the done button by changing the graded property in the linked database object property
            TestData.disableGradeButton($scope.currentTest, index);         
            
            //update number of incorrect answers to be displayed on the final grade page
            Score.addIncorrectAnswer();
        }
        
        //keep count of how many answers have been graded
        $scope.countOfGradedAnswers += 1;
        
        //if the number of answers graded match the number of answers from the test taking sections, then the "Finish" button is enable.
        if($scope.numberofTestQuestionAnswered == $scope.countOfGradedAnswers){
            $scope.enableFinishButton = false;
        }
        
    }// end of gradeAnswer function
});//end of Controller

	//directive based on user pressing the enter key on the textarea input element. This will move the focus to the next textarea input element. 
	myApp.directive('enter',function(){	//"enter" is the name of the directive
		return function(scope,element,attrs){	//allows the use of the DOM element & attribute
			element.bind("keypress",function(event){	//triggers the event
				if(event.which===13){	//event code (enter button) that triggers the method
					event.preventDefault();
					var fields=$(this).parents('form:eq(0),body').find('textarea');	//get all textarea elements on the page and places into an array call fields
					var index=fields.index(this);	//"this" refer to the current element. The current index of the current index in the array of elements
					if(index> -1&&(index+1)<fields.length)
						fields.eq(index+1).focus();	//move focus to the next array in fields based on the current element. 
				}
			});
		};
	});
	
	//directive based on user clickin the done button for the current question. This will move the focus to the next textarea input element. 
	myApp.directive('clickable',function(){	//"clickable" is the name of the directive
		return function(scope,element,attrs){	//allows the use of the DOM element & attribute
			element.bind("click",function(){	//triggers the event				
				var fields=$(this).parents('form:eq(0),body').find('textarea');//get all textarea elements on the page and places into an array call fields
				var currentIndex = element.attr('index');	//gets the current element (link) attribute  "index" and places it into a variable. *****ITS A STRING*****
				var index=Number(currentIndex) + 1;	//Converts the string into a number and adds one to it to creat the next element.
				if(Number(currentIndex)> -1&&(Number(currentIndex)+1)<fields.length)
					fields[index].focus();	//moves the focus to the next element in the array of textarea based on the current link element index plus one
			});
		};
	});