import UIData from './ui-data';

// All content types inherit from the base content type.
class BaseContentType {
	// An identifier used for linking and retrieval.
	id: string;

	// Any data which is displayed to the user in the UI, such as text or visuals.
	uiData: UIData;

	constructor(id: string, uiData: UIData) {
		this.id = id;
		this.uiData = uiData;
	}
}

export default BaseContentType;
