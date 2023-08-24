import { useLayoutEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import SideBar from "../pages/SideBar";
import Converter from "../pages/Converter";
import { useL10n, extractTranx, parseElement } from "../providers/l10n";
import {TbBrandGmail as Gmail} from "react-icons/tb";
import {FaFacebook as Fb, FaFacebookF as FbFill} from "react-icons/fa";
import {AiOutlineGithub as Git, AiFillGithub as GitFill, AiOutlineYoutube as Yt, AiFillYoutube as YtFill} from "react-icons/ai";
import {RiTwitterLine as Tw, RiTwitterFill as TwFill, RiTelegramLine as Tg, RiTelegramFill as TgFill, RiWhatsappLine as Wa, RiWhatsappFill as WaFill} from "react-icons/ri";

import { useUI } from "../providers/ui";
import { useDimension } from "../providers/dimen";

const FB = ["fb", "facebook"];
const GH = ["gh", "github"];
const GM = ["gm", "gmail"];
const TEL = ["tel", "telegram"];
const TW = ["tw", "twitter"];
const WA = ["wa", "whatsapp"];
const YT = ["yt", "youtube"];

const Main = () => {
  const ui = useUI();
  const d = useDimension();
	const { loadL10n, translationObj } = useL10n();
	useLayoutEffect(() => loadL10n("main.jsx"), []);
  return (
    <main>
      <Styles ui={ui} d={d} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/settings" element={<p>This Settings page is under construction</p>}></Route>
        <Route path="/account" element={<SideBar />}></Route>
        <Route path="/converters/*" element={<Converter />}></Route>
        <Route path="/privacy" element={<p>This {"/privacy"} page is under construction</p>}></Route>
        <Route path="/about" element={<p>This {"/about"} is under construction</p>}></Route>
        <Route path="/faq" element={<p>This {"/faq"} is under construction</p>}></Route>
        {/* <Route path="/logout" element={<p>This Logout page is under construction</p>}></Route> */}
      </Routes>
      <ContactSidebar ui={ui} translationObj={translationObj} />
    </main>
  );
};

const socialSpan = (lang, dir, textContent, key) => <span className="text" lang={lang} dir={dir} key={key}>{textContent}</span>

const Styles = ({ui, d}) =>
<style>{`
#root > main {
	min-height: 80vh;
}
.contact-sidebar{
  position: fixed;
  left: 0;
  top: ${d.innerHeight / 3.5}px;
  display: flex;
  flex-flow: column nowrap;
  width: 1%;
  overflow-x: visible;
}
.contact-sidebar [class^="contact-"] {
  display: flex;
  flex-flow: row nowrap;
  width: 6em;
  transform: translateX(-72%);
  justify-content: space-between;
  align-items: center;
  margin: .3em 0;
  padding: .15em .4em;
  font-family: ${ui.typography.sansSerif};
  font-size: ${ui.typography.p.scale}em;
  border: .1em solid ${ui.ui.secondary.toString()};
  border-radius: .2em;
  transition-property: transform;
  transition-duration: 256ms;
  transition-timing-function: ease-in-out;
}
.contact-sidebar [class^="contact-"]:hover {
  transform: translateX(-1%);
}
@media (max-width: 630px) {
  .contact-sidebar{
    position: fixed;
    left: unset;
    top: unset;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    oveflow-x: unset;
  }
  .contact-sidebar [class^="contact-"] {
    display: flex;
    flex-flow: row nowrap;
    width: calc(100% / 7);
    transform: unset;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: .3em 0;
    border: .1em solid black;
    border-radius: unset;
    transition-property: unset;
    transition-duration: unset;
    transition-timing-function: unset;
  }
  .contact-sidebar [class^="contact-"]:hover {
    transform: unset;
  }
  .contact-sidebar [class^="contact-"] [class="text"] {
    display:none;
  }
}
`}</style>

const ContactSidebar = ({ui, translationObj}) => <aside className="contact-sidebar">
  <a href="/" className="contact-facebook">{parseElement(extractTranx(translationObj, FB[0], "main.jsx", FB[1]), socialSpan)}<GetFb theme={ui.ui} /></a>
  <a href="/" className="contact-github">{parseElement(extractTranx(translationObj, GH[0], "main.jsx", GH[1]), socialSpan)}<GetGit theme={ui.ui} /></a>
  <a href="/" className="contact-gmail">{parseElement(extractTranx(translationObj, GM[0], "main.jsx", GM[1]), socialSpan)}<Gmail className="icon" /></a>
  <a href="/" className="contact-telegram">{parseElement(extractTranx(translationObj, TEL[0], "main.jsx", TEL[1]), socialSpan)}<GetTg theme={ui.ui} /></a>
  <a href="/" className="contact-twitter">{parseElement(extractTranx(translationObj, TW[0], "main.jsx", TW[1]), socialSpan)}<GetTw theme={ui.ui} /></a>
  <a href="/" className="contact-whatsapp">{parseElement(extractTranx(translationObj, WA[0], "main.jsx", WA[1]), socialSpan)}<GetWa theme={ui.ui} /></a>
  <a href="/" className="contact-youtube">{parseElement(extractTranx(translationObj, YT[0], "main.jsx", YT[1]), socialSpan)}<GetYt theme={ui.ui} /></a>
</aside>

const GetFb = ({theme}) => theme.illumination.primary < .5 ? <FbFill className="icon" /> : <Fb className="icon" />
const GetGit = ({theme}) => theme.illumination.primary < .5 ? <GitFill className="icon" /> : <Git className="icon" />
const GetTg = ({theme}) => theme.illumination.primary < .5 ? <TgFill className="icon" /> : <Tg className="icon" />
const GetTw = ({theme}) => theme.illumination.primary < .5 ? <TwFill className="icon" /> : <Tw className="icon" />
const GetWa = ({theme}) => theme.illumination.primary < .5 ? <WaFill className="icon" /> : <Wa className="icon" />
const GetYt = ({theme}) => theme.illumination.primary < .5 ? <YtFill className="icon" /> : <Yt className="icon" />

export default Main;
