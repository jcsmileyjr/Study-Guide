/*A service that use a counter to keep score and return that score. */
myApp.factory('Score', [ function () {
    
    var score = {"count":0};
    var answered = {"questionsAnswered":0};
    var scoreBoard = {"showScore": false};
    var completionBoard= {"showCompletion":true};
    var completionRate = {"numberOfQuestions":0, "numberOfQuestionsCompleted":0};
    
    var positiveFeedBack = ["Good Job, Baby", "Besides chocolate, you are my favorite", "You are doing a Awesome job", "I love  you", "You can do it", "Get that A, Get that A", "You are the Best", "Super-smart, that's what you are", "Please Lord, help this child of mine", "If you need help, come get me", "I turned out liking you a lot more than I originally planned", "Good friends don't let you do stupid things...alone",];
     
     return {
         
         //add one to score.count when user gets correct answer
         addScore: function(){
             score.count+= 1;
         },
         
         //add one to score.count when user gets correct answer
         addQuestionsAnswered: function(){
             answered.questionsAnswered+= 1; 
         },
         
         //return the number of questions answer to ensure student answer all questions, then the "check your answers" button will be disable.
         getQuestionsAnswered: function(){
             return answered.questionsAnswered;
         },
         
         //return the current score if student has answer a question or graded an answer
         getScore: function(){
            if(score.count==0 | answered.questionsAnswered==0){
                return 0;
            }else {
                return (score.count/answered.questionsAnswered)*100;
            }
         }, 
         
         //variable use between several controllers to show scoreboard in the nav while student is grading answers
         showScoreBoard: function(switchBoards){
            if(switchBoards == true) {
                scoreBoard.showScore = true;
                completionBoard.showCompletion = false;
            }else {
                scoreBoard.showScore = false;
                completionBoard.showCompletion = true;
            }
             
         },
         
         //return the current scoreboard to the nav
         getShowBoard: function(){
             return scoreBoard.showScore;
         },
         
         //return a random positive feedback
         getPositiveFeedBack: function(){
              return positiveFeedBack[Math.floor(Math.random() * positiveFeedBack.length)];
         },
         
         getNumberOfTestQuestions: function(x){
             completionRate.numberOfQuestions = x;
             console.log(completionRate.numberOfQuestions);
         },
         
         getCompletionRate: function(){
             if(answered.questionsAnswered == 0){
                 return 0;
             }else{
                 return (answered.questionsAnswered/completionRate.numberOfQuestions)*100;
             }
         }
     }/*End of main Return*/
    
    
}]);
