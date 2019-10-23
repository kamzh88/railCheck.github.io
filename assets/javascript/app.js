$(document).ready(function () {
    var total = 3;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var time = 20;
    var fromSubmit = false;
    var intervalId;

    function results() {
        var answers = ["b", "c", "d"];
        fromSubmit = true;
        for (i = 1; i <= total; i++) {
            var value = document.forms["quizForm"]["q" + i].value;
            if (value === answers[i - 1]) {
                correct++;
            } else if (value === '') {
                unanswered++;
            } else {
                incorrect++;
            }
        };
        $(".submit").remove();
        $("#invisible").removeClass("show");
        unanswered = (3 - (correct + incorrect));
        var resultsDiv = $("<div>");
        var p1 = $("<p>").text("Correct: " + correct);
        var p2 = $("<p>").text("Incorrect: " + incorrect);
        var p3 = $("<p>").text("Unanswered: " + unanswered);
        resultsDiv.append(p1, p2, p3);
        $("#results").append(resultsDiv);
    }

    function decrement() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        time--;
        $(".time-text").html("<h2>" + time + "</h2>");
        if (time === 0 && !fromSubmit) {
            results();
        }
    }

    $(".submit").on("click", function () {
        results();
    });

    $(".start").on("click", function () {
        $(".start").remove();
        $("#invisible").toggleClass("show");
        decrement();
    });
});
