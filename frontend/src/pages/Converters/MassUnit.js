import Decimal from "decimal.js";

const d = (v) => new Decimal(v);
const dp = 10000;//Default precision

const convertDefault = (from) => {
	return (v, t, p) => {
		if(t.value === from.value) return v.toDecimalPlaces(p);
		else if (t.value === "k_20") return d("1").div(k_20.convert(d("1"), from, dp)).mul(v).toDecimalPlaces(p);
		return k_20.convert(from.convert(v, k_20, dp), t, p);
	}
}

const k_20 = { name: "kilogram (kilogramme)", value: "k_20", symbol: "kg", index: 0 }
k_20.convert = (v, t, p) => {
	switch(t.value) {
		case "a_1": return d("1").div(d("1.66053904020e-27")).mul(v).toDecimalPlaces(p);
		case "a_2": return d("1").div(d("9.1093829140e-31")).mul(v).toDecimalPlaces(p);
		case "b_3": return d("1").div(d("60")).mul(v).toDecimalPlaces(p);
		case "b_4": return d("1").div(d("42.63768278")).mul(v).toDecimalPlaces(p);
		case "b_5": return d("1").div(d("20411.65665")).mul(v).toDecimalPlaces(p);
		case "c_6": return d("1").div(d("120117929").div(d("600000"))).mul(v).toDecimalPlaces(p);
		case "c_7": return k_20.convert(d("1").div(d("200")), mg, dp).mul(v).toDecimalPlaces(p);
		case "c_8": return d("1").div(d("3.62873896")).mul(v).toDecimalPlaces(p);
		case "c_9": return k_20.convert(d("1").div(d("89.9349")), mg, dp).mul(v).toDecimalPlaces(p);
		case "d_10": return  d("1").div(d("1.66053892173e-27")).mul(v).toDecimalPlaces(p);
		case "d_11": return k_20.convert(d("1").div(d("3.8879346")), g, dp).mul(v).toDecimalPlaces(p);
		case "d_12": return k_20.convert(d("1").div(d("1.7718451953125")), g, dp).mul(v).toDecimalPlaces(p);
		case "e_13": return d("1").div(d("1.7826618445e-36")).mul(v).toDecimalPlaces(p);
		case "g_14": return k_20.convert(d("1").div(d("1")), mcg, dp).mul(v).toDecimalPlaces(p);
		case "g_15": return k_20.convert(d("1").div(d("64.79891")), mg, dp).mul(v).toDecimalPlaces(p);
		case "g_16": return d("1").div(d("1")).mul(v).toDecimalPlaces(p);
		case "h_17": return d("1").div(d("50.80234544")).mul(v).toDecimalPlaces(p);
		case "h_18": return d("1").div(d("45.359237")).mul(v).toDecimalPlaces(p);
		case "h_19": return d("1").div(d("9.80665")).mul(v).toDecimalPlaces(p);
		case "k_21": return d("1").div(d("453.59237")).mul(v).toDecimalPlaces(p);
		case "m_22": return k_20.convert(d("1").div(d("248.8278144")), g, dp).mul(v).toDecimalPlaces(p);
		case "m_23": return k_20.convert(d("1").div(d("3.2399455")), mg, dp).mul(v).toDecimalPlaces(p);
		case "m_24": return k_20.convert(d("1").div(d("50")), mg, dp).mul(v).toDecimalPlaces(p);
		case "o_25": return k_20.convert(d("1").div(d("31.1034768")), g, dp).mul(v).toDecimalPlaces(p);
		case "o_26": return k_20.convert(d("1").div(d("28.349523125")), g, dp).mul(v).toDecimalPlaces(p);
		case "o_27": return k_20.convert(d("1").div(d("28")), g, dp).mul(v).toDecimalPlaces(p);
		case "p_28": return k_20.convert(d("1").div(d("1.55517384")), g, dp).mul(v).toDecimalPlaces(p);
		case "p_29": return k_20.convert(d("1").div(d("2")), mg, dp).mul(v).toDecimalPlaces(p);
		case "p_30": return d("1").div(d("0.45359237")).mul(v).toDecimalPlaces(p);
		case "p_31": return k_20.convert(d("1").div(d("500")), g, dp).mul(v).toDecimalPlaces(p);
		case "p_32": return d("1").div(d("0.3732417216")).mul(v).toDecimalPlaces(p);
		case "q_33": return d("1").div(d("12.70058636")).mul(v).toDecimalPlaces(p);
		case "q_34": return d("1").div(d("226.796185")).mul(v).toDecimalPlaces(p);
		case "q_35": return d("1").div(d("254.0117272")).mul(v).toDecimalPlaces(p);
		case "q_36": return d("1").div(d("100")).mul(v).toDecimalPlaces(p);
		case "s_37": return k_20.convert(d("1").div(d("1.2959782")), g, dp).mul(v).toDecimalPlaces(p);
		case "s_38": return k_20.convert(d("1").div(d("647.9891")), mg, dp).mul(v).toDecimalPlaces(p);
		case "s_39": return d("1").div(d("14.593903")).mul(v).toDecimalPlaces(p);
		case "s_40": return d("1").div(d("6.35029318")).mul(v).toDecimalPlaces(p);
		case "t_41": return k_20.convert(d("1").div(d("98").div(d("3"))), mg, dp).mul(v).toDecimalPlaces(p);
		case "t_42": return k_20.convert(d("1").div(d("175").div(d("6"))), mg, dp).mul(v).toDecimalPlaces(p);
		case "t_43": return d("1").div(d("1016.0469088")).mul(v).toDecimalPlaces(p);
		case "t_44": return d("1").div(d("907.18474")).mul(v).toDecimalPlaces(p);
		case "t_45": return d("1").div(d("1000")).mul(v).toDecimalPlaces(p);
		case "w_46": return d("1").div(d("114.30527724")).mul(v).toDecimalPlaces(p);
		case "g": return d("1").div(d("1e-3")).mul(v).toDecimalPlaces(p);
		case "mg": return k_20.convert(d("1").div(d("0.001")), g, dp).mul(v).toDecimalPlaces(p);
		case "cg": return k_20.convert(d("1").div(d("0.01")), g, dp).mul(v).toDecimalPlaces(p);
		case "mcg": return k_20.convert(d("1").div(d("1e-3")), mg, dp).mul(v).toDecimalPlaces(p);
		default: return v.toDecimalPlaces(p);
	}
}


const a_1 = { name: "atomic mass unit, unified", value: "a_1", symbol: "u; AMU", index: 1 }
a_1.convert = convertDefault(a_1);
const a_2 = { name: "atomic unit of mass, electron rest mass", value: "a_2", symbol: "me", index: 2 }
a_2.convert = convertDefault(a_2);
const b_3 = { name: "bag (coffee)", value: "b_3", index: 3 }
b_3.convert = convertDefault(b_3);
const b_4 = { name: "bag (Portland cement)", value: "b_4", index: 4 }
b_4.convert = convertDefault(b_4);
const b_5 = { name: "barge", value: "b_5", index: 5 }
b_5.convert = convertDefault(b_5);
const c_6 = { name: "carat", value: "c_6", symbol: "kt", index: 6 }
c_6.convert = convertDefault(c_6);
const c_7 = { name: "carat (metric)", value: "c_7", symbol: "ct", index: 7 }
c_7.convert = convertDefault(c_7);
const c_8 = { name: "clove", value: "c_8", index: 8 }
c_8.convert = convertDefault(c_8);
const c_9 = { name: "crith", value: "c_9", index: 9 }
c_9.convert = convertDefault(c_9);
const d_10 = { name: "dalton", value: "d_10", symbol: "Da", index: 10 }
d_10.convert = convertDefault(d_10);
const d_11 = { name: "dram (apothecary; troy)", value: "d_11", symbol: "dr t", index: 11 }
d_11.convert = convertDefault(d_11);
const d_12 = { name: "dram (avoirdupois)", value: "d_12", symbol: "dr av", index: 12 }
d_12.convert = convertDefault(d_12);
const e_13 = { name: "electronvolt mass-equivalent", value: "e_13", symbol: "eV/c2", index: 13 }
e_13.convert = convertDefault(e_13);
const g_14 = { name: "gamma", value: "g_14", symbol: "γ", index: 14 }
g_14.convert = convertDefault(g_14);
const g_15 = { name: "grain", value: "g_15", symbol: "gr", index: 15 }
g_15.convert = convertDefault(g_15);
const g_16 = { name: "grave", value: "g_16", symbol: "gv", index: 16 }
g_16.convert = convertDefault(g_16);
const h_17 = { name: "hundredweight (long)", value: "h_17", symbol: "long cwt or cwt", index: 17 }
h_17.convert = convertDefault(h_17);
const h_18 = { name: "hundredweight (short); cental", value: "h_18", symbol: "sh cwt", index: 18 }
h_18.convert = convertDefault(h_18);
const h_19 = { name: "hyl; metric slug", value: "h_19", index: 19 }
h_19.convert = convertDefault(h_19);
const k_21 = { name: "kip", value: "k_21", symbol: "kip", index: 21 }
k_21.convert = convertDefault(k_21);
const m_22 = { name: "mark", value: "m_22", index: 22 }
m_22.convert = convertDefault(m_22);
const m_23 = { name: "mite", value: "m_23", index: 23 }
m_23.convert = convertDefault(m_23);
const m_24 = { name: "mite (metric)", value: "m_24", index: 24 }
m_24.convert = convertDefault(m_24);
const o_25 = { name: "ounce (apothecary; troy)", value: "o_25", symbol: "oz t", index: 25 }
o_25.convert = convertDefault(o_25);
const o_26 = { name: "ounce (avoirdupois)", value: "o_26", symbol: "oz av", index: 26 }
o_26.convert = convertDefault(o_26);
const o_27 = { name: "ounce (US food nutrition labelling)", value: "o_27", symbol: "oz", index: 27 }
o_27.convert = convertDefault(o_27);
const p_28 = { name: "pennyweight", value: "p_28", symbol: "dwt; pwt", index: 28 }
p_28.convert = convertDefault(p_28);
const p_29 = { name: "point", value: "p_29", index: 29 }
p_29.convert = convertDefault(p_29);
const p_30 = { name: "pound (avoirdupois)", value: "p_30", symbol: "lb av", index: 30 }
p_30.convert = convertDefault(p_30);
const p_31 = { name: "pound (metric)", value: "p_31", index: 31 }
p_31.convert = convertDefault(p_31);
const p_32 = { name: "pound (troy)", value: "p_32", symbol: "lb t", index: 32 }
p_32.convert = convertDefault(p_32);
const q_33 = { name: "quarter (imperial)", value: "q_33", index: 33 }
q_33.convert = convertDefault(q_33);
const q_34 = { name: "quarter (informal)", value: "q_34", index: 34 }
q_34.convert = convertDefault(q_34);
const q_35 = { name: "quarter, long (informal)", value: "q_35", index: 35 }
q_35.convert = convertDefault(q_35);
const q_36 = { name: "quintal (metric)", value: "q_36", symbol: "q", index: 36 }
q_36.convert = convertDefault(q_36);
const s_37 = { name: "scruple (apothecary)", value: "s_37", symbol: "s ap", index: 37 }
s_37.convert = convertDefault(s_37);
const s_38 = { name: "sheet", value: "s_38", index: 38 }
s_38.convert = convertDefault(s_38);
const s_39 = { name: "slug; geepound", value: "s_39", symbol: "slug", index: 39 }
s_39.convert = convertDefault(s_39);
const s_40 = { name: "stone", value: "s_40", symbol: "st", index: 40 }
s_40.convert = convertDefault(s_40);
const t_41 = { name: "ton, assay (long)", value: "t_41", symbol: "AT", index: 41 }
t_41.convert = convertDefault(t_41);
const t_42 = { name: "ton, assay (short)", value: "t_42", symbol: "AT", index: 42 }
t_42.convert = convertDefault(t_42);
const t_43 = { name: "ton, long", value: "t_43", symbol: "long tn or ton", index: 43 }
t_43.convert = convertDefault(t_43);
const t_44 = { name: "ton, short", value: "t_44", symbol: "sh tn", index: 44 }
t_44.convert = convertDefault(t_44);
const t_45 = { name: "tonne (mts unit)", value: "t_45", symbol: "t", index: 45 }
t_45.convert = convertDefault(t_45);
const w_46 = { name: "wey", value: "w_46", index: 46 }
w_46.convert = convertDefault(w_46);
const mg = { name: "Milligram", value: "mg", symbol: "mg", index: 20 }
mg.convert = convertDefault(mg);
const g = { name: "Gram", value: "g", symbol: "g", index: 47 }
g.convert = convertDefault(g);
const cg = { name: "Centigram", value: "cg", symbol: "g", index: 48 }
cg.convert = convertDefault(cg);
const mcg = { name: "Microgram", value: "mcg", symbol: "µg", index: 49 }
mcg.convert = convertDefault(mcg);
const massUnit = { a_1, a_2, b_3, b_4, b_5, c_6, c_7, c_8, c_9, cg, d_10, d_11, d_12, e_13, g, g_14, g_15, g_16, h_17, h_18, h_19, k_20, k_21, m_22, m_23, m_24, mcg, mg, o_25, o_26, o_27, p_28, p_29, p_30, p_31, p_32, q_33, q_34, q_35, q_36, s_37, s_38, s_39, s_40, t_41, t_42, t_43, t_44, t_45, w_46 }
export default massUnit;
