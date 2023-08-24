import { useRef, useCallback, useState, useLayoutEffect } from "react";
import {
  BsBrightnessHigh as Light,
  BsHouse,
  BsHouseFill,
  BsCloudMoonFill as HumidDark,
  BsCloudSun as HumidLight,
  BsMoonFill as Dark,
  BsPersonPlus as Register,
  BsPersonPlusFill as RegisterFill,
  BsPerson as User,
  BsPersonFill as UserFill,
  BsList,
  BsThreeDotsVertical,
  BsX,
} from "react-icons/bs";
import {
  MdLogin as Login,
  MdLogout as Logout,
  MdAssignment as AssignmentFilled,
  MdOutlineAssignment as Assignment,
} from "react-icons/md";
import { IoSearch as S, IoSearchCircle as SF } from "react-icons/io5";
import { Combobox } from "../pages/dropdown-css";
import { useUI } from "../providers/ui";
import { useAccount } from "../providers/account";
import { useDimension } from "../providers/dimen";
import { useDocumentClickEventListener } from "../providers/documentClickEventListener";
import { useL10n, extractTranx, parseElement } from "../providers/l10n";
import { Link } from "react-router-dom";

/**
 * A 2-length tuple (readonly) representing the phrase `Go to homepage`. The first element is the localisation key `gthp` and
 * the second is the generic english translation. Other translation can be gotten from a JSON file containing the complete localisation table
 * for this site.
 * @constant {[string, string]} GTHP Go to homepage
 * @type {readonly [string, string]}
 * @readonly
 */
const GTHP = Object.freeze(["gthp", "Go to homepage"]);
/**
 * A 2-length tuple (readonly) representing the phrase `search for articles`. The first element is the localisation key `sfa` and
 * the second is the generic english translation. Other translation can be gotten from a JSON file containing the complete localisation table
 * for this site.
 * @constant {[string, string]} SFA search for articles
 * @type {readonly [string, string]}
 * @readonly
 */
const SFA = Object.freeze(["sfa", "search for articles"]);
/**
 * A 2-length tuple (readonly) representing the phrase `Click to search this website`. The first element is the localisation key `ctsts` and
 * the second is the generic english translation. Other translation can be gotten from a JSON file containing the complete localisation table
 * for this site.
 * @constant {[string, string]} CTSTS Click to search this website
 * @type {readonly [string, string]}
 * @readonly
 */
const CTSTS = Object.freeze(["ctsts", "Click to search this website"]);
/**
 * A 2-length tuple (readonly). The first element is the localisation key `sap_con` and
 * the second is an array representing the generic english translation. Other translation can be gotten from a JSON file containing the complete localisation table
 * for this site.
 * @constant {[string, [string, string]]} SAP_CON
 * @type {readonly [string, [string, string]]}
 * @readonly
 */
const SAP_CON = Object.freeze(["sap_con",  ["Swap the background with foreground color", "Contrast"]]);
/**
 * A 2-length tuple (readonly). The first element is the localisation key `smpam` and
 * the second is an array representing the generic english translation. Other translation can be gotten from a JSON file containing the complete localisation table
 * for this site.
 * @constant {[string, [string, string]]} SMPAM
 * @type {readonly [string, [string, string]]}
 * @readonly
 */
const SMPAM = Object.freeze(["smpam", ["See my projects and more ...", "Api/Documentation/Projects"]]);
/**
 * A 2-length tuple (readonly) representing the phrase `Logout`. The first element is the localisation key `logout` and
 * the second is the generic english translation. Other translation can be gotten from a JSON file containing the complete localisation table
 * for this site.
 * @constant {[string, string]} SIGNOUT Logout
 * @type {readonly [string, string]}
 * @readonly
 */
const SIGNOUT = Object.freeze(["logout", "Logout"]);
/**
 * A 2-length tuple (readonly). The first element is the localisation key `acc` and
 * the second is an array representing the generic english translation. Other translation can be gotten from a JSON file containing the complete localisation table
 * for this site.
 * @constant {[string, [string, string]]} ACC
 * @type {readonly [string, [string, string]]}
 * @readonly
 */
const ACC = Object.freeze(["acc", ["Manage your account settings", "Account"]]);
/**
 * A 2-length tuple (readonly) representing the phrase `Register`. The first element is the localisation key `rgstr` and
 * the second is the generic english translation. Other translation can be gotten from a JSON file containing the complete localisation table
 * for this site.
 * @constant {[string, string]} RGSTR Register
 * @type {readonly [string, string]}
 * @readonly
 */
const RGSTR = Object.freeze(["rgstr", "Register"]);
/**
 * A 2-length tuple (readonly) representing the phrase `Login`. The first element is the localisation key `login` and
 * the second is the generic english translation. Other translation can be gotten from a JSON file containing the complete localisation table
 * for this site.
 * @constant {[string, string]} LOGIN Login
 * @type {readonly [string, string]}
 * @readonly
 */
const LOGIN = Object.freeze(["login", "Login"]);

const Header = () => {
  const ui = useUI();
  const user = useAccount();
  const dimension = useDimension();
	const { loadL10n, translationObj } = useL10n();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useLayoutEffect(() => loadL10n("header.jsx"), []);
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef();
  const menuRef = useRef();
  const dcel = useDocumentClickEventListener(); //documentClickEventListener
  function closeMobileMenuOnNeutralClick(ev) {
    if (
      !ev.composedPath().includes(mobileMenuRef.current) &&
      !ev.composedPath().includes(menuRef.current)
    ) {
      setIsOpen(false);
    }
  };
  dcel.addFunction(closeMobileMenuOnNeutralClick);

  //classes
  const icon = dimension.innerWidth > 1000 ? { marginRight: ".5em" } : {};
  const icon2 = dimension.innerWidth > 1000 ? { marginLeft: ".5em" } : {};
  const item = { marginRight: "1em" };
  const navItem = {
    listStyleType: "none",
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
  };

  return (
    <GetHeader dimension={dimension}>
      <GenericStyles dimension={dimension} theme={ui.ui} />
      <GetNav dimension={dimension}>
        <GetUl dimension={dimension}>
          <GetBrand
            dimension={dimension}
            ui={ui}
            navItem={navItem}
            icon={icon}
			obj={translationObj}
          />
          <GetInput dimension={dimension} ui={ui} navItem={navItem} obj={translationObj} />
          <GetMenu
            dimension={dimension}
            ui={ui}
            navItem={navItem}
            setIsOpen={setIsOpen}
            refer={menuRef}
          />
          <GetRightMenu
            dimension={dimension}
            ui={ui}
            isOpen={isOpen}
            refer={mobileMenuRef}
          >
            <GetRightMenuUl dimension={dimension} ui={ui}>
              <GetContrast
                dimension={dimension}
                ui={ui}
                navItem={navItem}
                item={item}
                icon={icon}
                setIsOpen={setIsOpen}
				obj={translationObj}
              />
              <GetCombobox
                dimension={dimension}
                ui={ui}
                navItem={navItem}
                item={item}
                dcel={dcel}
              />
              <GetMore
                dimension={dimension}
                ui={ui}
                navItem={navItem}
                item={item}
                icon={icon}
				obj={translationObj}
              />
              <GetUser
                dimension={dimension}
                ui={ui}
                navItem={navItem}
                item={item}
                icon={icon}
                icon2={icon2}
                user={user}
				obj={translationObj}
              />
            </GetRightMenuUl>
          </GetRightMenu>
        </GetUl>
      </GetNav>
    </GetHeader>
  );
};

const GetHeader = ({ children, dimension }) =>
  dimension.innerWidth <= 630 ? (
    <header style={{ padding: ".6em 0", margin: "0" }}>{children}</header>
  ) : (
    <header>{children}</header>
  );
const GenericStyles = ({ dimension, theme }) => {
  return dimension.innerWidth <= 630 ? (
    <style>{`.mobileMenu::-webkit-scrollbar{width:0;height:0;}header, header nav, header nav ul, header nav ul li {background-color:${(theme
      .illumination.primary < 0.5
      ? theme.tints.primary[0]
      : theme.shades.primary[4]
    ).toString()};}`}</style>
  ) : (
    <style>{`header {overflow:visible;padding:.6em 0}
      header, header nav, header nav ul, header nav ul li {margin: 0;background-color:${(theme
        .illumination.primary < 0.5
        ? theme.tints.primary[0]
        : theme.shades.primary[4]
      ).toString()};}
  header nav li {list-style-type: none;font-family:"Source Sans Pro", san-serif}
  header nav ul {
    display: flex;
    flex-flow: row nowrap;
    padding: 0;
  }
  header nav .brand {
    display: flex;
    flex: 0 0 ${dimension.innerWidth >= 1000 ? 7 : 4}%;
    justify-content: center;
    align-items: center;
  }
  header nav .search {
    display: flex;
    flex: 0 0 25%;
    justify-content: center;
    align-items: center;
  }
  header nav .right-nav {
    display: flex;
    flex: 1 1 65%;
    flex-flow: row nowrap;
    justify-content: flex-end;
  }
  header .btn {padding: .35em;}
  `}</style>
  );
};
const GetNav = ({ children, dimension }) =>
  dimension.innerWidth <= 630 ? (
    <nav style={{ margin: "0", padding: "0" }}>{children}</nav>
  ) : (
    <nav>{children}</nav>
  );
const GetUl = ({ children, dimension }) =>
  dimension.innerWidth <= 630 ? (
    <ul
      style={{
        display: "flex",
        flexFlow: "row nowrap",
        margin: "0",
        padding: "0",
        justifyContent: "space-between",
      }}
    >
      {children}
    </ul>
  ) : (
    <ul>{children}</ul>
  );
const GetBrand = ({ dimension, navItem, icon, ui, obj }) => {
	return dimension.innerWidth <= 630 ? (
    <li
      style={{
        ...navItem,
        justifyContent: "space-around",
        flex: dimension.innerWidth <= 400 ? "0 0 25%" : "0 0 10%",
        margin: "0",
        fontFamily: ui.typography.allCaps,
        fontSize: `${ui.typography.h6.scale}em`,
      }}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "center",
          alignItems: "center",
          margin: "0",
          padding: "0",
        }}
      >
        {ui.ui.illumination.primary < 0.5 ? (
          <BsHouseFill style={{ marginRight: ".5em" }} />
        ) : (
          <BsHouse style={{ marginRight: ".5em" }} />
        )}

        <HideIfInRange
          jsx={<GetProperBrand theme={ui.ui} />}
          range={{ max: 400, min: -1 }}
          dimen={dimension}
        />
      </Link>
    </li>
  ) : <>{parseElement(extractTranx(obj, GTHP[0], "header.jsx", GTHP[1]), largeBrandL10n({ui,dimension,icon}))}</>
}
const largeBrandL10n = ({ui, dimension, icon}) => (lang, dir, textContent, key) => <li
      className="brand"
      style={{ fontFamily: ui.typography.allCaps }}
	  lang={lang}
	  dir={dir}
      title={textContent}
	  key={key}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "center",
          alignItems: "center",
          margin: "0",
          padding: "0",
        }}
      >
        <HideIfInRange
          jsx={
            ui.ui.illumination.primary < 0.5 ? (
              <BsHouseFill style={{ ...icon }} />
            ) : (
              <BsHouse style={{ ...icon }} />
            )
          }
          range={{ min: 1000, max: 1200 }}
          dimen={dimension}
        />
        <HideIfInRange
          jsx={<GetProperBrand theme={ui.ui} />}
          range={{ min: -1, max: 1000 }}
          dimen={dimension}
        />
      </Link>
    </li>
const GetInput = ({ dimension, navItem, ui, obj }) =>
  dimension.innerWidth <= 630 ? (
    <li style={{ ...navItem, justifyContent: "center", flex: "0 0 60%" }}>
	{objHas(obj, "header.jsx") ? parseElement(extractTranx(obj["header.jsx"], SFA), searchInputTrue({ui})) : (<div className="loader"></div>)}
    </li>
  ) : (
    <li className="search">
	{parseElement(extractTranx(obj, SFA[0], "header.jsx", SFA[1]), searchInputFalse({ui, dimension}))}
		{parseElement(extractTranx(obj, CTSTS[0], "header.jsx", CTSTS[1]), (lang, dir, textContent, key) => <button
        type="button"
        className="btn search-btn"
		lang={lang}
		dir={dir}
		key={key}
        title={textContent}
      >
        {ui.ui.illumination.primary < 0.5 ? <SF /> : <S />}
		</button>)}
    </li>
  );
const searchInputTrue = ({ui}) => (lang, dir, textContent, key) => <input
        style={{
          fontFamily: ui.typography.sansSerif,
          fontSize: ui.typography.p.scale + "em",
          backgroundColor: ui.ui.secondary.toString(),
          color: ui.ui.primary.toString(),
          caretColor: ui.ui.primary.toString(),
          outlineColor: ui.ui.primary.toString(),
        }}
		lang={lang}
		dir={dir}
		key={key}
        placeholder={textContent}
      />
const searchInputFalse = ({ui, dimension}) => (lang, dir, textContent, key) => <input
        style={{
          width: dimension.innerWidth > 660 ? undefined : "9em",
          fontFamily: ui.typography.sansSerif,
          fontSize: ui.typography.p.scale + "em",
          backgroundColor: ui.ui.secondary.toString(),
          color: ui.ui.primary.toString(),
          caretColor: ui.ui.primary.toString(),
          outlineColor: ui.ui.primary.toString(),
        }}
		lang={lang}
		dir={dir}
		key={key}
        placeholder={textContent}
      />
const GetMenu = ({ dimension, navItem, ui, setIsOpen, refer }) =>
  dimension.innerWidth <= 630 ? (
    <li
      style={{
        ...navItem,
        justifyContent: "center",
        flex: "0 0 15%",
        fontSize: `${ui.typography.h6.scale}em`,
      }}
    >
      <button
        ref={refer}
        type="button"
        className="btn"
        onClick={() => setIsOpen(true)}
        style={{ padding: dimension.innerWidth <= 350 ? "0" : undefined }}
      >
        {dimension.innerWidth <= 350 ? (
          <BsThreeDotsVertical style={{ padding: "0", margin: "0" }} />
        ) : (
          <BsList />
        )}
      </button>
    </li>
  ) : (
    <></>
  );
const GetRightMenu = ({ children, dimension, isOpen, ui, refer }) =>
  dimension.innerWidth <= 630 ? (
    <li
      className="mobileMenu"
      ref={refer}
      style={{
        display: isOpen ? undefined : "none",
        listStyleType: "none",
        position: "absolute",
        top: "0",
        right: "0",
        left: dimension.innerWidth <= 350 ? "0" : undefined,
        down: dimension.innerWidth <= 350 ? "0" : undefined,
        overflowX: "hidden",
        overflowY: "scroll",
        scrollbarWidth: "none",
        height: "fit-content",
        maxHeight: "90vh",
        borderLeft: `.2em solid ${ui.ui.secondary.toString()}`,
        borderBottom: `.2em solid ${ui.ui.secondary.toString()}`,
      }}
    >
      {children}
    </li>
  ) : (
    <li className="right-nav">{children}</li>
  );
const GetRightMenuUl = ({ children, dimension, ui }) =>
  dimension.innerWidth <= 630 ? (
    <ul
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        position: "relative",
        backgroundColor: ui.ui.primary.toString(),
        padding: "0",
      }}
    >
      {children}
    </ul>
  ) : (
    <ul
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
      }}
    >
      {children}
    </ul>
  );
const GetContrast = ({ ui, navItem, item, dimension, icon, setIsOpen, obj }) =>
  dimension.innerWidth <= 630 ? (
    <li style={{ ...navItem, justifyContent: "space-between" }}>
      <GetContrastButton ui={ui} dimension={dimension} icon={icon} obj={obj} />
      <button
        className="btn"
        title="close"
        style={{ fontSize: "1.6em" }}
        onClick={() => setIsOpen(false)}
      >
        <BsX />
      </button>
    </li>
  ) : (
    <li style={{ ...item }}>
      <GetContrastButton ui={ui} dimension={dimension} icon={icon} obj={obj} />
    </li>
  );
const GetContrastButton = ({ ui, dimension, icon, obj }) => <>{parseElement(extractTranx(obj, SAP_CON[0], "header.jsx", SAP_CON[1]), buttonL10n({ui,dimension,icon}))}</>
const buttonL10n = ({ui, dimension, icon}) => (lang, dir, textContent, key) =>
  dimension.innerWidth <= 630 ? (
    <button
      title={textContent[0]}
      type="button"
      className="btn"
      onClick={ui.contrast}
      style={{ flex: "0 0 75%", justifyContent: "center", padding: ".4em 0" }}
	  lang={lang}
	  dir={dir}
	  key={key}
    >
      <GetContrastIcon ui={ui} dimension={dimension} icon={icon} />
      {textContent[1]}
    </button>
  ) : (
    <button
      title={textContent[0]}
      type="button"
      className="btn"
      onClick={ui.contrast}
	  lang={lang}
	  dir={dir}
	  key={key}
    >
      <GetContrastIcon ui={ui} dimension={dimension} icon={icon} />
      <HideIfInRange
        jsx={<>{textContent[1]}</>}
        range={{ min: -1, max: 1000 }}
        dimen={dimension}
      />
    </button>
  );
const GetContrastIcon = ({ ui, dimension, icon }) => {
  if (dimension.innerWidth <= 630)
    return ui.ui.illumination.primary < 0.35 ? (
      <Dark style={{ marginRight: "1em" }} />
    ) : ui.ui.illumination.primary <= 0.5 ? (
      <HumidDark style={{ marginRight: "1em" }} />
    ) : ui.ui.illumination.primary < 0.65 ? (
      <HumidLight style={{ marginRight: "1em" }} />
    ) : (
      <Light style={{ marginRight: "1em" }} />
    );
  return (
    <HideIfInRange
      jsx={
        ui.ui.illumination.primary < 0.35 ? (
          <Dark style={{ ...icon }} />
        ) : ui.ui.illumination.primary <= 0.5 ? (
          <HumidDark style={{ ...icon }} />
        ) : ui.ui.illumination.primary < 0.65 ? (
          <HumidLight style={{ ...icon }} />
        ) : (
          <Light style={{ ...icon }} />
        )
      }
      range={{ min: 1000, max: 1200 }}
      dimen={dimension}
    />
  );
};
const GetCombobox = ({ ui, dimension, navItem, item, dcel }) => (
  <li style={dimension.innerWidth <= 630 ? { ...navItem } : { ...item }}>
    <Combobox
      theme={ui.ui}
      typo={ui.typography}
      list={dimension.innerWidth <= 630}
      width={dimension.innerWidth <= 630 ? "100%" : undefined}
      dcel={dcel}
    />
  </li>
);
const GetMore = ({ ui, dimension, navItem, item, icon, obj }) =>
  dimension.innerWidth <= 630 ? (
    <li style={{ ...navItem }}>
      {parseElement(extractTranx(obj, SMPAM[0], "header.jsx", SMPAM[1]), moreShortBtn({ui}))}
    </li>
  ) : (
    <li style={{ ...item }}>
      {parseElement(extractTranx(obj, SMPAM[0], "header.jsx", SMPAM[1]), moreLongBtn({ui,dimension,icon}))}
    </li>
  );

const moreShortBtn = ({ui}) => (lang, dir, textContent, key) => <button
        style={{ width: "100%", padding: ".4em 0" }}
        type="button"
        className="btn"
		lang={lang}
		dir={dir}
		key={key}
        title={textContent[0]}
      >
        {ui.ui.illumination.primary < 0.5 ? (
          <AssignmentFilled style={{ marginRight: "1em" }} />
        ) : (
          <Assignment style={{ marginRight: "1em" }} />
        )}
        {textContent[1]}
      </button>
const moreLongBtn = ({ui, dimension, icon}) => (lang, dir, textContent, key) => <button
        title={textContent[0]}
        type="button"
        className="btn"
		lang={lang}
		dir={dir}
		key={key}
      >
        <HideIfInRange
          jsx={
            ui.ui.illumination.primary < 0.5 ? (
              <AssignmentFilled style={{ ...icon }} />
            ) : (
              <Assignment style={{ ...icon }} />
            )
          }
          range={{ min: 1000, max: 1200 }}
          dimen={dimension}
        />
        <HideIfInRange
          jsx={textContent[1]}
          range={{ min: -1, max: 1000 }}
          dimen={dimension}
        />
      </button>

const GetUser = ({ ui, dimension, item, navItem, user, icon, icon2, obj }) =>
  dimension.innerWidth <= 630 ? (
    <li style={{ ...navItem }}>
      {user.isLoggedIn() ? (
        <>
          {parseElement(extractTranx(obj, SIGNOUT[0], "header.jsx", SIGNOUT[1]), lgoutSmL10n({user}))}
          <VerticalBar theme={ui.ui} />
          <Link to="/account" style={{ flex: "0 0 47%" }}>
          {parseElement(extractTranx(obj, ACC[0], "header.jsx", ACC[1]), acSmL10n({ui}))}
          </Link>
        </>
      ) : (
        <>
          <Link to="/register" style={{ flex: "0 0 47%" }}>
          {parseElement(extractTranx(obj, RGSTR[0], "header.jsx", RGSTR[1]), regSmL10n({ui}))}
          </Link>
          <VerticalBar theme={ui.ui} />
          <Link to="/login" style={{ flex: "0 0 47%" }}>
          {parseElement(extractTranx(obj, LOGIN[0], "header.jsx", LOGIN[1]), logSmL10n({ui}))}
          </Link>
        </>
      )}
    </li>
  ) : (
    <li style={{ ...item, display: "flex", flexFlow: "row nowrap" }}>
      {user.isLoggedIn() ? (
        <>
          {parseElement(extractTranx(obj, SIGNOUT[0], "header.jsx", SIGNOUT[1]), lgoutBgL10n({user, icon, dimension}))}
          <VerticalBar theme={ui.ui} />
          <Link
            to="/account"
            style={{
              display: "flex",
              flexFlow: "row nowrap",
              justifyContent: "center",
              alignItems: "center",
              margin: "0",
              padding: "0",
            }}
          >
          {parseElement(extractTranx(obj, ACC[0], "header.jsx", ACC[1]), acBgL10n({ui, dimension, icon2}))}
          </Link>
        </>
      ) : (
        <>
          <Link
            to="/register"
            style={{
              display: "flex",
              flexFlow: "row nowrap",
              justifyContent: "center",
              alignItems: "center",
              margin: "0",
              padding: "0",
            }}
          >
          {parseElement(extractTranx(obj, RGSTR[0], "header.jsx", RGSTR[1]), regBgL10n({ui, dimension, icon}))}
          </Link>
          <VerticalBar theme={ui.ui} />
          <Link
            to="/login"
            style={{
              display: "flex",
              flexFlow: "row nowrap",
              justifyContent: "center",
              alignItems: "center",
              margin: "0",
              padding: "0",
            }}
          >
          {parseElement(extractTranx(obj, LOGIN[0], "header.jsx", LOGIN[1]), logBgL10n({dimension, icon2}))}
          </Link>
        </>
      )}
    </li>
  );
  
const lgoutSmL10n = ({user}) => (lang, dir, textContent, key) => <button
            onClick={user.logout}
            type="button"
            className="btn"
            style={{
              flex: "0 0 47%",
              padding: ".37em 0",
              flexFlow: "row nowrap",
            }}
			lang={lang}
			dir={dir}
			key={key}
            title={textContent}
          >
            <Logout style={{ marginRight: ".6em" }} />
				{textContent}
          </button>
  
const lgoutBgL10n = ({user, icon, dimension}) => (lang, dir, textContent, key) => <button
            onClick={() => attemptLogout(user)}
            type="button"
            className="btn"
			lang={lang}
			dir={dir}
			key={key}
            title={textContent}
          >
            <HideIfInRange
              jsx={<Logout style={{ ...icon }} />}
              range={{ min: 1000, max: 1200 }}
              dimen={dimension}
            />
            <HideIfInRange
              jsx={textContent}
              range={{ min: -1, max: 1000 }}
              dimen={dimension}
            />
          </button>
  
const acSmL10n = ({ui}) => (lang, dir, textContent, key) => <button
              type="button"
              className="btn accent"
              style={{
                padding: ".37em 0",
                display: "flex",
                flexFlow: "row nowrap",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
			lang={lang}
			dir={dir}
			key={key}
            title={textContent[0]}
            >
              {textContent[1]}
              <ThemifyUserIcon theme={ui.ui} icon2={{ marginLeft: ".6em" }} />
            </button>
  
const acBgL10n = ({ui, dimension, icon2}) => (lang, dir, textContent, key) => <button
              type="button"
              className="btn accent"
			lang={lang}
			dir={dir}
			key={key}
            title={textContent[0]}
            >
              <HideIfInRange
                jsx={textContent[1]}
                range={{ min: -1, max: 1000 }}
                dimen={dimension}
              />
              <HideIfInRange
                jsx={<ThemifyUserIcon theme={ui.ui} icon2={icon2} />}
                range={{ min: 1000, max: 1200 }}
                dimen={dimension}
              />
            </button>
  
const regSmL10n = ({ui}) => (lang, dir, textContent, key) => <button
              type="button"
              className="btn accent"
              style={{
                padding: ".37em 0",
                display: "flex",
                flexFlow: "row nowrap",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
			lang={lang}
			dir={dir}
			key={key}
            title={textContent}
            >
              <ThemifyRegisterIcon
                theme={ui.ui}
                icon={{ marginRight: ".6em" }}
              />
              {textContent}
            </button>
  
const regBgL10n = ({ui, dimension, icon}) => (lang, dir, textContent, key) => <button
			lang={lang}
			dir={dir}
			key={key}
            title={textContent} type="button" className="btn accent">
              <HideIfInRange
                jsx={<ThemifyRegisterIcon theme={ui.ui} icon={icon} />}
                range={{ min: 1000, max: 1200 }}
                dimen={dimension}
              />
              <HideIfInRange
                jsx={textContent}
                range={{ min: -1, max: 1000 }}
                dimen={dimension}
              />
            </button>
  
const logSmL10n = () => (lang, dir, textContent, key) => <button
              type="button"
              className="btn"
              style={{
                padding: ".37em 0",
                display: "flex",
                flexFlow: "row nowrap",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
			lang={lang}
			dir={dir}
			key={key}
            title={textContent}
            >
			{textContent}
              <Login style={{ marginLeft: ".6em" }} />
            </button>
  
const logBgL10n = ({dimension, icon2}) => (lang, dir, textContent, key) => <button
			lang={lang}
			dir={dir}
			key={key}
            title={textContent} type="button" className="btn">
              <HideIfInRange
                jsx={textContent}
                range={{ min: -1, max: 1000 }}
                dimen={dimension}
              />
              <HideIfInRange
                jsx={<Login style={{ ...icon2 }} />}
                range={{ min: 1000, max: 1200 }}
                dimen={dimension}
              />
            </button>
  
const GetProperBrand = ({ theme }) =>
  theme.illumination.primary < 0.5 ? <>BRAND</> : <>brand</>;
const HideIfInRange = ({
  jsx,
  range = { min: 0, max: Number.MAX_SAFE_INTEGER },
  dimen,
}) =>
  dimen.innerWidth <= range.max && dimen.innerWidth >= range.min ? <></> : jsx;
const attemptLogout = (user) => {
  if (window.confirm("Are you sure you want to log out?")) user.logOut();
};
const VerticalBar = ({ theme }) => (
  <span
    style={{
      width: ".07em",
      height: "2em",
      margin: "0 .5em",
      backgroundColor: theme.secondary.toString(),
    }}
  ></span>
);
const ThemifyUserIcon = ({ theme, icon2 }) =>
  theme.illumination.primary < 0.5 ? (
    <UserFill style={{ ...icon2 }} />
  ) : (
    <User style={{ ...icon2 }} />
  );
const ThemifyRegisterIcon = ({ theme, icon }) =>
  theme.illumination.primary < 0.5 ? (
    <RegisterFill style={{ ...icon }} />
  ) : (
    <Register style={{ ...icon }} />
  );
  
const objHas = (obj, prop) => {
	for(const p in obj)
		if(p === prop)
			return true;
	return false;
};
  
export default Header;
