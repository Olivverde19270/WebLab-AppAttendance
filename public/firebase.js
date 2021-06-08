import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyB7OZR5tdot6o_49WAienA0MTsVLbvJQCk',
  authDomain: 'weblab-appattendance.firebaseapp.com',
  projectId: 'weblab-appattendance',
  storageBucket: 'weblab-appattendance.appspot.com',
  messagingSenderId: '399123706897',
  appId: '1:399123706897:web:809507a61b4b4f83e2adb0',
}

const fireDB = firebase.initializeApp(firebaseConfig)
export default fireDB
