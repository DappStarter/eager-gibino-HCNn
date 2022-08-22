require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone stool regret meadow column hundred light army gift'; 
let testAccounts = [
"0x07cc1258011146014c7ad73093218a73a2e17c3480fb7dab43e0268b696179d1",
"0xf571389f2cfa1ce55bd3d6107b66bfadf8d49a5cebbf952c31ae2b5f1b9c18a1",
"0x39f769c77dbbb8b7d55547ea9699c8f4125bfa611710bffd1d8cce013ca571fa",
"0x07f1fb4fa78230b1e96604383ee6a82acb3a591f632e66ecb463ba15b90fc0e6",
"0x4c18e763a2d96ff2ca26ebe5a78e4bd8da24517a5950b305f5e169d266cf50df",
"0x11948fe43b1b29b4e5b4d027894b89f12fc4c90f645db666e35de7c9cc501d7b",
"0xcef6b01edc0bb3d6e52be246ffffcddcc1713cba85c2f001c55821c07520d7a1",
"0x968deca4ae30f763aec21bca06bfdb1a7e4d2362963f16eb14ac0e6daa71dc6d",
"0x93525a71e8220fad194c4e54088c1a2e4262ca5fec32f41d19421eb850c81fec",
"0xb6535cf6531966360f97a60c5152b6f1c289053f09d08d3a00d549df135b639c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


