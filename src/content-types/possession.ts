import BaseContentType from "./base-content";
import UIData from "./ui-data";

// A possession is something the player owns. It can be anything from food, to a house.
class Possession extends BaseContentType {
    // The cost to purchase a single unit of the possession.
    cost: number;

    constructor(
        id: string,
        uiData: UIData,
        cost: number
    ) {
        super(id, uiData);
        this.cost = cost;
    }
}

export default Possession;