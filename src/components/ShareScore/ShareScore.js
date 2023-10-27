import React from "react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { shareStatus } from "../../lib/share-game";
import { GameStatusContext } from "../../providers/GameStatus";
import { PuzzleDataContext } from "../../providers/PuzzleData";

function ShareScoreButton({ buttonText = "Share", className = "" }) {
    const { gameData } = React.useContext(PuzzleDataContext);
    const { submittedGuesses } = React.useContext(GameStatusContext);
    const { toast } = useToast();
    function handleShareToClipboard() {
        toast({
            label: "Notification",
            title: "",
            description: "Copied to clipboard!",
        });
    }
    function handleShareFailure() {
        toast({
            label: "Notification",
            title: "",
            description: "Was unable to copy to clipboard / share.",
        });
    }
    return (
        <Button
            className={cn(className, "w-full")}
            variant="share"
            onClick={() =>
                shareStatus(
                    gameData,
                    submittedGuesses,
                    handleShareToClipboard,
                    handleShareFailure,
                    true
                )
            }
        >
            {buttonText}
        </Button>
    );
}

export default ShareScoreButton;