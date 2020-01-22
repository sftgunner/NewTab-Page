if (window.chrome){
    //Get all chrome objects
    chrome.storage.sync.get(null, function(items) {
        var allKeys = Object.keys(items);
        console.log(allKeys);
    });
}

var greetings = {};

$.getJSON("default_options.json", function(json) {
    document.getElementById("page_title").innerHTML = json.page_title;
    document.title = json.page_title;
    
    if (!json.online_status){
        document.getElementById("connectioncheck").style.display = "none";
    }
    if (!json.themeswitcher){
        document.getElementById("themeswitcher_container").style.display = "none";
    }
    if (json.shortcuts){
        $.each(json.shortcuts,function( index,element ) {
            document.getElementById('shortcut_container').insertAdjacentHTML('beforeend','<li class="nav-item"><a class="nav-link" href="'+element+'">'+index+'</a></li>')
        });
    }
    if (json.search_engine){
        document.getElementById("form").action = json.search_engine;
    }
    else{
        document.getElementById("form").action = "https://www.google.co.uk/search"
    }
    if (json.greetings){
        today = new Date().getHours();
        if (json.greeting_name){
            if (today >= 6 && today < 12) {
                document.getElementById("greeting").innerHTML = json.greetings.morning.replace("{greeting_name}", ", "+json.greeting_name);
            }
            else if (today >= 12 && today < 18) {
                document.getElementById("greeting").innerHTML = json.greetings.afternoon.replace("{greeting_name}", ", "+json.greeting_name);
            }
            else if (today >= 18 && today <= 24) {
                document.getElementById("greeting").innerHTML = json.greetings.evening.replace("{greeting_name}", ", "+json.greeting_name);
            }
            else {
                document.getElementById("greeting").innerHTML = json.greetings.night.replace("{greeting_name}", ", "+json.greeting_name);
            }
        }
        else{
            if (today >= 6 && today < 12) {
                document.getElementById("greeting").innerHTML = json.greetings.morning.replace("{greeting_name}", "");
            }
            else if (today >= 12 && today < 18) {
                document.getElementById("greeting").innerHTML = json.greetings.afternoon.replace("{greeting_name}", "");
            }
            else if (today >= 18 && today <= 24) {
                document.getElementById("greeting").innerHTML = json.greetings.evening.replace("{greeting_name}", "");
            }
            else {
                document.getElementById("greeting").innerHTML = json.greetings.night.replace("{greeting_name}", "");
            }
        }
    }
    else{
        if (json.greeting_name){
            document.getElementById("greeting").innerHTML = "Welcome back, "+json.greeting_name+".";
        }
        else{
            document.getElementById("greeting").innerHTML = "Welcome back.";
        }
    }
});

console.log(greetings.morning);
//JS Fix to automatically size background to remove scrollbar
var navheight = $('#Searchhtml_NavBar').outerHeight(true);
var adj = navheight
document.getElementById('header1').setAttribute("style","height:calc(100vh - "+adj+"px)");