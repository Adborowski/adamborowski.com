console.log("[main.js]");

var isMobileMenuOpen = false;

$(".navButton").on("click", function(){
    console.log(this);
    var target = this.getAttribute("data-target");

    // turning this off for the Under Construction version
    // window.location.href = target+".php";
    
})

$("#btnBurger").on("click", function(){
    refreshBurgerMenu();
});

$("#btn-exitMobileMenu").on("click", function(){
    refreshBurgerMenu();
});

// var viewportWidth = win

function refreshBurgerMenu(){

    if (isMobileMenuOpen == true){
        console.log("closing");
        isMobileMenuOpen = !isMobileMenuOpen;
        // $("#mobileMenu").css("display", "none");
        $("#mobileMenu").css("top", "-100vh");
    } else {
        console.log("opening");
        isMobileMenuOpen = !isMobileMenuOpen;
        $("#mobileMenu").css("display", "flex");
        $("#mobileMenu").css("top", "0px");
    }

}
