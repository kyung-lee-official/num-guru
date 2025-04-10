# human-readable-to-number

`human-readable-to-number` is a lightweight utility package that converts human-readable number strings (e.g., "1K", "1M", "1B") into numeric values. It also supports parsing numbers with commas and decimals.

## Installation

Install the package using [Bun](https://bun.sh):

```bash
bun add human-readable-to-number
```

## Usage

Import the `parseHumanReadableNumber` function and use it to parse human-readable number strings:

```ts
import { parseHumanReadableNumber } from "human-readable-to-number";

console.log(parseHumanReadableNumber("1K")); /* outputs: 1000 */
console.log(parseHumanReadableNumber("1.5M")); /* outputs: 1500000 */
console.log(parseHumanReadableNumber("1,000")); /* outputs: 1000 */
console.log(parseHumanReadableNumber("1,000.5K")); /* outputs: 1000500 */
console.log(parseHumanReadableNumber("invalid")); /* outputs: NaN */
```

## Testing

Run the tests using Bun:

```bash
bun test
```

## License

This project is licensed under the MIT License

## Author

Created by [Kyung Lee](https://github.com/kyung-lee-official).
