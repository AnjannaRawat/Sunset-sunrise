const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "sunrise1.png";

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
if (backgroundImg){
    background(backgroundImg);
}


    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
var Res=await fetch ("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
var Resjson=await Res.json();
var DateTime= Resjson.datetime
var Hour=DateTime.slice(11,13)
console.log(Hour);
if (Hour>=04 && Hour<=06){
    bg="sunrise1.png"
    }
    else if (Hour>=06 && Hour<=08){
        bg="sunrise2.png"
        }
        else if (Hour>=08 && Hour<=10){
            bg="sunrise3.png"
            }
            else if (Hour>=10 && Hour<=12){
                bg="sunrise4.png"
                }
                else if (Hour>=12 && Hour<=15){
                    bg="sunrise5.png"                
                }
                else if (Hour>=15 && Hour<=17){
                    bg="sunrise6.png"
                    }
                else if (Hour>=17 && Hour<=19){
                        bg="sunset7.png"
                        }
                        else if (Hour>=19 && Hour<=21){
                            bg="sunset8.png"
                            }
                            else if (Hour>=21 && Hour<23){
                        bg="sunset9.png"
                        }
                        else if (Hour>=23 && Hour<=00){
                            bg="sunset10.png"
                            }
                            else if (Hour>=00 && Hour<=03){
                                bg=
                                "sunset11.png"
                                }
                                else{
                                    bg= "sunset12.png"
                                }
backgroundImg=loadImage(bg)
}
