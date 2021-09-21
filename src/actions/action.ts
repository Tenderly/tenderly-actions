import { Context } from "./context";
import { Event } from "./event";

/**
 * Function must implement ActionFn. Event payload depends on a configured trigger.
 */
export type ActionFn = (ctx: Context, event: Event) => void;
