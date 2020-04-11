function i18npc(cid,dcwr) {
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
	switch (app.getLocale()) {
		case "en":
			var langfile = "en.json";
			break;
		case "ja":
			var langfile = "ja.json";
			break;
		case "zh":
			var langfile = "zh-TW.json";
			break;
		case "zh-CN":
			var langfile = "zh-CN.json";
			break;
		case "zh-TW":
			var langfile = "ja.json";
			break;
		default:
			var langfile = "en.json";		
	}
	
	if (docwrite == false) {
		var langpark = require("./lang/"+langfile);
		return langpark[langid];
	}else if (docwrite == true) {
		var langpark = require("./lang/"+langfile);
		document.write(langpark[langid]);
	}
}