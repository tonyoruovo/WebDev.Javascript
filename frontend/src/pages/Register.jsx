
import "./css/Form.css";
import { Navigate } from "react-router-dom";
import {
  BsEye as Eye,
  BsEyeSlash as NoEye,
  BsCheck2 as Check,
  BsX as X,
  BsXCircleFill as XFill,
  BsExclamationTriangle as Exc,
  BsExclamationTriangleFill as ExcFill,
  BsGoogle,
  BsTwitter,
  BsFacebook,
  BsCheckCircleFill as CheckFill,
  BsEyeFill as EyeFill,
  BsEyeSlashFill as NoEyeFill,
} from "react-icons/bs";
import { useState, useRef, useId } from "react";

import GenErr from "./GenErr";
import { useUI } from "../providers/ui";
import { useDimension } from "../providers/dimen";
import { useAccount, FetchState } from "../providers/account";

const ValidState = {
  Error: 0,
  Warn: 1,
  Valid: 2
}
const htmlDateString = (date) => `${date.getFullYear()}-${date.getUTCMonth() <= 9 ? "0"+date.getUTCMonth() : date.getUTCMonth()}-${date.getUTCDate() <= 9 ? "0"+date.getUTCDate() : date.getUTCDate()}`
const styleSelect = (ev, ui) => {
  if(ev.target.value === ""){
    ev.target.style.borderColor = ui.ui.others[3].toString()
    let lab = ev.target.parentElement.querySelector("label")
    lab.style.borderColor = ui.ui.others[3].toString()
    lab.querySelector(".err").style.opacity = "1"
    lab.querySelector(".success").style.opacity = ""
  } else {
    ev.target.style.borderColor = ""
    let lab = ev.target.parentElement.querySelector("label")
    lab.style.borderColor = ""
    lab.querySelector(".err").style.opacity = ""
    lab.querySelector(".success").style.opacity = "1"
  }
}

const Register = () => {
  const ui = useUI();
  const di = useDimension();
  const [passType, setPassType] = useState("password");
  const [pass, setPass] = useState("");
  const [validity, setValidity] = useState(ValidState.Error);//password validity
  
  //Validations schemes
  const [scheme, setScheme] = useState({
	title: {isValid: true, value: "", info: undefined},
	name: {isValid: false, value: undefined, info: undefined},
	surname: {isValid: false, value: undefined, info: undefined},
	otherNames: {isValid: true, value: "", info: undefined},
	gender: {isValid: false, value: undefined, info: undefined},
	dob: {isValid: false, value: undefined, info: undefined},
	address1: {isValid: true, value: "", info: undefined},
	address2: {isValid: true, value: "", info: undefined},
	phone: {isValid: false, value: undefined, info: undefined},
	email: {isValid: false, value: undefined, info: undefined},
	postal: {isValid: false, value: undefined, info: undefined},
	username: {isValid: false, value: undefined, info: undefined},
	password: {isValid: false, value: undefined, info: undefined},
	password2: {isValid: false, value: undefined, info: undefined}
 });
  
  const max = new Date(Date.now());
  max.setFullYear(max.getFullYear() - 5);
  const min = new Date(Date.now());
  min.setFullYear(min.getFullYear() - 130);
  const formRef = useRef();
  const formId = useId();
  const account = useAccount();
  // account.resetFetchState();
  // const redirect = useNavigate();

	if(account.isLoggedIn())
		return <Navigate to="/" />;
	if(account.fetchState === FetchState.Error) return <GenErr />
	if(account.fetchState === FetchState.Busy)
	return <div style={{
	  width: "100vw",
	  height: "100vh",
	  display: "flex",
	  flexDirection: "column",
	  justifyContent: "center",
	  alignItems: "center"
	  }}>
	  <div className="loader-huge" style={{marginBottom: "20px"}}></div>
	  <p>Please wait while we sign you in ...</p>
	  </div>

  const submit = data => {
    account.register(data);
  }

  return (
    <form ref={formRef} id={formId}>
      <FormStyle ui={ui} wi={di.innerWidth} />
      <Heading theme={ui.ui} />
      <fieldset>
        <legend>{ui.ui.illumination.primary >= .5 ? "personal details" : "PERSONAL DETAILS"}</legend>
        <div className="entry">
          <input type="text" id="title" name="title" placeholder="Mr, Mrs, Miss ..."
			  onChange={e => {
				const isValid = /[A-Za-z]/.test(e.target.value);
				setScheme(prev => ({...prev, title: {
					isValid,
					value: e.target.value || "",
					info: isValid ? undefined : "title is not a letter"
				}}));
			  }
		  }/>
          <label className="main-label" htmlFor="title">Title</label>
        </div>
        <div className="entry validatable">
          <input type="text" id="name" name="name" placeholder="Enter your first name" pattern="[A-Za-z]{3,}" required={true}
			  onChange={e => {
				const isValid = /[A-Za-z]{3,}/.test(e.target.value);
				setScheme(prev => ({...prev, name: {
					isValid,
					value: e.target.value || "",
					info: e.target.value.length >= 3 ? isValid ? undefined : "name is not a letter" : "name is less than 3 letters"
				}}));
			  }
		  }/>
          <label className="field-icon" htmlFor="name"><GetCheckIcon theme={ui.ui} /><GetErrorIcon theme={ui.ui} /></label>
          <label className="main-label" htmlFor="name">Name</label>
        </div>
        <div className="entry validatable">
          <input type="text" id="surname" name="surname" placeholder="Enter your surname" pattern="[A-Za-z]{3,}" required={true}
			  onChange={e => {
				const isValid = /[A-Za-z]{3,}/.test(e.target.value);
				setScheme(prev => ({...prev, surname: {
					isValid,
					value: e.target.value || "",
					info: e.target.value.length >= 3 ? isValid ? undefined : "surname is not a letter" : "surname has invalid letters"
				}}));
			  }
		  }/>
          <label className="field-icon" htmlFor="surname"><GetCheckIcon theme={ui.ui} /><GetErrorIcon theme={ui.ui} /></label>
          <label className="main-label" htmlFor="surname">Surname</label>
        </div>
        <div className="entry">
          <input type="text" id="otherNames" name="otherNames" placeholder="Enter your other names" title="Enter your other names separated by a comma"
			  onChange={e => {
				const isValid = /^[a-zA-Z]{3,}(?:,\s*[a-zA-Z]{3,})*$/.test(e.target.value);
				setScheme(prev => ({...prev, otherNames: {
					isValid,
					value: e.target.value || "",
					info: e.target.value.length >= 3 ? isValid ? undefined : "name is not a letter" : "names has invalid letters"
				}}));
			  }
		  }/>
          <label className="main-label" htmlFor="otherNames">Other names</label>
        </div>
        <div className="entry validatable">
          <select id="gender" name="gender" required={true} form={formId}
			  onFocus={ev => styleSelect(ev, ui)}
			  onChange={e => {
				  styleSelect(e, ui);
				const isValid = e.target.value === "male" ||
								e.target.value === "female" ||
								e.target.value === "other" ||
								e.target.value === "null";
				setScheme(prev => ({...prev, gender: {
					isValid,
					value: e.target.value || "",
					info: isValid ? undefined : `${e.target.value} is not  valid value for gender`
				}}));
			  }
		  }
          >
            <option hidden={true} value="">Select a gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="null">Prefer not to say</option>
          </select>
          <label className="field-icon" htmlFor="gender"><GetCheckIcon theme={ui.ui} /><GetErrorIcon theme={ui.ui} /></label>
        </div>
        <div className="entry validatable">
          <input type="date" id="dob" name="dob" required={true}
			  style={{color: ui.ui.secondary.toString()}}
			  max={htmlDateString(max)}
			  min={htmlDateString(min)}
			  onChange={e => {
				const isValid = e.target.valueAsDate.getFullYear() <= max.getFullYear() && e.target.valueAsDate.getFullYear() >= min.getFullYear();
				setScheme(prev => ({...prev, dob: {
					isValid,
					value: (e.target.valueAsDate || new Date()).toUTCString(),
					info: isValid ? undefined : `Invalid value for date of birth`
				}}));
			  }
		  }
          />
          <label className="field-icon" htmlFor="dob"><GetCheckIcon theme={ui.ui} /><GetErrorIcon theme={ui.ui} /></label>
          <label className="main-label" htmlFor="dob">Date of Birth</label>
        </div>
      </fieldset>
      <fieldset>
        <legend>{ui.ui.illumination.primary >= .5 ? "contact details" : "CONTACT DETAILS"}</legend>
        <div className="entry">
          <input type="text" id="address1" name="address1" placeholder="Your home address"
			  onChange={e => {
				const isValid = e.target.value && e.target.value.length >= 7;
				setScheme(prev => ({...prev, address1: {
					isValid,
					value: e.target.value || "",
					info: isValid ? undefined : `Invalid value for an address`
				}}));
			  }
		  }/>
          <label className="main-label" htmlFor="address1">Address 1</label>
        </div>
        <div className="entry">
          <input type="text" id="address2" name="address2" placeholder="Your work address"
			  onChange={e => {
				const isValid = e.target.value && e.target.value.length >= 7;
				setScheme(prev => ({...prev, address2: {
					isValid,
					value: e.target.value || "",
					info: isValid ? undefined : `Invalid value for an address`
				}}));
			  }
		  }/>
          <label className="main-label" htmlFor="address2">Address 2</label>
        </div>
        <div className="entry validatable">
			<input type="text" id="phone" name="phone" placeholder="Your phone number" required={true} pattern="^[+]?[0-9]{1,3}0?[0-9]{10}$"
			  onChange={e => {
				const isValid = e.target.checkValidity(e.target.value);
				setScheme(prev => ({...prev, phone: {
					isValid,
					value: e.target.value || "",
					info: isValid ? undefined : `Invalid value for phone`
				}}));
			  }
		  }/>
          <label className="field-icon" htmlFor="phone"><GetCheckIcon theme={ui.ui} /><GetErrorIcon theme={ui.ui} /></label>
          <label className="main-label" htmlFor="phone">Mobile</label>
        </div>
        <div className="entry validatable">
          <input type="email" id="email" name="email" placeholder="Your email" required={true}
			  onChange={e => {
				const isValid = e.target.checkValidity(e.target.value);
				setScheme(prev => ({...prev, email: {
					isValid,
					value: e.target.value || "",
					info: isValid ? undefined : `Invalid value for email`
				}}));
			  }
		  }/>
          <label className="field-icon" htmlFor="email"><GetCheckIcon theme={ui.ui} /><GetErrorIcon theme={ui.ui} /></label>
          <label className="main-label" htmlFor="email">Email</label>
        </div>
        <div className="entry validatable">
          <input type="text" id="postal" name="postal" placeholder="postal code" pattern="[0-9]{6}" required={true}
			  onChange={e => {
				const isValid = e.target.checkValidity(e.target.value);
				setScheme(prev => ({...prev, postal: {
					isValid,
					value: e.target.value || "",
					info: isValid ? undefined : `Invalid value for postal code`
				}}));
			  }
		  }/>
          <label className="field-icon" htmlFor="postal"><GetCheckIcon theme={ui.ui} /><GetErrorIcon theme={ui.ui} /></label>
          <label className="main-label" htmlFor="postal">Postal</label>
        </div>
      </fieldset>
      <fieldset>
        <legend>{ui.ui.illumination.primary >= .5 ? "login details" : "LOGIN DETAILS"}</legend>
        <div className="entry validatable">
          <input type="text" id="username" name="username" placeholder="Alphanumeric, underscore or dollar sign only" pattern="[A-Za-z0-9_\\$]{3,32}" required={true}
			  onChange={e => {
				const isValid = e.target.checkValidity(e.target.value);
				setScheme(prev => ({...prev, username: {
					isValid,
					value: e.target.value || "",
					info: isValid ? undefined : `Invalid value for username`
				}}));
			  }
		  }/>
          <label className="field-icon" htmlFor="username"><GetCheckIcon theme={ui.ui} /><GetErrorIcon theme={ui.ui} /></label>
          <label className="main-label" htmlFor="username">Username</label>
        </div>
        <div className="entry validatable">
          <input type={passType} id="password" name="password" placeholder="Enter your password"
          data-validity={validity}
          onChange={(ev) => {
            setPass(ev.target.value)

            if(pass.length < 8 || pass.length > 30){
              setValidity(ValidState.Error)
              ev.target.setCustomValidity("value must be between 8 and 30 (inclusive)")
              ev.target.title = "value must be between 8 and 30 (inclusive)"
            } else if(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(pass) === false){
              setValidity(ValidState.Error)
              ev.target.setCustomValidity("value must have uppercase and lowercase letters, punctuation and no control characters")
              ev.target.title = "value must have uppercase and lowercase letters, punctuation and no control characters"
            }
            else if (pass.length < 11) {
              setValidity(ValidState.Warn)
              ev.target.title = "Password is not secure"
              ev.target.setCustomValidity("")
            } else {
              setValidity(ValidState.Valid)
              ev.target.title = "Password is secure"
              ev.target.setCustomValidity("")
            }
				const isValid = ev.target.checkValidity(ev.target.value);
				setScheme(prev => ({...prev, password: {
					isValid,
					value: ev.target.value,
					info: isValid ? undefined : `Invalid value for password`
				}}));
          }}
          value={pass}
          required={true}
          />
          <label className="field-icon" htmlFor="password" style={{borderRadius: "0", borderRight: "none"}}><GetCheckIcon theme={ui.ui} /><GetWarningIcon theme={ui.ui} /><GetErrorIcon theme={ui.ui} /></label>
          <label className="main-label" htmlFor="password">Password</label>
          <button title="toggle visibility" type="button" className="password-visibility" onClick={() => setPassType((p) => p === "password" ? "text" : "password")}><GetShowPassIcon theme={ui.ui} /><GetHidePassIcon theme={ui.ui} /></button>
        </div>
        <div className="entry">
          <input type="password" id="password2" placeholder="Confirm password"
          onChange={ev => {
            if(ev.target.value !== pass) {
              document.getElementById("submit").setAttribute("disabled", "true")
              ev.target.setCustomValidity("Password mismatch")
            } else {
              document.getElementById("submit").removeAttribute("disabled")
              ev.target.setCustomValidity("")
            }
				const isValid = ev.target.value === scheme.password.value;
				setScheme(prev => ({...prev, password2: {
					isValid,
					value: ev.target.value,
					info: isValid ? undefined : `passwords do not match`
				}}));
          }}
          onPaste={(ev) => ev.preventDefault()}
          onDrop={(ev) => ev.preventDefault()}
          autoComplete="off"
          autoCorrect="off"
          required={true}
          />
          <label className="main-label" htmlFor="password2">Confirm password</label>
        </div>
      </fieldset>
      <div className="asterisk-descr">* field is required</div>
      <div className="form-buttons">
        <button id="submit" name="submit" type="submit" className="btn accent"
        onClick={ev => {
          if(formRef.current.checkValidity())
            ev.preventDefault()
		
			if(scheme.name.isValid && scheme.surname.isValid && scheme.gender.isValid && scheme.dob.isValid && scheme.phone.isValid && scheme.postal.isValid && scheme.email.isValid && scheme.username.isValid &&scheme.password.isValid &&scheme.password2.isValid) {
			
				const form = {};
				for(const p in scheme) {
					if(scheme[p].isValid && scheme[p].value.length > 0)
						form[p] = scheme[p].value;
				}
				submit(form)
				// if(account.isLoggedIn()) redirect("/")
			}
		
        }}
        >
          register
        </button>
        <button id="reset" name="reset" type="reset" className="btn"
        onClick={() => {
          /* Make sure to revert the validation styles of the select container to it's defaults */
          let label = formRef.current.querySelector("#gender").parentElement.querySelector(".field-icon")
          label.style.borderColor = ""
          label.querySelector(".err").style.opacity = ""
          label.querySelector(".success").style.opacity = ""
        }}
        >
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
  form fieldset .entry {position: relative;display: flex; flex-flow: row nowrap;margin: .4em .8em .4em .4em;width:100%;}
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
  /*The 'personal' fieldset*/
  form fieldset:nth-of-type(1) .entry:nth-of-type(1) { flex: 0 .25 20%;}/*title entry*/
  form fieldset:nth-of-type(1) .entry:nth-of-type(2) { flex: 1 .1 35%;}/*name entry*/
  form fieldset:nth-of-type(1) .entry:nth-of-type(3) { flex: 1 .1 35%;}/*surname entry*/
  form fieldset:nth-of-type(1) .entry:nth-of-type(4) { flex: 1 .1 50%;}/*other-names entry*/
  form fieldset:nth-of-type(1) .entry:nth-of-type(5) { flex: .5 .5 20%;}/*gender entry*/
  form fieldset:nth-of-type(1) .entry:nth-of-type(6) { flex: .5 .5 30%;}/*dob entry*/
  /*The 'contact' fieldset*/
  form fieldset:nth-of-type(2) .entry:nth-of-type(1) { flex: 0 0 95%;}/*address entry*/
  form fieldset:nth-of-type(2) .entry:nth-of-type(2) { flex: 0 0 95%;}/*address2 entry*/
  form fieldset:nth-of-type(2) .entry:nth-of-type(3) { flex: .5 .25 25%;}/*mobile entry*/
  form fieldset:nth-of-type(2) .entry:nth-of-type(4) { flex: .7 .1 35%;}/*email entry*/
  form fieldset:nth-of-type(2) .entry:nth-of-type(5) { flex: .3 .5 15%;}/*postal entry*/
  form fieldset .entry.validatable input,
  form fieldset .entry.validatable select { border-radius: .2em 0 0 .2em; border-right:none; }
  form fieldset .entry select {
    font-family: ${ui.typography.sansSerif};
    font-size: ${ui.typography.p.scale}em;
    background-color: ${ui.ui.primary.toString()};
    color: ${ui.ui.secondary.toString()};
    outline: none;
    border: .1em solid ${(ui.ui.illumination.secondary < 0.5 ? ui.ui.tints.secondary[5] : ui.ui.shades.secondary[16]).toString()};
  }
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
  form fieldset .entry .field-icon .warn,
  form fieldset .entry .field-icon .err {
    opacity: 0;
    grid-row: 1;
    grid-column: 1;
    align-self: center;
    justify-self:center;
    margin: .1em;
  }
  form fieldset .entry input:focus-within ~ .field-icon { border-color: ${ui.ui.secondary.toString()}; }
  form fieldset .entry input:not(#password):not(:placeholder-shown):valid ~ .field-icon .success {opacity: 1;}
  form fieldset .entry input:not(#password):not(:placeholder-shown):invalid {border-color: ${ui.ui.others[3].toString()};}
  form fieldset .entry input:not(#password):not(:placeholder-shown):invalid ~ .field-icon {border-color: ${ui.ui.others[3].toString()};}
  form fieldset .entry input:not(#password):not(:placeholder-shown):invalid ~ .field-icon .err {opacity: 1;}
  form fieldset .entry #gender[value="undefined"] ~ .field-icon .err {opacity: 1;}
  /*Password validation styling*/
  form fieldset .entry input#password[data-validity="0"]:not(:placeholder-shown) {border-color: ${ui.ui.others[3].toString()};}
  form fieldset .entry input#password[data-validity="0"]:not(:placeholder-shown) ~ .field-icon {border-color: ${ui.ui.others[3].toString()};}
  form fieldset .entry input#password[data-validity="0"]:not(:placeholder-shown) ~ .field-icon .password-visibility {border-color: ${ui.ui.others[3].toString()};}
  form fieldset .entry input#password[data-validity="0"]:not(:placeholder-shown) ~ .field-icon .err {opacity: 1;}
  form fieldset .entry input#password[data-validity="1"]:not(:placeholder-shown) ~ .field-icon .warn {opacity: 1;}
  form fieldset .entry input#password[data-validity="2"]:not(:placeholder-shown) ~ .field-icon .success {opacity: 1;}
  form fieldset .entry .field-icon .success { color: ${ui.ui.others[1].toString()};}
  form fieldset .entry .field-icon .warn { color: ${ui.ui.others[2].toString()};}
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
  form fieldset .entry input#password[data-validity="0"]:not(:placeholder-shown) ~ .password-visibility {border-color: ${ui.ui.others[3].toString()};}
  form .asterisk-descr {margin-left: 5.5em;font-family: ${ui.typography.p.family};font-size: ${ui.typography.p.scale}em;}
  form .form-buttons {display: flex; flex-flow: row; align-items: center;margin-left: 5.5em;}
  form .form-buttons button {margin: .5em; padding: .5em;}
  form .form-buttons button#reset {background-color: ${ui.ui.secondary.toString()};color: ${ui.ui.primary.toString()};}
  form .form-buttons button#reset:hover {background-color: ${ui.ui.primary.toString()};color: ${ui.ui.secondary.toString()};border-color: ${ui.ui.secondary.toString()};}
  form .social {display: flex; flex-flow: row wrap;margin-left: 5.5em;}
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
    <h1 style={{ padding: "0", margin: ".5em 0 .1em 0" }}>REGISTER</h1>
  ) : (
    <h1 style={{ padding: "0", margin: ".5em 0 .1em 0" }}>register</h1>
);

const Subtitle = () => (
  <h6 style={{ margin: "0", padding: "0" }}>
    Please enter your details to begin signup
  </h6>
);

const GetCheckIcon = ({theme}) => theme.illumination.primary < 0.5 ? <CheckFill className="success" /> : <Check className="success" />
const GetErrorIcon = ({theme}) => theme.illumination.primary < 0.5 ? <XFill className="err" /> : <X className="err" />
const GetWarningIcon = ({theme}) => theme.illumination.primary < 0.5 ? <ExcFill className="warn" /> : <Exc className="warn" />
const GetShowPassIcon = ({theme}) => theme.illumination.primary < 0.5 ? <EyeFill className="pass-show" /> : <Eye className="pass-show" />
const GetHidePassIcon = ({theme}) => theme.illumination.primary < 0.5 ? <NoEyeFill className="pass-hide" /> : <NoEye className="pass-hide" />

const pOf = (val, p) => (val / 100) * p

export default Register;
