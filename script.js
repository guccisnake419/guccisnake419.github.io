//TODO: 
//1. Implement client side storage to store name and high score
//2. Add homepage/landing page that askes for client's name
//3. Add gameover sequence, that resets the whole game

const title = React.createElement("h1", null, "GUESS THE DIFFERENT BOX");
const gamebox = (
    <div className="outer_box" >
        <div className="row_1" id="flex">
            <div className="inner1 box_one box1" onClick={checkStat}></div>
            <div className="inner1 diffbox box_two box2" onClick={checkStat}></div>
            <div className="inner1 box_three box3" onClick={checkStat}></div>
        </div>
        <div className="row_2" id="flex">
            <div className="inner1 box_four box4" onClick={checkStat}></div>
            <div className="inner1 box_five box5" onClick={checkStat}></div>
            <div className="inner1 box_six box6" onClick={checkStat}></div>
        </div>
        <div className="row_3" id="flex">
            <div className="inner1 box_seven box7" onClick={checkStat}></div>
            <div className="inner1 box_eight box8" onClick={checkStat}></div>
            <div className="inner1 box_nine box9" onClick={checkStat}></div>
        </div>
   
    </div>
);
let levelnum= 1;
const level=(
    <h2 id ="level">
        LEVEL  &nbsp;
        <span id= "level_played">{levelnum}</span>
    </h2>
) 

ReactDOM.render([title, gamebox,level], document.getElementById("root"));

function makeRandBox(){
    let randnum= Math.floor(Math.random()*9);
    console.log(randnum);
    let colorvalOne= Math.floor(Math.random()*360);
    let colorvalTwo = Math.floor(Math.random()*100)
    let colorvalThree = Math.floor(Math.random()*100)
    let randVal= (Math.floor(Math.random()*5)+1)*10
    let comColor= 'hsl('+ colorvalOne+','+colorvalTwo+'%,'+colorvalThree+'%)';
    let randColor= 'hsl('+ colorvalOne+','+(colorvalTwo-randVal)+'%,'+colorvalThree+'%)'
    const nodelist=document.querySelectorAll(".inner1")
    for(let i=0; i<9;i++){
        nodelist[i].style.backgroundColor=comColor;
    }
    nodelist[randnum].style.backgroundColor=randColor;

    
}
makeRandBox();
function checkStat(event){//checks if a selected box is the answer
    let nodelist = document.querySelectorAll('.inner1')
    let count =0;
    let isright = false;
    for(let i=0;i<9;i++){
        
        if(event.target.style.backgroundColor==nodelist[i].style.backgroundColor){
            count++;
        }

    }
    if(count>1){
        isright=false
    }
    else{
        isright =true
    }

    if(isright){
        alert('You are a right')
        levelnum++;
        document.getElementById('level_played').innerHTML=levelnum;
        makeRandBox();



        
    }
    else{
        alert('Try again')
    }
    
}
