import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAPVPHiuu361T3RXI-CZPK5DlYqq2EAwcU",
  authDomain: "auth-dev1-f64e0.firebaseapp.com",
  databaseURL: "https://auth-dev1-f64e0.firebaseio.com",
  projectId: "auth-dev1-f64e0",
  storageBucket: "auth-dev1-f64e0.appspot.com",
  messagingSenderId: "242070638670",
  appId:"1:242070638670:web:edfdc97993f61c217c331f"
})

export  const auth = app.auth()
export default app