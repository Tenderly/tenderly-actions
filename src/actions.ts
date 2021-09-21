/**
 * Function must implement ActionFn. Event payload depends on a configured trigger.
 */
export type ActionFn = (ctx: Context, event: Event) => void;

/**
 * Event provided to function dependens on a configured trigger.
 */
export interface Event {}

/**
 * For trigger type "periodic"
 */
export interface PeriodicEvent extends Event {
    /**
     * Time when this periodic event is created.
     */
    time: Date;
}

/**
 * For trigger type "webhook"
 */
export interface WebhookEvent extends Event {
    /**
     * Time when webhook required is received.
     */
    time: Date;

    /**
     * JSON-body of POST request.
     */
    payload: any;
}

/**
 * For trigger type "block
 */
export interface BlockEvent extends Event {
    /**
     * Chain identifier.
     */
    network: string

    blockHash: string
    /**
     * Hex block number.
     */
    blockNumber: string
}

export interface TransactionEvent extends Event {
    /**
     * Chain identifier.
     */
    network: string

    blockHash: string
    /**
     * Hex block number.
     */
    blockNumber: string

    /**
     * Transaction hash.
     */
    hash: string

    from: string
    to?: string
}

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

export interface Secrets {
    /**
     * Gets secret with key or throws if secret does not exist.
     */
    get(key: string): Promise<string>;
}

export interface Storage {
    /**
     * Gets storage entry.
     */
    getStr(key: string): Promise<string>;
    getBigInt(key: string): Promise<bigint>;
    getJson(key: string): Promise<any>;

    /**
     * Writes storage entry.
     */
    putStr(key: string, value: string): Promise<void>;
    putBigInt(key: string, value: bigint): Promise<void>;
    putJson(key: string, value: any): Promise<void>;

    /**
     * Deletes storage entry.
     */
    delete(key: string): Promise<void>;
}
