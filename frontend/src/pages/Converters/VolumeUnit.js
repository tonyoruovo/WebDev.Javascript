
import Decimal from "decimal.js";

const d = (v) => new Decimal(v);
const dp = 10000;//Default precision

const convertDefault = (from) => {
	return (v, t, p) => {
		if(t.value === from.value) return v.toDecimalPlaces(p);
		else if (t.value === "c_19") return d("1").div(c_19.convert(d("1"), from, dp)).mul(v).toDecimalPlaces(p);
		return c_19.convert(from.convert(v, c_19, dp), t, p);
	}
}

const c_19 = { name: "cubic metre (SI unit)", value: "c_19", symbol: "m3", index: 0 }
c_19.convert = (v, t, p) => {
	switch(t.value) {
		case "a_1": return d("1").div(d("1233.48183754752")).mul(v).toDecimalPlaces(p);
		case "a_2": return d("1").div(d("102.79015312896")).mul(v).toDecimalPlaces(p);
		case "b_3": return d("1").div(d("0.16365924")).mul(v).toDecimalPlaces(p);
		case "b_4": return c_19.convert(d("1").div(d("42")), g_45, dp).mul(v).toDecimalPlaces(p);
		case "b_5": return d("1").div(d("0.115628198985075")).mul(v).toDecimalPlaces(p);
		case "b_6": return d("1").div(d("0.119240471196")).mul(v).toDecimalPlaces(p);
		case "b_7": return d("1").div(d("2.359737216e-3")).mul(v).toDecimalPlaces(p);
		case "b_8": return d("1").div(d("0.01818436")).mul(v).toDecimalPlaces(p);
		case "b_9": return d("1").div(d("0.03636872")).mul(v).toDecimalPlaces(p);
		case "b_10": return d("1").div(d("0.0440488377086")).mul(v).toDecimalPlaces(p);
		case "b_11": return d("1").div(d("0.03523907016688")).mul(v).toDecimalPlaces(p);
		case "b_12": return d("1").div(d("0.476961884784")).mul(v).toDecimalPlaces(p);
		case "c_13": return d("1").div(d("0.14547488")).mul(v).toDecimalPlaces(p);
		case "c_14": return d("1").div(d("3.624556363776")).mul(v).toDecimalPlaces(p);
		case "c_15": return d("1").div(d("0.453069545472")).mul(v).toDecimalPlaces(p);
		case "c_16": return d("1").div(d("6.116438863872")).mul(v).toDecimalPlaces(p);
		case "c_17": return d("1").div(d("0.028316846592")).mul(v).toDecimalPlaces(p);
		case "c_18": return d("1").div(d("16.387064e-6")).mul(v).toDecimalPlaces(p);
		case "c_20": return d("1").div(d("4168181825.440579584")).mul(v).toDecimalPlaces(p);
		case "c_21": return d("1").div(d("0.764554857984")).mul(v).toDecimalPlaces(p);
		case "c_22": return d("1").div(d("284.130625e-6")).mul(v).toDecimalPlaces(p);
		case "c_23": return d("1").div(d("227.3045e-6")).mul(v).toDecimalPlaces(p);
		case "c_24": return d("1").div(d("250.0e-6")).mul(v).toDecimalPlaces(p);
		case "c_25": return d("1").div(d("236.5882365e-6")).mul(v).toDecimalPlaces(p);
		case "c_26": return d("1").div(d("2.4e-4")).mul(v).toDecimalPlaces(p);
		case "d_27": return d("1").div(d("2273045").div(d("6144000000000"))).mul(v).toDecimalPlaces(p);
		case "d_28": return d("1").div(d("308.057599609375e-9")).mul(v).toDecimalPlaces(p);
		case "d_29": return c_19.convert(d("1").div(d("1").div("12")), g_46, dp).mul(v).toDecimalPlaces(p);
		case "d_30": return c_19.convert(d("1").div(d("1").div("288")), o_58, dp).mul(v).toDecimalPlaces(p);
		case "d_31": return c_19.convert(d("1").div(d("1").div("1824")), g_46, dp).mul(v).toDecimalPlaces(p);
		case "d_32": return d("1").div(d("250").div(d("3000000000"))).mul(v).toDecimalPlaces(p);
		case "d_33": return d("1").div(d("50.0e-9")).mul(v).toDecimalPlaces(p);
		case "d_34": return d("1").div(d("157725491").div(d("1920000000000000"))).mul(v).toDecimalPlaces(p);
		case "d_35": return c_19.convert(d("1").div(d("1").div("456")), o_59, dp).mul(v).toDecimalPlaces(p);
		case "d_36": return c_19.convert(d("1").div(d("1").div("576")), o_59, dp).mul(v).toDecimalPlaces(p);
		case "f_37": return d("1").div(d("757.0823568e-6")).mul(v).toDecimalPlaces(p);
		case "f_38": return d("1").div(d("0.04091481")).mul(v).toDecimalPlaces(p);
		case "f_39": return d("1").div(d("3.5516328125e-6")).mul(v).toDecimalPlaces(p);
		case "f_40": return d("1").div(d("3.6966911953125e-6")).mul(v).toDecimalPlaces(p);
		case "f_41": return d("1").div(d("454609").div(d("384000000000"))).mul(v).toDecimalPlaces(p);
		case "g_42": return d("1").div(d("4.621152048e-3")).mul(v).toDecimalPlaces(p);
		case "g_43": return d("1").div(d("4.54609e-3")).mul(v).toDecimalPlaces(p);
		case "g_44": return d("1").div(d("4.40488377086e-3")).mul(v).toDecimalPlaces(p);
		case "g_45": return d("1").div(d("3.785411784e-3")).mul(v).toDecimalPlaces(p);
		case "g_46": return d("1").div(d("142.0653125e-6")).mul(v).toDecimalPlaces(p);
		case "g_47": return d("1").div(d("118.29411825e-6")).mul(v).toDecimalPlaces(p);
		case "h_48": return d("1").div(d("0.32731848")).mul(v).toDecimalPlaces(p);
		case "h_49": return d("1").div(d("0.238480942392")).mul(v).toDecimalPlaces(p);
		case "j_50": return c_19.convert(d("1").div(d("3").div("2")), o_59, dp).mul(v).toDecimalPlaces(p);
		case "k_51": return d("1").div(d("0.08182962")).mul(v).toDecimalPlaces(p);
		case "l_52": return d("1").div(d("1e-9")).mul(v).toDecimalPlaces(p);
		case "l_53": return d("1").div(d("2.9094976")).mul(v).toDecimalPlaces(p);
		case "l_54": return d("1").div(d("0.001")).mul(v).toDecimalPlaces(p);
		case "l_55": return d("1").div(d("1.4158423296")).mul(v).toDecimalPlaces(p);
		case "m_56": return d("1").div(d("454609").div(d("7680000000000"))).mul(v).toDecimalPlaces(p);
		case "m_57": return d("1").div(d("61.611519921875e-9")).mul(v).toDecimalPlaces(p);
		case "o_58": return d("1").div(d("28.4130625e-6")).mul(v).toDecimalPlaces(p);
		case "o_59": return d("1").div(d("29.5735295625e-6")).mul(v).toDecimalPlaces(p);
		case "o_60": return d("1").div(d("3e-5")).mul(v).toDecimalPlaces(p);
		case "p_61": return d("1").div(d("9.09218e-3")).mul(v).toDecimalPlaces(p);
		case "p_62": return d("1").div(d("8.80976754172e-3")).mul(v).toDecimalPlaces(p);
		case "p_63": return d("1").div(d("0.700841953152")).mul(v).toDecimalPlaces(p);
		case "p_64": return d("1").div(d("2273045").div(d("3072000000000"))).mul(v).toDecimalPlaces(p);
		case "p_65": return d("1").div(d("616.11519921875e-9")).mul(v).toDecimalPlaces(p);
		case "p_66": return d("1").div(d("568.26125e-6")).mul(v).toDecimalPlaces(p);
		case "p_67": return d("1").div(d("550.6104713575e-6")).mul(v).toDecimalPlaces(p);
		case "p_68": return d("1").div(d("473.176473e-6")).mul(v).toDecimalPlaces(p);
		case "p_69": return d("1").div(d("22.180147171875e-6")).mul(v).toDecimalPlaces(p);
		case "p_70": return d("1").div(d("2.273045e-3")).mul(v).toDecimalPlaces(p);
		case "q_71": return d("1").div(d("1.1365225e-3")).mul(v).toDecimalPlaces(p);
		case "q_72": return d("1").div(d("1.101220942715e-3")).mul(v).toDecimalPlaces(p);
		case "q_73": return d("1").div(d("946.352946e-6")).mul(v).toDecimalPlaces(p);
		case "q_74": return d("1").div(d("0.29094976")).mul(v).toDecimalPlaces(p);
		case "r_75": return d("1").div(d("2.8316846592")).mul(v).toDecimalPlaces(p);
		case "s_76": return d("1").div(d("0.10571721050064")).mul(v).toDecimalPlaces(p);
		case "s_77": return d("1").div(d("0.29095")).mul(v).toDecimalPlaces(p);
		case "s_78": return c_19.convert(d("1").div(d("3").div("2")), o_59, dp).mul(v).toDecimalPlaces(p);
		case "s_79": return d("1").div(d("0.07273744")).mul(v).toDecimalPlaces(p);
		case "s_80": return d("1").div(d("0.07047814033376")).mul(v).toDecimalPlaces(p);
		case "t_81": return d("1").div(d("20.0e-6")).mul(v).toDecimalPlaces(p);
		case "t_82": return d("1").div(d("14.20653125e-6")).mul(v).toDecimalPlaces(p);
		case "t_83": return d("1").div(d("17.7581640625e-6")).mul(v).toDecimalPlaces(p);
		case "t_84": return d("1").div(d("15e-6")).mul(v).toDecimalPlaces(p);
		case "t_85": return d("1").div(d("14.78676478125e-6")).mul(v).toDecimalPlaces(p);
		case "t_86": return d("1").div(d("15e-6")).mul(v).toDecimalPlaces(p);
		case "t_87": return d("1").div(d("454609").div(d("96000000000"))).mul(v).toDecimalPlaces(p);
		case "t_88": return d("1").div(d("454609").div(d("76800000000"))).mul(v).toDecimalPlaces(p);
		case "t_89": return d("1").div(d("5.0e-6")).mul(v).toDecimalPlaces(p);
		case "t_90": return d("1").div(d("4.92892159375e-6")).mul(v).toDecimalPlaces(p);
		case "t_91": return d("1").div(d("5e-6")).mul(v).toDecimalPlaces(p);
		case "t_92": return d("1").div(d("0.028316846592")).mul(v).toDecimalPlaces(p);
		case "t_93": return d("1").div(d("0.99108963072")).mul(v).toDecimalPlaces(p);
		case "t_94": return d("1").div(d("1.13267386368")).mul(v).toDecimalPlaces(p);
		case "t_95": return d("1").div(d("1.01832416")).mul(v).toDecimalPlaces(p);
		case "t_96": return d("1").div(d("0.953923769568")).mul(v).toDecimalPlaces(p);
		case "w_97": return d("1").div(d("1.4095628066752")).mul(v).toDecimalPlaces(p);
		case "ccm": return d("1").div(d("0.01")).mul(v).toDecimalPlaces(p);
		case "cdm": return d("1").div(d("0.1")).mul(v).toDecimalPlaces(p);
		case "cmm": return d("1").div(d("0.001")).mul(v).toDecimalPlaces(p);
		case "cmcm": return c_19.convert(d("1").div(d("1e-3")), cmm, dp).mul(v).toDecimalPlaces(p);
		case "cnm": return c_19.convert(d("1").div(d("1e-3")), cmcm, dp).mul(v).toDecimalPlaces(p);
		case "ckm": return d("1").div(d("1000")).mul(v).toDecimalPlaces(p);
		case "ccl": return c_19.convert(d("1").div(d("0.01")), l_54, dp).mul(v).toDecimalPlaces(p);
		case "cml": return c_19.convert(d("1").div(d("0.001")), l_54, dp).mul(v).toDecimalPlaces(p);
		case "cmcl": return c_19.convert(d("1").div(d("0.001")), cml, dp).mul(v).toDecimalPlaces(p);
		case "cnl": return c_19.convert(d("1").div(d("0.001")), cmcl, dp).mul(v).toDecimalPlaces(p);
		case "ckl": return c_19.convert(d("1").div(d("1000")), l_54, dp).mul(v).toDecimalPlaces(p);
		default: return v.toDecimalPlaces(p);
	}
}

const a_1 = { name: "acre-foot", value: "a_1", symbol: "ac ft", index: 1 }
a_1.convert = convertDefault(a_1);
const a_2 = { name: "acre-inch", value: "a_2", index: 2 }
a_2.convert = convertDefault(a_2);
const b_3 = { name: "barrel (imperial)", value: "b_3", symbol: "bl (imp)", index: 3 }
b_3.convert = convertDefault(b_3);
const b_4 = { name: "barrel (petroleum); archaic blue-barrel", value: "b_4", symbol: "bl; bbl", index: 4 }
b_4.convert = convertDefault(b_4);
const b_5 = { name: "barrel (US dry)", value: "b_5", symbol: "bl (US)", index: 5 }
b_5.convert = convertDefault(b_5);
const b_6 = { name: "barrel (US fluid)", value: "b_6", symbol: "fl bl (US)", index: 6 }
b_6.convert = convertDefault(b_6);
const b_7 = { name: "board-foot", value: "b_7", symbol: "bdft", index: 7 }
b_7.convert = convertDefault(b_7);
const b_8 = { name: "bucket (imperial)", value: "b_8", symbol: "bkt", index: 8 }
b_8.convert = convertDefault(b_8);
const b_9 = { name: "bushel (imperial)", value: "b_9", symbol: "bu (imp)", index: 9 }
b_9.convert = convertDefault(b_9);
const b_10 = { name: "bushel (US dry heaped)", value: "b_10", symbol: "bu (US)", index: 10 }
b_10.convert = convertDefault(b_10);
const b_11 = { name: "bushel (US dry level)", value: "b_11", symbol: "bu (US lvl)", index: 11 }
b_11.convert = convertDefault(b_11);
const b_12 = { name: "butt, pipe", value: "b_12", index: 12 }
b_12.convert = convertDefault(b_12);
const c_13 = { name: "coomb", value: "c_13", index: 13 }
c_13.convert = convertDefault(c_13);
const c_14 = { name: "cord (firewood)", value: "c_14", index: 14 }
c_14.convert = convertDefault(c_14);
const c_15 = { name: "cord-foot", value: "c_15", index: 15 }
c_15.convert = convertDefault(c_15);
const c_16 = { name: "cubic fathom", value: "c_16", symbol: "cu fm", index: 16 }
c_16.convert = convertDefault(c_16);
const c_17 = { name: "cubic foot", value: "c_17", symbol: "ft3", index: 17 }
c_17.convert = convertDefault(c_17);
const c_18 = { name: "cubic inch", value: "c_18", symbol: "in3", index: 18 }
c_18.convert = convertDefault(c_18);
const c_20 = { name: "cubic mile", value: "c_20", symbol: "cu mi", index: 20 }
c_20.convert = convertDefault(c_20);
const c_21 = { name: "cubic yard", value: "c_21", symbol: "yd3", index: 21 }
c_21.convert = convertDefault(c_21);
const c_22 = { name: "cup (breakfast)", value: "c_22", index: 22 }
c_22.convert = convertDefault(c_22);
const c_23 = { name: "cup (Canadian)", value: "c_23", symbol: "c (CA)", index: 23 }
c_23.convert = convertDefault(c_23);
const c_24 = { name: "cup (metric)", value: "c_24", symbol: "c", index: 24 }
c_24.convert = convertDefault(c_24);
const c_25 = { name: "cup (US customary)", value: "c_25", symbol: "c (US)", index: 25 }
c_25.convert = convertDefault(c_25);
const c_26 = { name: "cup (US food nutrition labeling)", value: "c_26", symbol: "c (US)", index: 26 }
c_26.convert = convertDefault(c_26);
const d_27 = { name: "dash (imperial)", value: "d_27", index: 27 }
d_27.convert = convertDefault(d_27);
const d_28 = { name: "dash (US)", value: "d_28", index: 28 }
d_28.convert = convertDefault(d_28);
const d_29 = { name: "dessertspoon (imperial)", value: "d_29", index: 29 }
d_29.convert = convertDefault(d_29);
const d_30 = { name: "drop (imperial)", value: "d_30", symbol: "gtt", index: 30 }
d_30.convert = convertDefault(d_30);
const d_31 = { name: "drop (imperial) (alt)", value: "d_31", symbol: "gtt", index: 31 }
d_31.convert = convertDefault(d_31);
const d_32 = { name: "drop (medical)", value: "d_32", index: 32 }
d_32.convert = convertDefault(d_32);
const d_33 = { name: "drop (metric)", value: "d_33", index: 33 }
d_33.convert = convertDefault(d_33);
const d_34 = { name: "drop (US)", value: "d_34", symbol: "gtt", index: 34 }
d_34.convert = convertDefault(d_34);
const d_35 = { name: "drop (US) (alt)", value: "d_35", symbol: "gtt", index: 35 }
d_35.convert = convertDefault(d_35);
const d_36 = { name: "drop (US) (alt)", value: "d_36", symbol: "gtt", index: 36 }
d_36.convert = convertDefault(d_36);
const f_37 = { name: "fifth", value: "f_37", index: 37 }
f_37.convert = convertDefault(f_37);
const f_38 = { name: "firkin", value: "f_38", index: 38 }
f_38.convert = convertDefault(f_38);
const f_39 = { name: "fluid drachm (imperial)", value: "f_39", symbol: "fl dr", index: 39 }
f_39.convert = convertDefault(f_39);
const f_40 = { name: "fluid dram (US); US fluidram", value: "f_40", symbol: "fl dr", index: 40 }
f_40.convert = convertDefault(f_40);
const f_41 = { name: "fluid scruple (imperial)", value: "f_41", symbol: "fl s", index: 41 }
f_41.convert = convertDefault(f_41);
const g_42 = { name: "gallon (beer)", value: "g_42", symbol: "beer gal", index: 42 }
g_42.convert = convertDefault(g_42);
const g_43 = { name: "gallon (imperial)", value: "g_43", symbol: "gal (imp)", index: 43 }
g_43.convert = convertDefault(g_43);
const g_44 = { name: "gallon (US dry)", value: "g_44", symbol: "gal (US)", index: 44 }
g_44.convert = convertDefault(g_44);
const g_45 = { name: "gallon (US fluid; Wine)", value: "g_45", symbol: "gal (US)", index: 45 }
g_45.convert = convertDefault(g_45);
const g_46 = { name: "gill (imperial); Noggin", value: "g_46", symbol: "gi (imp); nog", index: 46 }
g_46.convert = convertDefault(g_46);
const g_47 = { name: "gill (US)", value: "g_47", symbol: "gi (US)", index: 47 }
g_47.convert = convertDefault(g_47);
const h_48 = { name: "hogshead (imperial)", value: "h_48", symbol: "hhd (imp)", index: 48 }
h_48.convert = convertDefault(h_48);
const h_49 = { name: "hogshead (US)", value: "h_49", symbol: "hhd (US)", index: 49 }
h_49.convert = convertDefault(h_49);
const j_50 = { name: "jigger (bartending)", value: "j_50", index: 50 }
j_50.convert = convertDefault(j_50);
const k_51 = { name: "kilderkin", value: "k_51", index: 51 }
k_51.convert = convertDefault(k_51);
const l_52 = { name: "lambda", value: "l_52", symbol: "λ", index: 52 }
l_52.convert = convertDefault(l_52);
const l_53 = { name: "last", value: "l_53", index: 53 }
l_53.convert = convertDefault(l_53);
const l_54 = { name: "litre (liter)", value: "l_54", symbol: "L or l", index: 54 }
l_54.convert = convertDefault(l_54);
const l_55 = { name: "load", value: "l_55", index: 55 }
l_55.convert = convertDefault(l_55);
const m_56 = { name: "minim (imperial)", value: "m_56", symbol: "min", index: 56 }
m_56.convert = convertDefault(m_56);
const m_57 = { name: "minim (US)", value: "m_57", symbol: "min", index: 57 }
m_57.convert = convertDefault(m_57);
const o_58 = { name: "ounce (fluid imperial)", value: "o_58", symbol: "fl oz (imp)", index: 58 }
o_58.convert = convertDefault(o_58);
const o_59 = { name: "ounce (fluid US customary)", value: "o_59", symbol: "US fl oz", index: 59 }
o_59.convert = convertDefault(o_59);
const o_60 = { name: "ounce (fluid US food nutrition labeling)", value: "o_60", symbol: "US fl oz", index: 60 }
o_60.convert = convertDefault(o_60);
const p_61 = { name: "peck (imperial)", value: "p_61", symbol: "pk", index: 61 }
p_61.convert = convertDefault(p_61);
const p_62 = { name: "peck (US dry)", value: "p_62", symbol: "pk", index: 62 }
p_62.convert = convertDefault(p_62);
const p_63 = { name: "perch", value: "p_63", symbol: "per", index: 63 }
p_63.convert = convertDefault(p_63);
const p_64 = { name: "pinch (imperial)", value: "p_64", index: 64 }
p_64.convert = convertDefault(p_64);
const p_65 = { name: "pinch (US)", value: "p_65", index: 65 }
p_65.convert = convertDefault(p_65);
const p_66 = { name: "pint (imperial)", value: "p_66", symbol: "pt (imp)", index: 66 }
p_66.convert = convertDefault(p_66);
const p_67 = { name: "pint (US dry)", value: "p_67", symbol: "pt (US dry)", index: 67 }
p_67.convert = convertDefault(p_67);
const p_68 = { name: "pint (US fluid)", value: "p_68", symbol: "pt (US fl)", index: 68 }
p_68.convert = convertDefault(p_68);
const p_69 = { name: "pony", value: "p_69", index: 69 }
p_69.convert = convertDefault(p_69);
const p_70 = { name: "pottle; quartern", value: "p_70", index: 70 }
p_70.convert = convertDefault(p_70);
const q_71 = { name: "quart (imperial)", value: "q_71", symbol: "qt (imp)", index: 71 }
q_71.convert = convertDefault(q_71);
const q_72 = { name: "quart (US dry)", value: "q_72", symbol: "qt (US)", index: 72 }
q_72.convert = convertDefault(q_72);
const q_73 = { name: "quart (US fluid)", value: "q_73", symbol: "qt (US)", index: 73 }
q_73.convert = convertDefault(q_73);
const q_74 = { name: "quarter; pail", value: "q_74", index: 74 }
q_74.convert = convertDefault(q_74);
const r_75 = { name: "register ton", value: "r_75", index: 75 }
r_75.convert = convertDefault(r_75);
const s_76 = { name: "sack (US)", value: "s_76", index: 76 }
s_76.convert = convertDefault(s_76);
const s_77 = { name: "seam", value: "s_77", index: 77 }
s_77.convert = convertDefault(s_77);
const s_78 = { name: "shot (US)", value: "s_78", index: 78 }
s_78.convert = convertDefault(s_78);
const s_79 = { name: "strike (imperial)", value: "s_79", index: 79 }
s_79.convert = convertDefault(s_79);
const s_80 = { name: "strike (US)", value: "s_80", index: 80 }
s_80.convert = convertDefault(s_80);
const t_81 = { name: "tablespoon (Australian metric)", value: "t_81", index: 81 }
t_81.convert = convertDefault(t_81);
const t_82 = { name: "tablespoon (Canadian)", value: "t_82", symbol: "tbsp", index: 82 }
t_82.convert = convertDefault(t_82);
const t_83 = { name: "tablespoon (imperial)", value: "t_83", symbol: "tbsp", index: 83 }
t_83.convert = convertDefault(t_83);
const t_84 = { name: "tablespoon (metric)", value: "t_84", index: 84 }
t_84.convert = convertDefault(t_84);
const t_85 = { name: "tablespoon (US customary)", value: "t_85", symbol: "tbsp", index: 85 }
t_85.convert = convertDefault(t_85);
const t_86 = { name: "tablespoon (US food nutrition labeling)", value: "t_86", symbol: "tbsp", index: 86 }
t_86.convert = convertDefault(t_86);
const t_87 = { name: "teaspoon (Canadian)", value: "t_87", symbol: "tsp", index: 87 }
t_87.convert = convertDefault(t_87);
const t_88 = { name: "teaspoon (imperial)", value: "t_88", symbol: "tsp", index: 88 }
t_88.convert = convertDefault(t_88);
const t_89 = { name: "teaspoon (metric)", value: "t_89", index: 89 }
t_89.convert = convertDefault(t_89);
const t_90 = { name: "teaspoon (US customary)", value: "t_90", symbol: "tsp", index: 90 }
t_90.convert = convertDefault(t_90);
const t_91 = { name: "teaspoon (US food nutrition labeling)", value: "t_91", symbol: "tsp", index: 91 }
t_91.convert = convertDefault(t_91);
const t_92 = { name: "timber foot", value: "t_92", index: 92 }
t_92.convert = convertDefault(t_92);
const t_93 = { name: "ton (displacement)", value: "t_93", index: 93 }
t_93.convert = convertDefault(t_93);
const t_94 = { name: "ton (freight)", value: "t_94", index: 94 }
t_94.convert = convertDefault(t_94);
const t_95 = { name: "ton (water)", value: "t_95", index: 95 }
t_95.convert = convertDefault(t_95);
const t_96 = { name: "tun", value: "t_96", index: 96 }
t_96.convert = convertDefault(t_96);
const w_97 = { name: "wey (US)", value: "w_97", index: 97 }
w_97.convert = convertDefault(w_97);
const ccm = { name: "Cubic centimeter", value: "ccm", symbol: undefined, index: 19 }
ccm.convert = convertDefault(ccm);
const cdm = { name: "Cubic decimeter", value: "cdm", symbol: undefined, index: 98 }
cdm.convert = convertDefault(cdm);
const cmm = { name: "Cubic millimeter", value: "cmm", symbol: undefined, index: 99 }
cmm.convert = convertDefault(cmm);
const cmcm = { name: "Cubic micrometer", value: "cmcm", symbol: undefined, index: 100 }
cmcm.convert = convertDefault(cmcm);
const cnm = { name: "Cubic nanometer", value: "cnm", symbol: undefined, index: 101 }
cnm.convert = convertDefault(cnm);
const ckm = { name: "Cubic kilometer", value: "ckm", symbol: undefined, index: 102 }
ckm.convert = convertDefault(ckm);
const ccl = { name: "Cubic centilitre", value: "ccl", symbol: undefined, index: 103 }
ccl.convert = convertDefault(ccl);
const cml = { name: "Cubic millilitre", value: "cml", symbol: undefined, index: 104 }
cml.convert = convertDefault(cml);
const cmcl = { name: "Cubic microlitre", value: "cmcl", symbol: undefined, index: 105 }
cmcl.convert = convertDefault(cmcl);
const cnl = { name: "Cubic nanolitre", value: "cnl", symbol: undefined, index: 106 }
cnl.convert = convertDefault(cnl);
const ckl = { name: "Cubic kilolitre", value: "ckl", symbol: undefined, index: 107 }
ckl.convert = convertDefault(ckl);
const volumeUnit = { a_1, a_2, b_3, b_4, b_5, b_6, b_7, b_8, b_9, b_10, b_11, b_12, c_13, c_14, c_15, ccl, ccm, cdm, c_16, c_17, c_18, c_19, ckl, ckm, c_20, cmcm, cmcl, cml, cmm, cnl, cnm, c_21, c_22, c_23, c_24, c_25, c_26, d_27, d_28, d_29, d_30, d_31, d_32, d_33, d_34, d_35, d_36, f_37, f_38, f_39, f_40, f_41, g_42, g_43, g_44, g_45, g_46, g_47, h_48, h_49, j_50, k_51, l_52, l_53, l_54, l_55, m_56, m_57, o_58, o_59, o_60, p_61, p_62, p_63, p_64, p_65, p_66, p_67, p_68, p_69, p_70, q_71, q_72, q_73, q_74, r_75, s_76, s_77, s_78, s_79, s_80, t_81, t_82, t_83, t_84, t_85, t_86, t_87, t_88, t_89, t_90, t_91, t_92, t_93, t_94, t_95, t_96, w_97 }
export default volumeUnit;

