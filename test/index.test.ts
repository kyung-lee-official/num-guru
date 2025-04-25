import { expect, test } from "bun:test";
import {
	convertNumberToHumanReadable,
	parseHumanReadableNumber,
} from "../src/index";

test("test parseHumanReadableNumber", () => {
	expect(parseHumanReadableNumber("1K")).toBe(1000);
	expect(parseHumanReadableNumber("1M")).toBe(1000000);
	expect(parseHumanReadableNumber("1B")).toBe(1000000000);
	expect(parseHumanReadableNumber("1T")).toBe(1000000000000);
	expect(parseHumanReadableNumber("1,000")).toBe(1000);
	expect(parseHumanReadableNumber("1,000.5")).toBe(1000.5);
	expect(parseHumanReadableNumber("1,000K")).toBe(1000000);
	expect(parseHumanReadableNumber("1,000M")).toBe(1000000000);
	expect(parseHumanReadableNumber("1,000B")).toBe(1000000000000);
	expect(parseHumanReadableNumber("1,000T")).toBe(1000000000000000);
	expect(parseHumanReadableNumber("1,000.5K")).toBe(1000500);
	expect(parseHumanReadableNumber("1,000.5M")).toBe(1000500000);
	expect(parseHumanReadableNumber("1,000.5B")).toBe(1000500000000);
	expect(parseHumanReadableNumber("1,000.5T")).toBe(1000500000000000);
});
test("test convertNumberToHumanReadable", () => {
	expect(convertNumberToHumanReadable(1000)).toBe("1K");
	expect(convertNumberToHumanReadable(1000000)).toBe("1M");
	expect(convertNumberToHumanReadable(1000000000)).toBe("1B");
	expect(convertNumberToHumanReadable(1000000000000)).toBe("1T");
	expect(convertNumberToHumanReadable(1234)).toBe("1.2K");
	expect(convertNumberToHumanReadable(1234567)).toBe("1.2M");
	expect(convertNumberToHumanReadable(1234567890)).toBe("1.2B");
	expect(convertNumberToHumanReadable(1234567890123)).toBe("1.2T");

	/* Test with options */
	expect(convertNumberToHumanReadable(1234, { useSuffix: false })).toBe(
		"1234"
	);
	expect(convertNumberToHumanReadable(1234, { useComma: true })).toBe("1.2K");
	expect(convertNumberToHumanReadable(1234567, { useComma: true })).toBe(
		"1.2M"
	);
	expect(
		convertNumberToHumanReadable(1234, { useSuffix: false, useComma: true })
	).toBe("1,234");

	/* Edge cases */
	expect(convertNumberToHumanReadable(0)).toBe("0");
	expect(convertNumberToHumanReadable(-1000)).toBe("-1K");
	expect(convertNumberToHumanReadable(NaN)).toBe("NaN");
	expect(convertNumberToHumanReadable(Infinity)).toBe("NaN");
});
