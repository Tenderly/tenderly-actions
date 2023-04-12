import {Metadata, Network} from "@tenderly/actions";

export class TestMetadata implements Metadata {
    private readonly network: Network | undefined;

    constructor(network?: Network) {
        if (this.network) {
            this.network = network;
        }
    }

    getNetwork(): Network | undefined {
        return this.network;
    }

}
