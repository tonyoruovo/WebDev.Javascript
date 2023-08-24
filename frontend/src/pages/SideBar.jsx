
// import { useState } from "react";

const SideBar = () => {
	
	return <div><Style /></div>
	
	/*const [isOpen setIsOpen] = useState(false);
	
	return <aside className="side-menu">
	<div className="controls">
	{isOpen ? <p>Dashboard</p> : <></>}
		<MenuButton />
	</div>
	<div className="pic"></div>
		<hgroup>
			<h6 className="username"></h6>
			<p className="is-admin"></p>
		</hgroup>
		<h6>Data</h6>
		<h6>Apps</h6>
		<h6>Visualization</h6>
	</aside>;*/
}

const Style = () => {
	return <style>{`
	aside.side-menu {
		position: fixed;
		top: 0;
		right: 0;
		width: 50px;
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
	}
	`}</style>
}

export default SideBar;
