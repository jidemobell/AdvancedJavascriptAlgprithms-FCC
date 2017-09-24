function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var currInvObject = objectify(arr1);         //though the 2d array is already an object
    var newInvObject = objectify(arr2);          //convert it to object notation for easy manipulation

    var allCurrKeys = Object.keys(currInvObject);         //convert back into array of string keys
    var allNewKeys  = Object.keys(newInvObject);
    
    for (var i = 0; i < allNewKeys.length; i++) {              //loop new inventory against old
        var e = allNewKeys[i];
        if(inArray(e,allCurrKeys)){
            currInvObject[e] = currInvObject[e] + newInvObject[e];
        }
        else if(!inArray(e,allCurrKeys)){
            currInvObject[e] = newInvObject[e];
        }
        
    }
    
    var finalArray = Arrify(currInvObject);                     //convert updated object back to array and sort by string
    finalArray = finalArray.sort(function(a, b) { 
        return a[1] > b[1] ? 1 : -1;
    });
    
    return finalArray;
}

function inArray(x,arr){                          
    return arr.indexOf(x) > -1;
}
 
function objectify(arr){
    return arr.reduce(function(previous, current){
        previous[current[1]] = current[0];
        return previous;
    }, {})
}

function Arrify(obj){
    var myArray = [];
    
    for (var key in obj) {
        myArray.push([obj[key],key]);
    }
   return (myArray);
}


// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv,newInv));