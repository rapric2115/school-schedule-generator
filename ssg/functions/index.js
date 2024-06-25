/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// functions/index.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.generateSchedule = functions.https.onCall((data, context) => {
  // Implement the scheduling algorithm
  const schedule = {}; // Generate schedule based on data

  // Save schedule to Firestore
  return admin.firestore().collection('schedules').add(schedule)
    .then(docRef => {
      return { success: true, id: docRef.id };
    })
    .catch(error => {
      return { success: false, error: error.message };
    });
});
