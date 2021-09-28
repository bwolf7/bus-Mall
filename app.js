//constructor
let objectBuilder = function (name,imageSrc,times){
    this.name = name;
    this.path = imageSrc;
    this.times = times;
    this.timesHown = 0;

}

objectBuilder.allImages.push(this);
objectBuilder.allImages = [];

let totalClicks = 0;

const leftImage = document.getElementById("leftImage");
const centerImage = document.getElementById("centerImage");
const rightImage = document.getElementById("rightImage");

let randomNumberGenerator = function (){
    Math.floor(Math.random()*objectBuilder.allImages.length)
}












let viewResults = function (){
}
