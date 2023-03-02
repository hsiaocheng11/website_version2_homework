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
        if (i == 3) {
            document.getElementById("h1").innerHTML = "Please click button";
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
    if (ans == 3) {
        document.getElementById("result").innerText = "You already have some opinion about recent school education system";
    } else {
        document.getElementById("result").innerText = "You can watch the video to understand why recent school education system is wrong";
        document.getElementById("img").style.display = "block";
    }


    document.getElementById("next").innerHTML = `<a href="page2.html">next part</a>`;
    document.getElementById("next").style.display = "block";
    document.getElementById("btn").style.display = "none";
})