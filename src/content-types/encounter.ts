import BaseContentType from "./base-content";
import Choice from "./choice";
import UIData from "./ui-data";

// An encounter presents the context for a decision, and a set of choices that a player can make.
class Encounter extends BaseContentType {
    // A set of valid choices for the encounter.
    choices: Choice[];

    // This encounter is not specific to any identity(ies).
    isUniversalEncounter: boolean;

    constructor(
        id: string,
        uiData: UIData,
        isUniversalEncounter: boolean,
        choices: Choice[]
    ) {
        super(id, uiData);
        this.isUniversalEncounter = isUniversalEncounter;
        this.choices = choices;
    }
}

export default Encounter;
