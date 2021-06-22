import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

if (!firebase.apps.length) {
  const config = {
    apiKey: process.env.VUE_APP_FIREBASE_APP_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: `https://${process.env.VUE_APP_FIREBASE_PROJECT_ID}.firebaseio.com`, //  "https://PROJECT_ID.firebaseio.com"
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID
  }

  firebase.initializeApp(config)
}

// utils
const auth = firebase.auth()
const db = firebase.firestore()

// collection references
const usersCollection = db.collection('users')

export { auth, db, usersCollection }
