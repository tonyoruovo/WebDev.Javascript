import { getContrastRatio, RGBA, shade, tint } from "../scripts/colour";

/**
 * The following are the only valid values for `index`: \
 * \
 * `0` - for information accents (winter) \
 * `1` - for sucess accents (spring) \
 * `2` - for warning accents (autumn) \
 * `3` - for error accents (summer)
 * ```jsx
 * <ButtonStyle theme={ui.ui} index={1} />
 * <button className="btn">Click me!</button>
 * <button className="btn accent">Press me, I'm important!</button>
 * ```
 * This also supports disabled, hover and active effects.
 * I may have a neutral style component in the future.
 * @param {any} param0
 * @returns
 */
const ButtonStyle = ({ theme, index = 0 }) => {
  index = Math.min(Math.max(index, 0), 3);
  return theme.illumination.primary < 0.35 ? (
    <Dark theme={theme} index={index} />
  ) : theme.illumination.primary <= 0.5 ? (
    <HumidDark theme={theme} index={index} />
  ) : theme.illumination.primary < 0.65 ? (
    <HumidRegular theme={theme} index={index} />
  ) : (
    <Regular theme={theme} index={index} />
  );
};

export function Dark({ theme, index = 0 }) {
  const clr = theme.illumination.primary < 0.5 ? "white" : "black";
  const cs = `${(2.7 * 1.1) / 100}em`;
  return (
    <style>
      {`
      button.btn {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        border: .1em solid transparent;
        border-radius: .18em;
        background-color: ${theme.secondary.toString()};
        color: ${theme.primary.toString()};
        cursor: pointer;
        transition: all 256ms ease-in-out;
      }
      button.btn:hover:not(:disabled) {
        border-color: ${theme.secondary.toString()};
        background-color:${theme.primary.toString()};
        color:${theme.secondary.toString()};
      }
      button.btn:active:not(:disabled) {
        scale: .9;
      }
      button.btn:disabled {
        border-color: transparent;
        background-color:${(theme.illumination.secondary < 0.5
          ? tint(theme.grayScale.secondary, 0.5)
          : shade(theme.grayScale.secondary, 0.5)
        ).toString()};
        color:${tint(theme.grayScale.primary, 0.9).toString()};
        cursor: not-allowed;
      }${darkAccent(theme, cs, clr, index)}
      `}
    </style>
  );
}

function darkAccent(theme, cs, clr, i) {
  return `button.accent {
    border-color: ${theme.others[i].toString()};
    background-color:${theme.primary.toString()};
    color:${theme.others[i].toString()};
    ${
      getContrastRatio(theme.primary.toRGB(), theme.others[i].toRGB()) >= 4.3
        ? ""
        : `text-shadow:${cs} ${cs} ${clr}, -${cs} ${cs} ${clr}, ${cs} -${cs} ${clr}, -${cs} -${cs} ${clr};`
    }
  }
  button.accent:hover:not(:disabled) {
    border-color: transparent;
    background-color:${theme.others[i].toString()};
    color:${theme.primary.toString()};
  }
  button.accent:disabled {
    background-color:${tint(theme.grayScale.primary, 0.5).toString()};
    color:${(theme.illumination.others[i] < 0.5
      ? tint(theme.grayScale.others[i], 0.9)
      : shade(theme.grayScale.others[i], 0.9)
    ).toString()};
  }
  `;
}

export function Regular({ theme, index = 0 }) {
  const clr = theme.illumination.primary < 0.5 ? "white" : "black";
  const cs = `${(2.7 * 1.1) / 100}em`;
  return (
    <style>
      {`
      button.btn {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        border: .1em solid ${theme.secondary.toString()};
        border-radius: .18em;
        background-color: ${theme.primary.toString()};
        color: ${theme.secondary.toString()};
        cursor: pointer;
        transition: all 256ms ease-in-out;
      }
      button.btn:hover:not(:disabled) {
        border-color: transparent;
        background-color:${theme.secondary.toString()};
        color:${theme.primary.toString()};
      }
      button.btn:active:not(:disabled) {
        scale: .9;
      }
      button.btn:disabled {
        border-color: transparent;
        background-color:${shade(theme.grayScale.primary, 0.5).toString()};
        color:${(theme.illumination.secondary < 0.5
          ? tint(theme.grayScale.secondary, 0.9)
          : shade(theme.grayScale.secondary, 0.9)
        ).toString()};
        cursor: not-allowed;
      }${regularAccent(theme, cs, clr, index)}
      `}
    </style>
  );
}

function regularAccent(theme, cs, clr, i) {
  return `button.accent {
    border-color: transparent;
    background-color:${theme.others[i].toString()};
    color:${theme.primary.toString()};
    ${
      getContrastRatio(theme.primary.toRGB(), theme.others[i].toRGB()) >= 4.3
        ? ""
        : `text-shadow:${cs} ${cs} ${clr}, -${cs} ${cs} ${clr}, ${cs} -${cs} ${clr}, -${cs} -${cs} ${clr};`
    }
  }
  button.accent:hover:not(:disabled) {
    border-color: ${theme.others[i].toString()};
    background-color:${theme.primary.toString()};
    color:${theme.others[i].toString()};
  }
  button.accent:disabled {
    background-color:${(theme.illumination.others[i] < 0.5
      ? tint(theme.grayScale.others[i], 0.5)
      : shade(theme.grayScale.others[i], 0.5)
    ).toString()};
    color:${(theme.illumination.secondary < 0.5
      ? tint(theme.grayScale.secondary, 0.9)
      : shade(theme.grayScale.secondary, 0.9)
    ).toString()};
  }`;
}

export function HumidDark({ theme, index = 0 }) {
  return (
    <style>
      {`
  button.btn {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    border: .1em solid transparent;
    border-radius: .18em;
    background-color: white;
    color: ${theme.primary.toString()};
    cursor: pointer;
    transition: all 256ms ease-in-out;
  }
  button.btn:hover:not(:disabled) {
    border-color: white;
    background-color:${theme.primary.toString()};
    color: white;
  }
  button.btn:active:not(:disabled) {
    scale: .9;
  }
  button.btn:disabled {
    border-color: transparent;
    background-color: ${shade(new RGBA(0xff, 0xff, 0xff), 0.5).toString()};
    color:${tint(theme.grayScale.primary, 0.9).toString()};
    cursor: not-allowed;
  }${humidDarkAccent(theme, index)}
  `}
    </style>
  );
}

function humidDarkAccent({
  theme,
  cs = `${(2.7 * 1.1) / 100}em`,
  clr = "black",
  i,
}) {
  return `button.accent {
    border-color: ${theme.tones.others[i][2].toString()};;
    background-color:${theme.primary.toString()};
    color:${theme.tones.others[i][2].toString()};;
    ${
      getContrastRatio(
        theme.primary.toRGB(),
        theme.tones.others[i][2].toRGB()
      ) >= 4.3
        ? ""
        : `text-shadow:${cs} ${cs} ${clr}, -${cs} ${cs} ${clr}, ${cs} -${cs} ${clr}, -${cs} -${cs} ${clr};`
    }
  }
  button.accent:hover:not(:disabled) {
    border-color: transparent;
    background-color:${theme.tones.others[i][2].toString()};;
    color:${theme.primary.toString()};
  }
  button.accent:disabled {
    background-color:${tint(theme.grayScale.primary, 0.5).toString()};
    color:${(theme.illumination.others[i] < 0.5
      ? tint(theme.grayScale.others[i], 0.9)
      : shade(theme.grayScale.others[i], 0.9)
    ).toString()};
  }
  `;
}

export function HumidRegular({ theme, index = 0 }) {
  return (
    <style>
      {`
      button.btn {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        border: .1em solid black;
        border-radius: .18em;
        background-color: ${theme.primary.toString()};
        color: black;
        cursor: pointer;
        transition: all 256ms ease-in-out;
      }
      button.btn:hover:not(:disabled) {
        border-color: transparent;
        background-color:black;
        color:${theme.primary.toString()};
      }
      button.btn:active:not(:disabled) {
        scale: .9;
      }
      button.btn:disabled {
        border-color: transparent;
        background-color:${shade(theme.grayScale.primary, 0.5).toString()};
        color:${tint(new RGBA(), 0.9).toString()};
        cursor: not-allowed;
      }${humidRegularAccent(theme, index)}
      `}
    </style>
  );
}

function humidRegularAccent(
  theme,
  cs = `${(2.7 * 1.1) / 100}em`,
  clr = "white",
  i
) {
  return `button.accent {
    border-color: transparent;
    background-color:${theme.shades.others[i][15].toString()};
    color:${theme.primary.toString()};
    ${
      getContrastRatio(
        theme.primary.toRGB(),
        theme.shades.others[i][15].toRGB()
      ) >= 4.3
        ? ""
        : `text-shadow:${cs} ${cs} ${clr}, -${cs} ${cs} ${clr}, ${cs} -${cs} ${clr}, -${cs} -${cs} ${clr};`
    }
  }
  button.accent:hover:not(:disabled) {
    border-color: ${theme.shades.others[i][15].toString()};
    background-color:${theme.primary.toString()};
    color:${theme.shades.others[i][15].toString()};
  }
  button.accent:disabled {
    background-color:${shade(theme.grayScale.others[i], 0.5).toString()};
    color:${(theme.illumination.secondary < 0.5
      ? tint(theme.grayScale.secondary, 0.9)
      : shade(theme.grayScale.secondary, 0.9)
    ).toString()};
  }`;
}

export default ButtonStyle;
