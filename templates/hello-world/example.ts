// This is example.
import {
	ActionFn,
	Context,
	Event
} from 'tenderly-actions'

export const helloWorldFn: ActionFn = async (context: Context, event: Event) => {
	// Cast event to one of PeriodicEvent, WebhookEvent, BlockEvent or TransactionEvent based on your trigger configuration
    // let blockEvent = event as BlockEvent
	console.log("Hello World!");
};
