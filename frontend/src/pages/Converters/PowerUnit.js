import Decimal from "decimal.js";

const d = (v) => new Decimal(v);
const dp = 10000;//Default precision

const convertDefault = (from) => {
	return (v, t, p) => {
		if(t.value === from.value) return v.toDecimalPlaces(p);
		else if (t.value === "w_27") return d("1").div(w_27.convert(d("1"), from, dp)).mul(v).toDecimalPlaces(p);
		return w_27.convert(from.convert(v, w_27, dp), t, p);
	}
}

const w_27 = { name: "watt (SI unit)", value: "w_27", symbol: "W", index: 0 }
w_27.convert = (v, t, p) => {
	switch(t.value) {
		case "a_1": return d("1").div(d("1.68875e-3")).mul(v).toDecimalPlaces(p);
		case "a_2": return d("1").div(d("0.101325")).mul(v).toDecimalPlaces(p);
		case "a_3": return d("1").div(d("0.79700124704")).mul(v).toDecimalPlaces(p);
		case "a_4": return d("1").div(d("47.82007468224")).mul(v).toDecimalPlaces(p);
		case "a_5": return d("1").div(d("2.8692044809344e3")).mul(v).toDecimalPlaces(p);
		case "B_6": return d("1").div(d("0.293071")).mul(v).toDecimalPlaces(p);
		case "B_7": return d("1").div(d("17.584264")).mul(v).toDecimalPlaces(p);
		case "B_8": return d("1").div(d("1.05505585262e3")).mul(v).toDecimalPlaces(p);
		case "c_9": return d("1").div(d("4.1868")).mul(v).toDecimalPlaces(p);
		case "e_10": return d("1").div(d("1e-7")).mul(v).toDecimalPlaces(p);
		case "f_11": return d("1").div(d("3.766161e-4")).mul(v).toDecimalPlaces(p);
		case "f_12": return d("1").div(d("2.259696580552334e-2")).mul(v).toDecimalPlaces(p);
		case "f_13": return d("1").div(d("1.3558179483314004")).mul(v).toDecimalPlaces(p);
		case "h_14": return d("1").div(d("9809.5")).mul(v).toDecimalPlaces(p);
		case "h_15": return d("1").div(d("736")).mul(v).toDecimalPlaces(p);
		case "h_16": return d("1").div(d("746")).mul(v).toDecimalPlaces(p);
		case "h_17": return d("1").div(d("745.69987158227022")).mul(v).toDecimalPlaces(p);
		case "h_18": return d("1").div(d("735.49875")).mul(v).toDecimalPlaces(p);
		case "l_19": return d("1").div(d("1.68875")).mul(v).toDecimalPlaces(p);
		case "l_20": return d("1").div(d("101.325")).mul(v).toDecimalPlaces(p);
		case "l_21": return d("1").div(d("1.333e-4")).mul(v).toDecimalPlaces(p);
		case "p_22": return d("1").div(d("980.665")).mul(v).toDecimalPlaces(p);
		case "s_23": return  w_27.convert(d("1").div(d("240")), B_6, dp).mul(v).toDecimalPlaces(p);
		case "t_24": return d("1").div(d("3504")).mul(v).toDecimalPlaces(p);
		case "t_25": return d("1").div(d("3.938875e3")).mul(v).toDecimalPlaces(p);
		case "t_26": return d("1").div(d("3.516853e3")).mul(v).toDecimalPlaces(p);
		default: return v.toDecimalPlaces(p);
	}
}

const a_1 = { name: "atmosphere-cubic centimetre per minute", value: "a_1", symbol: "atm ccm", index: 1 }
a_1.convert = convertDefault(a_1);
const a_2 = { name: "atmosphere-cubic centimetre per second", value: "a_2", symbol: "atm ccs", index: 2 }
a_2.convert = convertDefault(a_2);
const a_3 = { name: "atmosphere-cubic foot per hour", value: "a_3", symbol: "atm cfh", index: 3 }
a_3.convert = convertDefault(a_3);
const a_4 = { name: "atmosphere-cubic foot per minute", value: "a_4", symbol: "atm cfm", index: 4 }
a_4.convert = convertDefault(a_4);
const a_5 = { name: "atmosphere-cubic foot per second", value: "a_5", symbol: "atm cfs", index: 5 }
a_5.convert = convertDefault(a_5);
const B_6 = { name: "BTU (International Table) per hour", value: "B_6", symbol: "BTUIT/h", index: 6 }
B_6.convert = convertDefault(B_6);
const B_7 = { name: "BTU (International Table) per minute", value: "B_7", symbol: "BTUIT/min", index: 7 }
B_7.convert = convertDefault(B_7);
const B_8 = { name: "BTU (International Table) per second", value: "B_8", symbol: "BTUIT/s", index: 8 }
B_8.convert = convertDefault(B_8);
const c_9 = { name: "calorie (International Table) per second", value: "c_9", symbol: "calIT/s", index: 9 }
c_9.convert = convertDefault(c_9);
const e_10 = { name: "erg per second", value: "e_10", symbol: "erg/s", index: 10 }
e_10.convert = convertDefault(e_10);
const f_11 = { name: "foot-pound-force per hour", value: "f_11", symbol: "ft⋅lbf/h", index: 11 }
f_11.convert = convertDefault(f_11);
const f_12 = { name: "foot-pound-force per minute", value: "f_12", symbol: "ft⋅lbf/min", index: 12 }
f_12.convert = convertDefault(f_12);
const f_13 = { name: "foot-pound-force per second", value: "f_13", symbol: "ft⋅lbf/s", index: 13 }
f_13.convert = convertDefault(f_13);
const h_14 = { name: "horsepower (boiler)", value: "h_14", symbol: "hp", index: 14 }
h_14.convert = convertDefault(h_14);
const h_15 = { name: "horsepower (European electrical)", value: "h_15", symbol: "hp", index: 15 }
h_15.convert = convertDefault(h_15);
const h_16 = { name: "horsepower (electrical)", value: "h_16", symbol: "hp", index: 16 }
h_16.convert = convertDefault(h_16);
const h_17 = { name: "horsepower (mechanical)", value: "h_17", symbol: "hp", index: 17 }
h_17.convert = convertDefault(h_17);
const h_18 = { name: "horsepower (metric)", value: "h_18", symbol: "hp or PS", index: 18 }
h_18.convert = convertDefault(h_18);
const l_19 = { name: "litre-atmosphere per minute", value: "l_19", symbol: "L·atm/min", index: 19 }
l_19.convert = convertDefault(l_19);
const l_20 = { name: "litre-atmosphere per second", value: "l_20", symbol: "L·atm/s", index: 20 }
l_20.convert = convertDefault(l_20);
const l_21 = { name: "lusec", value: "l_21", symbol: "lusec", index: 21 }
l_21.convert = convertDefault(l_21);
const p_22 = { name: "poncelet", value: "p_22", symbol: "p", index: 22 }
p_22.convert = convertDefault(p_22);
const s_23 = { name: "square foot equivalent direct radiation", value: "s_23", symbol: "sq ft EDR", index: 23 }
s_23.convert = convertDefault(s_23);
const t_24 = { name: "ton of air conditioning", value: "t_24", index: 24 }
t_24.convert = convertDefault(t_24);
const t_25 = { name: "ton of refrigeration (imperial)", value: "t_25", index: 25 }
t_25.convert = convertDefault(t_25);
const t_26 = { name: "ton of refrigeration (IT)", value: "t_26", index: 26 }
t_26.convert = convertDefault(t_26);
const powerUnit = { a_1, a_2, a_3, a_4, a_5, B_6, B_7, B_8, c_9, e_10, f_11, f_12, f_13, h_14, h_15, h_16, h_17, h_18, l_19, l_20, l_21, p_22, s_23, t_24, t_25, t_26, w_27 }
export default powerUnit;