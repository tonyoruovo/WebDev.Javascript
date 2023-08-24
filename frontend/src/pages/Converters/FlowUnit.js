import Decimal from "decimal.js";

const d = (v) => new Decimal(v);
const dp = 10000;//Default precision

const convertDefault = (from) => {
	return (v, t, p) => {
		if(t.value === from.value) return v.toDecimalPlaces(p);
		else if (t.value === "c_5") return d("1").div(c_5.convert(d("1"), from, dp)).mul(v).toDecimalPlaces(p);
		return c_5.convert(from.convert(v, c_5, dp), t, p);
	}
}

const c_5 = { name: "cubic metre per second (SI unit)", value: "c_5", symbol: "m3/s", index: 0 }
c_5.convert = (v, t, p) => {
	switch(t.value) {
		case "c_1": return d("1").div(d("4.719474432e-4")).mul(v).toDecimalPlaces(p);
		case "c_2": return d("1").div(d("0.028316846592")).mul(v).toDecimalPlaces(p);
		case "c_3": return d("1").div(d("2093383").div(d("7500000000000"))).mul(v).toDecimalPlaces(p);
		case "c_4": return d("1").div(d("1.6387064e-5")).mul(v).toDecimalPlaces(p);
		case "g_6": return d("1").div(d("157725491").div(d("3600000000000000"))).mul(v).toDecimalPlaces(p);
		case "g_7": return d("1").div(d("157725491").div(d("150000000000000"))).mul(v).toDecimalPlaces(p);
		case "g_8": return d("1").div(d("6.30901964e-5")).mul(v).toDecimalPlaces(p);
		case "l_9": return d("1").div(d("1").div(d("60000"))).mul(v).toDecimalPlaces(p);
		default: return v.toDecimalPlaces(p);
	}
}

const c_1 = { name: "cubic foot per minute", value: "c_1", symbol: "CFM", index: 1 }
c_1.convert = convertDefault(c_1);
const c_2 = { name: "cubic foot per second", value: "c_2", symbol: "ft3/s", index: 2 }
c_2.convert = convertDefault(c_2);
const c_3 = { name: "cubic inch per minute", value: "c_3", symbol: "in3/min", index: 3 }
c_3.convert = convertDefault(c_3);
const c_4 = { name: "cubic inch per second", value: "c_4", symbol: "in3/s", index: 4 }
c_4.convert = convertDefault(c_4);
const g_6 = { name: "gallon (US fluid) per day", value: "g_6", symbol: "GPD", index: 6 }
g_6.convert = convertDefault(g_6);
const g_7 = { name: "gallon (US fluid) per hour", value: "g_7", symbol: "GPH", index: 7 }
g_7.convert = convertDefault(g_7);
const g_8 = { name: "gallon (US fluid) per minute", value: "g_8", symbol: "GPM", index: 8 }
g_8.convert = convertDefault(g_8);
const l_9 = { name: "litre per minute", value: "l_9", symbol: "L/min", index: 9 }
l_9.convert = convertDefault(l_9);
const flowUnit = { c_1, c_2, c_3, c_4, c_5, g_6, g_7, g_8, l_9 }
export default flowUnit;
