OBJECT[ID.MY_CAR] = {
    IMG:4,
    SOUND:0,
    NEW:[
    [1],//image
    [NO_SOUND],//sound
    [0],//x
    [0],//y
    [5]//gravity power
    ],
    LEFT:[
    [2,2,2,2],//image
    [NO_SOUND],//sound
    [-1,-2,-3,-4],//x
    [0,0,0,0],//y
    [5,5,5,5]//gravity power
    ],
    RIGHT:[
    [3,3,3,3],//image
    [NO_SOUND],//sound
    [1,2,3,4],//x
    [0,0,0,0],//y
    [5,5,5,5]//gravity power
    ],
    CRASH:[
    [2,3,2,3],//image
    [NO_SOUND],//sound
    [1,2,3,4],//x
    [0,0,0,0],//y
    [5,5,5,5]//gravity power
    ]
};

function callbackCar(type,indexA,indexB){
    var aniA = _aniCon.getAnimate(indexA);
    var aniB = _aniCon.getAnimate(indexB);
    switch (type) {
        case AnimateContainer.END_FRAME:
            _aniCon.setState(indexA,STATE[ID.MY_CAR].NEW,_player_ani.x,_player_ani.y);
        break;
        case AnimateContainer.NEXT_FRAME:
            var tableX = [150,250];
            var tableReverseX = [1,-1];
            var tableCars = [STATE[ID.CARS].NEW_1,STATE[ID.CARS].NEW_2,STATE[ID.CARS].NEW_3,STATE[ID.CARS].NEW_4,STATE[ID.CARS].NEW_5];
            var idxTable = getRandom(0,2);
            
            if(getRandom(0,50)==0){
                _aniCon.newAnimate(ID.CARS,tableCars[getRandom(0,tableCars.length)],tableX[idxTable],10,tableReverseX[idxTable],null,callbackCars);
            }
        break;
        case AnimateContainer.COLLISION:
        break;
    }    
}