import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { persisted } from "svelte-persisted-store";

import { auth } from "../lib/firebase/firebase";

export const authStore = persisted("authStore", {
    user: null,
    loading: true,
    data: {},
});

export const authHandlers = {
    signup: async (/** @type {string} */ email, /** @type {string} */ password) => {
        await createUserWithEmailAndPassword(auth, email, password);
    },
    login: async (/** @type {string} */ email, /** @type {string} */ password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            return true;
        } catch (error) {
            return false;
        }
    },
    logout: async () => {
        await signOut(auth);
    },
}