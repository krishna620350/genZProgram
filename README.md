# genZProgram
vomit Function
The vomit function is a utility for logging styled messages with emojis, colors, and text formatting. It supports various message types (danger, success, warning, etc.) and is part of the genzprogaram package.

Installation
To use the vomit function, install the genzprogaram package via npm:

## bash
Copy code
### npm install genzprogaram
## Importing
Import the vomit function from the package as follows:

javascript
Copy code
### import { vomits } from "genzprogaram";
Usage
Here's how you can use the vomits function:

1. Log a Message with Type
javascript
Copy code
#### vomits("Something went wrong!", "danger");
// Output: 💀 [DANGER] Something went wrong!

2. Log a Styled Message
javascript
Copy code
#### vomits("Task completed!", "success", "green", "bold");
// Output: 🎉 [SUCCESS] Task completed! (in green and bold)
### Syntax
javascript
Copy code
vomits(value, val1 = null, val2 = null, val3 = null);
Parameters
value (string, required):
The main message to log.

val1 (string, optional):
The message type (e.g., danger, success, info, etc.).

val2 (string, optional):
The text color (e.g., red, green, yellow, blue).

val3 (string, optional):
The text style (bold, italic, regular).

### Examples
Log a Danger Message
javascript
Copy code
#### vomits("Critical failure!", "danger", "red", "bold");
// Output: 💀 [DANGER] Critical failure! (in red and bold)

Debugging Message
javascript
Copy code
#### vomits("Debugging in progress...", "debug", "blue", "italic");
// Output: 🐛 [DEBUG] Debugging in progress... (in blue and italic)

Invalid Input
javascript
Copy code
#### vomits("This will fail.", "unknown", "pink", "underline");
// Output: ❌ Invalid message type provided.
// Output: ❌ Invalid color provided.

### Notes
Ensure that val1, val2, and val3 are valid. The function will log an error if invalid parameters are passed.

For more details, see the full documentation.

# Contribution
Feel free to contribute to the genzprogaram repository by submitting issues or pull requests!