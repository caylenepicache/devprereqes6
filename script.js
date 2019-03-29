window.onload = function (){
 
    var ninja = {
        name: "Ryu",
        chop(x) {
            var _this = this;
            window.setInterval(function(){
                if(x>0) {
                    console.log(_this.name + " chopped enemy");
                    x--;
                }
            }, 1000);
        }
    }
    ninja.chop(5);
}