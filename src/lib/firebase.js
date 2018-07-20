import firebase, { firestore } from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: process.env.Firebase_Key,
  authDomain: process.env.Firebase_AuthDomain,
  databaseURL: process.env.Firebase_DatabaseURL,
  projectId: process.env.Firebase_ProjectID
}
  
export const firebaseApp = firebase.initializeApp(config)
export const docsRef = firebaseApp.database().ref('docs')
