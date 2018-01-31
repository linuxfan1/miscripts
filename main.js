
var currentversion = "v3.5"
var redirectlocation = ""
var windowlocation = ""
var period = ""
var pdurl1 = "https://classroom.google.com/u/0/c/" + getCookie('period1');
var pdurl2 = "https://classroom.google.com/u/0/c/" + getCookie('period2');
var pdurl3 = "https://classroom.google.com/u/0/c/" + getCookie('period3');
var pdurl4 = "https://classroom.google.com/u/0/c/" + getCookie('period4');
var pdurl5 = "https://classroom.google.com/u/0/c/" + getCookie('period5');
var pdurl6 = "https://classroom.google.com/u/0/c/" + getCookie('period6');
var pdurl7 = "https://classroom.google.com/u/0/c/" + getCookie('period7');
var pdurl8 = "https://classroom.google.com/u/0/c/" + getCookie('period8');
var pdurl9 = "https://classroom.google.com/u/0/c/" + getCookie('period9');
var pdurl10 = "https://classroom.google.com/u/0/c/" + getCookie('period10');
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function firstrunFunction() {
    document.getElementById('pd1').value = getCookie("period1")
    document.getElementById('pd2').value = getCookie("period2")
    document.getElementById('pd3').value = getCookie("period3")
    document.getElementById('pd4').value = getCookie("period4")
    document.getElementById('pd5').value = getCookie("period5")
    document.getElementById('pd6').value = getCookie("period6")
    document.getElementById('pd7').value = getCookie("period7")
    document.getElementById('pd8').value = getCookie("period8")
    document.getElementById('pd9').value = getCookie("period9")
    document.getElementById('pd10').value = getCookie("period10")
    document.getElementById('Pdls').className = "firstrun";
}
function firstrunFunction2() {
    var pdv1 = document.getElementById('pd1').value
    var pdv2 = document.getElementById('pd2').value
    var pdv3 = document.getElementById('pd3').value
    var pdv4 = document.getElementById('pd4').value
    var pdv5 = document.getElementById('pd5').value
    var pdv6 = document.getElementById('pd6').value
    var pdv7 = document.getElementById('pd7').value
    var pdv8 = document.getElementById('pd8').value
    var pdv9 = document.getElementById('pd9').value
    var pdv10 = document.getElementById('pd10').value
    document.cookie = "firstrun=" + currentversion + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    document.cookie = "period1=" + pdv1 + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    document.cookie = "period2=" + pdv2 + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    document.cookie = "period3=" + pdv3 + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    document.cookie = "period4=" + pdv4 + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    document.cookie = "period5=" + pdv5 + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    document.cookie = "period6=" + pdv6 + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    document.cookie = "period7=" + pdv7 + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    document.cookie = "period8=" + pdv8 + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    document.cookie = "period9=" + pdv9 + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    document.cookie = "period10=" + pdv10 + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    if (document.getElementById('period1typescience').checked == true) {
        document.cookie = "period1type=science; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period1typemath').checked == true) {
        document.cookie = "period1type=math; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period1typeother').checked == true) {
        document.cookie = "period1type=other; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period1typecustom').checked == true) {
        document.cookie = "period1type=custom; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
        document.cookie = "period1customurl=" + document.getElementById('period1customurl').value + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else {
        document.cookie = "period1type=other; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    }
    if (document.getElementById('period2typemath').checked == true) {
        document.cookie = "period2type=math; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period2typescience').checked == true) {
        document.cookie = "period2type=science; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period2typeother').checked == true) {
        document.cookie = "period2type=other; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period2typecustom').checked == true) {
        document.cookie = "period2type=custom; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
        document.cookie = "period2customurl=" + document.getElementById('period2customurl').value + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else {
        document.cookie = "period2type=other; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    }
    if (document.getElementById('period3typemath').checked == true) {
        document.cookie = "period3type=math; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period3typescience').checked == true) {
        document.cookie = "period3type=science; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period3typeother').checked == true) {
        document.cookie = "period3type=other; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period3typecustom').checked == true) {
        document.cookie = "period3type=custom; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
        document.cookie = "period3customurl=" + document.getElementById('period3customurl').value + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else {
        document.cookie = "period3type=other; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    }
    if (document.getElementById('period4typemath').checked == true) {
        document.cookie = "period4type=math; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period4typescience').checked == true) {
        document.cookie = "period4type=science; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period4typeother').checked == true) {
        document.cookie = "period4type=other; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period4typecustom').checked == true) {
        document.cookie = "period4type=custom; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
        document.cookie = "period4customurl=" + document.getElementById('period4customurl').value + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else {
        document.cookie = "period4type=other; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    }
    if (document.getElementById('period5typemath').checked == true) {
        document.cookie = "period5type=math; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period5typescience').checked == true) {
        document.cookie = "period5type=science; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period5typeother').checked == true) {
        document.cookie = "period5type=other; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period5typecustom').checked == true) {
        document.cookie = "period5type=custom; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
        document.cookie = "period5customurl=" + document.getElementById('period5customurl').value + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else {
        document.cookie = "period5type=other; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    }
    if (document.getElementById('period6typemath').checked == true) {
        document.cookie = "period6type=math; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period6typescience').checked == true) {
        document.cookie = "period6type=science; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period6typeother').checked == true) {
        document.cookie = "period6type=other; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period6typecustom').checked == true) {
        document.cookie = "period6type=custom; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
        document.cookie = "period6customurl=" + document.getElementById('period6customurl').value + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else {
        document.cookie = "period6type=other; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    }
    if (document.getElementById('period7typemath').checked == true) {
        document.cookie = "period7type=math; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period7typescience').checked == true) {
        document.cookie = "period7type=science; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period7typeother').checked == true) {
        document.cookie = "period7type=other; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period7typecustom').checked == true) {
        document.cookie = "period7type=custom; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
        document.cookie = "period7customurl=" + document.getElementById('period7customurl').value + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else {
        document.cookie = "period7type=other; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    }
    if (document.getElementById('period8typemath').checked == true) {
        document.cookie = "period8type=math; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period8typescience').checked == true) {
        document.cookie = "period8type=science; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period8typeother').checked == true) {
        document.cookie = "period8type=other; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period8typecustom').checked == true) {
        document.cookie = "period8type=custom; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
        document.cookie = "period8customurl=" + document.getElementById('period8customurl').value + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else {
        document.cookie = "period8type=other; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    }
    if (document.getElementById('period9typemath').checked == true) {
        document.cookie = "period9type=math; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period9typescience').checked == true) {
        document.cookie = "period9type=science; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period9typeother').checked == true) {
        document.cookie = "period9type=other; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period9typecustom').checked == true) {
        document.cookie = "period9type=custom; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
        document.cookie = "period9customurl=" + document.getElementById('period9customurl').value + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else {
        document.cookie = "period9type=other; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    }
    if (document.getElementById('period10typemath').checked == true) {
        document.cookie = "period10type=math; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period10typescience').checked == true) {
        document.cookie = "period10type=science; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period10typeother').checked == true) {
        document.cookie = "period10type=other; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period10typecustom').checked == true) {
        document.cookie = "period10type=custom; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
        document.cookie = "period10customurl=" + document.getElementById('period10customurl').value + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else {
        document.cookie = "period10type=other; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    }
    location.reload()
}
function pageLoad() {
    if (getCookie('firstrun') == "") {
        document.getElementById('Status').innerHTML = "Please complete the first run setup below."
        return firstrunFunction();
    } else if (getCookie('firstrun') != "") {
        if (getCookie('firstrun') != currentversion) {
            document.getElementById('Status').innerHTML = "TBC " + getCookie('firstrun') + " detected. The current version is " + currentversion + ", please recomplete the form."
            return firstrunFunction();
        } else {
            return classroomLoad();
        }
    }
}
function period1() {
    period = "1st"
    if (getCookie('period1type') != '') {
        redirectlocation = pdurl1
        if (getCookie('period1type') == 'math') {
            windowlocation = 'https://www.pearsonsuccessnet.com/'
            return visibility();
        } else if (getCookie('period1type') == 'science') {
            windowlocation = 'https://my.hrw.com/'
            return visibility();
        } else if (getCookie('period1type') == 'custom') {
            redirectlocation = getCookie('period1customurl')
            return visibility();
        } else {
            return visibility();
        }
    } else {
        redirectlocation = pdurl1
    }
}
function period2() {
    period = "2nd"
    if (getCookie('period2type') != '') {
        redirectlocation = pdurl2
        if (getCookie('period2type') == 'math') {
            windowlocation = 'https://www.pearsonsuccessnet.com/'
            return visibility();
        } else if (getCookie('period2type') == 'science') {
            windowlocation = 'https://my.hrw.com/'
            return visibility();
        } else if (getCookie('period2type') == 'custom') {
            redirectlocation = getCookie('period2customurl')
            return visibility();
        } else {
            return visibility();
        }
    } else {
        redirectlocation = pdurl2
    }
}
function period3() {
    period = "3rd"
    if (getCookie('period3type') != '') {
        redirectlocation = pdurl3
        if (getCookie('period3type') == 'math') {
            windowlocation = 'https://www.pearsonsuccessnet.com/'
            return visibility();
        } else if (getCookie('period3type') == 'science') {
            windowlocation = 'https://my.hrw.com/'
            return visibility();
        } else if (getCookie('period3type') == 'custom') {
            redirectlocation = getCookie('period3customurl')
            return visibility();
        } else {
            return visibility();
        }
    } else {
        redirectlocation = pdurl3
    }
}
function period4() {
    period = "4th"
    if (getCookie('period4type') != '') {
        redirectlocation = pdurl4
        if (getCookie('period4type') == 'math') {
            windowlocation = 'https://www.pearsonsuccessnet.com/'
            return visibility();
        } else if (getCookie('period4type') == 'science') {
            windowlocation = 'https://my.hrw.com/'
            return visibility();
        } else if (getCookie('period4type') == 'custom') {
            redirectlocation = getCookie('period4customurl')
            return visibility();
        } else {
            return visibility();
        }
    } else {
        redirectlocation = pdurl4
    }
}
function period5() {
    period = "5th"
    if (getCookie('period5type') != '') {
        redirectlocation = pdurl5
        if (getCookie('period5type') == 'math') {
            windowlocation = 'https://www.pearsonsuccessnet.com/'
            return visibility();
        } else if (getCookie('period5type') == 'science') {
            windowlocation = 'https://my.hrw.com/'
            return visibility();
        } else if (getCookie('period5type') == 'custom') {
            redirectlocation = getCookie('period5customurl')
            return visibility();
        } else {
            return visibility();
        }
    } else {
        redirectlocation = pdurl5
    }
}
function period6() {
    period = "6th"
    if (getCookie('period6type') != '') {
        redirectlocation = pdurl6
        if (getCookie('period6type') == 'math') {
            windowlocation = 'https://www.pearsonsuccessnet.com/'
            return visibility();
        } else if (getCookie('period6type') == 'science') {
            windowlocation = 'https://my.hrw.com/'
            return visibility();
        } else if (getCookie('period6type') == 'custom') {
            redirectlocation = getCookie('period6customurl')
            return visibility();
        } else {
            return visibility();
        }
    } else {
        redirectlocation = pdurl6
    }
}
function period7() {
    period = "7th"
    if (getCookie('period7type') != '') {
        redirectlocation = pdurl7
        if (getCookie('period7type') == 'math') {
            windowlocation = 'https://www.pearsonsuccessnet.com/'
            return visibility();
        } else if (getCookie('period7type') == 'science') {
            windowlocation = 'https://my.hrw.com/'
            return visibility();
        } else if (getCookie('period7type') == 'custom') {
            redirectlocation = getCookie('period7customurl')
            return visibility();
        } else {
            return visibility();
        }
    } else {
        redirectlocation = pdurl7
    }
}
function period8() {
    period = "8th"
    if (getCookie('period8type') != '') {
        redirectlocation = pdurl8
        if (getCookie('period8type') == 'math') {
            windowlocation = 'https://www.pearsonsuccessnet.com/'
            return visibility();
        } else if (getCookie('period8type') == 'science') {
            windowlocation = 'https://my.hrw.com/'
            return visibility();
        } else if (getCookie('period8type') == 'custom') {
            redirectlocation = getCookie('period8customurl')
            return visibility();
        } else {
            return visibility();
        }
    } else {
        redirectlocation = pdurl8
    }
}
function period9() {
    period = "9th"
    if (getCookie('period9type') != '') {
        redirectlocation = pdurl9
        if (getCookie('period9type') == 'math') {
            windowlocation = 'https://www.pearsonsuccessnet.com/'
            return visibility();
        } else if (getCookie('period9type') == 'science') {
            windowlocation = 'https://my.hrw.com/'
            return visibility();
        } else if (getCookie('period9type') == 'custom') {
            redirectlocation = getCookie('period9customurl')
            return visibility();
        } else {
            return visibility();
        }
    } else {
        redirectlocation = pdurl9
    }
}
function period10() {
    period = "10th"
    if (getCookie('period10type') != '') {
        redirectlocation = pdurl10
        if (getCookie('period10type') == 'math') {
            windowlocation = 'https://www.pearsonsuccessnet.com/'
            return visibility();
        } else if (getCookie('period10type') == 'science') {
            windowlocation = 'https://my.hrw.com/'
            return visibility();
        } else if (getCookie('period10type') == 'custom') {
            redirectlocation = getCookie('period10customurl')
            return visibility();
        } else {
            return visibility();
        }
    } else {
        redirectlocation = pdurl10
    }
}
function visibility() {
        document.getElementById('confirmation').style.visibility = "visible";
        document.getElementById('confirmationtext').innerHTML =  "Press 'Ok' to continue to the " + period + " period classroom."
    if (redirectlocation == "https://classroom.google.com/u/0/c/" || redirectlocation == "") {
        document.getElementById('confirmation').style.visibility = "visible";
        document.getElementById("confirmationbutton").style.visibility = "hidden";
        document.getElementById("confirmationtext").innerHTML = "No code was specified for this period. If this is incorrect, rewrite it <a href='/TBC/cookiewriter'>here</a>.";
    } else {
        document.getElementById('confirmation').style.visibility = "visible";
    }
}
function confirmRedirect() {
    if (windowlocation != "") {
        window.open(windowlocation);
        window.location.assign(redirectlocation);
    } else {
        window.location.assign(redirectlocation);
    }
}
function pageDebug() {
    document.getElementById('btnd').innerHTML = windowlocation
}
function classroomLoad() {
    document.getElementById('Status').innerHTML = ""
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    if (h == "7") {
        if (m >= 30) {
           return period1();
        }
    } else if (h == 8) {
        if (m <= 13) {
            return period1();
        } else if (m >= 14) {
            if (m <= 56) {
                return period2();
            } else {
                return period3();
            }
        }
    } else if (h == 9) {
        if (m <= 37) {
            return period3();
        } else if (m >= 38) {
            return period4();
        }
    } else if (h == 10) {
        if (m <= 22) {
            return period4();
        } else {
            return period5();
        }
    } else if (h == 11) {
        if (m <= 4) {
            return period5();
        } else if (m >= 5) {
            if (m <= 47) {
                return period6();
            }
        } else if (m >= 48) {
            return period7();
        }
    } else if (h == 12) {
        if (m <= 31) {
            return period7();
        } else if (m >= 32) {
            return period8();
        }
    } else if (h == 13) {
        if (m <= 14) {
            return period8();
        } else if (m >= 15) {
            return period9();
        }
    } else if (h == 14) {
        if (m <= 34) {
            return period10();
        } else {
            alert("Classes are done for the day. Please try again tomorrow.");
            document.getElementById('Status').innerHTML = "";
        }
    } else {
        alert("Classes are done for the day. Please try again tomorrow.");
        document.getElementById('Status').innerHTML = "";
    }
}

function scriptSuccess() {
    return pageTime();
    document.getElementById('Status').innerHTML = "";
}
