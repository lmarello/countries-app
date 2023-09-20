import numeral from 'numeral'

export const addThousandSeparators = (input: number): string => {
	return numeral(input).format('0,0')
}
