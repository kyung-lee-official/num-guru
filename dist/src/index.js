/**
 * This function parses a human-readable number string into a float.
 * @param input - The input string to parse. It can be a number with or without commas, or a human-readable number with suffixes like K, M, B, T.
 * @returns - The parsed number as a float. If the input is invalid, it returns NaN.
 */
export function parseHumanReadableNumber(input) {
    if (typeof input !== "string") {
        return NaN; /* return NaN for invalid input */
    }
    const suffixes = {
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
        }
        else {
            return NaN; /* invalid suffix */
        }
    }
    else {
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
function parseNumberWithCommas(str) {
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
