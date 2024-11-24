export const vomit = (value, val1 = null, val2 = null, val3 = null) => {
    const messageTypes = {
        danger: { emoji: "💀", label: "DANGER", color: "red" },
        success: { emoji: "🎉", label: "SUCCESS", color: "green" },
        warning: { emoji: "⚠️", label: "WARNING", color: "yellow" },
        debug: { emoji: "🐛", label: "DEBUG", color: "blue" },
        info: { emoji: "ℹ️", label: "INFO", color: "blue" },
    };

    // Validate val1
    if (val1 && messageTypes[val1.toLowerCase()]) {
        const { emoji, label } = messageTypes[val1.toLowerCase()];

        // Define ANSI color codes
        const colors = {
            red: 31,
            green: 32,
            yellow: 33,
            blue: 34,
        };

        // Initialize styled value
        let styledValue = value;

        // If val2 (color) is provided, apply the corresponding color
        if (val2 && colors[val2.toLowerCase()]) {
            const colorCode = `\x1b[${colors[val2.toLowerCase()]}m`;
            styledValue = `${colorCode}${value}\x1b[0m`;
        } else if (val2) {
            return console.log("❌ Invalid color provided.");
        }

        // If val3 (style) is provided, apply the corresponding style
        if (val3) {
            if (val3 === "bold") {
                styledValue = `\x1b[1m${styledValue}\x1b[0m`;
            } else if (val3 === "italic") {
                styledValue = `\x1b[3m${styledValue}\x1b[0m`;
            } else if (val3 !== "regular") {
                return console.log("❌ Invalid style provided.");
            }
        }

        // Print the final message
        return console.log(`${emoji} [${label}] ${styledValue}`);
    } else if (val1) {
        return console.log("❌ Invalid message type provided.");
    }

    // Fallback for no valid val1
    return console.log("🤮 " + value);
};
