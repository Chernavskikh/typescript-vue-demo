import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

if (!firebase.apps.length) {
  const config = {
    apiKey: process.env.FIREBASE_APP_APIKEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`, //  "https://PROJECT_ID.firebaseio.com"
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  }

  firebase.initializeApp(config)
}

const auth = firebase.auth()
const db = firebase.firestore()

export { auth, db }
