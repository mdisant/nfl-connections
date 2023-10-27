import React from "react";
import { shuffleGameData } from "../../lib/game-helpers";
import GameGrid from "../GameGrid";
import NumberOfMistakesDisplay from "../NumberMistakes";
import GameLostModal from "../modals/GameLostModal";
import GameWonModal from "../modals/GameWonModal";

import { Separator } from "../ui/separator";

import { PuzzleDataContext } from "../../providers/PuzzleData";
import { GameStatusContext } from "../../providers/GameStatus";
import GameControlButtonsPanel from "../GameButtons";

import ViewResultsModal from "../modals/ViewResultsModal";

function Game() {
    const { gameData, categorySize, numCategories } =
        React.useContext(PuzzleDataContext);
    const { submittedGuesses, solvedGameData, isGameOver, isGameWon } =
        React.useContext(GameStatusContext);

    const [shuffledRows, setShuffledRows] = React.useState(
        shuffleGameData({ gameData })
    );
    const [isEndGameModalOpen, setisEndGameModalOpen] = React.useState(false);
    const [gridShake, setGridShake] = React.useState(false);

    // use effect to update Game Grid after a row has been correctly solved
    React.useEffect(() => {
        const categoriesToRemoveFromRows = solvedGameData.map(
            (data) => data.category
        );
        const dataLeftForRows = gameData.filter((data) => {
            return !categoriesToRemoveFromRows.includes(data.category);
        });
        if (dataLeftForRows.length > 0) {
            setShuffledRows(shuffleGameData({ gameData: dataLeftForRows }));
        }
    }, [solvedGameData]);

    // Handle End Game!
    React.useEffect(() => {
        if (!isGameOver) {
            return;
        }
        const modalDelay = isGameWon ? 2000 : 250;
        const delayModalOpen = window.setTimeout(() => {
            setisEndGameModalOpen(true);
        }, modalDelay);

        return () => window.clearTimeout(delayModalOpen);
    }, [isGameOver]);

    return (
        <>
            <h3 className="text-xl text-center mt-4">
                Create {numCategories} groups of {categorySize}
            </h3>

            <div className={`game-wrapper`}>
                {isGameOver && isGameWon ? (
                    <GameWonModal
                        open={isEndGameModalOpen}
                        submittedGuesses={submittedGuesses}
                    />
                ) : (
                    <GameLostModal
                        open={isEndGameModalOpen}
                        submittedGuesses={submittedGuesses}
                    />
                )}
                <GameGrid
                    gameRows={shuffledRows}
                    shouldGridShake={gridShake}
                    setShouldGridShake={setGridShake}
                />
                <Separator />

                {!isGameOver ? (
                    <>
                        <NumberOfMistakesDisplay />
                        <GameControlButtonsPanel
                            shuffledRows={shuffledRows}
                            setShuffledRows={setShuffledRows}
                            setGridShake={setGridShake}
                        />
                    </>
                ) : (
                    <ViewResultsModal />
                )}
            </div>
        </>
    );
}

export default Game;