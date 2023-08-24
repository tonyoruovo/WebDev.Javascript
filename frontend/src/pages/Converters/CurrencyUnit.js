import Decimal from "decimal.js";

const d = (val) => new Decimal(val);
const url =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json";
const updateData = (url) => {
  fetch(url)
    .then((res) => res.text())
    .then((t) => {
      sessionStorage.setItem("lastUpdated", new Date().toString());
      sessionStorage.setItem("currencyData", t);
    })
    .catch((err) => console.log(err));
};

const inch1 = {
  name: "1inch Network",
  value: "1inch",
  icon: undefined,
  symbol: undefined,
  index: 237,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][inch1.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][inch1.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][inch1.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const aave = {
  name: "Aave",
  value: "aave",
  icon: undefined,
  symbol: undefined,
  index: 1,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][aave.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][aave.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][aave.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const ada = {
  name: "Cardano",
  value: "ada",
  icon: undefined,
  symbol: undefined,
  index: 2,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ada.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ada.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][ada.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const aed = {
  name: "United Arab Emirates Dirham",
  value: "aed",
  icon: undefined,
  symbol: undefined,
  index: 3,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][aed.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][aed.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][aed.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const afn = {
  name: "Afghan afghani",
  value: "afn",
  icon: undefined,
  symbol: undefined,
  index: 4,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][afn.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][afn.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][afn.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const algo = {
  name: "Algorand",
  value: "algo",
  icon: undefined,
  symbol: undefined,
  index: 5,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][algo.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][algo.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][algo.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const all = {
  name: "Albanian lek",
  value: "all",
  icon: undefined,
  symbol: undefined,
  index: 6,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][all.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][all.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][all.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const amd = {
  name: "Armenian dram",
  value: "amd",
  icon: undefined,
  symbol: undefined,
  index: 7,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][amd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][amd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][amd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const amp = {
  name: "Synereo",
  value: "amp",
  icon: undefined,
  symbol: undefined,
  index: 8,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][amp.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][amp.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][amp.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const ang = {
  name: "Netherlands Antillean Guilder",
  value: "ang",
  icon: undefined,
  symbol: undefined,
  index: 9,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ang.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ang.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][ang.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const aoa = {
  name: "Angolan kwanza",
  value: "aoa",
  icon: undefined,
  symbol: undefined,
  index: 10,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][aoa.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][aoa.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][aoa.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const ar = {
  name: "Arweave",
  value: "ar",
  icon: undefined,
  symbol: undefined,
  index: 11,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ar.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ar.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][ar.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const ars = {
  name: "Argentine peso",
  value: "ars",
  icon: undefined,
  symbol: undefined,
  index: 12,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ars.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ars.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][ars.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const atom = {
  name: "Atomic Coin",
  value: "atom",
  icon: undefined,
  symbol: undefined,
  index: 13,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][atom.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][atom.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][atom.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const aud = {
  name: "Australian dollar",
  value: "aud",
  icon: undefined,
  symbol: undefined,
  index: 14,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][aud.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][aud.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][aud.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const avax = {
  name: "Avalanche",
  value: "avax",
  icon: undefined,
  symbol: undefined,
  index: 15,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][avax.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][avax.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][avax.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const awg = {
  name: "Aruban florin",
  value: "awg",
  icon: undefined,
  symbol: undefined,
  index: 16,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][awg.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][awg.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][awg.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const axs = {
  name: "AXS",
  value: "axs",
  icon: undefined,
  symbol: undefined,
  index: 17,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][axs.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][axs.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][axs.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const azn = {
  name: "Azerbaijani manat",
  value: "azn",
  icon: undefined,
  symbol: undefined,
  index: 18,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][azn.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][azn.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][azn.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const bake = {
  name: "BakeryToken",
  value: "bake",
  icon: undefined,
  symbol: undefined,
  index: 19,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bake.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bake.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][bake.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const bam = {
  name: "Bosnia-Herzegovina Convertible Mark",
  value: "bam",
  icon: undefined,
  symbol: undefined,
  index: 20,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bam.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bam.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][bam.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const bat = {
  name: "Basic Attention Token",
  value: "bat",
  icon: undefined,
  symbol: undefined,
  index: 21,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bat.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bat.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][bat.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const bbd = {
  name: "Bajan dollar",
  value: "bbd",
  icon: undefined,
  symbol: undefined,
  index: 22,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bbd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bbd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][bbd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const bch = {
  name: "Bitcoin Cash",
  value: "bch",
  icon: undefined,
  symbol: undefined,
  index: 23,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bch.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bch.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][bch.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const bdt = {
  name: "Bangladeshi taka",
  value: "bdt",
  icon: undefined,
  symbol: undefined,
  index: 24,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bdt.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bdt.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][bdt.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const bgn = {
  name: "Bulgarian lev",
  value: "bgn",
  icon: undefined,
  symbol: undefined,
  index: 25,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bgn.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bgn.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][bgn.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const bhd = {
  name: "Bahraini dinar",
  value: "bhd",
  icon: undefined,
  symbol: undefined,
  index: 26,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bhd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bhd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][bhd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const bif = {
  name: "Burundian Franc",
  value: "bif",
  icon: undefined,
  symbol: undefined,
  index: 27,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bif.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bif.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][bif.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const bmd = {
  name: "Bermudan dollar",
  value: "bmd",
  icon: undefined,
  symbol: undefined,
  index: 28,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bmd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bmd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][bmd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const bnb = {
  name: "Binance Coin",
  value: "bnb",
  icon: undefined,
  symbol: undefined,
  index: 29,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bnb.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bnb.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][bnb.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const bnd = {
  name: "Brunei dollar",
  value: "bnd",
  icon: undefined,
  symbol: undefined,
  index: 30,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bnd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bnd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][bnd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const bob = {
  name: "Bolivian boliviano",
  value: "bob",
  icon: undefined,
  symbol: undefined,
  index: 31,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bob.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bob.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][bob.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const brl = {
  name: "Brazilian real",
  value: "brl",
  icon: undefined,
  symbol: undefined,
  index: 32,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][brl.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][brl.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][brl.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const bsd = {
  name: "Bahamian dollar",
  value: "bsd",
  icon: undefined,
  symbol: undefined,
  index: 33,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bsd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bsd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][bsd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const bsv = {
  name: "Bitcoin SV",
  value: "bsv",
  icon: undefined,
  symbol: undefined,
  index: 34,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bsv.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bsv.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][bsv.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const bsw = {
  name: "Biswap",
  value: "bsw",
  icon: undefined,
  symbol: undefined,
  index: 35,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bsw.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bsw.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][bsw.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const btc = {
  name: "Bitcoin",
  value: "btc",
  icon: undefined,
  symbol: undefined,
  index: 36,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][btc.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][btc.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][btc.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const btcb = {
  name: "Bitcoin BEP2",
  value: "btcb",
  icon: undefined,
  symbol: undefined,
  index: 37,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][btcb.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][btcb.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][btcb.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const btg = {
  name: "Bitcoin Gold",
  value: "btg",
  icon: undefined,
  symbol: undefined,
  index: 38,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][btg.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][btg.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][btg.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const btn = {
  name: "Bhutan currency",
  value: "btn",
  icon: undefined,
  symbol: undefined,
  index: 39,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][btn.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][btn.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][btn.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const busd = {
  name: "Binance USD",
  value: "busd",
  icon: undefined,
  symbol: undefined,
  index: 40,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][busd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][busd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][busd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const bwp = {
  name: "Botswanan Pula",
  value: "bwp",
  icon: undefined,
  symbol: undefined,
  index: 41,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bwp.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bwp.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][bwp.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const byn = {
  name: "New Belarusian Ruble",
  value: "byn",
  icon: undefined,
  symbol: undefined,
  index: 42,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][byn.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][byn.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][byn.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const byr = {
  name: "Belarusian Ruble",
  value: "byr",
  icon: undefined,
  symbol: undefined,
  index: 43,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][byr.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][byr.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][byr.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const bzd = {
  name: "Belize dollar",
  value: "bzd",
  icon: undefined,
  symbol: undefined,
  index: 44,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bzd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][bzd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][bzd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const cad = {
  name: "Canadian dollar",
  value: "cad",
  icon: undefined,
  symbol: undefined,
  index: 45,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][cad.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][cad.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][cad.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const cake = {
  name: "PancakeSwap",
  value: "cake",
  icon: undefined,
  symbol: undefined,
  index: 46,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][cake.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][cake.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][cake.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const cdf = {
  name: "Congolese franc",
  value: "cdf",
  icon: undefined,
  symbol: undefined,
  index: 47,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][cdf.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][cdf.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][cdf.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const celo = {
  name: "Celo",
  value: "celo",
  icon: undefined,
  symbol: undefined,
  index: 48,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][celo.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][celo.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][celo.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const chf = {
  name: "Swiss franc",
  value: "chf",
  icon: undefined,
  symbol: undefined,
  index: 49,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][chf.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][chf.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][chf.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const chz = {
  name: "Chiliz",
  value: "chz",
  icon: undefined,
  symbol: undefined,
  index: 50,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][chz.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][chz.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][chz.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const clp = {
  name: "Chilean peso",
  value: "clp",
  icon: undefined,
  symbol: undefined,
  index: 51,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][clp.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][clp.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][clp.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const cny = {
  name: "Chinese Yuan",
  value: "cny",
  icon: undefined,
  symbol: undefined,
  index: 52,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][cny.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][cny.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][cny.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const comp = {
  name: "Compound Coin",
  value: "comp",
  icon: undefined,
  symbol: undefined,
  index: 53,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][comp.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][comp.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][comp.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const cop = {
  name: "Colombian peso",
  value: "cop",
  icon: undefined,
  symbol: undefined,
  index: 54,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][cop.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][cop.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][cop.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const crc = {
  name: "Costa Rican Colón",
  value: "crc",
  icon: undefined,
  symbol: undefined,
  index: 55,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][crc.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][crc.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][crc.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const cro = {
  name: "Crypto.com Chain Token",
  value: "cro",
  icon: undefined,
  symbol: undefined,
  index: 56,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][cro.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][cro.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][cro.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const crv = {
  name: "Cravy",
  value: "crv",
  icon: undefined,
  symbol: undefined,
  index: 57,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][crv.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][crv.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][crv.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const cuc = {
  name: "Cuban peso",
  value: "cuc",
  icon: undefined,
  symbol: undefined,
  index: 58,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][cuc.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][cuc.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][cuc.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const cup = {
  name: "Cuban Peso",
  value: "cup",
  icon: undefined,
  symbol: undefined,
  index: 59,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][cup.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][cup.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][cup.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const cve = {
  name: "Cape Verdean escudo",
  value: "cve",
  icon: undefined,
  symbol: undefined,
  index: 60,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][cve.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][cve.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][cve.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const cvx = {
  name: "Convex Finance",
  value: "cvx",
  icon: undefined,
  symbol: undefined,
  index: 61,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][cvx.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][cvx.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][cvx.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const czk = {
  name: "Czech koruna",
  value: "czk",
  icon: undefined,
  symbol: undefined,
  index: 62,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][czk.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][czk.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][czk.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const dai = {
  name: "Dai",
  value: "dai",
  icon: undefined,
  symbol: undefined,
  index: 63,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][dai.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][dai.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][dai.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const dash = {
  name: "Dash",
  value: "dash",
  icon: undefined,
  symbol: undefined,
  index: 64,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][dash.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][dash.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][dash.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const dcr = {
  name: "Decred",
  value: "dcr",
  icon: undefined,
  symbol: undefined,
  index: 65,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][dcr.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][dcr.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][dcr.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const dfi = {
  name: "DfiStarter",
  value: "dfi",
  icon: undefined,
  symbol: undefined,
  index: 66,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][dfi.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][dfi.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][dfi.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const djf = {
  name: "Djiboutian franc",
  value: "djf",
  icon: undefined,
  symbol: undefined,
  index: 67,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][djf.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][djf.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][djf.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const dkk = {
  name: "Danish krone",
  value: "dkk",
  icon: undefined,
  symbol: undefined,
  index: 68,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][dkk.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][dkk.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][dkk.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const doge = {
  name: "Dogecoin",
  value: "doge",
  icon: undefined,
  symbol: undefined,
  index: 69,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][doge.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][doge.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][doge.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const dop = {
  name: "Dominican peso",
  value: "dop",
  icon: undefined,
  symbol: undefined,
  index: 70,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][dop.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][dop.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][dop.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const dot = {
  name: "Dotcoin",
  value: "dot",
  icon: undefined,
  symbol: undefined,
  index: 71,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][dot.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][dot.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][dot.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const dzd = {
  name: "Algerian dinar",
  value: "dzd",
  icon: undefined,
  symbol: undefined,
  index: 72,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][dzd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][dzd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][dzd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const egld = {
  name: "Elrond",
  value: "egld",
  icon: undefined,
  symbol: undefined,
  index: 73,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][egld.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][egld.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][egld.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const egp = {
  name: "Egyptian pound",
  value: "egp",
  icon: undefined,
  symbol: undefined,
  index: 74,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][egp.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][egp.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][egp.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const enj = {
  name: "Enjin Coin",
  value: "enj",
  icon: undefined,
  symbol: undefined,
  index: 75,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][enj.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][enj.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][enj.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const eos = {
  name: "EOS",
  value: "eos",
  icon: undefined,
  symbol: undefined,
  index: 76,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][eos.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][eos.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][eos.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const ern = {
  name: "Eritrean nakfa",
  value: "ern",
  icon: undefined,
  symbol: undefined,
  index: 77,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ern.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ern.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][ern.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const etb = {
  name: "Ethiopian birr",
  value: "etb",
  icon: undefined,
  symbol: undefined,
  index: 78,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][etb.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][etb.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][etb.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const etc = {
  name: "Ethereum Classic",
  value: "etc",
  icon: undefined,
  symbol: undefined,
  index: 79,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][etc.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][etc.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][etc.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const eth = {
  name: "Ether",
  value: "eth",
  icon: undefined,
  symbol: undefined,
  index: 80,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][eth.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][eth.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][eth.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const eur = {
  name: "Euro",
  value: "eur",
  icon: undefined,
  symbol: undefined,
  index: 81,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][eur.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][eur.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][eur.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const fei = {
  name: "Fei USD",
  value: "fei",
  icon: undefined,
  symbol: undefined,
  index: 82,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][fei.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][fei.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][fei.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const fil = {
  name: "FileCoin",
  value: "fil",
  icon: undefined,
  symbol: undefined,
  index: 83,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][fil.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][fil.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][fil.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const fjd = {
  name: "Fijian dollar",
  value: "fjd",
  icon: undefined,
  symbol: undefined,
  index: 84,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][fjd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][fjd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][fjd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const fkp = {
  name: "Falkland Islands pound",
  value: "fkp",
  icon: undefined,
  symbol: undefined,
  index: 85,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][fkp.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][fkp.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][fkp.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const flow = {
  name: "Flow",
  value: "flow",
  icon: undefined,
  symbol: undefined,
  index: 86,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][flow.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][flow.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][flow.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const frax = {
  name: "Frax",
  value: "frax",
  icon: undefined,
  symbol: undefined,
  index: 87,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][frax.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][frax.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][frax.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const ftm = {
  name: "Fantom",
  value: "ftm",
  icon: undefined,
  symbol: undefined,
  index: 88,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ftm.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ftm.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][ftm.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const ftt = {
  name: "FarmaTrust",
  value: "ftt",
  icon: undefined,
  symbol: undefined,
  index: 89,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ftt.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ftt.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][ftt.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const gala = {
  name: "Gala",
  value: "gala",
  icon: undefined,
  symbol: undefined,
  index: 90,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][gala.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][gala.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][gala.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const gbp = {
  name: "Pound sterling",
  value: "gbp",
  icon: undefined,
  symbol: undefined,
  index: 91,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][gbp.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][gbp.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][gbp.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const gel = {
  name: "Georgian lari",
  value: "gel",
  icon: undefined,
  symbol: undefined,
  index: 92,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][gel.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][gel.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][gel.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const ggp = {
  name: "GGPro",
  value: "ggp",
  icon: undefined,
  symbol: undefined,
  index: 93,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ggp.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ggp.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][ggp.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const ghs = {
  name: "Ghanaian cedi",
  value: "ghs",
  icon: undefined,
  symbol: undefined,
  index: 94,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ghs.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ghs.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][ghs.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const gip = {
  name: "Gibraltar pound",
  value: "gip",
  icon: undefined,
  symbol: undefined,
  index: 95,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][gip.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][gip.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][gip.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const gmd = {
  name: "Gambian dalasi",
  value: "gmd",
  icon: undefined,
  symbol: undefined,
  index: 96,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][gmd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][gmd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][gmd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const gnf = {
  name: "Guinean franc",
  value: "gnf",
  icon: undefined,
  symbol: undefined,
  index: 97,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][gnf.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][gnf.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][gnf.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const gno = {
  name: "Gnosis",
  value: "gno",
  icon: undefined,
  symbol: undefined,
  index: 98,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][gno.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][gno.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][gno.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const grt = {
  name: "Golden Ratio Token",
  value: "grt",
  icon: undefined,
  symbol: undefined,
  index: 99,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][grt.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][grt.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][grt.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const gt = {
  name: "GateToken",
  value: "gt",
  icon: undefined,
  symbol: undefined,
  index: 100,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][gt.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][gt.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][gt.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const gtq = {
  name: "Guatemalan quetzal",
  value: "gtq",
  icon: undefined,
  symbol: undefined,
  index: 101,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][gtq.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][gtq.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][gtq.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const gyd = {
  name: "Guyanaese Dollar",
  value: "gyd",
  icon: undefined,
  symbol: undefined,
  index: 102,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][gyd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][gyd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][gyd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const hbar = {
  name: "Hedera",
  value: "hbar",
  icon: undefined,
  symbol: undefined,
  index: 103,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][hbar.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][hbar.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][hbar.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const hkd = {
  name: "Hong Kong dollar",
  value: "hkd",
  icon: undefined,
  symbol: undefined,
  index: 104,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][hkd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][hkd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][hkd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const hnl = {
  name: "Honduran lempira",
  value: "hnl",
  icon: undefined,
  symbol: undefined,
  index: 105,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][hnl.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][hnl.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][hnl.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const hnt = {
  name: "Helium",
  value: "hnt",
  icon: undefined,
  symbol: undefined,
  index: 106,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][hnt.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][hnt.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][hnt.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const hot = {
  name: "Hydro Protocol",
  value: "hot",
  icon: undefined,
  symbol: undefined,
  index: 107,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][hot.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][hot.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][hot.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const hrk = {
  name: "Croatian kuna",
  value: "hrk",
  icon: undefined,
  symbol: undefined,
  index: 108,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][hrk.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][hrk.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][hrk.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const ht = {
  name: "Huobi Token",
  value: "ht",
  icon: undefined,
  symbol: undefined,
  index: 109,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ht.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ht.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][ht.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const htg = {
  name: "Haitian gourde",
  value: "htg",
  icon: undefined,
  symbol: undefined,
  index: 110,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][htg.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][htg.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][htg.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const huf = {
  name: "Hungarian forint",
  value: "huf",
  icon: undefined,
  symbol: undefined,
  index: 111,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][huf.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][huf.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][huf.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const icp = {
  name: "Internet Computer",
  value: "icp",
  icon: undefined,
  symbol: undefined,
  index: 112,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][icp.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][icp.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][icp.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const idr = {
  name: "Indonesian rupiah",
  value: "idr",
  icon: undefined,
  symbol: undefined,
  index: 113,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][idr.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][idr.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][idr.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const ils = {
  name: "Israeli New Shekel",
  value: "ils",
  icon: undefined,
  symbol: undefined,
  index: 114,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ils.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ils.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][ils.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const imp = {
  name: "CoinIMP",
  value: "imp",
  icon: undefined,
  symbol: undefined,
  index: 115,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][imp.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][imp.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][imp.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const inj = {
  name: "Injective",
  value: "inj",
  icon: undefined,
  symbol: undefined,
  index: 116,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][inj.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][inj.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][inj.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const inr = {
  name: "Indian rupee",
  value: "inr",
  icon: undefined,
  symbol: undefined,
  index: 117,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][inr.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][inr.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][inr.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const iqd = {
  name: "Iraqi dinar",
  value: "iqd",
  icon: undefined,
  symbol: undefined,
  index: 118,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][iqd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][iqd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][iqd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const irr = {
  name: "Iranian rial",
  value: "irr",
  icon: undefined,
  symbol: undefined,
  index: 119,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][irr.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][irr.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][irr.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const isk = {
  name: "Icelandic króna",
  value: "isk",
  icon: undefined,
  symbol: undefined,
  index: 120,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][isk.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][isk.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][isk.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const jep = {
  name: "Jersey Pound",
  value: "jep",
  icon: undefined,
  symbol: undefined,
  index: 121,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][jep.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][jep.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][jep.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const jmd = {
  name: "Jamaican dollar",
  value: "jmd",
  icon: undefined,
  symbol: undefined,
  index: 122,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][jmd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][jmd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][jmd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const jod = {
  name: "Jordanian dinar",
  value: "jod",
  icon: undefined,
  symbol: undefined,
  index: 123,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][jod.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][jod.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][jod.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const jpy = {
  name: "Japanese yen",
  value: "jpy",
  icon: undefined,
  symbol: undefined,
  index: 124,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][jpy.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][jpy.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][jpy.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const kas = {
  name: "Kaspa price trend",
  value: "kas",
  icon: undefined,
  symbol: undefined,
  index: 125,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][kas.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][kas.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][kas.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const kava = {
  name: "Kava",
  value: "kava",
  icon: undefined,
  symbol: undefined,
  index: 126,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][kava.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][kava.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][kava.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const kcs = {
  name: "Kucoin",
  value: "kcs",
  icon: undefined,
  symbol: undefined,
  index: 127,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][kcs.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][kcs.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][kcs.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const kda = {
  name: "Kadena",
  value: "kda",
  icon: undefined,
  symbol: undefined,
  index: 128,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][kda.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][kda.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][kda.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const kes = {
  name: "Kenyan shilling",
  value: "kes",
  icon: undefined,
  symbol: undefined,
  index: 129,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][kes.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][kes.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][kes.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const kgs = {
  name: "Kyrgystani Som",
  value: "kgs",
  icon: undefined,
  symbol: undefined,
  index: 130,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][kgs.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][kgs.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][kgs.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const khr = {
  name: "Cambodian riel",
  value: "khr",
  icon: undefined,
  symbol: undefined,
  index: 131,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][khr.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][khr.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][khr.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const klay = {
  name: "Klaytn",
  value: "klay",
  icon: undefined,
  symbol: undefined,
  index: 132,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][klay.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][klay.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][klay.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const kmf = {
  name: "Comorian franc",
  value: "kmf",
  icon: undefined,
  symbol: undefined,
  index: 133,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][kmf.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][kmf.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][kmf.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const knc = {
  name: "Kyber Network",
  value: "knc",
  icon: undefined,
  symbol: undefined,
  index: 134,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][knc.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][knc.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][knc.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const kpw = {
  name: "North Korean won",
  value: "kpw",
  icon: undefined,
  symbol: undefined,
  index: 135,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][kpw.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][kpw.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][kpw.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const krw = {
  name: "South Korean won",
  value: "krw",
  icon: undefined,
  symbol: undefined,
  index: 136,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][krw.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][krw.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][krw.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const ksm = {
  name: "Kusama",
  value: "ksm",
  icon: undefined,
  symbol: undefined,
  index: 137,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ksm.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ksm.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][ksm.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const kwd = {
  name: "Kuwaiti dinar",
  value: "kwd",
  icon: undefined,
  symbol: undefined,
  index: 138,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][kwd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][kwd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][kwd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const kyd = {
  name: "Cayman Islands dollar",
  value: "kyd",
  icon: undefined,
  symbol: undefined,
  index: 139,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][kyd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][kyd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][kyd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const kzt = {
  name: "Kazakhstani tenge",
  value: "kzt",
  icon: undefined,
  symbol: undefined,
  index: 140,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][kzt.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][kzt.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][kzt.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const lak = {
  name: "Laotian Kip",
  value: "lak",
  icon: undefined,
  symbol: undefined,
  index: 141,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][lak.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][lak.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][lak.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const lbp = {
  name: "Lebanese pound",
  value: "lbp",
  icon: undefined,
  symbol: undefined,
  index: 142,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][lbp.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][lbp.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][lbp.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const leo = {
  name: "LEOcoin",
  value: "leo",
  icon: undefined,
  symbol: undefined,
  index: 143,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][leo.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][leo.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][leo.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const link = {
  name: "ChainLink",
  value: "link",
  icon: undefined,
  symbol: undefined,
  index: 144,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][link.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][link.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][link.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const lkr = {
  name: "Sri Lankan rupee",
  value: "lkr",
  icon: undefined,
  symbol: undefined,
  index: 145,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][lkr.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][lkr.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][lkr.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const lrc = {
  name: "Loopring",
  value: "lrc",
  icon: undefined,
  symbol: undefined,
  index: 146,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][lrc.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][lrc.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][lrc.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const lrd = {
  name: "Liberian dollar",
  value: "lrd",
  icon: undefined,
  symbol: undefined,
  index: 147,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][lrd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][lrd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][lrd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const lsl = {
  name: "Lesotho loti",
  value: "lsl",
  icon: undefined,
  symbol: undefined,
  index: 148,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][lsl.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][lsl.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][lsl.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const ltc = {
  name: "Litecoin",
  value: "ltc",
  icon: undefined,
  symbol: undefined,
  index: 149,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ltc.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ltc.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][ltc.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const ltl = {
  name: "Lithuanian litas",
  value: "ltl",
  icon: undefined,
  symbol: undefined,
  index: 150,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ltl.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ltl.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][ltl.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const luna = {
  name: "Luna Coin",
  value: "luna",
  icon: undefined,
  symbol: undefined,
  index: 151,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][luna.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][luna.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][luna.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const lvl = {
  name: "Latvian lats",
  value: "lvl",
  icon: undefined,
  symbol: undefined,
  index: 152,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][lvl.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][lvl.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][lvl.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const lyd = {
  name: "Libyan dinar",
  value: "lyd",
  icon: undefined,
  symbol: undefined,
  index: 153,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][lyd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][lyd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][lyd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const mad = {
  name: "Moroccan dirham",
  value: "mad",
  icon: undefined,
  symbol: undefined,
  index: 154,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mad.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mad.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][mad.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const mana = {
  name: "Decentraland",
  value: "mana",
  icon: undefined,
  symbol: undefined,
  index: 155,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mana.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mana.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][mana.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const matic = {
  name: "Polygon",
  value: "matic",
  icon: undefined,
  symbol: undefined,
  index: 156,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][matic.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][matic.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][matic.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const mdl = {
  name: "Moldovan leu",
  value: "mdl",
  icon: undefined,
  symbol: undefined,
  index: 157,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mdl.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mdl.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][mdl.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const mga = {
  name: "Malagasy ariary",
  value: "mga",
  icon: undefined,
  symbol: undefined,
  index: 158,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mga.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mga.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][mga.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const mina = {
  name: "Mina",
  value: "mina",
  icon: undefined,
  symbol: undefined,
  index: 159,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mina.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mina.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][mina.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const miota = {
  name: "IOTA",
  value: "miota",
  icon: undefined,
  symbol: undefined,
  index: 160,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][miota.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][miota.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][miota.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const mkd = {
  name: "Macedonian denar",
  value: "mkd",
  icon: undefined,
  symbol: undefined,
  index: 161,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mkd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mkd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][mkd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const mkr = {
  name: "Maker",
  value: "mkr",
  icon: undefined,
  symbol: undefined,
  index: 162,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mkr.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mkr.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][mkr.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const mmk = {
  name: "Myanmar Kyat",
  value: "mmk",
  icon: undefined,
  symbol: undefined,
  index: 163,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mmk.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mmk.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][mmk.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const mnt = {
  name: "Mongolian tugrik",
  value: "mnt",
  icon: undefined,
  symbol: undefined,
  index: 164,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mnt.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mnt.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][mnt.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const mop = {
  name: "Macanese pataca",
  value: "mop",
  icon: undefined,
  symbol: undefined,
  index: 165,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mop.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mop.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][mop.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const mro = {
  name: "Mauritanian ouguiya",
  value: "mro",
  icon: undefined,
  symbol: undefined,
  index: 166,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mro.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mro.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][mro.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const mur = {
  name: "Mauritian rupee",
  value: "mur",
  icon: undefined,
  symbol: undefined,
  index: 167,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mur.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mur.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][mur.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const mvr = {
  name: "Maldivian rufiyaa",
  value: "mvr",
  icon: undefined,
  symbol: undefined,
  index: 168,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mvr.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mvr.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][mvr.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const mwk = {
  name: "Malawian kwacha",
  value: "mwk",
  icon: undefined,
  symbol: undefined,
  index: 169,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mwk.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mwk.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][mwk.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const mxn = {
  name: "Mexican peso",
  value: "mxn",
  icon: undefined,
  symbol: undefined,
  index: 170,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mxn.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mxn.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][mxn.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const myr = {
  name: "Malaysian ringgit",
  value: "myr",
  icon: undefined,
  symbol: undefined,
  index: 171,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][myr.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][myr.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][myr.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const mzn = {
  name: "Mozambican Metical",
  value: "mzn",
  icon: undefined,
  symbol: undefined,
  index: 172,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mzn.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][mzn.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][mzn.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const nad = {
  name: "Namibian dollar",
  value: "nad",
  icon: undefined,
  symbol: undefined,
  index: 173,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][nad.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][nad.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][nad.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const near = {
  name: "NEAR Protocol",
  value: "near",
  icon: undefined,
  symbol: undefined,
  index: 174,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][near.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][near.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][near.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const neo = {
  name: "NEO",
  value: "neo",
  icon: undefined,
  symbol: undefined,
  index: 175,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][neo.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][neo.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][neo.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const nexo = {
  name: "NEXO",
  value: "nexo",
  icon: undefined,
  symbol: undefined,
  index: 176,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][nexo.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][nexo.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][nexo.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const ngn = {
  name: "Nigerian naira",
  value: "ngn",
  icon: undefined,
  symbol: undefined,
  index: 177,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ngn.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ngn.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][ngn.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const nio = {
  name: "Nicaraguan córdoba",
  value: "nio",
  icon: undefined,
  symbol: undefined,
  index: 178,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][nio.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][nio.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][nio.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const nok = {
  name: "Norwegian krone",
  value: "nok",
  icon: undefined,
  symbol: undefined,
  index: 179,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][nok.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][nok.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][nok.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const npr = {
  name: "Nepalese rupee",
  value: "npr",
  icon: undefined,
  symbol: undefined,
  index: 180,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][npr.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][npr.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][npr.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const nzd = {
  name: "New Zealand dollar",
  value: "nzd",
  icon: undefined,
  symbol: undefined,
  index: 181,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][nzd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][nzd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][nzd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const okb = {
  name: "Okex",
  value: "okb",
  icon: undefined,
  symbol: undefined,
  index: 182,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][okb.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][okb.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][okb.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const omr = {
  name: "Omani rial",
  value: "omr",
  icon: undefined,
  symbol: undefined,
  index: 183,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][omr.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][omr.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][omr.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const one = {
  name: "Menlo One",
  value: "one",
  icon: undefined,
  symbol: undefined,
  index: 184,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][one.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][one.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][one.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const pab = {
  name: "Panamanian balboa",
  value: "pab",
  icon: undefined,
  symbol: undefined,
  index: 185,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][pab.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][pab.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][pab.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const paxg = {
  name: "PAX Gold",
  value: "paxg",
  icon: undefined,
  symbol: undefined,
  index: 186,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][paxg.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][paxg.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][paxg.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const pen = {
  name: "Sol",
  value: "pen",
  icon: undefined,
  symbol: undefined,
  index: 187,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][pen.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][pen.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][pen.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const pgk = {
  name: "Papua New Guinean kina",
  value: "pgk",
  icon: undefined,
  symbol: undefined,
  index: 188,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][pgk.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][pgk.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][pgk.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const php = {
  name: "Philippine peso",
  value: "php",
  icon: undefined,
  symbol: undefined,
  index: 189,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][php.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][php.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][php.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const pkr = {
  name: "Pakistani rupee",
  value: "pkr",
  icon: undefined,
  symbol: undefined,
  index: 190,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][pkr.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][pkr.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][pkr.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const pln = {
  name: "Poland złoty",
  value: "pln",
  icon: undefined,
  symbol: undefined,
  index: 191,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][pln.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][pln.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][pln.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const pyg = {
  name: "Paraguayan guarani",
  value: "pyg",
  icon: undefined,
  symbol: undefined,
  index: 192,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][pyg.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][pyg.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][pyg.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const qar = {
  name: "Qatari Rial",
  value: "qar",
  icon: undefined,
  symbol: undefined,
  index: 193,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][qar.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][qar.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][qar.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const qnt = {
  name: "Quant",
  value: "qnt",
  icon: undefined,
  symbol: undefined,
  index: 194,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][qnt.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][qnt.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][qnt.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const qtum = {
  name: "QTUM",
  value: "qtum",
  icon: undefined,
  symbol: undefined,
  index: 195,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][qtum.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][qtum.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][qtum.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const ron = {
  name: "Romanian leu",
  value: "ron",
  icon: undefined,
  symbol: undefined,
  index: 196,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ron.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ron.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][ron.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const rsd = {
  name: "Serbian dinar",
  value: "rsd",
  icon: undefined,
  symbol: undefined,
  index: 197,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][rsd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][rsd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][rsd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const rub = {
  name: "Russian ruble",
  value: "rub",
  icon: undefined,
  symbol: undefined,
  index: 198,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][rub.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][rub.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][rub.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const rune = {
  name: "THORChain (ERC20)",
  value: "rune",
  icon: undefined,
  symbol: undefined,
  index: 199,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][rune.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][rune.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][rune.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const rwf = {
  name: "Rwandan Franc",
  value: "rwf",
  icon: undefined,
  symbol: undefined,
  index: 200,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][rwf.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][rwf.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][rwf.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const sand = {
  name: "BeachCoin",
  value: "sand",
  icon: undefined,
  symbol: undefined,
  index: 201,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][sand.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][sand.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][sand.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const sar = {
  name: "Saudi riyal",
  value: "sar",
  icon: undefined,
  symbol: undefined,
  index: 202,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][sar.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][sar.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][sar.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const sbd = {
  name: "Solomon Islands dollar",
  value: "sbd",
  icon: undefined,
  symbol: undefined,
  index: 203,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][sbd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][sbd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][sbd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const scr = {
  name: "Seychellois rupee",
  value: "scr",
  icon: undefined,
  symbol: undefined,
  index: 204,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][scr.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][scr.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][scr.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const sdg = {
  name: "Sudanese pound",
  value: "sdg",
  icon: undefined,
  symbol: undefined,
  index: 205,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][sdg.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][sdg.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][sdg.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const sek = {
  name: "Swedish krona",
  value: "sek",
  icon: undefined,
  symbol: undefined,
  index: 206,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][sek.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][sek.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][sek.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const sgd = {
  name: "Singapore dollar",
  value: "sgd",
  icon: undefined,
  symbol: undefined,
  index: 207,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][sgd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][sgd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][sgd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const shib = {
  name: "Shiba Inu",
  value: "shib",
  icon: undefined,
  symbol: undefined,
  index: 208,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][shib.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][shib.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][shib.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const shp = {
  name: "Saint Helena pound",
  value: "shp",
  icon: undefined,
  symbol: undefined,
  index: 209,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][shp.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][shp.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][shp.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const sle = {
  name: "SLE",
  value: "sle",
  icon: undefined,
  symbol: undefined,
  index: 210,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][sle.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][sle.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][sle.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const sll = {
  name: "Sierra Leonean leone",
  value: "sll",
  icon: undefined,
  symbol: undefined,
  index: 211,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][sll.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][sll.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][sll.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const sol = {
  name: "Sola",
  value: "sol",
  icon: undefined,
  symbol: undefined,
  index: 212,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][sol.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][sol.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][sol.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const sos = {
  name: "Somali shilling",
  value: "sos",
  icon: undefined,
  symbol: undefined,
  index: 213,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][sos.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][sos.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][sos.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const srd = {
  name: "Surinamese dollar",
  value: "srd",
  icon: undefined,
  symbol: undefined,
  index: 214,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][srd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][srd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][srd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const std = {
  name: "São Tomé and Príncipe Dobra (pre-2018)",
  value: "std",
  icon: undefined,
  symbol: undefined,
  index: 215,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][std.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][std.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][std.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const stx = {
  name: "Stox",
  value: "stx",
  icon: undefined,
  symbol: undefined,
  index: 216,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][stx.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][stx.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][stx.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const svc = {
  name: "Salvadoran Colón",
  value: "svc",
  icon: undefined,
  symbol: undefined,
  index: 217,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][svc.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][svc.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][svc.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const syp = {
  name: "Syrian pound",
  value: "syp",
  icon: undefined,
  symbol: undefined,
  index: 218,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][syp.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][syp.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][syp.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const szl = {
  name: "Swazi lilangeni",
  value: "szl",
  icon: undefined,
  symbol: undefined,
  index: 219,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][szl.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][szl.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][szl.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const thb = {
  name: "Thai baht",
  value: "thb",
  icon: undefined,
  symbol: undefined,
  index: 220,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][thb.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][thb.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][thb.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const theta = {
  name: "Theta",
  value: "theta",
  icon: undefined,
  symbol: undefined,
  index: 221,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][theta.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][theta.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][theta.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const tjs = {
  name: "Tajikistani somoni",
  value: "tjs",
  icon: undefined,
  symbol: undefined,
  index: 222,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][tjs.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][tjs.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][tjs.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const tmt = {
  name: "Turkmenistani manat",
  value: "tmt",
  icon: undefined,
  symbol: undefined,
  index: 223,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][tmt.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][tmt.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][tmt.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const tnd = {
  name: "Tunisian dinar",
  value: "tnd",
  icon: undefined,
  symbol: undefined,
  index: 224,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][tnd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][tnd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][tnd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const ton = {
  name: "Tokamak Network",
  value: "ton",
  icon: undefined,
  symbol: undefined,
  index: 225,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ton.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ton.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][ton.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const top = {
  name: "Tongan Paʻanga",
  value: "top",
  icon: undefined,
  symbol: undefined,
  index: 226,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][top.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][top.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][top.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const trx = {
  name: "TRON",
  value: "trx",
  icon: undefined,
  symbol: undefined,
  index: 227,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][trx.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][trx.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][trx.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const ty = {
  name: "Turkish lira",
  value: "try",
  icon: undefined,
  symbol: undefined,
  index: 228,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ty.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ty.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][ty.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const ttd = {
  name: "Trinidad & Tobago Dollar",
  value: "ttd",
  icon: undefined,
  symbol: undefined,
  index: 229,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ttd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ttd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][ttd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const ttt = {
  name: "Tap Project",
  value: "ttt",
  icon: undefined,
  symbol: undefined,
  index: 230,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ttt.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ttt.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][ttt.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const tusd = {
  name: "True USD",
  value: "tusd",
  icon: undefined,
  symbol: undefined,
  index: 231,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][tusd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][tusd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][tusd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const twd = {
  name: "New Taiwan dollar",
  value: "twd",
  icon: undefined,
  symbol: undefined,
  index: 232,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][twd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][twd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][twd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const tzs = {
  name: "Tanzanian shilling",
  value: "tzs",
  icon: undefined,
  symbol: undefined,
  index: 233,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][tzs.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][tzs.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][tzs.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const uah = {
  name: "Ukrainian hryvnia",
  value: "uah",
  icon: undefined,
  symbol: undefined,
  index: 234,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][uah.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][uah.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][uah.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const ugx = {
  name: "Ugandan shilling",
  value: "ugx",
  icon: undefined,
  symbol: undefined,
  index: 235,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ugx.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ugx.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][ugx.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const uni = {
  name: "Universe",
  value: "uni",
  icon: undefined,
  symbol: undefined,
  index: 236,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][uni.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][uni.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][uni.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const usd = {
  name: "United States dollar",
  value: "usd",
  icon: undefined,
  symbol: undefined,
  index: 0,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][usd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][usd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][usd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const usdc = {
  name: "USD Coin",
  value: "usdc",
  icon: undefined,
  symbol: undefined,
  index: 238,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][usdc.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][usdc.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][usdc.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const usdp = {
  name: "USDP Stablecoin",
  value: "usdp",
  icon: undefined,
  symbol: undefined,
  index: 239,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][usdp.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][usdp.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][usdp.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const usdt = {
  name: "Tether",
  value: "usdt",
  icon: undefined,
  symbol: undefined,
  index: 240,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][usdt.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][usdt.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][usdt.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const uyu = {
  name: "Uruguayan peso",
  value: "uyu",
  icon: undefined,
  symbol: undefined,
  index: 241,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][uyu.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][uyu.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][uyu.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const uzs = {
  name: "Uzbekistani som",
  value: "uzs",
  icon: undefined,
  symbol: undefined,
  index: 242,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][uzs.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][uzs.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][uzs.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const vef = {
  name: "Sovereign Bolivar",
  value: "vef",
  icon: undefined,
  symbol: undefined,
  index: 243,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][vef.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][vef.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][vef.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const ves = {
  name: "Venezuelan Bolívar",
  value: "ves",
  icon: undefined,
  symbol: undefined,
  index: 244,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ves.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][ves.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][ves.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const vet = {
  name: "Vechain",
  value: "vet",
  icon: undefined,
  symbol: undefined,
  index: 245,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][vet.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][vet.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][vet.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const vnd = {
  name: "Vietnamese dong",
  value: "vnd",
  icon: undefined,
  symbol: undefined,
  index: 246,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][vnd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][vnd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][vnd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const vuv = {
  name: "Vanuatu vatu",
  value: "vuv",
  icon: undefined,
  symbol: undefined,
  index: 247,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][vuv.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][vuv.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][vuv.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const waves = {
  name: "Waves",
  value: "waves",
  icon: undefined,
  symbol: undefined,
  index: 248,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][waves.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][waves.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][waves.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const wbtc = {
  name: "Wrapped Bitcoin",
  value: "wbtc",
  icon: undefined,
  symbol: undefined,
  index: 249,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][wbtc.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][wbtc.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][wbtc.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const wemix = {
  name: "WEMIX",
  value: "wemix",
  icon: undefined,
  symbol: undefined,
  index: 250,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][wemix.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][wemix.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][wemix.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const wst = {
  name: "Samoan tala",
  value: "wst",
  icon: undefined,
  symbol: undefined,
  index: 251,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][wst.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][wst.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][wst.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const xaf = {
  name: "Central African CFA franc",
  value: "xaf",
  icon: undefined,
  symbol: undefined,
  index: 252,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][xaf.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][xaf.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][xaf.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const xag = {
  name: "Silver Ounce",
  value: "xag",
  icon: undefined,
  symbol: undefined,
  index: 253,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][xag.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][xag.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][xag.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const xau = {
  name: "XauCoin",
  value: "xau",
  icon: undefined,
  symbol: undefined,
  index: 254,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][xau.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][xau.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][xau.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const xcd = {
  name: "East Caribbean dollar",
  value: "xcd",
  icon: undefined,
  symbol: undefined,
  index: 255,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][xcd.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][xcd.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][xcd.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const xch = {
  name: "Chia",
  value: "xch",
  icon: undefined,
  symbol: undefined,
  index: 256,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][xch.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][xch.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][xch.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const xdc = {
  name: "XDC Network",
  value: "xdc",
  icon: undefined,
  symbol: undefined,
  index: 257,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][xdc.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][xdc.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][xdc.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const xdr = {
  name: "Special Drawing Rights",
  value: "xdr",
  icon: undefined,
  symbol: undefined,
  index: 258,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][xdr.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][xdr.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][xdr.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const xec = {
  name: "Eternal Coin",
  value: "xec",
  icon: undefined,
  symbol: undefined,
  index: 259,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][xec.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][xec.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][xec.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const xem = {
  name: "NEM",
  value: "xem",
  icon: undefined,
  symbol: undefined,
  index: 260,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][xem.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][xem.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][xem.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const xlm = {
  name: "Stellar",
  value: "xlm",
  icon: undefined,
  symbol: undefined,
  index: 261,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][xlm.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][xlm.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][xlm.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const xmr = {
  name: "Monero",
  value: "xmr",
  icon: undefined,
  symbol: undefined,
  index: 262,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][xmr.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][xmr.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][xmr.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const xof = {
  name: "West African CFA franc",
  value: "xof",
  icon: undefined,
  symbol: undefined,
  index: 263,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][xof.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][xof.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][xof.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const xpf = {
  name: "CFP franc",
  value: "xpf",
  icon: undefined,
  symbol: undefined,
  index: 264,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][xpf.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][xpf.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][xpf.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const xrp = {
  name: "XRP",
  value: "xrp",
  icon: undefined,
  symbol: undefined,
  index: 265,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][xrp.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][xrp.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][xrp.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const xtz = {
  name: "Tezos",
  value: "xtz",
  icon: undefined,
  symbol: undefined,
  index: 266,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][xtz.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][xtz.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][xtz.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const yer = {
  name: "Yemeni rial",
  value: "yer",
  icon: undefined,
  symbol: undefined,
  index: 267,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][yer.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][yer.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][yer.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const zar = {
  name: "South African rand",
  value: "zar",
  icon: undefined,
  symbol: undefined,
  index: 268,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][zar.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][zar.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][zar.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const zec = {
  name: "ZCash",
  value: "zec",
  icon: undefined,
  symbol: undefined,
  index: 269,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][zec.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][zec.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][zec.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const zil = {
  name: "Zilliqa",
  value: "zil",
  icon: undefined,
  symbol: undefined,
  index: 270,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][zil.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][zil.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][zil.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const zmk = {
  name: "Zambian kwacha",
  value: "zmk",
  icon: undefined,
  symbol: undefined,
  index: 271,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][zmk.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][zmk.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][zmk.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const zmw = {
  name: "Zambian Kwacha",
  value: "zmw",
  icon: undefined,
  symbol: undefined,
  index: 272,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][zmw.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][zmw.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][zmw.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const zwl = {
  name: "Zimbabwean Dollar",
  value: "zwl",
  icon: undefined,
  symbol: undefined,
  index: 273,
  convert: (v, t, p) => {
    const d1 = sessionStorage.getItem("lastUpdated");
    if (d1)
      try {
        const date = new Date(d1);
        const currentDate = new Date();
        if (date.getUTCDate() === currentDate.getUTCDate()) {
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][zwl.value]))
            .toDecimalPlaces(p);
        } else {
          updateData(url);
          const data = JSON.parse(sessionStorage.getItem("currencyData"));
          return d(data["usd"][t.value])
            .mul(v)
            .div(d(data["usd"][zwl.value]))
            .toDecimalPlaces(p);
        }
      } catch (e) {
        console.log(e);
        return d("0");
      }
    else
      try {
        updateData(url);
        const data = JSON.parse(sessionStorage.getItem("currencyData"));
        return d(data["usd"][t.value])
          .mul(v)
          .div(d(data["usd"][zwl.value]))
          .toDecimalPlaces(p);
      } catch (e) {
        console.log(e);
        return d("0");
      }
  },
};
const currencyUnit = {
  inch1,
  aave,
  ada,
  aed,
  afn,
  algo,
  all,
  amd,
  amp,
  ang,
  aoa,
  ar,
  ars,
  atom,
  aud,
  avax,
  awg,
  axs,
  azn,
  bake,
  bam,
  bat,
  bbd,
  bch,
  bdt,
  bgn,
  bhd,
  bif,
  bmd,
  bnb,
  bnd,
  bob,
  brl,
  bsd,
  bsv,
  bsw,
  btc,
  btcb,
  btg,
  btn,
  busd,
  bwp,
  byn,
  byr,
  bzd,
  cad,
  cake,
  cdf,
  celo,
  chf,
  chz,
  clp,
  cny,
  comp,
  cop,
  crc,
  cro,
  crv,
  cuc,
  cup,
  cve,
  cvx,
  czk,
  dai,
  dash,
  dcr,
  dfi,
  djf,
  dkk,
  doge,
  dop,
  dot,
  dzd,
  egld,
  egp,
  enj,
  eos,
  ern,
  etb,
  etc,
  eth,
  eur,
  fei,
  fil,
  fjd,
  fkp,
  flow,
  frax,
  ftm,
  ftt,
  gala,
  gbp,
  gel,
  ggp,
  ghs,
  gip,
  gmd,
  gnf,
  gno,
  grt,
  gt,
  gtq,
  gyd,
  hbar,
  hkd,
  hnl,
  hnt,
  hot,
  hrk,
  ht,
  htg,
  huf,
  icp,
  idr,
  ils,
  imp,
  inj,
  inr,
  iqd,
  irr,
  isk,
  jep,
  jmd,
  jod,
  jpy,
  kas,
  kava,
  kcs,
  kda,
  kes,
  kgs,
  khr,
  klay,
  kmf,
  knc,
  kpw,
  krw,
  ksm,
  kwd,
  kyd,
  kzt,
  lak,
  lbp,
  leo,
  link,
  lkr,
  lrc,
  lrd,
  lsl,
  ltc,
  ltl,
  luna,
  lvl,
  lyd,
  mad,
  mana,
  matic,
  mdl,
  mga,
  mina,
  miota,
  mkd,
  mkr,
  mmk,
  mnt,
  mop,
  mro,
  mur,
  mvr,
  mwk,
  mxn,
  myr,
  mzn,
  nad,
  near,
  neo,
  nexo,
  ngn,
  nio,
  nok,
  npr,
  nzd,
  okb,
  omr,
  one,
  pab,
  paxg,
  pen,
  pgk,
  php,
  pkr,
  pln,
  pyg,
  qar,
  qnt,
  qtum,
  ron,
  rsd,
  rub,
  rune,
  rwf,
  sand,
  sar,
  sbd,
  scr,
  sdg,
  sek,
  sgd,
  shib,
  shp,
  sle,
  sll,
  sol,
  sos,
  srd,
  std,
  stx,
  svc,
  syp,
  szl,
  thb,
  theta,
  tjs,
  tmt,
  tnd,
  ton,
  top,
  trx,
  ty,
  ttd,
  ttt,
  tusd,
  twd,
  tzs,
  uah,
  ugx,
  uni,
  usd,
  usdc,
  usdp,
  usdt,
  uyu,
  uzs,
  vef,
  ves,
  vet,
  vnd,
  vuv,
  waves,
  wbtc,
  wemix,
  wst,
  xaf,
  xag,
  xau,
  xcd,
  xch,
  xdc,
  xdr,
  xec,
  xem,
  xlm,
  xmr,
  xof,
  xpf,
  xrp,
  xtz,
  yer,
  zar,
  zec,
  zil,
  zmk,
  zmw,
  zwl,
};
export default currencyUnit;
