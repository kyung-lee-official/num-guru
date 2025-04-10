import { expect, test } from "bun:test";
import { parseHumanReadableNumber } from "../src/index";

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
