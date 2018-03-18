myApp.controller('navFunctionsController',  function($scope, $interval, Score){
    //setup the initial encourgment
    $scope.encouragement = Score.getPositiveFeedBack(); 
    
    //function called by the interval to display updated encouragement and grades
    $scope.updateEncouragement = function(){
        //get a new random encouragement quote from the Score service array of positive encouragement quotes
        $scope.encouragement = Score.getPositiveFeedBack();
        
        //show the grading score board during grading. This function asks the Score service if the showBoard object property is true every 10 seconds.
        //this needs to be refactor cause it looks for the student finishing the test every 10 seconds for no reason till the student start grading
        $scope.navScoreBoard = Score.getShowBoard();
        
        //initial variable for the student grade
        $scope.currentGrade = Score.getScore();       
    }
    
    //call the updateEncouragement function continously
    $interval($scope.updateEncouragement, 5000);
    
    


});//end of Controller