import Decimal from "decimal.js";

const d = (v) => new Decimal(v);
const dp = 10000;//Default precision

const convertDefault = (from) => {
	return (v, t, p) => {
		if(t.value === from.value) return v.toDecimalPlaces(p);
		else if (t.value === "p_17") return d("1").div(p_17.convert(d("1"), from, dp)).mul(v).toDecimalPlaces(p);
		return p_17.convert(from.convert(v, p_17, dp), t, p);
	}
}

const p_17 = { name: "pascal (SI unit)", value: "p_17", symbol: "Pa", index: 0 }
p_17.convert = (v, t, p) => {
	switch(t.value) {
		case "a_1": return d("1").div(d("101325")).mul(v).toDecimalPlaces(p);
		case "a_2": return d("1").div(d("9.80665e4")).mul(v).toDecimalPlaces(p);
		case "b_3": return d("1").div(d("105")).mul(v).toDecimalPlaces(p);
		case "b_4": return d("1").div(d("0.1")).mul(v).toDecimalPlaces(p);
		case "c_5": return d("1").div(d("1.33322e3")).mul(v).toDecimalPlaces(p);
		case "c_6": return d("1").div(d("98.0638")).mul(v).toDecimalPlaces(p);
		case "f_7": return d("1").div(d("4.063666e4")).mul(v).toDecimalPlaces(p);
		case "f_8": return d("1").div(d("2.98898e3")).mul(v).toDecimalPlaces(p);
		case "i_9": return d("1").div(d("3.386389e3")).mul(v).toDecimalPlaces(p);
		case "i_10": return d("1").div(d("249.082")).mul(v).toDecimalPlaces(p);
		case "k_11": return d("1").div(d("9.80665e6")).mul(v).toDecimalPlaces(p);
		case "k_12": return d("1").div(d("6.894757e6")).mul(v).toDecimalPlaces(p);
		case "l_13": return d("1").div(d("1.0725178011595e5")).mul(v).toDecimalPlaces(p);
		case "m_14": return d("1").div(d("0.1333224")).mul(v).toDecimalPlaces(p);
		case "m_15": return d("1").div(d("133.3224")).mul(v).toDecimalPlaces(p);
		case "m_16": return d("1").div(d("9.80638")).mul(v).toDecimalPlaces(p);
		case "p_18": return d("1").div(d("1e3")).mul(v).toDecimalPlaces(p);
		case "p_19": return d("1").div(d("47.88026")).mul(v).toDecimalPlaces(p);
		case "p_20": return d("1").div(d("6.894757e3")).mul(v).toDecimalPlaces(p);
		case "p_21": return d("1").div(d("1.488164")).mul(v).toDecimalPlaces(p);
		case "s_22": return d("1").div(d("9.5760518e4")).mul(v).toDecimalPlaces(p);
		case "t_23": return d("1").div(d("133.3224")).mul(v).toDecimalPlaces(p);
		case "mp": return d("1").div(d("1e-3")).mul(v).toDecimalPlaces(p);
		case "mcp": return p_17.convert(d("1").div(d("1e-3")), mp, dp).mul(v).toDecimalPlaces(p);
		case "np": return p_17.convert(d("1").div(d("1e-3")), mcp, dp).mul(v).toDecimalPlaces(p);
		case "kp": return d("1").div(d("1000")).mul(v).toDecimalPlaces(p);
		case "mgp": return p_17.convert(d("1").div(d("1000")), kp, dp).mul(v).toDecimalPlaces(p);
		case "hp": return p_17.convert(d("1").div(d("100")), p_17, dp).mul(v).toDecimalPlaces(p);
		case "gp": return p_17.convert(d("1").div(d("1000")), mgp, dp).mul(v).toDecimalPlaces(p);
		default: return v.toDecimalPlaces(p);
	}
}

const a_1 = { name: "atmosphere (standard)", value: "a_1", symbol: "atm", index: 1 }
a_1.convert = convertDefault(a_1);
const a_2 = { name: "atmosphere (technical)", value: "a_2", symbol: "at", index: 2 }
a_2.convert = convertDefault(a_2);
const b_3 = { name: "bar", value: "b_3", symbol: "bar", index: 3 }
b_3.convert = convertDefault(b_3);
const b_4 = { name: "barye (CGS unit)", value: "b_4", index: 4 }
b_4.convert = convertDefault(b_4);
const c_5 = { name: "centimetre of mercury", value: "c_5", symbol: "cmHg", index: 5 }
c_5.convert = convertDefault(c_5);
const c_6 = { name: "centimetre of water (4 °C)", value: "c_6", symbol: "cmH2O", index: 6 }
c_6.convert = convertDefault(c_6);
const f_7 = { name: "foot of mercury (conventional)", value: "f_7", symbol: "ftHg", index: 7 }
f_7.convert = convertDefault(f_7);
const f_8 = { name: "foot of water (39.2 °F)", value: "f_8", symbol: "ftH2O", index: 8 }
f_8.convert = convertDefault(f_8);
const i_9 = { name: "inch of mercury (conventional)", value: "i_9", symbol: "inHg", index: 9 }
i_9.convert = convertDefault(i_9);
const i_10 = { name: "inch of water (39.2 °F)", value: "i_10", symbol: "inH2O", index: 10 }
i_10.convert = convertDefault(i_10);
const k_11 = { name: "kilogram-force per square millimetre", value: "k_11", symbol: "kgf/mm2", index: 11 }
k_11.convert = convertDefault(k_11);
const k_12 = { name: "kip per square inch", value: "k_12", symbol: "ksi", index: 12 }
k_12.convert = convertDefault(k_12);
const l_13 = { name: "long ton per square foot", value: "l_13", index: 13 }
l_13.convert = convertDefault(l_13);
const m_14 = { name: "micrometre of mercury", value: "m_14", symbol: "μmHg", index: 14 }
m_14.convert = convertDefault(m_14);
const m_15 = { name: "millimetre of mercury", value: "m_15", symbol: "mmHg", index: 15 }
m_15.convert = convertDefault(m_15);
const m_16 = { name: "millimetre of water (3.98 °C)", value: "m_16", symbol: "mmH2O", index: 16 }
m_16.convert = convertDefault(m_16);
const p_18 = { name: "pièze (mts unit)", value: "p_18", symbol: "pz", index: 18 }
p_18.convert = convertDefault(p_18);
const p_19 = { name: "pound per square foot", value: "p_19", symbol: "psf", index: 19 }
p_19.convert = convertDefault(p_19);
const p_20 = { name: "pound per square inch", value: "p_20", symbol: "psi", index: 20 }
p_20.convert = convertDefault(p_20);
const p_21 = { name: "poundal per square foot", value: "p_21", symbol: "pdl/sq ft", index: 21 }
p_21.convert = convertDefault(p_21);
const s_22 = { name: "short ton per square foot", value: "s_22", index: 22 }
s_22.convert = convertDefault(s_22);
const t_23 = { name: "torr", value: "t_23", symbol: "torr", index: 23 }
t_23.convert = convertDefault(t_23);
const mp = { name: "Millipascal", value: "mp", symbol: "mPa", index: 17 }
mp.convert = convertDefault(mp);
const mcp = { name: "Micropascal", value: "mcp", symbol: "µPa", index: 24 }
mcp.convert = convertDefault(mcp);
const np = { name: "Nanopascal", value: "np", symbol: "nPa", index: 25 }
np.convert = convertDefault(np);
const kp = { name: "Kilopascal", value: "kp", symbol: "kPa", index: 26 }
kp.convert = convertDefault(kp);
const mgp = { name: "Megapascal", value: "mgp", symbol: "mePa", index: 27 }
mgp.convert = convertDefault(mgp);
const hp = { name: "Hectopascal", value: "hp", symbol: "hPa", index: 28 }
hp.convert = convertDefault(hp);
const gp = { name: "Gigapascal", value: "gp", symbol: "gPa", index: 29 }
gp.convert = convertDefault(gp);
const pressureUnit = { a_1, a_2, b_3, b_4, c_5, c_6, f_7, f_8, gp, hp, i_9, i_10, k_11, kp, k_12, l_13, m_14, mcp, mgp, m_15, m_16, mp, np, p_17, p_18, p_19, p_20, p_21, s_22, t_23 }
export default pressureUnit;
