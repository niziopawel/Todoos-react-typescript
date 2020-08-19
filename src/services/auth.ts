import { auth } from '../config/firebaseConfig'

function loginUserWithEmailAndPassword(email: string, password: string) {
  return auth.signInWithEmailAndPassword(email, password)
}

function signOut() {
  return auth.signOut()
}

export { loginUserWithEmailAndPassword, signOut }
