/*A service that use a counter to keep score and return that score. */
myApp.factory('Score', [ function () {
    
    var score = {"count":0};
    var answered = {"questionsAnswered":0};
    var scoreBoard = {"showScore": false};
    
    var positiveFeedBack = ["Good Job", "Besides chocolate, you are my favorite", "Awesome", "I love  you", "You can do it", "Get that A, Get that A", "You are the Best", "Super-smart, that's what you are", "Please Lord, help this child of mine", "If you need help, come get me", "I turned out liking you a lot more than I originally planned", "Good friends don't let you do stupid things...alone",];
     
     return {
         
         //add one to score.count when user gets correct answer
         addScore: function(){
             score.count+= 1;
         },
         
         //add one to score.count when user gets correct answer
         addQuestionsAnswered: function(){
             answered.questionsAnswered+= 1; 
         },
         
         //return the current score if student has answer a question or graded an answer
         getScore: function(){
            if(score.count==0 | answered.questionsAnswered==0){
                return 0;
            }else {
                return (score.count/answered.questionsAnswered)*100;
            }
         }, 
         
         //variable use between several controllers to show scoreboard while child is grading
         showScoreBoard: function(switchBoards){
            if(switchBoards == true) {
                scoreBoard.showScore = true;
            }else {
                scoreBoard.showScore = false;
            }
             
         },
         
         getShowBoard: function(){
             return scoreBoard.showScore;
         },
         
         //return a random positive feedback
         getPositiveFeedBack: function(){
              return positiveFeedBack[Math.floor(Math.random() * positiveFeedBack.length)];
         }
     }/*End of main Return*/
    
    
}]);
