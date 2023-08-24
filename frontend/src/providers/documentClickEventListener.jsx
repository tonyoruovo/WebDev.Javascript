/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
/**
 * An interface that enables the pooling of mouse actions on this site so that all mouse actions can called as a monolithic event in a composed function consisting of mouse events registered in this context.
 * @typedef {Object} Composer
 * @property {AddFunction} addFunction adds a mouse event to the internal click events table
 * @property {RemoveFunction} removeFunction removes a mouse event from the internal click events table
 */
/**
 * @typedef {React.Context<Composer>} ClickContext
 */
/**
 * A function called every time a `MouseEvent` is triggered
 * @callback MouseListener
 * @param {MouseEvent} e an event that is triggered by a mouse used as an argument in the monolithic `MouseListener`. It is also the documents's mouse click event object that will be used as an argument to all the functions stored in this state
 * @returns {void}
 */
/**
 * Registers a {@link MouseListener `MouseListener`} to an internal list of mouse listeners which are used to tell this page that a {@link MouseEvent `MouseEvent`} was just triggered.
 * @callback AddFunction
 * @param {MouseListener} f the listener function to be registered
 * @returns {void}
 */
/**
 * Removes a {@link MouseListener `MouseListener`} from an internal list of mouse listeners. The function name of the argument is used to identify the function hence arrow functions cannot be removed from the list.
 * @callback RemoveFunction
 * @param {MouseListener} f the listener function to be removed
 * @returns {void}
 */
/**
 * Returns a shared {@link ClickContext `ClickContext`} interface with concrete implementations. This is done to expose the internal of {@link Composer `Composer`} to consumers just as {@link React.useContext `React.useContext`}.
 * @callback ClickContextUser
 * @returns {Composer} a concrete implementation of the {@link ClickContext `ClickContext`} interface
 */
/**
 * An array that contains {@link MouseListener click listeners} that will be emptied when react garbage collects the {@link DocumentClickEventListenerProvider `DocumentClickEventListenerProvider`} component.
 * The Pattern of this array is a function and an argument, this argument is the {@link MouseEvent `MouseEvent`} object that is also used as a parameter in the {@link document.addEventListener `document.addEventListener`} method
 * @typedef {MouseListener[]} CallStack
 */
/**
 * Sets the internal callstack object, discarding the current value and setting it to the argument or the return value of it's function
 * @callback CallStackDispatchAction
 * @param {CallStack | (callback: CallStack) => CallStack} value a new internal callstack object to set if this is a internal callstack object or a function that receives the current internal callstack object and returns a new one.
 * @returns {void}
 */
/**
 * @type {ClickContext} Creates an empty context object which is used for the click event listener consumer
 * @constant
 * @readonly
 */
const DocumentClickEventListenerContext = createContext();
/**
 * Creates a [`React.Context`](https://legacy.reactjs.org/docs/context.html) for this webpage's click events, which then enables any click event to be manged from a central component.
 * @param {React.ProviderProps<Composer>} param0 A destructured mutable object which allows injection of arguments at the component where this provider is used.
 * @returns {JSX.Element & React.Provider<Composer>} a [`React.Provider`](https://legacy.reactjs.org/docs/context.html#contextprovider) that manages the all mouse events registered in the context for this provider, exposes the internal {@link ClickContext `ClickContext`} interface implementation.
 * @see [`React.Context`](https://legacy.reactjs.org/docs/context.html) and [`React.Provider`](https://legacy.reactjs.org/docs/context.html#contextprovider) for more about react providers and context and how to use them
 */
const DocumentClickEventListenerProvider = ({ children }) => {
  /**
   * @type {[CallStack, CallStackDispatchAction]}
   * @constant
   * @readonly
   */
  const [calls, setCalls] = useState([]);
  /**
   * @type {AddFunction}
   * @constant
   * @readonly
   */
  const addFunction = (f) => setCalls((prev) => {
    for (let i = 0; i < prev.length; i++){
        if(f.name === prev[i].name) {
            prev[i] = f;
            return prev;
        }
    }
    prev.push(f)
    return prev
  });
  /**
   * @type {RemoveFunction}
   * @constant
   * @readonly
   */
  const removeFunction = (f) =>
    setCalls((prev) => {
      const newArray = [];
      for (let i = 0; i < prev.length; i++) {
        const c = prev[i];
        if (c.name !== f.name) newArray.push(c);
      }
      return newArray;
    });
/**
 * Merges each function in the {@link CallStack call stack} into a single monolithic function which is the same type as a {@link MouseListener `MouseListener`} and when called, executes the whole call stack as a single function. This function is added to the this website's click event listener and removes when react garbage collects this provider.
 * @type {MouseListener} Composes all the functions stored in {@link calls}
 */
  const composed = useCallback((e) => {
      for (let i = 0; i < calls.length; i++) calls[i](e);
    },
    []
  );

  useEffect(() => {
    document.addEventListener("click", composed);
    return () => document.removeEventListener("click", composed);
  }, []);

  return (
    <DocumentClickEventListenerContext.Provider
      value={{ addFunction, removeFunction }}
    >
      {children}
    </DocumentClickEventListenerContext.Provider>
  );
};
export default DocumentClickEventListenerProvider;
/**
 * A function that provides access and mutability to the {@link ClickContext `ClickContext`} object.
 * @type {ClickContextUser}
 * @constant
 * @readonly
 */
export const useDocumentClickEventListener = () => useContext(DocumentClickEventListenerContext);
