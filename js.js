var digi_2, digi_1, digi2, _digi_, text
digi_1 = "0"
text = "0"
function Percent_sign(digi1, k) {
    var digi20, digi10, _digi
    _digi = [].indexOf.call(k.parentNode.children, k)
    digi20 = document.getElementById("digi2")
    digi10 = document.getElementById("digi1")
    digi1 = digi1.innerText
    if (text == "1") {
        if (_digi == _digi_ && _digi != 23) {
            switch (_digi) {
                case 19:
                    digi2 = digi2 + parseFloat(digi1)
                    digi20.innerText = digi2 + "+"
                    digi_1 = "0"
                    _digi_ = 19
                    // _digi__ = q
                    break;
                case 15:
                    digi2 = digi2 - parseFloat(digi1)
                    digi20.innerText = digi2 + "-"
                    digi_1 = "0"
                    _digi_ = 15
                    _digi__ = q
                    break;
                case 11:
                    digi2 = digi2 * parseFloat(digi1)
                    digi20.innerText = digi2 + "x"
                    digi_1 = "0"
                    _digi_ = 11
                    // _digi__ = q
                    break;
                case 7:
                    digi2 = digi2 / parseFloat(digi1)
                    digi20.innerText = digi2 + "÷"
                    digi_1 = "0"
                    _digi_ = 7
                    // _digi__ = q
                    break;
                case 0:
                    digi2 = parseFloat(digi1) * 0.01
                    digi20.innerText = digi2
                    digi_1 = "0"
                    _digi_ = 0
                    // _digi__ = 0
                    break;
                case 4:
                    digi2 = parseFloat(digi1) * 0.5
                    digi10.innerText = digi2
                    digi_1 = "0"
                    _digi_ = 4
                    // _digi__ = 4
                    text = "0"
                    break;
                case 5:
                    digi2 = parseFloat(digi1) * parseFloat(digi1)
                    digi10.innerText = digi2
                    digi_1 = "0"
                    _digi_ = 5
                    // _digi__ = 5
                    text = "0"
                    break;
                case 6:
                    digi2 = Math.pow(parseFloat(digi1), 0.5)
                    digi10.innerText = digi2
                    digi_1 = "0"
                    _digi_ = 6
                    // _digi__ = 6
                    text = "0"
                    break;
            }

        }
        else if (_digi == 23) {
            switch (_digi_) {
                case 19:
                    digi2 = digi2 + parseFloat(digi1)
                    digi10.innerText = digi2
                    // _digi__ = q
                    break;
                case 15:
                    digi2 = digi2 - parseFloat(digi1)
                    digi10.innerText = digi2
                    // _digi__ = q
                    break;
                case 11:
                    digi2 = digi2 * parseFloat(digi1)
                    digi10.innerText = digi2
                    // _digi__ = q
                    break;
                case 7:
                    digi2 = digi2 / parseFloat(digi1)
                    digi10.innerText = digi2
                    // _digi__ = q
                    break;
            }
            text = "0"
            digi_1 = "0"
            digi2 = 0
        }
        else if (_digi == 1) {
            digi10.innerText = "0"
            // _digi__ = q
        }
        else if (_digi == 22) {
            digi10.innerText = digi1 + "."
        }
        else if (_digi == 2) {
            digi10.innerText = "0"
            digi20.innerText = ""
            // _digi__ = q
            digi_1 = "0"
            text = "0"
            digi2 = 0
        }
        else if (_digi = 20) {
            digi10.innerText = "-" + digi1
        }
        else {
            switch (_digi_) {
                case 19:
                    digi2 = digi2 + parseFloat(digi1)
                    _digi_ = 19
                    switch (_digi) {
                        case 15:
                            digi20.innerText = digi2 + "-"
                            digi_1 = "0"
                            _digi_ = 15
                            break;
                        case 11:
                            digi20.innerText = digi2 + "x"
                            digi_1 = "0"
                            _digi_ = 11
                            break;
                        case 7:
                            digi20.innerText = digi2 + "÷"
                            digi_1 = "0"
                            _digi_ = 7
                            break;
                    }
                    // _digi__ = q
                    break;
                case 15:
                    digi2 = digi2 - parseFloat(digi1)
                    _digi_ = 15
                    switch (_digi) {
                        case 19:
                            digi20.innerText = digi2 + "+"
                            digi_1 = "0"
                            _digi_ = 19
                            break;
                        case 11:
                            digi20.innerText = digi2 + "x"
                            digi_1 = "0"
                            _digi_ = 11
                            break;
                        case 7:
                            digi20.innerText = digi2 + "÷"
                            digi_1 = "0"
                            _digi_ = 7
                            break;
                    }
                    // _digi__ = q
                    break;
                case 11:
                    digi2 = digi2 * parseFloat(digi1)
                    _digi_ = 11
                    switch (_digi) {
                        case 19:
                            digi20.innerText = digi2 + "+"
                            digi_1 = "0"
                            _digi_ = 19
                            break;
                        case 15:
                            digi20.innerText = digi2 + "-"
                            digi_1 = "0"
                            _digi_ = 15
                            break;
                        case 7:
                            digi20.innerText = digi2 + "÷"
                            digi_1 = "0"
                            _digi_ = 7
                            break;
                    }
                    // _digi__ = q
                    break;
                case 7:
                    digi2 = digi2 / parseFloat(digi1)
                    _digi_ = 7
                    switch (_digi) {
                        case 19:
                            digi20.innerText = digi2 + "+"
                            digi_1 = "0"
                            _digi_ = 19
                            break;
                        case 15:
                            digi20.innerText = digi2 + "-"
                            digi_1 = "0"
                            _digi_ = 15
                            break;
                        case 11:
                            digi20.innerText = digi2 + "x"
                            digi_1 = "0"
                            _digi_ = 11
                            break;
                    }
                    // _digi__ = q
                    break;
            }
        }
    }
    else {
        switch (_digi) {
            case 19:
                digi20.innerText = digi1 + "+"
                digi2 = parseFloat(digi1)
                digi_1 = "0"
                _digi_ = 19
                text = "1"
                break;
            case 15:
                digi20.innerText = digi1 + "-"
                digi2 = parseFloat(digi1)
                digi_1 = "0"
                _digi_ = 15
                text = "1"
                break;
            case 11:
                digi20.innerText = digi1 + "x"
                digi2 = parseFloat(digi1)
                digi_1 = "0"
                _digi_ = 11
                text = "1"
                break;
            case 7:
                digi20.innerText = digi1 + "÷"
                digi2 = parseFloat(digi1)
                digi_1 = "0"
                _digi_ = 7
                text = "1"
                break;
            case 0:
                digi2 = parseFloat(digi1) * 0.01
                digi10.innerText = digi2
                digi_1 = "0"
                _digi_ = 0
                // _digi__ = 0
                text = "0"
                break;
            case 1:
                digi10.innerText = "0"
                break;
            case 2:
                digi10.innerText = "0"
                digi20.innerText = ""
                digi_1 = "0"
                text = "0"
                digi2 = 0
                break;
            case 4:
                digi2 = parseFloat(digi1) * 0.5
                digi10.innerText = digi2
                digi_1 = "0"
                _digi_ = 4
                // _digi__ = 4
                text = "0"
                break;
            case 5:
                digi2 = parseFloat(digi1) * parseFloat(digi1)
                digi10.innerText = digi2
                digi_1 = "0"
                _digi_ = 5
                // _digi__ = 5
                text = "0"
                break;
            case 6:
                digi2 = Math.pow(parseFloat(digi1), 0.5)
                digi10.innerText = digi2
                digi_1 = "0"
                _digi_ = 6
                // _digi__ = 6
                text = "0"
                break;
            case 20:
                digi10.innerText = "-" + digi1
                break;
            case 22:
                digi10.innerText = digi1 + "."
                break;
        }
    }
    console.log(_digi)
}
function digit_fun(k) {
    var digi1, digi10
    digi10 = document.getElementById("digi1")
    digi1 = digi10.innerText
    if (digi_1 == "0") {
        digi1 = "" + k
        digi10.innerText = digi1
        digi_1 = "1"
    }
    else {
        digi1 = digi1 + k
        digi10.innerText = digi1
    }
    return digi1
}