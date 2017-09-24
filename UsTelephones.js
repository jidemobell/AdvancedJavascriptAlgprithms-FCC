
function inArray(x,arr){
    return arr.indexOf(x) > -1;
}


function telephoneCheck(str) {

    var newStr = str.split(''); 
    var allNumber = [];
    var possibles = "0123456789";
    var characters = [' ','-','(',')'];
    var countNumber = 0;
    
    //check for invalid entry
    for (var i = 0; i < newStr.length; i++) {
        var e = newStr[i];
       
        if(!inArray(e,possibles) && !inArray(e,characters)){
            return false;
        }
        else if (inArray(e,possibles)){
            countNumber += 1;
            allNumber.push(e);
        }
        
    }

    if(countNumber > 11 || countNumber < 10){
        return false;
    }
    else if(countNumber == 11 && allNumber[0] != 1){
         return false;
    }
    else if(countNumber == 11 && allNumber[0] == 1){
        return phoneMatcher(str);
   }
   else if (countNumber == 10) {
       return phoneMatcher(str);
   }
}

function phoneMatcher (str){
    var re = /^(1\s*)?(\(\d{3}\)|\d{3})(\s*|-)?\s*?\d{3}(\s|-)?\d{4}$/g;

     return re.test(str);
}

