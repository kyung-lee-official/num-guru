/**
 * This function parses a human-readable number string into a float.
 * @param input - The input string to parse. It can be a number with or without commas, or a human-readable number with suffixes like K, M, B, T.
 * @returns - The parsed number as a float. If the input is invalid, it returns NaN.
 */
export function parseHumanReadableNumber(input: string) {
	if (typeof input !== "string") {
		return NaN; /* return NaN for invalid input */
	}

	const suffixes: Record<string, number> = {
		K: 1000,
		M: 1000000,
		B: 1000000000,
		T: 1000000000000,
	};

	const suffixRegex = /([KMBT])$/i; /* case-insensitive match */

	if (suffixRegex.test(input)) {
		const suffix = input
			.slice(-1)
			.toUpperCase(); /* get the suffix and convert to uppercase */
		const numberPart = input.slice(0, -1); /* remove the suffix */

		const parsedNumber = parseNumberWithCommas(numberPart);

		if (isNaN(parsedNumber)) {
			return NaN; /* return NaN if the number part is invalid */
		}

		const multiplier = suffixes[suffix];
		if (multiplier !== undefined) {
			return parsedNumber * multiplier;
		} else {
			return NaN; /* invalid suffix */
		}
	} else {
		/* no suffix, parse as a regular number */
		return parseNumberWithCommas(input);
	}
}

/**
 * This function parses a string into a float, removing commas if present.
 * It checks if the string is a valid number and returns NaN if it's not.
 * @param str - The input string to parse. It can be a number with or without commas.
 * @returns - The parsed number as a float. If the input is invalid, it returns NaN.
 * This function removes commas from the string and checks if the remaining string is a valid number.
 */
function parseNumberWithCommas(str: string) {
	if (typeof str !== "string") {
		return NaN;
	}

	const cleanedStr = str.replace(/,/g, ""); /* remove commas */

	if (!/^-?\d+(\.\d+)?$/.test(cleanedStr)) {
		/* check if it's a valid number */
		return NaN;
	}

	const parsed = parseFloat(cleanedStr);
	return isNaN(parsed) ? NaN : parsed;
}

/**
 * This function converts a number into a human-readable string with optional suffixes and commas.
 * @param num - the number to convert.
 * @param options - options to control the output format.
 * @param options.useSuffix - whether to use suffixes like K, M, B, T (default: true).
 * @param options.useComma - whether to include commas in the output (default: false).
 * @returns - the human-readable string. If the input is invalid, it returns "NaN".
 */
export function convertNumberToHumanReadable(
	num: number,
	options: { useSuffix?: boolean; useComma?: boolean } = {}
): string {
	if (typeof num !== "number" || isNaN(num) || !isFinite(num)) {
		return "NaN"; /* return "NaN" for invalid input or Infinity */
	}

	const { useSuffix = true, useComma = false } = options;

	if (!useSuffix) {
		/* format the number without suffixes */
		const formattedNumber = useComma
			? num.toLocaleString("en-US") /* add commas */
			: num.toString(); /* no commas */
		return formattedNumber;
	}

	const suffixes = ["", "K", "M", "B", "T"];
	let tier = 0;

	/* determine the tier (thousands, millions, etc.) */
	while (Math.abs(num) >= 1000 && tier < suffixes.length - 1) {
		num /= 1000;
		tier++;
	}

	/* format the number to one decimal place if needed */
	const formattedNumber = num % 1 === 0 ? num.toString() : num.toFixed(1);

	/* add commas if required */
	const finalNumber = useComma
		? parseFloat(formattedNumber).toLocaleString("en-US")
		: formattedNumber;

	return `${finalNumber}${suffixes[tier]}`;
}
