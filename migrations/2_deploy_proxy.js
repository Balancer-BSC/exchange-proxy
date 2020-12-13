const ExchangeProxy = artifacts.require("ExchangeProxy");
const WETH9 = artifacts.require("WETH9");

module.exports = async function(deployer, network, accounts) {
    if (network == 'development' || network == 'coverage') {
        await deployer.deploy(WETH9);
        await deployer.deploy(ExchangeProxy, WETH9.address);
    } else if (network == 'kovan-fork' || network == 'kovan') {
        deployer.deploy(ExchangeProxy, '0xd0A1E359811322d97991E03f863a0C30C2cF029C');
    } else if (network == 'bscmain') {
        // this is the BSC mainnet WBNB contract
        await deployer.deploy(ExchangeProxy, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c')
    }
}
