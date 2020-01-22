function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    h = checkTime(h);
    document.getElementById('time').innerHTML = h + ":" + m;
    var t = setTimeout(startTime, 500*60);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function checkonline(){
    //Don't check if display is hidden
    if (document.getElementById("connectioncheck").style.display !== "none"){
        $("#connectioncheck").removeClass("btn-outline-success");
        $("#connectioncheck").removeClass("btn-outline-danger");
        if(navigator.onLine){
            $("#connectioncheck").addClass("btn-outline-success");
            $("#searchfieldset").removeAttr("disabled");
            document.getElementById("connectioncheck").innerHTML = "Online";
        } else {
            $("#connectioncheck").addClass("btn-outline-danger");
            document.getElementById("connectioncheck").innerHTML = "Offline";
            $("#searchfieldset").attr("disabled",true);
        }
    }
}

window.setInterval(function(){
    checkonline();
}, 1000);
$(document).arrive("#time", function() {
    startTime();
});

$(document).arrive("#connectioncheck", function() {
    checkonline();
});
