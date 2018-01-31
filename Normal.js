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
