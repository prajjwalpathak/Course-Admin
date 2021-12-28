import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: " AIzaSyAUfaBCentryYEWz6UaqzAIOxttDzw9Vxk ",
  authDomain: "course-admin-f6b8c.firebaseapp.com",
  databaseURL: "https://course-admin-f6b8c-default-rtdb.firebaseio.com",
  storageBucket: "bucket.appspot.com",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);


