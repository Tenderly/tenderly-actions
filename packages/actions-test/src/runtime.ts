import {ActionFn, Context, Event} from "@tenderly/actions";
import {TestSecrets} from "./secrets";
import {TestStorage} from "./storage";
import { TestGateways } from "./gateways";

export class TestContext implements Context {
    secrets: TestSecrets;
    storage: TestStorage;
    gateways: TestGateways;

    constructor() {
        this.secrets = new TestSecrets();
        this.storage = new TestStorage();
        this.gateways = new TestGateways();
    }
}

export class TestRuntime {
    context: TestContext;

    constructor() {
        this.context = new TestContext()
    }

    async execute(action: ActionFn, event: Event): Promise<void> {
        await action(this.context, event)
    }
}
