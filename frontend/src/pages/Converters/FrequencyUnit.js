import Decimal from "decimal.js";

const d = (v) => new Decimal(v);
const dp = 10000;//Default precision

const convertDefault = (from) => {
	return (v, t, p) => {
		if(t.value === from.value) return v.toDecimalPlaces(p);
		else if (t.value === "h_4") return d("1").div(h_4.convert(d("1"), from, dp)).mul(v).toDecimalPlaces(p);
		return h_4.convert(from.convert(v, h_4, dp), t, p);
	}
}

const h_4 = { name: "hertz (SI unit)", value: "h_4", symbol: "Hz", index: 0 }
h_4.convert = (v, t, p) => {
	switch(t.value) {
		case "a_1": return d("1").div(d("0.0167")).mul(v).toDecimalPlaces(p);
		case "c_2": return d("1").div(d("1")).mul(v).toDecimalPlaces(p);
		case "d_3": return d("1").div(d("1").div(d("360"))).mul(v).toDecimalPlaces(p);
		case "r_5": return d("1").div(d("0.159155")).mul(v).toDecimalPlaces(p);
		case "r_6": return h_4.convert(d("1").div(d("0.104719755")), r_5, dp).mul(v).toDecimalPlaces(p);
		case "mh": return h_4.convert(d("1").div(d("1e-3")), h_4, dp).mul(v).toDecimalPlaces(p);
		case "mch": return h_4.convert(d("1").div(d("1e-3")), mh, dp).mul(v).toDecimalPlaces(p);
		case "nh": return h_4.convert(d("1").div(d("1e-3")), mch, dp).mul(v).toDecimalPlaces(p);
		case "kh": return h_4.convert(d("1").div(d("1000")), h_4, dp).mul(v).toDecimalPlaces(p);
		case "mgh": return h_4.convert(d("1").div(d("1000")), kh, dp).mul(v).toDecimalPlaces(p);
		case "gh": return h_4.convert(d("1").div(d("1000")), mgh, dp).mul(v).toDecimalPlaces(p);
		default: return v.toDecimalPlaces(p);
	}
}

const a_1 = { name: "actions per minute", value: "a_1", symbol: "APM", index: 1 }
a_1.convert = convertDefault(a_1);
const c_2 = { name: "cycle per second", value: "c_2", symbol: "cps", index: 2 }
c_2.convert = convertDefault(c_2);
const d_3 = { name: "degree per second", value: "d_3", symbol: "deg/s", index: 3 }
d_3.convert = convertDefault(d_3);
const r_5 = { name: "radian per second", value: "r_5", symbol: "rad/s", index: 5 }
r_5.convert = convertDefault(r_5);
const r_6 = { name: "revolution per minute", value: "r_6", symbol: "rpm", index: 6 }
r_6.convert = convertDefault(r_6);
const gh = { name: "Gigahertz", value: "gh", symbol: "gHz", index: 4 }
gh.convert = convertDefault(gh);
const kh = { name: "Kilohertz", value: "kh", symbol: "kHz", index: 7 }
kh.convert = convertDefault(kh);
const mgh = { name: "Megahertz", value: "mgh", symbol: "mHz", index: 8 }
mgh.convert = convertDefault(mgh);
const mh = { name: "Millihertz", value: "mh", symbol: undefined, index: 9 }
mh.convert = convertDefault(mh);
const mch = { name: "Microhertz", value: "mch", symbol: "µHz", index: 10 }
mch.convert = convertDefault(mch);
const nh = { name: "Nanohertz", value: "nh", symbol: "nHz", index: 11 }
nh.convert = convertDefault(nh);
const frequencyUnit = { a_1, c_2, d_3, h_4, kh, mgh, mh, mch, nh, r_5, r_6 }
export default frequencyUnit;