import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useUI } from "./providers/ui";
import ButtonStyle from "./pages/button-css";
import { useL10n } from "./providers/l10n";

function App() {

  const ui = useUI();
  const { options } = useL10n();
  
  return (
    <>
    <Style theme={ui.ui} typo={ui.typography} getColor={ui.getColor} options={options} />
    <ButtonStyle theme={ui.ui} index={0} />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

function Style({theme, typo, options, getColor}) {
  const clr = theme.illumination.secondary <= 0.5 ? "white" : "black";
  const s = (tag,ty) => theme.contrastRatios[0]>=(ty.scale>1.1?3:4.3)?"":`${tag}{text-shadow:${(ty.scale>1.1?`0px 0px ${(5*ty.scale)/100}em;`:`${(2.7*ty.scale)/100}em ${(2.7*ty.scale)/100}em ${clr}, -${(2.7*ty.scale)/100}em ${(2.7*ty.scale)/100}em ${clr}, ${(2.7*ty.scale)/100}em -${(2.7*ty.scale)/100}em ${clr}, -${(2.7*ty.scale)/100}em -${(2.7*ty.scale)/100}em ${clr};`)}}`
  return <style>
    {`
	/*:root {--golden-ratio: calc(calc(1 + 2.23606797749979) / 2);}*/
    html,body{background-color:${theme.primary.toString()};color:${theme.secondary.toString()};}
    h1,h2,h3,h4,h5,h6,ul,li,i,header,footer,p,pre,button,input,span,div {color:${theme.secondary.toString()};}
    h1 {font-family:${typo.h1.family};font-size: ${typo.h1.scale}em;}
    h2 {font-family:${typo.h2.family};font-size: ${typo.h2.scale}em;}
    h3 {font-family:${typo.h3.family};font-size: ${typo.h3.scale}em;}
    h4 {font-family:${typo.h4.family};font-size: ${typo.h4.scale}em;}
    h5 {font-family:${typo.h5.family};font-size: ${typo.h5.scale}em;}
    h6 {font-family:${typo.h6.family};font-size: ${typo.h6.scale}em;}
    input[type="button"],input[type="submit"],input[type="clear"], button {font-family:${typo.button.family};font-size: ${typo.button.scale}em;}
    code {font-family:${typo.code.family};font-size: ${typo.code.scale}em;}
    footer {font-family:${typo.footer.family};font-size: ${typo.footer.scale}em;}
    label {font-family:${typo.label.family};font-size: ${typo.label.scale}em;}
    p {font-family:${typo.p.family};font-size: ${typo.p.scale}em;}
    textarea {font-family:${typo.textArea.family};font-size: ${typo.textArea.scale}em;}
    ${s("button,code,div,header,input,label,li,p,pre,span,textarea", typo.p)}
    ${s("h1", typo.h1)}
    ${s("h2", typo.h2)}
    ${s("h3", typo.h3)}
    ${s("h4", typo.h4)}
    ${s("h5", typo.h5)}
    ${s("h6", typo.h6)}
    ${s("footer", typo.footer)}
    span, ul, li, div, pre, header {background-color: inherit;color:inherit;font-family:inherit;font-size:inherit;}
	/*Allows only the current language to be displayed*/
	[lang]:not(html):not([lang=${options.language}-${options.region}]){display: none;}
	/*For loaders and spinners*/
	[class^="loader"] {
		background-color: transparent;
		border-color: ${getColor({level: "secondary", tint: 18, shade: 5}).toString()};
		border-style: solid;
		border-top-color: ${getColor({level: "primary", tint: 5, shade: 18}).toString()};
		border-radius: 50%;
		animation: continuous-spining 2s linear infinite;
		/*We are always going to maintain the 0.2 ratio of the border width to the diameter*/
		width: 20px;
		height: 20px;
		border-width: 4px;
	}
	.loader-tiny {--diameter: 2.5px;height: var(--diameter);width: var(--diameter);border-width: calc(var(--diameter) * 0.2);}
	.loader-xxs {--diameter: 4.045084971874737px;/*calc(2.5px * var(--golden-ratio, 1.618));*/height: var(--diameter);width: var(--diameter);border-width: calc(var(--diameter) * 0.2);}
	.loader-xs {--diameter: 6.545084971874737px;height: var(--diameter);width: var(--diameter);border-width: calc(var(--diameter) * 0.2);}
	.loader-s {--diameter: 10.590169943749475px;height: var(--diameter);width: var(--diameter);border-width: calc(var(--diameter) * 0.2);}
	.loader-m {--diameter: 17.135254915624213px;height: var(--diameter);width: var(--diameter);border-width: calc(var(--diameter) * 0.2);}
	.loader-l {--diameter: 27.72542485937369px;height: var(--diameter);width: var(--diameter);border-width: calc(var(--diameter) * 0.2);}
	.loader-xl {--diameter: 44.860679774997905px;height: var(--diameter);width: var(--diameter);border-width: calc(var(--diameter) * 0.2);}
	.loader-xxl {--diameter: 72.5861046343716px;height: var(--diameter);width: var(--diameter);border-width: calc(var(--diameter) * 0.2);}
	.loader-huge {--diameter: 117.4467844093695px;height: var(--diameter);width: var(--diameter);border-width: calc(var(--diameter) * 0.2);}
	@keyframes continuous-spining {0% { transform: rotate(0deg); }100% { transform: rotate(360deg); }}
    `}
  </style>
}

export default App;
