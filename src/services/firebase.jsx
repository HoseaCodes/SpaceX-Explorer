import firebase from 'firebase/app'
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAKXPF6t7c6JQ_FzwevznMtGZFRxD0eVh8",
    authDomain: "spacex-explorer-7ea7b.firebaseapp.com",
    databaseURL: "https://spacex-explorer-7ea7b.firebaseio.com",
    projectId: "spacex-explorer-7ea7b",
    storageBucket: "spacex-explorer-7ea7b.appspot.com",
    messagingSenderId: "197243200468",
    appId: "1:197243200468:web:57465d6c32420e68f12c41"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

function login() {
    return auth.signInWithPopup(provider)
}

function logout() {
    return auth.signOut();
}
export { login, logout, auth }