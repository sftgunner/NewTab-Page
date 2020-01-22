function lightmode(manualmode=true){
    //Bootstrap CSS
    $("body").removeClass("bg-dark text-white");
    $("input").removeClass("bg-secondary border-dark text-light");
    $("code").removeClass("text-dark");
    $(".table").removeClass("table-dark");
    $("#gsearch").removeClass("bg-secondary border-primary");
    $("#searchsubmit").removeClass("btn-secondary border-info");
    $("nav").removeClass("navbardarkblue");
    $("nav").addClass("navbarlightblue");
    $(".card").removeClass("bg-dark border-secondary text-white");
    $(".card-header").removeClass("bg-secondary  border-secondary text-white");
    $(".table").removeClass("table-dark");
    $(".masthead").addClass("mastheadbg");
    $("#searchsubmit").addClass("btn-primary");
    $("#manuallighting-selector").attr("onclick","darkmode()");
    $("#manuallighting-selector").attr("href","#darkmode");
    $("#manuallighting-selector").html('<i class="fas fa-moon"></i> Dark');
    //Custom CSS
    $("a.dark-link").addClass("light-link");
    $("a.dark-link").removeClass("dark-link");
    $("svg.dark-svg").addClass("light-svg");
    $("svg.dark-svg").removeClass("dark-svg");
    $(".tl-r").addClass("tl-dr");
    $(".tl-r").removeClass("tl-r");
    $(".tl-y").addClass("tl-dy");
    $(".tl-y").removeClass("tl-y");
    $(".tl-g").addClass("tl-dg");
    $(".tl-g").removeClass("tl-g");
    localStorage.setItem("theme","light");
    if (manualmode == true){
        console.log("Switching to light; manual");
        $("#dynamiclighting-selector").removeClass("active");
        $("#dynamiclighting-selector").attr("onclick","automode(true)");
        localStorage.setItem("theme-selector","manual");
    }
}

function darkmode(manualmode=true){
    $("body").addClass("bg-dark text-white");
    $("input").addClass("bg-secondary border-dark text-light");
    $("code").addClass("text-dark");
    $(".table").addClass("table-dark");
    $("#gsearch").addClass("bg-secondary border-primary");
    $("#searchsubmit").addClass("btn-secondary border-info");
    $("nav").addClass("navbardarkblue");
    $("nav").removeClass("navbarlightblue");
    $(".card:not(#statuscard)").addClass("bg-dark border-secondary text-white");
    $(".card-header:not(#statuscard-header)").addClass("bg-secondary border-secondary text-white");
    $(".table").addClass("table-dark");
    $(".masthead").removeClass("mastheadbg");
    $("#searchsubmit").removeClass("btn-primary");
    $("#manuallighting-selector").attr("onclick","lightmode()");
    $("#manuallighting-selector").attr("href","#lightmode");
    $("#manuallighting-selector").html('<i class="fas fa-sun"></i> Light');
    //Custom CSS
    $("a.light-link").addClass("dark-link");
    $("a.light-link").removeClass("light-link");
    $("svg.light-svg").addClass("dark-svg");
    $("svg.light-svg").removeClass("light-svg");
    $(".tl-dr").addClass("tl-r");
    $(".tl-dr").removeClass("tl-dr");
    $(".tl-dy").addClass("tl-y");
    $(".tl-dy").removeClass("tl-dy");
    $(".tl-dg").addClass("tl-g");
    $(".tl-dg").removeClass("tl-dg");
    localStorage.setItem("theme","dark");
    if (manualmode == true){
        console.log("Switching to dark; manual");
        $("#dynamiclighting-selector").removeClass("active");
        $("#dynamiclighting-selector").attr("onclick","automode(true)");
        localStorage.setItem("theme-selector","manual");
    }
}

function dynamicverifylighting(initial=false){
    if (localStorage.getItem("theme-selector") == "auto"){
        if (window.matchMedia('(prefers-color-scheme: dark)').matches){
            //Don't set as dark mode if already dark!
            if ((localStorage.getItem("theme") != "dark")||(initial == true)){
                darkmode(false);
            }
        }
        else if(window.matchMedia('(prefers-color-scheme: light)').matches){
            //Don't set as light mode if already light!
            if ((localStorage.getItem("theme") != "light")||(initial == true)){
                lightmode(false);
            }
        }
    }
}

function automode(io=true){
    if (io == true){
        console.log("Switching to auto");
        $("#dynamiclighting-selector").addClass("active");
        $("#dynamiclighting-selector").attr("onclick","automode(false)");
        localStorage.setItem("theme-selector","auto");
        dynamicverifylighting();
    }
    else{
        $("#dynamiclighting-selector").removeClass("active");
        $("#dynamiclighting-selector").attr("onclick","automode(true)");
        localStorage.setItem("theme-selector","manual");
    }
}

//OPTIONAL - Add CSS for custom coloured menubars
var css = 'nav.navbarlightblue { background-color: #003399; }\
nav.navbardarkblue { background-color: #003366; }\
a.dark-link {color:lightgrey;}\
a.dark-link:hover {color:steelblue;}\
svg.light-svg{fill:#586069}\
svg.dark-svg{fill:#A79F96}\
.tl-r{color:#ff4444;}\
.tl-y{color:gold;}\
.tl-g{color:lightgreen;}\
.tl-dr{color:darkred;}\
.tl-dy{color:orange;}\
.tl-dg{color:green;}',
head = document.head || document.getElementsByTagName('head')[0],
style = document.createElement('style');

head.appendChild(style);

style.type = 'text/css';
if (style.styleSheet){
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}


if (localStorage.getItem("theme-selector") === null){
    //No existing preference for theme setting has been made.
    if ((window.matchMedia('(prefers-color-scheme: dark)').matches)||(window.matchMedia('(prefers-color-scheme: light)').matches))
    {
        console.log("Browser supports prefers-color-scheme query.");
        localStorage.setItem("theme-selector","auto");
    }
    else{
        console.log("Browser doesn't support prefers-color-scheme query.");
        localStorage.setItem("theme-selector","manual");
    }
}
if (localStorage.getItem("theme-selector") == "auto"){
    $("#dynamiclighting-selector").addClass("active");
    $("#dynamiclighting-selector").attr("onclick","automode(false)");
    dynamicverifylighting()
}
else if (localStorage.getItem("theme") == "dark"){
    $(document).ready(function(){
                      darkmode();
                      });
}
else if (localStorage.getItem("theme") == "light"){
    $(document).ready(function(){
                      lightmode();
                      });
}
else{
    $(document).ready(function(){
                      lightmode();
                      });
}

//Wait until all the HTML is loaded before trying to modify lighting
$(document).ready(function(){
                  dynamicverifylighting(true);
                  })

//Write menubar (if no JS, then these functiosn won't work anyway
anchorelement = document.currentScript
if (localStorage.getItem("theme-selector") == "auto"){
    dynlightaddclass = ' active';
    dynlightoclick = 'automode(false);'
}
else{
    dynlightaddclass = '';
    dynlightoclick = 'automode(true);'
}
anchorelement.insertAdjacentHTML('afterend', '<li class="nav-item"> <a id="dynamiclighting-selector" class="nav-link'+dynlightaddclass+'" href="#dynamiclighting" onclick="'+dynlightoclick+'" title="Switch to dynamic lighting"> <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" style="margin-bottom:-6px;" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0,256) scale(0.1,-0.1)" fill="currentColor" stroke="none"> <path d="M1225 2375 c-24 -23 -25 -31 -25 -135 0 -104 1 -112 25 -135 15 -16 36 -25 55 -25 19 0 40 9 55 25 24 23 25 31 25 135 0 104 -1 112 -25 135 -15 16 -36 25 -55 25 -19 0 -40 -9 -55 -25z"/> <path d="M703 2234 c-33 -34 -28 -66 28 -162 45 -77 79 -112 111 -112 26 0 78 53 78 80 0 29 -97 198 -121 210 -31 17 -69 11 -96 -16z"/> <path d="M1145 1904 c-244 -52 -438 -249 -489 -497 -20 -96 -20 -158 0 -254 52 -252 246 -446 496 -497 97 -20 159 -20 256 0 250 51 444 245 496 497 20 96 20 158 0 255 -71 347 -411 569 -759 496z m135 -624 l0 -480 -25 0 c-95 0 -222 57 -306 136 -194 185 -199 479 -12 675 80 85 208 145 311 148 l32 1 0 -480z"/> <path d="M326 1857 c-27 -27 -33 -65 -16 -96 12 -24 181 -121 210 -121 27 0 80 52 80 78 0 32 -35 66 -112 111 -96 56 -128 61 -162 28z"/> <path d="M185 1335 c-16 -15 -25 -36 -25 -55 0 -19 9 -40 25 -55 23 -24 31 -25 135 -25 104 0 112 1 135 25 33 32 33 78 0 110 -23 24 -31 25 -135 25 -104 0 -112 -1 -135 -25z"/> <path d="M410 870 c-47 -28 -91 -58 -97 -67 -21 -28 -15 -72 13 -100 34 -33 66 -28 162 28 77 45 112 79 112 111 0 27 -54 78 -82 78 -13 0 -61 -23 -108 -50z"/> <path d="M798 581 c-32 -25 -108 -156 -115 -198 -10 -58 61 -103 116 -73 24 12 121 181 121 210 0 27 -52 80 -78 80 -11 0 -30 -9 -44 -19z"/> <path d="M1225 455 c-24 -23 -25 -31 -25 -135 0 -104 1 -112 25 -135 15 -16 36 -25 55 -25 19 0 40 9 55 25 24 23 25 31 25 135 0 104 -1 112 -25 135 -15 16 -36 25 -55 25 -19 0 -40 -9 -55 -25z"/> </g> </svg>Auto</a> </li><li class="nav-item"> <a id="manuallighting-selector" class="nav-link" style="width:74px;" href="#darkmode" onclick="darkmode(true);"><i class="fas fa-moon"></i> Dark</a> </li>');
console.log("Loaded dynamic selector");


//run every second
var t=setInterval(dynamicverifylighting,1000);
