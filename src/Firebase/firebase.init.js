import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/*
steps for authentication
----------------
Initial Setup
1. firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. Enable auth method

------------------

*/