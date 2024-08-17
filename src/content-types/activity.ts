import BaseContentType from "./base-content";
import UIData from "./ui-data";

// An activity is a way for players to spend time in between each month of gameplay.
// e.g. leisure, studying, working
class Activity extends BaseContentType {
    // Run any state changing effects of the activity.
    apply: (/* player */) => void;
    
    constructor(
        id: string,
        uiData: UIData,
        applyFunction: () => void
    ) {
        super(id, uiData);
        this.apply = applyFunction;
    }
}

export default Activity;