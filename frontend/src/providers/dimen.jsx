import { createContext, useContext, useEffect, useState } from "react";
/**
 * An interface that is the dimension of the inner bounds of a window.
 * @typedef {Object} InnerDimension
 * @property {typeof window.innerWidth} innerWidth the inner width of a given browser window
 * @property {typeof window.innerHeight} innerHeight the inner height of a given browser window
 */
/**
 * An interface that is the dimension of the outer bounds of a window.
 * @typedef {Object} OuterDimension
 * @property {typeof window.outerWidth} outerWidth the outer width of a given browser window
 * @property {typeof window.outerHeight} outerHeight the outer height of a given browser window
 */
/**
 * A `PartialDimension` is an interface that represents the dimensions of a browser window.
 * @typedef {InnerDimension & OuterDimension} PartialDimension
 */
/**
 * A child interface of the {@link React.Context} interface that implements `PartialDimension` as the generic interface
 * @typedef {React.Context<PartialDimension>} DimensionContext
 */
/**
 * Returns a concrete implementation of the {@link PartialDimension `PartialDimension`} interface as an object which is shaared across components that are consumers of {@link DimensionContext `DimensionContext`} which provided for by the {@link React.Provider provider} {@link DimensionProvider `DimensionProvider`}.
 * @callback DimensionContextUser
 * @returns {PartialDimension} a concrete implementation of the {@link PartialDimension `PartialDimension`} interface shared across components
 */
/**
 * This is a dispatch action and the second element of the tuple bundled with {@link React.useState `React.useState`}. It sets the the {@link PartialDimension `PartialDimension`} state, discarding the current value and setting it to the argument or the return value of it's function
 * @callback PartialDimensionDispatchAction
 * @param {PartialDimension | (d: PartialDimension) => PartialDimension} value a new {@link PartialDimension `PartialDimension`} object to set if this is a {@link PartialDimension `PartialDimension`} object or a function that receives the current {@link PartialDimension `PartialDimension`} object and returns a new one.
 * @returns {void} does not return a value
 */
/**
 * A default concrete implementation of the {@link DimensionContext `DimensionContext`} interface. This was created from a {@link React.createContext `React.createContext`} action and is only useful as a default object.
 * @type {DimensionContext}
 * @constant
 * @readonly
 */
const DimenContext = createContext({
  innerWidth: window.innerWidth,
  innerHeight: window.innerHeight,
  outerWidth: window.outerWidth,
  outerHeight: window.outerHeight,
});
/**
 * Provides access to dimension (width and height) data of the browser window regardless of the fact that it has been resized multiple times since the web page was loaded.
 * @param {React.ProviderProps<PartialDimension>} param0 A destructured mutable object which allows injection of arguments at the component where this provider is used.
 * @returns {JSX.Element & React.Provider<PartialDimension>} a [`React.Provider`](https://legacy.reactjs.org/docs/context.html#contextprovider) that manages the all mouse events registered in the context for this provider, exposes the internal {@link PartialDimension `PartialDimension`} interface implementation.
 * @see [`React.Context`](https://legacy.reactjs.org/docs/context.html) and [`React.Provider`](https://legacy.reactjs.org/docs/context.html#contextprovider) for more about react providers and context and how to use them
 */
const DimensionProvider = ({ children }) => {
  /**
   * @type {[PartialDimension, PartialDimensionDispatchAction]}
   * @constant
   * @readonly
   */
    const [dimension, setDimension] = useState({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        outerWidth: window.outerWidth,
        outerHeight: window.outerHeight,
    });
    /**
     * A {@link window.onresize `window.onresize`} callback that automically updates the values of this context when the browser window is resized.
     * @param {UIEvent} ev the event from which this action originates, used as an argument for {@link window.onresize `window.onresize`} events
     * @returns {void} no value
     */
    const updateOnResize = (ev) => setDimension({innerWidth: ev.target.innerWidth,innerHeight: ev.target.innerHeight,outerWidth:ev.target.outerWidth,outerHeight:ev.target.outerHeight});
  useEffect(() => {
    window.addEventListener("resize", updateOnResize)
    return () => window.removeEventListener("resize", updateOnResize)
  }, []);
  return <DimenContext.Provider value={dimension}>{children}</DimenContext.Provider>;
};

export default DimensionProvider
/**
 * A function that provides access and mutability to the {@link PartialDimension `PartialDimension`} object.
 * @type {DimensionContextUser}
 * @constant
 * @readonly
 */
export const useDimension = () => useContext(DimenContext);
