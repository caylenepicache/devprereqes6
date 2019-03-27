window.onload = function (){
    

    var items  = documents.getElementByTagName("li");

    for(var x = 0; x < items.length; x++){
        items[x].onclick = function(){
            console.log(x);
        }
    }
}

