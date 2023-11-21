var img_index = 0;
var width = document.documentElement.scrollWidth
function fun_get() {
    var body_max_box = document.getElementsByClassName("body-max-box")[0]
    var body_div = document.getElementsByClassName("body-div")
    var quadrilateral_box = document.getElementsByClassName("quadrilateral-box")[0]
    var quadrilateral = document.getElementsByClassName("quadrilateral")
    var top_text_size1 = document.getElementsByClassName("top-text-size1")
    var top_text_size2 = document.getElementsByClassName("top-text-size2")
    var host2 = document.getElementsByClassName("host2")[0]
    var host2_bottom_div = document.getElementsByClassName("host2-bottom")[0].getElementsByTagName("div")
    var host2_bottom_img = document.getElementsByClassName("host2-bottom-img")
    var host2_bottom_text2 = document.getElementsByClassName("host2-bottom-text2")
    return {
        body_max_box, body_div, quadrilateral_box, quadrilateral, top_text_size1, top_text_size2, host2, host2_bottom_div,
        host2_bottom_img, host2_bottom_text2
    }
}
function fun_ininial() {
    fun_img_roll()
    get["host2"].style.height = "calc(" + width + "px / 3.5)"
    get["body_max_box"].style.cssText = "width:" + width * get["body_div"].length + "px;height:calc(" + width + "px / 2.7)"
    get["quadrilateral_box"].style.top = "calc((" + width + "px / 2.7) - 3%)"
}
function fun_add() {
    for (var i = 0; i < get["quadrilateral"].length; i++) {
        get["quadrilateral"][i].addEventListener("click", function () {
            fun_quadrilateral_add(this)
        })
    }
    for (var i = 0; i < get["top_text_size1"].length; i++) {
        get["top_text_size1"][i].style.fontSize = "calc(" + width + "px / 40)"
    }
    for (var i = 0; i < get["top_text_size2"].length; i++) {
        get["top_text_size2"][i].style.fontSize = "calc(" + width + "px / 100)"
    }
    for (var i = 0; i < get["host2_bottom_div"].length; i++) {
        get["host2_bottom_div"][i].addEventListener("mouseover", function () {
            fun_host2_bottom_img(this, true)
        })
        get["host2_bottom_div"][i].addEventListener("mouseout", function () {
            fun_host2_bottom_img(this, false)
        })
    }
    for (var i = 0; i < get["host2_bottom_text2"].length; i++) {
        get["host2_bottom_text2"][i].style.fontSize = "calc(" + width + "px / 150)"
    }
}
function fun_img_roll() {
    setInterval(function () {
        fun_quadrilateral(true, img_index)
        img_index = (img_index + 1) % img_count
        get["body_max_box"].style.transform = "translateX(-" + width * img_index + "px)"
        fun_quadrilateral(false, img_index)
    }, 3000)
}
function fun_quadrilateral(tf, index) {
    if (index >= 0) {
        if (tf == true) {
            get["quadrilateral"][index].style.background = ""
        }
        else {
            get["quadrilateral"][index].style.background = "#fff"
        }
    }
}
function fun_quadrilateral_add(e) {
    var y = [].indexOf.call(e.parentNode.children, e)
    fun_quadrilateral(true, img_index)
    img_index = y - 1
    img_index = (img_index + 1) % img_count
    get["body_max_box"].style.transform = "translateX(-" + width * img_index + "px)"
    fun_quadrilateral(false, img_index)
}
function fun_host2_bottom_img(e, tf) {
    var y = [].indexOf.call(e.parentNode.children, e)
    var img = document.getElementsByClassName("host2-bottom-img")[y]
    if (tf == true) {
        img.style.animationName = "host2-bottom-img"
    }
    else {
        img.style.animationName = ""
    }
}
var get = fun_get()
var img_count = get["body_div"].length
fun_ininial()
fun_add()