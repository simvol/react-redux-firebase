import * as firebase from 'firebase';

import { FirebaseConfig } from './keys';

const app = firebase.initializeApp(FirebaseConfig);

// realtime database
// export const databaseRef = firebase.database().ref();
// export const todosRef = databaseRef.child('todos');

// firestore
const firestore = firebase.firestore(app);

firestore.settings({ timestampsInSnapshots: true });

export const todosRef = firestore.collection('todos');
