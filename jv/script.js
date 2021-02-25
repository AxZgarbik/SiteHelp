$(document).ready(function(){
    $('.ir-arriba').hide();

    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.ir-arriba').fadeIn(500);

        }else{
            $('.ir-arriba').fadeOut(500);
        }
    });
    $('.ir-arriba').click(function(){
        $('body,html').animate({
            scrollTop: 0
        },800);
    })
});
function esconderbarra(){
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
}
function esconderindice(){
var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        } 
      });
    }
}
function esconderindice2(){
    var coll = document.getElementsByClassName("collapsible2");
    var contentmax=1200;
    var i;
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content2 = this.nextElementSibling;
        if (content2.style.maxHeight){
          content2.style.maxHeight = null;
        } else {
          content2.style.maxHeight = contentmax +  "px";
        } 
      });
    }
}