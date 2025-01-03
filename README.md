# genZProgram Vomit Function

The `vomit` function is a utility for logging styled messages with emojis, colors, and text formatting. It supports various message types such as `danger`, `success`, `warning`, etc., and is part of the **genZProgram** package.

## Installation

To use the `vomit` function, install the **genZProgram** package via npm:

```bash
npm install genzprogaram
```

## Importing
Import the vomit function from the package:

```
import { vomits } from "genzprogaram";
```

## Usage
Here’s how you can use the vomits function:

1. Log a Message with Type: 
```vomits("Something went wrong!", "danger");```
// Output: 💀 [DANGER] Something went wrong!
2. Log a Styled Message: 
```vomits("Task completed!", "success", "green", "bold");```
// Output: 🎉 [SUCCESS] Task completed! (in green and bold)

## Syntax
```
vomits(value, val1 = null, val2 = null, val3 = null);
```
### Parameters

1. value (string, required): The main message to log.
2. val1 (string, optional): The message type (e.g., danger, success, info, etc.).
3. val2 (string, optional): The text color (e.g., red, green, yellow, blue).
4. val3 (string, optional): The text style (bold, italic, regular).

### Examples

1. Log a Danger Message:
```vomits("Critical failure!", "danger", "red", "bold");```
// Output: 💀 [DANGER] Critical failure! (in red and bold)
2. Debugging Message:
```vomits("Debugging in progress...", "debug", "blue", "italic");```
// Output: 🐛 [DEBUG] Debugging in progress... (in blue and italic)
3. Invalid Input: 
```vomits("This will fail.", "unknown", "pink", "underline");```
// Output: ❌ Invalid message type provided.
// Output: ❌ Invalid color provided.

### Notes

Ensure that val1, val2, and val3 are valid. The function will log an error if invalid parameters are passed.

### Contribution

Feel free to contribute to the genZProgram repository by submitting issues or pull requests!