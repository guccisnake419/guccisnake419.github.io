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
        levelnum++;
        document.getElementById('level_played').innerHTML=levelnum;
        makeRandBox();



        
    }
    else{
        alert('Wrong Guess, Game Over :(')
        Person.score= levelnum;
        levelnum=1;
        ReactDOM.unmountComponentAtNode(document.getElementById("root"));
        gameoverseq();
    }
    
}

function replaybutton(){
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
    playgame();

}

function gameoverseq(){
    const gamebox = (
        <div className="gameoverbox" >
            <h3>{Person.name.toUpperCase()}'S SCORE: {Person.score}</h3>
            <h3>HIGHSCORE {Person.highscore}</h3>
            <button type="button" onClick={replaybutton}>Play Again</button>
        </div>
    );
    const gameboxhighscore = (
        <div className="gameoverbox" >
            <h3>NEW HIGHSCORE FROM {Person.name.toUpperCase()}</h3>
            <p><h3> {Person.score}</h3></p>
            <button type="button" onClick={replaybutton}>PLAY AGAIN</button>
        </div>
    );
    if(Person.score> Person.highscore){
        Person.highscore= Person.score
        ReactDOM.render([gameboxhighscore], document.getElementById("root"));
    }
    else{
        
        ReactDOM.render([gamebox], document.getElementById("root"));
    }
    
    
}