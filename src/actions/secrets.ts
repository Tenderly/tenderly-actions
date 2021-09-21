export interface Secrets {
    /**
     * Gets secret with key or throws if secret does not exist.
     */
    get(key: string): Promise<string>;
}
