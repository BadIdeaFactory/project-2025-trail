import BaseContentType from './base-content';

// An activity is a way for players to spend time in between each month of gameplay.
// e.g. leisure, studying, working
class Activity extends BaseContentType {
	// Run any state changing effects of the activity.
	apply: (/* player */) => void = () => {
		console.log('warning: apply not set on activity with id ' + this.id);
		return;
	};

	// for deserialization purposes
	scriptPath: string = '';
}

export default Activity;
