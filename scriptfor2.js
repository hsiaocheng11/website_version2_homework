let btn = document.getElementById("btn");
var inputs = document.querySelectorAll('input');
var forms = document.querySelectorAll('form');
let i = 1;
inputs.forEach(function (input) {
    input.addEventListener("click", function () {
        if (i <= (forms.length)) {
            let p = document.getElementById(i.toString());
            let it = document.getElementById("f" + i.toString());

            p.style.display = "none";
            it.style.display = "none";
        }
        if (i < (forms.length)) {
            let pnext = document.getElementById((i + 1).toString());
            let itnext = document.getElementById("f" + (i + 1).toString());
            pnext.style.display = "block";
            itnext.style.display = "block";

        }
        if (i == 5) {
            document.getElementById("h1").innerHTML = "Congratulations ";
        }
        i += 1;
    })
});

btn.addEventListener("click", function () {
    var forms = document.querySelectorAll('form');
    let ans = 0;
    for (var i = 0; i < forms.length; i++) {
        var form = forms[i];
        var result = form.querySelector('input[name="answer"]:checked');
        ans += parseInt(result.value);

    }
    console.log(ans);
    if (ans >= 4) {
        document.getElementById("result").innerText = "You have become a great teacher, doing your best to inspire students' ";
        document.getElementById("result2").innerText = "imagination and creativity. You provide different needs for different";
        document.getElementById("result3").innerText = " students, enabling them to develop their interests and have dreams of their own.";



    } else {
        document.getElementById("result").innerText = "You have taught a group of students who all scored an A in the exam, but lack imagination, creativity, and initiative.  ";
        document.getElementById("result2").innerText = "Teachers should make an effort to understand students' characteristics, inspire them, and not simply give them a pile ";
        document.getElementById("result3").innerText = "of test papers that turn them into robots that only know how to answer questions. The education system should undergo some changes."

    }
    document.getElementById("h2").innerText = "This is a world in which I believe .A world where fish are no longer forced to climb trees"
    document.getElementById("img").style.display = "block";
    document.getElementById("h3").innerText = "While students may be 20% of our population, they are 100% of our future";

    document.getElementById("btngpt").style.display = "block";
    document.getElementById("btn").style.display = "none";

})