// import { Component } from '@angular/core';
// import { FirebaseAuthService } from './firebase-auth.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {

//   constructor(private authService: FirebaseAuthService) {}

//   signIn() {
//     this.authService.signInWithEmail('example@email.com', 'password')
//       .then(userCredential => {
//         console.log('User signed in:', userCredential.user);
//       })
//       .catch(error => {
//         console.error('Error signing in:', error);
//       });
//   }

//   signOut() {
//     this.authService.signOut()
//       .then(() => {
//         console.log('User signed out');
//       })
//       .catch(error => {
//         console.error('Error signing out:', error);
//       });
//   }
// }
