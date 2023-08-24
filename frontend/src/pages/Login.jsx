
import "./css/Form.css";
import {
  BsEye as Eye,
  BsEyeSlash as NoEye,
  BsCheck2 as Check,
  BsX as X,
  BsXCircleFill as XFill,
  BsGoogle,
  BsTwitter,
  BsFacebook,
  BsCheckCircleFill as CheckFill,
  BsEyeFill as EyeFill,
  BsEyeSlashFill as NoEyeFill,
} from "react-icons/bs";
import { useState, useRef, useId } from "react";
import { Navigate } from "react-router-dom";

import GenErr from "./GenErr";
import { useUI } from "../providers/ui";
import { useDimension } from "../providers/dimen";
import { useAccount, FetchState } from "../providers/account";


const Login = () => {
  const ui = useUI();
  const di = useDimension();
  const [passType, setPassType] = useState("password");
  const formRef = useRef()
  const formId = useId()
  const account = useAccount()
  // account.resetFetchState();
  // const redirect = useNavigate()

  if(account.isLoggedIn())
    return <Navigate to="/" />;
	if(account.fetchState === FetchState.Error) return <GenErr />
  if(account.fetchState === FetchState.Busy)
  return <p style={{width: "100vw", height: "100vh"}}>Please wait while we sign you in ...</p>

  const submit = data => {
    account.login(data);
  }

  return (
    <form ref={formRef} id={formId}>
      <FormStyle ui={ui} wi={di.innerWidth} />
      <Heading theme={ui.ui} />
      <fieldset>
        <legend>{ui.ui.illumination.primary >= .5 ? "login details" : "LOGIN DETAILS"}</legend>
        <div className="entry validatable">
          <input type="text" id="username" name="username" placeholder="Alphanumeric, underscore or dollar sign only" pattern="[A-Za-z0-9_\\$]{3,32}" required={true}
		  form={formId}
		  />
          <label className="field-icon" htmlFor="username"><GetCheckIcon theme={ui.ui} /><GetErrorIcon theme={ui.ui} /></label>
          <label className="main-label" htmlFor="username">Username</label>
        </div>
        <div className="entry validatable">
          <input type={passType} id="password" name="password" placeholder="Enter your password ..."
		  form={formId}
          minLength={3}
          required={true}
          />
          <label className="field-icon" htmlFor="password" style={{borderRadius: "0", borderRight: "none"}}><GetCheckIcon theme={ui.ui} /><GetErrorIcon theme={ui.ui} /></label>
          <label className="main-label" htmlFor="password">Password</label>
          <button title="toggle visibility" type="button" className="password-visibility" onClick={() => setPassType((p) => p === "password" ? "text" : "password")}><GetShowPassIcon theme={ui.ui} /><GetHidePassIcon theme={ui.ui} /></button>
        </div>
      </fieldset>
      <div className="asterisk-descr">* field is required</div>
      <div className="form-buttons">
        <button id="submit" name="submit" type="submit" className="btn accent"
        onClick={ev => {
          if(formRef.current.checkValidity())
            ev.preventDefault()
            const form = {}
            let control = formRef.current.querySelector("#username")
            form[control.getAttribute("name")] = control.value || "";
            control = formRef.current.querySelector("#password")
            form[control.getAttribute("name")] = control.value || "";
			
			if(form.username.length >= 3 && /[A-Za-z0-9_\\$]{3,32}/.test(form.username) && form.password.length >= 3) {

				submit(form)
				// if(account.isLoggedIn()) redirect("/")
			}
        }}
        >
          login
        </button>
        <button id="reset" name="reset" type="reset" className="btn">
          reset
        </button>
        <input id="save" name="save" type="checkbox" />
        <label htmlFor="save">stay logged in</label>
      </div>
      <div className="social">
        <button className="btn google" type="button">login with google <BsGoogle /></button>
        <button className="btn facebook" type="button">login with facebook <BsFacebook /></button>
        <button className="btn twitter" type="button">login with twitter <BsTwitter /></button>
      </div>
    </form>
  );
};
const FormStyle = ({ui, wi}) => <style>{
  `
  form fieldset {display: flex; flex-flow: row wrap;margin: 2.5em 6em;}
  form fieldset legend {font-family: ${ui.typography.allCaps};font-size: ${ui.typography.h6.scale}em;color: ${ui.ui.secondary.toString()};}
  form fieldset .entry {position: relative;display: flex; flex-flow: row nowrap;margin: .4em .8em .4em .4em;width: 100%}
  form fieldset .entry .main-label {
    position: absolute;
    color:${ui.ui.secondary.toString()};
    left:.3em;
    top: .3em;
    transition-property: all;
    transition-duration: 256ms;
    transition-timing-function: ease-in-out;
  }
  form fieldset .entry input {
    font-family: ${ui.typography.sansSerif};
    font-size: ${ui.typography.p.scale}em;
    background-color: ${ui.ui.primary.toString()};
    color: ${ui.ui.secondary.toString()};
    outline: none;
    border: .1em solid ${(ui.ui.illumination.secondary < 0.5 ? ui.ui.tints.secondary[5] : ui.ui.shades.secondary[16]).toString()};
    border-radius: .2em;
    caret-color: ${ui.ui.secondary.toString()};
    padding: .5em .2em .3em .2em;
  }
  form fieldset .entry [name], form fieldset .entry [type] {width: 100%;}
  form fieldset .entry :required ~ .field-icon::after {
    content: "*";
    display: block;
    font-size: .5em;
    position: absolute;
    right: -1em;
  }
  form fieldset .entry.validatable input { border-radius: .2em 0 0 .2em; border-right:none; }
  form fieldset .entry input:not(:focus-within)::placeholder {color: transparent;}
  form fieldset .entry input:not(:focus-within):placeholder-shown {color: transparent;}
  form fieldset .entry input:not(:focus-within):-moz-placeholder {color: transparent;}
  form fieldset .entry input:not(:focus-within)::-moz-placeholder {color: transparent;}
  form fieldset .entry input:not(:focus-within):-ms-input-placeholder {color: transparent;}
  form fieldset .entry input:not(:focus-within)::-webkit-input-placeholder {color: transparent;}
  form fieldset .entry input::placeholder {color: ${ui.ui.illumination.secondary < .5 ? ui.ui.tints.secondary[5].toString() : ui.ui.shades.secondary[7].toString()};}
  form fieldset .entry input:placeholder-shown {color: ${ui.ui.illumination.secondary < .5 ? ui.ui.tints.secondary[5].toString() : ui.ui.shades.secondary[7].toString()};}
  form fieldset .entry input:-moz-placeholder {color: ${ui.ui.illumination.secondary < .5 ? ui.ui.tints.secondary[5].toString() : ui.ui.shades.secondary[7].toString()};}
  form fieldset .entry input::-moz-placeholder {color: ${ui.ui.illumination.secondary < .5 ? ui.ui.tints.secondary[5].toString() : ui.ui.shades.secondary[7].toString()};}
  form fieldset .entry input:-ms-input-placeholder {color: ${ui.ui.illumination.secondary < .5 ? ui.ui.tints.secondary[5].toString() : ui.ui.shades.secondary[7].toString()};}
  form fieldset .entry input::-webkit-input-placeholder {color: ${ui.ui.illumination.secondary < .5 ? ui.ui.tints.secondary[5].toString() : ui.ui.shades.secondary[7].toString()};}
  form fieldset .entry input:focus-within {border-color: ${ui.ui.secondary.toString()};}
  form fieldset .entry input:not(:placeholder-shown) ~ .main-label,
  form fieldset .entry input:focus-within ~ .main-label {transform: scale(.7) translate(-20%, -1.4em);background-color: ${ui.ui.primary.toString()};}
  form fieldset .entry .field-icon {
    display: grid;
    font-size: ${ui.typography.h4.scale}em;
    border: .05em solid ${(ui.ui.illumination.secondary < 0.5 ? ui.ui.tints.secondary[5] : ui.ui.shades.secondary[16]).toString()};
    border-radius: 0 .2em .2em 0;
    border-left: none;
    width: fit-content;
  }
  form fieldset .entry .field-icon .success,
  form fieldset .entry .field-icon .err {
    opacity: 0;
    grid-row: 1;
    grid-column: 1;
    align-self: center;
    justify-self:center;
    margin: .1em;
  }
  form fieldset .entry input:focus-within ~ .field-icon { border-color: ${ui.ui.secondary.toString()}; }
  form fieldset .entry input:not(:placeholder-shown):valid ~ .field-icon .success {opacity: 1;}
  form fieldset .entry input:not(:placeholder-shown):invalid {border-color: ${ui.ui.others[3].toString()};}
  form fieldset .entry input:not(:placeholder-shown):invalid ~ .field-icon {border-color: ${ui.ui.others[3].toString()};}
  form fieldset .entry input:not(:placeholder-shown):invalid ~ .field-icon .err {opacity: 1;}
  form fieldset .entry .field-icon .success { color: ${ui.ui.others[1].toString()};}
  form fieldset .entry .field-icon .err { color: ${ui.ui.others[3].toString()};}
  form fieldset .entry .password-visibility {
    display: grid;
    width: fit-content;
    font-size: ${ui.typography.h4.scale}em;
    border: .05em solid ${(ui.ui.illumination.secondary < 0.5 ? ui.ui.tints.secondary[5] : ui.ui.shades.secondary[16]).toString()};
    border-radius: 0 .2em .2em 0;
    border-left: none;
	background-color: inherit;
    color: ${ui.ui.others[0].toString()};
  }
  form fieldset .entry input:focus-within ~ .password-visibility {border-color: ${ui.ui.secondary.toString()};}
  form fieldset .entry .password-visibility [class^="pass-"] {
    opacity: 0;
    grid-row: 1;
    grid-column: 1;
    align-self: center;
    justify-self:center;
    margin: .1em .3em;
  }
  form fieldset .entry input[type="password"] ~ .password-visibility .pass-hide {opacity:1;}
  form fieldset .entry input[type="text"] ~ .password-visibility .pass-show {opacity:1;}
  form .asterisk-descr {margin-left:6em;font-family: ${ui.typography.p.family};font-size: ${ui.typography.p.scale}em;}
  form .form-buttons {display: flex; flex-flow: row; align-items: center;margin-left:6em;}
  form .form-buttons button {margin: .5em; padding: .5em;}
  form .form-buttons button#reset {background-color: ${ui.ui.secondary.toString()};color: ${ui.ui.primary.toString()};}
  form .form-buttons button#reset:hover {background-color: ${ui.ui.primary.toString()};color: ${ui.ui.secondary.toString()};border-color: ${ui.ui.secondary.toString()};}
  form .social {display: flex; flex-flow: row wrap;margin-left:6em;}
  form .social button {margin: 1em; padding: .5em .2em; flex: 0 0 ${wi > 500 ? (pOf(wi, 25) + "px") : "95%"};color: ${ui.ui.primary.toString()};}
  form .social button > * {margin-left: .5em;}
  form .social button.google {background-color: #ea4335;}
  form .social button.facebook {background-color: #1a39a1;}
  form .social button.twitter {background-color: #2295d8;}
  @media (max-width: 630px) {
    form .form-buttons, form .social,
    form .asterisk-descr {margin-left: .5em;}
    form fieldset {margin: 1em .5em;}
  }
  `
}</style>
const Heading = ({ theme }) => (
  <hgroup
    style={{
      display: "flex",
      flexFlow: "column nowrap",
      justifyContent: "ceter",
      alignItems: "center",
      margin: "0 0 3em 0",
      padding: "0",
    }}
  >
    <Title theme={theme} />
    <Subtitle />
  </hgroup>
);
const Title = ({ theme }) =>
  theme.illumination.primary < 0.5 ? (
    <h1 style={{ padding: "0", margin: ".5em 0 .1em 0" }}>LOGIN</h1>
  ) : (
    <h1 style={{ padding: "0", margin: ".5em 0 .1em 0" }}>login</h1>
  );
const Subtitle = () => (
  <h6 style={{ margin: "0", padding: "0" }}>
    Please enter your details to login
  </h6>
);

const GetCheckIcon = ({theme}) => theme.illumination.primary < 0.5 ? <CheckFill className="success" /> : <Check className="success" />
const GetErrorIcon = ({theme}) => theme.illumination.primary < 0.5 ? <XFill className="err" /> : <X className="err" />
const GetShowPassIcon = ({theme}) => theme.illumination.primary < 0.5 ? <EyeFill className="pass-show" /> : <Eye className="pass-show" />
const GetHidePassIcon = ({theme}) => theme.illumination.primary < 0.5 ? <NoEyeFill className="pass-hide" /> : <NoEye className="pass-hide" />

const pOf = (val, p) => (val / 100) * p

export default Login;
