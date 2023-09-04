import { initializeApp } from 'firebase/app'
import { collection, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyD3DG18Zvlgb9MblA9ARV3_-gVF9nHj7I4',
  authDomain: 'vanlife-fbf9b.firebaseapp.com',
  projectId: 'vanlife-fbf9b',
  storageBucket: 'vanlife-fbf9b.appspot.com',
  messagingSenderId: '739899105558',
  appId: '1:739899105558:web:286f08f39a82ddbd4ef037',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const vansCollection = collection(db, 'vans')

export const getVans = async () => {
  const vansSnapshot = await getDocs(vansCollection)
  const vans = vansSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }))

  return vans
}

export const getHostVans = async () => {
  const q = query(vansCollection, where('hostId', '==', '123'))
  const hostVansSnapshot = await getDocs(q)
  const hostVans = hostVansSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }))

  return hostVans
}

export async function loginUser(creds) {
  const { email, password } = creds
  const q = query(collection(db, 'users'), where('email', '==', email), where('password', '==', password))
  const userSnapshot = await getDocs(q)

  if (!userSnapshot.docs[0]) {
    throw {
      message: 'No user with those credentials found!',
      status: 401,
    }
  }

  const userData = {
    ...userSnapshot.docs[0].data(),
    id: userSnapshot.docs[0].id,
    token: 'Enjoy your pizza, here\'s your tokens.',
  }

  return userData
}
