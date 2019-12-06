OBJECT[ID.TREE] = {
    IMG:4,
    SOUND:0,
    NEW:[
    [1,1,2,3],//image
    [NO_SOUND],//sound
    [10,40,60,80],//x
    [5,5,5,5],//y
    ],
};

function callbackTree(type,indexA,indexB){
    var aniA = _aniCon2.getAnimate(indexA);
    switch (type) {
        case AnimateContainer.END_FRAME:
            if(_aniCon2.getCount(ID.TREE) < 10 & getRandom(0,2)==0){
                if(aniA.reverseX == -1){
                    _aniCon2.newAnimate(ID.TREE,STATE[ID.TREE].NEW,210,160,-1,null,callbackTree);
                }
                else{
                    _aniCon2.newAnimate(ID.TREE,STATE[ID.TREE].NEW,260,160,1,null,callbackTree);
                }
                _aniCon2.deleteAnimate(indexA);
            }
        break;
    }    
}