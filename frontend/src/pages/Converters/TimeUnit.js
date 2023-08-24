
import Decimal from "decimal.js";

const d = (v) => new Decimal(v);
const dp = 10000;//Default precision

const convertDefault = (from) => {
	return (v, t, p) => {
		if(t.value === from.value) return v.toDecimalPlaces(p);
		else if (t.value === "s_27") return d("1").div(s_27.convert(d("1"), from, dp)).mul(v).toDecimalPlaces(p);
		return s_27.convert(from.convert(v, s_27, dp), t, p);
	}
}

const s_27 = { name: "second (SI base unit)", value: "s_27", symbol: "s", index: 0 }
s_27.convert = (v, t, p) => {
	switch(t.value) {
		case "a_1": return d("1").div(d("2.418884254e-17")).mul(v).toDecimalPlaces(p);
		case "C_2": return s_27.convert(d("1").div(d("27759")), d_4, dp).mul(v).toDecimalPlaces(p);
		case "c_3": return s_27.convert(d("1").div(d("100")), y_34, dp).mul(v).toDecimalPlaces(p);
		case "d_4": return s_27.convert(d("1").div(d("24")), h_10, dp).mul(v).toDecimalPlaces(p);
		case "d_5": return  s_27.convert(d("1").div(d("86.1641")), ks, dp).mul(v).toDecimalPlaces(p);
		case "d_6": return s_27.convert(d("1").div(d("10")), y_34, dp).mul(v).toDecimalPlaces(p);
		case "f_7": return s_27.convert(d("1").div(d("2")), w_32, dp).mul(v).toDecimalPlaces(p);
		case "h_8": return d("1").div(d("10").div(d("3"))).mul(v).toDecimalPlaces(p);
		case "H_9": return s_27.convert(d("1").div(d("9.593424")), gs, dp).mul(v).toDecimalPlaces(p);
		case "h_10": return s_27.convert(d("1").div(d("60")), m_19, dp).mul(v).toDecimalPlaces(p);
		case "j_11": return s_27.convert(d("1").div(d("50").div(d("3"))), ms, dp).mul(v).toDecimalPlaces(p);
		case "j_12": return s_27.convert(d("1").div(d("10")), ms, dp).mul(v).toDecimalPlaces(p);
		case "k_13": return d("1").div(d("900")).mul(v).toDecimalPlaces(p);
		case "k_14": return d("1").div(d("864")).mul(v).toDecimalPlaces(p);
		case "l_15": return s_27.convert(d("1").div(d("157")), mgs, dp).mul(v).toDecimalPlaces(p);
		case "M_16": return s_27.convert(d("1").div(d("599.616")), mgs, dp).mul(v).toDecimalPlaces(p);
		case "m_17": return s_27.convert(d("1").div(d("1000")), y_34, dp).mul(v).toDecimalPlaces(p);
		case "m_18": return d("1").div(d("86.4")).mul(v).toDecimalPlaces(p);
		case "m_19": return d("1").div(d("60")).mul(v).toDecimalPlaces(p);
		case "m_20": return d("1").div(d("90")).mul(v).toDecimalPlaces(p);
		case "m_21": return d("1").div(d("2.592e6")).mul(v).toDecimalPlaces(p);
		case "m_22": return s_27.convert(d("1").div(d("30.436875")), d_4, dp).mul(v).toDecimalPlaces(p);
		case "m_23": return s_27.convert(d("1").div(d("29")), d_4, dp).mul(v).toDecimalPlaces(p);
		case "M_24": return s_27.convert(d("1").div(d("2.551")), mgs, dp).mul(v).toDecimalPlaces(p);
		case "o_25": return s_27.convert(d("1").div(d("2922")), d_4, dp).mul(v).toDecimalPlaces(p);
		case "P_26": return d("1").div(d("5.39116e-44")).mul(v).toDecimalPlaces(p);
		case "s_28": return s_27.convert(d("1").div(d("10")), ns, dp).mul(v).toDecimalPlaces(p);
		case "s_29": return s_27.convert(d("1").div(d("10")), mcs, dp).mul(v).toDecimalPlaces(p);
		case "S_30": return s_27.convert(d("1").div(d("533265")), d_4, dp).mul(v).toDecimalPlaces(p);
		case "s_31": return d("1").div(d("1e-13")).mul(v).toDecimalPlaces(p);
		case "w_32": return s_27.convert(d("1").div(d("7")), d_4, dp).mul(v).toDecimalPlaces(p);
		case "y_33": return s_27.convert(d("1").div(d("365")), d_4, dp).mul(v).toDecimalPlaces(p);
		case "y_34": return s_27.convert(d("1").div(d("31.556952")), mgs, dp).mul(v).toDecimalPlaces(p);
		case "y_35": return s_27.convert(d("1").div(d("31.5576")), mgs, dp).mul(v).toDecimalPlaces(p);
		case "y_36": return s_27.convert(d("1").div(d("366")), d_4, dp).mul(v).toDecimalPlaces(p);
		case "y_37": return d("1").div(d("31556925.216")).mul(v).toDecimalPlaces(p);
		case "y_38": return s_27.convert(d("1").div(d("365.256363")), d_4, dp).mul(v).toDecimalPlaces(p);
		case "ms": return d("1").div(d("1e-3")).mul(v).toDecimalPlaces(p);
		case "mcs": return s_27.convert(d("1").div(d("1e-3")), ms, dp).mul(v).toDecimalPlaces(p);
		case "ns": return s_27.convert(d("1").div(d("1e-3")), mcs, dp).mul(v).toDecimalPlaces(p);
		case "ks": return d("1").div(d("1e3")).mul(v).toDecimalPlaces(p);
		case "mgs": return s_27.convert(d("1").div(d("1e3")), ks, dp).mul(v).toDecimalPlaces(p);
		case "gs": return s_27.convert(d("1").div(d("1e3")), mgs, dp).mul(v).toDecimalPlaces(p);
		default: return v.toDecimalPlaces(p);
	}
}


const a_1 = { name: "atomic unit of time", value: "a_1", symbol: "a.u.", index: 1 }
a_1.convert = convertDefault(a_1);
const C_2 = { name: "Callippic cycle", value: "C_2", index: 2 }
C_2.convert = convertDefault(C_2);
const c_3 = { name: "century", value: "c_3", symbol: "c", index: 3 }
c_3.convert = convertDefault(c_3);
const d_4 = { name: "day", value: "d_4", symbol: "d", index: 4 }
d_4.convert = convertDefault(d_4);
const d_5 = { name: "day (sidereal)", value: "d_5", symbol: "d", index: 5 }
d_5.convert = convertDefault(d_5);
const d_6 = { name: "decade", value: "d_6", symbol: "dec", index: 6 }
d_6.convert = convertDefault(d_6);
const f_7 = { name: "fortnight", value: "f_7", symbol: "fn", index: 7 }
f_7.convert = convertDefault(f_7);
const h_8 = { name: "helek", value: "h_8", index: 8 }
h_8.convert = convertDefault(h_8);
const H_9 = { name: "Hipparchic cycle", value: "H_9", index: 9 }
H_9.convert = convertDefault(H_9);
const h_10 = { name: "hour", value: "h_10", symbol: "h", index: 10 }
h_10.convert = convertDefault(h_10);
const j_11 = { name: "jiffy", value: "j_11", symbol: "j", index: 11 }
j_11.convert = convertDefault(j_11);
const j_12 = { name: "jiffy (alternative)", value: "j_12", symbol: "ja", index: 12 }
j_12.convert = convertDefault(j_12);
const k_13 = { name: "kè (quarter of an hour)", value: "k_13", index: 13 }
k_13.convert = convertDefault(k_13);
const k_14 = { name: "kè (traditional)", value: "k_14", index: 14 }
k_14.convert = convertDefault(k_14);
const l_15 = { name: "lustre; lūstrum", value: "l_15", index: 15 }
l_15.convert = convertDefault(l_15);
const M_16 = { name: "Metonic cycle; enneadecaeteris", value: "M_16", index: 16 }
M_16.convert = convertDefault(M_16);
const m_17 = { name: "millennium", value: "m_17", index: 17 }
m_17.convert = convertDefault(m_17);
const m_18 = { name: "milliday", value: "m_18", symbol: "md", index: 18 }
m_18.convert = convertDefault(m_18);
const m_19 = { name: "minute", value: "m_19", symbol: "min", index: 19 }
m_19.convert = convertDefault(m_19);
const m_20 = { name: "moment", value: "m_20", index: 20 }
m_20.convert = convertDefault(m_20);
const m_21 = { name: "month (full)", value: "m_21", symbol: "mo", index: 21 }
m_21.convert = convertDefault(m_21);
const m_22 = { name: "month (Greg. av.)", value: "m_22", symbol: "mo", index: 22 }
m_22.convert = convertDefault(m_22);
const m_23 = { name: "month (hollow)", value: "m_23", symbol: "mo", index: 23 }
m_23.convert = convertDefault(m_23);
const M_24 = { name: "Month (synodic)", value: "M_24", symbol: "mo", index: 24 }
M_24.convert = convertDefault(M_24);
const o_25 = { name: "octaeteris", value: "o_25", index: 25 }
o_25.convert = convertDefault(o_25);
const P_26 = { name: "Planck time", value: "P_26", index: 26 }
P_26.convert = convertDefault(P_26);
const s_28 = { name: "shake", value: "s_28", index: 28 }
s_28.convert = convertDefault(s_28);
const s_29 = { name: "sigma", value: "s_29", index: 29 }
s_29.convert = convertDefault(s_29);
const S_30 = { name: "Sothic cycle", value: "S_30", index: 30 }
S_30.convert = convertDefault(S_30);
const s_31 = { name: "svedberg", value: "s_31", symbol: "S", index: 31 }
s_31.convert = convertDefault(s_31);
const w_32 = { name: "week", value: "w_32", symbol: "wk", index: 32 }
w_32.convert = convertDefault(w_32);
const y_33 = { name: "year (common)", value: "y_33", symbol: "a, y, or yr", index: 33 }
y_33.convert = convertDefault(y_33);
const y_34 = { name: "year (Gregorian)", value: "y_34", symbol: "a, y, or yr", index: 34 }
y_34.convert = convertDefault(y_34);
const y_35 = { name: "year (Julian)", value: "y_35", symbol: "a, y, or yr", index: 35 }
y_35.convert = convertDefault(y_35);
const y_36 = { name: "year (leap)", value: "y_36", symbol: "a, y, or yr", index: 36 }
y_36.convert = convertDefault(y_36);
const y_37 = { name: "year (mean tropical)", value: "y_37", symbol: "a, y, or yr", index: 37 }
y_37.convert = convertDefault(y_37);
const y_38 = { name: "year (sidereal)", value: "y_38", symbol: "a, y, or yr", index: 38 }
y_38.convert = convertDefault(y_38);
const ms = { name: "Millisecond", value: "ms", symbol: "ms", index: 27 }
ms.convert = convertDefault(ms);
const mcs = { name: "Microsecond", value: "mcs", symbol: "µs", index: 39 }
mcs.convert = convertDefault(mcs);
const ns = { name: "Nanosecond", value: "ns", symbol: "ns", index: 40 }
ns.convert = convertDefault(ns);
const ks = { name: "Kilosecond", value: "ks", symbol: "ks", index: 41 }
ks.convert = convertDefault(ks);
const mgs = { name: "Megasecond", value: "mgs", symbol: "Ms", index: 42 }
mgs.convert = convertDefault(mgs);
const gs = { name: "Gigasecond", value: "gs", symbol: "Gs", index: 43 }
gs.convert = convertDefault(gs);
const timeUnit = { a_1, C_2, c_3, d_4, d_5, d_6, f_7, gs, h_8, H_9, h_10, j_11, j_12, k_13, k_14, ks, l_15, mgs, M_16, mcs, m_17, m_18, ms, m_19, m_20, m_21, m_22, m_23, M_24, ns, o_25, P_26, s_27, s_28, s_29, S_30, s_31, w_32, y_33, y_34, y_35, y_36, y_37, y_38 }
export default timeUnit;