import {useLayoutEffect} from "react";
import { Link } from "react-router-dom";
import { useDimension } from "../providers/dimen";
import { useUI } from "../providers/ui";
import { useL10n, getTextDirection, extractTranx, parseElement } from "../providers/l10n";
/**@typedef { typeof import("../providers/ui").ColorPallette } ColorPallette*/
/**@typedef { typeof import("../providers/ui").Colorer } Colorer*/
/**@typedef {typeof import("../providers/l10n").TranslatorOptions} TranslatorOptions */
/**
 * A 2-length tuple (readonly) representing the phrase `Select a language`. The first element is the localisation key `select_a_language` and
 * the second is the generic english translation. Other translation can be gotten from a JSON file containing the complete localisation table
 * for this site.
 * @constant {[string, string]} SAL select a language
 * @type {readonly [string, string]}
 * @readonly
 */
const SAL = Object.freeze(["select_a_language", "Select a language ..."]);
/**
 * A 2-length tuple (readonly) representing the phrase `Privacy Policy`. The first element is the localisation key `privacy_policy` and
 * the second is the generic english translation. Other translation can be gotten from a JSON file containing the complete localisation table
 * for this site.
 * @constant {[string, string]} PP privacy policy
 * @type {readonly [string, string]}
 * @readonly
 */
const PP = Object.freeze(["privacy_policy", "Privacy Policy"]);
/**
 * A 2-length tuple (readonly) representing the phrase `About us`. The first element is the localisation key `about_us` and
 * the second is the generic english translation. Other translation can be gotten from a JSON file containing the complete localisation table
 * for this site.
 * @constant {[string, string]} AU About us
 * @type {readonly [string, string]}
 * @readonly
 */
const AU = Object.freeze(["about_us", "About us"]);
/**
 * A 2-length tuple (readonly) representing the abbreviation `FAQ`. The first element is the localisation key `faq` and
 * the second is the generic english translation. Other translation can be gotten from a JSON file containing the complete localisation table
 * for this site.
 * @constant {[string, string]} FAQ FAQ
 * @type {readonly [string, string]}
 * @readonly
 */
const FAQ = Object.freeze(["faq", "FAQ"]);
/**
 * A 2-length tuple (readonly) representing the abbreviation `Select website language here`. The first element is the localisation key `change_lang` and
 * the second is the generic english translation. Other translation can be gotten from a JSON file containing the complete localisation table
 * for this site.
 * @constant {[string, string]} CYLH Select website language here
 * @type {readonly [string, string]}
 * @readonly
 */
const CYLH = Object.freeze(["change_lang", "Select website language here"]);

/**
 * The react component that is rendered as the static footer of the website
 * @returns {JSX.Element} a react component
 */
const Footer = () => {
	const ui = useUI()
    const d = useDimension()
	const {
		dateTimeFormat, displayNames, loadL10n, options, setOption, translationObj
	} = useL10n();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useLayoutEffect(() => loadL10n("footer.jsx"), [])
	
    return <><Style theme={ui.ui} getColor={ui.getColor} /><footer style={{marginBottom: d.innerWidth < 630 ? "1.5em" : "unset"}}>
		{parseElement(extractTranx(translationObj, PP[0], "footer.jsx", PP[1]), linkElement("/privacy"))}
		{parseElement(extractTranx(translationObj, AU[0], "footer.jsx", AU[1]), linkElement("/about"))}
		{parseElement(extractTranx(translationObj, FAQ[0], "footer.jsx", FAQ[1]), linkElement("/faq"))}
		<SelectElement displayNames={displayNames} options={options} setOption={setOption} translationObj={translationObj} />
	<p className="foot" dir={getTextDirection(options.locale)}>&copy;<span style={{fontFamily: ui.typography.allCaps}}>{ui.ui.illumination.primary < 0.5 ? "BRAND" : "brand"}</span>&trade; {`${getDateTimeFormat(dateTimeFormat).format(new Date())}`}</p>
	</footer></>
}

/**
 * Creates a function from thr given link argument and returns it. This function is consumed by the {@link parseElement} function
 * @param {string} to the link to the desired page
 * @returns {(lang: string, dir: string, textContent: string, key?: string) => JSX.Element} a function called by {@link parseElement}.
 */
const linkElement = (to) => (lang, dir, textContent, key) => <Link to={to} lang={lang} dir={dir} key={key}>{textContent}</Link>
/**
 * Creates a `select` element using react component syntax.
 * @param {{options: TranslatorOptions, setOption: (opt: TranslatorOptions) => void, translationObj: {[key: string]: []}, displayNames: (opt: TranslatorOptions) => Intl.DisplayNames}} param0 an object used for setting optional parameters 
 * @returns {JSX.Element} a `select` element that has been localised to the lanugae(s) specified by `options`
 */
const SelectElement = ({options, setOption, translationObj, displayNames}) => (<select onChange={e => {
		if(e.target.value && e.target.value.length > 0) {
			const loc = e.target.value.split('-');
			setOption({language: loc[0], region: loc[1], locale: `${loc[0]}-${loc[1]}`, script: loc[2], variant: loc[3], type: "update"});
		}
	}} title={extractTranx(translationObj, CYLH[0], "footer.jsx", CYLH[1])[options.language][options.region]}>
		<option value="" hidden={true} dir={getTextDirection(options.locale)}>{extractTranx(translationObj, SAL[0], "footer.jsx", SAL[1])[options.language][options.region]}</option>
		<option value="en-UK-Latn-eng" dir="ltr">{displayNames({type:"language", language:"en", region:"UK"}).of("en-UK")}</option>
		<option value="en-US-Latn-eng" dir="ltr">{displayNames({type:"language", language:"en", region:"US"}).of("en-US")}</option>
		<option value="fr-FR-Latn-fra" dir="ltr">{displayNames({type:"language", language:"fr", region:"FR"}).of("fr-FR")}</option>
		<option value="es-ES-Latn-spa" dir="ltr">{displayNames({type:"language", language:"es", region:"ES"}).of("es-ES")}</option>
		<option value="ar-SA-Arab-arb" dir="rtl">{displayNames({type:"language", language:"ar", region:"SA"}).of("ar-SA")}</option>
		<option value="zh-CN-Hans-cmn" dir="ltr">{displayNames({type:"language", language:"zh", region:"CN"}).of("zh-Hans")}</option>
		<option value="zh-HK-Hant-yue" dir="ltr">{displayNames({type:"language", language:"zh", region:"HK"}).of("zh-Hant")}</option>
		<option value="hi-IN-Deva-hin" dir="ltr">{displayNames({type:"language", language:"hi", region:"IN"}).of("hi-IN")}</option>
		<option value="sw-KE-Latn-swa" dir="ltr">{displayNames({type:"language", language:"sw", region: "KE"}).of("sw-KE")}</option>
	</select>)

/**
 * Supplies an {@link TranslatorOptions} object to the given functor and returns it's return value 
 * @param {(opt: TranslatorOptions) => Intl.DateTimeFormat} dateTimeFormat a constructor functor that will construct a new {@link Intl.DateTimeFormat} object
 * @returns {Intl.DateTimeFormat} a fully constructed `DateTimeFormat`object
 */
const getDateTimeFormat = (dateTimeFormat) => dateTimeFormat({weekday: undefined, dateStyle: "medium", timeStyle: undefined, era: undefined, year: undefined, month: undefined, day: undefined, dayPeriod: undefined, hour: undefined, minute: undefined, second: undefined, timeZoneName: undefined, fractionalSecondDigits: undefined, });
/**
 * A html `style` element as a react component which configures the theme and colours of this page.
 * @param {{theme: ColorPallette, getColor: Colorer}} param0 a destructed parameter object that specifies the CSS `background-color` property so that a different hue of the primary colour is achieved.
 * @component Style
 * @returns {JSX.Element} a `Style` object representing a react Component which in turn represents the html `<style>` element.
 */
const Style = ({theme, getColor}) => <style>
{`
#root > footer {
	width: 100%;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
	align-items: center;
	padding: 1em .1em;
	background-color: ${getColor({theme, level: "primary"}).toString()};
}
#root > footer select {
	font-family: "Source Sans Pro", sans-serif;
	font-size: 1.1em;
	padding-right: .1em;
}
#root > footer .foot {
	flex: 0 1 90%;
}
`}
</style>

export default Footer;