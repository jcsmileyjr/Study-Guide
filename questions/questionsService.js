/*A service that provides an arrays of study guides questions and answers to the controller */
myApp.factory('TestData',  function () {
    
    var scienceChp1 = [        
        [{"question":"What is the periodic law", "answer":"The law that states that the repeating chemical and physical properties of elements change periodically with the atomic number of the element", "userAnswer":"", "completed":false, "graded":false},
        {"question":"Father of the Periodic table is ", "answer":"Mendeleev", "userAnswer":"", "completed":false, "graded":false},
        {"question":"Mendeleev arrange the Periodic table by?", "answer":"Atomic Mass", "userAnswer":"", "completed":false, "graded":false},
        {"question":"Mosley arranged the periodic table according to increasing", "answer":"atomic numbers", "userAnswer":"", "completed":false, "graded":false},
        {"question":"horizontal rows of periodic table are called", "answer":"periods", "userAnswer":"", "completed":false, "graded":false},
        {"question":"vertical columns of the periodic able are called", "answer":"roots", "userAnswer":"", "completed":false, "graded":false},
        {"question":"On the periodic table, Family is another name for a ", "answer":"Group", "userAnswer":"", "completed":false, "graded":false},
        {"question":"an element that has properties of both metals and nonmetals", "answer":"metalloids", "userAnswer":"", "completed":false, "graded":false},
        {"question":"What is the classification of most elements on the periodic table", "answer":"Metals", "userAnswer":"", "completed":false, "graded":false},
        {"question":"Group number and example for Alkali Metals", "answer":"Group 1 & Li, Na, Ls", "userAnswer":"", "completed":false, "graded":false},
        {"question":"Group number and example for Alkaliine Earth Metals", "answer":"Group 2 & Be, Mg, Ca", "userAnswer":"", "completed":false, "graded":false},
        {"question":"Group number and example for Halogens", "answer":"Group 17 & F, C1, Br", "userAnswer":"", "completed":false, "graded":false},
        {"question":"Group number and example for Noble Gases", "answer":"Group 18 & He, Ne, Ar", "userAnswer":"", "completed":false, "graded":false}, 
        {"question":"Example of a transition metal", "answer":"silver", "userAnswer":"", "completed":false, "graded":false},
        {"question":"Transition elements are located between which two groups", "answer":"3 and 12", "userAnswer":"", "completed":false, "graded":false},
        {"question":"Metals are located to the ____ and ____ of the metalloid line", "answer":"Left and Under", "userAnswer":"", "completed":false, "graded":false},
        {"question":"Non-Metals are located to the _____ and ____ of the metalliod line", "answer":"Right and Above", "userAnswer":"", "completed":false, "graded":false},
        {"question":"A non-metal that is not located to the right and above the metalliod line", "answer":"Hydrogen", "userAnswer":"", "completed":false, "graded":false},
        {"question":"Energy levels ______ as you move down a group", "answer":"Increase", "userAnswer":"", "completed":false, "graded":false},
        {"question":"What is the only metal that is a liquid at room temperature", "answer":"mercury", "userAnswer":"", "completed":false, "graded":false},
        {"question":"What is an Ion", "answer":"an atom , radical, or molecule taht has gain or lost one or more electrons", "userAnswer":"", "completed":false, "graded":false},
        {"question":"Do metals gain or lose electrons when they form ions", "answer":"Lose", "userAnswer":"", "completed":false, "graded":false},
        {"question":"Do non-metals gain or lose electrons when they form ions", "answer":"Gain", "userAnswer":"", "completed":false, "graded":false},
        {"question":"What type of ions do metals form", "answer":"Positive ion", "userAnswer":"", "completed":false, "graded":false},
        {"question":"What type of ions do non-metals form", "answer":"Negative ion", "userAnswer":"", "completed":false, "graded":false},
        {"question":"Number of valence electrons for the Alkaline Earth Metals", "answer":"+2", "userAnswer":"", "completed":false, "graded":false},
        {"question":"Number of valence electrons for the Alkali  Metals", "answer":"+1", "userAnswer":"", "completed":false, "graded":false},
        {"question":"Number of valence electrons for the Halogens", "answer":"-1", "userAnswer":"", "completed":false, "graded":false},
        {"question":"Number of valence electrons for the Noble Gases", "answer":"8", "userAnswer":"", "completed":false, "graded":false},
        {"question":"Number of valence electrons for the Group 6A", "answer":"6", "userAnswer":"", "completed":false, "graded":false},
        {"question":"Number of valence electrons for the Group 3A", "answer":"3", "userAnswer":"", "completed":false, "graded":false},
        {"question":"Number of valence electrons for the Group 5A", "answer":"5", "userAnswer":"", "completed":false, "graded":false},         
        {"question":"5 Characteristics of Metals", "answer":"Shinny, Magnectic, malleable, Positive ion, ductile ", "userAnswer":"", "completed":false, "graded":false},  
        {"question":"5 Characteristics of Non-metals", "answer":"Negative Ion, Poor Conducter, Not Ductile, Not malleable, Not lustrous (shiny))", "userAnswer":"", "completed":false, "graded":false},
        {"question":"What are the four groups of metals", "answer":"alkia metals, alkaline metals, transition metals, inner transition metals", "userAnswer":"", "completed":false, "graded":false},
        {"question":"Which group of metal is the softest and most reactive", "answer":"alkali metals:", "userAnswer":"", "completed":false, "graded":false},
        {"question":"What is the two main groups of non-metals", "answer":"Noble gases and Halogens", "userAnswer":"", "completed":false, "graded":false},
        {"question":"Which group of non-metals is the most reactive", "answer":"Halogens", "userAnswer":"", "completed":false, "graded":false},
        {"question":"Which group of elements contain a full valence shell", "answer":"Nobel Gases", "userAnswer":"", "completed":false, "graded":false},         
        {"question":"Metals increase in hardness as you move ____ to ___ of the periodic table", "answer":"left to right", "userAnswer":"", "completed":false, "graded":false},
        {"question":"Define valence electrons", "answer":"Electron on the outer shells", "userAnswer":"", "completed":false, "graded":false},
        {"question":"The semi metal that is in period two is ", "answer":"Boron", "userAnswer":"", "completed":false, "graded":false},
        {"question":"Which group of elements tend to form salts and are called the saltmakers", "answer":"Hydrogen", "userAnswer":"", "completed":false, "graded":false},
        {"question":"How many valence elctrons does and atom need to become stable", "answer":"8", "userAnswer":"", "completed":false, "graded":false},
        {"question":"Elements in the same ____ share similar properties", "answer":"Group", "userAnswer":"", "completed":false, "graded":false},
        {"question":"How many elements are in Periond 5 and 6", "answer":"18 & ??", "userAnswer":"", "completed":false, "graded":false}, 
        {"question":"How many valence elctrons does and atom need to become stable", "answer":"8", "userAnswer":"", "completed":false, "graded":false},
        {"question":"How many elements are in Period 18.", "answer":"Group", "userAnswer":"", "completed":false, "graded":false},
        {"question":"What charge is a cartoon", "answer":"Positive", "userAnswer":"", "completed":false, "graded":false},          
        ],"Science Chapter 1"
    ];
    
return {    
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