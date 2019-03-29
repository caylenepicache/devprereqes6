window.onload = function (){
 
function gen() {
    yield console.log("pear");
    yield console.log("banana");
    yield console.log("apple");
    console.log("all done");

    
}

var myGen = gen();
console.log(myGen.next());
console.log(myGen.next(10));
console.log(myGen.next(5));
console.log(myGen.next(3));
}