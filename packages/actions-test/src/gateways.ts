import {Gateways, Network} from "@tenderly/actions";

export class TestGateways implements Gateways {
    private gatewayConfig: Map<string, any>;

    constructor() {
        this.gatewayConfig = new Map<string, any>();
    }

    getGateway(network: Network, name?: string | undefined): string {
        const gatewayConfig = this.gatewayConfig.get(name ?? "")
        return `https://${network}.gateway.tenderly.co/${gatewayConfig.accessKey}`
    }
}