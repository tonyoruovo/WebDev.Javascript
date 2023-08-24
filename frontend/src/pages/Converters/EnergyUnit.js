import Decimal from "decimal.js";

const d = (v) => new Decimal(v);
const dp = 10000;//Default precision

const convertDefault = (from) => {
	return (v, t, p) => {
		if(t.value === from.value) return v.toDecimalPlaces(p);
		else if (t.value === "j_31") return d("1").div(j_31.convert(d("1"), from, dp)).mul(v).toDecimalPlaces(p);
		return j_31.convert(from.convert(v, j_31, dp), t, p);
	}
}
const j_31 = { name: "joule (SI unit)", value: "j_31", symbol: "J", index: 0 }
j_31.convert = (v, t, p) => {
	switch(t.value) {
		case "b_1": return d("1").div(d("6.12e9")).mul(v).toDecimalPlaces(p);
		case "B_2": return d("1").div(d("1.0545e3")).mul(v).toDecimalPlaces(p);
		case "B_3": return d("1").div(d("1.05505585262e3")).mul(v).toDecimalPlaces(p);
		case "B_4": return d("1").div(d("1.05587e3")).mul(v).toDecimalPlaces(p);
		case "B_5": return d("1").div(d("1.054350e3")).mul(v).toDecimalPlaces(p);
		case "B_6": return d("1").div(d("1.05967e3")).mul(v).toDecimalPlaces(p);
		case "B_7": return d("1").div(d("1.054804e3")).mul(v).toDecimalPlaces(p);
		case "B_8": return d("1").div(d("1.05468e3")).mul(v).toDecimalPlaces(p);
		case "B_9": return d("1").div(d("1.0546e3")).mul(v).toDecimalPlaces(p);
		case "c_10": return d("1").div(d("4.1868")).mul(v).toDecimalPlaces(p);
		case "c_11": return d("1").div(d("4.19002")).mul(v).toDecimalPlaces(p);
		case "c_12": return d("1").div(d("4.184")).mul(v).toDecimalPlaces(p);
		case "C_13": return d("1").div(d("4184")).mul(v).toDecimalPlaces(p);
		case "c_14": return d("1").div(d("4.2045")).mul(v).toDecimalPlaces(p);
		case "c_15": return d("1").div(d("4.1855")).mul(v).toDecimalPlaces(p);
		case "c_16": return d("1").div(d("4.1819")).mul(v).toDecimalPlaces(p);
		case "C_17": return d("1").div(d("1.899100534716e3")).mul(v).toDecimalPlaces(p);
		case "c_18": return d("1").div(d("0.101325")).mul(v).toDecimalPlaces(p);
		case "c_19": return d("1").div(d("2.8692044809344e3")).mul(v).toDecimalPlaces(p);
		case "c_20": return d("1").div(d("1.05505585262e6")).mul(v).toDecimalPlaces(p);
		case "c_21": return d("1").div(d("77.4685209852288e3")).mul(v).toDecimalPlaces(p);
		case "e_22": return d("1").div(d("1.602176634e-19")).mul(v).toDecimalPlaces(p);
		case "e_23": return d("1").div(d("1e-7")).mul(v).toDecimalPlaces(p);
		case "f_24": return d("1").div(d("1.3558179483314004")).mul(v).toDecimalPlaces(p);
		case "f_25": return d("1").div(d("4.21401100938048e-2")).mul(v).toDecimalPlaces(p);
		case "g_26": return d("1").div(d("460.63256925")).mul(v).toDecimalPlaces(p);
		case "g_27": return d("1").div(d("383.5568490138")).mul(v).toDecimalPlaces(p);
		case "giga_electron": return j_31.convert(d("1").div(d("1000")), kilo_electron, dp).mul(v).toDecimalPlaces(p);
		case "h_28": return j_31.convert(d("1").div(d("2")), r_36, dp).mul(v).toDecimalPlaces(p);
		case "h_29": return d("1").div(d("2.684519537696172792e6")).mul(v).toDecimalPlaces(p);
		case "i_30": return d("1").div(d("0.1129848290276167")).mul(v).toDecimalPlaces(p);
		case "k_32": return d("1").div(d("4.1868e3")).mul(v).toDecimalPlaces(p);
		case "k_33": return d("1").div(d("3.6e6")).mul(v).toDecimalPlaces(p);
		case "kilo_electron": return j_31.convert(d("1").div(d("1000")), e_22, dp).mul(v).toDecimalPlaces(p);
		case "kilo_joule": return d("1").div(d("1e3")).mul(v).toDecimalPlaces(p);
		case "l_34": return d("1").div(d("101.325")).mul(v).toDecimalPlaces(p);
		case "micro_joule": return d("1").div(d("1e-6")).mul(v).toDecimalPlaces(p);
		case "milli_joule": return d("1").div(d("1e-3")).mul(v).toDecimalPlaces(p);
		case "nano_joule": return d("1").div(d("1e-9")).mul(v).toDecimalPlaces(p);
		case "q_35": return d("1").div(d("1.05505585262e18")).mul(v).toDecimalPlaces(p);
		case "r_36": return d("1").div(d("2.179872e-18")).mul(v).toDecimalPlaces(p);
		case "t_37": return d("1").div(d("105.505585262e6")).mul(v).toDecimalPlaces(p);
		case "t_38": return d("1").div(d("105.4804e6")).mul(v).toDecimalPlaces(p);
		case "t_39": return d("1").div(d("4.1868e6")).mul(v).toDecimalPlaces(p);
		case "t_40": return d("1").div(d("29.288e9")).mul(v).toDecimalPlaces(p);
		case "t_41": return d("1").div(d("41.868e9")).mul(v).toDecimalPlaces(p);
		case "t_42": return d("1").div(d("4.184e9")).mul(v).toDecimalPlaces(p);
		case "w_43": return d("1").div(d("3.6e3")).mul(v).toDecimalPlaces(p);
		case "w_44": return d("1").div(d("1e0")).mul(v).toDecimalPlaces(p);
		default: return v.toDecimalPlaces(p);
	}
}
const b_1 = { name: "barrel of oil equivalent", value: "b_1", symbol: "boe", index: 1 }
b_1.convert = convertDefault(b_1);
const B_2 = { name: "British thermal unit (ISO)", value: "B_2", symbol: "BTUISO", index: 2 }
B_2.convert = convertDefault(B_2);
const B_3 = { name: "British thermal unit (International Table)", value: "B_3", symbol: "BTUIT", index: 3 }
B_3.convert = convertDefault(B_3);
const B_4 = { name: "British thermal unit (mean)", value: "B_4", symbol: "BTUmean", index: 4 }
B_4.convert = convertDefault(B_4);
const B_5 = { name: "British thermal unit (thermochemical)", value: "B_5", symbol: "BTUth", index: 5 }
B_5.convert = convertDefault(B_5);
const B_6 = { name: "British thermal unit (39 °F)", value: "B_6", symbol: "BTU39 °F", index: 6 }
B_6.convert = convertDefault(B_6);
const B_7 = { name: "British thermal unit (59 °F)", value: "B_7", symbol: "BTU59 °F", index: 7 }
B_7.convert = convertDefault(B_7);
const B_8 = { name: "British thermal unit (60 °F)", value: "B_8", symbol: "BTU60 °F", index: 8 }
B_8.convert = convertDefault(B_8);
const B_9 = { name: "British thermal unit (63 °F)", value: "B_9", symbol: "BTU63 °F", index: 9 }
B_9.convert = convertDefault(B_9);
const c_10 = { name: "calorie (International Table)", value: "c_10", symbol: "calIT", index: 10 }
c_10.convert = convertDefault(c_10);
const c_11 = { name: "calorie (mean)", value: "c_11", symbol: "calmean", index: 11 }
c_11.convert = convertDefault(c_11);
const c_12 = { name: "calorie (thermochemical)", value: "c_12", symbol: "calth", index: 12 }
c_12.convert = convertDefault(c_12);
const C_13 = { name: "Calorie (US; FDA)", value: "C_13", symbol: "Cal", index: 13 }
C_13.convert = convertDefault(C_13);
const c_14 = { name: "calorie (3.98 °C)", value: "c_14", symbol: "cal3.98 °C", index: 14 }
c_14.convert = convertDefault(c_14);
const c_15 = { name: "calorie (15 °C)", value: "c_15", symbol: "cal15 °C", index: 15 }
c_15.convert = convertDefault(c_15);
const c_16 = { name: "calorie (20 °C)", value: "c_16", symbol: "cal20 °C", index: 16 }
c_16.convert = convertDefault(c_16);
const C_17 = { name: "Celsius heat unit (International Table)", value: "C_17", symbol: "CHUIT", index: 17 }
C_17.convert = convertDefault(C_17);
const c_18 = { name: "cubic centimetre of atmosphere; standard cubic centimetre", value: "c_18", symbol: "cc atm; scc", index: 18 }
c_18.convert = convertDefault(c_18);
const c_19 = { name: "cubic foot of atmosphere; standard cubic foot", value: "c_19", symbol: "cu ft atm; scf", index: 19 }
c_19.convert = convertDefault(c_19);
const c_20 = { name: "cubic foot of natural gas", value: "c_20", index: 20 }
c_20.convert = convertDefault(c_20);
const c_21 = { name: "cubic yard of atmosphere; standard cubic yard", value: "c_21", symbol: "cu yd atm; scy", index: 21 }
c_21.convert = convertDefault(c_21);
const e_22 = { name: "electronvolt", value: "e_22", symbol: "eV", index: 22 }
e_22.convert = convertDefault(e_22);
const e_23 = { name: "erg (CGS unit)", value: "e_23", symbol: "erg", index: 23 }
e_23.convert = convertDefault(e_23);
const f_24 = { name: "foot-pound force", value: "f_24", symbol: "ft lbf", index: 24 }
f_24.convert = convertDefault(f_24);
const f_25 = { name: "foot-poundal", value: "f_25", symbol: "ft pdl", index: 25 }
f_25.convert = convertDefault(f_25);
const g_26 = { name: "gallon-atmosphere (imperial)", value: "g_26", symbol: "imp gal atm", index: 26 }
g_26.convert = convertDefault(g_26);
const g_27 = { name: "gallon-atmosphere (US)", value: "g_27", symbol: "US gal atm", index: 27 }
g_27.convert = convertDefault(g_27);
const h_28 = { name: "hartree, atomic unit of energy", value: "h_28", symbol: "Eh", index: 28 }
h_28.convert = convertDefault(h_28);
const h_29 = { name: "horsepower-hour", value: "h_29", symbol: "hp⋅h", index: 29 }
h_29.convert = convertDefault(h_29);
const i_30 = { name: "inch-pound force", value: "i_30", symbol: "in lbf", index: 30 }
i_30.convert = convertDefault(i_30);
const k_32 = { name: "kilocalorie; large calorie", value: "k_32", symbol: "kcal; Cal", index: 32 }
k_32.convert = convertDefault(k_32);
const k_33 = { name: "kilowatt-hour; Board of Trade Unit", value: "k_33", symbol: "kW⋅h; B.O.T.U.", index: 33 }
k_33.convert = convertDefault(k_33);
const l_34 = { name: "litre-atmosphere", value: "l_34", symbol: "l atm; sl", index: 34 }
l_34.convert = convertDefault(l_34);
const nano_joule = { name: "Nanojoule", value: "nano_joule", symbol: undefined, index: 31 }
nano_joule.convert = convertDefault(nano_joule);
const q_35 = { name: "quad", value: "q_35", index: 35 }
q_35.convert = convertDefault(q_35);
const r_36 = { name: "rydberg", value: "r_36", symbol: "Ry", index: 36 }
r_36.convert = convertDefault(r_36);
const t_37 = { name: "therm (E.C.)", value: "t_37", index: 37 }
t_37.convert = convertDefault(t_37);
const t_38 = { name: "therm (US)", value: "t_38", index: 38 }
t_38.convert = convertDefault(t_38);
const t_39 = { name: "thermie", value: "t_39", symbol: "th", index: 39 }
t_39.convert = convertDefault(t_39);
const t_40 = { name: "tonne of coal equivalent", value: "t_40", symbol: "TCE", index: 40 }
t_40.convert = convertDefault(t_40);
const t_41 = { name: "tonne of oil equivalent", value: "t_41", symbol: "toe", index: 41 }
t_41.convert = convertDefault(t_41);
const t_42 = { name: "ton of TNT", value: "t_42", symbol: "tTNT", index: 42 }
t_42.convert = convertDefault(t_42);
const w_43 = { name: "watt-hour", value: "w_43", symbol: "W⋅h", index: 43 }
w_43.convert = convertDefault(w_43);
const w_44 = { name: "watt-second", value: "w_44", symbol: "W⋅s", index: 44 }
w_44.convert = convertDefault(w_44);
const micro_joule = { name: "Microjoule", value: "micro_joule", symbol: undefined, index: 45 }
micro_joule.convert = convertDefault(micro_joule);
const milli_joule = { name: "Millijoule", value: "milli_joule", symbol: undefined, index: 46 }
milli_joule.convert = convertDefault(milli_joule);
const kilo_joule = { name: "Kilojoule", value: "kilo_joule", symbol: undefined, index: 47 }
kilo_joule.convert = convertDefault(kilo_joule);
const kilo_electron = { name: "Kiloelectronvolt", value: "kilo_electron", symbol: undefined, index: 48 }
kilo_electron.convert = convertDefault(kilo_electron);
const giga_electron = { name: "Gigaelectronvolt", value: "giga_electron", symbol: undefined, index: 49 }
giga_electron.convert = convertDefault(giga_electron);
const energyUnit = { b_1, B_2, B_3, B_4, B_5, B_6, B_7, B_8, B_9, c_10, c_11, c_12, C_13, c_14, c_15, c_16, C_17, c_18, c_19, c_20, c_21, e_22, e_23, f_24, f_25, g_26, g_27, giga_electron, h_28, h_29, i_30, j_31, k_32, k_33, kilo_electron, kilo_joule, l_34, nano_joule, micro_joule, milli_joule, q_35, r_36, t_37, t_38, t_39, t_40, t_41, t_42, w_43, w_44 }
export default energyUnit;
