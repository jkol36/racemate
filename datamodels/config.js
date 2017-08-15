import firebaseAdmin from 'firebase-admin'

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert('./racemate-serviceaccount.json'),
  databaseURL: "https://racemate-75b05.firebaseio.com"
})