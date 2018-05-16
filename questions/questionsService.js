/*A service that provides an arrays of study guides questions and answers to the controller */
myApp.factory('TestData',  function (Score) {
    
    var scienceChp1 = [
		[        {"question":"___ is both a country and a continent.", "answer":"Australia", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},  
        {"question":"Australia is the ___ largest country in terms of area.", "answer":"6th", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
		{"question":"These are the original inhabitants of Australia; crossed a landbridge from Southeast Asia 50,000 years ago.", "answer":"Aborigines", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
        {"question":"This is a city in Australia; one if the worlds most remote cities.", "answer":"Perth", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},  
        {"question":"3 most important cities of the urban rim", "answer":"Sydney, Melbourne, Canberra", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
		{"question":"This is Australia's capital.", "answer":"Canberra", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
        {"question":"This died back in 2016 due to climate change.", "answer":"Great Barrier Reef", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},  
        {"question":"This is the harsh wilderness of Australia.", "answer":"Outback", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
		{"question":"2 economic activities Australia is a world leader in", "answer":"Wool Production and cattle", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 	
		{"question":"2 islands of New Zealand", "answer":"North Island and South Island", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
        {"question":"The orginal inhabitants of New Zealand.", "answer":"Maori", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
		{"question":"ew Zealand procuces 1/4 of the worlds ___", "answer":"Kiwi fruit", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 	
        {"question":"Antarctica is ______ of the world’s land", "answer":"1/10", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},  
        {"question":"12 countries signed this in 1961, provided peaceful use of the continent and sharing of scientific research.", "answer":"Antarctic Treaty", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 		
        {"question":"Japan consists of___ main islands", "answer":"4", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},  
        {"question":"2 religions of Japan", "answer":"Shinto and Buddhism", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
		{"question":"December 7th, 1941, the Japanese attacked this place, causing the US to join WWII.", "answer":"Attack on Pearl Harbor", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
        {"question":"2 Japanese cities bombed by the US", "answer":"2 Japanese cities bombed by the US", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},  
        {"question":"Korean War", "answer":"Soviet Union", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
		{"question":"Major exports of S. Korea", "answer":"textiles, clothing, automobiles, and electronic goods", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 	
        {"question":"This is the pilgrimage to mecca that 2 million people go on every year.", "answer":"Hajj", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},  
        {"question":"This is a black box with a black stone inside said to be sent from God.", "answer":"Kaaba", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
		{"question":"This is Israel's driest region; covers half of the country.", "answer":"Negev Desert", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
        {"question":"This is the peak where Noah's Ark is said to have settled.", "answer":"Mt. Ararat", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},  
        {"question":"This was the leaser of Al-Quida; attacked on 9/11", "answer":"Osama bin Laden", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
		{"question":"This was the dictator of Iraq.", "answer":"Saddam Hussein", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
        {"question":"This man believed that love and peace wiukd prevail over violence.", "answer":"Gandhi", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 	
        {"question":"This is China's political party that came to power after the revolt on 9/11.", "answer":"Nationalist Party", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},  
        {"question":"is was the first communist leader if China; formed great lead foward and great cultural revolution.", "answer":"Mao Zedong", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
		{"question":"This was when collective farmers were put into communes.", "answer":"Great Leap Forward", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
        {"question":"This smashed the old orders and established a new socialist society.", "answer":"Great Cultural Revolution", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},  
        {"question":"These were radical young men and women; enforced policies of the Great Cultural Revolution.", "answer":"Red Guards", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
		{"question":"Old habits, old ideology, old thought, old customs", "answer":"Four Olds", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
        {"question":"This man became the leader after Mao Zedong; came up with the 4 modernizations.", "answer":"Deng Xioping", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},  
        {"question":"improve agriculture, industry, science/technology, and defense ", "answer":"Four Modernizations", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
		{"question":"This was how the government rented farmland to families, and in return, farmers gave produce to goverment.", "answer":"Contract Responsibility System", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
		{"question":"This dominates the Southwest region of China(14000 ft).", "answer":"Plateau of Tibet", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
        {"question":"Most populous nation in the world", "answer":"China", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},  
        {"question":"This policy was set up to reward familes with money and better jobs for keeping down the population.", "answer":"1 child policy", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
		{"question":"3 religions of China", "answer":"Buddhism, Daoism, and Confucianism", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 		
        {"question":"Sound Navigation And Ranging", "answer":"SONAR", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},  
        {"question":"What is the study of population?", "answer":"Demography", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
		{"question":"This is the Imaginary line that runs east to west and splits earth into Northern and Southern hemispheres.", "answer":"Equator", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
        {"question":"This is the Imaginary line that runs north to south and splits earth into West and East hemispheres; Passes through Greenwich (0 degrees).", "answer":"Prime Meridian", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},  
        {"question":"This is the spinning of earth on its axis (24 hours).", "answer":"Rotation", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
		{"question":"This is the movement of earth around the sun(365 days).", "answer":"Revolution", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
        {"question":"5 Themes of Geography", "answer":"Location, place, movement, human/environment interaction, and region", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
          {"question":"This is Canada's banking and financial center.", "answer":"Toronto", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},  
        {"question":"English and French", "answer":"Official language of Canada", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
		{"question":"The United States in the ___ largest country in terms of area.", "answer":"4th", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
        {"question":"The Unites States population is around __.", "answer":"323 million", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},  
        {"question":"This is where congress meets in the United States.", "answer":"Capitol Building", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
		{"question":"These are the natives if Canada who live in the northern territories.", "answer":"Inuits", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
        {"question":"The is the elimintation of teriffs(taxes) between Canada and the US", "answer":"Free Trade Agreement", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},  
        {"question":"This is the elimination of terrifs(taxes) between Canada, the US, and Mexico.", "answer":"North American Free Trade Agreement", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
		{"question":"This is the total value of goods produced and services provided by a country during one year.", "answer":"Gross National Product", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
        {"question":"This is the capital of Aztec empire", "answer":"Tenochtitlan", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},  
        {"question":"This is the Wealthiest Latin American country", "answer":"Argentina", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
		{"question":"Brazil is the ______ largest country in area in the world.", "answer":"5th", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
        {"question":"This is the dry cold region of Argentiba and Chile that is south of the Pampas (there is a clothing brand named after this).", "answer":"Patagonia", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},  
        {"question":"This is a narrow strip of land with water on both sides. It connects 2 larger bodies of land.", "answer":"Isthmus", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
		{"question":"This is a person of European/Spanish and Native American descent.", "answer":"Mestizos", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
        {"question":"This is a person of European/Spanish and African descent.", "answer":"Mullatoes", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
        {"question":"Europe is ______% of the world’s landmass.", "answer":"3%", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},  
        {"question":"This allows citizens and news media to say what they want without fear of government persecution.", "answer":"Glasnost", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
		{"question":"This was the French emperor who invaded Russia", "answer":"Napoleon", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
        {"question":"This man believed that in order to achieve social equality, land and business should be owned by people in common.", "answer":"Karl Marx", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},  
        {"question":"This is the smallest country in the world.", "answer":"Vatican City", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
		{"question":"2 Houses of Parliament in England", "answer":"House of Commons, House of Lords", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
        {"question":"___ is the world’s largest country by area", "answer":"Russia", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 		
        {"question":"There are _____ official languages spoken in South Africa.", "answer":"11", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},  
        {"question":"This links the Mediteranean Sea and the Red Sea.", "answer":"Suez Canal", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
		{"question":"This is the longest river in the world.", "answer":"Nile River", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
        {"question":"This was the first black president in South Africa", "answer":"Nelson Mandela", "userAnswer":"", "completed":false, "graded":false, "encouragement":""},  
        {"question":"This is the land between the 2 branches of the Nile River.", "answer":"Nile Delta", "userAnswer":"", "completed":false, "graded":false, "encouragement":""}, 
		{"question":"This is the Egyptian process of preserving bodies.", "answer":"Mummification"}		
    ],"World Geography 9 Weeks Exam"
];
    
return {
		//from "Index-cards" vocabularyService.js
		//create an array of answers from the selected test
		getListOfAnswers: function(test){
			//test if any array of objects matches "test"
			switch(test){
				case "scienceChp1":
					//create a new array of just answers from the test
					var arrayOfAnswers = scienceChp1[0].map(function(x){return x.answer});
					arrayOfAnswers.sort();	//sort the array alphabetically
					return arrayOfAnswers;
			}		
		},	
		//update an exsisting test to include random encouragment
		upgradeData: function(test){
			//test if any array of objects matches "test"
			switch(test){
				case "scienceChp1":
					for(var i=0; i<scienceChp1[0].length;i++){
						scienceChp1[0][i].encouragement = Score.getPositiveFeedBack();
					}
					
			}
		},	
        //return requested test
        getData: function(test){
            //test if any array of objects matches "test", then return that array
            switch(test){
                case "scienceChp1":
                    return scienceChp1[0];
            }
                
            },
        //test if any array of objects matches "currentTest", if so update the answer saved from the question.
        saveAnswer:function(currentTest, spot, answer){
            switch(currentTest){
                case "scienceChp1":
                    scienceChp1[0][spot].userAnswer = answer;
                    scienceChp1[0][spot].completed = true;
            }
        },
        //retreive the current index and name of test to change the linked graded property
        disableGradeButton:function(currentTest, spot){
            switch(currentTest){
                case "scienceChp1":
                    scienceChp1[0][spot].graded = true;
            }
        },
    
        //retrived the name of the requested test
        getTestName:function(test){
            //test if any array of objects matches "test", then return that array
            switch(test){
                case "scienceChp1":
                    return scienceChp1[1];
            }            
        }
    
        }//end of the return
});