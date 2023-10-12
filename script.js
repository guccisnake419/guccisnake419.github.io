

//TODO: 
//1. Implement client side storage to store name and high score
//2. Add homepage/landing page that askes for client's name
//3. Add gameover sequence, that resets the whole game
let levelnum= 1;
function playgame(){
    // const title = React.createElement("h1", null, "GUESS THE DIFFERENT BOX");
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
    
    const level=(
        <div>
        <h2 id ="level">
            LEVEL  &nbsp;
            <span id= "level_played">{levelnum}</span>

        </h2>
        <p>
            <h2>HIGHSCORE &nbsp;
            <span id= "level_played">{Person.highscore}</span></h2>
        </p>
        </div>
        
    ) 

    ReactDOM.render([gamebox,level], document.getElementById("root"));


    makeRandBox();

}

//handles the first page to get the name 
  
function handleSubmit(){
    alert('A name was submitted: ' + player.value);
    Person.name= player.value
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
    playgame();

}
const Person ={
    name:"",
    score:0,
    highscore :0
}
const Game= {
    player: getName(),
}

function getName(){

    const namebox=(
        <div id="namebox">
            <p><h3>ENTER YOUR NAME</h3></p>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type='text' id='player' ></input>
                    <input type='submit'></input>
                </label>
            </form>
            
        </div>
    )
    ReactDOM.render([namebox], document.getElementById("root"));

    return document.getElementById("name").value;
}
