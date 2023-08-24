import Decimal from "decimal.js";

const d = (v) => new Decimal(v);
const dp = 10000;//Default precision

const k_9 = { name: "kelvin (SI base unit)", value: "k_9", symbol: "K", index: 0 }
k_9.convert = (v, t, p) => {
	switch(t.value) {
		case "d_1": return v.sub(d("273.15")).toDecimalPlaces(p);
		case "d_2": return v.sub(d("373.15")).mul(d("-1.5")).toDecimalPlaces(p);
		case "d_3": return v.mul(d("1.8")).sub(d("459.67")).toDecimalPlaces(p);
		case "d_4": return v.sub(d("273.15")).mul(d("0.33")).toDecimalPlaces(p);
		case "d_5": return v.mul(d("1.8")).toDecimalPlaces(p);
		case "d_6": return v.sub(d("273.15")).mul(d("0.8")).toDecimalPlaces(p);
		case "d_7": return v.sub(d("273.15")).mul(d("0.525")).add(d("7.5")).toDecimalPlaces(p);
		case "R_8": return v.sub(d("394.26")).mul(d("0.072")).toDecimalPlaces(p);
		default: return v.toDecimalPlaces(p);
	}
}

const d_1 = { name: "degree Celsius", value: "d_1", symbol: "°C", index: 1 }
d_1.convert = (v, t, p) => {
	switch(t.value) {
		case "k_9": return v.add(d("273.15")).toDecimalPlaces(p);
		case "d_1": return v.toDecimalPlaces(p);
		default: return k_9.convert(d_1.convert(v, k_9, dp), t, dp).toDecimalPlaces(p);
	}
}
const d_2 = { name: "degree Delisle", value: "d_2", symbol: "°De", index: 2 }
d_2.convert = (v, t, p) => {
	switch(t.value) {
		case "k_9": return d("373.15").sub(v.mul(d("2").div(d('3')))).toDecimalPlaces(p);
		case "d_2": return v.toDecimalPlaces(p);
		default: return k_9.convert(d_2.convert(v, k_9, dp), t, dp).toDecimalPlaces(p);
	}
}
const d_3 = { name: "degree Fahrenheit", value: "d_3", symbol: "°F", index: 3 }
d_3.convert = (v, t, p) => {
	switch(t.value) {
		case "k_9": return v.add(d("459.67")).mul(d("5").div(d("9"))).toDecimalPlaces(p);
		case "d_3": return v.toDecimalPlaces(p);
		default: return k_9.convert(d_3.convert(v, k_9, dp), t, dp).toDecimalPlaces(p);
	}
}
const d_4 = { name: "degree Newton", value: "d_4", symbol: "°N", index: 4 }
d_4.convert = (v, t, p) => {
	switch(t.value) {
		case "k_9": return v.mul(d("100").div(d("33"))).add(d("273.15")).toDecimalPlaces(p);
		case "d_3": return v.toDecimalPlaces(p);
		default: return k_9.convert(d_4.convert(v, k_9, dp), t, dp).toDecimalPlaces(p);
	}
}
const d_5 = { name: "degree Rankine", value: "d_5", symbol: "°R;", index: 5 }
d_5.convert =  (v, t, p) => {
	switch(t.value) {
		case "k_9": return v.mul(d("5").div(d("9"))).toDecimalPlaces(p);
		case "d_3": return v.toDecimalPlaces(p);
		default: return k_9.convert(d_5.convert(v, k_9, dp), t, dp).toDecimalPlaces(p);
	}
}
const d_6 = { name: "degree Réaumur", value: "d_6", symbol: "°Ré", index: 6 }
d_6.convert = (v, t, p) => {
	switch(t.value) {
		case "k_9": return v.mul(d("1.25")).add(d("273.15")).toDecimalPlaces(p);
		case "d_3": return v.toDecimalPlaces(p);
		default: return k_9.convert(d_6.convert(v, k_9, dp), t, dp).toDecimalPlaces(p);
	}
}
const d_7 = { name: "degree Rømer", value: "d_7", symbol: "°Rø", index: 7 }
d_7.convert = (v, t, p) => {
	switch(t.value) {
		case "k_9": return v.sub(d("7.5")).mul(d("40").div(d("21"))).add(d("273.15")).toDecimalPlaces(p);
		case "d_3": return v.toDecimalPlaces(p);
		default: return k_9.convert(d_7.convert(v, k_9, dp), t, dp).toDecimalPlaces(p);
	}
}
const R_8 = { name: "Regulo Gas Mark", value: "R_8", symbol: "GM", index: 8 }
R_8.convert = (v, t, p) => {
	switch(t.value) {
		case "k_9": return v.mul(d("125").div(d("9"))).add(d("394.26")).toDecimalPlaces(p);
		case "d_3": return v.toDecimalPlaces(p);
		default: return k_9.convert(d_7.convert(v, k_9, dp), t, dp).toDecimalPlaces(p);
	}
}
const temperatureUnit = { d_1, d_2, d_3, d_4, d_5, d_6, d_7, R_8, k_9 }
export default temperatureUnit;