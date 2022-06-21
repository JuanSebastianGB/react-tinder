import { useEffect } from 'react';
import { setUser } from '../actions/userActions';

/**
 * This function is a custom hook that uses the useEffect hook to fetch a user from a url and then
 * dispatch that user to the redux store
 * @param url - the url to fetch the user from
 * @param urlText - This is the text that will be used to create the url.
 * @param dispatch - the dispatch function from the redux store
 * @returns A function that calls getUser()
 */
export const useGetUserProfile = (url, urlText, dispatch) => {
  const getUser = async () => {
    const user = await fetch(url);
    let jsonUser = await user.json();
    delete jsonUser.info;
    jsonUser = jsonUser.results;
    dispatch(setUser(jsonUser[0]));
  };
  useEffect(() => {
    getUser();
  }, [url, urlText, dispatch]);
  return () => {
    getUser();
  };
};
