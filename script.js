window.onload = function (){
    
    var name = "Crystal";
    var belt = "Black";
    var ninja = {
        name, belt, 
        chop: function(x){
            console.log('you chopped the enemy ${x} times')
        }
    };

    console.log(ninja.chop(5));
}

