var currentversion = "v0.1 Pre-Alpha"
var classroom = ""
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
}
function submitCookies() {
	document.cookie = "firstrun_complete=Yes"
    document.cookie = "period1=" + document.getElementById('pd1code').value
    document.cookie = "period2=" + document.getElementById('pd2code').value
    document.cookie = "period3=" + document.getElementById('pd3code').value
    document.cookie = "period4=" + document.getElementById('pd4code').value
    document.cookie = "period5=" + document.getElementById('pd5code').value
    document.cookie = "period6=" + document.getElementById('pd6code').value
    document.cookie = "period7=" + document.getElementById('pd7code').value
    document.cookie = "period8=" + document.getElementById('pd8code').value
    document.cookie = "period9=" + document.getElementById('pd9code').value
    document.cookie = "period10=" + document.getElementById('pd10code').value
	location.reload();
}
function firstrunFail() {
    document.getElementById('pd1code').value = getCookie("period1")
    document.getElementById('pd2code').value = getCookie("period2")
    document.getElementById('pd3code').value = getCookie("period3")
    document.getElementById('pd4code').value = getCookie("period4")
    document.getElementById('pd5code').value = getCookie("period5")
    document.getElementById('pd6code').value = getCookie("period6")
    document.getElementById('pd7code').value = getCookie("period7")
    document.getElementById('pd8code').value = getCookie("period8")
    document.getElementById('pd9code').value = getCookie("period9")
    document.getElementById('pd10code').value = getCookie("period10")
}
function pageLoad() {
	if (getCookie('firstrun_complete') == "Yes") {
		document.getElementById('Cards').innerHTML = "<div class='card'><div class='card-body'><h4 class='card-title'>Go to Classroom</h4><input type='button' value ='Go!' onclick='return classroomNavigate();' class='btn btn-block btn-primary'></div></div>"
		classroomLoad();
	} else {
		return false;
	}
}
function period1() {
	console.log('period 1')
	classroom = "https://classroom.google.com/u/0/c/" + getCookie('period1')
	console.log(classroom)
}
function period2() {
	console.log('period 2')
	classroom = "https://classroom.google.com/u/0/c/" + getCookie('period2')
	console.log(classroom)
}
function period3() {
	console.log('period 3')
	classroom = "https://classroom.google.com/u/0/c/" + getCookie('period3')
	console.log(classroom)
}
function period4() {
	console.log('period 4')
	classroom = "https://classroom.google.com/u/0/c/" + getCookie('period4')
	console.log(classroom)
}
function period5() {
	console.log('period 5')
	classroom = "https://classroom.google.com/u/0/c/" + getCookie('period5')
	console.log(classroom)
}
function period6() {
	console.log('period 6')
	classroom = "https://classroom.google.com/u/0/c/" + getCookie('period6')
	console.log(classroom)
}
function period7() {
	console.log('period 7')
	classroom = "https://classroom.google.com/u/0/c/" + getCookie('period7')
	console.log(classroom)
}
function period8() {
	console.log('period 8')
	classroom = "https://classroom.google.com/u/0/c/" + getCookie('period8')
	console.log(classroom)
}
function period9() {
	console.log('period 9')
	classroom = "https://classroom.google.com/u/0/c/" + getCookie('period9')
	console.log(classroom)
}
function period10() {
	console.log('period 10')
	classroom = "https://classroom.google.com/u/0/c/" + getCookie('period10')
	console.log(classroom)
}
function classroomNavigate() {
	window.location.assign(classroom);
}
function classroomLoad() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
	console.log('classroomLoad')
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
        }
    } else {
        alert("Classes are done for the day. Please try again tomorrow.");
    }
}
