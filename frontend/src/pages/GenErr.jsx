import {BsX as X} from "react-icons/bs";

const GenErr = function() {
	return (
	<div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh"}}>
		<p>
			<X style={{fontSize: "100pt", color: "red"}} />
		</p>
		<h5>There was an error, thats all we know</h5>
	</div>
	);
}

export default GenErr;
