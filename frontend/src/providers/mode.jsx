import { createContext, useContext, useState } from "react";
import { getLuminance, parseColour } from "../scripts/colour";

const ModeContext = createContext({
  priLum: 0.9,
  secLum: 0.1,
  accLum: 0.5,
  // ratios: [2.3, 4.5, 6.0]
});

// const TypoContext = createContext({
//   h1: [2.3, "em"],
//   h2: [2.1, "em"],
//   h3: [1.9, "em"],
//   h4: [1.7, "em"],
//   h5: [1.5, "em"],
//   h6: [1.3, "em"],
//   p: [1.1, "em"]
// })

const ModeProvider = ({ children }) => {
  const styles = window.getComputedStyle(document.body);

  const primary = parseColour(styles.getPropertyValue("--c1"))
  const secondary = parseColour(styles.getPropertyValue("--c2"))
  const accent = parseColour(styles.getPropertyValue("--info-clr"))

  const [mode, setMode] = useState({
    priLum: getLuminance(primary.toRGB()),
    secLum: getLuminance(secondary.toRGB()),
    accLum: getLuminance(accent.toRGB()),
    // ratios: [getContrastRatio(primary.toRGB(), secondary.toRGB()), getContrastRatio(primary.toRGB(), accent.toRGB()), getContrastRatio(accent.toRGB(), secondary.toRGB())]
  });

  const setPriLum = (priLum) =>
    setMode((prevMode) => ({
      ...prevMode,
      priLum,
    }));
  const setSecLum = (secLum) =>
    setMode((prevMode) => ({
      ...prevMode,
      secLum,
    }));
  const setAccLum = (accLum) =>
    setMode((prevMode) => ({
      ...prevMode,
      accLum,
    }));

  return (
    <ModeContext.Provider value={{ mode, setPriLum, setSecLum, setAccLum }}>
      {children}
    </ModeContext.Provider>
  );
};

// const TypoProvider = ({children}) => {}

export default ModeProvider;
export const useMode = () => useContext(ModeContext);
// export const useTypo = () => useContext(TypoContext);
