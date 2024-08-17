import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";


export const FETCH_NOTES = 'FETCH_NOTES';
export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';

export const fetchNotes = () => async dispatch => {
  const querySnapshot = await getDocs(collection(db, "notes"));
  const notes = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  dispatch({ type: FETCH_NOTES, payload: notes });
};

export const addNote = (note) => async dispatch => {
  const docRef = await addDoc(collection(db, "notes"), note);
  dispatch({ type: ADD_NOTE, payload: { id: docRef.id, ...note } });
};

export const deleteNote = (id) => async dispatch => {
  await deleteDoc(doc(db, "notes", id));
  dispatch({ type: DELETE_NOTE, payload: { id } });
};

export const editNote = (id, updatedNote) => async dispatch => {
  const noteRef = doc(db, "notes", id);
  await updateDoc(noteRef, updatedNote);
  dispatch({ type: EDIT_NOTE, payload: { id, ...updatedNote } });
};
