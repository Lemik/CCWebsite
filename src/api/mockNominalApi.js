import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const nominal = [
  { id: '0.01' ,  title:"1 cent"  },
  { id: '0.02' ,  title:"5 cents" },
  { id: '0.10',  title:"10 cents"},
  { id: '0.25' , title:"25 cents"},
  { id: '0.50' , title:"50 cents"},
  { id: '1' , title:"1 Dolar"},
  { id: '2' , title:"2 Dolars"}
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (nominal) => {
  return nominal.value();
};

class NominalApi {
  static getAllNominals() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], nominal));
      }, delay);
    });
  }

  static getNominalById(id){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve(Object.assign([], nominal));
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
        const indexOfNominalToDelete = nominal.findIndex(nominal => {
          nominal.nominalId == nominalId;
        });
        nominal.splice(indexOfNominalToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default NominalApi;
