window.onload = function (){
 
    var ninja = {
        name: "Ryu",
        chop(x) {
            window.setInterval(() => {
                if(x>0) {
                    console.log(this.name + " chopped enemy");
                    x--;
                }
            }, 1000);
        }
    }
    ninja.chop(5);
}