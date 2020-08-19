import { auth } from '../config/firebaseConfig'

function loginUserWithEmailAndPassword(email: string, password: string) {
  return auth.signInWithEmailAndPassword(email, password)
}

function signOut() {
  auth
    .signOut()
    .then(() => {
      console.log('return to login screen')
    })
    .catch(err => {
      console.log(err)
    })
}

export { loginUserWithEmailAndPassword, signOut }
