var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};

for (var key in collection) {
    if (collection.hasOwnProperty(key)) {
        var element = collection[key]["tracks"];
        
        if(element != undefined){
            //console.log('I have that  id key and its track value is ' + element);
            collection[key]["tracks"].push("free");
        }else{
            //console.log('I have a id key but no such property ');
            collection[key]["tracks"] = ["new free"];
        }
        
    }
}

console.log(collection)