//alert();

window.addEventListener("scroll",function(event){
    //this.alert();
    var Y = this.scrollY;
    var X = this.scrollX;

    if(Y > 370){
       document.getElementsByClassName("c_box1")[0].setAttribute("style", "transition-delay:12s;position:fixed;z-index : 2");
    }
    else{
        document.getElementsByClassName("c_box1")[0].setAttribute("style", "position:relative");
    }
    console.log(X + " " + Y);
});