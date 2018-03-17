myApp.controller('navFunctionsController',  function($scope, $interval, Score){
    //setup the initial encourgment
    $scope.encouragement = Score.getPositiveFeedBack(); 
    
    //show the grading score board during grading
    $scope.navScoreBoard = Score.getShowBoard();
    console.log("start score Board " + $scope.navScoreBoard);
    $scope.show = function(){
        console.log($scope.navScoreBoard);
    }
    //$interval($scope.show, 3000);
    
    //function called by the interval to display updated encouragement
    $scope.updateEncouragement = function(){
        $scope.encouragement = Score.getPositiveFeedBack();
    }
    
    //call the updateEncouragement function continously
    $interval($scope.updateEncouragement, 20000);
    
    


});//end of Controller