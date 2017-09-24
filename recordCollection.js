// Setup
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
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
    
  for (var id in collection) {
    if (collection.hasOwnProperty(id)) {
        var element = collection[id][prop];

        if(prop == "artist" && value != ""){
            if(element != undefined){
                collection[id][prop] = value;
            }else{
                collection[id][prop] = value;
            }
         }
         if(prop == "artist" && value == ""){
            delete collection[id][prop];
         }
        
        if(prop == "tracks" && value != ""){
            if(element != undefined){
                collection[id][prop].push(value);
            }else{
                collection[id][prop] = [value];
            }
         }
         if(prop == "tracks" && value == ""){
            delete collection[id][prop];
         }
        }

} 

 return collection;
}


console.log(updateRecords(2548, "artist", ""));
//console.log(typeof collection[5439]["tracks"]);

