
var arr = [[1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]];

function inArray(x,arr){
    return arr.indexOf(x) > -1;
}

function removeAllOccurence(arr,x){
    var i=0;
    while(i < arr.length){
        if(arr[i] == x){
            arr.splice(i,1);
            i--;
        }
        i++;
    }
    return arr;
}

function returnUniqueOccurences(arr){
    var arr = arr.filter(function (x, i, a) { 
        return a.indexOf(x) == i; 
    });

    return arr;
}


function combineSet(args){
    var arr = Array.from(arguments);
    var output = arr.reduce(function(a,b){
        var i=0;
        while(i < b.length){
            if(inArray(b[i],a)){
                a = removeAllOccurence(a,b[i]);
                b = removeAllOccurence(b,b[i]);
                i=0;
            }
            i++;
        }
        return returnUniqueOccurences(a.concat(b));
});

return output;

}



