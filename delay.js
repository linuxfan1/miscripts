var currentversion = "v3.6";
var redirectlocation = "";
var windowlocation = "";
var period = "";
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
var debugstats = getCookie('debug');
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
function tbcDebug() {
    document.getElementById('debug').value = b64_md5(document.getElementById('debug').value)
    if (document.getElementById('debug').value == "p7AzSwqbPe2vBeMHedwMYA") {
        document.cookie = "debug=true;";
    } else {
        alert('Incorrect debug password');
        document.cookie = "debug=false;";
        document.cookie = "lastpassword=" + b64_md5(document.getElementById('debug').value)
    }
}
function tbcReset() {
    document.cookie = "firstrun=Reset"
    document.cookie = "period1="
    document.cookie = "period2="
    document.cookie = "period3="
    document.cookie = "period4="
    document.cookie = "period5="
    document.cookie = "period6="
    document.cookie = "period7="
    document.cookie = "period8="
    document.cookie = "period9="
    document.cookie = "period10="
    window.location.assign('https://goo.gl/iMUzzr');
}
function pageLoad() {
    document.getElementById('debugstatus').innerHTML = "Debug Enabled: " + debugstats;
    if (getCookie('firstrun') == "") {
        document.getElementById('Status').style.display = "block";
        document.getElementById('Status').className = "alert alert-warning";
        document.getElementById('Status').innerHTML = "<strong>Warning: </strong><a href='https://goo.gl/iMUzzr'>TBC</a> Setup has not been completed. Please complete it first before using TBC - Delay";
    } else if (getCookie('firstrun') != "") {
        if (getCookie('firstrun') != currentversion) {
            document.getElementById('Status').style.display = "block";
            document.getElementById('Status').innerHTML = "<strong>Warning: </strong>TBC <strong>" + getCookie('firstrun') + "</strong> detected. The current version is <strong>" + currentversion + "</strong>. Please recomplete the setup at <a href='https://goo.gl/iMUzzr'>TBC</a>";
            document.getElementById('Status').className = "alert alert-warning";
        } else {
            return classroomLoad();
        }
    }
}
function period1() {
    period = "1st";
    if (getCookie('period1type') != '') {
        redirectlocation = pdurl1;
        if (getCookie('period1type') == 'math') {
            windowlocation = 'https://www.pearsonsuccessnet.com/';
            return visibility();
        } else if (getCookie('period1type') == 'science') {
            windowlocation = 'https://my.hrw.com/';
            return visibility();
        } else if (getCookie('period1type') == 'custom') {
            redirectlocation = getCookie('period1customurl');
            return visibility();
        } else {
            return visibility();
        }
    } else {
        redirectlocation = pdurl1;
    }
}
function period2() {
    period = "2nd";
    if (getCookie('period2type') != '') {
        redirectlocation = pdurl2;
        if (getCookie('period2type') == 'math') {
            windowlocation = 'https://www.pearsonsuccessnet.com/';
            return visibility();
        } else if (getCookie('period2type') == 'science') {
            windowlocation = 'https://my.hrw.com/';
            return visibility();
        } else if (getCookie('period2type') == 'custom') {
            redirectlocation = getCookie('period2customurl');
            return visibility();
        } else {
            return visibility();
        }
    } else {
        redirectlocation = pdurl2;
    }
}
function period3() {
    period = "3rd";
    if (getCookie('period3type') != '') {
        redirectlocation = pdurl3;
        if (getCookie('period3type') == 'math') {
            windowlocation = 'https://www.pearsonsuccessnet.com/';
            return visibility();
        } else if (getCookie('period3type') == 'science') {
            windowlocation = 'https://my.hrw.com/';
            return visibility();
        } else if (getCookie('period3type') == 'custom') {
            redirectlocation = getCookie('period3customurl');
            return visibility();
        } else {
            return visibility();
        }
    } else {
        redirectlocation = pdurl3;
    }
}
function period4() {
    period = "4th";
    if (getCookie('period4type') != '') {
        redirectlocation = pdurl4;
        if (getCookie('period4type') == 'math') {
            windowlocation = 'https://www.pearsonsuccessnet.com/';
            return visibility();
        } else if (getCookie('period4type') == 'science') {
            windowlocation = 'https://my.hrw.com/';
            return visibility();
        } else if (getCookie('period4type') == 'custom') {
            redirectlocation = getCookie('period4customurl');
            return visibility();
        } else {
            return visibility();
        }
    } else {
        redirectlocation = pdurl4;
    }
}
function period5() {
    period = "5th";
    if (getCookie('period5type') != '') {
        redirectlocation = pdurl5;
        if (getCookie('period5type') == 'math') {
            windowlocation = 'https://www.pearsonsuccessnet.com/';
            return visibility();
        } else if (getCookie('period5type') == 'science') {
            windowlocation = 'https://my.hrw.com/';
            return visibility();
        } else if (getCookie('period5type') == 'custom') {
            redirectlocation = getCookie('period5customurl');
            return visibility();
        } else {
            return visibility();
        }
    } else {
        redirectlocation = pdurl5
    }
}
function period6() {
    period = "6th";
    if (getCookie('period6type') != '') {
        redirectlocation = pdurl6;
        if (getCookie('period6type') == 'math') {
            windowlocation = 'https://www.pearsonsuccessnet.com/';
            return visibility();
        } else if (getCookie('period6type') == 'science') {
            windowlocation = 'https://my.hrw.com/';
            return visibility();
        } else if (getCookie('period6type') == 'custom') {
            redirectlocation = getCookie('period6customurl');
            return visibility();
        } else {
            return visibility();
        }
    } else {
        redirectlocation = pdurl6;
    }
}
function period7() {
    period = "7th";
    if (getCookie('period7type') != '') {
        redirectlocation = pdurl7;
        if (getCookie('period7type') == 'math') {
            windowlocation = 'https://www.pearsonsuccessnet.com/';
            return visibility();
        } else if (getCookie('period7type') == 'science') {
            windowlocation = 'https://my.hrw.com/';
            return visibility();
        } else if (getCookie('period7type') == 'custom') {
            redirectlocation = getCookie('period7customurl');
            return visibility();
        } else {
            return visibility();
        }
    } else {
        redirectlocation = pdurl7;
    }
}
function period8() {
    period = "8th";
    if (getCookie('period8type') != '') {
        redirectlocation = pdurl8;
        if (getCookie('period8type') == 'math') {
            windowlocation = 'https://www.pearsonsuccessnet.com/';
            return visibility();
        } else if (getCookie('period8type') == 'science') {
            windowlocation = 'https://my.hrw.com/';
            return visibility();
        } else if (getCookie('period8type') == 'custom') {
            redirectlocation = getCookie('period8customurl');
            return visibility();
        } else {
            return visibility();
        }
    } else {
        redirectlocation = pdurl8;
    }
}
function period9() {
    period = "9th";
    if (getCookie('period9type') != '') {
        redirectlocation = pdurl9;
        if (getCookie('period9type') == 'math') {
            windowlocation = 'https://www.pearsonsuccessnet.com/';
            return visibility();
        } else if (getCookie('period9type') == 'science') {
            windowlocation = 'https://my.hrw.com/';
            return visibility();
        } else if (getCookie('period9type') == 'custom') {
            redirectlocation = getCookie('period9customurl');
            return visibility();
        } else {
            return visibility();
        }
    } else {
        redirectlocation = pdurl9;
    }
}
function period10() {
    period = "10th";
    if (getCookie('period10type') != '') {
        redirectlocation = pdurl10;
        if (getCookie('period10type') == 'math') {
            windowlocation = 'https://www.pearsonsuccessnet.com/';
            return visibility();
        } else if (getCookie('period10type') == 'science') {
            windowlocation = 'https://my.hrw.com/';
            return visibility();
        } else if (getCookie('period10type') == 'custom') {
            redirectlocation = getCookie('period10customurl');
            return visibility();
        } else {
            return visibility();
        }
    } else {
        redirectlocation = pdurl10;
    }
}
function visibility() {
        document.getElementById('confirmation').style.display = "block";
        document.getElementById('confirmationtext').innerHTML =  "Press 'Ok' to continue to the " + period + " period classroom.";
        document.getElementById('Status').style.display = "none";
        document.getElementById("confirmationbutton").style.display = "inline";
        //document.getElementById('confirmationtext').innerHTML = redirectlocation;
    if (redirectlocation == "https://classroom.google.com/u/0/c/" || redirectlocation == "") {
        document.getElementById('confirmation').style.display = "block";
        document.getElementById("confirmationbutton").style.display = "none";
        document.getElementById("confirmationtext").innerHTML = "No code was specified for this period.<s> If this is incorrect, rewrite it <a href='#'>here</a></s>.";
    } else {
        document.getElementById('confirmation').style.display = "block";
    }
}
function noSchool() {
        document.getElementById('confirmation').style.display = "block";
        document.getElementById('confirmationtext').innerHTML =  "Invalid time, please try again after school has begun.";
        document.getElementById('Status').style.display = "none";
        document.getElementById("confirmationbutton").style.display = "inline";
}
function confirmRedirect() {
    if (windowlocation != "") {
        window.open(windowlocation);
        window.location.assign(redirectlocation);
    } else {
        window.location.assign(redirectlocation);
    }
}
function classroomLoad() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    if (h == 9) {
        if (m >= 30) {
            return period1();
        } else if (m <= 50) {
            return period1();
        } else if (m >= 50) {
            return period2();
        } else {
            alert("School hasn't Begun, please try after 9:30.")
        }
    } else if (h == 10) {
        if (m <= 14) {
            return period2();
        } else if (m >= 14) {
            if (m <= 38) {
                return period3();
            } else if (m >= 38) {
                return period4();
            }
        } 
    } else if (h == 11) {
        if (m <= 2) {
            return period4();
        } else if (m <= 36) {
            return period5();
        } else if (m >= 36) {
            return period6();
        }
    } else if (h == 12) {
        if (m <= 10) {
            return period6();
        } else if (m <= 44) {
            return period7();
        } else if (m >= 44) {
            return period8();
        }
    } else if (h == 13) {
        if (m <= 21) {
            return period8();
        } else if (m <= 52) {
            return period9();
        } else if (m >= 52) {
            return period10();
        }
    } else if (h == 14) {
        if (m <= 34) {
            return period10();
        } else {
            document.getElementById('Status').innerHTML = "No available class.";
            document.getElementById('Status').className = "alert alert-danger";
            document.getElementById('Status').style.display = "block";
            return noSchool();
        }
    } else {
        document.getElementById('Status').innerHTML = "No available class.";
        document.getElementById('Status').className = "alert alert-danger";
        document.getElementById('Status').style.display = "block";
        return noSchool();
    }
}
