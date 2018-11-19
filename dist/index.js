(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["react-amplitude"] = factory();
	else
		root["react-amplitude"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(2);

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = __webpack_require__(4);

var _lodash4 = _interopRequireDefault(_lodash3);

var _lodash5 = __webpack_require__(5);

var _lodash6 = _interopRequireDefault(_lodash5);

var _lodash7 = __webpack_require__(6);

var _lodash8 = _interopRequireDefault(_lodash7);

var _lodash9 = __webpack_require__(7);

var _lodash10 = _interopRequireDefault(_lodash9);

var _lodash11 = __webpack_require__(8);

var _lodash12 = _interopRequireDefault(_lodash11);

var _lodash13 = __webpack_require__(9);

var _lodash14 = _interopRequireDefault(_lodash13);

var _console = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React Amplitude Analytics
 *
 * @package react-amplitude
 * @author  Rory Garand <rory@mettleup.com>
 */
var _debug = false;

var Amplitude = {
  /**
   * Initialize amplitude
   * @param apiKey {String} required
   * @param userId {String} optional
   * @param config {Object} optional
   * @param cb {Function} optional
   */
  init: function init(apiKey, userId, config, cb) {
    if (!(0, _lodash12.default)(apiKey)) {
      (0, _console.warn)('[init] apiKey is required');
      return;
    }
    if (!(0, _lodash4.default)(userId) && !(0, _lodash12.default)(userId)) {
      (0, _console.warn)('[init] userId should be a string');
    }
    if (!(0, _lodash4.default)(config) && !(0, _lodash10.default)(config)) {
      (0, _console.warn)('[init] config should be an object');
    }
    if (!(0, _lodash4.default)(cb) && !(0, _lodash2.default)(cb)) {
      (0, _console.warn)('[init] callback should be a function');
    }

    if ((0, _lodash4.default)(window.amplitude)) {
      __webpack_require__(11).default(window, document);
    }

    config = config || {};
    cb = cb || function () {};
    amplitude.getInstance().init(apiKey, userId, config, cb);
  },

  /**
   * amplitude:
   * Returns the original Amplitude object.
   */
  amplitude: function (_amplitude) {
    function amplitude() {
      return _amplitude.apply(this, arguments);
    }

    amplitude.toString = function () {
      return _amplitude.toString();
    };

    return amplitude;
  }(function () {
    if (arguments.length > 0) {
      amplitude.apply(this, arguments);
      if (_debug) {
        (0, _console.log)('called amplitude(\'arguments\');');
        (0, _console.log)('with arguments: ' + JSON.stringify([].slice.apply(arguments)));
      }
      return;
    }

    return amplitude;
  }),

  /**
   * Clear user properties
   * (careful, this is irreversible!)
   */
  clearUserProperties: function clearUserProperties() {
    amplitude.getInstance().clearUserProperties();
  },

  /**
   * Returns current session id
   */
  getSessionId: function getSessionId() {
    return amplitude.getInstance().getSessionId();
  },

  /**
   * Applies user property operations
   * @param idObj {Object} required
   * @param cb {Function} optional
   */
  identify: function identify(idObj, cb) {
    if (!idObj) {
      (0, _console.error)('[identify] identify_obj is required.');
      return;
    }
    if (!(0, _lodash4.default)(idObj) && !(0, _lodash10.default)(idObj)) {
      (0, _console.error)('[identify] identify_obj should be an object.');
      return;
    }

    amplitude.getInstance().identify(idObj, cb);
  },

  /**
   * Returns if a new session was created at init
   */
  isNewSession: function isNewSession() {
    return amplitude.getInstance().isNewSession();
  },

  /**
   * Event tracking
   * @param eventType {String} required
   * @param eventProperties {Object} optional
   * @param cb {Function} optional
   */
  logEvent: function logEvent(eventType, eventProperties, cb) {
    if (!eventType) {
      (0, _console.error)('[logEvent] eventType is required.');
      return;
    }
    if (!(0, _lodash4.default)(eventType) && !(0, _lodash12.default)(eventType)) {
      (0, _console.warn)('[logEvent] eventType should be a string.');
    }
    if (!(0, _lodash4.default)(eventProperties) && !(0, _lodash10.default)(eventProperties)) {
      (0, _console.warn)('[logEvent] eventProperties should be an object.');
    }
    if (!(0, _lodash4.default)(cb) && !(0, _lodash2.default)(cb)) {
      (0, _console.warn)('[logEvent] callback should be a function.');
    }
    cb = cb || function () {};
    eventProperties = eventProperties || {};
    amplitude.getInstance().logEvent(eventType, eventProperties, cb);
  },

  /**
   * Event tracking w/ timestamp
   * @param eventType {String} required
   * @param eventProperties {Object} optional
   * @param timestamp {Number} optional
   * @param cb {Function} optional
   */
  logEventWithTimestamp: function logEventWithTimestamp(eventType, eventProperties, timestamp, cb) {
    if ((0, _lodash4.default)(eventType)) {
      (0, _console.error)('[logEvent] eventType is required.');
      return;
    }
    if (!(0, _lodash4.default)(eventType) && !(0, _lodash12.default)(eventType)) {
      (0, _console.warn)('[logEvent] eventType should be a string.');
    }
    if (!(0, _lodash4.default)(eventProperties) && !(0, _lodash10.default)(eventProperties)) {
      (0, _console.warn)('[logEvent] eventProperties should be an object.');
    }
    if (!(0, _lodash4.default)(timestamp) && !(0, _lodash6.default)(timestamp)) {
      (0, _console.error)('[logEvent] timestamp should be a number.');
      return;
    }
    if (!(0, _lodash4.default)(cb) && !(0, _lodash2.default)(cb)) {
      (0, _console.warn)('[logEvent] callback should be a function.');
    }

    cb = cb || function () {};
    eventProperties = eventProperties || {};
    amplitude.getInstance().logEventWithTimestamp(eventType, eventProperties, timestamp, cb);
  },

  /**
   * Resets the user id
   */
  resetUserId: function resetUserId() {
    amplitude.getInstance().setUserId(null);
    amplitude.getInstance().regenerateDeviceId();
  },

  /**
   * Set user id
   * @param userId {String} or null required
   */
  setUserId: function setUserId(userId) {
    if (!(0, _lodash12.default)(userId) && !(0, _lodash14.default)(userId)) {
      (0, _console.warn)('[setUserId] userId must be a string or null.');
    }

    amplitude.getInstance().setUserId(userId);
  },

  /**
   * Sets user properties:
   *
   * @param userProps {Object} required
   */
  setUserProperties: function setUserProperties(userProps) {
    if (!userProps) {
      (0, _console.warn)('userProps are required');
      return;
    }

    amplitude.getInstance().setUserProperties(userProps);
  },

  /**
   * Sets whether to opt current user out of tracking.
   *
   * @param enable {Boolean} required
   */
  setOptOut: function setOptOut(enable) {
    if (!(0, _lodash8.default)(enable)) {
      (0, _console.warn)('[setOptOut] enable must be a boolean');
      return;
    }

    amplitude.getInstance().setOptOut(enable);
  },

  // DEPRECATED
  event: function event(a, b, c) {
    (0, _console.warn)('[event] has been deprecated. Please use [logEvent].');
    this.logEvent(a, b, c);
  },
  initialize: function initialize(a, b, c, d) {
    (0, _console.warn)('[initialize] has been deprecated. Please use [init].');
    this.init(a, b, c, d);
  }
};

exports.default = Amplitude;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    nullTag = '[object Null]',
    proxyTag = '[object Proxy]',
    undefinedTag = '[object Undefined]';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isFunction;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * lodash 4.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

module.exports = isNil;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
 * as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && objectToString.call(value) == numberTag);
}

module.exports = isNumber;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var boolTag = '[object Boolean]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */
function isBoolean(value) {
  return value === true || value === false ||
    (isObjectLike(value) && objectToString.call(value) == boolTag);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = isBoolean;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) ||
      objectToString.call(value) != objectTag || isHostObject(value)) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return (typeof Ctor == 'function' &&
    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
}

module.exports = isPlainObject;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * lodash 4.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var stringTag = '[object String]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @type Function
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
}

module.exports = isString;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(void 0);
 * // => false
 */
function isNull(value) {
  return value === null;
}

module.exports = isNull;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var error = function error(message) {
	console.error("[react-amplitude] " + message);
};

var log = function log(message) {
	console.info("[react-amplitude] " + message);
};

var warn = function warn(message) {
	console.warn("[react-amplitude] " + message);
};

exports.default = { error: error, log: log, warn: warn };
exports.error = error;
exports.log = log;
exports.warn = warn;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (e, t) {
    var n = e.amplitude || { _q: [], _iq: {} };
    var r = t.createElement("script");
    r.type = "text/javascript";
    r.async = true;
    r.src = "https://cdn.amplitude.com/libs/amplitude-4.5.2-min.gz.js";
    r.onload = function () {
        e.amplitude.runQueuedFunctions();
    };
    var i = t.getElementsByTagName("script")[0];
    i.parentNode.insertBefore(r, i);

    function s(e, t) {
        e.prototype[t] = function () {
            this._q.push([t].concat(Array.prototype.slice.call(arguments, 0)));
            return this;
        };
    }

    var o = function o() {
        this._q = [];
        return this;
    };
    var a = ["add", "append", "clearAll", "prepend", "set", "setOnce", "unset"];
    for (var u = 0; u < a.length; u++) {
        s(o, a[u]);
    }
    n.Identify = o;
    var c = function c() {
        this._q = [];
        return this;
    };
    var p = ["setProductId", "setQuantity", "setPrice", "setRevenueType", "setEventProperties"];
    for (var l = 0; l < p.length; l++) {
        s(c, p[l]);
    }
    n.Revenue = c;
    var d = ["init", "logEvent", "logRevenue", "setUserId", "setUserProperties", "setOptOut", "setVersionName", "setDomain", "setDeviceId", "setGlobalUserProperties", "identify", "clearUserProperties", "setGroup", "logRevenueV2", "regenerateDeviceId"];

    function v(e) {
        function t(t) {
            e[t] = function () {
                e._q.push([t].concat(Array.prototype.slice.call(arguments, 0)));
            };
        }

        for (var n = 0; n < d.length; n++) {
            t(d[n]);
        }
    }

    v(n);
    n.getInstance = function (e) {
        e = (!e || e.length === 0 ? "$default_instance" : e).toLowerCase();
        if (!n._iq.hasOwnProperty(e)) {
            n._iq[e] = { _q: [] };
            v(n._iq[e]);
        }
        return n._iq[e];
    };
    e.amplitude = n;
};

;

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map