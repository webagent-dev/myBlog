    import firebase from 'firebase/app'
    import 'firebase/auth'

    const Config = {
      apiKey: "AIzaSyADpDCaetvfSDEdrNJ3UiDDbrmL0ychzJE",
      authDomain: "myblog-fefe3.firebaseapp.com",
      projectId: "myblog-fefe3",
      storageBucket: "myblog-fefe3.appspot.com",
      messagingSenderId: "338405870393",
      appId: "1:338405870393:web:1eeb7c115ff192055bf6e8"
    };
    // Initialize Firebase
    firebase.initializeApp(Config);

export const auth = firebase.auth()


  export default firebase

