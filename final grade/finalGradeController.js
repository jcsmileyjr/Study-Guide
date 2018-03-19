myApp.controller('finalGradeController',  function($scope, Score){

    //initialize the number of correct answers
    $scope.correctAnswers = 0;
    $scope.incorrectAnswers = 0;
    
    //update and display the final score
    $scope.finalScore = Score.getScore();

    
    //update and display the number of correct answers
    $scope.correctAnswers = Score.getCorrectAnswer();
    
    //update and display the number of incorrect answers
    $scope.incorrectAnswers = Score.getIncorrectAnswer();
    
    //business logic that determinen grade
    if($scope.finalScore >= 90){
        return $scope.gradeLetter = "A";
    }else if($scope.finalScore >= 80) {
        return $scope.gradeLetter = "B";
    }else if ($scope.finalScore >= 70){
        return $scope.gradeLetter = "C";
    }else if ($scope.finalScore >= 60){
        return $scope.gradeLetter = "D";
    }else {
        return $scope.gradeLetter = "F";
    }    


});//end of Controller