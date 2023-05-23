let silderBottom = document.querySelector('.silderBottom')

let bottomImg = document.querySelector('.bottomImg')
let widthImg = document.querySelector('.widthImg')
let lis = document.querySelector('.bottomImg').children
let liwidth = widthImg.offsetWidth + 50
let lastImg = document.querySelector('.imgLast')
// console.log(liwidth);

let cunt = 0

// bottomImg.appendChild(lis[0].cloneNode(true))
let timer = setInterval(autoplay


    , 3000)


function autoplay() {

    cunt++

    if (cunt > 4) {
        cunt = 0
        bottomImg.style.left = 0

        // clearInterval(timer)
        // console.log(cunt);
    } else {
        bottomImg.style.left = -295 * cunt + 'px'
        // setInterval(autoplay, 3000)
        // console.log(cunt);
    }
}



// 鼠标经过事件


bottomImg.addEventListener('mouseover', mouse)
bottomImg.addEventListener('mouseout', out)

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
        timer = setInterval(autoplay, 3000)
        flag = true
        // console.log(2);
    }
}












