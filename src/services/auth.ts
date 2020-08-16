import { auth } from '../config/firebaseConfig'

export function loginUserWithEmailAndPassword(email: string, password: string) {
  return auth.signInWithEmailAndPassword(email, password)
}

export function signOut() {
  auth
    .signOut()
    .then(() => {
      console.log('return to login screen')
    })
    .catch(err => {
      console.log(err)
    })
}
