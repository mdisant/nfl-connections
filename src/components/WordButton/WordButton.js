import React from "react";
import styles from "./WordButton.module.css";
import { Toggle } from "../ui/toggle";

import { GameStatusContext } from "../../providers/GameStatus";

function WordButton({ word, fullCandidateSize }) {
    const { guessCandidate, setGuessCandidate } =
        React.useContext(GameStatusContext);
    const [isSelected, setIsSelected] = React.useState(
        !!guessCandidate.includes(word)
    );

    const isCandidateListFull = guessCandidate.length === fullCandidateSize;

    React.useEffect(() => {
        setIsSelected(!!guessCandidate.includes(word));
    }, [guessCandidate]);

    function flipSelection() {
        if (isSelected) {
            // remove from candidateGuess
            const updatedGuessCandidate = guessCandidate.filter((w) => {
                return w !== word;
            });
            setGuessCandidate(updatedGuessCandidate);
            // set state to *not* selected
            setIsSelected(false);
        } else {
            // check if the candidate array is full
            if (!isCandidateListFull) {
                // add to candidateGuess array
                setGuessCandidate([...guessCandidate, word]);
                // set state to *selected*
                setIsSelected(true);
            }
        }
    }

    return (
        <Toggle
            className={`${styles.growShrink} select-none`}
            variant="outline"
            pressed={isSelected}
            onClick={flipSelection}
        >
            <p
                style={{ fontSize: "0.75rem" }}
                className="font-helvetica sm:text-xs md:text-xs"
            >
                {word}
            </p>
        </Toggle>
    );
}

export default WordButton;