var carPic = document.createElement("img");
var otherCarPic = document.createElement("img");
var trackPiks = [];


var picsToLoad = 0;

function countLoadedImagesAndLaunchIfReady() {
    picsToLoad--;
    if(picsToLoad == 0){
        imageLoadingDoneSoStartGame();
    }
}


function beginLoadingImage(imgVar, fileName) {
    imgVar.onload = countLoadedImagesAndLaunchIfReady;
    imgVar.src ="images/" + fileName;
}

function loadImageForTrackCode(trackCode, fileName) {
    trackPiks[trackCode] = document.createElement("img");
    beginLoadingImage(trackPiks[trackCode],fileName);
}

function loadImages() {
    var imageList = [
        {varName:carPic, theFile:"car.png"},
        {varName:otherCarPic, theFile:"car1.png"},
        {trackType: TRACK_ROAD, theFile:"brick.png"},
        {trackType:TRACK_WALL, theFile:"brick1.png"},
        {trackType:TRACK_GOAL, theFile:"tribune_overhang_striped.png"},
        {trackType:TRACK_TREE, theFile:"tree_small.png"},
        {trackType:TRACK_FLAG, theFile:"tires_red_alt.png"}
    ];

    picsToLoad = imageList.length;

    for(var i =0; i<imageList.length;i++){
        if(imageList[i].varName != undefined){
           beginLoadingImage(imageList[i].varName, imageList[i].theFile); 
    } else {
        loadImageForTrackCode( imageList[i].trackType, imageList[i].theFile);
    }
}

}