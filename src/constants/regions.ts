export const REGIONS = [
	'africa',
	'america',
	'asia',
	'europe',
	'oceania'
] as const

export type Region = (typeof REGIONS)[number]
