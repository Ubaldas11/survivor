// node firestoreImport.js to run
const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: '',
  authDomain: '',
  databaseURL: '',
});

const collectionName = '';
const db = firebase.firestore();

const json = [{}] // json to import

stats.forEach((item) => {
  db.collection(collectionName).add({...item}).then(() => {
      console.log(obj, 'added');
  })
  .catch(function(error) {
      console.error(error);
  });
});
