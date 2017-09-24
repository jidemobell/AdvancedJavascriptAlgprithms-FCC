function checkCashRegister(price, cash, cid) {
    var change;
    // Here is your change, ma'am.
    var finalChange = 0;
    var instanceTransaction= new Object();
    instanceTransaction.price = price;
    instanceTransaction.cash =cash;
    instanceTransaction.cid = cid;

    var buyerChange = (cash - price).toFixed(2) ;
    var storeChangeArray = [];
    for (var i = 0; i < instanceTransaction.cid.length; i++) {
        var e = instanceTransaction.cid[i][1];
        storeChangeArray.push(e);
    }

    var totalStoreChangeSum = summer(storeChangeArray);
    var minChange = Math.min.apply(null,storeChangeArray);
    var maxChange = Math.max.apply(null,storeChangeArray);

    if(change == totalStoreChangeSum){
        return "closed";
    }
    else if(buyerChange > totalStoreChangeSum){
        return "Insuffecient Funds";
    }
    else if (buyerChange < totalStoreChangeSum){
        var i=instanceTransaction.cid.length - 1;

        var denominations =  
         [["PENNY", 0.01],
         ["NICKEL", 0.05],
         ["DIME", 0.10],
         ["QUARTER", 0.25],
         ["ONE", 1.00],
         ["FIVE", 5.00],
         ["TEN", 10.00],
         ["TWENTY", 20.00],
         ["ONE HUNDRED", 100.00]];

         
         
        var toRecieve = [];
        var coins;
        var checker = buyerChange;
        var testValue;
        
        while(buyerChange > 0.00){
          if(buyerChange >= 100.00 && instanceTransaction.cid[8][1] >0.00){  //one hundreds
            coins = 0;
            testValue =instanceTransaction.cid[8][1];
           while(buyerChange >= 100.00 && testValue > 0.00){
               
               buyerChange = (buyerChange - 100.00).toFixed(2);  //increment the subtracted
               coins += 100.00;
               testValue -= 100.00;
               }
           toRecieve.push(['ONE HUNDRED',coins]);
           checker = buyerChange;
           instanceTransaction.cid[8][1] = 0.00;
        }

        if(buyerChange > 20.00  && instanceTransaction.cid[7][1] >0.00){  //twenties
            coins = 0;
            testValue =instanceTransaction.cid[7][1];
           while( testValue > 0.00 && buyerChange > 20.00){
            testValue -= 20.00;
               buyerChange = (buyerChange - 20.00).toFixed(2);  //increment the subtracted
               console.log("after minus " + buyerChange);
               coins += 20.00;
               }
           toRecieve.push(['TWENTY',coins]);
           console.log("buyer change after twenties is " + buyerChange);
           checker = buyerChange;
           instanceTransaction.cid[7][1] = 0.00;
           console.log(instanceTransaction.cid);
        }

        if(buyerChange > 10.00 && instanceTransaction.cid[6][1] >0.00){  //tens
            coins = 0;
            testValue =instanceTransaction.cid[6][1];
           while( testValue > 0.00  && buyerChange >= 10.00){
               buyerChange = (buyerChange - 10.00).toFixed(2);  //increment the subtracted
               coins += 10.00;
               testValue -= 10.00;
               }
           toRecieve.push(['TEN',coins]);
           checker = buyerChange;
           instanceTransaction.cid[6][1] = 0.00;
        }

        else  if(buyerChange >= 5.00 && instanceTransaction.cid[5][1] >0.00){  //fives
            coins = 0;
            testValue =instanceTransaction.cid[5][1];
           while(buyerChange >= 5.00 && testValue > 0.00){
               
               buyerChange = (buyerChange - 5.00).toFixed(2);  //increment the subtracted
               coins += 5.00;
               testValue -= 5.00;
               }
           toRecieve.push(['FIVE',coins]);
           checker = buyerChange;
           instanceTransaction.cid[5][1] = 0.00;
        }

        else  if(buyerChange >= 1.00 && instanceTransaction.cid[4][1] >0.00){  //ones
            coins = 0;
            testValue =instanceTransaction.cid[4][1];
           while(buyerChange >= 1.00 && testValue > 0.00){
               
               buyerChange = (buyerChange - 1.00).toFixed(2);  //increment the subtracted
               coins += 1.00;
               testValue -= 1.00;
           }
           toRecieve.push(['ONE',coins]);
           checker = buyerChange;
           instanceTransaction.cid[4][1] = 0.00;
        }

        else  if(buyerChange >= 0.25 && instanceTransaction.cid[3][1] >0.00){  //quaters
            coins = 0;
            testValue =instanceTransaction.cid[3][1];
           while(buyerChange >= 0.25 && testValue > 0.00){
               buyerChange = (buyerChange - 0.25).toFixed(2);  //increment the subtracted
               coins += 0.25;
               testValue -= 0.25;
           }
           toRecieve.push(['QUARTER',coins]);
           checker = buyerChange;
           instanceTransaction.cid[3][1] = 0.00;
        }

        else if (buyerChange >= 0.10 && instanceTransaction.cid[2][1] >0.00){  //dimes
            coins = 0;
            testValue =instanceTransaction.cid[2][1];
           while(buyerChange >= 0.10 && testValue > 0.00){
               buyerChange = (buyerChange - 0.10).toFixed(2); //increment the subtracted
               coins += 0.10;
               testValue -= 0.10;
           }
           toRecieve.push(['DIME',coins]);
           checker = buyerChange;
           instanceTransaction.cid[2][1] = 0.00;

                
       }

       else if(buyerChange >= 0.05 && instanceTransaction.cid[1][1] >0.00){  //nickel
        coins = 0;
        testValue =instanceTransaction.cid[1][1];
       while(buyerChange >= 0.05 && testValue > 0.00 ){
           buyerChange = (buyerChange - 0.05).toFixed(2);  //increment the subtracted
           coins += 0.05;
           testValue -= 0.05;
       }
       toRecieve.push(['NICKEL',coins]);
       checker = buyerChange;
       instanceTransaction.cid[1][1] = 0.00;
   }

   
    if(buyerChange >= 0.01 && instanceTransaction.cid[0][1] >0.00){   //pennies
       coins = 0;
       testValue =instanceTransaction.cid[0][1];
       while(buyerChange >= 0.01 && testValue > 0.00 ){
           buyerChange = (buyerChange - 0.01).toFixed(2);  //increment the subtracted
           coins += 0.01;
           testValue -= 0.01;
       }
       toRecieve.push(['PENNY',coins]);
       checker = buyerChange;
       instanceTransaction.cid[0][1] = 0.00;
    }
       
   // checker = buyerChange;
    }
        
        
        
    }

    return toRecieve;
  }

  function summer(arr){
    var output = arr.reduce(function (a, b) { return a + b; }, 0);
    return output;        
  }
  
  // Example cash-in-drawer array:
  // [["PENNY", 1.01],
  // ["NICKEL", 2.05],
  // ["DIME", 3.10],
  // ["QUARTER", 4.25],
  // ["ONE", 90.00],
  // ["FIVE", 55.00],
  // ["TEN", 20.00],
  // ["TWENTY", 60.00],
  // ["ONE HUNDRED", 100.00]]


  
   console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));