import Decimal from "decimal.js";

const d = (val) => new Decimal(val);
const dp = 10000;// default precision

const bit = {
	name: "bit",
	value: "bit",
	icon: undefined,
	symbol: "bit",
	index: 0,
	convert: function(v, t, p) {
		switch(t.value) {
			case "byte": return d("1").div(d("8")).mul(v).toDecimalPlaces(p);
			case "kb": return bit.convert(d("1").div(d("1000")), byte, dp).mul(v).toDecimalPlaces(p);
			case "kib": return bit.convert(d("1").div(d("1024")), byte, dp).mul(v).toDecimalPlaces(p);
			case "kbi": return d("1").div(d("1000")).mul(v).toDecimalPlaces(p);
			case "kibi": return d("1").div(d("1024")).mul(v).toDecimalPlaces(p);
			case "mb": return bit.convert(d("1").div(d("1000")), kb, dp).mul(v).toDecimalPlaces(p);
			case "mib": return bit.convert(d("1").div(d("1024")), kib, dp).mul(v).toDecimalPlaces(p);
			case "mbi": return bit.convert(d("1").div(d("1000")), kbi, dp).mul(v).toDecimalPlaces(p);
			case "mibi": return bit.convert(d("1").div(d("1024")), kibi, dp).mul(v).toDecimalPlaces(p);
			case "gb": return bit.convert(d("1").div(d("1000")), mb, dp).mul(v).toDecimalPlaces(p);
			case "gib": return bit.convert(d("1").div(d("1024")), mib, dp).mul(v).toDecimalPlaces(p);
			case "gbi": return bit.convert(d("1").div(d("1000")), mbi, dp).mul(v).toDecimalPlaces(p);
			case "gibi": return bit.convert(d("1").div(d("1024")), mibi, dp).mul(v).toDecimalPlaces(p);
			case "tb": return bit.convert(d("1").div(d("1000")), gb, dp).mul(v).toDecimalPlaces(p);
			case "tib": return bit.convert(d("1").div(d("1024")), gib, dp).mul(v).toDecimalPlaces(p);
			case "tbi": return bit.convert(d("1").div(d("1000")), gbi, dp).mul(v).toDecimalPlaces(p);
			case "tibi": return bit.convert(d("1").div(d("1024")), gibi, dp).mul(v).toDecimalPlaces(p);
			case "pb": return bit.convert(d("1").div(d("1000")), tb, dp).mul(v).toDecimalPlaces(p);
			case "pib": return bit.convert(d("1").div(d("1024")), tib, dp).mul(v).toDecimalPlaces(p);
			case "pbi": return bit.convert(d("1").div(d("1000")), tbi, dp).mul(v).toDecimalPlaces(p);
			case "pibi": return bit.convert(d("1").div(d("1024")), tibi, dp).mul(v).toDecimalPlaces(p);
			case "eb": return bit.convert(d("1").div(d("1000")), pb, dp).mul(v).toDecimalPlaces(p);
			case "eib": return bit.convert(d("1").div(d("1024")), pib, dp).mul(v).toDecimalPlaces(p);
			case "ebi": return bit.convert(d("1").div(d("1000")), pbi, dp).mul(v).toDecimalPlaces(p);
			case "eibi": return bit.convert(d("1").div(d("1024")), pibi, dp).mul(v).toDecimalPlaces(p);
			case "zb": return bit.convert(d("1").div(d("1000")), eb, dp).mul(v).toDecimalPlaces(p);
			case "zib": return bit.convert(d("1").div(d("1024")), eib, dp).mul(v).toDecimalPlaces(p);
			case "zbi": return bit.convert(d("1").div(d("1000")), ebi, dp).mul(v).toDecimalPlaces(p);
			case "zibi": return bit.convert(d("1").div(d("1024")), eibi, dp).mul(v).toDecimalPlaces(p);
			case "yb": return bit.convert(d("1").div(d("1000")), zb, dp).mul(v).toDecimalPlaces(p);
			case "yib": return bit.convert(d("1").div(d("1024")), zib, dp).mul(v).toDecimalPlaces(p);
			case "ybi": return bit.convert(d("1").div(d("1000")), zbi, dp).mul(v).toDecimalPlaces(p);
			case "yibi": return bit.convert(d("1").div(d("1024")), zibi, dp).mul(v).toDecimalPlaces(p);
			case "nibble": return d("1").div(d("4")).mul(v).toDecimalPlaces(p);
			default: return v.toDecimalPlaces(p);
		}
	}
}

const byte = {
	name: "byte",
	value: "byte",
	icon: undefined,
	symbol: "B",
	index: 1,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "byte":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), byte, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(byte.convert(v, bit, dp), to, p);
		}
	}
}

const kb = {
	name: "kilobyte",
	value: "kb",
	icon: undefined,
	symbol: "kB",
	index: 2,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "kb":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), kb, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(kb.convert(v, bit, dp), to, p);
		}
	}
}

const kib = {
	name: "kibibyte",
	value: "kib",
	icon: undefined,
	symbol: "KiB",
	index: 3,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "kib":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), kib, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(kib.convert(v, bit, dp), to, p);
		}
	}
}

const kbi = {
	name: "kilobit",
	value: "kbi",
	icon: undefined,
	symbol: "Kbit",
	index: 4,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "kbi":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), kbi, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(kbi.convert(v, bit, dp), to, p);
		}
	}
}


const kibi = {
	name: "kibibit",
	value: "kibi",
	icon: undefined,
	symbol: "Kibit",
	index: 5,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "kibi":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), kibi, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(kibi.convert(v, bit, dp), to, p);
		}
	}
}

const mb = {
	name: "megabyte",
	value: "mb",
	icon: undefined,
	symbol: "MB",
	index: 6,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "mb":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), mb, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(mb.convert(v, bit, dp), to, p);
		}
	}
}

const mib = {
	name: "mebibyte",
	value: "mib",
	icon: undefined,
	symbol: "MiB",
	index: 7,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "mib":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), mib, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(mib.convert(v, bit, dp), to, p);
		}
	}
}

const mbi = {
	name: "megabit",
	value: "mbi",
	icon: undefined,
	symbol: "Mbit",
	index: 8,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "mbi":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), mbi, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(mbi.convert(v, bit, dp), to, p);
		}
	}
}

const mibi = {
	name: "mebibit",
	value: "mibi",
	icon: undefined,
	symbol: "Mibit",
	index: 9,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "mibi":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), mibi, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(mibi.convert(v, bit, dp), to, p);
		}
	}
}

const gb = {
	name: "gigabyte",
	value: "gb",
	icon: undefined,
	symbol: "GB",
	index: 10,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "gb":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), gb, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(gb.convert(v, bit, dp), to, p);
		}
	}
}

const gib = {
	name: "gibibyte",
	value: "gib",
	icon: undefined,
	symbol: "GiB",
	index: 11,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "gib":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), gib, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(gib.convert(v, bit, dp), to, p);
		}
	}
}

const gbi = {
	name: "gigabit",
	value: "gbi",
	icon: undefined,
	symbol: "Gbit",
	index: 12,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "gbi":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), gbi, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(gbi.convert(v, bit, dp), to, p);
		}
	}
}

const gibi = {
	name: "gibibit",
	value: "gibi",
	icon: undefined,
	symbol: "Gibit",
	index: 13,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "gibi":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), gibi, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(gibi.convert(v, bit, dp), to, p);
		}
	}
}

const tb = {
	name: "terabyte",
	value: "tb",
	icon: undefined,
	symbol: "TB",
	index: 14,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "tb":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), tb, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(tb.convert(v, bit, dp), to, p);
		}
	}
}

const tib = {
	name: "tebibyte",
	value: "tib",
	icon: undefined,
	symbol: "TiB",
	index: 15,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "tib":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), tib, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(tib.convert(v, bit, dp), to, p);
		}
	}
}

const tbi = {
	name: "terabit",
	value: "tbi",
	icon: undefined,
	symbol: "Tbit",
	index: 16,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "tbi":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), tbi, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(tbi.convert(v, bit, dp), to, p);
		}
	}
}

const tibi = {
	name: "tebibit",
	value: "tibi",
	icon: undefined,
	symbol: "Tibit",
	index: 17,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "tibi":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), tibi, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(tibi.convert(v, bit, dp), to, p);
		}
	}
}

const pb = {
	name: "petabyte",
	value: "pb",
	icon: undefined,
	symbol: "PB",
	index: 18,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "pb":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), pb, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(pb.convert(v, bit, dp), to, p);
		}
	}
}

const pib = {
	name: "pebibyte",
	value: "pib",
	icon: undefined,
	symbol: "PiB",
	index: 19,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "pib":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), pib, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(pib.convert(v, bit, dp), to, p);
		}
	}
}

const pbi = {
	name: "petabit",
	value: "pbi",
	icon: undefined,
	symbol: "Pbit",
	index: 20,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "pbi":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), pbi, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(pbi.convert(v, bit, dp), to, p);
		}
	}
}

const pibi = {
	name: "pebibit",
	value: "pibi",
	icon: undefined,
	symbol: "Pibit",
	index: 21,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "pibi":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), pibi, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(pibi.convert(v, bit, dp), to, p);
		}
	}
}

const eb = {
	name: "exabyte",
	value: "eb",
	icon: undefined,
	symbol: "EB",
	index: 22,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "eb":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), eb, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(eb.convert(v, bit, dp), to, p);
		}
	}
}

const eib = {
	name: "exbibyte",
	value: "eib",
	icon: undefined,
	symbol: "EiB",
	index: 23,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "eib":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), eib, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(eib.convert(v, bit, dp), to, p);
		}
	}
}

const ebi = {
	name: "exabit",
	value: "ebi",
	icon: undefined,
	symbol: "Ebit",
	index: 24,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "ebi":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), ebi, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(ebi.convert(v, bit, dp), to, p);
		}
	}
}

const eibi = {
	name: "exbibit",
	value: "eibi",
	icon: undefined,
	symbol: "Eibit",
	index: 25,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "eibi":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), eibi, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(eibi.convert(v, bit, dp), to, p);
		}
	}
}

const zb = {
	name: "zettabyte",
	value: "zb",
	icon: undefined,
	symbol: "ZB",
	index: 26,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "zb":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), zb, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(zb.convert(v, bit, dp), to, p);
		}
	}
}

const zib = {
	name: "zebibyte",
	value: "zib",
	icon: undefined,
	symbol: "ZiB",
	index: 27,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "zib":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), zib, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(zib.convert(v, bit, dp), to, p);
		}
	}
}

const zbi = {
	name: "zettabit",
	value: "zbi",
	icon: undefined,
	symbol: "Zbit",
	index: 28,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "zbi":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), zbi, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(zbi.convert(v, bit, dp), to, p);
		}
	}
}

const zibi = {
	name: "zebibit",
	value: "zibi",
	icon: undefined,
	symbol: "Zibit",
	index: 29,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "zibi":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), zibi, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(zibi.convert(v, bit, dp), to, p);
		}
	}
}

const yb = {
	name: "yottabyte",
	value: "yb",
	icon: undefined,
	symbol: "YB",
	index: 30,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "yb":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), yb, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(yb.convert(v, bit, dp), to, p);
		}
	}
}

const yib = {
	name: "yobibyte",
	value: "yib",
	icon: undefined,
	symbol: "YiB",
	index: 31,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "yib":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), yib, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(yib.convert(v, bit, dp), to, p);
		}
	}
}

const ybi = {
	name: "yottabit",
	value: "ybi",
	icon: undefined,
	symbol: "Ybit",
	index: 32,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "ybi":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), ybi, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(ybi.convert(v, bit, dp), to, p);
		}
	}
}

const yibi = {
	name: "yobibit",
	value: "yibi",
	icon: undefined,
	symbol: "Zibit",
	index: 33,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "yibi":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), yibi, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(yibi.convert(v, bit, dp), to, p);
		}
	}
}

const nibble = {
	name: "nibble",
	value: "nibble",
	icon: undefined,
	symbol: undefined,
	index: 34,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "nibble":
			return v.toDecimalPlaces(p);

		  case "bit": return d("1").div(bit.convert(d("1"), nibble, dp)).mul(v).toDecimalPlaces(p);

		  default:
			return bit.convert(nibble.convert(v, bit, dp), to, p);
		}
	}
}

const dataUnit = {
	bit, byte, kb, kib, kbi, kibi, mb, mib, mbi, mibi, gb, gib, gbi, gibi,
	tb, tib, tbi, tibi, pb, pib, pbi, pibi, eb, eib, ebi, eibi, zb, zib,
	zbi, zibi, yb, yib, ybi, yibi, nibble
}

export default dataUnit;
