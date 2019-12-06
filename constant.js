class Enum{
    constructor(constantsList){
        for (let index = 0; index < constantsList.length; index++) {
            this[constantsList[index]] = index;   
            this.length = index + 1;
        }
    }
}

const ID = new Enum(
    [
    "BG",
    "MY_CAR",
    "CAR_FX",
    "TREE",
    "CARS",
    ]
);

var OBJECT;
var IMAGE;
var SOUND;
var STATE;