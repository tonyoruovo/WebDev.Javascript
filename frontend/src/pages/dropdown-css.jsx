/* eslint-disable jsx-a11y/no-redundant-roles */
import { useId, useRef, useState } from "react";
import { CgChevronDown as Down, CgChevronUp as Up } from "react-icons/cg";
import { FaMinus as Mid } from "react-icons/fa";

export function Combobox({
  theme,
  typo,
  className = "combobox",
  listboxId = "options",
  options = getDefaultOption(10),
  list = false,
  width = "10em",
  dcel
}) {
  const cId = useId(); //Combobox id, static property
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(-1);
  const comboRef = useRef();
  
  const isWithinRange = (v, ar) => v > -1 && v < ar.length;
  const neutralClose = (ev) => {
    if (!ev.composedPath().includes(comboRef.current)) {
      setIsOpen(false);
    }
  };
  dcel.addFunction(neutralClose)

  return (
    <>
    {list ? (<ListStyle theme={theme} typo={typo} />) :
      (<RegularStyle theme={theme} typo={typo} />)
    }
      <div className={className} ref={comboRef} style={{width: width}}>
        {/*The wrapper of the box you can have as many ad these in react */}
        {/*The search box of the combobox */}
        <input
          style={{width: list?f(width):undefined}}
          type="text"
          placeholder="Enter theme ..."
          id={cId}
          onChange={(ev) => setSearch(ev.currentTarget.value)}
          onKeyUp={() => setIsOpen(search.length > 0)}
          role="combobox"
          value={search}
          aria-expanded={isOpen ? true : false}
          aria-controls="options-0"
          aria-autocomplete="list"
        />
        {/*The button that displays the dropdown*/}
        <button
          tabIndex="-1"
          role="button"
          title="click to see options"
          onClick={() => {
            setIsOpen((isOpen) => !isOpen);
            setSearch("")
            if (isOpen)
              comboRef.current.querySelector('[role="listbox"]').focus();
          }}
        >
          <Up className="icon-u" />
          <Mid className="icon-m" />
          <Down className="icon-d" />
        </button>
        {/*The dropdown proper*/}
        <ul
          id={`${listboxId}-${cId}`}
          tabIndex="0"
          role="listbox"
          aria-activedescendant={
            isWithinRange(current, options) ? `${cId}${current}` : ""
          }
          aria-label="combo-box"
          autoFocus={isOpen && search.length < 1 ? true : false}
        >
          {options.map((e, i) => (
            <li
              id={`${cId}${i}`}
              tabIndex="0"
              data-value={e.value}
              role="option"
              aria-selected={current === i ? true : false}
              key={i}
              onClick={() => {
                setCurrent(i);
                setSearch(e.text);
                setIsOpen(false);
              }}
              onKeyDown={(ev) => {
                if (ev.code.toLowerCase() === "enter") {
                  setCurrent(i);
                  setSearch(e.text);
                  setIsOpen(false);
                }
              }}
              style={{
                display:
                  search.length < 1
                    ? ""
                    : e.text.toUpperCase().indexOf(search.toUpperCase()) > -1
                    ? ""
                    : "none",
              }}
            >
              {e.text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const RegularStyle = ({theme, typo}) => {
  return (<style type="text/css">
  {`
.combobox {
  position: relative;
  display: flex;
  /*flex-direction, flex-wrap*/
  flex-flow: row nowrap;
  font-size: 1.2em;
}
.combobox [role="button"] {
  /*flex-grow, flex-shrink, flex-basis*/
  /*flex: 0.1 0.2 17.5%;*/
  display: flex;
  width: 20%;
  flex-direction: row;
  justify-content: center;
  border: .1em solid ${theme.secondary.toString()};
  border-radius: .18em;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: ${theme.primary.toString()};
  color: ${theme.secondary.toString()};
  border-left: none;
}
.combobox [role="button"]:hover {
  border-color: transparent;
  background-color: ${theme.secondary.toString()};
  color: ${theme.primary.toString()};
}
.combobox [role="button"]:active { scale: .9; }
.combobox [role="button"] [class*="icon"] {
   /*width: 1.3em;
   height: 1.3em;*/
  font-size: 1.5em;
  display: none;
}
.combobox
  [role="combobox"][aria-expanded="true"]:not(
    [role="combobox"]:focus-within
  )
  ~ [role="button"]
  .icon-u {
  display: block;
}
.combobox
  [role="combobox"][aria-expanded="false"]:not(
    [role="combobox"]:focus-within
  )
  ~ [role="button"]
  .icon-d {
  display: block;
}
.combobox [role="combobox"] {
  /*flex-grow, flex-shrink, flex-basis*/
  /*grow is multiplied by the width (height in case direction is column) of the remaining empty space and the result added to the width if it is smaller than the width of the parent*/
  /*shrink is multiplied by the width (height in case direction is column) of the missing space and the result subtracted from the width if ot is smaller than the width of the parent*/
  /*basis is the initial width (height in case direction is column)*/
  flex: .1 .1 50%;
  position: relative;
  border: .1em solid ${theme.secondary.toString()};
  border-radius: .18em;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  background-color: ${theme.primary.toString()};
  color: ${theme.secondary.toString()};
  border-right: none;
  font-family: ${typo.sansSerif};
  caret-color: ${theme.secondary.toString()};
}
.combobox [role="combobox"]::placeholder {color: ${theme.illumination.secondary < .5 ? theme.tints.secondary[5].toString() : theme.shades.secondary[7].toString()}}
.combobox [role="combobox"]:placeholder-shown {color: ${theme.illumination.secondary < .5 ? theme.tints.secondary[5].toString() : theme.shades.secondary[7].toString()}}
.combobox [role="combobox"]:-moz-placeholder {color: ${theme.illumination.secondary < .5 ? theme.tints.secondary[5].toString() : theme.shades.secondary[7].toString()}}
.combobox [role="combobox"]::-moz-placeholder {color: ${theme.illumination.secondary < .5 ? theme.tints.secondary[5].toString() : theme.shades.secondary[7].toString()}}
.combobox [role="combobox"]:-ms-input-placeholder {color: ${theme.illumination.secondary < .5 ? theme.tints.secondary[5].toString() : theme.shades.secondary[7].toString()}}
.combobox [role="combobox"]::-webkit-input-placeholder {color: ${theme.illumination.secondary < .5 ? theme.tints.secondary[5].toString() : theme.shades.secondary[7].toString()}}
.combobox [role="combobox"]:focus {outline:none;border-color:${theme.others[0].toString()}}
.combobox [role="combobox"]:focus-within ~ [role="button"] .icon-m {
  display: block;
}
.combobox [role="listbox"] {
  display: none;
  flex-flow: column nowrap;
  position: absolute;
  background-color: ${theme.shades.primary[11].toString()};
  top: 100%;
  width: 100%;
  height: fit-content;
  max-height: 10em;
  overflow: auto scroll;
  padding: 0;
  margin: 0;
  z-index: -99999;
  box-shadow: 2px 2px black;
  scrollbar-width: none;
  /* opacity: 0;
  transition-property: opacity;
  transition-duration: 512ms;
  transition-timing-function: ease-in-out; */
}
.combobox [role="listbox"]::-webkit-scrollbar {width:0;height:0;}
.combobox
  [role="combobox"]:not([aria-expanded="false"])
  ~ [role="listbox"] {
  display: flex;
  z-index: 99999999;
  /* opacity: 1; */
}
.combobox [role="listbox"] [role="option"] {
  list-style-type: none;
  background-color: ${theme.primary.toString()};
  color: ${theme.secondary.toString()};
  width: calc(100% - .5em);
  margin: .2em 0;
  padding: 0.5em 0 0.5em 0.5em;
}
.combobox [role="listbox"] [role="option"]:focus,
.combobox [role="listbox"] [role="option"]:hover {
  background-color: ${theme.secondary.toString()};
  color: ${theme.primary.toString()};
}
.combobox [role="listbox"] [aria-selected="true"] {
  background-color: ${theme.others[0].toString()};
  color: ${theme.primary.toString()};
}
`}
</style>)
}
const ListStyle = ({theme,typo}) => {
  return<style>{`.combobox {
    display:flex;
    flex-flow: wrap;
    font-size: 1.2em;
  }
  .combobox [role="button"] {
    flex: 0 .2 20%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: .1em solid ${theme.secondary.toString()};
    border-radius: .18em;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    /*border-right-width: 0;*/
    background-color: ${theme.primary.toString()};
    color: ${theme.secondary.toString()};
    border-left: none;
  }
  .combobox [role="button"]:hover {
    border-color: transparent;
    background-color: ${theme.secondary.toString()};
    color: ${theme.primary.toString()};
  }
  .combobox [role="button"]:active { scale: .9; }
  .combobox [role="button"] [class*="icon"] {
     /*width: 1.3em;
     height: 1.3em;*/
    font-size: 1.5em;
    display: none;
  }
  .combobox
    [role="combobox"][aria-expanded="true"]:not(
      [role="combobox"]:focus-within
    )
    ~ [role="button"]
    .icon-u {
    display: block;
  }
  .combobox
    [role="combobox"][aria-expanded="false"]:not(
      [role="combobox"]:focus-within
    )
    ~ [role="button"]
    .icon-d {
    display: block;
  }
  .combobox [role="combobox"] {
    flex: 1 .5 0%;
    border: .1em solid ${theme.secondary.toString()};
    border-radius: .18em;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    /*border-left-width: 0;*/
    background-color: ${theme.primary.toString()};
    color: ${theme.secondary.toString()};
    border-right: none;
    font-family: ${typo.sansSerif};
    caret-color: ${theme.secondary.toString()};
  }
  .combobox [role="combobox"]::placeholder {color: ${theme.illumination.secondary < .5 ? theme.tints.secondary[5].toString() : theme.shades.secondary[7].toString()}}
  .combobox [role="combobox"]:placeholder-shown {color: ${theme.illumination.secondary < .5 ? theme.tints.secondary[5].toString() : theme.shades.secondary[7].toString()}}
  .combobox [role="combobox"]:-moz-placeholder {color: ${theme.illumination.secondary < .5 ? theme.tints.secondary[5].toString() : theme.shades.secondary[7].toString()}}
  .combobox [role="combobox"]::-moz-placeholder {color: ${theme.illumination.secondary < .5 ? theme.tints.secondary[5].toString() : theme.shades.secondary[7].toString()}}
  .combobox [role="combobox"]:-ms-input-placeholder {color: ${theme.illumination.secondary < .5 ? theme.tints.secondary[5].toString() : theme.shades.secondary[7].toString()}}
  .combobox [role="combobox"]::-webkit-input-placeholder {color: ${theme.illumination.secondary < .5 ? theme.tints.secondary[5].toString() : theme.shades.secondary[7].toString()}}
  .combobox [role="combobox"]:focus {outline:none;border-color:${theme.others[0].toString()};}
  .combobox [role="combobox"]:focus-within ~ [role="button"] .icon-m {
    display: block;
  }
  .combobox [role="listbox"] {
    display: flex;
    flex-flow: column nowrap;
    background-color: ${theme.shades.primary[11].toString()};
    width: 100%;
    overflow: hidden;
    height: 0;
    max-height: 10em;
    padding: 0;
    margin: 0;
    scrollbar-width: none;
    pointer-events: none;
    font-family: ${typo.sansSerif};
  /*transition-property: height;
    transition-delay: 100ms;
    transition-duration: 512ms;
    transition-timing-function: ease-in-out;*/
  }
  .combobox [role="listbox"]::-webkit-scrollbar {width:0;height:0;}
  .combobox
    [role="combobox"]:not([aria-expanded="false"])
    ~ [role="listbox"] {
    overflow: auto scroll;
    height: fit-content;
    pointer-events: unset;
  }
  .combobox [role="listbox"] [role="option"] {
    list-style-type: none;
    background-color: ${theme.primary.toString()};
    color: ${theme.secondary.toString()};
    width: calc(100% - .5em);
    margin: .2em 0;
    padding: 0.5em 0 0.5em 0.5em;
  }
  .combobox [role="listbox"] [role="option"]:focus,
  .combobox [role="listbox"] [role="option"]:hover {
    background-color: ${theme.secondary.toString()};
    color: ${theme.primary.toString()};
  }
  .combobox [role="listbox"] [aria-selected="true"] {
    background-color: ${theme.others[0].toString()};
    color: ${theme.primary.toString()};
  }
  `}</style>
}

const getDefaultOption = (num) => {
  const rv = [];
  for (let i = 0; i < num; i++) {
    rv.push({ value: i, text: `Theme ${i + 1}` });
  }
  return rv;
};

const f = (unit,divisor=2,matcher=/(?:%|[A-za-z]+)/)=> `${Number.parseFloat(unit) / divisor}${matcher.exec(unit)[0]}`
