myApp.controller('finalGradeController',  function($scope, Score){
    
    //initialize the image that will be shown on the final grade page based on the grade
    $scope.imageBasedOnGrade = "/css/small_cartoon_pandas.jpg"

    //initialize the number of correct and incorrect answers
    $scope.correctAnswers = 0;
    $scope.incorrectAnswers = 0;
    
    //update and display the final score on the final grade page
    $scope.finalScore = Score.getScore();

    
    //update and display the number of correct answers on the final grade page
    $scope.correctAnswers = Score.getCorrectAnswer();
    
    //update and display the number of incorrect answers on the final grade page
    $scope.incorrectAnswers = Score.getIncorrectAnswer();
    
    //business logic that determines the grade display on the final grade page
    if($scope.finalScore >= 90){
        $scope.imageBasedOnGrade = "/css/small_cartoon_pandas.jpg"
        $scope.gradeLetter = "A";
    }else if($scope.finalScore >= 80) {
        $scope.imageBasedOnGrade = "/css/small_white_panda.jpg"
        $scope.gradeLetter = "B";
    }else if ($scope.finalScore >= 70){
        $scope.imageBasedOnGrade = "/css/white_cute_panda.jpg"
        $scope.gradeLetter = "C";
    }else if ($scope.finalScore >= 60){
        $scope.imageBasedOnGrade = "/css/cute_panda.jpg"
        $scope.gradeLetter = "D";
    }else {
         $scope.gradeLetter = "F";
    }    


});//end of Controller