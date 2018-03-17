myApp.controller('questionsController',  function($scope, TestData){
  
    
    //record the current test name being taken
    $scope.currentTest = "scienceChp1";
    
    //get test data from the TestData service to be displayed 
    $scope.studyQuestions = TestData.getData("scienceChp1");
    
    //method to get student answer to a question saved to the question object it came from    
    $scope.completed = function(index, answer){
        TestData.saveAnswer($scope.currentTest, index, answer)
    }
    


});//end of Controller