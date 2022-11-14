import { Subscription } from 'rxjs';

export class SubscriptionsContainer {
	private subs: Subscription[] = [];

	set add(subscript: Subscription) {
		this.subs.push(subscript);
	} 

	dispose() {
		this.subs.forEach(s => s.unsubscribe());
	}
}
