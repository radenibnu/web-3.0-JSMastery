// https://eth-ropsten.alchemyapi.io/v2/0nXi3HNIEtDZck7ik635cI279gENg2ib

require('@nomiclabs/hardhat-waffle');


module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/0nXi3HNIEtDZck7ik635cI279gENg2ib',
      accounts: [ 'e1305e0ef8b232e28812b91d389c1931d8e02bff408d6714393ce07e6d806029' ]
    }
  }
}