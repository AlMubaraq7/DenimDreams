import { all, call, put, takeLatest } from "redux-saga/effects"
// import * as action from "./user.actions"
import {
  onFailure,
  signOutSuccess,
  signUpSuccess,
  signUpStart,
  emailSignInStart,
  googleSignInStart,
  signOutStart,
} from "./user.slice"
import { PayloadAction } from "@reduxjs/toolkit"
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth"
import { auth, createUserDoc } from "../../firebase/firebase.utils"
import { getDoc } from "firebase/firestore"
import { emailSignIn, emailSignUp } from "../../utils"

export function* getSnapshotFromUserAuth(userAuth: User): Generator {
  try {
    const userRef: any = yield call(createUserDoc, userAuth)
    const userSnapshot: any = yield getDoc(userRef)
    yield put(
      signUpSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      }),
    )
  } catch (error) {
    yield put(onFailure(error))
  }
}
export function* signUp({
  payload: { email, password },
}: PayloadAction<emailSignUp>): Generator {
  try {
    const userCredential: any = yield call(
      createUserWithEmailAndPassword,
      auth,
      email,
      password,
    )
    const user = userCredential.user
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(onFailure(error))
  }
}

export function* signInWithEmail({
  payload: { email, password },
}: PayloadAction<emailSignIn>): Generator {
  try {
    const userCredential: any = yield signInWithEmailAndPassword(
      auth,
      email,
      password,
    )
    const user: any = yield userCredential.user
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(onFailure(error))
  }
}
export function* signInWithGoogle(): Generator {
  try {
    const provider: any = yield new GoogleAuthProvider()
    const result: any = yield signInWithPopup(auth, provider)
    const userCredential: any = yield GoogleAuthProvider.credentialFromResult(
      result,
    )
    const user = yield userCredential.user
    yield put(signUpSuccess(user))
  } catch (error) {
    yield put(onFailure(error))
  }
}

export function* logOut(): Generator {
  try {
    yield signOut(auth)
    yield put(signOutSuccess())
  } catch (error) {
    yield put(onFailure(error))
  }
}

export function* onSignUp() {
  yield takeLatest(signUpStart.type, signUp)
}
export function* onEmailSignIn() {
  yield takeLatest(emailSignInStart.type, signInWithEmail)
}
export function* onGoogleSignIn() {
  yield takeLatest(googleSignInStart.type, signInWithGoogle)
}
export function* onCheckUserSession() {}
export function* onSignOut() {
  yield takeLatest(signOutStart.type, logOut)
}

export function* userSagas() {
  yield all([
    call(onSignUp),
    call(onEmailSignIn),
    call(onGoogleSignIn),
    call(onSignOut),
  ])
}
