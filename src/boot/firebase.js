import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyCplKWuqp-n9blxmh4f1iH0HJTs90LOZgc',
  authDomain: 'hackathon-zenvia.firebaseapp.com',
  databaseURL: 'https://hackathon-zenvia.firebaseio.com',
  projectId: 'hackathon-zenvia',
  storageBucket: 'hackathon-zenvia.appspot.com',
  messagingSenderId: '994976729405',
  appId: '1:994976729405:web:9d3beed8668e1cb4eb1d54'
}

firebase.initializeApp(firebaseConfig)

export default firebase
