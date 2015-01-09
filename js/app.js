$(document).ready(function(){

 var question = [ 
        {
            number: "Question #1",
            quest: "What is the supreme law of the land?",
            answers:["Magna Carta", "The Constitution", "The Declaration of Independence", "Court of Cassation"],
            corrAns:"The Constitution",
            trivia:"Did you know that since coming into force in 1789, The Constitution has been amended twenty-seven times???",
        },
        {
            number: "Question #2",
            quest: "What do we call the first ten amendments to the Constitution?",
            answers:["The Declaration of the Rights of Man and of the Citizen", "The Charter of Rights", "The Declaration of Independence", "The Bill of Rights"],
            corrAns:"The Bill of Rights",
            trivia:"The Bill of Rights is the basis for many Supreme Court decisions of the 20th and 21st centuries.",
        },
        {
            number: "Question #3",
            quest: "How many amendments does the Constitution have?",
            answers:["Ten (10)", "Three (3)", "Twenty-Seven (27)", "none"],
            corrAns:"Twenty-Seven (27)",
            trivia:"On May 7, 1992 the twenty seventh amendment came into affect after an unprecedented period of 202 years and 225 days!",
        },
        {
            number: "Question #4",
            quest: "Who wrote the Declaration of Independence?",
            answers:["Thomas Jefferson", "Benjamin Franklin", "Abraham Lincoln", "George Washington"],
            corrAns:"Thomas Jefferson",
            trivia:"The Declaration of Independence which announced that the thirteen American colonies regarded themselves as thirteen newly independent sovereign states, and no longer a part of the British Empire.",
        },

        {
            number: "Question #5",
            quest: "Who is the Father of Our Country?",
            answers:["Thomas Jefferson", "Benjamin Franklin", "Abraham Lincoln", "George Washington"],
            corrAns:"George Washington",
            trivia:"George Washington was the first President of the United States (1789–1797), the Commander-in-Chief of the Continental Army during the American Revolutionary War, and one of the Founding Fathers of the United States.",
        },

        {
            number: "Question #6",
            quest: "During the Cold War, what was the main concern of the United States?",
            answers:["Nazi Germany", "Communism", "Slavery", "Terrorism"],
            corrAns:"Communism",
            trivia:"The Cold War was a state of political and military tension after World War II between powers in the Western Bloc (the United States, its NATO allies and others) and powers in the Eastern Bloc (the Soviet Union and its allies in the Warsaw Pact).",
        },

        {
            number: "Question #7",
            quest: "What movement tried to end racial discrimination?",
            answers:["Civil Rights", "Miranda Rights", "Right to Bear Arms", "Jim Crow Laws"],
            corrAns:"Civil Rights",
            trivia:"The Civil Rights movement encompasses social movements in the United States whose goals were to end racial segregation and discrimination against black Americans and to secure legal recognition and federal protection of the citizenship rights enumerated in the Constitution and federal law.",
        },

        {
            number: "Question #8",
            quest: "What does the 13 stripes represent on the flag?",
            answers:["The 13 Original Colonies", "An Unlucky Number", "A Zibra", "The Number of States"],
            corrAns:"The 13 Original Colonies",
            trivia:"The 13 stripes represent the thirteen British colonies that declared independence from the Kingdom of Great Britain and became the first states in the Union."
        },
        {
            number: "Question #9",
            quest: "Which day do we usually celebrate Veterans Day?",
            answers:["July 4", "December 25", "February 14", "November 11"],
            corrAns:"November 11",
            trivia:"In the United States, Veterans Day is usually observed on November 11. However, if it occurs on a Sunday then the following Monday is designated for holiday leave, and if it occurs Saturday then either Saturday or Friday may be so designated."
        },
        {
            number: "Question #10",
            quest: "In which Supreme Court Case did the Court form the basis for the exercise of judicial review?",
            answers:["West v. Barnes", "Hustler Magazine, Inc. v. Falwell", "Miranda v. Arizona", "Marbury v. Madison,"],
            corrAns:"Marbury v. Madison",
            trivia:"Marbury v. Madison helped define the boundary between the constitutionally separate executive and judicial branches of the American form of government."
        }

    ];

    var correctAns = 0;
    var finish = false;
    var questAns = 0;
    var questNum = questAns + 1;
    var i;


    restartQuiz();

    function restartQuiz() {
        correctAns = 0;
        finish = false;
        questAns = 0;
        $("#score").hide();
        $("#add").hide();
        $("#add").prop("disabled", true);
        $("#next").hide();
        $("#new").hide();
        $("#questNum").hide();
        $("#begin").show();
    }
    
    $("#new").click(function() {
        console.log("Quiz reset");
        restartQuiz();
        $('ul').hide();
        $("#introQuestText").text("You think you're ready this time?").css('text-align', 'center');
        $("#questText").hide();
        
    });

    $("#begin").click(function() {
        console.log("Begin Exam button pressed");
        $("#begin").hide();
        $("#introQuestText").hide();
        $("#triviaText").hide();
        $("#add").show();
        $("#new").show();
        $("#questNum").show();
        $("#ul").show();
        $("#score").hide();
        $("#tot").show();
        $("#res").show();
        questNum = questAns+1;
        askQuest();
    });

    function askQuest() {
        console.log("Question number " + questNum);
            $("#questText").text(question[questAns].quest);
            $("#1stChoice").text(question[questAns].answers[0]);
            $("#2ndChoice").text(question[questAns].answers[1]);
            $("#3rdChoice").text(question[questAns].answers[2]);
            $("#4thChoice").text(question[questAns].answers[3]);
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
        if (userGuess === question[questAns].corrAns) {
            console.log("userGuess is "+ userGuess);
            console.log("correct");
            $("#triviaText").show();
            $("#triviaText").text("CORRECT! " + question[questAns].trivia);
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
            $("#triviaText").text("WRONG! " + question[questAns].corrAns);
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
        askQuest ();
        
    });  
       


});