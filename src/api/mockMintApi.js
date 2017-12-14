import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
//NOTE  for a referenge https://en.wikipedia.org/wiki/Royal_Canadian_Mint
//      Coin markings, including mint marks and privy marks
const mints = [
  {
    id: '1',
    value:"P",
    description:"From 2001 to 2006, most 1¢, 5¢, 10¢, 25¢, and 50¢ coins issued for circulation were struck with a P Mint Mark to represent the Royal Canadian Mint's plating process.",
    country:"Canada"
  },
  {
    id: '2',
    value:"A",
    description:"Used on 2005 palladium test coin to signify the coins were struck from Lot A.",
    country:"Canada"
  },
  {
    id: '3',
    value:"B",
    description:"Used on 2005 palladium test coin to signify the coins were struck from Lot B.",
    country:"Canada"
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (mints) => {
  return mints[mints.length-1].id+1;
};

class MintApi {
  static getAllMints() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], mints));
      }, delay);
    });
  }

  static saveMint(mints) {
    mints = Object.assign({}, mints); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
/*      const minAuthorNameLength = 3;
        if (author.firstName.length < minAuthorNameLength) {
          reject(`First Name must be at least ${minAuthorNameLength} characters.`);
        }

        if (author.lastName.length < minAuthorNameLength) {
          reject(`Last Name must be at least ${minAuthorNameLength} characters.`);
        }
*/
        if (mints.id) {
          const existingNominalIndex = mints.findIndex(a => a.id == mints.id);
          mints.splice(existingNominalIndex, 1, mints);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          mints.id = generateId(mints);
          mints.push(mints);
        }

        resolve(mints);
      }, delay);
    });
  }

  static deleteMint(mintId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfNominalToDelete = mints.findIndex(mints => {
          mints.Id == mintId;
        });
        mints.splice(indexOfNominalToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default MintApi;
