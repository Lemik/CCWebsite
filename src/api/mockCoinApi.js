import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
let NumberOfCoinsInCollection = 3;
const mock_coins = [
  {
    id:"1",
    title: "title1",
    year: "2005",
    nominal: "0.25",
    mint: "GG",
    Description: "this is empty fiels 1",
    imageA: "imageA",
    imageB: "imageB"
  },
  {
    id:"2",
    title: "title2",
    year: "2006",
    nominal: "0.25",
    mint: "GG",
    Description: "this is empty fiels 2",
    imageA: "imageA",
    imageB: "imageB"
  },
  {
    id:"3",
    title: "title3",
    year: "2007",
    nominal: "0.25",
    mint: "GG",
    Description: "this is empty fiels 3",
    imageA: "imageA",
    imageB: "imageB"
  }

];
//function replaceAll(str, find, replace) {
//  return str.replace(new RegExp(find, 'g'), replace);
//}

//This would be performed on the server in a real app. Just stubbing in.
// TODO: Create proper coinId
const generateId = (coin) => {
//  return replaceAll(coin.title, ' ', '-');
//return coin.year+coin.mint;
return NumberOfCoinsInCollection++;
};


class CoinApi {
  static getAllCoins() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], mock_coins));
      }, delay);
    });
  }

  static saveCoin(coin) {
    debugger;
    coin = Object.assign({}, coin); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        //const minCoinTitleLength = 1;
//        if (coin.title.length < minCoinTitleLength) {
//TODO add more rules for validation of coin on server
//        }

        if (coin.id) {
          const existingCoinIndex = mock_coins.findIndex(a => a.id == coin.id);
          mock_coins.splice(existingCoinIndex, 1, coin);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new coins in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          coin.id = generateId(coin);
          coin.Description = `http://www.pluralsight.com/Coins/${coin.id}`;
          mock_coins.push(coin);
        }

        resolve(coin);
      }, delay);
    });
  }

  static deleteCoin(coinId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCoinToDelete = mock_coins.findIndex(coin => {
          coin.coinId == coinId;
        });
        mock_coins.splice(indexOfCoinToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CoinApi;
