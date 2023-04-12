import {ActionFn, Context, Event} from "@tenderly/actions";
import {TestSecrets} from "./secrets";
import {TestStorage} from "./storage";
import { TestGateways } from "./gateways";
import {TestMetadata} from "./metadata";

export class TestContext implements Context {
    secrets: TestSecrets;
    storage: TestStorage;
    gateways: TestGateways;
    metadata: TestMetadata;

    constructor() {
        this.secrets = new TestSecrets();
        this.storage = new TestStorage();
        this.gateways = new TestGateways();
        this.metadata = new TestMetadata();
    }
}

export class TestRuntime {
    context: TestContext;

    constructor() {
        this.context = new TestContext()
    }

    async execute(action: ActionFn, event: Event): Promise<any> {
        return action(this.context, event)
    }
}
