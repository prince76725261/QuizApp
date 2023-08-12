var e = document.getElementById('st_btn');

e.addEventListener('click', (e) => {
    e.preventDefault();
    var cat = document.getElementById('category');
    var c = cat.value;
    var lev = document.getElementById('level');
    var l = lev.value;
    fetch(`https://opentdb.com/api.php?amount=10&category=${c}&difficulty=${l}&type=multiple`)
        .then((response) => response.json())
        .then((value) => {
            //console.log(value);
            var ans = [Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1)];
            var que = document.getElementsByClassName('head');
            var opt = document.getElementsByClassName('option');

            for (let i = 0; i < que.length; i++) {
                let k = 0;
                que[i].innerHTML = value.results[i].question;
                for (let j = i * 4; j < (i * 4) + 4; j++) {
                    if (j - (i * 4) + 1 !== ans[i]) {
                        opt[j].innerHTML = value.results[i].incorrect_answers[k];
                        k++;
                    }
                    else {
                        opt[j].innerHTML = value.results[i].correct_answer;
                    }
                }
            }

            var sub = document.getElementById('bton');
            sub.addEventListener('click', function (e) {
                //console.log(ans);
                var c = 0;
                e.preventDefault();
                let ele = document.getElementsByClassName('inp');
                let q = document.getElementsByClassName('head');
                //console.log(ele);
                for (let i = 0; i < ele.length; i++)
                    if (ele[i].checked === true)
                        c++;
                if (c !== q.length) {
                    alert("Please answer all the questions!!");
                    c = 0;
                }
                else {
                    var count = 0;
                    for (let i = 0; i < q.length; i++) {
                        for (let j = i * 4; j < (i * 4) + 4; j++) {
                            if (j - (i * 4) + 1 === ans[i] && ele[j].checked === true) {
                                count++;
                            }
                        }
                    }
                    let s = 0;
                    let btn = document.getElementById('Result');
                    btn.style.cssText = 'display: block;';
                    let d = document.getElementById('res');
                    let k = "";
                    k += "<li>" + "Your total score : " + count + "</li>";
                    k += "<li>" + "Your Accuracy : " + count * 10 + "%</li>";
                    d.addEventListener('click', function () {
                        let res = document.getElementById('hide_res');
                        if (s === 0) {
                            res.style.cssText = 'display: block;';
                            res.innerHTML = k;
                        }
                    });

                }

            });

            var s = "";
            for (let i = 0; i < que.length; i++) {
                s += "<li>" + value.results[i].correct_answer + "</li>";
            }
            let a = document.getElementById('ans');
            a.addEventListener('click', function () {
                let prb = document.getElementById('hide_ans');
                let b = document.getElementById('hide_ques');
                b.style.cssText = 'display: block;';
                prb.innerHTML = s;
            })


        });
});

// var xhr = new XMLHttpRequest();
// xhr.open('GET','https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple',true);
// xhr.onload = ()=>{
//     if(xhr.status===200) {
//         var obj = JSON.parse(xhr.responseText);
//         console.log(obj);
//     }                                                                     
//     else
//     console.log('file not found');
// }
// xhr.send();

