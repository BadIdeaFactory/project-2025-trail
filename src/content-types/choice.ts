import BaseContentType from './base-content';
import UIData from './ui-data';

// A choice is a decision that a player can make during an encounter.
class Choice extends BaseContentType {
	// Apply any state changing effects of the choice.
	apply: (/* player */) => void;

	constructor(id: string, uiData: UIData, applyFunction: () => void) {
		super(id, uiData);
		this.apply = applyFunction;
	}
}

export default Choice;
