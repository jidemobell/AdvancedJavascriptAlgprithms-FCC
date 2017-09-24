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
        
            if(buyerChange == totalStoreChangeSum){
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
        var i = instanceTransaction.cid.length-1;

        while(checker > 0.00){
            
            while(buyerChange > denominations[i][1]  && instanceTransaction.cid[i][1] >0.00 && i>=0){  //twenties
                
                coins = 0;
                testValue =instanceTransaction.cid[i][1];
               while( testValue > 0.00 && buyerChange >= denominations[i][1]){
                   testValue -= denominations[i][1];
                   
                   buyerChange = (buyerChange - denominations[i][1]).toFixed(2);  //increment the subtracted
                   coins += denominations[i][1];
                   }
               toRecieve.push([denominations[i][0],coins]);
               checker = buyerChange;
               instanceTransaction.cid[i][1] = 0.00;
               if(i == 0 && instanceTransaction.cid[0][1]==0 && buyerChange > 0){
                return "Insufficient funds";
                }

            }
              i--;
        }

        

    }
    
   
return toRecieve;
}

function summer(arr){
var output = arr.reduce(function (a, b) { return a + b; }, 0);
return output;        
}

//console.log(denominations);
console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));