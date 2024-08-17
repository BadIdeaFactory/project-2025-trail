import BaseContentType from "./base-content";
import Encounter from "./encounter";
import UIData from "./ui-data";

// An identity describes the player.
class Identity extends BaseContentType {
    // The set of encounters which are specific to, but not necessarily limited to this identity.
    // Does not include universal encounters.
    encounters: Encounter[]
    
    constructor(
        id: string,
        uiData: UIData,
        encounters: Encounter[],
        ) {
            super(id, uiData)
            this.encounters = encounters;
        }
}
    
// The player's gender identity.
class Gender extends Identity { }

// The player's demographic age group.
class AgeGroup extends Identity { }

// The player's sexual orientation.
class SexualOrientation extends Identity { }

// The player's race.
class Race extends Identity { };

export default { Identity, Gender, AgeGroup, Race, SexualOrientation };