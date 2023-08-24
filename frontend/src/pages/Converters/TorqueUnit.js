
import Decimal from "decimal.js";

const d = (v) => new Decimal(v);
const dp = 10000;//Default precision

const convertDefault = (from) => {
	return (v, t, p) => {
		if(t.value === from.value) return v.toDecimalPlaces(p);
		else if (t.value === "n_5") return d("1").div(n_5.convert(d("1"), from, dp)).mul(v).toDecimalPlaces(p);
		return n_5.convert(from.convert(v, n_5, dp), t, p);
	}
}

const n_5 = { name: "newton-metre (SI unit)", value: "n_5", symbol: "N⋅m", index: 0 }
n_5.convert = (v, t, p) => {
	switch(t.value) {
		case "p_1": return d("1").div(d("1.3558179483314004")).mul(v).toDecimalPlaces(p);
		case "p_2": return d("1").div(d("4.21401100938048e-2")).mul(v).toDecimalPlaces(p);
		case "p_3": return d("1").div(d("0.1129848290276167")).mul(v).toDecimalPlaces(p);
		case "k_4": return d("1").div(d("9.80665")).mul(v).toDecimalPlaces(p);
		default: return v.toDecimalPlaces(p);
	}
}

const p_1 = { name: "pound-force-foot", value: "p_1", symbol: "lbf⋅ft", index: 1 }
p_1.convert = convertDefault(p_1);
const p_2 = { name: "poundal-ft", value: "p_2", symbol: "pdl⋅ft", index: 2 }
p_2.convert = convertDefault(p_2);
const p_3 = { name: "pound force-inch", value: "p_3", symbol: "lbf⋅in", index: 3 }
p_3.convert = convertDefault(p_3);
const k_4 = { name: "kilogram force-meter", value: "k_4", symbol: "kgf⋅m", index: 4 }
k_4.convert = convertDefault(k_4);
const torqueUnit = { p_1, p_2, p_3, k_4, n_5 }
export default torqueUnit;