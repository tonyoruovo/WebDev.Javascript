
import Decimal from "decimal.js";

const d = (val) => new Decimal(val)
export const pi = () => d("3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066");

const deg = {
	name: "degree",
	value: "deg",
	icon: undefined,
	symbol: undefined,
	index: 0,
	convert: function(value, to, p) {
		switch(to.value) {
		  case "rad":
			return value.mul(pi().div(d("180")));

		  case "grad": {
			return value.mul(d("10").div(d("9")));
		  }

		  case "turn":
			return value.mul(d("1").div(d("360")));

		  case "bdeg":
			return value.mul(d("256").div(d("360")));

		  default:
			return value.toDecimalPlaces(p);
		}
	}
}

const rad = {
	name: "radian",
	value: "rad",
	icon: undefined,
	symbol: undefined,
	index: 1,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "rad":
			return v.toDecimalPlaces(p);
		  case "deg":
			const unit = deg.convert(d("1"), rad, p);
			return d("1").div(unit).mul(v).toDecimalPlaces(p);
		  default:
			let x = rad.convert(v, deg, p);
			return deg.convert(x, to, p);
		}
	}
}

const grad = {
	name: "gradian",
	value: "grad",
	icon: undefined,
	symbol: undefined,
	index: 2,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "grad":
			return v.toDecimalPlaces(p);
		  case "deg":
			const unit = deg.convert(d("1"), grad, p);
			return d("1").div(unit).mul(v).toDecimalPlaces(p);
		  default:
			let x = grad.convert(v, deg, p);
			return deg.convert(x, to, p);
		}
	}
}

const turn = {
	name: "turn",
	value: "turn",
	icon: undefined,
	symbol: undefined,
	index: 3,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "turn":
			return v.toDecimalPlaces(p);
		  case "deg":
			const unit = deg.convert(d("1"), turn, p);
			return d("1").div(unit).mul(v).toDecimalPlaces(p);
		  default:
			let x = turn.convert(v, deg, p);
			return deg.convert(x, to, p);
		}
	}
}

// export function conv(from){

	// return (v, to, p) => {
		// if(from.value === to.value) return v.toDecimalPlaces(p);
		// else if(to.value === "deg")
			// return d("1").div(deg.convert(d("1"), from, p)).mul(v).toDecimalPlaces(p);
		// return deg.convert(from.convert(v, deg, p), to, p);
	// }
// }
		

const bdeg = {
	name: "binary degree",
	value: "bdeg",
	icon: undefined,
	symbol: undefined,
	index: 4,
	convert: function(v, to, p) {
		switch(to.value) {
		  case "bdeg":
			return v.toDecimalPlaces(p);
		  case "deg":
			const unit = deg.convert(d("1"), bdeg, p);
			return d("1").div(unit).mul(v).toDecimalPlaces(p);
		  default:
			let x = bdeg.convert(v, deg, p);
			return deg.convert(x, to, p);
		}
	}
}

const angleUnit = {
deg, rad, grad, turn, bdeg
}

export default angleUnit;
