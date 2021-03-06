var words;

function CroutonLocalization(language) {
	this.language = language;
	words = {
		"da-DK": {
			"days_of_the_week": ["", "Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
			"weekday": 'Ugedag',
			"city": "By",
			"cities": "Byer",
			"groups": "Grupper",
			"areas": "Områder",
			"locations": "Lokalite",
			"counties": "Amter",
			"states": "Provinser",
			"postal_codes": "Post nummer",
			"formats": "Struktur",
			"map": "Kort"
		},
		"en-US": {
			"days_of_the_week" : ["", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			"weekday" : "Weekday",
			"city" : "City",
			"cities" : "Cities",
			"groups" : "Groups",
			"areas" : "Areas",
			"locations" : "Locations",
			"counties" : "Counties",
			"states" : "States",
			"postal_codes" : "Zips",
			"formats" : "Formats",
			"map" : "Map"
		},
		"fr-CA": {
			"days_of_the_week" : ["", "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
			"weekday" : "Journée",
			"city" : "Ville",
			"cities" : "Villes",
			"groups" : "Groupes",
			"areas" : "CSL",
			"locations" : "Emplacements",
			"counties" : "Régions",
			"states" : "Provinces",
			"postal_codes" : "Codes postaux",
			"formats" : "Formats",
			"map" : "Carte"
		},
		"it-IT": {
			"days_of_the_week" : ["", "Domenica", " Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
			"weekday" : "Giorno Feriale",
			"city" : "Città",
			"cities" : "Città",
			"groups" : "Gruppi",
			"areas" : "Aree",
			"locations" : "Località",
			"counties" : "province",
			"states" : "Regioni",
			"postal_codes" : "CAP",
			"formats" : "Formati",
			"map" : "Mappa",
		},
	};
}

CroutonLocalization.prototype.getDayOfTheWeekWord = function(day_id) {
	return words[this.language]['days_of_the_week'][day_id];
};

CroutonLocalization.prototype.getWord = function(word) {
	return words[this.language][word];
};

Handlebars.registerHelper('getDayOfTheWeek', function(day_id) {
	return words['en-US']['days_of_the_week'][day_id];
});

Handlebars.registerHelper('getWord', function(word) {
	return words['en-US'][word];
});
