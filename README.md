# Web3 Actions

[Tenderly](https://tenderly.co) Web3 Actions will run your code in response to on-chain (or even off-chain) events, usually on your smart contracts.

You can use Web3 Actions to create custom scenarios in order to further deepen your debugging process, create alerting patterns that are not available out-of-the-box in the Alerting section, automating testing or live production execution in the Simulator and Forks, or anything else that comes to (your) mind.

The code Web3 Actions run is called a function. Function must be written in TypeScript (or JavaScript) and runs in Node 14 runtime. Specification of events that your action listens to is called a trigger.

To get started, see [docs](https://docs.tenderly.co/web3-actions/intro-to-web3-actions).

## Release procedure

### Prerequisites
- Having an NPM account with the permissions to publish and unpublish packages

### Release order
`@tenderly/actions-test` depends on `@tenderly/actions` as it uses definitions from that package.

This means that the order of publishing should be:
1. `@tenderly/actions`
2. `@tenderly/actions-test`

### Publishing `@tenderly/actions`
1. Navigate to `packages/actions` directory;
2. Bump the package version in `package.json`;
3. Commit and push both `package.json` and `package-lock.json` to the repo;
4. Run `npm build` command which will generate a `lib` directory, containing typescript definitions;
5. Run `npm publish` command;

### Publishing `@tenderly/actions-test`
1. Navigate to `packages/actions-test` directory;
2. Bump the package version in `package.json`;
3. Commit and push both `package.json` and `package-lock.json` to the repo;
4. (Optional) If there's been a change in `@tenderly/actions` version, bump the dependency version in `package.json`;
5. Run `npm build` command which will generate a `lib` directory, containing typescript definitions;
6. Run `npm publish` command;
