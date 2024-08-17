import BaseContentType from './base-content';
import UIData from './ui-data';

// A budget tier is a tier of budget (e.g. "no electricity, electricity only during the day, full electricity")
class BudgetTier extends BaseContentType {
	// The cost of the tier.
	cost: number;

	constructor(id: string, uiData: UIData, cost: number) {
		super(id, uiData);
		this.cost = cost;
	}
}

// A budget item is a line item on a player's budget.
// e.g. "food", "electricity"
class BudgetLineItem extends BaseContentType {
	// The tiers which can be selected.
	budgetTiers: BudgetTier[];

	// Run any state changing effects of the tier.
	apply: (selectedTier: BudgetTier /* player */) => void;

	constructor(id: string, uiData: UIData, budgetTiers: BudgetTier[], applyFunction: () => void) {
		super(id, uiData);
		this.apply = applyFunction;
		this.budgetTiers = budgetTiers;
	}
}

export default { BudgetLineItem, BudgetTier };
