  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB-YAiS8WnpffHShfXxoOOphQJ4JDLMNMs",
    authDomain: "projeto-ninja-89da8.firebaseapp.com",
    databaseURL: "https://projeto-ninja-89da8.firebaseio.com",
    projectId: "projeto-ninja-89da8",
    storageBucket: "projeto-ninja-89da8.appspot.com",
    messagingSenderId: "364394348623"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase