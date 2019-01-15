import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyAinzHIQU3auXLqFiHHam5iY9EyYZiXIBM",
  authDomain: "react-expensify-app-lucha.firebaseapp.com",
  databaseURL: "https://react-expensify-app-lucha.firebaseio.com",
  projectId: "react-expensify-app-lucha",
  storageBucket: "react-expensify-app-lucha.appspot.com",
  messagingSenderId: "749400555961"
};

firebase.initializeApp(config);

const database = firebase.database();

// // FIREBASE DATABASE LISTENERS
// child_removed
database.ref("expenses").on("child_removed", snapshot => {
  console.log("REMOVED: ", snapshot.key, snapshot.val());
});

// child_changed
database.ref("expenses").on("child_changed", snapshot => {
  console.log("CHANGED: ", snapshot.key, snapshot.val());
});

// child_added
database.ref("expenses").on("child_added", snapshot => {
  console.log("ADDED: ", snapshot.key, snapshot.val());
});

// // CHALLENGE 3 - Subscribe to changes in the database. Log each time value changes
// // NOTE:
// database
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];
//
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//
//     console.log(expenses);
//   });
//
// // ANSWER
// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];
//
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//
//   console.log(expenses);
// });

// CHALLENGE 2 - Create 3 expenses in the database using firebase array structure {}
// NOTE: Firebase does not support arrays so we push new objects to make it easy to reference.
// database.ref("exampleReference").push({
//   title: "Example Title",
//   body: "Example body"
// });
//
// // ANSWER
// database.ref("expenses").push({
//   description: "Food",
//   note: "Chew Chew Chew Bubble.",
//   amount: 109500,
//   createdAt: 9870987098
// });

// // CHALLENGE 1 (See notes below)
// database.ref().on("value", snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// setTimeout(() => {
//   database.ref("name").set("Mike");
// }, 2000);

// // SUBSCRIBE TO DATABSE USING .on()
//
// const onValueChange = database.ref().on("value", snapshot => {
//   console.log(snapshot.val());
// }, (err) => {
//     console.log("Error with data fetching", err)
// });
// // CHANGE DATA
// setTimeout(() => {
//   database.ref("age").set(28);
// }, 3500);
// // UNSUBSCRIBE USING .off()
// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 3500);

// // REFERENCING DATA ONE TIME USING .once()
//
// database
//   .ref("location/city")
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(err => {
//     console.log("FAILED - ", err);
//   });

// // SETTING DATA EXAMPLE using .set()
//
// firebase
//   .database()
//   .ref()
//   .set({
//     name: "Luis Chavez",
//     age: 25,
//     stressLevel: 6,
//     job: {
//       title: "Software developer",
//       company: "Google"
//     },
//     location: {
//       city: "San Diego",
//       country: "USA"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved!");
//   })
//   .catch(err => {
//     console.log("FAILED - ", err);
//   });

// // UPDATE DATABASE EXAMPLE using .update()
//
// firebase
//   .database()
//   .ref()
//   .update({
//     "job/company": "Amazon",
//     stressLevel: 9,
//     "location/city": "Seatle"
//   });

// // REMOVE FROM DATABASE EXAMPLE using .remove()
//
// firebase
//   .database()
//   .ref()
//   .remove()
//   .then(() => {
//     console.log("Data was removed.");
//   })
//   .catch(err => {
//     console.log("FAILED - did not remove data.", err);
//   });
