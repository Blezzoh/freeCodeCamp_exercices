
function getPair(str){
   str = str.toUpperCase();
   if( str == "A"){
     return ["A", "T"];
   }
   else if( str == "T"){
     return ["T", "A"];
   }
   else if( str == "G"){
     return ["G", "C"];
   }
   else if(str == "C"){
     return ["C", "G"];
   }
  return "";
}
function pairElement(str) {
  var arr =[];
  for( var i = 0; i<str.length; i++){
    arr.push(getPair(str[i]));
  }
  console.log(arr);
  return arr;
}

pairElement("GCG");
