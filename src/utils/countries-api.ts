import { BASE_URL, type SearchCriteria } from '../constants/api'
import type { Country } from '../types'

export const getCountries = async (
	criteria: SearchCriteria,
	search: string
): Promise<Country[]> => {
	//TODO: ERROR HANDLER
	const response = await fetch(`${BASE_URL}/${criteria}/${search}`)
	return (await response.json()) as Country[]
}
