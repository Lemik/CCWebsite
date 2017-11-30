import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const nominals = [
  {
    id: '1',
    value:"1"
  },
  {
    id: '2',
    value:"2"
  },
  {
    id: '5',
    value:"5"
  }

];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (nominal) => {
  return nominal.value();
};

class NominalApi {
  static getAllNominals() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], nominals));
      }, delay);
    });
  }

  static saveNominal(nominal) {
    nominal = Object.assign({}, nominal); // to avoid manipulating object passed in.
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
        if (nominal.id) {
          const existingNominalIndex = nominal.findIndex(a => a.id == nominal.id);
          nominal.splice(existingNominalIndex, 1, nominal);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          nominal.id = generateId(nominal);
          nominal.push(nominal);
        }

        resolve(nominal);
      }, delay);
    });
  }

  static deleteNominal(nominalId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfNominalToDelete = nominals.findIndex(nominal => {
          nominal.nominalId == nominalId;
        });
        nominals.splice(indexOfNominalToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default NominalApi;
