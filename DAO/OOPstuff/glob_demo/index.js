const glob = require('glob');

// basic use
// glob("**/*.js", {nonull:true}, function (er, files) {
//   // files is an array of filenames.

//   // If the `nonull` option is set, and nothing was found, then files is ["**/*.js"]

//   // er is an error object or null.

//   console.warn(files);
// })

/**
 * The following characters have special magic meaning when used in a path portion:
 * * Matches 0 or more characters in a single path portion
 * ? Matches 1 character
 * [...] Matches a range of characters, similar to a RegExp range. If the first character of the range is ! or ^ then it matches any character not in the range.
 * !(pattern|pattern|pattern) Matches anything that does not match any of the patterns provided.
 * ?(pattern|pattern|pattern) Matches zero or one occurrence of the patterns provided.
 * +(pattern|pattern|pattern) Matches one or more occurrences of the patterns provided.
 * (a|b|c) Matches zero or more occurrences of the patterns provided
 * @(pattern|pat*|pat?erN) Matches exactly one of the patterns provided
 * ** If a "globstar" is alone in a path portion, then it matches zero or more directories and subdirectories searching for matches. It does not crawl symlinked directories.
 */

// API
// glob.hasMagic(pattern, [options])
let has = glob.hasMagic("**/*.js");
console.warn('hasMagic:' + has);

// glob(pattern, [options], cb)  : Perform an asynchronous glob search.


// glob.sync(pattern, [options]) : Perform a synchronous glob search.
let res = glob.sync("**/*.js");
// console.warn(res);


// Class: glob.Glob
// It's an EventEmitter, and starts walking the filesystem to find matches immediately.
const Glob = glob.Glob;
let mg = new Glob("src/**/index.js", function(er, files) {
	console.warn('Glob class');
    console.warn(files);
});