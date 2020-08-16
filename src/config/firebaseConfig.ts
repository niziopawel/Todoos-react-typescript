import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCqqTdnw7XEkDmpKgseeuaMGiZ_AnqeNGA',
  authDomain: 'todo-58e66.firebaseapp.com',
  databaseURL: 'https://todo-58e66.firebaseio.com',
  projectId: 'todo-58e66',
  storageBucket: 'todo-58e66.appspot.com',
  messagingSenderId: '993552781100',
  appId: '1:993552781100:web:a0032b945fe9cff6d56689',
  measurementId: 'G-QM48FP9ECQ',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth, firebase }
