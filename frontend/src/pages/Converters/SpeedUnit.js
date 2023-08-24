import Decimal from "decimal.js";

const d = (v) => new Decimal(v);
const dp = 10000;//Default precision

const convertDefault = (from) => {
	return (v, t, p) => {
		if(t.value === from.value) return v.toDecimalPlaces(p);
		else if (t.value === "m_12") return d("1").div(m_12.convert(d("1"), from, dp)).mul(v).toDecimalPlaces(p);
		return m_12.convert(from.convert(v, m_12, dp), t, p);
	}
}

const m_12 = { name: "metre per second (SI unit)", value: "m_12", symbol: "m/s", index: 0 }
m_12.convert = (v, t, p) => {
	switch(t.value) {
		case "f_1": return d("1").div(d("13").div(d("150000"))).mul(v).toDecimalPlaces(p);
		case "f_2": return d("1").div(d("5.08e-3")).mul(v).toDecimalPlaces(p);
		case "f_3": return d("1").div(d("3.048e-1")).mul(v).toDecimalPlaces(p);
		case "f_4": return d("1").div(d("1.663095e-4")).mul(v).toDecimalPlaces(p);
		case "i_5": return d("1").div(d("127").div(d("18000000"))).mul(v).toDecimalPlaces(p);
		case "i_6": return d("1").div(d("127").div(d("300000"))).mul(v).toDecimalPlaces(p);
		case "i_7": return d("1").div(d("2.54e-2")).mul(v).toDecimalPlaces(p);
		case "k_8": return d("1").div(d("1").div(d("36"))).mul(v).toDecimalPlaces(p);
		case "k_9": return d("1").div(d("463").div(d("900"))).mul(v).toDecimalPlaces(p);
		case "k_10": return d("1").div(d("4826").div(d("9375"))).mul(v).toDecimalPlaces(p);
		case "m_13": return d("1").div(d("0.44704")).mul(v).toDecimalPlaces(p);
		case "m_14": return d("1").div(d("26.8224")).mul(v).toDecimalPlaces(p);
		case "m_15": return d("1").div(d("1609.344")).mul(v).toDecimalPlaces(p);
		case "s_16": return d("1").div(d("299792458")).mul(v).toDecimalPlaces(p);
		case "s_17": return d("1").div(d("317.5")).mul(v).toDecimalPlaces(p);
		default: return v.toDecimalPlaces(p);
	}
}

const f_1 = { name: "foot per hour", value: "f_1", symbol: "fph", index: 1 }
f_1.convert = convertDefault(f_1);
const f_2 = { name: "foot per minute", value: "f_2", symbol: "fpm", index: 2 }
f_2.convert = convertDefault(f_2);
const f_3 = { name: "foot per second", value: "f_3", symbol: "fps", index: 3 }
f_3.convert = convertDefault(f_3);
const f_4 = { name: "furlong per fortnight", value: "f_4", index: 4 }
f_4.convert = convertDefault(f_4);
const i_5 = { name: "inch per hour", value: "i_5", symbol: "iph", index: 5 }
i_5.convert = convertDefault(i_5);
const i_6 = { name: "inch per minute", value: "i_6", symbol: "ipm", index: 6 }
i_6.convert = convertDefault(i_6);
const i_7 = { name: "inch per second", value: "i_7", symbol: "ips", index: 7 }
i_7.convert = convertDefault(i_7);
const k_8 = { name: "kilometre per hour", value: "k_8", symbol: "km/h", index: 8 }
k_8.convert = convertDefault(k_8);
const k_9 = { name: "knot", value: "k_9", symbol: "kn", index: 9 }
k_9.convert = convertDefault(k_9);
const k_10 = { name: "knot (Admiralty)", value: "k_10", symbol: "kn", index: 10 }
k_10.convert = convertDefault(k_10);
const m_13 = { name: "mile per hour", value: "m_13", symbol: "mph", index: 13 }
m_13.convert = convertDefault(m_13);
const m_14 = { name: "mile per minute", value: "m_14", symbol: "mpm", index: 14 }
m_14.convert = convertDefault(m_14);
const m_15 = { name: "mile per second", value: "m_15", symbol: "mps", index: 15 }
m_15.convert = convertDefault(m_15);
const s_16 = { name: "speed of light in vacuum", value: "s_16", symbol: "c", index: 16 }
s_16.convert = convertDefault(s_16);
const s_17 = { name: "speed of sound in air", value: "s_17", symbol: "s", index: 17 }
s_17.convert = convertDefault(s_17);
const speedUnit = { f_1, f_2, f_3, f_4, i_5, i_6, i_7, k_8, k_9, k_10, m_12, m_13, m_14, m_15, s_16, s_17 }
export default speedUnit;