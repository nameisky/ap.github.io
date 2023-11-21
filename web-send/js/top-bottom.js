var queuing = -1;
var _ = -1;
var y0;
var y_0;
var width = document.documentElement.clientWidth
function XY(element) {
    //计算x坐标
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;
    while (current !== null) {
        actualLeft += (current.offsetLeft + current.clientLeft);
        current = current.offsetParent;
    }
    if (document.compatMode == "BackCompat") {
        var elementScrollLeft = document.body.scrollLeft;
    } else {
        var elementScrollLeft = document.documentElement.scrollLeft;
    }
    var left = actualLeft - elementScrollLeft;
    //计算y坐标
    var actualTop = element.offsetTop;
    var current = element.offsetParent;
    while (current !== null) {
        actualTop += (current.offsetTop + current.clientTop);
        current = current.offsetParent;
    }
    if (document.compatMode == "BackCompat") {
        var elementScrollTop = document.body.scrollTop;
    } else {
        var elementScrollTop = document.documentElement.scrollTop;
    }
    var right = actualTop - elementScrollTop;
    //返回结果
    return { x: left, y: right }
}
function fun_top_query() {
    var height = width / 25.44
    var body = document.getElementById("body")
    var keyframes = document.styleSheets
    var box_border = document.querySelector(".box-border")
    var icon_gntd = document.getElementsByClassName("icon-gntd")[0]
    var arrowhead = document.getElementsByClassName("arrowhead")
    var top_text = document.getElementsByClassName("top-text")
    var top_drop_down = document.getElementsByClassName("top-drop-down")[0]
    var _0 = document.getElementsByClassName("_0")
    var _1 = document.getElementsByClassName("_1")
    var size = document.getElementsByClassName("size")
    return { height, body, keyframes, box_border, icon_gntd, arrowhead, top_text, top_drop_down, _0, _1, size }
}
top_query = fun_top_query()
function top_use() {
    top_query["body"].style.fontSize = "calc(" + width + "px / 100)"
    top_query["box_border"].style.cssText = "height:" + top_query["height"] + "px;line-height:" + top_query["height"] + "px;font-size:calc(" + width + "px / 90);border-bottom:calc(1272px / 100000) #4D5259 solid"
    top_query["icon_gntd"].style.cssText = "font-size:calc(" + width + "px / 90)"
    top_query["top_drop_down"].style.cssText = "width:" + width / 6.3 + "px;font-size:calc(" + width + "px / 90);"
}
function fun_background_text(e, a) {
    var y = [].indexOf.call(e.parentNode.children, e)
    y0 = y
    if (a == true && y != 6) {
        top_query["top_drop_down"].addEventListener("mouseover", function () {
            top_query["top_text"][y].getElementsByTagName("div")[0].style.animationName = "background-text"
            top_query["arrowhead"][y0 - 1].style.animationName = "arrowhead-top"
            top_query["top_drop_down"].style.animationName = "top-drop-down"
        })
        top_query["top_text"][y].getElementsByTagName("div")[0].style.cssText = "animation-name: background-text;display: block;"
    }
    else if (a == false && y != 6) {
        top_query["top_drop_down"].addEventListener("mouseout", function () {
            top_query["top_text"][y].getElementsByTagName("div")[0].style.animationName = "background-text2"
            top_query["arrowhead"][y0 - 1].style.animationName = "arrowhead-buttom"
            top_query["top_drop_down"].style.animationName = "top-drop-down2"
        })
        top_query["top_text"][y].getElementsByTagName("div")[0].style.animationName = "background-text2"
        fun_queuing(y, 0)
    }
    if (y == 1 || y == 2 || y == 3) {
        y_0 = y
        fun_arrowhead(y, a)
    }
}
function fun_arrowhead(y, a) {
    if (a == true) {
        top_query["arrowhead"][y - 1].style.animationName = "arrowhead-top"
        fun_top_drop_down(y, a)
    }
    else if (a == false) {
        top_query["arrowhead"][y - 1].style.animationName = "arrowhead-buttom"
        fun_queuing(y, 1)
        fun_top_drop_down(y, a)
    }
}
function fun_for_add() {
    for (var i = 0; i < top_query["top_text"].length; i++) {
        top_query["top_text"][i].addEventListener("mouseover", function () {
            fun_background_text(this, true)
        })
        top_query["top_text"][i].addEventListener("mouseout", function () {
            fun_background_text(this, false)
        })
    }
    for (var i = 0; i < top_query["arrowhead"].length; i++) {
        top_query["arrowhead"][i].style.cssText = "width:calc(" + width + "px / 150);margin-top:calc(" + width + "px / 62);margin-right:10%"
    }
    for (var i = 0; i < top_query["_1"].length; i++) {
        top_query["_1"][i].style.marginTop = "calc((" + width + "px / 6.3) / 25)"
    }
    for (var i = 0; i < top_query["_1"].length; i++) {
        top_query["_1"][i].addEventListener("mouseover", function () {
            fun_drop_down_img(this, true)
        })
        top_query["_1"][i].addEventListener("mouseout", function () {
            fun_drop_down_img(this, false)
        })
    }
    for (var i = 0; i < top_query["size"].length; i++) {
        top_query["size"][i].style.cssText = "font-size:calc(" + width + "px / 140);"
    }
    window.addEventListener("scroll", function () {
        if (XY(top_query["box_border"])["y"] != 0) {
            top_query["box_border"].style.background = "rgba(4,14,32,0.9)"
        }
        else {
            top_query["box_border"].style.background = ""
        }
    })
}
function fun_queuing(y, k) {
    if (queuing == -1) {
        queuing = y
    }
    else {
        if (k == 0) {
            if (queuing != y) {
                top_query["top_text"][queuing].getElementsByTagName("div")[0].style = ""
                queuing = y
            }
        }
        else if (k == 1) {
            if (queuing != y) {
                top_query["arrowhead"][y - 1].style.animationName = ""
                queuing = y
            }
        }
    }
}
function fun_top_drop_down(y, a) {
    var top_ = top_query["top_drop_down"].style
    if (a == true) {
        top_.left = XY(top_query["top_text"][y])["x"] + "px"
        top_.top = top_query["height"] + "px"
        if (_ !== -1) {
            top_query["_0"][_].style.display = "none"
        }
        top_query["_0"][y - 1].style.display = "block"
        _ = y - 1
        fun_keyframes(y - 1)
        top_.animationName = "top-drop-down"
    }
    if (a == false) {
        top_.animationName = "top-drop-down2"
    }
}
function fun_keyframes(y) {
    var list = fun_height(top_query["_0"])
    for (var i = 0; i < top_query["keyframes"].length; i++) {
        if (top_query["keyframes"][i].ownerNode.nodeName == "STYLE") {
            top_query["keyframes"][i].cssRules[0].findRule("100%").style.height = "" + list[y] + "px";
            top_query["keyframes"][i].cssRules[1].findRule("0%").style.height = "" + list[y] + "px"
        }
    }
}
function fun_height(e) {
    list = []
    for (var i = 0; i < e.length; i++) {
        list[i] = e[i].offsetHeight
    }
    return list
}
function fun_drop_down_img(e, tf) {
    var y = [].indexOf.call(e.parentNode.children, e)
    imgsrc = top_query["_0"][y_0 - 1].getElementsByClassName("_1")[y].getElementsByTagName("img")[0]
    listt0 = ["web-send/images/sfwl-icon-h.png", "web-send/images/jszd-icon-h.png"]
    listf0 = ["web-send/images/sfwl-icon.png", "web-send/images/jszd-icon.png"]
    listt1 = ["web-send/images/znjy-icon-h.png", "web-send/images/zncs-icon-h.png", "web-send/images/znOther-icon-h.png", "web-send/images/xzzf-icon-h.png"]
    listf1 = ["web-send/images/znjy-icon.png", "web-send/images/zncs-icon.png", "web-send/images/znOther-icon.png", "web-send/images/xzzf-icon.png"]
    listt2 = ["web-send/images/gzzd-icon-h.png", "web-send/images/jszd-icon-h.png", "web-send/images/znOther-icon-h.png"]
    listf2 = ["web-send/images/gzzd-icon.png", "web-send/images/jszd-icon.png", "web-send/images/znOther-icon.png"]
    if (tf == true) {
        if (y_0 == 1) {
            imgsrc.src = listt0[y]
        }
        else if (y_0 == 2) {
            imgsrc.src = listt1[y]
        }
        else if (y_0 == 3) {
            imgsrc.src = listt2[y]
        }
    }
    else {
        if (y_0 == 1) {
            imgsrc.src = listf0[y]
        }
        else if (y_0 == 2) {
            imgsrc.src = listf1[y]
        }
        else if (y_0 == 3) {
            imgsrc.src = listf2[y]
        }
    }

}
top_use()
fun_for_add()
