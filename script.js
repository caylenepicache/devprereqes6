window.onload = function (){
 
 var names = new Set ();

 names.add("Shaun").add("Ryu").add("Crystal");
 names.delete("Crystal")
 console.log(names.size);

 console.log(names);
}