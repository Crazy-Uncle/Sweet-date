window.onload = function () {

    let btn = document.querySelector('.function').children

    let silderImg = document.querySelector('.silderImg')
    let li = document.querySelector('.silderImg').children
    let liWidth = document.querySelector('.li_wide')

    let silder = document.querySelector('.silder')

    let body = document.querySelector('body')

    let bw = body.offsetWidth
    // console.log(bw);
    console.log(document.body.offsetWidth);

    let li_w = liWidth.offsetWidth
    console.log(li_w);
    let timer = setInterval(animateTime, 3000)
    let num = 0


    let s = silder.style.width = bw + 'px'
    console.log(s);
    for (let i = 0; i < li.length; i++) {
        li[i].style.width = bw + 'px'
        console.log(li[i]);
    }



    //轮播图
    function animateTime() {

        if (num == 3) {
            silderImg.style.left = 0
            num = 1

        } else {
            silderImg.style.left = -bw * num + "px"
            // console.log(num);
            num++
        }

        //     // console.log(li[i]);

    }
    // clearInterval(timer)
    // console.log(btn);

    //滑块

    for (let i = 0; i < btn.length; i++) {



        // console.log(btn[i]);
        let index = i


        // btn[i].removeAttribute('id')

        li[i].setAttribute('index', index)
        btn[i].setAttribute('index', index)
        index++

        // btn.children[i].className = ''

        // btn[i].className = ''


        btn[i].addEventListener('click', function () {
            // console.log(btn[i].getAttribute('index'));
            // console.log(btn[i].getAttribute('index') * li_w);
            let count = btn[i].getAttribute('index') * -bw
            // console.log(count);
            silderImg.style.left = count + "px"


            //排它算法
            // console.log(btn[i]);

            for (let j = 0; j < btn.length; j++) {
                btn[j].className = ''
                // console.log(btn[j]);
            }
            btn[i].className = 'btn'
        })

    }



    silder.addEventListener('mouseover', mouse)
    silder.addEventListener('mouseout', out)

    let flag = true
    function mouse() {
        if (flag == true) {
            clearInterval(timer)
            flag = false
            // console.log(1);
        } else {

            // console.log(2);
        }


    }


    function out() {
        if (flag == false) {
            timer = setInterval(animateTime, 3000)
            flag = true
            // console.log(2);
        }
    }




}