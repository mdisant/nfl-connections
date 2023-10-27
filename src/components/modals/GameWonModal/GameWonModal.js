import React from "react";
import BaseModal from "../BaseModal";

import { generateEmojiGrid } from "../../../lib/game-helpers";
import ShareScoreButton from "../../ShareScore";
import CountdownToNextPuzzle from "../../Countdown";
import { PuzzleDataContext } from "../../../providers/PuzzleData";

function GameWonModal({ open, submittedGuesses }) {
    const { gameData } = React.useContext(PuzzleDataContext);

    return (
        <BaseModal
            title="You won the game!"
            initiallyOpen={open}
            footerElements={<ShareScoreButton />}
            showActionButton={false}
        >
            <p>{"Great job, share your results!"}</p>
            <div className="justify-center">
                {/* the whitespace: pre style makes the emoji grid appear with new lines character */}
                <span className="text-center whitespace-pre">
                    {"\n"}
                    {generateEmojiGrid(gameData, submittedGuesses)}
                </span>
                <CountdownToNextPuzzle />
            </div>
        </BaseModal>
    );
}

export default GameWonModal;