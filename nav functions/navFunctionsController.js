myApp.controller('navFunctionsController',  function($scope, $interval, $state, Score){
    //setup the initial encourgment
    $scope.encouragement = Score.getPositiveFeedBack(); 
    
    //function called by the interval to display updated encouragement and grades
    $scope.updateEncouragement = function(){
        //get a new random encouragement quote from the Score service array of positive encouragement quotes
        $scope.encouragement = Score.getPositiveFeedBack();
        
        //constantly update, based on the interval, how many more question is remaining.
        $scope.currentCompletionRate = Score.getCompletionRate();
        
        //show the grading score board during grading. This function asks the Score service if the showBoard object property is true every 10 seconds.
        //this needs to be refactor cause it looks for the student finishing the test every 10 seconds for no reason till the student start grading
        $scope.navScoreBoard = Score.getShowBoard();
        
        //initial variable for the student grade and constantly update that grade during the grading of answers section
        $scope.currentGrade = Score.getScore();       
    }
    
    //restart the app by reloading the browser page
    $scope.restart = function(){
        $state.go("questions");
        location.reload();
    }    
    
    //call the updateEncouragement function continously
    $interval($scope.updateEncouragement, 3000);
    
    


});//end of Controller