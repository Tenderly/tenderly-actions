import { Storage } from "./storage";
import { Secrets } from "./secrets";

export interface Context {
    /**
     * Project's key-value store.
     */
    storage: Storage;

    /**
     * Project's secrets.
     */
    secrets: Secrets;
}
