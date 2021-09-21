/**
 * Event provided to function dependens on a configured trigger.
 */
export interface Event {
}

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
     * Network identifiers: chain id and Tenderly network slug, if present.
     */
    networkId: bigint
    networkSlug?: string

    blockHash: string
    /**
     * Hex block number.
     */
    blockNumber: string
}

export interface TransactionEvent extends Event {
    /**
     * Network identifiers: chain id and Tenderly network slug, if present.
     */
    networkId: bigint
    networkSlug?: string

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
