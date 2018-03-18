myApp.controller('questionsController',  function($scope, TestData, Score){  
    
    //initialize varible use to show the "done" and "reset' buttons on the questions page
    $scope.takingTest = true;
    
    //initialize variable use to show the "correct"/"incorrect" radio options  and the correct answer on the questions page.
    $scope.checkingAnswers = false;
    
    //record the current test name being taken
    $scope.currentTest = "scienceChp1";
    
    //get test data from the TestData service to be displayed 
    $scope.studyQuestions = TestData.getData("scienceChp1");
    
    //determine how many questions are in the test for grading
    $scope.numberOfTestQuestions = $scope.studyQuestions.length;
    
    //initialize the variable use to disable "check your answers" button based on the number of test questions to ensure student complete form
    $scope.completeEveryQuestion = true;
    console.log($scope.completeEveryQuestion);
    
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
            $scope.completeEveryQuestion = false
            
        }
    }
    
    //function to switch student from taking test to grading of the test
    $scope.checkAnswers = function(){
        $scope.takingTest = false;  //removed the completed and reset buttons
        $scope.checkingAnswers = true; // add the radio options and done button
        Score.showScoreBoard(true); //show the current grade UI elements in the nav
    }
    
    //function use to count how many student got correct to tally up grade
    $scope.gradeAnswer = function(checked, index){
        if(checked == "correct") {
            Score.addScore();   //add one correct answer to tally if correct to be use with grading 
            //Disable the done button by changing the graded property in the linked database object property
            TestData.disableGradeButton($scope.currentTest, index);
        }
        if(checked =="incorrect"){
            //Disable the done button by changing the graded property in the linked database object property
            TestData.disableGradeButton($scope.currentTest, index);            
        }
        
        
    }
    
    
    


});//end of Controller