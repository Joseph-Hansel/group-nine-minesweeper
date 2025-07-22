import Welcome from "./welcome"
import GameScreen from "./gamescreen"

function MineSweeper(){
    return (
        <div>
            <h1>MINI MINESWEEPER</h1>
            <Welcome />
            <GameScreen />
        </div>
    );
};

export default MineSweeper;