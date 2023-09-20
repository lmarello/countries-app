export const BASE_URL = 'https://restcountries.com/v3.1'
export const SEARCH_CRITERIA = ['region', 'name'] as const

export type SearchCriteria = (typeof SEARCH_CRITERIA)[number]
