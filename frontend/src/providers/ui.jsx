import { createContext, useCallback, useContext, useState } from "react";
import {
  analogous,
  getContrastRatio,
  getGrayScale,
  getLuminance,
  invert,
  parseColour,
  shade,
  tint,
  tone,
  toRadians,
} from "../scripts/colour";
// export const getColor = ({theme, level, index = 5, tint=0, shade=4}) => {
	// if(theme[level].toRGB().toHSL().getHue() < 5)
		// return (theme.illumination[level] < 0.5 ? theme.tints[level][tint] : theme.shades[level][shade]);
	// return theme.analogs[level][index];
// }

// export const getOtherColor = ({theme, otherLevel, index = 5, tint=0, shade=4}) => {
	// if(theme.others[otherLevel].toRGB().toHSL().getHue() < 5)
		// return (theme.illumination.others[otherLevel] < 0.5 ? theme.tints.others[otherLevel][tint] : theme.shades.others[otherLevel][shade]);
	// return theme.analogs.others[otherLevel][index];
// }
/**@typedef {typeof import("../scripts/colour.js").RGBA} RGBA */
/**@typedef {typeof import("../scripts/colour.js").Integer} Integer */
/**@typedef {typeof import("../scripts/colour.js").NamedColour} NamedColour */
/**@typedef {typeof import("../scripts/colour.js").HSIA} HSIA */
/**@typedef {typeof import("../scripts/colour.js").HSLA} HSLA */
/**@typedef {typeof import("../scripts/colour.js").HSVA} HSVA */
/**@typedef {typeof import("../scripts/colour.js").CIEXYZA} CIEXYZA */
/**@typedef {typeof import("../scripts/colour.js").ColourInterface} ColourInterface */
/**
 * An object that contains information about user defined colours used on the web page
 * @typedef {Object} ColorData the `ColorData` class.
 * @property {RGBA|Integer|NamedColour|HSLA|HSVA|CIEXYZA|HSIA} primary the {@link ColorData.primary primary colour} on the web page. It is meant to be the most dominant
 * @property {RGBA|Integer|NamedColour|HSLA|HSVA|CIEXYZA|HSIA} secondary the {@link ColorData.secondary secondary colour} on the web page. It is meant to be complimentary to the `primary` colour of the given web page
 * @property {(RGBA|Integer|NamedColour|HSLA|HSVA|CIEXYZA|HSIA)[]} others The accent and alert colour table. It is 4-element tuple where the first element is the accent, the next is a colour representing validity or inerrancy, the next is a colour representing warnings, the last is a colour representing errors 
 */
/**
 * An object that contains information about colours used for analog colour setting on the web page. These are pre-computed based on the {@link ColorData} object. It uses a special function to convert each property in `ColorData` to provide predefined values for the user each time the user edits the `ColorData` or {@link ColorPallette} object.
 * Please note that for performance reasons, all properties are `HSLA` objects types.
 * @typedef {Object} Analogs the `Analogs` class.
 * @property {HSLA[]|HSVA[]|HSIA[]|number[]} primary An 11-element tuple representing the result of the analogous conversion of {@link ColorData.primary}. The first 5 elements are 'cool' tints if {@link Analogs.primary} is a 'warm' colour or else they are 'warm' tints; the next element is the {@link Analogs.primary} itself; the remaining 5 elements are 'warm' tints if the first 5 elements are 'cool' tints, otherwise they are 'cool' tints.
 * @property {HSLA[]|HSVA[]|HSIA[]|number[]} secondary An 11-element tuple representing the result of the analogous conversion of {@link ColorData.secondary}. The first 5 elements are 'cool' tints if {@link Analogs.secondary} is a 'warm' colour or else they are 'warm' tints; the next element is the {@link Analogs.secondary} itself; the remaining 5 elements are 'warm' tints if the first 5 elements are 'cool' tints, otherwise they are 'cool' tints.
 * @property {(HSLA[]|HSVA[]|HSIA[]|number[])[]} others The result of the analogous conversion of each element of the {@link ColorData.others} array. Each element is an 11-element tuple and it's conversion follows the same pattern as {@link Analogs.primary}.
 */
/**
 * An object that contains information about the amount of luminance in {@link ColorData.primary}, {@link ColorData.secondary} and {@link ColorData.others}. It uses a special function to convert the properties of `ColorData` each time the user mutates the `ColorData` or {@link ColorPallette `ColorPallette`} objects.
 * @typedef {Object} Illumination the `Illumination` class.
 * @property {number} primary The result of calculation of the luminance of {@link ColorData.primary}
 * @property {number} secondary The result of calculation of the luminance of {@link ColorData.secondary}
 * @property {number[]} others The result of calculation of the luminance of each element of the {@link ColorData.others} array
 */
/**
 * This is the first element of the {@link ContrastRatios contrast ratio} tuple.
 * @typedef {number} ContrastRatios_0 the contrast between {@link ColorData.primary} and {@link ColorData.secondary}.
 */
/**
 * This is the second element of the {@link ContrastRatios contrast ratio} tuple.
 * @typedef {number} ContrastRatios_1 the contrast between {@link ColorData.primary} and the first element of {@link ColorData.others}.
 */
/**
 * This is the last element of the {@link ContrastRatios contrast ratio} tuple.
 * @typedef {number} ContrastRatios_2 the contrast between {@link ColorData.secondary} and the first element of {@link ColorData.others}.
 */
/**
 * A 3-length tuple representing a table of the contrast ratios between the colours in the {@link ColorData} object
 * @typedef {[ContrastRatios_0, ContrastRatios_1, ContrastRatios_2]} ContrastRatios the `ContrastRatios` tuple.
 */
/**
 * An object that contains information about the direct colour inversion of {@link ColorData.primary}, {@link ColorData.secondary} and {@link ColorData.others}. It uses a special function to invert the properties of `ColorData` each time the user mutates the `ColorData` or {@link ColorPallette `ColorPallette`} objects.
 * Please note that for performance reasons, all properties are `RGBA` objects types.
 * @typedef {Object} Inversion the `Inversion` class.
 * @property {RGBA} primary The result of inversion of {@link ColorData.primary}
 * @property {RGBA} secondary The result of inversion of {@link ColorData.secondary}
 * @property {RGBA[]} others The result of inversion of each element of the {@link ColorData.others} array
 */
/**
 * An object that contains information about the grayscale conversion of {@link ColorData.primary}, {@link ColorData.secondary} and {@link ColorData.others}. It uses a special function to convert the properties of `ColorData` each time the user mutates the `ColorData` or {@link ColorPallette `ColorPallette`} objects.
 * Please note that for performance reasons, all properties are `RGBA` objects types.
 * @typedef {Object} GrayScale the `GrayScale` class.
 * @property {RGBA} primary The result of conversion of {@link ColorData.primary}
 * @property {RGBA} secondary The result of conversion of {@link ColorData.secondary}
 * @property {RGBA[]} others The result of conversion of each element of the {@link ColorData.others} array
 */
/**
 * An object that contains tabular information about 20 shades of {@link ColorData.primary}, {@link ColorData.secondary} and {@link ColorData.others}. It uses a special function to split the properties of `ColorData` into shades each time the user mutates the `ColorData` or {@link ColorPallette `ColorPallette`} objects.
 * Please note that for performance reasons, all properties are `RGBA` objects types.
 * @typedef {Object} Shades the `Shades` class.
 * @property {RGBA[]} primary A 20-element tuple each of which is a shade of {@link ColorData.primary} from the lightest to the darkest.
 * @property {RGBA[]} secondary A 20-element tuple each of which is a shade of {@link ColorData.secondary} from the lightest to the darkest.
 * @property {RGBA[][]} others The result of conversion of each element of the {@link ColorData.others} array. Each element is a 20-length tuple where each element in the tuple is a shade of the element in the corresponding index in {@link ColorData.others} from lightest to darkest shade.
 */
/**
 * An object that contains tabular information about 20 tints of {@link ColorData.primary}, {@link ColorData.secondary} and {@link ColorData.others}. It uses a special function to split the properties of `ColorData` into tints each time the user mutates the `ColorData` or {@link ColorPallette `ColorPallette`} objects.
 * Please note that for performance reasons, all properties are `RGBA` objects types.
 * @typedef {Object} Tints the `Tints` class.
 * @property {RGBA[]} primary A 20-element tuple each of which is a tint of {@link ColorData.primary} from the darkest to the lightest.
 * @property {RGBA[]} secondary A 20-element tuple each of which is a tint of {@link ColorData.secondary} from the darkest to the lightest.
 * @property {RGBA[][]} others The result of conversion of each element of the {@link ColorData.others} array. Each element is a 20-length tuple where each element in the tuple is a tint of the element in the corresponding index in {@link ColorData.others} from darkest to the lightest.
 */
/**
 * An object that contains tabular information about 20 tones of {@link ColorData.primary}, {@link ColorData.secondary} and {@link ColorData.others}. It uses a special function to split the properties of `ColorData` into tones each time the user mutates the `ColorData` or {@link ColorPallette `ColorPallette`} objects.
 * Please note that for performance reasons, all properties are `RGBA` objects types.
 * @typedef {Object} Tones the `Tones` class.
 * @property {RGBA[]} primary A 20-element tuple each of which is a tone of {@link ColorData.primary} from the clearest to the grayest.
 * @property {RGBA[]} secondary A 20-element tuple each of which is a tone of {@link ColorData.secondary} from the clearest to the grayest.
 * @property {RGBA[][]} others The result of conversion of each element of the {@link ColorData.others} array. Each element is a 20-length tuple where each element in the tuple is a tone of the element in the corresponding index in {@link ColorData.others} from clearest to the grayest.
 */
/**
 * An interface for representing variations and differentiations of colours found in {@link ColorData `ColorData`} using simple objects. If you want a darker or grayer or lighter or a slight different hue version of a color in `ColorData`, this is the interface for you.
 * @typedef {Object} ColorScheme
 * @property {Analogs} analogs the `Analogs` object. Contains the analog data of {@link ColorData}
 * @property {Illumination} illumination the `Illumination` object. Contains the luminance data of {@link ColorData}
 * @property {ContrastRatios} contrastRatios an array representing the `ContrastRatios` object. Contains the contrast data of {@link ColorData}
 * @property {Inversion} inversion the `Inversion` object. Contains the inversion data of {@link ColorData}
 * @property {GrayScale} grayScale the `GrayScale` object. Contains the grayscale data of {@link ColorData} 
 * @property {Shades} shades the `Shades` object. Contains the shade data of {@link ColorData} 
 * @property {Tints} tints the `Tints` object. Contains the tint data of {@link ColorData} 
 * @property {Tones} tones the `Tones` object. Contains the tone data of {@link ColorData} 
 */
/**
 * An interface representing the webpage's current colour states and all it's supported variations
 * @typedef {ColorData & ColorScheme} ColorPallette
 */
/**
 * An interface that manages colours and typography of a web page. A react context that exposes access to color and font capabilities of this frontend
 * @typedef {Object} GraphicsUI
 * @property {ColorPallette} ui A readonly value that encapsulates data relating to colours of this site.
 * @property {() => void} contrast A function mutates the {@link GraphicsUI.ui `GraphicsUI.ui`} by switching the {@link ColorData.primary primary colour} with the {@link ColorData.secondary secondary colour}
 * @property {Colorer} getColor A function that attempts to give varying hues to the primary or {@link ColorData.secondary secondary colour}. Useful for implementing hover, click, drag (basically any suituations where the same colour but a different hue is desired) etc effects on components
 * @property {AccentAlertColorer} getOtherColor the same as {@link GraphicsUI.getColor `GraphicsUI.getColor`} but supports {@link ColorData.others `ColorData.others`} instead.
 * @property {SetPrimary} setPrimary Sets the {@link ColorData.primary primary colour} of this provider to a valid {@link ColourInterface `ColourInterface`} object representing the {@link ColorData.primary primary colour} to set. Note that this directly mutates the {@link GraphicsContext.ui} object
 * @property {SetSecondary} setSecondary Sets the {@link ColorData.secondary secondary colour} of this provider to a valid {@link ColourInterface `ColourInterface`} object representing the {@link ColorData.secondary secondary colour} to set. Note that this directly mutates the {@link GraphicsContext.ui} object
 * @property {SetAccent} setAccent Sets the {@link ColorData.others accent colour} of this provider to a valid {@link ColourInterface `ColourInterface`} object representing the {@link ColorData.others accent colour} to set. Note that this directly mutates the {@link GraphicsContext.ui} object
 * @property {CSSTypo} typography An object for initially styling the typography of certain components.
 */
/**
 * A default implementation of the `ColorData` interface
 * @implements {ColorData}
 * @constant {ColorData} colorState
 * @type {ColorData} The default `ColorData` object of the ui
 * @readonly
 */
const colorState = {
  /**
   * An {@link Integer} type representing `#ebebeb`
   * @type {Integer}
   */
  primary: parseColour("#ebebeb"),
  /**
   * An {@link Integer} type representing `#141414`
   * @type {Integer}
   */
  secondary: parseColour("#141414"),
  /**
   * An array representing `[cornflowerblue, limegreen, orange, #b10000]`
   */
  others: [
    parseColour("cornflowerblue"),
    parseColour("limegreen"),
    parseColour("orange"),
    parseColour("#b10000"),
  ],
};
/**
 * @callback Mix A functor that can mix an {@link RGBA} colour with a specified scale and returns an array of the same length as `numOfColors` with the mixed results.
 * @param {RGBA} rgb the colour to be mixed.
 * @param {number | undefined} scale the amount of saturation of `rgb` that will be found in the results from element-to-element.
 * @returns {RGBA}
 */
/**
 * A function that can mixes an {@link RGBA} colour with the specified `mix` and returns an array of the same length as `spectrum` with the mixed results.
 * @param {RGBA} rgb a valid `RGBA` object representing a given colour
 * @param {number} spectrum the number colours the resultant mixture should produce
 * @param {Mix} mix mixes `rgb` with a scale of `1 / spectrum`
 * @returns {RGBA[]} an array of `RGBA` objects with the same length as the specified `spectrum`. None of the elements will contain the same colour as `rgb`
 */
function getColors(rgb, spectrum, mix) {
  const scale = 1 / spectrum;
  const colors = [];
  for (let i = 0; i < spectrum; i++) {
    colors.push(mix(rgb, scale * (i + 1)));
  }
  return colors;
}
/**
 * Creates an array of the same length as the given `spectrum` representing the shades of the `rgb` argument
 * @param {RGBA} rgb a valid `RGBA` object representing the colour from which shades are to be generated from
 * @param {number} spectrum the number of shades to be created
 * @returns {RGBA[]} all shades of `rgb` in the given `spectrum`
 * @see {@link shade}
 */
const getShades = (rgb, spectrum) => getColors(rgb, spectrum, shade);
/**
 * Creates an array of the same length as the given `spectrum` representing the tints of the `rgb` argument
 * @param {RGBA} rgb a valid `RGBA` object representing the colour from which tints are to be generated from
 * @param {number} spectrum the number of tints to be created
 * @returns {RGBA[]} all tints of `rgb` in the given `spectrum`
 * @see {@link tint}
 */
const getTints = (rgb, spectrum) => getColors(rgb, spectrum, tint);
/**
 * Creates an array of the same length as the given `spectrum` representing the tones of the `rgb` argument
 * @param {RGBA} rgb a valid `RGBA` object representing the colour from which tones are to be generated from
 * @param {number} spectrum the number of tones to be created
 * @returns {RGBA[]} all tones of `rgb` in the given `spectrum`
 * @see {@link tone}
 */
const getTones = (rgb, spectrum) => getColors(rgb, spectrum, tone);
/**
 * @typedef {Object} BaseFont An object representing the default of a CSS font typography
 * @property {string} family the font family name
 * @property {number} scale the size (in rem) of the font
 */
/**
 * @type {BaseFont} An object with a {@link BaseFont.family `BaseFont.family`} of `'Source Sans Pro'` and a {@link BaseFont.scale `BaseFont.scale`} of `1.1`
 * @constant
 * @readonly
 */
const regular = {
    family: "\"Source Sans Pro\", sans-serif",
    scale: 1.1
}
/**
 * Convenient function that generates {@link BaseFont} objects for styling html header elements with a {@link BaseFont.family `BaseFont.family`} of `'Bree Serif', serif`
 * @param {number} scale the rem units to be used with this styling
 * @returns {BaseFont} a 2BaseFont` object with a given `scale`
 */
function h(scale) {
    return {
        family: "\"Bree Serif\", serif",
        scale: scale
    }
}
/**
 * A destructed object used as a parameter for the `getColor` function
 * @typedef {Object} ColorerParam The destructured parameter.
 * @property {"primary" | "secondary"} level the name of the colour type. A colour type either the primary or the {@link ColorData.secondary secondary colour} of the webpage, hence it refers to the primary or secondary property in the {@link ColorData} object
 * @property {number | undefined} [index = 5] the index of the colour type in the {@link Analogs} object in the {@link ColorPallette}. This is optional and only used if the specific colour type has a grayish (colourless) hue.
 * @property {number | undefined} [tint = 0] the index of the tint in the colour type in the {@link Tints} object in the {@link ColorPallette}. This is optional and only used if the specific colour type has a proper hue (not colourless or grayish) and it has an {@link Illumination} value less than `0.5`
 * @property {number | undefined} [shade = 4] the index of the shade in the colour type in the {@link Shades} object in the {@link ColorPallette}. This is optional and only used if the specific colour type has a proper hue (not colourless or grayish) and it has an {@link Illumination} value greater than `0.5`
 */
/**
 * A functor that constructs a sub-object from the main {@link ColorPallette {@link ColorPallette `ColorPallette`}} object, depending on it's state. For example if the {@link ColorData.primary primary colour} of the {@link ColorPallette {@link ColorPallette `ColorPallette`}} object is without colour (grayish) then the `index` (specified by the parameter of the same name) of the {@link Analogs `Analogs`} object's primary property is returned else if the luminance of the {@link ColorData.primary primary colour} is less than `0.5` then the an `index` of the {@link Tints `Tints`} object's primary property is returned else the {@link Shades `Shades`} property is returned using the aforementioned pattern.
 * @callback Colorer Colours the primary or secondary color (specified by {@link ColorerParam.level `ColorerParam.level`}) with it's tint, shade or analog equivalent. The depth of the colour is regulated by the {@link ColorerParam.index `ColorerParam.index`} parameter.
 * @param {ColorerParam} param0 please see {@link ColorerParam `ColorerParam`}
 * @returns {HSLA | Integer | HSIA | HSVA | number[] | RGBA} a colour that may be the analog, tint or shade of the colour type specified by `level`. The actual object returned depends on how {@link ColorData.primary `ColorData.primary`} or {@link ColorData.secondary `ColorData.secondary`} was initialised, but it will always be a valid {@link ColourInterface `ColourInterface`} object.
 */
  /**
   * A destructed object used as a parameter for the `getOtherColor` function
   * @typedef {Object} AccentAlertColorerParam The destructured parameter.
   * @property {0|1|2|3} otherLevel the index of the colour in the {@link ColorData.others} array.
   * @property {number | undefined} [index = 5] the index of the colour type in the {@link Analogs} object in the {@link ColorPallette}. This is optional and only used if the specific colour type has a grayish (colourless) hue
   * @property {number | undefined} [tint = 0] the index of the tint in the colour type in the {@link Tints} object in the {@link ColorPallette}. This is optional and only used if the specific colour type has a proper hue (not colourless or grayish) and it has an {@link Illumination} value less than `0.5`
   * @property {number | undefined} [shade = 4] the index of the shade in the colour type in the {@link Shades} object in the {@link ColorPallette}. This is optional and only used if the specific colour type has a proper hue (not colourless or grayish) and it has an {@link Illumination} value greater than `0.5`
   */
  /**
   * A functor that constructs a sub-object from the main {@link ColorPallette {@link ColorPallette `ColorPallette`}} object, depending on it's state. For example if the {@link ColorData.others accent colour} of the {@link ColorPallette {@link ColorPallette `ColorPallette`}} object is without colour (grayish) then the `index` (specified by the parameter of the same name) of the {@link Analogs `Analogs`} object's accent property is returned else if the luminance of the {@link ColorData.others accent colour} is less than `0.5` then the an `index` of the {@link Tints `Tints`} object's primary property is returned else the {@link Shades `Shades`} property is returned using the aforementioned pattern.
   * @callback AccentAlertColorer Colours the 'other' colours (specified by {@link AccentAlertColorerParam.otherLevel `AccentAlertColorerParam.otherLevel`}) with it's tint, shade or analog equivalent. The depth of the colour is regulated by the {@link AccentAlertColorerParam.index `AccentAlertColorerParam.index`} parameter.
   * @param {AccentAlertColorerParam} param0 please see {@link AccentAlertColorerParam `AccentAlertColorerParam`}
   * @returns {HSLA | Integer | HSIA | HSVA | number[] | RGBA} a colour that may be the analog, tint or shade of the colour type specified by `otherLevel`. The actual object returned depends on how {@link ColorData.primary `ColorData.primary`} or {@link ColorData.secondary `ColorData.secondary`} was initialised, but it will always be a valid {@link ColourInterface `ColourInterface`} object.
   */
  /**
   * @typedef {Object} CSSTypo Typography for styling fonts in react component using the `<style>` component
   * @property {string} sansSerif a value used for the defacto sans-serif font
   * @property {string} serif a value used for the defacto serif font
   * @property {string} monospace a value used for the defacto monospace font
   * @property {string} allCaps a value used for headings and element requiring capital letters font only
   * @property {BaseFont} button an object used for styling `<button>` element fonts
   * @property {BaseFont} code an object used for styling `<code>` element fonts
   * @property {BaseFont} footer an object used for styling `<footer>` element fonts
   * @property {BaseFont} input an object used for styling `<input>` element fonts
   * @property {BaseFont} label an object used for styling `<label>` element fonts
   * @property {BaseFont} p an object used for styling `<p>` element fonts
   * @property {BaseFont} h1 an object used for styling `<h1>` element fonts
   * @property {BaseFont} h2 an object used for styling `<h2>` element fonts
   * @property {BaseFont} h3 an object used for styling `<h3>` element fonts
   * @property {BaseFont} h4 an object used for styling `<h4>` element fonts
   * @property {BaseFont} h5 an object used for styling `<h5>` element fonts
   * @property {BaseFont} h6 an object used for styling `<h6>` element fonts
   * @property {BaseFont} textArea an object used for styling `<textarea>` element fonts
   */
  /**
   * @callback SetPrimary sets the `primary` property of {@link ColorPallette}. No type checking is done so users should endeavour to check it themselves or this will throw.
   * @param {RGBA | Integer | NamedColour | HSLA | HSVA | CIEXYZA | HSIA} primary the value that {@link ColorPallette.primary `ColorPallette.primary`} will be set to.
   * @returns {void}
  */
 /**
  * @callback SetSecondary sets the `secondary` property of {@link ColorPallette}. No type checking is done so users should endeavour to check it themselves or this will throw.
  * @param {RGBA | Integer | NamedColour | HSLA | HSVA | CIEXYZA | HSIA} secondary the value that {@link ColorPallette.secondary `ColorPallette.secondary`} will be set to.
  * @returns {void}
  */
 /**
  * @callback SetAccent sets the `accent` property of {@link ColorPallette}. No type checking is done so users should endeavour to check it themselves or this will throw.
  * @param {RGBA | Integer | NamedColour | HSLA | HSVA | CIEXYZA | HSIA} accent the value that {@link ColorPallette.accent `ColorPallette.accent`} will be set to.
  * @returns {void}
  */
/**
 * The main context object. A react context provides contextual access to color and font capabilities of this frontend
 * @typedef {React.Context<GraphicsUI>} GraphicsContext
 */
/**
 * Exposes the internals of the {@link GraphicsUI `GraphicsUI`} object to consumers via this functor by calling {@link React.useContext `useContext`}
 * @callback GraphicsContextUser
 * @returns {GraphicsUI} a concrete implementation of the {@link GraphicsUI `GraphicsUI`} interface shared across components
 */
/**
 * @callback GraphicsUIDispatchActionCallback A function used as an argument to {@link GraphicsUIDispatchAction `GraphicsUIDispatchAction`} for partially setting the {@link ColorPallette `ColorPallette`} object
 * @param {ColorPallette} prev the previous value of the {@link ui `ui`} object which provides current values that may be used for destructuringg when creating a new {@link ColorPallette `ColorPallette`} object
 * @returns {ColorPallette} a new {@link ColorPallette `ColorPallette`} object destructred from `prev`
 */
/**
 * @callback GraphicsUIDispatchAction The function that sets the current {@link ui} object. In practice it may take any type as argument courtesy of React dispatch actions, but this will be self contained by trusted code from this site.
 * @param {ColorPallette | GraphicsUIDispatchActionCallback} ui a new {@link ColorPallette `ColorPallette`} object to set if this is a {@link ColorPallette `ColorPallette`} object or a function that receives the current {@link ColorPallette `ColorPallette`} object and returns a new one.
 * @returns {void}
 */
/*
 * You can opt to make a button hover when using the primaries or use one of the variants
 */
/**
 * A concrete implementation of the {@link GraphicsUI `GraphicsUI`} interface that creates a `GraphicsContext` context object that is currently empty
 * @type {GraphicsContext}
 * @constant
 * @readonly
 */
const UIContext = createContext();
/**
 * Constructs a [`React.Context`](https://legacy.reactjs.org/docs/context.html) for registering consumers so as to manage the ColorPallette this site from a central point. This provider manages colours and fonts. The following are provided by this component:
 * {@link GraphicsUI.ui `ui`}, {@link GraphicsUI.contrast `contrast`}, {@link GraphicsUI.getColor `getColor`}, {@link GraphicsUI.getOtherColor `getOtherColor`}, {@link GraphicsUI.setPrimary `setPrimary`}, {@link GraphicsUI.setSecondary `setSecondary`},
 * {@link GraphicsUI.setAccent `setAccent`}, {@link GraphicsUI.typography `typography`}.
 * ### Usage
 * @example 
 * #### Declare the provider
 * *index.js* 
 * ```jsx
 * import React from "react";
 * import ReactDOM from "react-dom/client";
 * import "./index.css";
 * import App from "./App";
 * import UIProvider from "./providers/ui";
 * const root = ReactDOM.createRoot(document.getElementById("root"));
 * root.render(
 *   <React.StrictMode>
 *     <UIProvider>
 *       <App />
 *     </UIProvider>
 *   </React.StrictMode>
 * );
 * ```
 * #### use the provider elsewhere in a react component
 * ```jsx Header.jsx
 * import { useUI } from "./providers/ui";
 * const Header = () => {
 *   const {ui, contrast, getColor, getOtherColor, setPrimary, setSecondary, setAccent, typography} = useUI();
 * //... use the functors and objects
 *   return (<><header style={{
 *     backgroundColor: ui.primary.toString(),
 *     color: ui.secondary.toString(),
 *     fontFamily: typography.h1.family,
 *     fontSize: `${typography.h1.scale}em`
 *   }}
 *     <button style={{
 *       backgroundColor: getColor({level = "primary"}).toString(),
 *       color: getColor({level = "secondary", index = 13, tint = 4, shade = 17}).toString(),
 *       borderColor: getOtherColor({otherLevel = 0, index = 13, tint = 4, shade = 17}).toString(),
 *       borderWidth: .5em
 *     }}
 *     onClick={e => setPrimary(getRandomColor())}
 *     >Set pri to random</button>
 *     <button style={{
 *       backgroundColor: getColor({level = "secondary"}).toString(),
 *       color: getColor({level = "primary", index = 13, tint = 4, shade = 17}).toString(),
 *       borderColor: getOtherColor({otherLevel = 2, index = 13, tint = 4, shade = 17}).toString(),
 *       borderWidth: .5em
 *     }}
 *     onClick={e => setSecondary(getRandomColor())}
 *     >Set sec to random</button>
 *     <button style={{
 *       backgroundColor: ui.others[0].toString().toString(),
 *       color: getOtherColor({otherLevel = 0, index = 13, tint = 4, shade = 17}).toString(),
 *       borderColor: ui.tones.others[0][20].toString(),
 *       borderWidth: .8em
 *     }}
 *     onClick={contrast}
 *     >Contrast</button>
 *   </header>
 *   </>);
 * }
 * export default Header; 
 * ```
 * @param {React.ProviderProps<GraphicsUI>} param0 A destructured mutable object which allows injection of arguments at the component where this provider is used.
 * @constructs GraphicsContext a [`React.Provider`](https://legacy.reactjs.org/docs/context.html#contextprovider) that manages the {@link ColorPallette} of this site
 * @component UIProvider
 * @returns {JSX.Element & React.Provider<GraphicsUI>} a [`React.Provider`](https://legacy.reactjs.org/docs/context.html#contextprovider) that manages the ColorPallette of this site more technically, exposes the internal {@link ColorPallette} object
 * @see [`React.Context`](https://legacy.reactjs.org/docs/context.html) and [`React.Provider`](https://legacy.reactjs.org/docs/context.html#contextprovider) for more about react providers and context and how to use them
 */
export default function UIProvider({ children }) {
  /**
   * @type {[ColorPallette, GraphicsUIDispatchAction]}
   * @constant
   * @readonly
   */
  const [ui, setUI] = useState({
    ...colorState,
    analogs: {
      primary: analogous(colorState.primary.toRGB().toHSL(), toRadians(60), 5),
      secondary: analogous(colorState.secondary.toRGB().toHSL(), toRadians(60), 5),
      others: [analogous(colorState.others[0].toRGB().toHSL(), toRadians(60), 5), analogous(colorState.others[1].toRGB().toHSL(), toRadians(60), 5), analogous(colorState.others[2].toRGB().toHSL(), toRadians(60), 5), analogous(colorState.others[3].toRGB().toHSL(), toRadians(60), 5)],
    },
    illumination: {
      primary: getLuminance(colorState.primary.toRGB()),
      secondary: getLuminance(colorState.secondary.toRGB()),
      others: [
        getLuminance(colorState.others[0].toRGB()),
        getLuminance(colorState.others[1].toRGB()),
        getLuminance(colorState.others[2].toRGB()),
        getLuminance(colorState.others[3].toRGB()),
      ],
    },
    contrastRatios: [
      getContrastRatio(
        colorState.primary.toRGB(),
        colorState.secondary.toRGB()
      ),
      getContrastRatio(
        colorState.primary.toRGB(),
        colorState.others[0].toRGB()
      ),
      getContrastRatio(
        colorState.secondary.toRGB(),
        colorState.others[0].toRGB()
      ),
    ],
    inversion: {
      primary: invert(colorState.primary.toRGB()),
      secondary: invert(colorState.secondary.toRGB()),
      others: [
        invert(colorState.others[0].toRGB()),
        invert(colorState.others[1].toRGB()),
        invert(colorState.others[2].toRGB()),
        invert(colorState.others[3].toRGB()),
      ],
    },
    grayScale: {
      primary: getGrayScale(colorState.primary.toRGB()),
      secondary: getGrayScale(colorState.secondary.toRGB()),
      others: [
        getGrayScale(colorState.others[0].toRGB()),
        getGrayScale(colorState.others[1].toRGB()),
        getGrayScale(colorState.others[2].toRGB()),
        getGrayScale(colorState.others[3].toRGB()),
      ],
    },
    shades: {
      primary: getShades(colorState.primary.toRGB(), 20),
      secondary: getShades(colorState.secondary.toRGB(), 20),
      others: [
        getShades(colorState.others[0].toRGB(), 20),
        getShades(colorState.others[1].toRGB(), 20),
        getShades(colorState.others[2].toRGB(), 20),
        getShades(colorState.others[3].toRGB(), 20),
      ],
    },
    tints: {
      primary: getTints(colorState.primary.toRGB(), 20),
      secondary: getTints(colorState.secondary.toRGB(), 20),
      others: [
        getTints(colorState.others[0].toRGB(), 20),
        getTints(colorState.others[1].toRGB(), 20),
        getTints(colorState.others[2].toRGB(), 20),
        getTints(colorState.others[3].toRGB(), 20),
      ],
    },
    tones: {
      primary: getTones(colorState.primary.toRGB(), 20),
      secondary: getTones(colorState.secondary.toRGB(), 20),
      others: [
        getTones(colorState.others[0].toRGB(), 20),
        getTones(colorState.others[1].toRGB(), 20),
        getTones(colorState.others[2].toRGB(), 20),
        getTones(colorState.others[3].toRGB(), 20),
      ],
    },
  });

  /**
   * Mutates the {@link ColorPallette} object by switching the {@link ColorData.primary primary colour} to the {@link ColorData.secondary secondary colour} and vice-versa.
   * This function is exported in this provider.
   * @returns {void}
   */
  const contrast = () =>
    setUI((colorState) => ({
      ...colorState,
      primary: colorState.secondary,
      secondary: colorState.primary,
      analogs: {
        ...colorState.analogs,
        primary: analogous(colorState.secondary.toRGB().toHSL(), toRadians(60), 5),
        secondary: analogous(colorState.primary.toRGB().toHSL(), toRadians(60), 5),
      },
      contrastRatios: [
        getContrastRatio(
          colorState.secondary.toRGB(),
          colorState.primary.toRGB()
        ),
        getContrastRatio(
          colorState.secondary.toRGB(),
          colorState.others[0].toRGB()
        ),
        getContrastRatio(
          colorState.primary.toRGB(),
          colorState.others[0].toRGB()
        ),
      ],
      grayScale: {
        ...colorState.grayScale,
        primary: getGrayScale(colorState.secondary.toRGB()),
        secondary: getGrayScale(colorState.primary.toRGB()),
      },
      illumination: {
        ...colorState.illumination,
        primary: getLuminance(colorState.secondary.toRGB()),
        secondary: getLuminance(colorState.primary.toRGB()),
      },
      inversion: {
        ...colorState.inversion,
        primary: invert(colorState.secondary.toRGB()),
        secondary: invert(colorState.primary.toRGB()),
      },
      shades: {
        ...colorState.shades,
        primary: getShades(colorState.secondary.toRGB(), 20),
        secondary: getShades(colorState.primary.toRGB(), 20),
      },
      tones: {
        ...colorState.tones,
        primary: getTones(colorState.secondary.toRGB(), 20),
        secondary: getTones(colorState.primary.toRGB(), 20),
      },
      tints: {
        ...colorState.tints,
        primary: getTints(colorState.secondary.toRGB(), 20),
        secondary: getTints(colorState.primary.toRGB(), 20),
      },
    }));
    /**
     * Sets the {@link ColorData.primary primary colour} of this provider.
     * @type {SetPrimary} a valid `ColourInterface` object representing the {@link ColorData.primary primary colour} to set.
     */
  const setPrimary = (primary) =>
    setUI((colorState) => ({
      ...colorState,
      primary,
      analogs: {
        ...colorState.analogs,
        primary: analogous(colorState.primary.toRGB().toHSL(), toRadians(60), 5)
      },
      contrastRatios: [
        getContrastRatio(primary.toRGB(), colorState.secondary.toRGB()),
        getContrastRatio(primary.toRGB(), colorState.others[0].toRGB()),
        getContrastRatio(
          colorState.secondary.toRGB(),
          colorState.others[0].toRGB()
        ),
      ],
      grayScale: {
        ...colorState.grayScale,
        primary: getGrayScale(primary.toRGB()),
      },
      illumination: {
        ...colorState.illumination,
        primary: getLuminance(primary.toRGB()),
      },
      inversion: {
        ...colorState.inversion,
        primary: invert(primary.toRGB()),
      },
      shades: {
        ...colorState.shades,
        primary: getShades(primary.toRGB(), 20),
      },
      tones: {
        ...colorState.tones,
        primary: getTones(primary.toRGB(), 20),
      },
      tints: {
        ...colorState.tints,
        primary: getTints(primary.toRGB(), 20),
      },
    }));
    /**
     * Sets the {@link ColorData.secondary secondary colour} of this provider.
     * @type {SetSecondary} a valid `ColourInterface` object representing the {@link ColorData.secondary secondary colour} to set.
     */
  const setSecondary = (secondary) =>
    setUI((colorState) => ({
      ...colorState,
      secondary,
      analogs: {
        ...colorState.analogs,
        secondary: analogous(colorState.secondary.toRGB().toHSL(), toRadians(60), 5),
      },
      contrastRatios: [
        getContrastRatio(colorState.primary.toRGB(), secondary.toRGB()),
        getContrastRatio(
          colorState.primary.toRGB(),
          colorState.others[0].toRGB()
        ),
        getContrastRatio(secondary.toRGB(), colorState.others[0].toRGB()),
      ],
      grayScale: {
        ...colorState.grayScale,
        secondary: getGrayScale(secondary.toRGB()),
      },
      illumination: {
        ...colorState.illumination,
        secondary: getLuminance(secondary.toRGB()),
      },
      inversion: {
        ...colorState.inversion,
        secondary: invert(secondary.toRGB()),
      },
      shades: {
        ...colorState.shades,
        secondary: getShades(secondary.toRGB(), 20),
      },
      tones: {
        ...colorState.tones,
        secondary: getTones(secondary.toRGB(), 20),
      },
      tints: {
        ...colorState.tints,
        secondary: getTints(secondary.toRGB(), 20),
      },
    }));
    /**
     * Sets the {@link ColorData.others accent colour} of this provider. The {@link ColorData.others accent colour} is the first element of {@link ColorData.others `ColorData.others`}.
     * @type {SetAccent} a valid `ColourInterface` object representing the {@link ColorData.others accent colour} to set.
     */
  const setAccent = (accent) =>
  setUI((colorState) => ({
    ...colorState,
    others: [
      accent,
      colorState.others[1],
      colorState.others[2],
      colorState.others[3],
    ],
    analogs: {
      ...colorState.analogs,
      others: [analogous(colorState.others[0].toRGB().toHSL(), toRadians(60), 5), analogous(colorState.others[1].toRGB().toHSL(), toRadians(60), 5), analogous(colorState.others[2].toRGB().toHSL(), toRadians(60), 5), analogous(colorState.others[3].toRGB().toHSL(), toRadians(60), 5)],
    },
    contrastRatios: [
      getContrastRatio(colorState.primary.toRGB(), colorState.secondary.toRGB()),
      getContrastRatio(
        colorState.primary.toRGB(),
        accent.toRGB()
      ),
      getContrastRatio(colorState.secondary.toRGB(), accent.toRGB()),
    ],
    grayScale: {
      ...colorState.grayScale,
      others: [getGrayScale(accent.toRGB()), getGrayScale(colorState.others[1].toRGB()), getGrayScale(colorState.others[2].toRGB()), getGrayScale(colorState.others[3].toRGB())]
    },
    illumination: {
      ...colorState.illumination,
      others: [getLuminance(accent.toRGB()), getLuminance(colorState.others[1].toRGB()), getLuminance(colorState.others[2].toRGB()), getLuminance(colorState.others[3].toRGB())],
    },
    inversion: {
      ...colorState.inversion,
      others: [
        invert(accent.toRGB()),
        invert(colorState.others[1].toRGB()),
        invert(colorState.others[2].toRGB()),
        invert(colorState.others[3].toRGB()),
      ],
    },
    shades: {
      ...colorState.shades,
      others: [
        getShades(accent.toRGB(), 20),
        getShades(colorState.others[1].toRGB(), 20),
        getShades(colorState.others[2].toRGB(), 20),
        getShades(colorState.others[3].toRGB(), 20),
      ],
    },
    tones: {
      ...colorState.tones,
      others: [
        getTones(accent.toRGB(), 20),
        getTones(colorState.others[1].toRGB(), 20),
        getTones(colorState.others[2].toRGB(), 20),
        getTones(colorState.others[3].toRGB(), 20),
      ],
    },
    tints: {
      ...colorState.tints,
      others: [
        getTints(accent.toRGB(), 20),
        getTints(colorState.others[1].toRGB(), 20),
        getTints(colorState.others[2].toRGB(), 20),
        getTints(colorState.others[3].toRGB(), 20),
      ],
    },
  }));
  /**
   * Constructs a colour such that it is in the same hue as the {@link ColorPallette.primary `primary`} or {@link ColorPallette.secondary `secondary`} but it is tinted, shaded or grayed depending on the arguments.
   * @type {Colorer}
   * @constant
   * @readonly
   */
	const getColor = useCallback(({level, index = 5, tint = 0, shade = 4}) => {
		if(ui[level].toRGB().toHSL().getHue() < 5)//means that this is a grayish colour
			return (ui.illumination[level] < 0.5 ? ui.tints[level][tint] : ui.shades[level][shade]);
		return ui.analogs[level][index];
	}, [ui]);
  /**
   * Performs the same function as {@link getColor} with the exception that it only works with {@link ColorPallette.others} whereby the index is specified by `otherLevel`
   * @type {AccentAlertColorer}
   * @constant
   * @readonly
   */
	const getOtherColor = useCallback(({otherLevel, index = 5, tint=0, shade=4}) => {
		if(ui.others[otherLevel].toRGB().toHSL().getHue() < 5)
			return (ui.illumination.others[otherLevel] < 0.5 ? ui.tints.others[otherLevel][tint] : ui.shades.others[otherLevel][shade]);
		return ui.analogs.others[otherLevel][index];
	}, [ui]);
  /**
   * An object for initially styling the typography of certain components.
   * @type {[CSSTypo]}
   * @constant
   * @readonly
   */
  const [typography] = useState({
    sansSerif: "\"Source Sans Pro\", sans-serif",
    serif: "\"Bree Serif\", serif",
    monospace: "\"B612 Mono\", monospace",
    allCaps: "\"Major Mono Display\"",
    button: {...regular, scale: .9},
    code: {...regular, family: "\"B612 Mono\", monospace"},
    // div: regular,
    footer: h(1.3),
    // header: {...regular, family: h(0).family},
    input: regular,
    label: {...regular, family: h(0).family},
    // li: regular,
    p: regular,
    // pre: {...regular, family: "B612 Mono, monospace"},
    h1: h(2.3),
    h2: h(2.1),
    h3: h(1.9),
    h4: h(1.7),
    h5: h(1.5),
    h6: h(1.3),
    // span: regular,
    textArea: regular
  })

  return (
    <UIContext.Provider
      value={{
        ui, contrast, getColor, getOtherColor, setPrimary, setSecondary, setAccent, typography }}
    >
      {children}
    </UIContext.Provider>
  );
}
/**
 * @type {GraphicsContextUser} A function that provides access and mutability to the {@link GraphicsUI `GraphicsUI`} object.
 * @constant
 * @readonly
 */
export const useUI = () => useContext(UIContext);
