myApp.controller('navFunctionsController',  function($scope, $interval, Score){
    //setup the initial encourgment
    $scope.encouragement = Score.getPositiveFeedBack(); 
    
    //function called by the interval to display updated encouragement
    $scope.updateEncouragement = function(){
        $scope.encouragement = Score.getPositiveFeedBack();
    }
    
    //call the updateEncouragement function continously
    $interval($scope.updateEncouragement, 20000);
    


});//end of Controller