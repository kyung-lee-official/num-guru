/**
 * This function parses a human-readable number string into a float.
 * @param input - The input string to parse. It can be a number with or without commas, or a human-readable number with suffixes like K, M, B, T.
 * @returns - The parsed number as a float. If the input is invalid, it returns NaN.
 */
export declare function parseHumanReadableNumber(input: string): number;
/**
 * This function converts a number into a human-readable string with optional suffixes and commas.
 * @param num - the number to convert.
 * @param options - options to control the output format.
 * @param options.useSuffix - whether to use suffixes like K, M, B, T (default: true).
 * @param options.useComma - whether to include commas in the output (default: false).
 * @returns - the human-readable string. If the input is invalid, it returns "NaN".
 */
export declare function convertNumberToHumanReadable(num: number, options?: {
    useSuffix?: boolean;
    useComma?: boolean;
}): string;
