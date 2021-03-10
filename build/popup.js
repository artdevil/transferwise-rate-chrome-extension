/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/popup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/choices.js/public/assets/scripts/choices.js":
/*!******************************************************************!*\
  !*** ./node_modules/choices.js/public/assets/scripts/choices.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! choices.js v9.0.1 | © 2019 Josh Johnson | https://github.com/jshjohnson/Choices#readme */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/public/assets/scripts/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	try {
		return (key in target) // Properties are safe to merge if they don't exist in the target yet,
			&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
				&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
	} catch (unused) {
		// Counterintuitively, it's safe to merge any property on a target that causes the `in` operator to throw.
		// This happens when trying to copy an object in the source over a plain string in the target.
		return false
	}
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (!options.isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		} else {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5), __webpack_require__(6)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Fuse.js v3.4.5 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=n(2),a=n(8),s=n(0),c=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,i=n.distance,s=void 0===i?100:i,c=n.threshold,h=void 0===c?.6:c,l=n.maxPatternLength,u=void 0===l?32:l,f=n.caseSensitive,d=void 0!==f&&f,v=n.tokenSeparator,p=void 0===v?/ +/g:v,g=n.findAllMatches,y=void 0!==g&&g,m=n.minMatchCharLength,k=void 0===m?1:m,S=n.id,x=void 0===S?null:S,b=n.keys,M=void 0===b?[]:b,_=n.shouldSort,L=void 0===_||_,w=n.getFn,A=void 0===w?a:w,C=n.sortFn,I=void 0===C?function(e,t){return e.score-t.score}:C,O=n.tokenize,j=void 0!==O&&O,P=n.matchAllTokens,F=void 0!==P&&P,T=n.includeMatches,z=void 0!==T&&T,E=n.includeScore,K=void 0!==E&&E,$=n.verbose,J=void 0!==$&&$;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:h,maxPatternLength:u,isCaseSensitive:d,tokenSeparator:p,findAllMatches:y,minMatchCharLength:k,id:x,keys:M,includeMatches:z,includeScore:K,shouldSort:L,getFn:A,sortFn:I,verbose:J,tokenize:j,matchAllTokens:F},this.setCollection(t)}var t,n,c;return t=e,(n=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),r=n.tokenSearchers,o=n.fullSearcher,i=this._search(r,o),a=i.weights,s=i.results;return this._computeScore(a,s),this.options.shouldSort&&this._sort(s),t.limit&&"number"==typeof t.limit&&(s=s.slice(0,t.limit)),this._format(s)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),r=0,o=n.length;r<o;r+=1)t.push(new i(n[r],this.options));return{tokenSearchers:t,fullSearcher:new i(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=this.list,r={},o=[];if("string"==typeof n[0]){for(var i=0,a=n.length;i<a;i+=1)this._analyze({key:"",value:n[i],record:i,index:i},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t});return{weights:null,results:o}}for(var s={},c=0,h=n.length;c<h;c+=1)for(var l=n[c],u=0,f=this.options.keys.length;u<f;u+=1){var d=this.options.keys[u];if("string"!=typeof d){if(s[d.name]={weight:1-d.weight||1},d.weight<=0||d.weight>1)throw new Error("Key weight has to be > 0 and <= 1");d=d.name}else s[d]={weight:1};this._analyze({key:d,value:this.options.getFn(l,d),record:l,index:c},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t})}return{weights:s,results:o}}},{key:"_analyze",value:function(e,t){var n=e.key,r=e.arrayIndex,o=void 0===r?-1:r,i=e.value,a=e.record,c=e.index,h=t.tokenSearchers,l=void 0===h?[]:h,u=t.fullSearcher,f=void 0===u?[]:u,d=t.resultMap,v=void 0===d?{}:d,p=t.results,g=void 0===p?[]:p;if(null!=i){var y=!1,m=-1,k=0;if("string"==typeof i){this._log("\nKey: ".concat(""===n?"-":n));var S=f.search(i);if(this._log('Full text: "'.concat(i,'", score: ').concat(S.score)),this.options.tokenize){for(var x=i.split(this.options.tokenSeparator),b=[],M=0;M<l.length;M+=1){var _=l[M];this._log('\nPattern: "'.concat(_.pattern,'"'));for(var L=!1,w=0;w<x.length;w+=1){var A=x[w],C=_.search(A),I={};C.isMatch?(I[A]=C.score,y=!0,L=!0,b.push(C.score)):(I[A]=1,this.options.matchAllTokens||b.push(1)),this._log('Token: "'.concat(A,'", score: ').concat(I[A]))}L&&(k+=1)}m=b[0];for(var O=b.length,j=1;j<O;j+=1)m+=b[j];m/=O,this._log("Token score average:",m)}var P=S.score;m>-1&&(P=(P+m)/2),this._log("Score average:",P);var F=!this.options.tokenize||!this.options.matchAllTokens||k>=l.length;if(this._log("\nCheck Matches: ".concat(F)),(y||S.isMatch)&&F){var T=v[c];T?T.output.push({key:n,arrayIndex:o,value:i,score:P,matchedIndices:S.matchedIndices}):(v[c]={item:a,output:[{key:n,arrayIndex:o,value:i,score:P,matchedIndices:S.matchedIndices}]},g.push(v[c]))}}else if(s(i))for(var z=0,E=i.length;z<E;z+=1)this._analyze({key:n,arrayIndex:z,value:i[z],record:a,index:c},{resultMap:v,results:g,tokenSearchers:l,fullSearcher:f})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var n=0,r=t.length;n<r;n+=1){for(var o=t[n].output,i=o.length,a=1,s=1,c=0;c<i;c+=1){var h=e?e[o[c].key].weight:1,l=(1===h?o[c].score:o[c].score||.001)*h;1!==h?s=Math.min(s,l):(o[c].nScore=l,a*=l)}t[n].score=1===s?a:s,this._log(t[n])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,function(e,t){if("object"===r(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t)}return t})),n=null}var o=[];this.options.includeMatches&&o.push(function(e,t){var n=e.output;t.matches=[];for(var r=0,o=n.length;r<o;r+=1){var i=n[r];if(0!==i.matchedIndices.length){var a={indices:i.matchedIndices,value:i.value};i.key&&(a.key=i.key),i.hasOwnProperty("arrayIndex")&&i.arrayIndex>-1&&(a.arrayIndex=i.arrayIndex),t.matches.push(a)}}}),this.options.includeScore&&o.push(function(e,t){t.score=e.score});for(var i=0,a=e.length;i<a;i+=1){var s=e[i];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),o.length){for(var c={item:s.item},h=0,l=o.length;h<l;h+=1)o[h](s,c);t.push(c)}else t.push(s.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&o(t.prototype,n),c&&o(t,c),e}();e.exports=c},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(3),i=n(4),a=n(7),s=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,i=n.distance,s=void 0===i?100:i,c=n.threshold,h=void 0===c?.6:c,l=n.maxPatternLength,u=void 0===l?32:l,f=n.isCaseSensitive,d=void 0!==f&&f,v=n.tokenSeparator,p=void 0===v?/ +/g:v,g=n.findAllMatches,y=void 0!==g&&g,m=n.minMatchCharLength,k=void 0===m?1:m;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:h,maxPatternLength:u,isCaseSensitive:d,tokenSeparator:p,findAllMatches:y,minMatchCharLength:k},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=u&&(this.patternAlphabet=a(this.pattern))}var t,n,s;return t=e,(n=[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,n=t.maxPatternLength,r=t.tokenSeparator;if(this.pattern.length>n)return o(e,this.pattern,r);var a=this.options,s=a.location,c=a.distance,h=a.threshold,l=a.findAllMatches,u=a.minMatchCharLength;return i(e,this.pattern,this.patternAlphabet,{location:s,distance:c,threshold:h,findAllMatches:l,minMatchCharLength:u})}}])&&r(t.prototype,n),s&&r(t,s),e}();e.exports=s},function(e,t){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,o=new RegExp(t.replace(n,"\\$&").replace(r,"|")),i=e.match(o),a=!!i,s=[];if(a)for(var c=0,h=i.length;c<h;c+=1){var l=i[c];s.push([e.indexOf(l),l.length-1])}return{score:a?.5:1,isMatch:a,matchedIndices:s}}},function(e,t,n){var r=n(5),o=n(6);e.exports=function(e,t,n,i){for(var a=i.location,s=void 0===a?0:a,c=i.distance,h=void 0===c?100:c,l=i.threshold,u=void 0===l?.6:l,f=i.findAllMatches,d=void 0!==f&&f,v=i.minMatchCharLength,p=void 0===v?1:v,g=s,y=e.length,m=u,k=e.indexOf(t,g),S=t.length,x=[],b=0;b<y;b+=1)x[b]=0;if(-1!==k){var M=r(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});if(m=Math.min(M,m),-1!==(k=e.lastIndexOf(t,g+S))){var _=r(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});m=Math.min(_,m)}}k=-1;for(var L=[],w=1,A=S+y,C=1<<S-1,I=0;I<S;I+=1){for(var O=0,j=A;O<j;){r(t,{errors:I,currentLocation:g+j,expectedLocation:g,distance:h})<=m?O=j:A=j,j=Math.floor((A-O)/2+O)}A=j;var P=Math.max(1,g-j+1),F=d?y:Math.min(g+j,y)+S,T=Array(F+2);T[F+1]=(1<<I)-1;for(var z=F;z>=P;z-=1){var E=z-1,K=n[e.charAt(E)];if(K&&(x[E]=1),T[z]=(T[z+1]<<1|1)&K,0!==I&&(T[z]|=(L[z+1]|L[z])<<1|1|L[z+1]),T[z]&C&&(w=r(t,{errors:I,currentLocation:E,expectedLocation:g,distance:h}))<=m){if(m=w,(k=E)<=g)break;P=Math.max(1,2*g-k)}}if(r(t,{errors:I+1,currentLocation:g,expectedLocation:g,distance:h})>m)break;L=T}return{isMatch:k>=0,score:0===w?.001:w,matchedIndices:o(x,p)}}},function(e,t){e.exports=function(e,t){var n=t.errors,r=void 0===n?0:n,o=t.currentLocation,i=void 0===o?0:o,a=t.expectedLocation,s=void 0===a?0:a,c=t.distance,h=void 0===c?100:c,l=r/e.length,u=Math.abs(s-i);return h?l+u/h:u?1:l}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],r=-1,o=-1,i=0,a=e.length;i<a;i+=1){var s=e[i];s&&-1===r?r=i:s||-1===r||((o=i-1)-r+1>=t&&n.push([r,o]),r=-1)}return e[i-1]&&i-r>=t&&n.push([r,i-1]),n}},function(e,t){e.exports=function(e){for(var t={},n=e.length,r=0;r<n;r+=1)t[e.charAt(r)]=0;for(var o=0;o<n;o+=1)t[e.charAt(o)]|=1<<n-o-1;return t}},function(e,t,n){var r=n(0);e.exports=function(e,t){return function e(t,n,o){if(n){var i=n.indexOf("."),a=n,s=null;-1!==i&&(a=n.slice(0,i),s=n.slice(i+1));var c=t[a];if(null!=c)if(s||"string"!=typeof c&&"number"!=typeof c)if(r(c))for(var h=0,l=c.length;h<l;h+=1)e(c[h],s,o);else s&&e(c,s,o);else o.push(c.toString())}else o.push(t);return o}(e,t,[])}}])});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/fuse.js/dist/fuse.js
var dist_fuse = __webpack_require__(2);
var fuse_default = /*#__PURE__*/__webpack_require__.n(dist_fuse);

// EXTERNAL MODULE: ./node_modules/deepmerge/dist/cjs.js
var cjs = __webpack_require__(0);
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);

// EXTERNAL MODULE: ./node_modules/symbol-observable/es/index.js
var es = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/redux/es/redux.js


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[es["a" /* default */]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[es["a" /* default */]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (false) {}



// CONCATENATED MODULE: ./src/scripts/reducers/items.js
var defaultState = [];
function items_items(state, action) {
  if (state === void 0) {
    state = defaultState;
  }

  switch (action.type) {
    case 'ADD_ITEM':
      {
        // Add object to items array
        var newState = [].concat(state, [{
          id: action.id,
          choiceId: action.choiceId,
          groupId: action.groupId,
          value: action.value,
          label: action.label,
          active: true,
          highlighted: false,
          customProperties: action.customProperties,
          placeholder: action.placeholder || false,
          keyCode: null
        }]);
        return newState.map(function (obj) {
          var item = obj;
          item.highlighted = false;
          return item;
        });
      }

    case 'REMOVE_ITEM':
      {
        // Set item to inactive
        return state.map(function (obj) {
          var item = obj;

          if (item.id === action.id) {
            item.active = false;
          }

          return item;
        });
      }

    case 'HIGHLIGHT_ITEM':
      {
        return state.map(function (obj) {
          var item = obj;

          if (item.id === action.id) {
            item.highlighted = action.highlighted;
          }

          return item;
        });
      }

    default:
      {
        return state;
      }
  }
}
// CONCATENATED MODULE: ./src/scripts/reducers/groups.js
var groups_defaultState = [];
function groups(state, action) {
  if (state === void 0) {
    state = groups_defaultState;
  }

  switch (action.type) {
    case 'ADD_GROUP':
      {
        return [].concat(state, [{
          id: action.id,
          value: action.value,
          active: action.active,
          disabled: action.disabled
        }]);
      }

    case 'CLEAR_CHOICES':
      {
        return [];
      }

    default:
      {
        return state;
      }
  }
}
// CONCATENATED MODULE: ./src/scripts/reducers/choices.js
var choices_defaultState = [];
function choices_choices(state, action) {
  if (state === void 0) {
    state = choices_defaultState;
  }

  switch (action.type) {
    case 'ADD_CHOICE':
      {
        /*
            A disabled choice appears in the choice dropdown but cannot be selected
            A selected choice has been added to the passed input's value (added as an item)
            An active choice appears within the choice dropdown
         */
        return [].concat(state, [{
          id: action.id,
          elementId: action.elementId,
          groupId: action.groupId,
          value: action.value,
          label: action.label || action.value,
          disabled: action.disabled || false,
          selected: false,
          active: true,
          score: 9999,
          customProperties: action.customProperties,
          placeholder: action.placeholder || false,
          keyCode: null
        }]);
      }

    case 'ADD_ITEM':
      {
        // If all choices need to be activated
        if (action.activateOptions) {
          return state.map(function (obj) {
            var choice = obj;
            choice.active = action.active;
            return choice;
          });
        } // When an item is added and it has an associated choice,
        // we want to disable it so it can't be chosen again


        if (action.choiceId > -1) {
          return state.map(function (obj) {
            var choice = obj;

            if (choice.id === parseInt(action.choiceId, 10)) {
              choice.selected = true;
            }

            return choice;
          });
        }

        return state;
      }

    case 'REMOVE_ITEM':
      {
        // When an item is removed and it has an associated choice,
        // we want to re-enable it so it can be chosen again
        if (action.choiceId > -1) {
          return state.map(function (obj) {
            var choice = obj;

            if (choice.id === parseInt(action.choiceId, 10)) {
              choice.selected = false;
            }

            return choice;
          });
        }

        return state;
      }

    case 'FILTER_CHOICES':
      {
        return state.map(function (obj) {
          var choice = obj; // Set active state based on whether choice is
          // within filtered results

          choice.active = action.results.some(function (_ref) {
            var item = _ref.item,
                score = _ref.score;

            if (item.id === choice.id) {
              choice.score = score;
              return true;
            }

            return false;
          });
          return choice;
        });
      }

    case 'ACTIVATE_CHOICES':
      {
        return state.map(function (obj) {
          var choice = obj;
          choice.active = action.active;
          return choice;
        });
      }

    case 'CLEAR_CHOICES':
      {
        return choices_defaultState;
      }

    default:
      {
        return state;
      }
  }
}
// CONCATENATED MODULE: ./src/scripts/reducers/general.js
var general_defaultState = {
  loading: false
};

var general = function general(state, action) {
  if (state === void 0) {
    state = general_defaultState;
  }

  switch (action.type) {
    case 'SET_IS_LOADING':
      {
        return {
          loading: action.isLoading
        };
      }

    default:
      {
        return state;
      }
  }
};

/* harmony default export */ var reducers_general = (general);
// CONCATENATED MODULE: ./src/scripts/lib/utils.js
/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
var getRandomNumber = function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
/**
 * @param {number} length
 * @returns {string}
 */

var generateChars = function generateChars(length) {
  return Array.from({
    length: length
  }, function () {
    return getRandomNumber(0, 36).toString(36);
  }).join('');
};
/**
 * @param {HTMLInputElement | HTMLSelectElement} element
 * @param {string} prefix
 * @returns {string}
 */

var generateId = function generateId(element, prefix) {
  var id = element.id || element.name && element.name + "-" + generateChars(2) || generateChars(4);
  id = id.replace(/(:|\.|\[|\]|,)/g, '');
  id = prefix + "-" + id;
  return id;
};
/**
 * @param {any} obj
 * @returns {string}
 */

var getType = function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
};
/**
 * @param {string} type
 * @param {any} obj
 * @returns {boolean}
 */

var isType = function isType(type, obj) {
  return obj !== undefined && obj !== null && getType(obj) === type;
};
/**
 * @param {HTMLElement} element
 * @param {HTMLElement} [wrapper={HTMLDivElement}]
 * @returns {HTMLElement}
 */

var utils_wrap = function wrap(element, wrapper) {
  if (wrapper === void 0) {
    wrapper = document.createElement('div');
  }

  if (element.nextSibling) {
    element.parentNode.insertBefore(wrapper, element.nextSibling);
  } else {
    element.parentNode.appendChild(wrapper);
  }

  return wrapper.appendChild(element);
};
/**
 * @param {Element} startEl
 * @param {string} selector
 * @param {1 | -1} direction
 * @returns {Element | undefined}
 */

var getAdjacentEl = function getAdjacentEl(startEl, selector, direction) {
  if (direction === void 0) {
    direction = 1;
  }

  if (!(startEl instanceof Element) || typeof selector !== 'string') {
    return undefined;
  }

  var prop = (direction > 0 ? 'next' : 'previous') + "ElementSibling";
  var sibling = startEl[prop];

  while (sibling) {
    if (sibling.matches(selector)) {
      return sibling;
    }

    sibling = sibling[prop];
  }

  return sibling;
};
/**
 * @param {Element} element
 * @param {Element} parent
 * @param {-1 | 1} direction
 * @returns {boolean}
 */

var isScrolledIntoView = function isScrolledIntoView(element, parent, direction) {
  if (direction === void 0) {
    direction = 1;
  }

  if (!element) {
    return false;
  }

  var isVisible;

  if (direction > 0) {
    // In view from bottom
    isVisible = parent.scrollTop + parent.offsetHeight >= element.offsetTop + element.offsetHeight;
  } else {
    // In view from top
    isVisible = element.offsetTop >= parent.scrollTop;
  }

  return isVisible;
};
/**
 * @param {any} value
 * @returns {any}
 */

var sanitise = function sanitise(value) {
  if (typeof value !== 'string') {
    return value;
  }

  return value.replace(/&/g, '&amp;').replace(/>/g, '&rt;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
};
/**
 * @returns {() => (str: string) => Element}
 */

var strToEl = function () {
  var tmpEl = document.createElement('div');
  return function (str) {
    var cleanedInput = str.trim();
    tmpEl.innerHTML = cleanedInput;
    var firldChild = tmpEl.children[0];

    while (tmpEl.firstChild) {
      tmpEl.removeChild(tmpEl.firstChild);
    }

    return firldChild;
  };
}();
/**
 * @param {{ label?: string, value: string }} a
 * @param {{ label?: string, value: string }} b
 * @returns {number}
 */

var sortByAlpha = function sortByAlpha(_ref, _ref2) {
  var value = _ref.value,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? value : _ref$label;
  var value2 = _ref2.value,
      _ref2$label = _ref2.label,
      label2 = _ref2$label === void 0 ? value2 : _ref2$label;
  return label.localeCompare(label2, [], {
    sensitivity: 'base',
    ignorePunctuation: true,
    numeric: true
  });
};
/**
 * @param {{ score: number }} a
 * @param {{ score: number }} b
 */

var sortByScore = function sortByScore(a, b) {
  return a.score - b.score;
};
/**
 * @param {HTMLElement} element
 * @param {string} type
 * @param {object} customArgs
 */

var dispatchEvent = function dispatchEvent(element, type, customArgs) {
  if (customArgs === void 0) {
    customArgs = null;
  }

  var event = new CustomEvent(type, {
    detail: customArgs,
    bubbles: true,
    cancelable: true
  });
  return element.dispatchEvent(event);
};
/**
 * @param {array} array
 * @param {any} value
 * @param {string} [key="value"]
 * @returns {boolean}
 */

var existsInArray = function existsInArray(array, value, key) {
  if (key === void 0) {
    key = 'value';
  }

  return array.some(function (item) {
    if (typeof value === 'string') {
      return item[key] === value.trim();
    }

    return item[key] === value;
  });
};
/**
 * @param {any} obj
 * @returns {any}
 */

var cloneObject = function cloneObject(obj) {
  return JSON.parse(JSON.stringify(obj));
};
/**
 * Returns an array of keys present on the first but missing on the second object
 * @param {object} a
 * @param {object} b
 * @returns {string[]}
 */

var diff = function diff(a, b) {
  var aKeys = Object.keys(a).sort();
  var bKeys = Object.keys(b).sort();
  return aKeys.filter(function (i) {
    return bKeys.indexOf(i) < 0;
  });
};
// CONCATENATED MODULE: ./src/scripts/reducers/index.js






var appReducer = combineReducers({
  items: items_items,
  groups: groups,
  choices: choices_choices,
  general: reducers_general
});

var reducers_rootReducer = function rootReducer(passedState, action) {
  var state = passedState; // If we are clearing all items, groups and options we reassign
  // state and then pass that state to our proper reducer. This isn't
  // mutating our actual state
  // See: http://stackoverflow.com/a/35641992

  if (action.type === 'CLEAR_ALL') {
    state = undefined;
  } else if (action.type === 'RESET_TO') {
    return cloneObject(action.state);
  }

  return appReducer(state, action);
};

/* harmony default export */ var reducers = (reducers_rootReducer);
// CONCATENATED MODULE: ./src/scripts/store/store.js
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 * @typedef {import('../../../types/index').Choices.Choice} Choice
 * @typedef {import('../../../types/index').Choices.Group} Group
 * @typedef {import('../../../types/index').Choices.Item} Item
 */

var store_Store =
/*#__PURE__*/
function () {
  function Store() {
    this._store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  }
  /**
   * Subscribe store to function call (wrapped Redux method)
   * @param  {Function} onChange Function to trigger when state changes
   * @return
   */


  var _proto = Store.prototype;

  _proto.subscribe = function subscribe(onChange) {
    this._store.subscribe(onChange);
  }
  /**
   * Dispatch event to store (wrapped Redux method)
   * @param  {{ type: string, [x: string]: any }} action Action to trigger
   * @return
   */
  ;

  _proto.dispatch = function dispatch(action) {
    this._store.dispatch(action);
  }
  /**
   * Get store object (wrapping Redux method)
   * @returns {object} State
   */
  ;

  /**
   * Get loading state from store
   * @returns {boolean} Loading State
   */
  _proto.isLoading = function isLoading() {
    return this.state.general.loading;
  }
  /**
   * Get single choice by it's ID
   * @param {string} id
   * @returns {Choice | undefined} Found choice
   */
  ;

  _proto.getChoiceById = function getChoiceById(id) {
    return this.activeChoices.find(function (choice) {
      return choice.id === parseInt(id, 10);
    });
  }
  /**
   * Get group by group id
   * @param  {number} id Group ID
   * @returns {Group | undefined} Group data
   */
  ;

  _proto.getGroupById = function getGroupById(id) {
    return this.groups.find(function (group) {
      return group.id === id;
    });
  };

  _createClass(Store, [{
    key: "state",
    get: function get() {
      return this._store.getState();
    }
    /**
     * Get items from store
     * @returns {Item[]} Item objects
     */

  }, {
    key: "items",
    get: function get() {
      return this.state.items;
    }
    /**
     * Get active items from store
     * @returns {Item[]} Item objects
     */

  }, {
    key: "activeItems",
    get: function get() {
      return this.items.filter(function (item) {
        return item.active === true;
      });
    }
    /**
     * Get highlighted items from store
     * @returns {Item[]} Item objects
     */

  }, {
    key: "highlightedActiveItems",
    get: function get() {
      return this.items.filter(function (item) {
        return item.active && item.highlighted;
      });
    }
    /**
     * Get choices from store
     * @returns {Choice[]} Option objects
     */

  }, {
    key: "choices",
    get: function get() {
      return this.state.choices;
    }
    /**
     * Get active choices from store
     * @returns {Choice[]} Option objects
     */

  }, {
    key: "activeChoices",
    get: function get() {
      return this.choices.filter(function (choice) {
        return choice.active === true;
      });
    }
    /**
     * Get selectable choices from store
     * @returns {Choice[]} Option objects
     */

  }, {
    key: "selectableChoices",
    get: function get() {
      return this.choices.filter(function (choice) {
        return choice.disabled !== true;
      });
    }
    /**
     * Get choices that can be searched (excluding placeholders)
     * @returns {Choice[]} Option objects
     */

  }, {
    key: "searchableChoices",
    get: function get() {
      return this.selectableChoices.filter(function (choice) {
        return choice.placeholder !== true;
      });
    }
    /**
     * Get placeholder choice from store
     * @returns {Choice | undefined} Found placeholder
     */

  }, {
    key: "placeholderChoice",
    get: function get() {
      return [].concat(this.choices).reverse().find(function (choice) {
        return choice.placeholder === true;
      });
    }
    /**
     * Get groups from store
     * @returns {Group[]} Group objects
     */

  }, {
    key: "groups",
    get: function get() {
      return this.state.groups;
    }
    /**
     * Get active groups from store
     * @returns {Group[]} Group objects
     */

  }, {
    key: "activeGroups",
    get: function get() {
      var groups = this.groups,
          choices = this.choices;
      return groups.filter(function (group) {
        var isActive = group.active === true && group.disabled === false;
        var hasActiveOptions = choices.some(function (choice) {
          return choice.active === true && choice.disabled === false;
        });
        return isActive && hasActiveOptions;
      }, []);
    }
  }]);

  return Store;
}();


// CONCATENATED MODULE: ./src/scripts/components/dropdown.js
function dropdown_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dropdown_createClass(Constructor, protoProps, staticProps) { if (protoProps) dropdown_defineProperties(Constructor.prototype, protoProps); if (staticProps) dropdown_defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @typedef {import('../../../types/index').Choices.passedElement} passedElement
 * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
 */
var Dropdown =
/*#__PURE__*/
function () {
  /**
   * @param {{
   *  element: HTMLElement,
   *  type: passedElement['type'],
   *  classNames: ClassNames,
   * }} args
   */
  function Dropdown(_ref) {
    var element = _ref.element,
        type = _ref.type,
        classNames = _ref.classNames;
    this.element = element;
    this.classNames = classNames;
    this.type = type;
    this.isActive = false;
  }
  /**
   * Bottom position of dropdown in viewport coordinates
   * @returns {number} Vertical position
   */


  var _proto = Dropdown.prototype;

  /**
   * Find element that matches passed selector
   * @param {string} selector
   * @returns {HTMLElement | null}
   */
  _proto.getChild = function getChild(selector) {
    return this.element.querySelector(selector);
  }
  /**
   * Show dropdown to user by adding active state class
   * @returns {this}
   */
  ;

  _proto.show = function show() {
    this.element.classList.add(this.classNames.activeState);
    this.element.setAttribute('aria-expanded', 'true');
    this.isActive = true;
    return this;
  }
  /**
   * Hide dropdown from user
   * @returns {this}
   */
  ;

  _proto.hide = function hide() {
    this.element.classList.remove(this.classNames.activeState);
    this.element.setAttribute('aria-expanded', 'false');
    this.isActive = false;
    return this;
  };

  dropdown_createClass(Dropdown, [{
    key: "distanceFromTopWindow",
    get: function get() {
      return this.element.getBoundingClientRect().bottom;
    }
  }]);

  return Dropdown;
}();


// CONCATENATED MODULE: ./src/scripts/constants.js

/**
 * @typedef {import('../../types/index').Choices.ClassNames} ClassNames
 * @typedef {import('../../types/index').Choices.Options} Options
 */

/** @type {ClassNames} */

var DEFAULT_CLASSNAMES = {
  containerOuter: 'choices',
  containerInner: 'choices__inner',
  input: 'choices__input',
  inputCloned: 'choices__input--cloned',
  list: 'choices__list',
  listItems: 'choices__list--multiple',
  listSingle: 'choices__list--single',
  listDropdown: 'choices__list--dropdown',
  item: 'choices__item',
  itemSelectable: 'choices__item--selectable',
  itemDisabled: 'choices__item--disabled',
  itemChoice: 'choices__item--choice',
  placeholder: 'choices__placeholder',
  group: 'choices__group',
  groupHeading: 'choices__heading',
  button: 'choices__button',
  activeState: 'is-active',
  focusState: 'is-focused',
  openState: 'is-open',
  disabledState: 'is-disabled',
  highlightedState: 'is-highlighted',
  selectedState: 'is-selected',
  flippedState: 'is-flipped',
  loadingState: 'is-loading',
  noResults: 'has-no-results',
  noChoices: 'has-no-choices'
};
/** @type {Options} */

var DEFAULT_CONFIG = {
  items: [],
  choices: [],
  silent: false,
  renderChoiceLimit: -1,
  maxItemCount: -1,
  addItems: true,
  addItemFilter: null,
  removeItems: true,
  removeItemButton: false,
  editItems: false,
  duplicateItemsAllowed: true,
  delimiter: ',',
  paste: true,
  searchEnabled: true,
  searchChoices: true,
  searchFloor: 1,
  searchResultLimit: 4,
  searchFields: ['label', 'value'],
  position: 'auto',
  resetScrollPosition: true,
  shouldSort: true,
  shouldSortItems: false,
  sorter: sortByAlpha,
  placeholder: true,
  placeholderValue: null,
  searchPlaceholderValue: null,
  prependValue: null,
  appendValue: null,
  renderSelectedChoices: 'auto',
  loadingText: 'Loading...',
  noResultsText: 'No results found',
  noChoicesText: 'No choices to choose from',
  itemSelectText: 'Press to select',
  uniqueItemText: 'Only unique values can be added',
  customAddItemText: 'Only values matching specific conditions can be added',
  addItemText: function addItemText(value) {
    return "Press Enter to add <b>\"" + sanitise(value) + "\"</b>";
  },
  maxItemText: function maxItemText(maxItemCount) {
    return "Only " + maxItemCount + " values can be added";
  },
  valueComparer: function valueComparer(value1, value2) {
    return value1 === value2;
  },
  fuseOptions: {
    includeScore: true
  },
  callbackOnInit: null,
  callbackOnCreateTemplates: null,
  classNames: DEFAULT_CLASSNAMES
};
var EVENTS = {
  showDropdown: 'showDropdown',
  hideDropdown: 'hideDropdown',
  change: 'change',
  choice: 'choice',
  search: 'search',
  addItem: 'addItem',
  removeItem: 'removeItem',
  highlightItem: 'highlightItem',
  highlightChoice: 'highlightChoice'
};
var ACTION_TYPES = {
  ADD_CHOICE: 'ADD_CHOICE',
  FILTER_CHOICES: 'FILTER_CHOICES',
  ACTIVATE_CHOICES: 'ACTIVATE_CHOICES',
  CLEAR_CHOICES: 'CLEAR_CHOICES',
  ADD_GROUP: 'ADD_GROUP',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  HIGHLIGHT_ITEM: 'HIGHLIGHT_ITEM',
  CLEAR_ALL: 'CLEAR_ALL'
};
var KEY_CODES = {
  BACK_KEY: 46,
  DELETE_KEY: 8,
  ENTER_KEY: 13,
  A_KEY: 65,
  ESC_KEY: 27,
  UP_KEY: 38,
  DOWN_KEY: 40,
  PAGE_UP_KEY: 33,
  PAGE_DOWN_KEY: 34
};
var TEXT_TYPE = 'text';
var SELECT_ONE_TYPE = 'select-one';
var SELECT_MULTIPLE_TYPE = 'select-multiple';
var SCROLLING_SPEED = 4;
// CONCATENATED MODULE: ./src/scripts/components/container.js


/**
 * @typedef {import('../../../types/index').Choices.passedElement} passedElement
 * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
 */

var container_Container =
/*#__PURE__*/
function () {
  /**
   * @param {{
   *  element: HTMLElement,
   *  type: passedElement['type'],
   *  classNames: ClassNames,
   *  position
   * }} args
   */
  function Container(_ref) {
    var element = _ref.element,
        type = _ref.type,
        classNames = _ref.classNames,
        position = _ref.position;
    this.element = element;
    this.classNames = classNames;
    this.type = type;
    this.position = position;
    this.isOpen = false;
    this.isFlipped = false;
    this.isFocussed = false;
    this.isDisabled = false;
    this.isLoading = false;
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
  }

  var _proto = Container.prototype;

  _proto.addEventListeners = function addEventListeners() {
    this.element.addEventListener('focus', this._onFocus);
    this.element.addEventListener('blur', this._onBlur);
  };

  _proto.removeEventListeners = function removeEventListeners() {
    this.element.removeEventListener('focus', this._onFocus);
    this.element.removeEventListener('blur', this._onBlur);
  }
  /**
   * Determine whether container should be flipped based on passed
   * dropdown position
   * @param {number} dropdownPos
   * @returns {boolean}
   */
  ;

  _proto.shouldFlip = function shouldFlip(dropdownPos) {
    if (typeof dropdownPos !== 'number') {
      return false;
    } // If flip is enabled and the dropdown bottom position is
    // greater than the window height flip the dropdown.


    var shouldFlip = false;

    if (this.position === 'auto') {
      shouldFlip = !window.matchMedia("(min-height: " + (dropdownPos + 1) + "px)").matches;
    } else if (this.position === 'top') {
      shouldFlip = true;
    }

    return shouldFlip;
  }
  /**
   * @param {string} activeDescendantID
   */
  ;

  _proto.setActiveDescendant = function setActiveDescendant(activeDescendantID) {
    this.element.setAttribute('aria-activedescendant', activeDescendantID);
  };

  _proto.removeActiveDescendant = function removeActiveDescendant() {
    this.element.removeAttribute('aria-activedescendant');
  }
  /**
   * @param {number} dropdownPos
   */
  ;

  _proto.open = function open(dropdownPos) {
    this.element.classList.add(this.classNames.openState);
    this.element.setAttribute('aria-expanded', 'true');
    this.isOpen = true;

    if (this.shouldFlip(dropdownPos)) {
      this.element.classList.add(this.classNames.flippedState);
      this.isFlipped = true;
    }
  };

  _proto.close = function close() {
    this.element.classList.remove(this.classNames.openState);
    this.element.setAttribute('aria-expanded', 'false');
    this.removeActiveDescendant();
    this.isOpen = false; // A dropdown flips if it does not have space within the page

    if (this.isFlipped) {
      this.element.classList.remove(this.classNames.flippedState);
      this.isFlipped = false;
    }
  };

  _proto.focus = function focus() {
    if (!this.isFocussed) {
      this.element.focus();
    }
  };

  _proto.addFocusState = function addFocusState() {
    this.element.classList.add(this.classNames.focusState);
  };

  _proto.removeFocusState = function removeFocusState() {
    this.element.classList.remove(this.classNames.focusState);
  };

  _proto.enable = function enable() {
    this.element.classList.remove(this.classNames.disabledState);
    this.element.removeAttribute('aria-disabled');

    if (this.type === SELECT_ONE_TYPE) {
      this.element.setAttribute('tabindex', '0');
    }

    this.isDisabled = false;
  };

  _proto.disable = function disable() {
    this.element.classList.add(this.classNames.disabledState);
    this.element.setAttribute('aria-disabled', 'true');

    if (this.type === SELECT_ONE_TYPE) {
      this.element.setAttribute('tabindex', '-1');
    }

    this.isDisabled = true;
  }
  /**
   * @param {HTMLElement} element
   */
  ;

  _proto.wrap = function wrap(element) {
    utils_wrap(element, this.element);
  }
  /**
   * @param {Element} element
   */
  ;

  _proto.unwrap = function unwrap(element) {
    // Move passed element outside this element
    this.element.parentNode.insertBefore(element, this.element); // Remove this element

    this.element.parentNode.removeChild(this.element);
  };

  _proto.addLoadingState = function addLoadingState() {
    this.element.classList.add(this.classNames.loadingState);
    this.element.setAttribute('aria-busy', 'true');
    this.isLoading = true;
  };

  _proto.removeLoadingState = function removeLoadingState() {
    this.element.classList.remove(this.classNames.loadingState);
    this.element.removeAttribute('aria-busy');
    this.isLoading = false;
  };

  _proto._onFocus = function _onFocus() {
    this.isFocussed = true;
  };

  _proto._onBlur = function _onBlur() {
    this.isFocussed = false;
  };

  return Container;
}();


// CONCATENATED MODULE: ./src/scripts/components/input.js
function input_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function input_createClass(Constructor, protoProps, staticProps) { if (protoProps) input_defineProperties(Constructor.prototype, protoProps); if (staticProps) input_defineProperties(Constructor, staticProps); return Constructor; }



/**
 * @typedef {import('../../../types/index').Choices.passedElement} passedElement
 * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
 */

var input_Input =
/*#__PURE__*/
function () {
  /**
   * @param {{
   *  element: HTMLInputElement,
   *  type: passedElement['type'],
   *  classNames: ClassNames,
   *  preventPaste: boolean
   * }} args
   */
  function Input(_ref) {
    var element = _ref.element,
        type = _ref.type,
        classNames = _ref.classNames,
        preventPaste = _ref.preventPaste;
    this.element = element;
    this.type = type;
    this.classNames = classNames;
    this.preventPaste = preventPaste;
    this.isFocussed = this.element === document.activeElement;
    this.isDisabled = element.disabled;
    this._onPaste = this._onPaste.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
  }
  /**
   * @param {string} placeholder
   */


  var _proto = Input.prototype;

  _proto.addEventListeners = function addEventListeners() {
    this.element.addEventListener('paste', this._onPaste);
    this.element.addEventListener('input', this._onInput, {
      passive: true
    });
    this.element.addEventListener('focus', this._onFocus, {
      passive: true
    });
    this.element.addEventListener('blur', this._onBlur, {
      passive: true
    });
  };

  _proto.removeEventListeners = function removeEventListeners() {
    this.element.removeEventListener('input', this._onInput, {
      passive: true
    });
    this.element.removeEventListener('paste', this._onPaste);
    this.element.removeEventListener('focus', this._onFocus, {
      passive: true
    });
    this.element.removeEventListener('blur', this._onBlur, {
      passive: true
    });
  };

  _proto.enable = function enable() {
    this.element.removeAttribute('disabled');
    this.isDisabled = false;
  };

  _proto.disable = function disable() {
    this.element.setAttribute('disabled', '');
    this.isDisabled = true;
  };

  _proto.focus = function focus() {
    if (!this.isFocussed) {
      this.element.focus();
    }
  };

  _proto.blur = function blur() {
    if (this.isFocussed) {
      this.element.blur();
    }
  }
  /**
   * Set value of input to blank
   * @param {boolean} setWidth
   * @returns {this}
   */
  ;

  _proto.clear = function clear(setWidth) {
    if (setWidth === void 0) {
      setWidth = true;
    }

    if (this.element.value) {
      this.element.value = '';
    }

    if (setWidth) {
      this.setWidth();
    }

    return this;
  }
  /**
   * Set the correct input width based on placeholder
   * value or input value
   */
  ;

  _proto.setWidth = function setWidth() {
    // Resize input to contents or placeholder
    var _this$element = this.element,
        style = _this$element.style,
        value = _this$element.value,
        placeholder = _this$element.placeholder;
    style.minWidth = placeholder.length + 1 + "ch";
    style.width = value.length + 1 + "ch";
  }
  /**
   * @param {string} activeDescendantID
   */
  ;

  _proto.setActiveDescendant = function setActiveDescendant(activeDescendantID) {
    this.element.setAttribute('aria-activedescendant', activeDescendantID);
  };

  _proto.removeActiveDescendant = function removeActiveDescendant() {
    this.element.removeAttribute('aria-activedescendant');
  };

  _proto._onInput = function _onInput() {
    if (this.type !== SELECT_ONE_TYPE) {
      this.setWidth();
    }
  }
  /**
   * @param {Event} event
   */
  ;

  _proto._onPaste = function _onPaste(event) {
    if (this.preventPaste) {
      event.preventDefault();
    }
  };

  _proto._onFocus = function _onFocus() {
    this.isFocussed = true;
  };

  _proto._onBlur = function _onBlur() {
    this.isFocussed = false;
  };

  input_createClass(Input, [{
    key: "placeholder",
    set: function set(placeholder) {
      this.element.placeholder = placeholder;
    }
    /**
     * @returns {string}
     */

  }, {
    key: "value",
    get: function get() {
      return sanitise(this.element.value);
    }
    /**
     * @param {string} value
     */
    ,
    set: function set(value) {
      this.element.value = value;
    }
  }]);

  return Input;
}();


// CONCATENATED MODULE: ./src/scripts/components/list.js

/**
 * @typedef {import('../../../types/index').Choices.Choice} Choice
 */

var list_List =
/*#__PURE__*/
function () {
  /**
   * @param {{ element: HTMLElement }} args
   */
  function List(_ref) {
    var element = _ref.element;
    this.element = element;
    this.scrollPos = this.element.scrollTop;
    this.height = this.element.offsetHeight;
  }

  var _proto = List.prototype;

  _proto.clear = function clear() {
    this.element.innerHTML = '';
  }
  /**
   * @param {Element | DocumentFragment} node
   */
  ;

  _proto.append = function append(node) {
    this.element.appendChild(node);
  }
  /**
   * @param {string} selector
   * @returns {Element | null}
   */
  ;

  _proto.getChild = function getChild(selector) {
    return this.element.querySelector(selector);
  }
  /**
   * @returns {boolean}
   */
  ;

  _proto.hasChildren = function hasChildren() {
    return this.element.hasChildNodes();
  };

  _proto.scrollToTop = function scrollToTop() {
    this.element.scrollTop = 0;
  }
  /**
   * @param {Element} element
   * @param {1 | -1} direction
   */
  ;

  _proto.scrollToChildElement = function scrollToChildElement(element, direction) {
    var _this = this;

    if (!element) {
      return;
    }

    var listHeight = this.element.offsetHeight; // Scroll position of dropdown

    var listScrollPosition = this.element.scrollTop + listHeight;
    var elementHeight = element.offsetHeight; // Distance from bottom of element to top of parent

    var elementPos = element.offsetTop + elementHeight; // Difference between the element and scroll position

    var destination = direction > 0 ? this.element.scrollTop + elementPos - listScrollPosition : element.offsetTop;
    requestAnimationFrame(function () {
      _this._animateScroll(destination, direction);
    });
  }
  /**
   * @param {number} scrollPos
   * @param {number} strength
   * @param {number} destination
   */
  ;

  _proto._scrollDown = function _scrollDown(scrollPos, strength, destination) {
    var easing = (destination - scrollPos) / strength;
    var distance = easing > 1 ? easing : 1;
    this.element.scrollTop = scrollPos + distance;
  }
  /**
   * @param {number} scrollPos
   * @param {number} strength
   * @param {number} destination
   */
  ;

  _proto._scrollUp = function _scrollUp(scrollPos, strength, destination) {
    var easing = (scrollPos - destination) / strength;
    var distance = easing > 1 ? easing : 1;
    this.element.scrollTop = scrollPos - distance;
  }
  /**
   * @param {*} destination
   * @param {*} direction
   */
  ;

  _proto._animateScroll = function _animateScroll(destination, direction) {
    var _this2 = this;

    var strength = SCROLLING_SPEED;
    var choiceListScrollTop = this.element.scrollTop;
    var continueAnimation = false;

    if (direction > 0) {
      this._scrollDown(choiceListScrollTop, strength, destination);

      if (choiceListScrollTop < destination) {
        continueAnimation = true;
      }
    } else {
      this._scrollUp(choiceListScrollTop, strength, destination);

      if (choiceListScrollTop > destination) {
        continueAnimation = true;
      }
    }

    if (continueAnimation) {
      requestAnimationFrame(function () {
        _this2._animateScroll(destination, direction);
      });
    }
  };

  return List;
}();


// CONCATENATED MODULE: ./src/scripts/components/wrapped-element.js
function wrapped_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function wrapped_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) wrapped_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) wrapped_element_defineProperties(Constructor, staticProps); return Constructor; }


/**
 * @typedef {import('../../../types/index').Choices.passedElement} passedElement
 * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
 */

var wrapped_element_WrappedElement =
/*#__PURE__*/
function () {
  /**
   * @param {{
   *  element: HTMLInputElement | HTMLSelectElement,
   *  classNames: ClassNames,
   * }} args
   */
  function WrappedElement(_ref) {
    var element = _ref.element,
        classNames = _ref.classNames;
    this.element = element;
    this.classNames = classNames;

    if (!(element instanceof HTMLInputElement) && !(element instanceof HTMLSelectElement)) {
      throw new TypeError('Invalid element passed');
    }

    this.isDisabled = false;
  }

  var _proto = WrappedElement.prototype;

  _proto.conceal = function conceal() {
    // Hide passed input
    this.element.classList.add(this.classNames.input);
    this.element.hidden = true; // Remove element from tab index

    this.element.tabIndex = -1; // Backup original styles if any

    var origStyle = this.element.getAttribute('style');

    if (origStyle) {
      this.element.setAttribute('data-choice-orig-style', origStyle);
    }

    this.element.setAttribute('data-choice', 'active');
  };

  _proto.reveal = function reveal() {
    // Reinstate passed element
    this.element.classList.remove(this.classNames.input);
    this.element.hidden = false;
    this.element.removeAttribute('tabindex'); // Recover original styles if any

    var origStyle = this.element.getAttribute('data-choice-orig-style');

    if (origStyle) {
      this.element.removeAttribute('data-choice-orig-style');
      this.element.setAttribute('style', origStyle);
    } else {
      this.element.removeAttribute('style');
    }

    this.element.removeAttribute('data-choice'); // Re-assign values - this is weird, I know
    // @todo Figure out why we need to do this

    this.element.value = this.element.value; // eslint-disable-line no-self-assign
  };

  _proto.enable = function enable() {
    this.element.removeAttribute('disabled');
    this.element.disabled = false;
    this.isDisabled = false;
  };

  _proto.disable = function disable() {
    this.element.setAttribute('disabled', '');
    this.element.disabled = true;
    this.isDisabled = true;
  };

  _proto.triggerEvent = function triggerEvent(eventType, data) {
    dispatchEvent(this.element, eventType, data);
  };

  wrapped_element_createClass(WrappedElement, [{
    key: "isActive",
    get: function get() {
      return this.element.dataset.choice === 'active';
    }
  }, {
    key: "dir",
    get: function get() {
      return this.element.dir;
    }
  }, {
    key: "value",
    get: function get() {
      return this.element.value;
    },
    set: function set(value) {
      // you must define setter here otherwise it will be readonly property
      this.element.value = value;
    }
  }]);

  return WrappedElement;
}();


// CONCATENATED MODULE: ./src/scripts/components/wrapped-input.js
function wrapped_input_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function wrapped_input_createClass(Constructor, protoProps, staticProps) { if (protoProps) wrapped_input_defineProperties(Constructor.prototype, protoProps); if (staticProps) wrapped_input_defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }


/**
 * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
 * @typedef {import('../../../types/index').Choices.Item} Item
 */

var WrappedInput =
/*#__PURE__*/
function (_WrappedElement) {
  _inheritsLoose(WrappedInput, _WrappedElement);

  /**
   * @param {{
   *  element: HTMLInputElement,
   *  classNames: ClassNames,
   *  delimiter: string
   * }} args
   */
  function WrappedInput(_ref) {
    var _this;

    var element = _ref.element,
        classNames = _ref.classNames,
        delimiter = _ref.delimiter;
    _this = _WrappedElement.call(this, {
      element: element,
      classNames: classNames
    }) || this;
    _this.delimiter = delimiter;
    return _this;
  }
  /**
   * @returns {string}
   */


  wrapped_input_createClass(WrappedInput, [{
    key: "value",
    get: function get() {
      return this.element.value;
    }
    /**
     * @param {Item[]} items
     */
    ,
    set: function set(items) {
      var itemValues = items.map(function (_ref2) {
        var value = _ref2.value;
        return value;
      });
      var joinedValues = itemValues.join(this.delimiter);
      this.element.setAttribute('value', joinedValues);
      this.element.value = joinedValues;
    }
  }]);

  return WrappedInput;
}(wrapped_element_WrappedElement);


// CONCATENATED MODULE: ./src/scripts/components/wrapped-select.js
function wrapped_select_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function wrapped_select_createClass(Constructor, protoProps, staticProps) { if (protoProps) wrapped_select_defineProperties(Constructor.prototype, protoProps); if (staticProps) wrapped_select_defineProperties(Constructor, staticProps); return Constructor; }

function wrapped_select_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }


/**
 * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
 * @typedef {import('../../../types/index').Choices.Item} Item
 * @typedef {import('../../../types/index').Choices.Choice} Choice
 */

var WrappedSelect =
/*#__PURE__*/
function (_WrappedElement) {
  wrapped_select_inheritsLoose(WrappedSelect, _WrappedElement);

  /**
   * @param {{
   *  element: HTMLSelectElement,
   *  classNames: ClassNames,
   *  delimiter: string
   *  template: function
   * }} args
   */
  function WrappedSelect(_ref) {
    var _this;

    var element = _ref.element,
        classNames = _ref.classNames,
        template = _ref.template;
    _this = _WrappedElement.call(this, {
      element: element,
      classNames: classNames
    }) || this;
    _this.template = template;
    return _this;
  }

  var _proto = WrappedSelect.prototype;

  /**
   * @param {DocumentFragment} fragment
   */
  _proto.appendDocFragment = function appendDocFragment(fragment) {
    this.element.innerHTML = '';
    this.element.appendChild(fragment);
  };

  wrapped_select_createClass(WrappedSelect, [{
    key: "placeholderOption",
    get: function get() {
      return this.element.querySelector('option[value=""]') || // Backward compatibility layer for the non-standard placeholder attribute supported in older versions.
      this.element.querySelector('option[placeholder]');
    }
    /**
     * @returns {Element[]}
     */

  }, {
    key: "optionGroups",
    get: function get() {
      return Array.from(this.element.getElementsByTagName('OPTGROUP'));
    }
    /**
     * @returns {Item[] | Choice[]}
     */

  }, {
    key: "options",
    get: function get() {
      return Array.from(this.element.options);
    }
    /**
     * @param {Item[] | Choice[]} options
     */
    ,
    set: function set(options) {
      var _this2 = this;

      var fragment = document.createDocumentFragment();

      var addOptionToFragment = function addOptionToFragment(data) {
        // Create a standard select option
        var option = _this2.template(data); // Append it to fragment


        fragment.appendChild(option);
      }; // Add each list item to list


      options.forEach(function (optionData) {
        return addOptionToFragment(optionData);
      });
      this.appendDocFragment(fragment);
    }
  }]);

  return WrappedSelect;
}(wrapped_element_WrappedElement);


// CONCATENATED MODULE: ./src/scripts/components/index.js







// CONCATENATED MODULE: ./src/scripts/templates.js
/**
 * Helpers to create HTML elements used by Choices
 * Can be overridden by providing `callbackOnCreateTemplates` option
 * @typedef {import('../../types/index').Choices.Templates} Templates
 * @typedef {import('../../types/index').Choices.ClassNames} ClassNames
 * @typedef {import('../../types/index').Choices.Options} Options
 * @typedef {import('../../types/index').Choices.Item} Item
 * @typedef {import('../../types/index').Choices.Choice} Choice
 * @typedef {import('../../types/index').Choices.Group} Group
 */
var TEMPLATES =
/** @type {Templates} */
{
  /**
   * @param {Partial<ClassNames>} classNames
   * @param {"ltr" | "rtl" | "auto"} dir
   * @param {boolean} isSelectElement
   * @param {boolean} isSelectOneElement
   * @param {boolean} searchEnabled
   * @param {"select-one" | "select-multiple" | "text"} passedElementType
   */
  containerOuter: function containerOuter(_ref, dir, isSelectElement, isSelectOneElement, searchEnabled, passedElementType) {
    var _containerOuter = _ref.containerOuter;
    var div = Object.assign(document.createElement('div'), {
      className: _containerOuter
    });
    div.dataset.type = passedElementType;

    if (dir) {
      div.dir = dir;
    }

    if (isSelectOneElement) {
      div.tabIndex = 0;
    }

    if (isSelectElement) {
      div.setAttribute('role', searchEnabled ? 'combobox' : 'listbox');

      if (searchEnabled) {
        div.setAttribute('aria-autocomplete', 'list');
      }
    }

    div.setAttribute('aria-haspopup', 'true');
    div.setAttribute('aria-expanded', 'false');
    return div;
  },

  /**
   * @param {Partial<ClassNames>} classNames
   */
  containerInner: function containerInner(_ref2) {
    var _containerInner = _ref2.containerInner;
    return Object.assign(document.createElement('div'), {
      className: _containerInner
    });
  },

  /**
   * @param {Partial<ClassNames>} classNames
   * @param {boolean} isSelectOneElement
   */
  itemList: function itemList(_ref3, isSelectOneElement) {
    var list = _ref3.list,
        listSingle = _ref3.listSingle,
        listItems = _ref3.listItems;
    return Object.assign(document.createElement('div'), {
      className: list + " " + (isSelectOneElement ? listSingle : listItems)
    });
  },

  /**
   * @param {Partial<ClassNames>} classNames
   * @param {string} value
   */
  placeholder: function placeholder(_ref4, value) {
    var _placeholder = _ref4.placeholder;
    return Object.assign(document.createElement('div'), {
      className: _placeholder,
      innerHTML: value
    });
  },

  /**
   * @param {Partial<ClassNames>} classNames
   * @param {Item} item
   * @param {boolean} removeItemButton
   */
  item: function item(_ref5, _ref6, removeItemButton) {
    var _item = _ref5.item,
        button = _ref5.button,
        highlightedState = _ref5.highlightedState,
        itemSelectable = _ref5.itemSelectable,
        placeholder = _ref5.placeholder;
    var id = _ref6.id,
        value = _ref6.value,
        label = _ref6.label,
        customProperties = _ref6.customProperties,
        active = _ref6.active,
        disabled = _ref6.disabled,
        highlighted = _ref6.highlighted,
        isPlaceholder = _ref6.placeholder;
    var div = Object.assign(document.createElement('div'), {
      className: _item,
      innerHTML: label
    });
    Object.assign(div.dataset, {
      item: '',
      id: id,
      value: value,
      customProperties: customProperties
    });

    if (active) {
      div.setAttribute('aria-selected', 'true');
    }

    if (disabled) {
      div.setAttribute('aria-disabled', 'true');
    }

    if (isPlaceholder) {
      div.classList.add(placeholder);
    }

    div.classList.add(highlighted ? highlightedState : itemSelectable);

    if (removeItemButton) {
      if (disabled) {
        div.classList.remove(itemSelectable);
      }

      div.dataset.deletable = '';
      /** @todo This MUST be localizable, not hardcoded! */

      var REMOVE_ITEM_TEXT = 'Remove item';
      var removeButton = Object.assign(document.createElement('button'), {
        type: 'button',
        className: button,
        innerHTML: REMOVE_ITEM_TEXT
      });
      removeButton.setAttribute('aria-label', REMOVE_ITEM_TEXT + ": '" + value + "'");
      removeButton.dataset.button = '';
      div.appendChild(removeButton);
    }

    return div;
  },

  /**
   * @param {Partial<ClassNames>} classNames
   * @param {boolean} isSelectOneElement
   */
  choiceList: function choiceList(_ref7, isSelectOneElement) {
    var list = _ref7.list;
    var div = Object.assign(document.createElement('div'), {
      className: list
    });

    if (!isSelectOneElement) {
      div.setAttribute('aria-multiselectable', 'true');
    }

    div.setAttribute('role', 'listbox');
    return div;
  },

  /**
   * @param {Partial<ClassNames>} classNames
   * @param {Group} group
   */
  choiceGroup: function choiceGroup(_ref8, _ref9) {
    var group = _ref8.group,
        groupHeading = _ref8.groupHeading,
        itemDisabled = _ref8.itemDisabled;
    var id = _ref9.id,
        value = _ref9.value,
        disabled = _ref9.disabled;
    var div = Object.assign(document.createElement('div'), {
      className: group + " " + (disabled ? itemDisabled : '')
    });
    div.setAttribute('role', 'group');
    Object.assign(div.dataset, {
      group: '',
      id: id,
      value: value
    });

    if (disabled) {
      div.setAttribute('aria-disabled', 'true');
    }

    div.appendChild(Object.assign(document.createElement('div'), {
      className: groupHeading,
      innerHTML: value
    }));
    return div;
  },

  /**
   * @param {Partial<ClassNames>} classNames
   * @param {Choice} choice
   * @param {Options['itemSelectText']} selectText
   */
  choice: function choice(_ref10, _ref11, selectText) {
    var item = _ref10.item,
        itemChoice = _ref10.itemChoice,
        itemSelectable = _ref10.itemSelectable,
        selectedState = _ref10.selectedState,
        itemDisabled = _ref10.itemDisabled,
        placeholder = _ref10.placeholder;
    var id = _ref11.id,
        value = _ref11.value,
        label = _ref11.label,
        groupId = _ref11.groupId,
        elementId = _ref11.elementId,
        isDisabled = _ref11.disabled,
        isSelected = _ref11.selected,
        isPlaceholder = _ref11.placeholder;
    var div = Object.assign(document.createElement('div'), {
      id: elementId,
      innerHTML: label,
      className: item + " " + itemChoice
    });

    if (isSelected) {
      div.classList.add(selectedState);
    }

    if (isPlaceholder) {
      div.classList.add(placeholder);
    }

    div.setAttribute('role', groupId > 0 ? 'treeitem' : 'option');
    Object.assign(div.dataset, {
      choice: '',
      id: id,
      value: value,
      selectText: selectText
    });

    if (isDisabled) {
      div.classList.add(itemDisabled);
      div.dataset.choiceDisabled = '';
      div.setAttribute('aria-disabled', 'true');
    } else {
      div.classList.add(itemSelectable);
      div.dataset.choiceSelectable = '';
    }

    return div;
  },

  /**
   * @param {Partial<ClassNames>} classNames
   * @param {string} placeholderValue
   */
  input: function input(_ref12, placeholderValue) {
    var _input = _ref12.input,
        inputCloned = _ref12.inputCloned;
    var inp = Object.assign(document.createElement('input'), {
      type: 'text',
      className: _input + " " + inputCloned,
      autocomplete: 'off',
      autocapitalize: 'off',
      spellcheck: false
    });
    inp.setAttribute('role', 'textbox');
    inp.setAttribute('aria-autocomplete', 'list');
    inp.setAttribute('aria-label', placeholderValue);
    return inp;
  },

  /**
   * @param {Partial<ClassNames>} classNames
   */
  dropdown: function dropdown(_ref13) {
    var list = _ref13.list,
        listDropdown = _ref13.listDropdown;
    var div = document.createElement('div');
    div.classList.add(list, listDropdown);
    div.setAttribute('aria-expanded', 'false');
    return div;
  },

  /**
   *
   * @param {Partial<ClassNames>} classNames
   * @param {string} innerHTML
   * @param {"no-choices" | "no-results" | ""} type
   */
  notice: function notice(_ref14, innerHTML, type) {
    var item = _ref14.item,
        itemChoice = _ref14.itemChoice,
        noResults = _ref14.noResults,
        noChoices = _ref14.noChoices;

    if (type === void 0) {
      type = '';
    }

    var classes = [item, itemChoice];

    if (type === 'no-choices') {
      classes.push(noChoices);
    } else if (type === 'no-results') {
      classes.push(noResults);
    }

    return Object.assign(document.createElement('div'), {
      innerHTML: innerHTML,
      className: classes.join(' ')
    });
  },

  /**
   * @param {Item} option
   */
  option: function option(_ref15) {
    var label = _ref15.label,
        value = _ref15.value,
        customProperties = _ref15.customProperties,
        active = _ref15.active,
        disabled = _ref15.disabled;
    var opt = new Option(label, value, false, active);

    if (customProperties) {
      opt.dataset.customProperties = customProperties;
    }

    opt.disabled = disabled;
    return opt;
  }
};
/* harmony default export */ var templates = (TEMPLATES);
// CONCATENATED MODULE: ./src/scripts/actions/choices.js
/**
 * @typedef {import('redux').Action} Action
 * @typedef {import('../../../types/index').Choices.Choice} Choice
 */

/**
 * @argument {Choice} choice
 * @returns {Action & Choice}
 */

var choices_addChoice = function addChoice(_ref) {
  var value = _ref.value,
      label = _ref.label,
      id = _ref.id,
      groupId = _ref.groupId,
      disabled = _ref.disabled,
      elementId = _ref.elementId,
      customProperties = _ref.customProperties,
      placeholder = _ref.placeholder,
      keyCode = _ref.keyCode;
  return {
    type: ACTION_TYPES.ADD_CHOICE,
    value: value,
    label: label,
    id: id,
    groupId: groupId,
    disabled: disabled,
    elementId: elementId,
    customProperties: customProperties,
    placeholder: placeholder,
    keyCode: keyCode
  };
};
/**
 * @argument {Choice[]} results
 * @returns {Action & { results: Choice[] }}
 */

var choices_filterChoices = function filterChoices(results) {
  return {
    type: ACTION_TYPES.FILTER_CHOICES,
    results: results
  };
};
/**
 * @argument {boolean} active
 * @returns {Action & { active: boolean }}
 */

var choices_activateChoices = function activateChoices(active) {
  if (active === void 0) {
    active = true;
  }

  return {
    type: ACTION_TYPES.ACTIVATE_CHOICES,
    active: active
  };
};
/**
 * @returns {Action}
 */

var choices_clearChoices = function clearChoices() {
  return {
    type: ACTION_TYPES.CLEAR_CHOICES
  };
};
// CONCATENATED MODULE: ./src/scripts/actions/items.js

/**
 * @typedef {import('redux').Action} Action
 * @typedef {import('../../../types/index').Choices.Item} Item
 */

/**
 * @param {Item} item
 * @returns {Action & Item}
 */

var items_addItem = function addItem(_ref) {
  var value = _ref.value,
      label = _ref.label,
      id = _ref.id,
      choiceId = _ref.choiceId,
      groupId = _ref.groupId,
      customProperties = _ref.customProperties,
      placeholder = _ref.placeholder,
      keyCode = _ref.keyCode;
  return {
    type: ACTION_TYPES.ADD_ITEM,
    value: value,
    label: label,
    id: id,
    choiceId: choiceId,
    groupId: groupId,
    customProperties: customProperties,
    placeholder: placeholder,
    keyCode: keyCode
  };
};
/**
 * @param {string} id
 * @param {string} choiceId
 * @returns {Action & { id: string, choiceId: string }}
 */

var items_removeItem = function removeItem(id, choiceId) {
  return {
    type: ACTION_TYPES.REMOVE_ITEM,
    id: id,
    choiceId: choiceId
  };
};
/**
 * @param {string} id
 * @param {boolean} highlighted
 * @returns {Action & { id: string, highlighted: boolean }}
 */

var items_highlightItem = function highlightItem(id, highlighted) {
  return {
    type: ACTION_TYPES.HIGHLIGHT_ITEM,
    id: id,
    highlighted: highlighted
  };
};
// CONCATENATED MODULE: ./src/scripts/actions/groups.js

/**
 * @typedef {import('redux').Action} Action
 * @typedef {import('../../../types/index').Choices.Group} Group
 */

/**
 * @param {Group} group
 * @returns {Action & Group}
 */

var groups_addGroup = function addGroup(_ref) {
  var value = _ref.value,
      id = _ref.id,
      active = _ref.active,
      disabled = _ref.disabled;
  return {
    type: ACTION_TYPES.ADD_GROUP,
    value: value,
    id: id,
    active: active,
    disabled: disabled
  };
};
// CONCATENATED MODULE: ./src/scripts/actions/misc.js
/**
 * @typedef {import('redux').Action} Action
 */

/**
 * @returns {Action}
 */
var clearAll = function clearAll() {
  return {
    type: 'CLEAR_ALL'
  };
};
/**
 * @param {any} state
 * @returns {Action & { state: object }}
 */

var resetTo = function resetTo(state) {
  return {
    type: 'RESET_TO',
    state: state
  };
};
/**
 * @param {boolean} isLoading
 * @returns {Action & { isLoading: boolean }}
 */

var setIsLoading = function setIsLoading(isLoading) {
  return {
    type: 'SET_IS_LOADING',
    isLoading: isLoading
  };
};
// CONCATENATED MODULE: ./src/scripts/choices.js
function choices_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function choices_createClass(Constructor, protoProps, staticProps) { if (protoProps) choices_defineProperties(Constructor.prototype, protoProps); if (staticProps) choices_defineProperties(Constructor, staticProps); return Constructor; }












/** @see {@link http://browserhacks.com/#hack-acea075d0ac6954f275a70023906050c} */

var IS_IE11 = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;
/**
 * @typedef {import('../../types/index').Choices.Choice} Choice
 * @typedef {import('../../types/index').Choices.Item} Item
 * @typedef {import('../../types/index').Choices.Group} Group
 * @typedef {import('../../types/index').Choices.Options} Options
 */

/** @type {Partial<Options>} */

var USER_DEFAULTS = {};
/**
 * Choices
 * @author Josh Johnson<josh@joshuajohnson.co.uk>
 */

var choices_Choices =
/*#__PURE__*/
function () {
  choices_createClass(Choices, null, [{
    key: "defaults",
    get: function get() {
      return Object.preventExtensions({
        get options() {
          return USER_DEFAULTS;
        },

        get templates() {
          return TEMPLATES;
        }

      });
    }
    /**
     * @param {string | HTMLInputElement | HTMLSelectElement} element
     * @param {Partial<Options>} userConfig
     */

  }]);

  function Choices(element, userConfig) {
    var _this = this;

    if (element === void 0) {
      element = '[data-choice]';
    }

    if (userConfig === void 0) {
      userConfig = {};
    }

    /** @type {Partial<Options>} */
    this.config = cjs_default.a.all([DEFAULT_CONFIG, Choices.defaults.options, userConfig], // When merging array configs, replace with a copy of the userConfig array,
    // instead of concatenating with the default array
    {
      arrayMerge: function arrayMerge(_, sourceArray) {
        return [].concat(sourceArray);
      }
    });
    var invalidConfigOptions = diff(this.config, DEFAULT_CONFIG);

    if (invalidConfigOptions.length) {
      console.warn('Unknown config option(s) passed', invalidConfigOptions.join(', '));
    }

    var passedElement = typeof element === 'string' ? document.querySelector(element) : element;

    if (!(passedElement instanceof HTMLInputElement || passedElement instanceof HTMLSelectElement)) {
      throw TypeError('Expected one of the following types text|select-one|select-multiple');
    }

    this._isTextElement = passedElement.type === TEXT_TYPE;
    this._isSelectOneElement = passedElement.type === SELECT_ONE_TYPE;
    this._isSelectMultipleElement = passedElement.type === SELECT_MULTIPLE_TYPE;
    this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement;
    this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled;

    if (!['auto', 'always'].includes(this.config.renderSelectedChoices)) {
      this.config.renderSelectedChoices = 'auto';
    }

    if (userConfig.addItemFilter && typeof userConfig.addItemFilter !== 'function') {
      var re = userConfig.addItemFilter instanceof RegExp ? userConfig.addItemFilter : new RegExp(userConfig.addItemFilter);
      this.config.addItemFilter = re.test.bind(re);
    }

    if (this._isTextElement) {
      this.passedElement = new WrappedInput({
        element: passedElement,
        classNames: this.config.classNames,
        delimiter: this.config.delimiter
      });
    } else {
      this.passedElement = new WrappedSelect({
        element: passedElement,
        classNames: this.config.classNames,
        template: function template(data) {
          return _this._templates.option(data);
        }
      });
    }

    this.initialised = false;
    this._store = new store_Store();
    this._initialState = {};
    this._currentState = {};
    this._prevState = {};
    this._currentValue = '';
    this._canSearch = this.config.searchEnabled;
    this._isScrollingOnIe = false;
    this._highlightPosition = 0;
    this._wasTap = true;
    this._placeholderValue = this._generatePlaceholderValue();
    this._baseId = generateId(this.passedElement.element, 'choices-');
    /**
     * setting direction in cases where it's explicitly set on passedElement
     * or when calculated direction is different from the document
     * @type {HTMLElement['dir']}
     */

    this._direction = this.passedElement.dir;

    if (!this._direction) {
      var _window$getComputedSt = window.getComputedStyle(this.passedElement.element),
          elementDirection = _window$getComputedSt.direction;

      var _window$getComputedSt2 = window.getComputedStyle(document.documentElement),
          documentDirection = _window$getComputedSt2.direction;

      if (elementDirection !== documentDirection) {
        this._direction = elementDirection;
      }
    }

    this._idNames = {
      itemChoice: 'item-choice'
    }; // Assign preset groups from passed element

    this._presetGroups = this.passedElement.optionGroups; // Assign preset options from passed element

    this._presetOptions = this.passedElement.options; // Assign preset choices from passed object

    this._presetChoices = this.config.choices; // Assign preset items from passed object first

    this._presetItems = this.config.items; // Add any values passed from attribute

    if (this.passedElement.value) {
      this._presetItems = this._presetItems.concat(this.passedElement.value.split(this.config.delimiter));
    } // Create array of choices from option elements


    if (this.passedElement.options) {
      this.passedElement.options.forEach(function (o) {
        _this._presetChoices.push({
          value: o.value,
          label: o.innerHTML,
          selected: o.selected,
          disabled: o.disabled || o.parentNode.disabled,
          placeholder: o.value === '' || o.hasAttribute('placeholder'),
          customProperties: o.getAttribute('data-custom-properties')
        });
      });
    }

    this._render = this._render.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
    this._onKeyUp = this._onKeyUp.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onClick = this._onClick.bind(this);
    this._onTouchMove = this._onTouchMove.bind(this);
    this._onTouchEnd = this._onTouchEnd.bind(this);
    this._onMouseDown = this._onMouseDown.bind(this);
    this._onMouseOver = this._onMouseOver.bind(this);
    this._onFormReset = this._onFormReset.bind(this);
    this._onAKey = this._onAKey.bind(this);
    this._onEnterKey = this._onEnterKey.bind(this);
    this._onEscapeKey = this._onEscapeKey.bind(this);
    this._onDirectionKey = this._onDirectionKey.bind(this);
    this._onDeleteKey = this._onDeleteKey.bind(this); // If element has already been initialised with Choices, fail silently

    if (this.passedElement.isActive) {
      if (!this.config.silent) {
        console.warn('Trying to initialise Choices on element already initialised');
      }

      this.initialised = true;
      return;
    } // Let's go


    this.init();
  }

  var _proto = Choices.prototype;

  _proto.init = function init() {
    if (this.initialised) {
      return;
    }

    this._createTemplates();

    this._createElements();

    this._createStructure(); // Set initial state (We need to clone the state because some reducers
    // modify the inner objects properties in the state) 🤢


    this._initialState = cloneObject(this._store.state);

    this._store.subscribe(this._render);

    this._render();

    this._addEventListeners();

    var shouldDisable = !this.config.addItems || this.passedElement.element.hasAttribute('disabled');

    if (shouldDisable) {
      this.disable();
    }

    this.initialised = true;
    var callbackOnInit = this.config.callbackOnInit; // Run callback if it is a function

    if (callbackOnInit && typeof callbackOnInit === 'function') {
      callbackOnInit.call(this);
    }
  };

  _proto.destroy = function destroy() {
    if (!this.initialised) {
      return;
    }

    this._removeEventListeners();

    this.passedElement.reveal();
    this.containerOuter.unwrap(this.passedElement.element);
    this.clearStore();

    if (this._isSelectElement) {
      this.passedElement.options = this._presetOptions;
    }

    this._templates = null;
    this.initialised = false;
  };

  _proto.enable = function enable() {
    if (this.passedElement.isDisabled) {
      this.passedElement.enable();
    }

    if (this.containerOuter.isDisabled) {
      this._addEventListeners();

      this.input.enable();
      this.containerOuter.enable();
    }

    return this;
  };

  _proto.disable = function disable() {
    if (!this.passedElement.isDisabled) {
      this.passedElement.disable();
    }

    if (!this.containerOuter.isDisabled) {
      this._removeEventListeners();

      this.input.disable();
      this.containerOuter.disable();
    }

    return this;
  };

  _proto.highlightItem = function highlightItem(item, runEvent) {
    if (runEvent === void 0) {
      runEvent = true;
    }

    if (!item) {
      return this;
    }

    var id = item.id,
        _item$groupId = item.groupId,
        groupId = _item$groupId === void 0 ? -1 : _item$groupId,
        _item$value = item.value,
        value = _item$value === void 0 ? '' : _item$value,
        _item$label = item.label,
        label = _item$label === void 0 ? '' : _item$label;
    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;

    this._store.dispatch(items_highlightItem(id, true));

    if (runEvent) {
      this.passedElement.triggerEvent(EVENTS.highlightItem, {
        id: id,
        value: value,
        label: label,
        groupValue: group && group.value ? group.value : null
      });
    }

    return this;
  };

  _proto.unhighlightItem = function unhighlightItem(item) {
    if (!item) {
      return this;
    }

    var id = item.id,
        _item$groupId2 = item.groupId,
        groupId = _item$groupId2 === void 0 ? -1 : _item$groupId2,
        _item$value2 = item.value,
        value = _item$value2 === void 0 ? '' : _item$value2,
        _item$label2 = item.label,
        label = _item$label2 === void 0 ? '' : _item$label2;
    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;

    this._store.dispatch(items_highlightItem(id, false));

    this.passedElement.triggerEvent(EVENTS.highlightItem, {
      id: id,
      value: value,
      label: label,
      groupValue: group && group.value ? group.value : null
    });
    return this;
  };

  _proto.highlightAll = function highlightAll() {
    var _this2 = this;

    this._store.items.forEach(function (item) {
      return _this2.highlightItem(item);
    });

    return this;
  };

  _proto.unhighlightAll = function unhighlightAll() {
    var _this3 = this;

    this._store.items.forEach(function (item) {
      return _this3.unhighlightItem(item);
    });

    return this;
  };

  _proto.removeActiveItemsByValue = function removeActiveItemsByValue(value) {
    var _this4 = this;

    this._store.activeItems.filter(function (item) {
      return item.value === value;
    }).forEach(function (item) {
      return _this4._removeItem(item);
    });

    return this;
  };

  _proto.removeActiveItems = function removeActiveItems(excludedId) {
    var _this5 = this;

    this._store.activeItems.filter(function (_ref) {
      var id = _ref.id;
      return id !== excludedId;
    }).forEach(function (item) {
      return _this5._removeItem(item);
    });

    return this;
  };

  _proto.removeHighlightedItems = function removeHighlightedItems(runEvent) {
    var _this6 = this;

    if (runEvent === void 0) {
      runEvent = false;
    }

    this._store.highlightedActiveItems.forEach(function (item) {
      _this6._removeItem(item); // If this action was performed by the user
      // trigger the event


      if (runEvent) {
        _this6._triggerChange(item.value);
      }
    });

    return this;
  };

  _proto.showDropdown = function showDropdown(preventInputFocus) {
    var _this7 = this;

    if (this.dropdown.isActive) {
      return this;
    }

    requestAnimationFrame(function () {
      _this7.dropdown.show();

      _this7.containerOuter.open(_this7.dropdown.distanceFromTopWindow);

      if (!preventInputFocus && _this7._canSearch) {
        _this7.input.focus();
      }

      _this7.passedElement.triggerEvent(EVENTS.showDropdown, {});
    });
    return this;
  };

  _proto.hideDropdown = function hideDropdown(preventInputBlur) {
    var _this8 = this;

    if (!this.dropdown.isActive) {
      return this;
    }

    requestAnimationFrame(function () {
      _this8.dropdown.hide();

      _this8.containerOuter.close();

      if (!preventInputBlur && _this8._canSearch) {
        _this8.input.removeActiveDescendant();

        _this8.input.blur();
      }

      _this8.passedElement.triggerEvent(EVENTS.hideDropdown, {});
    });
    return this;
  };

  _proto.getValue = function getValue(valueOnly) {
    if (valueOnly === void 0) {
      valueOnly = false;
    }

    var values = this._store.activeItems.reduce(function (selectedItems, item) {
      var itemValue = valueOnly ? item.value : item;
      selectedItems.push(itemValue);
      return selectedItems;
    }, []);

    return this._isSelectOneElement ? values[0] : values;
  }
  /**
   * @param {string[] | import('../../types/index').Choices.Item[]} items
   */
  ;

  _proto.setValue = function setValue(items) {
    var _this9 = this;

    if (!this.initialised) {
      return this;
    }

    items.forEach(function (value) {
      return _this9._setChoiceOrItem(value);
    });
    return this;
  };

  _proto.setChoiceByValue = function setChoiceByValue(value) {
    var _this10 = this;

    if (!this.initialised || this._isTextElement) {
      return this;
    } // If only one value has been passed, convert to array


    var choiceValue = Array.isArray(value) ? value : [value]; // Loop through each value and

    choiceValue.forEach(function (val) {
      return _this10._findAndSelectChoiceByValue(val);
    });
    return this;
  }
  /**
   * Set choices of select input via an array of objects (or function that returns array of object or promise of it),
   * a value field name and a label field name.
   * This behaves the same as passing items via the choices option but can be called after initialising Choices.
   * This can also be used to add groups of choices (see example 2); Optionally pass a true `replaceChoices` value to remove any existing choices.
   * Optionally pass a `customProperties` object to add additional data to your choices (useful when searching/filtering etc).
   *
   * **Input types affected:** select-one, select-multiple
   *
   * @template {Choice[] | ((instance: Choices) => object[] | Promise<object[]>)} T
   * @param {T} [choicesArrayOrFetcher]
   * @param {string} [value = 'value'] - name of `value` field
   * @param {string} [label = 'label'] - name of 'label' field
   * @param {boolean} [replaceChoices = false] - whether to replace of add choices
   * @returns {this | Promise<this>}
   *
   * @example
   * ```js
   * const example = new Choices(element);
   *
   * example.setChoices([
   *   {value: 'One', label: 'Label One', disabled: true},
   *   {value: 'Two', label: 'Label Two', selected: true},
   *   {value: 'Three', label: 'Label Three'},
   * ], 'value', 'label', false);
   * ```
   *
   * @example
   * ```js
   * const example = new Choices(element);
   *
   * example.setChoices(async () => {
   *   try {
   *      const items = await fetch('/items');
   *      return items.json()
   *   } catch(err) {
   *      console.error(err)
   *   }
   * });
   * ```
   *
   * @example
   * ```js
   * const example = new Choices(element);
   *
   * example.setChoices([{
   *   label: 'Group one',
   *   id: 1,
   *   disabled: false,
   *   choices: [
   *     {value: 'Child One', label: 'Child One', selected: true},
   *     {value: 'Child Two', label: 'Child Two',  disabled: true},
   *     {value: 'Child Three', label: 'Child Three'},
   *   ]
   * },
   * {
   *   label: 'Group two',
   *   id: 2,
   *   disabled: false,
   *   choices: [
   *     {value: 'Child Four', label: 'Child Four', disabled: true},
   *     {value: 'Child Five', label: 'Child Five'},
   *     {value: 'Child Six', label: 'Child Six', customProperties: {
   *       description: 'Custom description about child six',
   *       random: 'Another random custom property'
   *     }},
   *   ]
   * }], 'value', 'label', false);
   * ```
   */
  ;

  _proto.setChoices = function setChoices(choicesArrayOrFetcher, value, label, replaceChoices) {
    var _this11 = this;

    if (choicesArrayOrFetcher === void 0) {
      choicesArrayOrFetcher = [];
    }

    if (value === void 0) {
      value = 'value';
    }

    if (label === void 0) {
      label = 'label';
    }

    if (replaceChoices === void 0) {
      replaceChoices = false;
    }

    if (!this.initialised) {
      throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");
    }

    if (!this._isSelectElement) {
      throw new TypeError("setChoices can't be used with INPUT based Choices");
    }

    if (typeof value !== 'string' || !value) {
      throw new TypeError("value parameter must be a name of 'value' field in passed objects");
    } // Clear choices if needed


    if (replaceChoices) {
      this.clearChoices();
    }

    if (typeof choicesArrayOrFetcher === 'function') {
      // it's a choices fetcher function
      var fetcher = choicesArrayOrFetcher(this);

      if (typeof Promise === 'function' && fetcher instanceof Promise) {
        // that's a promise
        // eslint-disable-next-line compat/compat
        return new Promise(function (resolve) {
          return requestAnimationFrame(resolve);
        }).then(function () {
          return _this11._handleLoadingState(true);
        }).then(function () {
          return fetcher;
        }).then(function (data) {
          return _this11.setChoices(data, value, label, replaceChoices);
        }).catch(function (err) {
          if (!_this11.config.silent) {
            console.error(err);
          }
        }).then(function () {
          return _this11._handleLoadingState(false);
        }).then(function () {
          return _this11;
        });
      } // function returned something else than promise, let's check if it's an array of choices


      if (!Array.isArray(fetcher)) {
        throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: " + typeof fetcher);
      } // recursion with results, it's sync and choices were cleared already


      return this.setChoices(fetcher, value, label, false);
    }

    if (!Array.isArray(choicesArrayOrFetcher)) {
      throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
    }

    this.containerOuter.removeLoadingState();

    this._startLoading();

    choicesArrayOrFetcher.forEach(function (groupOrChoice) {
      if (groupOrChoice.choices) {
        _this11._addGroup({
          id: parseInt(groupOrChoice.id, 10) || null,
          group: groupOrChoice,
          valueKey: value,
          labelKey: label
        });
      } else {
        _this11._addChoice({
          value: groupOrChoice[value],
          label: groupOrChoice[label],
          isSelected: groupOrChoice.selected,
          isDisabled: groupOrChoice.disabled,
          customProperties: groupOrChoice.customProperties,
          placeholder: groupOrChoice.placeholder
        });
      }
    });

    this._stopLoading();

    return this;
  };

  _proto.clearChoices = function clearChoices() {
    this._store.dispatch(choices_clearChoices());

    return this;
  };

  _proto.clearStore = function clearStore() {
    this._store.dispatch(clearAll());

    return this;
  };

  _proto.clearInput = function clearInput() {
    var shouldSetInputWidth = !this._isSelectOneElement;
    this.input.clear(shouldSetInputWidth);

    if (!this._isTextElement && this._canSearch) {
      this._isSearching = false;

      this._store.dispatch(choices_activateChoices(true));
    }

    return this;
  };

  _proto._render = function _render() {
    if (this._store.isLoading()) {
      return;
    }

    this._currentState = this._store.state;
    var stateChanged = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items;
    var shouldRenderChoices = this._isSelectElement;
    var shouldRenderItems = this._currentState.items !== this._prevState.items;

    if (!stateChanged) {
      return;
    }

    if (shouldRenderChoices) {
      this._renderChoices();
    }

    if (shouldRenderItems) {
      this._renderItems();
    }

    this._prevState = this._currentState;
  };

  _proto._renderChoices = function _renderChoices() {
    var _this12 = this;

    var _this$_store = this._store,
        activeGroups = _this$_store.activeGroups,
        activeChoices = _this$_store.activeChoices;
    var choiceListFragment = document.createDocumentFragment();
    this.choiceList.clear();

    if (this.config.resetScrollPosition) {
      requestAnimationFrame(function () {
        return _this12.choiceList.scrollToTop();
      });
    } // If we have grouped options


    if (activeGroups.length >= 1 && !this._isSearching) {
      // If we have a placeholder choice along with groups
      var activePlaceholders = activeChoices.filter(function (activeChoice) {
        return activeChoice.placeholder === true && activeChoice.groupId === -1;
      });

      if (activePlaceholders.length >= 1) {
        choiceListFragment = this._createChoicesFragment(activePlaceholders, choiceListFragment);
      }

      choiceListFragment = this._createGroupsFragment(activeGroups, activeChoices, choiceListFragment);
    } else if (activeChoices.length >= 1) {
      choiceListFragment = this._createChoicesFragment(activeChoices, choiceListFragment);
    } // If we have choices to show


    if (choiceListFragment.childNodes && choiceListFragment.childNodes.length > 0) {
      var activeItems = this._store.activeItems;

      var canAddItem = this._canAddItem(activeItems, this.input.value); // ...and we can select them


      if (canAddItem.response) {
        // ...append them and highlight the first choice
        this.choiceList.append(choiceListFragment);

        this._highlightChoice();
      } else {
        // ...otherwise show a notice
        this.choiceList.append(this._getTemplate('notice', canAddItem.notice));
      }
    } else {
      // Otherwise show a notice
      var dropdownItem;
      var notice;

      if (this._isSearching) {
        notice = typeof this.config.noResultsText === 'function' ? this.config.noResultsText() : this.config.noResultsText;
        dropdownItem = this._getTemplate('notice', notice, 'no-results');
      } else {
        notice = typeof this.config.noChoicesText === 'function' ? this.config.noChoicesText() : this.config.noChoicesText;
        dropdownItem = this._getTemplate('notice', notice, 'no-choices');
      }

      this.choiceList.append(dropdownItem);
    }
  };

  _proto._renderItems = function _renderItems() {
    var activeItems = this._store.activeItems || [];
    this.itemList.clear(); // Create a fragment to store our list items
    // (so we don't have to update the DOM for each item)

    var itemListFragment = this._createItemsFragment(activeItems); // If we have items to add, append them


    if (itemListFragment.childNodes) {
      this.itemList.append(itemListFragment);
    }
  };

  _proto._createGroupsFragment = function _createGroupsFragment(groups, choices, fragment) {
    var _this13 = this;

    if (fragment === void 0) {
      fragment = document.createDocumentFragment();
    }

    var getGroupChoices = function getGroupChoices(group) {
      return choices.filter(function (choice) {
        if (_this13._isSelectOneElement) {
          return choice.groupId === group.id;
        }

        return choice.groupId === group.id && (_this13.config.renderSelectedChoices === 'always' || !choice.selected);
      });
    }; // If sorting is enabled, filter groups


    if (this.config.shouldSort) {
      groups.sort(this.config.sorter);
    }

    groups.forEach(function (group) {
      var groupChoices = getGroupChoices(group);

      if (groupChoices.length >= 1) {
        var dropdownGroup = _this13._getTemplate('choiceGroup', group);

        fragment.appendChild(dropdownGroup);

        _this13._createChoicesFragment(groupChoices, fragment, true);
      }
    });
    return fragment;
  };

  _proto._createChoicesFragment = function _createChoicesFragment(choices, fragment, withinGroup) {
    var _this14 = this;

    if (fragment === void 0) {
      fragment = document.createDocumentFragment();
    }

    if (withinGroup === void 0) {
      withinGroup = false;
    }

    // Create a fragment to store our list items (so we don't have to update the DOM for each item)
    var _this$config = this.config,
        renderSelectedChoices = _this$config.renderSelectedChoices,
        searchResultLimit = _this$config.searchResultLimit,
        renderChoiceLimit = _this$config.renderChoiceLimit;
    var filter = this._isSearching ? sortByScore : this.config.sorter;

    var appendChoice = function appendChoice(choice) {
      var shouldRender = renderSelectedChoices === 'auto' ? _this14._isSelectOneElement || !choice.selected : true;

      if (shouldRender) {
        var dropdownItem = _this14._getTemplate('choice', choice, _this14.config.itemSelectText);

        fragment.appendChild(dropdownItem);
      }
    };

    var rendererableChoices = choices;

    if (renderSelectedChoices === 'auto' && !this._isSelectOneElement) {
      rendererableChoices = choices.filter(function (choice) {
        return !choice.selected;
      });
    } // Split array into placeholders and "normal" choices


    var _rendererableChoices$ = rendererableChoices.reduce(function (acc, choice) {
      if (choice.placeholder) {
        acc.placeholderChoices.push(choice);
      } else {
        acc.normalChoices.push(choice);
      }

      return acc;
    }, {
      placeholderChoices: [],
      normalChoices: []
    }),
        placeholderChoices = _rendererableChoices$.placeholderChoices,
        normalChoices = _rendererableChoices$.normalChoices; // If sorting is enabled or the user is searching, filter choices


    if (this.config.shouldSort || this._isSearching) {
      normalChoices.sort(filter);
    }

    var choiceLimit = rendererableChoices.length; // Prepend placeholeder

    var sortedChoices = this._isSelectOneElement ? [].concat(placeholderChoices, normalChoices) : normalChoices;

    if (this._isSearching) {
      choiceLimit = searchResultLimit;
    } else if (renderChoiceLimit && renderChoiceLimit > 0 && !withinGroup) {
      choiceLimit = renderChoiceLimit;
    } // Add each choice to dropdown within range


    for (var i = 0; i < choiceLimit; i += 1) {
      if (sortedChoices[i]) {
        appendChoice(sortedChoices[i]);
      }
    }

    return fragment;
  };

  _proto._createItemsFragment = function _createItemsFragment(items, fragment) {
    var _this15 = this;

    if (fragment === void 0) {
      fragment = document.createDocumentFragment();
    }

    // Create fragment to add elements to
    var _this$config2 = this.config,
        shouldSortItems = _this$config2.shouldSortItems,
        sorter = _this$config2.sorter,
        removeItemButton = _this$config2.removeItemButton; // If sorting is enabled, filter items

    if (shouldSortItems && !this._isSelectOneElement) {
      items.sort(sorter);
    }

    if (this._isTextElement) {
      // Update the value of the hidden input
      this.passedElement.value = items;
    } else {
      // Update the options of the hidden input
      this.passedElement.options = items;
    }

    var addItemToFragment = function addItemToFragment(item) {
      // Create new list element
      var listItem = _this15._getTemplate('item', item, removeItemButton); // Append it to list


      fragment.appendChild(listItem);
    }; // Add each list item to list


    items.forEach(addItemToFragment);
    return fragment;
  };

  _proto._triggerChange = function _triggerChange(value) {
    if (value === undefined || value === null) {
      return;
    }

    this.passedElement.triggerEvent(EVENTS.change, {
      value: value
    });
  };

  _proto._selectPlaceholderChoice = function _selectPlaceholderChoice() {
    var placeholderChoice = this._store.placeholderChoice;

    if (placeholderChoice) {
      this._addItem({
        value: placeholderChoice.value,
        label: placeholderChoice.label,
        choiceId: placeholderChoice.id,
        groupId: placeholderChoice.groupId,
        placeholder: placeholderChoice.placeholder
      });

      this._triggerChange(placeholderChoice.value);
    }
  };

  _proto._handleButtonAction = function _handleButtonAction(activeItems, element) {
    if (!activeItems || !element || !this.config.removeItems || !this.config.removeItemButton) {
      return;
    }

    var itemId = element.parentNode.getAttribute('data-id');
    var itemToRemove = activeItems.find(function (item) {
      return item.id === parseInt(itemId, 10);
    }); // Remove item associated with button

    this._removeItem(itemToRemove);

    this._triggerChange(itemToRemove.value);

    if (this._isSelectOneElement) {
      this._selectPlaceholderChoice();
    }
  };

  _proto._handleItemAction = function _handleItemAction(activeItems, element, hasShiftKey) {
    var _this16 = this;

    if (hasShiftKey === void 0) {
      hasShiftKey = false;
    }

    if (!activeItems || !element || !this.config.removeItems || this._isSelectOneElement) {
      return;
    }

    var passedId = element.getAttribute('data-id'); // We only want to select one item with a click
    // so we deselect any items that aren't the target
    // unless shift is being pressed

    activeItems.forEach(function (item) {
      if (item.id === parseInt(passedId, 10) && !item.highlighted) {
        _this16.highlightItem(item);
      } else if (!hasShiftKey && item.highlighted) {
        _this16.unhighlightItem(item);
      }
    }); // Focus input as without focus, a user cannot do anything with a
    // highlighted item

    this.input.focus();
  };

  _proto._handleChoiceAction = function _handleChoiceAction(activeItems, element) {
    if (!activeItems || !element) {
      return;
    } // If we are clicking on an option


    var id = element.dataset.id;

    var choice = this._store.getChoiceById(id);

    if (!choice) {
      return;
    }

    var passedKeyCode = activeItems[0] && activeItems[0].keyCode ? activeItems[0].keyCode : null;
    var hasActiveDropdown = this.dropdown.isActive; // Update choice keyCode

    choice.keyCode = passedKeyCode;
    this.passedElement.triggerEvent(EVENTS.choice, {
      choice: choice
    });

    if (!choice.selected && !choice.disabled) {
      var canAddItem = this._canAddItem(activeItems, choice.value);

      if (canAddItem.response) {
        this._addItem({
          value: choice.value,
          label: choice.label,
          choiceId: choice.id,
          groupId: choice.groupId,
          customProperties: choice.customProperties,
          placeholder: choice.placeholder,
          keyCode: choice.keyCode
        });

        this._triggerChange(choice.value);
      }
    }

    this.clearInput(); // We want to close the dropdown if we are dealing with a single select box

    if (hasActiveDropdown && this._isSelectOneElement) {
      this.hideDropdown(true);
      this.containerOuter.focus();
    }
  };

  _proto._handleBackspace = function _handleBackspace(activeItems) {
    if (!this.config.removeItems || !activeItems) {
      return;
    }

    var lastItem = activeItems[activeItems.length - 1];
    var hasHighlightedItems = activeItems.some(function (item) {
      return item.highlighted;
    }); // If editing the last item is allowed and there are not other selected items,
    // we can edit the item value. Otherwise if we can remove items, remove all selected items

    if (this.config.editItems && !hasHighlightedItems && lastItem) {
      this.input.value = lastItem.value;
      this.input.setWidth();

      this._removeItem(lastItem);

      this._triggerChange(lastItem.value);
    } else {
      if (!hasHighlightedItems) {
        // Highlight last item if none already highlighted
        this.highlightItem(lastItem, false);
      }

      this.removeHighlightedItems(true);
    }
  };

  _proto._startLoading = function _startLoading() {
    this._store.dispatch(setIsLoading(true));
  };

  _proto._stopLoading = function _stopLoading() {
    this._store.dispatch(setIsLoading(false));
  };

  _proto._handleLoadingState = function _handleLoadingState(setLoading) {
    if (setLoading === void 0) {
      setLoading = true;
    }

    var placeholderItem = this.itemList.getChild("." + this.config.classNames.placeholder);

    if (setLoading) {
      this.disable();
      this.containerOuter.addLoadingState();

      if (this._isSelectOneElement) {
        if (!placeholderItem) {
          placeholderItem = this._getTemplate('placeholder', this.config.loadingText);
          this.itemList.append(placeholderItem);
        } else {
          placeholderItem.innerHTML = this.config.loadingText;
        }
      } else {
        this.input.placeholder = this.config.loadingText;
      }
    } else {
      this.enable();
      this.containerOuter.removeLoadingState();

      if (this._isSelectOneElement) {
        placeholderItem.innerHTML = this._placeholderValue || '';
      } else {
        this.input.placeholder = this._placeholderValue || '';
      }
    }
  };

  _proto._handleSearch = function _handleSearch(value) {
    if (!value || !this.input.isFocussed) {
      return;
    }

    var choices = this._store.choices;
    var _this$config3 = this.config,
        searchFloor = _this$config3.searchFloor,
        searchChoices = _this$config3.searchChoices;
    var hasUnactiveChoices = choices.some(function (option) {
      return !option.active;
    }); // Check that we have a value to search and the input was an alphanumeric character

    if (value && value.length >= searchFloor) {
      var resultCount = searchChoices ? this._searchChoices(value) : 0; // Trigger search event

      this.passedElement.triggerEvent(EVENTS.search, {
        value: value,
        resultCount: resultCount
      });
    } else if (hasUnactiveChoices) {
      // Otherwise reset choices to active
      this._isSearching = false;

      this._store.dispatch(choices_activateChoices(true));
    }
  };

  _proto._canAddItem = function _canAddItem(activeItems, value) {
    var canAddItem = true;
    var notice = typeof this.config.addItemText === 'function' ? this.config.addItemText(value) : this.config.addItemText;

    if (!this._isSelectOneElement) {
      var isDuplicateValue = existsInArray(activeItems, value);

      if (this.config.maxItemCount > 0 && this.config.maxItemCount <= activeItems.length) {
        // If there is a max entry limit and we have reached that limit
        // don't update
        canAddItem = false;
        notice = typeof this.config.maxItemText === 'function' ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText;
      }

      if (!this.config.duplicateItemsAllowed && isDuplicateValue && canAddItem) {
        canAddItem = false;
        notice = typeof this.config.uniqueItemText === 'function' ? this.config.uniqueItemText(value) : this.config.uniqueItemText;
      }

      if (this._isTextElement && this.config.addItems && canAddItem && typeof this.config.addItemFilter === 'function' && !this.config.addItemFilter(value)) {
        canAddItem = false;
        notice = typeof this.config.customAddItemText === 'function' ? this.config.customAddItemText(value) : this.config.customAddItemText;
      }
    }

    return {
      response: canAddItem,
      notice: notice
    };
  };

  _proto._searchChoices = function _searchChoices(value) {
    var newValue = typeof value === 'string' ? value.trim() : value;
    var currentValue = typeof this._currentValue === 'string' ? this._currentValue.trim() : this._currentValue;

    if (newValue.length < 1 && newValue === currentValue + " ") {
      return 0;
    } // If new value matches the desired length and is not the same as the current value with a space


    var haystack = this._store.searchableChoices;
    var needle = newValue;
    var keys = [].concat(this.config.searchFields);
    var options = Object.assign(this.config.fuseOptions, {
      keys: keys
    });
    var fuse = new fuse_default.a(haystack, options);
    var results = fuse.search(needle);
    this._currentValue = newValue;
    this._highlightPosition = 0;
    this._isSearching = true;

    this._store.dispatch(choices_filterChoices(results));

    return results.length;
  };

  _proto._addEventListeners = function _addEventListeners() {
    var _document = document,
        documentElement = _document.documentElement; // capture events - can cancel event processing or propagation

    documentElement.addEventListener('touchend', this._onTouchEnd, true);
    this.containerOuter.element.addEventListener('keydown', this._onKeyDown, true);
    this.containerOuter.element.addEventListener('mousedown', this._onMouseDown, true); // passive events - doesn't call `preventDefault` or `stopPropagation`

    documentElement.addEventListener('click', this._onClick, {
      passive: true
    });
    documentElement.addEventListener('touchmove', this._onTouchMove, {
      passive: true
    });
    this.dropdown.element.addEventListener('mouseover', this._onMouseOver, {
      passive: true
    });

    if (this._isSelectOneElement) {
      this.containerOuter.element.addEventListener('focus', this._onFocus, {
        passive: true
      });
      this.containerOuter.element.addEventListener('blur', this._onBlur, {
        passive: true
      });
    }

    this.input.element.addEventListener('keyup', this._onKeyUp, {
      passive: true
    });
    this.input.element.addEventListener('focus', this._onFocus, {
      passive: true
    });
    this.input.element.addEventListener('blur', this._onBlur, {
      passive: true
    });

    if (this.input.element.form) {
      this.input.element.form.addEventListener('reset', this._onFormReset, {
        passive: true
      });
    }

    this.input.addEventListeners();
  };

  _proto._removeEventListeners = function _removeEventListeners() {
    var _document2 = document,
        documentElement = _document2.documentElement;
    documentElement.removeEventListener('touchend', this._onTouchEnd, true);
    this.containerOuter.element.removeEventListener('keydown', this._onKeyDown, true);
    this.containerOuter.element.removeEventListener('mousedown', this._onMouseDown, true);
    documentElement.removeEventListener('click', this._onClick);
    documentElement.removeEventListener('touchmove', this._onTouchMove);
    this.dropdown.element.removeEventListener('mouseover', this._onMouseOver);

    if (this._isSelectOneElement) {
      this.containerOuter.element.removeEventListener('focus', this._onFocus);
      this.containerOuter.element.removeEventListener('blur', this._onBlur);
    }

    this.input.element.removeEventListener('keyup', this._onKeyUp);
    this.input.element.removeEventListener('focus', this._onFocus);
    this.input.element.removeEventListener('blur', this._onBlur);

    if (this.input.element.form) {
      this.input.element.form.removeEventListener('reset', this._onFormReset);
    }

    this.input.removeEventListeners();
  }
  /**
   * @param {KeyboardEvent} event
   */
  ;

  _proto._onKeyDown = function _onKeyDown(event) {
    var _keyDownActions;

    var target = event.target,
        keyCode = event.keyCode,
        ctrlKey = event.ctrlKey,
        metaKey = event.metaKey;
    var activeItems = this._store.activeItems;
    var hasFocusedInput = this.input.isFocussed;
    var hasActiveDropdown = this.dropdown.isActive;
    var hasItems = this.itemList.hasChildren();
    var keyString = String.fromCharCode(keyCode);
    var BACK_KEY = KEY_CODES.BACK_KEY,
        DELETE_KEY = KEY_CODES.DELETE_KEY,
        ENTER_KEY = KEY_CODES.ENTER_KEY,
        A_KEY = KEY_CODES.A_KEY,
        ESC_KEY = KEY_CODES.ESC_KEY,
        UP_KEY = KEY_CODES.UP_KEY,
        DOWN_KEY = KEY_CODES.DOWN_KEY,
        PAGE_UP_KEY = KEY_CODES.PAGE_UP_KEY,
        PAGE_DOWN_KEY = KEY_CODES.PAGE_DOWN_KEY;
    var hasCtrlDownKeyPressed = ctrlKey || metaKey; // If a user is typing and the dropdown is not active

    if (!this._isTextElement && /[a-zA-Z0-9-_ ]/.test(keyString)) {
      this.showDropdown();
    } // Map keys to key actions


    var keyDownActions = (_keyDownActions = {}, _keyDownActions[A_KEY] = this._onAKey, _keyDownActions[ENTER_KEY] = this._onEnterKey, _keyDownActions[ESC_KEY] = this._onEscapeKey, _keyDownActions[UP_KEY] = this._onDirectionKey, _keyDownActions[PAGE_UP_KEY] = this._onDirectionKey, _keyDownActions[DOWN_KEY] = this._onDirectionKey, _keyDownActions[PAGE_DOWN_KEY] = this._onDirectionKey, _keyDownActions[DELETE_KEY] = this._onDeleteKey, _keyDownActions[BACK_KEY] = this._onDeleteKey, _keyDownActions); // If keycode has a function, run it

    if (keyDownActions[keyCode]) {
      keyDownActions[keyCode]({
        event: event,
        target: target,
        keyCode: keyCode,
        metaKey: metaKey,
        activeItems: activeItems,
        hasFocusedInput: hasFocusedInput,
        hasActiveDropdown: hasActiveDropdown,
        hasItems: hasItems,
        hasCtrlDownKeyPressed: hasCtrlDownKeyPressed
      });
    }
  };

  _proto._onKeyUp = function _onKeyUp(_ref2) {
    var target = _ref2.target,
        keyCode = _ref2.keyCode;
    var value = this.input.value;
    var activeItems = this._store.activeItems;

    var canAddItem = this._canAddItem(activeItems, value);

    var backKey = KEY_CODES.BACK_KEY,
        deleteKey = KEY_CODES.DELETE_KEY; // We are typing into a text input and have a value, we want to show a dropdown
    // notice. Otherwise hide the dropdown

    if (this._isTextElement) {
      var canShowDropdownNotice = canAddItem.notice && value;

      if (canShowDropdownNotice) {
        var dropdownItem = this._getTemplate('notice', canAddItem.notice);

        this.dropdown.element.innerHTML = dropdownItem.outerHTML;
        this.showDropdown(true);
      } else {
        this.hideDropdown(true);
      }
    } else {
      var userHasRemovedValue = (keyCode === backKey || keyCode === deleteKey) && !target.value;
      var canReactivateChoices = !this._isTextElement && this._isSearching;
      var canSearch = this._canSearch && canAddItem.response;

      if (userHasRemovedValue && canReactivateChoices) {
        this._isSearching = false;

        this._store.dispatch(choices_activateChoices(true));
      } else if (canSearch) {
        this._handleSearch(this.input.value);
      }
    }

    this._canSearch = this.config.searchEnabled;
  };

  _proto._onAKey = function _onAKey(_ref3) {
    var hasItems = _ref3.hasItems,
        hasCtrlDownKeyPressed = _ref3.hasCtrlDownKeyPressed;

    // If CTRL + A or CMD + A have been pressed and there are items to select
    if (hasCtrlDownKeyPressed && hasItems) {
      this._canSearch = false;
      var shouldHightlightAll = this.config.removeItems && !this.input.value && this.input.element === document.activeElement;

      if (shouldHightlightAll) {
        this.highlightAll();
      }
    }
  };

  _proto._onEnterKey = function _onEnterKey(_ref4) {
    var event = _ref4.event,
        target = _ref4.target,
        activeItems = _ref4.activeItems,
        hasActiveDropdown = _ref4.hasActiveDropdown;
    var enterKey = KEY_CODES.ENTER_KEY;
    var targetWasButton = target.hasAttribute('data-button');

    if (this._isTextElement && target.value) {
      var value = this.input.value;

      var canAddItem = this._canAddItem(activeItems, value);

      if (canAddItem.response) {
        this.hideDropdown(true);

        this._addItem({
          value: value
        });

        this._triggerChange(value);

        this.clearInput();
      }
    }

    if (targetWasButton) {
      this._handleButtonAction(activeItems, target);

      event.preventDefault();
    }

    if (hasActiveDropdown) {
      var highlightedChoice = this.dropdown.getChild("." + this.config.classNames.highlightedState);

      if (highlightedChoice) {
        // add enter keyCode value
        if (activeItems[0]) {
          activeItems[0].keyCode = enterKey; // eslint-disable-line no-param-reassign
        }

        this._handleChoiceAction(activeItems, highlightedChoice);
      }

      event.preventDefault();
    } else if (this._isSelectOneElement) {
      this.showDropdown();
      event.preventDefault();
    }
  };

  _proto._onEscapeKey = function _onEscapeKey(_ref5) {
    var hasActiveDropdown = _ref5.hasActiveDropdown;

    if (hasActiveDropdown) {
      this.hideDropdown(true);
      this.containerOuter.focus();
    }
  };

  _proto._onDirectionKey = function _onDirectionKey(_ref6) {
    var event = _ref6.event,
        hasActiveDropdown = _ref6.hasActiveDropdown,
        keyCode = _ref6.keyCode,
        metaKey = _ref6.metaKey;
    var downKey = KEY_CODES.DOWN_KEY,
        pageUpKey = KEY_CODES.PAGE_UP_KEY,
        pageDownKey = KEY_CODES.PAGE_DOWN_KEY; // If up or down key is pressed, traverse through options

    if (hasActiveDropdown || this._isSelectOneElement) {
      this.showDropdown();
      this._canSearch = false;
      var directionInt = keyCode === downKey || keyCode === pageDownKey ? 1 : -1;
      var skipKey = metaKey || keyCode === pageDownKey || keyCode === pageUpKey;
      var selectableChoiceIdentifier = '[data-choice-selectable]';
      var nextEl;

      if (skipKey) {
        if (directionInt > 0) {
          nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier + ":last-of-type");
        } else {
          nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
        }
      } else {
        var currentEl = this.dropdown.element.querySelector("." + this.config.classNames.highlightedState);

        if (currentEl) {
          nextEl = getAdjacentEl(currentEl, selectableChoiceIdentifier, directionInt);
        } else {
          nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
        }
      }

      if (nextEl) {
        // We prevent default to stop the cursor moving
        // when pressing the arrow
        if (!isScrolledIntoView(nextEl, this.choiceList.element, directionInt)) {
          this.choiceList.scrollToChildElement(nextEl, directionInt);
        }

        this._highlightChoice(nextEl);
      } // Prevent default to maintain cursor position whilst
      // traversing dropdown options


      event.preventDefault();
    }
  };

  _proto._onDeleteKey = function _onDeleteKey(_ref7) {
    var event = _ref7.event,
        target = _ref7.target,
        hasFocusedInput = _ref7.hasFocusedInput,
        activeItems = _ref7.activeItems;

    // If backspace or delete key is pressed and the input has no value
    if (hasFocusedInput && !target.value && !this._isSelectOneElement) {
      this._handleBackspace(activeItems);

      event.preventDefault();
    }
  };

  _proto._onTouchMove = function _onTouchMove() {
    if (this._wasTap) {
      this._wasTap = false;
    }
  };

  _proto._onTouchEnd = function _onTouchEnd(event) {
    var _ref8 = event || event.touches[0],
        target = _ref8.target;

    var touchWasWithinContainer = this._wasTap && this.containerOuter.element.contains(target);

    if (touchWasWithinContainer) {
      var containerWasExactTarget = target === this.containerOuter.element || target === this.containerInner.element;

      if (containerWasExactTarget) {
        if (this._isTextElement) {
          this.input.focus();
        } else if (this._isSelectMultipleElement) {
          this.showDropdown();
        }
      } // Prevents focus event firing


      event.stopPropagation();
    }

    this._wasTap = true;
  }
  /**
   * Handles mousedown event in capture mode for containetOuter.element
   * @param {MouseEvent} event
   */
  ;

  _proto._onMouseDown = function _onMouseDown(event) {
    var target = event.target;

    if (!(target instanceof HTMLElement)) {
      return;
    } // If we have our mouse down on the scrollbar and are on IE11...


    if (IS_IE11 && this.choiceList.element.contains(target)) {
      // check if click was on a scrollbar area
      var firstChoice =
      /** @type {HTMLElement} */
      this.choiceList.element.firstElementChild;
      var isOnScrollbar = this._direction === 'ltr' ? event.offsetX >= firstChoice.offsetWidth : event.offsetX < firstChoice.offsetLeft;
      this._isScrollingOnIe = isOnScrollbar;
    }

    if (target === this.input.element) {
      return;
    }

    var item = target.closest('[data-button],[data-item],[data-choice]');

    if (item instanceof HTMLElement) {
      var hasShiftKey = event.shiftKey;
      var activeItems = this._store.activeItems;
      var dataset = item.dataset;

      if ('button' in dataset) {
        this._handleButtonAction(activeItems, item);
      } else if ('item' in dataset) {
        this._handleItemAction(activeItems, item, hasShiftKey);
      } else if ('choice' in dataset) {
        this._handleChoiceAction(activeItems, item);
      }
    }

    event.preventDefault();
  }
  /**
   * Handles mouseover event over this.dropdown
   * @param {MouseEvent} event
   */
  ;

  _proto._onMouseOver = function _onMouseOver(_ref9) {
    var target = _ref9.target;

    if (target instanceof HTMLElement && 'choice' in target.dataset) {
      this._highlightChoice(target);
    }
  };

  _proto._onClick = function _onClick(_ref10) {
    var target = _ref10.target;
    var clickWasWithinContainer = this.containerOuter.element.contains(target);

    if (clickWasWithinContainer) {
      if (!this.dropdown.isActive && !this.containerOuter.isDisabled) {
        if (this._isTextElement) {
          if (document.activeElement !== this.input.element) {
            this.input.focus();
          }
        } else {
          this.showDropdown();
          this.containerOuter.focus();
        }
      } else if (this._isSelectOneElement && target !== this.input.element && !this.dropdown.element.contains(target)) {
        this.hideDropdown();
      }
    } else {
      var hasHighlightedItems = this._store.highlightedActiveItems.length > 0;

      if (hasHighlightedItems) {
        this.unhighlightAll();
      }

      this.containerOuter.removeFocusState();
      this.hideDropdown(true);
    }
  };

  _proto._onFocus = function _onFocus(_ref11) {
    var _this17 = this,
        _focusActions;

    var target = _ref11.target;
    var focusWasWithinContainer = this.containerOuter.element.contains(target);

    if (!focusWasWithinContainer) {
      return;
    }

    var focusActions = (_focusActions = {}, _focusActions[TEXT_TYPE] = function () {
      if (target === _this17.input.element) {
        _this17.containerOuter.addFocusState();
      }
    }, _focusActions[SELECT_ONE_TYPE] = function () {
      _this17.containerOuter.addFocusState();

      if (target === _this17.input.element) {
        _this17.showDropdown(true);
      }
    }, _focusActions[SELECT_MULTIPLE_TYPE] = function () {
      if (target === _this17.input.element) {
        _this17.showDropdown(true); // If element is a select box, the focused element is the container and the dropdown
        // isn't already open, focus and show dropdown


        _this17.containerOuter.addFocusState();
      }
    }, _focusActions);
    focusActions[this.passedElement.element.type]();
  };

  _proto._onBlur = function _onBlur(_ref12) {
    var _this18 = this;

    var target = _ref12.target;
    var blurWasWithinContainer = this.containerOuter.element.contains(target);

    if (blurWasWithinContainer && !this._isScrollingOnIe) {
      var _blurActions;

      var activeItems = this._store.activeItems;
      var hasHighlightedItems = activeItems.some(function (item) {
        return item.highlighted;
      });
      var blurActions = (_blurActions = {}, _blurActions[TEXT_TYPE] = function () {
        if (target === _this18.input.element) {
          _this18.containerOuter.removeFocusState();

          if (hasHighlightedItems) {
            _this18.unhighlightAll();
          }

          _this18.hideDropdown(true);
        }
      }, _blurActions[SELECT_ONE_TYPE] = function () {
        _this18.containerOuter.removeFocusState();

        if (target === _this18.input.element || target === _this18.containerOuter.element && !_this18._canSearch) {
          _this18.hideDropdown(true);
        }
      }, _blurActions[SELECT_MULTIPLE_TYPE] = function () {
        if (target === _this18.input.element) {
          _this18.containerOuter.removeFocusState();

          _this18.hideDropdown(true);

          if (hasHighlightedItems) {
            _this18.unhighlightAll();
          }
        }
      }, _blurActions);
      blurActions[this.passedElement.element.type]();
    } else {
      // On IE11, clicking the scollbar blurs our input and thus
      // closes the dropdown. To stop this, we refocus our input
      // if we know we are on IE *and* are scrolling.
      this._isScrollingOnIe = false;
      this.input.element.focus();
    }
  };

  _proto._onFormReset = function _onFormReset() {
    this._store.dispatch(resetTo(this._initialState));
  };

  _proto._highlightChoice = function _highlightChoice(el) {
    var _this19 = this;

    if (el === void 0) {
      el = null;
    }

    var choices = Array.from(this.dropdown.element.querySelectorAll('[data-choice-selectable]'));

    if (!choices.length) {
      return;
    }

    var passedEl = el;
    var highlightedChoices = Array.from(this.dropdown.element.querySelectorAll("." + this.config.classNames.highlightedState)); // Remove any highlighted choices

    highlightedChoices.forEach(function (choice) {
      choice.classList.remove(_this19.config.classNames.highlightedState);
      choice.setAttribute('aria-selected', 'false');
    });

    if (passedEl) {
      this._highlightPosition = choices.indexOf(passedEl);
    } else {
      // Highlight choice based on last known highlight location
      if (choices.length > this._highlightPosition) {
        // If we have an option to highlight
        passedEl = choices[this._highlightPosition];
      } else {
        // Otherwise highlight the option before
        passedEl = choices[choices.length - 1];
      }

      if (!passedEl) {
        passedEl = choices[0];
      }
    }

    passedEl.classList.add(this.config.classNames.highlightedState);
    passedEl.setAttribute('aria-selected', 'true');
    this.passedElement.triggerEvent(EVENTS.highlightChoice, {
      el: passedEl
    });

    if (this.dropdown.isActive) {
      // IE11 ignores aria-label and blocks virtual keyboard
      // if aria-activedescendant is set without a dropdown
      this.input.setActiveDescendant(passedEl.id);
      this.containerOuter.setActiveDescendant(passedEl.id);
    }
  };

  _proto._addItem = function _addItem(_ref13) {
    var value = _ref13.value,
        _ref13$label = _ref13.label,
        label = _ref13$label === void 0 ? null : _ref13$label,
        _ref13$choiceId = _ref13.choiceId,
        choiceId = _ref13$choiceId === void 0 ? -1 : _ref13$choiceId,
        _ref13$groupId = _ref13.groupId,
        groupId = _ref13$groupId === void 0 ? -1 : _ref13$groupId,
        _ref13$customProperti = _ref13.customProperties,
        customProperties = _ref13$customProperti === void 0 ? null : _ref13$customProperti,
        _ref13$placeholder = _ref13.placeholder,
        placeholder = _ref13$placeholder === void 0 ? false : _ref13$placeholder,
        _ref13$keyCode = _ref13.keyCode,
        keyCode = _ref13$keyCode === void 0 ? null : _ref13$keyCode;
    var passedValue = typeof value === 'string' ? value.trim() : value;
    var passedKeyCode = keyCode;
    var passedCustomProperties = customProperties;
    var items = this._store.items;
    var passedLabel = label || passedValue;
    var passedOptionId = choiceId || -1;
    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
    var id = items ? items.length + 1 : 1; // If a prepended value has been passed, prepend it

    if (this.config.prependValue) {
      passedValue = this.config.prependValue + passedValue.toString();
    } // If an appended value has been passed, append it


    if (this.config.appendValue) {
      passedValue += this.config.appendValue.toString();
    }

    this._store.dispatch(items_addItem({
      value: passedValue,
      label: passedLabel,
      id: id,
      choiceId: passedOptionId,
      groupId: groupId,
      customProperties: customProperties,
      placeholder: placeholder,
      keyCode: passedKeyCode
    }));

    if (this._isSelectOneElement) {
      this.removeActiveItems(id);
    } // Trigger change event


    this.passedElement.triggerEvent(EVENTS.addItem, {
      id: id,
      value: passedValue,
      label: passedLabel,
      customProperties: passedCustomProperties,
      groupValue: group && group.value ? group.value : undefined,
      keyCode: passedKeyCode
    });
    return this;
  };

  _proto._removeItem = function _removeItem(item) {
    if (!item || !isType('Object', item)) {
      return this;
    }

    var id = item.id,
        value = item.value,
        label = item.label,
        choiceId = item.choiceId,
        groupId = item.groupId;
    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;

    this._store.dispatch(items_removeItem(id, choiceId));

    if (group && group.value) {
      this.passedElement.triggerEvent(EVENTS.removeItem, {
        id: id,
        value: value,
        label: label,
        groupValue: group.value
      });
    } else {
      this.passedElement.triggerEvent(EVENTS.removeItem, {
        id: id,
        value: value,
        label: label
      });
    }

    return this;
  };

  _proto._addChoice = function _addChoice(_ref14) {
    var value = _ref14.value,
        _ref14$label = _ref14.label,
        label = _ref14$label === void 0 ? null : _ref14$label,
        _ref14$isSelected = _ref14.isSelected,
        isSelected = _ref14$isSelected === void 0 ? false : _ref14$isSelected,
        _ref14$isDisabled = _ref14.isDisabled,
        isDisabled = _ref14$isDisabled === void 0 ? false : _ref14$isDisabled,
        _ref14$groupId = _ref14.groupId,
        groupId = _ref14$groupId === void 0 ? -1 : _ref14$groupId,
        _ref14$customProperti = _ref14.customProperties,
        customProperties = _ref14$customProperti === void 0 ? null : _ref14$customProperti,
        _ref14$placeholder = _ref14.placeholder,
        placeholder = _ref14$placeholder === void 0 ? false : _ref14$placeholder,
        _ref14$keyCode = _ref14.keyCode,
        keyCode = _ref14$keyCode === void 0 ? null : _ref14$keyCode;

    if (typeof value === 'undefined' || value === null) {
      return;
    } // Generate unique id


    var choices = this._store.choices;
    var choiceLabel = label || value;
    var choiceId = choices ? choices.length + 1 : 1;
    var choiceElementId = this._baseId + "-" + this._idNames.itemChoice + "-" + choiceId;

    this._store.dispatch(choices_addChoice({
      id: choiceId,
      groupId: groupId,
      elementId: choiceElementId,
      value: value,
      label: choiceLabel,
      disabled: isDisabled,
      customProperties: customProperties,
      placeholder: placeholder,
      keyCode: keyCode
    }));

    if (isSelected) {
      this._addItem({
        value: value,
        label: choiceLabel,
        choiceId: choiceId,
        customProperties: customProperties,
        placeholder: placeholder,
        keyCode: keyCode
      });
    }
  };

  _proto._addGroup = function _addGroup(_ref15) {
    var _this20 = this;

    var group = _ref15.group,
        id = _ref15.id,
        _ref15$valueKey = _ref15.valueKey,
        valueKey = _ref15$valueKey === void 0 ? 'value' : _ref15$valueKey,
        _ref15$labelKey = _ref15.labelKey,
        labelKey = _ref15$labelKey === void 0 ? 'label' : _ref15$labelKey;
    var groupChoices = isType('Object', group) ? group.choices : Array.from(group.getElementsByTagName('OPTION'));
    var groupId = id || Math.floor(new Date().valueOf() * Math.random());
    var isDisabled = group.disabled ? group.disabled : false;

    if (groupChoices) {
      this._store.dispatch(groups_addGroup({
        value: group.label,
        id: groupId,
        active: true,
        disabled: isDisabled
      }));

      var addGroupChoices = function addGroupChoices(choice) {
        var isOptDisabled = choice.disabled || choice.parentNode && choice.parentNode.disabled;

        _this20._addChoice({
          value: choice[valueKey],
          label: isType('Object', choice) ? choice[labelKey] : choice.innerHTML,
          isSelected: choice.selected,
          isDisabled: isOptDisabled,
          groupId: groupId,
          customProperties: choice.customProperties,
          placeholder: choice.placeholder
        });
      };

      groupChoices.forEach(addGroupChoices);
    } else {
      this._store.dispatch(groups_addGroup({
        value: group.label,
        id: group.id,
        active: false,
        disabled: group.disabled
      }));
    }
  };

  _proto._getTemplate = function _getTemplate(template) {
    var _this$_templates$temp;

    if (!template) {
      return null;
    }

    var classNames = this.config.classNames;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return (_this$_templates$temp = this._templates[template]).call.apply(_this$_templates$temp, [this, classNames].concat(args));
  };

  _proto._createTemplates = function _createTemplates() {
    var callbackOnCreateTemplates = this.config.callbackOnCreateTemplates;
    var userTemplates = {};

    if (callbackOnCreateTemplates && typeof callbackOnCreateTemplates === 'function') {
      userTemplates = callbackOnCreateTemplates.call(this, strToEl);
    }

    this._templates = cjs_default()(TEMPLATES, userTemplates);
  };

  _proto._createElements = function _createElements() {
    this.containerOuter = new container_Container({
      element: this._getTemplate('containerOuter', this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type),
      classNames: this.config.classNames,
      type: this.passedElement.element.type,
      position: this.config.position
    });
    this.containerInner = new container_Container({
      element: this._getTemplate('containerInner'),
      classNames: this.config.classNames,
      type: this.passedElement.element.type,
      position: this.config.position
    });
    this.input = new input_Input({
      element: this._getTemplate('input', this._placeholderValue),
      classNames: this.config.classNames,
      type: this.passedElement.element.type,
      preventPaste: !this.config.paste
    });
    this.choiceList = new list_List({
      element: this._getTemplate('choiceList', this._isSelectOneElement)
    });
    this.itemList = new list_List({
      element: this._getTemplate('itemList', this._isSelectOneElement)
    });
    this.dropdown = new Dropdown({
      element: this._getTemplate('dropdown'),
      classNames: this.config.classNames,
      type: this.passedElement.element.type
    });
  };

  _proto._createStructure = function _createStructure() {
    // Hide original element
    this.passedElement.conceal(); // Wrap input in container preserving DOM ordering

    this.containerInner.wrap(this.passedElement.element); // Wrapper inner container with outer container

    this.containerOuter.wrap(this.containerInner.element);

    if (this._isSelectOneElement) {
      this.input.placeholder = this.config.searchPlaceholderValue || '';
    } else if (this._placeholderValue) {
      this.input.placeholder = this._placeholderValue;
      this.input.setWidth();
    }

    this.containerOuter.element.appendChild(this.containerInner.element);
    this.containerOuter.element.appendChild(this.dropdown.element);
    this.containerInner.element.appendChild(this.itemList.element);

    if (!this._isTextElement) {
      this.dropdown.element.appendChild(this.choiceList.element);
    }

    if (!this._isSelectOneElement) {
      this.containerInner.element.appendChild(this.input.element);
    } else if (this.config.searchEnabled) {
      this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild);
    }

    if (this._isSelectElement) {
      this._highlightPosition = 0;
      this._isSearching = false;

      this._startLoading();

      if (this._presetGroups.length) {
        this._addPredefinedGroups(this._presetGroups);
      } else {
        this._addPredefinedChoices(this._presetChoices);
      }

      this._stopLoading();
    }

    if (this._isTextElement) {
      this._addPredefinedItems(this._presetItems);
    }
  };

  _proto._addPredefinedGroups = function _addPredefinedGroups(groups) {
    var _this21 = this;

    // If we have a placeholder option
    var placeholderChoice = this.passedElement.placeholderOption;

    if (placeholderChoice && placeholderChoice.parentNode.tagName === 'SELECT') {
      this._addChoice({
        value: placeholderChoice.value,
        label: placeholderChoice.innerHTML,
        isSelected: placeholderChoice.selected,
        isDisabled: placeholderChoice.disabled,
        placeholder: true
      });
    }

    groups.forEach(function (group) {
      return _this21._addGroup({
        group: group,
        id: group.id || null
      });
    });
  };

  _proto._addPredefinedChoices = function _addPredefinedChoices(choices) {
    var _this22 = this;

    // If sorting is enabled or the user is searching, filter choices
    if (this.config.shouldSort) {
      choices.sort(this.config.sorter);
    }

    var hasSelectedChoice = choices.some(function (choice) {
      return choice.selected;
    });
    var firstEnabledChoiceIndex = choices.findIndex(function (choice) {
      return choice.disabled === undefined || !choice.disabled;
    });
    choices.forEach(function (choice, index) {
      var value = choice.value,
          label = choice.label,
          customProperties = choice.customProperties,
          placeholder = choice.placeholder;

      if (_this22._isSelectElement) {
        // If the choice is actually a group
        if (choice.choices) {
          _this22._addGroup({
            group: choice,
            id: choice.id || null
          });
        } else {
          /**
           * If there is a selected choice already or the choice is not the first in
           * the array, add each choice normally.
           *
           * Otherwise we pre-select the first enabled choice in the array ("select-one" only)
           */
          var shouldPreselect = _this22._isSelectOneElement && !hasSelectedChoice && index === firstEnabledChoiceIndex;
          var isSelected = shouldPreselect ? true : choice.selected;
          var isDisabled = choice.disabled;

          _this22._addChoice({
            value: value,
            label: label,
            isSelected: isSelected,
            isDisabled: isDisabled,
            customProperties: customProperties,
            placeholder: placeholder
          });
        }
      } else {
        _this22._addChoice({
          value: value,
          label: label,
          isSelected: choice.selected,
          isDisabled: choice.disabled,
          customProperties: customProperties,
          placeholder: placeholder
        });
      }
    });
  }
  /**
   * @param {Item[]} items
   */
  ;

  _proto._addPredefinedItems = function _addPredefinedItems(items) {
    var _this23 = this;

    items.forEach(function (item) {
      if (typeof item === 'object' && item.value) {
        _this23._addItem({
          value: item.value,
          label: item.label,
          choiceId: item.id,
          customProperties: item.customProperties,
          placeholder: item.placeholder
        });
      }

      if (typeof item === 'string') {
        _this23._addItem({
          value: item
        });
      }
    });
  };

  _proto._setChoiceOrItem = function _setChoiceOrItem(item) {
    var _this24 = this;

    var itemType = getType(item).toLowerCase();
    var handleType = {
      object: function object() {
        if (!item.value) {
          return;
        } // If we are dealing with a select input, we need to create an option first
        // that is then selected. For text inputs we can just add items normally.


        if (!_this24._isTextElement) {
          _this24._addChoice({
            value: item.value,
            label: item.label,
            isSelected: true,
            isDisabled: false,
            customProperties: item.customProperties,
            placeholder: item.placeholder
          });
        } else {
          _this24._addItem({
            value: item.value,
            label: item.label,
            choiceId: item.id,
            customProperties: item.customProperties,
            placeholder: item.placeholder
          });
        }
      },
      string: function string() {
        if (!_this24._isTextElement) {
          _this24._addChoice({
            value: item,
            label: item,
            isSelected: true,
            isDisabled: false
          });
        } else {
          _this24._addItem({
            value: item
          });
        }
      }
    };
    handleType[itemType]();
  };

  _proto._findAndSelectChoiceByValue = function _findAndSelectChoiceByValue(val) {
    var _this25 = this;

    var choices = this._store.choices; // Check 'value' property exists and the choice isn't already selected

    var foundChoice = choices.find(function (choice) {
      return _this25.config.valueComparer(choice.value, val);
    });

    if (foundChoice && !foundChoice.selected) {
      this._addItem({
        value: foundChoice.value,
        label: foundChoice.label,
        choiceId: foundChoice.id,
        groupId: foundChoice.groupId,
        customProperties: foundChoice.customProperties,
        placeholder: foundChoice.placeholder,
        keyCode: foundChoice.keyCode
      });
    }
  };

  _proto._generatePlaceholderValue = function _generatePlaceholderValue() {
    if (this._isSelectElement) {
      var placeholderOption = this.passedElement.placeholderOption;
      return placeholderOption ? placeholderOption.text : false;
    }

    var _this$config4 = this.config,
        placeholder = _this$config4.placeholder,
        placeholderValue = _this$config4.placeholderValue;
    var dataset = this.passedElement.element.dataset;

    if (placeholder) {
      if (placeholderValue) {
        return placeholderValue;
      }

      if (dataset.placeholder) {
        return dataset.placeholder;
      }
    }

    return false;
  };

  return Choices;
}();

/* harmony default export */ var scripts_choices = __webpack_exports__["default"] = (choices_Choices);

/***/ })
/******/ ])["default"];
});

/***/ }),

/***/ "./node_modules/choices.js/public/assets/styles/choices.css":
/*!******************************************************************!*\
  !*** ./node_modules/choices.js/public/assets/styles/choices.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/popup.css":
/*!***********************!*\
  !*** ./src/popup.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popup_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.css */ "./src/popup.css");
/* harmony import */ var _popup_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_popup_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var choices_js_public_assets_styles_choices_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choices.js/public/assets/styles/choices.css */ "./node_modules/choices.js/public/assets/styles/choices.css");
/* harmony import */ var choices_js_public_assets_styles_choices_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(choices_js_public_assets_styles_choices_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_2__);






(function() {
  var currencyFrom = 'usd'
  var currencyTo = 'idr'

  var listCountry = [
    "EUR",
    "USD",
    "GBP",
    "INR",
    "CAD",
    "AUD",
    "CHF",
    "MXN",
    "FJD",
    "SCR",
    "BBD",
    "GTQ",
    "CLP",
    "HNL",
    "UGX",
    "ZAR",
    "TND",
    "BSD",
    "SLL",
    "GMD",
    "TWD",
    "RSD",
    "DOP",
    "KMF",
    "MYR",
    "FKP",
    "XOF",
    "GEL",
    "UYU",
    "MAD",
    "CVE",
    "TOP",
    "AZN",
    "OMR",
    "PGK",
    "KES",
    "SEK",
    "BTN",
    "UAH",
    "GNF",
    "MZN",
    "SVC",
    "ARS",
    "QAR",
    "CNY",
    "THB",
    "UZS",
    "XPF",
    "MRU",
    "BDT",
    "BMD",
    "KWD",
    "PHP",
    "RUB",
    "PYG",
    "ISK",
    "JMD",
    "COP",
    "MKD",
    "DZD",
    "PAB",
    "GGP",
    "SGD",
    "ETB",
    "JEP",
    "KGS",
    "VUV",
    "LAK",
    "BND",
    "XAF",
    "LRD",
    "HRK",
    "ALL",
    "DJF",
    "ZMW",
    "TZS",
    "VND",
    "ILS",
    "GHS",
    "GYD",
    "BOB",
    "KHR",
    "MDL",
    "IDR",
    "KYD",
    "AMD",
    "BWP",
    "SHP",
    "TRY",
    "LBP",
    "TJS",
    "JOD",
    "AED",
    "HKD",
    "RWF",
    "LSL",
    "DKK",
    "BGN",
    "MMK",
    "MUR",
    "NOK",
    "IMP",
    "GIP",
    "RON",
    "LKR",
    "NGN",
    "CRC",
    "CZK",
    "PKR",
    "XCD",
    "ANG",
    "HTG",
    "BHD",
    "KZT",
    "SRD",
    "SZL",
    "SAR",
    "TTD",
    "MVR",
    "AWG",
    "KRW",
    "NPR",
    "JPY",
    "MNT",
    "AOA",
    "PLN",
    "SBD",
    "BYN",
    "HUF",
    "MWK",
    "MGA",
    "BZD",
    "BAM",
    "EGP",
    "MOP",
    "NAD",
    "NIO",
    "PEN",
    "NZD",
    "WST",
    "TMT",
    "BRL"
  ]

  function setDropDown () {
    for (const element of listCountry) {
      let option = document.createElement('option');
      option.value = element.toLowerCase()
      option.innerHTML = element

      let cloneOption = option.cloneNode(true)

      getCurrencyFrom().appendChild(option)
      getCurrencyTo().appendChild(cloneOption)
    }
  }

  async function setValueDropDown () {
    let result = await getCurrency()

    if (result && result.currency) {
      if (result.currency.currency_from) {
        currencyFrom = result.currency.currency_from
        getCurrencyFrom().value = currencyFrom
      }

      if (result.currency.currency_to) {
        currencyTo = result.currency.currency_to
        getCurrencyTo().value = currencyTo
      }
    }

    setChoiceLib()
  }

  function getCurrencyFrom() {
    return document.getElementById('currency_from_tf')
  }

  function getCurrencyTo() {
    return document.getElementById('currency_to_tf')
  }

  function setChoiceLib () {
    new choices_js__WEBPACK_IMPORTED_MODULE_2___default.a(getCurrencyFrom(), {
      searchResultLimit: 1,
      position: 'bottom',
      renderChoiceLimit: 1
    })

    getCurrencyFrom().addEventListener(
      'choice',
      function(event) {
        currencyFrom = event.detail.choice.value
      },
      false,
    );

    new choices_js__WEBPACK_IMPORTED_MODULE_2___default.a(getCurrencyTo(), {
      searchResultLimit: 1,
      position: 'bottom',
      renderChoiceLimit: 1
    })

    getCurrencyTo().addEventListener(
      'choice',
      function(event) {
        currencyTo = event.detail.choice.value
      },
      false,
    );
  }

  function getCurrency () {
    return new Promise(resolve => {
      chrome.storage.local.get('currency', function(result) {
        resolve(result)
      });
    })
  }

  function setStorage () {
    chrome.storage.local.set({
      currency: {
        currency_from: getCurrencyFrom().value,
        currency_to: getCurrencyTo().value,
      }
    }, sendMessageToBackground())
  }

  function sendMessageToBackground () {
    chrome.runtime.sendMessage({type: "UPDATE_CURRENCY"}, function(_response) {});
  }

  function getUrl() {
    return `https://transferwise.com/gb/currency-converter/${currencyFrom}-to-${currencyTo}-rate`
  }

  document.addEventListener('DOMContentLoaded', function() {
    if (getCurrencyFrom() && getCurrencyTo()) {
      setDropDown()
      setValueDropDown()

      document.getElementById('apply').addEventListener('click', function() {
        setStorage()
      });

      document.getElementById('check-link').addEventListener('click', function() {
        window.open(getUrl());
      });
    }
  });
})();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nob2ljZXMuanMvcHVibGljL2Fzc2V0cy9zY3JpcHRzL2Nob2ljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nob2ljZXMuanMvcHVibGljL2Fzc2V0cy9zdHlsZXMvY2hvaWNlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcHVwLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wdXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQSxJQUFJLElBQXlEO0FBQzdEO0FBQ0EsTUFBTSxFQUt3QjtBQUM5QixDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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WTtBQUN2QixhQUFhLFNBQVM7QUFDdEI7O0FBRUE7QUFDQSw0RUFBNEUsYUFBYTtBQUN6RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsV0FBVyxFQUFFOzs7O0FBSWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDs7O0FBR0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07O0FBRU4seURBQXlEOztBQUV6RCxxREFBcUQ7O0FBRXJELDhDQUE4Qzs7QUFFOUMsMENBQTBDOztBQUUxQztBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLDRCQUE0QjtBQUM1Qjs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0I7QUFDL0I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwrREFBK0Q7QUFDL0QsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0RBQStEO0FBQy9ELEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNEQUFzRDtBQUNuRTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTCw2REFBNkQ7O0FBRTdEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlFQUFpRTtBQUNqRixhQUFhLEVBQUU7QUFDZixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBaUQ7QUFDekQsUUFBUSxpREFBaUQ7QUFDekQsUUFBUSxxQ0FBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHVEQUF1RDtBQUNqRSxVQUFVLHdEQUF3RDtBQUNsRSxVQUFVLDJDQUEyQztBQUNyRDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSx5REFBeUQ7QUFDbkUsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVTtBQUNWO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7O0FBR1A7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUEsdUVBQXVFOzs7QUFHdkU7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQSxrRUFBa0U7OztBQUdsRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQLE1BQU07OztBQUdOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDREQUE0RDs7O0FBRzVEO0FBQ0E7QUFDQTs7QUFFQSxpREFBaUQ7O0FBRWpEOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOzs7QUFHTCxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7O0FBRTFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwRUFBMEU7OztBQUcxRTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1EQUFtRDtBQUNuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSyxFQUFFO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQ7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUDtBQUNBLHVFQUF1RTs7QUFFdkU7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBLHVGQUF1Rjs7QUFFdkY7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGNBQWM7QUFDM0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQTtBQUNBLEtBQUs7OztBQUdMLDhDQUE4QyxxY0FBcWM7O0FBRW5mO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EseUNBQXlDO0FBQ3pDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsV0FBVztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsV0FBVztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbUNBQW1DO0FBQ25DOzs7QUFHQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLDBDQUEwQztBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrSEFBK0g7O0FBRS9IO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLDBGQUEwRixhQUFhO0FBQ3ZHO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQzs7QUFFakMseURBQXlEOztBQUV6RDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsT0FBTztBQUNQO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7OztBQ2wrS0QsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWE7O0FBRVE7QUFDZ0M7QUFDcEI7O0FBRWpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLGlEQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBLFFBQVEsaURBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsZ0NBQWdDLHdCQUF3Qix3QkFBd0I7QUFDaEY7O0FBRUE7QUFDQSw2REFBNkQsYUFBYSxNQUFNLFdBQVc7QUFDM0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSCxDQUFDIiwiZmlsZSI6InBvcHVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcG9wdXAuanNcIik7XG4iLCIvKiEgY2hvaWNlcy5qcyB2OS4wLjEgfCDCqSAyMDE5IEpvc2ggSm9obnNvbiB8IGh0dHBzOi8vZ2l0aHViLmNvbS9qc2hqb2huc29uL0Nob2ljZXMjcmVhZG1lICovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJDaG9pY2VzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkNob2ljZXNcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvcHVibGljL2Fzc2V0cy9zY3JpcHRzL1wiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIGlzTWVyZ2VhYmxlT2JqZWN0ID0gZnVuY3Rpb24gaXNNZXJnZWFibGVPYmplY3QodmFsdWUpIHtcblx0cmV0dXJuIGlzTm9uTnVsbE9iamVjdCh2YWx1ZSlcblx0XHQmJiAhaXNTcGVjaWFsKHZhbHVlKVxufTtcblxuZnVuY3Rpb24gaXNOb25OdWxsT2JqZWN0KHZhbHVlKSB7XG5cdHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbn1cblxuZnVuY3Rpb24gaXNTcGVjaWFsKHZhbHVlKSB7XG5cdHZhciBzdHJpbmdWYWx1ZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG5cblx0cmV0dXJuIHN0cmluZ1ZhbHVlID09PSAnW29iamVjdCBSZWdFeHBdJ1xuXHRcdHx8IHN0cmluZ1ZhbHVlID09PSAnW29iamVjdCBEYXRlXSdcblx0XHR8fCBpc1JlYWN0RWxlbWVudCh2YWx1ZSlcbn1cblxuLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL2I1YWM5NjNmYjc5MWQxMjk4ZTdmMzk2MjM2MzgzYmM5NTVmOTE2YzEvc3JjL2lzb21vcnBoaWMvY2xhc3NpYy9lbGVtZW50L1JlYWN0RWxlbWVudC5qcyNMMjEtTDI1XG52YXIgY2FuVXNlU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGNhblVzZVN5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcblxuZnVuY3Rpb24gaXNSZWFjdEVsZW1lbnQodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEVcbn1cblxuZnVuY3Rpb24gZW1wdHlUYXJnZXQodmFsKSB7XG5cdHJldHVybiBBcnJheS5pc0FycmF5KHZhbCkgPyBbXSA6IHt9XG59XG5cbmZ1bmN0aW9uIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHZhbHVlLCBvcHRpb25zKSB7XG5cdHJldHVybiAob3B0aW9ucy5jbG9uZSAhPT0gZmFsc2UgJiYgb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkpXG5cdFx0PyBkZWVwbWVyZ2UoZW1wdHlUYXJnZXQodmFsdWUpLCB2YWx1ZSwgb3B0aW9ucylcblx0XHQ6IHZhbHVlXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRBcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG5cdHJldHVybiB0YXJnZXQuY29uY2F0KHNvdXJjZSkubWFwKGZ1bmN0aW9uKGVsZW1lbnQpIHtcblx0XHRyZXR1cm4gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoZWxlbWVudCwgb3B0aW9ucylcblx0fSlcbn1cblxuZnVuY3Rpb24gZ2V0TWVyZ2VGdW5jdGlvbihrZXksIG9wdGlvbnMpIHtcblx0aWYgKCFvcHRpb25zLmN1c3RvbU1lcmdlKSB7XG5cdFx0cmV0dXJuIGRlZXBtZXJnZVxuXHR9XG5cdHZhciBjdXN0b21NZXJnZSA9IG9wdGlvbnMuY3VzdG9tTWVyZ2Uoa2V5KTtcblx0cmV0dXJuIHR5cGVvZiBjdXN0b21NZXJnZSA9PT0gJ2Z1bmN0aW9uJyA/IGN1c3RvbU1lcmdlIDogZGVlcG1lcmdlXG59XG5cbmZ1bmN0aW9uIGdldEVudW1lcmFibGVPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSB7XG5cdHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzXG5cdFx0PyBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkuZmlsdGVyKGZ1bmN0aW9uKHN5bWJvbCkge1xuXHRcdFx0cmV0dXJuIHRhcmdldC5wcm9wZXJ0eUlzRW51bWVyYWJsZShzeW1ib2wpXG5cdFx0fSlcblx0XHQ6IFtdXG59XG5cbmZ1bmN0aW9uIGdldEtleXModGFyZ2V0KSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyh0YXJnZXQpLmNvbmNhdChnZXRFbnVtZXJhYmxlT3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpXG59XG5cbi8vIFByb3RlY3RzIGZyb20gcHJvdG90eXBlIHBvaXNvbmluZyBhbmQgdW5leHBlY3RlZCBtZXJnaW5nIHVwIHRoZSBwcm90b3R5cGUgY2hhaW4uXG5mdW5jdGlvbiBwcm9wZXJ0eUlzVW5zYWZlKHRhcmdldCwga2V5KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIChrZXkgaW4gdGFyZ2V0KSAvLyBQcm9wZXJ0aWVzIGFyZSBzYWZlIHRvIG1lcmdlIGlmIHRoZXkgZG9uJ3QgZXhpc3QgaW4gdGhlIHRhcmdldCB5ZXQsXG5cdFx0XHQmJiAhKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwga2V5KSAvLyB1bnNhZmUgaWYgdGhleSBleGlzdCB1cCB0aGUgcHJvdG90eXBlIGNoYWluLFxuXHRcdFx0XHQmJiBPYmplY3QucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh0YXJnZXQsIGtleSkpIC8vIGFuZCBhbHNvIHVuc2FmZSBpZiB0aGV5J3JlIG5vbmVudW1lcmFibGUuXG5cdH0gY2F0Y2ggKHVudXNlZCkge1xuXHRcdC8vIENvdW50ZXJpbnR1aXRpdmVseSwgaXQncyBzYWZlIHRvIG1lcmdlIGFueSBwcm9wZXJ0eSBvbiBhIHRhcmdldCB0aGF0IGNhdXNlcyB0aGUgYGluYCBvcGVyYXRvciB0byB0aHJvdy5cblx0XHQvLyBUaGlzIGhhcHBlbnMgd2hlbiB0cnlpbmcgdG8gY29weSBhbiBvYmplY3QgaW4gdGhlIHNvdXJjZSBvdmVyIGEgcGxhaW4gc3RyaW5nIGluIHRoZSB0YXJnZXQuXG5cdFx0cmV0dXJuIGZhbHNlXG5cdH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcblx0dmFyIGRlc3RpbmF0aW9uID0ge307XG5cdGlmIChvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHRhcmdldCkpIHtcblx0XHRnZXRLZXlzKHRhcmdldCkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcblx0XHRcdGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCh0YXJnZXRba2V5XSwgb3B0aW9ucyk7XG5cdFx0fSk7XG5cdH1cblx0Z2V0S2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG5cdFx0aWYgKHByb3BlcnR5SXNVbnNhZmUodGFyZ2V0LCBrZXkpKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRpZiAoIW9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3Qoc291cmNlW2tleV0pIHx8ICF0YXJnZXRba2V5XSkge1xuXHRcdFx0ZGVzdGluYXRpb25ba2V5XSA9IGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHNvdXJjZVtrZXldLCBvcHRpb25zKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGVzdGluYXRpb25ba2V5XSA9IGdldE1lcmdlRnVuY3Rpb24oa2V5LCBvcHRpb25zKSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0sIG9wdGlvbnMpO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBkZXN0aW5hdGlvblxufVxuXG5mdW5jdGlvbiBkZWVwbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdG9wdGlvbnMuYXJyYXlNZXJnZSA9IG9wdGlvbnMuYXJyYXlNZXJnZSB8fCBkZWZhdWx0QXJyYXlNZXJnZTtcblx0b3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCA9IG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QgfHwgaXNNZXJnZWFibGVPYmplY3Q7XG5cdC8vIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkIGlzIGFkZGVkIHRvIGBvcHRpb25zYCBzbyB0aGF0IGN1c3RvbSBhcnJheU1lcmdlKClcblx0Ly8gaW1wbGVtZW50YXRpb25zIGNhbiB1c2UgaXQuIFRoZSBjYWxsZXIgbWF5IG5vdCByZXBsYWNlIGl0LlxuXHRvcHRpb25zLmNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkID0gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQ7XG5cblx0dmFyIHNvdXJjZUlzQXJyYXkgPSBBcnJheS5pc0FycmF5KHNvdXJjZSk7XG5cdHZhciB0YXJnZXRJc0FycmF5ID0gQXJyYXkuaXNBcnJheSh0YXJnZXQpO1xuXHR2YXIgc291cmNlQW5kVGFyZ2V0VHlwZXNNYXRjaCA9IHNvdXJjZUlzQXJyYXkgPT09IHRhcmdldElzQXJyYXk7XG5cblx0aWYgKCFzb3VyY2VBbmRUYXJnZXRUeXBlc01hdGNoKSB7XG5cdFx0cmV0dXJuIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHNvdXJjZSwgb3B0aW9ucylcblx0fSBlbHNlIGlmIChzb3VyY2VJc0FycmF5KSB7XG5cdFx0cmV0dXJuIG9wdGlvbnMuYXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucylcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpXG5cdH1cbn1cblxuZGVlcG1lcmdlLmFsbCA9IGZ1bmN0aW9uIGRlZXBtZXJnZUFsbChhcnJheSwgb3B0aW9ucykge1xuXHRpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdmaXJzdCBhcmd1bWVudCBzaG91bGQgYmUgYW4gYXJyYXknKVxuXHR9XG5cblx0cmV0dXJuIGFycmF5LnJlZHVjZShmdW5jdGlvbihwcmV2LCBuZXh0KSB7XG5cdFx0cmV0dXJuIGRlZXBtZXJnZShwcmV2LCBuZXh0LCBvcHRpb25zKVxuXHR9LCB7fSlcbn07XG5cbnZhciBkZWVwbWVyZ2VfMSA9IGRlZXBtZXJnZTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWVwbWVyZ2VfMTtcblxuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUpIHsvKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3BvbnlmaWxsX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuLyogZ2xvYmFsIHdpbmRvdyAqL1xuXG5cbnZhciByb290O1xuXG5pZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBzZWxmO1xufSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0cnVlKSB7XG4gIHJvb3QgPSBtb2R1bGU7XG59IGVsc2Uge31cblxudmFyIHJlc3VsdCA9IE9iamVjdChfcG9ueWZpbGxfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1svKiBkZWZhdWx0ICovIFwiYVwiXSkocm9vdCk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJhXCJdID0gKHJlc3VsdCk7XG5cbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbCh0aGlzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpKG1vZHVsZSkpKVxuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyohXG4gKiBGdXNlLmpzIHYzLjQuNSAtIExpZ2h0d2VpZ2h0IGZ1enp5LXNlYXJjaCAoaHR0cDovL2Z1c2Vqcy5pbylcbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgS2lyb2xsb3MgUmlzayAoaHR0cDovL2tpcm8ubWUpXG4gKiBBbGwgUmlnaHRzIFJlc2VydmVkLiBBcGFjaGUgU29mdHdhcmUgTGljZW5zZSAyLjBcbiAqIFxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKi9cbiFmdW5jdGlvbihlLHQpeyB0cnVlP21vZHVsZS5leHBvcnRzPXQoKTp1bmRlZmluZWR9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gbihyKXtpZih0W3JdKXJldHVybiB0W3JdLmV4cG9ydHM7dmFyIG89dFtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbcl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsbiksby5sPSEwLG8uZXhwb3J0c31yZXR1cm4gbi5tPWUsbi5jPXQsbi5kPWZ1bmN0aW9uKGUsdCxyKXtuLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6cn0pfSxuLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1uKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciByPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKHIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgbyBpbiBlKW4uZChyLG8sZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxvKSk7cmV0dXJuIHJ9LG4ubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gbi5kKHQsXCJhXCIsdCksdH0sbi5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxuLnA9XCJcIixuKG4ucz0xKX0oW2Z1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBBcnJheS5pc0FycmF5P0FycmF5LmlzQXJyYXkoZSk6XCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpfX0sZnVuY3Rpb24oZSx0LG4pe2Z1bmN0aW9uIHIoZSl7cmV0dXJuKHI9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0pKGUpfWZ1bmN0aW9uIG8oZSx0KXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIHI9dFtuXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsci5rZXkscil9fXZhciBpPW4oMiksYT1uKDgpLHM9bigwKSxjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4pe3ZhciByPW4ubG9jYXRpb24sbz12b2lkIDA9PT1yPzA6cixpPW4uZGlzdGFuY2Uscz12b2lkIDA9PT1pPzEwMDppLGM9bi50aHJlc2hvbGQsaD12b2lkIDA9PT1jPy42OmMsbD1uLm1heFBhdHRlcm5MZW5ndGgsdT12b2lkIDA9PT1sPzMyOmwsZj1uLmNhc2VTZW5zaXRpdmUsZD12b2lkIDAhPT1mJiZmLHY9bi50b2tlblNlcGFyYXRvcixwPXZvaWQgMD09PXY/LyArL2c6dixnPW4uZmluZEFsbE1hdGNoZXMseT12b2lkIDAhPT1nJiZnLG09bi5taW5NYXRjaENoYXJMZW5ndGgsaz12b2lkIDA9PT1tPzE6bSxTPW4uaWQseD12b2lkIDA9PT1TP251bGw6UyxiPW4ua2V5cyxNPXZvaWQgMD09PWI/W106YixfPW4uc2hvdWxkU29ydCxMPXZvaWQgMD09PV98fF8sdz1uLmdldEZuLEE9dm9pZCAwPT09dz9hOncsQz1uLnNvcnRGbixJPXZvaWQgMD09PUM/ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5zY29yZS10LnNjb3JlfTpDLE89bi50b2tlbml6ZSxqPXZvaWQgMCE9PU8mJk8sUD1uLm1hdGNoQWxsVG9rZW5zLEY9dm9pZCAwIT09UCYmUCxUPW4uaW5jbHVkZU1hdGNoZXMsej12b2lkIDAhPT1UJiZULEU9bi5pbmNsdWRlU2NvcmUsSz12b2lkIDAhPT1FJiZFLCQ9bi52ZXJib3NlLEo9dm9pZCAwIT09JCYmJDshZnVuY3Rpb24oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLGUpLHRoaXMub3B0aW9ucz17bG9jYXRpb246byxkaXN0YW5jZTpzLHRocmVzaG9sZDpoLG1heFBhdHRlcm5MZW5ndGg6dSxpc0Nhc2VTZW5zaXRpdmU6ZCx0b2tlblNlcGFyYXRvcjpwLGZpbmRBbGxNYXRjaGVzOnksbWluTWF0Y2hDaGFyTGVuZ3RoOmssaWQ6eCxrZXlzOk0saW5jbHVkZU1hdGNoZXM6eixpbmNsdWRlU2NvcmU6SyxzaG91bGRTb3J0OkwsZ2V0Rm46QSxzb3J0Rm46SSx2ZXJib3NlOkosdG9rZW5pemU6aixtYXRjaEFsbFRva2VuczpGfSx0aGlzLnNldENvbGxlY3Rpb24odCl9dmFyIHQsbixjO3JldHVybiB0PWUsKG49W3trZXk6XCJzZXRDb2xsZWN0aW9uXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMubGlzdD1lLGV9fSx7a2V5Olwic2VhcmNoXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOntsaW1pdDohMX07dGhpcy5fbG9nKCctLS0tLS0tLS1cXG5TZWFyY2ggcGF0dGVybjogXCInLmNvbmNhdChlLCdcIicpKTt2YXIgbj10aGlzLl9wcmVwYXJlU2VhcmNoZXJzKGUpLHI9bi50b2tlblNlYXJjaGVycyxvPW4uZnVsbFNlYXJjaGVyLGk9dGhpcy5fc2VhcmNoKHIsbyksYT1pLndlaWdodHMscz1pLnJlc3VsdHM7cmV0dXJuIHRoaXMuX2NvbXB1dGVTY29yZShhLHMpLHRoaXMub3B0aW9ucy5zaG91bGRTb3J0JiZ0aGlzLl9zb3J0KHMpLHQubGltaXQmJlwibnVtYmVyXCI9PXR5cGVvZiB0LmxpbWl0JiYocz1zLnNsaWNlKDAsdC5saW1pdCkpLHRoaXMuX2Zvcm1hdChzKX19LHtrZXk6XCJfcHJlcGFyZVNlYXJjaGVyc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOlwiXCIsdD1bXTtpZih0aGlzLm9wdGlvbnMudG9rZW5pemUpZm9yKHZhciBuPWUuc3BsaXQodGhpcy5vcHRpb25zLnRva2VuU2VwYXJhdG9yKSxyPTAsbz1uLmxlbmd0aDtyPG87cis9MSl0LnB1c2gobmV3IGkobltyXSx0aGlzLm9wdGlvbnMpKTtyZXR1cm57dG9rZW5TZWFyY2hlcnM6dCxmdWxsU2VhcmNoZXI6bmV3IGkoZSx0aGlzLm9wdGlvbnMpfX19LHtrZXk6XCJfc2VhcmNoXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06W10sdD1hcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCxuPXRoaXMubGlzdCxyPXt9LG89W107aWYoXCJzdHJpbmdcIj09dHlwZW9mIG5bMF0pe2Zvcih2YXIgaT0wLGE9bi5sZW5ndGg7aTxhO2krPTEpdGhpcy5fYW5hbHl6ZSh7a2V5OlwiXCIsdmFsdWU6bltpXSxyZWNvcmQ6aSxpbmRleDppfSx7cmVzdWx0TWFwOnIscmVzdWx0czpvLHRva2VuU2VhcmNoZXJzOmUsZnVsbFNlYXJjaGVyOnR9KTtyZXR1cm57d2VpZ2h0czpudWxsLHJlc3VsdHM6b319Zm9yKHZhciBzPXt9LGM9MCxoPW4ubGVuZ3RoO2M8aDtjKz0xKWZvcih2YXIgbD1uW2NdLHU9MCxmPXRoaXMub3B0aW9ucy5rZXlzLmxlbmd0aDt1PGY7dSs9MSl7dmFyIGQ9dGhpcy5vcHRpb25zLmtleXNbdV07aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGQpe2lmKHNbZC5uYW1lXT17d2VpZ2h0OjEtZC53ZWlnaHR8fDF9LGQud2VpZ2h0PD0wfHxkLndlaWdodD4xKXRocm93IG5ldyBFcnJvcihcIktleSB3ZWlnaHQgaGFzIHRvIGJlID4gMCBhbmQgPD0gMVwiKTtkPWQubmFtZX1lbHNlIHNbZF09e3dlaWdodDoxfTt0aGlzLl9hbmFseXplKHtrZXk6ZCx2YWx1ZTp0aGlzLm9wdGlvbnMuZ2V0Rm4obCxkKSxyZWNvcmQ6bCxpbmRleDpjfSx7cmVzdWx0TWFwOnIscmVzdWx0czpvLHRva2VuU2VhcmNoZXJzOmUsZnVsbFNlYXJjaGVyOnR9KX1yZXR1cm57d2VpZ2h0czpzLHJlc3VsdHM6b319fSx7a2V5OlwiX2FuYWx5emVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBuPWUua2V5LHI9ZS5hcnJheUluZGV4LG89dm9pZCAwPT09cj8tMTpyLGk9ZS52YWx1ZSxhPWUucmVjb3JkLGM9ZS5pbmRleCxoPXQudG9rZW5TZWFyY2hlcnMsbD12b2lkIDA9PT1oP1tdOmgsdT10LmZ1bGxTZWFyY2hlcixmPXZvaWQgMD09PXU/W106dSxkPXQucmVzdWx0TWFwLHY9dm9pZCAwPT09ZD97fTpkLHA9dC5yZXN1bHRzLGc9dm9pZCAwPT09cD9bXTpwO2lmKG51bGwhPWkpe3ZhciB5PSExLG09LTEsaz0wO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBpKXt0aGlzLl9sb2coXCJcXG5LZXk6IFwiLmNvbmNhdChcIlwiPT09bj9cIi1cIjpuKSk7dmFyIFM9Zi5zZWFyY2goaSk7aWYodGhpcy5fbG9nKCdGdWxsIHRleHQ6IFwiJy5jb25jYXQoaSwnXCIsIHNjb3JlOiAnKS5jb25jYXQoUy5zY29yZSkpLHRoaXMub3B0aW9ucy50b2tlbml6ZSl7Zm9yKHZhciB4PWkuc3BsaXQodGhpcy5vcHRpb25zLnRva2VuU2VwYXJhdG9yKSxiPVtdLE09MDtNPGwubGVuZ3RoO00rPTEpe3ZhciBfPWxbTV07dGhpcy5fbG9nKCdcXG5QYXR0ZXJuOiBcIicuY29uY2F0KF8ucGF0dGVybiwnXCInKSk7Zm9yKHZhciBMPSExLHc9MDt3PHgubGVuZ3RoO3crPTEpe3ZhciBBPXhbd10sQz1fLnNlYXJjaChBKSxJPXt9O0MuaXNNYXRjaD8oSVtBXT1DLnNjb3JlLHk9ITAsTD0hMCxiLnB1c2goQy5zY29yZSkpOihJW0FdPTEsdGhpcy5vcHRpb25zLm1hdGNoQWxsVG9rZW5zfHxiLnB1c2goMSkpLHRoaXMuX2xvZygnVG9rZW46IFwiJy5jb25jYXQoQSwnXCIsIHNjb3JlOiAnKS5jb25jYXQoSVtBXSkpfUwmJihrKz0xKX1tPWJbMF07Zm9yKHZhciBPPWIubGVuZ3RoLGo9MTtqPE87ais9MSltKz1iW2pdO20vPU8sdGhpcy5fbG9nKFwiVG9rZW4gc2NvcmUgYXZlcmFnZTpcIixtKX12YXIgUD1TLnNjb3JlO20+LTEmJihQPShQK20pLzIpLHRoaXMuX2xvZyhcIlNjb3JlIGF2ZXJhZ2U6XCIsUCk7dmFyIEY9IXRoaXMub3B0aW9ucy50b2tlbml6ZXx8IXRoaXMub3B0aW9ucy5tYXRjaEFsbFRva2Vuc3x8az49bC5sZW5ndGg7aWYodGhpcy5fbG9nKFwiXFxuQ2hlY2sgTWF0Y2hlczogXCIuY29uY2F0KEYpKSwoeXx8Uy5pc01hdGNoKSYmRil7dmFyIFQ9dltjXTtUP1Qub3V0cHV0LnB1c2goe2tleTpuLGFycmF5SW5kZXg6byx2YWx1ZTppLHNjb3JlOlAsbWF0Y2hlZEluZGljZXM6Uy5tYXRjaGVkSW5kaWNlc30pOih2W2NdPXtpdGVtOmEsb3V0cHV0Olt7a2V5Om4sYXJyYXlJbmRleDpvLHZhbHVlOmksc2NvcmU6UCxtYXRjaGVkSW5kaWNlczpTLm1hdGNoZWRJbmRpY2VzfV19LGcucHVzaCh2W2NdKSl9fWVsc2UgaWYocyhpKSlmb3IodmFyIHo9MCxFPWkubGVuZ3RoO3o8RTt6Kz0xKXRoaXMuX2FuYWx5emUoe2tleTpuLGFycmF5SW5kZXg6eix2YWx1ZTppW3pdLHJlY29yZDphLGluZGV4OmN9LHtyZXN1bHRNYXA6dixyZXN1bHRzOmcsdG9rZW5TZWFyY2hlcnM6bCxmdWxsU2VhcmNoZXI6Zn0pfX19LHtrZXk6XCJfY29tcHV0ZVNjb3JlXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt0aGlzLl9sb2coXCJcXG5cXG5Db21wdXRpbmcgc2NvcmU6XFxuXCIpO2Zvcih2YXIgbj0wLHI9dC5sZW5ndGg7bjxyO24rPTEpe2Zvcih2YXIgbz10W25dLm91dHB1dCxpPW8ubGVuZ3RoLGE9MSxzPTEsYz0wO2M8aTtjKz0xKXt2YXIgaD1lP2Vbb1tjXS5rZXldLndlaWdodDoxLGw9KDE9PT1oP29bY10uc2NvcmU6b1tjXS5zY29yZXx8LjAwMSkqaDsxIT09aD9zPU1hdGgubWluKHMsbCk6KG9bY10ublNjb3JlPWwsYSo9bCl9dFtuXS5zY29yZT0xPT09cz9hOnMsdGhpcy5fbG9nKHRbbl0pfX19LHtrZXk6XCJfc29ydFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuX2xvZyhcIlxcblxcblNvcnRpbmcuLi4uXCIpLGUuc29ydCh0aGlzLm9wdGlvbnMuc29ydEZuKX19LHtrZXk6XCJfZm9ybWF0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9W107aWYodGhpcy5vcHRpb25zLnZlcmJvc2Upe3ZhciBuPVtdO3RoaXMuX2xvZyhcIlxcblxcbk91dHB1dDpcXG5cXG5cIixKU09OLnN0cmluZ2lmeShlLGZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIj09PXIodCkmJm51bGwhPT10KXtpZigtMSE9PW4uaW5kZXhPZih0KSlyZXR1cm47bi5wdXNoKHQpfXJldHVybiB0fSkpLG49bnVsbH12YXIgbz1bXTt0aGlzLm9wdGlvbnMuaW5jbHVkZU1hdGNoZXMmJm8ucHVzaChmdW5jdGlvbihlLHQpe3ZhciBuPWUub3V0cHV0O3QubWF0Y2hlcz1bXTtmb3IodmFyIHI9MCxvPW4ubGVuZ3RoO3I8bztyKz0xKXt2YXIgaT1uW3JdO2lmKDAhPT1pLm1hdGNoZWRJbmRpY2VzLmxlbmd0aCl7dmFyIGE9e2luZGljZXM6aS5tYXRjaGVkSW5kaWNlcyx2YWx1ZTppLnZhbHVlfTtpLmtleSYmKGEua2V5PWkua2V5KSxpLmhhc093blByb3BlcnR5KFwiYXJyYXlJbmRleFwiKSYmaS5hcnJheUluZGV4Pi0xJiYoYS5hcnJheUluZGV4PWkuYXJyYXlJbmRleCksdC5tYXRjaGVzLnB1c2goYSl9fX0pLHRoaXMub3B0aW9ucy5pbmNsdWRlU2NvcmUmJm8ucHVzaChmdW5jdGlvbihlLHQpe3Quc2NvcmU9ZS5zY29yZX0pO2Zvcih2YXIgaT0wLGE9ZS5sZW5ndGg7aTxhO2krPTEpe3ZhciBzPWVbaV07aWYodGhpcy5vcHRpb25zLmlkJiYocy5pdGVtPXRoaXMub3B0aW9ucy5nZXRGbihzLml0ZW0sdGhpcy5vcHRpb25zLmlkKVswXSksby5sZW5ndGgpe2Zvcih2YXIgYz17aXRlbTpzLml0ZW19LGg9MCxsPW8ubGVuZ3RoO2g8bDtoKz0xKW9baF0ocyxjKTt0LnB1c2goYyl9ZWxzZSB0LnB1c2gocy5pdGVtKX1yZXR1cm4gdH19LHtrZXk6XCJfbG9nXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZTt0aGlzLm9wdGlvbnMudmVyYm9zZSYmKGU9Y29uc29sZSkubG9nLmFwcGx5KGUsYXJndW1lbnRzKX19XSkmJm8odC5wcm90b3R5cGUsbiksYyYmbyh0LGMpLGV9KCk7ZS5leHBvcnRzPWN9LGZ1bmN0aW9uKGUsdCxuKXtmdW5jdGlvbiByKGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciByPXRbbl07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIua2V5LHIpfX12YXIgbz1uKDMpLGk9big0KSxhPW4oNykscz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuKXt2YXIgcj1uLmxvY2F0aW9uLG89dm9pZCAwPT09cj8wOnIsaT1uLmRpc3RhbmNlLHM9dm9pZCAwPT09aT8xMDA6aSxjPW4udGhyZXNob2xkLGg9dm9pZCAwPT09Yz8uNjpjLGw9bi5tYXhQYXR0ZXJuTGVuZ3RoLHU9dm9pZCAwPT09bD8zMjpsLGY9bi5pc0Nhc2VTZW5zaXRpdmUsZD12b2lkIDAhPT1mJiZmLHY9bi50b2tlblNlcGFyYXRvcixwPXZvaWQgMD09PXY/LyArL2c6dixnPW4uZmluZEFsbE1hdGNoZXMseT12b2lkIDAhPT1nJiZnLG09bi5taW5NYXRjaENoYXJMZW5ndGgsaz12b2lkIDA9PT1tPzE6bTshZnVuY3Rpb24oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLGUpLHRoaXMub3B0aW9ucz17bG9jYXRpb246byxkaXN0YW5jZTpzLHRocmVzaG9sZDpoLG1heFBhdHRlcm5MZW5ndGg6dSxpc0Nhc2VTZW5zaXRpdmU6ZCx0b2tlblNlcGFyYXRvcjpwLGZpbmRBbGxNYXRjaGVzOnksbWluTWF0Y2hDaGFyTGVuZ3RoOmt9LHRoaXMucGF0dGVybj10aGlzLm9wdGlvbnMuaXNDYXNlU2Vuc2l0aXZlP3Q6dC50b0xvd2VyQ2FzZSgpLHRoaXMucGF0dGVybi5sZW5ndGg8PXUmJih0aGlzLnBhdHRlcm5BbHBoYWJldD1hKHRoaXMucGF0dGVybikpfXZhciB0LG4scztyZXR1cm4gdD1lLChuPVt7a2V5Olwic2VhcmNoXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYodGhpcy5vcHRpb25zLmlzQ2FzZVNlbnNpdGl2ZXx8KGU9ZS50b0xvd2VyQ2FzZSgpKSx0aGlzLnBhdHRlcm49PT1lKXJldHVybntpc01hdGNoOiEwLHNjb3JlOjAsbWF0Y2hlZEluZGljZXM6W1swLGUubGVuZ3RoLTFdXX07dmFyIHQ9dGhpcy5vcHRpb25zLG49dC5tYXhQYXR0ZXJuTGVuZ3RoLHI9dC50b2tlblNlcGFyYXRvcjtpZih0aGlzLnBhdHRlcm4ubGVuZ3RoPm4pcmV0dXJuIG8oZSx0aGlzLnBhdHRlcm4scik7dmFyIGE9dGhpcy5vcHRpb25zLHM9YS5sb2NhdGlvbixjPWEuZGlzdGFuY2UsaD1hLnRocmVzaG9sZCxsPWEuZmluZEFsbE1hdGNoZXMsdT1hLm1pbk1hdGNoQ2hhckxlbmd0aDtyZXR1cm4gaShlLHRoaXMucGF0dGVybix0aGlzLnBhdHRlcm5BbHBoYWJldCx7bG9jYXRpb246cyxkaXN0YW5jZTpjLHRocmVzaG9sZDpoLGZpbmRBbGxNYXRjaGVzOmwsbWluTWF0Y2hDaGFyTGVuZ3RoOnV9KX19XSkmJnIodC5wcm90b3R5cGUsbikscyYmcih0LHMpLGV9KCk7ZS5leHBvcnRzPXN9LGZ1bmN0aW9uKGUsdCl7dmFyIG49L1tcXC1cXFtcXF1cXC9cXHtcXH1cXChcXClcXCpcXCtcXD9cXC5cXFxcXFxeXFwkXFx8XS9nO2UuZXhwb3J0cz1mdW5jdGlvbihlLHQpe3ZhciByPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTovICsvZyxvPW5ldyBSZWdFeHAodC5yZXBsYWNlKG4sXCJcXFxcJCZcIikucmVwbGFjZShyLFwifFwiKSksaT1lLm1hdGNoKG8pLGE9ISFpLHM9W107aWYoYSlmb3IodmFyIGM9MCxoPWkubGVuZ3RoO2M8aDtjKz0xKXt2YXIgbD1pW2NdO3MucHVzaChbZS5pbmRleE9mKGwpLGwubGVuZ3RoLTFdKX1yZXR1cm57c2NvcmU6YT8uNToxLGlzTWF0Y2g6YSxtYXRjaGVkSW5kaWNlczpzfX19LGZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1uKDUpLG89big2KTtlLmV4cG9ydHM9ZnVuY3Rpb24oZSx0LG4saSl7Zm9yKHZhciBhPWkubG9jYXRpb24scz12b2lkIDA9PT1hPzA6YSxjPWkuZGlzdGFuY2UsaD12b2lkIDA9PT1jPzEwMDpjLGw9aS50aHJlc2hvbGQsdT12b2lkIDA9PT1sPy42OmwsZj1pLmZpbmRBbGxNYXRjaGVzLGQ9dm9pZCAwIT09ZiYmZix2PWkubWluTWF0Y2hDaGFyTGVuZ3RoLHA9dm9pZCAwPT09dj8xOnYsZz1zLHk9ZS5sZW5ndGgsbT11LGs9ZS5pbmRleE9mKHQsZyksUz10Lmxlbmd0aCx4PVtdLGI9MDtiPHk7Yis9MSl4W2JdPTA7aWYoLTEhPT1rKXt2YXIgTT1yKHQse2Vycm9yczowLGN1cnJlbnRMb2NhdGlvbjprLGV4cGVjdGVkTG9jYXRpb246ZyxkaXN0YW5jZTpofSk7aWYobT1NYXRoLm1pbihNLG0pLC0xIT09KGs9ZS5sYXN0SW5kZXhPZih0LGcrUykpKXt2YXIgXz1yKHQse2Vycm9yczowLGN1cnJlbnRMb2NhdGlvbjprLGV4cGVjdGVkTG9jYXRpb246ZyxkaXN0YW5jZTpofSk7bT1NYXRoLm1pbihfLG0pfX1rPS0xO2Zvcih2YXIgTD1bXSx3PTEsQT1TK3ksQz0xPDxTLTEsST0wO0k8UztJKz0xKXtmb3IodmFyIE89MCxqPUE7TzxqOyl7cih0LHtlcnJvcnM6SSxjdXJyZW50TG9jYXRpb246ZytqLGV4cGVjdGVkTG9jYXRpb246ZyxkaXN0YW5jZTpofSk8PW0/Tz1qOkE9aixqPU1hdGguZmxvb3IoKEEtTykvMitPKX1BPWo7dmFyIFA9TWF0aC5tYXgoMSxnLWorMSksRj1kP3k6TWF0aC5taW4oZytqLHkpK1MsVD1BcnJheShGKzIpO1RbRisxXT0oMTw8SSktMTtmb3IodmFyIHo9Rjt6Pj1QO3otPTEpe3ZhciBFPXotMSxLPW5bZS5jaGFyQXQoRSldO2lmKEsmJih4W0VdPTEpLFRbel09KFRbeisxXTw8MXwxKSZLLDAhPT1JJiYoVFt6XXw9KExbeisxXXxMW3pdKTw8MXwxfExbeisxXSksVFt6XSZDJiYodz1yKHQse2Vycm9yczpJLGN1cnJlbnRMb2NhdGlvbjpFLGV4cGVjdGVkTG9jYXRpb246ZyxkaXN0YW5jZTpofSkpPD1tKXtpZihtPXcsKGs9RSk8PWcpYnJlYWs7UD1NYXRoLm1heCgxLDIqZy1rKX19aWYocih0LHtlcnJvcnM6SSsxLGN1cnJlbnRMb2NhdGlvbjpnLGV4cGVjdGVkTG9jYXRpb246ZyxkaXN0YW5jZTpofSk+bSlicmVhaztMPVR9cmV0dXJue2lzTWF0Y2g6az49MCxzY29yZTowPT09dz8uMDAxOncsbWF0Y2hlZEluZGljZXM6byh4LHApfX19LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPWZ1bmN0aW9uKGUsdCl7dmFyIG49dC5lcnJvcnMscj12b2lkIDA9PT1uPzA6bixvPXQuY3VycmVudExvY2F0aW9uLGk9dm9pZCAwPT09bz8wOm8sYT10LmV4cGVjdGVkTG9jYXRpb24scz12b2lkIDA9PT1hPzA6YSxjPXQuZGlzdGFuY2UsaD12b2lkIDA9PT1jPzEwMDpjLGw9ci9lLmxlbmd0aCx1PU1hdGguYWJzKHMtaSk7cmV0dXJuIGg/bCt1L2g6dT8xOmx9fSxmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbigpe2Zvcih2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06W10sdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06MSxuPVtdLHI9LTEsbz0tMSxpPTAsYT1lLmxlbmd0aDtpPGE7aSs9MSl7dmFyIHM9ZVtpXTtzJiYtMT09PXI/cj1pOnN8fC0xPT09cnx8KChvPWktMSktcisxPj10JiZuLnB1c2goW3Isb10pLHI9LTEpfXJldHVybiBlW2ktMV0mJmktcj49dCYmbi5wdXNoKFtyLGktMV0pLG59fSxmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbihlKXtmb3IodmFyIHQ9e30sbj1lLmxlbmd0aCxyPTA7cjxuO3IrPTEpdFtlLmNoYXJBdChyKV09MDtmb3IodmFyIG89MDtvPG47bys9MSl0W2UuY2hhckF0KG8pXXw9MTw8bi1vLTE7cmV0dXJuIHR9fSxmdW5jdGlvbihlLHQsbil7dmFyIHI9bigwKTtlLmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZnVuY3Rpb24gZSh0LG4sbyl7aWYobil7dmFyIGk9bi5pbmRleE9mKFwiLlwiKSxhPW4scz1udWxsOy0xIT09aSYmKGE9bi5zbGljZSgwLGkpLHM9bi5zbGljZShpKzEpKTt2YXIgYz10W2FdO2lmKG51bGwhPWMpaWYoc3x8XCJzdHJpbmdcIiE9dHlwZW9mIGMmJlwibnVtYmVyXCIhPXR5cGVvZiBjKWlmKHIoYykpZm9yKHZhciBoPTAsbD1jLmxlbmd0aDtoPGw7aCs9MSllKGNbaF0scyxvKTtlbHNlIHMmJmUoYyxzLG8pO2Vsc2Ugby5wdXNoKGMudG9TdHJpbmcoKSl9ZWxzZSBvLnB1c2godCk7cmV0dXJuIG99KGUsdCxbXSl9fV0pfSk7XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJhXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc3ltYm9sT2JzZXJ2YWJsZVBvbnlmaWxsOyB9KTtcbmZ1bmN0aW9uIHN5bWJvbE9ic2VydmFibGVQb255ZmlsbChyb290KSB7XG5cdHZhciByZXN1bHQ7XG5cdHZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxuXHRpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGlmIChTeW1ib2wub2JzZXJ2YWJsZSkge1xuXHRcdFx0cmVzdWx0ID0gU3ltYm9sLm9ic2VydmFibGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdCA9IFN5bWJvbCgnb2JzZXJ2YWJsZScpO1xuXHRcdFx0U3ltYm9sLm9ic2VydmFibGUgPSByZXN1bHQ7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlc3VsdCA9ICdAQG9ic2VydmFibGUnO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblxuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxudmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuXG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcblxuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9mdXNlLmpzL2Rpc3QvZnVzZS5qc1xudmFyIGRpc3RfZnVzZSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG52YXIgZnVzZV9kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihkaXN0X2Z1c2UpO1xuXG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL2RlZXBtZXJnZS9kaXN0L2Nqcy5qc1xudmFyIGNqcyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgY2pzX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNqcyk7XG5cbi8vIEVYVEVSTkFMIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvZXMvaW5kZXguanNcbnZhciBlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL3JlZHV4LmpzXG5cblxuLyoqXG4gKiBUaGVzZSBhcmUgcHJpdmF0ZSBhY3Rpb24gdHlwZXMgcmVzZXJ2ZWQgYnkgUmVkdXguXG4gKiBGb3IgYW55IHVua25vd24gYWN0aW9ucywgeW91IG11c3QgcmV0dXJuIHRoZSBjdXJyZW50IHN0YXRlLlxuICogSWYgdGhlIGN1cnJlbnQgc3RhdGUgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuXG4gKiBEbyBub3QgcmVmZXJlbmNlIHRoZXNlIGFjdGlvbiB0eXBlcyBkaXJlY3RseSBpbiB5b3VyIGNvZGUuXG4gKi9cbnZhciByYW5kb21TdHJpbmcgPSBmdW5jdGlvbiByYW5kb21TdHJpbmcoKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNykuc3BsaXQoJycpLmpvaW4oJy4nKTtcbn07XG5cbnZhciBBY3Rpb25UeXBlcyA9IHtcbiAgSU5JVDogXCJAQHJlZHV4L0lOSVRcIiArIHJhbmRvbVN0cmluZygpLFxuICBSRVBMQUNFOiBcIkBAcmVkdXgvUkVQTEFDRVwiICsgcmFuZG9tU3RyaW5nKCksXG4gIFBST0JFX1VOS05PV05fQUNUSU9OOiBmdW5jdGlvbiBQUk9CRV9VTktOT1dOX0FDVElPTigpIHtcbiAgICByZXR1cm4gXCJAQHJlZHV4L1BST0JFX1VOS05PV05fQUNUSU9OXCIgKyByYW5kb21TdHJpbmcoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gb2JqIFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBhcmd1bWVudCBhcHBlYXJzIHRvIGJlIGEgcGxhaW4gb2JqZWN0LlxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gIHZhciBwcm90byA9IG9iajtcblxuICB3aGlsZSAoT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKSAhPT0gbnVsbCkge1xuICAgIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSA9PT0gcHJvdG87XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIFJlZHV4IHN0b3JlIHRoYXQgaG9sZHMgdGhlIHN0YXRlIHRyZWUuXG4gKiBUaGUgb25seSB3YXkgdG8gY2hhbmdlIHRoZSBkYXRhIGluIHRoZSBzdG9yZSBpcyB0byBjYWxsIGBkaXNwYXRjaCgpYCBvbiBpdC5cbiAqXG4gKiBUaGVyZSBzaG91bGQgb25seSBiZSBhIHNpbmdsZSBzdG9yZSBpbiB5b3VyIGFwcC4gVG8gc3BlY2lmeSBob3cgZGlmZmVyZW50XG4gKiBwYXJ0cyBvZiB0aGUgc3RhdGUgdHJlZSByZXNwb25kIHRvIGFjdGlvbnMsIHlvdSBtYXkgY29tYmluZSBzZXZlcmFsIHJlZHVjZXJzXG4gKiBpbnRvIGEgc2luZ2xlIHJlZHVjZXIgZnVuY3Rpb24gYnkgdXNpbmcgYGNvbWJpbmVSZWR1Y2Vyc2AuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVkdWNlciBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbmV4dCBzdGF0ZSB0cmVlLCBnaXZlblxuICogdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGFjdGlvbiB0byBoYW5kbGUuXG4gKlxuICogQHBhcmFtIHthbnl9IFtwcmVsb2FkZWRTdGF0ZV0gVGhlIGluaXRpYWwgc3RhdGUuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBoeWRyYXRlIHRoZSBzdGF0ZSBmcm9tIHRoZSBzZXJ2ZXIgaW4gdW5pdmVyc2FsIGFwcHMsIG9yIHRvIHJlc3RvcmUgYVxuICogcHJldmlvdXNseSBzZXJpYWxpemVkIHVzZXIgc2Vzc2lvbi5cbiAqIElmIHlvdSB1c2UgYGNvbWJpbmVSZWR1Y2Vyc2AgdG8gcHJvZHVjZSB0aGUgcm9vdCByZWR1Y2VyIGZ1bmN0aW9uLCB0aGlzIG11c3QgYmVcbiAqIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlIGFzIGBjb21iaW5lUmVkdWNlcnNgIGtleXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2VuaGFuY2VyXSBUaGUgc3RvcmUgZW5oYW5jZXIuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBlbmhhbmNlIHRoZSBzdG9yZSB3aXRoIHRoaXJkLXBhcnR5IGNhcGFiaWxpdGllcyBzdWNoIGFzIG1pZGRsZXdhcmUsXG4gKiB0aW1lIHRyYXZlbCwgcGVyc2lzdGVuY2UsIGV0Yy4gVGhlIG9ubHkgc3RvcmUgZW5oYW5jZXIgdGhhdCBzaGlwcyB3aXRoIFJlZHV4XG4gKiBpcyBgYXBwbHlNaWRkbGV3YXJlKClgLlxuICpcbiAqIEByZXR1cm5zIHtTdG9yZX0gQSBSZWR1eCBzdG9yZSB0aGF0IGxldHMgeW91IHJlYWQgdGhlIHN0YXRlLCBkaXNwYXRjaCBhY3Rpb25zXG4gKiBhbmQgc3Vic2NyaWJlIHRvIGNoYW5nZXMuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKSB7XG4gIHZhciBfcmVmMjtcblxuICBpZiAodHlwZW9mIHByZWxvYWRlZFN0YXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgZW5oYW5jZXIgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGFyZ3VtZW50c1szXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignSXQgbG9va3MgbGlrZSB5b3UgYXJlIHBhc3Npbmcgc2V2ZXJhbCBzdG9yZSBlbmhhbmNlcnMgdG8gJyArICdjcmVhdGVTdG9yZSgpLiBUaGlzIGlzIG5vdCBzdXBwb3J0ZWQuIEluc3RlYWQsIGNvbXBvc2UgdGhlbSAnICsgJ3RvZ2V0aGVyIHRvIGEgc2luZ2xlIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwcmVsb2FkZWRTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZW5oYW5jZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZW5oYW5jZXIgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgICBwcmVsb2FkZWRTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgZW5oYW5jZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5oYW5jZXIoY3JlYXRlU3RvcmUpKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIHJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciBjdXJyZW50UmVkdWNlciA9IHJlZHVjZXI7XG4gIHZhciBjdXJyZW50U3RhdGUgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgdmFyIGN1cnJlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzO1xuICB2YXIgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAvKipcbiAgICogVGhpcyBtYWtlcyBhIHNoYWxsb3cgY29weSBvZiBjdXJyZW50TGlzdGVuZXJzIHNvIHdlIGNhbiB1c2VcbiAgICogbmV4dExpc3RlbmVycyBhcyBhIHRlbXBvcmFyeSBsaXN0IHdoaWxlIGRpc3BhdGNoaW5nLlxuICAgKlxuICAgKiBUaGlzIHByZXZlbnRzIGFueSBidWdzIGFyb3VuZCBjb25zdW1lcnMgY2FsbGluZ1xuICAgKiBzdWJzY3JpYmUvdW5zdWJzY3JpYmUgaW4gdGhlIG1pZGRsZSBvZiBhIGRpc3BhdGNoLlxuICAgKi9cblxuICBmdW5jdGlvbiBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCkge1xuICAgIGlmIChuZXh0TGlzdGVuZXJzID09PSBjdXJyZW50TGlzdGVuZXJzKSB7XG4gICAgICBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycy5zbGljZSgpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmVhZHMgdGhlIHN0YXRlIHRyZWUgbWFuYWdlZCBieSB0aGUgc3RvcmUuXG4gICAqXG4gICAqIEByZXR1cm5zIHthbnl9IFRoZSBjdXJyZW50IHN0YXRlIHRyZWUgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAgICovXG5cblxuICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbWF5IG5vdCBjYWxsIHN0b3JlLmdldFN0YXRlKCkgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiAnICsgJ1RoZSByZWR1Y2VyIGhhcyBhbHJlYWR5IHJlY2VpdmVkIHRoZSBzdGF0ZSBhcyBhbiBhcmd1bWVudC4gJyArICdQYXNzIGl0IGRvd24gZnJvbSB0aGUgdG9wIHJlZHVjZXIgaW5zdGVhZCBvZiByZWFkaW5nIGl0IGZyb20gdGhlIHN0b3JlLicpO1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50U3RhdGU7XG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGFuZ2UgbGlzdGVuZXIuIEl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLFxuICAgKiBhbmQgc29tZSBwYXJ0IG9mIHRoZSBzdGF0ZSB0cmVlIG1heSBwb3RlbnRpYWxseSBoYXZlIGNoYW5nZWQuIFlvdSBtYXkgdGhlblxuICAgKiBjYWxsIGBnZXRTdGF0ZSgpYCB0byByZWFkIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgaW5zaWRlIHRoZSBjYWxsYmFjay5cbiAgICpcbiAgICogWW91IG1heSBjYWxsIGBkaXNwYXRjaCgpYCBmcm9tIGEgY2hhbmdlIGxpc3RlbmVyLCB3aXRoIHRoZSBmb2xsb3dpbmdcbiAgICogY2F2ZWF0czpcbiAgICpcbiAgICogMS4gVGhlIHN1YnNjcmlwdGlvbnMgYXJlIHNuYXBzaG90dGVkIGp1c3QgYmVmb3JlIGV2ZXJ5IGBkaXNwYXRjaCgpYCBjYWxsLlxuICAgKiBJZiB5b3Ugc3Vic2NyaWJlIG9yIHVuc3Vic2NyaWJlIHdoaWxlIHRoZSBsaXN0ZW5lcnMgYXJlIGJlaW5nIGludm9rZWQsIHRoaXNcbiAgICogd2lsbCBub3QgaGF2ZSBhbnkgZWZmZWN0IG9uIHRoZSBgZGlzcGF0Y2goKWAgdGhhdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3MuXG4gICAqIEhvd2V2ZXIsIHRoZSBuZXh0IGBkaXNwYXRjaCgpYCBjYWxsLCB3aGV0aGVyIG5lc3RlZCBvciBub3QsIHdpbGwgdXNlIGEgbW9yZVxuICAgKiByZWNlbnQgc25hcHNob3Qgb2YgdGhlIHN1YnNjcmlwdGlvbiBsaXN0LlxuICAgKlxuICAgKiAyLiBUaGUgbGlzdGVuZXIgc2hvdWxkIG5vdCBleHBlY3QgdG8gc2VlIGFsbCBzdGF0ZSBjaGFuZ2VzLCBhcyB0aGUgc3RhdGVcbiAgICogbWlnaHQgaGF2ZSBiZWVuIHVwZGF0ZWQgbXVsdGlwbGUgdGltZXMgZHVyaW5nIGEgbmVzdGVkIGBkaXNwYXRjaCgpYCBiZWZvcmVcbiAgICogdGhlIGxpc3RlbmVyIGlzIGNhbGxlZC4gSXQgaXMsIGhvd2V2ZXIsIGd1YXJhbnRlZWQgdGhhdCBhbGwgc3Vic2NyaWJlcnNcbiAgICogcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGBkaXNwYXRjaCgpYCBzdGFydGVkIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGxhdGVzdFxuICAgKiBzdGF0ZSBieSB0aGUgdGltZSBpdCBleGl0cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgQSBjYWxsYmFjayB0byBiZSBpbnZva2VkIG9uIGV2ZXJ5IGRpc3BhdGNoLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoaXMgY2hhbmdlIGxpc3RlbmVyLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIGxpc3RlbmVyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG1heSBub3QgY2FsbCBzdG9yZS5zdWJzY3JpYmUoKSB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuICcgKyAnSWYgeW91IHdvdWxkIGxpa2UgdG8gYmUgbm90aWZpZWQgYWZ0ZXIgdGhlIHN0b3JlIGhhcyBiZWVuIHVwZGF0ZWQsIHN1YnNjcmliZSBmcm9tIGEgJyArICdjb21wb25lbnQgYW5kIGludm9rZSBzdG9yZS5nZXRTdGF0ZSgpIGluIHRoZSBjYWxsYmFjayB0byBhY2Nlc3MgdGhlIGxhdGVzdCBzdGF0ZS4gJyArICdTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvYXBpLXJlZmVyZW5jZS9zdG9yZSNzdWJzY3JpYmUobGlzdGVuZXIpIGZvciBtb3JlIGRldGFpbHMuJyk7XG4gICAgfVxuXG4gICAgdmFyIGlzU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgIG5leHRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgaWYgKCFpc1N1YnNjcmliZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtYXkgbm90IHVuc3Vic2NyaWJlIGZyb20gYSBzdG9yZSBsaXN0ZW5lciB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuICcgKyAnU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL2FwaS1yZWZlcmVuY2Uvc3RvcmUjc3Vic2NyaWJlKGxpc3RlbmVyKSBmb3IgbW9yZSBkZXRhaWxzLicpO1xuICAgICAgfVxuXG4gICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICAgIHZhciBpbmRleCA9IG5leHRMaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICBuZXh0TGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhbiBhY3Rpb24uIEl0IGlzIHRoZSBvbmx5IHdheSB0byB0cmlnZ2VyIGEgc3RhdGUgY2hhbmdlLlxuICAgKlxuICAgKiBUaGUgYHJlZHVjZXJgIGZ1bmN0aW9uLCB1c2VkIHRvIGNyZWF0ZSB0aGUgc3RvcmUsIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlXG4gICAqIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGdpdmVuIGBhY3Rpb25gLiBJdHMgcmV0dXJuIHZhbHVlIHdpbGxcbiAgICogYmUgY29uc2lkZXJlZCB0aGUgKipuZXh0Kiogc3RhdGUgb2YgdGhlIHRyZWUsIGFuZCB0aGUgY2hhbmdlIGxpc3RlbmVyc1xuICAgKiB3aWxsIGJlIG5vdGlmaWVkLlxuICAgKlxuICAgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvbmx5IHN1cHBvcnRzIHBsYWluIG9iamVjdCBhY3Rpb25zLiBJZiB5b3Ugd2FudCB0b1xuICAgKiBkaXNwYXRjaCBhIFByb21pc2UsIGFuIE9ic2VydmFibGUsIGEgdGh1bmssIG9yIHNvbWV0aGluZyBlbHNlLCB5b3UgbmVlZCB0b1xuICAgKiB3cmFwIHlvdXIgc3RvcmUgY3JlYXRpbmcgZnVuY3Rpb24gaW50byB0aGUgY29ycmVzcG9uZGluZyBtaWRkbGV3YXJlLiBGb3JcbiAgICogZXhhbXBsZSwgc2VlIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgYHJlZHV4LXRodW5rYCBwYWNrYWdlLiBFdmVuIHRoZVxuICAgKiBtaWRkbGV3YXJlIHdpbGwgZXZlbnR1YWxseSBkaXNwYXRjaCBwbGFpbiBvYmplY3QgYWN0aW9ucyB1c2luZyB0aGlzIG1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBBIHBsYWluIG9iamVjdCByZXByZXNlbnRpbmcg4oCcd2hhdCBjaGFuZ2Vk4oCdLiBJdCBpc1xuICAgKiBhIGdvb2QgaWRlYSB0byBrZWVwIGFjdGlvbnMgc2VyaWFsaXphYmxlIHNvIHlvdSBjYW4gcmVjb3JkIGFuZCByZXBsYXkgdXNlclxuICAgKiBzZXNzaW9ucywgb3IgdXNlIHRoZSB0aW1lIHRyYXZlbGxpbmcgYHJlZHV4LWRldnRvb2xzYC4gQW4gYWN0aW9uIG11c3QgaGF2ZVxuICAgKiBhIGB0eXBlYCBwcm9wZXJ0eSB3aGljaCBtYXkgbm90IGJlIGB1bmRlZmluZWRgLiBJdCBpcyBhIGdvb2QgaWRlYSB0byB1c2VcbiAgICogc3RyaW5nIGNvbnN0YW50cyBmb3IgYWN0aW9uIHR5cGVzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBGb3IgY29udmVuaWVuY2UsIHRoZSBzYW1lIGFjdGlvbiBvYmplY3QgeW91IGRpc3BhdGNoZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCwgaWYgeW91IHVzZSBhIGN1c3RvbSBtaWRkbGV3YXJlLCBpdCBtYXkgd3JhcCBgZGlzcGF0Y2goKWAgdG9cbiAgICogcmV0dXJuIHNvbWV0aGluZyBlbHNlIChmb3IgZXhhbXBsZSwgYSBQcm9taXNlIHlvdSBjYW4gYXdhaXQpLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICAgIGlmICghaXNQbGFpbk9iamVjdChhY3Rpb24pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbXVzdCBiZSBwbGFpbiBvYmplY3RzLiAnICsgJ1VzZSBjdXN0b20gbWlkZGxld2FyZSBmb3IgYXN5bmMgYWN0aW9ucy4nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGFjdGlvbi50eXBlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG1heSBub3QgaGF2ZSBhbiB1bmRlZmluZWQgXCJ0eXBlXCIgcHJvcGVydHkuICcgKyAnSGF2ZSB5b3UgbWlzc3BlbGxlZCBhIGNvbnN0YW50PycpO1xuICAgIH1cblxuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZHVjZXJzIG1heSBub3QgZGlzcGF0Y2ggYWN0aW9ucy4nKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IHRydWU7XG4gICAgICBjdXJyZW50U3RhdGUgPSBjdXJyZW50UmVkdWNlcihjdXJyZW50U3RhdGUsIGFjdGlvbik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgbGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycyA9IG5leHRMaXN0ZW5lcnM7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uO1xuICB9XG4gIC8qKlxuICAgKiBSZXBsYWNlcyB0aGUgcmVkdWNlciBjdXJyZW50bHkgdXNlZCBieSB0aGUgc3RvcmUgdG8gY2FsY3VsYXRlIHRoZSBzdGF0ZS5cbiAgICpcbiAgICogWW91IG1pZ2h0IG5lZWQgdGhpcyBpZiB5b3VyIGFwcCBpbXBsZW1lbnRzIGNvZGUgc3BsaXR0aW5nIGFuZCB5b3Ugd2FudCB0b1xuICAgKiBsb2FkIHNvbWUgb2YgdGhlIHJlZHVjZXJzIGR5bmFtaWNhbGx5LiBZb3UgbWlnaHQgYWxzbyBuZWVkIHRoaXMgaWYgeW91XG4gICAqIGltcGxlbWVudCBhIGhvdCByZWxvYWRpbmcgbWVjaGFuaXNtIGZvciBSZWR1eC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbmV4dFJlZHVjZXIgVGhlIHJlZHVjZXIgZm9yIHRoZSBzdG9yZSB0byB1c2UgaW5zdGVhZC5cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gcmVwbGFjZVJlZHVjZXIobmV4dFJlZHVjZXIpIHtcbiAgICBpZiAodHlwZW9mIG5leHRSZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBuZXh0UmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGN1cnJlbnRSZWR1Y2VyID0gbmV4dFJlZHVjZXI7IC8vIFRoaXMgYWN0aW9uIGhhcyBhIHNpbWlsaWFyIGVmZmVjdCB0byBBY3Rpb25UeXBlcy5JTklULlxuICAgIC8vIEFueSByZWR1Y2VycyB0aGF0IGV4aXN0ZWQgaW4gYm90aCB0aGUgbmV3IGFuZCBvbGQgcm9vdFJlZHVjZXJcbiAgICAvLyB3aWxsIHJlY2VpdmUgdGhlIHByZXZpb3VzIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAgIC8vIHRoZSBuZXcgc3RhdGUgdHJlZSB3aXRoIGFueSByZWxldmFudCBkYXRhIGZyb20gdGhlIG9sZCBvbmUuXG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlcy5SRVBMQUNFXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEludGVyb3BlcmFiaWxpdHkgcG9pbnQgZm9yIG9ic2VydmFibGUvcmVhY3RpdmUgbGlicmFyaWVzLlxuICAgKiBAcmV0dXJucyB7b2JzZXJ2YWJsZX0gQSBtaW5pbWFsIG9ic2VydmFibGUgb2Ygc3RhdGUgY2hhbmdlcy5cbiAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSB0aGUgb2JzZXJ2YWJsZSBwcm9wb3NhbDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JzZXJ2YWJsZVxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIG9ic2VydmFibGUoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgb3V0ZXJTdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgcmV0dXJuIF9yZWYgPSB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtaW5pbWFsIG9ic2VydmFibGUgc3Vic2NyaXB0aW9uIG1ldGhvZC5cbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYnNlcnZlciBBbnkgb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgYXMgYW4gb2JzZXJ2ZXIuXG4gICAgICAgKiBUaGUgb2JzZXJ2ZXIgb2JqZWN0IHNob3VsZCBoYXZlIGEgYG5leHRgIG1ldGhvZC5cbiAgICAgICAqIEByZXR1cm5zIHtzdWJzY3JpcHRpb259IEFuIG9iamVjdCB3aXRoIGFuIGB1bnN1YnNjcmliZWAgbWV0aG9kIHRoYXQgY2FuXG4gICAgICAgKiBiZSB1c2VkIHRvIHVuc3Vic2NyaWJlIHRoZSBvYnNlcnZhYmxlIGZyb20gdGhlIHN0b3JlLCBhbmQgcHJldmVudCBmdXJ0aGVyXG4gICAgICAgKiBlbWlzc2lvbiBvZiB2YWx1ZXMgZnJvbSB0aGUgb2JzZXJ2YWJsZS5cbiAgICAgICAqL1xuICAgICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYnNlcnZlciAhPT0gJ29iamVjdCcgfHwgb2JzZXJ2ZXIgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCB0aGUgb2JzZXJ2ZXIgdG8gYmUgYW4gb2JqZWN0LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb2JzZXJ2ZVN0YXRlKCkge1xuICAgICAgICAgIGlmIChvYnNlcnZlci5uZXh0KSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KGdldFN0YXRlKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9ic2VydmVTdGF0ZSgpO1xuICAgICAgICB2YXIgdW5zdWJzY3JpYmUgPSBvdXRlclN1YnNjcmliZShvYnNlcnZlU3RhdGUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sIF9yZWZbZXNbXCJhXCIgLyogZGVmYXVsdCAqL11dID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSwgX3JlZjtcbiAgfSAvLyBXaGVuIGEgc3RvcmUgaXMgY3JlYXRlZCwgYW4gXCJJTklUXCIgYWN0aW9uIGlzIGRpc3BhdGNoZWQgc28gdGhhdCBldmVyeVxuICAvLyByZWR1Y2VyIHJldHVybnMgdGhlaXIgaW5pdGlhbCBzdGF0ZS4gVGhpcyBlZmZlY3RpdmVseSBwb3B1bGF0ZXNcbiAgLy8gdGhlIGluaXRpYWwgc3RhdGUgdHJlZS5cblxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5JTklUXG4gIH0pO1xuICByZXR1cm4gX3JlZjIgPSB7XG4gICAgZGlzcGF0Y2g6IGRpc3BhdGNoLFxuICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgICByZXBsYWNlUmVkdWNlcjogcmVwbGFjZVJlZHVjZXJcbiAgfSwgX3JlZjJbZXNbXCJhXCIgLyogZGVmYXVsdCAqL11dID0gb2JzZXJ2YWJsZSwgX3JlZjI7XG59XG5cbi8qKlxuICogUHJpbnRzIGEgd2FybmluZyBpbiB0aGUgY29uc29sZSBpZiBpdCBleGlzdHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIHdhcm5pbmcgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cblxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCBpZiB5b3UgZW5hYmxlXG4gICAgLy8gXCJicmVhayBvbiBhbGwgZXhjZXB0aW9uc1wiIGluIHlvdXIgY29uc29sZSxcbiAgICAvLyBpdCB3b3VsZCBwYXVzZSB0aGUgZXhlY3V0aW9uIGF0IHRoaXMgbGluZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH0gY2F0Y2ggKGUpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHlcblxufVxuXG5mdW5jdGlvbiBnZXRVbmRlZmluZWRTdGF0ZUVycm9yTWVzc2FnZShrZXksIGFjdGlvbikge1xuICB2YXIgYWN0aW9uVHlwZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZTtcbiAgdmFyIGFjdGlvbkRlc2NyaXB0aW9uID0gYWN0aW9uVHlwZSAmJiBcImFjdGlvbiBcXFwiXCIgKyBTdHJpbmcoYWN0aW9uVHlwZSkgKyBcIlxcXCJcIiB8fCAnYW4gYWN0aW9uJztcbiAgcmV0dXJuIFwiR2l2ZW4gXCIgKyBhY3Rpb25EZXNjcmlwdGlvbiArIFwiLCByZWR1Y2VyIFxcXCJcIiArIGtleSArIFwiXFxcIiByZXR1cm5lZCB1bmRlZmluZWQuIFwiICsgXCJUbyBpZ25vcmUgYW4gYWN0aW9uLCB5b3UgbXVzdCBleHBsaWNpdGx5IHJldHVybiB0aGUgcHJldmlvdXMgc3RhdGUuIFwiICsgXCJJZiB5b3Ugd2FudCB0aGlzIHJlZHVjZXIgdG8gaG9sZCBubyB2YWx1ZSwgeW91IGNhbiByZXR1cm4gbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZC5cIjtcbn1cblxuZnVuY3Rpb24gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShpbnB1dFN0YXRlLCByZWR1Y2VycywgYWN0aW9uLCB1bmV4cGVjdGVkS2V5Q2FjaGUpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgYXJndW1lbnROYW1lID0gYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBBY3Rpb25UeXBlcy5JTklUID8gJ3ByZWxvYWRlZFN0YXRlIGFyZ3VtZW50IHBhc3NlZCB0byBjcmVhdGVTdG9yZScgOiAncHJldmlvdXMgc3RhdGUgcmVjZWl2ZWQgYnkgdGhlIHJlZHVjZXInO1xuXG4gIGlmIChyZWR1Y2VyS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJ1N0b3JlIGRvZXMgbm90IGhhdmUgYSB2YWxpZCByZWR1Y2VyLiBNYWtlIHN1cmUgdGhlIGFyZ3VtZW50IHBhc3NlZCAnICsgJ3RvIGNvbWJpbmVSZWR1Y2VycyBpcyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSByZWR1Y2Vycy4nO1xuICB9XG5cbiAgaWYgKCFpc1BsYWluT2JqZWN0KGlucHV0U3RhdGUpKSB7XG4gICAgcmV0dXJuIFwiVGhlIFwiICsgYXJndW1lbnROYW1lICsgXCIgaGFzIHVuZXhwZWN0ZWQgdHlwZSBvZiBcXFwiXCIgKyB7fS50b1N0cmluZy5jYWxsKGlucHV0U3RhdGUpLm1hdGNoKC9cXHMoW2EtenxBLVpdKykvKVsxXSArIFwiXFxcIi4gRXhwZWN0ZWQgYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBcIiArIChcImtleXM6IFxcXCJcIiArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgXCJcXFwiXCIpO1xuICB9XG5cbiAgdmFyIHVuZXhwZWN0ZWRLZXlzID0gT2JqZWN0LmtleXMoaW5wdXRTdGF0ZSkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gIXJlZHVjZXJzLmhhc093blByb3BlcnR5KGtleSkgJiYgIXVuZXhwZWN0ZWRLZXlDYWNoZVtrZXldO1xuICB9KTtcbiAgdW5leHBlY3RlZEtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdW5leHBlY3RlZEtleUNhY2hlW2tleV0gPSB0cnVlO1xuICB9KTtcbiAgaWYgKGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gQWN0aW9uVHlwZXMuUkVQTEFDRSkgcmV0dXJuO1xuXG4gIGlmICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIFwiVW5leHBlY3RlZCBcIiArICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAxID8gJ2tleXMnIDogJ2tleScpICsgXCIgXCIgKyAoXCJcXFwiXCIgKyB1bmV4cGVjdGVkS2V5cy5qb2luKCdcIiwgXCInKSArIFwiXFxcIiBmb3VuZCBpbiBcIiArIGFyZ3VtZW50TmFtZSArIFwiLiBcIikgKyBcIkV4cGVjdGVkIHRvIGZpbmQgb25lIG9mIHRoZSBrbm93biByZWR1Y2VyIGtleXMgaW5zdGVhZDogXCIgKyAoXCJcXFwiXCIgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArIFwiXFxcIi4gVW5leHBlY3RlZCBrZXlzIHdpbGwgYmUgaWdub3JlZC5cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0UmVkdWNlclNoYXBlKHJlZHVjZXJzKSB7XG4gIE9iamVjdC5rZXlzKHJlZHVjZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgcmVkdWNlciA9IHJlZHVjZXJzW2tleV07XG4gICAgdmFyIGluaXRpYWxTdGF0ZSA9IHJlZHVjZXIodW5kZWZpbmVkLCB7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlcy5JTklUXG4gICAgfSk7XG5cbiAgICBpZiAodHlwZW9mIGluaXRpYWxTdGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlZHVjZXIgXFxcIlwiICsga2V5ICsgXCJcXFwiIHJldHVybmVkIHVuZGVmaW5lZCBkdXJpbmcgaW5pdGlhbGl6YXRpb24uIFwiICsgXCJJZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZSByZWR1Y2VyIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgXCIgKyBcImV4cGxpY2l0bHkgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgXCIgKyBcIm5vdCBiZSB1bmRlZmluZWQuIElmIHlvdSBkb24ndCB3YW50IHRvIHNldCBhIHZhbHVlIGZvciB0aGlzIHJlZHVjZXIsIFwiICsgXCJ5b3UgY2FuIHVzZSBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLlwiKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlZHVjZXIodW5kZWZpbmVkLCB7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlcy5QUk9CRV9VTktOT1dOX0FDVElPTigpXG4gICAgfSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWR1Y2VyIFxcXCJcIiArIGtleSArIFwiXFxcIiByZXR1cm5lZCB1bmRlZmluZWQgd2hlbiBwcm9iZWQgd2l0aCBhIHJhbmRvbSB0eXBlLiBcIiArIChcIkRvbid0IHRyeSB0byBoYW5kbGUgXCIgKyBBY3Rpb25UeXBlcy5JTklUICsgXCIgb3Igb3RoZXIgYWN0aW9ucyBpbiBcXFwicmVkdXgvKlxcXCIgXCIpICsgXCJuYW1lc3BhY2UuIFRoZXkgYXJlIGNvbnNpZGVyZWQgcHJpdmF0ZS4gSW5zdGVhZCwgeW91IG11c3QgcmV0dXJuIHRoZSBcIiArIFwiY3VycmVudCBzdGF0ZSBmb3IgYW55IHVua25vd24gYWN0aW9ucywgdW5sZXNzIGl0IGlzIHVuZGVmaW5lZCwgXCIgKyBcImluIHdoaWNoIGNhc2UgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLCByZWdhcmRsZXNzIG9mIHRoZSBcIiArIFwiYWN0aW9uIHR5cGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBub3QgYmUgdW5kZWZpbmVkLCBidXQgY2FuIGJlIG51bGwuXCIpO1xuICAgIH1cbiAgfSk7XG59XG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGRpZmZlcmVudCByZWR1Y2VyIGZ1bmN0aW9ucywgaW50byBhIHNpbmdsZVxuICogcmVkdWNlciBmdW5jdGlvbi4gSXQgd2lsbCBjYWxsIGV2ZXJ5IGNoaWxkIHJlZHVjZXIsIGFuZCBnYXRoZXIgdGhlaXIgcmVzdWx0c1xuICogaW50byBhIHNpbmdsZSBzdGF0ZSBvYmplY3QsIHdob3NlIGtleXMgY29ycmVzcG9uZCB0byB0aGUga2V5cyBvZiB0aGUgcGFzc2VkXG4gKiByZWR1Y2VyIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcmVkdWNlcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBjb3JyZXNwb25kIHRvIGRpZmZlcmVudFxuICogcmVkdWNlciBmdW5jdGlvbnMgdGhhdCBuZWVkIHRvIGJlIGNvbWJpbmVkIGludG8gb25lLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpblxuICogaXQgaXMgdG8gdXNlIEVTNiBgaW1wb3J0ICogYXMgcmVkdWNlcnNgIHN5bnRheC4gVGhlIHJlZHVjZXJzIG1heSBuZXZlciByZXR1cm5cbiAqIHVuZGVmaW5lZCBmb3IgYW55IGFjdGlvbi4gSW5zdGVhZCwgdGhleSBzaG91bGQgcmV0dXJuIHRoZWlyIGluaXRpYWwgc3RhdGVcbiAqIGlmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlbSB3YXMgdW5kZWZpbmVkLCBhbmQgdGhlIGN1cnJlbnQgc3RhdGUgZm9yIGFueVxuICogdW5yZWNvZ25pemVkIGFjdGlvbi5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgcmVkdWNlciBmdW5jdGlvbiB0aGF0IGludm9rZXMgZXZlcnkgcmVkdWNlciBpbnNpZGUgdGhlXG4gKiBwYXNzZWQgb2JqZWN0LCBhbmQgYnVpbGRzIGEgc3RhdGUgb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUuXG4gKi9cblxuXG5mdW5jdGlvbiBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgZmluYWxSZWR1Y2VycyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmVkdWNlcktleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gcmVkdWNlcktleXNbaV07XG5cbiAgICBpZiAoZmFsc2UpIHt9XG5cbiAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZpbmFsUmVkdWNlcnNba2V5XSA9IHJlZHVjZXJzW2tleV07XG4gICAgfVxuICB9XG5cbiAgdmFyIGZpbmFsUmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhmaW5hbFJlZHVjZXJzKTsgLy8gVGhpcyBpcyB1c2VkIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCB3YXJuIGFib3V0IHRoZSBzYW1lXG4gIC8vIGtleXMgbXVsdGlwbGUgdGltZXMuXG5cbiAgdmFyIHVuZXhwZWN0ZWRLZXlDYWNoZTtcblxuICBpZiAoZmFsc2UpIHt9XG5cbiAgdmFyIHNoYXBlQXNzZXJ0aW9uRXJyb3I7XG5cbiAgdHJ5IHtcbiAgICBhc3NlcnRSZWR1Y2VyU2hhcGUoZmluYWxSZWR1Y2Vycyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBzaGFwZUFzc2VydGlvbkVycm9yID0gZTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBjb21iaW5hdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKHN0YXRlID09PSB2b2lkIDApIHtcbiAgICAgIHN0YXRlID0ge307XG4gICAgfVxuXG4gICAgaWYgKHNoYXBlQXNzZXJ0aW9uRXJyb3IpIHtcbiAgICAgIHRocm93IHNoYXBlQXNzZXJ0aW9uRXJyb3I7XG4gICAgfVxuXG4gICAgaWYgKGZhbHNlKSB7IHZhciB3YXJuaW5nTWVzc2FnZTsgfVxuXG4gICAgdmFyIGhhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICB2YXIgbmV4dFN0YXRlID0ge307XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgZmluYWxSZWR1Y2VyS2V5cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfa2V5ID0gZmluYWxSZWR1Y2VyS2V5c1tfaV07XG4gICAgICB2YXIgcmVkdWNlciA9IGZpbmFsUmVkdWNlcnNbX2tleV07XG4gICAgICB2YXIgcHJldmlvdXNTdGF0ZUZvcktleSA9IHN0YXRlW19rZXldO1xuICAgICAgdmFyIG5leHRTdGF0ZUZvcktleSA9IHJlZHVjZXIocHJldmlvdXNTdGF0ZUZvcktleSwgYWN0aW9uKTtcblxuICAgICAgaWYgKHR5cGVvZiBuZXh0U3RhdGVGb3JLZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBnZXRVbmRlZmluZWRTdGF0ZUVycm9yTWVzc2FnZShfa2V5LCBhY3Rpb24pO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgICAgIH1cblxuICAgICAgbmV4dFN0YXRlW19rZXldID0gbmV4dFN0YXRlRm9yS2V5O1xuICAgICAgaGFzQ2hhbmdlZCA9IGhhc0NoYW5nZWQgfHwgbmV4dFN0YXRlRm9yS2V5ICE9PSBwcmV2aW91c1N0YXRlRm9yS2V5O1xuICAgIH1cblxuICAgIHJldHVybiBoYXNDaGFuZ2VkID8gbmV4dFN0YXRlIDogc3RhdGU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG59XG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGFjdGlvbiBjcmVhdG9ycywgaW50byBhbiBvYmplY3Qgd2l0aCB0aGVcbiAqIHNhbWUga2V5cywgYnV0IHdpdGggZXZlcnkgZnVuY3Rpb24gd3JhcHBlZCBpbnRvIGEgYGRpc3BhdGNoYCBjYWxsIHNvIHRoZXlcbiAqIG1heSBiZSBpbnZva2VkIGRpcmVjdGx5LiBUaGlzIGlzIGp1c3QgYSBjb252ZW5pZW5jZSBtZXRob2QsIGFzIHlvdSBjYW4gY2FsbFxuICogYHN0b3JlLmRpc3BhdGNoKE15QWN0aW9uQ3JlYXRvcnMuZG9Tb21ldGhpbmcoKSlgIHlvdXJzZWxmIGp1c3QgZmluZS5cbiAqXG4gKiBGb3IgY29udmVuaWVuY2UsIHlvdSBjYW4gYWxzbyBwYXNzIGFuIGFjdGlvbiBjcmVhdG9yIGFzIHRoZSBmaXJzdCBhcmd1bWVudCxcbiAqIGFuZCBnZXQgYSBkaXNwYXRjaCB3cmFwcGVkIGZ1bmN0aW9uIGluIHJldHVybi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdH0gYWN0aW9uQ3JlYXRvcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWN0aW9uXG4gKiBjcmVhdG9yIGZ1bmN0aW9ucy4gT25lIGhhbmR5IHdheSB0byBvYnRhaW4gaXQgaXMgdG8gdXNlIEVTNiBgaW1wb3J0ICogYXNgXG4gKiBzeW50YXguIFlvdSBtYXkgYWxzbyBwYXNzIGEgc2luZ2xlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc3BhdGNoIFRoZSBgZGlzcGF0Y2hgIGZ1bmN0aW9uIGF2YWlsYWJsZSBvbiB5b3VyIFJlZHV4XG4gKiBzdG9yZS5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb258T2JqZWN0fSBUaGUgb2JqZWN0IG1pbWlja2luZyB0aGUgb3JpZ2luYWwgb2JqZWN0LCBidXQgd2l0aFxuICogZXZlcnkgYWN0aW9uIGNyZWF0b3Igd3JhcHBlZCBpbnRvIHRoZSBgZGlzcGF0Y2hgIGNhbGwuIElmIHlvdSBwYXNzZWQgYVxuICogZnVuY3Rpb24gYXMgYGFjdGlvbkNyZWF0b3JzYCwgdGhlIHJldHVybiB2YWx1ZSB3aWxsIGFsc28gYmUgYSBzaW5nbGVcbiAqIGZ1bmN0aW9uLlxuICovXG5cblxuZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkge1xuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzICE9PSAnb2JqZWN0JyB8fCBhY3Rpb25DcmVhdG9ycyA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImJpbmRBY3Rpb25DcmVhdG9ycyBleHBlY3RlZCBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbiwgaW5zdGVhZCByZWNlaXZlZCBcIiArIChhY3Rpb25DcmVhdG9ycyA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBhY3Rpb25DcmVhdG9ycykgKyBcIi4gXCIgKyBcIkRpZCB5b3Ugd3JpdGUgXFxcImltcG9ydCBBY3Rpb25DcmVhdG9ycyBmcm9tXFxcIiBpbnN0ZWFkIG9mIFxcXCJpbXBvcnQgKiBhcyBBY3Rpb25DcmVhdG9ycyBmcm9tXFxcIj9cIik7XG4gIH1cblxuICB2YXIgYm91bmRBY3Rpb25DcmVhdG9ycyA9IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiBhY3Rpb25DcmVhdG9ycykge1xuICAgIHZhciBhY3Rpb25DcmVhdG9yID0gYWN0aW9uQ3JlYXRvcnNba2V5XTtcblxuICAgIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYm91bmRBY3Rpb25DcmVhdG9yc1trZXldID0gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib3VuZEFjdGlvbkNyZWF0b3JzO1xufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCkpO1xuICB9XG5cbiAgaWYgKGVudW1lcmFibGVPbmx5KSBrZXlzID0ga2V5cy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICB9KTtcbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbi8qKlxuICogQ29tcG9zZXMgc2luZ2xlLWFyZ3VtZW50IGZ1bmN0aW9ucyBmcm9tIHJpZ2h0IHRvIGxlZnQuIFRoZSByaWdodG1vc3RcbiAqIGZ1bmN0aW9uIGNhbiB0YWtlIG11bHRpcGxlIGFyZ3VtZW50cyBhcyBpdCBwcm92aWRlcyB0aGUgc2lnbmF0dXJlIGZvclxuICogdGhlIHJlc3VsdGluZyBjb21wb3NpdGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gZnVuY3MgVGhlIGZ1bmN0aW9ucyB0byBjb21wb3NlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIG9idGFpbmVkIGJ5IGNvbXBvc2luZyB0aGUgYXJndW1lbnQgZnVuY3Rpb25zXG4gKiBmcm9tIHJpZ2h0IHRvIGxlZnQuIEZvciBleGFtcGxlLCBjb21wb3NlKGYsIGcsIGgpIGlzIGlkZW50aWNhbCB0byBkb2luZ1xuICogKC4uLmFyZ3MpID0+IGYoZyhoKC4uLmFyZ3MpKSkuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgICAgcmV0dXJuIGFyZztcbiAgICB9O1xuICB9XG5cbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBmdW5jc1swXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jcy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGEoYi5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cykpO1xuICAgIH07XG4gIH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBzdG9yZSBlbmhhbmNlciB0aGF0IGFwcGxpZXMgbWlkZGxld2FyZSB0byB0aGUgZGlzcGF0Y2ggbWV0aG9kXG4gKiBvZiB0aGUgUmVkdXggc3RvcmUuIFRoaXMgaXMgaGFuZHkgZm9yIGEgdmFyaWV0eSBvZiB0YXNrcywgc3VjaCBhcyBleHByZXNzaW5nXG4gKiBhc3luY2hyb25vdXMgYWN0aW9ucyBpbiBhIGNvbmNpc2UgbWFubmVyLCBvciBsb2dnaW5nIGV2ZXJ5IGFjdGlvbiBwYXlsb2FkLlxuICpcbiAqIFNlZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UgYXMgYW4gZXhhbXBsZSBvZiB0aGUgUmVkdXggbWlkZGxld2FyZS5cbiAqXG4gKiBCZWNhdXNlIG1pZGRsZXdhcmUgaXMgcG90ZW50aWFsbHkgYXN5bmNocm9ub3VzLCB0aGlzIHNob3VsZCBiZSB0aGUgZmlyc3RcbiAqIHN0b3JlIGVuaGFuY2VyIGluIHRoZSBjb21wb3NpdGlvbiBjaGFpbi5cbiAqXG4gKiBOb3RlIHRoYXQgZWFjaCBtaWRkbGV3YXJlIHdpbGwgYmUgZ2l2ZW4gdGhlIGBkaXNwYXRjaGAgYW5kIGBnZXRTdGF0ZWAgZnVuY3Rpb25zXG4gKiBhcyBuYW1lZCBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gbWlkZGxld2FyZXMgVGhlIG1pZGRsZXdhcmUgY2hhaW4gdG8gYmUgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBzdG9yZSBlbmhhbmNlciBhcHBseWluZyB0aGUgbWlkZGxld2FyZS5cbiAqL1xuXG5mdW5jdGlvbiBhcHBseU1pZGRsZXdhcmUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtaWRkbGV3YXJlcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBtaWRkbGV3YXJlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoY3JlYXRlU3RvcmUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0b3JlID0gY3JlYXRlU3RvcmUuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuXG4gICAgICB2YXIgX2Rpc3BhdGNoID0gZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRGlzcGF0Y2hpbmcgd2hpbGUgY29uc3RydWN0aW5nIHlvdXIgbWlkZGxld2FyZSBpcyBub3QgYWxsb3dlZC4gJyArICdPdGhlciBtaWRkbGV3YXJlIHdvdWxkIG5vdCBiZSBhcHBsaWVkIHRvIHRoaXMgZGlzcGF0Y2guJyk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgbWlkZGxld2FyZUFQSSA9IHtcbiAgICAgICAgZ2V0U3RhdGU6IHN0b3JlLmdldFN0YXRlLFxuICAgICAgICBkaXNwYXRjaDogZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gICAgICAgICAgcmV0dXJuIF9kaXNwYXRjaC5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB2YXIgY2hhaW4gPSBtaWRkbGV3YXJlcy5tYXAoZnVuY3Rpb24gKG1pZGRsZXdhcmUpIHtcbiAgICAgICAgcmV0dXJuIG1pZGRsZXdhcmUobWlkZGxld2FyZUFQSSk7XG4gICAgICB9KTtcbiAgICAgIF9kaXNwYXRjaCA9IGNvbXBvc2UuYXBwbHkodm9pZCAwLCBjaGFpbikoc3RvcmUuZGlzcGF0Y2gpO1xuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQyKHt9LCBzdG9yZSwge1xuICAgICAgICBkaXNwYXRjaDogX2Rpc3BhdGNoXG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG4vKlxuICogVGhpcyBpcyBhIGR1bW15IGZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBmdW5jdGlvbiBuYW1lIGhhcyBiZWVuIGFsdGVyZWQgYnkgbWluaWZpY2F0aW9uLlxuICogSWYgdGhlIGZ1bmN0aW9uIGhhcyBiZWVuIG1pbmlmaWVkIGFuZCBOT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLCB3YXJuIHRoZSB1c2VyLlxuICovXG5cbmZ1bmN0aW9uIGlzQ3J1c2hlZCgpIHt9XG5cbmlmIChmYWxzZSkge31cblxuXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3NjcmlwdHMvcmVkdWNlcnMvaXRlbXMuanNcbnZhciBkZWZhdWx0U3RhdGUgPSBbXTtcbmZ1bmN0aW9uIGl0ZW1zX2l0ZW1zKHN0YXRlLCBhY3Rpb24pIHtcbiAgaWYgKHN0YXRlID09PSB2b2lkIDApIHtcbiAgICBzdGF0ZSA9IGRlZmF1bHRTdGF0ZTtcbiAgfVxuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdBRERfSVRFTSc6XG4gICAgICB7XG4gICAgICAgIC8vIEFkZCBvYmplY3QgdG8gaXRlbXMgYXJyYXlcbiAgICAgICAgdmFyIG5ld1N0YXRlID0gW10uY29uY2F0KHN0YXRlLCBbe1xuICAgICAgICAgIGlkOiBhY3Rpb24uaWQsXG4gICAgICAgICAgY2hvaWNlSWQ6IGFjdGlvbi5jaG9pY2VJZCxcbiAgICAgICAgICBncm91cElkOiBhY3Rpb24uZ3JvdXBJZCxcbiAgICAgICAgICB2YWx1ZTogYWN0aW9uLnZhbHVlLFxuICAgICAgICAgIGxhYmVsOiBhY3Rpb24ubGFiZWwsXG4gICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICAgIGhpZ2hsaWdodGVkOiBmYWxzZSxcbiAgICAgICAgICBjdXN0b21Qcm9wZXJ0aWVzOiBhY3Rpb24uY3VzdG9tUHJvcGVydGllcyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogYWN0aW9uLnBsYWNlaG9sZGVyIHx8IGZhbHNlLFxuICAgICAgICAgIGtleUNvZGU6IG51bGxcbiAgICAgICAgfV0pO1xuICAgICAgICByZXR1cm4gbmV3U3RhdGUubWFwKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IG9iajtcbiAgICAgICAgICBpdGVtLmhpZ2hsaWdodGVkID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgY2FzZSAnUkVNT1ZFX0lURU0nOlxuICAgICAge1xuICAgICAgICAvLyBTZXQgaXRlbSB0byBpbmFjdGl2ZVxuICAgICAgICByZXR1cm4gc3RhdGUubWFwKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IG9iajtcblxuICAgICAgICAgIGlmIChpdGVtLmlkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgY2FzZSAnSElHSExJR0hUX0lURU0nOlxuICAgICAge1xuICAgICAgICByZXR1cm4gc3RhdGUubWFwKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IG9iajtcblxuICAgICAgICAgIGlmIChpdGVtLmlkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgICAgIGl0ZW0uaGlnaGxpZ2h0ZWQgPSBhY3Rpb24uaGlnaGxpZ2h0ZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICB9XG59XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zY3JpcHRzL3JlZHVjZXJzL2dyb3Vwcy5qc1xudmFyIGdyb3Vwc19kZWZhdWx0U3RhdGUgPSBbXTtcbmZ1bmN0aW9uIGdyb3VwcyhzdGF0ZSwgYWN0aW9uKSB7XG4gIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgc3RhdGUgPSBncm91cHNfZGVmYXVsdFN0YXRlO1xuICB9XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0FERF9HUk9VUCc6XG4gICAgICB7XG4gICAgICAgIHJldHVybiBbXS5jb25jYXQoc3RhdGUsIFt7XG4gICAgICAgICAgaWQ6IGFjdGlvbi5pZCxcbiAgICAgICAgICB2YWx1ZTogYWN0aW9uLnZhbHVlLFxuICAgICAgICAgIGFjdGl2ZTogYWN0aW9uLmFjdGl2ZSxcbiAgICAgICAgICBkaXNhYmxlZDogYWN0aW9uLmRpc2FibGVkXG4gICAgICAgIH1dKTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ0NMRUFSX0NIT0lDRVMnOlxuICAgICAge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gIH1cbn1cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3NjcmlwdHMvcmVkdWNlcnMvY2hvaWNlcy5qc1xudmFyIGNob2ljZXNfZGVmYXVsdFN0YXRlID0gW107XG5mdW5jdGlvbiBjaG9pY2VzX2Nob2ljZXMoc3RhdGUsIGFjdGlvbikge1xuICBpZiAoc3RhdGUgPT09IHZvaWQgMCkge1xuICAgIHN0YXRlID0gY2hvaWNlc19kZWZhdWx0U3RhdGU7XG4gIH1cblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnQUREX0NIT0lDRSc6XG4gICAgICB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICBBIGRpc2FibGVkIGNob2ljZSBhcHBlYXJzIGluIHRoZSBjaG9pY2UgZHJvcGRvd24gYnV0IGNhbm5vdCBiZSBzZWxlY3RlZFxuICAgICAgICAgICAgQSBzZWxlY3RlZCBjaG9pY2UgaGFzIGJlZW4gYWRkZWQgdG8gdGhlIHBhc3NlZCBpbnB1dCdzIHZhbHVlIChhZGRlZCBhcyBhbiBpdGVtKVxuICAgICAgICAgICAgQW4gYWN0aXZlIGNob2ljZSBhcHBlYXJzIHdpdGhpbiB0aGUgY2hvaWNlIGRyb3Bkb3duXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gW10uY29uY2F0KHN0YXRlLCBbe1xuICAgICAgICAgIGlkOiBhY3Rpb24uaWQsXG4gICAgICAgICAgZWxlbWVudElkOiBhY3Rpb24uZWxlbWVudElkLFxuICAgICAgICAgIGdyb3VwSWQ6IGFjdGlvbi5ncm91cElkLFxuICAgICAgICAgIHZhbHVlOiBhY3Rpb24udmFsdWUsXG4gICAgICAgICAgbGFiZWw6IGFjdGlvbi5sYWJlbCB8fCBhY3Rpb24udmFsdWUsXG4gICAgICAgICAgZGlzYWJsZWQ6IGFjdGlvbi5kaXNhYmxlZCB8fCBmYWxzZSxcbiAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICAgIHNjb3JlOiA5OTk5LFxuICAgICAgICAgIGN1c3RvbVByb3BlcnRpZXM6IGFjdGlvbi5jdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBhY3Rpb24ucGxhY2Vob2xkZXIgfHwgZmFsc2UsXG4gICAgICAgICAga2V5Q29kZTogbnVsbFxuICAgICAgICB9XSk7XG4gICAgICB9XG5cbiAgICBjYXNlICdBRERfSVRFTSc6XG4gICAgICB7XG4gICAgICAgIC8vIElmIGFsbCBjaG9pY2VzIG5lZWQgdG8gYmUgYWN0aXZhdGVkXG4gICAgICAgIGlmIChhY3Rpb24uYWN0aXZhdGVPcHRpb25zKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlLm1hcChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICB2YXIgY2hvaWNlID0gb2JqO1xuICAgICAgICAgICAgY2hvaWNlLmFjdGl2ZSA9IGFjdGlvbi5hY3RpdmU7XG4gICAgICAgICAgICByZXR1cm4gY2hvaWNlO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IC8vIFdoZW4gYW4gaXRlbSBpcyBhZGRlZCBhbmQgaXQgaGFzIGFuIGFzc29jaWF0ZWQgY2hvaWNlLFxuICAgICAgICAvLyB3ZSB3YW50IHRvIGRpc2FibGUgaXQgc28gaXQgY2FuJ3QgYmUgY2hvc2VuIGFnYWluXG5cblxuICAgICAgICBpZiAoYWN0aW9uLmNob2ljZUlkID4gLTEpIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGUubWFwKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIHZhciBjaG9pY2UgPSBvYmo7XG5cbiAgICAgICAgICAgIGlmIChjaG9pY2UuaWQgPT09IHBhcnNlSW50KGFjdGlvbi5jaG9pY2VJZCwgMTApKSB7XG4gICAgICAgICAgICAgIGNob2ljZS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjaG9pY2U7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICBjYXNlICdSRU1PVkVfSVRFTSc6XG4gICAgICB7XG4gICAgICAgIC8vIFdoZW4gYW4gaXRlbSBpcyByZW1vdmVkIGFuZCBpdCBoYXMgYW4gYXNzb2NpYXRlZCBjaG9pY2UsXG4gICAgICAgIC8vIHdlIHdhbnQgdG8gcmUtZW5hYmxlIGl0IHNvIGl0IGNhbiBiZSBjaG9zZW4gYWdhaW5cbiAgICAgICAgaWYgKGFjdGlvbi5jaG9pY2VJZCA+IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlLm1hcChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICB2YXIgY2hvaWNlID0gb2JqO1xuXG4gICAgICAgICAgICBpZiAoY2hvaWNlLmlkID09PSBwYXJzZUludChhY3Rpb24uY2hvaWNlSWQsIDEwKSkge1xuICAgICAgICAgICAgICBjaG9pY2Uuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNob2ljZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ0ZJTFRFUl9DSE9JQ0VTJzpcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLm1hcChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgdmFyIGNob2ljZSA9IG9iajsgLy8gU2V0IGFjdGl2ZSBzdGF0ZSBiYXNlZCBvbiB3aGV0aGVyIGNob2ljZSBpc1xuICAgICAgICAgIC8vIHdpdGhpbiBmaWx0ZXJlZCByZXN1bHRzXG5cbiAgICAgICAgICBjaG9pY2UuYWN0aXZlID0gYWN0aW9uLnJlc3VsdHMuc29tZShmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBfcmVmLml0ZW0sXG4gICAgICAgICAgICAgICAgc2NvcmUgPSBfcmVmLnNjb3JlO1xuXG4gICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gY2hvaWNlLmlkKSB7XG4gICAgICAgICAgICAgIGNob2ljZS5zY29yZSA9IHNjb3JlO1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBjaG9pY2U7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgY2FzZSAnQUNUSVZBVEVfQ0hPSUNFUyc6XG4gICAgICB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5tYXAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgIHZhciBjaG9pY2UgPSBvYmo7XG4gICAgICAgICAgY2hvaWNlLmFjdGl2ZSA9IGFjdGlvbi5hY3RpdmU7XG4gICAgICAgICAgcmV0dXJuIGNob2ljZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICBjYXNlICdDTEVBUl9DSE9JQ0VTJzpcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIGNob2ljZXNfZGVmYXVsdFN0YXRlO1xuICAgICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICB9XG59XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zY3JpcHRzL3JlZHVjZXJzL2dlbmVyYWwuanNcbnZhciBnZW5lcmFsX2RlZmF1bHRTdGF0ZSA9IHtcbiAgbG9hZGluZzogZmFsc2Vcbn07XG5cbnZhciBnZW5lcmFsID0gZnVuY3Rpb24gZ2VuZXJhbChzdGF0ZSwgYWN0aW9uKSB7XG4gIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgc3RhdGUgPSBnZW5lcmFsX2RlZmF1bHRTdGF0ZTtcbiAgfVxuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdTRVRfSVNfTE9BRElORyc6XG4gICAgICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbG9hZGluZzogYWN0aW9uLmlzTG9hZGluZ1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICB9XG59O1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciByZWR1Y2Vyc19nZW5lcmFsID0gKGdlbmVyYWwpO1xuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvc2NyaXB0cy9saWIvdXRpbHMuanNcbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IG1pblxuICogQHBhcmFtIHtudW1iZXJ9IG1heFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xudmFyIGdldFJhbmRvbU51bWJlciA9IGZ1bmN0aW9uIGdldFJhbmRvbU51bWJlcihtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xufTtcbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuXG52YXIgZ2VuZXJhdGVDaGFycyA9IGZ1bmN0aW9uIGdlbmVyYXRlQ2hhcnMobGVuZ3RoKSB7XG4gIHJldHVybiBBcnJheS5mcm9tKHtcbiAgICBsZW5ndGg6IGxlbmd0aFxuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGdldFJhbmRvbU51bWJlcigwLCAzNikudG9TdHJpbmcoMzYpO1xuICB9KS5qb2luKCcnKTtcbn07XG4vKipcbiAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5cbnZhciBnZW5lcmF0ZUlkID0gZnVuY3Rpb24gZ2VuZXJhdGVJZChlbGVtZW50LCBwcmVmaXgpIHtcbiAgdmFyIGlkID0gZWxlbWVudC5pZCB8fCBlbGVtZW50Lm5hbWUgJiYgZWxlbWVudC5uYW1lICsgXCItXCIgKyBnZW5lcmF0ZUNoYXJzKDIpIHx8IGdlbmVyYXRlQ2hhcnMoNCk7XG4gIGlkID0gaWQucmVwbGFjZSgvKDp8XFwufFxcW3xcXF18LCkvZywgJycpO1xuICBpZCA9IHByZWZpeCArIFwiLVwiICsgaWQ7XG4gIHJldHVybiBpZDtcbn07XG4vKipcbiAqIEBwYXJhbSB7YW55fSBvYmpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cblxudmFyIGdldFR5cGUgPSBmdW5jdGlvbiBnZXRUeXBlKG9iaikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikuc2xpY2UoOCwgLTEpO1xufTtcbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7YW55fSBvYmpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5cbnZhciBpc1R5cGUgPSBmdW5jdGlvbiBpc1R5cGUodHlwZSwgb2JqKSB7XG4gIHJldHVybiBvYmogIT09IHVuZGVmaW5lZCAmJiBvYmogIT09IG51bGwgJiYgZ2V0VHlwZShvYmopID09PSB0eXBlO1xufTtcbi8qKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW3dyYXBwZXI9e0hUTUxEaXZFbGVtZW50fV1cbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAqL1xuXG52YXIgdXRpbHNfd3JhcCA9IGZ1bmN0aW9uIHdyYXAoZWxlbWVudCwgd3JhcHBlcikge1xuICBpZiAod3JhcHBlciA9PT0gdm9pZCAwKSB7XG4gICAgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB9XG5cbiAgaWYgKGVsZW1lbnQubmV4dFNpYmxpbmcpIHtcbiAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGVsZW1lbnQubmV4dFNpYmxpbmcpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgfVxuXG4gIHJldHVybiB3cmFwcGVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufTtcbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBzdGFydEVsXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7MSB8IC0xfSBkaXJlY3Rpb25cbiAqIEByZXR1cm5zIHtFbGVtZW50IHwgdW5kZWZpbmVkfVxuICovXG5cbnZhciBnZXRBZGphY2VudEVsID0gZnVuY3Rpb24gZ2V0QWRqYWNlbnRFbChzdGFydEVsLCBzZWxlY3RvciwgZGlyZWN0aW9uKSB7XG4gIGlmIChkaXJlY3Rpb24gPT09IHZvaWQgMCkge1xuICAgIGRpcmVjdGlvbiA9IDE7XG4gIH1cblxuICBpZiAoIShzdGFydEVsIGluc3RhbmNlb2YgRWxlbWVudCkgfHwgdHlwZW9mIHNlbGVjdG9yICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICB2YXIgcHJvcCA9IChkaXJlY3Rpb24gPiAwID8gJ25leHQnIDogJ3ByZXZpb3VzJykgKyBcIkVsZW1lbnRTaWJsaW5nXCI7XG4gIHZhciBzaWJsaW5nID0gc3RhcnRFbFtwcm9wXTtcblxuICB3aGlsZSAoc2libGluZykge1xuICAgIGlmIChzaWJsaW5nLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICByZXR1cm4gc2libGluZztcbiAgICB9XG5cbiAgICBzaWJsaW5nID0gc2libGluZ1twcm9wXTtcbiAgfVxuXG4gIHJldHVybiBzaWJsaW5nO1xufTtcbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IHBhcmVudFxuICogQHBhcmFtIHstMSB8IDF9IGRpcmVjdGlvblxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cblxudmFyIGlzU2Nyb2xsZWRJbnRvVmlldyA9IGZ1bmN0aW9uIGlzU2Nyb2xsZWRJbnRvVmlldyhlbGVtZW50LCBwYXJlbnQsIGRpcmVjdGlvbikge1xuICBpZiAoZGlyZWN0aW9uID09PSB2b2lkIDApIHtcbiAgICBkaXJlY3Rpb24gPSAxO1xuICB9XG5cbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGlzVmlzaWJsZTtcblxuICBpZiAoZGlyZWN0aW9uID4gMCkge1xuICAgIC8vIEluIHZpZXcgZnJvbSBib3R0b21cbiAgICBpc1Zpc2libGUgPSBwYXJlbnQuc2Nyb2xsVG9wICsgcGFyZW50Lm9mZnNldEhlaWdodCA+PSBlbGVtZW50Lm9mZnNldFRvcCArIGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICB9IGVsc2Uge1xuICAgIC8vIEluIHZpZXcgZnJvbSB0b3BcbiAgICBpc1Zpc2libGUgPSBlbGVtZW50Lm9mZnNldFRvcCA+PSBwYXJlbnQuc2Nyb2xsVG9wO1xuICB9XG5cbiAgcmV0dXJuIGlzVmlzaWJsZTtcbn07XG4vKipcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHJldHVybnMge2FueX1cbiAqL1xuXG52YXIgc2FuaXRpc2UgPSBmdW5jdGlvbiBzYW5pdGlzZSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLz4vZywgJyZydDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xufTtcbi8qKlxuICogQHJldHVybnMgeygpID0+IChzdHI6IHN0cmluZykgPT4gRWxlbWVudH1cbiAqL1xuXG52YXIgc3RyVG9FbCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRtcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyKSB7XG4gICAgdmFyIGNsZWFuZWRJbnB1dCA9IHN0ci50cmltKCk7XG4gICAgdG1wRWwuaW5uZXJIVE1MID0gY2xlYW5lZElucHV0O1xuICAgIHZhciBmaXJsZENoaWxkID0gdG1wRWwuY2hpbGRyZW5bMF07XG5cbiAgICB3aGlsZSAodG1wRWwuZmlyc3RDaGlsZCkge1xuICAgICAgdG1wRWwucmVtb3ZlQ2hpbGQodG1wRWwuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcmxkQ2hpbGQ7XG4gIH07XG59KCk7XG4vKipcbiAqIEBwYXJhbSB7eyBsYWJlbD86IHN0cmluZywgdmFsdWU6IHN0cmluZyB9fSBhXG4gKiBAcGFyYW0ge3sgbGFiZWw/OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfX0gYlxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuXG52YXIgc29ydEJ5QWxwaGEgPSBmdW5jdGlvbiBzb3J0QnlBbHBoYShfcmVmLCBfcmVmMikge1xuICB2YXIgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgX3JlZiRsYWJlbCA9IF9yZWYubGFiZWwsXG4gICAgICBsYWJlbCA9IF9yZWYkbGFiZWwgPT09IHZvaWQgMCA/IHZhbHVlIDogX3JlZiRsYWJlbDtcbiAgdmFyIHZhbHVlMiA9IF9yZWYyLnZhbHVlLFxuICAgICAgX3JlZjIkbGFiZWwgPSBfcmVmMi5sYWJlbCxcbiAgICAgIGxhYmVsMiA9IF9yZWYyJGxhYmVsID09PSB2b2lkIDAgPyB2YWx1ZTIgOiBfcmVmMiRsYWJlbDtcbiAgcmV0dXJuIGxhYmVsLmxvY2FsZUNvbXBhcmUobGFiZWwyLCBbXSwge1xuICAgIHNlbnNpdGl2aXR5OiAnYmFzZScsXG4gICAgaWdub3JlUHVuY3R1YXRpb246IHRydWUsXG4gICAgbnVtZXJpYzogdHJ1ZVxuICB9KTtcbn07XG4vKipcbiAqIEBwYXJhbSB7eyBzY29yZTogbnVtYmVyIH19IGFcbiAqIEBwYXJhbSB7eyBzY29yZTogbnVtYmVyIH19IGJcbiAqL1xuXG52YXIgc29ydEJ5U2NvcmUgPSBmdW5jdGlvbiBzb3J0QnlTY29yZShhLCBiKSB7XG4gIHJldHVybiBhLnNjb3JlIC0gYi5zY29yZTtcbn07XG4vKipcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gY3VzdG9tQXJnc1xuICovXG5cbnZhciBkaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbGVtZW50LCB0eXBlLCBjdXN0b21BcmdzKSB7XG4gIGlmIChjdXN0b21BcmdzID09PSB2b2lkIDApIHtcbiAgICBjdXN0b21BcmdzID0gbnVsbDtcbiAgfVxuXG4gIHZhciBldmVudCA9IG5ldyBDdXN0b21FdmVudCh0eXBlLCB7XG4gICAgZGV0YWlsOiBjdXN0b21BcmdzLFxuICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgY2FuY2VsYWJsZTogdHJ1ZVxuICB9KTtcbiAgcmV0dXJuIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG59O1xuLyoqXG4gKiBAcGFyYW0ge2FycmF5fSBhcnJheVxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZ30gW2tleT1cInZhbHVlXCJdXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuXG52YXIgZXhpc3RzSW5BcnJheSA9IGZ1bmN0aW9uIGV4aXN0c0luQXJyYXkoYXJyYXksIHZhbHVlLCBrZXkpIHtcbiAgaWYgKGtleSA9PT0gdm9pZCAwKSB7XG4gICAga2V5ID0gJ3ZhbHVlJztcbiAgfVxuXG4gIHJldHVybiBhcnJheS5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBpdGVtW2tleV0gPT09IHZhbHVlLnRyaW0oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbVtrZXldID09PSB2YWx1ZTtcbiAgfSk7XG59O1xuLyoqXG4gKiBAcGFyYW0ge2FueX0gb2JqXG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5cbnZhciBjbG9uZU9iamVjdCA9IGZ1bmN0aW9uIGNsb25lT2JqZWN0KG9iaikge1xuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbn07XG4vKipcbiAqIFJldHVybnMgYW4gYXJyYXkgb2Yga2V5cyBwcmVzZW50IG9uIHRoZSBmaXJzdCBidXQgbWlzc2luZyBvbiB0aGUgc2Vjb25kIG9iamVjdFxuICogQHBhcmFtIHtvYmplY3R9IGFcbiAqIEBwYXJhbSB7b2JqZWN0fSBiXG4gKiBAcmV0dXJucyB7c3RyaW5nW119XG4gKi9cblxudmFyIGRpZmYgPSBmdW5jdGlvbiBkaWZmKGEsIGIpIHtcbiAgdmFyIGFLZXlzID0gT2JqZWN0LmtleXMoYSkuc29ydCgpO1xuICB2YXIgYktleXMgPSBPYmplY3Qua2V5cyhiKS5zb3J0KCk7XG4gIHJldHVybiBhS2V5cy5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gYktleXMuaW5kZXhPZihpKSA8IDA7XG4gIH0pO1xufTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3NjcmlwdHMvcmVkdWNlcnMvaW5kZXguanNcblxuXG5cblxuXG5cbnZhciBhcHBSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgaXRlbXM6IGl0ZW1zX2l0ZW1zLFxuICBncm91cHM6IGdyb3VwcyxcbiAgY2hvaWNlczogY2hvaWNlc19jaG9pY2VzLFxuICBnZW5lcmFsOiByZWR1Y2Vyc19nZW5lcmFsXG59KTtcblxudmFyIHJlZHVjZXJzX3Jvb3RSZWR1Y2VyID0gZnVuY3Rpb24gcm9vdFJlZHVjZXIocGFzc2VkU3RhdGUsIGFjdGlvbikge1xuICB2YXIgc3RhdGUgPSBwYXNzZWRTdGF0ZTsgLy8gSWYgd2UgYXJlIGNsZWFyaW5nIGFsbCBpdGVtcywgZ3JvdXBzIGFuZCBvcHRpb25zIHdlIHJlYXNzaWduXG4gIC8vIHN0YXRlIGFuZCB0aGVuIHBhc3MgdGhhdCBzdGF0ZSB0byBvdXIgcHJvcGVyIHJlZHVjZXIuIFRoaXMgaXNuJ3RcbiAgLy8gbXV0YXRpbmcgb3VyIGFjdHVhbCBzdGF0ZVxuICAvLyBTZWU6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM1NjQxOTkyXG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnQ0xFQVJfQUxMJykge1xuICAgIHN0YXRlID0gdW5kZWZpbmVkO1xuICB9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSAnUkVTRVRfVE8nKSB7XG4gICAgcmV0dXJuIGNsb25lT2JqZWN0KGFjdGlvbi5zdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gYXBwUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbn07XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHJlZHVjZXJzID0gKHJlZHVjZXJzX3Jvb3RSZWR1Y2VyKTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3NjcmlwdHMvc3RvcmUvc3RvcmUuanNcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuXG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkNob2ljZX0gQ2hvaWNlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuR3JvdXB9IEdyb3VwXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuSXRlbX0gSXRlbVxuICovXG5cbnZhciBzdG9yZV9TdG9yZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0b3JlKCkge1xuICAgIHRoaXMuX3N0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKCkpO1xuICB9XG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgc3RvcmUgdG8gZnVuY3Rpb24gY2FsbCAod3JhcHBlZCBSZWR1eCBtZXRob2QpXG4gICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBvbkNoYW5nZSBGdW5jdGlvbiB0byB0cmlnZ2VyIHdoZW4gc3RhdGUgY2hhbmdlc1xuICAgKiBAcmV0dXJuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IFN0b3JlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uc3Vic2NyaWJlID0gZnVuY3Rpb24gc3Vic2NyaWJlKG9uQ2hhbmdlKSB7XG4gICAgdGhpcy5fc3RvcmUuc3Vic2NyaWJlKG9uQ2hhbmdlKTtcbiAgfVxuICAvKipcbiAgICogRGlzcGF0Y2ggZXZlbnQgdG8gc3RvcmUgKHdyYXBwZWQgUmVkdXggbWV0aG9kKVxuICAgKiBAcGFyYW0gIHt7IHR5cGU6IHN0cmluZywgW3g6IHN0cmluZ106IGFueSB9fSBhY3Rpb24gQWN0aW9uIHRvIHRyaWdnZXJcbiAgICogQHJldHVyblxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kaXNwYXRjaCA9IGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBzdG9yZSBvYmplY3QgKHdyYXBwaW5nIFJlZHV4IG1ldGhvZClcbiAgICogQHJldHVybnMge29iamVjdH0gU3RhdGVcbiAgICovXG4gIDtcblxuICAvKipcbiAgICogR2V0IGxvYWRpbmcgc3RhdGUgZnJvbSBzdG9yZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gTG9hZGluZyBTdGF0ZVxuICAgKi9cbiAgX3Byb3RvLmlzTG9hZGluZyA9IGZ1bmN0aW9uIGlzTG9hZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5nZW5lcmFsLmxvYWRpbmc7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgY2hvaWNlIGJ5IGl0J3MgSURcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gICAqIEByZXR1cm5zIHtDaG9pY2UgfCB1bmRlZmluZWR9IEZvdW5kIGNob2ljZVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5nZXRDaG9pY2VCeUlkID0gZnVuY3Rpb24gZ2V0Q2hvaWNlQnlJZChpZCkge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUNob2ljZXMuZmluZChmdW5jdGlvbiAoY2hvaWNlKSB7XG4gICAgICByZXR1cm4gY2hvaWNlLmlkID09PSBwYXJzZUludChpZCwgMTApO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgZ3JvdXAgYnkgZ3JvdXAgaWRcbiAgICogQHBhcmFtICB7bnVtYmVyfSBpZCBHcm91cCBJRFxuICAgKiBAcmV0dXJucyB7R3JvdXAgfCB1bmRlZmluZWR9IEdyb3VwIGRhdGFcbiAgICovXG4gIDtcblxuICBfcHJvdG8uZ2V0R3JvdXBCeUlkID0gZnVuY3Rpb24gZ2V0R3JvdXBCeUlkKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuZ3JvdXBzLmZpbmQoZnVuY3Rpb24gKGdyb3VwKSB7XG4gICAgICByZXR1cm4gZ3JvdXAuaWQgPT09IGlkO1xuICAgIH0pO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhTdG9yZSwgW3tcbiAgICBrZXk6IFwic3RhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdG9yZS5nZXRTdGF0ZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgaXRlbXMgZnJvbSBzdG9yZVxuICAgICAqIEByZXR1cm5zIHtJdGVtW119IEl0ZW0gb2JqZWN0c1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXRlbXNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLml0ZW1zO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYWN0aXZlIGl0ZW1zIGZyb20gc3RvcmVcbiAgICAgKiBAcmV0dXJucyB7SXRlbVtdfSBJdGVtIG9iamVjdHNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFjdGl2ZUl0ZW1zXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uYWN0aXZlID09PSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBoaWdobGlnaHRlZCBpdGVtcyBmcm9tIHN0b3JlXG4gICAgICogQHJldHVybnMge0l0ZW1bXX0gSXRlbSBvYmplY3RzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJoaWdobGlnaHRlZEFjdGl2ZUl0ZW1zXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uYWN0aXZlICYmIGl0ZW0uaGlnaGxpZ2h0ZWQ7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGNob2ljZXMgZnJvbSBzdG9yZVxuICAgICAqIEByZXR1cm5zIHtDaG9pY2VbXX0gT3B0aW9uIG9iamVjdHNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNob2ljZXNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmNob2ljZXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBhY3RpdmUgY2hvaWNlcyBmcm9tIHN0b3JlXG4gICAgICogQHJldHVybnMge0Nob2ljZVtdfSBPcHRpb24gb2JqZWN0c1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWN0aXZlQ2hvaWNlc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2hvaWNlcy5maWx0ZXIoZnVuY3Rpb24gKGNob2ljZSkge1xuICAgICAgICByZXR1cm4gY2hvaWNlLmFjdGl2ZSA9PT0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgc2VsZWN0YWJsZSBjaG9pY2VzIGZyb20gc3RvcmVcbiAgICAgKiBAcmV0dXJucyB7Q2hvaWNlW119IE9wdGlvbiBvYmplY3RzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZWxlY3RhYmxlQ2hvaWNlc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2hvaWNlcy5maWx0ZXIoZnVuY3Rpb24gKGNob2ljZSkge1xuICAgICAgICByZXR1cm4gY2hvaWNlLmRpc2FibGVkICE9PSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBjaG9pY2VzIHRoYXQgY2FuIGJlIHNlYXJjaGVkIChleGNsdWRpbmcgcGxhY2Vob2xkZXJzKVxuICAgICAqIEByZXR1cm5zIHtDaG9pY2VbXX0gT3B0aW9uIG9iamVjdHNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNlYXJjaGFibGVDaG9pY2VzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RhYmxlQ2hvaWNlcy5maWx0ZXIoZnVuY3Rpb24gKGNob2ljZSkge1xuICAgICAgICByZXR1cm4gY2hvaWNlLnBsYWNlaG9sZGVyICE9PSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBwbGFjZWhvbGRlciBjaG9pY2UgZnJvbSBzdG9yZVxuICAgICAqIEByZXR1cm5zIHtDaG9pY2UgfCB1bmRlZmluZWR9IEZvdW5kIHBsYWNlaG9sZGVyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJwbGFjZWhvbGRlckNob2ljZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFtdLmNvbmNhdCh0aGlzLmNob2ljZXMpLnJldmVyc2UoKS5maW5kKGZ1bmN0aW9uIChjaG9pY2UpIHtcbiAgICAgICAgcmV0dXJuIGNob2ljZS5wbGFjZWhvbGRlciA9PT0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgZ3JvdXBzIGZyb20gc3RvcmVcbiAgICAgKiBAcmV0dXJucyB7R3JvdXBbXX0gR3JvdXAgb2JqZWN0c1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ3JvdXBzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5ncm91cHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBhY3RpdmUgZ3JvdXBzIGZyb20gc3RvcmVcbiAgICAgKiBAcmV0dXJucyB7R3JvdXBbXX0gR3JvdXAgb2JqZWN0c1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWN0aXZlR3JvdXBzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgZ3JvdXBzID0gdGhpcy5ncm91cHMsXG4gICAgICAgICAgY2hvaWNlcyA9IHRoaXMuY2hvaWNlcztcbiAgICAgIHJldHVybiBncm91cHMuZmlsdGVyKGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgICB2YXIgaXNBY3RpdmUgPSBncm91cC5hY3RpdmUgPT09IHRydWUgJiYgZ3JvdXAuZGlzYWJsZWQgPT09IGZhbHNlO1xuICAgICAgICB2YXIgaGFzQWN0aXZlT3B0aW9ucyA9IGNob2ljZXMuc29tZShmdW5jdGlvbiAoY2hvaWNlKSB7XG4gICAgICAgICAgcmV0dXJuIGNob2ljZS5hY3RpdmUgPT09IHRydWUgJiYgY2hvaWNlLmRpc2FibGVkID09PSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBpc0FjdGl2ZSAmJiBoYXNBY3RpdmVPcHRpb25zO1xuICAgICAgfSwgW10pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdG9yZTtcbn0oKTtcblxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvZHJvcGRvd24uanNcbmZ1bmN0aW9uIGRyb3Bkb3duX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBkcm9wZG93bl9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRyb3Bkb3duX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkcm9wZG93bl9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5wYXNzZWRFbGVtZW50fSBwYXNzZWRFbGVtZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuQ2xhc3NOYW1lc30gQ2xhc3NOYW1lc1xuICovXG52YXIgRHJvcGRvd24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQHBhcmFtIHt7XG4gICAqICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICogIHR5cGU6IHBhc3NlZEVsZW1lbnRbJ3R5cGUnXSxcbiAgICogIGNsYXNzTmFtZXM6IENsYXNzTmFtZXMsXG4gICAqIH19IGFyZ3NcbiAgICovXG4gIGZ1bmN0aW9uIERyb3Bkb3duKF9yZWYpIHtcbiAgICB2YXIgZWxlbWVudCA9IF9yZWYuZWxlbWVudCxcbiAgICAgICAgdHlwZSA9IF9yZWYudHlwZSxcbiAgICAgICAgY2xhc3NOYW1lcyA9IF9yZWYuY2xhc3NOYW1lcztcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gIH1cbiAgLyoqXG4gICAqIEJvdHRvbSBwb3NpdGlvbiBvZiBkcm9wZG93biBpbiB2aWV3cG9ydCBjb29yZGluYXRlc1xuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBWZXJ0aWNhbCBwb3NpdGlvblxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBEcm9wZG93bi5wcm90b3R5cGU7XG5cbiAgLyoqXG4gICAqIEZpbmQgZWxlbWVudCB0aGF0IG1hdGNoZXMgcGFzc2VkIHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgX3Byb3RvLmdldENoaWxkID0gZnVuY3Rpb24gZ2V0Q2hpbGQoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9XG4gIC8qKlxuICAgKiBTaG93IGRyb3Bkb3duIHRvIHVzZXIgYnkgYWRkaW5nIGFjdGl2ZSBzdGF0ZSBjbGFzc1xuICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2hvdyA9IGZ1bmN0aW9uIHNob3coKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLmFjdGl2ZVN0YXRlKTtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICogSGlkZSBkcm9wZG93biBmcm9tIHVzZXJcbiAgICogQHJldHVybnMge3RoaXN9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmhpZGUgPSBmdW5jdGlvbiBoaWRlKCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NOYW1lcy5hY3RpdmVTdGF0ZSk7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBkcm9wZG93bl9jcmVhdGVDbGFzcyhEcm9wZG93biwgW3tcbiAgICBrZXk6IFwiZGlzdGFuY2VGcm9tVG9wV2luZG93XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRHJvcGRvd247XG59KCk7XG5cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvc2NyaXB0cy9jb25zdGFudHMuanNcblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuQ2xhc3NOYW1lc30gQ2xhc3NOYW1lc1xuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLk9wdGlvbnN9IE9wdGlvbnNcbiAqL1xuXG4vKiogQHR5cGUge0NsYXNzTmFtZXN9ICovXG5cbnZhciBERUZBVUxUX0NMQVNTTkFNRVMgPSB7XG4gIGNvbnRhaW5lck91dGVyOiAnY2hvaWNlcycsXG4gIGNvbnRhaW5lcklubmVyOiAnY2hvaWNlc19faW5uZXInLFxuICBpbnB1dDogJ2Nob2ljZXNfX2lucHV0JyxcbiAgaW5wdXRDbG9uZWQ6ICdjaG9pY2VzX19pbnB1dC0tY2xvbmVkJyxcbiAgbGlzdDogJ2Nob2ljZXNfX2xpc3QnLFxuICBsaXN0SXRlbXM6ICdjaG9pY2VzX19saXN0LS1tdWx0aXBsZScsXG4gIGxpc3RTaW5nbGU6ICdjaG9pY2VzX19saXN0LS1zaW5nbGUnLFxuICBsaXN0RHJvcGRvd246ICdjaG9pY2VzX19saXN0LS1kcm9wZG93bicsXG4gIGl0ZW06ICdjaG9pY2VzX19pdGVtJyxcbiAgaXRlbVNlbGVjdGFibGU6ICdjaG9pY2VzX19pdGVtLS1zZWxlY3RhYmxlJyxcbiAgaXRlbURpc2FibGVkOiAnY2hvaWNlc19faXRlbS0tZGlzYWJsZWQnLFxuICBpdGVtQ2hvaWNlOiAnY2hvaWNlc19faXRlbS0tY2hvaWNlJyxcbiAgcGxhY2Vob2xkZXI6ICdjaG9pY2VzX19wbGFjZWhvbGRlcicsXG4gIGdyb3VwOiAnY2hvaWNlc19fZ3JvdXAnLFxuICBncm91cEhlYWRpbmc6ICdjaG9pY2VzX19oZWFkaW5nJyxcbiAgYnV0dG9uOiAnY2hvaWNlc19fYnV0dG9uJyxcbiAgYWN0aXZlU3RhdGU6ICdpcy1hY3RpdmUnLFxuICBmb2N1c1N0YXRlOiAnaXMtZm9jdXNlZCcsXG4gIG9wZW5TdGF0ZTogJ2lzLW9wZW4nLFxuICBkaXNhYmxlZFN0YXRlOiAnaXMtZGlzYWJsZWQnLFxuICBoaWdobGlnaHRlZFN0YXRlOiAnaXMtaGlnaGxpZ2h0ZWQnLFxuICBzZWxlY3RlZFN0YXRlOiAnaXMtc2VsZWN0ZWQnLFxuICBmbGlwcGVkU3RhdGU6ICdpcy1mbGlwcGVkJyxcbiAgbG9hZGluZ1N0YXRlOiAnaXMtbG9hZGluZycsXG4gIG5vUmVzdWx0czogJ2hhcy1uby1yZXN1bHRzJyxcbiAgbm9DaG9pY2VzOiAnaGFzLW5vLWNob2ljZXMnXG59O1xuLyoqIEB0eXBlIHtPcHRpb25zfSAqL1xuXG52YXIgREVGQVVMVF9DT05GSUcgPSB7XG4gIGl0ZW1zOiBbXSxcbiAgY2hvaWNlczogW10sXG4gIHNpbGVudDogZmFsc2UsXG4gIHJlbmRlckNob2ljZUxpbWl0OiAtMSxcbiAgbWF4SXRlbUNvdW50OiAtMSxcbiAgYWRkSXRlbXM6IHRydWUsXG4gIGFkZEl0ZW1GaWx0ZXI6IG51bGwsXG4gIHJlbW92ZUl0ZW1zOiB0cnVlLFxuICByZW1vdmVJdGVtQnV0dG9uOiBmYWxzZSxcbiAgZWRpdEl0ZW1zOiBmYWxzZSxcbiAgZHVwbGljYXRlSXRlbXNBbGxvd2VkOiB0cnVlLFxuICBkZWxpbWl0ZXI6ICcsJyxcbiAgcGFzdGU6IHRydWUsXG4gIHNlYXJjaEVuYWJsZWQ6IHRydWUsXG4gIHNlYXJjaENob2ljZXM6IHRydWUsXG4gIHNlYXJjaEZsb29yOiAxLFxuICBzZWFyY2hSZXN1bHRMaW1pdDogNCxcbiAgc2VhcmNoRmllbGRzOiBbJ2xhYmVsJywgJ3ZhbHVlJ10sXG4gIHBvc2l0aW9uOiAnYXV0bycsXG4gIHJlc2V0U2Nyb2xsUG9zaXRpb246IHRydWUsXG4gIHNob3VsZFNvcnQ6IHRydWUsXG4gIHNob3VsZFNvcnRJdGVtczogZmFsc2UsXG4gIHNvcnRlcjogc29ydEJ5QWxwaGEsXG4gIHBsYWNlaG9sZGVyOiB0cnVlLFxuICBwbGFjZWhvbGRlclZhbHVlOiBudWxsLFxuICBzZWFyY2hQbGFjZWhvbGRlclZhbHVlOiBudWxsLFxuICBwcmVwZW5kVmFsdWU6IG51bGwsXG4gIGFwcGVuZFZhbHVlOiBudWxsLFxuICByZW5kZXJTZWxlY3RlZENob2ljZXM6ICdhdXRvJyxcbiAgbG9hZGluZ1RleHQ6ICdMb2FkaW5nLi4uJyxcbiAgbm9SZXN1bHRzVGV4dDogJ05vIHJlc3VsdHMgZm91bmQnLFxuICBub0Nob2ljZXNUZXh0OiAnTm8gY2hvaWNlcyB0byBjaG9vc2UgZnJvbScsXG4gIGl0ZW1TZWxlY3RUZXh0OiAnUHJlc3MgdG8gc2VsZWN0JyxcbiAgdW5pcXVlSXRlbVRleHQ6ICdPbmx5IHVuaXF1ZSB2YWx1ZXMgY2FuIGJlIGFkZGVkJyxcbiAgY3VzdG9tQWRkSXRlbVRleHQ6ICdPbmx5IHZhbHVlcyBtYXRjaGluZyBzcGVjaWZpYyBjb25kaXRpb25zIGNhbiBiZSBhZGRlZCcsXG4gIGFkZEl0ZW1UZXh0OiBmdW5jdGlvbiBhZGRJdGVtVGV4dCh2YWx1ZSkge1xuICAgIHJldHVybiBcIlByZXNzIEVudGVyIHRvIGFkZCA8Yj5cXFwiXCIgKyBzYW5pdGlzZSh2YWx1ZSkgKyBcIlxcXCI8L2I+XCI7XG4gIH0sXG4gIG1heEl0ZW1UZXh0OiBmdW5jdGlvbiBtYXhJdGVtVGV4dChtYXhJdGVtQ291bnQpIHtcbiAgICByZXR1cm4gXCJPbmx5IFwiICsgbWF4SXRlbUNvdW50ICsgXCIgdmFsdWVzIGNhbiBiZSBhZGRlZFwiO1xuICB9LFxuICB2YWx1ZUNvbXBhcmVyOiBmdW5jdGlvbiB2YWx1ZUNvbXBhcmVyKHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgcmV0dXJuIHZhbHVlMSA9PT0gdmFsdWUyO1xuICB9LFxuICBmdXNlT3B0aW9uczoge1xuICAgIGluY2x1ZGVTY29yZTogdHJ1ZVxuICB9LFxuICBjYWxsYmFja09uSW5pdDogbnVsbCxcbiAgY2FsbGJhY2tPbkNyZWF0ZVRlbXBsYXRlczogbnVsbCxcbiAgY2xhc3NOYW1lczogREVGQVVMVF9DTEFTU05BTUVTXG59O1xudmFyIEVWRU5UUyA9IHtcbiAgc2hvd0Ryb3Bkb3duOiAnc2hvd0Ryb3Bkb3duJyxcbiAgaGlkZURyb3Bkb3duOiAnaGlkZURyb3Bkb3duJyxcbiAgY2hhbmdlOiAnY2hhbmdlJyxcbiAgY2hvaWNlOiAnY2hvaWNlJyxcbiAgc2VhcmNoOiAnc2VhcmNoJyxcbiAgYWRkSXRlbTogJ2FkZEl0ZW0nLFxuICByZW1vdmVJdGVtOiAncmVtb3ZlSXRlbScsXG4gIGhpZ2hsaWdodEl0ZW06ICdoaWdobGlnaHRJdGVtJyxcbiAgaGlnaGxpZ2h0Q2hvaWNlOiAnaGlnaGxpZ2h0Q2hvaWNlJ1xufTtcbnZhciBBQ1RJT05fVFlQRVMgPSB7XG4gIEFERF9DSE9JQ0U6ICdBRERfQ0hPSUNFJyxcbiAgRklMVEVSX0NIT0lDRVM6ICdGSUxURVJfQ0hPSUNFUycsXG4gIEFDVElWQVRFX0NIT0lDRVM6ICdBQ1RJVkFURV9DSE9JQ0VTJyxcbiAgQ0xFQVJfQ0hPSUNFUzogJ0NMRUFSX0NIT0lDRVMnLFxuICBBRERfR1JPVVA6ICdBRERfR1JPVVAnLFxuICBBRERfSVRFTTogJ0FERF9JVEVNJyxcbiAgUkVNT1ZFX0lURU06ICdSRU1PVkVfSVRFTScsXG4gIEhJR0hMSUdIVF9JVEVNOiAnSElHSExJR0hUX0lURU0nLFxuICBDTEVBUl9BTEw6ICdDTEVBUl9BTEwnXG59O1xudmFyIEtFWV9DT0RFUyA9IHtcbiAgQkFDS19LRVk6IDQ2LFxuICBERUxFVEVfS0VZOiA4LFxuICBFTlRFUl9LRVk6IDEzLFxuICBBX0tFWTogNjUsXG4gIEVTQ19LRVk6IDI3LFxuICBVUF9LRVk6IDM4LFxuICBET1dOX0tFWTogNDAsXG4gIFBBR0VfVVBfS0VZOiAzMyxcbiAgUEFHRV9ET1dOX0tFWTogMzRcbn07XG52YXIgVEVYVF9UWVBFID0gJ3RleHQnO1xudmFyIFNFTEVDVF9PTkVfVFlQRSA9ICdzZWxlY3Qtb25lJztcbnZhciBTRUxFQ1RfTVVMVElQTEVfVFlQRSA9ICdzZWxlY3QtbXVsdGlwbGUnO1xudmFyIFNDUk9MTElOR19TUEVFRCA9IDQ7XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvY29udGFpbmVyLmpzXG5cblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMucGFzc2VkRWxlbWVudH0gcGFzc2VkRWxlbWVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkNsYXNzTmFtZXN9IENsYXNzTmFtZXNcbiAqL1xuXG52YXIgY29udGFpbmVyX0NvbnRhaW5lciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge3tcbiAgICogIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgKiAgdHlwZTogcGFzc2VkRWxlbWVudFsndHlwZSddLFxuICAgKiAgY2xhc3NOYW1lczogQ2xhc3NOYW1lcyxcbiAgICogIHBvc2l0aW9uXG4gICAqIH19IGFyZ3NcbiAgICovXG4gIGZ1bmN0aW9uIENvbnRhaW5lcihfcmVmKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQsXG4gICAgICAgIHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgICAgIGNsYXNzTmFtZXMgPSBfcmVmLmNsYXNzTmFtZXMsXG4gICAgICAgIHBvc2l0aW9uID0gX3JlZi5wb3NpdGlvbjtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmlzRmxpcHBlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNGb2N1c3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5fb25Gb2N1cyA9IHRoaXMuX29uRm9jdXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkJsdXIgPSB0aGlzLl9vbkJsdXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBDb250YWluZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5hZGRFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX29uRm9jdXMpO1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5fb25CbHVyKTtcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9vbkZvY3VzKTtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX29uQmx1cik7XG4gIH1cbiAgLyoqXG4gICAqIERldGVybWluZSB3aGV0aGVyIGNvbnRhaW5lciBzaG91bGQgYmUgZmxpcHBlZCBiYXNlZCBvbiBwYXNzZWRcbiAgICogZHJvcGRvd24gcG9zaXRpb25cbiAgICogQHBhcmFtIHtudW1iZXJ9IGRyb3Bkb3duUG9zXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zaG91bGRGbGlwID0gZnVuY3Rpb24gc2hvdWxkRmxpcChkcm9wZG93blBvcykge1xuICAgIGlmICh0eXBlb2YgZHJvcGRvd25Qb3MgIT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBJZiBmbGlwIGlzIGVuYWJsZWQgYW5kIHRoZSBkcm9wZG93biBib3R0b20gcG9zaXRpb24gaXNcbiAgICAvLyBncmVhdGVyIHRoYW4gdGhlIHdpbmRvdyBoZWlnaHQgZmxpcCB0aGUgZHJvcGRvd24uXG5cblxuICAgIHZhciBzaG91bGRGbGlwID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ2F1dG8nKSB7XG4gICAgICBzaG91bGRGbGlwID0gIXdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi1oZWlnaHQ6IFwiICsgKGRyb3Bkb3duUG9zICsgMSkgKyBcInB4KVwiKS5tYXRjaGVzO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgIHNob3VsZEZsaXAgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzaG91bGRGbGlwO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYWN0aXZlRGVzY2VuZGFudElEXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnNldEFjdGl2ZURlc2NlbmRhbnQgPSBmdW5jdGlvbiBzZXRBY3RpdmVEZXNjZW5kYW50KGFjdGl2ZURlc2NlbmRhbnRJRCkge1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIGFjdGl2ZURlc2NlbmRhbnRJRCk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZUFjdGl2ZURlc2NlbmRhbnQgPSBmdW5jdGlvbiByZW1vdmVBY3RpdmVEZXNjZW5kYW50KCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZHJvcGRvd25Qb3NcbiAgICovXG4gIDtcblxuICBfcHJvdG8ub3BlbiA9IGZ1bmN0aW9uIG9wZW4oZHJvcGRvd25Qb3MpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzTmFtZXMub3BlblN0YXRlKTtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5zaG91bGRGbGlwKGRyb3Bkb3duUG9zKSkge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLmZsaXBwZWRTdGF0ZSk7XG4gICAgICB0aGlzLmlzRmxpcHBlZCA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jbG9zZSA9IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NOYW1lcy5vcGVuU3RhdGUpO1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICB0aGlzLnJlbW92ZUFjdGl2ZURlc2NlbmRhbnQoKTtcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlOyAvLyBBIGRyb3Bkb3duIGZsaXBzIGlmIGl0IGRvZXMgbm90IGhhdmUgc3BhY2Ugd2l0aGluIHRoZSBwYWdlXG5cbiAgICBpZiAodGhpcy5pc0ZsaXBwZWQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NOYW1lcy5mbGlwcGVkU3RhdGUpO1xuICAgICAgdGhpcy5pc0ZsaXBwZWQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmZvY3VzID0gZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgaWYgKCF0aGlzLmlzRm9jdXNzZWQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uYWRkRm9jdXNTdGF0ZSA9IGZ1bmN0aW9uIGFkZEZvY3VzU3RhdGUoKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLmZvY3VzU3RhdGUpO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmVGb2N1c1N0YXRlID0gZnVuY3Rpb24gcmVtb3ZlRm9jdXNTdGF0ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzTmFtZXMuZm9jdXNTdGF0ZSk7XG4gIH07XG5cbiAgX3Byb3RvLmVuYWJsZSA9IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzTmFtZXMuZGlzYWJsZWRTdGF0ZSk7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcpO1xuXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gU0VMRUNUX09ORV9UWVBFKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgfVxuXG4gICAgdGhpcy5pc0Rpc2FibGVkID0gZmFsc2U7XG4gIH07XG5cbiAgX3Byb3RvLmRpc2FibGUgPSBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NOYW1lcy5kaXNhYmxlZFN0YXRlKTtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcblxuICAgIGlmICh0aGlzLnR5cGUgPT09IFNFTEVDVF9PTkVfVFlQRSkge1xuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICB9XG5cbiAgICB0aGlzLmlzRGlzYWJsZWQgPSB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLndyYXAgPSBmdW5jdGlvbiB3cmFwKGVsZW1lbnQpIHtcbiAgICB1dGlsc193cmFwKGVsZW1lbnQsIHRoaXMuZWxlbWVudCk7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by51bndyYXAgPSBmdW5jdGlvbiB1bndyYXAoZWxlbWVudCkge1xuICAgIC8vIE1vdmUgcGFzc2VkIGVsZW1lbnQgb3V0c2lkZSB0aGlzIGVsZW1lbnRcbiAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgdGhpcy5lbGVtZW50KTsgLy8gUmVtb3ZlIHRoaXMgZWxlbWVudFxuXG4gICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfTtcblxuICBfcHJvdG8uYWRkTG9hZGluZ1N0YXRlID0gZnVuY3Rpb24gYWRkTG9hZGluZ1N0YXRlKCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NOYW1lcy5sb2FkaW5nU3RhdGUpO1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYnVzeScsICd0cnVlJyk7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmVMb2FkaW5nU3RhdGUgPSBmdW5jdGlvbiByZW1vdmVMb2FkaW5nU3RhdGUoKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc05hbWVzLmxvYWRpbmdTdGF0ZSk7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1idXN5Jyk7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgfTtcblxuICBfcHJvdG8uX29uRm9jdXMgPSBmdW5jdGlvbiBfb25Gb2N1cygpIHtcbiAgICB0aGlzLmlzRm9jdXNzZWQgPSB0cnVlO1xuICB9O1xuXG4gIF9wcm90by5fb25CbHVyID0gZnVuY3Rpb24gX29uQmx1cigpIHtcbiAgICB0aGlzLmlzRm9jdXNzZWQgPSBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4gQ29udGFpbmVyO1xufSgpO1xuXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9pbnB1dC5qc1xuZnVuY3Rpb24gaW5wdXRfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIGlucHV0X2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgaW5wdXRfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGlucHV0X2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cblxuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5wYXNzZWRFbGVtZW50fSBwYXNzZWRFbGVtZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuQ2xhc3NOYW1lc30gQ2xhc3NOYW1lc1xuICovXG5cbnZhciBpbnB1dF9JbnB1dCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge3tcbiAgICogIGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQsXG4gICAqICB0eXBlOiBwYXNzZWRFbGVtZW50Wyd0eXBlJ10sXG4gICAqICBjbGFzc05hbWVzOiBDbGFzc05hbWVzLFxuICAgKiAgcHJldmVudFBhc3RlOiBib29sZWFuXG4gICAqIH19IGFyZ3NcbiAgICovXG4gIGZ1bmN0aW9uIElucHV0KF9yZWYpIHtcbiAgICB2YXIgZWxlbWVudCA9IF9yZWYuZWxlbWVudCxcbiAgICAgICAgdHlwZSA9IF9yZWYudHlwZSxcbiAgICAgICAgY2xhc3NOYW1lcyA9IF9yZWYuY2xhc3NOYW1lcyxcbiAgICAgICAgcHJldmVudFBhc3RlID0gX3JlZi5wcmV2ZW50UGFzdGU7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG4gICAgdGhpcy5wcmV2ZW50UGFzdGUgPSBwcmV2ZW50UGFzdGU7XG4gICAgdGhpcy5pc0ZvY3Vzc2VkID0gdGhpcy5lbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGVsZW1lbnQuZGlzYWJsZWQ7XG4gICAgdGhpcy5fb25QYXN0ZSA9IHRoaXMuX29uUGFzdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbklucHV0ID0gdGhpcy5fb25JbnB1dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uRm9jdXMgPSB0aGlzLl9vbkZvY3VzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25CbHVyID0gdGhpcy5fb25CbHVyLmJpbmQodGhpcyk7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwbGFjZWhvbGRlclxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBJbnB1dC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmFkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgdGhpcy5fb25QYXN0ZSk7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5fb25JbnB1dCwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX29uRm9jdXMsIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX29uQmx1ciwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmVFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuX29uSW5wdXQsIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGFzdGUnLCB0aGlzLl9vblBhc3RlKTtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9vbkZvY3VzLCB7XG4gICAgICBwYXNzaXZlOiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9vbkJsdXIsIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZW5hYmxlID0gZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgdGhpcy5pc0Rpc2FibGVkID0gZmFsc2U7XG4gIH07XG5cbiAgX3Byb3RvLmRpc2FibGUgPSBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuICAgIHRoaXMuaXNEaXNhYmxlZCA9IHRydWU7XG4gIH07XG5cbiAgX3Byb3RvLmZvY3VzID0gZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgaWYgKCF0aGlzLmlzRm9jdXNzZWQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uYmx1ciA9IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgaWYgKHRoaXMuaXNGb2N1c3NlZCkge1xuICAgICAgdGhpcy5lbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFNldCB2YWx1ZSBvZiBpbnB1dCB0byBibGFua1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNldFdpZHRoXG4gICAqIEByZXR1cm5zIHt0aGlzfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKHNldFdpZHRoKSB7XG4gICAgaWYgKHNldFdpZHRoID09PSB2b2lkIDApIHtcbiAgICAgIHNldFdpZHRoID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbGVtZW50LnZhbHVlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICBpZiAoc2V0V2lkdGgpIHtcbiAgICAgIHRoaXMuc2V0V2lkdGgoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICogU2V0IHRoZSBjb3JyZWN0IGlucHV0IHdpZHRoIGJhc2VkIG9uIHBsYWNlaG9sZGVyXG4gICAqIHZhbHVlIG9yIGlucHV0IHZhbHVlXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnNldFdpZHRoID0gZnVuY3Rpb24gc2V0V2lkdGgoKSB7XG4gICAgLy8gUmVzaXplIGlucHV0IHRvIGNvbnRlbnRzIG9yIHBsYWNlaG9sZGVyXG4gICAgdmFyIF90aGlzJGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQsXG4gICAgICAgIHN0eWxlID0gX3RoaXMkZWxlbWVudC5zdHlsZSxcbiAgICAgICAgdmFsdWUgPSBfdGhpcyRlbGVtZW50LnZhbHVlLFxuICAgICAgICBwbGFjZWhvbGRlciA9IF90aGlzJGVsZW1lbnQucGxhY2Vob2xkZXI7XG4gICAgc3R5bGUubWluV2lkdGggPSBwbGFjZWhvbGRlci5sZW5ndGggKyAxICsgXCJjaFwiO1xuICAgIHN0eWxlLndpZHRoID0gdmFsdWUubGVuZ3RoICsgMSArIFwiY2hcIjtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGl2ZURlc2NlbmRhbnRJRFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zZXRBY3RpdmVEZXNjZW5kYW50ID0gZnVuY3Rpb24gc2V0QWN0aXZlRGVzY2VuZGFudChhY3RpdmVEZXNjZW5kYW50SUQpIHtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBhY3RpdmVEZXNjZW5kYW50SUQpO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmVBY3RpdmVEZXNjZW5kYW50ID0gZnVuY3Rpb24gcmVtb3ZlQWN0aXZlRGVzY2VuZGFudCgpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgfTtcblxuICBfcHJvdG8uX29uSW5wdXQgPSBmdW5jdGlvbiBfb25JbnB1dCgpIHtcbiAgICBpZiAodGhpcy50eXBlICE9PSBTRUxFQ1RfT05FX1RZUEUpIHtcbiAgICAgIHRoaXMuc2V0V2lkdGgoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLl9vblBhc3RlID0gZnVuY3Rpb24gX29uUGFzdGUoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5wcmV2ZW50UGFzdGUpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fb25Gb2N1cyA9IGZ1bmN0aW9uIF9vbkZvY3VzKCkge1xuICAgIHRoaXMuaXNGb2N1c3NlZCA9IHRydWU7XG4gIH07XG5cbiAgX3Byb3RvLl9vbkJsdXIgPSBmdW5jdGlvbiBfb25CbHVyKCkge1xuICAgIHRoaXMuaXNGb2N1c3NlZCA9IGZhbHNlO1xuICB9O1xuXG4gIGlucHV0X2NyZWF0ZUNsYXNzKElucHV0LCBbe1xuICAgIGtleTogXCJwbGFjZWhvbGRlclwiLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHBsYWNlaG9sZGVyKSB7XG4gICAgICB0aGlzLmVsZW1lbnQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gc2FuaXRpc2UodGhpcy5lbGVtZW50LnZhbHVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICovXG4gICAgLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSW5wdXQ7XG59KCk7XG5cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2xpc3QuanNcblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuQ2hvaWNlfSBDaG9pY2VcbiAqL1xuXG52YXIgbGlzdF9MaXN0ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7eyBlbGVtZW50OiBIVE1MRWxlbWVudCB9fSBhcmdzXG4gICAqL1xuICBmdW5jdGlvbiBMaXN0KF9yZWYpIHtcbiAgICB2YXIgZWxlbWVudCA9IF9yZWYuZWxlbWVudDtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuc2Nyb2xsUG9zID0gdGhpcy5lbGVtZW50LnNjcm9sbFRvcDtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gTGlzdC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnQgfCBEb2N1bWVudEZyYWdtZW50fSBub2RlXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmFwcGVuZCA9IGZ1bmN0aW9uIGFwcGVuZChub2RlKSB7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAgICogQHJldHVybnMge0VsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5nZXRDaGlsZCA9IGZ1bmN0aW9uIGdldENoaWxkKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfVxuICAvKipcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmhhc0NoaWxkcmVuID0gZnVuY3Rpb24gaGFzQ2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5oYXNDaGlsZE5vZGVzKCk7XG4gIH07XG5cbiAgX3Byb3RvLnNjcm9sbFRvVG9wID0gZnVuY3Rpb24gc2Nyb2xsVG9Ub3AoKSB7XG4gICAgdGhpcy5lbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0gezEgfCAtMX0gZGlyZWN0aW9uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnNjcm9sbFRvQ2hpbGRFbGVtZW50ID0gZnVuY3Rpb24gc2Nyb2xsVG9DaGlsZEVsZW1lbnQoZWxlbWVudCwgZGlyZWN0aW9uKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBsaXN0SGVpZ2h0ID0gdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodDsgLy8gU2Nyb2xsIHBvc2l0aW9uIG9mIGRyb3Bkb3duXG5cbiAgICB2YXIgbGlzdFNjcm9sbFBvc2l0aW9uID0gdGhpcy5lbGVtZW50LnNjcm9sbFRvcCArIGxpc3RIZWlnaHQ7XG4gICAgdmFyIGVsZW1lbnRIZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDsgLy8gRGlzdGFuY2UgZnJvbSBib3R0b20gb2YgZWxlbWVudCB0byB0b3Agb2YgcGFyZW50XG5cbiAgICB2YXIgZWxlbWVudFBvcyA9IGVsZW1lbnQub2Zmc2V0VG9wICsgZWxlbWVudEhlaWdodDsgLy8gRGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBlbGVtZW50IGFuZCBzY3JvbGwgcG9zaXRpb25cblxuICAgIHZhciBkZXN0aW5hdGlvbiA9IGRpcmVjdGlvbiA+IDAgPyB0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wICsgZWxlbWVudFBvcyAtIGxpc3RTY3JvbGxQb3NpdGlvbiA6IGVsZW1lbnQub2Zmc2V0VG9wO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5fYW5pbWF0ZVNjcm9sbChkZXN0aW5hdGlvbiwgZGlyZWN0aW9uKTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFBvc1xuICAgKiBAcGFyYW0ge251bWJlcn0gc3RyZW5ndGhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRlc3RpbmF0aW9uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLl9zY3JvbGxEb3duID0gZnVuY3Rpb24gX3Njcm9sbERvd24oc2Nyb2xsUG9zLCBzdHJlbmd0aCwgZGVzdGluYXRpb24pIHtcbiAgICB2YXIgZWFzaW5nID0gKGRlc3RpbmF0aW9uIC0gc2Nyb2xsUG9zKSAvIHN0cmVuZ3RoO1xuICAgIHZhciBkaXN0YW5jZSA9IGVhc2luZyA+IDEgPyBlYXNpbmcgOiAxO1xuICAgIHRoaXMuZWxlbWVudC5zY3JvbGxUb3AgPSBzY3JvbGxQb3MgKyBkaXN0YW5jZTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFBvc1xuICAgKiBAcGFyYW0ge251bWJlcn0gc3RyZW5ndGhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRlc3RpbmF0aW9uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLl9zY3JvbGxVcCA9IGZ1bmN0aW9uIF9zY3JvbGxVcChzY3JvbGxQb3MsIHN0cmVuZ3RoLCBkZXN0aW5hdGlvbikge1xuICAgIHZhciBlYXNpbmcgPSAoc2Nyb2xsUG9zIC0gZGVzdGluYXRpb24pIC8gc3RyZW5ndGg7XG4gICAgdmFyIGRpc3RhbmNlID0gZWFzaW5nID4gMSA/IGVhc2luZyA6IDE7XG4gICAgdGhpcy5lbGVtZW50LnNjcm9sbFRvcCA9IHNjcm9sbFBvcyAtIGRpc3RhbmNlO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0geyp9IGRlc3RpbmF0aW9uXG4gICAqIEBwYXJhbSB7Kn0gZGlyZWN0aW9uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLl9hbmltYXRlU2Nyb2xsID0gZnVuY3Rpb24gX2FuaW1hdGVTY3JvbGwoZGVzdGluYXRpb24sIGRpcmVjdGlvbikge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIHN0cmVuZ3RoID0gU0NST0xMSU5HX1NQRUVEO1xuICAgIHZhciBjaG9pY2VMaXN0U2Nyb2xsVG9wID0gdGhpcy5lbGVtZW50LnNjcm9sbFRvcDtcbiAgICB2YXIgY29udGludWVBbmltYXRpb24gPSBmYWxzZTtcblxuICAgIGlmIChkaXJlY3Rpb24gPiAwKSB7XG4gICAgICB0aGlzLl9zY3JvbGxEb3duKGNob2ljZUxpc3RTY3JvbGxUb3AsIHN0cmVuZ3RoLCBkZXN0aW5hdGlvbik7XG5cbiAgICAgIGlmIChjaG9pY2VMaXN0U2Nyb2xsVG9wIDwgZGVzdGluYXRpb24pIHtcbiAgICAgICAgY29udGludWVBbmltYXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zY3JvbGxVcChjaG9pY2VMaXN0U2Nyb2xsVG9wLCBzdHJlbmd0aCwgZGVzdGluYXRpb24pO1xuXG4gICAgICBpZiAoY2hvaWNlTGlzdFNjcm9sbFRvcCA+IGRlc3RpbmF0aW9uKSB7XG4gICAgICAgIGNvbnRpbnVlQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29udGludWVBbmltYXRpb24pIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5fYW5pbWF0ZVNjcm9sbChkZXN0aW5hdGlvbiwgZGlyZWN0aW9uKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gTGlzdDtcbn0oKTtcblxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvd3JhcHBlZC1lbGVtZW50LmpzXG5mdW5jdGlvbiB3cmFwcGVkX2VsZW1lbnRfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIHdyYXBwZWRfZWxlbWVudF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIHdyYXBwZWRfZWxlbWVudF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgd3JhcHBlZF9lbGVtZW50X2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMucGFzc2VkRWxlbWVudH0gcGFzc2VkRWxlbWVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkNsYXNzTmFtZXN9IENsYXNzTmFtZXNcbiAqL1xuXG52YXIgd3JhcHBlZF9lbGVtZW50X1dyYXBwZWRFbGVtZW50ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7e1xuICAgKiAgZWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50LFxuICAgKiAgY2xhc3NOYW1lczogQ2xhc3NOYW1lcyxcbiAgICogfX0gYXJnc1xuICAgKi9cbiAgZnVuY3Rpb24gV3JhcHBlZEVsZW1lbnQoX3JlZikge1xuICAgIHZhciBlbGVtZW50ID0gX3JlZi5lbGVtZW50LFxuICAgICAgICBjbGFzc05hbWVzID0gX3JlZi5jbGFzc05hbWVzO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblxuICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSAmJiAhKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgZWxlbWVudCBwYXNzZWQnKTtcbiAgICB9XG5cbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBXcmFwcGVkRWxlbWVudC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbmNlYWwgPSBmdW5jdGlvbiBjb25jZWFsKCkge1xuICAgIC8vIEhpZGUgcGFzc2VkIGlucHV0XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLmlucHV0KTtcbiAgICB0aGlzLmVsZW1lbnQuaGlkZGVuID0gdHJ1ZTsgLy8gUmVtb3ZlIGVsZW1lbnQgZnJvbSB0YWIgaW5kZXhcblxuICAgIHRoaXMuZWxlbWVudC50YWJJbmRleCA9IC0xOyAvLyBCYWNrdXAgb3JpZ2luYWwgc3R5bGVzIGlmIGFueVxuXG4gICAgdmFyIG9yaWdTdHlsZSA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XG5cbiAgICBpZiAob3JpZ1N0eWxlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNob2ljZS1vcmlnLXN0eWxlJywgb3JpZ1N0eWxlKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNob2ljZScsICdhY3RpdmUnKTtcbiAgfTtcblxuICBfcHJvdG8ucmV2ZWFsID0gZnVuY3Rpb24gcmV2ZWFsKCkge1xuICAgIC8vIFJlaW5zdGF0ZSBwYXNzZWQgZWxlbWVudFxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NOYW1lcy5pbnB1dCk7XG4gICAgdGhpcy5lbGVtZW50LmhpZGRlbiA9IGZhbHNlO1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7IC8vIFJlY292ZXIgb3JpZ2luYWwgc3R5bGVzIGlmIGFueVxuXG4gICAgdmFyIG9yaWdTdHlsZSA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2hvaWNlLW9yaWctc3R5bGUnKTtcblxuICAgIGlmIChvcmlnU3R5bGUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtY2hvaWNlLW9yaWctc3R5bGUnKTtcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgb3JpZ1N0eWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWNob2ljZScpOyAvLyBSZS1hc3NpZ24gdmFsdWVzIC0gdGhpcyBpcyB3ZWlyZCwgSSBrbm93XG4gICAgLy8gQHRvZG8gRmlndXJlIG91dCB3aHkgd2UgbmVlZCB0byBkbyB0aGlzXG5cbiAgICB0aGlzLmVsZW1lbnQudmFsdWUgPSB0aGlzLmVsZW1lbnQudmFsdWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1hc3NpZ25cbiAgfTtcblxuICBfcHJvdG8uZW5hYmxlID0gZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgdGhpcy5lbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5pc0Rpc2FibGVkID0gZmFsc2U7XG4gIH07XG5cbiAgX3Byb3RvLmRpc2FibGUgPSBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuICAgIHRoaXMuZWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy5pc0Rpc2FibGVkID0gdHJ1ZTtcbiAgfTtcblxuICBfcHJvdG8udHJpZ2dlckV2ZW50ID0gZnVuY3Rpb24gdHJpZ2dlckV2ZW50KGV2ZW50VHlwZSwgZGF0YSkge1xuICAgIGRpc3BhdGNoRXZlbnQodGhpcy5lbGVtZW50LCBldmVudFR5cGUsIGRhdGEpO1xuICB9O1xuXG4gIHdyYXBwZWRfZWxlbWVudF9jcmVhdGVDbGFzcyhXcmFwcGVkRWxlbWVudCwgW3tcbiAgICBrZXk6IFwiaXNBY3RpdmVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZGF0YXNldC5jaG9pY2UgPT09ICdhY3RpdmUnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkaXJcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZGlyO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC52YWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICAvLyB5b3UgbXVzdCBkZWZpbmUgc2V0dGVyIGhlcmUgb3RoZXJ3aXNlIGl0IHdpbGwgYmUgcmVhZG9ubHkgcHJvcGVydHlcbiAgICAgIHRoaXMuZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBXcmFwcGVkRWxlbWVudDtcbn0oKTtcblxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvd3JhcHBlZC1pbnB1dC5qc1xuZnVuY3Rpb24gd3JhcHBlZF9pbnB1dF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gd3JhcHBlZF9pbnB1dF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIHdyYXBwZWRfaW5wdXRfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIHdyYXBwZWRfaW5wdXRfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuQ2xhc3NOYW1lc30gQ2xhc3NOYW1lc1xuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkl0ZW19IEl0ZW1cbiAqL1xuXG52YXIgV3JhcHBlZElucHV0ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfV3JhcHBlZEVsZW1lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoV3JhcHBlZElucHV0LCBfV3JhcHBlZEVsZW1lbnQpO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3tcbiAgICogIGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQsXG4gICAqICBjbGFzc05hbWVzOiBDbGFzc05hbWVzLFxuICAgKiAgZGVsaW1pdGVyOiBzdHJpbmdcbiAgICogfX0gYXJnc1xuICAgKi9cbiAgZnVuY3Rpb24gV3JhcHBlZElucHV0KF9yZWYpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICB2YXIgZWxlbWVudCA9IF9yZWYuZWxlbWVudCxcbiAgICAgICAgY2xhc3NOYW1lcyA9IF9yZWYuY2xhc3NOYW1lcyxcbiAgICAgICAgZGVsaW1pdGVyID0gX3JlZi5kZWxpbWl0ZXI7XG4gICAgX3RoaXMgPSBfV3JhcHBlZEVsZW1lbnQuY2FsbCh0aGlzLCB7XG4gICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgY2xhc3NOYW1lczogY2xhc3NOYW1lc1xuICAgIH0pIHx8IHRoaXM7XG4gICAgX3RoaXMuZGVsaW1pdGVyID0gZGVsaW1pdGVyO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICAvKipcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG5cblxuICB3cmFwcGVkX2lucHV0X2NyZWF0ZUNsYXNzKFdyYXBwZWRJbnB1dCwgW3tcbiAgICBrZXk6IFwidmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQudmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7SXRlbVtdfSBpdGVtc1xuICAgICAqL1xuICAgICxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChpdGVtcykge1xuICAgICAgdmFyIGl0ZW1WYWx1ZXMgPSBpdGVtcy5tYXAoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IF9yZWYyLnZhbHVlO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHZhciBqb2luZWRWYWx1ZXMgPSBpdGVtVmFsdWVzLmpvaW4odGhpcy5kZWxpbWl0ZXIpO1xuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBqb2luZWRWYWx1ZXMpO1xuICAgICAgdGhpcy5lbGVtZW50LnZhbHVlID0gam9pbmVkVmFsdWVzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBXcmFwcGVkSW5wdXQ7XG59KHdyYXBwZWRfZWxlbWVudF9XcmFwcGVkRWxlbWVudCk7XG5cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3dyYXBwZWQtc2VsZWN0LmpzXG5mdW5jdGlvbiB3cmFwcGVkX3NlbGVjdF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gd3JhcHBlZF9zZWxlY3RfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSB3cmFwcGVkX3NlbGVjdF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgd3JhcHBlZF9zZWxlY3RfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gd3JhcHBlZF9zZWxlY3RfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5DbGFzc05hbWVzfSBDbGFzc05hbWVzXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuSXRlbX0gSXRlbVxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkNob2ljZX0gQ2hvaWNlXG4gKi9cblxudmFyIFdyYXBwZWRTZWxlY3QgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9XcmFwcGVkRWxlbWVudCkge1xuICB3cmFwcGVkX3NlbGVjdF9pbmhlcml0c0xvb3NlKFdyYXBwZWRTZWxlY3QsIF9XcmFwcGVkRWxlbWVudCk7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7e1xuICAgKiAgZWxlbWVudDogSFRNTFNlbGVjdEVsZW1lbnQsXG4gICAqICBjbGFzc05hbWVzOiBDbGFzc05hbWVzLFxuICAgKiAgZGVsaW1pdGVyOiBzdHJpbmdcbiAgICogIHRlbXBsYXRlOiBmdW5jdGlvblxuICAgKiB9fSBhcmdzXG4gICAqL1xuICBmdW5jdGlvbiBXcmFwcGVkU2VsZWN0KF9yZWYpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICB2YXIgZWxlbWVudCA9IF9yZWYuZWxlbWVudCxcbiAgICAgICAgY2xhc3NOYW1lcyA9IF9yZWYuY2xhc3NOYW1lcyxcbiAgICAgICAgdGVtcGxhdGUgPSBfcmVmLnRlbXBsYXRlO1xuICAgIF90aGlzID0gX1dyYXBwZWRFbGVtZW50LmNhbGwodGhpcywge1xuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIGNsYXNzTmFtZXM6IGNsYXNzTmFtZXNcbiAgICB9KSB8fCB0aGlzO1xuICAgIF90aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFdyYXBwZWRTZWxlY3QucHJvdG90eXBlO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0RvY3VtZW50RnJhZ21lbnR9IGZyYWdtZW50XG4gICAqL1xuICBfcHJvdG8uYXBwZW5kRG9jRnJhZ21lbnQgPSBmdW5jdGlvbiBhcHBlbmREb2NGcmFnbWVudChmcmFnbWVudCkge1xuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICB9O1xuXG4gIHdyYXBwZWRfc2VsZWN0X2NyZWF0ZUNsYXNzKFdyYXBwZWRTZWxlY3QsIFt7XG4gICAga2V5OiBcInBsYWNlaG9sZGVyT3B0aW9uXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ29wdGlvblt2YWx1ZT1cIlwiXScpIHx8IC8vIEJhY2t3YXJkIGNvbXBhdGliaWxpdHkgbGF5ZXIgZm9yIHRoZSBub24tc3RhbmRhcmQgcGxhY2Vob2xkZXIgYXR0cmlidXRlIHN1cHBvcnRlZCBpbiBvbGRlciB2ZXJzaW9ucy5cbiAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdvcHRpb25bcGxhY2Vob2xkZXJdJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtFbGVtZW50W119XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvcHRpb25Hcm91cHNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnT1BUR1JPVVAnKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtJdGVtW10gfCBDaG9pY2VbXX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9wdGlvbnNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuZWxlbWVudC5vcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtJdGVtW10gfCBDaG9pY2VbXX0gb3B0aW9uc1xuICAgICAqL1xuICAgICxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChvcHRpb25zKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgICB2YXIgYWRkT3B0aW9uVG9GcmFnbWVudCA9IGZ1bmN0aW9uIGFkZE9wdGlvblRvRnJhZ21lbnQoZGF0YSkge1xuICAgICAgICAvLyBDcmVhdGUgYSBzdGFuZGFyZCBzZWxlY3Qgb3B0aW9uXG4gICAgICAgIHZhciBvcHRpb24gPSBfdGhpczIudGVtcGxhdGUoZGF0YSk7IC8vIEFwcGVuZCBpdCB0byBmcmFnbWVudFxuXG5cbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgIH07IC8vIEFkZCBlYWNoIGxpc3QgaXRlbSB0byBsaXN0XG5cblxuICAgICAgb3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChvcHRpb25EYXRhKSB7XG4gICAgICAgIHJldHVybiBhZGRPcHRpb25Ub0ZyYWdtZW50KG9wdGlvbkRhdGEpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmFwcGVuZERvY0ZyYWdtZW50KGZyYWdtZW50KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gV3JhcHBlZFNlbGVjdDtcbn0od3JhcHBlZF9lbGVtZW50X1dyYXBwZWRFbGVtZW50KTtcblxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvaW5kZXguanNcblxuXG5cblxuXG5cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvc2NyaXB0cy90ZW1wbGF0ZXMuanNcbi8qKlxuICogSGVscGVycyB0byBjcmVhdGUgSFRNTCBlbGVtZW50cyB1c2VkIGJ5IENob2ljZXNcbiAqIENhbiBiZSBvdmVycmlkZGVuIGJ5IHByb3ZpZGluZyBgY2FsbGJhY2tPbkNyZWF0ZVRlbXBsYXRlc2Agb3B0aW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuVGVtcGxhdGVzfSBUZW1wbGF0ZXNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5DbGFzc05hbWVzfSBDbGFzc05hbWVzXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuT3B0aW9uc30gT3B0aW9uc1xuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkl0ZW19IEl0ZW1cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5DaG9pY2V9IENob2ljZVxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkdyb3VwfSBHcm91cFxuICovXG52YXIgVEVNUExBVEVTID1cbi8qKiBAdHlwZSB7VGVtcGxhdGVzfSAqL1xue1xuICAvKipcbiAgICogQHBhcmFtIHtQYXJ0aWFsPENsYXNzTmFtZXM+fSBjbGFzc05hbWVzXG4gICAqIEBwYXJhbSB7XCJsdHJcIiB8IFwicnRsXCIgfCBcImF1dG9cIn0gZGlyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTZWxlY3RFbGVtZW50XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTZWxlY3RPbmVFbGVtZW50XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2VhcmNoRW5hYmxlZFxuICAgKiBAcGFyYW0ge1wic2VsZWN0LW9uZVwiIHwgXCJzZWxlY3QtbXVsdGlwbGVcIiB8IFwidGV4dFwifSBwYXNzZWRFbGVtZW50VHlwZVxuICAgKi9cbiAgY29udGFpbmVyT3V0ZXI6IGZ1bmN0aW9uIGNvbnRhaW5lck91dGVyKF9yZWYsIGRpciwgaXNTZWxlY3RFbGVtZW50LCBpc1NlbGVjdE9uZUVsZW1lbnQsIHNlYXJjaEVuYWJsZWQsIHBhc3NlZEVsZW1lbnRUeXBlKSB7XG4gICAgdmFyIF9jb250YWluZXJPdXRlciA9IF9yZWYuY29udGFpbmVyT3V0ZXI7XG4gICAgdmFyIGRpdiA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHtcbiAgICAgIGNsYXNzTmFtZTogX2NvbnRhaW5lck91dGVyXG4gICAgfSk7XG4gICAgZGl2LmRhdGFzZXQudHlwZSA9IHBhc3NlZEVsZW1lbnRUeXBlO1xuXG4gICAgaWYgKGRpcikge1xuICAgICAgZGl2LmRpciA9IGRpcjtcbiAgICB9XG5cbiAgICBpZiAoaXNTZWxlY3RPbmVFbGVtZW50KSB7XG4gICAgICBkaXYudGFiSW5kZXggPSAwO1xuICAgIH1cblxuICAgIGlmIChpc1NlbGVjdEVsZW1lbnQpIHtcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCBzZWFyY2hFbmFibGVkID8gJ2NvbWJvYm94JyA6ICdsaXN0Ym94Jyk7XG5cbiAgICAgIGlmIChzZWFyY2hFbmFibGVkKSB7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtYXV0b2NvbXBsZXRlJywgJ2xpc3QnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkaXYuc2V0QXR0cmlidXRlKCdhcmlhLWhhc3BvcHVwJywgJ3RydWUnKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtQYXJ0aWFsPENsYXNzTmFtZXM+fSBjbGFzc05hbWVzXG4gICAqL1xuICBjb250YWluZXJJbm5lcjogZnVuY3Rpb24gY29udGFpbmVySW5uZXIoX3JlZjIpIHtcbiAgICB2YXIgX2NvbnRhaW5lcklubmVyID0gX3JlZjIuY29udGFpbmVySW5uZXI7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHtcbiAgICAgIGNsYXNzTmFtZTogX2NvbnRhaW5lcklubmVyXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7UGFydGlhbDxDbGFzc05hbWVzPn0gY2xhc3NOYW1lc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzU2VsZWN0T25lRWxlbWVudFxuICAgKi9cbiAgaXRlbUxpc3Q6IGZ1bmN0aW9uIGl0ZW1MaXN0KF9yZWYzLCBpc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICB2YXIgbGlzdCA9IF9yZWYzLmxpc3QsXG4gICAgICAgIGxpc3RTaW5nbGUgPSBfcmVmMy5saXN0U2luZ2xlLFxuICAgICAgICBsaXN0SXRlbXMgPSBfcmVmMy5saXN0SXRlbXM7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHtcbiAgICAgIGNsYXNzTmFtZTogbGlzdCArIFwiIFwiICsgKGlzU2VsZWN0T25lRWxlbWVudCA/IGxpc3RTaW5nbGUgOiBsaXN0SXRlbXMpXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7UGFydGlhbDxDbGFzc05hbWVzPn0gY2xhc3NOYW1lc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICovXG4gIHBsYWNlaG9sZGVyOiBmdW5jdGlvbiBwbGFjZWhvbGRlcihfcmVmNCwgdmFsdWUpIHtcbiAgICB2YXIgX3BsYWNlaG9sZGVyID0gX3JlZjQucGxhY2Vob2xkZXI7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHtcbiAgICAgIGNsYXNzTmFtZTogX3BsYWNlaG9sZGVyLFxuICAgICAgaW5uZXJIVE1MOiB2YWx1ZVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1BhcnRpYWw8Q2xhc3NOYW1lcz59IGNsYXNzTmFtZXNcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVtb3ZlSXRlbUJ1dHRvblxuICAgKi9cbiAgaXRlbTogZnVuY3Rpb24gaXRlbShfcmVmNSwgX3JlZjYsIHJlbW92ZUl0ZW1CdXR0b24pIHtcbiAgICB2YXIgX2l0ZW0gPSBfcmVmNS5pdGVtLFxuICAgICAgICBidXR0b24gPSBfcmVmNS5idXR0b24sXG4gICAgICAgIGhpZ2hsaWdodGVkU3RhdGUgPSBfcmVmNS5oaWdobGlnaHRlZFN0YXRlLFxuICAgICAgICBpdGVtU2VsZWN0YWJsZSA9IF9yZWY1Lml0ZW1TZWxlY3RhYmxlLFxuICAgICAgICBwbGFjZWhvbGRlciA9IF9yZWY1LnBsYWNlaG9sZGVyO1xuICAgIHZhciBpZCA9IF9yZWY2LmlkLFxuICAgICAgICB2YWx1ZSA9IF9yZWY2LnZhbHVlLFxuICAgICAgICBsYWJlbCA9IF9yZWY2LmxhYmVsLFxuICAgICAgICBjdXN0b21Qcm9wZXJ0aWVzID0gX3JlZjYuY3VzdG9tUHJvcGVydGllcyxcbiAgICAgICAgYWN0aXZlID0gX3JlZjYuYWN0aXZlLFxuICAgICAgICBkaXNhYmxlZCA9IF9yZWY2LmRpc2FibGVkLFxuICAgICAgICBoaWdobGlnaHRlZCA9IF9yZWY2LmhpZ2hsaWdodGVkLFxuICAgICAgICBpc1BsYWNlaG9sZGVyID0gX3JlZjYucGxhY2Vob2xkZXI7XG4gICAgdmFyIGRpdiA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHtcbiAgICAgIGNsYXNzTmFtZTogX2l0ZW0sXG4gICAgICBpbm5lckhUTUw6IGxhYmVsXG4gICAgfSk7XG4gICAgT2JqZWN0LmFzc2lnbihkaXYuZGF0YXNldCwge1xuICAgICAgaXRlbTogJycsXG4gICAgICBpZDogaWQsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBjdXN0b21Qcm9wZXJ0aWVzOiBjdXN0b21Qcm9wZXJ0aWVzXG4gICAgfSk7XG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgIH1cblxuICAgIGlmIChpc1BsYWNlaG9sZGVyKSB7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChwbGFjZWhvbGRlcik7XG4gICAgfVxuXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoaGlnaGxpZ2h0ZWQgPyBoaWdobGlnaHRlZFN0YXRlIDogaXRlbVNlbGVjdGFibGUpO1xuXG4gICAgaWYgKHJlbW92ZUl0ZW1CdXR0b24pIHtcbiAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZShpdGVtU2VsZWN0YWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGRpdi5kYXRhc2V0LmRlbGV0YWJsZSA9ICcnO1xuICAgICAgLyoqIEB0b2RvIFRoaXMgTVVTVCBiZSBsb2NhbGl6YWJsZSwgbm90IGhhcmRjb2RlZCEgKi9cblxuICAgICAgdmFyIFJFTU9WRV9JVEVNX1RFWFQgPSAnUmVtb3ZlIGl0ZW0nO1xuICAgICAgdmFyIHJlbW92ZUJ1dHRvbiA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksIHtcbiAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgIGNsYXNzTmFtZTogYnV0dG9uLFxuICAgICAgICBpbm5lckhUTUw6IFJFTU9WRV9JVEVNX1RFWFRcbiAgICAgIH0pO1xuICAgICAgcmVtb3ZlQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIFJFTU9WRV9JVEVNX1RFWFQgKyBcIjogJ1wiICsgdmFsdWUgKyBcIidcIik7XG4gICAgICByZW1vdmVCdXR0b24uZGF0YXNldC5idXR0b24gPSAnJztcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChyZW1vdmVCdXR0b24pO1xuICAgIH1cblxuICAgIHJldHVybiBkaXY7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7UGFydGlhbDxDbGFzc05hbWVzPn0gY2xhc3NOYW1lc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzU2VsZWN0T25lRWxlbWVudFxuICAgKi9cbiAgY2hvaWNlTGlzdDogZnVuY3Rpb24gY2hvaWNlTGlzdChfcmVmNywgaXNTZWxlY3RPbmVFbGVtZW50KSB7XG4gICAgdmFyIGxpc3QgPSBfcmVmNy5saXN0O1xuICAgIHZhciBkaXYgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCB7XG4gICAgICBjbGFzc05hbWU6IGxpc3RcbiAgICB9KTtcblxuICAgIGlmICghaXNTZWxlY3RPbmVFbGVtZW50KSB7XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdhcmlhLW11bHRpc2VsZWN0YWJsZScsICd0cnVlJyk7XG4gICAgfVxuXG4gICAgZGl2LnNldEF0dHJpYnV0ZSgncm9sZScsICdsaXN0Ym94Jyk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtQYXJ0aWFsPENsYXNzTmFtZXM+fSBjbGFzc05hbWVzXG4gICAqIEBwYXJhbSB7R3JvdXB9IGdyb3VwXG4gICAqL1xuICBjaG9pY2VHcm91cDogZnVuY3Rpb24gY2hvaWNlR3JvdXAoX3JlZjgsIF9yZWY5KSB7XG4gICAgdmFyIGdyb3VwID0gX3JlZjguZ3JvdXAsXG4gICAgICAgIGdyb3VwSGVhZGluZyA9IF9yZWY4Lmdyb3VwSGVhZGluZyxcbiAgICAgICAgaXRlbURpc2FibGVkID0gX3JlZjguaXRlbURpc2FibGVkO1xuICAgIHZhciBpZCA9IF9yZWY5LmlkLFxuICAgICAgICB2YWx1ZSA9IF9yZWY5LnZhbHVlLFxuICAgICAgICBkaXNhYmxlZCA9IF9yZWY5LmRpc2FibGVkO1xuICAgIHZhciBkaXYgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCB7XG4gICAgICBjbGFzc05hbWU6IGdyb3VwICsgXCIgXCIgKyAoZGlzYWJsZWQgPyBpdGVtRGlzYWJsZWQgOiAnJylcbiAgICB9KTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2dyb3VwJyk7XG4gICAgT2JqZWN0LmFzc2lnbihkaXYuZGF0YXNldCwge1xuICAgICAgZ3JvdXA6ICcnLFxuICAgICAgaWQ6IGlkLFxuICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfSk7XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgIH1cblxuICAgIGRpdi5hcHBlbmRDaGlsZChPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCB7XG4gICAgICBjbGFzc05hbWU6IGdyb3VwSGVhZGluZyxcbiAgICAgIGlubmVySFRNTDogdmFsdWVcbiAgICB9KSk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtQYXJ0aWFsPENsYXNzTmFtZXM+fSBjbGFzc05hbWVzXG4gICAqIEBwYXJhbSB7Q2hvaWNlfSBjaG9pY2VcbiAgICogQHBhcmFtIHtPcHRpb25zWydpdGVtU2VsZWN0VGV4dCddfSBzZWxlY3RUZXh0XG4gICAqL1xuICBjaG9pY2U6IGZ1bmN0aW9uIGNob2ljZShfcmVmMTAsIF9yZWYxMSwgc2VsZWN0VGV4dCkge1xuICAgIHZhciBpdGVtID0gX3JlZjEwLml0ZW0sXG4gICAgICAgIGl0ZW1DaG9pY2UgPSBfcmVmMTAuaXRlbUNob2ljZSxcbiAgICAgICAgaXRlbVNlbGVjdGFibGUgPSBfcmVmMTAuaXRlbVNlbGVjdGFibGUsXG4gICAgICAgIHNlbGVjdGVkU3RhdGUgPSBfcmVmMTAuc2VsZWN0ZWRTdGF0ZSxcbiAgICAgICAgaXRlbURpc2FibGVkID0gX3JlZjEwLml0ZW1EaXNhYmxlZCxcbiAgICAgICAgcGxhY2Vob2xkZXIgPSBfcmVmMTAucGxhY2Vob2xkZXI7XG4gICAgdmFyIGlkID0gX3JlZjExLmlkLFxuICAgICAgICB2YWx1ZSA9IF9yZWYxMS52YWx1ZSxcbiAgICAgICAgbGFiZWwgPSBfcmVmMTEubGFiZWwsXG4gICAgICAgIGdyb3VwSWQgPSBfcmVmMTEuZ3JvdXBJZCxcbiAgICAgICAgZWxlbWVudElkID0gX3JlZjExLmVsZW1lbnRJZCxcbiAgICAgICAgaXNEaXNhYmxlZCA9IF9yZWYxMS5kaXNhYmxlZCxcbiAgICAgICAgaXNTZWxlY3RlZCA9IF9yZWYxMS5zZWxlY3RlZCxcbiAgICAgICAgaXNQbGFjZWhvbGRlciA9IF9yZWYxMS5wbGFjZWhvbGRlcjtcbiAgICB2YXIgZGl2ID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwge1xuICAgICAgaWQ6IGVsZW1lbnRJZCxcbiAgICAgIGlubmVySFRNTDogbGFiZWwsXG4gICAgICBjbGFzc05hbWU6IGl0ZW0gKyBcIiBcIiArIGl0ZW1DaG9pY2VcbiAgICB9KTtcblxuICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChzZWxlY3RlZFN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoaXNQbGFjZWhvbGRlcikge1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQocGxhY2Vob2xkZXIpO1xuICAgIH1cblxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCBncm91cElkID4gMCA/ICd0cmVlaXRlbScgOiAnb3B0aW9uJyk7XG4gICAgT2JqZWN0LmFzc2lnbihkaXYuZGF0YXNldCwge1xuICAgICAgY2hvaWNlOiAnJyxcbiAgICAgIGlkOiBpZCxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHNlbGVjdFRleHQ6IHNlbGVjdFRleHRcbiAgICB9KTtcblxuICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChpdGVtRGlzYWJsZWQpO1xuICAgICAgZGl2LmRhdGFzZXQuY2hvaWNlRGlzYWJsZWQgPSAnJztcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChpdGVtU2VsZWN0YWJsZSk7XG4gICAgICBkaXYuZGF0YXNldC5jaG9pY2VTZWxlY3RhYmxlID0gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpdjtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtQYXJ0aWFsPENsYXNzTmFtZXM+fSBjbGFzc05hbWVzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwbGFjZWhvbGRlclZhbHVlXG4gICAqL1xuICBpbnB1dDogZnVuY3Rpb24gaW5wdXQoX3JlZjEyLCBwbGFjZWhvbGRlclZhbHVlKSB7XG4gICAgdmFyIF9pbnB1dCA9IF9yZWYxMi5pbnB1dCxcbiAgICAgICAgaW5wdXRDbG9uZWQgPSBfcmVmMTIuaW5wdXRDbG9uZWQ7XG4gICAgdmFyIGlucCA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSwge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgY2xhc3NOYW1lOiBfaW5wdXQgKyBcIiBcIiArIGlucHV0Q2xvbmVkLFxuICAgICAgYXV0b2NvbXBsZXRlOiAnb2ZmJyxcbiAgICAgIGF1dG9jYXBpdGFsaXplOiAnb2ZmJyxcbiAgICAgIHNwZWxsY2hlY2s6IGZhbHNlXG4gICAgfSk7XG4gICAgaW5wLnNldEF0dHJpYnV0ZSgncm9sZScsICd0ZXh0Ym94Jyk7XG4gICAgaW5wLnNldEF0dHJpYnV0ZSgnYXJpYS1hdXRvY29tcGxldGUnLCAnbGlzdCcpO1xuICAgIGlucC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBwbGFjZWhvbGRlclZhbHVlKTtcbiAgICByZXR1cm4gaW5wO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1BhcnRpYWw8Q2xhc3NOYW1lcz59IGNsYXNzTmFtZXNcbiAgICovXG4gIGRyb3Bkb3duOiBmdW5jdGlvbiBkcm9wZG93bihfcmVmMTMpIHtcbiAgICB2YXIgbGlzdCA9IF9yZWYxMy5saXN0LFxuICAgICAgICBsaXN0RHJvcGRvd24gPSBfcmVmMTMubGlzdERyb3Bkb3duO1xuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChsaXN0LCBsaXN0RHJvcGRvd24pO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICByZXR1cm4gZGl2O1xuICB9LFxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge1BhcnRpYWw8Q2xhc3NOYW1lcz59IGNsYXNzTmFtZXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlubmVySFRNTFxuICAgKiBAcGFyYW0ge1wibm8tY2hvaWNlc1wiIHwgXCJuby1yZXN1bHRzXCIgfCBcIlwifSB0eXBlXG4gICAqL1xuICBub3RpY2U6IGZ1bmN0aW9uIG5vdGljZShfcmVmMTQsIGlubmVySFRNTCwgdHlwZSkge1xuICAgIHZhciBpdGVtID0gX3JlZjE0Lml0ZW0sXG4gICAgICAgIGl0ZW1DaG9pY2UgPSBfcmVmMTQuaXRlbUNob2ljZSxcbiAgICAgICAgbm9SZXN1bHRzID0gX3JlZjE0Lm5vUmVzdWx0cyxcbiAgICAgICAgbm9DaG9pY2VzID0gX3JlZjE0Lm5vQ2hvaWNlcztcblxuICAgIGlmICh0eXBlID09PSB2b2lkIDApIHtcbiAgICAgIHR5cGUgPSAnJztcbiAgICB9XG5cbiAgICB2YXIgY2xhc3NlcyA9IFtpdGVtLCBpdGVtQ2hvaWNlXTtcblxuICAgIGlmICh0eXBlID09PSAnbm8tY2hvaWNlcycpIHtcbiAgICAgIGNsYXNzZXMucHVzaChub0Nob2ljZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ25vLXJlc3VsdHMnKSB7XG4gICAgICBjbGFzc2VzLnB1c2gobm9SZXN1bHRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwge1xuICAgICAgaW5uZXJIVE1MOiBpbm5lckhUTUwsXG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXMuam9pbignICcpXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SXRlbX0gb3B0aW9uXG4gICAqL1xuICBvcHRpb246IGZ1bmN0aW9uIG9wdGlvbihfcmVmMTUpIHtcbiAgICB2YXIgbGFiZWwgPSBfcmVmMTUubGFiZWwsXG4gICAgICAgIHZhbHVlID0gX3JlZjE1LnZhbHVlLFxuICAgICAgICBjdXN0b21Qcm9wZXJ0aWVzID0gX3JlZjE1LmN1c3RvbVByb3BlcnRpZXMsXG4gICAgICAgIGFjdGl2ZSA9IF9yZWYxNS5hY3RpdmUsXG4gICAgICAgIGRpc2FibGVkID0gX3JlZjE1LmRpc2FibGVkO1xuICAgIHZhciBvcHQgPSBuZXcgT3B0aW9uKGxhYmVsLCB2YWx1ZSwgZmFsc2UsIGFjdGl2ZSk7XG5cbiAgICBpZiAoY3VzdG9tUHJvcGVydGllcykge1xuICAgICAgb3B0LmRhdGFzZXQuY3VzdG9tUHJvcGVydGllcyA9IGN1c3RvbVByb3BlcnRpZXM7XG4gICAgfVxuXG4gICAgb3B0LmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgcmV0dXJuIG9wdDtcbiAgfVxufTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHRlbXBsYXRlcyA9IChURU1QTEFURVMpO1xuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvc2NyaXB0cy9hY3Rpb25zL2Nob2ljZXMuanNcbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgncmVkdXgnKS5BY3Rpb259IEFjdGlvblxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkNob2ljZX0gQ2hvaWNlXG4gKi9cblxuLyoqXG4gKiBAYXJndW1lbnQge0Nob2ljZX0gY2hvaWNlXG4gKiBAcmV0dXJucyB7QWN0aW9uICYgQ2hvaWNlfVxuICovXG5cbnZhciBjaG9pY2VzX2FkZENob2ljZSA9IGZ1bmN0aW9uIGFkZENob2ljZShfcmVmKSB7XG4gIHZhciB2YWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgICBsYWJlbCA9IF9yZWYubGFiZWwsXG4gICAgICBpZCA9IF9yZWYuaWQsXG4gICAgICBncm91cElkID0gX3JlZi5ncm91cElkLFxuICAgICAgZGlzYWJsZWQgPSBfcmVmLmRpc2FibGVkLFxuICAgICAgZWxlbWVudElkID0gX3JlZi5lbGVtZW50SWQsXG4gICAgICBjdXN0b21Qcm9wZXJ0aWVzID0gX3JlZi5jdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgcGxhY2Vob2xkZXIgPSBfcmVmLnBsYWNlaG9sZGVyLFxuICAgICAga2V5Q29kZSA9IF9yZWYua2V5Q29kZTtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBQ1RJT05fVFlQRVMuQUREX0NIT0lDRSxcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgbGFiZWw6IGxhYmVsLFxuICAgIGlkOiBpZCxcbiAgICBncm91cElkOiBncm91cElkLFxuICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICBlbGVtZW50SWQ6IGVsZW1lbnRJZCxcbiAgICBjdXN0b21Qcm9wZXJ0aWVzOiBjdXN0b21Qcm9wZXJ0aWVzLFxuICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICBrZXlDb2RlOiBrZXlDb2RlXG4gIH07XG59O1xuLyoqXG4gKiBAYXJndW1lbnQge0Nob2ljZVtdfSByZXN1bHRzXG4gKiBAcmV0dXJucyB7QWN0aW9uICYgeyByZXN1bHRzOiBDaG9pY2VbXSB9fVxuICovXG5cbnZhciBjaG9pY2VzX2ZpbHRlckNob2ljZXMgPSBmdW5jdGlvbiBmaWx0ZXJDaG9pY2VzKHJlc3VsdHMpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBQ1RJT05fVFlQRVMuRklMVEVSX0NIT0lDRVMsXG4gICAgcmVzdWx0czogcmVzdWx0c1xuICB9O1xufTtcbi8qKlxuICogQGFyZ3VtZW50IHtib29sZWFufSBhY3RpdmVcbiAqIEByZXR1cm5zIHtBY3Rpb24gJiB7IGFjdGl2ZTogYm9vbGVhbiB9fVxuICovXG5cbnZhciBjaG9pY2VzX2FjdGl2YXRlQ2hvaWNlcyA9IGZ1bmN0aW9uIGFjdGl2YXRlQ2hvaWNlcyhhY3RpdmUpIHtcbiAgaWYgKGFjdGl2ZSA9PT0gdm9pZCAwKSB7XG4gICAgYWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdHlwZTogQUNUSU9OX1RZUEVTLkFDVElWQVRFX0NIT0lDRVMsXG4gICAgYWN0aXZlOiBhY3RpdmVcbiAgfTtcbn07XG4vKipcbiAqIEByZXR1cm5zIHtBY3Rpb259XG4gKi9cblxudmFyIGNob2ljZXNfY2xlYXJDaG9pY2VzID0gZnVuY3Rpb24gY2xlYXJDaG9pY2VzKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFDVElPTl9UWVBFUy5DTEVBUl9DSE9JQ0VTXG4gIH07XG59O1xuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvc2NyaXB0cy9hY3Rpb25zL2l0ZW1zLmpzXG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgncmVkdXgnKS5BY3Rpb259IEFjdGlvblxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkl0ZW19IEl0ZW1cbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICogQHJldHVybnMge0FjdGlvbiAmIEl0ZW19XG4gKi9cblxudmFyIGl0ZW1zX2FkZEl0ZW0gPSBmdW5jdGlvbiBhZGRJdGVtKF9yZWYpIHtcbiAgdmFyIHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgIGxhYmVsID0gX3JlZi5sYWJlbCxcbiAgICAgIGlkID0gX3JlZi5pZCxcbiAgICAgIGNob2ljZUlkID0gX3JlZi5jaG9pY2VJZCxcbiAgICAgIGdyb3VwSWQgPSBfcmVmLmdyb3VwSWQsXG4gICAgICBjdXN0b21Qcm9wZXJ0aWVzID0gX3JlZi5jdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgcGxhY2Vob2xkZXIgPSBfcmVmLnBsYWNlaG9sZGVyLFxuICAgICAga2V5Q29kZSA9IF9yZWYua2V5Q29kZTtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBQ1RJT05fVFlQRVMuQUREX0lURU0sXG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIGxhYmVsOiBsYWJlbCxcbiAgICBpZDogaWQsXG4gICAgY2hvaWNlSWQ6IGNob2ljZUlkLFxuICAgIGdyb3VwSWQ6IGdyb3VwSWQsXG4gICAgY3VzdG9tUHJvcGVydGllczogY3VzdG9tUHJvcGVydGllcyxcbiAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAga2V5Q29kZToga2V5Q29kZVxuICB9O1xufTtcbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gKiBAcGFyYW0ge3N0cmluZ30gY2hvaWNlSWRcbiAqIEByZXR1cm5zIHtBY3Rpb24gJiB7IGlkOiBzdHJpbmcsIGNob2ljZUlkOiBzdHJpbmcgfX1cbiAqL1xuXG52YXIgaXRlbXNfcmVtb3ZlSXRlbSA9IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oaWQsIGNob2ljZUlkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQUNUSU9OX1RZUEVTLlJFTU9WRV9JVEVNLFxuICAgIGlkOiBpZCxcbiAgICBjaG9pY2VJZDogY2hvaWNlSWRcbiAgfTtcbn07XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICogQHBhcmFtIHtib29sZWFufSBoaWdobGlnaHRlZFxuICogQHJldHVybnMge0FjdGlvbiAmIHsgaWQ6IHN0cmluZywgaGlnaGxpZ2h0ZWQ6IGJvb2xlYW4gfX1cbiAqL1xuXG52YXIgaXRlbXNfaGlnaGxpZ2h0SXRlbSA9IGZ1bmN0aW9uIGhpZ2hsaWdodEl0ZW0oaWQsIGhpZ2hsaWdodGVkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQUNUSU9OX1RZUEVTLkhJR0hMSUdIVF9JVEVNLFxuICAgIGlkOiBpZCxcbiAgICBoaWdobGlnaHRlZDogaGlnaGxpZ2h0ZWRcbiAgfTtcbn07XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zY3JpcHRzL2FjdGlvbnMvZ3JvdXBzLmpzXG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgncmVkdXgnKS5BY3Rpb259IEFjdGlvblxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkdyb3VwfSBHcm91cFxuICovXG5cbi8qKlxuICogQHBhcmFtIHtHcm91cH0gZ3JvdXBcbiAqIEByZXR1cm5zIHtBY3Rpb24gJiBHcm91cH1cbiAqL1xuXG52YXIgZ3JvdXBzX2FkZEdyb3VwID0gZnVuY3Rpb24gYWRkR3JvdXAoX3JlZikge1xuICB2YXIgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgaWQgPSBfcmVmLmlkLFxuICAgICAgYWN0aXZlID0gX3JlZi5hY3RpdmUsXG4gICAgICBkaXNhYmxlZCA9IF9yZWYuZGlzYWJsZWQ7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQUNUSU9OX1RZUEVTLkFERF9HUk9VUCxcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgaWQ6IGlkLFxuICAgIGFjdGl2ZTogYWN0aXZlLFxuICAgIGRpc2FibGVkOiBkaXNhYmxlZFxuICB9O1xufTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3NjcmlwdHMvYWN0aW9ucy9taXNjLmpzXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3JlZHV4JykuQWN0aW9ufSBBY3Rpb25cbiAqL1xuXG4vKipcbiAqIEByZXR1cm5zIHtBY3Rpb259XG4gKi9cbnZhciBjbGVhckFsbCA9IGZ1bmN0aW9uIGNsZWFyQWxsKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdDTEVBUl9BTEwnXG4gIH07XG59O1xuLyoqXG4gKiBAcGFyYW0ge2FueX0gc3RhdGVcbiAqIEByZXR1cm5zIHtBY3Rpb24gJiB7IHN0YXRlOiBvYmplY3QgfX1cbiAqL1xuXG52YXIgcmVzZXRUbyA9IGZ1bmN0aW9uIHJlc2V0VG8oc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnUkVTRVRfVE8nLFxuICAgIHN0YXRlOiBzdGF0ZVxuICB9O1xufTtcbi8qKlxuICogQHBhcmFtIHtib29sZWFufSBpc0xvYWRpbmdcbiAqIEByZXR1cm5zIHtBY3Rpb24gJiB7IGlzTG9hZGluZzogYm9vbGVhbiB9fVxuICovXG5cbnZhciBzZXRJc0xvYWRpbmcgPSBmdW5jdGlvbiBzZXRJc0xvYWRpbmcoaXNMb2FkaW5nKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ1NFVF9JU19MT0FESU5HJyxcbiAgICBpc0xvYWRpbmc6IGlzTG9hZGluZ1xuICB9O1xufTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3NjcmlwdHMvY2hvaWNlcy5qc1xuZnVuY3Rpb24gY2hvaWNlc19kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gY2hvaWNlc19jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGNob2ljZXNfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGNob2ljZXNfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8qKiBAc2VlIHtAbGluayBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1hY2VhMDc1ZDBhYzY5NTRmMjc1YTcwMDIzOTA2MDUwY30gKi9cblxudmFyIElTX0lFMTEgPSAnLW1zLXNjcm9sbC1saW1pdCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmICctbXMtaW1lLWFsaWduJyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5DaG9pY2V9IENob2ljZVxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkl0ZW19IEl0ZW1cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5Hcm91cH0gR3JvdXBcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5PcHRpb25zfSBPcHRpb25zXG4gKi9cblxuLyoqIEB0eXBlIHtQYXJ0aWFsPE9wdGlvbnM+fSAqL1xuXG52YXIgVVNFUl9ERUZBVUxUUyA9IHt9O1xuLyoqXG4gKiBDaG9pY2VzXG4gKiBAYXV0aG9yIEpvc2ggSm9obnNvbjxqb3NoQGpvc2h1YWpvaG5zb24uY28udWs+XG4gKi9cblxudmFyIGNob2ljZXNfQ2hvaWNlcyA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGNob2ljZXNfY3JlYXRlQ2xhc3MoQ2hvaWNlcywgbnVsbCwgW3tcbiAgICBrZXk6IFwiZGVmYXVsdHNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe1xuICAgICAgICBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgICByZXR1cm4gVVNFUl9ERUZBVUxUUztcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgdGVtcGxhdGVzKCkge1xuICAgICAgICAgIHJldHVybiBURU1QTEFURVM7XG4gICAgICAgIH1cblxuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nIHwgSFRNTElucHV0RWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50fSBlbGVtZW50XG4gICAgICogQHBhcmFtIHtQYXJ0aWFsPE9wdGlvbnM+fSB1c2VyQ29uZmlnXG4gICAgICovXG5cbiAgfV0pO1xuXG4gIGZ1bmN0aW9uIENob2ljZXMoZWxlbWVudCwgdXNlckNvbmZpZykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAoZWxlbWVudCA9PT0gdm9pZCAwKSB7XG4gICAgICBlbGVtZW50ID0gJ1tkYXRhLWNob2ljZV0nO1xuICAgIH1cblxuICAgIGlmICh1c2VyQ29uZmlnID09PSB2b2lkIDApIHtcbiAgICAgIHVzZXJDb25maWcgPSB7fTtcbiAgICB9XG5cbiAgICAvKiogQHR5cGUge1BhcnRpYWw8T3B0aW9ucz59ICovXG4gICAgdGhpcy5jb25maWcgPSBjanNfZGVmYXVsdC5hLmFsbChbREVGQVVMVF9DT05GSUcsIENob2ljZXMuZGVmYXVsdHMub3B0aW9ucywgdXNlckNvbmZpZ10sIC8vIFdoZW4gbWVyZ2luZyBhcnJheSBjb25maWdzLCByZXBsYWNlIHdpdGggYSBjb3B5IG9mIHRoZSB1c2VyQ29uZmlnIGFycmF5LFxuICAgIC8vIGluc3RlYWQgb2YgY29uY2F0ZW5hdGluZyB3aXRoIHRoZSBkZWZhdWx0IGFycmF5XG4gICAge1xuICAgICAgYXJyYXlNZXJnZTogZnVuY3Rpb24gYXJyYXlNZXJnZShfLCBzb3VyY2VBcnJheSkge1xuICAgICAgICByZXR1cm4gW10uY29uY2F0KHNvdXJjZUFycmF5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgaW52YWxpZENvbmZpZ09wdGlvbnMgPSBkaWZmKHRoaXMuY29uZmlnLCBERUZBVUxUX0NPTkZJRyk7XG5cbiAgICBpZiAoaW52YWxpZENvbmZpZ09wdGlvbnMubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1Vua25vd24gY29uZmlnIG9wdGlvbihzKSBwYXNzZWQnLCBpbnZhbGlkQ29uZmlnT3B0aW9ucy5qb2luKCcsICcpKTtcbiAgICB9XG5cbiAgICB2YXIgcGFzc2VkRWxlbWVudCA9IHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCkgOiBlbGVtZW50O1xuXG4gICAgaWYgKCEocGFzc2VkRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgfHwgcGFzc2VkRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdFeHBlY3RlZCBvbmUgb2YgdGhlIGZvbGxvd2luZyB0eXBlcyB0ZXh0fHNlbGVjdC1vbmV8c2VsZWN0LW11bHRpcGxlJyk7XG4gICAgfVxuXG4gICAgdGhpcy5faXNUZXh0RWxlbWVudCA9IHBhc3NlZEVsZW1lbnQudHlwZSA9PT0gVEVYVF9UWVBFO1xuICAgIHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCA9IHBhc3NlZEVsZW1lbnQudHlwZSA9PT0gU0VMRUNUX09ORV9UWVBFO1xuICAgIHRoaXMuX2lzU2VsZWN0TXVsdGlwbGVFbGVtZW50ID0gcGFzc2VkRWxlbWVudC50eXBlID09PSBTRUxFQ1RfTVVMVElQTEVfVFlQRTtcbiAgICB0aGlzLl9pc1NlbGVjdEVsZW1lbnQgPSB0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQgfHwgdGhpcy5faXNTZWxlY3RNdWx0aXBsZUVsZW1lbnQ7XG4gICAgdGhpcy5jb25maWcuc2VhcmNoRW5hYmxlZCA9IHRoaXMuX2lzU2VsZWN0TXVsdGlwbGVFbGVtZW50IHx8IHRoaXMuY29uZmlnLnNlYXJjaEVuYWJsZWQ7XG5cbiAgICBpZiAoIVsnYXV0bycsICdhbHdheXMnXS5pbmNsdWRlcyh0aGlzLmNvbmZpZy5yZW5kZXJTZWxlY3RlZENob2ljZXMpKSB7XG4gICAgICB0aGlzLmNvbmZpZy5yZW5kZXJTZWxlY3RlZENob2ljZXMgPSAnYXV0byc7XG4gICAgfVxuXG4gICAgaWYgKHVzZXJDb25maWcuYWRkSXRlbUZpbHRlciAmJiB0eXBlb2YgdXNlckNvbmZpZy5hZGRJdGVtRmlsdGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgcmUgPSB1c2VyQ29uZmlnLmFkZEl0ZW1GaWx0ZXIgaW5zdGFuY2VvZiBSZWdFeHAgPyB1c2VyQ29uZmlnLmFkZEl0ZW1GaWx0ZXIgOiBuZXcgUmVnRXhwKHVzZXJDb25maWcuYWRkSXRlbUZpbHRlcik7XG4gICAgICB0aGlzLmNvbmZpZy5hZGRJdGVtRmlsdGVyID0gcmUudGVzdC5iaW5kKHJlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNUZXh0RWxlbWVudCkge1xuICAgICAgdGhpcy5wYXNzZWRFbGVtZW50ID0gbmV3IFdyYXBwZWRJbnB1dCh7XG4gICAgICAgIGVsZW1lbnQ6IHBhc3NlZEVsZW1lbnQsXG4gICAgICAgIGNsYXNzTmFtZXM6IHRoaXMuY29uZmlnLmNsYXNzTmFtZXMsXG4gICAgICAgIGRlbGltaXRlcjogdGhpcy5jb25maWcuZGVsaW1pdGVyXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYXNzZWRFbGVtZW50ID0gbmV3IFdyYXBwZWRTZWxlY3Qoe1xuICAgICAgICBlbGVtZW50OiBwYXNzZWRFbGVtZW50LFxuICAgICAgICBjbGFzc05hbWVzOiB0aGlzLmNvbmZpZy5jbGFzc05hbWVzLFxuICAgICAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gdGVtcGxhdGUoZGF0YSkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5fdGVtcGxhdGVzLm9wdGlvbihkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0aWFsaXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3N0b3JlID0gbmV3IHN0b3JlX1N0b3JlKCk7XG4gICAgdGhpcy5faW5pdGlhbFN0YXRlID0ge307XG4gICAgdGhpcy5fY3VycmVudFN0YXRlID0ge307XG4gICAgdGhpcy5fcHJldlN0YXRlID0ge307XG4gICAgdGhpcy5fY3VycmVudFZhbHVlID0gJyc7XG4gICAgdGhpcy5fY2FuU2VhcmNoID0gdGhpcy5jb25maWcuc2VhcmNoRW5hYmxlZDtcbiAgICB0aGlzLl9pc1Njcm9sbGluZ09uSWUgPSBmYWxzZTtcbiAgICB0aGlzLl9oaWdobGlnaHRQb3NpdGlvbiA9IDA7XG4gICAgdGhpcy5fd2FzVGFwID0gdHJ1ZTtcbiAgICB0aGlzLl9wbGFjZWhvbGRlclZhbHVlID0gdGhpcy5fZ2VuZXJhdGVQbGFjZWhvbGRlclZhbHVlKCk7XG4gICAgdGhpcy5fYmFzZUlkID0gZ2VuZXJhdGVJZCh0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudCwgJ2Nob2ljZXMtJyk7XG4gICAgLyoqXG4gICAgICogc2V0dGluZyBkaXJlY3Rpb24gaW4gY2FzZXMgd2hlcmUgaXQncyBleHBsaWNpdGx5IHNldCBvbiBwYXNzZWRFbGVtZW50XG4gICAgICogb3Igd2hlbiBjYWxjdWxhdGVkIGRpcmVjdGlvbiBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgZG9jdW1lbnRcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbJ2RpciddfVxuICAgICAqL1xuXG4gICAgdGhpcy5fZGlyZWN0aW9uID0gdGhpcy5wYXNzZWRFbGVtZW50LmRpcjtcblxuICAgIGlmICghdGhpcy5fZGlyZWN0aW9uKSB7XG4gICAgICB2YXIgX3dpbmRvdyRnZXRDb21wdXRlZFN0ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5wYXNzZWRFbGVtZW50LmVsZW1lbnQpLFxuICAgICAgICAgIGVsZW1lbnREaXJlY3Rpb24gPSBfd2luZG93JGdldENvbXB1dGVkU3QuZGlyZWN0aW9uO1xuXG4gICAgICB2YXIgX3dpbmRvdyRnZXRDb21wdXRlZFN0MiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCksXG4gICAgICAgICAgZG9jdW1lbnREaXJlY3Rpb24gPSBfd2luZG93JGdldENvbXB1dGVkU3QyLmRpcmVjdGlvbjtcblxuICAgICAgaWYgKGVsZW1lbnREaXJlY3Rpb24gIT09IGRvY3VtZW50RGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbiA9IGVsZW1lbnREaXJlY3Rpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faWROYW1lcyA9IHtcbiAgICAgIGl0ZW1DaG9pY2U6ICdpdGVtLWNob2ljZSdcbiAgICB9OyAvLyBBc3NpZ24gcHJlc2V0IGdyb3VwcyBmcm9tIHBhc3NlZCBlbGVtZW50XG5cbiAgICB0aGlzLl9wcmVzZXRHcm91cHMgPSB0aGlzLnBhc3NlZEVsZW1lbnQub3B0aW9uR3JvdXBzOyAvLyBBc3NpZ24gcHJlc2V0IG9wdGlvbnMgZnJvbSBwYXNzZWQgZWxlbWVudFxuXG4gICAgdGhpcy5fcHJlc2V0T3B0aW9ucyA9IHRoaXMucGFzc2VkRWxlbWVudC5vcHRpb25zOyAvLyBBc3NpZ24gcHJlc2V0IGNob2ljZXMgZnJvbSBwYXNzZWQgb2JqZWN0XG5cbiAgICB0aGlzLl9wcmVzZXRDaG9pY2VzID0gdGhpcy5jb25maWcuY2hvaWNlczsgLy8gQXNzaWduIHByZXNldCBpdGVtcyBmcm9tIHBhc3NlZCBvYmplY3QgZmlyc3RcblxuICAgIHRoaXMuX3ByZXNldEl0ZW1zID0gdGhpcy5jb25maWcuaXRlbXM7IC8vIEFkZCBhbnkgdmFsdWVzIHBhc3NlZCBmcm9tIGF0dHJpYnV0ZVxuXG4gICAgaWYgKHRoaXMucGFzc2VkRWxlbWVudC52YWx1ZSkge1xuICAgICAgdGhpcy5fcHJlc2V0SXRlbXMgPSB0aGlzLl9wcmVzZXRJdGVtcy5jb25jYXQodGhpcy5wYXNzZWRFbGVtZW50LnZhbHVlLnNwbGl0KHRoaXMuY29uZmlnLmRlbGltaXRlcikpO1xuICAgIH0gLy8gQ3JlYXRlIGFycmF5IG9mIGNob2ljZXMgZnJvbSBvcHRpb24gZWxlbWVudHNcblxuXG4gICAgaWYgKHRoaXMucGFzc2VkRWxlbWVudC5vcHRpb25zKSB7XG4gICAgICB0aGlzLnBhc3NlZEVsZW1lbnQub3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIF90aGlzLl9wcmVzZXRDaG9pY2VzLnB1c2goe1xuICAgICAgICAgIHZhbHVlOiBvLnZhbHVlLFxuICAgICAgICAgIGxhYmVsOiBvLmlubmVySFRNTCxcbiAgICAgICAgICBzZWxlY3RlZDogby5zZWxlY3RlZCxcbiAgICAgICAgICBkaXNhYmxlZDogby5kaXNhYmxlZCB8fCBvLnBhcmVudE5vZGUuZGlzYWJsZWQsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IG8udmFsdWUgPT09ICcnIHx8IG8uaGFzQXR0cmlidXRlKCdwbGFjZWhvbGRlcicpLFxuICAgICAgICAgIGN1c3RvbVByb3BlcnRpZXM6IG8uZ2V0QXR0cmlidXRlKCdkYXRhLWN1c3RvbS1wcm9wZXJ0aWVzJylcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9yZW5kZXIgPSB0aGlzLl9yZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkZvY3VzID0gdGhpcy5fb25Gb2N1cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uQmx1ciA9IHRoaXMuX29uQmx1ci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uS2V5VXAgPSB0aGlzLl9vbktleVVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25LZXlEb3duID0gdGhpcy5fb25LZXlEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25DbGljayA9IHRoaXMuX29uQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vblRvdWNoTW92ZSA9IHRoaXMuX29uVG91Y2hNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25Ub3VjaEVuZCA9IHRoaXMuX29uVG91Y2hFbmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbk1vdXNlRG93biA9IHRoaXMuX29uTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25Nb3VzZU92ZXIgPSB0aGlzLl9vbk1vdXNlT3Zlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uRm9ybVJlc2V0ID0gdGhpcy5fb25Gb3JtUmVzZXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkFLZXkgPSB0aGlzLl9vbkFLZXkuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkVudGVyS2V5ID0gdGhpcy5fb25FbnRlcktleS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uRXNjYXBlS2V5ID0gdGhpcy5fb25Fc2NhcGVLZXkuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkRpcmVjdGlvbktleSA9IHRoaXMuX29uRGlyZWN0aW9uS2V5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25EZWxldGVLZXkgPSB0aGlzLl9vbkRlbGV0ZUtleS5iaW5kKHRoaXMpOyAvLyBJZiBlbGVtZW50IGhhcyBhbHJlYWR5IGJlZW4gaW5pdGlhbGlzZWQgd2l0aCBDaG9pY2VzLCBmYWlsIHNpbGVudGx5XG5cbiAgICBpZiAodGhpcy5wYXNzZWRFbGVtZW50LmlzQWN0aXZlKSB7XG4gICAgICBpZiAoIXRoaXMuY29uZmlnLnNpbGVudCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1RyeWluZyB0byBpbml0aWFsaXNlIENob2ljZXMgb24gZWxlbWVudCBhbHJlYWR5IGluaXRpYWxpc2VkJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5pdGlhbGlzZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gTGV0J3MgZ29cblxuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ2hvaWNlcy5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmluaXQgPSBmdW5jdGlvbiBpbml0KCkge1xuICAgIGlmICh0aGlzLmluaXRpYWxpc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fY3JlYXRlVGVtcGxhdGVzKCk7XG5cbiAgICB0aGlzLl9jcmVhdGVFbGVtZW50cygpO1xuXG4gICAgdGhpcy5fY3JlYXRlU3RydWN0dXJlKCk7IC8vIFNldCBpbml0aWFsIHN0YXRlIChXZSBuZWVkIHRvIGNsb25lIHRoZSBzdGF0ZSBiZWNhdXNlIHNvbWUgcmVkdWNlcnNcbiAgICAvLyBtb2RpZnkgdGhlIGlubmVyIG9iamVjdHMgcHJvcGVydGllcyBpbiB0aGUgc3RhdGUpIPCfpKJcblxuXG4gICAgdGhpcy5faW5pdGlhbFN0YXRlID0gY2xvbmVPYmplY3QodGhpcy5fc3RvcmUuc3RhdGUpO1xuXG4gICAgdGhpcy5fc3RvcmUuc3Vic2NyaWJlKHRoaXMuX3JlbmRlcik7XG5cbiAgICB0aGlzLl9yZW5kZXIoKTtcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICB2YXIgc2hvdWxkRGlzYWJsZSA9ICF0aGlzLmNvbmZpZy5hZGRJdGVtcyB8fCB0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cbiAgICBpZiAoc2hvdWxkRGlzYWJsZSkge1xuICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0aWFsaXNlZCA9IHRydWU7XG4gICAgdmFyIGNhbGxiYWNrT25Jbml0ID0gdGhpcy5jb25maWcuY2FsbGJhY2tPbkluaXQ7IC8vIFJ1biBjYWxsYmFjayBpZiBpdCBpcyBhIGZ1bmN0aW9uXG5cbiAgICBpZiAoY2FsbGJhY2tPbkluaXQgJiYgdHlwZW9mIGNhbGxiYWNrT25Jbml0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFja09uSW5pdC5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgaWYgKCF0aGlzLmluaXRpYWxpc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIHRoaXMucGFzc2VkRWxlbWVudC5yZXZlYWwoKTtcbiAgICB0aGlzLmNvbnRhaW5lck91dGVyLnVud3JhcCh0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudCk7XG4gICAgdGhpcy5jbGVhclN0b3JlKCk7XG5cbiAgICBpZiAodGhpcy5faXNTZWxlY3RFbGVtZW50KSB7XG4gICAgICB0aGlzLnBhc3NlZEVsZW1lbnQub3B0aW9ucyA9IHRoaXMuX3ByZXNldE9wdGlvbnM7XG4gICAgfVxuXG4gICAgdGhpcy5fdGVtcGxhdGVzID0gbnVsbDtcbiAgICB0aGlzLmluaXRpYWxpc2VkID0gZmFsc2U7XG4gIH07XG5cbiAgX3Byb3RvLmVuYWJsZSA9IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICBpZiAodGhpcy5wYXNzZWRFbGVtZW50LmlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMucGFzc2VkRWxlbWVudC5lbmFibGUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb250YWluZXJPdXRlci5pc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuXG4gICAgICB0aGlzLmlucHV0LmVuYWJsZSgpO1xuICAgICAgdGhpcy5jb250YWluZXJPdXRlci5lbmFibGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uZGlzYWJsZSA9IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgaWYgKCF0aGlzLnBhc3NlZEVsZW1lbnQuaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5wYXNzZWRFbGVtZW50LmRpc2FibGUoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuY29udGFpbmVyT3V0ZXIuaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5fcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgdGhpcy5pbnB1dC5kaXNhYmxlKCk7XG4gICAgICB0aGlzLmNvbnRhaW5lck91dGVyLmRpc2FibGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uaGlnaGxpZ2h0SXRlbSA9IGZ1bmN0aW9uIGhpZ2hsaWdodEl0ZW0oaXRlbSwgcnVuRXZlbnQpIHtcbiAgICBpZiAocnVuRXZlbnQgPT09IHZvaWQgMCkge1xuICAgICAgcnVuRXZlbnQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICghaXRlbSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIGlkID0gaXRlbS5pZCxcbiAgICAgICAgX2l0ZW0kZ3JvdXBJZCA9IGl0ZW0uZ3JvdXBJZCxcbiAgICAgICAgZ3JvdXBJZCA9IF9pdGVtJGdyb3VwSWQgPT09IHZvaWQgMCA/IC0xIDogX2l0ZW0kZ3JvdXBJZCxcbiAgICAgICAgX2l0ZW0kdmFsdWUgPSBpdGVtLnZhbHVlLFxuICAgICAgICB2YWx1ZSA9IF9pdGVtJHZhbHVlID09PSB2b2lkIDAgPyAnJyA6IF9pdGVtJHZhbHVlLFxuICAgICAgICBfaXRlbSRsYWJlbCA9IGl0ZW0ubGFiZWwsXG4gICAgICAgIGxhYmVsID0gX2l0ZW0kbGFiZWwgPT09IHZvaWQgMCA/ICcnIDogX2l0ZW0kbGFiZWw7XG4gICAgdmFyIGdyb3VwID0gZ3JvdXBJZCA+PSAwID8gdGhpcy5fc3RvcmUuZ2V0R3JvdXBCeUlkKGdyb3VwSWQpIDogbnVsbDtcblxuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKGl0ZW1zX2hpZ2hsaWdodEl0ZW0oaWQsIHRydWUpKTtcblxuICAgIGlmIChydW5FdmVudCkge1xuICAgICAgdGhpcy5wYXNzZWRFbGVtZW50LnRyaWdnZXJFdmVudChFVkVOVFMuaGlnaGxpZ2h0SXRlbSwge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICBncm91cFZhbHVlOiBncm91cCAmJiBncm91cC52YWx1ZSA/IGdyb3VwLnZhbHVlIDogbnVsbFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLnVuaGlnaGxpZ2h0SXRlbSA9IGZ1bmN0aW9uIHVuaGlnaGxpZ2h0SXRlbShpdGVtKSB7XG4gICAgaWYgKCFpdGVtKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB2YXIgaWQgPSBpdGVtLmlkLFxuICAgICAgICBfaXRlbSRncm91cElkMiA9IGl0ZW0uZ3JvdXBJZCxcbiAgICAgICAgZ3JvdXBJZCA9IF9pdGVtJGdyb3VwSWQyID09PSB2b2lkIDAgPyAtMSA6IF9pdGVtJGdyb3VwSWQyLFxuICAgICAgICBfaXRlbSR2YWx1ZTIgPSBpdGVtLnZhbHVlLFxuICAgICAgICB2YWx1ZSA9IF9pdGVtJHZhbHVlMiA9PT0gdm9pZCAwID8gJycgOiBfaXRlbSR2YWx1ZTIsXG4gICAgICAgIF9pdGVtJGxhYmVsMiA9IGl0ZW0ubGFiZWwsXG4gICAgICAgIGxhYmVsID0gX2l0ZW0kbGFiZWwyID09PSB2b2lkIDAgPyAnJyA6IF9pdGVtJGxhYmVsMjtcbiAgICB2YXIgZ3JvdXAgPSBncm91cElkID49IDAgPyB0aGlzLl9zdG9yZS5nZXRHcm91cEJ5SWQoZ3JvdXBJZCkgOiBudWxsO1xuXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goaXRlbXNfaGlnaGxpZ2h0SXRlbShpZCwgZmFsc2UpKTtcblxuICAgIHRoaXMucGFzc2VkRWxlbWVudC50cmlnZ2VyRXZlbnQoRVZFTlRTLmhpZ2hsaWdodEl0ZW0sIHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgIGdyb3VwVmFsdWU6IGdyb3VwICYmIGdyb3VwLnZhbHVlID8gZ3JvdXAudmFsdWUgOiBudWxsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmhpZ2hsaWdodEFsbCA9IGZ1bmN0aW9uIGhpZ2hsaWdodEFsbCgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHRoaXMuX3N0b3JlLml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBfdGhpczIuaGlnaGxpZ2h0SXRlbShpdGVtKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by51bmhpZ2hsaWdodEFsbCA9IGZ1bmN0aW9uIHVuaGlnaGxpZ2h0QWxsKCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdGhpcy5fc3RvcmUuaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIF90aGlzMy51bmhpZ2hsaWdodEl0ZW0oaXRlbSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlQWN0aXZlSXRlbXNCeVZhbHVlID0gZnVuY3Rpb24gcmVtb3ZlQWN0aXZlSXRlbXNCeVZhbHVlKHZhbHVlKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB0aGlzLl9zdG9yZS5hY3RpdmVJdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLnZhbHVlID09PSB2YWx1ZTtcbiAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gX3RoaXM0Ll9yZW1vdmVJdGVtKGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZUFjdGl2ZUl0ZW1zID0gZnVuY3Rpb24gcmVtb3ZlQWN0aXZlSXRlbXMoZXhjbHVkZWRJZCkge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgdGhpcy5fc3RvcmUuYWN0aXZlSXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgaWQgPSBfcmVmLmlkO1xuICAgICAgcmV0dXJuIGlkICE9PSBleGNsdWRlZElkO1xuICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBfdGhpczUuX3JlbW92ZUl0ZW0oaXRlbSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlSGlnaGxpZ2h0ZWRJdGVtcyA9IGZ1bmN0aW9uIHJlbW92ZUhpZ2hsaWdodGVkSXRlbXMocnVuRXZlbnQpIHtcbiAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgIGlmIChydW5FdmVudCA9PT0gdm9pZCAwKSB7XG4gICAgICBydW5FdmVudCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuX3N0b3JlLmhpZ2hsaWdodGVkQWN0aXZlSXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgX3RoaXM2Ll9yZW1vdmVJdGVtKGl0ZW0pOyAvLyBJZiB0aGlzIGFjdGlvbiB3YXMgcGVyZm9ybWVkIGJ5IHRoZSB1c2VyXG4gICAgICAvLyB0cmlnZ2VyIHRoZSBldmVudFxuXG5cbiAgICAgIGlmIChydW5FdmVudCkge1xuICAgICAgICBfdGhpczYuX3RyaWdnZXJDaGFuZ2UoaXRlbS52YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uc2hvd0Ryb3Bkb3duID0gZnVuY3Rpb24gc2hvd0Ryb3Bkb3duKHByZXZlbnRJbnB1dEZvY3VzKSB7XG4gICAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5kcm9wZG93bi5pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzNy5kcm9wZG93bi5zaG93KCk7XG5cbiAgICAgIF90aGlzNy5jb250YWluZXJPdXRlci5vcGVuKF90aGlzNy5kcm9wZG93bi5kaXN0YW5jZUZyb21Ub3BXaW5kb3cpO1xuXG4gICAgICBpZiAoIXByZXZlbnRJbnB1dEZvY3VzICYmIF90aGlzNy5fY2FuU2VhcmNoKSB7XG4gICAgICAgIF90aGlzNy5pbnB1dC5mb2N1cygpO1xuICAgICAgfVxuXG4gICAgICBfdGhpczcucGFzc2VkRWxlbWVudC50cmlnZ2VyRXZlbnQoRVZFTlRTLnNob3dEcm9wZG93biwge30pO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5oaWRlRHJvcGRvd24gPSBmdW5jdGlvbiBoaWRlRHJvcGRvd24ocHJldmVudElucHV0Qmx1cikge1xuICAgIHZhciBfdGhpczggPSB0aGlzO1xuXG4gICAgaWYgKCF0aGlzLmRyb3Bkb3duLmlzQWN0aXZlKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXM4LmRyb3Bkb3duLmhpZGUoKTtcblxuICAgICAgX3RoaXM4LmNvbnRhaW5lck91dGVyLmNsb3NlKCk7XG5cbiAgICAgIGlmICghcHJldmVudElucHV0Qmx1ciAmJiBfdGhpczguX2NhblNlYXJjaCkge1xuICAgICAgICBfdGhpczguaW5wdXQucmVtb3ZlQWN0aXZlRGVzY2VuZGFudCgpO1xuXG4gICAgICAgIF90aGlzOC5pbnB1dC5ibHVyKCk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzOC5wYXNzZWRFbGVtZW50LnRyaWdnZXJFdmVudChFVkVOVFMuaGlkZURyb3Bkb3duLCB7fSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmdldFZhbHVlID0gZnVuY3Rpb24gZ2V0VmFsdWUodmFsdWVPbmx5KSB7XG4gICAgaWYgKHZhbHVlT25seSA9PT0gdm9pZCAwKSB7XG4gICAgICB2YWx1ZU9ubHkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWVzID0gdGhpcy5fc3RvcmUuYWN0aXZlSXRlbXMucmVkdWNlKGZ1bmN0aW9uIChzZWxlY3RlZEl0ZW1zLCBpdGVtKSB7XG4gICAgICB2YXIgaXRlbVZhbHVlID0gdmFsdWVPbmx5ID8gaXRlbS52YWx1ZSA6IGl0ZW07XG4gICAgICBzZWxlY3RlZEl0ZW1zLnB1c2goaXRlbVZhbHVlKTtcbiAgICAgIHJldHVybiBzZWxlY3RlZEl0ZW1zO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQgPyB2YWx1ZXNbMF0gOiB2YWx1ZXM7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nW10gfCBpbXBvcnQoJy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5JdGVtW119IGl0ZW1zXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnNldFZhbHVlID0gZnVuY3Rpb24gc2V0VmFsdWUoaXRlbXMpIHtcbiAgICB2YXIgX3RoaXM5ID0gdGhpcztcblxuICAgIGlmICghdGhpcy5pbml0aWFsaXNlZCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBfdGhpczkuX3NldENob2ljZU9ySXRlbSh2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLnNldENob2ljZUJ5VmFsdWUgPSBmdW5jdGlvbiBzZXRDaG9pY2VCeVZhbHVlKHZhbHVlKSB7XG4gICAgdmFyIF90aGlzMTAgPSB0aGlzO1xuXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpc2VkIHx8IHRoaXMuX2lzVGV4dEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gLy8gSWYgb25seSBvbmUgdmFsdWUgaGFzIGJlZW4gcGFzc2VkLCBjb252ZXJ0IHRvIGFycmF5XG5cblxuICAgIHZhciBjaG9pY2VWYWx1ZSA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdOyAvLyBMb29wIHRocm91Z2ggZWFjaCB2YWx1ZSBhbmRcblxuICAgIGNob2ljZVZhbHVlLmZvckVhY2goZnVuY3Rpb24gKHZhbCkge1xuICAgICAgcmV0dXJuIF90aGlzMTAuX2ZpbmRBbmRTZWxlY3RDaG9pY2VCeVZhbHVlKHZhbCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIFNldCBjaG9pY2VzIG9mIHNlbGVjdCBpbnB1dCB2aWEgYW4gYXJyYXkgb2Ygb2JqZWN0cyAob3IgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFycmF5IG9mIG9iamVjdCBvciBwcm9taXNlIG9mIGl0KSxcbiAgICogYSB2YWx1ZSBmaWVsZCBuYW1lIGFuZCBhIGxhYmVsIGZpZWxkIG5hbWUuXG4gICAqIFRoaXMgYmVoYXZlcyB0aGUgc2FtZSBhcyBwYXNzaW5nIGl0ZW1zIHZpYSB0aGUgY2hvaWNlcyBvcHRpb24gYnV0IGNhbiBiZSBjYWxsZWQgYWZ0ZXIgaW5pdGlhbGlzaW5nIENob2ljZXMuXG4gICAqIFRoaXMgY2FuIGFsc28gYmUgdXNlZCB0byBhZGQgZ3JvdXBzIG9mIGNob2ljZXMgKHNlZSBleGFtcGxlIDIpOyBPcHRpb25hbGx5IHBhc3MgYSB0cnVlIGByZXBsYWNlQ2hvaWNlc2AgdmFsdWUgdG8gcmVtb3ZlIGFueSBleGlzdGluZyBjaG9pY2VzLlxuICAgKiBPcHRpb25hbGx5IHBhc3MgYSBgY3VzdG9tUHJvcGVydGllc2Agb2JqZWN0IHRvIGFkZCBhZGRpdGlvbmFsIGRhdGEgdG8geW91ciBjaG9pY2VzICh1c2VmdWwgd2hlbiBzZWFyY2hpbmcvZmlsdGVyaW5nIGV0YykuXG4gICAqXG4gICAqICoqSW5wdXQgdHlwZXMgYWZmZWN0ZWQ6Kiogc2VsZWN0LW9uZSwgc2VsZWN0LW11bHRpcGxlXG4gICAqXG4gICAqIEB0ZW1wbGF0ZSB7Q2hvaWNlW10gfCAoKGluc3RhbmNlOiBDaG9pY2VzKSA9PiBvYmplY3RbXSB8IFByb21pc2U8b2JqZWN0W10+KX0gVFxuICAgKiBAcGFyYW0ge1R9IFtjaG9pY2VzQXJyYXlPckZldGNoZXJdXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdmFsdWUgPSAndmFsdWUnXSAtIG5hbWUgb2YgYHZhbHVlYCBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xhYmVsID0gJ2xhYmVsJ10gLSBuYW1lIG9mICdsYWJlbCcgZmllbGRcbiAgICogQHBhcmFtIHtib29sZWFufSBbcmVwbGFjZUNob2ljZXMgPSBmYWxzZV0gLSB3aGV0aGVyIHRvIHJlcGxhY2Ugb2YgYWRkIGNob2ljZXNcbiAgICogQHJldHVybnMge3RoaXMgfCBQcm9taXNlPHRoaXM+fVxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqc1xuICAgKiBjb25zdCBleGFtcGxlID0gbmV3IENob2ljZXMoZWxlbWVudCk7XG4gICAqXG4gICAqIGV4YW1wbGUuc2V0Q2hvaWNlcyhbXG4gICAqICAge3ZhbHVlOiAnT25lJywgbGFiZWw6ICdMYWJlbCBPbmUnLCBkaXNhYmxlZDogdHJ1ZX0sXG4gICAqICAge3ZhbHVlOiAnVHdvJywgbGFiZWw6ICdMYWJlbCBUd28nLCBzZWxlY3RlZDogdHJ1ZX0sXG4gICAqICAge3ZhbHVlOiAnVGhyZWUnLCBsYWJlbDogJ0xhYmVsIFRocmVlJ30sXG4gICAqIF0sICd2YWx1ZScsICdsYWJlbCcsIGZhbHNlKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGpzXG4gICAqIGNvbnN0IGV4YW1wbGUgPSBuZXcgQ2hvaWNlcyhlbGVtZW50KTtcbiAgICpcbiAgICogZXhhbXBsZS5zZXRDaG9pY2VzKGFzeW5jICgpID0+IHtcbiAgICogICB0cnkge1xuICAgKiAgICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgZmV0Y2goJy9pdGVtcycpO1xuICAgKiAgICAgIHJldHVybiBpdGVtcy5qc29uKClcbiAgICogICB9IGNhdGNoKGVycikge1xuICAgKiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgKiAgIH1cbiAgICogfSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqc1xuICAgKiBjb25zdCBleGFtcGxlID0gbmV3IENob2ljZXMoZWxlbWVudCk7XG4gICAqXG4gICAqIGV4YW1wbGUuc2V0Q2hvaWNlcyhbe1xuICAgKiAgIGxhYmVsOiAnR3JvdXAgb25lJyxcbiAgICogICBpZDogMSxcbiAgICogICBkaXNhYmxlZDogZmFsc2UsXG4gICAqICAgY2hvaWNlczogW1xuICAgKiAgICAge3ZhbHVlOiAnQ2hpbGQgT25lJywgbGFiZWw6ICdDaGlsZCBPbmUnLCBzZWxlY3RlZDogdHJ1ZX0sXG4gICAqICAgICB7dmFsdWU6ICdDaGlsZCBUd28nLCBsYWJlbDogJ0NoaWxkIFR3bycsICBkaXNhYmxlZDogdHJ1ZX0sXG4gICAqICAgICB7dmFsdWU6ICdDaGlsZCBUaHJlZScsIGxhYmVsOiAnQ2hpbGQgVGhyZWUnfSxcbiAgICogICBdXG4gICAqIH0sXG4gICAqIHtcbiAgICogICBsYWJlbDogJ0dyb3VwIHR3bycsXG4gICAqICAgaWQ6IDIsXG4gICAqICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgKiAgIGNob2ljZXM6IFtcbiAgICogICAgIHt2YWx1ZTogJ0NoaWxkIEZvdXInLCBsYWJlbDogJ0NoaWxkIEZvdXInLCBkaXNhYmxlZDogdHJ1ZX0sXG4gICAqICAgICB7dmFsdWU6ICdDaGlsZCBGaXZlJywgbGFiZWw6ICdDaGlsZCBGaXZlJ30sXG4gICAqICAgICB7dmFsdWU6ICdDaGlsZCBTaXgnLCBsYWJlbDogJ0NoaWxkIFNpeCcsIGN1c3RvbVByb3BlcnRpZXM6IHtcbiAgICogICAgICAgZGVzY3JpcHRpb246ICdDdXN0b20gZGVzY3JpcHRpb24gYWJvdXQgY2hpbGQgc2l4JyxcbiAgICogICAgICAgcmFuZG9tOiAnQW5vdGhlciByYW5kb20gY3VzdG9tIHByb3BlcnR5J1xuICAgKiAgICAgfX0sXG4gICAqICAgXVxuICAgKiB9XSwgJ3ZhbHVlJywgJ2xhYmVsJywgZmFsc2UpO1xuICAgKiBgYGBcbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2V0Q2hvaWNlcyA9IGZ1bmN0aW9uIHNldENob2ljZXMoY2hvaWNlc0FycmF5T3JGZXRjaGVyLCB2YWx1ZSwgbGFiZWwsIHJlcGxhY2VDaG9pY2VzKSB7XG4gICAgdmFyIF90aGlzMTEgPSB0aGlzO1xuXG4gICAgaWYgKGNob2ljZXNBcnJheU9yRmV0Y2hlciA9PT0gdm9pZCAwKSB7XG4gICAgICBjaG9pY2VzQXJyYXlPckZldGNoZXIgPSBbXTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkge1xuICAgICAgdmFsdWUgPSAndmFsdWUnO1xuICAgIH1cblxuICAgIGlmIChsYWJlbCA9PT0gdm9pZCAwKSB7XG4gICAgICBsYWJlbCA9ICdsYWJlbCc7XG4gICAgfVxuXG4gICAgaWYgKHJlcGxhY2VDaG9pY2VzID09PSB2b2lkIDApIHtcbiAgICAgIHJlcGxhY2VDaG9pY2VzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpc2VkKSB7XG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJzZXRDaG9pY2VzIHdhcyBjYWxsZWQgb24gYSBub24taW5pdGlhbGl6ZWQgaW5zdGFuY2Ugb2YgQ2hvaWNlc1wiKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2lzU2VsZWN0RWxlbWVudCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcInNldENob2ljZXMgY2FuJ3QgYmUgdXNlZCB3aXRoIElOUFVUIGJhc2VkIENob2ljZXNcIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgfHwgIXZhbHVlKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwidmFsdWUgcGFyYW1ldGVyIG11c3QgYmUgYSBuYW1lIG9mICd2YWx1ZScgZmllbGQgaW4gcGFzc2VkIG9iamVjdHNcIik7XG4gICAgfSAvLyBDbGVhciBjaG9pY2VzIGlmIG5lZWRlZFxuXG5cbiAgICBpZiAocmVwbGFjZUNob2ljZXMpIHtcbiAgICAgIHRoaXMuY2xlYXJDaG9pY2VzKCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjaG9pY2VzQXJyYXlPckZldGNoZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIGl0J3MgYSBjaG9pY2VzIGZldGNoZXIgZnVuY3Rpb25cbiAgICAgIHZhciBmZXRjaGVyID0gY2hvaWNlc0FycmF5T3JGZXRjaGVyKHRoaXMpO1xuXG4gICAgICBpZiAodHlwZW9mIFByb21pc2UgPT09ICdmdW5jdGlvbicgJiYgZmV0Y2hlciBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgLy8gdGhhdCdzIGEgcHJvbWlzZVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGF0L2NvbXBhdFxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlc29sdmUpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMxMS5faGFuZGxlTG9hZGluZ1N0YXRlKHRydWUpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZmV0Y2hlcjtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIHJldHVybiBfdGhpczExLnNldENob2ljZXMoZGF0YSwgdmFsdWUsIGxhYmVsLCByZXBsYWNlQ2hvaWNlcyk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBpZiAoIV90aGlzMTEuY29uZmlnLnNpbGVudCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMTEuX2hhbmRsZUxvYWRpbmdTdGF0ZShmYWxzZSk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczExO1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gZnVuY3Rpb24gcmV0dXJuZWQgc29tZXRoaW5nIGVsc2UgdGhhbiBwcm9taXNlLCBsZXQncyBjaGVjayBpZiBpdCdzIGFuIGFycmF5IG9mIGNob2ljZXNcblxuXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZmV0Y2hlcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIi5zZXRDaG9pY2VzIGZpcnN0IGFyZ3VtZW50IGZ1bmN0aW9uIG11c3QgcmV0dXJuIGVpdGhlciBhcnJheSBvZiBjaG9pY2VzIG9yIFByb21pc2UsIGdvdDogXCIgKyB0eXBlb2YgZmV0Y2hlcik7XG4gICAgICB9IC8vIHJlY3Vyc2lvbiB3aXRoIHJlc3VsdHMsIGl0J3Mgc3luYyBhbmQgY2hvaWNlcyB3ZXJlIGNsZWFyZWQgYWxyZWFkeVxuXG5cbiAgICAgIHJldHVybiB0aGlzLnNldENob2ljZXMoZmV0Y2hlciwgdmFsdWUsIGxhYmVsLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGNob2ljZXNBcnJheU9yRmV0Y2hlcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCIuc2V0Q2hvaWNlcyBtdXN0IGJlIGNhbGxlZCBlaXRoZXIgd2l0aCBhcnJheSBvZiBjaG9pY2VzIHdpdGggYSBmdW5jdGlvbiByZXN1bHRpbmcgaW50byBQcm9taXNlIG9mIGFycmF5IG9mIGNob2ljZXNcIik7XG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXJPdXRlci5yZW1vdmVMb2FkaW5nU3RhdGUoKTtcblxuICAgIHRoaXMuX3N0YXJ0TG9hZGluZygpO1xuXG4gICAgY2hvaWNlc0FycmF5T3JGZXRjaGVyLmZvckVhY2goZnVuY3Rpb24gKGdyb3VwT3JDaG9pY2UpIHtcbiAgICAgIGlmIChncm91cE9yQ2hvaWNlLmNob2ljZXMpIHtcbiAgICAgICAgX3RoaXMxMS5fYWRkR3JvdXAoe1xuICAgICAgICAgIGlkOiBwYXJzZUludChncm91cE9yQ2hvaWNlLmlkLCAxMCkgfHwgbnVsbCxcbiAgICAgICAgICBncm91cDogZ3JvdXBPckNob2ljZSxcbiAgICAgICAgICB2YWx1ZUtleTogdmFsdWUsXG4gICAgICAgICAgbGFiZWxLZXk6IGxhYmVsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMxMS5fYWRkQ2hvaWNlKHtcbiAgICAgICAgICB2YWx1ZTogZ3JvdXBPckNob2ljZVt2YWx1ZV0sXG4gICAgICAgICAgbGFiZWw6IGdyb3VwT3JDaG9pY2VbbGFiZWxdLFxuICAgICAgICAgIGlzU2VsZWN0ZWQ6IGdyb3VwT3JDaG9pY2Uuc2VsZWN0ZWQsXG4gICAgICAgICAgaXNEaXNhYmxlZDogZ3JvdXBPckNob2ljZS5kaXNhYmxlZCxcbiAgICAgICAgICBjdXN0b21Qcm9wZXJ0aWVzOiBncm91cE9yQ2hvaWNlLmN1c3RvbVByb3BlcnRpZXMsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IGdyb3VwT3JDaG9pY2UucGxhY2Vob2xkZXJcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLl9zdG9wTG9hZGluZygpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyQ2hvaWNlcyA9IGZ1bmN0aW9uIGNsZWFyQ2hvaWNlcygpIHtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChjaG9pY2VzX2NsZWFyQ2hvaWNlcygpKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5jbGVhclN0b3JlID0gZnVuY3Rpb24gY2xlYXJTdG9yZSgpIHtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChjbGVhckFsbCgpKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5jbGVhcklucHV0ID0gZnVuY3Rpb24gY2xlYXJJbnB1dCgpIHtcbiAgICB2YXIgc2hvdWxkU2V0SW5wdXRXaWR0aCA9ICF0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQ7XG4gICAgdGhpcy5pbnB1dC5jbGVhcihzaG91bGRTZXRJbnB1dFdpZHRoKTtcblxuICAgIGlmICghdGhpcy5faXNUZXh0RWxlbWVudCAmJiB0aGlzLl9jYW5TZWFyY2gpIHtcbiAgICAgIHRoaXMuX2lzU2VhcmNoaW5nID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKGNob2ljZXNfYWN0aXZhdGVDaG9pY2VzKHRydWUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uX3JlbmRlciA9IGZ1bmN0aW9uIF9yZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuX3N0b3JlLmlzTG9hZGluZygpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fY3VycmVudFN0YXRlID0gdGhpcy5fc3RvcmUuc3RhdGU7XG4gICAgdmFyIHN0YXRlQ2hhbmdlZCA9IHRoaXMuX2N1cnJlbnRTdGF0ZS5jaG9pY2VzICE9PSB0aGlzLl9wcmV2U3RhdGUuY2hvaWNlcyB8fCB0aGlzLl9jdXJyZW50U3RhdGUuZ3JvdXBzICE9PSB0aGlzLl9wcmV2U3RhdGUuZ3JvdXBzIHx8IHRoaXMuX2N1cnJlbnRTdGF0ZS5pdGVtcyAhPT0gdGhpcy5fcHJldlN0YXRlLml0ZW1zO1xuICAgIHZhciBzaG91bGRSZW5kZXJDaG9pY2VzID0gdGhpcy5faXNTZWxlY3RFbGVtZW50O1xuICAgIHZhciBzaG91bGRSZW5kZXJJdGVtcyA9IHRoaXMuX2N1cnJlbnRTdGF0ZS5pdGVtcyAhPT0gdGhpcy5fcHJldlN0YXRlLml0ZW1zO1xuXG4gICAgaWYgKCFzdGF0ZUNoYW5nZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkUmVuZGVyQ2hvaWNlcykge1xuICAgICAgdGhpcy5fcmVuZGVyQ2hvaWNlcygpO1xuICAgIH1cblxuICAgIGlmIChzaG91bGRSZW5kZXJJdGVtcykge1xuICAgICAgdGhpcy5fcmVuZGVySXRlbXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9wcmV2U3RhdGUgPSB0aGlzLl9jdXJyZW50U3RhdGU7XG4gIH07XG5cbiAgX3Byb3RvLl9yZW5kZXJDaG9pY2VzID0gZnVuY3Rpb24gX3JlbmRlckNob2ljZXMoKSB7XG4gICAgdmFyIF90aGlzMTIgPSB0aGlzO1xuXG4gICAgdmFyIF90aGlzJF9zdG9yZSA9IHRoaXMuX3N0b3JlLFxuICAgICAgICBhY3RpdmVHcm91cHMgPSBfdGhpcyRfc3RvcmUuYWN0aXZlR3JvdXBzLFxuICAgICAgICBhY3RpdmVDaG9pY2VzID0gX3RoaXMkX3N0b3JlLmFjdGl2ZUNob2ljZXM7XG4gICAgdmFyIGNob2ljZUxpc3RGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICB0aGlzLmNob2ljZUxpc3QuY2xlYXIoKTtcblxuICAgIGlmICh0aGlzLmNvbmZpZy5yZXNldFNjcm9sbFBvc2l0aW9uKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMxMi5jaG9pY2VMaXN0LnNjcm9sbFRvVG9wKCk7XG4gICAgICB9KTtcbiAgICB9IC8vIElmIHdlIGhhdmUgZ3JvdXBlZCBvcHRpb25zXG5cblxuICAgIGlmIChhY3RpdmVHcm91cHMubGVuZ3RoID49IDEgJiYgIXRoaXMuX2lzU2VhcmNoaW5nKSB7XG4gICAgICAvLyBJZiB3ZSBoYXZlIGEgcGxhY2Vob2xkZXIgY2hvaWNlIGFsb25nIHdpdGggZ3JvdXBzXG4gICAgICB2YXIgYWN0aXZlUGxhY2Vob2xkZXJzID0gYWN0aXZlQ2hvaWNlcy5maWx0ZXIoZnVuY3Rpb24gKGFjdGl2ZUNob2ljZSkge1xuICAgICAgICByZXR1cm4gYWN0aXZlQ2hvaWNlLnBsYWNlaG9sZGVyID09PSB0cnVlICYmIGFjdGl2ZUNob2ljZS5ncm91cElkID09PSAtMTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYWN0aXZlUGxhY2Vob2xkZXJzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgIGNob2ljZUxpc3RGcmFnbWVudCA9IHRoaXMuX2NyZWF0ZUNob2ljZXNGcmFnbWVudChhY3RpdmVQbGFjZWhvbGRlcnMsIGNob2ljZUxpc3RGcmFnbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGNob2ljZUxpc3RGcmFnbWVudCA9IHRoaXMuX2NyZWF0ZUdyb3Vwc0ZyYWdtZW50KGFjdGl2ZUdyb3VwcywgYWN0aXZlQ2hvaWNlcywgY2hvaWNlTGlzdEZyYWdtZW50KTtcbiAgICB9IGVsc2UgaWYgKGFjdGl2ZUNob2ljZXMubGVuZ3RoID49IDEpIHtcbiAgICAgIGNob2ljZUxpc3RGcmFnbWVudCA9IHRoaXMuX2NyZWF0ZUNob2ljZXNGcmFnbWVudChhY3RpdmVDaG9pY2VzLCBjaG9pY2VMaXN0RnJhZ21lbnQpO1xuICAgIH0gLy8gSWYgd2UgaGF2ZSBjaG9pY2VzIHRvIHNob3dcblxuXG4gICAgaWYgKGNob2ljZUxpc3RGcmFnbWVudC5jaGlsZE5vZGVzICYmIGNob2ljZUxpc3RGcmFnbWVudC5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBhY3RpdmVJdGVtcyA9IHRoaXMuX3N0b3JlLmFjdGl2ZUl0ZW1zO1xuXG4gICAgICB2YXIgY2FuQWRkSXRlbSA9IHRoaXMuX2NhbkFkZEl0ZW0oYWN0aXZlSXRlbXMsIHRoaXMuaW5wdXQudmFsdWUpOyAvLyAuLi5hbmQgd2UgY2FuIHNlbGVjdCB0aGVtXG5cblxuICAgICAgaWYgKGNhbkFkZEl0ZW0ucmVzcG9uc2UpIHtcbiAgICAgICAgLy8gLi4uYXBwZW5kIHRoZW0gYW5kIGhpZ2hsaWdodCB0aGUgZmlyc3QgY2hvaWNlXG4gICAgICAgIHRoaXMuY2hvaWNlTGlzdC5hcHBlbmQoY2hvaWNlTGlzdEZyYWdtZW50KTtcblxuICAgICAgICB0aGlzLl9oaWdobGlnaHRDaG9pY2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIC4uLm90aGVyd2lzZSBzaG93IGEgbm90aWNlXG4gICAgICAgIHRoaXMuY2hvaWNlTGlzdC5hcHBlbmQodGhpcy5fZ2V0VGVtcGxhdGUoJ25vdGljZScsIGNhbkFkZEl0ZW0ubm90aWNlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE90aGVyd2lzZSBzaG93IGEgbm90aWNlXG4gICAgICB2YXIgZHJvcGRvd25JdGVtO1xuICAgICAgdmFyIG5vdGljZTtcblxuICAgICAgaWYgKHRoaXMuX2lzU2VhcmNoaW5nKSB7XG4gICAgICAgIG5vdGljZSA9IHR5cGVvZiB0aGlzLmNvbmZpZy5ub1Jlc3VsdHNUZXh0ID09PSAnZnVuY3Rpb24nID8gdGhpcy5jb25maWcubm9SZXN1bHRzVGV4dCgpIDogdGhpcy5jb25maWcubm9SZXN1bHRzVGV4dDtcbiAgICAgICAgZHJvcGRvd25JdGVtID0gdGhpcy5fZ2V0VGVtcGxhdGUoJ25vdGljZScsIG5vdGljZSwgJ25vLXJlc3VsdHMnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vdGljZSA9IHR5cGVvZiB0aGlzLmNvbmZpZy5ub0Nob2ljZXNUZXh0ID09PSAnZnVuY3Rpb24nID8gdGhpcy5jb25maWcubm9DaG9pY2VzVGV4dCgpIDogdGhpcy5jb25maWcubm9DaG9pY2VzVGV4dDtcbiAgICAgICAgZHJvcGRvd25JdGVtID0gdGhpcy5fZ2V0VGVtcGxhdGUoJ25vdGljZScsIG5vdGljZSwgJ25vLWNob2ljZXMnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jaG9pY2VMaXN0LmFwcGVuZChkcm9wZG93bkl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX3JlbmRlckl0ZW1zID0gZnVuY3Rpb24gX3JlbmRlckl0ZW1zKCkge1xuICAgIHZhciBhY3RpdmVJdGVtcyA9IHRoaXMuX3N0b3JlLmFjdGl2ZUl0ZW1zIHx8IFtdO1xuICAgIHRoaXMuaXRlbUxpc3QuY2xlYXIoKTsgLy8gQ3JlYXRlIGEgZnJhZ21lbnQgdG8gc3RvcmUgb3VyIGxpc3QgaXRlbXNcbiAgICAvLyAoc28gd2UgZG9uJ3QgaGF2ZSB0byB1cGRhdGUgdGhlIERPTSBmb3IgZWFjaCBpdGVtKVxuXG4gICAgdmFyIGl0ZW1MaXN0RnJhZ21lbnQgPSB0aGlzLl9jcmVhdGVJdGVtc0ZyYWdtZW50KGFjdGl2ZUl0ZW1zKTsgLy8gSWYgd2UgaGF2ZSBpdGVtcyB0byBhZGQsIGFwcGVuZCB0aGVtXG5cblxuICAgIGlmIChpdGVtTGlzdEZyYWdtZW50LmNoaWxkTm9kZXMpIHtcbiAgICAgIHRoaXMuaXRlbUxpc3QuYXBwZW5kKGl0ZW1MaXN0RnJhZ21lbnQpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX2NyZWF0ZUdyb3Vwc0ZyYWdtZW50ID0gZnVuY3Rpb24gX2NyZWF0ZUdyb3Vwc0ZyYWdtZW50KGdyb3VwcywgY2hvaWNlcywgZnJhZ21lbnQpIHtcbiAgICB2YXIgX3RoaXMxMyA9IHRoaXM7XG5cbiAgICBpZiAoZnJhZ21lbnQgPT09IHZvaWQgMCkge1xuICAgICAgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgfVxuXG4gICAgdmFyIGdldEdyb3VwQ2hvaWNlcyA9IGZ1bmN0aW9uIGdldEdyb3VwQ2hvaWNlcyhncm91cCkge1xuICAgICAgcmV0dXJuIGNob2ljZXMuZmlsdGVyKGZ1bmN0aW9uIChjaG9pY2UpIHtcbiAgICAgICAgaWYgKF90aGlzMTMuX2lzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiBjaG9pY2UuZ3JvdXBJZCA9PT0gZ3JvdXAuaWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hvaWNlLmdyb3VwSWQgPT09IGdyb3VwLmlkICYmIChfdGhpczEzLmNvbmZpZy5yZW5kZXJTZWxlY3RlZENob2ljZXMgPT09ICdhbHdheXMnIHx8ICFjaG9pY2Uuc2VsZWN0ZWQpO1xuICAgICAgfSk7XG4gICAgfTsgLy8gSWYgc29ydGluZyBpcyBlbmFibGVkLCBmaWx0ZXIgZ3JvdXBzXG5cblxuICAgIGlmICh0aGlzLmNvbmZpZy5zaG91bGRTb3J0KSB7XG4gICAgICBncm91cHMuc29ydCh0aGlzLmNvbmZpZy5zb3J0ZXIpO1xuICAgIH1cblxuICAgIGdyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgdmFyIGdyb3VwQ2hvaWNlcyA9IGdldEdyb3VwQ2hvaWNlcyhncm91cCk7XG5cbiAgICAgIGlmIChncm91cENob2ljZXMubGVuZ3RoID49IDEpIHtcbiAgICAgICAgdmFyIGRyb3Bkb3duR3JvdXAgPSBfdGhpczEzLl9nZXRUZW1wbGF0ZSgnY2hvaWNlR3JvdXAnLCBncm91cCk7XG5cbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZHJvcGRvd25Hcm91cCk7XG5cbiAgICAgICAgX3RoaXMxMy5fY3JlYXRlQ2hvaWNlc0ZyYWdtZW50KGdyb3VwQ2hvaWNlcywgZnJhZ21lbnQsIHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfTtcblxuICBfcHJvdG8uX2NyZWF0ZUNob2ljZXNGcmFnbWVudCA9IGZ1bmN0aW9uIF9jcmVhdGVDaG9pY2VzRnJhZ21lbnQoY2hvaWNlcywgZnJhZ21lbnQsIHdpdGhpbkdyb3VwKSB7XG4gICAgdmFyIF90aGlzMTQgPSB0aGlzO1xuXG4gICAgaWYgKGZyYWdtZW50ID09PSB2b2lkIDApIHtcbiAgICAgIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIH1cblxuICAgIGlmICh3aXRoaW5Hcm91cCA9PT0gdm9pZCAwKSB7XG4gICAgICB3aXRoaW5Hcm91cCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBhIGZyYWdtZW50IHRvIHN0b3JlIG91ciBsaXN0IGl0ZW1zIChzbyB3ZSBkb24ndCBoYXZlIHRvIHVwZGF0ZSB0aGUgRE9NIGZvciBlYWNoIGl0ZW0pXG4gICAgdmFyIF90aGlzJGNvbmZpZyA9IHRoaXMuY29uZmlnLFxuICAgICAgICByZW5kZXJTZWxlY3RlZENob2ljZXMgPSBfdGhpcyRjb25maWcucmVuZGVyU2VsZWN0ZWRDaG9pY2VzLFxuICAgICAgICBzZWFyY2hSZXN1bHRMaW1pdCA9IF90aGlzJGNvbmZpZy5zZWFyY2hSZXN1bHRMaW1pdCxcbiAgICAgICAgcmVuZGVyQ2hvaWNlTGltaXQgPSBfdGhpcyRjb25maWcucmVuZGVyQ2hvaWNlTGltaXQ7XG4gICAgdmFyIGZpbHRlciA9IHRoaXMuX2lzU2VhcmNoaW5nID8gc29ydEJ5U2NvcmUgOiB0aGlzLmNvbmZpZy5zb3J0ZXI7XG5cbiAgICB2YXIgYXBwZW5kQ2hvaWNlID0gZnVuY3Rpb24gYXBwZW5kQ2hvaWNlKGNob2ljZSkge1xuICAgICAgdmFyIHNob3VsZFJlbmRlciA9IHJlbmRlclNlbGVjdGVkQ2hvaWNlcyA9PT0gJ2F1dG8nID8gX3RoaXMxNC5faXNTZWxlY3RPbmVFbGVtZW50IHx8ICFjaG9pY2Uuc2VsZWN0ZWQgOiB0cnVlO1xuXG4gICAgICBpZiAoc2hvdWxkUmVuZGVyKSB7XG4gICAgICAgIHZhciBkcm9wZG93bkl0ZW0gPSBfdGhpczE0Ll9nZXRUZW1wbGF0ZSgnY2hvaWNlJywgY2hvaWNlLCBfdGhpczE0LmNvbmZpZy5pdGVtU2VsZWN0VGV4dCk7XG5cbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZHJvcGRvd25JdGVtKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHJlbmRlcmVyYWJsZUNob2ljZXMgPSBjaG9pY2VzO1xuXG4gICAgaWYgKHJlbmRlclNlbGVjdGVkQ2hvaWNlcyA9PT0gJ2F1dG8nICYmICF0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgIHJlbmRlcmVyYWJsZUNob2ljZXMgPSBjaG9pY2VzLmZpbHRlcihmdW5jdGlvbiAoY2hvaWNlKSB7XG4gICAgICAgIHJldHVybiAhY2hvaWNlLnNlbGVjdGVkO1xuICAgICAgfSk7XG4gICAgfSAvLyBTcGxpdCBhcnJheSBpbnRvIHBsYWNlaG9sZGVycyBhbmQgXCJub3JtYWxcIiBjaG9pY2VzXG5cblxuICAgIHZhciBfcmVuZGVyZXJhYmxlQ2hvaWNlcyQgPSByZW5kZXJlcmFibGVDaG9pY2VzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjaG9pY2UpIHtcbiAgICAgIGlmIChjaG9pY2UucGxhY2Vob2xkZXIpIHtcbiAgICAgICAgYWNjLnBsYWNlaG9sZGVyQ2hvaWNlcy5wdXNoKGNob2ljZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY2Mubm9ybWFsQ2hvaWNlcy5wdXNoKGNob2ljZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge1xuICAgICAgcGxhY2Vob2xkZXJDaG9pY2VzOiBbXSxcbiAgICAgIG5vcm1hbENob2ljZXM6IFtdXG4gICAgfSksXG4gICAgICAgIHBsYWNlaG9sZGVyQ2hvaWNlcyA9IF9yZW5kZXJlcmFibGVDaG9pY2VzJC5wbGFjZWhvbGRlckNob2ljZXMsXG4gICAgICAgIG5vcm1hbENob2ljZXMgPSBfcmVuZGVyZXJhYmxlQ2hvaWNlcyQubm9ybWFsQ2hvaWNlczsgLy8gSWYgc29ydGluZyBpcyBlbmFibGVkIG9yIHRoZSB1c2VyIGlzIHNlYXJjaGluZywgZmlsdGVyIGNob2ljZXNcblxuXG4gICAgaWYgKHRoaXMuY29uZmlnLnNob3VsZFNvcnQgfHwgdGhpcy5faXNTZWFyY2hpbmcpIHtcbiAgICAgIG5vcm1hbENob2ljZXMuc29ydChmaWx0ZXIpO1xuICAgIH1cblxuICAgIHZhciBjaG9pY2VMaW1pdCA9IHJlbmRlcmVyYWJsZUNob2ljZXMubGVuZ3RoOyAvLyBQcmVwZW5kIHBsYWNlaG9sZWRlclxuXG4gICAgdmFyIHNvcnRlZENob2ljZXMgPSB0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQgPyBbXS5jb25jYXQocGxhY2Vob2xkZXJDaG9pY2VzLCBub3JtYWxDaG9pY2VzKSA6IG5vcm1hbENob2ljZXM7XG5cbiAgICBpZiAodGhpcy5faXNTZWFyY2hpbmcpIHtcbiAgICAgIGNob2ljZUxpbWl0ID0gc2VhcmNoUmVzdWx0TGltaXQ7XG4gICAgfSBlbHNlIGlmIChyZW5kZXJDaG9pY2VMaW1pdCAmJiByZW5kZXJDaG9pY2VMaW1pdCA+IDAgJiYgIXdpdGhpbkdyb3VwKSB7XG4gICAgICBjaG9pY2VMaW1pdCA9IHJlbmRlckNob2ljZUxpbWl0O1xuICAgIH0gLy8gQWRkIGVhY2ggY2hvaWNlIHRvIGRyb3Bkb3duIHdpdGhpbiByYW5nZVxuXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNob2ljZUxpbWl0OyBpICs9IDEpIHtcbiAgICAgIGlmIChzb3J0ZWRDaG9pY2VzW2ldKSB7XG4gICAgICAgIGFwcGVuZENob2ljZShzb3J0ZWRDaG9pY2VzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhZ21lbnQ7XG4gIH07XG5cbiAgX3Byb3RvLl9jcmVhdGVJdGVtc0ZyYWdtZW50ID0gZnVuY3Rpb24gX2NyZWF0ZUl0ZW1zRnJhZ21lbnQoaXRlbXMsIGZyYWdtZW50KSB7XG4gICAgdmFyIF90aGlzMTUgPSB0aGlzO1xuXG4gICAgaWYgKGZyYWdtZW50ID09PSB2b2lkIDApIHtcbiAgICAgIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBmcmFnbWVudCB0byBhZGQgZWxlbWVudHMgdG9cbiAgICB2YXIgX3RoaXMkY29uZmlnMiA9IHRoaXMuY29uZmlnLFxuICAgICAgICBzaG91bGRTb3J0SXRlbXMgPSBfdGhpcyRjb25maWcyLnNob3VsZFNvcnRJdGVtcyxcbiAgICAgICAgc29ydGVyID0gX3RoaXMkY29uZmlnMi5zb3J0ZXIsXG4gICAgICAgIHJlbW92ZUl0ZW1CdXR0b24gPSBfdGhpcyRjb25maWcyLnJlbW92ZUl0ZW1CdXR0b247IC8vIElmIHNvcnRpbmcgaXMgZW5hYmxlZCwgZmlsdGVyIGl0ZW1zXG5cbiAgICBpZiAoc2hvdWxkU29ydEl0ZW1zICYmICF0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgIGl0ZW1zLnNvcnQoc29ydGVyKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNUZXh0RWxlbWVudCkge1xuICAgICAgLy8gVXBkYXRlIHRoZSB2YWx1ZSBvZiB0aGUgaGlkZGVuIGlucHV0XG4gICAgICB0aGlzLnBhc3NlZEVsZW1lbnQudmFsdWUgPSBpdGVtcztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVXBkYXRlIHRoZSBvcHRpb25zIG9mIHRoZSBoaWRkZW4gaW5wdXRcbiAgICAgIHRoaXMucGFzc2VkRWxlbWVudC5vcHRpb25zID0gaXRlbXM7XG4gICAgfVxuXG4gICAgdmFyIGFkZEl0ZW1Ub0ZyYWdtZW50ID0gZnVuY3Rpb24gYWRkSXRlbVRvRnJhZ21lbnQoaXRlbSkge1xuICAgICAgLy8gQ3JlYXRlIG5ldyBsaXN0IGVsZW1lbnRcbiAgICAgIHZhciBsaXN0SXRlbSA9IF90aGlzMTUuX2dldFRlbXBsYXRlKCdpdGVtJywgaXRlbSwgcmVtb3ZlSXRlbUJ1dHRvbik7IC8vIEFwcGVuZCBpdCB0byBsaXN0XG5cblxuICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH07IC8vIEFkZCBlYWNoIGxpc3QgaXRlbSB0byBsaXN0XG5cblxuICAgIGl0ZW1zLmZvckVhY2goYWRkSXRlbVRvRnJhZ21lbnQpO1xuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfTtcblxuICBfcHJvdG8uX3RyaWdnZXJDaGFuZ2UgPSBmdW5jdGlvbiBfdHJpZ2dlckNoYW5nZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wYXNzZWRFbGVtZW50LnRyaWdnZXJFdmVudChFVkVOVFMuY2hhbmdlLCB7XG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uX3NlbGVjdFBsYWNlaG9sZGVyQ2hvaWNlID0gZnVuY3Rpb24gX3NlbGVjdFBsYWNlaG9sZGVyQ2hvaWNlKCkge1xuICAgIHZhciBwbGFjZWhvbGRlckNob2ljZSA9IHRoaXMuX3N0b3JlLnBsYWNlaG9sZGVyQ2hvaWNlO1xuXG4gICAgaWYgKHBsYWNlaG9sZGVyQ2hvaWNlKSB7XG4gICAgICB0aGlzLl9hZGRJdGVtKHtcbiAgICAgICAgdmFsdWU6IHBsYWNlaG9sZGVyQ2hvaWNlLnZhbHVlLFxuICAgICAgICBsYWJlbDogcGxhY2Vob2xkZXJDaG9pY2UubGFiZWwsXG4gICAgICAgIGNob2ljZUlkOiBwbGFjZWhvbGRlckNob2ljZS5pZCxcbiAgICAgICAgZ3JvdXBJZDogcGxhY2Vob2xkZXJDaG9pY2UuZ3JvdXBJZCxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyQ2hvaWNlLnBsYWNlaG9sZGVyXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fdHJpZ2dlckNoYW5nZShwbGFjZWhvbGRlckNob2ljZS52YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5faGFuZGxlQnV0dG9uQWN0aW9uID0gZnVuY3Rpb24gX2hhbmRsZUJ1dHRvbkFjdGlvbihhY3RpdmVJdGVtcywgZWxlbWVudCkge1xuICAgIGlmICghYWN0aXZlSXRlbXMgfHwgIWVsZW1lbnQgfHwgIXRoaXMuY29uZmlnLnJlbW92ZUl0ZW1zIHx8ICF0aGlzLmNvbmZpZy5yZW1vdmVJdGVtQnV0dG9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGl0ZW1JZCA9IGVsZW1lbnQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICB2YXIgaXRlbVRvUmVtb3ZlID0gYWN0aXZlSXRlbXMuZmluZChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0uaWQgPT09IHBhcnNlSW50KGl0ZW1JZCwgMTApO1xuICAgIH0pOyAvLyBSZW1vdmUgaXRlbSBhc3NvY2lhdGVkIHdpdGggYnV0dG9uXG5cbiAgICB0aGlzLl9yZW1vdmVJdGVtKGl0ZW1Ub1JlbW92ZSk7XG5cbiAgICB0aGlzLl90cmlnZ2VyQ2hhbmdlKGl0ZW1Ub1JlbW92ZS52YWx1ZSk7XG5cbiAgICBpZiAodGhpcy5faXNTZWxlY3RPbmVFbGVtZW50KSB7XG4gICAgICB0aGlzLl9zZWxlY3RQbGFjZWhvbGRlckNob2ljZSgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX2hhbmRsZUl0ZW1BY3Rpb24gPSBmdW5jdGlvbiBfaGFuZGxlSXRlbUFjdGlvbihhY3RpdmVJdGVtcywgZWxlbWVudCwgaGFzU2hpZnRLZXkpIHtcbiAgICB2YXIgX3RoaXMxNiA9IHRoaXM7XG5cbiAgICBpZiAoaGFzU2hpZnRLZXkgPT09IHZvaWQgMCkge1xuICAgICAgaGFzU2hpZnRLZXkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIWFjdGl2ZUl0ZW1zIHx8ICFlbGVtZW50IHx8ICF0aGlzLmNvbmZpZy5yZW1vdmVJdGVtcyB8fCB0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcGFzc2VkSWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpOyAvLyBXZSBvbmx5IHdhbnQgdG8gc2VsZWN0IG9uZSBpdGVtIHdpdGggYSBjbGlja1xuICAgIC8vIHNvIHdlIGRlc2VsZWN0IGFueSBpdGVtcyB0aGF0IGFyZW4ndCB0aGUgdGFyZ2V0XG4gICAgLy8gdW5sZXNzIHNoaWZ0IGlzIGJlaW5nIHByZXNzZWRcblxuICAgIGFjdGl2ZUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIGlmIChpdGVtLmlkID09PSBwYXJzZUludChwYXNzZWRJZCwgMTApICYmICFpdGVtLmhpZ2hsaWdodGVkKSB7XG4gICAgICAgIF90aGlzMTYuaGlnaGxpZ2h0SXRlbShpdGVtKTtcbiAgICAgIH0gZWxzZSBpZiAoIWhhc1NoaWZ0S2V5ICYmIGl0ZW0uaGlnaGxpZ2h0ZWQpIHtcbiAgICAgICAgX3RoaXMxNi51bmhpZ2hsaWdodEl0ZW0oaXRlbSk7XG4gICAgICB9XG4gICAgfSk7IC8vIEZvY3VzIGlucHV0IGFzIHdpdGhvdXQgZm9jdXMsIGEgdXNlciBjYW5ub3QgZG8gYW55dGhpbmcgd2l0aCBhXG4gICAgLy8gaGlnaGxpZ2h0ZWQgaXRlbVxuXG4gICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICB9O1xuXG4gIF9wcm90by5faGFuZGxlQ2hvaWNlQWN0aW9uID0gZnVuY3Rpb24gX2hhbmRsZUNob2ljZUFjdGlvbihhY3RpdmVJdGVtcywgZWxlbWVudCkge1xuICAgIGlmICghYWN0aXZlSXRlbXMgfHwgIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIElmIHdlIGFyZSBjbGlja2luZyBvbiBhbiBvcHRpb25cblxuXG4gICAgdmFyIGlkID0gZWxlbWVudC5kYXRhc2V0LmlkO1xuXG4gICAgdmFyIGNob2ljZSA9IHRoaXMuX3N0b3JlLmdldENob2ljZUJ5SWQoaWQpO1xuXG4gICAgaWYgKCFjaG9pY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcGFzc2VkS2V5Q29kZSA9IGFjdGl2ZUl0ZW1zWzBdICYmIGFjdGl2ZUl0ZW1zWzBdLmtleUNvZGUgPyBhY3RpdmVJdGVtc1swXS5rZXlDb2RlIDogbnVsbDtcbiAgICB2YXIgaGFzQWN0aXZlRHJvcGRvd24gPSB0aGlzLmRyb3Bkb3duLmlzQWN0aXZlOyAvLyBVcGRhdGUgY2hvaWNlIGtleUNvZGVcblxuICAgIGNob2ljZS5rZXlDb2RlID0gcGFzc2VkS2V5Q29kZTtcbiAgICB0aGlzLnBhc3NlZEVsZW1lbnQudHJpZ2dlckV2ZW50KEVWRU5UUy5jaG9pY2UsIHtcbiAgICAgIGNob2ljZTogY2hvaWNlXG4gICAgfSk7XG5cbiAgICBpZiAoIWNob2ljZS5zZWxlY3RlZCAmJiAhY2hvaWNlLmRpc2FibGVkKSB7XG4gICAgICB2YXIgY2FuQWRkSXRlbSA9IHRoaXMuX2NhbkFkZEl0ZW0oYWN0aXZlSXRlbXMsIGNob2ljZS52YWx1ZSk7XG5cbiAgICAgIGlmIChjYW5BZGRJdGVtLnJlc3BvbnNlKSB7XG4gICAgICAgIHRoaXMuX2FkZEl0ZW0oe1xuICAgICAgICAgIHZhbHVlOiBjaG9pY2UudmFsdWUsXG4gICAgICAgICAgbGFiZWw6IGNob2ljZS5sYWJlbCxcbiAgICAgICAgICBjaG9pY2VJZDogY2hvaWNlLmlkLFxuICAgICAgICAgIGdyb3VwSWQ6IGNob2ljZS5ncm91cElkLFxuICAgICAgICAgIGN1c3RvbVByb3BlcnRpZXM6IGNob2ljZS5jdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBjaG9pY2UucGxhY2Vob2xkZXIsXG4gICAgICAgICAga2V5Q29kZTogY2hvaWNlLmtleUNvZGVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fdHJpZ2dlckNoYW5nZShjaG9pY2UudmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY2xlYXJJbnB1dCgpOyAvLyBXZSB3YW50IHRvIGNsb3NlIHRoZSBkcm9wZG93biBpZiB3ZSBhcmUgZGVhbGluZyB3aXRoIGEgc2luZ2xlIHNlbGVjdCBib3hcblxuICAgIGlmIChoYXNBY3RpdmVEcm9wZG93biAmJiB0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaGlkZURyb3Bkb3duKHRydWUpO1xuICAgICAgdGhpcy5jb250YWluZXJPdXRlci5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX2hhbmRsZUJhY2tzcGFjZSA9IGZ1bmN0aW9uIF9oYW5kbGVCYWNrc3BhY2UoYWN0aXZlSXRlbXMpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLnJlbW92ZUl0ZW1zIHx8ICFhY3RpdmVJdGVtcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBsYXN0SXRlbSA9IGFjdGl2ZUl0ZW1zW2FjdGl2ZUl0ZW1zLmxlbmd0aCAtIDFdO1xuICAgIHZhciBoYXNIaWdobGlnaHRlZEl0ZW1zID0gYWN0aXZlSXRlbXMuc29tZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0uaGlnaGxpZ2h0ZWQ7XG4gICAgfSk7IC8vIElmIGVkaXRpbmcgdGhlIGxhc3QgaXRlbSBpcyBhbGxvd2VkIGFuZCB0aGVyZSBhcmUgbm90IG90aGVyIHNlbGVjdGVkIGl0ZW1zLFxuICAgIC8vIHdlIGNhbiBlZGl0IHRoZSBpdGVtIHZhbHVlLiBPdGhlcndpc2UgaWYgd2UgY2FuIHJlbW92ZSBpdGVtcywgcmVtb3ZlIGFsbCBzZWxlY3RlZCBpdGVtc1xuXG4gICAgaWYgKHRoaXMuY29uZmlnLmVkaXRJdGVtcyAmJiAhaGFzSGlnaGxpZ2h0ZWRJdGVtcyAmJiBsYXN0SXRlbSkge1xuICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IGxhc3RJdGVtLnZhbHVlO1xuICAgICAgdGhpcy5pbnB1dC5zZXRXaWR0aCgpO1xuXG4gICAgICB0aGlzLl9yZW1vdmVJdGVtKGxhc3RJdGVtKTtcblxuICAgICAgdGhpcy5fdHJpZ2dlckNoYW5nZShsYXN0SXRlbS52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghaGFzSGlnaGxpZ2h0ZWRJdGVtcykge1xuICAgICAgICAvLyBIaWdobGlnaHQgbGFzdCBpdGVtIGlmIG5vbmUgYWxyZWFkeSBoaWdobGlnaHRlZFxuICAgICAgICB0aGlzLmhpZ2hsaWdodEl0ZW0obGFzdEl0ZW0sIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZW1vdmVIaWdobGlnaHRlZEl0ZW1zKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX3N0YXJ0TG9hZGluZyA9IGZ1bmN0aW9uIF9zdGFydExvYWRpbmcoKSB7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goc2V0SXNMb2FkaW5nKHRydWUpKTtcbiAgfTtcblxuICBfcHJvdG8uX3N0b3BMb2FkaW5nID0gZnVuY3Rpb24gX3N0b3BMb2FkaW5nKCkge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHNldElzTG9hZGluZyhmYWxzZSkpO1xuICB9O1xuXG4gIF9wcm90by5faGFuZGxlTG9hZGluZ1N0YXRlID0gZnVuY3Rpb24gX2hhbmRsZUxvYWRpbmdTdGF0ZShzZXRMb2FkaW5nKSB7XG4gICAgaWYgKHNldExvYWRpbmcgPT09IHZvaWQgMCkge1xuICAgICAgc2V0TG9hZGluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHBsYWNlaG9sZGVySXRlbSA9IHRoaXMuaXRlbUxpc3QuZ2V0Q2hpbGQoXCIuXCIgKyB0aGlzLmNvbmZpZy5jbGFzc05hbWVzLnBsYWNlaG9sZGVyKTtcblxuICAgIGlmIChzZXRMb2FkaW5nKSB7XG4gICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgIHRoaXMuY29udGFpbmVyT3V0ZXIuYWRkTG9hZGluZ1N0YXRlKCk7XG5cbiAgICAgIGlmICh0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFwbGFjZWhvbGRlckl0ZW0pIHtcbiAgICAgICAgICBwbGFjZWhvbGRlckl0ZW0gPSB0aGlzLl9nZXRUZW1wbGF0ZSgncGxhY2Vob2xkZXInLCB0aGlzLmNvbmZpZy5sb2FkaW5nVGV4dCk7XG4gICAgICAgICAgdGhpcy5pdGVtTGlzdC5hcHBlbmQocGxhY2Vob2xkZXJJdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwbGFjZWhvbGRlckl0ZW0uaW5uZXJIVE1MID0gdGhpcy5jb25maWcubG9hZGluZ1RleHQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW5wdXQucGxhY2Vob2xkZXIgPSB0aGlzLmNvbmZpZy5sb2FkaW5nVGV4dDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbmFibGUoKTtcbiAgICAgIHRoaXMuY29udGFpbmVyT3V0ZXIucmVtb3ZlTG9hZGluZ1N0YXRlKCk7XG5cbiAgICAgIGlmICh0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgICAgcGxhY2Vob2xkZXJJdGVtLmlubmVySFRNTCA9IHRoaXMuX3BsYWNlaG9sZGVyVmFsdWUgfHwgJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlucHV0LnBsYWNlaG9sZGVyID0gdGhpcy5fcGxhY2Vob2xkZXJWYWx1ZSB8fCAnJztcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9oYW5kbGVTZWFyY2ggPSBmdW5jdGlvbiBfaGFuZGxlU2VhcmNoKHZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSB8fCAhdGhpcy5pbnB1dC5pc0ZvY3Vzc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNob2ljZXMgPSB0aGlzLl9zdG9yZS5jaG9pY2VzO1xuICAgIHZhciBfdGhpcyRjb25maWczID0gdGhpcy5jb25maWcsXG4gICAgICAgIHNlYXJjaEZsb29yID0gX3RoaXMkY29uZmlnMy5zZWFyY2hGbG9vcixcbiAgICAgICAgc2VhcmNoQ2hvaWNlcyA9IF90aGlzJGNvbmZpZzMuc2VhcmNoQ2hvaWNlcztcbiAgICB2YXIgaGFzVW5hY3RpdmVDaG9pY2VzID0gY2hvaWNlcy5zb21lKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgIHJldHVybiAhb3B0aW9uLmFjdGl2ZTtcbiAgICB9KTsgLy8gQ2hlY2sgdGhhdCB3ZSBoYXZlIGEgdmFsdWUgdG8gc2VhcmNoIGFuZCB0aGUgaW5wdXQgd2FzIGFuIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJcblxuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPj0gc2VhcmNoRmxvb3IpIHtcbiAgICAgIHZhciByZXN1bHRDb3VudCA9IHNlYXJjaENob2ljZXMgPyB0aGlzLl9zZWFyY2hDaG9pY2VzKHZhbHVlKSA6IDA7IC8vIFRyaWdnZXIgc2VhcmNoIGV2ZW50XG5cbiAgICAgIHRoaXMucGFzc2VkRWxlbWVudC50cmlnZ2VyRXZlbnQoRVZFTlRTLnNlYXJjaCwge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIHJlc3VsdENvdW50OiByZXN1bHRDb3VudFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChoYXNVbmFjdGl2ZUNob2ljZXMpIHtcbiAgICAgIC8vIE90aGVyd2lzZSByZXNldCBjaG9pY2VzIHRvIGFjdGl2ZVxuICAgICAgdGhpcy5faXNTZWFyY2hpbmcgPSBmYWxzZTtcblxuICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goY2hvaWNlc19hY3RpdmF0ZUNob2ljZXModHJ1ZSkpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX2NhbkFkZEl0ZW0gPSBmdW5jdGlvbiBfY2FuQWRkSXRlbShhY3RpdmVJdGVtcywgdmFsdWUpIHtcbiAgICB2YXIgY2FuQWRkSXRlbSA9IHRydWU7XG4gICAgdmFyIG5vdGljZSA9IHR5cGVvZiB0aGlzLmNvbmZpZy5hZGRJdGVtVGV4dCA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuY29uZmlnLmFkZEl0ZW1UZXh0KHZhbHVlKSA6IHRoaXMuY29uZmlnLmFkZEl0ZW1UZXh0O1xuXG4gICAgaWYgKCF0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgIHZhciBpc0R1cGxpY2F0ZVZhbHVlID0gZXhpc3RzSW5BcnJheShhY3RpdmVJdGVtcywgdmFsdWUpO1xuXG4gICAgICBpZiAodGhpcy5jb25maWcubWF4SXRlbUNvdW50ID4gMCAmJiB0aGlzLmNvbmZpZy5tYXhJdGVtQ291bnQgPD0gYWN0aXZlSXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgbWF4IGVudHJ5IGxpbWl0IGFuZCB3ZSBoYXZlIHJlYWNoZWQgdGhhdCBsaW1pdFxuICAgICAgICAvLyBkb24ndCB1cGRhdGVcbiAgICAgICAgY2FuQWRkSXRlbSA9IGZhbHNlO1xuICAgICAgICBub3RpY2UgPSB0eXBlb2YgdGhpcy5jb25maWcubWF4SXRlbVRleHQgPT09ICdmdW5jdGlvbicgPyB0aGlzLmNvbmZpZy5tYXhJdGVtVGV4dCh0aGlzLmNvbmZpZy5tYXhJdGVtQ291bnQpIDogdGhpcy5jb25maWcubWF4SXRlbVRleHQ7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5jb25maWcuZHVwbGljYXRlSXRlbXNBbGxvd2VkICYmIGlzRHVwbGljYXRlVmFsdWUgJiYgY2FuQWRkSXRlbSkge1xuICAgICAgICBjYW5BZGRJdGVtID0gZmFsc2U7XG4gICAgICAgIG5vdGljZSA9IHR5cGVvZiB0aGlzLmNvbmZpZy51bmlxdWVJdGVtVGV4dCA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuY29uZmlnLnVuaXF1ZUl0ZW1UZXh0KHZhbHVlKSA6IHRoaXMuY29uZmlnLnVuaXF1ZUl0ZW1UZXh0O1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5faXNUZXh0RWxlbWVudCAmJiB0aGlzLmNvbmZpZy5hZGRJdGVtcyAmJiBjYW5BZGRJdGVtICYmIHR5cGVvZiB0aGlzLmNvbmZpZy5hZGRJdGVtRmlsdGVyID09PSAnZnVuY3Rpb24nICYmICF0aGlzLmNvbmZpZy5hZGRJdGVtRmlsdGVyKHZhbHVlKSkge1xuICAgICAgICBjYW5BZGRJdGVtID0gZmFsc2U7XG4gICAgICAgIG5vdGljZSA9IHR5cGVvZiB0aGlzLmNvbmZpZy5jdXN0b21BZGRJdGVtVGV4dCA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuY29uZmlnLmN1c3RvbUFkZEl0ZW1UZXh0KHZhbHVlKSA6IHRoaXMuY29uZmlnLmN1c3RvbUFkZEl0ZW1UZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByZXNwb25zZTogY2FuQWRkSXRlbSxcbiAgICAgIG5vdGljZTogbm90aWNlXG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8uX3NlYXJjaENob2ljZXMgPSBmdW5jdGlvbiBfc2VhcmNoQ2hvaWNlcyh2YWx1ZSkge1xuICAgIHZhciBuZXdWYWx1ZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZS50cmltKCkgOiB2YWx1ZTtcbiAgICB2YXIgY3VycmVudFZhbHVlID0gdHlwZW9mIHRoaXMuX2N1cnJlbnRWYWx1ZSA9PT0gJ3N0cmluZycgPyB0aGlzLl9jdXJyZW50VmFsdWUudHJpbSgpIDogdGhpcy5fY3VycmVudFZhbHVlO1xuXG4gICAgaWYgKG5ld1ZhbHVlLmxlbmd0aCA8IDEgJiYgbmV3VmFsdWUgPT09IGN1cnJlbnRWYWx1ZSArIFwiIFwiKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9IC8vIElmIG5ldyB2YWx1ZSBtYXRjaGVzIHRoZSBkZXNpcmVkIGxlbmd0aCBhbmQgaXMgbm90IHRoZSBzYW1lIGFzIHRoZSBjdXJyZW50IHZhbHVlIHdpdGggYSBzcGFjZVxuXG5cbiAgICB2YXIgaGF5c3RhY2sgPSB0aGlzLl9zdG9yZS5zZWFyY2hhYmxlQ2hvaWNlcztcbiAgICB2YXIgbmVlZGxlID0gbmV3VmFsdWU7XG4gICAgdmFyIGtleXMgPSBbXS5jb25jYXQodGhpcy5jb25maWcuc2VhcmNoRmllbGRzKTtcbiAgICB2YXIgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5jb25maWcuZnVzZU9wdGlvbnMsIHtcbiAgICAgIGtleXM6IGtleXNcbiAgICB9KTtcbiAgICB2YXIgZnVzZSA9IG5ldyBmdXNlX2RlZmF1bHQuYShoYXlzdGFjaywgb3B0aW9ucyk7XG4gICAgdmFyIHJlc3VsdHMgPSBmdXNlLnNlYXJjaChuZWVkbGUpO1xuICAgIHRoaXMuX2N1cnJlbnRWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgIHRoaXMuX2hpZ2hsaWdodFBvc2l0aW9uID0gMDtcbiAgICB0aGlzLl9pc1NlYXJjaGluZyA9IHRydWU7XG5cbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChjaG9pY2VzX2ZpbHRlckNob2ljZXMocmVzdWx0cykpO1xuXG4gICAgcmV0dXJuIHJlc3VsdHMubGVuZ3RoO1xuICB9O1xuXG4gIF9wcm90by5fYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIF9kb2N1bWVudCA9IGRvY3VtZW50LFxuICAgICAgICBkb2N1bWVudEVsZW1lbnQgPSBfZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyAvLyBjYXB0dXJlIGV2ZW50cyAtIGNhbiBjYW5jZWwgZXZlbnQgcHJvY2Vzc2luZyBvciBwcm9wYWdhdGlvblxuXG4gICAgZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5fb25Ub3VjaEVuZCwgdHJ1ZSk7XG4gICAgdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24sIHRydWUpO1xuICAgIHRoaXMuY29udGFpbmVyT3V0ZXIuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLl9vbk1vdXNlRG93biwgdHJ1ZSk7IC8vIHBhc3NpdmUgZXZlbnRzIC0gZG9lc24ndCBjYWxsIGBwcmV2ZW50RGVmYXVsdGAgb3IgYHN0b3BQcm9wYWdhdGlvbmBcblxuICAgIGRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX29uQ2xpY2ssIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcbiAgICBkb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUsIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLmRyb3Bkb3duLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdGhpcy5fb25Nb3VzZU92ZXIsIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyT3V0ZXIuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX29uRm9jdXMsIHtcbiAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX29uQmx1ciwge1xuICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmlucHV0LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9vbktleVVwLCB7XG4gICAgICBwYXNzaXZlOiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy5pbnB1dC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fb25Gb2N1cywge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMuaW5wdXQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5fb25CbHVyLCB7XG4gICAgICBwYXNzaXZlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5pbnB1dC5lbGVtZW50LmZvcm0pIHtcbiAgICAgIHRoaXMuaW5wdXQuZWxlbWVudC5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgdGhpcy5fb25Gb3JtUmVzZXQsIHtcbiAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVycygpO1xuICB9O1xuXG4gIF9wcm90by5fcmVtb3ZlRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIF9kb2N1bWVudDIgPSBkb2N1bWVudCxcbiAgICAgICAgZG9jdW1lbnRFbGVtZW50ID0gX2RvY3VtZW50Mi5kb2N1bWVudEVsZW1lbnQ7XG4gICAgZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5fb25Ub3VjaEVuZCwgdHJ1ZSk7XG4gICAgdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24sIHRydWUpO1xuICAgIHRoaXMuY29udGFpbmVyT3V0ZXIuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLl9vbk1vdXNlRG93biwgdHJ1ZSk7XG4gICAgZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fb25DbGljayk7XG4gICAgZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlKTtcbiAgICB0aGlzLmRyb3Bkb3duLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdGhpcy5fb25Nb3VzZU92ZXIpO1xuXG4gICAgaWYgKHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fb25Gb2N1cyk7XG4gICAgICB0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX29uQmx1cik7XG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5fb25LZXlVcCk7XG4gICAgdGhpcy5pbnB1dC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fb25Gb2N1cyk7XG4gICAgdGhpcy5pbnB1dC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9vbkJsdXIpO1xuXG4gICAgaWYgKHRoaXMuaW5wdXQuZWxlbWVudC5mb3JtKSB7XG4gICAgICB0aGlzLmlucHV0LmVsZW1lbnQuZm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNldCcsIHRoaXMuX29uRm9ybVJlc2V0KTtcbiAgICB9XG5cbiAgICB0aGlzLmlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnRcbiAgICovXG4gIDtcblxuICBfcHJvdG8uX29uS2V5RG93biA9IGZ1bmN0aW9uIF9vbktleURvd24oZXZlbnQpIHtcbiAgICB2YXIgX2tleURvd25BY3Rpb25zO1xuXG4gICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldCxcbiAgICAgICAga2V5Q29kZSA9IGV2ZW50LmtleUNvZGUsXG4gICAgICAgIGN0cmxLZXkgPSBldmVudC5jdHJsS2V5LFxuICAgICAgICBtZXRhS2V5ID0gZXZlbnQubWV0YUtleTtcbiAgICB2YXIgYWN0aXZlSXRlbXMgPSB0aGlzLl9zdG9yZS5hY3RpdmVJdGVtcztcbiAgICB2YXIgaGFzRm9jdXNlZElucHV0ID0gdGhpcy5pbnB1dC5pc0ZvY3Vzc2VkO1xuICAgIHZhciBoYXNBY3RpdmVEcm9wZG93biA9IHRoaXMuZHJvcGRvd24uaXNBY3RpdmU7XG4gICAgdmFyIGhhc0l0ZW1zID0gdGhpcy5pdGVtTGlzdC5oYXNDaGlsZHJlbigpO1xuICAgIHZhciBrZXlTdHJpbmcgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGtleUNvZGUpO1xuICAgIHZhciBCQUNLX0tFWSA9IEtFWV9DT0RFUy5CQUNLX0tFWSxcbiAgICAgICAgREVMRVRFX0tFWSA9IEtFWV9DT0RFUy5ERUxFVEVfS0VZLFxuICAgICAgICBFTlRFUl9LRVkgPSBLRVlfQ09ERVMuRU5URVJfS0VZLFxuICAgICAgICBBX0tFWSA9IEtFWV9DT0RFUy5BX0tFWSxcbiAgICAgICAgRVNDX0tFWSA9IEtFWV9DT0RFUy5FU0NfS0VZLFxuICAgICAgICBVUF9LRVkgPSBLRVlfQ09ERVMuVVBfS0VZLFxuICAgICAgICBET1dOX0tFWSA9IEtFWV9DT0RFUy5ET1dOX0tFWSxcbiAgICAgICAgUEFHRV9VUF9LRVkgPSBLRVlfQ09ERVMuUEFHRV9VUF9LRVksXG4gICAgICAgIFBBR0VfRE9XTl9LRVkgPSBLRVlfQ09ERVMuUEFHRV9ET1dOX0tFWTtcbiAgICB2YXIgaGFzQ3RybERvd25LZXlQcmVzc2VkID0gY3RybEtleSB8fCBtZXRhS2V5OyAvLyBJZiBhIHVzZXIgaXMgdHlwaW5nIGFuZCB0aGUgZHJvcGRvd24gaXMgbm90IGFjdGl2ZVxuXG4gICAgaWYgKCF0aGlzLl9pc1RleHRFbGVtZW50ICYmIC9bYS16QS1aMC05LV8gXS8udGVzdChrZXlTdHJpbmcpKSB7XG4gICAgICB0aGlzLnNob3dEcm9wZG93bigpO1xuICAgIH0gLy8gTWFwIGtleXMgdG8ga2V5IGFjdGlvbnNcblxuXG4gICAgdmFyIGtleURvd25BY3Rpb25zID0gKF9rZXlEb3duQWN0aW9ucyA9IHt9LCBfa2V5RG93bkFjdGlvbnNbQV9LRVldID0gdGhpcy5fb25BS2V5LCBfa2V5RG93bkFjdGlvbnNbRU5URVJfS0VZXSA9IHRoaXMuX29uRW50ZXJLZXksIF9rZXlEb3duQWN0aW9uc1tFU0NfS0VZXSA9IHRoaXMuX29uRXNjYXBlS2V5LCBfa2V5RG93bkFjdGlvbnNbVVBfS0VZXSA9IHRoaXMuX29uRGlyZWN0aW9uS2V5LCBfa2V5RG93bkFjdGlvbnNbUEFHRV9VUF9LRVldID0gdGhpcy5fb25EaXJlY3Rpb25LZXksIF9rZXlEb3duQWN0aW9uc1tET1dOX0tFWV0gPSB0aGlzLl9vbkRpcmVjdGlvbktleSwgX2tleURvd25BY3Rpb25zW1BBR0VfRE9XTl9LRVldID0gdGhpcy5fb25EaXJlY3Rpb25LZXksIF9rZXlEb3duQWN0aW9uc1tERUxFVEVfS0VZXSA9IHRoaXMuX29uRGVsZXRlS2V5LCBfa2V5RG93bkFjdGlvbnNbQkFDS19LRVldID0gdGhpcy5fb25EZWxldGVLZXksIF9rZXlEb3duQWN0aW9ucyk7IC8vIElmIGtleWNvZGUgaGFzIGEgZnVuY3Rpb24sIHJ1biBpdFxuXG4gICAgaWYgKGtleURvd25BY3Rpb25zW2tleUNvZGVdKSB7XG4gICAgICBrZXlEb3duQWN0aW9uc1trZXlDb2RlXSh7XG4gICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgIGtleUNvZGU6IGtleUNvZGUsXG4gICAgICAgIG1ldGFLZXk6IG1ldGFLZXksXG4gICAgICAgIGFjdGl2ZUl0ZW1zOiBhY3RpdmVJdGVtcyxcbiAgICAgICAgaGFzRm9jdXNlZElucHV0OiBoYXNGb2N1c2VkSW5wdXQsXG4gICAgICAgIGhhc0FjdGl2ZURyb3Bkb3duOiBoYXNBY3RpdmVEcm9wZG93bixcbiAgICAgICAgaGFzSXRlbXM6IGhhc0l0ZW1zLFxuICAgICAgICBoYXNDdHJsRG93bktleVByZXNzZWQ6IGhhc0N0cmxEb3duS2V5UHJlc3NlZFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fb25LZXlVcCA9IGZ1bmN0aW9uIF9vbktleVVwKF9yZWYyKSB7XG4gICAgdmFyIHRhcmdldCA9IF9yZWYyLnRhcmdldCxcbiAgICAgICAga2V5Q29kZSA9IF9yZWYyLmtleUNvZGU7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZTtcbiAgICB2YXIgYWN0aXZlSXRlbXMgPSB0aGlzLl9zdG9yZS5hY3RpdmVJdGVtcztcblxuICAgIHZhciBjYW5BZGRJdGVtID0gdGhpcy5fY2FuQWRkSXRlbShhY3RpdmVJdGVtcywgdmFsdWUpO1xuXG4gICAgdmFyIGJhY2tLZXkgPSBLRVlfQ09ERVMuQkFDS19LRVksXG4gICAgICAgIGRlbGV0ZUtleSA9IEtFWV9DT0RFUy5ERUxFVEVfS0VZOyAvLyBXZSBhcmUgdHlwaW5nIGludG8gYSB0ZXh0IGlucHV0IGFuZCBoYXZlIGEgdmFsdWUsIHdlIHdhbnQgdG8gc2hvdyBhIGRyb3Bkb3duXG4gICAgLy8gbm90aWNlLiBPdGhlcndpc2UgaGlkZSB0aGUgZHJvcGRvd25cblxuICAgIGlmICh0aGlzLl9pc1RleHRFbGVtZW50KSB7XG4gICAgICB2YXIgY2FuU2hvd0Ryb3Bkb3duTm90aWNlID0gY2FuQWRkSXRlbS5ub3RpY2UgJiYgdmFsdWU7XG5cbiAgICAgIGlmIChjYW5TaG93RHJvcGRvd25Ob3RpY2UpIHtcbiAgICAgICAgdmFyIGRyb3Bkb3duSXRlbSA9IHRoaXMuX2dldFRlbXBsYXRlKCdub3RpY2UnLCBjYW5BZGRJdGVtLm5vdGljZSk7XG5cbiAgICAgICAgdGhpcy5kcm9wZG93bi5lbGVtZW50LmlubmVySFRNTCA9IGRyb3Bkb3duSXRlbS5vdXRlckhUTUw7XG4gICAgICAgIHRoaXMuc2hvd0Ryb3Bkb3duKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlRHJvcGRvd24odHJ1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1c2VySGFzUmVtb3ZlZFZhbHVlID0gKGtleUNvZGUgPT09IGJhY2tLZXkgfHwga2V5Q29kZSA9PT0gZGVsZXRlS2V5KSAmJiAhdGFyZ2V0LnZhbHVlO1xuICAgICAgdmFyIGNhblJlYWN0aXZhdGVDaG9pY2VzID0gIXRoaXMuX2lzVGV4dEVsZW1lbnQgJiYgdGhpcy5faXNTZWFyY2hpbmc7XG4gICAgICB2YXIgY2FuU2VhcmNoID0gdGhpcy5fY2FuU2VhcmNoICYmIGNhbkFkZEl0ZW0ucmVzcG9uc2U7XG5cbiAgICAgIGlmICh1c2VySGFzUmVtb3ZlZFZhbHVlICYmIGNhblJlYWN0aXZhdGVDaG9pY2VzKSB7XG4gICAgICAgIHRoaXMuX2lzU2VhcmNoaW5nID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goY2hvaWNlc19hY3RpdmF0ZUNob2ljZXModHJ1ZSkpO1xuICAgICAgfSBlbHNlIGlmIChjYW5TZWFyY2gpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlU2VhcmNoKHRoaXMuaW5wdXQudmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2NhblNlYXJjaCA9IHRoaXMuY29uZmlnLnNlYXJjaEVuYWJsZWQ7XG4gIH07XG5cbiAgX3Byb3RvLl9vbkFLZXkgPSBmdW5jdGlvbiBfb25BS2V5KF9yZWYzKSB7XG4gICAgdmFyIGhhc0l0ZW1zID0gX3JlZjMuaGFzSXRlbXMsXG4gICAgICAgIGhhc0N0cmxEb3duS2V5UHJlc3NlZCA9IF9yZWYzLmhhc0N0cmxEb3duS2V5UHJlc3NlZDtcblxuICAgIC8vIElmIENUUkwgKyBBIG9yIENNRCArIEEgaGF2ZSBiZWVuIHByZXNzZWQgYW5kIHRoZXJlIGFyZSBpdGVtcyB0byBzZWxlY3RcbiAgICBpZiAoaGFzQ3RybERvd25LZXlQcmVzc2VkICYmIGhhc0l0ZW1zKSB7XG4gICAgICB0aGlzLl9jYW5TZWFyY2ggPSBmYWxzZTtcbiAgICAgIHZhciBzaG91bGRIaWdodGxpZ2h0QWxsID0gdGhpcy5jb25maWcucmVtb3ZlSXRlbXMgJiYgIXRoaXMuaW5wdXQudmFsdWUgJiYgdGhpcy5pbnB1dC5lbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgICBpZiAoc2hvdWxkSGlnaHRsaWdodEFsbCkge1xuICAgICAgICB0aGlzLmhpZ2hsaWdodEFsbCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX29uRW50ZXJLZXkgPSBmdW5jdGlvbiBfb25FbnRlcktleShfcmVmNCkge1xuICAgIHZhciBldmVudCA9IF9yZWY0LmV2ZW50LFxuICAgICAgICB0YXJnZXQgPSBfcmVmNC50YXJnZXQsXG4gICAgICAgIGFjdGl2ZUl0ZW1zID0gX3JlZjQuYWN0aXZlSXRlbXMsXG4gICAgICAgIGhhc0FjdGl2ZURyb3Bkb3duID0gX3JlZjQuaGFzQWN0aXZlRHJvcGRvd247XG4gICAgdmFyIGVudGVyS2V5ID0gS0VZX0NPREVTLkVOVEVSX0tFWTtcbiAgICB2YXIgdGFyZ2V0V2FzQnV0dG9uID0gdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1idXR0b24nKTtcblxuICAgIGlmICh0aGlzLl9pc1RleHRFbGVtZW50ICYmIHRhcmdldC52YWx1ZSkge1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZTtcblxuICAgICAgdmFyIGNhbkFkZEl0ZW0gPSB0aGlzLl9jYW5BZGRJdGVtKGFjdGl2ZUl0ZW1zLCB2YWx1ZSk7XG5cbiAgICAgIGlmIChjYW5BZGRJdGVtLnJlc3BvbnNlKSB7XG4gICAgICAgIHRoaXMuaGlkZURyb3Bkb3duKHRydWUpO1xuXG4gICAgICAgIHRoaXMuX2FkZEl0ZW0oe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl90cmlnZ2VyQ2hhbmdlKHZhbHVlKTtcblxuICAgICAgICB0aGlzLmNsZWFySW5wdXQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0V2FzQnV0dG9uKSB7XG4gICAgICB0aGlzLl9oYW5kbGVCdXR0b25BY3Rpb24oYWN0aXZlSXRlbXMsIHRhcmdldCk7XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKGhhc0FjdGl2ZURyb3Bkb3duKSB7XG4gICAgICB2YXIgaGlnaGxpZ2h0ZWRDaG9pY2UgPSB0aGlzLmRyb3Bkb3duLmdldENoaWxkKFwiLlwiICsgdGhpcy5jb25maWcuY2xhc3NOYW1lcy5oaWdobGlnaHRlZFN0YXRlKTtcblxuICAgICAgaWYgKGhpZ2hsaWdodGVkQ2hvaWNlKSB7XG4gICAgICAgIC8vIGFkZCBlbnRlciBrZXlDb2RlIHZhbHVlXG4gICAgICAgIGlmIChhY3RpdmVJdGVtc1swXSkge1xuICAgICAgICAgIGFjdGl2ZUl0ZW1zWzBdLmtleUNvZGUgPSBlbnRlcktleTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faGFuZGxlQ2hvaWNlQWN0aW9uKGFjdGl2ZUl0ZW1zLCBoaWdobGlnaHRlZENob2ljZSk7XG4gICAgICB9XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuc2hvd0Ryb3Bkb3duKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX29uRXNjYXBlS2V5ID0gZnVuY3Rpb24gX29uRXNjYXBlS2V5KF9yZWY1KSB7XG4gICAgdmFyIGhhc0FjdGl2ZURyb3Bkb3duID0gX3JlZjUuaGFzQWN0aXZlRHJvcGRvd247XG5cbiAgICBpZiAoaGFzQWN0aXZlRHJvcGRvd24pIHtcbiAgICAgIHRoaXMuaGlkZURyb3Bkb3duKHRydWUpO1xuICAgICAgdGhpcy5jb250YWluZXJPdXRlci5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX29uRGlyZWN0aW9uS2V5ID0gZnVuY3Rpb24gX29uRGlyZWN0aW9uS2V5KF9yZWY2KSB7XG4gICAgdmFyIGV2ZW50ID0gX3JlZjYuZXZlbnQsXG4gICAgICAgIGhhc0FjdGl2ZURyb3Bkb3duID0gX3JlZjYuaGFzQWN0aXZlRHJvcGRvd24sXG4gICAgICAgIGtleUNvZGUgPSBfcmVmNi5rZXlDb2RlLFxuICAgICAgICBtZXRhS2V5ID0gX3JlZjYubWV0YUtleTtcbiAgICB2YXIgZG93bktleSA9IEtFWV9DT0RFUy5ET1dOX0tFWSxcbiAgICAgICAgcGFnZVVwS2V5ID0gS0VZX0NPREVTLlBBR0VfVVBfS0VZLFxuICAgICAgICBwYWdlRG93bktleSA9IEtFWV9DT0RFUy5QQUdFX0RPV05fS0VZOyAvLyBJZiB1cCBvciBkb3duIGtleSBpcyBwcmVzc2VkLCB0cmF2ZXJzZSB0aHJvdWdoIG9wdGlvbnNcblxuICAgIGlmIChoYXNBY3RpdmVEcm9wZG93biB8fCB0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuc2hvd0Ryb3Bkb3duKCk7XG4gICAgICB0aGlzLl9jYW5TZWFyY2ggPSBmYWxzZTtcbiAgICAgIHZhciBkaXJlY3Rpb25JbnQgPSBrZXlDb2RlID09PSBkb3duS2V5IHx8IGtleUNvZGUgPT09IHBhZ2VEb3duS2V5ID8gMSA6IC0xO1xuICAgICAgdmFyIHNraXBLZXkgPSBtZXRhS2V5IHx8IGtleUNvZGUgPT09IHBhZ2VEb3duS2V5IHx8IGtleUNvZGUgPT09IHBhZ2VVcEtleTtcbiAgICAgIHZhciBzZWxlY3RhYmxlQ2hvaWNlSWRlbnRpZmllciA9ICdbZGF0YS1jaG9pY2Utc2VsZWN0YWJsZV0nO1xuICAgICAgdmFyIG5leHRFbDtcblxuICAgICAgaWYgKHNraXBLZXkpIHtcbiAgICAgICAgaWYgKGRpcmVjdGlvbkludCA+IDApIHtcbiAgICAgICAgICBuZXh0RWwgPSB0aGlzLmRyb3Bkb3duLmVsZW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RhYmxlQ2hvaWNlSWRlbnRpZmllciArIFwiOmxhc3Qtb2YtdHlwZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0RWwgPSB0aGlzLmRyb3Bkb3duLmVsZW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RhYmxlQ2hvaWNlSWRlbnRpZmllcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjdXJyZW50RWwgPSB0aGlzLmRyb3Bkb3duLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIHRoaXMuY29uZmlnLmNsYXNzTmFtZXMuaGlnaGxpZ2h0ZWRTdGF0ZSk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRFbCkge1xuICAgICAgICAgIG5leHRFbCA9IGdldEFkamFjZW50RWwoY3VycmVudEVsLCBzZWxlY3RhYmxlQ2hvaWNlSWRlbnRpZmllciwgZGlyZWN0aW9uSW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0RWwgPSB0aGlzLmRyb3Bkb3duLmVsZW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RhYmxlQ2hvaWNlSWRlbnRpZmllcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG5leHRFbCkge1xuICAgICAgICAvLyBXZSBwcmV2ZW50IGRlZmF1bHQgdG8gc3RvcCB0aGUgY3Vyc29yIG1vdmluZ1xuICAgICAgICAvLyB3aGVuIHByZXNzaW5nIHRoZSBhcnJvd1xuICAgICAgICBpZiAoIWlzU2Nyb2xsZWRJbnRvVmlldyhuZXh0RWwsIHRoaXMuY2hvaWNlTGlzdC5lbGVtZW50LCBkaXJlY3Rpb25JbnQpKSB7XG4gICAgICAgICAgdGhpcy5jaG9pY2VMaXN0LnNjcm9sbFRvQ2hpbGRFbGVtZW50KG5leHRFbCwgZGlyZWN0aW9uSW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2hpZ2hsaWdodENob2ljZShuZXh0RWwpO1xuICAgICAgfSAvLyBQcmV2ZW50IGRlZmF1bHQgdG8gbWFpbnRhaW4gY3Vyc29yIHBvc2l0aW9uIHdoaWxzdFxuICAgICAgLy8gdHJhdmVyc2luZyBkcm9wZG93biBvcHRpb25zXG5cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9vbkRlbGV0ZUtleSA9IGZ1bmN0aW9uIF9vbkRlbGV0ZUtleShfcmVmNykge1xuICAgIHZhciBldmVudCA9IF9yZWY3LmV2ZW50LFxuICAgICAgICB0YXJnZXQgPSBfcmVmNy50YXJnZXQsXG4gICAgICAgIGhhc0ZvY3VzZWRJbnB1dCA9IF9yZWY3Lmhhc0ZvY3VzZWRJbnB1dCxcbiAgICAgICAgYWN0aXZlSXRlbXMgPSBfcmVmNy5hY3RpdmVJdGVtcztcblxuICAgIC8vIElmIGJhY2tzcGFjZSBvciBkZWxldGUga2V5IGlzIHByZXNzZWQgYW5kIHRoZSBpbnB1dCBoYXMgbm8gdmFsdWVcbiAgICBpZiAoaGFzRm9jdXNlZElucHV0ICYmICF0YXJnZXQudmFsdWUgJiYgIXRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgdGhpcy5faGFuZGxlQmFja3NwYWNlKGFjdGl2ZUl0ZW1zKTtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9vblRvdWNoTW92ZSA9IGZ1bmN0aW9uIF9vblRvdWNoTW92ZSgpIHtcbiAgICBpZiAodGhpcy5fd2FzVGFwKSB7XG4gICAgICB0aGlzLl93YXNUYXAgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9vblRvdWNoRW5kID0gZnVuY3Rpb24gX29uVG91Y2hFbmQoZXZlbnQpIHtcbiAgICB2YXIgX3JlZjggPSBldmVudCB8fCBldmVudC50b3VjaGVzWzBdLFxuICAgICAgICB0YXJnZXQgPSBfcmVmOC50YXJnZXQ7XG5cbiAgICB2YXIgdG91Y2hXYXNXaXRoaW5Db250YWluZXIgPSB0aGlzLl93YXNUYXAgJiYgdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LmNvbnRhaW5zKHRhcmdldCk7XG5cbiAgICBpZiAodG91Y2hXYXNXaXRoaW5Db250YWluZXIpIHtcbiAgICAgIHZhciBjb250YWluZXJXYXNFeGFjdFRhcmdldCA9IHRhcmdldCA9PT0gdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50IHx8IHRhcmdldCA9PT0gdGhpcy5jb250YWluZXJJbm5lci5lbGVtZW50O1xuXG4gICAgICBpZiAoY29udGFpbmVyV2FzRXhhY3RUYXJnZXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzVGV4dEVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLmlucHV0LmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5faXNTZWxlY3RNdWx0aXBsZUVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLnNob3dEcm9wZG93bigpO1xuICAgICAgICB9XG4gICAgICB9IC8vIFByZXZlbnRzIGZvY3VzIGV2ZW50IGZpcmluZ1xuXG5cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIHRoaXMuX3dhc1RhcCA9IHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIEhhbmRsZXMgbW91c2Vkb3duIGV2ZW50IGluIGNhcHR1cmUgbW9kZSBmb3IgY29udGFpbmV0T3V0ZXIuZWxlbWVudFxuICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLl9vbk1vdXNlRG93biA9IGZ1bmN0aW9uIF9vbk1vdXNlRG93bihldmVudCkge1xuICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cbiAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIElmIHdlIGhhdmUgb3VyIG1vdXNlIGRvd24gb24gdGhlIHNjcm9sbGJhciBhbmQgYXJlIG9uIElFMTEuLi5cblxuXG4gICAgaWYgKElTX0lFMTEgJiYgdGhpcy5jaG9pY2VMaXN0LmVsZW1lbnQuY29udGFpbnModGFyZ2V0KSkge1xuICAgICAgLy8gY2hlY2sgaWYgY2xpY2sgd2FzIG9uIGEgc2Nyb2xsYmFyIGFyZWFcbiAgICAgIHZhciBmaXJzdENob2ljZSA9XG4gICAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqL1xuICAgICAgdGhpcy5jaG9pY2VMaXN0LmVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICB2YXIgaXNPblNjcm9sbGJhciA9IHRoaXMuX2RpcmVjdGlvbiA9PT0gJ2x0cicgPyBldmVudC5vZmZzZXRYID49IGZpcnN0Q2hvaWNlLm9mZnNldFdpZHRoIDogZXZlbnQub2Zmc2V0WCA8IGZpcnN0Q2hvaWNlLm9mZnNldExlZnQ7XG4gICAgICB0aGlzLl9pc1Njcm9sbGluZ09uSWUgPSBpc09uU2Nyb2xsYmFyO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXQgPT09IHRoaXMuaW5wdXQuZWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpdGVtID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWJ1dHRvbl0sW2RhdGEtaXRlbV0sW2RhdGEtY2hvaWNlXScpO1xuXG4gICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgdmFyIGhhc1NoaWZ0S2V5ID0gZXZlbnQuc2hpZnRLZXk7XG4gICAgICB2YXIgYWN0aXZlSXRlbXMgPSB0aGlzLl9zdG9yZS5hY3RpdmVJdGVtcztcbiAgICAgIHZhciBkYXRhc2V0ID0gaXRlbS5kYXRhc2V0O1xuXG4gICAgICBpZiAoJ2J1dHRvbicgaW4gZGF0YXNldCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVCdXR0b25BY3Rpb24oYWN0aXZlSXRlbXMsIGl0ZW0pO1xuICAgICAgfSBlbHNlIGlmICgnaXRlbScgaW4gZGF0YXNldCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVJdGVtQWN0aW9uKGFjdGl2ZUl0ZW1zLCBpdGVtLCBoYXNTaGlmdEtleSk7XG4gICAgICB9IGVsc2UgaWYgKCdjaG9pY2UnIGluIGRhdGFzZXQpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlQ2hvaWNlQWN0aW9uKGFjdGl2ZUl0ZW1zLCBpdGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG4gIC8qKlxuICAgKiBIYW5kbGVzIG1vdXNlb3ZlciBldmVudCBvdmVyIHRoaXMuZHJvcGRvd25cbiAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5fb25Nb3VzZU92ZXIgPSBmdW5jdGlvbiBfb25Nb3VzZU92ZXIoX3JlZjkpIHtcbiAgICB2YXIgdGFyZ2V0ID0gX3JlZjkudGFyZ2V0O1xuXG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmICdjaG9pY2UnIGluIHRhcmdldC5kYXRhc2V0KSB7XG4gICAgICB0aGlzLl9oaWdobGlnaHRDaG9pY2UodGFyZ2V0KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9vbkNsaWNrID0gZnVuY3Rpb24gX29uQ2xpY2soX3JlZjEwKSB7XG4gICAgdmFyIHRhcmdldCA9IF9yZWYxMC50YXJnZXQ7XG4gICAgdmFyIGNsaWNrV2FzV2l0aGluQ29udGFpbmVyID0gdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LmNvbnRhaW5zKHRhcmdldCk7XG5cbiAgICBpZiAoY2xpY2tXYXNXaXRoaW5Db250YWluZXIpIHtcbiAgICAgIGlmICghdGhpcy5kcm9wZG93bi5pc0FjdGl2ZSAmJiAhdGhpcy5jb250YWluZXJPdXRlci5pc0Rpc2FibGVkKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1RleHRFbGVtZW50KSB7XG4gICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IHRoaXMuaW5wdXQuZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNob3dEcm9wZG93bigpO1xuICAgICAgICAgIHRoaXMuY29udGFpbmVyT3V0ZXIuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQgJiYgdGFyZ2V0ICE9PSB0aGlzLmlucHV0LmVsZW1lbnQgJiYgIXRoaXMuZHJvcGRvd24uZWxlbWVudC5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICAgIHRoaXMuaGlkZURyb3Bkb3duKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBoYXNIaWdobGlnaHRlZEl0ZW1zID0gdGhpcy5fc3RvcmUuaGlnaGxpZ2h0ZWRBY3RpdmVJdGVtcy5sZW5ndGggPiAwO1xuXG4gICAgICBpZiAoaGFzSGlnaGxpZ2h0ZWRJdGVtcykge1xuICAgICAgICB0aGlzLnVuaGlnaGxpZ2h0QWxsKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29udGFpbmVyT3V0ZXIucmVtb3ZlRm9jdXNTdGF0ZSgpO1xuICAgICAgdGhpcy5oaWRlRHJvcGRvd24odHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fb25Gb2N1cyA9IGZ1bmN0aW9uIF9vbkZvY3VzKF9yZWYxMSkge1xuICAgIHZhciBfdGhpczE3ID0gdGhpcyxcbiAgICAgICAgX2ZvY3VzQWN0aW9ucztcblxuICAgIHZhciB0YXJnZXQgPSBfcmVmMTEudGFyZ2V0O1xuICAgIHZhciBmb2N1c1dhc1dpdGhpbkNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyT3V0ZXIuZWxlbWVudC5jb250YWlucyh0YXJnZXQpO1xuXG4gICAgaWYgKCFmb2N1c1dhc1dpdGhpbkNvbnRhaW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBmb2N1c0FjdGlvbnMgPSAoX2ZvY3VzQWN0aW9ucyA9IHt9LCBfZm9jdXNBY3Rpb25zW1RFWFRfVFlQRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGFyZ2V0ID09PSBfdGhpczE3LmlucHV0LmVsZW1lbnQpIHtcbiAgICAgICAgX3RoaXMxNy5jb250YWluZXJPdXRlci5hZGRGb2N1c1N0YXRlKCk7XG4gICAgICB9XG4gICAgfSwgX2ZvY3VzQWN0aW9uc1tTRUxFQ1RfT05FX1RZUEVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMxNy5jb250YWluZXJPdXRlci5hZGRGb2N1c1N0YXRlKCk7XG5cbiAgICAgIGlmICh0YXJnZXQgPT09IF90aGlzMTcuaW5wdXQuZWxlbWVudCkge1xuICAgICAgICBfdGhpczE3LnNob3dEcm9wZG93bih0cnVlKTtcbiAgICAgIH1cbiAgICB9LCBfZm9jdXNBY3Rpb25zW1NFTEVDVF9NVUxUSVBMRV9UWVBFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0YXJnZXQgPT09IF90aGlzMTcuaW5wdXQuZWxlbWVudCkge1xuICAgICAgICBfdGhpczE3LnNob3dEcm9wZG93bih0cnVlKTsgLy8gSWYgZWxlbWVudCBpcyBhIHNlbGVjdCBib3gsIHRoZSBmb2N1c2VkIGVsZW1lbnQgaXMgdGhlIGNvbnRhaW5lciBhbmQgdGhlIGRyb3Bkb3duXG4gICAgICAgIC8vIGlzbid0IGFscmVhZHkgb3BlbiwgZm9jdXMgYW5kIHNob3cgZHJvcGRvd25cblxuXG4gICAgICAgIF90aGlzMTcuY29udGFpbmVyT3V0ZXIuYWRkRm9jdXNTdGF0ZSgpO1xuICAgICAgfVxuICAgIH0sIF9mb2N1c0FjdGlvbnMpO1xuICAgIGZvY3VzQWN0aW9uc1t0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC50eXBlXSgpO1xuICB9O1xuXG4gIF9wcm90by5fb25CbHVyID0gZnVuY3Rpb24gX29uQmx1cihfcmVmMTIpIHtcbiAgICB2YXIgX3RoaXMxOCA9IHRoaXM7XG5cbiAgICB2YXIgdGFyZ2V0ID0gX3JlZjEyLnRhcmdldDtcbiAgICB2YXIgYmx1cldhc1dpdGhpbkNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyT3V0ZXIuZWxlbWVudC5jb250YWlucyh0YXJnZXQpO1xuXG4gICAgaWYgKGJsdXJXYXNXaXRoaW5Db250YWluZXIgJiYgIXRoaXMuX2lzU2Nyb2xsaW5nT25JZSkge1xuICAgICAgdmFyIF9ibHVyQWN0aW9ucztcblxuICAgICAgdmFyIGFjdGl2ZUl0ZW1zID0gdGhpcy5fc3RvcmUuYWN0aXZlSXRlbXM7XG4gICAgICB2YXIgaGFzSGlnaGxpZ2h0ZWRJdGVtcyA9IGFjdGl2ZUl0ZW1zLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uaGlnaGxpZ2h0ZWQ7XG4gICAgICB9KTtcbiAgICAgIHZhciBibHVyQWN0aW9ucyA9IChfYmx1ckFjdGlvbnMgPSB7fSwgX2JsdXJBY3Rpb25zW1RFWFRfVFlQRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IF90aGlzMTguaW5wdXQuZWxlbWVudCkge1xuICAgICAgICAgIF90aGlzMTguY29udGFpbmVyT3V0ZXIucmVtb3ZlRm9jdXNTdGF0ZSgpO1xuXG4gICAgICAgICAgaWYgKGhhc0hpZ2hsaWdodGVkSXRlbXMpIHtcbiAgICAgICAgICAgIF90aGlzMTgudW5oaWdobGlnaHRBbGwoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpczE4LmhpZGVEcm9wZG93bih0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSwgX2JsdXJBY3Rpb25zW1NFTEVDVF9PTkVfVFlQRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMTguY29udGFpbmVyT3V0ZXIucmVtb3ZlRm9jdXNTdGF0ZSgpO1xuXG4gICAgICAgIGlmICh0YXJnZXQgPT09IF90aGlzMTguaW5wdXQuZWxlbWVudCB8fCB0YXJnZXQgPT09IF90aGlzMTguY29udGFpbmVyT3V0ZXIuZWxlbWVudCAmJiAhX3RoaXMxOC5fY2FuU2VhcmNoKSB7XG4gICAgICAgICAgX3RoaXMxOC5oaWRlRHJvcGRvd24odHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sIF9ibHVyQWN0aW9uc1tTRUxFQ1RfTVVMVElQTEVfVFlQRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IF90aGlzMTguaW5wdXQuZWxlbWVudCkge1xuICAgICAgICAgIF90aGlzMTguY29udGFpbmVyT3V0ZXIucmVtb3ZlRm9jdXNTdGF0ZSgpO1xuXG4gICAgICAgICAgX3RoaXMxOC5oaWRlRHJvcGRvd24odHJ1ZSk7XG5cbiAgICAgICAgICBpZiAoaGFzSGlnaGxpZ2h0ZWRJdGVtcykge1xuICAgICAgICAgICAgX3RoaXMxOC51bmhpZ2hsaWdodEFsbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgX2JsdXJBY3Rpb25zKTtcbiAgICAgIGJsdXJBY3Rpb25zW3RoaXMucGFzc2VkRWxlbWVudC5lbGVtZW50LnR5cGVdKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE9uIElFMTEsIGNsaWNraW5nIHRoZSBzY29sbGJhciBibHVycyBvdXIgaW5wdXQgYW5kIHRodXNcbiAgICAgIC8vIGNsb3NlcyB0aGUgZHJvcGRvd24uIFRvIHN0b3AgdGhpcywgd2UgcmVmb2N1cyBvdXIgaW5wdXRcbiAgICAgIC8vIGlmIHdlIGtub3cgd2UgYXJlIG9uIElFICphbmQqIGFyZSBzY3JvbGxpbmcuXG4gICAgICB0aGlzLl9pc1Njcm9sbGluZ09uSWUgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5wdXQuZWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX29uRm9ybVJlc2V0ID0gZnVuY3Rpb24gX29uRm9ybVJlc2V0KCkge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHJlc2V0VG8odGhpcy5faW5pdGlhbFN0YXRlKSk7XG4gIH07XG5cbiAgX3Byb3RvLl9oaWdobGlnaHRDaG9pY2UgPSBmdW5jdGlvbiBfaGlnaGxpZ2h0Q2hvaWNlKGVsKSB7XG4gICAgdmFyIF90aGlzMTkgPSB0aGlzO1xuXG4gICAgaWYgKGVsID09PSB2b2lkIDApIHtcbiAgICAgIGVsID0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgY2hvaWNlcyA9IEFycmF5LmZyb20odGhpcy5kcm9wZG93bi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNob2ljZS1zZWxlY3RhYmxlXScpKTtcblxuICAgIGlmICghY2hvaWNlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcGFzc2VkRWwgPSBlbDtcbiAgICB2YXIgaGlnaGxpZ2h0ZWRDaG9pY2VzID0gQXJyYXkuZnJvbSh0aGlzLmRyb3Bkb3duLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5cIiArIHRoaXMuY29uZmlnLmNsYXNzTmFtZXMuaGlnaGxpZ2h0ZWRTdGF0ZSkpOyAvLyBSZW1vdmUgYW55IGhpZ2hsaWdodGVkIGNob2ljZXNcblxuICAgIGhpZ2hsaWdodGVkQ2hvaWNlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaG9pY2UpIHtcbiAgICAgIGNob2ljZS5jbGFzc0xpc3QucmVtb3ZlKF90aGlzMTkuY29uZmlnLmNsYXNzTmFtZXMuaGlnaGxpZ2h0ZWRTdGF0ZSk7XG4gICAgICBjaG9pY2Uuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XG4gICAgfSk7XG5cbiAgICBpZiAocGFzc2VkRWwpIHtcbiAgICAgIHRoaXMuX2hpZ2hsaWdodFBvc2l0aW9uID0gY2hvaWNlcy5pbmRleE9mKHBhc3NlZEVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSGlnaGxpZ2h0IGNob2ljZSBiYXNlZCBvbiBsYXN0IGtub3duIGhpZ2hsaWdodCBsb2NhdGlvblxuICAgICAgaWYgKGNob2ljZXMubGVuZ3RoID4gdGhpcy5faGlnaGxpZ2h0UG9zaXRpb24pIHtcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhbiBvcHRpb24gdG8gaGlnaGxpZ2h0XG4gICAgICAgIHBhc3NlZEVsID0gY2hvaWNlc1t0aGlzLl9oaWdobGlnaHRQb3NpdGlvbl07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBPdGhlcndpc2UgaGlnaGxpZ2h0IHRoZSBvcHRpb24gYmVmb3JlXG4gICAgICAgIHBhc3NlZEVsID0gY2hvaWNlc1tjaG9pY2VzLmxlbmd0aCAtIDFdO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXBhc3NlZEVsKSB7XG4gICAgICAgIHBhc3NlZEVsID0gY2hvaWNlc1swXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXNzZWRFbC5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLmNsYXNzTmFtZXMuaGlnaGxpZ2h0ZWRTdGF0ZSk7XG4gICAgcGFzc2VkRWwuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcbiAgICB0aGlzLnBhc3NlZEVsZW1lbnQudHJpZ2dlckV2ZW50KEVWRU5UUy5oaWdobGlnaHRDaG9pY2UsIHtcbiAgICAgIGVsOiBwYXNzZWRFbFxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuZHJvcGRvd24uaXNBY3RpdmUpIHtcbiAgICAgIC8vIElFMTEgaWdub3JlcyBhcmlhLWxhYmVsIGFuZCBibG9ja3MgdmlydHVhbCBrZXlib2FyZFxuICAgICAgLy8gaWYgYXJpYS1hY3RpdmVkZXNjZW5kYW50IGlzIHNldCB3aXRob3V0IGEgZHJvcGRvd25cbiAgICAgIHRoaXMuaW5wdXQuc2V0QWN0aXZlRGVzY2VuZGFudChwYXNzZWRFbC5pZCk7XG4gICAgICB0aGlzLmNvbnRhaW5lck91dGVyLnNldEFjdGl2ZURlc2NlbmRhbnQocGFzc2VkRWwuaWQpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX2FkZEl0ZW0gPSBmdW5jdGlvbiBfYWRkSXRlbShfcmVmMTMpIHtcbiAgICB2YXIgdmFsdWUgPSBfcmVmMTMudmFsdWUsXG4gICAgICAgIF9yZWYxMyRsYWJlbCA9IF9yZWYxMy5sYWJlbCxcbiAgICAgICAgbGFiZWwgPSBfcmVmMTMkbGFiZWwgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmMTMkbGFiZWwsXG4gICAgICAgIF9yZWYxMyRjaG9pY2VJZCA9IF9yZWYxMy5jaG9pY2VJZCxcbiAgICAgICAgY2hvaWNlSWQgPSBfcmVmMTMkY2hvaWNlSWQgPT09IHZvaWQgMCA/IC0xIDogX3JlZjEzJGNob2ljZUlkLFxuICAgICAgICBfcmVmMTMkZ3JvdXBJZCA9IF9yZWYxMy5ncm91cElkLFxuICAgICAgICBncm91cElkID0gX3JlZjEzJGdyb3VwSWQgPT09IHZvaWQgMCA/IC0xIDogX3JlZjEzJGdyb3VwSWQsXG4gICAgICAgIF9yZWYxMyRjdXN0b21Qcm9wZXJ0aSA9IF9yZWYxMy5jdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgICBjdXN0b21Qcm9wZXJ0aWVzID0gX3JlZjEzJGN1c3RvbVByb3BlcnRpID09PSB2b2lkIDAgPyBudWxsIDogX3JlZjEzJGN1c3RvbVByb3BlcnRpLFxuICAgICAgICBfcmVmMTMkcGxhY2Vob2xkZXIgPSBfcmVmMTMucGxhY2Vob2xkZXIsXG4gICAgICAgIHBsYWNlaG9sZGVyID0gX3JlZjEzJHBsYWNlaG9sZGVyID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYxMyRwbGFjZWhvbGRlcixcbiAgICAgICAgX3JlZjEzJGtleUNvZGUgPSBfcmVmMTMua2V5Q29kZSxcbiAgICAgICAga2V5Q29kZSA9IF9yZWYxMyRrZXlDb2RlID09PSB2b2lkIDAgPyBudWxsIDogX3JlZjEzJGtleUNvZGU7XG4gICAgdmFyIHBhc3NlZFZhbHVlID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlLnRyaW0oKSA6IHZhbHVlO1xuICAgIHZhciBwYXNzZWRLZXlDb2RlID0ga2V5Q29kZTtcbiAgICB2YXIgcGFzc2VkQ3VzdG9tUHJvcGVydGllcyA9IGN1c3RvbVByb3BlcnRpZXM7XG4gICAgdmFyIGl0ZW1zID0gdGhpcy5fc3RvcmUuaXRlbXM7XG4gICAgdmFyIHBhc3NlZExhYmVsID0gbGFiZWwgfHwgcGFzc2VkVmFsdWU7XG4gICAgdmFyIHBhc3NlZE9wdGlvbklkID0gY2hvaWNlSWQgfHwgLTE7XG4gICAgdmFyIGdyb3VwID0gZ3JvdXBJZCA+PSAwID8gdGhpcy5fc3RvcmUuZ2V0R3JvdXBCeUlkKGdyb3VwSWQpIDogbnVsbDtcbiAgICB2YXIgaWQgPSBpdGVtcyA/IGl0ZW1zLmxlbmd0aCArIDEgOiAxOyAvLyBJZiBhIHByZXBlbmRlZCB2YWx1ZSBoYXMgYmVlbiBwYXNzZWQsIHByZXBlbmQgaXRcblxuICAgIGlmICh0aGlzLmNvbmZpZy5wcmVwZW5kVmFsdWUpIHtcbiAgICAgIHBhc3NlZFZhbHVlID0gdGhpcy5jb25maWcucHJlcGVuZFZhbHVlICsgcGFzc2VkVmFsdWUudG9TdHJpbmcoKTtcbiAgICB9IC8vIElmIGFuIGFwcGVuZGVkIHZhbHVlIGhhcyBiZWVuIHBhc3NlZCwgYXBwZW5kIGl0XG5cblxuICAgIGlmICh0aGlzLmNvbmZpZy5hcHBlbmRWYWx1ZSkge1xuICAgICAgcGFzc2VkVmFsdWUgKz0gdGhpcy5jb25maWcuYXBwZW5kVmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChpdGVtc19hZGRJdGVtKHtcbiAgICAgIHZhbHVlOiBwYXNzZWRWYWx1ZSxcbiAgICAgIGxhYmVsOiBwYXNzZWRMYWJlbCxcbiAgICAgIGlkOiBpZCxcbiAgICAgIGNob2ljZUlkOiBwYXNzZWRPcHRpb25JZCxcbiAgICAgIGdyb3VwSWQ6IGdyb3VwSWQsXG4gICAgICBjdXN0b21Qcm9wZXJ0aWVzOiBjdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgICAga2V5Q29kZTogcGFzc2VkS2V5Q29kZVxuICAgIH0pKTtcblxuICAgIGlmICh0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMucmVtb3ZlQWN0aXZlSXRlbXMoaWQpO1xuICAgIH0gLy8gVHJpZ2dlciBjaGFuZ2UgZXZlbnRcblxuXG4gICAgdGhpcy5wYXNzZWRFbGVtZW50LnRyaWdnZXJFdmVudChFVkVOVFMuYWRkSXRlbSwge1xuICAgICAgaWQ6IGlkLFxuICAgICAgdmFsdWU6IHBhc3NlZFZhbHVlLFxuICAgICAgbGFiZWw6IHBhc3NlZExhYmVsLFxuICAgICAgY3VzdG9tUHJvcGVydGllczogcGFzc2VkQ3VzdG9tUHJvcGVydGllcyxcbiAgICAgIGdyb3VwVmFsdWU6IGdyb3VwICYmIGdyb3VwLnZhbHVlID8gZ3JvdXAudmFsdWUgOiB1bmRlZmluZWQsXG4gICAgICBrZXlDb2RlOiBwYXNzZWRLZXlDb2RlXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLl9yZW1vdmVJdGVtID0gZnVuY3Rpb24gX3JlbW92ZUl0ZW0oaXRlbSkge1xuICAgIGlmICghaXRlbSB8fCAhaXNUeXBlKCdPYmplY3QnLCBpdGVtKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIGlkID0gaXRlbS5pZCxcbiAgICAgICAgdmFsdWUgPSBpdGVtLnZhbHVlLFxuICAgICAgICBsYWJlbCA9IGl0ZW0ubGFiZWwsXG4gICAgICAgIGNob2ljZUlkID0gaXRlbS5jaG9pY2VJZCxcbiAgICAgICAgZ3JvdXBJZCA9IGl0ZW0uZ3JvdXBJZDtcbiAgICB2YXIgZ3JvdXAgPSBncm91cElkID49IDAgPyB0aGlzLl9zdG9yZS5nZXRHcm91cEJ5SWQoZ3JvdXBJZCkgOiBudWxsO1xuXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goaXRlbXNfcmVtb3ZlSXRlbShpZCwgY2hvaWNlSWQpKTtcblxuICAgIGlmIChncm91cCAmJiBncm91cC52YWx1ZSkge1xuICAgICAgdGhpcy5wYXNzZWRFbGVtZW50LnRyaWdnZXJFdmVudChFVkVOVFMucmVtb3ZlSXRlbSwge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICBncm91cFZhbHVlOiBncm91cC52YWx1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGFzc2VkRWxlbWVudC50cmlnZ2VyRXZlbnQoRVZFTlRTLnJlbW92ZUl0ZW0sIHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGxhYmVsOiBsYWJlbFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLl9hZGRDaG9pY2UgPSBmdW5jdGlvbiBfYWRkQ2hvaWNlKF9yZWYxNCkge1xuICAgIHZhciB2YWx1ZSA9IF9yZWYxNC52YWx1ZSxcbiAgICAgICAgX3JlZjE0JGxhYmVsID0gX3JlZjE0LmxhYmVsLFxuICAgICAgICBsYWJlbCA9IF9yZWYxNCRsYWJlbCA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYxNCRsYWJlbCxcbiAgICAgICAgX3JlZjE0JGlzU2VsZWN0ZWQgPSBfcmVmMTQuaXNTZWxlY3RlZCxcbiAgICAgICAgaXNTZWxlY3RlZCA9IF9yZWYxNCRpc1NlbGVjdGVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYxNCRpc1NlbGVjdGVkLFxuICAgICAgICBfcmVmMTQkaXNEaXNhYmxlZCA9IF9yZWYxNC5pc0Rpc2FibGVkLFxuICAgICAgICBpc0Rpc2FibGVkID0gX3JlZjE0JGlzRGlzYWJsZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjE0JGlzRGlzYWJsZWQsXG4gICAgICAgIF9yZWYxNCRncm91cElkID0gX3JlZjE0Lmdyb3VwSWQsXG4gICAgICAgIGdyb3VwSWQgPSBfcmVmMTQkZ3JvdXBJZCA9PT0gdm9pZCAwID8gLTEgOiBfcmVmMTQkZ3JvdXBJZCxcbiAgICAgICAgX3JlZjE0JGN1c3RvbVByb3BlcnRpID0gX3JlZjE0LmN1c3RvbVByb3BlcnRpZXMsXG4gICAgICAgIGN1c3RvbVByb3BlcnRpZXMgPSBfcmVmMTQkY3VzdG9tUHJvcGVydGkgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmMTQkY3VzdG9tUHJvcGVydGksXG4gICAgICAgIF9yZWYxNCRwbGFjZWhvbGRlciA9IF9yZWYxNC5wbGFjZWhvbGRlcixcbiAgICAgICAgcGxhY2Vob2xkZXIgPSBfcmVmMTQkcGxhY2Vob2xkZXIgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjE0JHBsYWNlaG9sZGVyLFxuICAgICAgICBfcmVmMTQka2V5Q29kZSA9IF9yZWYxNC5rZXlDb2RlLFxuICAgICAgICBrZXlDb2RlID0gX3JlZjE0JGtleUNvZGUgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmMTQka2V5Q29kZTtcblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBHZW5lcmF0ZSB1bmlxdWUgaWRcblxuXG4gICAgdmFyIGNob2ljZXMgPSB0aGlzLl9zdG9yZS5jaG9pY2VzO1xuICAgIHZhciBjaG9pY2VMYWJlbCA9IGxhYmVsIHx8IHZhbHVlO1xuICAgIHZhciBjaG9pY2VJZCA9IGNob2ljZXMgPyBjaG9pY2VzLmxlbmd0aCArIDEgOiAxO1xuICAgIHZhciBjaG9pY2VFbGVtZW50SWQgPSB0aGlzLl9iYXNlSWQgKyBcIi1cIiArIHRoaXMuX2lkTmFtZXMuaXRlbUNob2ljZSArIFwiLVwiICsgY2hvaWNlSWQ7XG5cbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChjaG9pY2VzX2FkZENob2ljZSh7XG4gICAgICBpZDogY2hvaWNlSWQsXG4gICAgICBncm91cElkOiBncm91cElkLFxuICAgICAgZWxlbWVudElkOiBjaG9pY2VFbGVtZW50SWQsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBsYWJlbDogY2hvaWNlTGFiZWwsXG4gICAgICBkaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgIGN1c3RvbVByb3BlcnRpZXM6IGN1c3RvbVByb3BlcnRpZXMsXG4gICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICBrZXlDb2RlOiBrZXlDb2RlXG4gICAgfSkpO1xuXG4gICAgaWYgKGlzU2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuX2FkZEl0ZW0oe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGxhYmVsOiBjaG9pY2VMYWJlbCxcbiAgICAgICAgY2hvaWNlSWQ6IGNob2ljZUlkLFxuICAgICAgICBjdXN0b21Qcm9wZXJ0aWVzOiBjdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICAgIGtleUNvZGU6IGtleUNvZGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX2FkZEdyb3VwID0gZnVuY3Rpb24gX2FkZEdyb3VwKF9yZWYxNSkge1xuICAgIHZhciBfdGhpczIwID0gdGhpcztcblxuICAgIHZhciBncm91cCA9IF9yZWYxNS5ncm91cCxcbiAgICAgICAgaWQgPSBfcmVmMTUuaWQsXG4gICAgICAgIF9yZWYxNSR2YWx1ZUtleSA9IF9yZWYxNS52YWx1ZUtleSxcbiAgICAgICAgdmFsdWVLZXkgPSBfcmVmMTUkdmFsdWVLZXkgPT09IHZvaWQgMCA/ICd2YWx1ZScgOiBfcmVmMTUkdmFsdWVLZXksXG4gICAgICAgIF9yZWYxNSRsYWJlbEtleSA9IF9yZWYxNS5sYWJlbEtleSxcbiAgICAgICAgbGFiZWxLZXkgPSBfcmVmMTUkbGFiZWxLZXkgPT09IHZvaWQgMCA/ICdsYWJlbCcgOiBfcmVmMTUkbGFiZWxLZXk7XG4gICAgdmFyIGdyb3VwQ2hvaWNlcyA9IGlzVHlwZSgnT2JqZWN0JywgZ3JvdXApID8gZ3JvdXAuY2hvaWNlcyA6IEFycmF5LmZyb20oZ3JvdXAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ09QVElPTicpKTtcbiAgICB2YXIgZ3JvdXBJZCA9IGlkIHx8IE1hdGguZmxvb3IobmV3IERhdGUoKS52YWx1ZU9mKCkgKiBNYXRoLnJhbmRvbSgpKTtcbiAgICB2YXIgaXNEaXNhYmxlZCA9IGdyb3VwLmRpc2FibGVkID8gZ3JvdXAuZGlzYWJsZWQgOiBmYWxzZTtcblxuICAgIGlmIChncm91cENob2ljZXMpIHtcbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKGdyb3Vwc19hZGRHcm91cCh7XG4gICAgICAgIHZhbHVlOiBncm91cC5sYWJlbCxcbiAgICAgICAgaWQ6IGdyb3VwSWQsXG4gICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgZGlzYWJsZWQ6IGlzRGlzYWJsZWRcbiAgICAgIH0pKTtcblxuICAgICAgdmFyIGFkZEdyb3VwQ2hvaWNlcyA9IGZ1bmN0aW9uIGFkZEdyb3VwQ2hvaWNlcyhjaG9pY2UpIHtcbiAgICAgICAgdmFyIGlzT3B0RGlzYWJsZWQgPSBjaG9pY2UuZGlzYWJsZWQgfHwgY2hvaWNlLnBhcmVudE5vZGUgJiYgY2hvaWNlLnBhcmVudE5vZGUuZGlzYWJsZWQ7XG5cbiAgICAgICAgX3RoaXMyMC5fYWRkQ2hvaWNlKHtcbiAgICAgICAgICB2YWx1ZTogY2hvaWNlW3ZhbHVlS2V5XSxcbiAgICAgICAgICBsYWJlbDogaXNUeXBlKCdPYmplY3QnLCBjaG9pY2UpID8gY2hvaWNlW2xhYmVsS2V5XSA6IGNob2ljZS5pbm5lckhUTUwsXG4gICAgICAgICAgaXNTZWxlY3RlZDogY2hvaWNlLnNlbGVjdGVkLFxuICAgICAgICAgIGlzRGlzYWJsZWQ6IGlzT3B0RGlzYWJsZWQsXG4gICAgICAgICAgZ3JvdXBJZDogZ3JvdXBJZCxcbiAgICAgICAgICBjdXN0b21Qcm9wZXJ0aWVzOiBjaG9pY2UuY3VzdG9tUHJvcGVydGllcyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogY2hvaWNlLnBsYWNlaG9sZGVyXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgZ3JvdXBDaG9pY2VzLmZvckVhY2goYWRkR3JvdXBDaG9pY2VzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goZ3JvdXBzX2FkZEdyb3VwKHtcbiAgICAgICAgdmFsdWU6IGdyb3VwLmxhYmVsLFxuICAgICAgICBpZDogZ3JvdXAuaWQsXG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIGRpc2FibGVkOiBncm91cC5kaXNhYmxlZFxuICAgICAgfSkpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX2dldFRlbXBsYXRlID0gZnVuY3Rpb24gX2dldFRlbXBsYXRlKHRlbXBsYXRlKSB7XG4gICAgdmFyIF90aGlzJF90ZW1wbGF0ZXMkdGVtcDtcblxuICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBjbGFzc05hbWVzID0gdGhpcy5jb25maWcuY2xhc3NOYW1lcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiAoX3RoaXMkX3RlbXBsYXRlcyR0ZW1wID0gdGhpcy5fdGVtcGxhdGVzW3RlbXBsYXRlXSkuY2FsbC5hcHBseShfdGhpcyRfdGVtcGxhdGVzJHRlbXAsIFt0aGlzLCBjbGFzc05hbWVzXS5jb25jYXQoYXJncykpO1xuICB9O1xuXG4gIF9wcm90by5fY3JlYXRlVGVtcGxhdGVzID0gZnVuY3Rpb24gX2NyZWF0ZVRlbXBsYXRlcygpIHtcbiAgICB2YXIgY2FsbGJhY2tPbkNyZWF0ZVRlbXBsYXRlcyA9IHRoaXMuY29uZmlnLmNhbGxiYWNrT25DcmVhdGVUZW1wbGF0ZXM7XG4gICAgdmFyIHVzZXJUZW1wbGF0ZXMgPSB7fTtcblxuICAgIGlmIChjYWxsYmFja09uQ3JlYXRlVGVtcGxhdGVzICYmIHR5cGVvZiBjYWxsYmFja09uQ3JlYXRlVGVtcGxhdGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB1c2VyVGVtcGxhdGVzID0gY2FsbGJhY2tPbkNyZWF0ZVRlbXBsYXRlcy5jYWxsKHRoaXMsIHN0clRvRWwpO1xuICAgIH1cblxuICAgIHRoaXMuX3RlbXBsYXRlcyA9IGNqc19kZWZhdWx0KCkoVEVNUExBVEVTLCB1c2VyVGVtcGxhdGVzKTtcbiAgfTtcblxuICBfcHJvdG8uX2NyZWF0ZUVsZW1lbnRzID0gZnVuY3Rpb24gX2NyZWF0ZUVsZW1lbnRzKCkge1xuICAgIHRoaXMuY29udGFpbmVyT3V0ZXIgPSBuZXcgY29udGFpbmVyX0NvbnRhaW5lcih7XG4gICAgICBlbGVtZW50OiB0aGlzLl9nZXRUZW1wbGF0ZSgnY29udGFpbmVyT3V0ZXInLCB0aGlzLl9kaXJlY3Rpb24sIHRoaXMuX2lzU2VsZWN0RWxlbWVudCwgdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50LCB0aGlzLmNvbmZpZy5zZWFyY2hFbmFibGVkLCB0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC50eXBlKSxcbiAgICAgIGNsYXNzTmFtZXM6IHRoaXMuY29uZmlnLmNsYXNzTmFtZXMsXG4gICAgICB0eXBlOiB0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC50eXBlLFxuICAgICAgcG9zaXRpb246IHRoaXMuY29uZmlnLnBvc2l0aW9uXG4gICAgfSk7XG4gICAgdGhpcy5jb250YWluZXJJbm5lciA9IG5ldyBjb250YWluZXJfQ29udGFpbmVyKHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuX2dldFRlbXBsYXRlKCdjb250YWluZXJJbm5lcicpLFxuICAgICAgY2xhc3NOYW1lczogdGhpcy5jb25maWcuY2xhc3NOYW1lcyxcbiAgICAgIHR5cGU6IHRoaXMucGFzc2VkRWxlbWVudC5lbGVtZW50LnR5cGUsXG4gICAgICBwb3NpdGlvbjogdGhpcy5jb25maWcucG9zaXRpb25cbiAgICB9KTtcbiAgICB0aGlzLmlucHV0ID0gbmV3IGlucHV0X0lucHV0KHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuX2dldFRlbXBsYXRlKCdpbnB1dCcsIHRoaXMuX3BsYWNlaG9sZGVyVmFsdWUpLFxuICAgICAgY2xhc3NOYW1lczogdGhpcy5jb25maWcuY2xhc3NOYW1lcyxcbiAgICAgIHR5cGU6IHRoaXMucGFzc2VkRWxlbWVudC5lbGVtZW50LnR5cGUsXG4gICAgICBwcmV2ZW50UGFzdGU6ICF0aGlzLmNvbmZpZy5wYXN0ZVxuICAgIH0pO1xuICAgIHRoaXMuY2hvaWNlTGlzdCA9IG5ldyBsaXN0X0xpc3Qoe1xuICAgICAgZWxlbWVudDogdGhpcy5fZ2V0VGVtcGxhdGUoJ2Nob2ljZUxpc3QnLCB0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpXG4gICAgfSk7XG4gICAgdGhpcy5pdGVtTGlzdCA9IG5ldyBsaXN0X0xpc3Qoe1xuICAgICAgZWxlbWVudDogdGhpcy5fZ2V0VGVtcGxhdGUoJ2l0ZW1MaXN0JywgdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50KVxuICAgIH0pO1xuICAgIHRoaXMuZHJvcGRvd24gPSBuZXcgRHJvcGRvd24oe1xuICAgICAgZWxlbWVudDogdGhpcy5fZ2V0VGVtcGxhdGUoJ2Ryb3Bkb3duJyksXG4gICAgICBjbGFzc05hbWVzOiB0aGlzLmNvbmZpZy5jbGFzc05hbWVzLFxuICAgICAgdHlwZTogdGhpcy5wYXNzZWRFbGVtZW50LmVsZW1lbnQudHlwZVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5fY3JlYXRlU3RydWN0dXJlID0gZnVuY3Rpb24gX2NyZWF0ZVN0cnVjdHVyZSgpIHtcbiAgICAvLyBIaWRlIG9yaWdpbmFsIGVsZW1lbnRcbiAgICB0aGlzLnBhc3NlZEVsZW1lbnQuY29uY2VhbCgpOyAvLyBXcmFwIGlucHV0IGluIGNvbnRhaW5lciBwcmVzZXJ2aW5nIERPTSBvcmRlcmluZ1xuXG4gICAgdGhpcy5jb250YWluZXJJbm5lci53cmFwKHRoaXMucGFzc2VkRWxlbWVudC5lbGVtZW50KTsgLy8gV3JhcHBlciBpbm5lciBjb250YWluZXIgd2l0aCBvdXRlciBjb250YWluZXJcblxuICAgIHRoaXMuY29udGFpbmVyT3V0ZXIud3JhcCh0aGlzLmNvbnRhaW5lcklubmVyLmVsZW1lbnQpO1xuXG4gICAgaWYgKHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgdGhpcy5pbnB1dC5wbGFjZWhvbGRlciA9IHRoaXMuY29uZmlnLnNlYXJjaFBsYWNlaG9sZGVyVmFsdWUgfHwgJyc7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9wbGFjZWhvbGRlclZhbHVlKSB7XG4gICAgICB0aGlzLmlucHV0LnBsYWNlaG9sZGVyID0gdGhpcy5fcGxhY2Vob2xkZXJWYWx1ZTtcbiAgICAgIHRoaXMuaW5wdXQuc2V0V2lkdGgoKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXJJbm5lci5lbGVtZW50KTtcbiAgICB0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5kcm9wZG93bi5lbGVtZW50KTtcbiAgICB0aGlzLmNvbnRhaW5lcklubmVyLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5pdGVtTGlzdC5lbGVtZW50KTtcblxuICAgIGlmICghdGhpcy5faXNUZXh0RWxlbWVudCkge1xuICAgICAgdGhpcy5kcm9wZG93bi5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY2hvaWNlTGlzdC5lbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgdGhpcy5jb250YWluZXJJbm5lci5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQuZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbmZpZy5zZWFyY2hFbmFibGVkKSB7XG4gICAgICB0aGlzLmRyb3Bkb3duLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMuaW5wdXQuZWxlbWVudCwgdGhpcy5kcm9wZG93bi5lbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1NlbGVjdEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2hpZ2hsaWdodFBvc2l0aW9uID0gMDtcbiAgICAgIHRoaXMuX2lzU2VhcmNoaW5nID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuX3N0YXJ0TG9hZGluZygpO1xuXG4gICAgICBpZiAodGhpcy5fcHJlc2V0R3JvdXBzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9hZGRQcmVkZWZpbmVkR3JvdXBzKHRoaXMuX3ByZXNldEdyb3Vwcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9hZGRQcmVkZWZpbmVkQ2hvaWNlcyh0aGlzLl9wcmVzZXRDaG9pY2VzKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc3RvcExvYWRpbmcoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNUZXh0RWxlbWVudCkge1xuICAgICAgdGhpcy5fYWRkUHJlZGVmaW5lZEl0ZW1zKHRoaXMuX3ByZXNldEl0ZW1zKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9hZGRQcmVkZWZpbmVkR3JvdXBzID0gZnVuY3Rpb24gX2FkZFByZWRlZmluZWRHcm91cHMoZ3JvdXBzKSB7XG4gICAgdmFyIF90aGlzMjEgPSB0aGlzO1xuXG4gICAgLy8gSWYgd2UgaGF2ZSBhIHBsYWNlaG9sZGVyIG9wdGlvblxuICAgIHZhciBwbGFjZWhvbGRlckNob2ljZSA9IHRoaXMucGFzc2VkRWxlbWVudC5wbGFjZWhvbGRlck9wdGlvbjtcblxuICAgIGlmIChwbGFjZWhvbGRlckNob2ljZSAmJiBwbGFjZWhvbGRlckNob2ljZS5wYXJlbnROb2RlLnRhZ05hbWUgPT09ICdTRUxFQ1QnKSB7XG4gICAgICB0aGlzLl9hZGRDaG9pY2Uoe1xuICAgICAgICB2YWx1ZTogcGxhY2Vob2xkZXJDaG9pY2UudmFsdWUsXG4gICAgICAgIGxhYmVsOiBwbGFjZWhvbGRlckNob2ljZS5pbm5lckhUTUwsXG4gICAgICAgIGlzU2VsZWN0ZWQ6IHBsYWNlaG9sZGVyQ2hvaWNlLnNlbGVjdGVkLFxuICAgICAgICBpc0Rpc2FibGVkOiBwbGFjZWhvbGRlckNob2ljZS5kaXNhYmxlZCxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGdyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgcmV0dXJuIF90aGlzMjEuX2FkZEdyb3VwKHtcbiAgICAgICAgZ3JvdXA6IGdyb3VwLFxuICAgICAgICBpZDogZ3JvdXAuaWQgfHwgbnVsbFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLl9hZGRQcmVkZWZpbmVkQ2hvaWNlcyA9IGZ1bmN0aW9uIF9hZGRQcmVkZWZpbmVkQ2hvaWNlcyhjaG9pY2VzKSB7XG4gICAgdmFyIF90aGlzMjIgPSB0aGlzO1xuXG4gICAgLy8gSWYgc29ydGluZyBpcyBlbmFibGVkIG9yIHRoZSB1c2VyIGlzIHNlYXJjaGluZywgZmlsdGVyIGNob2ljZXNcbiAgICBpZiAodGhpcy5jb25maWcuc2hvdWxkU29ydCkge1xuICAgICAgY2hvaWNlcy5zb3J0KHRoaXMuY29uZmlnLnNvcnRlcik7XG4gICAgfVxuXG4gICAgdmFyIGhhc1NlbGVjdGVkQ2hvaWNlID0gY2hvaWNlcy5zb21lKGZ1bmN0aW9uIChjaG9pY2UpIHtcbiAgICAgIHJldHVybiBjaG9pY2Uuc2VsZWN0ZWQ7XG4gICAgfSk7XG4gICAgdmFyIGZpcnN0RW5hYmxlZENob2ljZUluZGV4ID0gY2hvaWNlcy5maW5kSW5kZXgoZnVuY3Rpb24gKGNob2ljZSkge1xuICAgICAgcmV0dXJuIGNob2ljZS5kaXNhYmxlZCA9PT0gdW5kZWZpbmVkIHx8ICFjaG9pY2UuZGlzYWJsZWQ7XG4gICAgfSk7XG4gICAgY2hvaWNlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaG9pY2UsIGluZGV4KSB7XG4gICAgICB2YXIgdmFsdWUgPSBjaG9pY2UudmFsdWUsXG4gICAgICAgICAgbGFiZWwgPSBjaG9pY2UubGFiZWwsXG4gICAgICAgICAgY3VzdG9tUHJvcGVydGllcyA9IGNob2ljZS5jdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgICAgIHBsYWNlaG9sZGVyID0gY2hvaWNlLnBsYWNlaG9sZGVyO1xuXG4gICAgICBpZiAoX3RoaXMyMi5faXNTZWxlY3RFbGVtZW50KSB7XG4gICAgICAgIC8vIElmIHRoZSBjaG9pY2UgaXMgYWN0dWFsbHkgYSBncm91cFxuICAgICAgICBpZiAoY2hvaWNlLmNob2ljZXMpIHtcbiAgICAgICAgICBfdGhpczIyLl9hZGRHcm91cCh7XG4gICAgICAgICAgICBncm91cDogY2hvaWNlLFxuICAgICAgICAgICAgaWQ6IGNob2ljZS5pZCB8fCBudWxsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogSWYgdGhlcmUgaXMgYSBzZWxlY3RlZCBjaG9pY2UgYWxyZWFkeSBvciB0aGUgY2hvaWNlIGlzIG5vdCB0aGUgZmlyc3QgaW5cbiAgICAgICAgICAgKiB0aGUgYXJyYXksIGFkZCBlYWNoIGNob2ljZSBub3JtYWxseS5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIE90aGVyd2lzZSB3ZSBwcmUtc2VsZWN0IHRoZSBmaXJzdCBlbmFibGVkIGNob2ljZSBpbiB0aGUgYXJyYXkgKFwic2VsZWN0LW9uZVwiIG9ubHkpXG4gICAgICAgICAgICovXG4gICAgICAgICAgdmFyIHNob3VsZFByZXNlbGVjdCA9IF90aGlzMjIuX2lzU2VsZWN0T25lRWxlbWVudCAmJiAhaGFzU2VsZWN0ZWRDaG9pY2UgJiYgaW5kZXggPT09IGZpcnN0RW5hYmxlZENob2ljZUluZGV4O1xuICAgICAgICAgIHZhciBpc1NlbGVjdGVkID0gc2hvdWxkUHJlc2VsZWN0ID8gdHJ1ZSA6IGNob2ljZS5zZWxlY3RlZDtcbiAgICAgICAgICB2YXIgaXNEaXNhYmxlZCA9IGNob2ljZS5kaXNhYmxlZDtcblxuICAgICAgICAgIF90aGlzMjIuX2FkZENob2ljZSh7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgICAgICBpc1NlbGVjdGVkOiBpc1NlbGVjdGVkLFxuICAgICAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgICAgIGN1c3RvbVByb3BlcnRpZXM6IGN1c3RvbVByb3BlcnRpZXMsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMyMi5fYWRkQ2hvaWNlKHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICAgIGlzU2VsZWN0ZWQ6IGNob2ljZS5zZWxlY3RlZCxcbiAgICAgICAgICBpc0Rpc2FibGVkOiBjaG9pY2UuZGlzYWJsZWQsXG4gICAgICAgICAgY3VzdG9tUHJvcGVydGllczogY3VzdG9tUHJvcGVydGllcyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXJcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7SXRlbVtdfSBpdGVtc1xuICAgKi9cbiAgO1xuXG4gIF9wcm90by5fYWRkUHJlZGVmaW5lZEl0ZW1zID0gZnVuY3Rpb24gX2FkZFByZWRlZmluZWRJdGVtcyhpdGVtcykge1xuICAgIHZhciBfdGhpczIzID0gdGhpcztcblxuICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgaXRlbS52YWx1ZSkge1xuICAgICAgICBfdGhpczIzLl9hZGRJdGVtKHtcbiAgICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZSxcbiAgICAgICAgICBsYWJlbDogaXRlbS5sYWJlbCxcbiAgICAgICAgICBjaG9pY2VJZDogaXRlbS5pZCxcbiAgICAgICAgICBjdXN0b21Qcm9wZXJ0aWVzOiBpdGVtLmN1c3RvbVByb3BlcnRpZXMsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IGl0ZW0ucGxhY2Vob2xkZXJcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgX3RoaXMyMy5fYWRkSXRlbSh7XG4gICAgICAgICAgdmFsdWU6IGl0ZW1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLl9zZXRDaG9pY2VPckl0ZW0gPSBmdW5jdGlvbiBfc2V0Q2hvaWNlT3JJdGVtKGl0ZW0pIHtcbiAgICB2YXIgX3RoaXMyNCA9IHRoaXM7XG5cbiAgICB2YXIgaXRlbVR5cGUgPSBnZXRUeXBlKGl0ZW0pLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFyIGhhbmRsZVR5cGUgPSB7XG4gICAgICBvYmplY3Q6IGZ1bmN0aW9uIG9iamVjdCgpIHtcbiAgICAgICAgaWYgKCFpdGVtLnZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIElmIHdlIGFyZSBkZWFsaW5nIHdpdGggYSBzZWxlY3QgaW5wdXQsIHdlIG5lZWQgdG8gY3JlYXRlIGFuIG9wdGlvbiBmaXJzdFxuICAgICAgICAvLyB0aGF0IGlzIHRoZW4gc2VsZWN0ZWQuIEZvciB0ZXh0IGlucHV0cyB3ZSBjYW4ganVzdCBhZGQgaXRlbXMgbm9ybWFsbHkuXG5cblxuICAgICAgICBpZiAoIV90aGlzMjQuX2lzVGV4dEVsZW1lbnQpIHtcbiAgICAgICAgICBfdGhpczI0Ll9hZGRDaG9pY2Uoe1xuICAgICAgICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXG4gICAgICAgICAgICBsYWJlbDogaXRlbS5sYWJlbCxcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IHRydWUsXG4gICAgICAgICAgICBpc0Rpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGN1c3RvbVByb3BlcnRpZXM6IGl0ZW0uY3VzdG9tUHJvcGVydGllcyxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBpdGVtLnBsYWNlaG9sZGVyXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMyNC5fYWRkSXRlbSh7XG4gICAgICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZSxcbiAgICAgICAgICAgIGxhYmVsOiBpdGVtLmxhYmVsLFxuICAgICAgICAgICAgY2hvaWNlSWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICBjdXN0b21Qcm9wZXJ0aWVzOiBpdGVtLmN1c3RvbVByb3BlcnRpZXMsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogaXRlbS5wbGFjZWhvbGRlclxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc3RyaW5nOiBmdW5jdGlvbiBzdHJpbmcoKSB7XG4gICAgICAgIGlmICghX3RoaXMyNC5faXNUZXh0RWxlbWVudCkge1xuICAgICAgICAgIF90aGlzMjQuX2FkZENob2ljZSh7XG4gICAgICAgICAgICB2YWx1ZTogaXRlbSxcbiAgICAgICAgICAgIGxhYmVsOiBpdGVtLFxuICAgICAgICAgICAgaXNTZWxlY3RlZDogdHJ1ZSxcbiAgICAgICAgICAgIGlzRGlzYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMyNC5fYWRkSXRlbSh7XG4gICAgICAgICAgICB2YWx1ZTogaXRlbVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBoYW5kbGVUeXBlW2l0ZW1UeXBlXSgpO1xuICB9O1xuXG4gIF9wcm90by5fZmluZEFuZFNlbGVjdENob2ljZUJ5VmFsdWUgPSBmdW5jdGlvbiBfZmluZEFuZFNlbGVjdENob2ljZUJ5VmFsdWUodmFsKSB7XG4gICAgdmFyIF90aGlzMjUgPSB0aGlzO1xuXG4gICAgdmFyIGNob2ljZXMgPSB0aGlzLl9zdG9yZS5jaG9pY2VzOyAvLyBDaGVjayAndmFsdWUnIHByb3BlcnR5IGV4aXN0cyBhbmQgdGhlIGNob2ljZSBpc24ndCBhbHJlYWR5IHNlbGVjdGVkXG5cbiAgICB2YXIgZm91bmRDaG9pY2UgPSBjaG9pY2VzLmZpbmQoZnVuY3Rpb24gKGNob2ljZSkge1xuICAgICAgcmV0dXJuIF90aGlzMjUuY29uZmlnLnZhbHVlQ29tcGFyZXIoY2hvaWNlLnZhbHVlLCB2YWwpO1xuICAgIH0pO1xuXG4gICAgaWYgKGZvdW5kQ2hvaWNlICYmICFmb3VuZENob2ljZS5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5fYWRkSXRlbSh7XG4gICAgICAgIHZhbHVlOiBmb3VuZENob2ljZS52YWx1ZSxcbiAgICAgICAgbGFiZWw6IGZvdW5kQ2hvaWNlLmxhYmVsLFxuICAgICAgICBjaG9pY2VJZDogZm91bmRDaG9pY2UuaWQsXG4gICAgICAgIGdyb3VwSWQ6IGZvdW5kQ2hvaWNlLmdyb3VwSWQsXG4gICAgICAgIGN1c3RvbVByb3BlcnRpZXM6IGZvdW5kQ2hvaWNlLmN1c3RvbVByb3BlcnRpZXMsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBmb3VuZENob2ljZS5wbGFjZWhvbGRlcixcbiAgICAgICAga2V5Q29kZTogZm91bmRDaG9pY2Uua2V5Q29kZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fZ2VuZXJhdGVQbGFjZWhvbGRlclZhbHVlID0gZnVuY3Rpb24gX2dlbmVyYXRlUGxhY2Vob2xkZXJWYWx1ZSgpIHtcbiAgICBpZiAodGhpcy5faXNTZWxlY3RFbGVtZW50KSB7XG4gICAgICB2YXIgcGxhY2Vob2xkZXJPcHRpb24gPSB0aGlzLnBhc3NlZEVsZW1lbnQucGxhY2Vob2xkZXJPcHRpb247XG4gICAgICByZXR1cm4gcGxhY2Vob2xkZXJPcHRpb24gPyBwbGFjZWhvbGRlck9wdGlvbi50ZXh0IDogZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIF90aGlzJGNvbmZpZzQgPSB0aGlzLmNvbmZpZyxcbiAgICAgICAgcGxhY2Vob2xkZXIgPSBfdGhpcyRjb25maWc0LnBsYWNlaG9sZGVyLFxuICAgICAgICBwbGFjZWhvbGRlclZhbHVlID0gX3RoaXMkY29uZmlnNC5wbGFjZWhvbGRlclZhbHVlO1xuICAgIHZhciBkYXRhc2V0ID0gdGhpcy5wYXNzZWRFbGVtZW50LmVsZW1lbnQuZGF0YXNldDtcblxuICAgIGlmIChwbGFjZWhvbGRlcikge1xuICAgICAgaWYgKHBsYWNlaG9sZGVyVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyVmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhc2V0LnBsYWNlaG9sZGVyKSB7XG4gICAgICAgIHJldHVybiBkYXRhc2V0LnBsYWNlaG9sZGVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4gQ2hvaWNlcztcbn0oKTtcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgc2NyaXB0c19jaG9pY2VzID0gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoY2hvaWNlc19DaG9pY2VzKTtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pW1wiZGVmYXVsdFwiXTtcbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL3BvcHVwLmNzcyc7XG5pbXBvcnQgJ2Nob2ljZXMuanMvcHVibGljL2Fzc2V0cy9zdHlsZXMvY2hvaWNlcy5jc3MnO1xuaW1wb3J0IENob2ljZXMgZnJvbSAnY2hvaWNlcy5qcyc7XG5cbihmdW5jdGlvbigpIHtcbiAgdmFyIGN1cnJlbmN5RnJvbSA9ICd1c2QnXG4gIHZhciBjdXJyZW5jeVRvID0gJ2lkcidcblxuICB2YXIgbGlzdENvdW50cnkgPSBbXG4gICAgXCJFVVJcIixcbiAgICBcIlVTRFwiLFxuICAgIFwiR0JQXCIsXG4gICAgXCJJTlJcIixcbiAgICBcIkNBRFwiLFxuICAgIFwiQVVEXCIsXG4gICAgXCJDSEZcIixcbiAgICBcIk1YTlwiLFxuICAgIFwiRkpEXCIsXG4gICAgXCJTQ1JcIixcbiAgICBcIkJCRFwiLFxuICAgIFwiR1RRXCIsXG4gICAgXCJDTFBcIixcbiAgICBcIkhOTFwiLFxuICAgIFwiVUdYXCIsXG4gICAgXCJaQVJcIixcbiAgICBcIlRORFwiLFxuICAgIFwiQlNEXCIsXG4gICAgXCJTTExcIixcbiAgICBcIkdNRFwiLFxuICAgIFwiVFdEXCIsXG4gICAgXCJSU0RcIixcbiAgICBcIkRPUFwiLFxuICAgIFwiS01GXCIsXG4gICAgXCJNWVJcIixcbiAgICBcIkZLUFwiLFxuICAgIFwiWE9GXCIsXG4gICAgXCJHRUxcIixcbiAgICBcIlVZVVwiLFxuICAgIFwiTUFEXCIsXG4gICAgXCJDVkVcIixcbiAgICBcIlRPUFwiLFxuICAgIFwiQVpOXCIsXG4gICAgXCJPTVJcIixcbiAgICBcIlBHS1wiLFxuICAgIFwiS0VTXCIsXG4gICAgXCJTRUtcIixcbiAgICBcIkJUTlwiLFxuICAgIFwiVUFIXCIsXG4gICAgXCJHTkZcIixcbiAgICBcIk1aTlwiLFxuICAgIFwiU1ZDXCIsXG4gICAgXCJBUlNcIixcbiAgICBcIlFBUlwiLFxuICAgIFwiQ05ZXCIsXG4gICAgXCJUSEJcIixcbiAgICBcIlVaU1wiLFxuICAgIFwiWFBGXCIsXG4gICAgXCJNUlVcIixcbiAgICBcIkJEVFwiLFxuICAgIFwiQk1EXCIsXG4gICAgXCJLV0RcIixcbiAgICBcIlBIUFwiLFxuICAgIFwiUlVCXCIsXG4gICAgXCJQWUdcIixcbiAgICBcIklTS1wiLFxuICAgIFwiSk1EXCIsXG4gICAgXCJDT1BcIixcbiAgICBcIk1LRFwiLFxuICAgIFwiRFpEXCIsXG4gICAgXCJQQUJcIixcbiAgICBcIkdHUFwiLFxuICAgIFwiU0dEXCIsXG4gICAgXCJFVEJcIixcbiAgICBcIkpFUFwiLFxuICAgIFwiS0dTXCIsXG4gICAgXCJWVVZcIixcbiAgICBcIkxBS1wiLFxuICAgIFwiQk5EXCIsXG4gICAgXCJYQUZcIixcbiAgICBcIkxSRFwiLFxuICAgIFwiSFJLXCIsXG4gICAgXCJBTExcIixcbiAgICBcIkRKRlwiLFxuICAgIFwiWk1XXCIsXG4gICAgXCJUWlNcIixcbiAgICBcIlZORFwiLFxuICAgIFwiSUxTXCIsXG4gICAgXCJHSFNcIixcbiAgICBcIkdZRFwiLFxuICAgIFwiQk9CXCIsXG4gICAgXCJLSFJcIixcbiAgICBcIk1ETFwiLFxuICAgIFwiSURSXCIsXG4gICAgXCJLWURcIixcbiAgICBcIkFNRFwiLFxuICAgIFwiQldQXCIsXG4gICAgXCJTSFBcIixcbiAgICBcIlRSWVwiLFxuICAgIFwiTEJQXCIsXG4gICAgXCJUSlNcIixcbiAgICBcIkpPRFwiLFxuICAgIFwiQUVEXCIsXG4gICAgXCJIS0RcIixcbiAgICBcIlJXRlwiLFxuICAgIFwiTFNMXCIsXG4gICAgXCJES0tcIixcbiAgICBcIkJHTlwiLFxuICAgIFwiTU1LXCIsXG4gICAgXCJNVVJcIixcbiAgICBcIk5PS1wiLFxuICAgIFwiSU1QXCIsXG4gICAgXCJHSVBcIixcbiAgICBcIlJPTlwiLFxuICAgIFwiTEtSXCIsXG4gICAgXCJOR05cIixcbiAgICBcIkNSQ1wiLFxuICAgIFwiQ1pLXCIsXG4gICAgXCJQS1JcIixcbiAgICBcIlhDRFwiLFxuICAgIFwiQU5HXCIsXG4gICAgXCJIVEdcIixcbiAgICBcIkJIRFwiLFxuICAgIFwiS1pUXCIsXG4gICAgXCJTUkRcIixcbiAgICBcIlNaTFwiLFxuICAgIFwiU0FSXCIsXG4gICAgXCJUVERcIixcbiAgICBcIk1WUlwiLFxuICAgIFwiQVdHXCIsXG4gICAgXCJLUldcIixcbiAgICBcIk5QUlwiLFxuICAgIFwiSlBZXCIsXG4gICAgXCJNTlRcIixcbiAgICBcIkFPQVwiLFxuICAgIFwiUExOXCIsXG4gICAgXCJTQkRcIixcbiAgICBcIkJZTlwiLFxuICAgIFwiSFVGXCIsXG4gICAgXCJNV0tcIixcbiAgICBcIk1HQVwiLFxuICAgIFwiQlpEXCIsXG4gICAgXCJCQU1cIixcbiAgICBcIkVHUFwiLFxuICAgIFwiTU9QXCIsXG4gICAgXCJOQURcIixcbiAgICBcIk5JT1wiLFxuICAgIFwiUEVOXCIsXG4gICAgXCJOWkRcIixcbiAgICBcIldTVFwiLFxuICAgIFwiVE1UXCIsXG4gICAgXCJCUkxcIlxuICBdXG5cbiAgZnVuY3Rpb24gc2V0RHJvcERvd24gKCkge1xuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBsaXN0Q291bnRyeSkge1xuICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgb3B0aW9uLnZhbHVlID0gZWxlbWVudC50b0xvd2VyQ2FzZSgpXG4gICAgICBvcHRpb24uaW5uZXJIVE1MID0gZWxlbWVudFxuXG4gICAgICBsZXQgY2xvbmVPcHRpb24gPSBvcHRpb24uY2xvbmVOb2RlKHRydWUpXG5cbiAgICAgIGdldEN1cnJlbmN5RnJvbSgpLmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICAgIGdldEN1cnJlbmN5VG8oKS5hcHBlbmRDaGlsZChjbG9uZU9wdGlvbilcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzZXRWYWx1ZURyb3BEb3duICgpIHtcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVuY3koKVxuXG4gICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuY3VycmVuY3kpIHtcbiAgICAgIGlmIChyZXN1bHQuY3VycmVuY3kuY3VycmVuY3lfZnJvbSkge1xuICAgICAgICBjdXJyZW5jeUZyb20gPSByZXN1bHQuY3VycmVuY3kuY3VycmVuY3lfZnJvbVxuICAgICAgICBnZXRDdXJyZW5jeUZyb20oKS52YWx1ZSA9IGN1cnJlbmN5RnJvbVxuICAgICAgfVxuXG4gICAgICBpZiAocmVzdWx0LmN1cnJlbmN5LmN1cnJlbmN5X3RvKSB7XG4gICAgICAgIGN1cnJlbmN5VG8gPSByZXN1bHQuY3VycmVuY3kuY3VycmVuY3lfdG9cbiAgICAgICAgZ2V0Q3VycmVuY3lUbygpLnZhbHVlID0gY3VycmVuY3lUb1xuICAgICAgfVxuICAgIH1cblxuICAgIHNldENob2ljZUxpYigpXG4gIH1cblxuICBmdW5jdGlvbiBnZXRDdXJyZW5jeUZyb20oKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW5jeV9mcm9tX3RmJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbmN5VG8oKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW5jeV90b190ZicpXG4gIH1cblxuICBmdW5jdGlvbiBzZXRDaG9pY2VMaWIgKCkge1xuICAgIG5ldyBDaG9pY2VzKGdldEN1cnJlbmN5RnJvbSgpLCB7XG4gICAgICBzZWFyY2hSZXN1bHRMaW1pdDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgIHJlbmRlckNob2ljZUxpbWl0OiAxXG4gICAgfSlcblxuICAgIGdldEN1cnJlbmN5RnJvbSgpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2hvaWNlJyxcbiAgICAgIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGN1cnJlbmN5RnJvbSA9IGV2ZW50LmRldGFpbC5jaG9pY2UudmFsdWVcbiAgICAgIH0sXG4gICAgICBmYWxzZSxcbiAgICApO1xuXG4gICAgbmV3IENob2ljZXMoZ2V0Q3VycmVuY3lUbygpLCB7XG4gICAgICBzZWFyY2hSZXN1bHRMaW1pdDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgIHJlbmRlckNob2ljZUxpbWl0OiAxXG4gICAgfSlcblxuICAgIGdldEN1cnJlbmN5VG8oKS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2Nob2ljZScsXG4gICAgICBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBjdXJyZW5jeVRvID0gZXZlbnQuZGV0YWlsLmNob2ljZS52YWx1ZVxuICAgICAgfSxcbiAgICAgIGZhbHNlLFxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDdXJyZW5jeSAoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCdjdXJyZW5jeScsIGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBzZXRTdG9yYWdlICgpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoe1xuICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgY3VycmVuY3lfZnJvbTogZ2V0Q3VycmVuY3lGcm9tKCkudmFsdWUsXG4gICAgICAgIGN1cnJlbmN5X3RvOiBnZXRDdXJyZW5jeVRvKCkudmFsdWUsXG4gICAgICB9XG4gICAgfSwgc2VuZE1lc3NhZ2VUb0JhY2tncm91bmQoKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbmRNZXNzYWdlVG9CYWNrZ3JvdW5kICgpIHtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7dHlwZTogXCJVUERBVEVfQ1VSUkVOQ1lcIn0sIGZ1bmN0aW9uKF9yZXNwb25zZSkge30pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VXJsKCkge1xuICAgIHJldHVybiBgaHR0cHM6Ly90cmFuc2Zlcndpc2UuY29tL2diL2N1cnJlbmN5LWNvbnZlcnRlci8ke2N1cnJlbmN5RnJvbX0tdG8tJHtjdXJyZW5jeVRvfS1yYXRlYFxuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgIGlmIChnZXRDdXJyZW5jeUZyb20oKSAmJiBnZXRDdXJyZW5jeVRvKCkpIHtcbiAgICAgIHNldERyb3BEb3duKClcbiAgICAgIHNldFZhbHVlRHJvcERvd24oKVxuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwbHknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXRTdG9yYWdlKClcbiAgICAgIH0pO1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2stbGluaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKGdldFVybCgpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==