myApp.controller('questionsController',  function($scope, TestData, Score){  
    
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
    }
	
	//tip from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_keycode
	//Use the above done command but as a "enter" keyboard event
	$scope.DoneWithKeyboardEnterCommand = function($event, index, answer){
		var x = $event.keyCode;
		if(x == 13)
			$scope.done(index, answer);
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

	myApp.directive('enter',function(){
		return function(scope,element,attrs){
			element.bind("keypress",function(event){
				if(event.which===13){
					event.preventDefault();
					var fields=$(this).parents('form:eq(0),body').find('textarea');
					var index=fields.index(this);
					if(index> -1&&(index+1)<fields.length)
						fields.eq(index+1).focus();
				}
			});
		};
	});

	myApp.directive('clickable',function(){
		return function(scope,element,attrs){
			element.bind("click",function(){				
				var fields=$(this).parents('form:eq(0),body').find('textarea');
				var currentIndex = element.attr('index');
				var index=Number(currentIndex) + 1;
				fields[index].focus();

			});
		};
	});