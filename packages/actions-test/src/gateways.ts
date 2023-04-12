import {Gateways, Network} from "@tenderly/actions";
import {TestMetadata} from "./metadata";

export class TestGateways implements Gateways {
    private gatewayConfig: Map<string, any>;
    private metadata: TestMetadata;

    constructor() {
        this.gatewayConfig = new Map<string, any>();
        this.metadata = new TestMetadata()
    }

    getGateway(network?: Network, name?: string | undefined): string {
        if (!network) {
            const metadataNetwork = this.metadata.getNetwork()
            if (!metadataNetwork) {
                throw new Error("No network found for current execution!")
            }
        }
        const gatewayConfig = this.gatewayConfig.get(name ?? "")
        return `https://${network}.gateway.tenderly.co/${gatewayConfig?.accessKey}`
    }

    setConfig(name: string, config: any) {
        this.gatewayConfig.set(name, config)
    }
}
