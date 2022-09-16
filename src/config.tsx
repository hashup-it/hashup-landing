export const Languages = {
	pl: {
		code: 'pl',
		locale: require('./locales/pl/translation.json'),
	},
	en: {
		code: 'en',
		locale: require('./locales/en/translation.json'),
	},
} as const;

export const langsOfWhitepaper: string[] = [Languages.en.code, Languages.pl.code];

export const SocialMediaUrls = {
	facebook: 'https://www.facebook.com/HashUpIt',
	linkedIn: 'https://www.linkedin.com/company/hashupit',
	instagram: 'https://www.instagram.com/hashup.it/',
	telegram: 'https://t.me/HashUpChat',
	telegramPL: 'https://t.me/HashUpChatPL',
	medium: 'https://medium.com/@HashUp',
	twitter: 'https://twitter.com/HashUp_it',
	discord: 'https://discord.gg/ZxwhHb7R9e',
	gitbook: 'https://hashup-it.gitbook.io/hashup-it-1/',
	launcherLink: 'https://dl.patchkit.net/d/3sxi7923gq5eccqh7tlzo/direct',
	jankowskiTelegram: 'https://t.me/SzymonJankowski',
} as const;

export const Documents = {
	termsAndConditions: 'https://cdn.hashup.it/landing/HashUp.IT_-_Terms_And_Contitions.pdf',
	// airdropTermsOfUse: "https://cdn.hashup.it/landing/Hash_Token_Airdrop_Terms_and_Conditions.pdf",
	privacyPolicy: 'https://cdn.hashup.it/landing/HashUp.IT_-_Data_Protection_Policy.pdf',
	lightpaper: 'https://wiki.hashup.it',
	pitchdeck: 'https://cdn.hashup.it/landing/HashUp_PitchDeck.pdf',
	whitepaperPL: 'https://cdn.hashup.it/hashup-whitepaper-pl.pdf',
	whitepaperEN: 'https://cdn.hashup.it/hashup-whitepaper-eng.pdf',
} as const;

export const CompanyInfo = {
	email: 'hello@hashup.it',
} as const;

export enum CartridgeType {
	green = 'green',
	gold = 'gold',
	blue = 'blue',
	gray = 'gray',
	red = 'red',
}
