import {BlockEvent, PeriodicEvent, TransactionEvent, WebhookEvent} from "tenderly-actions";

export class TestPeriodicEvent implements PeriodicEvent {
    time: Date;

    constructor() {
        this.time = new Date(Date.now())
    }
}

export class TestWebhookEvent implements WebhookEvent {
    time: Date;
    payload: any;

    constructor(payload: any) {
        this.payload = payload;
        this.time = new Date(Date.now())
    }
}

export class TestBlockEvent implements BlockEvent {
    blockHash: string;
    blockNumber: number;
    network: string;

    constructor() {
        this.blockHash = "0x"
        this.blockNumber = 0
        this.network = "0"
    }
}

export class TestTransactionEvent implements TransactionEvent {
    blockHash: string;
    blockNumber: number;
    from: string;
    hash: string;
    network: string;
    to?: string;

    constructor() {
        this.blockHash = "0x"
        this.blockNumber = 0
        this.from = "0x"
        this.hash = "0x"
        this.network = "0"
        this.to = "0x"
    }
}
