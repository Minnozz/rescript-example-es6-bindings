(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // node_modules/date-fns/_lib/requiredArgs/index.js
  var require_requiredArgs = __commonJS({
    "node_modules/date-fns/_lib/requiredArgs/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = requiredArgs;
      function requiredArgs(required, args) {
        if (args.length < required) {
          throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
        }
      }
      module.exports = exports.default;
    }
  });

  // node_modules/date-fns/toDate/index.js
  var require_toDate = __commonJS({
    "node_modules/date-fns/toDate/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = toDate;
      var _index = _interopRequireDefault(require_requiredArgs());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function toDate(argument) {
        (0, _index.default)(1, arguments);
        var argStr = Object.prototype.toString.call(argument);
        if (argument instanceof Date || typeof argument === "object" && argStr === "[object Date]") {
          return new Date(argument.getTime());
        } else if (typeof argument === "number" || argStr === "[object Number]") {
          return new Date(argument);
        } else {
          if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
            console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule");
            console.warn(new Error().stack);
          }
          return new Date(NaN);
        }
      }
      module.exports = exports.default;
    }
  });

  // node_modules/date-fns/compareAsc/index.js
  var require_compareAsc = __commonJS({
    "node_modules/date-fns/compareAsc/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = compareAsc;
      var _index = _interopRequireDefault(require_toDate());
      var _index2 = _interopRequireDefault(require_requiredArgs());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function compareAsc(dirtyDateLeft, dirtyDateRight) {
        (0, _index2.default)(2, arguments);
        var dateLeft = (0, _index.default)(dirtyDateLeft);
        var dateRight = (0, _index.default)(dirtyDateRight);
        var diff = dateLeft.getTime() - dateRight.getTime();
        if (diff < 0) {
          return -1;
        } else if (diff > 0) {
          return 1;
        } else {
          return diff;
        }
      }
      module.exports = exports.default;
    }
  });

  // node_modules/date-fns/differenceInCalendarMonths/index.js
  var require_differenceInCalendarMonths = __commonJS({
    "node_modules/date-fns/differenceInCalendarMonths/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = differenceInCalendarMonths;
      var _index = _interopRequireDefault(require_toDate());
      var _index2 = _interopRequireDefault(require_requiredArgs());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
        (0, _index2.default)(2, arguments);
        var dateLeft = (0, _index.default)(dirtyDateLeft);
        var dateRight = (0, _index.default)(dirtyDateRight);
        var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
        var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
        return yearDiff * 12 + monthDiff;
      }
      module.exports = exports.default;
    }
  });

  // node_modules/date-fns/endOfDay/index.js
  var require_endOfDay = __commonJS({
    "node_modules/date-fns/endOfDay/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = endOfDay;
      var _index = _interopRequireDefault(require_toDate());
      var _index2 = _interopRequireDefault(require_requiredArgs());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function endOfDay(dirtyDate) {
        (0, _index2.default)(1, arguments);
        var date = (0, _index.default)(dirtyDate);
        date.setHours(23, 59, 59, 999);
        return date;
      }
      module.exports = exports.default;
    }
  });

  // node_modules/date-fns/endOfMonth/index.js
  var require_endOfMonth = __commonJS({
    "node_modules/date-fns/endOfMonth/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = endOfMonth;
      var _index = _interopRequireDefault(require_toDate());
      var _index2 = _interopRequireDefault(require_requiredArgs());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function endOfMonth(dirtyDate) {
        (0, _index2.default)(1, arguments);
        var date = (0, _index.default)(dirtyDate);
        var month = date.getMonth();
        date.setFullYear(date.getFullYear(), month + 1, 0);
        date.setHours(23, 59, 59, 999);
        return date;
      }
      module.exports = exports.default;
    }
  });

  // node_modules/date-fns/isLastDayOfMonth/index.js
  var require_isLastDayOfMonth = __commonJS({
    "node_modules/date-fns/isLastDayOfMonth/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isLastDayOfMonth;
      var _index = _interopRequireDefault(require_toDate());
      var _index2 = _interopRequireDefault(require_endOfDay());
      var _index3 = _interopRequireDefault(require_endOfMonth());
      var _index4 = _interopRequireDefault(require_requiredArgs());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function isLastDayOfMonth(dirtyDate) {
        (0, _index4.default)(1, arguments);
        var date = (0, _index.default)(dirtyDate);
        return (0, _index2.default)(date).getTime() === (0, _index3.default)(date).getTime();
      }
      module.exports = exports.default;
    }
  });

  // node_modules/date-fns/differenceInMonths/index.js
  var require_differenceInMonths = __commonJS({
    "node_modules/date-fns/differenceInMonths/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = differenceInMonths;
      var _index = _interopRequireDefault(require_toDate());
      var _index2 = _interopRequireDefault(require_differenceInCalendarMonths());
      var _index3 = _interopRequireDefault(require_compareAsc());
      var _index4 = _interopRequireDefault(require_requiredArgs());
      var _index5 = _interopRequireDefault(require_isLastDayOfMonth());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
        (0, _index4.default)(2, arguments);
        var dateLeft = (0, _index.default)(dirtyDateLeft);
        var dateRight = (0, _index.default)(dirtyDateRight);
        var sign = (0, _index3.default)(dateLeft, dateRight);
        var difference = Math.abs((0, _index2.default)(dateLeft, dateRight));
        var result;
        if (difference < 1) {
          result = 0;
        } else {
          if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {
            dateLeft.setDate(30);
          }
          dateLeft.setMonth(dateLeft.getMonth() - sign * difference);
          var isLastMonthNotFull = (0, _index3.default)(dateLeft, dateRight) === -sign;
          if ((0, _index5.default)((0, _index.default)(dirtyDateLeft)) && difference === 1 && (0, _index3.default)(dirtyDateLeft, dateRight) === 1) {
            isLastMonthNotFull = false;
          }
          result = sign * (difference - Number(isLastMonthNotFull));
        }
        return result === 0 ? 0 : result;
      }
      module.exports = exports.default;
    }
  });

  // node_modules/date-fns/differenceInMilliseconds/index.js
  var require_differenceInMilliseconds = __commonJS({
    "node_modules/date-fns/differenceInMilliseconds/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = differenceInMilliseconds;
      var _index = _interopRequireDefault(require_toDate());
      var _index2 = _interopRequireDefault(require_requiredArgs());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) {
        (0, _index2.default)(2, arguments);
        var dateLeft = (0, _index.default)(dirtyDateLeft);
        var dateRight = (0, _index.default)(dirtyDateRight);
        return dateLeft.getTime() - dateRight.getTime();
      }
      module.exports = exports.default;
    }
  });

  // node_modules/date-fns/differenceInSeconds/index.js
  var require_differenceInSeconds = __commonJS({
    "node_modules/date-fns/differenceInSeconds/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = differenceInSeconds;
      var _index = _interopRequireDefault(require_differenceInMilliseconds());
      var _index2 = _interopRequireDefault(require_requiredArgs());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function differenceInSeconds(dirtyDateLeft, dirtyDateRight) {
        (0, _index2.default)(2, arguments);
        var diff = (0, _index.default)(dirtyDateLeft, dirtyDateRight) / 1e3;
        return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
      }
      module.exports = exports.default;
    }
  });

  // node_modules/date-fns/locale/en-US/_lib/formatDistance/index.js
  var require_formatDistance = __commonJS({
    "node_modules/date-fns/locale/en-US/_lib/formatDistance/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = formatDistance;
      var formatDistanceLocale = {
        lessThanXSeconds: {
          one: "less than a second",
          other: "less than {{count}} seconds"
        },
        xSeconds: {
          one: "1 second",
          other: "{{count}} seconds"
        },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
          one: "less than a minute",
          other: "less than {{count}} minutes"
        },
        xMinutes: {
          one: "1 minute",
          other: "{{count}} minutes"
        },
        aboutXHours: {
          one: "about 1 hour",
          other: "about {{count}} hours"
        },
        xHours: {
          one: "1 hour",
          other: "{{count}} hours"
        },
        xDays: {
          one: "1 day",
          other: "{{count}} days"
        },
        aboutXWeeks: {
          one: "about 1 week",
          other: "about {{count}} weeks"
        },
        xWeeks: {
          one: "1 week",
          other: "{{count}} weeks"
        },
        aboutXMonths: {
          one: "about 1 month",
          other: "about {{count}} months"
        },
        xMonths: {
          one: "1 month",
          other: "{{count}} months"
        },
        aboutXYears: {
          one: "about 1 year",
          other: "about {{count}} years"
        },
        xYears: {
          one: "1 year",
          other: "{{count}} years"
        },
        overXYears: {
          one: "over 1 year",
          other: "over {{count}} years"
        },
        almostXYears: {
          one: "almost 1 year",
          other: "almost {{count}} years"
        }
      };
      function formatDistance(token, count, options) {
        options = options || {};
        var result;
        if (typeof formatDistanceLocale[token] === "string") {
          result = formatDistanceLocale[token];
        } else if (count === 1) {
          result = formatDistanceLocale[token].one;
        } else {
          result = formatDistanceLocale[token].other.replace("{{count}}", count);
        }
        if (options.addSuffix) {
          if (options.comparison > 0) {
            return "in " + result;
          } else {
            return result + " ago";
          }
        }
        return result;
      }
      module.exports = exports.default;
    }
  });

  // node_modules/date-fns/locale/_lib/buildFormatLongFn/index.js
  var require_buildFormatLongFn = __commonJS({
    "node_modules/date-fns/locale/_lib/buildFormatLongFn/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = buildFormatLongFn;
      function buildFormatLongFn(args) {
        return function(dirtyOptions) {
          var options = dirtyOptions || {};
          var width = options.width ? String(options.width) : args.defaultWidth;
          var format = args.formats[width] || args.formats[args.defaultWidth];
          return format;
        };
      }
      module.exports = exports.default;
    }
  });

  // node_modules/date-fns/locale/en-US/_lib/formatLong/index.js
  var require_formatLong = __commonJS({
    "node_modules/date-fns/locale/en-US/_lib/formatLong/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _index = _interopRequireDefault(require_buildFormatLongFn());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var dateFormats = {
        full: "EEEE, MMMM do, y",
        long: "MMMM do, y",
        medium: "MMM d, y",
        short: "MM/dd/yyyy"
      };
      var timeFormats = {
        full: "h:mm:ss a zzzz",
        long: "h:mm:ss a z",
        medium: "h:mm:ss a",
        short: "h:mm a"
      };
      var dateTimeFormats = {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}"
      };
      var formatLong = {
        date: (0, _index.default)({
          formats: dateFormats,
          defaultWidth: "full"
        }),
        time: (0, _index.default)({
          formats: timeFormats,
          defaultWidth: "full"
        }),
        dateTime: (0, _index.default)({
          formats: dateTimeFormats,
          defaultWidth: "full"
        })
      };
      var _default = formatLong;
      exports.default = _default;
      module.exports = exports.default;
    }
  });

  // node_modules/date-fns/locale/en-US/_lib/formatRelative/index.js
  var require_formatRelative = __commonJS({
    "node_modules/date-fns/locale/en-US/_lib/formatRelative/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = formatRelative;
      var formatRelativeLocale = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: "P"
      };
      function formatRelative(token, _date, _baseDate, _options) {
        return formatRelativeLocale[token];
      }
      module.exports = exports.default;
    }
  });

  // node_modules/date-fns/locale/_lib/buildLocalizeFn/index.js
  var require_buildLocalizeFn = __commonJS({
    "node_modules/date-fns/locale/_lib/buildLocalizeFn/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = buildLocalizeFn;
      function buildLocalizeFn(args) {
        return function(dirtyIndex, dirtyOptions) {
          var options = dirtyOptions || {};
          var context = options.context ? String(options.context) : "standalone";
          var valuesArray;
          if (context === "formatting" && args.formattingValues) {
            var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            var width = options.width ? String(options.width) : defaultWidth;
            valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
          } else {
            var _defaultWidth = args.defaultWidth;
            var _width = options.width ? String(options.width) : args.defaultWidth;
            valuesArray = args.values[_width] || args.values[_defaultWidth];
          }
          var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
          return valuesArray[index];
        };
      }
      module.exports = exports.default;
    }
  });

  // node_modules/date-fns/locale/en-US/_lib/localize/index.js
  var require_localize = __commonJS({
    "node_modules/date-fns/locale/en-US/_lib/localize/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _index = _interopRequireDefault(require_buildLocalizeFn());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var eraValues = {
        narrow: ["B", "A"],
        abbreviated: ["BC", "AD"],
        wide: ["Before Christ", "Anno Domini"]
      };
      var quarterValues = {
        narrow: ["1", "2", "3", "4"],
        abbreviated: ["Q1", "Q2", "Q3", "Q4"],
        wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
      };
      var monthValues = {
        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      };
      var dayValues = {
        narrow: ["S", "M", "T", "W", "T", "F", "S"],
        short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      };
      var dayPeriodValues = {
        narrow: {
          am: "a",
          pm: "p",
          midnight: "mi",
          noon: "n",
          morning: "morning",
          afternoon: "afternoon",
          evening: "evening",
          night: "night"
        },
        abbreviated: {
          am: "AM",
          pm: "PM",
          midnight: "midnight",
          noon: "noon",
          morning: "morning",
          afternoon: "afternoon",
          evening: "evening",
          night: "night"
        },
        wide: {
          am: "a.m.",
          pm: "p.m.",
          midnight: "midnight",
          noon: "noon",
          morning: "morning",
          afternoon: "afternoon",
          evening: "evening",
          night: "night"
        }
      };
      var formattingDayPeriodValues = {
        narrow: {
          am: "a",
          pm: "p",
          midnight: "mi",
          noon: "n",
          morning: "in the morning",
          afternoon: "in the afternoon",
          evening: "in the evening",
          night: "at night"
        },
        abbreviated: {
          am: "AM",
          pm: "PM",
          midnight: "midnight",
          noon: "noon",
          morning: "in the morning",
          afternoon: "in the afternoon",
          evening: "in the evening",
          night: "at night"
        },
        wide: {
          am: "a.m.",
          pm: "p.m.",
          midnight: "midnight",
          noon: "noon",
          morning: "in the morning",
          afternoon: "in the afternoon",
          evening: "in the evening",
          night: "at night"
        }
      };
      function ordinalNumber(dirtyNumber, _dirtyOptions) {
        var number = Number(dirtyNumber);
        var rem100 = number % 100;
        if (rem100 > 20 || rem100 < 10) {
          switch (rem100 % 10) {
            case 1:
              return number + "st";
            case 2:
              return number + "nd";
            case 3:
              return number + "rd";
          }
        }
        return number + "th";
      }
      var localize = {
        ordinalNumber,
        era: (0, _index.default)({
          values: eraValues,
          defaultWidth: "wide"
        }),
        quarter: (0, _index.default)({
          values: quarterValues,
          defaultWidth: "wide",
          argumentCallback: function(quarter) {
            return Number(quarter) - 1;
          }
        }),
        month: (0, _index.default)({
          values: monthValues,
          defaultWidth: "wide"
        }),
        day: (0, _index.default)({
          values: dayValues,
          defaultWidth: "wide"
        }),
        dayPeriod: (0, _index.default)({
          values: dayPeriodValues,
          defaultWidth: "wide",
          formattingValues: formattingDayPeriodValues,
          defaultFormattingWidth: "wide"
        })
      };
      var _default = localize;
      exports.default = _default;
      module.exports = exports.default;
    }
  });

  // node_modules/date-fns/locale/_lib/buildMatchPatternFn/index.js
  var require_buildMatchPatternFn = __commonJS({
    "node_modules/date-fns/locale/_lib/buildMatchPatternFn/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = buildMatchPatternFn;
      function buildMatchPatternFn(args) {
        return function(dirtyString, dirtyOptions) {
          var string = String(dirtyString);
          var options = dirtyOptions || {};
          var matchResult = string.match(args.matchPattern);
          if (!matchResult) {
            return null;
          }
          var matchedString = matchResult[0];
          var parseResult = string.match(args.parsePattern);
          if (!parseResult) {
            return null;
          }
          var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
          value = options.valueCallback ? options.valueCallback(value) : value;
          return {
            value,
            rest: string.slice(matchedString.length)
          };
        };
      }
      module.exports = exports.default;
    }
  });

  // node_modules/date-fns/locale/_lib/buildMatchFn/index.js
  var require_buildMatchFn = __commonJS({
    "node_modules/date-fns/locale/_lib/buildMatchFn/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = buildMatchFn;
      function buildMatchFn(args) {
        return function(dirtyString, dirtyOptions) {
          var string = String(dirtyString);
          var options = dirtyOptions || {};
          var width = options.width;
          var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
          var matchResult = string.match(matchPattern);
          if (!matchResult) {
            return null;
          }
          var matchedString = matchResult[0];
          var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
          var value;
          if (Object.prototype.toString.call(parsePatterns) === "[object Array]") {
            value = findIndex(parsePatterns, function(pattern) {
              return pattern.test(matchedString);
            });
          } else {
            value = findKey(parsePatterns, function(pattern) {
              return pattern.test(matchedString);
            });
          }
          value = args.valueCallback ? args.valueCallback(value) : value;
          value = options.valueCallback ? options.valueCallback(value) : value;
          return {
            value,
            rest: string.slice(matchedString.length)
          };
        };
      }
      function findKey(object, predicate) {
        for (var key in object) {
          if (object.hasOwnProperty(key) && predicate(object[key])) {
            return key;
          }
        }
      }
      function findIndex(array, predicate) {
        for (var key = 0; key < array.length; key++) {
          if (predicate(array[key])) {
            return key;
          }
        }
      }
      module.exports = exports.default;
    }
  });

  // node_modules/date-fns/locale/en-US/_lib/match/index.js
  var require_match = __commonJS({
    "node_modules/date-fns/locale/en-US/_lib/match/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _index = _interopRequireDefault(require_buildMatchPatternFn());
      var _index2 = _interopRequireDefault(require_buildMatchFn());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
      var parseOrdinalNumberPattern = /\d+/i;
      var matchEraPatterns = {
        narrow: /^(b|a)/i,
        abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
        wide: /^(before christ|before common era|anno domini|common era)/i
      };
      var parseEraPatterns = {
        any: [/^b/i, /^(a|c)/i]
      };
      var matchQuarterPatterns = {
        narrow: /^[1234]/i,
        abbreviated: /^q[1234]/i,
        wide: /^[1234](th|st|nd|rd)? quarter/i
      };
      var parseQuarterPatterns = {
        any: [/1/i, /2/i, /3/i, /4/i]
      };
      var matchMonthPatterns = {
        narrow: /^[jfmasond]/i,
        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
      };
      var parseMonthPatterns = {
        narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
        any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
      };
      var matchDayPatterns = {
        narrow: /^[smtwf]/i,
        short: /^(su|mo|tu|we|th|fr|sa)/i,
        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
      };
      var parseDayPatterns = {
        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
      };
      var matchDayPeriodPatterns = {
        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
      };
      var parseDayPeriodPatterns = {
        any: {
          am: /^a/i,
          pm: /^p/i,
          midnight: /^mi/i,
          noon: /^no/i,
          morning: /morning/i,
          afternoon: /afternoon/i,
          evening: /evening/i,
          night: /night/i
        }
      };
      var match = {
        ordinalNumber: (0, _index.default)({
          matchPattern: matchOrdinalNumberPattern,
          parsePattern: parseOrdinalNumberPattern,
          valueCallback: function(value) {
            return parseInt(value, 10);
          }
        }),
        era: (0, _index2.default)({
          matchPatterns: matchEraPatterns,
          defaultMatchWidth: "wide",
          parsePatterns: parseEraPatterns,
          defaultParseWidth: "any"
        }),
        quarter: (0, _index2.default)({
          matchPatterns: matchQuarterPatterns,
          defaultMatchWidth: "wide",
          parsePatterns: parseQuarterPatterns,
          defaultParseWidth: "any",
          valueCallback: function(index) {
            return index + 1;
          }
        }),
        month: (0, _index2.default)({
          matchPatterns: matchMonthPatterns,
          defaultMatchWidth: "wide",
          parsePatterns: parseMonthPatterns,
          defaultParseWidth: "any"
        }),
        day: (0, _index2.default)({
          matchPatterns: matchDayPatterns,
          defaultMatchWidth: "wide",
          parsePatterns: parseDayPatterns,
          defaultParseWidth: "any"
        }),
        dayPeriod: (0, _index2.default)({
          matchPatterns: matchDayPeriodPatterns,
          defaultMatchWidth: "any",
          parsePatterns: parseDayPeriodPatterns,
          defaultParseWidth: "any"
        })
      };
      var _default = match;
      exports.default = _default;
      module.exports = exports.default;
    }
  });

  // node_modules/date-fns/locale/en-US/index.js
  var require_en_US = __commonJS({
    "node_modules/date-fns/locale/en-US/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _index = _interopRequireDefault(require_formatDistance());
      var _index2 = _interopRequireDefault(require_formatLong());
      var _index3 = _interopRequireDefault(require_formatRelative());
      var _index4 = _interopRequireDefault(require_localize());
      var _index5 = _interopRequireDefault(require_match());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var locale = {
        code: "en-US",
        formatDistance: _index.default,
        formatLong: _index2.default,
        formatRelative: _index3.default,
        localize: _index4.default,
        match: _index5.default,
        options: {
          weekStartsOn: 0,
          firstWeekContainsDate: 1
        }
      };
      var _default = locale;
      exports.default = _default;
      module.exports = exports.default;
    }
  });

  // node_modules/date-fns/_lib/assign/index.js
  var require_assign = __commonJS({
    "node_modules/date-fns/_lib/assign/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = assign;
      function assign(target, dirtyObject) {
        if (target == null) {
          throw new TypeError("assign requires that input parameter not be null or undefined");
        }
        dirtyObject = dirtyObject || {};
        for (var property in dirtyObject) {
          if (dirtyObject.hasOwnProperty(property)) {
            target[property] = dirtyObject[property];
          }
        }
        return target;
      }
      module.exports = exports.default;
    }
  });

  // node_modules/date-fns/_lib/cloneObject/index.js
  var require_cloneObject = __commonJS({
    "node_modules/date-fns/_lib/cloneObject/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = cloneObject;
      var _index = _interopRequireDefault(require_assign());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function cloneObject(dirtyObject) {
        return (0, _index.default)({}, dirtyObject);
      }
      module.exports = exports.default;
    }
  });

  // node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js
  var require_getTimezoneOffsetInMilliseconds = __commonJS({
    "node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = getTimezoneOffsetInMilliseconds;
      function getTimezoneOffsetInMilliseconds(date) {
        var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
        utcDate.setUTCFullYear(date.getFullYear());
        return date.getTime() - utcDate.getTime();
      }
      module.exports = exports.default;
    }
  });

  // node_modules/date-fns/formatDistance/index.js
  var require_formatDistance2 = __commonJS({
    "node_modules/date-fns/formatDistance/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = formatDistance;
      var _index = _interopRequireDefault(require_compareAsc());
      var _index2 = _interopRequireDefault(require_differenceInMonths());
      var _index3 = _interopRequireDefault(require_differenceInSeconds());
      var _index4 = _interopRequireDefault(require_en_US());
      var _index5 = _interopRequireDefault(require_toDate());
      var _index6 = _interopRequireDefault(require_cloneObject());
      var _index7 = _interopRequireDefault(require_getTimezoneOffsetInMilliseconds());
      var _index8 = _interopRequireDefault(require_requiredArgs());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var MINUTES_IN_DAY = 1440;
      var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
      var MINUTES_IN_MONTH = 43200;
      var MINUTES_IN_TWO_MONTHS = 86400;
      function formatDistance(dirtyDate, dirtyBaseDate) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        (0, _index8.default)(2, arguments);
        var locale = options.locale || _index4.default;
        if (!locale.formatDistance) {
          throw new RangeError("locale must contain formatDistance property");
        }
        var comparison = (0, _index.default)(dirtyDate, dirtyBaseDate);
        if (isNaN(comparison)) {
          throw new RangeError("Invalid time value");
        }
        var localizeOptions = (0, _index6.default)(options);
        localizeOptions.addSuffix = Boolean(options.addSuffix);
        localizeOptions.comparison = comparison;
        var dateLeft;
        var dateRight;
        if (comparison > 0) {
          dateLeft = (0, _index5.default)(dirtyBaseDate);
          dateRight = (0, _index5.default)(dirtyDate);
        } else {
          dateLeft = (0, _index5.default)(dirtyDate);
          dateRight = (0, _index5.default)(dirtyBaseDate);
        }
        var seconds = (0, _index3.default)(dateRight, dateLeft);
        var offsetInSeconds = ((0, _index7.default)(dateRight) - (0, _index7.default)(dateLeft)) / 1e3;
        var minutes = Math.round((seconds - offsetInSeconds) / 60);
        var months;
        if (minutes < 2) {
          if (options.includeSeconds) {
            if (seconds < 5) {
              return locale.formatDistance("lessThanXSeconds", 5, localizeOptions);
            } else if (seconds < 10) {
              return locale.formatDistance("lessThanXSeconds", 10, localizeOptions);
            } else if (seconds < 20) {
              return locale.formatDistance("lessThanXSeconds", 20, localizeOptions);
            } else if (seconds < 40) {
              return locale.formatDistance("halfAMinute", null, localizeOptions);
            } else if (seconds < 60) {
              return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
            } else {
              return locale.formatDistance("xMinutes", 1, localizeOptions);
            }
          } else {
            if (minutes === 0) {
              return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
            } else {
              return locale.formatDistance("xMinutes", minutes, localizeOptions);
            }
          }
        } else if (minutes < 45) {
          return locale.formatDistance("xMinutes", minutes, localizeOptions);
        } else if (minutes < 90) {
          return locale.formatDistance("aboutXHours", 1, localizeOptions);
        } else if (minutes < MINUTES_IN_DAY) {
          var hours = Math.round(minutes / 60);
          return locale.formatDistance("aboutXHours", hours, localizeOptions);
        } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
          return locale.formatDistance("xDays", 1, localizeOptions);
        } else if (minutes < MINUTES_IN_MONTH) {
          var days = Math.round(minutes / MINUTES_IN_DAY);
          return locale.formatDistance("xDays", days, localizeOptions);
        } else if (minutes < MINUTES_IN_TWO_MONTHS) {
          months = Math.round(minutes / MINUTES_IN_MONTH);
          return locale.formatDistance("aboutXMonths", months, localizeOptions);
        }
        months = (0, _index2.default)(dateRight, dateLeft);
        if (months < 12) {
          var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
          return locale.formatDistance("xMonths", nearestMonth, localizeOptions);
        } else {
          var monthsSinceStartOfYear = months % 12;
          var years = Math.floor(months / 12);
          if (monthsSinceStartOfYear < 3) {
            return locale.formatDistance("aboutXYears", years, localizeOptions);
          } else if (monthsSinceStartOfYear < 9) {
            return locale.formatDistance("overXYears", years, localizeOptions);
          } else {
            return locale.formatDistance("almostXYears", years + 1, localizeOptions);
          }
        }
      }
      module.exports = exports.default;
    }
  });

  // node_modules/date-fns/formatDistanceToNow/index.js
  var require_formatDistanceToNow = __commonJS({
    "node_modules/date-fns/formatDistanceToNow/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = formatDistanceToNow;
      var _index = _interopRequireDefault(require_formatDistance2());
      var _index2 = _interopRequireDefault(require_requiredArgs());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function formatDistanceToNow(dirtyDate, dirtyOptions) {
        (0, _index2.default)(1, arguments);
        return (0, _index.default)(dirtyDate, Date.now(), dirtyOptions);
      }
      module.exports = exports.default;
    }
  });

  // lib/js/src/demo.js
  "use strict";
  var FormatDistanceToNow = require_formatDistanceToNow();
  console.log(FormatDistanceToNow(new Date()));
})();
