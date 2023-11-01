import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Game from "../Game";

import { Toaster } from "../ui/toaster";
import PuzzleDataProvider from "../../providers/PuzzleData";
import GameStatusProvider from "../../providers/GameStatus";

function App() {
    return (
        <PuzzleDataProvider>
            <GameStatusProvider>
                <div className="wrapper">
                    <Toaster />
                    <Header />
                    <Game />
                    <Footer />
                </div>
            </GameStatusProvider>
        </PuzzleDataProvider>
    );
}

export default App;