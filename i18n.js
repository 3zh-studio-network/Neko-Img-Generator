function i18npc(TextTranslateType,TextTranslateId,IsDocumentWrite) {
	function langget(lang,docwrite) {
		if (docwrite == false) {
			var langpark = require("./lang/"+lang);
			return langpark[langtype][lang1];
		}else if (docwrite == true) {
			var langpark = require("./lang/"+lang);
			document.write(langpark[langtype][lang1]);
		}
	}

	var langtype = TextTranslateType;
	var lang1 = TextTranslateId;
	
	//check user language
	try {
		switch(IsDocumentWrite){
			case false:
				return langget(app.getLocale(),false);
				break;

			case true:
				langget(app.getLocale(),true);
				break;
		}
	} catch (error) {
		switch(IsDocumentWrite){
			case false:
				return langget("en",false);
				break;

			case true:
				langget("en",true);
				break;
		}
	}
}