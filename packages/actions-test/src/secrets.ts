import {Secrets} from "@tenderly/actions";

export class TestSecrets implements Secrets {
    private stored: Map<string, string>;

    constructor() {
        this.stored = new Map<string, string>();
    }

    get(key: string): Promise<string> {
        let value = this.stored.get(key)
        if (value === undefined) {
            return Promise.resolve("")
        }
        return Promise.resolve(value);
    }

    put(key: string, value: string) {
        this.stored.set(key, value)
    }

    delete(key: string) {
        this.stored.delete(key)
    }

    clear() {
        this.stored = new Map<string, string>();
    }
}
