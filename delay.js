function classroomLoad() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    if (h == 9) {
        if (m >= 20) {
            return period1();
        } else if (m <= 50) {
            return period1();
        } else if (m >= 50) {
            return period2();
        } else {
            alert("School hasn't begun, make sure you're using the correct TBC or try after 9:20")
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
        if (m <= 35) {
            return period10();
        } else if (m >= 35) {
            alert("Classes are done for today. Remember to use normal TBC tomorrow.")
        }
    } else if (h >= 15) {
        alert("Classes are done for today. Remember to use normal TBC tomorrow")
    } else {
        alert("School hasn't begun, make sure you're using the correct TBC or try after 9:20")
    }
}
