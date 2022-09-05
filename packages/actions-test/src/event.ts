import { BlockEvent, PeriodicEvent, TransactionEvent, WebhookEvent, Log } from "@tenderly/actions";

export class TestPeriodicEvent implements PeriodicEvent {
    time: Date;

    constructor() {
        this.time = new Date(Date.now());
    }
}

export class TestWebhookEvent implements WebhookEvent {
    time: Date;
    payload: any;

    constructor(payload: any) {
        this.payload = payload;
        this.time = new Date(Date.now());
    }
}

export class TestBlockEvent implements BlockEvent {
    blockHash: string;
    blockNumber: number;
    network: string;
    blockDifficulty: string;
    totalDifficulty: string;

    constructor() {
        this.blockHash = "0x";
        this.blockNumber = 0;
        this.network = "0";
        this.blockDifficulty = "0";
        this.totalDifficulty = "0";
    }
}

export class TestTransactionEvent implements TransactionEvent {
    blockHash: string;
    blockNumber: number;
    from: string;
    hash: string;
    network: string;
    to?: string;
    logs: TestLog[];
    input: string;
    value: string;
    nonce: string;
    gas: string;
    gasUsed: string;
    cumulativeGasUsed: string;
    gasPrice: string;
    gasTipCap: string;
    gasFeeCap: string;
    transactionHash: string;

    constructor() {
        this.blockHash = "0x";
        this.blockNumber = 0;
        this.from = "0x";
        this.hash = "0x";
        this.network = "0";
        this.to = "0x";
        this.logs = [new TestLog()];
        this.input = "0x";
        this.value = "0x";
        this.nonce = "0x";
        this.gas = "0x";
        this.gasUsed = "0x";
        this.cumulativeGasUsed = "0x";
        this.gasPrice = "0x";
        this.gasTipCap = "0x";
        this.gasFeeCap = "0x";
        this.transactionHash = "0x";
    }
}

export class TestLog implements Log {
    address: string;
    data: string;
    topics: string[];

    constructor() {
        this.address = "0x";
        this.data = "0x";
        this.topics = ["0x"];
    }
}
