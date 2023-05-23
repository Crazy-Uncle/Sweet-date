function animate(obj, posit, callback) {
    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        //步长值写到定时器里面

        let step = (posit - obj.offsetLeft) / 10
        //
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        if (obj.offsetLeft == posit) {
            clearInterval(obj.timer)

            // if (callback) {
            //     callback()
            // }
            callback && callback()
        } else {


            obj.style.left = obj.offsetLeft + step + 'px'
        }
    }, 3000)
}