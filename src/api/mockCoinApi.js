import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const coins = [
  {
    id:"1",
    title: "title1",
    image: "image2",
    nominal: "0.25",
    mint: "GG",
    year: "2007",
    Description: ""
  },
  {
    id:"2",
    title: "title2",
    image: "image1",
    nominal: "0.25",
    mint: "GG",
    year: "2007",
    Description: ""
  },
  {
      id:"3",
      title: "title3",
      image: "image2",
      nominal: "0.25",
      mint: "GG",
      year: "2007",
      Description: ""
    }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (coin) => {
  return replaceAll(coin.title, ' ', '-');
};

class CoinApi {
  static getAllCoins() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], coins));
      }, delay);
    });
  }

  static saveCoins(coin) {
    coin = Object.assign({}, coin); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCoinTitleLength = 1;
        if (coin.title.length < minCoinTitleLength) {
//todo rules
          reject(`Title must be at least ${minCoinTitleLength} characters.`);
        }

        if (coin.id) {
          const existingCoinIndex = coin.findIndex(a => a.id == coin.id);
          coins.splice(existingCoinIndex, 1, coin);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new coins in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          coin.id = generateId(coin);
          coin.Description = `http://www.pluralsight.com/Coins/${coin.id}`;
          coins.push(coin);
        }

        resolve(coin);
      }, delay);
    });
  }

  static deleteCoin(coinId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCoinToDelete = coins.findIndex(coin => {
          coin.coinId == coinId;
        });
        coins.splice(indexOfCoinToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CoinApi;
