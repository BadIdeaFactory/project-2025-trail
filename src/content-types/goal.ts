import BaseContentType from "./base-content";
import UIData from "./ui-data";

// A goal is a win condition for the player.
class Goal extends BaseContentType {
    // Whether or not the player has achieved the goal.
    isAchieved: (/* player */) => boolean; 

    constructor(
        id: string,
        uiData: UIData,
        isAchievedFunction: () => boolean
    ) {
        super(id, uiData);
        this.isAchieved = isAchievedFunction;
    }
}

export default Goal;
