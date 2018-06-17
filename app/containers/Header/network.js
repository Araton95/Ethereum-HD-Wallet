
const Network = {
  Offline: { rpc: 'offline', tx_explorer: null },
  'Ropsten Testnet': { rpc: 'https://ropsten.infura.io/LqtmiE9tI5m8iVOUWGB7', tx_explorer: 'https://ropsten.etherscan.io/tx/' },
  // 'Rinkeby Testnet': { rpc: '	https://rinkeby.infura.io/LqtmiE9tI5m8iVOUWGB7', tx_explorer: 'https://rinkeby.etherscan.io/tx/' },
  'Main Net': { rpc: 'https://mainnet.infura.io/LqtmiE9tI5m8iVOUWGB7', tx_explorer: 'https://etherscan.io/tx/' },
};

module.exports = Network;
