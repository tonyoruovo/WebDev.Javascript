import Decimal from "decimal.js";

const d = (v) => new Decimal(v);
const pi = () => d("3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066");
const dp = 10000;//Default precision

const convertDefault = (from) => {
	return (v, t, p) => {
		if(t.value === from.value) return v.toDecimalPlaces(p);
		else if (t.value === "m_39") return d("1").div(m_39.convert(d("1"), from, dp)).mul(v).toDecimalPlaces(p);
		return m_39.convert(from.convert(v, m_39, dp), t, p);
	}
}

const m_39 = { name: "metre", value: "m_39", symbol: "m", index: 0 }
m_39.convert = function(v, t, p) {
	switch(t.value) {
		case "a_1": return d("1").div(d("1e-10")).mul(v).toDecimalPlaces(p);
		case "a_2": return d("1").div(d("149597870700")).mul(v).toDecimalPlaces(p);
		case "a_3": return d("1").div(d("1e-18")).mul(v).toDecimalPlaces(p);
		case "b_4": return m_39.convert(d("1").div(d("1").div("3")), i_29, dp).mul(v).toDecimalPlaces(p);
		case "b_5": return d("1").div(d("5.291772109217e−11")).mul(v).toDecimalPlaces(p);
		case "c_6": return m_39.convert(d("1").div(d("608")), f_23, dp).mul(v).toDecimalPlaces(p);
		case "c_7": return m_39.convert(d("1").div(d("0.1")), n_53, dp).mul(v).toDecimalPlaces(p);
		case "c_8": return m_39.convert(d("1").div(d("720")), f_23, dp).mul(v).toDecimalPlaces(p);
		case "c_9": return m_39.convert(d("1").div(d("66")), f_25, dp).mul(v).toDecimalPlaces(p);
		case "c_10": return d("1").div(d("0.5")).mul(v).toDecimalPlaces(p);
		case "e_11": return d("1").div(d("1.143")).mul(v).toDecimalPlaces(p);
		case "f_12": return d("1").div(d("1.8288")).mul(v).toDecimalPlaces(p);
		case "f_13": return d("1").div(d("1e-15")).mul(v).toDecimalPlaces(p);
		case "f_14": return d("1").div(d("1e-15")).mul(v).toDecimalPlaces(p);
		case "f_15": return d("1").div(d("0.022225")).mul(v).toDecimalPlaces(p);
		case "f_16": return d("1").div(d("0.1143")).mul(v).toDecimalPlaces(p);
		case "f_17": return d("1").div(d("0.304799735")).mul(v).toDecimalPlaces(p);
		case "f_18": return d("1").div(d("0.314858")).mul(v).toDecimalPlaces(p);
		case "f_19": return d("1").div(d("0.3047972654")).mul(v).toDecimalPlaces(p);
		case "f_20": return d("1").div(d("0.3047999514")).mul(v).toDecimalPlaces(p);
		case "f_21": return d("1").div(d("0.3")).mul(v).toDecimalPlaces(p);
		case "f_22": return d("1").div(d("1").div(d("3"))).mul(v).toDecimalPlaces(p);
		case "f_23": return m_39.convert(d("1").div(d("12")), i_29, dp).mul(v).toDecimalPlaces(p);
		case "f_24": return d("1").div(d("0.30479947")).mul(v).toDecimalPlaces(p);
		case "f_25": return d("1").div(d("1200").div(d("3937"))).mul(v).toDecimalPlaces(p);
		case "f_26": return d("1").div(d("1").div(d("3000"))).mul(v).toDecimalPlaces(p);
		case "f_27": return d("1").div(d("201.168")).mul(v).toDecimalPlaces(p);
		case "h_28": return d("1").div(d("0.1016")).mul(v).toDecimalPlaces(p);
		case "i_29": return d("1").div(d("0.0254")).mul(v).toDecimalPlaces(p);
		case "l_30": return d("1").div(d("4828")).mul(v).toDecimalPlaces(p);
		case "l_31": return m_39.convert(d("1").div(d("24")), l_32, dp).mul(v).toDecimalPlaces(p);
		case "l_32": return m_39.convert(d("1").div(d("60")), l_33, dp).mul(v).toDecimalPlaces(p);
		case "l_33": return m_39.convert(d("1").div(d("60")), l_34, dp).mul(v).toDecimalPlaces(p);
		case "l_34": return d("1").div(d("299792458")).mul(v).toDecimalPlaces(p);
		case "l_35": return d("1").div(d("9.4607304725808e15")).mul(v).toDecimalPlaces(p);
		case "l_36": return d("1").div(d("635")).div(d("300000")).mul(v).toDecimalPlaces(p);
		case "l_37": return m_39.convert(d("1").div(d("0.66")), f_23, dp).mul(v).toDecimalPlaces(p);
		case "l_38": return m_39.convert(d("1").div(d("1")), f_23, dp).mul(v).toDecimalPlaces(p);
		case "m_40": return d("1").div(d("1.27e-4")).mul(v).toDecimalPlaces(p);
		case "m_41": return d("1").div(d("1e-6")).mul(v).toDecimalPlaces(p);
		case "m_42": return d("1").div(d("2.54e-5")).mul(v).toDecimalPlaces(p);
		case "m_43": return d("1").div(d("10000")).mul(v).toDecimalPlaces(p);
		case "m_44": return d("1").div(d("1853.7936")).mul(v).toDecimalPlaces(p);
		case "m_45": return d("1").div(d("1609.344")).mul(v).toDecimalPlaces(p);
		case "m_46": return d("1").div(d("1828.8")).mul(v).toDecimalPlaces(p);
		case "m_47": return d("1").div(d("1855.3176")).mul(v).toDecimalPlaces(p);
		case "m_48": return m_39.convert(d("1").div(d("5280")), f_25, dp).mul(v).toDecimalPlaces(p);
		case "n_49": return d("1").div(d("0.05715")).mul(v).toDecimalPlaces(p);
		case "n_50": return d("1").div(d("0.1e-9")).mul(v).toDecimalPlaces(p);
		case "n_51": return d("1").div(d("5556")).mul(v).toDecimalPlaces(p);
		case "n_52": return m_39.convert(d("1").div(d("6080")), f_23, dp).mul(v).toDecimalPlaces(p);
		case "n_53": return d("1").div(d("1852")).mul(v).toDecimalPlaces(p);
		case "n_54": return d("1").div(d("1853.248")).mul(v).toDecimalPlaces(p);
		case "p_55": return d("1").div(d("0.762")).mul(v).toDecimalPlaces(p);
		case "p_56": return d("1").div(d("0.0762")).mul(v).toDecimalPlaces(p);
		case "p_57": return m_39.convert(d("1").div(d("648000").div(pi())), a_2, dp).mul(v).toDecimalPlaces(p);
		case "p_58": return m_39.convert(d("1").div(d("12")), p_62, dp).mul(v).toDecimalPlaces(p);
		case "p_59": return d("1").div(d("1e-12")).mul(v).toDecimalPlaces(p);
		case "p_60": return m_39.convert(d("1").div(d("1").div(d("72.272"))), i_29, dp).mul(v).toDecimalPlaces(p);
		case "p_61": return d("1").div(d("0.00037593985")).mul(v).toDecimalPlaces(p);
		case "p_62": return d("1").div(d("3175").div(d("9000000"))).mul(v).toDecimalPlaces(p);
		case "p_63": return d("1").div(d("254").div(d("722700"))).mul(v).toDecimalPlaces(p);
		case "q_64": return d("1").div(d("0.2286")).mul(v).toDecimalPlaces(p);
		case "r_65": return d("1").div(d("5.0292")).mul(v).toDecimalPlaces(p);
		case "r_66": return d("1").div(d("6.096")).mul(v).toDecimalPlaces(p);
		case "s_67": return d("1").div(d("10").div(d("33"))).mul(v).toDecimalPlaces(p);
		case "s_68": return d("1").div(d("0.2286")).mul(v).toDecimalPlaces(p);
		case "s_69": return d("1").div(d("1e12")).mul(v).toDecimalPlaces(p);
		case "s_70": return d("1").div(d("0.0508")).mul(v).toDecimalPlaces(p);
		case "t_71": return d("1").div(d("27000").div(d("13853"))).mul(v).toDecimalPlaces(p);
		case "t_72": return d("1").div(d("127").div(d("7200000"))).mul(v).toDecimalPlaces(p);
		case "x_73": return d("1").div(d("1.0021e−13")).mul(v).toDecimalPlaces(p);
		case "y_74": return d("1").div(d("0.9144")).mul(v).toDecimalPlaces(p);
		case "y_75": return d("1").div(d("1e-24")).mul(v).toDecimalPlaces(p);
		case "z_76": return d("1").div(d("1e-21")).mul(v).toDecimalPlaces(p);
		case "dm": return d("1").div(d("0.1")).mul(v).toDecimalPlaces(p);
		case "km": return d("1").div(d("1000")).mul(v).toDecimalPlaces(p);
		case "cm": return d("1").div(d("0.01")).mul(v).toDecimalPlaces(p);
		case "mm": return d("1").div(d("0.001")).mul(v).toDecimalPlaces(p);
		default: return v.toDecimalPlaces(p);
	}
}

const a_1 = { name: "ångström", value: "a_1", symbol: "Å", index: 1 }
a_1.convert = convertDefault(a_1);
const a_2 = { name: "astronomical unit", value: "a_2", symbol: "au", index: 2 }
a_2.convert = convertDefault(a_2);
const a_3 = { name: "attometre", value: "a_3", symbol: "am", index: 3 }
a_3.convert = convertDefault(a_3);
const b_4 = { name: "barleycorn", value: "b_4", index: 4 }
b_4.convert = convertDefault(b_4);
const b_5 = { name: "bohr, atomic unit of length", value: "b_5", symbol: "a0", index: 5 }
b_5.convert = convertDefault(b_5);
const c_6 = { name: "cable length (imperial)", value: "c_6", index: 6 }
c_6.convert = convertDefault(c_6);
const c_7 = { name: "cable length (International)", value: "c_7", index: 7 }
c_7.convert = convertDefault(c_7);
const c_8 = { name: "cable length (US)", value: "c_8", index: 8 }
c_8.convert = convertDefault(c_8);
const c_9 = { name: "chain (Gunter's; Surveyor's)", value: "c_9", symbol: "ch", index: 9 }
c_9.convert = convertDefault(c_9);
const c_10 = { name: "cubit", value: "c_10", index: 10 }
c_10.convert = convertDefault(c_10);
const e_11 = { name: "ell", value: "e_11", symbol: "ell", index: 11 }
e_11.convert = convertDefault(e_11);
const f_12 = { name: "fathom", value: "f_12", symbol: "ftm", index: 12 }
f_12.convert = convertDefault(f_12);
const f_13 = { name: "femtometre", value: "f_13", symbol: "fm", index: 13 }
f_13.convert = convertDefault(f_13);
const f_14 = { name: "fermi", value: "f_14", symbol: "fm", index: 14 }
f_14.convert = convertDefault(f_14);
const f_15 = { name: "finger", value: "f_15", index: 15 }
f_15.convert = convertDefault(f_15);
const f_16 = { name: "finger (cloth)", value: "f_16", index: 16 }
f_16.convert = convertDefault(f_16);
const f_17 = { name: "foot (Benoît)", value: "f_17", symbol: "ft (Ben)", index: 17 }
f_17.convert = convertDefault(f_17);
const f_18 = { name: "foot (Cape)", value: "f_18", index: 18 }
f_18.convert = convertDefault(f_18);
const f_19 = { name: "foot (Clarke's)", value: "f_19", symbol: "ft (Cla)", index: 19 }
f_19.convert = convertDefault(f_19);
const f_20 = { name: "foot (Indian)", value: "f_20", symbol: "ft Ind", index: 20 }
f_20.convert = convertDefault(f_20);
const f_21 = { name: "foot, metric", value: "f_21", symbol: "mf", index: 21 }
f_21.convert = convertDefault(f_21);
const f_22 = { name: "foot, metric (Mesures usuelles)", value: "f_22", index: 22 }
f_22.convert = convertDefault(f_22);
const f_23 = { name: "foot (International)", value: "f_23", symbol: "ft", index: 23 }
f_23.convert = convertDefault(f_23);
const f_24 = { name: "foot (Sear's)", value: "f_24", symbol: "ft (Sear)", index: 24 }
f_24.convert = convertDefault(f_24);
const f_25 = { name: "foot (US Survey)", value: "f_25", symbol: "ft (US)", index: 25 }
f_25.convert = convertDefault(f_25);
const f_26 = { name: "french; charriere", value: "f_26", symbol: "F", index: 26 }
f_26.convert = convertDefault(f_26);
const f_27 = { name: "furlong", value: "f_27", symbol: "fur", index: 27 }
f_27.convert = convertDefault(f_27);
const h_28 = { name: "hand", value: "h_28", index: 28 }
h_28.convert = convertDefault(h_28);
const i_29 = { name: "inch (International)", value: "i_29", symbol: "in", index: 29 }
i_29.convert = convertDefault(i_29);
const l_30 = { name: "league (land)", value: "l_30", symbol: "lea", index: 30 }
l_30.convert = convertDefault(l_30);
const l_31 = { name: "light-day", value: "l_31", index: 31 }
l_31.convert = convertDefault(l_31);
const l_32 = { name: "light-hour", value: "l_32", index: 32 }
l_32.convert = convertDefault(l_32);
const l_33 = { name: "light-minute", value: "l_33", index: 33 }
l_33.convert = convertDefault(l_33);
const l_34 = { name: "light-second", value: "l_34", index: 34 }
l_34.convert = convertDefault(l_34);
const l_35 = { name: "light-year", value: "l_35", symbol: "ly", index: 35 }
l_35.convert = convertDefault(l_35);
const l_36 = { name: "line", value: "l_36", symbol: "ln", index: 36 }
l_36.convert = convertDefault(l_36);
const l_37 = { name: "link (Gunter's; Surveyor's)", value: "l_37", symbol: "lnk", index: 37 }
l_37.convert = convertDefault(l_37);
const l_38 = { name: "link (Ramsden's; Engineer's)", value: "l_38", symbol: "lnk", index: 38 }
l_38.convert = convertDefault(l_38);
const m_40 = { name: "mickey", value: "m_40", index: 40 }
m_40.convert = convertDefault(m_40);
const m_41 = { name: "micrometre (old: micron)", value: "m_41", symbol: "μ; μm", index: 41 }
m_41.convert = convertDefault(m_41);
const m_42 = { name: "mil; thou", value: "m_42", symbol: "mil", index: 42 }
m_42.convert = convertDefault(m_42);
const m_43 = { name: "mil (Sweden and Norway)", value: "m_43", symbol: "mil", index: 43 }
m_43.convert = convertDefault(m_43);
const m_44 = { name: "mile (geographical)", value: "m_44", index: 44 }
m_44.convert = convertDefault(m_44);
const m_45 = { name: "mile (international)", value: "m_45", symbol: "mi", index: 45 }
m_45.convert = convertDefault(m_45);
const m_46 = { name: "mile (tactical or data)", value: "m_46", index: 46 }
m_46.convert = convertDefault(m_46);
const m_47 = { name: "mile (telegraph)", value: "m_47", symbol: "mi", index: 47 }
m_47.convert = convertDefault(m_47);
const m_48 = { name: "mile (US Survey)", value: "m_48", symbol: "mi", index: 48 }
m_48.convert = convertDefault(m_48);
const n_49 = { name: "nail (cloth)", value: "n_49", index: 49 }
n_49.convert = convertDefault(n_49);
const n_50 = { name: "nanometre", value: "n_50", symbol: "nm", index: 50 }
n_50.convert = convertDefault(n_50);
const n_51 = { name: "nautical league", value: "n_51", symbol: "NL; nl", index: 51 }
n_51.convert = convertDefault(n_51);
const n_52 = { name: "nautical mile (Admiralty)", value: "n_52", symbol: "NM (Adm); nmi (Adm)", index: 52 }
n_52.convert = convertDefault(n_52);
const n_53 = { name: "nautical mile (international)", value: "n_53", symbol: "NM; nmi", index: 53 }
n_53.convert = convertDefault(n_53);
const n_54 = { name: "nautical mile (US pre 1954)", value: "n_54", index: 54 }
n_54.convert = convertDefault(n_54);
const p_55 = { name: "pace", value: "p_55", index: 55 }
p_55.convert = convertDefault(p_55);
const p_56 = { name: "palm", value: "p_56", index: 56 }
p_56.convert = convertDefault(p_56);
const p_57 = { name: "parsec", value: "p_57", symbol: "pc", index: 57 }
p_57.convert = convertDefault(p_57);
const p_58 = { name: "pica", value: "p_58", index: 58 }
p_58.convert = convertDefault(p_58);
const p_59 = { name: "picometre", value: "p_59", symbol: "pm", index: 59 }
p_59.convert = convertDefault(p_59);
const p_60 = { name: "point (American, English)", value: "p_60", symbol: "pt", index: 60 }
p_60.convert = convertDefault(p_60);
const p_61 = { name: "point (Didot; European)", value: "p_61", symbol: "pt", index: 61 }
p_61.convert = convertDefault(p_61);
const p_62 = { name: "point (PostScript)", value: "p_62", symbol: "pt", index: 62 }
p_62.convert = convertDefault(p_62);
const p_63 = { name: "point (TeX)", value: "p_63", symbol: "pt", index: 63 }
p_63.convert = convertDefault(p_63);
const q_64 = { name: "quarter", value: "q_64", index: 64 }
q_64.convert = convertDefault(q_64);
const r_65 = { name: "rod; pole; perch", value: "r_65", symbol: "rd", index: 65 }
r_65.convert = convertDefault(r_65);
const r_66 = { name: "rope (H)", value: "r_66", symbol: "rope", index: 66 }
r_66.convert = convertDefault(r_66);
const s_67 = { name: "shaku (Japan)", value: "s_67", index: 67 }
s_67.convert = convertDefault(s_67);
const s_68 = { name: "span", value: "s_68", index: 68 }
s_68.convert = convertDefault(s_68);
const s_69 = { name: "spat", value: "s_69", index: 69 }
s_69.convert = convertDefault(s_69);
const s_70 = { name: "stick", value: "s_70", index: 70 }
s_70.convert = convertDefault(s_70);
const t_71 = { name: "toise (French, post 1667)", value: "t_71", symbol: "T", index: 71 }
t_71.convert = convertDefault(t_71);
const t_72 = { name: "twip", value: "t_72", symbol: "twp", index: 72 }
t_72.convert = convertDefault(t_72);
const x_73 = { name: "x unit; siegbahn", value: "x_73", symbol: "xu", index: 73 }
x_73.convert = convertDefault(x_73);
const y_74 = { name: "yard (International)", value: "y_74", symbol: "yd", index: 74 }
y_74.convert = convertDefault(y_74);
const y_75 = { name: "yoctometre", value: "y_75", symbol: "ym", index: 75 }
y_75.convert = convertDefault(y_75);
const z_76 = { name: "zeptometre", value: "z_76", symbol: "zm", index: 76 }
z_76.convert = convertDefault(z_76);
const dm = { name: "decimetre", value: "dm", symbol: "dm", index: 77 }
dm.convert = convertDefault(dm);
const km = { name: "kilometre", value: "km", symbol: "km", index: 78 }
km.convert = convertDefault(km);
const mm = { name: "millimetre", value: "mm", symbol: "mm", index: 79 }
mm.convert = convertDefault(mm);
const cm = { name: "centimetre", value: "cm", symbol: "cm", index: 80 }
cm.convert = convertDefault(cm);
const distanceUnit = { a_1, a_2, a_3, b_4, b_5, c_6, c_7, c_8, c_9, c_10, e_11, f_12, f_13, f_14, f_15, f_16, f_17, f_18, f_19, f_20, f_21, f_22, f_23, f_24, f_25, f_26, f_27, h_28, i_29, l_30, l_31, l_32, l_33, l_34, l_35, l_36, l_37, l_38, m_39, m_40, m_41, m_42, m_43, m_44, m_45, m_46, m_47, m_48, n_49, n_50, n_51, n_52, n_53, n_54, p_55, p_56, p_57, p_58, p_59, p_60, p_61, p_62, p_63, q_64, r_65, r_66, s_67, s_68, s_69, s_70, t_71, t_72, x_73, y_74, y_75, z_76,
dm, km, cm, mm }
export default distanceUnit
