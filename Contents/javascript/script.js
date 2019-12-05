
// My profile
function openCity(cityName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontentMyProfile");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinkMyProfile");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(cityName).style.display = "block";
    elmnt.style.backgroundColor = color;
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


//--javascrip cho add new address--

// Get the modal
var modalSignUp = document.getElementById('id03');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modalSignUp) {
        modalSignUp.style.display = "none";
    }
}


//--Tạo bộ đếm thời gian--
var myVar = setInterval(myTimer, 1000);
var sec = 21;
var min = 1;
var h = 0;
function myTimer() {
    sec--;

    var sec_str = sec.toString();
    var min_str = min.toString();
    var h_str = h.toString();

    if (h < 10) {
        h_str = "0" + h_str;
    }

    if (min < 10) {
        min_str = "0" + min_str;
    }

    if (sec < 10) {
        sec_str = "0" + sec_str;
    }

    var myTime = document.getElementsByClassName("card-text timer");
    for (var i = 0; i < myTime.length; i++) {
        myTime[i].innerHTML = `${h_str}:${min_str}:${sec_str}`.bold().fontcolor("Red");
    }

    if (min === 0 && sec === 0 && h === 0) {
        for (var i = 0; i < myTime.length; i++) {
            myTime[i].innerHTML = "Ending...".bold().fontcolor("Red");
        }
        clearInterval(myVar);
    }
    if (sec === 0 && min > 0) {
        min--;
        sec = 60;
    }
    if (min === 0 && sec === 0) {
        h--;
        min = 59;
        sec = 60;
    }
}

//Xử lí sự kiện điều hướng trang khi click vào card
function detailItem() {
    window.location = "/user/detail/dellvostro3580";
}