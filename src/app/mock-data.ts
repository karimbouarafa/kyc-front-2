export const DOCUMENTLIST: any[] = [

	{

		"dateMAJ": null,

		"other1": "O=Caisse Epargne, L=Paris, C=FR",

		"other2": "O=Natixis Assurance, L=Paris, C=FR",

		"status": 2,

		"participants": ["O=BPCE Assurance, L=Paris, C=FR", "O=Caisse Epargne, L=Paris, C=FR", "O=Natixis Assurance, L=Paris, C=FR"],

		"initiator": "Natixis",

		"dateA": "12-06-2019 11:42:15",

		"doc": "1",

		"dateE": "expire",

		"client": "1",

		"nomDoc": "docTest"

	},
	{

		"dateMAJ": null,

		"other1": "O=Caisse Epargne, L=Paris, C=FR",

		"other2": "O=Natixis Assurance, L=Paris, C=FR",

		"status": 2,

		"participants": ["O=BPCE Assurance, L=Paris, C=FR", "O=Caisse Epargne, L=Paris, C=FR", "O=Natixis Assurance, L=Paris, C=FR"],

		"initiator": "BPCEA",

		"dateA": "12-06-2019 11:42:15",

		"doc": "1",

		"dateE": "expire",

		"client": "1",

		"nomDoc": "docTest"

	},
	{

		"dateMAJ": null,

		"other1": "O=Caisse Epargne, L=Paris, C=FR",

		"other2": "O=Natixis Assurance, L=Paris, C=FR",

		"status": 2,

		"participants": ["O=BPCE Assurance, L=Paris, C=FR", "O=Caisse Epargne, L=Paris, C=FR", "O=Natixis Assurance, L=Paris, C=FR"],

		"initiator": "Natixis",

		"dateA": "12-06-2019 11:42:15",

		"doc": "1",

		"dateE": "expire",

		"client": "1",

		"nomDoc": "docTest"

	},
]

export const CERTIFICATELIST: any[] = [
	{
		"dateProchaineCert": "11/06/19",
		"description": "bon client",
		"status": 1,
		"other1": "O=Caisse Epargne, L=Paris, C=FR",
		"other2": "O=BPCE Assurance, L=Paris, C=FR",
		"client": "karim",
		"docKYC": "2FF5609BC102A093536C022D8CB5547DFE0447657D0E7F19F77C0F44B6EACA52",
		"initiator": "Natixis",
		"maintien": 1,
		"documents": ["1"],
		"profil": "low",
		"dateCreation": "14-06-2020",
		"cert": "karim14092019040954",
		"participants": ["O=Natixis Assurance, L=Paris, C=FR", "O=Caisse Epargne, L=Paris, C=FR", "O=BPCE Assurance, L=Paris, C=FR"]
	},
	{
		"dateProchaineCert": "19/06/19",
		"description": "mauvais client",
		"status": 1,
		"other1": "O=Caisse Epargne, L=Paris, C=FR",
		"other2": "O=BPCE Assurance, L=Paris, C=FR",
		"client": "karim",
		"docKYC": "2FF5609BC102A093536C022D8CB5547DFE0447657D0E7F19F77C0F44B6EACA52",
		"initiator": "BPCEA",
		"maintien": 1,
		"documents": ["1"],
		"profil": "low",
		"dateCreation": "14-06-2019 04:09:54",
		"cert": "karim1409AAAAAA",
		"participants": ["O=Natixis Assurance, L=Paris, C=FR", "O=Caisse Epargne, L=Paris, C=FR", "O=BPCE Assurance, L=Paris, C=FR"]
	},
	{
		"dateProchaineCert": "19/06/19",
		"description": "très mauvais client",
		"status": 1,
		"other1": "O=Caisse Epargne, L=Paris, C=FR",
		"other2": "O=BPCE Assurance, L=Paris, C=FR",
		"client": "karim",
		"docKYC": "2FF5609BC102A093536C022D8CB5547DFE0447657D0E7F19F77C0F44B6EACA52",
		"initiator": "Natixis",
		"maintien": 1,
		"documents": ["1", "2", "8"],
		"profil": "low",
		"dateCreation": "14-06-2019 04:09:54",
		"cert": "karimBBBBBBBBBB",
		"participants": ["O=Natixis Assurance, L=Paris, C=FR", "O=Caisse Epargne, L=Paris, C=FR", "O=BPCE Assurance, L=Paris, C=FR"]
	},
	{
		"dateProchaineCert": "19/06/19",
		"description": "moyen client",
		"status": 1,
		"other1": "O=Caisse Epargne, L=Paris, C=FR",
		"other2": "O=BPCE Assurance, L=Paris, C=FR",
		"client": "karim",
		"docKYC": "2FF5609BC102A093536C022D8CB5547DFE0447657D0E7F19F77C0F44B6EACA52",
		"initiator": "BPCE Assurances",
		"maintien": 1,
		"documents": ["1"],
		"profil": "low",
		"dateCreation": "14-06-2019 04:09:54",
		"cert": "karimCCCCCCCCCC4",
		"participants": ["O=Natixis Assurance, L=Paris, C=FR", "O=Caisse Epargne, L=Paris, C=FR", "O=BPCE Assurance, L=Paris, C=FR"]
	},
]

export const NOTIFICATIONLIST: any[] = [

	[
		["19-06-2019 11:24:03", "natixisANA19212019112147", "Changement de maintien", "1"],
		["19-06-2019 11:24:29", "natixisANA19212019112147", "Changement de profil", "3"],
		["19-06-2019 11:24:34", "natixisANA19212019112147", "Changement de profil", "2"]]

]