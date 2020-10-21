import { app } from '../config/firebase';

const getUsers = () => app.firestore().collection('users');

export const registerService = (email, password) =>
  app.auth().createUserWithEmailAndPassword(email, password);

export const loginService = async (email, password) =>
  app.auth().signInWithEmailAndPassword(email, password);

export const listenForUserChanges = (email) => {
  return getUsers().doc(email);
};

export const setUserService = (username, payload) =>
  getUsers()
    .doc(username)
    .set({
      ...payload,
    });

export const updateUserService = (username, payload) =>
  getUsers()
    .doc(username)
    .update({
      ...payload,
    });
