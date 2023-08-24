import { useTheme } from "../providers/theme";
import {
  getContrastRatio,
  getLuminance,
  parseColour
} from "../scripts/colour";

let sty; //styles

export default function Text({
  children,
  bg = "#000",
  c = "#fff",
  isHeadingText = false,
  unit = "em",
  size = 1,
  style = {},
}) {
  sty = undefined;
  //   const { mode } = useMode();
  let background = bg.startsWith("--")
    ? parse(bg).toRGB()
    : parseColour(bg).toRGB();
  let color = c.startsWith("--") ? parse(c).toRGB() : parseColour(c).toRGB();
  const cr = getContrastRatio(background, color); //contrast ratio
  const cs = `${((isHeadingText ? 5 : 2.7) * size) / 100}${unit}`;
  const l = getLuminance(color);
  // const clr =
  //   l <= 3.5
  //     ? "#fff"
  //     : l >= 6.5
  //     ? "#000"
  //     : l > 0.5
  //     ? shade(color, l)
  //     : tint(color, l);
  const clr = l <= 0.5 ? "white" : "black";
  return children({
    ...style,
    textShadow:
      cr >= webAccessibilityLimit(isHeadingText)
        ? undefined
        : isHeadingText
        ? `0px 0px ${cs} ${clr}`
        : `${cs} ${cs} ${clr}, -${cs} ${cs} ${clr}, ${cs} -${cs} ${clr}, -${cs} -${cs} ${clr}`,
  });
}

function webAccessibilityLimit(isLargeText) {
  return isLargeText ? 3 : 4.3;
}

function parse(c) {
  if (sty === undefined) sty = window.getComputedStyle(document.body);
  return parseColour(sty.getPropertyValue(c));
}

export function Text2({ text, style, variant="p", }) {
  const isLargeText = (variant === "header" || variant === "footer" || /h[1-6]/.test(variant))
  const value = useTheme()
  const cs = `${((isLargeText ? 5 : 2.7) * value.typography.scale) / 100}em`;
  const clr = value.theme.illumination.primary <= 0.5 ? "white" : "black";
  return selectVariant(value.typography, text, variant)({...style, textShadow: value.theme.contrastRatios[0] >= webAccessibilityLimit(isLargeText) ? 
    undefined
    : isLargeText ? `0px 0px ${cs} ${clr}` : `${cs} ${cs} ${clr}, -${cs} ${cs} ${clr}, ${cs} -${cs} ${clr}, -${cs} -${cs} ${clr}` })
}
function selectVariant(typography, text="",variant="p"){
  switch(variant.toLowerCase()) {
    case "button": return button(text, typography)
    case "code": return code(text, typography)
    case "div": return div(text, typography)
    case "footer": return footer(text, typography)
    case "header": return header(text, typography)
    case "input": return input(text, typography)
    case "label": return label(text, typography)
    case "li": return li(text, typography)
    case "p": default: return p(text, typography)
    case "pre": return pre(text, typography)
    case "h1": return h(text, typography, 1)
    case "h2": return h(text, typography, 2)
    case "h3": return h(text, typography, 3)
    case "h4": return h(text, typography, 4)
    case "h5": return h(text, typography, 5)
    case "h6": return h(text, typography, 6)
    case "span": return span(text, typography)
    case "textarea": return textArea(text, typography)
  }
}
function getDefaultIfAbsent(element, family, scale) {
  return element === undefined ? {family, scale} : !(element.family && element.scale) ? element : {family, scale};
}
export function p(text, typography){
  const f = getDefaultIfAbsent(typography.p, typography.sansSerif, 1.1)
  return function({style}){
    return <p style={{...style, fontFamily: f.family, fontSize: `${12 *  f.scale}pt`}}>{text}</p>
  }
}
export function h(text, typography, index = 1){
  return function({style}){
    switch(index) {
      case 6: return <h6 style={{...style, fontFamily:  typography.h6 ? typography.h6.family : typography.serif, fontSize: `${12 * (typography.h6 ? typography.h6.scale: 1.3)}pt`}}>{text}</h6>
      case 5: return <h5 style={{...style, fontFamily:  typography.h5 ? typography.h5.family : typography.serif, fontSize: `${12 * (typography.h5 ? typography.h5.scale: 1.5)}pt`}}>{text}</h5>
      case 4: return <h4 style={{...style, fontFamily:  typography.h4 ? typography.h4.family : typography.serif, fontSize: `${12 * (typography.h4 ? typography.h4.scale: 1.7)}pt`}}>{text}</h4>
      case 3: return <h3 style={{...style, fontFamily:  typography.h3 ? typography.h3.family : typography.serif, fontSize: `${12 * (typography.h3 ? typography.h3.scale: 1.9)}pt`}}>{text}</h3>
      case 2: return <h2 style={{...style, fontFamily:  typography.h2 ? typography.h2.family : typography.serif, fontSize: `${12 * (typography.h2 ? typography.h2.scale: 2.1)}pt`}}>{text}</h2>
      case 1: default: return <h1 style={{...style, fontFamily:  typography.h1 ? typography.h1.family : typography.serif, fontSize: `${12 * (typography.h1 ? typography.h1.scale: 2.3)}pt`}}>{text}</h1>
    }
  }
}
export function button(text, typography){
  const f = getDefaultIfAbsent(typography.button, typography.sansSerif, 1)
  return function({style}){
    return <button style={{...style, fontFamily: f.family, fontSize: `${12 *  f.scale}pt`}}>{text}</button>
  }
}
export function code(text, typography){
  const f = getDefaultIfAbsent(typography.code, typography.monospace, 1.1)
  return function({style}){
    return <code style={{...style, fontFamily: f.family, fontSize: `${12 *  f.scale}pt`}}>{text}</code>
  }
}
export function div(text, typography){
  const f = getDefaultIfAbsent(typography.div, typography.sansSerif, 1.1)
  return function({style}){
    return <div style={{...style, fontFamily: f.family, fontSize: `${12 *  f.scale}pt`}}>{text}</div>
  }
}
export function footer(text, typography){
  const f = getDefaultIfAbsent(typography.footer, typography.serif, 1.1)
  return function({style}){
    return <footer style={{...style, fontFamily: f.family, fontSize: `${12 *  f.scale}pt`}}>{text}</footer>
  }
}
export function header(text, typography){
  const f = getDefaultIfAbsent(typography.header, typography.serif, 1.1)
  return function({style}){
    return <header style={{...style, fontFamily: f.family, fontSize: `${12 *  f.scale}pt`}}>{text}</header>
  }
}
export function input(text, typography){
  const f = getDefaultIfAbsent(typography.input, typography.sansSerif, 1.1)
  return function({style}){
    return <input style={{...style, fontFamily: f.family, fontSize: `${12 *  f.scale}pt`}}>{text}</input>
  }
}
export function label(text, typography){
  const f = getDefaultIfAbsent(typography.label, typography.serif, 1.1)
  return function({style}){
    return <label style={{...style, fontFamily: f.family, fontSize: `${12 *  f.scale}pt`}}>{text}</label>
  }
}
export function li(text, typography){
  const f = getDefaultIfAbsent(typography.li, typography.sansSerif, 1)
  return function({style}){
    return <li style={{...style, fontFamily: f.family, fontSize: `${12 *  f.scale}pt`}}>{text}</li>
  }
}
export function pre(text, typography){
  const f = getDefaultIfAbsent(typography.pre, typography.monospace, 1.3)
  return function({style}){
    return <pre style={{...style, fontFamily: f.family, fontSize: `${12 *  f.scale}pt`}}>{text}</pre>
  }
}
export function span(text, typography){
  const f = getDefaultIfAbsent(typography.span, typography.sansSerif, 1)
  return function({style}){
    return <span style={{...style, fontFamily: f.family, fontSize: `${12 *  f.scale}pt`}}>{text}</span>
  }
}
export function textArea(text, typography){
  const f = getDefaultIfAbsent(typography.textArea, typography.sansSerif, 1)
  return function({style}){
    return <textarea style={{...style, fontFamily: f.family, fontSize: `${12 *  f.scale}pt`}}>{text}</textarea>
  }
}
