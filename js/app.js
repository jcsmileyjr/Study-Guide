//Sets the variable myApp as a Angular applicatation
var myApp = angular.module('StudyGuide',['ui.router']);

// A .config function is used to provide 'state' and url routing for the app thru the stateProvider (from ui-router).
myApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider, $state) {

    //If no route or link is select, the app redirects to the nav page
    $urlRouterProvider.otherwise('/questions');

    $stateProvider
        //The navigation state redirects the user to the template connected to the controller  
        .state('questions', {
            url:'/questions',
            templateUrl: 'questions/questions.html',
            controller: "questionsController"
        })
        //The navigation state redirects the user to the template connected to the controller  
        .state('finalGrade', {
            url:'/finalGrade',
            templateUrl: 'final grade/finalGrade.html',
            controller: "finalGradeController"
        }) 
	
    
}]);