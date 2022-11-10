require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note pulse puzzle harvest dry equal gesture'; 
let testAccounts = [
"0x2a16ff05cca180943f66df8197acf0b13f7b79a1dc0c9b630cb8f05107fa8699",
"0xf8f73050d15d1eb413f0f98239db77dd465b3649013963e438b207c1de4607b0",
"0xfdb08cc167fa45177e12da2b113cbb800e2c7e17be1f4775b9fa58ec14d9b626",
"0x779e04ba88a50c8f6453e7b82b42fb1ccaba2c94d991350a313e4f18a7525888",
"0x73cdb6aa22fe80e4ac574a26156edf50da8e70a98796491abf9e89a1b185711f",
"0xba3d11c57f641d2c8b902a04fb13c057a3d1089cd44e4f6e5d3a0474c9f6af01",
"0x0ee01f3dafc0a58d2b0b9ee264e0554152021e7131200fd08ad33d5e00aefbc0",
"0x51112430ef0a6510e4836123dc5c1a1dd7db8c1610c045bbfdb9778b7b2f2502",
"0xa26ba52daf17611aa9caef12cf88a87b3ace6cdb064a0718afc5647614e855ff",
"0x6ffb58a423660fa7664b0e868cada9e7c27d8fe94919426fa01fdd0e21a96dc1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

