import { createContext, useContext, useReducer, useCallback, useState } from "react";
// import { setCORS } from "google-translate-api-browser";
////////////////////////////////////////////////////////////////
///////////////GLOBAL DECLARATION FOR JSDOC////////////////////
//////////////////////////////////////////////////////////////
/**
 * The option required by the {@link TranslatorOptions.calendar}
 * @typedef {"buddhist" | "chinese" | "coptic" | "dangi" | "ethioaa" | "ethiopic" | "gregory" | "hebrew" | "indian" | "islamic" | "islamic-umalqura" | "islamic-tbla" | "islamic-civil" | "islamic-rgsa" | "iso8601" | "japanese" | "persian" | "roc" | "islamicc"} Calendar
 */
/**
 * An object that contains all the properties of objects used in the `Intl` api.
 * @typedef {Object} TranslatorOptions The object whose properties can be used in any of the contructor in the {@link Intl `Intl`} api. For documentation on each of these properties see [the mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl).
 * @property {Calendar} [calendar = "gregory"]
 * @property {"upper" | "lower" | "false"} [caseFirst = "false"]
 * @property {"compat"|"dict"|"emoji"|"eor"|"phonebk"|"phonetic"|"pinyin"|"stroke"|"trad"|"unihan"|"zhuyin"}[collation = undefined]
 * @property {"short" | "long"} [compactDisplay = "long"]
 * @property {string} [currency = undefined] aby valid 3-letter ISO currency code
 * @property {"symbol" | "narrowSymbol" | "code" | "name"} [currencyDisplay = "symbol"]
 * @property {"accounting" | "standard"} [currencySign = "standard"] "standard",//
 * @property {"full" | "long" | "medium" | "short"} [dateStyle = "full"] "full",//
 * @property {"era" | "year" | "quarter" | "month" | "weekOfYear" | "weekday" | "day" | "dayPeriod" | "hour" | "minute" | "second" | "timeZoneName"} [dateTimeField = undefined]: undefined,//
 * @property {"numeric" | "2-digit"} [day = "2-digit"] "2-digit",//
 * @property {"narrow" | "short" | "long"} [dayPeriod = "long"] This only affects the 12-hr clock 
 * @property {"long" | "short" | "narrow"} [days = "long"] "long",//
 * @property {"always" | "auto"} [daysDisplay = "auto"] "auto",//"always", "auto"
 * @property {"long" | "short" | "narrow"} [era = "long"] "long",//"long", "short", "narrow"
 * @property {"code" | "none"} [fallback = "code"] "code", //"code", "none"
 * @property {"basic" | "best fit"} [formatMatcher = "basic"] "basic",//"basic", "best fit"
 * @property {number} [fractionalDigits = 15]
 * @property {number} [fractionalSecondDigits = 3] the min is 1 and max is 3
 * @property {"grapheme"|"word"|"sentence"} [granularity = "word"] "word",//"grapheme", "word", "sentence"
 * @property {"numeric"|"2-digit"} [hour = "2-digit"] "2-digit",//"numeric", "2-digit"
 * @property {boolean} [hour12 = true]
 * @property {"h11"|"h12"|"h23"|"h24"} [hourCycle = "h12"] "h12",//"h11", "h12", "h23", "h24"
 * @property {"long" | "short" | "narrow" | "numeric" | "2-digit"} [hours = "long"] "long",//
 * @property {"always" | "auto"} [hoursDisplay = "auto"] "auto",//
 * @property {boolean} [ignorePunctuation = false]
 * @property {string} [language = "en"] any valid language tag
 * @property {string} [locale = "en-US"] any valid locale which can be a valid laguage tag optionally followed by a valid region tag optionally followed by a valid script tag optionally followed by a variant tag.
 * for example `en-US-latn-eng`
 * @property {"dialect" | "standard"} [languageDisplay = "dialect"] "dialect",//
 * @property {"best fit"|"lookup"} [localeMatcher = "best fit"] "best fit", // 
 * @property {"long"|"short"|"narrow"|"numeric"|"2-digit"} [microseconds = "long"] "long",//
 * @property {"always" | "auto"} [microsecondsDisplay = "auto"] "auto",//
 * @property {"long" | "short" | "narrow" | "numeric" | "2-digit"} [milliseconds = "long"] "long",//
 * @property {"always"|"auto"} [millisecondsDisplay = "auto"] "auto",//
 * @property {number} [maximumFractionDigits = 20] min 0, max 20
 * @property {number} [minimumIntegerDigits = 2] min 0, max 20
 * @property {number} [maximumSignificantDigits = 20] min 0, max 21
 * @property {number} [minimumSignificantDigits = 2] min 0, max 21
 * @property {"numeric" | "2-digit"} [minute = "2-digit"] "2-digit",//
 * @property {"long"|"short"|"narrow"|"numeric"|"2-digit"} [minutes = "long"] "long",//
 * @property {"always"|"auto"} [minutesDisplay = "auto"] "auto",//
 * @property {"numeric"|"2-digit"|"long"|"short"|"narrow"} [month = "2-digit"] "2-digit",//
 * @property {"long"|"short"|"narrow"} [months = "long"] "long",//
 * @property {"always"|"auto"} [monthsDisplay = "auto"] "auto",//
 * @property {"long"|"short"|"narrow"|"numeric"|"2-digit"} [nanoseconds = "long"] "long",//
 * @property {"always"|"auto"} [nanosecondsDisplay = "auto"] "auto",//
 * @property {"standard"|"scientific"|"engineering"|"compact"} [notation = "standard"] "standard",//
 * @property {"arab"|"arabext"|"bali"|"beng"|"deva"|"fullwide"|"gujr"|"guru"|"hanidec"|"khmr"|"knda"|"laoo"|"latn"|"limb"|"mlym"|"mong"|"mymr"|"orya"|"tamldec"|"telu"|"thai"|"tibt"} [numberingSystem = "latn"] "latn",//
 * @property {string} [numeric = undefined] (RelativeTimeFormat only)
 * @property {undefined} [privateUse: undefined]
 * @property {string} [region = "US"] any valid 2-letter region tag
 * @property {1 | 2 | 5 | 10 | 20 | 25 | 50 | 100 | 200 | 250 | 500 | 1000 | 2000 | 2500 | 5000} [roundingIncrement = 5]
 * @property {"ceil"|"floor"|"expand"|"trunc"|"halfCeil"|"halfFLoor"|"halfTrunc"|"halfEven"} [roundingMode = "halfEven"] "halfEven",//
 * @property {"auto"|"morePrecision"|"lessPrecision"} [roundingPriority = "auto"] "auto",//
 * @property {"numeric"|"2-digit"} [second = "2-digit"] "2-digit",//
 * @property {"long"|"short"|"narrow"|"numeric"|"2-digit"} [seconds = "long"] "long",//
 * @property {"always"|"auto"} [secondsDisplay = "auto"] "auto",//
 * @property {"base"|"accent"|"case"|"variant"} [sensitivity = undefined]
 * @property {string} [script = "latn"] any unicode script tags
 * @property {"auto" | "always" | "exceptZero" | "negative" | "never"} [signDisplay = "auto"] "auto",//
 * @property {"long"|"short"|"narrow"|"digital"|"decimal"| "currency"| "percent"| "unit"} [style = "long"] use "long", "short", "narrow", "digital" for {@link Intl.DurationFormat `DurationFormat`}, and for {@link Intl.NumberFormat} use "decimal", "currency", "percent", "unit"
 * @property {} [timeFormat=undefined]
 * @property {"full"|"long"|"medium"|"short"} [timeStyle = "full"] "full",//
 * @property {string} [timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone] based on https://www.iana.org/time-zones
 * @property {"long"|"short"|"longOffset"|"shortOffset"|"longGeneric"|"shortGeneric"} [timeZoneName = "long"] "long",//
 * @property {"auto"|"stripIfInteger"} [trailingZeroDisplay = "auto"] "auto",//
 * @property {"calendar"|"currency"|"dateTimeField"|"language"|"region"|"script"|"conjunction"|"disjunction"|"unit"|"cardinal"|"ordinal"} [type = undefined] use "calendar", "currency", "dateTimeField", "language", "region", "script" for {@link Intl.DisplayNames}, "conjunction", "disjunction", "unit" for{@link Intl.ListFormat}, and use "cardinal", "ordinal" for {@link Intl.PluralRules}
 * @property {string} [unit = undefined] a subset of https://tc39.es/proposal-unified-intl-numberformat/section6/locales-currencies-tz_proposed_out.html#sec-issanctionedsimpleunitidentifier
 * @property {"long"|"short"|"narrow"} [unitDisplay = "long"] "long",//
 * @property {"sort"|"search"} [usage = "sort"] 
 * @property {boolean | "always" | "auto" | "min2"} [useGrouping = true]
 * @property {string} [variant = "eng"] "eng",
 * @property {"long"|"short"|"narrow"} [weekday = "long"] "long",//
 * @property {"long"|"short"|"narrow"} [weeks = "long"] "long",//
 * @property {"always"|"auto"} [weeksDisplay = "auto"] "auto",//
 * @property {"numeric"|"2-digit"} [year = "numeric"] "numeric",//
 * @property {"long"|"short"|"narrow"} [years = "long"] "long",//
 * @property {"always"|"auto"} [yearsDisplay = "auto"] "auto",//
 */
/**
 * @typedef {string | string[]} L10nMessage the value in a translation table. Sometimes an array of strings might be stored in stead of a string to utilise storage of multiple translations under one key.
 */
/**
 * For example:
 * ```json
 * {"US": "what's your color?", "UK": "what's your colour?"}
 * ```
 * @typedef {{[region: string]: L10nMessage}} L10nRegion an object whose keys are the 2-letter ISO regional tags and the values are the translation strings. This is usually contained in a table (probably a JSON file) with keys that are the 2-letter ISO language tag for the given language.
 */
/**
 * For example:
 * ```json
 * "en": {"US": "what's your color?", "UK": "what's your colour?"}
 * ```
 * @typedef {{[language: string]: L10nRegion}} L10nLanguage an object whose keys are the 2-letter ISO language tags and the values are the translation strings. This is usually contained in a table (probably a JSON file) with a specified index (array index).
 */
/**
 * @typedef {Object} L10nMessageId A definition of the unique id of the {@link L10nMessageTranslation `L10nMessageTranslation`} object
 * @property {string} msgId The unique id of a given {@link L10nMessageTranslation `L10nMessageTranslation`} object.
 */
/**
 * For example:
 * ```json
 * {
 *   "msgId": "wyc",
 *   "en": {"US": "what's your color?", "UK": "what's your colour?"}
 *   "zh": {"CN": "你的颜色是什么？", "HK": "你的顏色是什麼？"}
 * }
 * ```
 * @typedef {L10nMessageId & L10nLanguage} L10nMessageTranslation an object with a property that represents it's message id and remaining properties representing the translation of various supported languages.
 */
/**
 * @typedef {L10nMessageTranslation[]} PageL10n an array of the {@link L10nMessageTranslation `L10nMessageTranslation`} of a page
 */
/**
 * @typedef {{[page: string]: PageL10n}} L10n an object (which is treated as a table) that contains the translation data for a component whereby the data is stored with a key that is the name of the jsx (or tsx) file where the react component was defined.
 */
/**
 * @callback UpdateOptions a function that updates the internal {@link TranslatorOptions `TranslatorOptions`} object with the specified properties in the argument
 * @param {TranslatorOptions} updateValues contains a the {@link TranslatorOptions `TranslatorOptions`} properties that the user wants to update
 * @returns {void}
 */
/**
 * The main localisation context object. A react context that exposes access to localisation capabilities of this frontend. The object that is exposed by the provider giving access to consumers to use.
 * @typedef {React.Context<Translator>} TranslatorContext
 */
/**
 * @callback TranslatorContextUser Exposes the internals of the `TranslatorContext` object to consumers via this functor by calling `useContext`
 * @returns {Translator}
 */
/**
 * A react callback for populating the {@link L10n localisation table}
 * @callback LoadL10nCallback
 * @param {string} src the jsx or tsx filename where this finction is called or whose translations should be populated into the table
 * @returns {void}
 */
/**
 * @typedef {TranslatorOptions & Intl.CollatorOptions} CollatorParam
 */
/**
 * Constructs an {@link Intl.Collator `Intl.Collator`} instance from the properties given by `opt` and returns a {@link Intl.Collator `Intl.Collator`} an object using the same locale as specified as `opt` or {@link TranslatorContext.options `TranslatorContext.options`}
 * @callback CollatorCallback
 * @param {CollatorParam} opt an object containing properties for the `Collator` instance being built
 * @returns {Intl.Collator} an object using the same locale as specified as `opt` or {@link TranslatorContext.options}
 */
/**
 * @typedef {TranslatorOptions & Intl.DateTimeFormatOptions} DateTimeFormatParam
 */
/**
 * Constructs an {@link Intl.DateTimeFormat `Intl.DateTimeFormat`} instance from the properties given by `opt` and returns a {@link Intl.DateTimeFormat `Intl.DateTimeFormat`} an object using the same locale as specified as `opt` or {@link TranslatorContext.options `TranslatorContext.options`}
 * @callback DateTimeFormatCallback
 * @param {DateTimeFormatParam} opt an object containing properties for the `DateTimeFormat` instance being built
 * @returns {Intl.DateTimeFormat} an object using the same locale as specified as `opt` or {@link TranslatorContext.options}
 */
/**
 * @typedef {TranslatorOptions & Intl.DisplayNamesOptions} DisplayNamesParam
 */
/**
 * Constructs an {@link Intl.DisplayNames `Intl.DisplayNames`} instance from the properties given by `opt` and returns a {@link Intl.DisplayNames `Intl.DisplayNames`} an object using the same locale as specified as `opt` or {@link TranslatorContext.options `TranslatorContext.options`}
 * @callback DisplayNamesCallback
 * @param {DisplayNamesParam} opt an object containing properties for the `DisplayNames` instance being built
 * @returns {Intl.DisplayNames} an object using the same locale as specified as `opt` or {@link TranslatorContext.options}
 */
/**
 * @typedef {TranslatorOptions & Intl.DurationFormatOptions} DurationFormatParam
 */
/**
 * Constructs an {@link Intl.DurationFormat `Intl.DurationFormat`} instance from the properties given by `opt` and returns a {@link Intl.DurationFormat `Intl.DurationFormat`} an object using the same locale as specified as `opt` or {@link TranslatorContext.options `TranslatorContext.options`}
 * @callback DurationFormatCallback
 * @param {DurationFormatParam} opt an object containing properties for the `DurationFormat` instance being built
 * @returns {Intl.DurationFormat} an object using the same locale as specified as `opt` or {@link TranslatorContext.options}
 */
/**
 * @typedef {TranslatorOptions & Intl.ListFormatOptions} ListFormatParam
 */
/**
 * Constructs an {@link Intl.ListFormat `Intl.ListFormat`} instance from the properties given by `opt` and returns a {@link Intl.ListFormat `Intl.ListFormat`} an object using the same locale as specified as `opt` or {@link TranslatorContext.options `TranslatorContext.options`}
 * @callback ListFormatCallback
 * @param {ListFormatParam} opt an object containing properties for the `ListFormat` instance being built
 * @returns {Intl.ListFormat} an object using the same locale as specified as `opt` or {@link TranslatorContext.options}
 */
/**
 * @typedef {TranslatorOptions & Intl.LocaleOptions} LocaleParam
 */
/**
 * Constructs an {@link Intl.Locale `Intl.Locale`} instance from the properties given by `opt` and returns a {@link Intl.Locale `Intl.Locale`} an object using the same locale as specified as `opt` or {@link TranslatorContext.options `TranslatorContext.options`}
 * @callback LocaleCallback
 * @param {LocaleParam} opt an object containing properties for the `Locale` instance being built
 * @returns {Intl.Locale} an object using the same locale as specified as `opt` or {@link TranslatorContext.options}
 */
/**
 * @typedef {TranslatorOptions & Intl.NumberFormatOptions} NumberFormatParam
 */
/**
 * Constructs an {@link Intl.NumberFormat `Intl.NumberFormat`} instance from the properties given by `opt` and returns a {@link Intl.NumberFormat `Intl.NumberFormat`} an object using the same locale as specified as `opt` or {@link TranslatorContext.options `TranslatorContext.options`}
 * @callback NumberFormatCallback
 * @param {NumberFormatParam} opt an object containing properties for the `NumberFormat` instance being built
 * @returns {Intl.NumberFormat} an object using the same locale as specified as `opt` or {@link TranslatorContext.options}
 */
/**
 * @typedef {TranslatorOptions & Intl.PluralRulesOptions} PluralRulesParam
 */
/**
 * Constructs an {@link Intl.PluralRules `Intl.PluralRules`} instance from the properties given by `opt` and returns a {@link Intl.PluralRules `Intl.PluralRules`} an object using the same locale as specified as `opt` or {@link TranslatorContext.options `TranslatorContext.options`}
 * @callback PluralRulesCallback
 * @param {PluralRulesParam} opt an object containing properties for the `PluralRules` instance being built
 * @returns {Intl.PluralRules} an object using the same locale as specified as `opt` or {@link TranslatorContext.options}
 */
/**
 * @typedef {TranslatorOptions & Intl.RelativeTimeFormatOptions} RelativeTimeFormatParam
 */
/**
 * Constructs an {@link Intl.RelativeTimeFormat `Intl.RelativeTimeFormat`} instance from the properties given by `opt` and returns a {@link Intl.RelativeTimeFormat `Intl.RelativeTimeFormat`} an object using the same locale as specified as `opt` or {@link TranslatorContext.options `TranslatorContext.options`}
 * @callback RelativeTimeFormatCallback
 * @param {RelativeTimeFormatParam} opt an object containing properties for the `RelativeTimeFormat` instance being built
 * @returns {Intl.RelativeTimeFormat} an object using the same locale as specified as `opt` or {@link TranslatorContext.options}
 */
/**
 * @typedef {TranslatorOptions & Intl.SegmenterOptions} SegmenterParam
 */
/**
 * Constructs an {@link Intl.Segmenter `Intl.Segmenter`} instance from the properties given by `opt` and returns a {@link Intl.Segmenter `Intl.Segmenter`} an object using the same locale as specified as `opt` or {@link TranslatorContext.options `TranslatorContext.options`}
 * @callback SegmenterCallback
 * @param {SegmenterParam} opt an object containing properties for the `Intl.Segmenter` instance being built
 * @returns {Intl.Segmenter} an object using the same locale as specified as `opt` or {@link TranslatorContext.options}
 */
/**
 * An interface with static functions for creating objects used for formatting text depending on the current {@link TranslatorOptions `TranslatorOptions`} instance. All the objects created by the functions of this interface are objects from the {@link Intl `Intl`} namespace.
 * @typedef {Object} Formatter
 * @property {CollatorCallback} collator a resident {@link Intl.Collator `Intl.Collator`} object that aids with locale-sensitive string comparisons hence, aids formatting
 * @property {DateTimeFormatCallback} dateTimeFormat a resident {@link Intl.DateTimeFormat `Intl.DateTimeFormat`} object that aids with locale-sensitive date and time formatting
 * @property {DisplayNamesCallback} displayNames a resident {@link Intl.DisplayNames `Intl.DisplayNames`} object that aids with locale-sensitive currency, language, region, script and variant name formatting
 * @property {DurationFormatCallback} durationFormat a resident {@link Intl.Duration `Intl.Duration`} object that aids with locale-sensitive duration (as it relates to time) formatting
 * @property {ListFormatCallback} listFormat a resident {@link Intl.ListFormat `Intl.ListFormat`} object that aids with locale-sensitive verbal enumeration as well as numerical enumeration formatting
 * @property {LocaleCallback} locale a resident {@link Intl.Locale `Intl.Locale`} object that aids with translation and formatting. It contains data for unicode locale indetifier in ISO standard names
 * @property {NumberFormatCallback} numberFormat a resident {@link Intl.NumberFormat `Intl.NumberFormat`} object that aids with locale-sensitive numerical formatting
 * @property {PluralRulesCallback} pluralRules a resident {@link Intl.PluralRules `Intl.PluralRules`} object that aids with locale-sensitive plural formatting and laguage specific rules for plurals
 * @property {RelativeTimeFormatCallback} relativeTimeFormat a resident {@link Intl.RelativeTimeFormat `Intl.RelativeTimeFormat`} object that aids with locale-sensitive relative time formatting. See (the mdn docs)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat]for examples
 * @property {SegmenterCallback} segmenter a resident {@link Intl.Segmenter `Intl.Segmenter`} object that aids with locale-sensitive formatting for text segmenting and splitting when {@link String.split `String.split`} is not sufficient
 */
/**
 * An interface for the translation data and function for loading and updating the same basically manages translation data.
 * @typedef {Object} Translation
 * @property {TranslatorOptions} options information about the current settings such as locale and formatting options etc. This is where the language, region, script and variant properties ar found.
 * @property {UpdateOptions} setOption a mutator that mutates {@link Translation.options `Translation.options`} updating it with specified properties
 * @property {L10n} translationObj the translation table/map which can be quite large
 * @property {LoadL10nCallback} loadL10n initialises the translation table
 */
/**
 * An interface that contains data and functions for direct textual translations and formatting for supported languages.
 * @typedef {Translation & Formatter} Translator
 */
/**
 * Creates a UUID string
 * @param {number} index used -- only if there is a {@link window.crypto.randomUUID} function available in the browser context -- as an argument to `window.crypto.randomUUID`
 * @returns {string} a Universal (or Global) Unique Identifier as a string.
 */
export function uuidv4(index = 1) {
	if(window.crypto.randomUUID) {
		let rv = window.crypto.randomUUID(index);
		return rv.toString();
	}
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : ((r & 0x3) | 0x8);
    return v.toString(16);
  });
}
/**
 * @type {TranslatorContext} Creates an empty context object that is the concrete instance of the {@link TranslatorContext `TranslatorContext`} implementation which is used for the localisation consumer
 * @constant
 * @readonly
 */
const L10nContext = createContext();
/**
 * @type {TranslatorOptions} Creates a concrete instance of the `TranslatorOptions` implementation with default properties
 */
const initialArg = {
	calendar: "gregory",//"buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "gregory", "hebrew", "indian", "islamic", "islamic-umalqura", "islamic-tbla", "islamic-civil", "islamic-rgsa", "iso8601", "japanese", "persian", "roc", "islamicc"
	caseFirst: "false",//"upper", "lower", or "false"
	collation: undefined,// "compat", "dict", "emoji", "eor", "phonebk", "phonetic", "pinyin", "stroke", "trad", "unihan", "zhuyin"
	compactDisplay: "long",//"short", "long",
	currency: undefined,
	currencyDisplay: "symbol",//"symbol", "narrowSymbol", "code", "name"
	currencySign: "standard",//"accounting", "standard"
	dateStyle: "full",//"full", "long", "medium", "short"
	dateTimeField: undefined,//"era", "year", "quarter", "month", "weekOfYear", "weekday", "day", "dayPeriod", "hour", "minute", "second", "timeZoneName"
	day: "2-digit",//"numeric", "2-digit"
	dayPeriod: "long", // This only affects the 12-hr clock "narrow", "short", "long"
	days: "long",//"long", "short", "narrow"
	daysDisplay: "auto",//"always", "auto"
	era: "long",//"long", "short", "narrow"
	fallback: "code", //"code", "none"
	formatMatcher: "basic",//"basic", "best fit"
	fractionalDigits: 15,
	fractionalSecondDigits: 3,//min is 1 and max is 3
	granularity: "word",//"grapheme", "word", "sentence"
	hour: "2-digit",//"numeric", "2-digit"
	hour12: true,
	hourCycle: "h12",//"h11", "h12", "h23", "h24"
	hours: "long",//"long", "short", "narrow", "numeric", "2-digit"
	hoursDisplay: "auto",//"always", "auto"
	ignorePunctuation: false,
	language: "en",
	locale: "en-US",
	languageDisplay: "dialect",//"dialect", "standard"
	localeMatcher: "best fit", // "best fit", "lookup"
	microseconds: "long",//"long", "short", "narrow", "numeric", "2-digit"
	microsecondsDisplay: "auto",//"always", "auto"
	milliseconds: "long",//"long", "short", "narrow", "numeric", "2-digit"
	millisecondsDisplay: "auto",//"always", "auto"
	maximumFractionDigits: 20,//min 0, max 20
	minimumIntegerDigits: 2,//min 0, max 20
	maximumSignificantDigits: 20,//min 0, max 21
	minimumSignificantDigits: 2,//min 0, max 21
	minute: "2-digit",//"numeric", "2-digit"
	minutes: "long",//"long", "short", "narrow", "numeric", "2-digit"
	minutesDisplay: "auto",//"always", "auto"
	month: "2-digit",//"numeric", "2-digit", "long", "short", "narrow"
	months: "long",//"long", "short", "narrow"
	monthsDisplay: "auto",//"always", "auto"
	nanoseconds: "long",//"long", "short", "narrow", "numeric", "2-digit"
	nanosecondsDisplay: "auto",//"always", "auto"
	notation: "standard",//"standard", "scientific", "engineering", "compact"
	numberingSystem: "latn",//"arab", "arabext", "bali", "beng", "deva", "fullwide", "gujr", "guru", "hanidec", "khmr", "knda", "laoo", "latn", "limb", "mlym", "mong", "mymr", "orya", "tamldec", "telu", "thai", "tibt"
	numeric: undefined,//["always", "auto"](RelativeTimeFormat)
	privateUse: undefined,
	region: "US",
	roundingIncrement: 5,//1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 2500, 5000
	roundingMode: "halfEven",//"ceil", "floor", "expand", "trunc", "halfCeil", "halfFLoor", "halfTrunc", "halfEven", 
	roundingPriority: "auto",//"auto", "morePrecision", "lessPrecision"
	second: "2-digit",//"numeric", "2-digit"
	seconds: "long",//"long", "short", "narrow", "numeric", "2-digit"
	secondsDisplay: "auto",//"always", "auto"
	sensitivity: undefined,// "base", "accent", "case", "variant"
	script: "latn",//unicode script tags
	signDisplay: "auto",//"auto", "always", "exceptZero", "negative", "never"
	style: "long",//"long", "short", "narrow", "digital" (for DurationFormat), ["decimal", "currency", "percent", "unit"](NumberFormat),
	timeFormat: undefined,
	timeStyle: "full",//"full", "long", "medium", "short"
	timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,//based on https://www.iana.org/time-zones
	timeZoneName: "long",//"long", "short", "longOffset", "shortOffset", "longGeneric", "shortGeneric"
	trailingZeroDisplay: "auto",//"auto", "stripIfInteger"
	type: undefined,//["calendar", "currency", "dateTimeField", "language", "region", "script"](DisplayName),["conjunction", "disjunction", "unit"](ListFormat), ["cardinal", "ordinal"](PluralRules)
	unit: undefined,// a subset of https://tc39.es/proposal-unified-intl-numberformat/section6/locales-currencies-tz_proposed_out.html#sec-issanctionedsimpleunitidentifier
	unitDisplay: "long",//"long", "short", "narrow"
	usage: "sort",// "sort", "search"
	useGrouping: true,// "always", "auto", false, "min2", true
	variant: "eng",
	weekday: "long",//"long", "short", "narrow"
	weeks: "long",//"long", "short", "narrow"
	weeksDisplay: "auto",//"always", "auto"
	year: "numeric",//"numeric", "2-digit"
	years: "long",//"long", "short", "narrow"
	yearsDisplay: "auto",//"always", "auto"
}
/**
 * A constructor that initialises a full {@link TranslatorOptions `TranslatorOptions`} object with just the few properties given by the argument
 * @param {TranslatorOptions} l10nOptions set of properties to replace the defaults
 * @returns {TranslatorOptions} a new {@link TranslatorOptions `TranslatorOptions`} object
 * @constructs TranslatorOptions
 */
const init = (l10nOptions) => ({...l10nOptions})
/**
 * Gets the proper text direction based on the {@link Intl.Locale `Intl.Locale`} settings for this site.
 * @param {TranslatorOptions} locale A partial {@link TranslatorOptions `TranslatorOptions`} object with properties that are specific to the {@link Intl.Locale `Intl.Locale`} constructor
 * @returns {string} the text direction of the given {@link Intl.Locale `Intl.Locale`} object as a `string`
 */
export const getTextDirection = function(locale) {
	try{
		return new Intl.Locale(locale).getTextInfo().direction;
	}catch(err){
		try{
			return new Intl.Locale(locale).textInfo.direction;
		}catch(err2){
			return locale.toLowerCase().indexOf("ar") >= 0 ? "rtl" : "ltr";
		}
	}
}
/**
 * A convenience check (like {@link Object.hasOwnProperty `Object.hasOwnProperty`}) for the existence of `prop` in `obj`. This prevents using the syntax `if(obj[prop])` which react disallows as
 * that will throw if `prop` does not exist in `obj`.
 * @param {{[key: string]: any}} obj an object whose keys can be accessed and iterated through 
 * @param {string} prop the property name to be searched
 * @returns {boolean} `true` if `prop` is in `obj` else returns `false`
 */
const objHas = (obj, prop) => {
	for(const p in obj)
		if(p === prop)
			return true;
	return false;
};

/**
 * Extracts translation messages whereby the input object `obj[prop]` is the translation in the form:
 * ```json
 * {
 *   key: [translations]
 * }
 * ```
 * The `key` is usually the jsx file and the `translations` is an array of all
 * the externalised (and localised) strings within that jsx file encoded as object
 * where all property name is the language and the property itself is an object
 * in the form `{region: translation}`.
 * @param {L10n} obj the translation table, usually an object from a JSON file
 * @param {string} key the message id (`'msgId'`) of the translation which is the unique identification of the message to be retrived. If this key is `undefined` or it was not found in the given localisation, undefined will be returned by this function.
 * @param {string} prop the jsx file name in `obj` (the jsx or tsx filename is where the react component -- that will be using the returned translation -- was declared). This should be unique.
 * @param {L10nMessage} defaultTranx a default translation message if `prop` was not found in `obj`
 * @returns {L10nLanguage | undefined} an object containing just the translation message stored with `key` if `obj[prop]` is valid and `key` was found or returns a similar object populated with `defaultTranx` if `obj[prop]` is not valid or else returns `undefined` (because `key` was not found).
 */
export const extractTranx = (obj, key, prop, defaultTranx) => {
	if(!objHas(obj, prop)) return {
		en:{UK: defaultTranx, US: defaultTranx},
		fr:{FR: defaultTranx},
		es:{ES: defaultTranx},
		ar:{SA: defaultTranx},
		zh:{CN: defaultTranx, HK: defaultTranx},
		hi:{IN: defaultTranx},
		sw:{KE: defaultTranx}
	};
	const transArray = obj[prop]
	for(let i = 0; i < transArray.length; i++)
		if(transArray[i]["msgId"] === key)
			return {
				en: transArray[i]["en"],
				fr: transArray[i]["fr"],
				es: transArray[i]["es"],
				ar: transArray[i]["ar"],
				zh: transArray[i]["zh"],
				hi: transArray[i]["hi"],
				sw: transArray[i]["sw"],
			};
	return undefined;
}

/**
 * Returns an array of JSX elements given by the function `jsxElement` (which is
 * the second argument) where it is expected that the `lang` and `dir` attributes
 * are set by this function and their text contents are also set this function.
 * 
 * @param {L10nLanguage} extracted an object that is usually the result of {@link extractTranx}
 * @param {(lang:string, dir: string, textContent: L10nMessage, key?:string) => JSX.Element} jsxElement a function that takes in 4 argument as follows
 * 	1. a `string` specifying the `lang` atrribute of the element
 * 	2. a `string` specifying the `dir` atrribute of the element
 * 	3. a `string` or `string[]` specifying the localised text content of the element
 * 	4. a `string` a unique string specifying the `key` prop of the react component to be returned. Can be ommited, in which case the `key` prop of the component will either be `undefined` or have a value that will probably not be unique.
 * Note that it is expected that this function should return a valid jsx element.
 * 
 * @return {JSX.Element[]} an array where each element returned by the argument
 * function `jsxElement` contains the result of all the languages in the first
 * argument object.
 */
export const parseElement = (extracted, jsxElement) => {
	const array = [];
	let i = 0, j = 0;
	for(const lang in extracted){
		for(const region in extracted[lang]) {
			array.push(jsxElement(`${lang}-${region}`, getTextDirection(lang), extracted[lang][region], `{uuidv4()}|${i}-${j}`));
			j++;
		}
		i++;
	}
	return array;
};
/**
 * Constructs a [`React.Context`](https://legacy.reactjs.org/docs/context.html) for registering consumers so as to manage the localisation this page from a central point. The following are provided by this component:
 * 
 * - {@link Translator.options `Translator.options`} — a complex state object that encapsulates the {@link TranslatorOptions `TranslatorOptions`} object.
 * - {@link Translator.setOption `Translator.setOption`} — a dispatch action for the {@link Translator.options `Translator.options`} object.
 * - {@link Translator.collator `Translator.collator`} — a constructor for user configured {@link Intl.Collator `Intl.Collator`} object using a {@link TranslatorOptions `TranslatorOptions`} object as argument.
 * - {@link Translator.dateTimeFormat `Translator.dateTimeFormat`} — a constructor for user configured {@link Intl.DateTimeFormat `Intl.DateTimeFormat`} object using a {@link TranslatorOptions `TranslatorOptions`} object as argument.
 * - {@link Translator.displayNames `Translator.displayNames`} — a constructor for user configured {@link Intl.DisplayNames `Intl.DisplayNames`} object using a {@link TranslatorOptions `TranslatorOptions`} object as argument.
 * - {@link Translator.durationFormat `Translator.durationFormat`} — a constructor for user configured [`Intl.DurationFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat) object using a {@link TranslatorOptions `TranslatorOptions`} object as argument.
 * - {@link Translator.listFormat `Translator.listFormat`} — a constructor for user configured [`Intl.ListFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat) object using a {@link TranslatorOptions `TranslatorOptions`} object as argument.
 * - {@link Translator.locale `Translator.locale`} — a constructor for user configured {@link Intl.Locale `Intl.Locale`} object using a {@link TranslatorOptions `TranslatorOptions`} object as argument.
 * - {@link Translator.numberFormat `Translator.numberFormat`} — a constructor for user configured {@link Intl.NumberFormat `Intl.NumberFormat`} object using a {@link TranslatorOptions `TranslatorOptions`} object as argument.
 * - {@link Translator.pluralRules `Translator.pluralRules`} — a constructor for user configured {@link Intl.PluralRules `Intl.PluralRules`} object using a {@link TranslatorOptions `TranslatorOptions`} object as argument.
 * - {@link Translator.relativeTimeFormat `Translator.relativeTimeFormat`} — a constructor for user configured {@link Intl.RelativeTimeFormat `Intl.RelativeTimeFormat`} object using a {@link TranslatorOptions `TranslatorOptions`} object as argument.
 * - {@link Translator.segmenter `Translator.segmenter`} — a constructor for user configured [`Intl.Segmenter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat) object using a {@link TranslatorOptions `TranslatorOptions`} object as argument.
 * - {@link Translator.translationObj `Translator.translationObj`} — an {@link L10n `L10n`} object which is the localisation table from which translations are retrieved.
 * - {@link Translator.loadL10n `Translator.loadL10n`} — a function (React callback) that isused to initialise the localisation table and is expected to be called once because it performance intensive and a single call usually suffice as it populates the {@link Translator.translationObj `Translator.translationObj`}.
 * 
 * 
 * @param {React.ProviderProps<Translator>} param0 A destructured mutable object which allows injection of arguments at the component where this provider is used.
 * @constructs TranslatorContext a [`React.Provider`](https://legacy.reactjs.org/docs/context.html#contextprovider) that manages the {@link L10n} of this site
 * @component L10nProvider
 * @returns {JSX.Element & React.Provider<Translator>} a [`React.Provider`](https://legacy.reactjs.org/docs/context.html#contextprovider) that manages the localisation of this site more technically, exposes the internal {@link L10n} table
 * @see [`React.Context`](https://legacy.reactjs.org/docs/context.html) and [`React.Provider`](https://legacy.reactjs.org/docs/context.html#contextprovider) for more about react providers and context and how to use them
 */
export default function L10nProvider({ children }) {

	/**
	 * A reducer that either creates or returns a designated default {@link TranslatorOptions `TranslatorOptions`} object without side effects. Only a partial {@link TranslatorOptions `TranslatorOptions`} object is required and all the properties found will overwrite those in the `state` argument.
	 * @param {TranslatorOptions} state the current state of the {@link TranslatorOptions `TranslatorOptions`}
	 * @param {{type: "reset" | "update"} & TranslatorOptions} obj a partially constructed {@link TranslatorOptions `TranslatorOptions`} object that has a `type` property that allows it to specify to this method whether to create or revert to default. Please note that this conflicts with a `type` property in the `TranslatorOptions` object so care should be taken as intelisense will show this as `never` type which is wrong of course.
	 * @returns {TranslatorOptions} a fully constructed options object or the default object if `obj.type === 'reset'`
	 */
	const reducer = (state, obj) => {
		switch(obj.type){
			default:
			case "reset": return initialArg;
			case "update": return {...state, ...obj};
		}
	}
	
	/**
	 * @type {[TranslatorOptions, UpdateOptions]}
	 */
	const [optionsState, dispatchOption] = useReducer(reducer, initialArg, init);
	
	/**
	 * Creates an {@link Intl.Collator `Intl.Collator`} object from the given argument
	 * @type {CollatorCallback}
	 * @constant
	 * @readonly
	 */
	const collator = useCallback(opt => {
		opt = opt || {};
		return new Intl.Collator([opt.language || optionsState.language, "en-US"], { ...optionsState, ...opt });
	}, [optionsState]);
	/**
	 * Creates an {@link Intl.DateTimeFormat `Intl.DateTimeFormat`} object from the given argument
	 * @type {DateTimeFormatCallback}
	 * @constant
	 * @readonly
	 */
	const dateTimeFormat = useCallback((opt) => {
		opt = opt || {};
		return new Intl.DateTimeFormat([opt.language || optionsState.language, "en-US"], { ...optionsState, ...opt });
	}, [optionsState]);
	/**
	 * Creates an {@link Intl.DurationFormat `Intl.DurationFormat`} object from the given argument
	 * @type {DurationFormatCallback}
	 * @constant
	 * @readonly
	 */
	const durationFormat = useCallback((opt) => {
		opt = opt || {};
		return new Intl.DurationFormat([opt.language || optionsState.language, "en-US"], { ...optionsState, ...opt });
	}, [optionsState]);
	/**
	 * Creates an {@link Intl.ListFormat `Intl.ListFormat`} object from the given argument
	 * @type {ListFormatCallback}
	 * @constant
	 * @readonly
	 */
	const listFormat = useCallback((opt) => {
		opt = opt || {};
		return new Intl.ListFormat([opt.language || optionsState.language, "en-US"], { ...optionsState, ...opt });
	}, [optionsState]);
	/**
	 * Creates an {@link Intl.DisplayNames `Intl.DisplayNames`} object from the given argument
	 * @type {DisplayNamesCallback}
	 * @constant
	 * @readonly
	 */
	const displayNames = useCallback((opt) => {
		opt = opt || {};
		return new Intl.DisplayNames([opt.language || optionsState.language, "en-US"], { ...optionsState, ...opt });
	}, [optionsState]);
	/**
	 * Creates an {@link Intl.Locale `Intl.Locale`} object from the given argument
	 * @type {LocaleCallback}
	 * @constant
	 * @readonly
	 */
	const locale = useCallback((opt) => {
		opt = opt || {};
		return new Intl.Locale([opt.language || optionsState.language, "en-US"], { ...optionsState, ...opt });
	}, [optionsState]);
	/**
	 * Creates an {@link Intl.NumberFormat `Intl.NumberFormat`} object from the given argument
	 * @type {NumberFormatCallback}
	 * @constant
	 * @readonly
	 */
	const numberFormat = useCallback((opt) => {
		opt = opt || {};
		return new Intl.NumberFormat([opt.language || optionsState.language, "en-US"], { ...optionsState, ...opt });
	}, [optionsState]);
	/**
	 * Creates an {@link Intl.PluralRules `Intl.PluralRules`} object from the given argument
	 * @type {PluralRulesCallback}
	 * @constant
	 * @readonly
	 */
	const pluralRules = useCallback((opt) => {
		opt = opt || {};
		return new Intl.PluralRules([opt.language || optionsState.language, "en-US"], { ...optionsState, ...opt });
	}, [optionsState]);
	/**
	 * Creates an {@link Intl.RelativeTimeFormat `Intl.RelativeTimeFormat`} object from the given argument
	 * @type {RelativeTimeFormatCallback}
	 * @constant
	 * @readonly
	 */
	const relativeTimeFormat = useCallback((opt) => {
		opt = opt || {};
		return new Intl.RelativeTimeFormat([opt.language || optionsState.language, "en-US"], { ...optionsState, ...opt });
	}, [optionsState]);
	/**
	 * Creates an {@link Intl.Segmenter `Intl.Segmenter`} object from the given argument
	 * @type {SegmenterCallback}
	 * @constant
	 * @readonly
	 */
	const segmenter = useCallback((opt) => {
		opt = opt || {};
		return new Intl.Segmenter([opt.language || optionsState.language, "en-US"], { ...optionsState, ...opt });
	}, [optionsState]);
	
	/**
	 * The translation-state object where all property names are the `msgId`
	 * That was used to store the translation in the database. Whenever a
	 * translation in a specific laguage is needed, the property value is set
	 * to the corresponding translation for that language.
	 * @type {[L10n, (l10n: L10n | (prev: L10n) => L10n) => void]}
	 * @constant
	 * @readonly
	 */
	const [tState, setTState] = useState({});
 	
	/**
	 * A react callback for populating the {@link L10n localisation table}
	 * @type {LoadL10nCallback}
	 * @constant
	 * @readonly
	 */
	const loadL10n = useCallback((src) => {
	  fetch("/l10n/l10n.json")
	  .then(res => res.text())
	  .then(text => JSON.parse(text))
	  .then(json => {
		  setTState(prev => ({
			  ...prev,
			  [src]: json[src]
		  }));
		console.log(`translations for page ${src} is done`);
		})
	  .catch(err => console.error(err));
	}, []);	
	return (
		<L10nContext.Provider value={
			{
				options: optionsState, setOption: dispatchOption,
				collator, dateTimeFormat, displayNames, durationFormat,
				listFormat, locale, numberFormat, pluralRules, relativeTimeFormat,
				segmenter, translationObj: tState, loadL10n
			}
		}>
			{ children }
		</L10nContext.Provider>
	);
}
/**
 * @type {TranslatorContextUser} A function that provides access and mutability to the {@link Translator `Translator`} object.
 * @constant
 * @readonly
 */
export const useL10n = () => useContext(L10nContext);
