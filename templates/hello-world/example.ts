import {
	ActionFn,
	Context,
	Event
} from 'tenderly-actions'

export const helloWorldFn: ActionFn = async (context: Context, event: Event) => {
	console.log("Hello World!");
	console.log(event)
};
