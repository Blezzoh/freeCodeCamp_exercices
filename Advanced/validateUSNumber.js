
function telephoneCheck(str) {
  // Good luck!
  var patterns=[/^[0-9]{10}$/,
                /^\(\d\d\d\)([0-9]{3})\-([0-9]{4})$/,
                /^1\s([0-9]{3})\-([0-9]{3})\-([0-9]{4})$/,
                /^(1)\s\(([0-9]{3})\)\s([0-9]{3})\-([0-9]{4})$/,
                /^\(\d\d\d\) ([0-9]{3})\-([0-9]{4})$/,
                /^([0-9]{3}) ([0-9]{3}) ([0-9]{4})$/,
                /^1 ([0-9]{3}) ([0-9]{3}) ([0-9]{4})$/,
                /^([0-9]{3})\-([0-9]{3})\-([0-9]{4})/,
                /^(1)\(([0-9]{3})\)([0-9]{3})\-([0-9]{4})$/
               ];
  for(var i=0; i<patterns.length; i++){
    if(patterns[i].test(str)){
      return true;
    }
  }
  return false;
}



telephoneCheck("555-555-5555");