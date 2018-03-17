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
    
    //function to get student answer to a question saved to the question object it came from    
    $scope.done = function(index, answer){
        TestData.saveAnswer($scope.currentTest, index, answer);
        Score.addQuestionsAnswered()    //add one for each question answer to be use with grading
    }
    
    //function to switch student from taking test to grading of the test
    $scope.checkAnswers = function(){
        $scope.takingTest = false;
        $scope.checkingAnswers = true;
        Score.showScoreBoard(true);
    }
    
    //function use to count how many student got correct to tally up grade
    $scope.gradeAnswer = function(checked){
        if(checked == "correct") {
            Score.addScore();   //add one correct answer to tally if correct to be use with grading
        }
    }
    
    
    


});//end of Controller