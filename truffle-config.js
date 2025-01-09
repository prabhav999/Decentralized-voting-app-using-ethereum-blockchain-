const HDWalletProvider = require('@truffle/hdwallet-provider');  
const Web3 = require('web3');  
  
const provider = new HDWalletProvider('seed phrase here', 'http://127.0.0.1:7545');  
const web3 = new Web3(provider);  
  
module.exports = {  
    networks: {  
        development: {  
            host: "127.0.0.1",  
            port: 7545,  
            network_id: "*"  
        }  
    },  
    compilers: {  
        solc: {  
            version: "^0.8.0"  
        }  
    }  
};