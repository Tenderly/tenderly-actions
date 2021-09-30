import {Storage} from "tenderly-actions";

export class TestStorage implements Storage {
    private stored: Map<string, string>;

    constructor() {
        this.stored = new Map<string, string>();
    }

    delete(key: string): Promise<void> {
        this.stored.delete(key)
        return Promise.resolve(undefined);
    }

    getBigInt(key: string): Promise<bigint> {
        let value = this.stored.get(key)
        if (value === undefined) {
            throw new Error("NotFound")
        }
        return Promise.resolve(BigInt(value));
    }

    getJson(key: string): Promise<any> {
        let value = this.stored.get(key)
        if (value === undefined) {
            throw new Error("NotFound")
        }
        return Promise.resolve(JSON.parse(value));
    }

    getStr(key: string): Promise<string> {
        let value = this.stored.get(key)
        if (value === undefined) {
            throw new Error("NotFound")
        }
        return Promise.resolve(value);
    }

    putBigInt(key: string, value: bigint): Promise<void> {
        this.stored.set(key, value.toString())
        return Promise.resolve(undefined);
    }

    putJson(key: string, value: any): Promise<void> {
        this.stored.set(key, JSON.stringify(value))
        return Promise.resolve(undefined);
    }

    putStr(key: string, value: string): Promise<void> {
        this.stored.set(key, value)
        return Promise.resolve(undefined);
    }

    clear() {
        this.stored = new Map<string, string>();
    }

}