import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Agrega la configuración aquí
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

