const regexEmoji = require("regex-emoji")
    , regexParser = require("regex-parser")
    ;

const REGEX_EMOJI = regexParser("/^" + regexEmoji().toString().substring(1));

/**
 * startsWithEmoji
 * Checks if a string starts with emoji.
 *
 * @name startsWithEmoji
 * @function
 * @param {String} s The input string.
 * @return {Boolean} `true`, if the string starts with `:emoji:` snippet or `false` otherwise.
 */
module.exports = function startsWithEmoji(s) {
    REGEX_EMOJI.lastIndex = 0;
    return REGEX_EMOJI.test(s);
};

/**
 * regex
 * Starts with emoji regex.
 *
 * @name regex
 * @function
 * @return {RegExp} The regex value.
 */
module.exports.regex = function () {
    REGEX_EMOJI.lastIndex = 0;
    return REGEX_EMOJI;
};
