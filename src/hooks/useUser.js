import { useState, useEffect } from 'react';
import { getFromLocalStorage } from '../utils';  // Assure-toi que la fonction récupère les valeurs du localStorage

export function useUser() {
  const [userLoading, setUserLoading] = useState(true);
  const [auth, setAuth] = useState(false);
  const [connectedUser, setConnectedUser] = useState(null);

  useEffect(() => {
    async function getUserDetails() {
      const { authenticated, user } = await getAuthenticatedUser();
      setUserLoading(false);
      setAuth(authenticated);
      setConnectedUser(user);  // Stocke l'utilisateur connecté pour vérification et redirection
    }
    getUserDetails();
  }, []);

  return { connectedUser, auth, userLoading };  // Renvoie connectedUser, auth, et l'état du chargement
}

export async function getAuthenticatedUser() {
  const defaultReturnObject = { authenticated: false, user: null };
  try {
    const token = getFromLocalStorage('token');  // Récupère le token
    const userId = getFromLocalStorage('userId');  // Récupère l'ID utilisateur

    if (!token || !userId) {
      return defaultReturnObject;
    }

    // Simule la vérification du token pour l'authentification (cela dépend de ton back-end)
    return { authenticated: true, user: { userId, token } };  // Renvoie l'utilisateur connecté si le token est valide
  } catch (err) {
    console.error('getAuthenticatedUser, Something Went Wrong', err);
    return defaultReturnObject;
  }
}