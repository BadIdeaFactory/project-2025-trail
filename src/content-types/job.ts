import BaseContentType from './base-content';
import UIData from './ui-data';

enum PaymentType {
	HOURLY,
	SALARIED,
}

// A job is the player's job.
class Job extends BaseContentType {
	// Whether or not the player is qualified for the job (includes demonstrating those qualifications through an interview.)
	isQualified: (/* player */) => boolean;

	// How the player is paid
	paymentType: PaymentType;

	// How much the player is paid. Either per pay cycle or per hour.
	pay: number;

	// How much the player is paid for time worked.
	getPay(hourCount: number): number {
		// TODO implement based off of payment type and hours worked
		return 0;
	}

	constructor(
		id: string,
		uiData: UIData,
		paymentType: PaymentType,
		pay: number,
		isQualifiedFunction: () => boolean,
	) {
		super(id, uiData);
		this.pay = pay;
		this.paymentType = paymentType;
		this.isQualified = isQualifiedFunction;
	}
}

export default Job;
