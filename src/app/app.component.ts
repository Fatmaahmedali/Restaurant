import { Component } from '@angular/core';
// import { getDatabase, ref, get, onValue } from 'firebase/database'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'point';
  // ngOnInit() {
  //   // Firebase configuration
  //   const firebaseConfig = {
  //     apiKey: "YOUR_API_KEY",
  //     authDomain: "restaurant-82bf3.firebaseapp.com",
  //     databaseURL: "https://restaurant-82bf3-default-rtdb.firebaseio.com",
  //     projectId: "restaurant-82bf3",
  //     storageBucket: "restaurant-82bf3.appspot.com",
  //     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  //     appId: "YOUR_APP_ID"
  //   };

  //   // Initialize Firebase
  //   firebase.initializeApp(firebaseConfig);

  //   // Reference to the database
  //   const database = firebase.database();

  //   // Example: Fetching all products under 'electronics'
  //   const electronicsRef = database.ref('products/electronics');
  //   electronicsRef.once('value', (snapshot) => {
  //     snapshot.forEach((childSnapshot) => {
  //       const product = childSnapshot.val();
  //       console.log(product); // Do something with each product
  //     });
  //   });
  // }
  ngOnInit() {
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "restaurant-82bf3.firebaseapp.com",
      databaseURL: "https://restaurant-82bf3-default-rtdb.firebaseio.com",
      projectId: "restaurant-82bf3",
      storageBucket: "restaurant-82bf3.appspot.com",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID"
    };

    // Initialize Firebase

  //   // Reference to the database
  //   const database = getDatabase(app);

  //   // Example: Fetching all products under 'electronics'
  //   const electronicsRef = ref(database, 'products/electronics');
  //   get(electronicsRef).then((snapshot) => {
  //     snapshot.forEach((childSnapshot) => {
  //       const product = childSnapshot.val();
  //       console.log(product); // Do something with each product
  //     });
  //   }).catch((error) => {
  //     console.error('Error fetching products:', error);
  //   });
  // }
}}


