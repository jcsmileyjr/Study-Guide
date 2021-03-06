myApp.controller('finalGradeController',  function($scope, Score, TestData){

    //initialize the number of correct and incorrect answers
    $scope.correctAnswers = 0;
    $scope.incorrectAnswers = 0;
    
    //get test name from the TestData service to be displayed 
    $scope.studyTestName = TestData.getTestName("scienceChp1");    
    
    //update and display the final score on the final grade page
    $scope.finalScore = Score.getScore();

    
    //update and display the number of correct answers on the final grade page
    $scope.correctAnswers = Score.getCorrectAnswer();
    
    //update and display the number of incorrect answers on the final grade page
    $scope.incorrectAnswers = Score.getIncorrectAnswer();
    
    //business logic that determines the grade display on the final grade page
    
    if($scope.finalScore >= 90){
        $scope.imageBasedOnGrade = "/Study-Guide/css/small_cartoon_pandas.jpg";
        $scope.gradeLetter = "A";
    }else if($scope.finalScore >= 80) {
        $scope.imageBasedOnGrade = "/Study-Guide/css/small_white_panda.jpg";
        $scope.gradeLetter = "B";
    }else if ($scope.finalScore >= 70){
        $scope.imageBasedOnGrade = "/Study-Guide/css/white_cute_panda.jpg";
        $scope.gradeLetter = "C";
    }else if ($scope.finalScore >= 60){
        $scope.imageBasedOnGrade = "/Study-Guide/css/cute_panda.jpg";
        $scope.gradeLetter = "D";
    }else {
         $scope.imageBasedOnGrade = "/Study-Guide/css/cute_panda.jpg";
         $scope.gradeLetter = "F";
    }    


});//end of Controller