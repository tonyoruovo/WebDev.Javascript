import { createContext, useCallback, useContext, useState } from "react";

/**
 * An interface representing the data sent from the backend as a response to the user request either to login, logout or register
 * @typedef {Object} UserData
 * @property {string | undefined} token a unique `string` value assigned to the request that was made to the backend to retrieve this {@link UserData `UserData`}. This value changes with each request.
 * @property {string | undefined} username the username of this {@link UserData `UserData`} object
 */

/**
 * Interface representing a form either for a register, login or profile edit action
 * @typedef {{[dataKey: string]: any}} DataObject
 */

/**
 * A functor that consumes it's argument and returns void
 * @callback DataConsumer
 * @param {DataObject} data the data to be consumed
 */

/**
 * Interface for a set of possible actions taken by the user
 * @typedef {Object} UserAction
 * @property {() => boolean} isLoggedIn a check function which checks if the current user is anonymous and return `false` if they are and `true` if they are not
 * @property {VoidFunction} logout attempts to log the user out of this page by requesting a token invalidation to the backend and scrubbing the remaining data traces from the {@link window.localStorage `window.localStorage`}
 * @property {DataConsumer} register attempts to send form data to the backend and requests that the same data be used to create a new user
 * @property {DataConsumer} login attempts to send form data to the backend and requests that the same data be used to retrieve an existing user
 */

/**
 * Interface for monitoring the process of contacting the backend
 * @typedef {Object} FetchMonitor
 * @property {FetchState} fetchState represents the status of the contact between this page and the designated backend
 * @property {VoidFunction} resetFetchState cancels any ongoing connection with the backend (thus invalidating any request) and resets the {@link FetchMonitor.fetchState contact status}
 */

/**
 * @typedef {Object} UserDataHandler
 * @property {UserData} account the resident object that represents an account on this web page
 */

/**
 * An interface that handles contact between this page and the backend API as it relates to user accounts.
 * @typedef {UserDataHandler & UserAction & FetchMonitor} UserHandler
 */


/**
 * The main user context (which is a react context) that contains data and beviours for handling user data on this page
 * @typedef {React.Provider<UserHandler>} UserHandlerContext
 */

/**
 * A functor that retrieves a {@link UserHandler `UserHandler`} object for a component that is a consumer of the {@link AccountProvider `AccountProvider`}
 * @callback UserHandlerContextUser
 * @return {UserHandler} exposes the handler to consumers by returning a concrete implementation of the {@link UserHandler `UserHandler`} interface
 */

/**
 * Sets the {@link UserHandler.account} object, discarding the current value and setting it to the argument or the return value of it's function. This is a dispatch action and the second element of the tuple bundled with {@link React.useState `React.useState`}
 * @callback UserDataDispatchAction
 * @param {UserData | (user: UserData) => UserData} value a new {@link UserData `UserData`} object to set if this is a {@link UserData `UserData`} object or a function that receives the current {@link UserData `UserData`} object and returns a new one.
 * @returns {void}
 */

/**
 * Sets the {@link UserHandler.fetchState} object, discarding the current value and setting it to the argument or the return value of it's function. This is a dispatch action and the second element of the tuple bundled with {@link React.useState `React.useState`}
 * @callback FetchStateDispatchAction
 * @param {FetchState | (user: FetchState) => FetchState} value a new {@link FetchState `FetchState`} object to set if this is a {@link FetchState `FetchState`} object or a function that receives the current {@link FetchState `FetchState`} object and returns a new one.
 * @returns {void}
 */

/**
 * A concrete object that is the default implementation of the {@link UserHandlerContext `UserHandlerContext`} interface.
 * @type {UserHandlerContext}
 * @constant
 * @readonly
 */
const AccountContext = createContext({
  token: "",
  username: ""
});

/**
 * The current state of a {@link Window.fetch `fetch()`} in relation to the {@link AccountProvider `AccountProvider`}
 * @enum {number} FetchState
 * @readonly
 */
export const FetchState = {
  /** The user data request or attempt to contact the backend has encountered an error */
  Error: 0,
  /** The user data request or attempt to contact the backend has returned a valid response */
  Successful: 1,
  /** The data request pipline is busy contacting the backend and has not yet gotten a valid rresponse */
  Busy: 2,
  /** No request is being made at the moment and the request pipeline is empty */
  Idle: 3,
};

/**
 * The key used for retrieving the token sent with a sucessful response to a user request from the {@link Window.localStorage `Window.localStorage`} object.
 * @type {string} 
 * @constant
 * @readonly
 */
export const TOKEN_KEY = "user:token";
/**
 * The key used for retrieving the username (or account name) sent with a sucessful response to a user request from the {@link Window.localStorage `Window.localStorage`} object.
 * @type {string} 
 * @constant
 * @readonly
 */
export const NAME_KEY = "user:username";
/**
 * The backend url with the port number included
 * @type {string}
 * @constant
 * @readonly
 */
const API = "http://localhost:8080";

/**
 * Creates a [`React.Context`](https://legacy.reactjs.org/docs/context.html) as a {@link JSX.Element `JSX.Element`} for the {@link React.Provider `Provider`} in this {@link UserHandlerContext `UserHandlerContext`}. This handles user status such as logged in, anonymous and so on.
 * @param {React.ProviderProps<UserHandler>} param0 A destructured mutable object which allows injection of arguments at the component where this provider is used.
 * @returns {JSX.Element & React.Provider<UserHandler>} a [`React.Provider`](https://legacy.reactjs.org/docs/context.html#contextprovider) that manages the all mouse events registered in the context for this provider, exposes the internal {@link UserHandler `UserHandler`} interface implementation.
 * @see [`React.Context`](https://legacy.reactjs.org/docs/context.html) and [`React.Provider`](https://legacy.reactjs.org/docs/context.html#contextprovider) for more about react providers and context and how to use them
 */
const AccountProvider = ({ children }) => {
  /**
   * @type {[UserData, UserDataDispatchAction]}
   * @constant
   * @readonly
   */
  const [account, setAccount] = useState({
    token: localStorage.getItem(TOKEN_KEY),
    username: localStorage.getItem(NAME_KEY)
  });

  /**
   * A react callback used with {@link account} as a dependency
   * @type {() => boolean}
   * @constant
   * @readonly
   */
  const isLoggedIn = useCallback(() => (account.token && account.token.length > 0 && account.username && account.username.length > 0), [account])

  /**
   * @type {[FetchState, FetchStateDispatchAction]}
   * @constant
   * @readonly
   */
  const [fetchState, setFetchState] = useState(FetchState.Idle);
  /**
   * Resets the fetch state by calling {@link setFetchState `setFetchState`}
   * @type {VoidFunction}
   * @constant
   * @readonly
   */
  const resetFetchState = useCallback(() => {
    setFetchState(FetchState.Idle)
  }, [])
/**
 * The fetch (data reuest) pipeline. This attempts to contact the backend with the given `data` and `url` arguments. This function will never throw and when called for an anonymous user, it will set the {@link fetchState} to {@link FetchState.Busy}
 * then sends the data as a request to the backend api. If the request is sucessful then the `fetchState` is set to `FetchState.Successful` and populates the `localStorage` object with the response object. Else if an error is encountered
 * or an invalid response is given by the server, then the `fetchState` is set to `FetchState.Error` and the `localStorage` is cleared. When called for a user that is already signed in, the `fetchState` is reset to `FetchState.Idle` and
 * this immediately returns.
 * @param {DataObject} data the data (probably form data) to be sent with the request to the backend server
 * @param {string} url the backend server location as a url string
 * @returns {void} does not return any value
 */
  const fetchContact = (data, url) => {
    if(isLoggedIn()){
      resetFetchState();
      return;
    }
    console.log(data);
    setFetchState(FetchState.Busy)
    fetch(url, {
      body: JSON.stringify(data),
      mode: "cors",
      cache: "no-cache",
      method: "POST",
      headers: {"Content-Type": "text/plain", "Accept-Language": "en-us,en;q=0.5"},
      redirect: "follow",
      referrerPolicy: "no-referrer",
    })
    .then((r) => r.text())
    .then((text) => {
	    const json = (text ? JSON.parse(text) : {});
      localStorage.setItem(TOKEN_KEY, json["username"]);
      localStorage.setItem(NAME_KEY, json["token"]);
      setAccount({
        token: localStorage.getItem(TOKEN_KEY),
        username: localStorage.getItem(NAME_KEY)
      });
      setFetchState(FetchState.Successful)
    }).catch((err) => {
      console.log(err);
	  setAccount({ token: undefined, username: undefined });
	  localStorage.removeItem(TOKEN_KEY);
	  localStorage.removeItem(NAME_KEY);
      setFetchState(FetchState.Error);
    })
  }
  /**
   * @type {DataConsumer}
   * @constant
   * @readonly
   */
  const register = (data) => fetchContact(data, `${API}/users/add`);
  /**
   * @type {DataConsumer}
   * @constant
   * @readonly
   */
  const login = (data) => fetchContact(data, `${API}/login`);
  /**
   * @type {VoidFunction}
   * @constant
   * @readonly
   */
  const logOut = () => {
    setAccount({ token: undefined, username: undefined });
    setFetchState(FetchState.Busy)
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(NAME_KEY)
    setFetchState(FetchState.Successful)
  };
  return (
    <AccountContext.Provider
      value={{ account, isLoggedIn, logOut, fetchState, resetFetchState, register, login }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
/**
 * Constructs a valid object for consumers of the {@link UserHandler `UserHandler`}
 * @type {UserHandlerContextUser}
 * @constant
 * @readonly
 */
export const useAccount = () => useContext(AccountContext);
