function i18npc(cid,dcwr) {
	function langget(lang,docwrite) {
		if (docwrite == false) {
			var langpark = require("./lang/"+lang);
			return langpark[langid];
		}else if (docwrite == true) {
			var langpark = require("./lang/"+lang);
			document.write(langpark[langid]);
		}
	}
	var langid = cid;
	
	//check write
	switch (dcwr) {
		case true:
			var docwrite = true;
			break;
		case false:
			var docwrite = false;
			break;
		default:
			var docwrite = true;
	}
	
	//check user language
	try {
		langget(app.getLocale(),docwrite);
	} catch (error) {
		langget("en",docwrite);
	}
}