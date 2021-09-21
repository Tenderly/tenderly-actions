export interface Storage {
    /**
     * Gets storage entry.
     */
    getStr(key: string): Promise<string>;
    getInt(key: string): Promise<number>;
    getBigInt(key: string): Promise<bigint>;
    getJson(key: string): Promise<any>;

    /**
     * Writes storage entry.
     */
    putStr(key: string, value: string): Promise<void>;
    putInt(key: string, value: number): Promise<void>;
    putBigInt(key: string, value: bigint): Promise<void>;
    putJson(key: string, value: any): Promise<void>;

    /**
     * Deletes storage entry.
     */
    delete(key: string): Promise<void>;
}
