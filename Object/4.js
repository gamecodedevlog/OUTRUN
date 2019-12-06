OBJECT[ID.CARS] = {
    IMG:6,
    SOUND:1,
    NEW_1:[
    [1,1],//image
    [NO_SOUND],//sound
    [5,5],//x
    [5,5],//y
    [5,5],//gravity power
    ],
    NEW_2:[
    [2,2],//image
    [NO_SOUND],//sound
    [5,5],//x
    [5,5],//y
    [5,5],//gravity power
    ],
    NEW_3:[
    [3,3],//image
    [NO_SOUND],//sound
    [5,5],//x
    [5,5],//y
    [5,5],//gravity power
    ],
    NEW_4:[
    [4,4],//image
    [NO_SOUND],//sound
    [5,5],//x
    [5,5],//y
    [5,5],//gravity power
    ],
    NEW_5:[
    [5,5],//image
    [NO_SOUND],//sound
    [5,5],//x
    [5,5],//y
    [5,5],//gravity power
    ],
};

function callbackCars(type,indexA,indexB){
    var aniA = _aniCon.getAnimate(indexA);
    var aniB = _aniCon.getAnimate(indexB);
    switch (type) {
        case AnimateContainer.COLLISION_DOWN:
            _aniCon.deleteAnimate(indexA);
        break;
        case AnimateContainer.COLLISION_LEFT:
        case AnimateContainer.COLLISION_RIGHT:
            aniA.setReverseX(aniA.reverseX * -1);
        break;
        case AnimateContainer.COLLISION:
            aniA.setReverseX(aniA.reverseX * -1);
            if(aniB.id == ID.MY_CAR){
                _aniCon.setState(indexB,STATE[ID.MY_CAR].CRASH,aniB.x,aniB.y);
                _aniCon.newAnimate(ID.CAR_FX,STATE[ID.CAR_FX].CRASH,aniA.x,aniA.y+30,-1,null,callbackCarFx);  
            }
        break;
        case AnimateContainer.NEXT_FRAME:
        break;
        case AnimateContainer.END_FRAME:
        break;
    }    
}
