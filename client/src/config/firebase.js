import * as firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDfak8WINWktjulWNmQ1X0J0bq9GH8sIkA',
  authDomain: 'catch-me-e5043.firebaseapp.com',
  databaseURL: 'https://catch-me-e5043.firebaseio.com',
  projectId: 'catch-me-e5043',
  storageBucket: 'catch-me-e5043.appspot.com',
  messagingSenderId: '396510424103',
  appId: '1:396510424103:web:887a46ec897efba281b202',
  measurementId: 'G-PSQNQ1RD1R',
};
// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);

firebase.analytics();

export { app };
