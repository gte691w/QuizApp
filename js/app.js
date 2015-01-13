$(document).ready(function(){

 var question = [ 
        {
            number: "Question #1",
            quest: "What is the supreme law of the land?",
            answers:["Magna Carta", "The Constitution", "The Declaration of Independence", "Court of Cassation"],
            correct: "1",
            corrAns:"The Constitution",
            trivia:"Did you know that since coming into force in 1789, The Constitution has been amended twenty-seven times???",
        },
        {
            number: "Question #2",
            quest: "What do we call the first ten amendments to the Constitution?",
            answers:["The Declaration of the Rights of Man and of the Citizen", "The Charter of Rights", "The Declaration of Independence", "The Bill of Rights"],
            correct: "3",
            corrAns:"The Bill of Rights",
            trivia:"The Bill of Rights is the basis for many Supreme Court decisions of the 20th and 21st centuries.",
        },
        {
            number: "Question #3",
            quest: "How many amendments does the Constitution have?",
            answers:["Ten (10)", "Three (3)", "Twenty-Seven (27)", "none"],
            correct: "2",
            corrAns:"Twenty-Seven (27)",
            trivia:"On May 7, 1992 the twenty seventh amendment came into affect after an unprecedented period of 202 years and 225 days!",
        },
        {
            number: "Question #4",
            quest: "Who wrote the Declaration of Independence?",
            answers:["Thomas Jefferson", "Benjamin Franklin", "Abraham Lincoln", "George Washington"],
            correct: "0",
            corrAns:"Thomas Jefferson",
            trivia:"The Declaration of Independence which announced that the thirteen American colonies regarded themselves as thirteen newly independent sovereign states, and no longer a part of the British Empire.",
        },

        {
            number: "Question #5",
            quest: "Who is the Father of Our Country?",
            answers:["Thomas Jefferson", "Benjamin Franklin", "Abraham Lincoln", "George Washington"],
            correct: "3",
            corrAns:"George Washington",
            trivia:"George Washington was the first President of the United States (1789–1797), the Commander-in-Chief of the Continental Army during the Revolutionary War, and one of the Founding Fathers of the United States.",
        },

        {
            number: "Question #6",
            quest: "During the Cold War, what was the main concern of the United States?",
            answers:["Nazi Germany", "Communism", "Slavery", "Terrorism"],
            correct: "1",
            corrAns:"Communism",
            trivia:"The Cold War was a state of political and military tension after World War II between powers in the Western Bloc and powers in the Eastern Bloc.",
        },

        {
            number: "Question #7",
            quest: "What movement tried to end racial discrimination?",
            answers:["Civil Rights", "Miranda Rights", "Right to Bear Arms", "Jim Crow Laws"],
            correct: "0",
            corrAns:"Civil Rights",
            trivia:"The Civil Rights movement encompasses social movements in the United States whose goals were to end racial segregation and discrimination against black Americans.",
        },

        {
            number: "Question #8",
            quest: "What does the 13 stripes represent on the flag?",
            answers:["The 13 Original Colonies", "An Unlucky Number", "A Zibra", "The Number of States"],
            correct: "0",
            corrAns:"The 13 Original Colonies",
            trivia:"The 13 stripes represent the thirteen British colonies that declared independence from the Kingdom of Great Britain creating the first states in the Union."
        },
        {
            number: "Question #9",
            quest: "Which day do we usually celebrate Veterans Day?",
            answers:["July 4", "December 25", "February 14", "November 11"],
            correct: "3",
            corrAns:"November 11",
            trivia:"In the United States, Veterans Day is usually observed on November 11, unless it occurs on a Sunday, the following Monday is designated for holiday leave, and if it occurs Saturday then either Saturday or Friday may be so designated."
        },
        {
            number: "Question #10",
            quest: "In which Supreme Court Case did the Court form the basis for the exercise of judicial review?",
            answers:["West v. Barnes", "Hustler Magazine, Inc. v. Falwell", "Miranda v. Arizona", "Marbury v. Madison,"],
            correct: "3",
            corrAns:"Marbury v. Madison",
            trivia:"Marbury v. Madison helped define the boundary between the constitutionally separate executive and judicial branches of the American form of government."
        }

    ];

    var correctAns = 0
    var finish = false;
    var questAns = 0;
    var questNum = questAns + 1;
    var i;


    restartQuiz();

    function restartQuiz() {
        correctAns = 0;
        finish = false;
        questAns = 0;
        $("#score, #add, #next, #new, #questNum").hide();
        $("#add").prop("disabled", true);
        $("#begin").show();
    }
    
    $("#new").click(function() {
        console.log("Quiz reset");
        restartQuiz();
        $('ul, #triviaText, #questText').hide();
        $("#introQuestText").text("You think you're ready this time?").css('text-align', 'center').hide().slideDown();
        $("#introQuestText").show();
        
    });

    $("#begin").click(function() {
        console.log("Begin Exam button pressed");
        $("input:checked").removeAttr("checked");
        $("#begin, #introQuestText, #triviaText, #score").hide();
        $("#questNum").fadeIn(1000);
        $("#ul").hide().fadeIn(1500);
        $("#add").hide().fadeIn(2500);
        $("#new").hide().fadeIn(2000);
        $("#tot, #res").show();
        questNum = questAns+1;
        askQuest();
    });

    function askQuest() {
        console.log("Question number " + questNum);
            $("#questText").text(question[questAns].quest).hide().slideDown();
            $("#1stChoice").text(question[questAns].answers[0]).hide().fadeIn(1000);
            $("#2ndChoice").text(question[questAns].answers[1]).hide().fadeIn(1500);
            $("#3rdChoice").text(question[questAns].answers[2]).hide().fadeIn(2000);
            $("#4thChoice").text(question[questAns].answers[3]).hide().fadeIn(2500);
            $("#questNum").text(question[questAns].number);
            $("ul").show();
            
            $("#add").show();
            $("#next").hide();
            $(":radio").click(function() {
                $("#add").prop("disabled",false);
            });
            if (questAns === 0) {
                $("#score").hide();            
            }
            else {
                $("#score").show();
            }
    };

    $('#add').on('click',  function() {
        var userGuess = $("input[type='radio']:checked").val();
        $("#submit").hide();
        $("#score").show();
        $("#add").prop("disabled",true);
        if(userGuess === question[questAns].correct) {
            console.log("userGuess is "+ userGuess);
            console.log("correct");
            $("#triviaText").show();
            $("#triviaText").text("CORRECT! " + question[questAns].trivia).hide().slideDown();
            correctAns ++;
            questAns++;
            if(questAns === 10) {
               $("#score").addClass("final");
               $("#score").text("Your final score is " + correctAns +"/" + questAns);
               return;
            }
            else {
            $("#next").show();
            $("#score").text("Current score: " + correctAns +"/" + questAns);
            }
            
        }
        else {
            console.log("wrong");
            $("#triviaText").show();
            $("#triviaText").text("WRONG! " + question[questAns].corrAns).hide().slideDown();
            questAns++;
            $("#score").text("Current score: " + correctAns +"/" + questAns);
            if(questAns === 10) {
               $("#score").addClass("final");
               $("#score").text("Your final score is " + correctAns +"/" + questAns);
               return;
            }
            $("#next").show();
            
        }
    }); 
	
		$("#next").click(function() {
        $("input:checked").removeAttr("checked");
        $('#triviaText').hide().slideUp();
        askQuest ();
        
    });  
       


});