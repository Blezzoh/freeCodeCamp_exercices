/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price),
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
cid is a 2D array listing available currency.
Return the string "Insufficient Funds" if cash-in-drawer is less than the change due.
Return the string "Closed" if cash-in-drawer is equal to the change due.
Otherwise, return change in coin and bills, sorted in highest to lowest order.
*/
function checkCashRegister(price, cash, cid) {
  var change;
  var balance = cashInDrawer(cid);
  var due = cash - price;
  var conditions = checkInititalConditions(due, balance);
  if(conditions !== ""){
    return conditions;
  }
  
  change = calculateChange(cid, due);
  
  return change;
}

function calculateChange(cid, due){
  var changeobj = [];
 
  var faces = [0.01,0.05,0.1,0.25,1,5,10,20,100];
  for(var i = cid.length-1; i>=0; i--){
    if( due >0 &&  due >= faces[i] && cid[i][1] >0){
      if(due >= cid[i][1]){
        due = parseFloat((due - cid[i][1])).toFixed(2);
        changeobj.push(cid[i]);
      }
      else{
        var temp = Math.floor(due/faces[i]) * faces[i];
        due = parseFloat((due - temp)).toFixed(2);
        changeobj.push([cid[i][0], temp]);
      }
    }
  }
 
  if(due >0){
    return "Insufficient Funds";
  }
  return changeobj;
}

function checkInititalConditions(due, balance){
  if(due === balance)
    return "Closed";
  if(due > balance)
    return "Insufficient Funds";
  return "";
}
function cashInDrawer(cid){
  var money = 0.00;
  for(var i=0; i<cid.length; i++){
    money += cid[i][1];
  }
  return parseFloat(money.toFixed(2));
}

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
