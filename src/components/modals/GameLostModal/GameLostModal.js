import React from "react";
import BaseModal from "../BaseModal";
import { SolvedWordRow } from "../../GameGrid";
import ShareScoreButton from "../../ShareScore";
import CountdownToNextPuzzle from "../../Countdown";
import { PuzzleDataContext } from "../../../providers/PuzzleData";

function GameLostModal({ open }) {
    const { gameData } = React.useContext(PuzzleDataContext);

    return (
        <BaseModal
            title="You lost."
            initiallyOpen={open}
            footerElements={<ShareScoreButton />}
            showActionButton={false}
        >
            <div className="grid gap-y-2">
                <p className="text-lg font-[500] text-center">
                    Better luck next time. The correct answers are below.
                </p>
                {gameData.map((obj) => (
                    <SolvedWordRow key={obj.category} {...obj} />
                ))}
            </div>
            <CountdownToNextPuzzle />
        </BaseModal>
    );
}

export default GameLostModal;