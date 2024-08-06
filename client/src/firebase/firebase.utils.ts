import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
} from "firebase/auth"
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
} from "firebase/firestore"
import { Categories, UserType } from "../utils"
const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mix-and-match-517ea.firebaseapp.com",
  projectId: "mix-and-match-517ea",
  storageBucket: "mix-and-match-517ea.appspot.com",
  messagingSenderId: "349572030395",
  appId: "1:349572030395:web:dcec0b37e9a53302f0ee9e",
  measurementId: "G-LSWT3NN7YN",
}
console.log(import.meta.env.VITE_FIREBASE_API_KEY)
const app = initializeApp(config)
export const firestore = getFirestore()
export const auth = getAuth(app)
const provider = new GoogleAuthProvider()

// AUTHENTICATION

//EMAIL AND PASSWORD

export const signInAccount = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorMessage)
      throw new Error(error)
    })
}
//GOOGLE SIGN IN
export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider)
    .then((result: UserCredential) => {
      const userCredential = GoogleAuthProvider.credentialFromResult(result)
      const token = userCredential?.accessToken
      const user = result.user
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      // const email = error.email
      const userCredential = GoogleAuthProvider.credentialFromError(error)
      console.log(errorCode)
      console.log(errorMessage)
      throw new Error(error)
    })
}
// SIGN OUT
// GET CURRENT USER
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe()
      resolve(userAuth)
    }, reject)
  })
}

//DATABASE
export const createUserDoc = async (user: UserType) => {
  if (!user) return
  const userDoc = doc(firestore, `users/${user.uid}`)
  const snapShot = await getDoc(userDoc)
  if (!snapShot.exists()) {
    try {
      const { email } = user
      const createdAt = new Date()
      const docData = {
        email,
        createdAt,
      }
      await setDoc(userDoc, docData)
    } catch (error) {
      console.log(error)
    }
  }
  return userDoc
}

// FIRESTORE DATABASE
// export const addCollectionsAndItems = async (collectionKey, objectsToAdd) => {
//   const collectionRef = collection(firestore, collectionKey)
//   const promiseArr = []
//   const arr = Object.entries(objectsToAdd)
//   return await Promise.all(
//     arr.forEach((innerArr) => {
//       const docRef = doc(firestore, `collections/${innerArr[1].category}`)
//       setDoc(docRef, innerArr[1])
//     }),
//   )
// }

export const queryForCollections = async () => {
  const collectionArr: any = []
  const collectionObj: Categories = {}
  const collectionQuery = query(collection(firestore, "collections"))
  const querySnapshot = await getDocs(collectionQuery)
  querySnapshot.forEach((snap) =>
    collectionArr.push(JSON.parse(JSON.stringify(snap.data()))),
  )
  collectionArr.forEach((item: any) => {
    collectionObj[item.category] = item
  })
  return collectionObj
}
