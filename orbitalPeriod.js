function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;


    var finalArr = [];
    var i = 0;
    while ( i < arr.length) {
        var e = arr[i];
        
        var orbitalRad = e.avgAlt + earthRadius;
        var finalObj = {
            name: e.name
        }
        
        finalObj['orbitalPeriod'] = Math.round((2*Math.PI) * (Math.sqrt(Math.pow(orbitalRad,3) / GM)));
        finalArr.push(finalObj);
        i++;

    }
       
    return finalArr;
}
  
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));

 // var test= [{name : "sputnik", avgAlt : 35873.5553}];

 // console.log(test[0].avgAlt);