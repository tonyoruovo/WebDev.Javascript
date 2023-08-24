
import {useState, useCallback, useEffect, useLayoutEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import {
  BsList
} from "react-icons/bs";
import Decimal from "decimal.js";
import { useUI } from "../providers/ui";
import { Angle, Area, Currency,
Data, Distance, Energy, Flow, Force, Frequency,
Mass, Power, Pressure, Speed, Temperature, Time, Torque, Volume } from "../components/Icons";
import angleUnit from "./Converters/AngleUnit";
import areaUnit from "./Converters/AreaUnit";
import currencyUnit from "./Converters/CurrencyUnit";
import dataUnit from "./Converters/DataUnit";
import distanceUnit from "./Converters/DistanceUnit";
import energyUnit from "./Converters/EnergyUnit";
import flowUnit from "./Converters/FlowUnit";
import forceUnit from "./Converters/ForceUnit";
import frequencyUnit from "./Converters/FrequencyUnit";
import massUnit from "./Converters/MassUnit";
import powerUnit from "./Converters/PowerUnit";
import pressureUnit from "./Converters/PressureUnit";
import speedUnit from "./Converters/SpeedUnit";
import temperatureUnit from "./Converters/TemperatureUnit";
import timeUnit from "./Converters/TimeUnit";
import torqueUnit from "./Converters/TorqueUnit";
import volumeUnit from "./Converters/VolumeUnit";
import { Routes, Route } from "react-router-dom";
import { useL10n, getTextDirection, uuidv4, extractTranx, parseElement } from "../providers/l10n";

//l10n
const PUSFN = ["pusfn", "Please use the sidebar for navigation"];
const CONVS = ["convs", "Converters"];
const ANG = ["ang", ["Angle", "Angle unit", "Convert between degrees, radians, gradians and more"]];
const AREA = ["area", ["Area", "Area unit", "Convert between square yards, acres and more"]];
const CUR = ["cur", ["Currency", "Currency unit", "Convert between dollars, pounds, yen and more"]];
const DATA = ["data", ["Data", "Data unit", "Convert between bits, bytes, kibibytes and more"]];
const DIST = ["dist", ["Distance", "Distance unit", "Convert between metres, feet, miles and more"]];
const ENERGY = ["energy", ["Energy", "Energy unit", "Convert between calories, electronvolt, joules and more"]];
const FLOW = ["flow", ["Flow", "Flow unit", "Convert between fluid movement rates"]];
const FORCE = ["force", ["Force", "Force unit", "Convert between newton and tons"]];
const FRQY = ["frqy", ["Frequency", "Frequency unit", "Convert between hertz and cycles"]];
const MSS = ["mss", ["Mass", "Mass unit", "Convert between kilogrammes, ounces, pounds and more"]];
const POW = ["pow", ["Power", "Power unit", "Convert between horsepower, wattage, calorie per second and more"]];
const PRES = ["pres", ["Pressure", "Pressure unit", "Convert between pascal, torr and more"]];
const SPD = ["spd", ["Speed", "Speed unit", "Convert between kilometer and foot per hour, knots and more"]];
const TEMP = ["temp", ["Temperature", "Temperature unit", "Convert between celsius, fahrenheit, kelvin and more"]];
const TIME = ["time", ["Time", "Time unit", "Convert between seconds, months, days and more"]];
const TORQ = ["torq", ["Torque", "Torque unit", "Convert between newton-meter, pound-force-foot and more"]];
const VOLU = ["volu", ["Volume", "Volume unit", "Convert between fluid measures like litres and cubic meters"]];
const FROM = ["from", "from"];
const ENH = ["enh", "Enter a number here"];
const CONFR = ["confr", "Convert from"];
const SWIT = ["swit", "SWITCH"];
const TO = ["to", "to"];
const CONTO = ["conto", "Convert to"];

const Converter = () => {
	const ui = useUI();
	const { loadL10n, translationObj, options } = useL10n();
	useLayoutEffect(() => loadL10n("converter.jsx"), []);
	return (<div style={{margin: "0 10em"}}>
	<Routes>
		<Route path="/" element={<div style={{
	  width: "100vw",
	  height: "100vh",
	  display: "flex",
	  flexDirection: "column",
	  justifyContent: "center",
	  alignItems: "flexStart",
	  paddingLeft: "40%"
	  }}>
	  <div className="loader-huge" style={{marginBottom: "20px"}}></div>
	  {parseElement(extractTranx(translationObj, PUSFN[0], "converter.jsx", PUSFN[1]), mainP)}
	  </div>}></Route>
		<Route path="/angle" element={<Page theme={ui.ui} page={ANG} Icon={<Angle color={(ui.getColor({level: "secondary", index: 8})).toString()} />} units={angleUnit} options={options} obj={translationObj} />}></Route>
		<Route path="/area" element={<Page theme={ui.ui} page={AREA} Icon={<Area color={(ui.getColor({level: "secondary", index: 8})).toString()} />} units={areaUnit} options={options} obj={translationObj} />}></Route>
		<Route path="/currency" element={<Page theme={ui.ui} page={CUR} Icon={<Currency color={(ui.getColor({level: "secondary", index: 8})).toString()} />} units={currencyUnit} options={options} obj={translationObj} />}></Route>
		<Route path="/data" element={<Page theme={ui.ui} page={DATA} Icon={<Data color={(ui.getColor({level: "secondary", index: 8})).toString()} />} units={dataUnit} options={options} obj={translationObj} />}></Route>
		<Route path="/distance" element={<Page theme={ui.ui} page={DIST} Icon={<Distance color={(ui.getColor({level: "secondary", index: 8})).toString()} />} units={distanceUnit} options={options} obj={translationObj} />}></Route>
		<Route path="/energy" element={<Page theme={ui.ui} page={ENERGY} Icon={<Energy color={(ui.getColor({level: "secondary", index: 8})).toString()} />} units={energyUnit} options={options} obj={translationObj} />}></Route>
		<Route path="/flow" element={<Page theme={ui.ui} page={FLOW} Icon={<Flow color={(ui.getColor({level: "secondary", index: 8})).toString()} />} units={flowUnit} options={options} obj={translationObj} />}></Route>
		<Route path="/force" element={<Page theme={ui.ui} page={FORCE} Icon={<Force color={(ui.getColor({level: "secondary", index: 8})).toString()} />} units={forceUnit} options={options} obj={translationObj} />}></Route>
		<Route path="/frequency" element={<Page theme={ui.ui} page={FRQY} Icon={<Frequency color={(ui.getColor({level: "secondary", index: 8})).toString()} />} units={frequencyUnit} options={options} obj={translationObj} />}></Route>
		<Route path="/mass" element={<Page theme={ui.ui} page={MSS} Icon={<Mass color={(ui.getColor({level: "secondary", index: 8})).toString()} />} units={massUnit} options={options} obj={translationObj} />}></Route>
		<Route path="/power" element={<Page theme={ui.ui} page={POW} Icon={<Power color={(ui.getColor({level: "secondary", index: 8})).toString()} />} units={powerUnit} options={options} obj={translationObj} />}></Route>
		<Route path="/pressure" element={<Page theme={ui.ui} page={PRES} Icon={<Pressure color={(ui.getColor({level: "secondary", index: 8})).toString()} />} units={pressureUnit} options={options} obj={translationObj} />}></Route>
		<Route path="/speed" element={<Page theme={ui.ui} page={SPD} Icon={<Speed color={(ui.getColor({level: "secondary", index: 8})).toString()} />} units={speedUnit} options={options} obj={translationObj} />}></Route>
		<Route path="/temperature" element={<Page theme={ui.ui} page={TEMP} Icon={<Temperature color={(ui.getColor({level: "secondary", index: 8})).toString()} />} units={temperatureUnit} options={options} obj={translationObj} />}></Route>
		<Route path="/time" element={<Page theme={ui.ui} page={TIME} Icon={<Time color={(ui.getColor({level: "secondary", index: 8})).toString()} />} units={timeUnit} options={options} obj={translationObj} />}></Route>
		<Route path="/torque" element={<Page theme={ui.ui} page={TORQ} Icon={<Torque color={(ui.getColor({level: "secondary", index: 8})).toString()} />} units={torqueUnit} options={options} obj={translationObj} />}></Route>
		<Route path="/volume" element={<Page theme={ui.ui} page={VOLU} Icon={<Volume color={(ui.getColor({level: "secondary", index: 8})).toString()} />} units={volumeUnit} options={options} obj={translationObj} />}></Route>
	</Routes>
	<SideBar theme={ui.ui} getColor={ui.getColor} getOtherColor={ui.getOtherColor} obj={translationObj} />
	</div>);
}

const mainP = (lang, dir, textContent, key) => <p lang={lang} dir={dir} key={key}><b>{textContent}</b></p>
const sidebarHeading = (lang, dir, textContent, key) => <h6 lang={lang} dir={dir} key={key + "h6"}>{textContent}</h6>
const sidebarLink = (svg, to) => (lang, dir, textContent, key) => (<Link
	to={to}
	lang={lang}
	dir={dir}
	key={key + "a0"}
	title={textContent[2]}
	>
		{svg}
		{textContent[1]}
	</Link>)

const Options = (obj) => {
	const elems = [];
	let i = 0;
	for(const p in obj) {
		elems.push(<option key={i + uuidv4()} value={p}>{obj[p].name}</option>);
		i++;
	}
	return elems;
}

const Page = ({theme, page, Icon, units, options, obj}) => {
	const [output, setOutput] = useState("0");
	const [selectFrom, setSelectFrom] = useState("");
	const [selectTo, setSelectTo] = useState("");

	const onChange = () => {
		const input = document.querySelector("#value").value.trim();
		const fromVal = document.querySelector("#from").value
		const toVal = document.querySelector("#to").value
		const from = units[fromVal];
		const to = units[toVal];
		if(from && to)
			try {
				setOutput(from.convert(new Decimal(input||0), to, 21).toString())
			} catch(e) {
				console.log(e);
				setOutput("0");
			}
			setSelectFrom(fromVal);
			setSelectTo(toVal);
	}
	
	useEffect(() => {
		onChange();
	}, []);
	
	return (<>
	<PageStyle theme={theme} />
	<hgroup>
		{/*<h1 lang={options.language} dir={getTextDirection(options.locale)}>{Icon} {extractTranx(obj, page[0], "converter.jsx", page[1][0])[options.language][options.region]}</h1>}
		{<p lang={options.language} dir={getTextDirection(options.locale)}>{Icon} {extractTranx(obj, page[0], "converter.jsx", page[1][1])[options.language][options.region]}</p>*/}
		{parseElement(extractTranx(obj, page[0], "converter.jsx", page[1][1]), pageHead({i: Icon}))}
		{parseElement(extractTranx(obj, page[0], "converter.jsx", page[1][2]), pagePar)}
	</hgroup>
	<fieldset>
		{options.language === "en" ? (<legend>{theme.illumination.primary >= .5 ? "from" : "FROM"}</legend>) : (<legend dir={getTextDirection(options.locale)} >{extractTranx(obj, FROM[0], "converter.jsx", FROM[1])[options.language][options.region]}</legend>)}
		{parseElement(extractTranx(obj, ENH[0], "converter.jsx", ENH[1]), pageLab)}
		<input name="value" id="value" onChange={onChange} />
		<select name="from" id="from" value={selectFrom} onChange={onChange}>
            <option value="" hidden={true} dir={getTextDirection(options.locale)}>{extractTranx(obj, CONFR[0], "converter.jsx", CONFR[1])[options.language][options.region]}</option>
		{Options(units)}
		</select>
	</fieldset>
	
	<div className="switch">
		{<button
		type="button"
		dir={getTextDirection(options.locale)}
		onClick={() => {
			const from = document.querySelector("#from");
			const to = document.querySelector("#to");
			if(from.value && from.value.length > 0 && to.value && to.value.length){
				const fromVal = from.value;
				from.value = to.value;
				to.value = fromVal;
			}
			onChange();
		}}
		>
		{extractTranx(obj, SWIT[0], "converter.jsx", SWIT[1])[options.language][options.region]}
		</button>}
	</div>
	
	<fieldset>
		{options.language === "en" ? <legend>{theme.illumination.primary >= .5 ? "to" : "TO"}</legend> : <legend dir={getTextDirection(options.locale)} >{extractTranx(obj, TO[0], "converter.jsx", TO[1])[options.language][options.region]}</legend>}
		<select name="to" id="to" value={selectTo} onChange={onChange}>
            <option value="" hidden={true} dir={getTextDirection(options.locale)}>{extractTranx(obj, CONTO[0], "converter.jsx", CONTO[1])[options.language][options.region]}</option>
		{Options(units)}
		</select>
		<input value={output} readOnly />
	</fieldset>
	</>)
}

const pageHead = ({i}) => (lang, dir, textContent, key) => <h1 lang={lang} dir={dir} key={key}>{i} {textContent[1]}</h1>
const pagePar = (lang, dir, textContent, key) => <p lang={lang} dir={dir} key={key}>{textContent[2]}</p>
const pageLab = (lang, dir, textContent, key) => <label htmlFor="value" lang={lang} dir={dir} key={key}>{textContent}</label>
const pageBut = ({clk}) => (lang, dir, textContent, key) => <button type="button" onClick={clk} lang={lang} dir={dir} key={key}>{textContent}</button>

const PageStyle = ({theme, getOtherColor}) => {
	return <style>{`
	fieldset legend {
		font-family: "Major Mono Display", serif;
		font-size: 1.1em;
	}
	fieldset select,
	fieldset input {
		font-family: "Source Sans Pro", sans-serif;
		font-size: 1.1em;
		background-color: ${theme.primary.toString()};
		color: ${theme.secondary.toString()};
		margin: 0 .3em;
	}
	fieldset input {width: 15em;}
	fieldset select {width: 8.5em;}
	.switch {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: .4em 0;
	}
	.switch button {
		padding: .8em;
		border: 1px solid transparent;
		border-radius: .1em;
		background-color: ${theme.others[0].toString()};
		color: ${theme.primary.toString()};
	}
	`}</style>
}

const SideBar = ({theme, getColor, getOtherColor, obj}) => {
	return <>
	<SideBarStyle theme={theme} getColor={getColor} getOtherColor={getOtherColor} />
	<aside className="converter-menu">
		<Heading obj={obj} />
		<Menu theme={theme} getColor={getColor} obj={obj} />
	</aside>
	</>;
}

const Menu = ({theme, getColor, obj}) => {
	const cl = useLocation().pathname;//current location
	return <menu className="converters">
	<li className={ cl.endsWith("angle") ? "converter current" : "converter" }>{parseElement(extractTranx(obj, ANG[0], "converter.jsx", ANG[1]), sidebarLink(<Angle color={(getColor({level: "secondary", index: 8})).toString()} />, "angle"))}</li>
	<li className={ cl.endsWith("area") ? "converter current" : "converter" }>{parseElement(extractTranx(obj, AREA[0], "converter.jsx", AREA[1]), sidebarLink(<Area color={(getColor({level: "secondary", index: 8})).toString()} />, "area"))}</li>
	<li className={ cl.endsWith("currency") ? "converter current" : "converter" }>{parseElement(extractTranx(obj, CUR[0], "converter.jsx", CUR[1]), sidebarLink(<Currency color={(getColor({level: "secondary", index: 8})).toString()} />, "currency"))}</li>
	<li className={ cl.endsWith("data") ? "converter current" : "converter" }>{parseElement(extractTranx(obj, DATA[0], "converter.jsx", DATA[1]), sidebarLink(<Data color={(getColor({level: "secondary", index: 8})).toString()} />, "data"))}</li>
	<li className={ cl.endsWith("distance") ? "converter current" : "converter" }>{parseElement(extractTranx(obj, DIST[0], "converter.jsx", DIST[1]), sidebarLink(<Distance color={(getColor({level: "secondary", index: 8})).toString()} />, "distance"))}</li>
	<li className={ cl.endsWith("energy") ? "converter current" : "converter" }>{parseElement(extractTranx(obj, ENERGY[0], "converter.jsx", ENERGY[1]), sidebarLink(<Energy color={(getColor({level: "secondary", index: 8})).toString()} />, "energy"))}</li>
	<li className={ cl.endsWith("flow") ? "converter current" : "converter" }>{parseElement(extractTranx(obj, FLOW[0], "converter.jsx", FLOW[1]), sidebarLink(<Flow color={(getColor({level: "secondary", index: 8})).toString()} />, "flow"))}</li>
	<li className={ cl.endsWith("force") ? "converter current" : "converter" }>{parseElement(extractTranx(obj, FORCE[0], "converter.jsx", FORCE[1]), sidebarLink(<Force color={(getColor({level: "secondary", index: 8})).toString()} />, "force"))}</li>
	<li className={ cl.endsWith("frequency") ? "converter current" : "converter" }>{parseElement(extractTranx(obj, FRQY[0], "converter.jsx", FRQY[1]), sidebarLink(<Frequency color={(getColor({level: "secondary", index: 8})).toString()} />, "frequency"))}</li>
	<li className={ cl.endsWith("mass") ? "converter current" : "converter" }>{parseElement(extractTranx(obj, MSS[0], "converter.jsx", MSS[1]), sidebarLink(<Mass color={(getColor({level: "secondary", index: 8})).toString()} />, "mass"))}</li>
	<li className={ cl.endsWith("power") ? "converter current" : "converter" }>{parseElement(extractTranx(obj, POW[0], "converter.jsx", POW[1]), sidebarLink(<Power color={(getColor({level: "secondary", index: 8})).toString()} />, "power"))}</li>
	<li className={ cl.endsWith("pressure") ? "converter current" : "converter" }>{parseElement(extractTranx(obj, PRES[0], "converter.jsx", PRES[1]), sidebarLink(<Pressure color={(getColor({level: "secondary", index: 8})).toString()} />, "pressure"))}</li>
	<li className={ cl.endsWith("speed") ? "converter current" : "converter" }>{parseElement(extractTranx(obj, SPD[0], "converter.jsx", SPD[1]), sidebarLink(<Speed color={(getColor({level: "secondary", index: 8})).toString()} />, "speed"))}</li>
	<li className={ cl.endsWith("temperature") ? "converter current" : "converter" }>{parseElement(extractTranx(obj, TEMP[0], "converter.jsx", TEMP[1]), sidebarLink(<Temperature color={(getColor({level: "secondary", index: 8})).toString()} />, "temperature"))}</li>
	<li className={ cl.endsWith("time") ? "converter current" : "converter" }>{parseElement(extractTranx(obj, TIME[0], "converter.jsx", TIME[1]), sidebarLink(<Time color={(getColor({level: "secondary", index: 8})).toString()} />, "time"))}</li>
	<li className={ cl.endsWith("torque") ? "converter current" : "converter" }>{parseElement(extractTranx(obj, TORQ[0], "converter.jsx", TORQ[1]), sidebarLink(<Torque color={(getColor({level: "secondary", index: 8})).toString()} />, "torque"))}</li>
	<li className={ cl.endsWith("volume") ? "converter current" : "converter" }>{parseElement(extractTranx(obj, VOLU[0], "converter.jsx", VOLU[1]), sidebarLink(<Volume color={(getColor({level: "secondary", index: 8})).toString()} />, "volume"))}</li>
	</menu>
}

const Heading = ({obj}) => {
	return <hgroup className="menu-label">
			{parseElement(extractTranx(obj, CONVS[0], "converter.jsx", CONVS[1]), sidebarHeading)}
			<button
			type="button"
			onClick={e => document.querySelector("aside.converter-menu").classList.toggle("closed")}
			>
				<BsList />
			</button>
		</hgroup>
}

const ButtonStyle = ({theme, getColor}) => {
	return `
	.converter-menu .menu-label button {
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid transparent;
		border-radius: .1em;
		background-color: inherit;
		font-size: 20pt;
		color: ${(getColor({level: "secondary", index: 8})).toString()};
	}
	.converter-menu .menu-label button:hover {
		background-color: ${(getColor({level: "primary", index: 18, tint: 5, shade: 5})).toString()};
	}
	.converter-menu .menu-label button:active {
		transform: scale(.9);
	}
	`;
}

const SideBarStyle = ({theme, getColor, getOtherColor}) => {
	return <style>{`
	.converter-menu {
		position: fixed;
		top: 3.1em;
		right: 0;
		background-color: ${(theme.illumination.primary < 0.5 ? theme.tints.primary[0] : theme.shades.primary[4]).toString()};
		width: 275px;
		height: 90vh;
		padding: .6em .4em;
		overflow-x: hidden;
		overflow-y: hidden;
	}
	.converter-menu.closed {
		width: 5%;
		background-color: inherit;
	}
	.converter-menu .menu-label {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		margin: 0;
		padding: 0;
	}${ButtonStyle({theme, getColor})}
	/*Must be put because for some reason, it is forcing a vertical padding*/
	.converter-menu .menu-label h6 {
		margin: 0;
		padding: 0;
	}
	.converter-menu.closed h6 {
		opacity: 0;
		pointer-events: none;
		width: 0;
		height: 0;
	}
	.converter-menu .converters {
		list-style-type: none;
		height: 98%;
		overflow: scroll;
		margin: 10px 0;
		padding: 0;
	}
	.converter-menu.closed .converters {
		opacity: 0;
		pointer-events: none;
		overflow: hidden;
		width: 0;
		height: 0;
		margin: 0;
	}
	.converter-menu .converters .converter {
		font-family: "Source Sans Pro", sans-serif;
		font-size: 20pt;
		padding: .3em;
	}
	.converter-menu .converters .converter:hover {
		background-color: ${(getColor({level: "primary", index: 18, tint: 5, shade: 5})).toString()};
	}
	.converter-menu .converters .converter:active {
		transform: scale(.999999);
	}
	.converter-menu .converters .converter.current {
		background-color: ${(getOtherColor({theme, otherLevel: 0, index: 8, tint: 5, shade: 5})).toString()};
	}
	`}</style>
}

export default Converter;
/*
document.querySelectorAll("table").forEach(table => {
    const l = table.querySelector("[title='Energy']");
    if(l) {
        const data = [];
        const imp = [];
        let name = "";
        table.querySelectorAll("tr").forEach((tr, index) => {
            const arr = [];
            tr.querySelectorAll("td").forEach((td, i) => {
                const t = td.innerText.trim();
                if(t && t.length > 0) {
                    if(i === 0) {
                        name = `${t.substring(0, 1)}_${index}`;
                        arr.push(`name: "${t}"`);
                        arr.push(`value: "${name}"`);
                        imp.push(`${name}`);
                    } else if(i === 1) arr.push(`symbol: "${t}"`);
                }
            });
            if(name.length > 0) {
                arr.push(`index: ${index}`);
                data.push(`const ${name} = { ${arr.join(", ")} }\n${name}.convert = convertDefault(${name});`);
            }
        });
        console.log(data.join("\n"));
        console.log(`const distanceUnit = { ${imp.join(", ")} }`);
        console.log(`export default distanceUnit`);
    }
})
*/
/*
document.querySelectorAll("table").forEach(table => {
    const l = table.querySelector("[title='Energy']");
    if(l) {
        let name = "";
        const arr = [];
        table.querySelectorAll("tr").forEach((tr, index) => {
            let cas = "";
            tr.querySelectorAll("td").forEach((td, i) => {
                const t = td.innerText.trim();
                if(t && t.length > 0) {
                    if(i === 0) {
                        name = `${t.substring(0, 1)}_${index}`;
                        cas += `case "${name}": return d("1").div`;
                    } else if(i === 3) {
                        const t2 = t.replace("\u00d710", "e");
                        try {
                            const t3 = /[0-9]+\.?(?:[0-9]*\s?)+e?−?[0-9]*\s?J$/.exec(t2);
                            cas += `(d("${t3[0].replace("J", "").replace("−", "-").trim()}")).mul(v).toDecimalPlaces(p);`;
                        } catch (error) {
                            console.info(t);
                            console.log(t2);
                            console.error(error);
                        }
                    }
                }
            });
            if(name.length > 0) {
                arr.push(cas);
            }
            cas = "";
        });
        console.log(`(v, t, p) => {\n\tswitch(t.value) {\n\t\t${arr.join("\n\t\t")}\n\t\tdefault: return v.toDecimalPlaces(p);\n\t}\n}`);
    }
})
*/
/*
document.querySelectorAll("table").forEach((table, ind) => {
    if(ind === 12){
        const data = [];
        const imp = [];
        let name = "";
        table.querySelectorAll("tr").forEach((tr, index) => {
            const arr = [];
            tr.querySelectorAll("td").forEach((td, i) => {
                const t = td.innerText.trim();
                if(t && t.length > 0) {
                    if(i === 0) {
                        name = `${t.substring(0, 1)}_${index}`;
                        arr.push(`name: "${t}"`);
                        arr.push(`value: "${name}"`);
                        imp.push(`${name}`);
                    } else if(i === 1) arr.push(`symbol: "${t}"`);
                }
            });
            if(name.length > 0) {
                arr.push(`index: ${index}`);
                data.push(`const ${name} = { ${arr.join(", ")} }\n${name}.convert = convertDefault(${name});`);
            }
        });
        console.log(data.join("\n"));
        console.log(`const flowUnit = { ${imp.join(", ")} }`);
        console.log(`export default flowUnit`);
    }
})
*/
/*
document.querySelectorAll("table").forEach((table, ind) => {
    if(ind === 9) {
        let name = "";
        const arr = [];
        table.querySelectorAll("tr").forEach((tr, index) => {
            let cas = "";
            tr.querySelectorAll("td").forEach((td, i) => {
                const t = td.innerText.trim();
                if(t && t.length > 0) {
                    if(i === 0) {
                        name = `${t.substring(0, 1)}_${index}`;
                        cas += `case "${name}": return d("1").div`;
                    } else if(i === 3) {
                        const t2 = t.replace("\u00d710", "e");
                        try {
                            const t3 = /[0-9]+\.?(?:[0-9]*\s?)+e?−?[0-9]*\ss\[?.*\]?$/.exec(t2);
                            cas += `(d("${t3[0].replace("s", "").replace("−", "-").replace(/\[.+\]/, "").trim()}")).mul(v).toDecimalPlaces(p);`;
                        } catch (error) {
                            console.info(name);
                            console.info(t);
                            console.log(t2);
                            console.error(error);
                            cas += '(d("")).mul(v).toDecimalPlaces(p);'
                        }
                    }
                }
            });
            if(name.length > 0) {
                arr.push(cas);
            }
            cas = "";
        });
        console.log(`(v, t, p) => {\n\tswitch(t.value) {\n\t\t${arr.join("\n\t\t")}\n\t\tdefault: return v.toDecimalPlaces(p);\n\t}\n}`);
    }
})
*/
