import Decimal from "decimal.js";

const d = (v) => new Decimal(v);
const dp = 10000;//Default precision

const convertDefault = (from) => {
	return (v, t, p) => {
		if(t.value === from.value) return v.toDecimalPlaces(p);
		else if (t.value === "n_7") return d("1").div(n_7.convert(d("1"), from, dp)).mul(v).toDecimalPlaces(p);
		return n_7.convert(from.convert(v, n_7, dp), t, p);
	}
}

const n_7 = { name: "newton (SI unit)", value: "n_7", symbol: "N", index: 0 }
n_7.convert = (v, t, p) => {
	switch(t.value) {
		case "a_1": return d("1").div(d("8.23872206e-8")).mul(v).toDecimalPlaces(p);
		case "d_2": return d("1").div(d("1e-5")).mul(v).toDecimalPlaces(p);
		case "k_3": return d("1").div(d("9.80665")).mul(v).toDecimalPlaces(p);
		case "k_4": return d("1").div(d("4.4482216152605e3")).mul(v).toDecimalPlaces(p);
		case "m_5": return n_7.convert(d("1").div(d("9.80665")), mn, dp).mul(v).toDecimalPlaces(p);
		case "l_6": return d("1").div(d("9.96401641818352e3")).mul(v).toDecimalPlaces(p);
		case "o_8": return d("1").div(d("0.27801385095378125")).mul(v).toDecimalPlaces(p);
		case "p_9": return d("1").div(d("4.4482216152605")).mul(v).toDecimalPlaces(p);
		case "p_10": return d("1").div(d("0.138254954376")).mul(v).toDecimalPlaces(p);
		case "s_11": return d("1").div(d("8.896443230521e3")).mul(v).toDecimalPlaces(p);
		case "s_12": return d("1").div(d("1e3")).mul(v).toDecimalPlaces(p);
		case "mn": return n_7.convert(d("1").div(d("1e-3")), n_7, dp).mul(v).toDecimalPlaces(p);
		case "mcn": return n_7.convert(d("1").div(d("1e-3")), mn, dp).mul(v).toDecimalPlaces(p);
		case "nn": return n_7.convert(d("1").div(d("1e-3")), mcn, dp).mul(v).toDecimalPlaces(p);
		case "kn": return n_7.convert(d("1").div(d("1000")), n_7, dp).mul(v).toDecimalPlaces(p);
		case "men": return n_7.convert(d("1").div(d("1000")), kn, dp).mul(v).toDecimalPlaces(p);
		case "gn": return n_7.convert(d("1").div(d("1000")), men, dp).mul(v).toDecimalPlaces(p);
		default: return v.toDecimalPlaces(p);
	}
}

const a_1 = { name: "atomic unit of force", value: "a_1", index: 1 }
a_1.convert = convertDefault(a_1);
const d_2 = { name: "dyne (CGS unit)", value: "d_2", symbol: "dyn", index: 2 }
d_2.convert = convertDefault(d_2);
const k_3 = { name: "kilogram-force; kilopond; grave-force", value: "k_3", symbol: "kgf; kp; gvf", index: 3 }
k_3.convert = convertDefault(k_3);
const k_4 = { name: "kip; kip-force", value: "k_4", symbol: "kip; kipf; klbf", index: 4 }
k_4.convert = convertDefault(k_4);
const m_5 = { name: "milligrave-force, gravet-force", value: "m_5", symbol: "mgvf; gvtf", index: 5 }
m_5.convert = convertDefault(m_5);
const l_6 = { name: "long ton-force", value: "l_6", symbol: "tnf", index: 6 }
l_6.convert = convertDefault(l_6);
const o_8 = { name: "ounce-force", value: "o_8", symbol: "ozf", index: 8 }
o_8.convert = convertDefault(o_8);
const p_9 = { name: "pound-force", value: "p_9", symbol: "lbf", index: 9 }
p_9.convert = convertDefault(p_9);
const p_10 = { name: "poundal", value: "p_10", symbol: "pdl", index: 10 }
p_10.convert = convertDefault(p_10);
const s_11 = { name: "short ton-force", value: "s_11", symbol: "tnf", index: 11 }
s_11.convert = convertDefault(s_11);
const s_12 = { name: "sthene (mts unit)", value: "s_12", symbol: "sn", index: 12 }
s_12.convert = convertDefault(s_12);
const mn = { name: "Millinewton", value: "mn", symbol: "mN", index: 14 }
mn.convert = convertDefault(mn);
const mcn = { name: "Micronewton", value: "mcn", symbol: "µN", index: 15 }
mcn.convert = convertDefault(mcn);
const nn = { name: "Nanonewton", value: "nn", symbol: "nN", index: 16 }
nn.convert = convertDefault(nn);
const kn = { name: "Kilonewton", value: "kn", symbol: "kN", index: 17 }
kn.convert = convertDefault(kn);
const men = { name: "Meganewton", value: "men", symbol: undefined, index: 18 }
men.convert = convertDefault(men);
const gn = { name: "Giganewton", value: "gn", symbol: undefined, index: 19 }
gn.convert = convertDefault(gn);
const forceUnit = { a_1, d_2, gn, k_3, k_4, kn, m_5, mcn, men, mn, nn, l_6, n_7, o_8, p_9, p_10, s_11, s_12 };
export default forceUnit;
