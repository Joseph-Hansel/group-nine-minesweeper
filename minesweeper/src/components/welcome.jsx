function Welcome(){
    return(
        <div>
            <h2>Welcome to MInesweeper.</h2>
            <div>
                <div>
                    <p>Instructions.</p>
                    <ol>
                        <li>Click to reveal a cell.</li>
                        <li>Right-click to place a flag.</li>
                        <li>Reveal all safe cells to win.</li>
                        <li>Avoid the mines!</li>
                    </ol>
                </div>
            </div>
            <button>START GAME.</button>
        </div>
    );
};

export default Welcome;