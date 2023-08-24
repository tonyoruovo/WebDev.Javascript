/**An unused script for storing localisation strings */
	
const openRequest = window.indexedDB.open("db", 1);

openRequest.onerror = (event) => {
	alert("Localisation support is not be available!");
	console.log(`IndexedDB error: ${event.target.errorCode}`);
}

openRequest.onupgradeneeded = (event) => {
	let db = event.target.result;
	if(event.oldVersion === 0) {
		// there is no database. Perform db initialisation
	} else if (event.oldVersion === 1) {
		// there is a db and you can update
		if(!db.objectStoreNames.contains("l10nMsg")) {
			const collection = db.createObjectStore("l10nMsg", { keyPath: "msgId" });
			collection.createIndex("en", "en", {unique: true});
			collection.createIndex("fr", "fr", {unique: true});
			collection.createIndex("es", "es", {unique: true});
			collection.createIndex("ar", "ar", {unique: true});
			collection.createIndex("ch", "ch", {unique: true});
			collection.createIndex("hi", "hi", {unique: true});
			collection.createIndex("sw", "sw", {unique: true});
		}
	}
}

openRequest.onsuccess = (event) => {
	let db = event.target.result;
	
	db.onversionchange = () => {
		db.close();
		alert("Database is outdated. Please reload page");
	};
	
}

openRequest.onblocked = (event) => {
	let db = event.target.result;
	db.close();
	// this event shouldn't trigger if we handle onversionchange correctly

	// it means that there's another open connection to the same database
	// and it wasn't closed after db.onversionchange triggered for it
}

const getLocalisedMessage = useCallback((msg, defaultMsg, lang, locale) => {
	const db = openRequest.result;
	if(!db) return defaultMsg || msg;
	// transactions
	let objStore = db.transaction(["l10nMsg"], "readonly")// we can use 'readwrite' or 'readonly'
			.objectStore("l10nMsg");//messages
	objStore.add({})
}, []);

const addMessage = useCallback((msg, lang, locale) => {
	// transactions
	let trans = db.transaction("l10nMsg", "readwrite");// we can use 'readwrite' or 'readonly'
	let msgs = trans.objectStore("l10nMsg");//messages
	let msg = {
		message: msg,
	}
}, []);