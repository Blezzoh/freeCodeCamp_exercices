/*
You will be provided with an initial array (the first argument in the destroyer function),
followed by one or more arguments. Remove all elements from the initial array that are
of the same value as these arguments.
*/

function destroyer(arr) {

  var args = Array.from(arguments);
  var arg1 = arguments[0];
  
  for(var i = 1; i<args.length; i++){
    var j = 0;
    while(j < arg1.length){
      if(args[i] === arg1[j])
        arg1.splice(j, 1);
      else 
        j++;
    }
  }
  
  return arg1;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
