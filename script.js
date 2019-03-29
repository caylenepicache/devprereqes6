window.onload = function (){
 
 var names = new Set ();

 names.add("Shaun").add("Ryu").add("Crystal");
 names.delete("Crystal")
 names.clear();
 console.log(names.has("Crystal"))
 console.log(names.size);

 console.log(names);
}