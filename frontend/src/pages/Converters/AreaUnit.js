
import Decimal from "decimal.js";
import { pi } from "./AngleUnit";

const d = (val) => new Decimal(val)
const dp = 10000;// default precision

const sqMeter = {
	name: "square meter",
	value: "sqMeter",
	icon: undefined,
	symbol: undefined,
	index: 0,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "acre": return sqMeter.convert(d("1").div(d("4840")), sqYard, dp).mul(v).toDecimalPlaces(p);
		  case "acre_u": return sqMeter.convert(d("1").div(d("43560")), sqFoot, dp).mul(v).toDecimalPlaces(p);
		  case "are": return d("1").div(d("100")).mul(v).toDecimalPlaces(p);
		  case "barn": return d("1").div(d("1e-28")).mul(v).toDecimalPlaces(p);
		  case "barony": return sqMeter.convert(d("1").div(d("4000")), acre, dp).mul(v).toDecimalPlaces(p);
		  case "board": return d("1").div(d("7.74192e-3")).mul(v).toDecimalPlaces(p);
		  case "cirInch": return sqMeter.convert(d("1").div(pi().div(d("4"))), sqInch, dp).mul(v).toDecimalPlaces(p);
		  case "cirMil": return sqMeter.convert(d("1").div(pi().div(d("4"))), sqMil, dp).mul(v).toDecimalPlaces(p);
		  case "cord": return sqMeter.convert(d("1").div(d("192")), board, dp).mul(v).toDecimalPlaces(p);
		  case "cuerda": return sqMeter.convert(d("1").div(d("0.971222")), acre, dp).mul(v).toDecimalPlaces(p);
		  case "durnam": return d("1").div(d("1000")).mul(v).toDecimalPlaces(p);
		  case "hectare": return d("1").div(d("10000")).mul(v).toDecimalPlaces(p);
		  case "rood": return sqMeter.convert(d("1").div(d("0.25")), acre, dp).mul(v).toDecimalPlaces(p);
		  case "ping": return d("1").div(d("3.306")).mul(v).toDecimalPlaces(p);
		  case "section": return d("1").div(d("2.589988110336e6")).mul(v).toDecimalPlaces(p);
		  case "shed": return d("1").div(d("1e-52")).mul(v).toDecimalPlaces(p);
		  case "sq": return d("1").div(d("9.290304")).mul(v).toDecimalPlaces(p);
		  case "sqCh": return sqMeter.convert(d("1").div(d("0.1")), acre, dp).mul(v).toDecimalPlaces(p);
		  case "sqCh_u": return sqMeter.convert(d("1").div(d("0.1")), acre_u, dp).mul(v).toDecimalPlaces(p);
		  case "sqFoot": return d("1").div(d("9.290304e-2")).mul(v).toDecimalPlaces(p);
		  case "sqFoot_u": return d("1").div(d("9.2903011613275e-2")).mul(v).toDecimalPlaces(p);
		  case "sqInch": return d("1").div(d("6.4516e-4")).mul(v).toDecimalPlaces(p);
		  case "sqKm": return d("1").div(d("1e6")).mul(v).toDecimalPlaces(p);
		  case "sqLk": return d("1").div(d("4.0468564224e-2")).mul(v).toDecimalPlaces(p);
		  case "sqLk_u": return d("1").div(d("4.046872e-2")).mul(v).toDecimalPlaces(p);
		  case "sqLk_r": return d("1").div(d("0.09290304")).mul(v).toDecimalPlaces(p);
		  case "sqMil": return d("1").div(d("6.4516e-10")).mul(v).toDecimalPlaces(p);
		  case "sqM": return d("1").div(d("2.589988110336e6")).mul(v).toDecimalPlaces(p);
		  case "sqM_u": return d("1").div(d("2.58998847e6")).mul(v).toDecimalPlaces(p);
		  case "sqRd": return d("1").div(d("25.29285264")).mul(v).toDecimalPlaces(p);
		  case "sqYard": return d("1").div(d("0.83612736")).mul(v).toDecimalPlaces(p);
		  case "stremma": return d("1").div(d("1000")).mul(v).toDecimalPlaces(p);
		  case "township": return sqMeter.convert(d("1").div(d("36")), sqM_u, dp).mul(v).toDecimalPlaces(p);
		  case "yardland": return sqMeter.convert(d("1").div(d("30")), acre, dp).mul(v).toDecimalPlaces(p);
		  default:
			return v.toDecimalPlaces(p);
		}
	}
}

const acre = {
	name: "acre (International)",
	value: "acre",
	icon: undefined,
	symbol: "ac",
	index: 1,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "acre":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), acre, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(acre.convert(v, sqMeter, dp), to, p);
		}
	}
}

const acre_u = {
	name: "acre (US Survey)",
	value: "acre_u",
	icon: undefined,
	symbol: "ac",
	index: 2,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "acre_u":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), acre_u, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(acre_u.convert(v, sqMeter, dp), to, p);
		}
	}
}

const are = {
	name: "are",
	value: "are",
	icon: undefined,
	symbol: 'a',
	index: 3,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "are":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), are, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(are.convert(v, sqMeter, dp), to, p);
		}
	}
}

const barn = {
	name: "barn",
	value: "barn",
	icon: undefined,
	symbol: 'b',
	index: 4,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "barn":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), barn, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(barn.convert(v, sqMeter, dp), to, p);
		}
	}
}

const barony = {
	name: "barony",
	value: "barony",
	icon: undefined,
	symbol: undefined,
	index: 5,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "barony":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), barony, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(barony.convert(v, sqMeter, dp), to, p);
		}
	}
}

const board = {
	name: "board",
	value: "board",
	icon: undefined,
	symbol: 'bd',
	index: 6,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "board":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), board, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(board.convert(v, sqMeter, dp), to, p);
		}
	}
}

const cirInch = {
	name: "circular inch",
	value: "cirInch",
	icon: undefined,
	symbol: 'circ in',
	index: 7,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "cirInch":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), cirInch, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(cirInch.convert(v, sqMeter, dp), to, p);
		}
	}
}

const cirMil = {
	name: "circular mil|circular thou",
	value: "cirMil",
	icon: undefined,
	symbol: 'circ mil',
	index: 8,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "cirMil":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), cirMil, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(cirMil.convert(v, sqMeter, dp), to, p);
		}
	}
}

const cord = {
	name: "cord",
	value: "cord",
	icon: undefined,
	symbol: undefined,
	index: 9,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "cord":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), cord, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(cord.convert(v, sqMeter, dp), to, p);
		}
	}
}

const cuerda = {
	name: "cuerda (PR Survey)",
	value: "cuerda",
	icon: undefined,
	symbol: "cda",
	index: 10,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "cuerda":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), cuerda, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(cuerda.convert(v, sqMeter, dp), to, p);
		}
	}
}

const durnam = {
	name: "durnam",
	value: "durnam",
	icon: undefined,
	symbol: undefined,
	index: 11,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "durnam":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), durnam, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(durnam.convert(v, sqMeter, dp), to, p);
		}
	}
}

const hectare = {
	name: "hectare",
	value: "hectare",
	icon: undefined,
	symbol: "ha",
	index: 12,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "hectare":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), hectare, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(hectare.convert(v, sqMeter, dp), to, p);
		}
	}
}

const rood = {
	name: "rood",
	value: "rood",
	icon: undefined,
	symbol: "ro",
	index: 13,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "rood":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), rood, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(rood.convert(v, sqMeter, dp), to, p);
		}
	}
}

const ping = {
	name: "ping",
	value: "ping",
	icon: undefined,
	symbol: undefined,
	index: 14,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "ping":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), ping, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(ping.convert(v, sqMeter, dp), to, p);
		}
	}
}

const section = {
	name: "section",
	value: "section",
	icon: undefined,
	symbol: undefined,
	index: 15,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "section":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), section, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(section.convert(v, sqMeter, dp), to, p);
		}
	}
}

const shed = {
	name: "shed",
	value: "shed",
	icon: undefined,
	symbol: undefined,
	index: 16,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "shed":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), shed, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(shed.convert(v, sqMeter, dp), to, p);
		}
	}
}

const sq = {
	name: "square (Roofing)",
	value: "sq",
	icon: undefined,
	symbol: undefined,
	index: 17,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "sq":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), sq, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(sq.convert(v, sqMeter, dp), to, p);
		}
	}
}

const sqCh = {
	name: "square chain",
	value: "sqCh",
	icon: undefined,
	symbol: undefined,
	index: 18,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "sqCh":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), sqCh, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(sqCh.convert(v, sqMeter, dp), to, p);
		}
	}
}

const sqCh_u = {
	name: "square chain (US Survey)",
	value: "sqCh_u",
	icon: undefined,
	symbol: undefined,
	index: 19,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "sqCh_u":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), sqCh_u, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(sqCh_u.convert(v, sqMeter, dp), to, p);
		}
	}
}

const sqFoot = {
	name: "square foot",
	value: "sqFoot",
	icon: undefined,
	symbol: undefined,
	index: 20,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "sqFoot":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), sqFoot, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(sqFoot.convert(v, sqMeter, dp), to, p);
		}
	}
}

const sqFoot_u = {
	name: "square foot (US Survey)",
	value: "sqFoot_u",
	icon: undefined,
	symbol: undefined,
	index: 21,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "sqFoot_u":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), sqFoot_u, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(sqFoot_u.convert(v, sqMeter, dp), to, p);
		}
	}
}

const sqInch = {
	name: "square inch",
	value: "sqInch",
	icon: undefined,
	symbol: undefined,
	index: 22,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "sqInch":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), sqInch, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(sqInch.convert(v, sqMeter, dp), to, p);
		}
	}
}

const sqKm = {
	name: "square kilometer",
	value: "sqKm",
	icon: undefined,
	symbol: undefined,
	index: 23,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "sqKm":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), sqKm, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(sqKm.convert(v, sqMeter, dp), to, p);
		}
	}
}

const sqLk = {
	name: "square link (Gunter's)",
	value: "sqLk",
	icon: undefined,
	symbol: undefined,
	index: 24,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "sqLk":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), sqLk, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(sqLk.convert(v, sqMeter, dp), to, p);
		}
	}
}

const sqLk_u = {
	name: "square link (Gunter's, US Survey)",
	value: "sqLk_u",
	icon: undefined,
	symbol: undefined,
	index: 25,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "sqLk_u":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), sqLk_u, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(sqLk_u.convert(v, sqMeter, dp), to, p);
		}
	}
}

const sqLk_r = {
	name: "square link (Ramsden's)",
	value: "sqLk_r",
	icon: undefined,
	symbol: undefined,
	index: 25,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "sqLk_r":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), sqLk_r, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(sqLk_r.convert(v, sqMeter, dp), to, p);
		}
	}
}

const sqMil = {
	name: "square mil|square thou",
	value: "sqMil",
	icon: undefined,
	symbol: undefined,
	index: 26,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "sqMil":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), sqMil, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(sqMil.convert(v, sqMeter, dp), to, p);
		}
	}
}

const sqM = {
	name: "square mile",
	value: "sqM",
	icon: undefined,
	symbol: undefined,
	index: 27,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "sqM":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), sqM, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(sqM.convert(v, sqMeter, dp), to, p);
		}
	}
}

const sqM_u = {
	name: "square mile (US Survey)",
	value: "sqM_u",
	icon: undefined,
	symbol: undefined,
	index: 28,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "sqM_u":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), sqM_u, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(sqM_u.convert(v, sqMeter, dp), to, p);
		}
	}
}

const sqRd = {
	name: "square rod|pole|perch",
	value: "sqRd",
	icon: undefined,
	symbol: undefined,
	index: 29,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "sqRd":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), sqRd, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(sqRd.convert(v, sqMeter, dp), to, p);
		}
	}
}

const sqYard = {
	name: "square yard (International)",
	value: "sqYard",
	icon: undefined,
	symbol: undefined,
	index: 30,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "sqYard":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), sqYard, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(sqYard.convert(v, sqMeter, dp), to, p);
		}
	}
}

const stremma = {
	name: "stremma",
	value: "stremma",
	icon: undefined,
	symbol: undefined,
	index: 31,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "stremma":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), stremma, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(stremma.convert(v, sqMeter, dp), to, p);
		}
	}
}

const township = {
	name: "township",
	value: "township",
	icon: undefined,
	symbol: undefined,
	index: 32,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "township":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), township, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(township.convert(v, sqMeter, dp), to, p);
		}
	}
}

const yardland = {
	name: "yardland",
	value: "yardland",
	icon: undefined,
	symbol: undefined,
	index: 33,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "yardland":
			return v.toDecimalPlaces(p);

		  case "sqMeter": return d("1").div(sqMeter.convert(d("1"), yardland, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return sqMeter.convert(yardland.convert(v, sqMeter, dp), to, p);
		}
	}
}

const areaUnit = {
	acre, acre_u, are, barn, barony, board, cirInch, cirMil, cord, cuerda,
	durnam, hectare, rood, ping, section, shed, sq, sqCh, sqCh_u, sqFoot, sqFoot_u,
	sqInch, sqKm, sqLk, sqLk_u, sqLk_r, sqMeter, sqM, sqM_u, sqMil, sqRd, sqYard, stremma, township, yardland
}

export default areaUnit;
