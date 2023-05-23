
let silderLastImg = document.querySelector('.silderLastImg')
let ul = document.querySelector('.bottomLast')
let li = document.querySelector('.bottom_li')


let list = document.querySelector('.list').children


let li_w = li.offsetWidth
// console.log(li_w);
let times = setInterval(animateTimes, 3000)
let num = 0

//轮播图
function animateTimes() {

    if (num == 3) {
        ul.style.left = 0
        num = 1
    } else {
        ul.style.left = -li_w * num + "px"
        // console.log(num);
        // console.log(num);
        num++
    }

    //     // console.log(li[i]);

}


// 鼠标经过事件

for (let i = 0; i < list.length; i++) {


    let index = i


    list[i].setAttribute('index', index)
    list[i].addEventListener('mouseover', function () {
        let cnt = list[i].getAttribute('index') * li_w
        // console.log(cnt);
        ul.style.left = -cnt + 'px'


        if (list[i].getAttribute('index') == '0') {
            list[i].src = "./images/txt_111.jpg"
            list[1].src = './images/txt_222_2.jpg'
            list[2].src = "./images/txt_333_3.jpg"

        } else if (list[i].getAttribute('index') == '1') {
            list[i].src = "./images/txt_222.jpg"
            list[0].src = "./images/txt_111_1.jpg"
            list[2].src = "./images/txt_333_3.jpg"

        } else {
            list[i].src = "./images/txt_333.jpg"
            list[1].src = './images/txt_222_2.jpg'
            list[0].src = "./images/txt_111_1.jpg"
        }


        //图片更换
    }

    )



}





