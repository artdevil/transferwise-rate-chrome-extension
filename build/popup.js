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
    } else {
      currencyFrom = 'usd'
      getCurrencyFrom().value = 'usd'

      currencyTo = 'idr'
      getCurrencyTo().value = 'idr'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nob2ljZXMuanMvcHVibGljL2Fzc2V0cy9zY3JpcHRzL2Nob2ljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nob2ljZXMuanMvcHVibGljL2Fzc2V0cy9zdHlsZXMvY2hvaWNlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcHVwLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wdXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQSxJQUFJLElBQXlEO0FBQzdEO0FBQ0EsTUFBTSxFQUt3QjtBQUM5QixDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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WTtBQUN2QixhQUFhLFNBQVM7QUFDdEI7O0FBRUE7QUFDQSw0RUFBNEUsYUFBYTtBQUN6RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsV0FBVyxFQUFFOzs7O0FBSWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDs7O0FBR0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07O0FBRU4seURBQXlEOztBQUV6RCxxREFBcUQ7O0FBRXJELDhDQUE4Qzs7QUFFOUMsMENBQTBDOztBQUUxQztBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLDRCQUE0QjtBQUM1Qjs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0I7QUFDL0I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwrREFBK0Q7QUFDL0QsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0RBQStEO0FBQy9ELEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNEQUFzRDtBQUNuRTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTCw2REFBNkQ7O0FBRTdEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlFQUFpRTtBQUNqRixhQUFhLEVBQUU7QUFDZixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBaUQ7QUFDekQsUUFBUSxpREFBaUQ7QUFDekQsUUFBUSxxQ0FBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHVEQUF1RDtBQUNqRSxVQUFVLHdEQUF3RDtBQUNsRSxVQUFVLDJDQUEyQztBQUNyRDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSx5REFBeUQ7QUFDbkUsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVTtBQUNWO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7O0FBR1A7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUEsdUVBQXVFOzs7QUFHdkU7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQSxrRUFBa0U7OztBQUdsRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQLE1BQU07OztBQUdOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDREQUE0RDs7O0FBRzVEO0FBQ0E7QUFDQTs7QUFFQSxpREFBaUQ7O0FBRWpEOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOzs7QUFHTCxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7O0FBRTFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwRUFBMEU7OztBQUcxRTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1EQUFtRDtBQUNuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSyxFQUFFO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQ7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUDtBQUNBLHVFQUF1RTs7QUFFdkU7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBLHVGQUF1Rjs7QUFFdkY7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGNBQWM7QUFDM0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQTtBQUNBLEtBQUs7OztBQUdMLDhDQUE4QyxxY0FBcWM7O0FBRW5mO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EseUNBQXlDO0FBQ3pDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsV0FBVztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsV0FBVztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbUNBQW1DO0FBQ25DOzs7QUFHQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLDBDQUEwQztBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrSEFBK0g7O0FBRS9IO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLDBGQUEwRixhQUFhO0FBQ3ZHO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQzs7QUFFakMseURBQXlEOztBQUV6RDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsT0FBTztBQUNQO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7OztBQ2wrS0QsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWE7O0FBRVE7QUFDZ0M7QUFDcEI7O0FBRWpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxpREFBTztBQUNmO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQSxRQUFRLGlEQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLGdDQUFnQyx3QkFBd0Isd0JBQXdCO0FBQ2hGOztBQUVBO0FBQ0EsNkRBQTZELGFBQWEsTUFBTSxXQUFXO0FBQzNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsImZpbGUiOiJwb3B1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BvcHVwLmpzXCIpO1xuIiwiLyohIGNob2ljZXMuanMgdjkuMC4xIHwgwqkgMjAxOSBKb3NoIEpvaG5zb24gfCBodHRwczovL2dpdGh1Yi5jb20vanNoam9obnNvbi9DaG9pY2VzI3JlYWRtZSAqL1xuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQ2hvaWNlc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJDaG9pY2VzXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3B1YmxpYy9hc3NldHMvc2NyaXB0cy9cIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBpc01lcmdlYWJsZU9iamVjdCA9IGZ1bmN0aW9uIGlzTWVyZ2VhYmxlT2JqZWN0KHZhbHVlKSB7XG5cdHJldHVybiBpc05vbk51bGxPYmplY3QodmFsdWUpXG5cdFx0JiYgIWlzU3BlY2lhbCh2YWx1ZSlcbn07XG5cbmZ1bmN0aW9uIGlzTm9uTnVsbE9iamVjdCh2YWx1ZSkge1xuXHRyZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG59XG5cbmZ1bmN0aW9uIGlzU3BlY2lhbCh2YWx1ZSkge1xuXHR2YXIgc3RyaW5nVmFsdWUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuXG5cdHJldHVybiBzdHJpbmdWYWx1ZSA9PT0gJ1tvYmplY3QgUmVnRXhwXSdcblx0XHR8fCBzdHJpbmdWYWx1ZSA9PT0gJ1tvYmplY3QgRGF0ZV0nXG5cdFx0fHwgaXNSZWFjdEVsZW1lbnQodmFsdWUpXG59XG5cbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi9iNWFjOTYzZmI3OTFkMTI5OGU3ZjM5NjIzNjM4M2JjOTU1ZjkxNmMxL3NyYy9pc29tb3JwaGljL2NsYXNzaWMvZWxlbWVudC9SZWFjdEVsZW1lbnQuanMjTDIxLUwyNVxudmFyIGNhblVzZVN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBjYW5Vc2VTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG5cbmZ1bmN0aW9uIGlzUmVhY3RFbGVtZW50KHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFXG59XG5cbmZ1bmN0aW9uIGVtcHR5VGFyZ2V0KHZhbCkge1xuXHRyZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpID8gW10gOiB7fVxufVxuXG5mdW5jdGlvbiBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCh2YWx1ZSwgb3B0aW9ucykge1xuXHRyZXR1cm4gKG9wdGlvbnMuY2xvbmUgIT09IGZhbHNlICYmIG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QodmFsdWUpKVxuXHRcdD8gZGVlcG1lcmdlKGVtcHR5VGFyZ2V0KHZhbHVlKSwgdmFsdWUsIG9wdGlvbnMpXG5cdFx0OiB2YWx1ZVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0QXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuXHRyZXR1cm4gdGFyZ2V0LmNvbmNhdChzb3VyY2UpLm1hcChmdW5jdGlvbihlbGVtZW50KSB7XG5cdFx0cmV0dXJuIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKGVsZW1lbnQsIG9wdGlvbnMpXG5cdH0pXG59XG5cbmZ1bmN0aW9uIGdldE1lcmdlRnVuY3Rpb24oa2V5LCBvcHRpb25zKSB7XG5cdGlmICghb3B0aW9ucy5jdXN0b21NZXJnZSkge1xuXHRcdHJldHVybiBkZWVwbWVyZ2Vcblx0fVxuXHR2YXIgY3VzdG9tTWVyZ2UgPSBvcHRpb25zLmN1c3RvbU1lcmdlKGtleSk7XG5cdHJldHVybiB0eXBlb2YgY3VzdG9tTWVyZ2UgPT09ICdmdW5jdGlvbicgPyBjdXN0b21NZXJnZSA6IGRlZXBtZXJnZVxufVxuXG5mdW5jdGlvbiBnZXRFbnVtZXJhYmxlT3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkge1xuXHRyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sc1xuXHRcdD8gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpLmZpbHRlcihmdW5jdGlvbihzeW1ib2wpIHtcblx0XHRcdHJldHVybiB0YXJnZXQucHJvcGVydHlJc0VudW1lcmFibGUoc3ltYm9sKVxuXHRcdH0pXG5cdFx0OiBbXVxufVxuXG5mdW5jdGlvbiBnZXRLZXlzKHRhcmdldCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXModGFyZ2V0KS5jb25jYXQoZ2V0RW51bWVyYWJsZU93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKVxufVxuXG4vLyBQcm90ZWN0cyBmcm9tIHByb3RvdHlwZSBwb2lzb25pbmcgYW5kIHVuZXhwZWN0ZWQgbWVyZ2luZyB1cCB0aGUgcHJvdG90eXBlIGNoYWluLlxuZnVuY3Rpb24gcHJvcGVydHlJc1Vuc2FmZSh0YXJnZXQsIGtleSkge1xuXHR0cnkge1xuXHRcdHJldHVybiAoa2V5IGluIHRhcmdldCkgLy8gUHJvcGVydGllcyBhcmUgc2FmZSB0byBtZXJnZSBpZiB0aGV5IGRvbid0IGV4aXN0IGluIHRoZSB0YXJnZXQgeWV0LFxuXHRcdFx0JiYgIShPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIGtleSkgLy8gdW5zYWZlIGlmIHRoZXkgZXhpc3QgdXAgdGhlIHByb3RvdHlwZSBjaGFpbixcblx0XHRcdFx0JiYgT2JqZWN0LnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodGFyZ2V0LCBrZXkpKSAvLyBhbmQgYWxzbyB1bnNhZmUgaWYgdGhleSdyZSBub25lbnVtZXJhYmxlLlxuXHR9IGNhdGNoICh1bnVzZWQpIHtcblx0XHQvLyBDb3VudGVyaW50dWl0aXZlbHksIGl0J3Mgc2FmZSB0byBtZXJnZSBhbnkgcHJvcGVydHkgb24gYSB0YXJnZXQgdGhhdCBjYXVzZXMgdGhlIGBpbmAgb3BlcmF0b3IgdG8gdGhyb3cuXG5cdFx0Ly8gVGhpcyBoYXBwZW5zIHdoZW4gdHJ5aW5nIHRvIGNvcHkgYW4gb2JqZWN0IGluIHRoZSBzb3VyY2Ugb3ZlciBhIHBsYWluIHN0cmluZyBpbiB0aGUgdGFyZ2V0LlxuXHRcdHJldHVybiBmYWxzZVxuXHR9XG59XG5cbmZ1bmN0aW9uIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG5cdHZhciBkZXN0aW5hdGlvbiA9IHt9O1xuXHRpZiAob3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCh0YXJnZXQpKSB7XG5cdFx0Z2V0S2V5cyh0YXJnZXQpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG5cdFx0XHRkZXN0aW5hdGlvbltrZXldID0gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQodGFyZ2V0W2tleV0sIG9wdGlvbnMpO1xuXHRcdH0pO1xuXHR9XG5cdGdldEtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuXHRcdGlmIChwcm9wZXJ0eUlzVW5zYWZlKHRhcmdldCwga2V5KSkge1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXG5cdFx0aWYgKCFvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHNvdXJjZVtrZXldKSB8fCAhdGFyZ2V0W2tleV0pIHtcblx0XHRcdGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZChzb3VyY2Vba2V5XSwgb3B0aW9ucyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRlc3RpbmF0aW9uW2tleV0gPSBnZXRNZXJnZUZ1bmN0aW9uKGtleSwgb3B0aW9ucykodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldLCBvcHRpb25zKTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gZGVzdGluYXRpb25cbn1cblxuZnVuY3Rpb24gZGVlcG1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHRvcHRpb25zLmFycmF5TWVyZ2UgPSBvcHRpb25zLmFycmF5TWVyZ2UgfHwgZGVmYXVsdEFycmF5TWVyZ2U7XG5cdG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QgPSBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0IHx8IGlzTWVyZ2VhYmxlT2JqZWN0O1xuXHQvLyBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCBpcyBhZGRlZCB0byBgb3B0aW9uc2Agc28gdGhhdCBjdXN0b20gYXJyYXlNZXJnZSgpXG5cdC8vIGltcGxlbWVudGF0aW9ucyBjYW4gdXNlIGl0LiBUaGUgY2FsbGVyIG1heSBub3QgcmVwbGFjZSBpdC5cblx0b3B0aW9ucy5jbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCA9IGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkO1xuXG5cdHZhciBzb3VyY2VJc0FycmF5ID0gQXJyYXkuaXNBcnJheShzb3VyY2UpO1xuXHR2YXIgdGFyZ2V0SXNBcnJheSA9IEFycmF5LmlzQXJyYXkodGFyZ2V0KTtcblx0dmFyIHNvdXJjZUFuZFRhcmdldFR5cGVzTWF0Y2ggPSBzb3VyY2VJc0FycmF5ID09PSB0YXJnZXRJc0FycmF5O1xuXG5cdGlmICghc291cmNlQW5kVGFyZ2V0VHlwZXNNYXRjaCkge1xuXHRcdHJldHVybiBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZChzb3VyY2UsIG9wdGlvbnMpXG5cdH0gZWxzZSBpZiAoc291cmNlSXNBcnJheSkge1xuXHRcdHJldHVybiBvcHRpb25zLmFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpXG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zKVxuXHR9XG59XG5cbmRlZXBtZXJnZS5hbGwgPSBmdW5jdGlvbiBkZWVwbWVyZ2VBbGwoYXJyYXksIG9wdGlvbnMpIHtcblx0aWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignZmlyc3QgYXJndW1lbnQgc2hvdWxkIGJlIGFuIGFycmF5Jylcblx0fVxuXG5cdHJldHVybiBhcnJheS5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgbmV4dCkge1xuXHRcdHJldHVybiBkZWVwbWVyZ2UocHJldiwgbmV4dCwgb3B0aW9ucylcblx0fSwge30pXG59O1xuXG52YXIgZGVlcG1lcmdlXzEgPSBkZWVwbWVyZ2U7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVlcG1lcmdlXzE7XG5cblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKGdsb2JhbCwgbW9kdWxlKSB7LyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9wb255ZmlsbF9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbi8qIGdsb2JhbCB3aW5kb3cgKi9cblxuXG52YXIgcm9vdDtcblxuaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gc2VsZjtcbn0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IGdsb2JhbDtcbn0gZWxzZSBpZiAodHJ1ZSkge1xuICByb290ID0gbW9kdWxlO1xufSBlbHNlIHt9XG5cbnZhciByZXN1bHQgPSBPYmplY3QoX3BvbnlmaWxsX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bLyogZGVmYXVsdCAqLyBcImFcIl0pKHJvb3QpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiYVwiXSA9IChyZXN1bHQpO1xuXG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwodGhpcywgX193ZWJwYWNrX3JlcXVpcmVfXyg1KSwgX193ZWJwYWNrX3JlcXVpcmVfXyg2KShtb2R1bGUpKSlcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qIVxuICogRnVzZS5qcyB2My40LjUgLSBMaWdodHdlaWdodCBmdXp6eS1zZWFyY2ggKGh0dHA6Ly9mdXNlanMuaW8pXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IEtpcm9sbG9zIFJpc2sgKGh0dHA6Ly9raXJvLm1lKVxuICogQWxsIFJpZ2h0cyBSZXNlcnZlZC4gQXBhY2hlIFNvZnR3YXJlIExpY2Vuc2UgMi4wXG4gKiBcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICovXG4hZnVuY3Rpb24oZSx0KXsgdHJ1ZT9tb2R1bGUuZXhwb3J0cz10KCk6dW5kZWZpbmVkfSh0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PXt9O2Z1bmN0aW9uIG4ocil7aWYodFtyXSlyZXR1cm4gdFtyXS5leHBvcnRzO3ZhciBvPXRbcl09e2k6cixsOiExLGV4cG9ydHM6e319O3JldHVybiBlW3JdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLG4pLG8ubD0hMCxvLmV4cG9ydHN9cmV0dXJuIG4ubT1lLG4uYz10LG4uZD1mdW5jdGlvbihlLHQscil7bi5vKGUsdCl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2VudW1lcmFibGU6ITAsZ2V0OnJ9KX0sbi5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LG4udD1mdW5jdGlvbihlLHQpe2lmKDEmdCYmKGU9bihlKSksOCZ0KXJldHVybiBlO2lmKDQmdCYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgcj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKG4ucihyKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTplfSksMiZ0JiZcInN0cmluZ1wiIT10eXBlb2YgZSlmb3IodmFyIG8gaW4gZSluLmQocixvLGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfS5iaW5kKG51bGwsbykpO3JldHVybiByfSxuLm49ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIG4uZCh0LFwiYVwiLHQpLHR9LG4ubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sbi5wPVwiXCIsbihuLnM9MSl9KFtmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gQXJyYXkuaXNBcnJheT9BcnJheS5pc0FycmF5KGUpOlwiW29iamVjdCBBcnJheV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKX19LGZ1bmN0aW9uKGUsdCxuKXtmdW5jdGlvbiByKGUpe3JldHVybihyPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9KShlKX1mdW5jdGlvbiBvKGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciByPXRbbl07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIua2V5LHIpfX12YXIgaT1uKDIpLGE9big4KSxzPW4oMCksYz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuKXt2YXIgcj1uLmxvY2F0aW9uLG89dm9pZCAwPT09cj8wOnIsaT1uLmRpc3RhbmNlLHM9dm9pZCAwPT09aT8xMDA6aSxjPW4udGhyZXNob2xkLGg9dm9pZCAwPT09Yz8uNjpjLGw9bi5tYXhQYXR0ZXJuTGVuZ3RoLHU9dm9pZCAwPT09bD8zMjpsLGY9bi5jYXNlU2Vuc2l0aXZlLGQ9dm9pZCAwIT09ZiYmZix2PW4udG9rZW5TZXBhcmF0b3IscD12b2lkIDA9PT12Py8gKy9nOnYsZz1uLmZpbmRBbGxNYXRjaGVzLHk9dm9pZCAwIT09ZyYmZyxtPW4ubWluTWF0Y2hDaGFyTGVuZ3RoLGs9dm9pZCAwPT09bT8xOm0sUz1uLmlkLHg9dm9pZCAwPT09Uz9udWxsOlMsYj1uLmtleXMsTT12b2lkIDA9PT1iP1tdOmIsXz1uLnNob3VsZFNvcnQsTD12b2lkIDA9PT1ffHxfLHc9bi5nZXRGbixBPXZvaWQgMD09PXc/YTp3LEM9bi5zb3J0Rm4sST12b2lkIDA9PT1DP2Z1bmN0aW9uKGUsdCl7cmV0dXJuIGUuc2NvcmUtdC5zY29yZX06QyxPPW4udG9rZW5pemUsaj12b2lkIDAhPT1PJiZPLFA9bi5tYXRjaEFsbFRva2VucyxGPXZvaWQgMCE9PVAmJlAsVD1uLmluY2x1ZGVNYXRjaGVzLHo9dm9pZCAwIT09VCYmVCxFPW4uaW5jbHVkZVNjb3JlLEs9dm9pZCAwIT09RSYmRSwkPW4udmVyYm9zZSxKPXZvaWQgMCE9PSQmJiQ7IWZ1bmN0aW9uKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0odGhpcyxlKSx0aGlzLm9wdGlvbnM9e2xvY2F0aW9uOm8sZGlzdGFuY2U6cyx0aHJlc2hvbGQ6aCxtYXhQYXR0ZXJuTGVuZ3RoOnUsaXNDYXNlU2Vuc2l0aXZlOmQsdG9rZW5TZXBhcmF0b3I6cCxmaW5kQWxsTWF0Y2hlczp5LG1pbk1hdGNoQ2hhckxlbmd0aDprLGlkOngsa2V5czpNLGluY2x1ZGVNYXRjaGVzOnosaW5jbHVkZVNjb3JlOkssc2hvdWxkU29ydDpMLGdldEZuOkEsc29ydEZuOkksdmVyYm9zZTpKLHRva2VuaXplOmosbWF0Y2hBbGxUb2tlbnM6Rn0sdGhpcy5zZXRDb2xsZWN0aW9uKHQpfXZhciB0LG4sYztyZXR1cm4gdD1lLChuPVt7a2V5Olwic2V0Q29sbGVjdGlvblwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmxpc3Q9ZSxlfX0se2tleTpcInNlYXJjaFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7bGltaXQ6ITF9O3RoaXMuX2xvZygnLS0tLS0tLS0tXFxuU2VhcmNoIHBhdHRlcm46IFwiJy5jb25jYXQoZSwnXCInKSk7dmFyIG49dGhpcy5fcHJlcGFyZVNlYXJjaGVycyhlKSxyPW4udG9rZW5TZWFyY2hlcnMsbz1uLmZ1bGxTZWFyY2hlcixpPXRoaXMuX3NlYXJjaChyLG8pLGE9aS53ZWlnaHRzLHM9aS5yZXN1bHRzO3JldHVybiB0aGlzLl9jb21wdXRlU2NvcmUoYSxzKSx0aGlzLm9wdGlvbnMuc2hvdWxkU29ydCYmdGhpcy5fc29ydChzKSx0LmxpbWl0JiZcIm51bWJlclwiPT10eXBlb2YgdC5saW1pdCYmKHM9cy5zbGljZSgwLHQubGltaXQpKSx0aGlzLl9mb3JtYXQocyl9fSx7a2V5OlwiX3ByZXBhcmVTZWFyY2hlcnNcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpcIlwiLHQ9W107aWYodGhpcy5vcHRpb25zLnRva2VuaXplKWZvcih2YXIgbj1lLnNwbGl0KHRoaXMub3B0aW9ucy50b2tlblNlcGFyYXRvcikscj0wLG89bi5sZW5ndGg7cjxvO3IrPTEpdC5wdXNoKG5ldyBpKG5bcl0sdGhpcy5vcHRpb25zKSk7cmV0dXJue3Rva2VuU2VhcmNoZXJzOnQsZnVsbFNlYXJjaGVyOm5ldyBpKGUsdGhpcy5vcHRpb25zKX19fSx7a2V5OlwiX3NlYXJjaFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOltdLHQ9YXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDAsbj10aGlzLmxpc3Qscj17fSxvPVtdO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBuWzBdKXtmb3IodmFyIGk9MCxhPW4ubGVuZ3RoO2k8YTtpKz0xKXRoaXMuX2FuYWx5emUoe2tleTpcIlwiLHZhbHVlOm5baV0scmVjb3JkOmksaW5kZXg6aX0se3Jlc3VsdE1hcDpyLHJlc3VsdHM6byx0b2tlblNlYXJjaGVyczplLGZ1bGxTZWFyY2hlcjp0fSk7cmV0dXJue3dlaWdodHM6bnVsbCxyZXN1bHRzOm99fWZvcih2YXIgcz17fSxjPTAsaD1uLmxlbmd0aDtjPGg7Yys9MSlmb3IodmFyIGw9bltjXSx1PTAsZj10aGlzLm9wdGlvbnMua2V5cy5sZW5ndGg7dTxmO3UrPTEpe3ZhciBkPXRoaXMub3B0aW9ucy5rZXlzW3VdO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBkKXtpZihzW2QubmFtZV09e3dlaWdodDoxLWQud2VpZ2h0fHwxfSxkLndlaWdodDw9MHx8ZC53ZWlnaHQ+MSl0aHJvdyBuZXcgRXJyb3IoXCJLZXkgd2VpZ2h0IGhhcyB0byBiZSA+IDAgYW5kIDw9IDFcIik7ZD1kLm5hbWV9ZWxzZSBzW2RdPXt3ZWlnaHQ6MX07dGhpcy5fYW5hbHl6ZSh7a2V5OmQsdmFsdWU6dGhpcy5vcHRpb25zLmdldEZuKGwsZCkscmVjb3JkOmwsaW5kZXg6Y30se3Jlc3VsdE1hcDpyLHJlc3VsdHM6byx0b2tlblNlYXJjaGVyczplLGZ1bGxTZWFyY2hlcjp0fSl9cmV0dXJue3dlaWdodHM6cyxyZXN1bHRzOm99fX0se2tleTpcIl9hbmFseXplXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgbj1lLmtleSxyPWUuYXJyYXlJbmRleCxvPXZvaWQgMD09PXI/LTE6cixpPWUudmFsdWUsYT1lLnJlY29yZCxjPWUuaW5kZXgsaD10LnRva2VuU2VhcmNoZXJzLGw9dm9pZCAwPT09aD9bXTpoLHU9dC5mdWxsU2VhcmNoZXIsZj12b2lkIDA9PT11P1tdOnUsZD10LnJlc3VsdE1hcCx2PXZvaWQgMD09PWQ/e306ZCxwPXQucmVzdWx0cyxnPXZvaWQgMD09PXA/W106cDtpZihudWxsIT1pKXt2YXIgeT0hMSxtPS0xLGs9MDtpZihcInN0cmluZ1wiPT10eXBlb2YgaSl7dGhpcy5fbG9nKFwiXFxuS2V5OiBcIi5jb25jYXQoXCJcIj09PW4/XCItXCI6bikpO3ZhciBTPWYuc2VhcmNoKGkpO2lmKHRoaXMuX2xvZygnRnVsbCB0ZXh0OiBcIicuY29uY2F0KGksJ1wiLCBzY29yZTogJykuY29uY2F0KFMuc2NvcmUpKSx0aGlzLm9wdGlvbnMudG9rZW5pemUpe2Zvcih2YXIgeD1pLnNwbGl0KHRoaXMub3B0aW9ucy50b2tlblNlcGFyYXRvciksYj1bXSxNPTA7TTxsLmxlbmd0aDtNKz0xKXt2YXIgXz1sW01dO3RoaXMuX2xvZygnXFxuUGF0dGVybjogXCInLmNvbmNhdChfLnBhdHRlcm4sJ1wiJykpO2Zvcih2YXIgTD0hMSx3PTA7dzx4Lmxlbmd0aDt3Kz0xKXt2YXIgQT14W3ddLEM9Xy5zZWFyY2goQSksST17fTtDLmlzTWF0Y2g/KElbQV09Qy5zY29yZSx5PSEwLEw9ITAsYi5wdXNoKEMuc2NvcmUpKTooSVtBXT0xLHRoaXMub3B0aW9ucy5tYXRjaEFsbFRva2Vuc3x8Yi5wdXNoKDEpKSx0aGlzLl9sb2coJ1Rva2VuOiBcIicuY29uY2F0KEEsJ1wiLCBzY29yZTogJykuY29uY2F0KElbQV0pKX1MJiYoays9MSl9bT1iWzBdO2Zvcih2YXIgTz1iLmxlbmd0aCxqPTE7ajxPO2orPTEpbSs9YltqXTttLz1PLHRoaXMuX2xvZyhcIlRva2VuIHNjb3JlIGF2ZXJhZ2U6XCIsbSl9dmFyIFA9Uy5zY29yZTttPi0xJiYoUD0oUCttKS8yKSx0aGlzLl9sb2coXCJTY29yZSBhdmVyYWdlOlwiLFApO3ZhciBGPSF0aGlzLm9wdGlvbnMudG9rZW5pemV8fCF0aGlzLm9wdGlvbnMubWF0Y2hBbGxUb2tlbnN8fGs+PWwubGVuZ3RoO2lmKHRoaXMuX2xvZyhcIlxcbkNoZWNrIE1hdGNoZXM6IFwiLmNvbmNhdChGKSksKHl8fFMuaXNNYXRjaCkmJkYpe3ZhciBUPXZbY107VD9ULm91dHB1dC5wdXNoKHtrZXk6bixhcnJheUluZGV4Om8sdmFsdWU6aSxzY29yZTpQLG1hdGNoZWRJbmRpY2VzOlMubWF0Y2hlZEluZGljZXN9KToodltjXT17aXRlbTphLG91dHB1dDpbe2tleTpuLGFycmF5SW5kZXg6byx2YWx1ZTppLHNjb3JlOlAsbWF0Y2hlZEluZGljZXM6Uy5tYXRjaGVkSW5kaWNlc31dfSxnLnB1c2godltjXSkpfX1lbHNlIGlmKHMoaSkpZm9yKHZhciB6PTAsRT1pLmxlbmd0aDt6PEU7eis9MSl0aGlzLl9hbmFseXplKHtrZXk6bixhcnJheUluZGV4OnosdmFsdWU6aVt6XSxyZWNvcmQ6YSxpbmRleDpjfSx7cmVzdWx0TWFwOnYscmVzdWx0czpnLHRva2VuU2VhcmNoZXJzOmwsZnVsbFNlYXJjaGVyOmZ9KX19fSx7a2V5OlwiX2NvbXB1dGVTY29yZVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dGhpcy5fbG9nKFwiXFxuXFxuQ29tcHV0aW5nIHNjb3JlOlxcblwiKTtmb3IodmFyIG49MCxyPXQubGVuZ3RoO248cjtuKz0xKXtmb3IodmFyIG89dFtuXS5vdXRwdXQsaT1vLmxlbmd0aCxhPTEscz0xLGM9MDtjPGk7Yys9MSl7dmFyIGg9ZT9lW29bY10ua2V5XS53ZWlnaHQ6MSxsPSgxPT09aD9vW2NdLnNjb3JlOm9bY10uc2NvcmV8fC4wMDEpKmg7MSE9PWg/cz1NYXRoLm1pbihzLGwpOihvW2NdLm5TY29yZT1sLGEqPWwpfXRbbl0uc2NvcmU9MT09PXM/YTpzLHRoaXMuX2xvZyh0W25dKX19fSx7a2V5OlwiX3NvcnRcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLl9sb2coXCJcXG5cXG5Tb3J0aW5nLi4uLlwiKSxlLnNvcnQodGhpcy5vcHRpb25zLnNvcnRGbil9fSx7a2V5OlwiX2Zvcm1hdFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PVtdO2lmKHRoaXMub3B0aW9ucy52ZXJib3NlKXt2YXIgbj1bXTt0aGlzLl9sb2coXCJcXG5cXG5PdXRwdXQ6XFxuXFxuXCIsSlNPTi5zdHJpbmdpZnkoZSxmdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCI9PT1yKHQpJiZudWxsIT09dCl7aWYoLTEhPT1uLmluZGV4T2YodCkpcmV0dXJuO24ucHVzaCh0KX1yZXR1cm4gdH0pKSxuPW51bGx9dmFyIG89W107dGhpcy5vcHRpb25zLmluY2x1ZGVNYXRjaGVzJiZvLnB1c2goZnVuY3Rpb24oZSx0KXt2YXIgbj1lLm91dHB1dDt0Lm1hdGNoZXM9W107Zm9yKHZhciByPTAsbz1uLmxlbmd0aDtyPG87cis9MSl7dmFyIGk9bltyXTtpZigwIT09aS5tYXRjaGVkSW5kaWNlcy5sZW5ndGgpe3ZhciBhPXtpbmRpY2VzOmkubWF0Y2hlZEluZGljZXMsdmFsdWU6aS52YWx1ZX07aS5rZXkmJihhLmtleT1pLmtleSksaS5oYXNPd25Qcm9wZXJ0eShcImFycmF5SW5kZXhcIikmJmkuYXJyYXlJbmRleD4tMSYmKGEuYXJyYXlJbmRleD1pLmFycmF5SW5kZXgpLHQubWF0Y2hlcy5wdXNoKGEpfX19KSx0aGlzLm9wdGlvbnMuaW5jbHVkZVNjb3JlJiZvLnB1c2goZnVuY3Rpb24oZSx0KXt0LnNjb3JlPWUuc2NvcmV9KTtmb3IodmFyIGk9MCxhPWUubGVuZ3RoO2k8YTtpKz0xKXt2YXIgcz1lW2ldO2lmKHRoaXMub3B0aW9ucy5pZCYmKHMuaXRlbT10aGlzLm9wdGlvbnMuZ2V0Rm4ocy5pdGVtLHRoaXMub3B0aW9ucy5pZClbMF0pLG8ubGVuZ3RoKXtmb3IodmFyIGM9e2l0ZW06cy5pdGVtfSxoPTAsbD1vLmxlbmd0aDtoPGw7aCs9MSlvW2hdKHMsYyk7dC5wdXNoKGMpfWVsc2UgdC5wdXNoKHMuaXRlbSl9cmV0dXJuIHR9fSx7a2V5OlwiX2xvZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU7dGhpcy5vcHRpb25zLnZlcmJvc2UmJihlPWNvbnNvbGUpLmxvZy5hcHBseShlLGFyZ3VtZW50cyl9fV0pJiZvKHQucHJvdG90eXBlLG4pLGMmJm8odCxjKSxlfSgpO2UuZXhwb3J0cz1jfSxmdW5jdGlvbihlLHQsbil7ZnVuY3Rpb24gcihlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgcj10W25dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLmtleSxyKX19dmFyIG89bigzKSxpPW4oNCksYT1uKDcpLHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbil7dmFyIHI9bi5sb2NhdGlvbixvPXZvaWQgMD09PXI/MDpyLGk9bi5kaXN0YW5jZSxzPXZvaWQgMD09PWk/MTAwOmksYz1uLnRocmVzaG9sZCxoPXZvaWQgMD09PWM/LjY6YyxsPW4ubWF4UGF0dGVybkxlbmd0aCx1PXZvaWQgMD09PWw/MzI6bCxmPW4uaXNDYXNlU2Vuc2l0aXZlLGQ9dm9pZCAwIT09ZiYmZix2PW4udG9rZW5TZXBhcmF0b3IscD12b2lkIDA9PT12Py8gKy9nOnYsZz1uLmZpbmRBbGxNYXRjaGVzLHk9dm9pZCAwIT09ZyYmZyxtPW4ubWluTWF0Y2hDaGFyTGVuZ3RoLGs9dm9pZCAwPT09bT8xOm07IWZ1bmN0aW9uKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0odGhpcyxlKSx0aGlzLm9wdGlvbnM9e2xvY2F0aW9uOm8sZGlzdGFuY2U6cyx0aHJlc2hvbGQ6aCxtYXhQYXR0ZXJuTGVuZ3RoOnUsaXNDYXNlU2Vuc2l0aXZlOmQsdG9rZW5TZXBhcmF0b3I6cCxmaW5kQWxsTWF0Y2hlczp5LG1pbk1hdGNoQ2hhckxlbmd0aDprfSx0aGlzLnBhdHRlcm49dGhpcy5vcHRpb25zLmlzQ2FzZVNlbnNpdGl2ZT90OnQudG9Mb3dlckNhc2UoKSx0aGlzLnBhdHRlcm4ubGVuZ3RoPD11JiYodGhpcy5wYXR0ZXJuQWxwaGFiZXQ9YSh0aGlzLnBhdHRlcm4pKX12YXIgdCxuLHM7cmV0dXJuIHQ9ZSwobj1be2tleTpcInNlYXJjaFwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKHRoaXMub3B0aW9ucy5pc0Nhc2VTZW5zaXRpdmV8fChlPWUudG9Mb3dlckNhc2UoKSksdGhpcy5wYXR0ZXJuPT09ZSlyZXR1cm57aXNNYXRjaDohMCxzY29yZTowLG1hdGNoZWRJbmRpY2VzOltbMCxlLmxlbmd0aC0xXV19O3ZhciB0PXRoaXMub3B0aW9ucyxuPXQubWF4UGF0dGVybkxlbmd0aCxyPXQudG9rZW5TZXBhcmF0b3I7aWYodGhpcy5wYXR0ZXJuLmxlbmd0aD5uKXJldHVybiBvKGUsdGhpcy5wYXR0ZXJuLHIpO3ZhciBhPXRoaXMub3B0aW9ucyxzPWEubG9jYXRpb24sYz1hLmRpc3RhbmNlLGg9YS50aHJlc2hvbGQsbD1hLmZpbmRBbGxNYXRjaGVzLHU9YS5taW5NYXRjaENoYXJMZW5ndGg7cmV0dXJuIGkoZSx0aGlzLnBhdHRlcm4sdGhpcy5wYXR0ZXJuQWxwaGFiZXQse2xvY2F0aW9uOnMsZGlzdGFuY2U6Yyx0aHJlc2hvbGQ6aCxmaW5kQWxsTWF0Y2hlczpsLG1pbk1hdGNoQ2hhckxlbmd0aDp1fSl9fV0pJiZyKHQucHJvdG90eXBlLG4pLHMmJnIodCxzKSxlfSgpO2UuZXhwb3J0cz1zfSxmdW5jdGlvbihlLHQpe3ZhciBuPS9bXFwtXFxbXFxdXFwvXFx7XFx9XFwoXFwpXFwqXFwrXFw/XFwuXFxcXFxcXlxcJFxcfF0vZztlLmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXt2YXIgcj1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06LyArL2csbz1uZXcgUmVnRXhwKHQucmVwbGFjZShuLFwiXFxcXCQmXCIpLnJlcGxhY2UocixcInxcIikpLGk9ZS5tYXRjaChvKSxhPSEhaSxzPVtdO2lmKGEpZm9yKHZhciBjPTAsaD1pLmxlbmd0aDtjPGg7Yys9MSl7dmFyIGw9aVtjXTtzLnB1c2goW2UuaW5kZXhPZihsKSxsLmxlbmd0aC0xXSl9cmV0dXJue3Njb3JlOmE/LjU6MSxpc01hdGNoOmEsbWF0Y2hlZEluZGljZXM6c319fSxmdW5jdGlvbihlLHQsbil7dmFyIHI9big1KSxvPW4oNik7ZS5leHBvcnRzPWZ1bmN0aW9uKGUsdCxuLGkpe2Zvcih2YXIgYT1pLmxvY2F0aW9uLHM9dm9pZCAwPT09YT8wOmEsYz1pLmRpc3RhbmNlLGg9dm9pZCAwPT09Yz8xMDA6YyxsPWkudGhyZXNob2xkLHU9dm9pZCAwPT09bD8uNjpsLGY9aS5maW5kQWxsTWF0Y2hlcyxkPXZvaWQgMCE9PWYmJmYsdj1pLm1pbk1hdGNoQ2hhckxlbmd0aCxwPXZvaWQgMD09PXY/MTp2LGc9cyx5PWUubGVuZ3RoLG09dSxrPWUuaW5kZXhPZih0LGcpLFM9dC5sZW5ndGgseD1bXSxiPTA7Yjx5O2IrPTEpeFtiXT0wO2lmKC0xIT09ayl7dmFyIE09cih0LHtlcnJvcnM6MCxjdXJyZW50TG9jYXRpb246ayxleHBlY3RlZExvY2F0aW9uOmcsZGlzdGFuY2U6aH0pO2lmKG09TWF0aC5taW4oTSxtKSwtMSE9PShrPWUubGFzdEluZGV4T2YodCxnK1MpKSl7dmFyIF89cih0LHtlcnJvcnM6MCxjdXJyZW50TG9jYXRpb246ayxleHBlY3RlZExvY2F0aW9uOmcsZGlzdGFuY2U6aH0pO209TWF0aC5taW4oXyxtKX19az0tMTtmb3IodmFyIEw9W10sdz0xLEE9Uyt5LEM9MTw8Uy0xLEk9MDtJPFM7SSs9MSl7Zm9yKHZhciBPPTAsaj1BO088ajspe3IodCx7ZXJyb3JzOkksY3VycmVudExvY2F0aW9uOmcraixleHBlY3RlZExvY2F0aW9uOmcsZGlzdGFuY2U6aH0pPD1tP089ajpBPWosaj1NYXRoLmZsb29yKChBLU8pLzIrTyl9QT1qO3ZhciBQPU1hdGgubWF4KDEsZy1qKzEpLEY9ZD95Ok1hdGgubWluKGcraix5KStTLFQ9QXJyYXkoRisyKTtUW0YrMV09KDE8PEkpLTE7Zm9yKHZhciB6PUY7ej49UDt6LT0xKXt2YXIgRT16LTEsSz1uW2UuY2hhckF0KEUpXTtpZihLJiYoeFtFXT0xKSxUW3pdPShUW3orMV08PDF8MSkmSywwIT09SSYmKFRbel18PShMW3orMV18TFt6XSk8PDF8MXxMW3orMV0pLFRbel0mQyYmKHc9cih0LHtlcnJvcnM6SSxjdXJyZW50TG9jYXRpb246RSxleHBlY3RlZExvY2F0aW9uOmcsZGlzdGFuY2U6aH0pKTw9bSl7aWYobT13LChrPUUpPD1nKWJyZWFrO1A9TWF0aC5tYXgoMSwyKmctayl9fWlmKHIodCx7ZXJyb3JzOkkrMSxjdXJyZW50TG9jYXRpb246ZyxleHBlY3RlZExvY2F0aW9uOmcsZGlzdGFuY2U6aH0pPm0pYnJlYWs7TD1UfXJldHVybntpc01hdGNoOms+PTAsc2NvcmU6MD09PXc/LjAwMTp3LG1hdGNoZWRJbmRpY2VzOm8oeCxwKX19fSxmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbihlLHQpe3ZhciBuPXQuZXJyb3JzLHI9dm9pZCAwPT09bj8wOm4sbz10LmN1cnJlbnRMb2NhdGlvbixpPXZvaWQgMD09PW8/MDpvLGE9dC5leHBlY3RlZExvY2F0aW9uLHM9dm9pZCAwPT09YT8wOmEsYz10LmRpc3RhbmNlLGg9dm9pZCAwPT09Yz8xMDA6YyxsPXIvZS5sZW5ndGgsdT1NYXRoLmFicyhzLWkpO3JldHVybiBoP2wrdS9oOnU/MTpsfX0sZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9ZnVuY3Rpb24oKXtmb3IodmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOltdLHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOjEsbj1bXSxyPS0xLG89LTEsaT0wLGE9ZS5sZW5ndGg7aTxhO2krPTEpe3ZhciBzPWVbaV07cyYmLTE9PT1yP3I9aTpzfHwtMT09PXJ8fCgobz1pLTEpLXIrMT49dCYmbi5wdXNoKFtyLG9dKSxyPS0xKX1yZXR1cm4gZVtpLTFdJiZpLXI+PXQmJm4ucHVzaChbcixpLTFdKSxufX0sZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PXt9LG49ZS5sZW5ndGgscj0wO3I8bjtyKz0xKXRbZS5jaGFyQXQocildPTA7Zm9yKHZhciBvPTA7bzxuO28rPTEpdFtlLmNoYXJBdChvKV18PTE8PG4tby0xO3JldHVybiB0fX0sZnVuY3Rpb24oZSx0LG4pe3ZhciByPW4oMCk7ZS5leHBvcnRzPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGZ1bmN0aW9uIGUodCxuLG8pe2lmKG4pe3ZhciBpPW4uaW5kZXhPZihcIi5cIiksYT1uLHM9bnVsbDstMSE9PWkmJihhPW4uc2xpY2UoMCxpKSxzPW4uc2xpY2UoaSsxKSk7dmFyIGM9dFthXTtpZihudWxsIT1jKWlmKHN8fFwic3RyaW5nXCIhPXR5cGVvZiBjJiZcIm51bWJlclwiIT10eXBlb2YgYylpZihyKGMpKWZvcih2YXIgaD0wLGw9Yy5sZW5ndGg7aDxsO2grPTEpZShjW2hdLHMsbyk7ZWxzZSBzJiZlKGMscyxvKTtlbHNlIG8ucHVzaChjLnRvU3RyaW5nKCkpfWVsc2Ugby5wdXNoKHQpO3JldHVybiBvfShlLHQsW10pfX1dKX0pO1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiYVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHN5bWJvbE9ic2VydmFibGVQb255ZmlsbDsgfSk7XG5mdW5jdGlvbiBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGwocm9vdCkge1xuXHR2YXIgcmVzdWx0O1xuXHR2YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cblx0aWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicpIHtcblx0XHRpZiAoU3ltYm9sLm9ic2VydmFibGUpIHtcblx0XHRcdHJlc3VsdCA9IFN5bWJvbC5vYnNlcnZhYmxlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHQgPSBTeW1ib2woJ29ic2VydmFibGUnKTtcblx0XHRcdFN5bWJvbC5vYnNlcnZhYmxlID0gcmVzdWx0O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQgPSAnQEBvYnNlcnZhYmxlJztcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbnZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcblxuXG4vKioqLyB9KSxcbi8qIDYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG5cbi8vIEVYVEVSTkFMIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvZnVzZS5qcy9kaXN0L2Z1c2UuanNcbnZhciBkaXN0X2Z1c2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xudmFyIGZ1c2VfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oZGlzdF9mdXNlKTtcblxuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9kZWVwbWVyZ2UvZGlzdC9janMuanNcbnZhciBjanMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xudmFyIGNqc19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjanMpO1xuXG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2VzL2luZGV4LmpzXG52YXIgZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9yZWR1eC5qc1xuXG5cbi8qKlxuICogVGhlc2UgYXJlIHByaXZhdGUgYWN0aW9uIHR5cGVzIHJlc2VydmVkIGJ5IFJlZHV4LlxuICogRm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHlvdSBtdXN0IHJldHVybiB0aGUgY3VycmVudCBzdGF0ZS5cbiAqIElmIHRoZSBjdXJyZW50IHN0YXRlIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLlxuICogRG8gbm90IHJlZmVyZW5jZSB0aGVzZSBhY3Rpb24gdHlwZXMgZGlyZWN0bHkgaW4geW91ciBjb2RlLlxuICovXG52YXIgcmFuZG9tU3RyaW5nID0gZnVuY3Rpb24gcmFuZG9tU3RyaW5nKCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpLnNwbGl0KCcnKS5qb2luKCcuJyk7XG59O1xuXG52YXIgQWN0aW9uVHlwZXMgPSB7XG4gIElOSVQ6IFwiQEByZWR1eC9JTklUXCIgKyByYW5kb21TdHJpbmcoKSxcbiAgUkVQTEFDRTogXCJAQHJlZHV4L1JFUExBQ0VcIiArIHJhbmRvbVN0cmluZygpLFxuICBQUk9CRV9VTktOT1dOX0FDVElPTjogZnVuY3Rpb24gUFJPQkVfVU5LTk9XTl9BQ1RJT04oKSB7XG4gICAgcmV0dXJuIFwiQEByZWR1eC9QUk9CRV9VTktOT1dOX0FDVElPTlwiICsgcmFuZG9tU3RyaW5nKCk7XG4gIH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IG9iaiBUaGUgb2JqZWN0IHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgYXJndW1lbnQgYXBwZWFycyB0byBiZSBhIHBsYWluIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICB2YXIgcHJvdG8gPSBvYmo7XG5cbiAgd2hpbGUgKE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90bykgIT09IG51bGwpIHtcbiAgICBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90byk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikgPT09IHByb3RvO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBSZWR1eCBzdG9yZSB0aGF0IGhvbGRzIHRoZSBzdGF0ZSB0cmVlLlxuICogVGhlIG9ubHkgd2F5IHRvIGNoYW5nZSB0aGUgZGF0YSBpbiB0aGUgc3RvcmUgaXMgdG8gY2FsbCBgZGlzcGF0Y2goKWAgb24gaXQuXG4gKlxuICogVGhlcmUgc2hvdWxkIG9ubHkgYmUgYSBzaW5nbGUgc3RvcmUgaW4geW91ciBhcHAuIFRvIHNwZWNpZnkgaG93IGRpZmZlcmVudFxuICogcGFydHMgb2YgdGhlIHN0YXRlIHRyZWUgcmVzcG9uZCB0byBhY3Rpb25zLCB5b3UgbWF5IGNvbWJpbmUgc2V2ZXJhbCByZWR1Y2Vyc1xuICogaW50byBhIHNpbmdsZSByZWR1Y2VyIGZ1bmN0aW9uIGJ5IHVzaW5nIGBjb21iaW5lUmVkdWNlcnNgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlZHVjZXIgQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG5leHQgc3RhdGUgdHJlZSwgZ2l2ZW5cbiAqIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBhY3Rpb24gdG8gaGFuZGxlLlxuICpcbiAqIEBwYXJhbSB7YW55fSBbcHJlbG9hZGVkU3RhdGVdIFRoZSBpbml0aWFsIHN0YXRlLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICogdG8gaHlkcmF0ZSB0aGUgc3RhdGUgZnJvbSB0aGUgc2VydmVyIGluIHVuaXZlcnNhbCBhcHBzLCBvciB0byByZXN0b3JlIGFcbiAqIHByZXZpb3VzbHkgc2VyaWFsaXplZCB1c2VyIHNlc3Npb24uXG4gKiBJZiB5b3UgdXNlIGBjb21iaW5lUmVkdWNlcnNgIHRvIHByb2R1Y2UgdGhlIHJvb3QgcmVkdWNlciBmdW5jdGlvbiwgdGhpcyBtdXN0IGJlXG4gKiBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZSBhcyBgY29tYmluZVJlZHVjZXJzYCBrZXlzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtlbmhhbmNlcl0gVGhlIHN0b3JlIGVuaGFuY2VyLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICogdG8gZW5oYW5jZSB0aGUgc3RvcmUgd2l0aCB0aGlyZC1wYXJ0eSBjYXBhYmlsaXRpZXMgc3VjaCBhcyBtaWRkbGV3YXJlLFxuICogdGltZSB0cmF2ZWwsIHBlcnNpc3RlbmNlLCBldGMuIFRoZSBvbmx5IHN0b3JlIGVuaGFuY2VyIHRoYXQgc2hpcHMgd2l0aCBSZWR1eFxuICogaXMgYGFwcGx5TWlkZGxld2FyZSgpYC5cbiAqXG4gKiBAcmV0dXJucyB7U3RvcmV9IEEgUmVkdXggc3RvcmUgdGhhdCBsZXRzIHlvdSByZWFkIHRoZSBzdGF0ZSwgZGlzcGF0Y2ggYWN0aW9uc1xuICogYW5kIHN1YnNjcmliZSB0byBjaGFuZ2VzLlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcikge1xuICB2YXIgX3JlZjI7XG5cbiAgaWYgKHR5cGVvZiBwcmVsb2FkZWRTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZW5oYW5jZXIgPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGVuaGFuY2VyID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBhcmd1bWVudHNbM10gPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0l0IGxvb2tzIGxpa2UgeW91IGFyZSBwYXNzaW5nIHNldmVyYWwgc3RvcmUgZW5oYW5jZXJzIHRvICcgKyAnY3JlYXRlU3RvcmUoKS4gVGhpcyBpcyBub3Qgc3VwcG9ydGVkLiBJbnN0ZWFkLCBjb21wb3NlIHRoZW0gJyArICd0b2dldGhlciB0byBhIHNpbmdsZSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcHJlbG9hZGVkU3RhdGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGVuaGFuY2VyID09PSAndW5kZWZpbmVkJykge1xuICAgIGVuaGFuY2VyID0gcHJlbG9hZGVkU3RhdGU7XG4gICAgcHJlbG9hZGVkU3RhdGUgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIGVuaGFuY2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuaGFuY2VyKGNyZWF0ZVN0b3JlKShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSk7XG4gIH1cblxuICBpZiAodHlwZW9mIHJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSByZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgY3VycmVudFJlZHVjZXIgPSByZWR1Y2VyO1xuICB2YXIgY3VycmVudFN0YXRlID0gcHJlbG9hZGVkU3RhdGU7XG4gIHZhciBjdXJyZW50TGlzdGVuZXJzID0gW107XG4gIHZhciBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycztcbiAgdmFyIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgLyoqXG4gICAqIFRoaXMgbWFrZXMgYSBzaGFsbG93IGNvcHkgb2YgY3VycmVudExpc3RlbmVycyBzbyB3ZSBjYW4gdXNlXG4gICAqIG5leHRMaXN0ZW5lcnMgYXMgYSB0ZW1wb3JhcnkgbGlzdCB3aGlsZSBkaXNwYXRjaGluZy5cbiAgICpcbiAgICogVGhpcyBwcmV2ZW50cyBhbnkgYnVncyBhcm91bmQgY29uc3VtZXJzIGNhbGxpbmdcbiAgICogc3Vic2NyaWJlL3Vuc3Vic2NyaWJlIGluIHRoZSBtaWRkbGUgb2YgYSBkaXNwYXRjaC5cbiAgICovXG5cbiAgZnVuY3Rpb24gZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpIHtcbiAgICBpZiAobmV4dExpc3RlbmVycyA9PT0gY3VycmVudExpc3RlbmVycykge1xuICAgICAgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMuc2xpY2UoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFJlYWRzIHRoZSBzdGF0ZSB0cmVlIG1hbmFnZWQgYnkgdGhlIHN0b3JlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7YW55fSBUaGUgY3VycmVudCBzdGF0ZSB0cmVlIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG1heSBub3QgY2FsbCBzdG9yZS5nZXRTdGF0ZSgpIHdoaWxlIHRoZSByZWR1Y2VyIGlzIGV4ZWN1dGluZy4gJyArICdUaGUgcmVkdWNlciBoYXMgYWxyZWFkeSByZWNlaXZlZCB0aGUgc3RhdGUgYXMgYW4gYXJndW1lbnQuICcgKyAnUGFzcyBpdCBkb3duIGZyb20gdGhlIHRvcCByZWR1Y2VyIGluc3RlYWQgb2YgcmVhZGluZyBpdCBmcm9tIHRoZSBzdG9yZS4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVudFN0YXRlO1xuICB9XG4gIC8qKlxuICAgKiBBZGRzIGEgY2hhbmdlIGxpc3RlbmVyLiBJdCB3aWxsIGJlIGNhbGxlZCBhbnkgdGltZSBhbiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCxcbiAgICogYW5kIHNvbWUgcGFydCBvZiB0aGUgc3RhdGUgdHJlZSBtYXkgcG90ZW50aWFsbHkgaGF2ZSBjaGFuZ2VkLiBZb3UgbWF5IHRoZW5cbiAgICogY2FsbCBgZ2V0U3RhdGUoKWAgdG8gcmVhZCB0aGUgY3VycmVudCBzdGF0ZSB0cmVlIGluc2lkZSB0aGUgY2FsbGJhY2suXG4gICAqXG4gICAqIFlvdSBtYXkgY2FsbCBgZGlzcGF0Y2goKWAgZnJvbSBhIGNoYW5nZSBsaXN0ZW5lciwgd2l0aCB0aGUgZm9sbG93aW5nXG4gICAqIGNhdmVhdHM6XG4gICAqXG4gICAqIDEuIFRoZSBzdWJzY3JpcHRpb25zIGFyZSBzbmFwc2hvdHRlZCBqdXN0IGJlZm9yZSBldmVyeSBgZGlzcGF0Y2goKWAgY2FsbC5cbiAgICogSWYgeW91IHN1YnNjcmliZSBvciB1bnN1YnNjcmliZSB3aGlsZSB0aGUgbGlzdGVuZXJzIGFyZSBiZWluZyBpbnZva2VkLCB0aGlzXG4gICAqIHdpbGwgbm90IGhhdmUgYW55IGVmZmVjdCBvbiB0aGUgYGRpc3BhdGNoKClgIHRoYXQgaXMgY3VycmVudGx5IGluIHByb2dyZXNzLlxuICAgKiBIb3dldmVyLCB0aGUgbmV4dCBgZGlzcGF0Y2goKWAgY2FsbCwgd2hldGhlciBuZXN0ZWQgb3Igbm90LCB3aWxsIHVzZSBhIG1vcmVcbiAgICogcmVjZW50IHNuYXBzaG90IG9mIHRoZSBzdWJzY3JpcHRpb24gbGlzdC5cbiAgICpcbiAgICogMi4gVGhlIGxpc3RlbmVyIHNob3VsZCBub3QgZXhwZWN0IHRvIHNlZSBhbGwgc3RhdGUgY2hhbmdlcywgYXMgdGhlIHN0YXRlXG4gICAqIG1pZ2h0IGhhdmUgYmVlbiB1cGRhdGVkIG11bHRpcGxlIHRpbWVzIGR1cmluZyBhIG5lc3RlZCBgZGlzcGF0Y2goKWAgYmVmb3JlXG4gICAqIHRoZSBsaXN0ZW5lciBpcyBjYWxsZWQuIEl0IGlzLCBob3dldmVyLCBndWFyYW50ZWVkIHRoYXQgYWxsIHN1YnNjcmliZXJzXG4gICAqIHJlZ2lzdGVyZWQgYmVmb3JlIHRoZSBgZGlzcGF0Y2goKWAgc3RhcnRlZCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBsYXRlc3RcbiAgICogc3RhdGUgYnkgdGhlIHRpbWUgaXQgZXhpdHMuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIEEgY2FsbGJhY2sgdG8gYmUgaW52b2tlZCBvbiBldmVyeSBkaXNwYXRjaC5cbiAgICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGlzIGNoYW5nZSBsaXN0ZW5lci5cbiAgICovXG5cblxuICBmdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBsaXN0ZW5lciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtYXkgbm90IGNhbGwgc3RvcmUuc3Vic2NyaWJlKCkgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiAnICsgJ0lmIHlvdSB3b3VsZCBsaWtlIHRvIGJlIG5vdGlmaWVkIGFmdGVyIHRoZSBzdG9yZSBoYXMgYmVlbiB1cGRhdGVkLCBzdWJzY3JpYmUgZnJvbSBhICcgKyAnY29tcG9uZW50IGFuZCBpbnZva2Ugc3RvcmUuZ2V0U3RhdGUoKSBpbiB0aGUgY2FsbGJhY2sgdG8gYWNjZXNzIHRoZSBsYXRlc3Qgc3RhdGUuICcgKyAnU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL2FwaS1yZWZlcmVuY2Uvc3RvcmUjc3Vic2NyaWJlKGxpc3RlbmVyKSBmb3IgbW9yZSBkZXRhaWxzLicpO1xuICAgIH1cblxuICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICBuZXh0TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIGlmICghaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbWF5IG5vdCB1bnN1YnNjcmliZSBmcm9tIGEgc3RvcmUgbGlzdGVuZXIgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiAnICsgJ1NlZSBodHRwczovL3JlZHV4LmpzLm9yZy9hcGktcmVmZXJlbmNlL3N0b3JlI3N1YnNjcmliZShsaXN0ZW5lcikgZm9yIG1vcmUgZGV0YWlscy4nKTtcbiAgICAgIH1cblxuICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgICB2YXIgaW5kZXggPSBuZXh0TGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgbmV4dExpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgYW4gYWN0aW9uLiBJdCBpcyB0aGUgb25seSB3YXkgdG8gdHJpZ2dlciBhIHN0YXRlIGNoYW5nZS5cbiAgICpcbiAgICogVGhlIGByZWR1Y2VyYCBmdW5jdGlvbiwgdXNlZCB0byBjcmVhdGUgdGhlIHN0b3JlLCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZVxuICAgKiBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBnaXZlbiBgYWN0aW9uYC4gSXRzIHJldHVybiB2YWx1ZSB3aWxsXG4gICAqIGJlIGNvbnNpZGVyZWQgdGhlICoqbmV4dCoqIHN0YXRlIG9mIHRoZSB0cmVlLCBhbmQgdGhlIGNoYW5nZSBsaXN0ZW5lcnNcbiAgICogd2lsbCBiZSBub3RpZmllZC5cbiAgICpcbiAgICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb25seSBzdXBwb3J0cyBwbGFpbiBvYmplY3QgYWN0aW9ucy4gSWYgeW91IHdhbnQgdG9cbiAgICogZGlzcGF0Y2ggYSBQcm9taXNlLCBhbiBPYnNlcnZhYmxlLCBhIHRodW5rLCBvciBzb21ldGhpbmcgZWxzZSwgeW91IG5lZWQgdG9cbiAgICogd3JhcCB5b3VyIHN0b3JlIGNyZWF0aW5nIGZ1bmN0aW9uIGludG8gdGhlIGNvcnJlc3BvbmRpbmcgbWlkZGxld2FyZS4gRm9yXG4gICAqIGV4YW1wbGUsIHNlZSB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgdGhlIGByZWR1eC10aHVua2AgcGFja2FnZS4gRXZlbiB0aGVcbiAgICogbWlkZGxld2FyZSB3aWxsIGV2ZW50dWFsbHkgZGlzcGF0Y2ggcGxhaW4gb2JqZWN0IGFjdGlvbnMgdXNpbmcgdGhpcyBtZXRob2QuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gQSBwbGFpbiBvYmplY3QgcmVwcmVzZW50aW5nIOKAnHdoYXQgY2hhbmdlZOKAnS4gSXQgaXNcbiAgICogYSBnb29kIGlkZWEgdG8ga2VlcCBhY3Rpb25zIHNlcmlhbGl6YWJsZSBzbyB5b3UgY2FuIHJlY29yZCBhbmQgcmVwbGF5IHVzZXJcbiAgICogc2Vzc2lvbnMsIG9yIHVzZSB0aGUgdGltZSB0cmF2ZWxsaW5nIGByZWR1eC1kZXZ0b29sc2AuIEFuIGFjdGlvbiBtdXN0IGhhdmVcbiAgICogYSBgdHlwZWAgcHJvcGVydHkgd2hpY2ggbWF5IG5vdCBiZSBgdW5kZWZpbmVkYC4gSXQgaXMgYSBnb29kIGlkZWEgdG8gdXNlXG4gICAqIHN0cmluZyBjb25zdGFudHMgZm9yIGFjdGlvbiB0eXBlcy5cbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gRm9yIGNvbnZlbmllbmNlLCB0aGUgc2FtZSBhY3Rpb24gb2JqZWN0IHlvdSBkaXNwYXRjaGVkLlxuICAgKlxuICAgKiBOb3RlIHRoYXQsIGlmIHlvdSB1c2UgYSBjdXN0b20gbWlkZGxld2FyZSwgaXQgbWF5IHdyYXAgYGRpc3BhdGNoKClgIHRvXG4gICAqIHJldHVybiBzb21ldGhpbmcgZWxzZSAoZm9yIGV4YW1wbGUsIGEgUHJvbWlzZSB5b3UgY2FuIGF3YWl0KS5cbiAgICovXG5cblxuICBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QoYWN0aW9uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG11c3QgYmUgcGxhaW4gb2JqZWN0cy4gJyArICdVc2UgY3VzdG9tIG1pZGRsZXdhcmUgZm9yIGFzeW5jIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24udHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtYXkgbm90IGhhdmUgYW4gdW5kZWZpbmVkIFwidHlwZVwiIHByb3BlcnR5LiAnICsgJ0hhdmUgeW91IG1pc3NwZWxsZWQgYSBjb25zdGFudD8nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VycyBtYXkgbm90IGRpc3BhdGNoIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSB0cnVlO1xuICAgICAgY3VycmVudFN0YXRlID0gY3VycmVudFJlZHVjZXIoY3VycmVudFN0YXRlLCBhY3Rpb24pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGxpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMgPSBuZXh0TGlzdGVuZXJzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGlvbjtcbiAgfVxuICAvKipcbiAgICogUmVwbGFjZXMgdGhlIHJlZHVjZXIgY3VycmVudGx5IHVzZWQgYnkgdGhlIHN0b3JlIHRvIGNhbGN1bGF0ZSB0aGUgc3RhdGUuXG4gICAqXG4gICAqIFlvdSBtaWdodCBuZWVkIHRoaXMgaWYgeW91ciBhcHAgaW1wbGVtZW50cyBjb2RlIHNwbGl0dGluZyBhbmQgeW91IHdhbnQgdG9cbiAgICogbG9hZCBzb21lIG9mIHRoZSByZWR1Y2VycyBkeW5hbWljYWxseS4gWW91IG1pZ2h0IGFsc28gbmVlZCB0aGlzIGlmIHlvdVxuICAgKiBpbXBsZW1lbnQgYSBob3QgcmVsb2FkaW5nIG1lY2hhbmlzbSBmb3IgUmVkdXguXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHRSZWR1Y2VyIFRoZSByZWR1Y2VyIGZvciB0aGUgc3RvcmUgdG8gdXNlIGluc3RlYWQuXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VSZWR1Y2VyKG5leHRSZWR1Y2VyKSB7XG4gICAgaWYgKHR5cGVvZiBuZXh0UmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgbmV4dFJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBjdXJyZW50UmVkdWNlciA9IG5leHRSZWR1Y2VyOyAvLyBUaGlzIGFjdGlvbiBoYXMgYSBzaW1pbGlhciBlZmZlY3QgdG8gQWN0aW9uVHlwZXMuSU5JVC5cbiAgICAvLyBBbnkgcmVkdWNlcnMgdGhhdCBleGlzdGVkIGluIGJvdGggdGhlIG5ldyBhbmQgb2xkIHJvb3RSZWR1Y2VyXG4gICAgLy8gd2lsbCByZWNlaXZlIHRoZSBwcmV2aW91cyBzdGF0ZS4gVGhpcyBlZmZlY3RpdmVseSBwb3B1bGF0ZXNcbiAgICAvLyB0aGUgbmV3IHN0YXRlIHRyZWUgd2l0aCBhbnkgcmVsZXZhbnQgZGF0YSBmcm9tIHRoZSBvbGQgb25lLlxuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQWN0aW9uVHlwZXMuUkVQTEFDRVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBJbnRlcm9wZXJhYmlsaXR5IHBvaW50IGZvciBvYnNlcnZhYmxlL3JlYWN0aXZlIGxpYnJhcmllcy5cbiAgICogQHJldHVybnMge29ic2VydmFibGV9IEEgbWluaW1hbCBvYnNlcnZhYmxlIG9mIHN0YXRlIGNoYW5nZXMuXG4gICAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgdGhlIG9ic2VydmFibGUgcHJvcG9zYWw6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9ic2VydmFibGVcbiAgICovXG5cblxuICBmdW5jdGlvbiBvYnNlcnZhYmxlKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIG91dGVyU3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgIHJldHVybiBfcmVmID0ge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbWluaW1hbCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbiBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JzZXJ2ZXIgQW55IG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIGFzIGFuIG9ic2VydmVyLlxuICAgICAgICogVGhlIG9ic2VydmVyIG9iamVjdCBzaG91bGQgaGF2ZSBhIGBuZXh0YCBtZXRob2QuXG4gICAgICAgKiBAcmV0dXJucyB7c3Vic2NyaXB0aW9ufSBBbiBvYmplY3Qgd2l0aCBhbiBgdW5zdWJzY3JpYmVgIG1ldGhvZCB0aGF0IGNhblxuICAgICAgICogYmUgdXNlZCB0byB1bnN1YnNjcmliZSB0aGUgb2JzZXJ2YWJsZSBmcm9tIHRoZSBzdG9yZSwgYW5kIHByZXZlbnQgZnVydGhlclxuICAgICAgICogZW1pc3Npb24gb2YgdmFsdWVzIGZyb20gdGhlIG9ic2VydmFibGUuXG4gICAgICAgKi9cbiAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JzZXJ2ZXIgIT09ICdvYmplY3QnIHx8IG9ic2VydmVyID09PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgdGhlIG9ic2VydmVyIHRvIGJlIGFuIG9iamVjdC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9ic2VydmVTdGF0ZSgpIHtcbiAgICAgICAgICBpZiAob2JzZXJ2ZXIubmV4dCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChnZXRTdGF0ZSgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvYnNlcnZlU3RhdGUoKTtcbiAgICAgICAgdmFyIHVuc3Vic2NyaWJlID0gb3V0ZXJTdWJzY3JpYmUob2JzZXJ2ZVN0YXRlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1bnN1YnNjcmliZTogdW5zdWJzY3JpYmVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LCBfcmVmW2VzW1wiYVwiIC8qIGRlZmF1bHQgKi9dXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sIF9yZWY7XG4gIH0gLy8gV2hlbiBhIHN0b3JlIGlzIGNyZWF0ZWQsIGFuIFwiSU5JVFwiIGFjdGlvbiBpcyBkaXNwYXRjaGVkIHNvIHRoYXQgZXZlcnlcbiAgLy8gcmVkdWNlciByZXR1cm5zIHRoZWlyIGluaXRpYWwgc3RhdGUuIFRoaXMgZWZmZWN0aXZlbHkgcG9wdWxhdGVzXG4gIC8vIHRoZSBpbml0aWFsIHN0YXRlIHRyZWUuXG5cblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuSU5JVFxuICB9KTtcbiAgcmV0dXJuIF9yZWYyID0ge1xuICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcbiAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXG4gICAgcmVwbGFjZVJlZHVjZXI6IHJlcGxhY2VSZWR1Y2VyXG4gIH0sIF9yZWYyW2VzW1wiYVwiIC8qIGRlZmF1bHQgKi9dXSA9IG9ic2VydmFibGUsIF9yZWYyO1xufVxuXG4vKipcbiAqIFByaW50cyBhIHdhcm5pbmcgaW4gdGhlIGNvbnNvbGUgaWYgaXQgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSB3YXJuaW5nIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG5cblxuICB0cnkge1xuICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgaWYgeW91IGVuYWJsZVxuICAgIC8vIFwiYnJlYWsgb24gYWxsIGV4Y2VwdGlvbnNcIiBpbiB5b3VyIGNvbnNvbGUsXG4gICAgLy8gaXQgd291bGQgcGF1c2UgdGhlIGV4ZWN1dGlvbiBhdCB0aGlzIGxpbmUuXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9IGNhdGNoIChlKSB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWVtcHR5XG5cbn1cblxuZnVuY3Rpb24gZ2V0VW5kZWZpbmVkU3RhdGVFcnJvck1lc3NhZ2Uoa2V5LCBhY3Rpb24pIHtcbiAgdmFyIGFjdGlvblR5cGUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGU7XG4gIHZhciBhY3Rpb25EZXNjcmlwdGlvbiA9IGFjdGlvblR5cGUgJiYgXCJhY3Rpb24gXFxcIlwiICsgU3RyaW5nKGFjdGlvblR5cGUpICsgXCJcXFwiXCIgfHwgJ2FuIGFjdGlvbic7XG4gIHJldHVybiBcIkdpdmVuIFwiICsgYWN0aW9uRGVzY3JpcHRpb24gKyBcIiwgcmVkdWNlciBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgcmV0dXJuZWQgdW5kZWZpbmVkLiBcIiArIFwiVG8gaWdub3JlIGFuIGFjdGlvbiwgeW91IG11c3QgZXhwbGljaXRseSByZXR1cm4gdGhlIHByZXZpb3VzIHN0YXRlLiBcIiArIFwiSWYgeW91IHdhbnQgdGhpcyByZWR1Y2VyIHRvIGhvbGQgbm8gdmFsdWUsIHlvdSBjYW4gcmV0dXJuIG51bGwgaW5zdGVhZCBvZiB1bmRlZmluZWQuXCI7XG59XG5cbmZ1bmN0aW9uIGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2UoaW5wdXRTdGF0ZSwgcmVkdWNlcnMsIGFjdGlvbiwgdW5leHBlY3RlZEtleUNhY2hlKSB7XG4gIHZhciByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgdmFyIGFyZ3VtZW50TmFtZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gQWN0aW9uVHlwZXMuSU5JVCA/ICdwcmVsb2FkZWRTdGF0ZSBhcmd1bWVudCBwYXNzZWQgdG8gY3JlYXRlU3RvcmUnIDogJ3ByZXZpb3VzIHN0YXRlIHJlY2VpdmVkIGJ5IHRoZSByZWR1Y2VyJztcblxuICBpZiAocmVkdWNlcktleXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICdTdG9yZSBkb2VzIG5vdCBoYXZlIGEgdmFsaWQgcmVkdWNlci4gTWFrZSBzdXJlIHRoZSBhcmd1bWVudCBwYXNzZWQgJyArICd0byBjb21iaW5lUmVkdWNlcnMgaXMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgcmVkdWNlcnMuJztcbiAgfVxuXG4gIGlmICghaXNQbGFpbk9iamVjdChpbnB1dFN0YXRlKSkge1xuICAgIHJldHVybiBcIlRoZSBcIiArIGFyZ3VtZW50TmFtZSArIFwiIGhhcyB1bmV4cGVjdGVkIHR5cGUgb2YgXFxcIlwiICsge30udG9TdHJpbmcuY2FsbChpbnB1dFN0YXRlKS5tYXRjaCgvXFxzKFthLXp8QS1aXSspLylbMV0gKyBcIlxcXCIuIEV4cGVjdGVkIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgXCIgKyAoXCJrZXlzOiBcXFwiXCIgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHZhciB1bmV4cGVjdGVkS2V5cyA9IE9iamVjdC5rZXlzKGlucHV0U3RhdGUpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuICFyZWR1Y2Vycy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF1bmV4cGVjdGVkS2V5Q2FjaGVba2V5XTtcbiAgfSk7XG4gIHVuZXhwZWN0ZWRLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHVuZXhwZWN0ZWRLZXlDYWNoZVtrZXldID0gdHJ1ZTtcbiAgfSk7XG4gIGlmIChhY3Rpb24gJiYgYWN0aW9uLnR5cGUgPT09IEFjdGlvblR5cGVzLlJFUExBQ0UpIHJldHVybjtcblxuICBpZiAodW5leHBlY3RlZEtleXMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBcIlVuZXhwZWN0ZWQgXCIgKyAodW5leHBlY3RlZEtleXMubGVuZ3RoID4gMSA/ICdrZXlzJyA6ICdrZXknKSArIFwiIFwiICsgKFwiXFxcIlwiICsgdW5leHBlY3RlZEtleXMuam9pbignXCIsIFwiJykgKyBcIlxcXCIgZm91bmQgaW4gXCIgKyBhcmd1bWVudE5hbWUgKyBcIi4gXCIpICsgXCJFeHBlY3RlZCB0byBmaW5kIG9uZSBvZiB0aGUga25vd24gcmVkdWNlciBrZXlzIGluc3RlYWQ6IFwiICsgKFwiXFxcIlwiICsgcmVkdWNlcktleXMuam9pbignXCIsIFwiJykgKyBcIlxcXCIuIFVuZXhwZWN0ZWQga2V5cyB3aWxsIGJlIGlnbm9yZWQuXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFJlZHVjZXJTaGFwZShyZWR1Y2Vycykge1xuICBPYmplY3Qua2V5cyhyZWR1Y2VycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHJlZHVjZXIgPSByZWR1Y2Vyc1trZXldO1xuICAgIHZhciBpbml0aWFsU3RhdGUgPSByZWR1Y2VyKHVuZGVmaW5lZCwge1xuICAgICAgdHlwZTogQWN0aW9uVHlwZXMuSU5JVFxuICAgIH0pO1xuXG4gICAgaWYgKHR5cGVvZiBpbml0aWFsU3RhdGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWR1Y2VyIFxcXCJcIiArIGtleSArIFwiXFxcIiByZXR1cm5lZCB1bmRlZmluZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uLiBcIiArIFwiSWYgdGhlIHN0YXRlIHBhc3NlZCB0byB0aGUgcmVkdWNlciBpcyB1bmRlZmluZWQsIHlvdSBtdXN0IFwiICsgXCJleHBsaWNpdGx5IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5IFwiICsgXCJub3QgYmUgdW5kZWZpbmVkLiBJZiB5b3UgZG9uJ3Qgd2FudCB0byBzZXQgYSB2YWx1ZSBmb3IgdGhpcyByZWR1Y2VyLCBcIiArIFwieW91IGNhbiB1c2UgbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZC5cIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZWR1Y2VyKHVuZGVmaW5lZCwge1xuICAgICAgdHlwZTogQWN0aW9uVHlwZXMuUFJPQkVfVU5LTk9XTl9BQ1RJT04oKVxuICAgIH0pID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVkdWNlciBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgcmV0dXJuZWQgdW5kZWZpbmVkIHdoZW4gcHJvYmVkIHdpdGggYSByYW5kb20gdHlwZS4gXCIgKyAoXCJEb24ndCB0cnkgdG8gaGFuZGxlIFwiICsgQWN0aW9uVHlwZXMuSU5JVCArIFwiIG9yIG90aGVyIGFjdGlvbnMgaW4gXFxcInJlZHV4LypcXFwiIFwiKSArIFwibmFtZXNwYWNlLiBUaGV5IGFyZSBjb25zaWRlcmVkIHByaXZhdGUuIEluc3RlYWQsIHlvdSBtdXN0IHJldHVybiB0aGUgXCIgKyBcImN1cnJlbnQgc3RhdGUgZm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHVubGVzcyBpdCBpcyB1bmRlZmluZWQsIFwiICsgXCJpbiB3aGljaCBjYXNlIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZSwgcmVnYXJkbGVzcyBvZiB0aGUgXCIgKyBcImFjdGlvbiB0eXBlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgbm90IGJlIHVuZGVmaW5lZCwgYnV0IGNhbiBiZSBudWxsLlwiKTtcbiAgICB9XG4gIH0pO1xufVxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBkaWZmZXJlbnQgcmVkdWNlciBmdW5jdGlvbnMsIGludG8gYSBzaW5nbGVcbiAqIHJlZHVjZXIgZnVuY3Rpb24uIEl0IHdpbGwgY2FsbCBldmVyeSBjaGlsZCByZWR1Y2VyLCBhbmQgZ2F0aGVyIHRoZWlyIHJlc3VsdHNcbiAqIGludG8gYSBzaW5nbGUgc3RhdGUgb2JqZWN0LCB3aG9zZSBrZXlzIGNvcnJlc3BvbmQgdG8gdGhlIGtleXMgb2YgdGhlIHBhc3NlZFxuICogcmVkdWNlciBmdW5jdGlvbnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHJlZHVjZXJzIEFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgY29ycmVzcG9uZCB0byBkaWZmZXJlbnRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zIHRoYXQgbmVlZCB0byBiZSBjb21iaW5lZCBpbnRvIG9uZS4gT25lIGhhbmR5IHdheSB0byBvYnRhaW5cbiAqIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzIHJlZHVjZXJzYCBzeW50YXguIFRoZSByZWR1Y2VycyBtYXkgbmV2ZXIgcmV0dXJuXG4gKiB1bmRlZmluZWQgZm9yIGFueSBhY3Rpb24uIEluc3RlYWQsIHRoZXkgc2hvdWxkIHJldHVybiB0aGVpciBpbml0aWFsIHN0YXRlXG4gKiBpZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZW0gd2FzIHVuZGVmaW5lZCwgYW5kIHRoZSBjdXJyZW50IHN0YXRlIGZvciBhbnlcbiAqIHVucmVjb2duaXplZCBhY3Rpb24uXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIHJlZHVjZXIgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGV2ZXJ5IHJlZHVjZXIgaW5zaWRlIHRoZVxuICogcGFzc2VkIG9iamVjdCwgYW5kIGJ1aWxkcyBhIHN0YXRlIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlLlxuICovXG5cblxuZnVuY3Rpb24gY29tYmluZVJlZHVjZXJzKHJlZHVjZXJzKSB7XG4gIHZhciByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgdmFyIGZpbmFsUmVkdWNlcnMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJlZHVjZXJLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IHJlZHVjZXJLZXlzW2ldO1xuXG4gICAgaWYgKGZhbHNlKSB7fVxuXG4gICAgaWYgKHR5cGVvZiByZWR1Y2Vyc1trZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmaW5hbFJlZHVjZXJzW2tleV0gPSByZWR1Y2Vyc1trZXldO1xuICAgIH1cbiAgfVxuXG4gIHZhciBmaW5hbFJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMoZmluYWxSZWR1Y2Vycyk7IC8vIFRoaXMgaXMgdXNlZCB0byBtYWtlIHN1cmUgd2UgZG9uJ3Qgd2FybiBhYm91dCB0aGUgc2FtZVxuICAvLyBrZXlzIG11bHRpcGxlIHRpbWVzLlxuXG4gIHZhciB1bmV4cGVjdGVkS2V5Q2FjaGU7XG5cbiAgaWYgKGZhbHNlKSB7fVxuXG4gIHZhciBzaGFwZUFzc2VydGlvbkVycm9yO1xuXG4gIHRyeSB7XG4gICAgYXNzZXJ0UmVkdWNlclNoYXBlKGZpbmFsUmVkdWNlcnMpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgc2hhcGVBc3NlcnRpb25FcnJvciA9IGU7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gY29tYmluYXRpb24oc3RhdGUsIGFjdGlvbikge1xuICAgIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICBzdGF0ZSA9IHt9O1xuICAgIH1cblxuICAgIGlmIChzaGFwZUFzc2VydGlvbkVycm9yKSB7XG4gICAgICB0aHJvdyBzaGFwZUFzc2VydGlvbkVycm9yO1xuICAgIH1cblxuICAgIGlmIChmYWxzZSkgeyB2YXIgd2FybmluZ01lc3NhZ2U7IH1cblxuICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgdmFyIG5leHRTdGF0ZSA9IHt9O1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGZpbmFsUmVkdWNlcktleXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2tleSA9IGZpbmFsUmVkdWNlcktleXNbX2ldO1xuICAgICAgdmFyIHJlZHVjZXIgPSBmaW5hbFJlZHVjZXJzW19rZXldO1xuICAgICAgdmFyIHByZXZpb3VzU3RhdGVGb3JLZXkgPSBzdGF0ZVtfa2V5XTtcbiAgICAgIHZhciBuZXh0U3RhdGVGb3JLZXkgPSByZWR1Y2VyKHByZXZpb3VzU3RhdGVGb3JLZXksIGFjdGlvbik7XG5cbiAgICAgIGlmICh0eXBlb2YgbmV4dFN0YXRlRm9yS2V5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgZXJyb3JNZXNzYWdlID0gZ2V0VW5kZWZpbmVkU3RhdGVFcnJvck1lc3NhZ2UoX2tleSwgYWN0aW9uKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgICB9XG5cbiAgICAgIG5leHRTdGF0ZVtfa2V5XSA9IG5leHRTdGF0ZUZvcktleTtcbiAgICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IG5leHRTdGF0ZUZvcktleSAhPT0gcHJldmlvdXNTdGF0ZUZvcktleTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzQ2hhbmdlZCA/IG5leHRTdGF0ZSA6IHN0YXRlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb25DcmVhdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb24gY3JlYXRvcnMsIGludG8gYW4gb2JqZWN0IHdpdGggdGhlXG4gKiBzYW1lIGtleXMsIGJ1dCB3aXRoIGV2ZXJ5IGZ1bmN0aW9uIHdyYXBwZWQgaW50byBhIGBkaXNwYXRjaGAgY2FsbCBzbyB0aGV5XG4gKiBtYXkgYmUgaW52b2tlZCBkaXJlY3RseS4gVGhpcyBpcyBqdXN0IGEgY29udmVuaWVuY2UgbWV0aG9kLCBhcyB5b3UgY2FuIGNhbGxcbiAqIGBzdG9yZS5kaXNwYXRjaChNeUFjdGlvbkNyZWF0b3JzLmRvU29tZXRoaW5nKCkpYCB5b3Vyc2VsZiBqdXN0IGZpbmUuXG4gKlxuICogRm9yIGNvbnZlbmllbmNlLCB5b3UgY2FuIGFsc28gcGFzcyBhbiBhY3Rpb24gY3JlYXRvciBhcyB0aGUgZmlyc3QgYXJndW1lbnQsXG4gKiBhbmQgZ2V0IGEgZGlzcGF0Y2ggd3JhcHBlZCBmdW5jdGlvbiBpbiByZXR1cm4uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R9IGFjdGlvbkNyZWF0b3JzIEFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGFjdGlvblxuICogY3JlYXRvciBmdW5jdGlvbnMuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzYFxuICogc3ludGF4LiBZb3UgbWF5IGFsc28gcGFzcyBhIHNpbmdsZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNwYXRjaCBUaGUgYGRpc3BhdGNoYCBmdW5jdGlvbiBhdmFpbGFibGUgb24geW91ciBSZWR1eFxuICogc3RvcmUuXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufE9iamVjdH0gVGhlIG9iamVjdCBtaW1pY2tpbmcgdGhlIG9yaWdpbmFsIG9iamVjdCwgYnV0IHdpdGhcbiAqIGV2ZXJ5IGFjdGlvbiBjcmVhdG9yIHdyYXBwZWQgaW50byB0aGUgYGRpc3BhdGNoYCBjYWxsLiBJZiB5b3UgcGFzc2VkIGFcbiAqIGZ1bmN0aW9uIGFzIGBhY3Rpb25DcmVhdG9yc2AsIHRoZSByZXR1cm4gdmFsdWUgd2lsbCBhbHNvIGJlIGEgc2luZ2xlXG4gKiBmdW5jdGlvbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIHtcbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyAhPT0gJ29iamVjdCcgfHwgYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJiaW5kQWN0aW9uQ3JlYXRvcnMgZXhwZWN0ZWQgYW4gb2JqZWN0IG9yIGEgZnVuY3Rpb24sIGluc3RlYWQgcmVjZWl2ZWQgXCIgKyAoYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgYWN0aW9uQ3JlYXRvcnMpICsgXCIuIFwiICsgXCJEaWQgeW91IHdyaXRlIFxcXCJpbXBvcnQgQWN0aW9uQ3JlYXRvcnMgZnJvbVxcXCIgaW5zdGVhZCBvZiBcXFwiaW1wb3J0ICogYXMgQWN0aW9uQ3JlYXRvcnMgZnJvbVxcXCI/XCIpO1xuICB9XG5cbiAgdmFyIGJvdW5kQWN0aW9uQ3JlYXRvcnMgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gYWN0aW9uQ3JlYXRvcnMpIHtcbiAgICB2YXIgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JzW2tleV07XG5cbiAgICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGJvdW5kQWN0aW9uQ3JlYXRvcnNba2V5XSA9IGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm91bmRBY3Rpb25DcmVhdG9ycztcbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpKTtcbiAgfVxuXG4gIGlmIChlbnVtZXJhYmxlT25seSkga2V5cyA9IGtleXMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgfSk7XG4gIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vKipcbiAqIENvbXBvc2VzIHNpbmdsZS1hcmd1bWVudCBmdW5jdGlvbnMgZnJvbSByaWdodCB0byBsZWZ0LiBUaGUgcmlnaHRtb3N0XG4gKiBmdW5jdGlvbiBjYW4gdGFrZSBtdWx0aXBsZSBhcmd1bWVudHMgYXMgaXQgcHJvdmlkZXMgdGhlIHNpZ25hdHVyZSBmb3JcbiAqIHRoZSByZXN1bHRpbmcgY29tcG9zaXRlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IGZ1bmNzIFRoZSBmdW5jdGlvbnMgdG8gY29tcG9zZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiBvYnRhaW5lZCBieSBjb21wb3NpbmcgdGhlIGFyZ3VtZW50IGZ1bmN0aW9uc1xuICogZnJvbSByaWdodCB0byBsZWZ0LiBGb3IgZXhhbXBsZSwgY29tcG9zZShmLCBnLCBoKSBpcyBpZGVudGljYWwgdG8gZG9pbmdcbiAqICguLi5hcmdzKSA9PiBmKGcoaCguLi5hcmdzKSkpLlxuICovXG5mdW5jdGlvbiBjb21wb3NlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZnVuY3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoZnVuY3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgIHJldHVybiBhcmc7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gZnVuY3NbMF07XG4gIH1cblxuICByZXR1cm4gZnVuY3MucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhKGIuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpKTtcbiAgICB9O1xuICB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RvcmUgZW5oYW5jZXIgdGhhdCBhcHBsaWVzIG1pZGRsZXdhcmUgdG8gdGhlIGRpc3BhdGNoIG1ldGhvZFxuICogb2YgdGhlIFJlZHV4IHN0b3JlLiBUaGlzIGlzIGhhbmR5IGZvciBhIHZhcmlldHkgb2YgdGFza3MsIHN1Y2ggYXMgZXhwcmVzc2luZ1xuICogYXN5bmNocm9ub3VzIGFjdGlvbnMgaW4gYSBjb25jaXNlIG1hbm5lciwgb3IgbG9nZ2luZyBldmVyeSBhY3Rpb24gcGF5bG9hZC5cbiAqXG4gKiBTZWUgYHJlZHV4LXRodW5rYCBwYWNrYWdlIGFzIGFuIGV4YW1wbGUgb2YgdGhlIFJlZHV4IG1pZGRsZXdhcmUuXG4gKlxuICogQmVjYXVzZSBtaWRkbGV3YXJlIGlzIHBvdGVudGlhbGx5IGFzeW5jaHJvbm91cywgdGhpcyBzaG91bGQgYmUgdGhlIGZpcnN0XG4gKiBzdG9yZSBlbmhhbmNlciBpbiB0aGUgY29tcG9zaXRpb24gY2hhaW4uXG4gKlxuICogTm90ZSB0aGF0IGVhY2ggbWlkZGxld2FyZSB3aWxsIGJlIGdpdmVuIHRoZSBgZGlzcGF0Y2hgIGFuZCBgZ2V0U3RhdGVgIGZ1bmN0aW9uc1xuICogYXMgbmFtZWQgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IG1pZGRsZXdhcmVzIFRoZSBtaWRkbGV3YXJlIGNoYWluIHRvIGJlIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgc3RvcmUgZW5oYW5jZXIgYXBwbHlpbmcgdGhlIG1pZGRsZXdhcmUuXG4gKi9cblxuZnVuY3Rpb24gYXBwbHlNaWRkbGV3YXJlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWlkZGxld2FyZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgbWlkZGxld2FyZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGNyZWF0ZVN0b3JlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdG9yZSA9IGNyZWF0ZVN0b3JlLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcblxuICAgICAgdmFyIF9kaXNwYXRjaCA9IGZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Rpc3BhdGNoaW5nIHdoaWxlIGNvbnN0cnVjdGluZyB5b3VyIG1pZGRsZXdhcmUgaXMgbm90IGFsbG93ZWQuICcgKyAnT3RoZXIgbWlkZGxld2FyZSB3b3VsZCBub3QgYmUgYXBwbGllZCB0byB0aGlzIGRpc3BhdGNoLicpO1xuICAgICAgfTtcblxuICAgICAgdmFyIG1pZGRsZXdhcmVBUEkgPSB7XG4gICAgICAgIGdldFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSxcbiAgICAgICAgZGlzcGF0Y2g6IGZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICAgICAgICAgIHJldHVybiBfZGlzcGF0Y2guYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdmFyIGNoYWluID0gbWlkZGxld2FyZXMubWFwKGZ1bmN0aW9uIChtaWRkbGV3YXJlKSB7XG4gICAgICAgIHJldHVybiBtaWRkbGV3YXJlKG1pZGRsZXdhcmVBUEkpO1xuICAgICAgfSk7XG4gICAgICBfZGlzcGF0Y2ggPSBjb21wb3NlLmFwcGx5KHZvaWQgMCwgY2hhaW4pKHN0b3JlLmRpc3BhdGNoKTtcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkMih7fSwgc3RvcmUsIHtcbiAgICAgICAgZGlzcGF0Y2g6IF9kaXNwYXRjaFxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuLypcbiAqIFRoaXMgaXMgYSBkdW1teSBmdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgZnVuY3Rpb24gbmFtZSBoYXMgYmVlbiBhbHRlcmVkIGJ5IG1pbmlmaWNhdGlvbi5cbiAqIElmIHRoZSBmdW5jdGlvbiBoYXMgYmVlbiBtaW5pZmllZCBhbmQgTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJywgd2FybiB0aGUgdXNlci5cbiAqL1xuXG5mdW5jdGlvbiBpc0NydXNoZWQoKSB7fVxuXG5pZiAoZmFsc2UpIHt9XG5cblxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zY3JpcHRzL3JlZHVjZXJzL2l0ZW1zLmpzXG52YXIgZGVmYXVsdFN0YXRlID0gW107XG5mdW5jdGlvbiBpdGVtc19pdGVtcyhzdGF0ZSwgYWN0aW9uKSB7XG4gIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgc3RhdGUgPSBkZWZhdWx0U3RhdGU7XG4gIH1cblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnQUREX0lURU0nOlxuICAgICAge1xuICAgICAgICAvLyBBZGQgb2JqZWN0IHRvIGl0ZW1zIGFycmF5XG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IFtdLmNvbmNhdChzdGF0ZSwgW3tcbiAgICAgICAgICBpZDogYWN0aW9uLmlkLFxuICAgICAgICAgIGNob2ljZUlkOiBhY3Rpb24uY2hvaWNlSWQsXG4gICAgICAgICAgZ3JvdXBJZDogYWN0aW9uLmdyb3VwSWQsXG4gICAgICAgICAgdmFsdWU6IGFjdGlvbi52YWx1ZSxcbiAgICAgICAgICBsYWJlbDogYWN0aW9uLmxhYmVsLFxuICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICBoaWdobGlnaHRlZDogZmFsc2UsXG4gICAgICAgICAgY3VzdG9tUHJvcGVydGllczogYWN0aW9uLmN1c3RvbVByb3BlcnRpZXMsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IGFjdGlvbi5wbGFjZWhvbGRlciB8fCBmYWxzZSxcbiAgICAgICAgICBrZXlDb2RlOiBudWxsXG4gICAgICAgIH1dKTtcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlLm1hcChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgdmFyIGl0ZW0gPSBvYmo7XG4gICAgICAgICAgaXRlbS5oaWdobGlnaHRlZCA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ1JFTU9WRV9JVEVNJzpcbiAgICAgIHtcbiAgICAgICAgLy8gU2V0IGl0ZW0gdG8gaW5hY3RpdmVcbiAgICAgICAgcmV0dXJuIHN0YXRlLm1hcChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgdmFyIGl0ZW0gPSBvYmo7XG5cbiAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ0hJR0hMSUdIVF9JVEVNJzpcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLm1hcChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgdmFyIGl0ZW0gPSBvYmo7XG5cbiAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgICAgICBpdGVtLmhpZ2hsaWdodGVkID0gYWN0aW9uLmhpZ2hsaWdodGVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgfVxufVxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvc2NyaXB0cy9yZWR1Y2Vycy9ncm91cHMuanNcbnZhciBncm91cHNfZGVmYXVsdFN0YXRlID0gW107XG5mdW5jdGlvbiBncm91cHMoc3RhdGUsIGFjdGlvbikge1xuICBpZiAoc3RhdGUgPT09IHZvaWQgMCkge1xuICAgIHN0YXRlID0gZ3JvdXBzX2RlZmF1bHRTdGF0ZTtcbiAgfVxuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdBRERfR1JPVVAnOlxuICAgICAge1xuICAgICAgICByZXR1cm4gW10uY29uY2F0KHN0YXRlLCBbe1xuICAgICAgICAgIGlkOiBhY3Rpb24uaWQsXG4gICAgICAgICAgdmFsdWU6IGFjdGlvbi52YWx1ZSxcbiAgICAgICAgICBhY3RpdmU6IGFjdGlvbi5hY3RpdmUsXG4gICAgICAgICAgZGlzYWJsZWQ6IGFjdGlvbi5kaXNhYmxlZFxuICAgICAgICB9XSk7XG4gICAgICB9XG5cbiAgICBjYXNlICdDTEVBUl9DSE9JQ0VTJzpcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICB9XG59XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zY3JpcHRzL3JlZHVjZXJzL2Nob2ljZXMuanNcbnZhciBjaG9pY2VzX2RlZmF1bHRTdGF0ZSA9IFtdO1xuZnVuY3Rpb24gY2hvaWNlc19jaG9pY2VzKHN0YXRlLCBhY3Rpb24pIHtcbiAgaWYgKHN0YXRlID09PSB2b2lkIDApIHtcbiAgICBzdGF0ZSA9IGNob2ljZXNfZGVmYXVsdFN0YXRlO1xuICB9XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0FERF9DSE9JQ0UnOlxuICAgICAge1xuICAgICAgICAvKlxuICAgICAgICAgICAgQSBkaXNhYmxlZCBjaG9pY2UgYXBwZWFycyBpbiB0aGUgY2hvaWNlIGRyb3Bkb3duIGJ1dCBjYW5ub3QgYmUgc2VsZWN0ZWRcbiAgICAgICAgICAgIEEgc2VsZWN0ZWQgY2hvaWNlIGhhcyBiZWVuIGFkZGVkIHRvIHRoZSBwYXNzZWQgaW5wdXQncyB2YWx1ZSAoYWRkZWQgYXMgYW4gaXRlbSlcbiAgICAgICAgICAgIEFuIGFjdGl2ZSBjaG9pY2UgYXBwZWFycyB3aXRoaW4gdGhlIGNob2ljZSBkcm9wZG93blxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIFtdLmNvbmNhdChzdGF0ZSwgW3tcbiAgICAgICAgICBpZDogYWN0aW9uLmlkLFxuICAgICAgICAgIGVsZW1lbnRJZDogYWN0aW9uLmVsZW1lbnRJZCxcbiAgICAgICAgICBncm91cElkOiBhY3Rpb24uZ3JvdXBJZCxcbiAgICAgICAgICB2YWx1ZTogYWN0aW9uLnZhbHVlLFxuICAgICAgICAgIGxhYmVsOiBhY3Rpb24ubGFiZWwgfHwgYWN0aW9uLnZhbHVlLFxuICAgICAgICAgIGRpc2FibGVkOiBhY3Rpb24uZGlzYWJsZWQgfHwgZmFsc2UsXG4gICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICBzY29yZTogOTk5OSxcbiAgICAgICAgICBjdXN0b21Qcm9wZXJ0aWVzOiBhY3Rpb24uY3VzdG9tUHJvcGVydGllcyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogYWN0aW9uLnBsYWNlaG9sZGVyIHx8IGZhbHNlLFxuICAgICAgICAgIGtleUNvZGU6IG51bGxcbiAgICAgICAgfV0pO1xuICAgICAgfVxuXG4gICAgY2FzZSAnQUREX0lURU0nOlxuICAgICAge1xuICAgICAgICAvLyBJZiBhbGwgY2hvaWNlcyBuZWVkIHRvIGJlIGFjdGl2YXRlZFxuICAgICAgICBpZiAoYWN0aW9uLmFjdGl2YXRlT3B0aW9ucykge1xuICAgICAgICAgIHJldHVybiBzdGF0ZS5tYXAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgdmFyIGNob2ljZSA9IG9iajtcbiAgICAgICAgICAgIGNob2ljZS5hY3RpdmUgPSBhY3Rpb24uYWN0aXZlO1xuICAgICAgICAgICAgcmV0dXJuIGNob2ljZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSAvLyBXaGVuIGFuIGl0ZW0gaXMgYWRkZWQgYW5kIGl0IGhhcyBhbiBhc3NvY2lhdGVkIGNob2ljZSxcbiAgICAgICAgLy8gd2Ugd2FudCB0byBkaXNhYmxlIGl0IHNvIGl0IGNhbid0IGJlIGNob3NlbiBhZ2FpblxuXG5cbiAgICAgICAgaWYgKGFjdGlvbi5jaG9pY2VJZCA+IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlLm1hcChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICB2YXIgY2hvaWNlID0gb2JqO1xuXG4gICAgICAgICAgICBpZiAoY2hvaWNlLmlkID09PSBwYXJzZUludChhY3Rpb24uY2hvaWNlSWQsIDEwKSkge1xuICAgICAgICAgICAgICBjaG9pY2Uuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2hvaWNlO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgY2FzZSAnUkVNT1ZFX0lURU0nOlxuICAgICAge1xuICAgICAgICAvLyBXaGVuIGFuIGl0ZW0gaXMgcmVtb3ZlZCBhbmQgaXQgaGFzIGFuIGFzc29jaWF0ZWQgY2hvaWNlLFxuICAgICAgICAvLyB3ZSB3YW50IHRvIHJlLWVuYWJsZSBpdCBzbyBpdCBjYW4gYmUgY2hvc2VuIGFnYWluXG4gICAgICAgIGlmIChhY3Rpb24uY2hvaWNlSWQgPiAtMSkge1xuICAgICAgICAgIHJldHVybiBzdGF0ZS5tYXAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgdmFyIGNob2ljZSA9IG9iajtcblxuICAgICAgICAgICAgaWYgKGNob2ljZS5pZCA9PT0gcGFyc2VJbnQoYWN0aW9uLmNob2ljZUlkLCAxMCkpIHtcbiAgICAgICAgICAgICAgY2hvaWNlLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjaG9pY2U7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICBjYXNlICdGSUxURVJfQ0hPSUNFUyc6XG4gICAgICB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5tYXAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgIHZhciBjaG9pY2UgPSBvYmo7IC8vIFNldCBhY3RpdmUgc3RhdGUgYmFzZWQgb24gd2hldGhlciBjaG9pY2UgaXNcbiAgICAgICAgICAvLyB3aXRoaW4gZmlsdGVyZWQgcmVzdWx0c1xuXG4gICAgICAgICAgY2hvaWNlLmFjdGl2ZSA9IGFjdGlvbi5yZXN1bHRzLnNvbWUoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gX3JlZi5pdGVtLFxuICAgICAgICAgICAgICAgIHNjb3JlID0gX3JlZi5zY29yZTtcblxuICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGNob2ljZS5pZCkge1xuICAgICAgICAgICAgICBjaG9pY2Uuc2NvcmUgPSBzY29yZTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gY2hvaWNlO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ0FDVElWQVRFX0NIT0lDRVMnOlxuICAgICAge1xuICAgICAgICByZXR1cm4gc3RhdGUubWFwKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICB2YXIgY2hvaWNlID0gb2JqO1xuICAgICAgICAgIGNob2ljZS5hY3RpdmUgPSBhY3Rpb24uYWN0aXZlO1xuICAgICAgICAgIHJldHVybiBjaG9pY2U7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgY2FzZSAnQ0xFQVJfQ0hPSUNFUyc6XG4gICAgICB7XG4gICAgICAgIHJldHVybiBjaG9pY2VzX2RlZmF1bHRTdGF0ZTtcbiAgICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgfVxufVxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvc2NyaXB0cy9yZWR1Y2Vycy9nZW5lcmFsLmpzXG52YXIgZ2VuZXJhbF9kZWZhdWx0U3RhdGUgPSB7XG4gIGxvYWRpbmc6IGZhbHNlXG59O1xuXG52YXIgZ2VuZXJhbCA9IGZ1bmN0aW9uIGdlbmVyYWwoc3RhdGUsIGFjdGlvbikge1xuICBpZiAoc3RhdGUgPT09IHZvaWQgMCkge1xuICAgIHN0YXRlID0gZ2VuZXJhbF9kZWZhdWx0U3RhdGU7XG4gIH1cblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnU0VUX0lTX0xPQURJTkcnOlxuICAgICAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxvYWRpbmc6IGFjdGlvbi5pc0xvYWRpbmdcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgfVxufTtcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgcmVkdWNlcnNfZ2VuZXJhbCA9IChnZW5lcmFsKTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3NjcmlwdHMvbGliL3V0aWxzLmpzXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbnZhciBnZXRSYW5kb21OdW1iZXIgPSBmdW5jdGlvbiBnZXRSYW5kb21OdW1iZXIobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcbn07XG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cblxudmFyIGdlbmVyYXRlQ2hhcnMgPSBmdW5jdGlvbiBnZW5lcmF0ZUNoYXJzKGxlbmd0aCkge1xuICByZXR1cm4gQXJyYXkuZnJvbSh7XG4gICAgbGVuZ3RoOiBsZW5ndGhcbiAgfSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBnZXRSYW5kb21OdW1iZXIoMCwgMzYpLnRvU3RyaW5nKDM2KTtcbiAgfSkuam9pbignJyk7XG59O1xuLyoqXG4gKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IHByZWZpeFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuXG52YXIgZ2VuZXJhdGVJZCA9IGZ1bmN0aW9uIGdlbmVyYXRlSWQoZWxlbWVudCwgcHJlZml4KSB7XG4gIHZhciBpZCA9IGVsZW1lbnQuaWQgfHwgZWxlbWVudC5uYW1lICYmIGVsZW1lbnQubmFtZSArIFwiLVwiICsgZ2VuZXJhdGVDaGFycygyKSB8fCBnZW5lcmF0ZUNoYXJzKDQpO1xuICBpZCA9IGlkLnJlcGxhY2UoLyg6fFxcLnxcXFt8XFxdfCwpL2csICcnKTtcbiAgaWQgPSBwcmVmaXggKyBcIi1cIiArIGlkO1xuICByZXR1cm4gaWQ7XG59O1xuLyoqXG4gKiBAcGFyYW0ge2FueX0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5cbnZhciBnZXRUeXBlID0gZnVuY3Rpb24gZ2V0VHlwZShvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopLnNsaWNlKDgsIC0xKTtcbn07XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge2FueX0gb2JqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuXG52YXIgaXNUeXBlID0gZnVuY3Rpb24gaXNUeXBlKHR5cGUsIG9iaikge1xuICByZXR1cm4gb2JqICE9PSB1bmRlZmluZWQgJiYgb2JqICE9PSBudWxsICYmIGdldFR5cGUob2JqKSA9PT0gdHlwZTtcbn07XG4vKipcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFt3cmFwcGVyPXtIVE1MRGl2RWxlbWVudH1dXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gKi9cblxudmFyIHV0aWxzX3dyYXAgPSBmdW5jdGlvbiB3cmFwKGVsZW1lbnQsIHdyYXBwZXIpIHtcbiAgaWYgKHdyYXBwZXIgPT09IHZvaWQgMCkge1xuICAgIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgfVxuXG4gIGlmIChlbGVtZW50Lm5leHRTaWJsaW5nKSB7XG4gICAgZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCBlbGVtZW50Lm5leHRTaWJsaW5nKTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gIH1cblxuICByZXR1cm4gd3JhcHBlci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbn07XG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gc3RhcnRFbFxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0gezEgfCAtMX0gZGlyZWN0aW9uXG4gKiBAcmV0dXJucyB7RWxlbWVudCB8IHVuZGVmaW5lZH1cbiAqL1xuXG52YXIgZ2V0QWRqYWNlbnRFbCA9IGZ1bmN0aW9uIGdldEFkamFjZW50RWwoc3RhcnRFbCwgc2VsZWN0b3IsIGRpcmVjdGlvbikge1xuICBpZiAoZGlyZWN0aW9uID09PSB2b2lkIDApIHtcbiAgICBkaXJlY3Rpb24gPSAxO1xuICB9XG5cbiAgaWYgKCEoc3RhcnRFbCBpbnN0YW5jZW9mIEVsZW1lbnQpIHx8IHR5cGVvZiBzZWxlY3RvciAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgdmFyIHByb3AgPSAoZGlyZWN0aW9uID4gMCA/ICduZXh0JyA6ICdwcmV2aW91cycpICsgXCJFbGVtZW50U2libGluZ1wiO1xuICB2YXIgc2libGluZyA9IHN0YXJ0RWxbcHJvcF07XG5cbiAgd2hpbGUgKHNpYmxpbmcpIHtcbiAgICBpZiAoc2libGluZy5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgcmV0dXJuIHNpYmxpbmc7XG4gICAgfVxuXG4gICAgc2libGluZyA9IHNpYmxpbmdbcHJvcF07XG4gIH1cblxuICByZXR1cm4gc2libGluZztcbn07XG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50fSBwYXJlbnRcbiAqIEBwYXJhbSB7LTEgfCAxfSBkaXJlY3Rpb25cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5cbnZhciBpc1Njcm9sbGVkSW50b1ZpZXcgPSBmdW5jdGlvbiBpc1Njcm9sbGVkSW50b1ZpZXcoZWxlbWVudCwgcGFyZW50LCBkaXJlY3Rpb24pIHtcbiAgaWYgKGRpcmVjdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgZGlyZWN0aW9uID0gMTtcbiAgfVxuXG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBpc1Zpc2libGU7XG5cbiAgaWYgKGRpcmVjdGlvbiA+IDApIHtcbiAgICAvLyBJbiB2aWV3IGZyb20gYm90dG9tXG4gICAgaXNWaXNpYmxlID0gcGFyZW50LnNjcm9sbFRvcCArIHBhcmVudC5vZmZzZXRIZWlnaHQgPj0gZWxlbWVudC5vZmZzZXRUb3AgKyBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgfSBlbHNlIHtcbiAgICAvLyBJbiB2aWV3IGZyb20gdG9wXG4gICAgaXNWaXNpYmxlID0gZWxlbWVudC5vZmZzZXRUb3AgPj0gcGFyZW50LnNjcm9sbFRvcDtcbiAgfVxuXG4gIHJldHVybiBpc1Zpc2libGU7XG59O1xuLyoqXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqIEByZXR1cm5zIHthbnl9XG4gKi9cblxudmFyIHNhbml0aXNlID0gZnVuY3Rpb24gc2FuaXRpc2UodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gdmFsdWUucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC8+L2csICcmcnQ7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbn07XG4vKipcbiAqIEByZXR1cm5zIHsoKSA9PiAoc3RyOiBzdHJpbmcpID0+IEVsZW1lbnR9XG4gKi9cblxudmFyIHN0clRvRWwgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0bXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cikge1xuICAgIHZhciBjbGVhbmVkSW5wdXQgPSBzdHIudHJpbSgpO1xuICAgIHRtcEVsLmlubmVySFRNTCA9IGNsZWFuZWRJbnB1dDtcbiAgICB2YXIgZmlybGRDaGlsZCA9IHRtcEVsLmNoaWxkcmVuWzBdO1xuXG4gICAgd2hpbGUgKHRtcEVsLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRtcEVsLnJlbW92ZUNoaWxkKHRtcEVsLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiBmaXJsZENoaWxkO1xuICB9O1xufSgpO1xuLyoqXG4gKiBAcGFyYW0ge3sgbGFiZWw/OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfX0gYVxuICogQHBhcmFtIHt7IGxhYmVsPzogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIH19IGJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cblxudmFyIHNvcnRCeUFscGhhID0gZnVuY3Rpb24gc29ydEJ5QWxwaGEoX3JlZiwgX3JlZjIpIHtcbiAgdmFyIHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgIF9yZWYkbGFiZWwgPSBfcmVmLmxhYmVsLFxuICAgICAgbGFiZWwgPSBfcmVmJGxhYmVsID09PSB2b2lkIDAgPyB2YWx1ZSA6IF9yZWYkbGFiZWw7XG4gIHZhciB2YWx1ZTIgPSBfcmVmMi52YWx1ZSxcbiAgICAgIF9yZWYyJGxhYmVsID0gX3JlZjIubGFiZWwsXG4gICAgICBsYWJlbDIgPSBfcmVmMiRsYWJlbCA9PT0gdm9pZCAwID8gdmFsdWUyIDogX3JlZjIkbGFiZWw7XG4gIHJldHVybiBsYWJlbC5sb2NhbGVDb21wYXJlKGxhYmVsMiwgW10sIHtcbiAgICBzZW5zaXRpdml0eTogJ2Jhc2UnLFxuICAgIGlnbm9yZVB1bmN0dWF0aW9uOiB0cnVlLFxuICAgIG51bWVyaWM6IHRydWVcbiAgfSk7XG59O1xuLyoqXG4gKiBAcGFyYW0ge3sgc2NvcmU6IG51bWJlciB9fSBhXG4gKiBAcGFyYW0ge3sgc2NvcmU6IG51bWJlciB9fSBiXG4gKi9cblxudmFyIHNvcnRCeVNjb3JlID0gZnVuY3Rpb24gc29ydEJ5U2NvcmUoYSwgYikge1xuICByZXR1cm4gYS5zY29yZSAtIGIuc2NvcmU7XG59O1xuLyoqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IGN1c3RvbUFyZ3NcbiAqL1xuXG52YXIgZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoZWxlbWVudCwgdHlwZSwgY3VzdG9tQXJncykge1xuICBpZiAoY3VzdG9tQXJncyA9PT0gdm9pZCAwKSB7XG4gICAgY3VzdG9tQXJncyA9IG51bGw7XG4gIH1cblxuICB2YXIgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQodHlwZSwge1xuICAgIGRldGFpbDogY3VzdG9tQXJncyxcbiAgICBidWJibGVzOiB0cnVlLFxuICAgIGNhbmNlbGFibGU6IHRydWVcbiAgfSk7XG4gIHJldHVybiBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufTtcbi8qKlxuICogQHBhcmFtIHthcnJheX0gYXJyYXlcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHBhcmFtIHtzdHJpbmd9IFtrZXk9XCJ2YWx1ZVwiXVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cblxudmFyIGV4aXN0c0luQXJyYXkgPSBmdW5jdGlvbiBleGlzdHNJbkFycmF5KGFycmF5LCB2YWx1ZSwga2V5KSB7XG4gIGlmIChrZXkgPT09IHZvaWQgMCkge1xuICAgIGtleSA9ICd2YWx1ZSc7XG4gIH1cblxuICByZXR1cm4gYXJyYXkuc29tZShmdW5jdGlvbiAoaXRlbSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gaXRlbVtrZXldID09PSB2YWx1ZS50cmltKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1ba2V5XSA9PT0gdmFsdWU7XG4gIH0pO1xufTtcbi8qKlxuICogQHBhcmFtIHthbnl9IG9ialxuICogQHJldHVybnMge2FueX1cbiAqL1xuXG52YXIgY2xvbmVPYmplY3QgPSBmdW5jdGlvbiBjbG9uZU9iamVjdChvYmopIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG59O1xuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IG9mIGtleXMgcHJlc2VudCBvbiB0aGUgZmlyc3QgYnV0IG1pc3Npbmcgb24gdGhlIHNlY29uZCBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBhXG4gKiBAcGFyYW0ge29iamVjdH0gYlxuICogQHJldHVybnMge3N0cmluZ1tdfVxuICovXG5cbnZhciBkaWZmID0gZnVuY3Rpb24gZGlmZihhLCBiKSB7XG4gIHZhciBhS2V5cyA9IE9iamVjdC5rZXlzKGEpLnNvcnQoKTtcbiAgdmFyIGJLZXlzID0gT2JqZWN0LmtleXMoYikuc29ydCgpO1xuICByZXR1cm4gYUtleXMuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgcmV0dXJuIGJLZXlzLmluZGV4T2YoaSkgPCAwO1xuICB9KTtcbn07XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zY3JpcHRzL3JlZHVjZXJzL2luZGV4LmpzXG5cblxuXG5cblxuXG52YXIgYXBwUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGl0ZW1zOiBpdGVtc19pdGVtcyxcbiAgZ3JvdXBzOiBncm91cHMsXG4gIGNob2ljZXM6IGNob2ljZXNfY2hvaWNlcyxcbiAgZ2VuZXJhbDogcmVkdWNlcnNfZ2VuZXJhbFxufSk7XG5cbnZhciByZWR1Y2Vyc19yb290UmVkdWNlciA9IGZ1bmN0aW9uIHJvb3RSZWR1Y2VyKHBhc3NlZFN0YXRlLCBhY3Rpb24pIHtcbiAgdmFyIHN0YXRlID0gcGFzc2VkU3RhdGU7IC8vIElmIHdlIGFyZSBjbGVhcmluZyBhbGwgaXRlbXMsIGdyb3VwcyBhbmQgb3B0aW9ucyB3ZSByZWFzc2lnblxuICAvLyBzdGF0ZSBhbmQgdGhlbiBwYXNzIHRoYXQgc3RhdGUgdG8gb3VyIHByb3BlciByZWR1Y2VyLiBUaGlzIGlzbid0XG4gIC8vIG11dGF0aW5nIG91ciBhY3R1YWwgc3RhdGVcbiAgLy8gU2VlOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zNTY0MTk5MlxuXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0NMRUFSX0FMTCcpIHtcbiAgICBzdGF0ZSA9IHVuZGVmaW5lZDtcbiAgfSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gJ1JFU0VUX1RPJykge1xuICAgIHJldHVybiBjbG9uZU9iamVjdChhY3Rpb24uc3RhdGUpO1xuICB9XG5cbiAgcmV0dXJuIGFwcFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG59O1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciByZWR1Y2VycyA9IChyZWR1Y2Vyc19yb290UmVkdWNlcik7XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zY3JpcHRzL3N0b3JlL3N0b3JlLmpzXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cblxuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5DaG9pY2V9IENob2ljZVxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkdyb3VwfSBHcm91cFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkl0ZW19IEl0ZW1cbiAqL1xuXG52YXIgc3RvcmVfU3RvcmUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdG9yZSgpIHtcbiAgICB0aGlzLl9zdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpKTtcbiAgfVxuICAvKipcbiAgICogU3Vic2NyaWJlIHN0b3JlIHRvIGZ1bmN0aW9uIGNhbGwgKHdyYXBwZWQgUmVkdXggbWV0aG9kKVxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gb25DaGFuZ2UgRnVuY3Rpb24gdG8gdHJpZ2dlciB3aGVuIHN0YXRlIGNoYW5nZXNcbiAgICogQHJldHVyblxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBTdG9yZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnN1YnNjcmliZSA9IGZ1bmN0aW9uIHN1YnNjcmliZShvbkNoYW5nZSkge1xuICAgIHRoaXMuX3N0b3JlLnN1YnNjcmliZShvbkNoYW5nZSk7XG4gIH1cbiAgLyoqXG4gICAqIERpc3BhdGNoIGV2ZW50IHRvIHN0b3JlICh3cmFwcGVkIFJlZHV4IG1ldGhvZClcbiAgICogQHBhcmFtICB7eyB0eXBlOiBzdHJpbmcsIFt4OiBzdHJpbmddOiBhbnkgfX0gYWN0aW9uIEFjdGlvbiB0byB0cmlnZ2VyXG4gICAqIEByZXR1cm5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZGlzcGF0Y2ggPSBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgc3RvcmUgb2JqZWN0ICh3cmFwcGluZyBSZWR1eCBtZXRob2QpXG4gICAqIEByZXR1cm5zIHtvYmplY3R9IFN0YXRlXG4gICAqL1xuICA7XG5cbiAgLyoqXG4gICAqIEdldCBsb2FkaW5nIHN0YXRlIGZyb20gc3RvcmVcbiAgICogQHJldHVybnMge2Jvb2xlYW59IExvYWRpbmcgU3RhdGVcbiAgICovXG4gIF9wcm90by5pc0xvYWRpbmcgPSBmdW5jdGlvbiBpc0xvYWRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuZ2VuZXJhbC5sb2FkaW5nO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgc2luZ2xlIGNob2ljZSBieSBpdCdzIElEXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICAgKiBAcmV0dXJucyB7Q2hvaWNlIHwgdW5kZWZpbmVkfSBGb3VuZCBjaG9pY2VcbiAgICovXG4gIDtcblxuICBfcHJvdG8uZ2V0Q2hvaWNlQnlJZCA9IGZ1bmN0aW9uIGdldENob2ljZUJ5SWQoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVDaG9pY2VzLmZpbmQoZnVuY3Rpb24gKGNob2ljZSkge1xuICAgICAgcmV0dXJuIGNob2ljZS5pZCA9PT0gcGFyc2VJbnQoaWQsIDEwKTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogR2V0IGdyb3VwIGJ5IGdyb3VwIGlkXG4gICAqIEBwYXJhbSAge251bWJlcn0gaWQgR3JvdXAgSURcbiAgICogQHJldHVybnMge0dyb3VwIHwgdW5kZWZpbmVkfSBHcm91cCBkYXRhXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmdldEdyb3VwQnlJZCA9IGZ1bmN0aW9uIGdldEdyb3VwQnlJZChpZCkge1xuICAgIHJldHVybiB0aGlzLmdyb3Vwcy5maW5kKGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgcmV0dXJuIGdyb3VwLmlkID09PSBpZDtcbiAgICB9KTtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoU3RvcmUsIFt7XG4gICAga2V5OiBcInN0YXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGl0ZW1zIGZyb20gc3RvcmVcbiAgICAgKiBAcmV0dXJucyB7SXRlbVtdfSBJdGVtIG9iamVjdHNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIml0ZW1zXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5pdGVtcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGFjdGl2ZSBpdGVtcyBmcm9tIHN0b3JlXG4gICAgICogQHJldHVybnMge0l0ZW1bXX0gSXRlbSBvYmplY3RzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhY3RpdmVJdGVtc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtLmFjdGl2ZSA9PT0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgaGlnaGxpZ2h0ZWQgaXRlbXMgZnJvbSBzdG9yZVxuICAgICAqIEByZXR1cm5zIHtJdGVtW119IEl0ZW0gb2JqZWN0c1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaGlnaGxpZ2h0ZWRBY3RpdmVJdGVtc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtLmFjdGl2ZSAmJiBpdGVtLmhpZ2hsaWdodGVkO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBjaG9pY2VzIGZyb20gc3RvcmVcbiAgICAgKiBAcmV0dXJucyB7Q2hvaWNlW119IE9wdGlvbiBvYmplY3RzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjaG9pY2VzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jaG9pY2VzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYWN0aXZlIGNob2ljZXMgZnJvbSBzdG9yZVxuICAgICAqIEByZXR1cm5zIHtDaG9pY2VbXX0gT3B0aW9uIG9iamVjdHNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFjdGl2ZUNob2ljZXNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNob2ljZXMuZmlsdGVyKGZ1bmN0aW9uIChjaG9pY2UpIHtcbiAgICAgICAgcmV0dXJuIGNob2ljZS5hY3RpdmUgPT09IHRydWU7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHNlbGVjdGFibGUgY2hvaWNlcyBmcm9tIHN0b3JlXG4gICAgICogQHJldHVybnMge0Nob2ljZVtdfSBPcHRpb24gb2JqZWN0c1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2VsZWN0YWJsZUNob2ljZXNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNob2ljZXMuZmlsdGVyKGZ1bmN0aW9uIChjaG9pY2UpIHtcbiAgICAgICAgcmV0dXJuIGNob2ljZS5kaXNhYmxlZCAhPT0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgY2hvaWNlcyB0aGF0IGNhbiBiZSBzZWFyY2hlZCAoZXhjbHVkaW5nIHBsYWNlaG9sZGVycylcbiAgICAgKiBAcmV0dXJucyB7Q2hvaWNlW119IE9wdGlvbiBvYmplY3RzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZWFyY2hhYmxlQ2hvaWNlc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0YWJsZUNob2ljZXMuZmlsdGVyKGZ1bmN0aW9uIChjaG9pY2UpIHtcbiAgICAgICAgcmV0dXJuIGNob2ljZS5wbGFjZWhvbGRlciAhPT0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgcGxhY2Vob2xkZXIgY2hvaWNlIGZyb20gc3RvcmVcbiAgICAgKiBAcmV0dXJucyB7Q2hvaWNlIHwgdW5kZWZpbmVkfSBGb3VuZCBwbGFjZWhvbGRlclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicGxhY2Vob2xkZXJDaG9pY2VcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBbXS5jb25jYXQodGhpcy5jaG9pY2VzKS5yZXZlcnNlKCkuZmluZChmdW5jdGlvbiAoY2hvaWNlKSB7XG4gICAgICAgIHJldHVybiBjaG9pY2UucGxhY2Vob2xkZXIgPT09IHRydWU7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGdyb3VwcyBmcm9tIHN0b3JlXG4gICAgICogQHJldHVybnMge0dyb3VwW119IEdyb3VwIG9iamVjdHNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdyb3Vwc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuZ3JvdXBzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYWN0aXZlIGdyb3VwcyBmcm9tIHN0b3JlXG4gICAgICogQHJldHVybnMge0dyb3VwW119IEdyb3VwIG9iamVjdHNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFjdGl2ZUdyb3Vwc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIGdyb3VwcyA9IHRoaXMuZ3JvdXBzLFxuICAgICAgICAgIGNob2ljZXMgPSB0aGlzLmNob2ljZXM7XG4gICAgICByZXR1cm4gZ3JvdXBzLmZpbHRlcihmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgICAgdmFyIGlzQWN0aXZlID0gZ3JvdXAuYWN0aXZlID09PSB0cnVlICYmIGdyb3VwLmRpc2FibGVkID09PSBmYWxzZTtcbiAgICAgICAgdmFyIGhhc0FjdGl2ZU9wdGlvbnMgPSBjaG9pY2VzLnNvbWUoZnVuY3Rpb24gKGNob2ljZSkge1xuICAgICAgICAgIHJldHVybiBjaG9pY2UuYWN0aXZlID09PSB0cnVlICYmIGNob2ljZS5kaXNhYmxlZCA9PT0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaXNBY3RpdmUgJiYgaGFzQWN0aXZlT3B0aW9ucztcbiAgICAgIH0sIFtdKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3RvcmU7XG59KCk7XG5cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2Ryb3Bkb3duLmpzXG5mdW5jdGlvbiBkcm9wZG93bl9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gZHJvcGRvd25fY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkcm9wZG93bl9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZHJvcGRvd25fZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMucGFzc2VkRWxlbWVudH0gcGFzc2VkRWxlbWVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkNsYXNzTmFtZXN9IENsYXNzTmFtZXNcbiAqL1xudmFyIERyb3Bkb3duID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7e1xuICAgKiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAqICB0eXBlOiBwYXNzZWRFbGVtZW50Wyd0eXBlJ10sXG4gICAqICBjbGFzc05hbWVzOiBDbGFzc05hbWVzLFxuICAgKiB9fSBhcmdzXG4gICAqL1xuICBmdW5jdGlvbiBEcm9wZG93bihfcmVmKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQsXG4gICAgICAgIHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgICAgIGNsYXNzTmFtZXMgPSBfcmVmLmNsYXNzTmFtZXM7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICB9XG4gIC8qKlxuICAgKiBCb3R0b20gcG9zaXRpb24gb2YgZHJvcGRvd24gaW4gdmlld3BvcnQgY29vcmRpbmF0ZXNcbiAgICogQHJldHVybnMge251bWJlcn0gVmVydGljYWwgcG9zaXRpb25cbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gRHJvcGRvd24ucHJvdG90eXBlO1xuXG4gIC8qKlxuICAgKiBGaW5kIGVsZW1lbnQgdGhhdCBtYXRjaGVzIHBhc3NlZCBzZWxlY3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIF9wcm90by5nZXRDaGlsZCA9IGZ1bmN0aW9uIGdldENoaWxkKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfVxuICAvKipcbiAgICogU2hvdyBkcm9wZG93biB0byB1c2VyIGJ5IGFkZGluZyBhY3RpdmUgc3RhdGUgY2xhc3NcbiAgICogQHJldHVybnMge3RoaXN9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnNob3cgPSBmdW5jdGlvbiBzaG93KCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NOYW1lcy5hY3RpdmVTdGF0ZSk7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIEhpZGUgZHJvcGRvd24gZnJvbSB1c2VyXG4gICAqIEByZXR1cm5zIHt0aGlzfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5oaWRlID0gZnVuY3Rpb24gaGlkZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzTmFtZXMuYWN0aXZlU3RhdGUpO1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgZHJvcGRvd25fY3JlYXRlQ2xhc3MoRHJvcGRvd24sIFt7XG4gICAga2V5OiBcImRpc3RhbmNlRnJvbVRvcFdpbmRvd1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b207XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERyb3Bkb3duO1xufSgpO1xuXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3NjcmlwdHMvY29uc3RhbnRzLmpzXG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkNsYXNzTmFtZXN9IENsYXNzTmFtZXNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5PcHRpb25zfSBPcHRpb25zXG4gKi9cblxuLyoqIEB0eXBlIHtDbGFzc05hbWVzfSAqL1xuXG52YXIgREVGQVVMVF9DTEFTU05BTUVTID0ge1xuICBjb250YWluZXJPdXRlcjogJ2Nob2ljZXMnLFxuICBjb250YWluZXJJbm5lcjogJ2Nob2ljZXNfX2lubmVyJyxcbiAgaW5wdXQ6ICdjaG9pY2VzX19pbnB1dCcsXG4gIGlucHV0Q2xvbmVkOiAnY2hvaWNlc19faW5wdXQtLWNsb25lZCcsXG4gIGxpc3Q6ICdjaG9pY2VzX19saXN0JyxcbiAgbGlzdEl0ZW1zOiAnY2hvaWNlc19fbGlzdC0tbXVsdGlwbGUnLFxuICBsaXN0U2luZ2xlOiAnY2hvaWNlc19fbGlzdC0tc2luZ2xlJyxcbiAgbGlzdERyb3Bkb3duOiAnY2hvaWNlc19fbGlzdC0tZHJvcGRvd24nLFxuICBpdGVtOiAnY2hvaWNlc19faXRlbScsXG4gIGl0ZW1TZWxlY3RhYmxlOiAnY2hvaWNlc19faXRlbS0tc2VsZWN0YWJsZScsXG4gIGl0ZW1EaXNhYmxlZDogJ2Nob2ljZXNfX2l0ZW0tLWRpc2FibGVkJyxcbiAgaXRlbUNob2ljZTogJ2Nob2ljZXNfX2l0ZW0tLWNob2ljZScsXG4gIHBsYWNlaG9sZGVyOiAnY2hvaWNlc19fcGxhY2Vob2xkZXInLFxuICBncm91cDogJ2Nob2ljZXNfX2dyb3VwJyxcbiAgZ3JvdXBIZWFkaW5nOiAnY2hvaWNlc19faGVhZGluZycsXG4gIGJ1dHRvbjogJ2Nob2ljZXNfX2J1dHRvbicsXG4gIGFjdGl2ZVN0YXRlOiAnaXMtYWN0aXZlJyxcbiAgZm9jdXNTdGF0ZTogJ2lzLWZvY3VzZWQnLFxuICBvcGVuU3RhdGU6ICdpcy1vcGVuJyxcbiAgZGlzYWJsZWRTdGF0ZTogJ2lzLWRpc2FibGVkJyxcbiAgaGlnaGxpZ2h0ZWRTdGF0ZTogJ2lzLWhpZ2hsaWdodGVkJyxcbiAgc2VsZWN0ZWRTdGF0ZTogJ2lzLXNlbGVjdGVkJyxcbiAgZmxpcHBlZFN0YXRlOiAnaXMtZmxpcHBlZCcsXG4gIGxvYWRpbmdTdGF0ZTogJ2lzLWxvYWRpbmcnLFxuICBub1Jlc3VsdHM6ICdoYXMtbm8tcmVzdWx0cycsXG4gIG5vQ2hvaWNlczogJ2hhcy1uby1jaG9pY2VzJ1xufTtcbi8qKiBAdHlwZSB7T3B0aW9uc30gKi9cblxudmFyIERFRkFVTFRfQ09ORklHID0ge1xuICBpdGVtczogW10sXG4gIGNob2ljZXM6IFtdLFxuICBzaWxlbnQ6IGZhbHNlLFxuICByZW5kZXJDaG9pY2VMaW1pdDogLTEsXG4gIG1heEl0ZW1Db3VudDogLTEsXG4gIGFkZEl0ZW1zOiB0cnVlLFxuICBhZGRJdGVtRmlsdGVyOiBudWxsLFxuICByZW1vdmVJdGVtczogdHJ1ZSxcbiAgcmVtb3ZlSXRlbUJ1dHRvbjogZmFsc2UsXG4gIGVkaXRJdGVtczogZmFsc2UsXG4gIGR1cGxpY2F0ZUl0ZW1zQWxsb3dlZDogdHJ1ZSxcbiAgZGVsaW1pdGVyOiAnLCcsXG4gIHBhc3RlOiB0cnVlLFxuICBzZWFyY2hFbmFibGVkOiB0cnVlLFxuICBzZWFyY2hDaG9pY2VzOiB0cnVlLFxuICBzZWFyY2hGbG9vcjogMSxcbiAgc2VhcmNoUmVzdWx0TGltaXQ6IDQsXG4gIHNlYXJjaEZpZWxkczogWydsYWJlbCcsICd2YWx1ZSddLFxuICBwb3NpdGlvbjogJ2F1dG8nLFxuICByZXNldFNjcm9sbFBvc2l0aW9uOiB0cnVlLFxuICBzaG91bGRTb3J0OiB0cnVlLFxuICBzaG91bGRTb3J0SXRlbXM6IGZhbHNlLFxuICBzb3J0ZXI6IHNvcnRCeUFscGhhLFxuICBwbGFjZWhvbGRlcjogdHJ1ZSxcbiAgcGxhY2Vob2xkZXJWYWx1ZTogbnVsbCxcbiAgc2VhcmNoUGxhY2Vob2xkZXJWYWx1ZTogbnVsbCxcbiAgcHJlcGVuZFZhbHVlOiBudWxsLFxuICBhcHBlbmRWYWx1ZTogbnVsbCxcbiAgcmVuZGVyU2VsZWN0ZWRDaG9pY2VzOiAnYXV0bycsXG4gIGxvYWRpbmdUZXh0OiAnTG9hZGluZy4uLicsXG4gIG5vUmVzdWx0c1RleHQ6ICdObyByZXN1bHRzIGZvdW5kJyxcbiAgbm9DaG9pY2VzVGV4dDogJ05vIGNob2ljZXMgdG8gY2hvb3NlIGZyb20nLFxuICBpdGVtU2VsZWN0VGV4dDogJ1ByZXNzIHRvIHNlbGVjdCcsXG4gIHVuaXF1ZUl0ZW1UZXh0OiAnT25seSB1bmlxdWUgdmFsdWVzIGNhbiBiZSBhZGRlZCcsXG4gIGN1c3RvbUFkZEl0ZW1UZXh0OiAnT25seSB2YWx1ZXMgbWF0Y2hpbmcgc3BlY2lmaWMgY29uZGl0aW9ucyBjYW4gYmUgYWRkZWQnLFxuICBhZGRJdGVtVGV4dDogZnVuY3Rpb24gYWRkSXRlbVRleHQodmFsdWUpIHtcbiAgICByZXR1cm4gXCJQcmVzcyBFbnRlciB0byBhZGQgPGI+XFxcIlwiICsgc2FuaXRpc2UodmFsdWUpICsgXCJcXFwiPC9iPlwiO1xuICB9LFxuICBtYXhJdGVtVGV4dDogZnVuY3Rpb24gbWF4SXRlbVRleHQobWF4SXRlbUNvdW50KSB7XG4gICAgcmV0dXJuIFwiT25seSBcIiArIG1heEl0ZW1Db3VudCArIFwiIHZhbHVlcyBjYW4gYmUgYWRkZWRcIjtcbiAgfSxcbiAgdmFsdWVDb21wYXJlcjogZnVuY3Rpb24gdmFsdWVDb21wYXJlcih2YWx1ZTEsIHZhbHVlMikge1xuICAgIHJldHVybiB2YWx1ZTEgPT09IHZhbHVlMjtcbiAgfSxcbiAgZnVzZU9wdGlvbnM6IHtcbiAgICBpbmNsdWRlU2NvcmU6IHRydWVcbiAgfSxcbiAgY2FsbGJhY2tPbkluaXQ6IG51bGwsXG4gIGNhbGxiYWNrT25DcmVhdGVUZW1wbGF0ZXM6IG51bGwsXG4gIGNsYXNzTmFtZXM6IERFRkFVTFRfQ0xBU1NOQU1FU1xufTtcbnZhciBFVkVOVFMgPSB7XG4gIHNob3dEcm9wZG93bjogJ3Nob3dEcm9wZG93bicsXG4gIGhpZGVEcm9wZG93bjogJ2hpZGVEcm9wZG93bicsXG4gIGNoYW5nZTogJ2NoYW5nZScsXG4gIGNob2ljZTogJ2Nob2ljZScsXG4gIHNlYXJjaDogJ3NlYXJjaCcsXG4gIGFkZEl0ZW06ICdhZGRJdGVtJyxcbiAgcmVtb3ZlSXRlbTogJ3JlbW92ZUl0ZW0nLFxuICBoaWdobGlnaHRJdGVtOiAnaGlnaGxpZ2h0SXRlbScsXG4gIGhpZ2hsaWdodENob2ljZTogJ2hpZ2hsaWdodENob2ljZSdcbn07XG52YXIgQUNUSU9OX1RZUEVTID0ge1xuICBBRERfQ0hPSUNFOiAnQUREX0NIT0lDRScsXG4gIEZJTFRFUl9DSE9JQ0VTOiAnRklMVEVSX0NIT0lDRVMnLFxuICBBQ1RJVkFURV9DSE9JQ0VTOiAnQUNUSVZBVEVfQ0hPSUNFUycsXG4gIENMRUFSX0NIT0lDRVM6ICdDTEVBUl9DSE9JQ0VTJyxcbiAgQUREX0dST1VQOiAnQUREX0dST1VQJyxcbiAgQUREX0lURU06ICdBRERfSVRFTScsXG4gIFJFTU9WRV9JVEVNOiAnUkVNT1ZFX0lURU0nLFxuICBISUdITElHSFRfSVRFTTogJ0hJR0hMSUdIVF9JVEVNJyxcbiAgQ0xFQVJfQUxMOiAnQ0xFQVJfQUxMJ1xufTtcbnZhciBLRVlfQ09ERVMgPSB7XG4gIEJBQ0tfS0VZOiA0NixcbiAgREVMRVRFX0tFWTogOCxcbiAgRU5URVJfS0VZOiAxMyxcbiAgQV9LRVk6IDY1LFxuICBFU0NfS0VZOiAyNyxcbiAgVVBfS0VZOiAzOCxcbiAgRE9XTl9LRVk6IDQwLFxuICBQQUdFX1VQX0tFWTogMzMsXG4gIFBBR0VfRE9XTl9LRVk6IDM0XG59O1xudmFyIFRFWFRfVFlQRSA9ICd0ZXh0JztcbnZhciBTRUxFQ1RfT05FX1RZUEUgPSAnc2VsZWN0LW9uZSc7XG52YXIgU0VMRUNUX01VTFRJUExFX1RZUEUgPSAnc2VsZWN0LW11bHRpcGxlJztcbnZhciBTQ1JPTExJTkdfU1BFRUQgPSA0O1xuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2NvbnRhaW5lci5qc1xuXG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLnBhc3NlZEVsZW1lbnR9IHBhc3NlZEVsZW1lbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5DbGFzc05hbWVzfSBDbGFzc05hbWVzXG4gKi9cblxudmFyIGNvbnRhaW5lcl9Db250YWluZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQHBhcmFtIHt7XG4gICAqICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICogIHR5cGU6IHBhc3NlZEVsZW1lbnRbJ3R5cGUnXSxcbiAgICogIGNsYXNzTmFtZXM6IENsYXNzTmFtZXMsXG4gICAqICBwb3NpdGlvblxuICAgKiB9fSBhcmdzXG4gICAqL1xuICBmdW5jdGlvbiBDb250YWluZXIoX3JlZikge1xuICAgIHZhciBlbGVtZW50ID0gX3JlZi5lbGVtZW50LFxuICAgICAgICB0eXBlID0gX3JlZi50eXBlLFxuICAgICAgICBjbGFzc05hbWVzID0gX3JlZi5jbGFzc05hbWVzLFxuICAgICAgICBwb3NpdGlvbiA9IF9yZWYucG9zaXRpb247XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgdGhpcy5pc0ZsaXBwZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzRm9jdXNzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX29uRm9jdXMgPSB0aGlzLl9vbkZvY3VzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25CbHVyID0gdGhpcy5fb25CbHVyLmJpbmQodGhpcyk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ29udGFpbmVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9vbkZvY3VzKTtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX29uQmx1cik7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZUV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fb25Gb2N1cyk7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9vbkJsdXIpO1xuICB9XG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgd2hldGhlciBjb250YWluZXIgc2hvdWxkIGJlIGZsaXBwZWQgYmFzZWQgb24gcGFzc2VkXG4gICAqIGRyb3Bkb3duIHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkcm9wZG93blBvc1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2hvdWxkRmxpcCA9IGZ1bmN0aW9uIHNob3VsZEZsaXAoZHJvcGRvd25Qb3MpIHtcbiAgICBpZiAodHlwZW9mIGRyb3Bkb3duUG9zICE9PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gLy8gSWYgZmxpcCBpcyBlbmFibGVkIGFuZCB0aGUgZHJvcGRvd24gYm90dG9tIHBvc2l0aW9uIGlzXG4gICAgLy8gZ3JlYXRlciB0aGFuIHRoZSB3aW5kb3cgaGVpZ2h0IGZsaXAgdGhlIGRyb3Bkb3duLlxuXG5cbiAgICB2YXIgc2hvdWxkRmxpcCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMucG9zaXRpb24gPT09ICdhdXRvJykge1xuICAgICAgc2hvdWxkRmxpcCA9ICF3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4taGVpZ2h0OiBcIiArIChkcm9wZG93blBvcyArIDEpICsgXCJweClcIikubWF0Y2hlcztcbiAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24gPT09ICd0b3AnKSB7XG4gICAgICBzaG91bGRGbGlwID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2hvdWxkRmxpcDtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGl2ZURlc2NlbmRhbnRJRFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zZXRBY3RpdmVEZXNjZW5kYW50ID0gZnVuY3Rpb24gc2V0QWN0aXZlRGVzY2VuZGFudChhY3RpdmVEZXNjZW5kYW50SUQpIHtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBhY3RpdmVEZXNjZW5kYW50SUQpO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmVBY3RpdmVEZXNjZW5kYW50ID0gZnVuY3Rpb24gcmVtb3ZlQWN0aXZlRGVzY2VuZGFudCgpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRyb3Bkb3duUG9zXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm9wZW4gPSBmdW5jdGlvbiBvcGVuKGRyb3Bkb3duUG9zKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLm9wZW5TdGF0ZSk7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMuc2hvdWxkRmxpcChkcm9wZG93blBvcykpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NOYW1lcy5mbGlwcGVkU3RhdGUpO1xuICAgICAgdGhpcy5pc0ZsaXBwZWQgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY2xvc2UgPSBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzTmFtZXMub3BlblN0YXRlKTtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgdGhpcy5yZW1vdmVBY3RpdmVEZXNjZW5kYW50KCk7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTsgLy8gQSBkcm9wZG93biBmbGlwcyBpZiBpdCBkb2VzIG5vdCBoYXZlIHNwYWNlIHdpdGhpbiB0aGUgcGFnZVxuXG4gICAgaWYgKHRoaXMuaXNGbGlwcGVkKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzTmFtZXMuZmxpcHBlZFN0YXRlKTtcbiAgICAgIHRoaXMuaXNGbGlwcGVkID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5mb2N1cyA9IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgIGlmICghdGhpcy5pc0ZvY3Vzc2VkKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmFkZEZvY3VzU3RhdGUgPSBmdW5jdGlvbiBhZGRGb2N1c1N0YXRlKCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NOYW1lcy5mb2N1c1N0YXRlKTtcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlRm9jdXNTdGF0ZSA9IGZ1bmN0aW9uIHJlbW92ZUZvY3VzU3RhdGUoKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc05hbWVzLmZvY3VzU3RhdGUpO1xuICB9O1xuXG4gIF9wcm90by5lbmFibGUgPSBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc05hbWVzLmRpc2FibGVkU3RhdGUpO1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnKTtcblxuICAgIGlmICh0aGlzLnR5cGUgPT09IFNFTEVDVF9PTkVfVFlQRSkge1xuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgIH1cblxuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGZhbHNlO1xuICB9O1xuXG4gIF9wcm90by5kaXNhYmxlID0gZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzTmFtZXMuZGlzYWJsZWRTdGF0ZSk7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG5cbiAgICBpZiAodGhpcy50eXBlID09PSBTRUxFQ1RfT05FX1RZUEUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgfVxuXG4gICAgdGhpcy5pc0Rpc2FibGVkID0gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by53cmFwID0gZnVuY3Rpb24gd3JhcChlbGVtZW50KSB7XG4gICAgdXRpbHNfd3JhcChlbGVtZW50LCB0aGlzLmVsZW1lbnQpO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAgICovXG4gIDtcblxuICBfcHJvdG8udW53cmFwID0gZnVuY3Rpb24gdW53cmFwKGVsZW1lbnQpIHtcbiAgICAvLyBNb3ZlIHBhc3NlZCBlbGVtZW50IG91dHNpZGUgdGhpcyBlbGVtZW50XG4gICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHRoaXMuZWxlbWVudCk7IC8vIFJlbW92ZSB0aGlzIGVsZW1lbnRcblxuICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH07XG5cbiAgX3Byb3RvLmFkZExvYWRpbmdTdGF0ZSA9IGZ1bmN0aW9uIGFkZExvYWRpbmdTdGF0ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzTmFtZXMubG9hZGluZ1N0YXRlKTtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWJ1c3knLCAndHJ1ZScpO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlTG9hZGluZ1N0YXRlID0gZnVuY3Rpb24gcmVtb3ZlTG9hZGluZ1N0YXRlKCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NOYW1lcy5sb2FkaW5nU3RhdGUpO1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYnVzeScpO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gIH07XG5cbiAgX3Byb3RvLl9vbkZvY3VzID0gZnVuY3Rpb24gX29uRm9jdXMoKSB7XG4gICAgdGhpcy5pc0ZvY3Vzc2VkID0gdHJ1ZTtcbiAgfTtcblxuICBfcHJvdG8uX29uQmx1ciA9IGZ1bmN0aW9uIF9vbkJsdXIoKSB7XG4gICAgdGhpcy5pc0ZvY3Vzc2VkID0gZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIENvbnRhaW5lcjtcbn0oKTtcblxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvaW5wdXQuanNcbmZ1bmN0aW9uIGlucHV0X2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBpbnB1dF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGlucHV0X2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBpbnB1dF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5cblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMucGFzc2VkRWxlbWVudH0gcGFzc2VkRWxlbWVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkNsYXNzTmFtZXN9IENsYXNzTmFtZXNcbiAqL1xuXG52YXIgaW5wdXRfSW5wdXQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQHBhcmFtIHt7XG4gICAqICBlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50LFxuICAgKiAgdHlwZTogcGFzc2VkRWxlbWVudFsndHlwZSddLFxuICAgKiAgY2xhc3NOYW1lczogQ2xhc3NOYW1lcyxcbiAgICogIHByZXZlbnRQYXN0ZTogYm9vbGVhblxuICAgKiB9fSBhcmdzXG4gICAqL1xuICBmdW5jdGlvbiBJbnB1dChfcmVmKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQsXG4gICAgICAgIHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgICAgIGNsYXNzTmFtZXMgPSBfcmVmLmNsYXNzTmFtZXMsXG4gICAgICAgIHByZXZlbnRQYXN0ZSA9IF9yZWYucHJldmVudFBhc3RlO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuICAgIHRoaXMucHJldmVudFBhc3RlID0gcHJldmVudFBhc3RlO1xuICAgIHRoaXMuaXNGb2N1c3NlZCA9IHRoaXMuZWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBlbGVtZW50LmRpc2FibGVkO1xuICAgIHRoaXMuX29uUGFzdGUgPSB0aGlzLl9vblBhc3RlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25JbnB1dCA9IHRoaXMuX29uSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkZvY3VzID0gdGhpcy5fb25Gb2N1cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uQmx1ciA9IHRoaXMuX29uQmx1ci5iaW5kKHRoaXMpO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGxhY2Vob2xkZXJcbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gSW5wdXQucHJvdG90eXBlO1xuXG4gIF9wcm90by5hZGRFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIHRoaXMuX29uUGFzdGUpO1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuX29uSW5wdXQsIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9vbkZvY3VzLCB7XG4gICAgICBwYXNzaXZlOiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9vbkJsdXIsIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLl9vbklucHV0LCB7XG4gICAgICBwYXNzaXZlOiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgdGhpcy5fb25QYXN0ZSk7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fb25Gb2N1cywge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5fb25CbHVyLCB7XG4gICAgICBwYXNzaXZlOiB0cnVlXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmVuYWJsZSA9IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGZhbHNlO1xuICB9O1xuXG4gIF9wcm90by5kaXNhYmxlID0gZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSB0cnVlO1xuICB9O1xuXG4gIF9wcm90by5mb2N1cyA9IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgIGlmICghdGhpcy5pc0ZvY3Vzc2VkKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmJsdXIgPSBmdW5jdGlvbiBibHVyKCkge1xuICAgIGlmICh0aGlzLmlzRm9jdXNzZWQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBTZXQgdmFsdWUgb2YgaW5wdXQgdG8gYmxhbmtcbiAgICogQHBhcmFtIHtib29sZWFufSBzZXRXaWR0aFxuICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICovXG4gIDtcblxuICBfcHJvdG8uY2xlYXIgPSBmdW5jdGlvbiBjbGVhcihzZXRXaWR0aCkge1xuICAgIGlmIChzZXRXaWR0aCA9PT0gdm9pZCAwKSB7XG4gICAgICBzZXRXaWR0aCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudC52YWx1ZSkge1xuICAgICAgdGhpcy5lbGVtZW50LnZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKHNldFdpZHRoKSB7XG4gICAgICB0aGlzLnNldFdpZHRoKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIFNldCB0aGUgY29ycmVjdCBpbnB1dCB3aWR0aCBiYXNlZCBvbiBwbGFjZWhvbGRlclxuICAgKiB2YWx1ZSBvciBpbnB1dCB2YWx1ZVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zZXRXaWR0aCA9IGZ1bmN0aW9uIHNldFdpZHRoKCkge1xuICAgIC8vIFJlc2l6ZSBpbnB1dCB0byBjb250ZW50cyBvciBwbGFjZWhvbGRlclxuICAgIHZhciBfdGhpcyRlbGVtZW50ID0gdGhpcy5lbGVtZW50LFxuICAgICAgICBzdHlsZSA9IF90aGlzJGVsZW1lbnQuc3R5bGUsXG4gICAgICAgIHZhbHVlID0gX3RoaXMkZWxlbWVudC52YWx1ZSxcbiAgICAgICAgcGxhY2Vob2xkZXIgPSBfdGhpcyRlbGVtZW50LnBsYWNlaG9sZGVyO1xuICAgIHN0eWxlLm1pbldpZHRoID0gcGxhY2Vob2xkZXIubGVuZ3RoICsgMSArIFwiY2hcIjtcbiAgICBzdHlsZS53aWR0aCA9IHZhbHVlLmxlbmd0aCArIDEgKyBcImNoXCI7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhY3RpdmVEZXNjZW5kYW50SURcbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2V0QWN0aXZlRGVzY2VuZGFudCA9IGZ1bmN0aW9uIHNldEFjdGl2ZURlc2NlbmRhbnQoYWN0aXZlRGVzY2VuZGFudElEKSB7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgYWN0aXZlRGVzY2VuZGFudElEKTtcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlQWN0aXZlRGVzY2VuZGFudCA9IGZ1bmN0aW9uIHJlbW92ZUFjdGl2ZURlc2NlbmRhbnQoKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG4gIH07XG5cbiAgX3Byb3RvLl9vbklucHV0ID0gZnVuY3Rpb24gX29uSW5wdXQoKSB7XG4gICAgaWYgKHRoaXMudHlwZSAhPT0gU0VMRUNUX09ORV9UWVBFKSB7XG4gICAgICB0aGlzLnNldFdpZHRoKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5fb25QYXN0ZSA9IGZ1bmN0aW9uIF9vblBhc3RlKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMucHJldmVudFBhc3RlKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX29uRm9jdXMgPSBmdW5jdGlvbiBfb25Gb2N1cygpIHtcbiAgICB0aGlzLmlzRm9jdXNzZWQgPSB0cnVlO1xuICB9O1xuXG4gIF9wcm90by5fb25CbHVyID0gZnVuY3Rpb24gX29uQmx1cigpIHtcbiAgICB0aGlzLmlzRm9jdXNzZWQgPSBmYWxzZTtcbiAgfTtcblxuICBpbnB1dF9jcmVhdGVDbGFzcyhJbnB1dCwgW3tcbiAgICBrZXk6IFwicGxhY2Vob2xkZXJcIixcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChwbGFjZWhvbGRlcikge1xuICAgICAgdGhpcy5lbGVtZW50LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHNhbml0aXNlKHRoaXMuZWxlbWVudC52YWx1ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqL1xuICAgICxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5lbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIElucHV0O1xufSgpO1xuXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9saXN0LmpzXG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkNob2ljZX0gQ2hvaWNlXG4gKi9cblxudmFyIGxpc3RfTGlzdCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge3sgZWxlbWVudDogSFRNTEVsZW1lbnQgfX0gYXJnc1xuICAgKi9cbiAgZnVuY3Rpb24gTGlzdChfcmVmKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQ7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLnNjcm9sbFBvcyA9IHRoaXMuZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICB9XG5cbiAgdmFyIF9wcm90byA9IExpc3QucHJvdG90eXBlO1xuXG4gIF9wcm90by5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50IHwgRG9jdW1lbnRGcmFnbWVudH0gbm9kZVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5hcHBlbmQgPSBmdW5jdGlvbiBhcHBlbmQobm9kZSkge1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZ2V0Q2hpbGQgPSBmdW5jdGlvbiBnZXRDaGlsZChzZWxlY3Rvcikge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH1cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5oYXNDaGlsZHJlbiA9IGZ1bmN0aW9uIGhhc0NoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQuaGFzQ2hpbGROb2RlcygpO1xuICB9O1xuXG4gIF9wcm90by5zY3JvbGxUb1RvcCA9IGZ1bmN0aW9uIHNjcm9sbFRvVG9wKCkge1xuICAgIHRoaXMuZWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHsxIHwgLTF9IGRpcmVjdGlvblxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zY3JvbGxUb0NoaWxkRWxlbWVudCA9IGZ1bmN0aW9uIHNjcm9sbFRvQ2hpbGRFbGVtZW50KGVsZW1lbnQsIGRpcmVjdGlvbikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbGlzdEhlaWdodCA9IHRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHQ7IC8vIFNjcm9sbCBwb3NpdGlvbiBvZiBkcm9wZG93blxuXG4gICAgdmFyIGxpc3RTY3JvbGxQb3NpdGlvbiA9IHRoaXMuZWxlbWVudC5zY3JvbGxUb3AgKyBsaXN0SGVpZ2h0O1xuICAgIHZhciBlbGVtZW50SGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7IC8vIERpc3RhbmNlIGZyb20gYm90dG9tIG9mIGVsZW1lbnQgdG8gdG9wIG9mIHBhcmVudFxuXG4gICAgdmFyIGVsZW1lbnRQb3MgPSBlbGVtZW50Lm9mZnNldFRvcCArIGVsZW1lbnRIZWlnaHQ7IC8vIERpZmZlcmVuY2UgYmV0d2VlbiB0aGUgZWxlbWVudCBhbmQgc2Nyb2xsIHBvc2l0aW9uXG5cbiAgICB2YXIgZGVzdGluYXRpb24gPSBkaXJlY3Rpb24gPiAwID8gdGhpcy5lbGVtZW50LnNjcm9sbFRvcCArIGVsZW1lbnRQb3MgLSBsaXN0U2Nyb2xsUG9zaXRpb24gOiBlbGVtZW50Lm9mZnNldFRvcDtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuX2FuaW1hdGVTY3JvbGwoZGVzdGluYXRpb24sIGRpcmVjdGlvbik7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxQb3NcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0cmVuZ3RoXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkZXN0aW5hdGlvblxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5fc2Nyb2xsRG93biA9IGZ1bmN0aW9uIF9zY3JvbGxEb3duKHNjcm9sbFBvcywgc3RyZW5ndGgsIGRlc3RpbmF0aW9uKSB7XG4gICAgdmFyIGVhc2luZyA9IChkZXN0aW5hdGlvbiAtIHNjcm9sbFBvcykgLyBzdHJlbmd0aDtcbiAgICB2YXIgZGlzdGFuY2UgPSBlYXNpbmcgPiAxID8gZWFzaW5nIDogMTtcbiAgICB0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wID0gc2Nyb2xsUG9zICsgZGlzdGFuY2U7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxQb3NcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0cmVuZ3RoXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkZXN0aW5hdGlvblxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5fc2Nyb2xsVXAgPSBmdW5jdGlvbiBfc2Nyb2xsVXAoc2Nyb2xsUG9zLCBzdHJlbmd0aCwgZGVzdGluYXRpb24pIHtcbiAgICB2YXIgZWFzaW5nID0gKHNjcm9sbFBvcyAtIGRlc3RpbmF0aW9uKSAvIHN0cmVuZ3RoO1xuICAgIHZhciBkaXN0YW5jZSA9IGVhc2luZyA+IDEgPyBlYXNpbmcgOiAxO1xuICAgIHRoaXMuZWxlbWVudC5zY3JvbGxUb3AgPSBzY3JvbGxQb3MgLSBkaXN0YW5jZTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHsqfSBkZXN0aW5hdGlvblxuICAgKiBAcGFyYW0geyp9IGRpcmVjdGlvblxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5fYW5pbWF0ZVNjcm9sbCA9IGZ1bmN0aW9uIF9hbmltYXRlU2Nyb2xsKGRlc3RpbmF0aW9uLCBkaXJlY3Rpb24pIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBzdHJlbmd0aCA9IFNDUk9MTElOR19TUEVFRDtcbiAgICB2YXIgY2hvaWNlTGlzdFNjcm9sbFRvcCA9IHRoaXMuZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgdmFyIGNvbnRpbnVlQW5pbWF0aW9uID0gZmFsc2U7XG5cbiAgICBpZiAoZGlyZWN0aW9uID4gMCkge1xuICAgICAgdGhpcy5fc2Nyb2xsRG93bihjaG9pY2VMaXN0U2Nyb2xsVG9wLCBzdHJlbmd0aCwgZGVzdGluYXRpb24pO1xuXG4gICAgICBpZiAoY2hvaWNlTGlzdFNjcm9sbFRvcCA8IGRlc3RpbmF0aW9uKSB7XG4gICAgICAgIGNvbnRpbnVlQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2Nyb2xsVXAoY2hvaWNlTGlzdFNjcm9sbFRvcCwgc3RyZW5ndGgsIGRlc3RpbmF0aW9uKTtcblxuICAgICAgaWYgKGNob2ljZUxpc3RTY3JvbGxUb3AgPiBkZXN0aW5hdGlvbikge1xuICAgICAgICBjb250aW51ZUFuaW1hdGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbnRpbnVlQW5pbWF0aW9uKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIuX2FuaW1hdGVTY3JvbGwoZGVzdGluYXRpb24sIGRpcmVjdGlvbik7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIExpc3Q7XG59KCk7XG5cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3dyYXBwZWQtZWxlbWVudC5qc1xuZnVuY3Rpb24gd3JhcHBlZF9lbGVtZW50X2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiB3cmFwcGVkX2VsZW1lbnRfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSB3cmFwcGVkX2VsZW1lbnRfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIHdyYXBwZWRfZWxlbWVudF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLnBhc3NlZEVsZW1lbnR9IHBhc3NlZEVsZW1lbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5DbGFzc05hbWVzfSBDbGFzc05hbWVzXG4gKi9cblxudmFyIHdyYXBwZWRfZWxlbWVudF9XcmFwcGVkRWxlbWVudCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge3tcbiAgICogIGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudCxcbiAgICogIGNsYXNzTmFtZXM6IENsYXNzTmFtZXMsXG4gICAqIH19IGFyZ3NcbiAgICovXG4gIGZ1bmN0aW9uIFdyYXBwZWRFbGVtZW50KF9yZWYpIHtcbiAgICB2YXIgZWxlbWVudCA9IF9yZWYuZWxlbWVudCxcbiAgICAgICAgY2xhc3NOYW1lcyA9IF9yZWYuY2xhc3NOYW1lcztcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cbiAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkgJiYgIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGVsZW1lbnQgcGFzc2VkJyk7XG4gICAgfVxuXG4gICAgdGhpcy5pc0Rpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gV3JhcHBlZEVsZW1lbnQucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb25jZWFsID0gZnVuY3Rpb24gY29uY2VhbCgpIHtcbiAgICAvLyBIaWRlIHBhc3NlZCBpbnB1dFxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NOYW1lcy5pbnB1dCk7XG4gICAgdGhpcy5lbGVtZW50LmhpZGRlbiA9IHRydWU7IC8vIFJlbW92ZSBlbGVtZW50IGZyb20gdGFiIGluZGV4XG5cbiAgICB0aGlzLmVsZW1lbnQudGFiSW5kZXggPSAtMTsgLy8gQmFja3VwIG9yaWdpbmFsIHN0eWxlcyBpZiBhbnlcblxuICAgIHZhciBvcmlnU3R5bGUgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xuXG4gICAgaWYgKG9yaWdTdHlsZSkge1xuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jaG9pY2Utb3JpZy1zdHlsZScsIG9yaWdTdHlsZSk7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jaG9pY2UnLCAnYWN0aXZlJyk7XG4gIH07XG5cbiAgX3Byb3RvLnJldmVhbCA9IGZ1bmN0aW9uIHJldmVhbCgpIHtcbiAgICAvLyBSZWluc3RhdGUgcGFzc2VkIGVsZW1lbnRcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzTmFtZXMuaW5wdXQpO1xuICAgIHRoaXMuZWxlbWVudC5oaWRkZW4gPSBmYWxzZTtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpOyAvLyBSZWNvdmVyIG9yaWdpbmFsIHN0eWxlcyBpZiBhbnlcblxuICAgIHZhciBvcmlnU3R5bGUgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNob2ljZS1vcmlnLXN0eWxlJyk7XG5cbiAgICBpZiAob3JpZ1N0eWxlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWNob2ljZS1vcmlnLXN0eWxlJyk7XG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsIG9yaWdTdHlsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1jaG9pY2UnKTsgLy8gUmUtYXNzaWduIHZhbHVlcyAtIHRoaXMgaXMgd2VpcmQsIEkga25vd1xuICAgIC8vIEB0b2RvIEZpZ3VyZSBvdXQgd2h5IHdlIG5lZWQgdG8gZG8gdGhpc1xuXG4gICAgdGhpcy5lbGVtZW50LnZhbHVlID0gdGhpcy5lbGVtZW50LnZhbHVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtYXNzaWduXG4gIH07XG5cbiAgX3Byb3RvLmVuYWJsZSA9IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIHRoaXMuZWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGZhbHNlO1xuICB9O1xuXG4gIF9wcm90by5kaXNhYmxlID0gZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbiAgICB0aGlzLmVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuaXNEaXNhYmxlZCA9IHRydWU7XG4gIH07XG5cbiAgX3Byb3RvLnRyaWdnZXJFdmVudCA9IGZ1bmN0aW9uIHRyaWdnZXJFdmVudChldmVudFR5cGUsIGRhdGEpIHtcbiAgICBkaXNwYXRjaEV2ZW50KHRoaXMuZWxlbWVudCwgZXZlbnRUeXBlLCBkYXRhKTtcbiAgfTtcblxuICB3cmFwcGVkX2VsZW1lbnRfY3JlYXRlQ2xhc3MoV3JhcHBlZEVsZW1lbnQsIFt7XG4gICAga2V5OiBcImlzQWN0aXZlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmRhdGFzZXQuY2hvaWNlID09PSAnYWN0aXZlJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGlyXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmRpcjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQudmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgLy8geW91IG11c3QgZGVmaW5lIHNldHRlciBoZXJlIG90aGVyd2lzZSBpdCB3aWxsIGJlIHJlYWRvbmx5IHByb3BlcnR5XG4gICAgICB0aGlzLmVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gV3JhcHBlZEVsZW1lbnQ7XG59KCk7XG5cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3dyYXBwZWQtaW5wdXQuanNcbmZ1bmN0aW9uIHdyYXBwZWRfaW5wdXRfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIHdyYXBwZWRfaW5wdXRfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSB3cmFwcGVkX2lucHV0X2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSB3cmFwcGVkX2lucHV0X2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkNsYXNzTmFtZXN9IENsYXNzTmFtZXNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5JdGVtfSBJdGVtXG4gKi9cblxudmFyIFdyYXBwZWRJbnB1dCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1dyYXBwZWRFbGVtZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFdyYXBwZWRJbnB1dCwgX1dyYXBwZWRFbGVtZW50KTtcblxuICAvKipcbiAgICogQHBhcmFtIHt7XG4gICAqICBlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50LFxuICAgKiAgY2xhc3NOYW1lczogQ2xhc3NOYW1lcyxcbiAgICogIGRlbGltaXRlcjogc3RyaW5nXG4gICAqIH19IGFyZ3NcbiAgICovXG4gIGZ1bmN0aW9uIFdyYXBwZWRJbnB1dChfcmVmKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgdmFyIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQsXG4gICAgICAgIGNsYXNzTmFtZXMgPSBfcmVmLmNsYXNzTmFtZXMsXG4gICAgICAgIGRlbGltaXRlciA9IF9yZWYuZGVsaW1pdGVyO1xuICAgIF90aGlzID0gX1dyYXBwZWRFbGVtZW50LmNhbGwodGhpcywge1xuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIGNsYXNzTmFtZXM6IGNsYXNzTmFtZXNcbiAgICB9KSB8fCB0aGlzO1xuICAgIF90aGlzLmRlbGltaXRlciA9IGRlbGltaXRlcjtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuXG5cbiAgd3JhcHBlZF9pbnB1dF9jcmVhdGVDbGFzcyhXcmFwcGVkSW5wdXQsIFt7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0l0ZW1bXX0gaXRlbXNcbiAgICAgKi9cbiAgICAsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoaXRlbXMpIHtcbiAgICAgIHZhciBpdGVtVmFsdWVzID0gaXRlbXMubWFwKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICB2YXIgdmFsdWUgPSBfcmVmMi52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICB2YXIgam9pbmVkVmFsdWVzID0gaXRlbVZhbHVlcy5qb2luKHRoaXMuZGVsaW1pdGVyKTtcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgam9pbmVkVmFsdWVzKTtcbiAgICAgIHRoaXMuZWxlbWVudC52YWx1ZSA9IGpvaW5lZFZhbHVlcztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gV3JhcHBlZElucHV0O1xufSh3cmFwcGVkX2VsZW1lbnRfV3JhcHBlZEVsZW1lbnQpO1xuXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy93cmFwcGVkLXNlbGVjdC5qc1xuZnVuY3Rpb24gd3JhcHBlZF9zZWxlY3RfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIHdyYXBwZWRfc2VsZWN0X2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgd3JhcHBlZF9zZWxlY3RfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIHdyYXBwZWRfc2VsZWN0X2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIHdyYXBwZWRfc2VsZWN0X2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuQ2xhc3NOYW1lc30gQ2xhc3NOYW1lc1xuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkl0ZW19IEl0ZW1cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5DaG9pY2V9IENob2ljZVxuICovXG5cbnZhciBXcmFwcGVkU2VsZWN0ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfV3JhcHBlZEVsZW1lbnQpIHtcbiAgd3JhcHBlZF9zZWxlY3RfaW5oZXJpdHNMb29zZShXcmFwcGVkU2VsZWN0LCBfV3JhcHBlZEVsZW1lbnQpO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3tcbiAgICogIGVsZW1lbnQ6IEhUTUxTZWxlY3RFbGVtZW50LFxuICAgKiAgY2xhc3NOYW1lczogQ2xhc3NOYW1lcyxcbiAgICogIGRlbGltaXRlcjogc3RyaW5nXG4gICAqICB0ZW1wbGF0ZTogZnVuY3Rpb25cbiAgICogfX0gYXJnc1xuICAgKi9cbiAgZnVuY3Rpb24gV3JhcHBlZFNlbGVjdChfcmVmKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgdmFyIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQsXG4gICAgICAgIGNsYXNzTmFtZXMgPSBfcmVmLmNsYXNzTmFtZXMsXG4gICAgICAgIHRlbXBsYXRlID0gX3JlZi50ZW1wbGF0ZTtcbiAgICBfdGhpcyA9IF9XcmFwcGVkRWxlbWVudC5jYWxsKHRoaXMsIHtcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICBjbGFzc05hbWVzOiBjbGFzc05hbWVzXG4gICAgfSkgfHwgdGhpcztcbiAgICBfdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBXcmFwcGVkU2VsZWN0LnByb3RvdHlwZTtcblxuICAvKipcbiAgICogQHBhcmFtIHtEb2N1bWVudEZyYWdtZW50fSBmcmFnbWVudFxuICAgKi9cbiAgX3Byb3RvLmFwcGVuZERvY0ZyYWdtZW50ID0gZnVuY3Rpb24gYXBwZW5kRG9jRnJhZ21lbnQoZnJhZ21lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgfTtcblxuICB3cmFwcGVkX3NlbGVjdF9jcmVhdGVDbGFzcyhXcmFwcGVkU2VsZWN0LCBbe1xuICAgIGtleTogXCJwbGFjZWhvbGRlck9wdGlvblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdvcHRpb25bdmFsdWU9XCJcIl0nKSB8fCAvLyBCYWNrd2FyZCBjb21wYXRpYmlsaXR5IGxheWVyIGZvciB0aGUgbm9uLXN0YW5kYXJkIHBsYWNlaG9sZGVyIGF0dHJpYnV0ZSBzdXBwb3J0ZWQgaW4gb2xkZXIgdmVyc2lvbnMuXG4gICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvcignb3B0aW9uW3BsYWNlaG9sZGVyXScpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7RWxlbWVudFtdfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib3B0aW9uR3JvdXBzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ09QVEdST1VQJykpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7SXRlbVtdIHwgQ2hvaWNlW119XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvcHRpb25zXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmVsZW1lbnQub3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7SXRlbVtdIHwgQ2hvaWNlW119IG9wdGlvbnNcbiAgICAgKi9cbiAgICAsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQob3B0aW9ucykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgICAgdmFyIGFkZE9wdGlvblRvRnJhZ21lbnQgPSBmdW5jdGlvbiBhZGRPcHRpb25Ub0ZyYWdtZW50KGRhdGEpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgc3RhbmRhcmQgc2VsZWN0IG9wdGlvblxuICAgICAgICB2YXIgb3B0aW9uID0gX3RoaXMyLnRlbXBsYXRlKGRhdGEpOyAvLyBBcHBlbmQgaXQgdG8gZnJhZ21lbnRcblxuXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICB9OyAvLyBBZGQgZWFjaCBsaXN0IGl0ZW0gdG8gbGlzdFxuXG5cbiAgICAgIG9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAob3B0aW9uRGF0YSkge1xuICAgICAgICByZXR1cm4gYWRkT3B0aW9uVG9GcmFnbWVudChvcHRpb25EYXRhKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hcHBlbmREb2NGcmFnbWVudChmcmFnbWVudCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFdyYXBwZWRTZWxlY3Q7XG59KHdyYXBwZWRfZWxlbWVudF9XcmFwcGVkRWxlbWVudCk7XG5cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2luZGV4LmpzXG5cblxuXG5cblxuXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3NjcmlwdHMvdGVtcGxhdGVzLmpzXG4vKipcbiAqIEhlbHBlcnMgdG8gY3JlYXRlIEhUTUwgZWxlbWVudHMgdXNlZCBieSBDaG9pY2VzXG4gKiBDYW4gYmUgb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgYGNhbGxiYWNrT25DcmVhdGVUZW1wbGF0ZXNgIG9wdGlvblxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLlRlbXBsYXRlc30gVGVtcGxhdGVzXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuQ2xhc3NOYW1lc30gQ2xhc3NOYW1lc1xuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLk9wdGlvbnN9IE9wdGlvbnNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5JdGVtfSBJdGVtXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuQ2hvaWNlfSBDaG9pY2VcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5Hcm91cH0gR3JvdXBcbiAqL1xudmFyIFRFTVBMQVRFUyA9XG4vKiogQHR5cGUge1RlbXBsYXRlc30gKi9cbntcbiAgLyoqXG4gICAqIEBwYXJhbSB7UGFydGlhbDxDbGFzc05hbWVzPn0gY2xhc3NOYW1lc1xuICAgKiBAcGFyYW0ge1wibHRyXCIgfCBcInJ0bFwiIHwgXCJhdXRvXCJ9IGRpclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzU2VsZWN0RWxlbWVudFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzU2VsZWN0T25lRWxlbWVudFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNlYXJjaEVuYWJsZWRcbiAgICogQHBhcmFtIHtcInNlbGVjdC1vbmVcIiB8IFwic2VsZWN0LW11bHRpcGxlXCIgfCBcInRleHRcIn0gcGFzc2VkRWxlbWVudFR5cGVcbiAgICovXG4gIGNvbnRhaW5lck91dGVyOiBmdW5jdGlvbiBjb250YWluZXJPdXRlcihfcmVmLCBkaXIsIGlzU2VsZWN0RWxlbWVudCwgaXNTZWxlY3RPbmVFbGVtZW50LCBzZWFyY2hFbmFibGVkLCBwYXNzZWRFbGVtZW50VHlwZSkge1xuICAgIHZhciBfY29udGFpbmVyT3V0ZXIgPSBfcmVmLmNvbnRhaW5lck91dGVyO1xuICAgIHZhciBkaXYgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCB7XG4gICAgICBjbGFzc05hbWU6IF9jb250YWluZXJPdXRlclxuICAgIH0pO1xuICAgIGRpdi5kYXRhc2V0LnR5cGUgPSBwYXNzZWRFbGVtZW50VHlwZTtcblxuICAgIGlmIChkaXIpIHtcbiAgICAgIGRpdi5kaXIgPSBkaXI7XG4gICAgfVxuXG4gICAgaWYgKGlzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgZGl2LnRhYkluZGV4ID0gMDtcbiAgICB9XG5cbiAgICBpZiAoaXNTZWxlY3RFbGVtZW50KSB7XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdyb2xlJywgc2VhcmNoRW5hYmxlZCA/ICdjb21ib2JveCcgOiAnbGlzdGJveCcpO1xuXG4gICAgICBpZiAoc2VhcmNoRW5hYmxlZCkge1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdhcmlhLWF1dG9jb21wbGV0ZScsICdsaXN0Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnYXJpYS1oYXNwb3B1cCcsICd0cnVlJyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgIHJldHVybiBkaXY7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7UGFydGlhbDxDbGFzc05hbWVzPn0gY2xhc3NOYW1lc1xuICAgKi9cbiAgY29udGFpbmVySW5uZXI6IGZ1bmN0aW9uIGNvbnRhaW5lcklubmVyKF9yZWYyKSB7XG4gICAgdmFyIF9jb250YWluZXJJbm5lciA9IF9yZWYyLmNvbnRhaW5lcklubmVyO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCB7XG4gICAgICBjbGFzc05hbWU6IF9jb250YWluZXJJbm5lclxuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1BhcnRpYWw8Q2xhc3NOYW1lcz59IGNsYXNzTmFtZXNcbiAgICogQHBhcmFtIHtib29sZWFufSBpc1NlbGVjdE9uZUVsZW1lbnRcbiAgICovXG4gIGl0ZW1MaXN0OiBmdW5jdGlvbiBpdGVtTGlzdChfcmVmMywgaXNTZWxlY3RPbmVFbGVtZW50KSB7XG4gICAgdmFyIGxpc3QgPSBfcmVmMy5saXN0LFxuICAgICAgICBsaXN0U2luZ2xlID0gX3JlZjMubGlzdFNpbmdsZSxcbiAgICAgICAgbGlzdEl0ZW1zID0gX3JlZjMubGlzdEl0ZW1zO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCB7XG4gICAgICBjbGFzc05hbWU6IGxpc3QgKyBcIiBcIiArIChpc1NlbGVjdE9uZUVsZW1lbnQgPyBsaXN0U2luZ2xlIDogbGlzdEl0ZW1zKVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1BhcnRpYWw8Q2xhc3NOYW1lcz59IGNsYXNzTmFtZXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqL1xuICBwbGFjZWhvbGRlcjogZnVuY3Rpb24gcGxhY2Vob2xkZXIoX3JlZjQsIHZhbHVlKSB7XG4gICAgdmFyIF9wbGFjZWhvbGRlciA9IF9yZWY0LnBsYWNlaG9sZGVyO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCB7XG4gICAgICBjbGFzc05hbWU6IF9wbGFjZWhvbGRlcixcbiAgICAgIGlubmVySFRNTDogdmFsdWVcbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtQYXJ0aWFsPENsYXNzTmFtZXM+fSBjbGFzc05hbWVzXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlbW92ZUl0ZW1CdXR0b25cbiAgICovXG4gIGl0ZW06IGZ1bmN0aW9uIGl0ZW0oX3JlZjUsIF9yZWY2LCByZW1vdmVJdGVtQnV0dG9uKSB7XG4gICAgdmFyIF9pdGVtID0gX3JlZjUuaXRlbSxcbiAgICAgICAgYnV0dG9uID0gX3JlZjUuYnV0dG9uLFxuICAgICAgICBoaWdobGlnaHRlZFN0YXRlID0gX3JlZjUuaGlnaGxpZ2h0ZWRTdGF0ZSxcbiAgICAgICAgaXRlbVNlbGVjdGFibGUgPSBfcmVmNS5pdGVtU2VsZWN0YWJsZSxcbiAgICAgICAgcGxhY2Vob2xkZXIgPSBfcmVmNS5wbGFjZWhvbGRlcjtcbiAgICB2YXIgaWQgPSBfcmVmNi5pZCxcbiAgICAgICAgdmFsdWUgPSBfcmVmNi52YWx1ZSxcbiAgICAgICAgbGFiZWwgPSBfcmVmNi5sYWJlbCxcbiAgICAgICAgY3VzdG9tUHJvcGVydGllcyA9IF9yZWY2LmN1c3RvbVByb3BlcnRpZXMsXG4gICAgICAgIGFjdGl2ZSA9IF9yZWY2LmFjdGl2ZSxcbiAgICAgICAgZGlzYWJsZWQgPSBfcmVmNi5kaXNhYmxlZCxcbiAgICAgICAgaGlnaGxpZ2h0ZWQgPSBfcmVmNi5oaWdobGlnaHRlZCxcbiAgICAgICAgaXNQbGFjZWhvbGRlciA9IF9yZWY2LnBsYWNlaG9sZGVyO1xuICAgIHZhciBkaXYgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCB7XG4gICAgICBjbGFzc05hbWU6IF9pdGVtLFxuICAgICAgaW5uZXJIVE1MOiBsYWJlbFxuICAgIH0pO1xuICAgIE9iamVjdC5hc3NpZ24oZGl2LmRhdGFzZXQsIHtcbiAgICAgIGl0ZW06ICcnLFxuICAgICAgaWQ6IGlkLFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgY3VzdG9tUHJvcGVydGllczogY3VzdG9tUHJvcGVydGllc1xuICAgIH0pO1xuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICB9XG5cbiAgICBpZiAoaXNQbGFjZWhvbGRlcikge1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQocGxhY2Vob2xkZXIpO1xuICAgIH1cblxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKGhpZ2hsaWdodGVkID8gaGlnaGxpZ2h0ZWRTdGF0ZSA6IGl0ZW1TZWxlY3RhYmxlKTtcblxuICAgIGlmIChyZW1vdmVJdGVtQnV0dG9uKSB7XG4gICAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoaXRlbVNlbGVjdGFibGUpO1xuICAgICAgfVxuXG4gICAgICBkaXYuZGF0YXNldC5kZWxldGFibGUgPSAnJztcbiAgICAgIC8qKiBAdG9kbyBUaGlzIE1VU1QgYmUgbG9jYWxpemFibGUsIG5vdCBoYXJkY29kZWQhICovXG5cbiAgICAgIHZhciBSRU1PVkVfSVRFTV9URVhUID0gJ1JlbW92ZSBpdGVtJztcbiAgICAgIHZhciByZW1vdmVCdXR0b24gPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLCB7XG4gICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICBjbGFzc05hbWU6IGJ1dHRvbixcbiAgICAgICAgaW5uZXJIVE1MOiBSRU1PVkVfSVRFTV9URVhUXG4gICAgICB9KTtcbiAgICAgIHJlbW92ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBSRU1PVkVfSVRFTV9URVhUICsgXCI6ICdcIiArIHZhbHVlICsgXCInXCIpO1xuICAgICAgcmVtb3ZlQnV0dG9uLmRhdGFzZXQuYnV0dG9uID0gJyc7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQocmVtb3ZlQnV0dG9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGl2O1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1BhcnRpYWw8Q2xhc3NOYW1lcz59IGNsYXNzTmFtZXNcbiAgICogQHBhcmFtIHtib29sZWFufSBpc1NlbGVjdE9uZUVsZW1lbnRcbiAgICovXG4gIGNob2ljZUxpc3Q6IGZ1bmN0aW9uIGNob2ljZUxpc3QoX3JlZjcsIGlzU2VsZWN0T25lRWxlbWVudCkge1xuICAgIHZhciBsaXN0ID0gX3JlZjcubGlzdDtcbiAgICB2YXIgZGl2ID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwge1xuICAgICAgY2xhc3NOYW1lOiBsaXN0XG4gICAgfSk7XG5cbiAgICBpZiAoIWlzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnYXJpYS1tdWx0aXNlbGVjdGFibGUnLCAndHJ1ZScpO1xuICAgIH1cblxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnbGlzdGJveCcpO1xuICAgIHJldHVybiBkaXY7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7UGFydGlhbDxDbGFzc05hbWVzPn0gY2xhc3NOYW1lc1xuICAgKiBAcGFyYW0ge0dyb3VwfSBncm91cFxuICAgKi9cbiAgY2hvaWNlR3JvdXA6IGZ1bmN0aW9uIGNob2ljZUdyb3VwKF9yZWY4LCBfcmVmOSkge1xuICAgIHZhciBncm91cCA9IF9yZWY4Lmdyb3VwLFxuICAgICAgICBncm91cEhlYWRpbmcgPSBfcmVmOC5ncm91cEhlYWRpbmcsXG4gICAgICAgIGl0ZW1EaXNhYmxlZCA9IF9yZWY4Lml0ZW1EaXNhYmxlZDtcbiAgICB2YXIgaWQgPSBfcmVmOS5pZCxcbiAgICAgICAgdmFsdWUgPSBfcmVmOS52YWx1ZSxcbiAgICAgICAgZGlzYWJsZWQgPSBfcmVmOS5kaXNhYmxlZDtcbiAgICB2YXIgZGl2ID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwge1xuICAgICAgY2xhc3NOYW1lOiBncm91cCArIFwiIFwiICsgKGRpc2FibGVkID8gaXRlbURpc2FibGVkIDogJycpXG4gICAgfSk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgncm9sZScsICdncm91cCcpO1xuICAgIE9iamVjdC5hc3NpZ24oZGl2LmRhdGFzZXQsIHtcbiAgICAgIGdyb3VwOiAnJyxcbiAgICAgIGlkOiBpZCxcbiAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH0pO1xuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICB9XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwge1xuICAgICAgY2xhc3NOYW1lOiBncm91cEhlYWRpbmcsXG4gICAgICBpbm5lckhUTUw6IHZhbHVlXG4gICAgfSkpO1xuICAgIHJldHVybiBkaXY7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7UGFydGlhbDxDbGFzc05hbWVzPn0gY2xhc3NOYW1lc1xuICAgKiBAcGFyYW0ge0Nob2ljZX0gY2hvaWNlXG4gICAqIEBwYXJhbSB7T3B0aW9uc1snaXRlbVNlbGVjdFRleHQnXX0gc2VsZWN0VGV4dFxuICAgKi9cbiAgY2hvaWNlOiBmdW5jdGlvbiBjaG9pY2UoX3JlZjEwLCBfcmVmMTEsIHNlbGVjdFRleHQpIHtcbiAgICB2YXIgaXRlbSA9IF9yZWYxMC5pdGVtLFxuICAgICAgICBpdGVtQ2hvaWNlID0gX3JlZjEwLml0ZW1DaG9pY2UsXG4gICAgICAgIGl0ZW1TZWxlY3RhYmxlID0gX3JlZjEwLml0ZW1TZWxlY3RhYmxlLFxuICAgICAgICBzZWxlY3RlZFN0YXRlID0gX3JlZjEwLnNlbGVjdGVkU3RhdGUsXG4gICAgICAgIGl0ZW1EaXNhYmxlZCA9IF9yZWYxMC5pdGVtRGlzYWJsZWQsXG4gICAgICAgIHBsYWNlaG9sZGVyID0gX3JlZjEwLnBsYWNlaG9sZGVyO1xuICAgIHZhciBpZCA9IF9yZWYxMS5pZCxcbiAgICAgICAgdmFsdWUgPSBfcmVmMTEudmFsdWUsXG4gICAgICAgIGxhYmVsID0gX3JlZjExLmxhYmVsLFxuICAgICAgICBncm91cElkID0gX3JlZjExLmdyb3VwSWQsXG4gICAgICAgIGVsZW1lbnRJZCA9IF9yZWYxMS5lbGVtZW50SWQsXG4gICAgICAgIGlzRGlzYWJsZWQgPSBfcmVmMTEuZGlzYWJsZWQsXG4gICAgICAgIGlzU2VsZWN0ZWQgPSBfcmVmMTEuc2VsZWN0ZWQsXG4gICAgICAgIGlzUGxhY2Vob2xkZXIgPSBfcmVmMTEucGxhY2Vob2xkZXI7XG4gICAgdmFyIGRpdiA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHtcbiAgICAgIGlkOiBlbGVtZW50SWQsXG4gICAgICBpbm5lckhUTUw6IGxhYmVsLFxuICAgICAgY2xhc3NOYW1lOiBpdGVtICsgXCIgXCIgKyBpdGVtQ2hvaWNlXG4gICAgfSk7XG5cbiAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoc2VsZWN0ZWRTdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGlzUGxhY2Vob2xkZXIpIHtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKHBsYWNlaG9sZGVyKTtcbiAgICB9XG5cbiAgICBkaXYuc2V0QXR0cmlidXRlKCdyb2xlJywgZ3JvdXBJZCA+IDAgPyAndHJlZWl0ZW0nIDogJ29wdGlvbicpO1xuICAgIE9iamVjdC5hc3NpZ24oZGl2LmRhdGFzZXQsIHtcbiAgICAgIGNob2ljZTogJycsXG4gICAgICBpZDogaWQsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBzZWxlY3RUZXh0OiBzZWxlY3RUZXh0XG4gICAgfSk7XG5cbiAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoaXRlbURpc2FibGVkKTtcbiAgICAgIGRpdi5kYXRhc2V0LmNob2ljZURpc2FibGVkID0gJyc7XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoaXRlbVNlbGVjdGFibGUpO1xuICAgICAgZGl2LmRhdGFzZXQuY2hvaWNlU2VsZWN0YWJsZSA9ICcnO1xuICAgIH1cblxuICAgIHJldHVybiBkaXY7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7UGFydGlhbDxDbGFzc05hbWVzPn0gY2xhc3NOYW1lc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcGxhY2Vob2xkZXJWYWx1ZVxuICAgKi9cbiAgaW5wdXQ6IGZ1bmN0aW9uIGlucHV0KF9yZWYxMiwgcGxhY2Vob2xkZXJWYWx1ZSkge1xuICAgIHZhciBfaW5wdXQgPSBfcmVmMTIuaW5wdXQsXG4gICAgICAgIGlucHV0Q2xvbmVkID0gX3JlZjEyLmlucHV0Q2xvbmVkO1xuICAgIHZhciBpbnAgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JyksIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGNsYXNzTmFtZTogX2lucHV0ICsgXCIgXCIgKyBpbnB1dENsb25lZCxcbiAgICAgIGF1dG9jb21wbGV0ZTogJ29mZicsXG4gICAgICBhdXRvY2FwaXRhbGl6ZTogJ29mZicsXG4gICAgICBzcGVsbGNoZWNrOiBmYWxzZVxuICAgIH0pO1xuICAgIGlucC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAndGV4dGJveCcpO1xuICAgIGlucC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYXV0b2NvbXBsZXRlJywgJ2xpc3QnKTtcbiAgICBpbnAuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgcGxhY2Vob2xkZXJWYWx1ZSk7XG4gICAgcmV0dXJuIGlucDtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtQYXJ0aWFsPENsYXNzTmFtZXM+fSBjbGFzc05hbWVzXG4gICAqL1xuICBkcm9wZG93bjogZnVuY3Rpb24gZHJvcGRvd24oX3JlZjEzKSB7XG4gICAgdmFyIGxpc3QgPSBfcmVmMTMubGlzdCxcbiAgICAgICAgbGlzdERyb3Bkb3duID0gX3JlZjEzLmxpc3REcm9wZG93bjtcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQobGlzdCwgbGlzdERyb3Bkb3duKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfSxcblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtQYXJ0aWFsPENsYXNzTmFtZXM+fSBjbGFzc05hbWVzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbm5lckhUTUxcbiAgICogQHBhcmFtIHtcIm5vLWNob2ljZXNcIiB8IFwibm8tcmVzdWx0c1wiIHwgXCJcIn0gdHlwZVxuICAgKi9cbiAgbm90aWNlOiBmdW5jdGlvbiBub3RpY2UoX3JlZjE0LCBpbm5lckhUTUwsIHR5cGUpIHtcbiAgICB2YXIgaXRlbSA9IF9yZWYxNC5pdGVtLFxuICAgICAgICBpdGVtQ2hvaWNlID0gX3JlZjE0Lml0ZW1DaG9pY2UsXG4gICAgICAgIG5vUmVzdWx0cyA9IF9yZWYxNC5ub1Jlc3VsdHMsXG4gICAgICAgIG5vQ2hvaWNlcyA9IF9yZWYxNC5ub0Nob2ljZXM7XG5cbiAgICBpZiAodHlwZSA9PT0gdm9pZCAwKSB7XG4gICAgICB0eXBlID0gJyc7XG4gICAgfVxuXG4gICAgdmFyIGNsYXNzZXMgPSBbaXRlbSwgaXRlbUNob2ljZV07XG5cbiAgICBpZiAodHlwZSA9PT0gJ25vLWNob2ljZXMnKSB7XG4gICAgICBjbGFzc2VzLnB1c2gobm9DaG9pY2VzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICduby1yZXN1bHRzJykge1xuICAgICAgY2xhc3Nlcy5wdXNoKG5vUmVzdWx0cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHtcbiAgICAgIGlubmVySFRNTDogaW5uZXJIVE1MLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLmpvaW4oJyAnKVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0l0ZW19IG9wdGlvblxuICAgKi9cbiAgb3B0aW9uOiBmdW5jdGlvbiBvcHRpb24oX3JlZjE1KSB7XG4gICAgdmFyIGxhYmVsID0gX3JlZjE1LmxhYmVsLFxuICAgICAgICB2YWx1ZSA9IF9yZWYxNS52YWx1ZSxcbiAgICAgICAgY3VzdG9tUHJvcGVydGllcyA9IF9yZWYxNS5jdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgICBhY3RpdmUgPSBfcmVmMTUuYWN0aXZlLFxuICAgICAgICBkaXNhYmxlZCA9IF9yZWYxNS5kaXNhYmxlZDtcbiAgICB2YXIgb3B0ID0gbmV3IE9wdGlvbihsYWJlbCwgdmFsdWUsIGZhbHNlLCBhY3RpdmUpO1xuXG4gICAgaWYgKGN1c3RvbVByb3BlcnRpZXMpIHtcbiAgICAgIG9wdC5kYXRhc2V0LmN1c3RvbVByb3BlcnRpZXMgPSBjdXN0b21Qcm9wZXJ0aWVzO1xuICAgIH1cblxuICAgIG9wdC5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgIHJldHVybiBvcHQ7XG4gIH1cbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciB0ZW1wbGF0ZXMgPSAoVEVNUExBVEVTKTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3NjcmlwdHMvYWN0aW9ucy9jaG9pY2VzLmpzXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3JlZHV4JykuQWN0aW9ufSBBY3Rpb25cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5DaG9pY2V9IENob2ljZVxuICovXG5cbi8qKlxuICogQGFyZ3VtZW50IHtDaG9pY2V9IGNob2ljZVxuICogQHJldHVybnMge0FjdGlvbiAmIENob2ljZX1cbiAqL1xuXG52YXIgY2hvaWNlc19hZGRDaG9pY2UgPSBmdW5jdGlvbiBhZGRDaG9pY2UoX3JlZikge1xuICB2YXIgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgbGFiZWwgPSBfcmVmLmxhYmVsLFxuICAgICAgaWQgPSBfcmVmLmlkLFxuICAgICAgZ3JvdXBJZCA9IF9yZWYuZ3JvdXBJZCxcbiAgICAgIGRpc2FibGVkID0gX3JlZi5kaXNhYmxlZCxcbiAgICAgIGVsZW1lbnRJZCA9IF9yZWYuZWxlbWVudElkLFxuICAgICAgY3VzdG9tUHJvcGVydGllcyA9IF9yZWYuY3VzdG9tUHJvcGVydGllcyxcbiAgICAgIHBsYWNlaG9sZGVyID0gX3JlZi5wbGFjZWhvbGRlcixcbiAgICAgIGtleUNvZGUgPSBfcmVmLmtleUNvZGU7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQUNUSU9OX1RZUEVTLkFERF9DSE9JQ0UsXG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIGxhYmVsOiBsYWJlbCxcbiAgICBpZDogaWQsXG4gICAgZ3JvdXBJZDogZ3JvdXBJZCxcbiAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgZWxlbWVudElkOiBlbGVtZW50SWQsXG4gICAgY3VzdG9tUHJvcGVydGllczogY3VzdG9tUHJvcGVydGllcyxcbiAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAga2V5Q29kZToga2V5Q29kZVxuICB9O1xufTtcbi8qKlxuICogQGFyZ3VtZW50IHtDaG9pY2VbXX0gcmVzdWx0c1xuICogQHJldHVybnMge0FjdGlvbiAmIHsgcmVzdWx0czogQ2hvaWNlW10gfX1cbiAqL1xuXG52YXIgY2hvaWNlc19maWx0ZXJDaG9pY2VzID0gZnVuY3Rpb24gZmlsdGVyQ2hvaWNlcyhyZXN1bHRzKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQUNUSU9OX1RZUEVTLkZJTFRFUl9DSE9JQ0VTLFxuICAgIHJlc3VsdHM6IHJlc3VsdHNcbiAgfTtcbn07XG4vKipcbiAqIEBhcmd1bWVudCB7Ym9vbGVhbn0gYWN0aXZlXG4gKiBAcmV0dXJucyB7QWN0aW9uICYgeyBhY3RpdmU6IGJvb2xlYW4gfX1cbiAqL1xuXG52YXIgY2hvaWNlc19hY3RpdmF0ZUNob2ljZXMgPSBmdW5jdGlvbiBhY3RpdmF0ZUNob2ljZXMoYWN0aXZlKSB7XG4gIGlmIChhY3RpdmUgPT09IHZvaWQgMCkge1xuICAgIGFjdGl2ZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR5cGU6IEFDVElPTl9UWVBFUy5BQ1RJVkFURV9DSE9JQ0VTLFxuICAgIGFjdGl2ZTogYWN0aXZlXG4gIH07XG59O1xuLyoqXG4gKiBAcmV0dXJucyB7QWN0aW9ufVxuICovXG5cbnZhciBjaG9pY2VzX2NsZWFyQ2hvaWNlcyA9IGZ1bmN0aW9uIGNsZWFyQ2hvaWNlcygpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBQ1RJT05fVFlQRVMuQ0xFQVJfQ0hPSUNFU1xuICB9O1xufTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3NjcmlwdHMvYWN0aW9ucy9pdGVtcy5qc1xuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3JlZHV4JykuQWN0aW9ufSBBY3Rpb25cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5JdGVtfSBJdGVtXG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge0l0ZW19IGl0ZW1cbiAqIEByZXR1cm5zIHtBY3Rpb24gJiBJdGVtfVxuICovXG5cbnZhciBpdGVtc19hZGRJdGVtID0gZnVuY3Rpb24gYWRkSXRlbShfcmVmKSB7XG4gIHZhciB2YWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgICBsYWJlbCA9IF9yZWYubGFiZWwsXG4gICAgICBpZCA9IF9yZWYuaWQsXG4gICAgICBjaG9pY2VJZCA9IF9yZWYuY2hvaWNlSWQsXG4gICAgICBncm91cElkID0gX3JlZi5ncm91cElkLFxuICAgICAgY3VzdG9tUHJvcGVydGllcyA9IF9yZWYuY3VzdG9tUHJvcGVydGllcyxcbiAgICAgIHBsYWNlaG9sZGVyID0gX3JlZi5wbGFjZWhvbGRlcixcbiAgICAgIGtleUNvZGUgPSBfcmVmLmtleUNvZGU7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQUNUSU9OX1RZUEVTLkFERF9JVEVNLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBsYWJlbDogbGFiZWwsXG4gICAgaWQ6IGlkLFxuICAgIGNob2ljZUlkOiBjaG9pY2VJZCxcbiAgICBncm91cElkOiBncm91cElkLFxuICAgIGN1c3RvbVByb3BlcnRpZXM6IGN1c3RvbVByb3BlcnRpZXMsXG4gICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgIGtleUNvZGU6IGtleUNvZGVcbiAgfTtcbn07XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICogQHBhcmFtIHtzdHJpbmd9IGNob2ljZUlkXG4gKiBAcmV0dXJucyB7QWN0aW9uICYgeyBpZDogc3RyaW5nLCBjaG9pY2VJZDogc3RyaW5nIH19XG4gKi9cblxudmFyIGl0ZW1zX3JlbW92ZUl0ZW0gPSBmdW5jdGlvbiByZW1vdmVJdGVtKGlkLCBjaG9pY2VJZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFDVElPTl9UWVBFUy5SRU1PVkVfSVRFTSxcbiAgICBpZDogaWQsXG4gICAgY2hvaWNlSWQ6IGNob2ljZUlkXG4gIH07XG59O1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaGlnaGxpZ2h0ZWRcbiAqIEByZXR1cm5zIHtBY3Rpb24gJiB7IGlkOiBzdHJpbmcsIGhpZ2hsaWdodGVkOiBib29sZWFuIH19XG4gKi9cblxudmFyIGl0ZW1zX2hpZ2hsaWdodEl0ZW0gPSBmdW5jdGlvbiBoaWdobGlnaHRJdGVtKGlkLCBoaWdobGlnaHRlZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFDVElPTl9UWVBFUy5ISUdITElHSFRfSVRFTSxcbiAgICBpZDogaWQsXG4gICAgaGlnaGxpZ2h0ZWQ6IGhpZ2hsaWdodGVkXG4gIH07XG59O1xuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvc2NyaXB0cy9hY3Rpb25zL2dyb3Vwcy5qc1xuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3JlZHV4JykuQWN0aW9ufSBBY3Rpb25cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5Hcm91cH0gR3JvdXBcbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7R3JvdXB9IGdyb3VwXG4gKiBAcmV0dXJucyB7QWN0aW9uICYgR3JvdXB9XG4gKi9cblxudmFyIGdyb3Vwc19hZGRHcm91cCA9IGZ1bmN0aW9uIGFkZEdyb3VwKF9yZWYpIHtcbiAgdmFyIHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgIGlkID0gX3JlZi5pZCxcbiAgICAgIGFjdGl2ZSA9IF9yZWYuYWN0aXZlLFxuICAgICAgZGlzYWJsZWQgPSBfcmVmLmRpc2FibGVkO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFDVElPTl9UWVBFUy5BRERfR1JPVVAsXG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIGlkOiBpZCxcbiAgICBhY3RpdmU6IGFjdGl2ZSxcbiAgICBkaXNhYmxlZDogZGlzYWJsZWRcbiAgfTtcbn07XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zY3JpcHRzL2FjdGlvbnMvbWlzYy5qc1xuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdyZWR1eCcpLkFjdGlvbn0gQWN0aW9uXG4gKi9cblxuLyoqXG4gKiBAcmV0dXJucyB7QWN0aW9ufVxuICovXG52YXIgY2xlYXJBbGwgPSBmdW5jdGlvbiBjbGVhckFsbCgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQ0xFQVJfQUxMJ1xuICB9O1xufTtcbi8qKlxuICogQHBhcmFtIHthbnl9IHN0YXRlXG4gKiBAcmV0dXJucyB7QWN0aW9uICYgeyBzdGF0ZTogb2JqZWN0IH19XG4gKi9cblxudmFyIHJlc2V0VG8gPSBmdW5jdGlvbiByZXNldFRvKHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ1JFU0VUX1RPJyxcbiAgICBzdGF0ZTogc3RhdGVcbiAgfTtcbn07XG4vKipcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNMb2FkaW5nXG4gKiBAcmV0dXJucyB7QWN0aW9uICYgeyBpc0xvYWRpbmc6IGJvb2xlYW4gfX1cbiAqL1xuXG52YXIgc2V0SXNMb2FkaW5nID0gZnVuY3Rpb24gc2V0SXNMb2FkaW5nKGlzTG9hZGluZykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdTRVRfSVNfTE9BRElORycsXG4gICAgaXNMb2FkaW5nOiBpc0xvYWRpbmdcbiAgfTtcbn07XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zY3JpcHRzL2Nob2ljZXMuanNcbmZ1bmN0aW9uIGNob2ljZXNfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIGNob2ljZXNfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBjaG9pY2VzX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBjaG9pY2VzX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vKiogQHNlZSB7QGxpbmsgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stYWNlYTA3NWQwYWM2OTU0ZjI3NWE3MDAyMzkwNjA1MGN9ICovXG5cbnZhciBJU19JRTExID0gJy1tcy1zY3JvbGwtbGltaXQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiAnLW1zLWltZS1hbGlnbicgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuQ2hvaWNlfSBDaG9pY2VcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5JdGVtfSBJdGVtXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuR3JvdXB9IEdyb3VwXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuT3B0aW9uc30gT3B0aW9uc1xuICovXG5cbi8qKiBAdHlwZSB7UGFydGlhbDxPcHRpb25zPn0gKi9cblxudmFyIFVTRVJfREVGQVVMVFMgPSB7fTtcbi8qKlxuICogQ2hvaWNlc1xuICogQGF1dGhvciBKb3NoIEpvaG5zb248am9zaEBqb3NodWFqb2huc29uLmNvLnVrPlxuICovXG5cbnZhciBjaG9pY2VzX0Nob2ljZXMgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBjaG9pY2VzX2NyZWF0ZUNsYXNzKENob2ljZXMsIG51bGwsIFt7XG4gICAga2V5OiBcImRlZmF1bHRzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHtcbiAgICAgICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgICAgcmV0dXJuIFVTRVJfREVGQVVMVFM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IHRlbXBsYXRlcygpIHtcbiAgICAgICAgICByZXR1cm4gVEVNUExBVEVTO1xuICAgICAgICB9XG5cbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZyB8IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudH0gZWxlbWVudFxuICAgICAqIEBwYXJhbSB7UGFydGlhbDxPcHRpb25zPn0gdXNlckNvbmZpZ1xuICAgICAqL1xuXG4gIH1dKTtcblxuICBmdW5jdGlvbiBDaG9pY2VzKGVsZW1lbnQsIHVzZXJDb25maWcpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKGVsZW1lbnQgPT09IHZvaWQgMCkge1xuICAgICAgZWxlbWVudCA9ICdbZGF0YS1jaG9pY2VdJztcbiAgICB9XG5cbiAgICBpZiAodXNlckNvbmZpZyA9PT0gdm9pZCAwKSB7XG4gICAgICB1c2VyQ29uZmlnID0ge307XG4gICAgfVxuXG4gICAgLyoqIEB0eXBlIHtQYXJ0aWFsPE9wdGlvbnM+fSAqL1xuICAgIHRoaXMuY29uZmlnID0gY2pzX2RlZmF1bHQuYS5hbGwoW0RFRkFVTFRfQ09ORklHLCBDaG9pY2VzLmRlZmF1bHRzLm9wdGlvbnMsIHVzZXJDb25maWddLCAvLyBXaGVuIG1lcmdpbmcgYXJyYXkgY29uZmlncywgcmVwbGFjZSB3aXRoIGEgY29weSBvZiB0aGUgdXNlckNvbmZpZyBhcnJheSxcbiAgICAvLyBpbnN0ZWFkIG9mIGNvbmNhdGVuYXRpbmcgd2l0aCB0aGUgZGVmYXVsdCBhcnJheVxuICAgIHtcbiAgICAgIGFycmF5TWVyZ2U6IGZ1bmN0aW9uIGFycmF5TWVyZ2UoXywgc291cmNlQXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIFtdLmNvbmNhdChzb3VyY2VBcnJheSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdmFyIGludmFsaWRDb25maWdPcHRpb25zID0gZGlmZih0aGlzLmNvbmZpZywgREVGQVVMVF9DT05GSUcpO1xuXG4gICAgaWYgKGludmFsaWRDb25maWdPcHRpb25zLmxlbmd0aCkge1xuICAgICAgY29uc29sZS53YXJuKCdVbmtub3duIGNvbmZpZyBvcHRpb24ocykgcGFzc2VkJywgaW52YWxpZENvbmZpZ09wdGlvbnMuam9pbignLCAnKSk7XG4gICAgfVxuXG4gICAgdmFyIHBhc3NlZEVsZW1lbnQgPSB0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpIDogZWxlbWVudDtcblxuICAgIGlmICghKHBhc3NlZEVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50IHx8IHBhc3NlZEVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignRXhwZWN0ZWQgb25lIG9mIHRoZSBmb2xsb3dpbmcgdHlwZXMgdGV4dHxzZWxlY3Qtb25lfHNlbGVjdC1tdWx0aXBsZScpO1xuICAgIH1cblxuICAgIHRoaXMuX2lzVGV4dEVsZW1lbnQgPSBwYXNzZWRFbGVtZW50LnR5cGUgPT09IFRFWFRfVFlQRTtcbiAgICB0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQgPSBwYXNzZWRFbGVtZW50LnR5cGUgPT09IFNFTEVDVF9PTkVfVFlQRTtcbiAgICB0aGlzLl9pc1NlbGVjdE11bHRpcGxlRWxlbWVudCA9IHBhc3NlZEVsZW1lbnQudHlwZSA9PT0gU0VMRUNUX01VTFRJUExFX1RZUEU7XG4gICAgdGhpcy5faXNTZWxlY3RFbGVtZW50ID0gdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50IHx8IHRoaXMuX2lzU2VsZWN0TXVsdGlwbGVFbGVtZW50O1xuICAgIHRoaXMuY29uZmlnLnNlYXJjaEVuYWJsZWQgPSB0aGlzLl9pc1NlbGVjdE11bHRpcGxlRWxlbWVudCB8fCB0aGlzLmNvbmZpZy5zZWFyY2hFbmFibGVkO1xuXG4gICAgaWYgKCFbJ2F1dG8nLCAnYWx3YXlzJ10uaW5jbHVkZXModGhpcy5jb25maWcucmVuZGVyU2VsZWN0ZWRDaG9pY2VzKSkge1xuICAgICAgdGhpcy5jb25maWcucmVuZGVyU2VsZWN0ZWRDaG9pY2VzID0gJ2F1dG8nO1xuICAgIH1cblxuICAgIGlmICh1c2VyQ29uZmlnLmFkZEl0ZW1GaWx0ZXIgJiYgdHlwZW9mIHVzZXJDb25maWcuYWRkSXRlbUZpbHRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIHJlID0gdXNlckNvbmZpZy5hZGRJdGVtRmlsdGVyIGluc3RhbmNlb2YgUmVnRXhwID8gdXNlckNvbmZpZy5hZGRJdGVtRmlsdGVyIDogbmV3IFJlZ0V4cCh1c2VyQ29uZmlnLmFkZEl0ZW1GaWx0ZXIpO1xuICAgICAgdGhpcy5jb25maWcuYWRkSXRlbUZpbHRlciA9IHJlLnRlc3QuYmluZChyZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzVGV4dEVsZW1lbnQpIHtcbiAgICAgIHRoaXMucGFzc2VkRWxlbWVudCA9IG5ldyBXcmFwcGVkSW5wdXQoe1xuICAgICAgICBlbGVtZW50OiBwYXNzZWRFbGVtZW50LFxuICAgICAgICBjbGFzc05hbWVzOiB0aGlzLmNvbmZpZy5jbGFzc05hbWVzLFxuICAgICAgICBkZWxpbWl0ZXI6IHRoaXMuY29uZmlnLmRlbGltaXRlclxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGFzc2VkRWxlbWVudCA9IG5ldyBXcmFwcGVkU2VsZWN0KHtcbiAgICAgICAgZWxlbWVudDogcGFzc2VkRWxlbWVudCxcbiAgICAgICAgY2xhc3NOYW1lczogdGhpcy5jb25maWcuY2xhc3NOYW1lcyxcbiAgICAgICAgdGVtcGxhdGU6IGZ1bmN0aW9uIHRlbXBsYXRlKGRhdGEpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuX3RlbXBsYXRlcy5vcHRpb24oZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdGlhbGlzZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9zdG9yZSA9IG5ldyBzdG9yZV9TdG9yZSgpO1xuICAgIHRoaXMuX2luaXRpYWxTdGF0ZSA9IHt9O1xuICAgIHRoaXMuX2N1cnJlbnRTdGF0ZSA9IHt9O1xuICAgIHRoaXMuX3ByZXZTdGF0ZSA9IHt9O1xuICAgIHRoaXMuX2N1cnJlbnRWYWx1ZSA9ICcnO1xuICAgIHRoaXMuX2NhblNlYXJjaCA9IHRoaXMuY29uZmlnLnNlYXJjaEVuYWJsZWQ7XG4gICAgdGhpcy5faXNTY3JvbGxpbmdPbkllID0gZmFsc2U7XG4gICAgdGhpcy5faGlnaGxpZ2h0UG9zaXRpb24gPSAwO1xuICAgIHRoaXMuX3dhc1RhcCA9IHRydWU7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXJWYWx1ZSA9IHRoaXMuX2dlbmVyYXRlUGxhY2Vob2xkZXJWYWx1ZSgpO1xuICAgIHRoaXMuX2Jhc2VJZCA9IGdlbmVyYXRlSWQodGhpcy5wYXNzZWRFbGVtZW50LmVsZW1lbnQsICdjaG9pY2VzLScpO1xuICAgIC8qKlxuICAgICAqIHNldHRpbmcgZGlyZWN0aW9uIGluIGNhc2VzIHdoZXJlIGl0J3MgZXhwbGljaXRseSBzZXQgb24gcGFzc2VkRWxlbWVudFxuICAgICAqIG9yIHdoZW4gY2FsY3VsYXRlZCBkaXJlY3Rpb24gaXMgZGlmZmVyZW50IGZyb20gdGhlIGRvY3VtZW50XG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50WydkaXInXX1cbiAgICAgKi9cblxuICAgIHRoaXMuX2RpcmVjdGlvbiA9IHRoaXMucGFzc2VkRWxlbWVudC5kaXI7XG5cbiAgICBpZiAoIXRoaXMuX2RpcmVjdGlvbikge1xuICAgICAgdmFyIF93aW5kb3ckZ2V0Q29tcHV0ZWRTdCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMucGFzc2VkRWxlbWVudC5lbGVtZW50KSxcbiAgICAgICAgICBlbGVtZW50RGlyZWN0aW9uID0gX3dpbmRvdyRnZXRDb21wdXRlZFN0LmRpcmVjdGlvbjtcblxuICAgICAgdmFyIF93aW5kb3ckZ2V0Q29tcHV0ZWRTdDIgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLFxuICAgICAgICAgIGRvY3VtZW50RGlyZWN0aW9uID0gX3dpbmRvdyRnZXRDb21wdXRlZFN0Mi5kaXJlY3Rpb247XG5cbiAgICAgIGlmIChlbGVtZW50RGlyZWN0aW9uICE9PSBkb2N1bWVudERpcmVjdGlvbikge1xuICAgICAgICB0aGlzLl9kaXJlY3Rpb24gPSBlbGVtZW50RGlyZWN0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2lkTmFtZXMgPSB7XG4gICAgICBpdGVtQ2hvaWNlOiAnaXRlbS1jaG9pY2UnXG4gICAgfTsgLy8gQXNzaWduIHByZXNldCBncm91cHMgZnJvbSBwYXNzZWQgZWxlbWVudFxuXG4gICAgdGhpcy5fcHJlc2V0R3JvdXBzID0gdGhpcy5wYXNzZWRFbGVtZW50Lm9wdGlvbkdyb3VwczsgLy8gQXNzaWduIHByZXNldCBvcHRpb25zIGZyb20gcGFzc2VkIGVsZW1lbnRcblxuICAgIHRoaXMuX3ByZXNldE9wdGlvbnMgPSB0aGlzLnBhc3NlZEVsZW1lbnQub3B0aW9uczsgLy8gQXNzaWduIHByZXNldCBjaG9pY2VzIGZyb20gcGFzc2VkIG9iamVjdFxuXG4gICAgdGhpcy5fcHJlc2V0Q2hvaWNlcyA9IHRoaXMuY29uZmlnLmNob2ljZXM7IC8vIEFzc2lnbiBwcmVzZXQgaXRlbXMgZnJvbSBwYXNzZWQgb2JqZWN0IGZpcnN0XG5cbiAgICB0aGlzLl9wcmVzZXRJdGVtcyA9IHRoaXMuY29uZmlnLml0ZW1zOyAvLyBBZGQgYW55IHZhbHVlcyBwYXNzZWQgZnJvbSBhdHRyaWJ1dGVcblxuICAgIGlmICh0aGlzLnBhc3NlZEVsZW1lbnQudmFsdWUpIHtcbiAgICAgIHRoaXMuX3ByZXNldEl0ZW1zID0gdGhpcy5fcHJlc2V0SXRlbXMuY29uY2F0KHRoaXMucGFzc2VkRWxlbWVudC52YWx1ZS5zcGxpdCh0aGlzLmNvbmZpZy5kZWxpbWl0ZXIpKTtcbiAgICB9IC8vIENyZWF0ZSBhcnJheSBvZiBjaG9pY2VzIGZyb20gb3B0aW9uIGVsZW1lbnRzXG5cblxuICAgIGlmICh0aGlzLnBhc3NlZEVsZW1lbnQub3B0aW9ucykge1xuICAgICAgdGhpcy5wYXNzZWRFbGVtZW50Lm9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobykge1xuICAgICAgICBfdGhpcy5fcHJlc2V0Q2hvaWNlcy5wdXNoKHtcbiAgICAgICAgICB2YWx1ZTogby52YWx1ZSxcbiAgICAgICAgICBsYWJlbDogby5pbm5lckhUTUwsXG4gICAgICAgICAgc2VsZWN0ZWQ6IG8uc2VsZWN0ZWQsXG4gICAgICAgICAgZGlzYWJsZWQ6IG8uZGlzYWJsZWQgfHwgby5wYXJlbnROb2RlLmRpc2FibGVkLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBvLnZhbHVlID09PSAnJyB8fCBvLmhhc0F0dHJpYnV0ZSgncGxhY2Vob2xkZXInKSxcbiAgICAgICAgICBjdXN0b21Qcm9wZXJ0aWVzOiBvLmdldEF0dHJpYnV0ZSgnZGF0YS1jdXN0b20tcHJvcGVydGllcycpXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fcmVuZGVyID0gdGhpcy5fcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25Gb2N1cyA9IHRoaXMuX29uRm9jdXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkJsdXIgPSB0aGlzLl9vbkJsdXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbktleVVwID0gdGhpcy5fb25LZXlVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uS2V5RG93biA9IHRoaXMuX29uS2V5RG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uQ2xpY2sgPSB0aGlzLl9vbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25Ub3VjaE1vdmUgPSB0aGlzLl9vblRvdWNoTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uVG91Y2hFbmQgPSB0aGlzLl9vblRvdWNoRW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25Nb3VzZURvd24gPSB0aGlzLl9vbk1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uTW91c2VPdmVyID0gdGhpcy5fb25Nb3VzZU92ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkZvcm1SZXNldCA9IHRoaXMuX29uRm9ybVJlc2V0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25BS2V5ID0gdGhpcy5fb25BS2V5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25FbnRlcktleSA9IHRoaXMuX29uRW50ZXJLZXkuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkVzY2FwZUtleSA9IHRoaXMuX29uRXNjYXBlS2V5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25EaXJlY3Rpb25LZXkgPSB0aGlzLl9vbkRpcmVjdGlvbktleS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uRGVsZXRlS2V5ID0gdGhpcy5fb25EZWxldGVLZXkuYmluZCh0aGlzKTsgLy8gSWYgZWxlbWVudCBoYXMgYWxyZWFkeSBiZWVuIGluaXRpYWxpc2VkIHdpdGggQ2hvaWNlcywgZmFpbCBzaWxlbnRseVxuXG4gICAgaWYgKHRoaXMucGFzc2VkRWxlbWVudC5pc0FjdGl2ZSkge1xuICAgICAgaWYgKCF0aGlzLmNvbmZpZy5zaWxlbnQpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdUcnlpbmcgdG8gaW5pdGlhbGlzZSBDaG9pY2VzIG9uIGVsZW1lbnQgYWxyZWFkeSBpbml0aWFsaXNlZCcpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIExldCdzIGdvXG5cblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IENob2ljZXMucHJvdG90eXBlO1xuXG4gIF9wcm90by5pbml0ID0gZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBpZiAodGhpcy5pbml0aWFsaXNlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2NyZWF0ZVRlbXBsYXRlcygpO1xuXG4gICAgdGhpcy5fY3JlYXRlRWxlbWVudHMoKTtcblxuICAgIHRoaXMuX2NyZWF0ZVN0cnVjdHVyZSgpOyAvLyBTZXQgaW5pdGlhbCBzdGF0ZSAoV2UgbmVlZCB0byBjbG9uZSB0aGUgc3RhdGUgYmVjYXVzZSBzb21lIHJlZHVjZXJzXG4gICAgLy8gbW9kaWZ5IHRoZSBpbm5lciBvYmplY3RzIHByb3BlcnRpZXMgaW4gdGhlIHN0YXRlKSDwn6SiXG5cblxuICAgIHRoaXMuX2luaXRpYWxTdGF0ZSA9IGNsb25lT2JqZWN0KHRoaXMuX3N0b3JlLnN0YXRlKTtcblxuICAgIHRoaXMuX3N0b3JlLnN1YnNjcmliZSh0aGlzLl9yZW5kZXIpO1xuXG4gICAgdGhpcy5fcmVuZGVyKCk7XG5cbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuXG4gICAgdmFyIHNob3VsZERpc2FibGUgPSAhdGhpcy5jb25maWcuYWRkSXRlbXMgfHwgdGhpcy5wYXNzZWRFbGVtZW50LmVsZW1lbnQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuXG4gICAgaWYgKHNob3VsZERpc2FibGUpIHtcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdGlhbGlzZWQgPSB0cnVlO1xuICAgIHZhciBjYWxsYmFja09uSW5pdCA9IHRoaXMuY29uZmlnLmNhbGxiYWNrT25Jbml0OyAvLyBSdW4gY2FsbGJhY2sgaWYgaXQgaXMgYSBmdW5jdGlvblxuXG4gICAgaWYgKGNhbGxiYWNrT25Jbml0ICYmIHR5cGVvZiBjYWxsYmFja09uSW5pdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2tPbkluaXQuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGlmICghdGhpcy5pbml0aWFsaXNlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3JlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICB0aGlzLnBhc3NlZEVsZW1lbnQucmV2ZWFsKCk7XG4gICAgdGhpcy5jb250YWluZXJPdXRlci51bndyYXAodGhpcy5wYXNzZWRFbGVtZW50LmVsZW1lbnQpO1xuICAgIHRoaXMuY2xlYXJTdG9yZSgpO1xuXG4gICAgaWYgKHRoaXMuX2lzU2VsZWN0RWxlbWVudCkge1xuICAgICAgdGhpcy5wYXNzZWRFbGVtZW50Lm9wdGlvbnMgPSB0aGlzLl9wcmVzZXRPcHRpb25zO1xuICAgIH1cblxuICAgIHRoaXMuX3RlbXBsYXRlcyA9IG51bGw7XG4gICAgdGhpcy5pbml0aWFsaXNlZCA9IGZhbHNlO1xuICB9O1xuXG4gIF9wcm90by5lbmFibGUgPSBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgaWYgKHRoaXMucGFzc2VkRWxlbWVudC5pc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLnBhc3NlZEVsZW1lbnQuZW5hYmxlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29udGFpbmVyT3V0ZXIuaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgdGhpcy5pbnB1dC5lbmFibGUoKTtcbiAgICAgIHRoaXMuY29udGFpbmVyT3V0ZXIuZW5hYmxlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmRpc2FibGUgPSBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgIGlmICghdGhpcy5wYXNzZWRFbGVtZW50LmlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMucGFzc2VkRWxlbWVudC5kaXNhYmxlKCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmNvbnRhaW5lck91dGVyLmlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX3JlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICAgIHRoaXMuaW5wdXQuZGlzYWJsZSgpO1xuICAgICAgdGhpcy5jb250YWluZXJPdXRlci5kaXNhYmxlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmhpZ2hsaWdodEl0ZW0gPSBmdW5jdGlvbiBoaWdobGlnaHRJdGVtKGl0ZW0sIHJ1bkV2ZW50KSB7XG4gICAgaWYgKHJ1bkV2ZW50ID09PSB2b2lkIDApIHtcbiAgICAgIHJ1bkV2ZW50ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHZhciBpZCA9IGl0ZW0uaWQsXG4gICAgICAgIF9pdGVtJGdyb3VwSWQgPSBpdGVtLmdyb3VwSWQsXG4gICAgICAgIGdyb3VwSWQgPSBfaXRlbSRncm91cElkID09PSB2b2lkIDAgPyAtMSA6IF9pdGVtJGdyb3VwSWQsXG4gICAgICAgIF9pdGVtJHZhbHVlID0gaXRlbS52YWx1ZSxcbiAgICAgICAgdmFsdWUgPSBfaXRlbSR2YWx1ZSA9PT0gdm9pZCAwID8gJycgOiBfaXRlbSR2YWx1ZSxcbiAgICAgICAgX2l0ZW0kbGFiZWwgPSBpdGVtLmxhYmVsLFxuICAgICAgICBsYWJlbCA9IF9pdGVtJGxhYmVsID09PSB2b2lkIDAgPyAnJyA6IF9pdGVtJGxhYmVsO1xuICAgIHZhciBncm91cCA9IGdyb3VwSWQgPj0gMCA/IHRoaXMuX3N0b3JlLmdldEdyb3VwQnlJZChncm91cElkKSA6IG51bGw7XG5cbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChpdGVtc19oaWdobGlnaHRJdGVtKGlkLCB0cnVlKSk7XG5cbiAgICBpZiAocnVuRXZlbnQpIHtcbiAgICAgIHRoaXMucGFzc2VkRWxlbWVudC50cmlnZ2VyRXZlbnQoRVZFTlRTLmhpZ2hsaWdodEl0ZW0sIHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgZ3JvdXBWYWx1ZTogZ3JvdXAgJiYgZ3JvdXAudmFsdWUgPyBncm91cC52YWx1ZSA6IG51bGxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by51bmhpZ2hsaWdodEl0ZW0gPSBmdW5jdGlvbiB1bmhpZ2hsaWdodEl0ZW0oaXRlbSkge1xuICAgIGlmICghaXRlbSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIGlkID0gaXRlbS5pZCxcbiAgICAgICAgX2l0ZW0kZ3JvdXBJZDIgPSBpdGVtLmdyb3VwSWQsXG4gICAgICAgIGdyb3VwSWQgPSBfaXRlbSRncm91cElkMiA9PT0gdm9pZCAwID8gLTEgOiBfaXRlbSRncm91cElkMixcbiAgICAgICAgX2l0ZW0kdmFsdWUyID0gaXRlbS52YWx1ZSxcbiAgICAgICAgdmFsdWUgPSBfaXRlbSR2YWx1ZTIgPT09IHZvaWQgMCA/ICcnIDogX2l0ZW0kdmFsdWUyLFxuICAgICAgICBfaXRlbSRsYWJlbDIgPSBpdGVtLmxhYmVsLFxuICAgICAgICBsYWJlbCA9IF9pdGVtJGxhYmVsMiA9PT0gdm9pZCAwID8gJycgOiBfaXRlbSRsYWJlbDI7XG4gICAgdmFyIGdyb3VwID0gZ3JvdXBJZCA+PSAwID8gdGhpcy5fc3RvcmUuZ2V0R3JvdXBCeUlkKGdyb3VwSWQpIDogbnVsbDtcblxuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKGl0ZW1zX2hpZ2hsaWdodEl0ZW0oaWQsIGZhbHNlKSk7XG5cbiAgICB0aGlzLnBhc3NlZEVsZW1lbnQudHJpZ2dlckV2ZW50KEVWRU5UUy5oaWdobGlnaHRJdGVtLCB7XG4gICAgICBpZDogaWQsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBsYWJlbDogbGFiZWwsXG4gICAgICBncm91cFZhbHVlOiBncm91cCAmJiBncm91cC52YWx1ZSA/IGdyb3VwLnZhbHVlIDogbnVsbFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5oaWdobGlnaHRBbGwgPSBmdW5jdGlvbiBoaWdobGlnaHRBbGwoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB0aGlzLl9zdG9yZS5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gX3RoaXMyLmhpZ2hsaWdodEl0ZW0oaXRlbSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8udW5oaWdobGlnaHRBbGwgPSBmdW5jdGlvbiB1bmhpZ2hsaWdodEFsbCgpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHRoaXMuX3N0b3JlLml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBfdGhpczMudW5oaWdobGlnaHRJdGVtKGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZUFjdGl2ZUl0ZW1zQnlWYWx1ZSA9IGZ1bmN0aW9uIHJlbW92ZUFjdGl2ZUl0ZW1zQnlWYWx1ZSh2YWx1ZSkge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdGhpcy5fc3RvcmUuYWN0aXZlSXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbS52YWx1ZSA9PT0gdmFsdWU7XG4gICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIF90aGlzNC5fcmVtb3ZlSXRlbShpdGVtKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmVBY3RpdmVJdGVtcyA9IGZ1bmN0aW9uIHJlbW92ZUFjdGl2ZUl0ZW1zKGV4Y2x1ZGVkSWQpIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIHRoaXMuX3N0b3JlLmFjdGl2ZUl0ZW1zLmZpbHRlcihmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIGlkID0gX3JlZi5pZDtcbiAgICAgIHJldHVybiBpZCAhPT0gZXhjbHVkZWRJZDtcbiAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gX3RoaXM1Ll9yZW1vdmVJdGVtKGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZUhpZ2hsaWdodGVkSXRlbXMgPSBmdW5jdGlvbiByZW1vdmVIaWdobGlnaHRlZEl0ZW1zKHJ1bkV2ZW50KSB7XG4gICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICBpZiAocnVuRXZlbnQgPT09IHZvaWQgMCkge1xuICAgICAgcnVuRXZlbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLl9zdG9yZS5oaWdobGlnaHRlZEFjdGl2ZUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIF90aGlzNi5fcmVtb3ZlSXRlbShpdGVtKTsgLy8gSWYgdGhpcyBhY3Rpb24gd2FzIHBlcmZvcm1lZCBieSB0aGUgdXNlclxuICAgICAgLy8gdHJpZ2dlciB0aGUgZXZlbnRcblxuXG4gICAgICBpZiAocnVuRXZlbnQpIHtcbiAgICAgICAgX3RoaXM2Ll90cmlnZ2VyQ2hhbmdlKGl0ZW0udmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLnNob3dEcm9wZG93biA9IGZ1bmN0aW9uIHNob3dEcm9wZG93bihwcmV2ZW50SW5wdXRGb2N1cykge1xuICAgIHZhciBfdGhpczcgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuZHJvcGRvd24uaXNBY3RpdmUpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczcuZHJvcGRvd24uc2hvdygpO1xuXG4gICAgICBfdGhpczcuY29udGFpbmVyT3V0ZXIub3BlbihfdGhpczcuZHJvcGRvd24uZGlzdGFuY2VGcm9tVG9wV2luZG93KTtcblxuICAgICAgaWYgKCFwcmV2ZW50SW5wdXRGb2N1cyAmJiBfdGhpczcuX2NhblNlYXJjaCkge1xuICAgICAgICBfdGhpczcuaW5wdXQuZm9jdXMoKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXM3LnBhc3NlZEVsZW1lbnQudHJpZ2dlckV2ZW50KEVWRU5UUy5zaG93RHJvcGRvd24sIHt9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uaGlkZURyb3Bkb3duID0gZnVuY3Rpb24gaGlkZURyb3Bkb3duKHByZXZlbnRJbnB1dEJsdXIpIHtcbiAgICB2YXIgX3RoaXM4ID0gdGhpcztcblxuICAgIGlmICghdGhpcy5kcm9wZG93bi5pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzOC5kcm9wZG93bi5oaWRlKCk7XG5cbiAgICAgIF90aGlzOC5jb250YWluZXJPdXRlci5jbG9zZSgpO1xuXG4gICAgICBpZiAoIXByZXZlbnRJbnB1dEJsdXIgJiYgX3RoaXM4Ll9jYW5TZWFyY2gpIHtcbiAgICAgICAgX3RoaXM4LmlucHV0LnJlbW92ZUFjdGl2ZURlc2NlbmRhbnQoKTtcblxuICAgICAgICBfdGhpczguaW5wdXQuYmx1cigpO1xuICAgICAgfVxuXG4gICAgICBfdGhpczgucGFzc2VkRWxlbWVudC50cmlnZ2VyRXZlbnQoRVZFTlRTLmhpZGVEcm9wZG93biwge30pO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5nZXRWYWx1ZSA9IGZ1bmN0aW9uIGdldFZhbHVlKHZhbHVlT25seSkge1xuICAgIGlmICh2YWx1ZU9ubHkgPT09IHZvaWQgMCkge1xuICAgICAgdmFsdWVPbmx5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlcyA9IHRoaXMuX3N0b3JlLmFjdGl2ZUl0ZW1zLnJlZHVjZShmdW5jdGlvbiAoc2VsZWN0ZWRJdGVtcywgaXRlbSkge1xuICAgICAgdmFyIGl0ZW1WYWx1ZSA9IHZhbHVlT25seSA/IGl0ZW0udmFsdWUgOiBpdGVtO1xuICAgICAgc2VsZWN0ZWRJdGVtcy5wdXNoKGl0ZW1WYWx1ZSk7XG4gICAgICByZXR1cm4gc2VsZWN0ZWRJdGVtcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50ID8gdmFsdWVzWzBdIDogdmFsdWVzO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdIHwgaW1wb3J0KCcuLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuSXRlbVtdfSBpdGVtc1xuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zZXRWYWx1ZSA9IGZ1bmN0aW9uIHNldFZhbHVlKGl0ZW1zKSB7XG4gICAgdmFyIF90aGlzOSA9IHRoaXM7XG5cbiAgICBpZiAoIXRoaXMuaW5pdGlhbGlzZWQpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gX3RoaXM5Ll9zZXRDaG9pY2VPckl0ZW0odmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5zZXRDaG9pY2VCeVZhbHVlID0gZnVuY3Rpb24gc2V0Q2hvaWNlQnlWYWx1ZSh2YWx1ZSkge1xuICAgIHZhciBfdGhpczEwID0gdGhpcztcblxuICAgIGlmICghdGhpcy5pbml0aWFsaXNlZCB8fCB0aGlzLl9pc1RleHRFbGVtZW50KSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9IC8vIElmIG9ubHkgb25lIHZhbHVlIGhhcyBiZWVuIHBhc3NlZCwgY29udmVydCB0byBhcnJheVxuXG5cbiAgICB2YXIgY2hvaWNlVmFsdWUgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTsgLy8gTG9vcCB0aHJvdWdoIGVhY2ggdmFsdWUgYW5kXG5cbiAgICBjaG9pY2VWYWx1ZS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHJldHVybiBfdGhpczEwLl9maW5kQW5kU2VsZWN0Q2hvaWNlQnlWYWx1ZSh2YWwpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBTZXQgY2hvaWNlcyBvZiBzZWxlY3QgaW5wdXQgdmlhIGFuIGFycmF5IG9mIG9iamVjdHMgKG9yIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhcnJheSBvZiBvYmplY3Qgb3IgcHJvbWlzZSBvZiBpdCksXG4gICAqIGEgdmFsdWUgZmllbGQgbmFtZSBhbmQgYSBsYWJlbCBmaWVsZCBuYW1lLlxuICAgKiBUaGlzIGJlaGF2ZXMgdGhlIHNhbWUgYXMgcGFzc2luZyBpdGVtcyB2aWEgdGhlIGNob2ljZXMgb3B0aW9uIGJ1dCBjYW4gYmUgY2FsbGVkIGFmdGVyIGluaXRpYWxpc2luZyBDaG9pY2VzLlxuICAgKiBUaGlzIGNhbiBhbHNvIGJlIHVzZWQgdG8gYWRkIGdyb3VwcyBvZiBjaG9pY2VzIChzZWUgZXhhbXBsZSAyKTsgT3B0aW9uYWxseSBwYXNzIGEgdHJ1ZSBgcmVwbGFjZUNob2ljZXNgIHZhbHVlIHRvIHJlbW92ZSBhbnkgZXhpc3RpbmcgY2hvaWNlcy5cbiAgICogT3B0aW9uYWxseSBwYXNzIGEgYGN1c3RvbVByb3BlcnRpZXNgIG9iamVjdCB0byBhZGQgYWRkaXRpb25hbCBkYXRhIHRvIHlvdXIgY2hvaWNlcyAodXNlZnVsIHdoZW4gc2VhcmNoaW5nL2ZpbHRlcmluZyBldGMpLlxuICAgKlxuICAgKiAqKklucHV0IHR5cGVzIGFmZmVjdGVkOioqIHNlbGVjdC1vbmUsIHNlbGVjdC1tdWx0aXBsZVxuICAgKlxuICAgKiBAdGVtcGxhdGUge0Nob2ljZVtdIHwgKChpbnN0YW5jZTogQ2hvaWNlcykgPT4gb2JqZWN0W10gfCBQcm9taXNlPG9iamVjdFtdPil9IFRcbiAgICogQHBhcmFtIHtUfSBbY2hvaWNlc0FycmF5T3JGZXRjaGVyXVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3ZhbHVlID0gJ3ZhbHVlJ10gLSBuYW1lIG9mIGB2YWx1ZWAgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsYWJlbCA9ICdsYWJlbCddIC0gbmFtZSBvZiAnbGFiZWwnIGZpZWxkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlcGxhY2VDaG9pY2VzID0gZmFsc2VdIC0gd2hldGhlciB0byByZXBsYWNlIG9mIGFkZCBjaG9pY2VzXG4gICAqIEByZXR1cm5zIHt0aGlzIHwgUHJvbWlzZTx0aGlzPn1cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBganNcbiAgICogY29uc3QgZXhhbXBsZSA9IG5ldyBDaG9pY2VzKGVsZW1lbnQpO1xuICAgKlxuICAgKiBleGFtcGxlLnNldENob2ljZXMoW1xuICAgKiAgIHt2YWx1ZTogJ09uZScsIGxhYmVsOiAnTGFiZWwgT25lJywgZGlzYWJsZWQ6IHRydWV9LFxuICAgKiAgIHt2YWx1ZTogJ1R3bycsIGxhYmVsOiAnTGFiZWwgVHdvJywgc2VsZWN0ZWQ6IHRydWV9LFxuICAgKiAgIHt2YWx1ZTogJ1RocmVlJywgbGFiZWw6ICdMYWJlbCBUaHJlZSd9LFxuICAgKiBdLCAndmFsdWUnLCAnbGFiZWwnLCBmYWxzZSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqc1xuICAgKiBjb25zdCBleGFtcGxlID0gbmV3IENob2ljZXMoZWxlbWVudCk7XG4gICAqXG4gICAqIGV4YW1wbGUuc2V0Q2hvaWNlcyhhc3luYyAoKSA9PiB7XG4gICAqICAgdHJ5IHtcbiAgICogICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IGZldGNoKCcvaXRlbXMnKTtcbiAgICogICAgICByZXR1cm4gaXRlbXMuanNvbigpXG4gICAqICAgfSBjYXRjaChlcnIpIHtcbiAgICogICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICogICB9XG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBganNcbiAgICogY29uc3QgZXhhbXBsZSA9IG5ldyBDaG9pY2VzKGVsZW1lbnQpO1xuICAgKlxuICAgKiBleGFtcGxlLnNldENob2ljZXMoW3tcbiAgICogICBsYWJlbDogJ0dyb3VwIG9uZScsXG4gICAqICAgaWQ6IDEsXG4gICAqICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgKiAgIGNob2ljZXM6IFtcbiAgICogICAgIHt2YWx1ZTogJ0NoaWxkIE9uZScsIGxhYmVsOiAnQ2hpbGQgT25lJywgc2VsZWN0ZWQ6IHRydWV9LFxuICAgKiAgICAge3ZhbHVlOiAnQ2hpbGQgVHdvJywgbGFiZWw6ICdDaGlsZCBUd28nLCAgZGlzYWJsZWQ6IHRydWV9LFxuICAgKiAgICAge3ZhbHVlOiAnQ2hpbGQgVGhyZWUnLCBsYWJlbDogJ0NoaWxkIFRocmVlJ30sXG4gICAqICAgXVxuICAgKiB9LFxuICAgKiB7XG4gICAqICAgbGFiZWw6ICdHcm91cCB0d28nLFxuICAgKiAgIGlkOiAyLFxuICAgKiAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICogICBjaG9pY2VzOiBbXG4gICAqICAgICB7dmFsdWU6ICdDaGlsZCBGb3VyJywgbGFiZWw6ICdDaGlsZCBGb3VyJywgZGlzYWJsZWQ6IHRydWV9LFxuICAgKiAgICAge3ZhbHVlOiAnQ2hpbGQgRml2ZScsIGxhYmVsOiAnQ2hpbGQgRml2ZSd9LFxuICAgKiAgICAge3ZhbHVlOiAnQ2hpbGQgU2l4JywgbGFiZWw6ICdDaGlsZCBTaXgnLCBjdXN0b21Qcm9wZXJ0aWVzOiB7XG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiAnQ3VzdG9tIGRlc2NyaXB0aW9uIGFib3V0IGNoaWxkIHNpeCcsXG4gICAqICAgICAgIHJhbmRvbTogJ0Fub3RoZXIgcmFuZG9tIGN1c3RvbSBwcm9wZXJ0eSdcbiAgICogICAgIH19LFxuICAgKiAgIF1cbiAgICogfV0sICd2YWx1ZScsICdsYWJlbCcsIGZhbHNlKTtcbiAgICogYGBgXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnNldENob2ljZXMgPSBmdW5jdGlvbiBzZXRDaG9pY2VzKGNob2ljZXNBcnJheU9yRmV0Y2hlciwgdmFsdWUsIGxhYmVsLCByZXBsYWNlQ2hvaWNlcykge1xuICAgIHZhciBfdGhpczExID0gdGhpcztcblxuICAgIGlmIChjaG9pY2VzQXJyYXlPckZldGNoZXIgPT09IHZvaWQgMCkge1xuICAgICAgY2hvaWNlc0FycmF5T3JGZXRjaGVyID0gW107XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlID09PSB2b2lkIDApIHtcbiAgICAgIHZhbHVlID0gJ3ZhbHVlJztcbiAgICB9XG5cbiAgICBpZiAobGFiZWwgPT09IHZvaWQgMCkge1xuICAgICAgbGFiZWwgPSAnbGFiZWwnO1xuICAgIH1cblxuICAgIGlmIChyZXBsYWNlQ2hvaWNlcyA9PT0gdm9pZCAwKSB7XG4gICAgICByZXBsYWNlQ2hvaWNlcyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pbml0aWFsaXNlZCkge1xuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwic2V0Q2hvaWNlcyB3YXMgY2FsbGVkIG9uIGEgbm9uLWluaXRpYWxpemVkIGluc3RhbmNlIG9mIENob2ljZXNcIik7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9pc1NlbGVjdEVsZW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJzZXRDaG9pY2VzIGNhbid0IGJlIHVzZWQgd2l0aCBJTlBVVCBiYXNlZCBDaG9pY2VzXCIpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnIHx8ICF2YWx1ZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcInZhbHVlIHBhcmFtZXRlciBtdXN0IGJlIGEgbmFtZSBvZiAndmFsdWUnIGZpZWxkIGluIHBhc3NlZCBvYmplY3RzXCIpO1xuICAgIH0gLy8gQ2xlYXIgY2hvaWNlcyBpZiBuZWVkZWRcblxuXG4gICAgaWYgKHJlcGxhY2VDaG9pY2VzKSB7XG4gICAgICB0aGlzLmNsZWFyQ2hvaWNlcygpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2hvaWNlc0FycmF5T3JGZXRjaGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBpdCdzIGEgY2hvaWNlcyBmZXRjaGVyIGZ1bmN0aW9uXG4gICAgICB2YXIgZmV0Y2hlciA9IGNob2ljZXNBcnJheU9yRmV0Y2hlcih0aGlzKTtcblxuICAgICAgaWYgKHR5cGVvZiBQcm9taXNlID09PSAnZnVuY3Rpb24nICYmIGZldGNoZXIgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIC8vIHRoYXQncyBhIHByb21pc2VcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBhdC9jb21wYXRcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZXNvbHZlKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMTEuX2hhbmRsZUxvYWRpbmdTdGF0ZSh0cnVlKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGZldGNoZXI7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMxMS5zZXRDaG9pY2VzKGRhdGEsIHZhbHVlLCBsYWJlbCwgcmVwbGFjZUNob2ljZXMpO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgaWYgKCFfdGhpczExLmNvbmZpZy5zaWxlbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczExLl9oYW5kbGVMb2FkaW5nU3RhdGUoZmFsc2UpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMxMTtcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIGZ1bmN0aW9uIHJldHVybmVkIHNvbWV0aGluZyBlbHNlIHRoYW4gcHJvbWlzZSwgbGV0J3MgY2hlY2sgaWYgaXQncyBhbiBhcnJheSBvZiBjaG9pY2VzXG5cblxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGZldGNoZXIpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCIuc2V0Q2hvaWNlcyBmaXJzdCBhcmd1bWVudCBmdW5jdGlvbiBtdXN0IHJldHVybiBlaXRoZXIgYXJyYXkgb2YgY2hvaWNlcyBvciBQcm9taXNlLCBnb3Q6IFwiICsgdHlwZW9mIGZldGNoZXIpO1xuICAgICAgfSAvLyByZWN1cnNpb24gd2l0aCByZXN1bHRzLCBpdCdzIHN5bmMgYW5kIGNob2ljZXMgd2VyZSBjbGVhcmVkIGFscmVhZHlcblxuXG4gICAgICByZXR1cm4gdGhpcy5zZXRDaG9pY2VzKGZldGNoZXIsIHZhbHVlLCBsYWJlbCwgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShjaG9pY2VzQXJyYXlPckZldGNoZXIpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiLnNldENob2ljZXMgbXVzdCBiZSBjYWxsZWQgZWl0aGVyIHdpdGggYXJyYXkgb2YgY2hvaWNlcyB3aXRoIGEgZnVuY3Rpb24gcmVzdWx0aW5nIGludG8gUHJvbWlzZSBvZiBhcnJheSBvZiBjaG9pY2VzXCIpO1xuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyT3V0ZXIucmVtb3ZlTG9hZGluZ1N0YXRlKCk7XG5cbiAgICB0aGlzLl9zdGFydExvYWRpbmcoKTtcblxuICAgIGNob2ljZXNBcnJheU9yRmV0Y2hlci5mb3JFYWNoKGZ1bmN0aW9uIChncm91cE9yQ2hvaWNlKSB7XG4gICAgICBpZiAoZ3JvdXBPckNob2ljZS5jaG9pY2VzKSB7XG4gICAgICAgIF90aGlzMTEuX2FkZEdyb3VwKHtcbiAgICAgICAgICBpZDogcGFyc2VJbnQoZ3JvdXBPckNob2ljZS5pZCwgMTApIHx8IG51bGwsXG4gICAgICAgICAgZ3JvdXA6IGdyb3VwT3JDaG9pY2UsXG4gICAgICAgICAgdmFsdWVLZXk6IHZhbHVlLFxuICAgICAgICAgIGxhYmVsS2V5OiBsYWJlbFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzMTEuX2FkZENob2ljZSh7XG4gICAgICAgICAgdmFsdWU6IGdyb3VwT3JDaG9pY2VbdmFsdWVdLFxuICAgICAgICAgIGxhYmVsOiBncm91cE9yQ2hvaWNlW2xhYmVsXSxcbiAgICAgICAgICBpc1NlbGVjdGVkOiBncm91cE9yQ2hvaWNlLnNlbGVjdGVkLFxuICAgICAgICAgIGlzRGlzYWJsZWQ6IGdyb3VwT3JDaG9pY2UuZGlzYWJsZWQsXG4gICAgICAgICAgY3VzdG9tUHJvcGVydGllczogZ3JvdXBPckNob2ljZS5jdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBncm91cE9yQ2hvaWNlLnBsYWNlaG9sZGVyXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5fc3RvcExvYWRpbmcoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5jbGVhckNob2ljZXMgPSBmdW5jdGlvbiBjbGVhckNob2ljZXMoKSB7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goY2hvaWNlc19jbGVhckNob2ljZXMoKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uY2xlYXJTdG9yZSA9IGZ1bmN0aW9uIGNsZWFyU3RvcmUoKSB7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goY2xlYXJBbGwoKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uY2xlYXJJbnB1dCA9IGZ1bmN0aW9uIGNsZWFySW5wdXQoKSB7XG4gICAgdmFyIHNob3VsZFNldElucHV0V2lkdGggPSAhdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50O1xuICAgIHRoaXMuaW5wdXQuY2xlYXIoc2hvdWxkU2V0SW5wdXRXaWR0aCk7XG5cbiAgICBpZiAoIXRoaXMuX2lzVGV4dEVsZW1lbnQgJiYgdGhpcy5fY2FuU2VhcmNoKSB7XG4gICAgICB0aGlzLl9pc1NlYXJjaGluZyA9IGZhbHNlO1xuXG4gICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChjaG9pY2VzX2FjdGl2YXRlQ2hvaWNlcyh0cnVlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLl9yZW5kZXIgPSBmdW5jdGlvbiBfcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLl9zdG9yZS5pc0xvYWRpbmcoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2N1cnJlbnRTdGF0ZSA9IHRoaXMuX3N0b3JlLnN0YXRlO1xuICAgIHZhciBzdGF0ZUNoYW5nZWQgPSB0aGlzLl9jdXJyZW50U3RhdGUuY2hvaWNlcyAhPT0gdGhpcy5fcHJldlN0YXRlLmNob2ljZXMgfHwgdGhpcy5fY3VycmVudFN0YXRlLmdyb3VwcyAhPT0gdGhpcy5fcHJldlN0YXRlLmdyb3VwcyB8fCB0aGlzLl9jdXJyZW50U3RhdGUuaXRlbXMgIT09IHRoaXMuX3ByZXZTdGF0ZS5pdGVtcztcbiAgICB2YXIgc2hvdWxkUmVuZGVyQ2hvaWNlcyA9IHRoaXMuX2lzU2VsZWN0RWxlbWVudDtcbiAgICB2YXIgc2hvdWxkUmVuZGVySXRlbXMgPSB0aGlzLl9jdXJyZW50U3RhdGUuaXRlbXMgIT09IHRoaXMuX3ByZXZTdGF0ZS5pdGVtcztcblxuICAgIGlmICghc3RhdGVDaGFuZ2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHNob3VsZFJlbmRlckNob2ljZXMpIHtcbiAgICAgIHRoaXMuX3JlbmRlckNob2ljZXMoKTtcbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkUmVuZGVySXRlbXMpIHtcbiAgICAgIHRoaXMuX3JlbmRlckl0ZW1zKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fcHJldlN0YXRlID0gdGhpcy5fY3VycmVudFN0YXRlO1xuICB9O1xuXG4gIF9wcm90by5fcmVuZGVyQ2hvaWNlcyA9IGZ1bmN0aW9uIF9yZW5kZXJDaG9pY2VzKCkge1xuICAgIHZhciBfdGhpczEyID0gdGhpcztcblxuICAgIHZhciBfdGhpcyRfc3RvcmUgPSB0aGlzLl9zdG9yZSxcbiAgICAgICAgYWN0aXZlR3JvdXBzID0gX3RoaXMkX3N0b3JlLmFjdGl2ZUdyb3VwcyxcbiAgICAgICAgYWN0aXZlQ2hvaWNlcyA9IF90aGlzJF9zdG9yZS5hY3RpdmVDaG9pY2VzO1xuICAgIHZhciBjaG9pY2VMaXN0RnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgdGhpcy5jaG9pY2VMaXN0LmNsZWFyKCk7XG5cbiAgICBpZiAodGhpcy5jb25maWcucmVzZXRTY3JvbGxQb3NpdGlvbikge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMTIuY2hvaWNlTGlzdC5zY3JvbGxUb1RvcCgpO1xuICAgICAgfSk7XG4gICAgfSAvLyBJZiB3ZSBoYXZlIGdyb3VwZWQgb3B0aW9uc1xuXG5cbiAgICBpZiAoYWN0aXZlR3JvdXBzLmxlbmd0aCA+PSAxICYmICF0aGlzLl9pc1NlYXJjaGluZykge1xuICAgICAgLy8gSWYgd2UgaGF2ZSBhIHBsYWNlaG9sZGVyIGNob2ljZSBhbG9uZyB3aXRoIGdyb3Vwc1xuICAgICAgdmFyIGFjdGl2ZVBsYWNlaG9sZGVycyA9IGFjdGl2ZUNob2ljZXMuZmlsdGVyKGZ1bmN0aW9uIChhY3RpdmVDaG9pY2UpIHtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZUNob2ljZS5wbGFjZWhvbGRlciA9PT0gdHJ1ZSAmJiBhY3RpdmVDaG9pY2UuZ3JvdXBJZCA9PT0gLTE7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGFjdGl2ZVBsYWNlaG9sZGVycy5sZW5ndGggPj0gMSkge1xuICAgICAgICBjaG9pY2VMaXN0RnJhZ21lbnQgPSB0aGlzLl9jcmVhdGVDaG9pY2VzRnJhZ21lbnQoYWN0aXZlUGxhY2Vob2xkZXJzLCBjaG9pY2VMaXN0RnJhZ21lbnQpO1xuICAgICAgfVxuXG4gICAgICBjaG9pY2VMaXN0RnJhZ21lbnQgPSB0aGlzLl9jcmVhdGVHcm91cHNGcmFnbWVudChhY3RpdmVHcm91cHMsIGFjdGl2ZUNob2ljZXMsIGNob2ljZUxpc3RGcmFnbWVudCk7XG4gICAgfSBlbHNlIGlmIChhY3RpdmVDaG9pY2VzLmxlbmd0aCA+PSAxKSB7XG4gICAgICBjaG9pY2VMaXN0RnJhZ21lbnQgPSB0aGlzLl9jcmVhdGVDaG9pY2VzRnJhZ21lbnQoYWN0aXZlQ2hvaWNlcywgY2hvaWNlTGlzdEZyYWdtZW50KTtcbiAgICB9IC8vIElmIHdlIGhhdmUgY2hvaWNlcyB0byBzaG93XG5cblxuICAgIGlmIChjaG9pY2VMaXN0RnJhZ21lbnQuY2hpbGROb2RlcyAmJiBjaG9pY2VMaXN0RnJhZ21lbnQuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgYWN0aXZlSXRlbXMgPSB0aGlzLl9zdG9yZS5hY3RpdmVJdGVtcztcblxuICAgICAgdmFyIGNhbkFkZEl0ZW0gPSB0aGlzLl9jYW5BZGRJdGVtKGFjdGl2ZUl0ZW1zLCB0aGlzLmlucHV0LnZhbHVlKTsgLy8gLi4uYW5kIHdlIGNhbiBzZWxlY3QgdGhlbVxuXG5cbiAgICAgIGlmIChjYW5BZGRJdGVtLnJlc3BvbnNlKSB7XG4gICAgICAgIC8vIC4uLmFwcGVuZCB0aGVtIGFuZCBoaWdobGlnaHQgdGhlIGZpcnN0IGNob2ljZVxuICAgICAgICB0aGlzLmNob2ljZUxpc3QuYXBwZW5kKGNob2ljZUxpc3RGcmFnbWVudCk7XG5cbiAgICAgICAgdGhpcy5faGlnaGxpZ2h0Q2hvaWNlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAuLi5vdGhlcndpc2Ugc2hvdyBhIG5vdGljZVxuICAgICAgICB0aGlzLmNob2ljZUxpc3QuYXBwZW5kKHRoaXMuX2dldFRlbXBsYXRlKCdub3RpY2UnLCBjYW5BZGRJdGVtLm5vdGljZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPdGhlcndpc2Ugc2hvdyBhIG5vdGljZVxuICAgICAgdmFyIGRyb3Bkb3duSXRlbTtcbiAgICAgIHZhciBub3RpY2U7XG5cbiAgICAgIGlmICh0aGlzLl9pc1NlYXJjaGluZykge1xuICAgICAgICBub3RpY2UgPSB0eXBlb2YgdGhpcy5jb25maWcubm9SZXN1bHRzVGV4dCA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuY29uZmlnLm5vUmVzdWx0c1RleHQoKSA6IHRoaXMuY29uZmlnLm5vUmVzdWx0c1RleHQ7XG4gICAgICAgIGRyb3Bkb3duSXRlbSA9IHRoaXMuX2dldFRlbXBsYXRlKCdub3RpY2UnLCBub3RpY2UsICduby1yZXN1bHRzJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub3RpY2UgPSB0eXBlb2YgdGhpcy5jb25maWcubm9DaG9pY2VzVGV4dCA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuY29uZmlnLm5vQ2hvaWNlc1RleHQoKSA6IHRoaXMuY29uZmlnLm5vQ2hvaWNlc1RleHQ7XG4gICAgICAgIGRyb3Bkb3duSXRlbSA9IHRoaXMuX2dldFRlbXBsYXRlKCdub3RpY2UnLCBub3RpY2UsICduby1jaG9pY2VzJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2hvaWNlTGlzdC5hcHBlbmQoZHJvcGRvd25JdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9yZW5kZXJJdGVtcyA9IGZ1bmN0aW9uIF9yZW5kZXJJdGVtcygpIHtcbiAgICB2YXIgYWN0aXZlSXRlbXMgPSB0aGlzLl9zdG9yZS5hY3RpdmVJdGVtcyB8fCBbXTtcbiAgICB0aGlzLml0ZW1MaXN0LmNsZWFyKCk7IC8vIENyZWF0ZSBhIGZyYWdtZW50IHRvIHN0b3JlIG91ciBsaXN0IGl0ZW1zXG4gICAgLy8gKHNvIHdlIGRvbid0IGhhdmUgdG8gdXBkYXRlIHRoZSBET00gZm9yIGVhY2ggaXRlbSlcblxuICAgIHZhciBpdGVtTGlzdEZyYWdtZW50ID0gdGhpcy5fY3JlYXRlSXRlbXNGcmFnbWVudChhY3RpdmVJdGVtcyk7IC8vIElmIHdlIGhhdmUgaXRlbXMgdG8gYWRkLCBhcHBlbmQgdGhlbVxuXG5cbiAgICBpZiAoaXRlbUxpc3RGcmFnbWVudC5jaGlsZE5vZGVzKSB7XG4gICAgICB0aGlzLml0ZW1MaXN0LmFwcGVuZChpdGVtTGlzdEZyYWdtZW50KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9jcmVhdGVHcm91cHNGcmFnbWVudCA9IGZ1bmN0aW9uIF9jcmVhdGVHcm91cHNGcmFnbWVudChncm91cHMsIGNob2ljZXMsIGZyYWdtZW50KSB7XG4gICAgdmFyIF90aGlzMTMgPSB0aGlzO1xuXG4gICAgaWYgKGZyYWdtZW50ID09PSB2b2lkIDApIHtcbiAgICAgIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIH1cblxuICAgIHZhciBnZXRHcm91cENob2ljZXMgPSBmdW5jdGlvbiBnZXRHcm91cENob2ljZXMoZ3JvdXApIHtcbiAgICAgIHJldHVybiBjaG9pY2VzLmZpbHRlcihmdW5jdGlvbiAoY2hvaWNlKSB7XG4gICAgICAgIGlmIChfdGhpczEzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gY2hvaWNlLmdyb3VwSWQgPT09IGdyb3VwLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNob2ljZS5ncm91cElkID09PSBncm91cC5pZCAmJiAoX3RoaXMxMy5jb25maWcucmVuZGVyU2VsZWN0ZWRDaG9pY2VzID09PSAnYWx3YXlzJyB8fCAhY2hvaWNlLnNlbGVjdGVkKTtcbiAgICAgIH0pO1xuICAgIH07IC8vIElmIHNvcnRpbmcgaXMgZW5hYmxlZCwgZmlsdGVyIGdyb3Vwc1xuXG5cbiAgICBpZiAodGhpcy5jb25maWcuc2hvdWxkU29ydCkge1xuICAgICAgZ3JvdXBzLnNvcnQodGhpcy5jb25maWcuc29ydGVyKTtcbiAgICB9XG5cbiAgICBncm91cHMuZm9yRWFjaChmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgIHZhciBncm91cENob2ljZXMgPSBnZXRHcm91cENob2ljZXMoZ3JvdXApO1xuXG4gICAgICBpZiAoZ3JvdXBDaG9pY2VzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgIHZhciBkcm9wZG93bkdyb3VwID0gX3RoaXMxMy5fZ2V0VGVtcGxhdGUoJ2Nob2ljZUdyb3VwJywgZ3JvdXApO1xuXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGRyb3Bkb3duR3JvdXApO1xuXG4gICAgICAgIF90aGlzMTMuX2NyZWF0ZUNob2ljZXNGcmFnbWVudChncm91cENob2ljZXMsIGZyYWdtZW50LCB0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnJhZ21lbnQ7XG4gIH07XG5cbiAgX3Byb3RvLl9jcmVhdGVDaG9pY2VzRnJhZ21lbnQgPSBmdW5jdGlvbiBfY3JlYXRlQ2hvaWNlc0ZyYWdtZW50KGNob2ljZXMsIGZyYWdtZW50LCB3aXRoaW5Hcm91cCkge1xuICAgIHZhciBfdGhpczE0ID0gdGhpcztcblxuICAgIGlmIChmcmFnbWVudCA9PT0gdm9pZCAwKSB7XG4gICAgICBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICB9XG5cbiAgICBpZiAod2l0aGluR3JvdXAgPT09IHZvaWQgMCkge1xuICAgICAgd2l0aGluR3JvdXAgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgYSBmcmFnbWVudCB0byBzdG9yZSBvdXIgbGlzdCBpdGVtcyAoc28gd2UgZG9uJ3QgaGF2ZSB0byB1cGRhdGUgdGhlIERPTSBmb3IgZWFjaCBpdGVtKVxuICAgIHZhciBfdGhpcyRjb25maWcgPSB0aGlzLmNvbmZpZyxcbiAgICAgICAgcmVuZGVyU2VsZWN0ZWRDaG9pY2VzID0gX3RoaXMkY29uZmlnLnJlbmRlclNlbGVjdGVkQ2hvaWNlcyxcbiAgICAgICAgc2VhcmNoUmVzdWx0TGltaXQgPSBfdGhpcyRjb25maWcuc2VhcmNoUmVzdWx0TGltaXQsXG4gICAgICAgIHJlbmRlckNob2ljZUxpbWl0ID0gX3RoaXMkY29uZmlnLnJlbmRlckNob2ljZUxpbWl0O1xuICAgIHZhciBmaWx0ZXIgPSB0aGlzLl9pc1NlYXJjaGluZyA/IHNvcnRCeVNjb3JlIDogdGhpcy5jb25maWcuc29ydGVyO1xuXG4gICAgdmFyIGFwcGVuZENob2ljZSA9IGZ1bmN0aW9uIGFwcGVuZENob2ljZShjaG9pY2UpIHtcbiAgICAgIHZhciBzaG91bGRSZW5kZXIgPSByZW5kZXJTZWxlY3RlZENob2ljZXMgPT09ICdhdXRvJyA/IF90aGlzMTQuX2lzU2VsZWN0T25lRWxlbWVudCB8fCAhY2hvaWNlLnNlbGVjdGVkIDogdHJ1ZTtcblxuICAgICAgaWYgKHNob3VsZFJlbmRlcikge1xuICAgICAgICB2YXIgZHJvcGRvd25JdGVtID0gX3RoaXMxNC5fZ2V0VGVtcGxhdGUoJ2Nob2ljZScsIGNob2ljZSwgX3RoaXMxNC5jb25maWcuaXRlbVNlbGVjdFRleHQpO1xuXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGRyb3Bkb3duSXRlbSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciByZW5kZXJlcmFibGVDaG9pY2VzID0gY2hvaWNlcztcblxuICAgIGlmIChyZW5kZXJTZWxlY3RlZENob2ljZXMgPT09ICdhdXRvJyAmJiAhdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50KSB7XG4gICAgICByZW5kZXJlcmFibGVDaG9pY2VzID0gY2hvaWNlcy5maWx0ZXIoZnVuY3Rpb24gKGNob2ljZSkge1xuICAgICAgICByZXR1cm4gIWNob2ljZS5zZWxlY3RlZDtcbiAgICAgIH0pO1xuICAgIH0gLy8gU3BsaXQgYXJyYXkgaW50byBwbGFjZWhvbGRlcnMgYW5kIFwibm9ybWFsXCIgY2hvaWNlc1xuXG5cbiAgICB2YXIgX3JlbmRlcmVyYWJsZUNob2ljZXMkID0gcmVuZGVyZXJhYmxlQ2hvaWNlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY2hvaWNlKSB7XG4gICAgICBpZiAoY2hvaWNlLnBsYWNlaG9sZGVyKSB7XG4gICAgICAgIGFjYy5wbGFjZWhvbGRlckNob2ljZXMucHVzaChjaG9pY2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWNjLm5vcm1hbENob2ljZXMucHVzaChjaG9pY2UpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHtcbiAgICAgIHBsYWNlaG9sZGVyQ2hvaWNlczogW10sXG4gICAgICBub3JtYWxDaG9pY2VzOiBbXVxuICAgIH0pLFxuICAgICAgICBwbGFjZWhvbGRlckNob2ljZXMgPSBfcmVuZGVyZXJhYmxlQ2hvaWNlcyQucGxhY2Vob2xkZXJDaG9pY2VzLFxuICAgICAgICBub3JtYWxDaG9pY2VzID0gX3JlbmRlcmVyYWJsZUNob2ljZXMkLm5vcm1hbENob2ljZXM7IC8vIElmIHNvcnRpbmcgaXMgZW5hYmxlZCBvciB0aGUgdXNlciBpcyBzZWFyY2hpbmcsIGZpbHRlciBjaG9pY2VzXG5cblxuICAgIGlmICh0aGlzLmNvbmZpZy5zaG91bGRTb3J0IHx8IHRoaXMuX2lzU2VhcmNoaW5nKSB7XG4gICAgICBub3JtYWxDaG9pY2VzLnNvcnQoZmlsdGVyKTtcbiAgICB9XG5cbiAgICB2YXIgY2hvaWNlTGltaXQgPSByZW5kZXJlcmFibGVDaG9pY2VzLmxlbmd0aDsgLy8gUHJlcGVuZCBwbGFjZWhvbGVkZXJcblxuICAgIHZhciBzb3J0ZWRDaG9pY2VzID0gdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50ID8gW10uY29uY2F0KHBsYWNlaG9sZGVyQ2hvaWNlcywgbm9ybWFsQ2hvaWNlcykgOiBub3JtYWxDaG9pY2VzO1xuXG4gICAgaWYgKHRoaXMuX2lzU2VhcmNoaW5nKSB7XG4gICAgICBjaG9pY2VMaW1pdCA9IHNlYXJjaFJlc3VsdExpbWl0O1xuICAgIH0gZWxzZSBpZiAocmVuZGVyQ2hvaWNlTGltaXQgJiYgcmVuZGVyQ2hvaWNlTGltaXQgPiAwICYmICF3aXRoaW5Hcm91cCkge1xuICAgICAgY2hvaWNlTGltaXQgPSByZW5kZXJDaG9pY2VMaW1pdDtcbiAgICB9IC8vIEFkZCBlYWNoIGNob2ljZSB0byBkcm9wZG93biB3aXRoaW4gcmFuZ2VcblxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaG9pY2VMaW1pdDsgaSArPSAxKSB7XG4gICAgICBpZiAoc29ydGVkQ2hvaWNlc1tpXSkge1xuICAgICAgICBhcHBlbmRDaG9pY2Uoc29ydGVkQ2hvaWNlc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYWdtZW50O1xuICB9O1xuXG4gIF9wcm90by5fY3JlYXRlSXRlbXNGcmFnbWVudCA9IGZ1bmN0aW9uIF9jcmVhdGVJdGVtc0ZyYWdtZW50KGl0ZW1zLCBmcmFnbWVudCkge1xuICAgIHZhciBfdGhpczE1ID0gdGhpcztcblxuICAgIGlmIChmcmFnbWVudCA9PT0gdm9pZCAwKSB7XG4gICAgICBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgZnJhZ21lbnQgdG8gYWRkIGVsZW1lbnRzIHRvXG4gICAgdmFyIF90aGlzJGNvbmZpZzIgPSB0aGlzLmNvbmZpZyxcbiAgICAgICAgc2hvdWxkU29ydEl0ZW1zID0gX3RoaXMkY29uZmlnMi5zaG91bGRTb3J0SXRlbXMsXG4gICAgICAgIHNvcnRlciA9IF90aGlzJGNvbmZpZzIuc29ydGVyLFxuICAgICAgICByZW1vdmVJdGVtQnV0dG9uID0gX3RoaXMkY29uZmlnMi5yZW1vdmVJdGVtQnV0dG9uOyAvLyBJZiBzb3J0aW5nIGlzIGVuYWJsZWQsIGZpbHRlciBpdGVtc1xuXG4gICAgaWYgKHNob3VsZFNvcnRJdGVtcyAmJiAhdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50KSB7XG4gICAgICBpdGVtcy5zb3J0KHNvcnRlcik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzVGV4dEVsZW1lbnQpIHtcbiAgICAgIC8vIFVwZGF0ZSB0aGUgdmFsdWUgb2YgdGhlIGhpZGRlbiBpbnB1dFxuICAgICAgdGhpcy5wYXNzZWRFbGVtZW50LnZhbHVlID0gaXRlbXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFVwZGF0ZSB0aGUgb3B0aW9ucyBvZiB0aGUgaGlkZGVuIGlucHV0XG4gICAgICB0aGlzLnBhc3NlZEVsZW1lbnQub3B0aW9ucyA9IGl0ZW1zO1xuICAgIH1cblxuICAgIHZhciBhZGRJdGVtVG9GcmFnbWVudCA9IGZ1bmN0aW9uIGFkZEl0ZW1Ub0ZyYWdtZW50KGl0ZW0pIHtcbiAgICAgIC8vIENyZWF0ZSBuZXcgbGlzdCBlbGVtZW50XG4gICAgICB2YXIgbGlzdEl0ZW0gPSBfdGhpczE1Ll9nZXRUZW1wbGF0ZSgnaXRlbScsIGl0ZW0sIHJlbW92ZUl0ZW1CdXR0b24pOyAvLyBBcHBlbmQgaXQgdG8gbGlzdFxuXG5cbiAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICB9OyAvLyBBZGQgZWFjaCBsaXN0IGl0ZW0gdG8gbGlzdFxuXG5cbiAgICBpdGVtcy5mb3JFYWNoKGFkZEl0ZW1Ub0ZyYWdtZW50KTtcbiAgICByZXR1cm4gZnJhZ21lbnQ7XG4gIH07XG5cbiAgX3Byb3RvLl90cmlnZ2VyQ2hhbmdlID0gZnVuY3Rpb24gX3RyaWdnZXJDaGFuZ2UodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucGFzc2VkRWxlbWVudC50cmlnZ2VyRXZlbnQoRVZFTlRTLmNoYW5nZSwge1xuICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLl9zZWxlY3RQbGFjZWhvbGRlckNob2ljZSA9IGZ1bmN0aW9uIF9zZWxlY3RQbGFjZWhvbGRlckNob2ljZSgpIHtcbiAgICB2YXIgcGxhY2Vob2xkZXJDaG9pY2UgPSB0aGlzLl9zdG9yZS5wbGFjZWhvbGRlckNob2ljZTtcblxuICAgIGlmIChwbGFjZWhvbGRlckNob2ljZSkge1xuICAgICAgdGhpcy5fYWRkSXRlbSh7XG4gICAgICAgIHZhbHVlOiBwbGFjZWhvbGRlckNob2ljZS52YWx1ZSxcbiAgICAgICAgbGFiZWw6IHBsYWNlaG9sZGVyQ2hvaWNlLmxhYmVsLFxuICAgICAgICBjaG9pY2VJZDogcGxhY2Vob2xkZXJDaG9pY2UuaWQsXG4gICAgICAgIGdyb3VwSWQ6IHBsYWNlaG9sZGVyQ2hvaWNlLmdyb3VwSWQsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlckNob2ljZS5wbGFjZWhvbGRlclxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX3RyaWdnZXJDaGFuZ2UocGxhY2Vob2xkZXJDaG9pY2UudmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX2hhbmRsZUJ1dHRvbkFjdGlvbiA9IGZ1bmN0aW9uIF9oYW5kbGVCdXR0b25BY3Rpb24oYWN0aXZlSXRlbXMsIGVsZW1lbnQpIHtcbiAgICBpZiAoIWFjdGl2ZUl0ZW1zIHx8ICFlbGVtZW50IHx8ICF0aGlzLmNvbmZpZy5yZW1vdmVJdGVtcyB8fCAhdGhpcy5jb25maWcucmVtb3ZlSXRlbUJ1dHRvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpdGVtSWQgPSBlbGVtZW50LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgdmFyIGl0ZW1Ub1JlbW92ZSA9IGFjdGl2ZUl0ZW1zLmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLmlkID09PSBwYXJzZUludChpdGVtSWQsIDEwKTtcbiAgICB9KTsgLy8gUmVtb3ZlIGl0ZW0gYXNzb2NpYXRlZCB3aXRoIGJ1dHRvblxuXG4gICAgdGhpcy5fcmVtb3ZlSXRlbShpdGVtVG9SZW1vdmUpO1xuXG4gICAgdGhpcy5fdHJpZ2dlckNoYW5nZShpdGVtVG9SZW1vdmUudmFsdWUpO1xuXG4gICAgaWYgKHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgdGhpcy5fc2VsZWN0UGxhY2Vob2xkZXJDaG9pY2UoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9oYW5kbGVJdGVtQWN0aW9uID0gZnVuY3Rpb24gX2hhbmRsZUl0ZW1BY3Rpb24oYWN0aXZlSXRlbXMsIGVsZW1lbnQsIGhhc1NoaWZ0S2V5KSB7XG4gICAgdmFyIF90aGlzMTYgPSB0aGlzO1xuXG4gICAgaWYgKGhhc1NoaWZ0S2V5ID09PSB2b2lkIDApIHtcbiAgICAgIGhhc1NoaWZ0S2V5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFhY3RpdmVJdGVtcyB8fCAhZWxlbWVudCB8fCAhdGhpcy5jb25maWcucmVtb3ZlSXRlbXMgfHwgdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBhc3NlZElkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTsgLy8gV2Ugb25seSB3YW50IHRvIHNlbGVjdCBvbmUgaXRlbSB3aXRoIGEgY2xpY2tcbiAgICAvLyBzbyB3ZSBkZXNlbGVjdCBhbnkgaXRlbXMgdGhhdCBhcmVuJ3QgdGhlIHRhcmdldFxuICAgIC8vIHVubGVzcyBzaGlmdCBpcyBiZWluZyBwcmVzc2VkXG5cbiAgICBhY3RpdmVJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICBpZiAoaXRlbS5pZCA9PT0gcGFyc2VJbnQocGFzc2VkSWQsIDEwKSAmJiAhaXRlbS5oaWdobGlnaHRlZCkge1xuICAgICAgICBfdGhpczE2LmhpZ2hsaWdodEl0ZW0oaXRlbSk7XG4gICAgICB9IGVsc2UgaWYgKCFoYXNTaGlmdEtleSAmJiBpdGVtLmhpZ2hsaWdodGVkKSB7XG4gICAgICAgIF90aGlzMTYudW5oaWdobGlnaHRJdGVtKGl0ZW0pO1xuICAgICAgfVxuICAgIH0pOyAvLyBGb2N1cyBpbnB1dCBhcyB3aXRob3V0IGZvY3VzLCBhIHVzZXIgY2Fubm90IGRvIGFueXRoaW5nIHdpdGggYVxuICAgIC8vIGhpZ2hsaWdodGVkIGl0ZW1cblxuICAgIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgfTtcblxuICBfcHJvdG8uX2hhbmRsZUNob2ljZUFjdGlvbiA9IGZ1bmN0aW9uIF9oYW5kbGVDaG9pY2VBY3Rpb24oYWN0aXZlSXRlbXMsIGVsZW1lbnQpIHtcbiAgICBpZiAoIWFjdGl2ZUl0ZW1zIHx8ICFlbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBJZiB3ZSBhcmUgY2xpY2tpbmcgb24gYW4gb3B0aW9uXG5cblxuICAgIHZhciBpZCA9IGVsZW1lbnQuZGF0YXNldC5pZDtcblxuICAgIHZhciBjaG9pY2UgPSB0aGlzLl9zdG9yZS5nZXRDaG9pY2VCeUlkKGlkKTtcblxuICAgIGlmICghY2hvaWNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBhc3NlZEtleUNvZGUgPSBhY3RpdmVJdGVtc1swXSAmJiBhY3RpdmVJdGVtc1swXS5rZXlDb2RlID8gYWN0aXZlSXRlbXNbMF0ua2V5Q29kZSA6IG51bGw7XG4gICAgdmFyIGhhc0FjdGl2ZURyb3Bkb3duID0gdGhpcy5kcm9wZG93bi5pc0FjdGl2ZTsgLy8gVXBkYXRlIGNob2ljZSBrZXlDb2RlXG5cbiAgICBjaG9pY2Uua2V5Q29kZSA9IHBhc3NlZEtleUNvZGU7XG4gICAgdGhpcy5wYXNzZWRFbGVtZW50LnRyaWdnZXJFdmVudChFVkVOVFMuY2hvaWNlLCB7XG4gICAgICBjaG9pY2U6IGNob2ljZVxuICAgIH0pO1xuXG4gICAgaWYgKCFjaG9pY2Uuc2VsZWN0ZWQgJiYgIWNob2ljZS5kaXNhYmxlZCkge1xuICAgICAgdmFyIGNhbkFkZEl0ZW0gPSB0aGlzLl9jYW5BZGRJdGVtKGFjdGl2ZUl0ZW1zLCBjaG9pY2UudmFsdWUpO1xuXG4gICAgICBpZiAoY2FuQWRkSXRlbS5yZXNwb25zZSkge1xuICAgICAgICB0aGlzLl9hZGRJdGVtKHtcbiAgICAgICAgICB2YWx1ZTogY2hvaWNlLnZhbHVlLFxuICAgICAgICAgIGxhYmVsOiBjaG9pY2UubGFiZWwsXG4gICAgICAgICAgY2hvaWNlSWQ6IGNob2ljZS5pZCxcbiAgICAgICAgICBncm91cElkOiBjaG9pY2UuZ3JvdXBJZCxcbiAgICAgICAgICBjdXN0b21Qcm9wZXJ0aWVzOiBjaG9pY2UuY3VzdG9tUHJvcGVydGllcyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogY2hvaWNlLnBsYWNlaG9sZGVyLFxuICAgICAgICAgIGtleUNvZGU6IGNob2ljZS5rZXlDb2RlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX3RyaWdnZXJDaGFuZ2UoY2hvaWNlLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNsZWFySW5wdXQoKTsgLy8gV2Ugd2FudCB0byBjbG9zZSB0aGUgZHJvcGRvd24gaWYgd2UgYXJlIGRlYWxpbmcgd2l0aCBhIHNpbmdsZSBzZWxlY3QgYm94XG5cbiAgICBpZiAoaGFzQWN0aXZlRHJvcGRvd24gJiYgdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50KSB7XG4gICAgICB0aGlzLmhpZGVEcm9wZG93bih0cnVlKTtcbiAgICAgIHRoaXMuY29udGFpbmVyT3V0ZXIuZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9oYW5kbGVCYWNrc3BhY2UgPSBmdW5jdGlvbiBfaGFuZGxlQmFja3NwYWNlKGFjdGl2ZUl0ZW1zKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5yZW1vdmVJdGVtcyB8fCAhYWN0aXZlSXRlbXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbGFzdEl0ZW0gPSBhY3RpdmVJdGVtc1thY3RpdmVJdGVtcy5sZW5ndGggLSAxXTtcbiAgICB2YXIgaGFzSGlnaGxpZ2h0ZWRJdGVtcyA9IGFjdGl2ZUl0ZW1zLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLmhpZ2hsaWdodGVkO1xuICAgIH0pOyAvLyBJZiBlZGl0aW5nIHRoZSBsYXN0IGl0ZW0gaXMgYWxsb3dlZCBhbmQgdGhlcmUgYXJlIG5vdCBvdGhlciBzZWxlY3RlZCBpdGVtcyxcbiAgICAvLyB3ZSBjYW4gZWRpdCB0aGUgaXRlbSB2YWx1ZS4gT3RoZXJ3aXNlIGlmIHdlIGNhbiByZW1vdmUgaXRlbXMsIHJlbW92ZSBhbGwgc2VsZWN0ZWQgaXRlbXNcblxuICAgIGlmICh0aGlzLmNvbmZpZy5lZGl0SXRlbXMgJiYgIWhhc0hpZ2hsaWdodGVkSXRlbXMgJiYgbGFzdEl0ZW0pIHtcbiAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSBsYXN0SXRlbS52YWx1ZTtcbiAgICAgIHRoaXMuaW5wdXQuc2V0V2lkdGgoKTtcblxuICAgICAgdGhpcy5fcmVtb3ZlSXRlbShsYXN0SXRlbSk7XG5cbiAgICAgIHRoaXMuX3RyaWdnZXJDaGFuZ2UobGFzdEl0ZW0udmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWhhc0hpZ2hsaWdodGVkSXRlbXMpIHtcbiAgICAgICAgLy8gSGlnaGxpZ2h0IGxhc3QgaXRlbSBpZiBub25lIGFscmVhZHkgaGlnaGxpZ2h0ZWRcbiAgICAgICAgdGhpcy5oaWdobGlnaHRJdGVtKGxhc3RJdGVtLCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucmVtb3ZlSGlnaGxpZ2h0ZWRJdGVtcyh0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9zdGFydExvYWRpbmcgPSBmdW5jdGlvbiBfc3RhcnRMb2FkaW5nKCkge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHNldElzTG9hZGluZyh0cnVlKSk7XG4gIH07XG5cbiAgX3Byb3RvLl9zdG9wTG9hZGluZyA9IGZ1bmN0aW9uIF9zdG9wTG9hZGluZygpIHtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChzZXRJc0xvYWRpbmcoZmFsc2UpKTtcbiAgfTtcblxuICBfcHJvdG8uX2hhbmRsZUxvYWRpbmdTdGF0ZSA9IGZ1bmN0aW9uIF9oYW5kbGVMb2FkaW5nU3RhdGUoc2V0TG9hZGluZykge1xuICAgIGlmIChzZXRMb2FkaW5nID09PSB2b2lkIDApIHtcbiAgICAgIHNldExvYWRpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBwbGFjZWhvbGRlckl0ZW0gPSB0aGlzLml0ZW1MaXN0LmdldENoaWxkKFwiLlwiICsgdGhpcy5jb25maWcuY2xhc3NOYW1lcy5wbGFjZWhvbGRlcik7XG5cbiAgICBpZiAoc2V0TG9hZGluZykge1xuICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgICB0aGlzLmNvbnRhaW5lck91dGVyLmFkZExvYWRpbmdTdGF0ZSgpO1xuXG4gICAgICBpZiAodGhpcy5faXNTZWxlY3RPbmVFbGVtZW50KSB7XG4gICAgICAgIGlmICghcGxhY2Vob2xkZXJJdGVtKSB7XG4gICAgICAgICAgcGxhY2Vob2xkZXJJdGVtID0gdGhpcy5fZ2V0VGVtcGxhdGUoJ3BsYWNlaG9sZGVyJywgdGhpcy5jb25maWcubG9hZGluZ1RleHQpO1xuICAgICAgICAgIHRoaXMuaXRlbUxpc3QuYXBwZW5kKHBsYWNlaG9sZGVySXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGxhY2Vob2xkZXJJdGVtLmlubmVySFRNTCA9IHRoaXMuY29uZmlnLmxvYWRpbmdUZXh0O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlucHV0LnBsYWNlaG9sZGVyID0gdGhpcy5jb25maWcubG9hZGluZ1RleHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgICB0aGlzLmNvbnRhaW5lck91dGVyLnJlbW92ZUxvYWRpbmdTdGF0ZSgpO1xuXG4gICAgICBpZiAodGhpcy5faXNTZWxlY3RPbmVFbGVtZW50KSB7XG4gICAgICAgIHBsYWNlaG9sZGVySXRlbS5pbm5lckhUTUwgPSB0aGlzLl9wbGFjZWhvbGRlclZhbHVlIHx8ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbnB1dC5wbGFjZWhvbGRlciA9IHRoaXMuX3BsYWNlaG9sZGVyVmFsdWUgfHwgJyc7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5faGFuZGxlU2VhcmNoID0gZnVuY3Rpb24gX2hhbmRsZVNlYXJjaCh2YWx1ZSkge1xuICAgIGlmICghdmFsdWUgfHwgIXRoaXMuaW5wdXQuaXNGb2N1c3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjaG9pY2VzID0gdGhpcy5fc3RvcmUuY2hvaWNlcztcbiAgICB2YXIgX3RoaXMkY29uZmlnMyA9IHRoaXMuY29uZmlnLFxuICAgICAgICBzZWFyY2hGbG9vciA9IF90aGlzJGNvbmZpZzMuc2VhcmNoRmxvb3IsXG4gICAgICAgIHNlYXJjaENob2ljZXMgPSBfdGhpcyRjb25maWczLnNlYXJjaENob2ljZXM7XG4gICAgdmFyIGhhc1VuYWN0aXZlQ2hvaWNlcyA9IGNob2ljZXMuc29tZShmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICByZXR1cm4gIW9wdGlvbi5hY3RpdmU7XG4gICAgfSk7IC8vIENoZWNrIHRoYXQgd2UgaGF2ZSBhIHZhbHVlIHRvIHNlYXJjaCBhbmQgdGhlIGlucHV0IHdhcyBhbiBhbHBoYW51bWVyaWMgY2hhcmFjdGVyXG5cbiAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoID49IHNlYXJjaEZsb29yKSB7XG4gICAgICB2YXIgcmVzdWx0Q291bnQgPSBzZWFyY2hDaG9pY2VzID8gdGhpcy5fc2VhcmNoQ2hvaWNlcyh2YWx1ZSkgOiAwOyAvLyBUcmlnZ2VyIHNlYXJjaCBldmVudFxuXG4gICAgICB0aGlzLnBhc3NlZEVsZW1lbnQudHJpZ2dlckV2ZW50KEVWRU5UUy5zZWFyY2gsIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICByZXN1bHRDb3VudDogcmVzdWx0Q291bnRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaGFzVW5hY3RpdmVDaG9pY2VzKSB7XG4gICAgICAvLyBPdGhlcndpc2UgcmVzZXQgY2hvaWNlcyB0byBhY3RpdmVcbiAgICAgIHRoaXMuX2lzU2VhcmNoaW5nID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKGNob2ljZXNfYWN0aXZhdGVDaG9pY2VzKHRydWUpKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9jYW5BZGRJdGVtID0gZnVuY3Rpb24gX2NhbkFkZEl0ZW0oYWN0aXZlSXRlbXMsIHZhbHVlKSB7XG4gICAgdmFyIGNhbkFkZEl0ZW0gPSB0cnVlO1xuICAgIHZhciBub3RpY2UgPSB0eXBlb2YgdGhpcy5jb25maWcuYWRkSXRlbVRleHQgPT09ICdmdW5jdGlvbicgPyB0aGlzLmNvbmZpZy5hZGRJdGVtVGV4dCh2YWx1ZSkgOiB0aGlzLmNvbmZpZy5hZGRJdGVtVGV4dDtcblxuICAgIGlmICghdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50KSB7XG4gICAgICB2YXIgaXNEdXBsaWNhdGVWYWx1ZSA9IGV4aXN0c0luQXJyYXkoYWN0aXZlSXRlbXMsIHZhbHVlKTtcblxuICAgICAgaWYgKHRoaXMuY29uZmlnLm1heEl0ZW1Db3VudCA+IDAgJiYgdGhpcy5jb25maWcubWF4SXRlbUNvdW50IDw9IGFjdGl2ZUl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIG1heCBlbnRyeSBsaW1pdCBhbmQgd2UgaGF2ZSByZWFjaGVkIHRoYXQgbGltaXRcbiAgICAgICAgLy8gZG9uJ3QgdXBkYXRlXG4gICAgICAgIGNhbkFkZEl0ZW0gPSBmYWxzZTtcbiAgICAgICAgbm90aWNlID0gdHlwZW9mIHRoaXMuY29uZmlnLm1heEl0ZW1UZXh0ID09PSAnZnVuY3Rpb24nID8gdGhpcy5jb25maWcubWF4SXRlbVRleHQodGhpcy5jb25maWcubWF4SXRlbUNvdW50KSA6IHRoaXMuY29uZmlnLm1heEl0ZW1UZXh0O1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuY29uZmlnLmR1cGxpY2F0ZUl0ZW1zQWxsb3dlZCAmJiBpc0R1cGxpY2F0ZVZhbHVlICYmIGNhbkFkZEl0ZW0pIHtcbiAgICAgICAgY2FuQWRkSXRlbSA9IGZhbHNlO1xuICAgICAgICBub3RpY2UgPSB0eXBlb2YgdGhpcy5jb25maWcudW5pcXVlSXRlbVRleHQgPT09ICdmdW5jdGlvbicgPyB0aGlzLmNvbmZpZy51bmlxdWVJdGVtVGV4dCh2YWx1ZSkgOiB0aGlzLmNvbmZpZy51bmlxdWVJdGVtVGV4dDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2lzVGV4dEVsZW1lbnQgJiYgdGhpcy5jb25maWcuYWRkSXRlbXMgJiYgY2FuQWRkSXRlbSAmJiB0eXBlb2YgdGhpcy5jb25maWcuYWRkSXRlbUZpbHRlciA9PT0gJ2Z1bmN0aW9uJyAmJiAhdGhpcy5jb25maWcuYWRkSXRlbUZpbHRlcih2YWx1ZSkpIHtcbiAgICAgICAgY2FuQWRkSXRlbSA9IGZhbHNlO1xuICAgICAgICBub3RpY2UgPSB0eXBlb2YgdGhpcy5jb25maWcuY3VzdG9tQWRkSXRlbVRleHQgPT09ICdmdW5jdGlvbicgPyB0aGlzLmNvbmZpZy5jdXN0b21BZGRJdGVtVGV4dCh2YWx1ZSkgOiB0aGlzLmNvbmZpZy5jdXN0b21BZGRJdGVtVGV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVzcG9uc2U6IGNhbkFkZEl0ZW0sXG4gICAgICBub3RpY2U6IG5vdGljZVxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLl9zZWFyY2hDaG9pY2VzID0gZnVuY3Rpb24gX3NlYXJjaENob2ljZXModmFsdWUpIHtcbiAgICB2YXIgbmV3VmFsdWUgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUudHJpbSgpIDogdmFsdWU7XG4gICAgdmFyIGN1cnJlbnRWYWx1ZSA9IHR5cGVvZiB0aGlzLl9jdXJyZW50VmFsdWUgPT09ICdzdHJpbmcnID8gdGhpcy5fY3VycmVudFZhbHVlLnRyaW0oKSA6IHRoaXMuX2N1cnJlbnRWYWx1ZTtcblxuICAgIGlmIChuZXdWYWx1ZS5sZW5ndGggPCAxICYmIG5ld1ZhbHVlID09PSBjdXJyZW50VmFsdWUgKyBcIiBcIikge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSAvLyBJZiBuZXcgdmFsdWUgbWF0Y2hlcyB0aGUgZGVzaXJlZCBsZW5ndGggYW5kIGlzIG5vdCB0aGUgc2FtZSBhcyB0aGUgY3VycmVudCB2YWx1ZSB3aXRoIGEgc3BhY2VcblxuXG4gICAgdmFyIGhheXN0YWNrID0gdGhpcy5fc3RvcmUuc2VhcmNoYWJsZUNob2ljZXM7XG4gICAgdmFyIG5lZWRsZSA9IG5ld1ZhbHVlO1xuICAgIHZhciBrZXlzID0gW10uY29uY2F0KHRoaXMuY29uZmlnLnNlYXJjaEZpZWxkcyk7XG4gICAgdmFyIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMuY29uZmlnLmZ1c2VPcHRpb25zLCB7XG4gICAgICBrZXlzOiBrZXlzXG4gICAgfSk7XG4gICAgdmFyIGZ1c2UgPSBuZXcgZnVzZV9kZWZhdWx0LmEoaGF5c3RhY2ssIG9wdGlvbnMpO1xuICAgIHZhciByZXN1bHRzID0gZnVzZS5zZWFyY2gobmVlZGxlKTtcbiAgICB0aGlzLl9jdXJyZW50VmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB0aGlzLl9oaWdobGlnaHRQb3NpdGlvbiA9IDA7XG4gICAgdGhpcy5faXNTZWFyY2hpbmcgPSB0cnVlO1xuXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goY2hvaWNlc19maWx0ZXJDaG9pY2VzKHJlc3VsdHMpKTtcblxuICAgIHJldHVybiByZXN1bHRzLmxlbmd0aDtcbiAgfTtcblxuICBfcHJvdG8uX2FkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHZhciBfZG9jdW1lbnQgPSBkb2N1bWVudCxcbiAgICAgICAgZG9jdW1lbnRFbGVtZW50ID0gX2RvY3VtZW50LmRvY3VtZW50RWxlbWVudDsgLy8gY2FwdHVyZSBldmVudHMgLSBjYW4gY2FuY2VsIGV2ZW50IHByb2Nlc3Npbmcgb3IgcHJvcGFnYXRpb25cblxuICAgIGRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuX29uVG91Y2hFbmQsIHRydWUpO1xuICAgIHRoaXMuY29udGFpbmVyT3V0ZXIuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlEb3duLCB0cnVlKTtcbiAgICB0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5fb25Nb3VzZURvd24sIHRydWUpOyAvLyBwYXNzaXZlIGV2ZW50cyAtIGRvZXNuJ3QgY2FsbCBgcHJldmVudERlZmF1bHRgIG9yIGBzdG9wUHJvcGFnYXRpb25gXG5cbiAgICBkb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkNsaWNrLCB7XG4gICAgICBwYXNzaXZlOiB0cnVlXG4gICAgfSk7XG4gICAgZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlLCB7XG4gICAgICBwYXNzaXZlOiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy5kcm9wZG93bi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMuX29uTW91c2VPdmVyLCB7XG4gICAgICBwYXNzaXZlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5faXNTZWxlY3RPbmVFbGVtZW50KSB7XG4gICAgICB0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9vbkZvY3VzLCB7XG4gICAgICAgIHBhc3NpdmU6IHRydWVcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9vbkJsdXIsIHtcbiAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5fb25LZXlVcCwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMuaW5wdXQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX29uRm9jdXMsIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLmlucHV0LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX29uQmx1ciwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuaW5wdXQuZWxlbWVudC5mb3JtKSB7XG4gICAgICB0aGlzLmlucHV0LmVsZW1lbnQuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdyZXNldCcsIHRoaXMuX29uRm9ybVJlc2V0LCB7XG4gICAgICAgIHBhc3NpdmU6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfTtcblxuICBfcHJvdG8uX3JlbW92ZUV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gX3JlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHZhciBfZG9jdW1lbnQyID0gZG9jdW1lbnQsXG4gICAgICAgIGRvY3VtZW50RWxlbWVudCA9IF9kb2N1bWVudDIuZG9jdW1lbnRFbGVtZW50O1xuICAgIGRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuX29uVG91Y2hFbmQsIHRydWUpO1xuICAgIHRoaXMuY29udGFpbmVyT3V0ZXIuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlEb3duLCB0cnVlKTtcbiAgICB0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5fb25Nb3VzZURvd24sIHRydWUpO1xuICAgIGRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX29uQ2xpY2spO1xuICAgIGRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgdGhpcy5kcm9wZG93bi5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMuX29uTW91c2VPdmVyKTtcblxuICAgIGlmICh0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyT3V0ZXIuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX29uRm9jdXMpO1xuICAgICAgdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9vbkJsdXIpO1xuICAgIH1cblxuICAgIHRoaXMuaW5wdXQuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX29uS2V5VXApO1xuICAgIHRoaXMuaW5wdXQuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX29uRm9jdXMpO1xuICAgIHRoaXMuaW5wdXQuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5fb25CbHVyKTtcblxuICAgIGlmICh0aGlzLmlucHV0LmVsZW1lbnQuZm9ybSkge1xuICAgICAgdGhpcy5pbnB1dC5lbGVtZW50LmZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzZXQnLCB0aGlzLl9vbkZvcm1SZXNldCk7XG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVycygpO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLl9vbktleURvd24gPSBmdW5jdGlvbiBfb25LZXlEb3duKGV2ZW50KSB7XG4gICAgdmFyIF9rZXlEb3duQWN0aW9ucztcblxuICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQsXG4gICAgICAgIGtleUNvZGUgPSBldmVudC5rZXlDb2RlLFxuICAgICAgICBjdHJsS2V5ID0gZXZlbnQuY3RybEtleSxcbiAgICAgICAgbWV0YUtleSA9IGV2ZW50Lm1ldGFLZXk7XG4gICAgdmFyIGFjdGl2ZUl0ZW1zID0gdGhpcy5fc3RvcmUuYWN0aXZlSXRlbXM7XG4gICAgdmFyIGhhc0ZvY3VzZWRJbnB1dCA9IHRoaXMuaW5wdXQuaXNGb2N1c3NlZDtcbiAgICB2YXIgaGFzQWN0aXZlRHJvcGRvd24gPSB0aGlzLmRyb3Bkb3duLmlzQWN0aXZlO1xuICAgIHZhciBoYXNJdGVtcyA9IHRoaXMuaXRlbUxpc3QuaGFzQ2hpbGRyZW4oKTtcbiAgICB2YXIga2V5U3RyaW5nID0gU3RyaW5nLmZyb21DaGFyQ29kZShrZXlDb2RlKTtcbiAgICB2YXIgQkFDS19LRVkgPSBLRVlfQ09ERVMuQkFDS19LRVksXG4gICAgICAgIERFTEVURV9LRVkgPSBLRVlfQ09ERVMuREVMRVRFX0tFWSxcbiAgICAgICAgRU5URVJfS0VZID0gS0VZX0NPREVTLkVOVEVSX0tFWSxcbiAgICAgICAgQV9LRVkgPSBLRVlfQ09ERVMuQV9LRVksXG4gICAgICAgIEVTQ19LRVkgPSBLRVlfQ09ERVMuRVNDX0tFWSxcbiAgICAgICAgVVBfS0VZID0gS0VZX0NPREVTLlVQX0tFWSxcbiAgICAgICAgRE9XTl9LRVkgPSBLRVlfQ09ERVMuRE9XTl9LRVksXG4gICAgICAgIFBBR0VfVVBfS0VZID0gS0VZX0NPREVTLlBBR0VfVVBfS0VZLFxuICAgICAgICBQQUdFX0RPV05fS0VZID0gS0VZX0NPREVTLlBBR0VfRE9XTl9LRVk7XG4gICAgdmFyIGhhc0N0cmxEb3duS2V5UHJlc3NlZCA9IGN0cmxLZXkgfHwgbWV0YUtleTsgLy8gSWYgYSB1c2VyIGlzIHR5cGluZyBhbmQgdGhlIGRyb3Bkb3duIGlzIG5vdCBhY3RpdmVcblxuICAgIGlmICghdGhpcy5faXNUZXh0RWxlbWVudCAmJiAvW2EtekEtWjAtOS1fIF0vLnRlc3Qoa2V5U3RyaW5nKSkge1xuICAgICAgdGhpcy5zaG93RHJvcGRvd24oKTtcbiAgICB9IC8vIE1hcCBrZXlzIHRvIGtleSBhY3Rpb25zXG5cblxuICAgIHZhciBrZXlEb3duQWN0aW9ucyA9IChfa2V5RG93bkFjdGlvbnMgPSB7fSwgX2tleURvd25BY3Rpb25zW0FfS0VZXSA9IHRoaXMuX29uQUtleSwgX2tleURvd25BY3Rpb25zW0VOVEVSX0tFWV0gPSB0aGlzLl9vbkVudGVyS2V5LCBfa2V5RG93bkFjdGlvbnNbRVNDX0tFWV0gPSB0aGlzLl9vbkVzY2FwZUtleSwgX2tleURvd25BY3Rpb25zW1VQX0tFWV0gPSB0aGlzLl9vbkRpcmVjdGlvbktleSwgX2tleURvd25BY3Rpb25zW1BBR0VfVVBfS0VZXSA9IHRoaXMuX29uRGlyZWN0aW9uS2V5LCBfa2V5RG93bkFjdGlvbnNbRE9XTl9LRVldID0gdGhpcy5fb25EaXJlY3Rpb25LZXksIF9rZXlEb3duQWN0aW9uc1tQQUdFX0RPV05fS0VZXSA9IHRoaXMuX29uRGlyZWN0aW9uS2V5LCBfa2V5RG93bkFjdGlvbnNbREVMRVRFX0tFWV0gPSB0aGlzLl9vbkRlbGV0ZUtleSwgX2tleURvd25BY3Rpb25zW0JBQ0tfS0VZXSA9IHRoaXMuX29uRGVsZXRlS2V5LCBfa2V5RG93bkFjdGlvbnMpOyAvLyBJZiBrZXljb2RlIGhhcyBhIGZ1bmN0aW9uLCBydW4gaXRcblxuICAgIGlmIChrZXlEb3duQWN0aW9uc1trZXlDb2RlXSkge1xuICAgICAga2V5RG93bkFjdGlvbnNba2V5Q29kZV0oe1xuICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICBrZXlDb2RlOiBrZXlDb2RlLFxuICAgICAgICBtZXRhS2V5OiBtZXRhS2V5LFxuICAgICAgICBhY3RpdmVJdGVtczogYWN0aXZlSXRlbXMsXG4gICAgICAgIGhhc0ZvY3VzZWRJbnB1dDogaGFzRm9jdXNlZElucHV0LFxuICAgICAgICBoYXNBY3RpdmVEcm9wZG93bjogaGFzQWN0aXZlRHJvcGRvd24sXG4gICAgICAgIGhhc0l0ZW1zOiBoYXNJdGVtcyxcbiAgICAgICAgaGFzQ3RybERvd25LZXlQcmVzc2VkOiBoYXNDdHJsRG93bktleVByZXNzZWRcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX29uS2V5VXAgPSBmdW5jdGlvbiBfb25LZXlVcChfcmVmMikge1xuICAgIHZhciB0YXJnZXQgPSBfcmVmMi50YXJnZXQsXG4gICAgICAgIGtleUNvZGUgPSBfcmVmMi5rZXlDb2RlO1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWU7XG4gICAgdmFyIGFjdGl2ZUl0ZW1zID0gdGhpcy5fc3RvcmUuYWN0aXZlSXRlbXM7XG5cbiAgICB2YXIgY2FuQWRkSXRlbSA9IHRoaXMuX2NhbkFkZEl0ZW0oYWN0aXZlSXRlbXMsIHZhbHVlKTtcblxuICAgIHZhciBiYWNrS2V5ID0gS0VZX0NPREVTLkJBQ0tfS0VZLFxuICAgICAgICBkZWxldGVLZXkgPSBLRVlfQ09ERVMuREVMRVRFX0tFWTsgLy8gV2UgYXJlIHR5cGluZyBpbnRvIGEgdGV4dCBpbnB1dCBhbmQgaGF2ZSBhIHZhbHVlLCB3ZSB3YW50IHRvIHNob3cgYSBkcm9wZG93blxuICAgIC8vIG5vdGljZS4gT3RoZXJ3aXNlIGhpZGUgdGhlIGRyb3Bkb3duXG5cbiAgICBpZiAodGhpcy5faXNUZXh0RWxlbWVudCkge1xuICAgICAgdmFyIGNhblNob3dEcm9wZG93bk5vdGljZSA9IGNhbkFkZEl0ZW0ubm90aWNlICYmIHZhbHVlO1xuXG4gICAgICBpZiAoY2FuU2hvd0Ryb3Bkb3duTm90aWNlKSB7XG4gICAgICAgIHZhciBkcm9wZG93bkl0ZW0gPSB0aGlzLl9nZXRUZW1wbGF0ZSgnbm90aWNlJywgY2FuQWRkSXRlbS5ub3RpY2UpO1xuXG4gICAgICAgIHRoaXMuZHJvcGRvd24uZWxlbWVudC5pbm5lckhUTUwgPSBkcm9wZG93bkl0ZW0ub3V0ZXJIVE1MO1xuICAgICAgICB0aGlzLnNob3dEcm9wZG93bih0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZURyb3Bkb3duKHRydWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXNlckhhc1JlbW92ZWRWYWx1ZSA9IChrZXlDb2RlID09PSBiYWNrS2V5IHx8IGtleUNvZGUgPT09IGRlbGV0ZUtleSkgJiYgIXRhcmdldC52YWx1ZTtcbiAgICAgIHZhciBjYW5SZWFjdGl2YXRlQ2hvaWNlcyA9ICF0aGlzLl9pc1RleHRFbGVtZW50ICYmIHRoaXMuX2lzU2VhcmNoaW5nO1xuICAgICAgdmFyIGNhblNlYXJjaCA9IHRoaXMuX2NhblNlYXJjaCAmJiBjYW5BZGRJdGVtLnJlc3BvbnNlO1xuXG4gICAgICBpZiAodXNlckhhc1JlbW92ZWRWYWx1ZSAmJiBjYW5SZWFjdGl2YXRlQ2hvaWNlcykge1xuICAgICAgICB0aGlzLl9pc1NlYXJjaGluZyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKGNob2ljZXNfYWN0aXZhdGVDaG9pY2VzKHRydWUpKTtcbiAgICAgIH0gZWxzZSBpZiAoY2FuU2VhcmNoKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZVNlYXJjaCh0aGlzLmlucHV0LnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9jYW5TZWFyY2ggPSB0aGlzLmNvbmZpZy5zZWFyY2hFbmFibGVkO1xuICB9O1xuXG4gIF9wcm90by5fb25BS2V5ID0gZnVuY3Rpb24gX29uQUtleShfcmVmMykge1xuICAgIHZhciBoYXNJdGVtcyA9IF9yZWYzLmhhc0l0ZW1zLFxuICAgICAgICBoYXNDdHJsRG93bktleVByZXNzZWQgPSBfcmVmMy5oYXNDdHJsRG93bktleVByZXNzZWQ7XG5cbiAgICAvLyBJZiBDVFJMICsgQSBvciBDTUQgKyBBIGhhdmUgYmVlbiBwcmVzc2VkIGFuZCB0aGVyZSBhcmUgaXRlbXMgdG8gc2VsZWN0XG4gICAgaWYgKGhhc0N0cmxEb3duS2V5UHJlc3NlZCAmJiBoYXNJdGVtcykge1xuICAgICAgdGhpcy5fY2FuU2VhcmNoID0gZmFsc2U7XG4gICAgICB2YXIgc2hvdWxkSGlnaHRsaWdodEFsbCA9IHRoaXMuY29uZmlnLnJlbW92ZUl0ZW1zICYmICF0aGlzLmlucHV0LnZhbHVlICYmIHRoaXMuaW5wdXQuZWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgICAgaWYgKHNob3VsZEhpZ2h0bGlnaHRBbGwpIHtcbiAgICAgICAgdGhpcy5oaWdobGlnaHRBbGwoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9vbkVudGVyS2V5ID0gZnVuY3Rpb24gX29uRW50ZXJLZXkoX3JlZjQpIHtcbiAgICB2YXIgZXZlbnQgPSBfcmVmNC5ldmVudCxcbiAgICAgICAgdGFyZ2V0ID0gX3JlZjQudGFyZ2V0LFxuICAgICAgICBhY3RpdmVJdGVtcyA9IF9yZWY0LmFjdGl2ZUl0ZW1zLFxuICAgICAgICBoYXNBY3RpdmVEcm9wZG93biA9IF9yZWY0Lmhhc0FjdGl2ZURyb3Bkb3duO1xuICAgIHZhciBlbnRlcktleSA9IEtFWV9DT0RFUy5FTlRFUl9LRVk7XG4gICAgdmFyIHRhcmdldFdhc0J1dHRvbiA9IHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtYnV0dG9uJyk7XG5cbiAgICBpZiAodGhpcy5faXNUZXh0RWxlbWVudCAmJiB0YXJnZXQudmFsdWUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWU7XG5cbiAgICAgIHZhciBjYW5BZGRJdGVtID0gdGhpcy5fY2FuQWRkSXRlbShhY3RpdmVJdGVtcywgdmFsdWUpO1xuXG4gICAgICBpZiAoY2FuQWRkSXRlbS5yZXNwb25zZSkge1xuICAgICAgICB0aGlzLmhpZGVEcm9wZG93bih0cnVlKTtcblxuICAgICAgICB0aGlzLl9hZGRJdGVtKHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fdHJpZ2dlckNoYW5nZSh2YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5jbGVhcklucHV0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldFdhc0J1dHRvbikge1xuICAgICAgdGhpcy5faGFuZGxlQnV0dG9uQWN0aW9uKGFjdGl2ZUl0ZW1zLCB0YXJnZXQpO1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmIChoYXNBY3RpdmVEcm9wZG93bikge1xuICAgICAgdmFyIGhpZ2hsaWdodGVkQ2hvaWNlID0gdGhpcy5kcm9wZG93bi5nZXRDaGlsZChcIi5cIiArIHRoaXMuY29uZmlnLmNsYXNzTmFtZXMuaGlnaGxpZ2h0ZWRTdGF0ZSk7XG5cbiAgICAgIGlmIChoaWdobGlnaHRlZENob2ljZSkge1xuICAgICAgICAvLyBhZGQgZW50ZXIga2V5Q29kZSB2YWx1ZVxuICAgICAgICBpZiAoYWN0aXZlSXRlbXNbMF0pIHtcbiAgICAgICAgICBhY3RpdmVJdGVtc1swXS5rZXlDb2RlID0gZW50ZXJLZXk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2hhbmRsZUNob2ljZUFjdGlvbihhY3RpdmVJdGVtcywgaGlnaGxpZ2h0ZWRDaG9pY2UpO1xuICAgICAgfVxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5faXNTZWxlY3RPbmVFbGVtZW50KSB7XG4gICAgICB0aGlzLnNob3dEcm9wZG93bigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9vbkVzY2FwZUtleSA9IGZ1bmN0aW9uIF9vbkVzY2FwZUtleShfcmVmNSkge1xuICAgIHZhciBoYXNBY3RpdmVEcm9wZG93biA9IF9yZWY1Lmhhc0FjdGl2ZURyb3Bkb3duO1xuXG4gICAgaWYgKGhhc0FjdGl2ZURyb3Bkb3duKSB7XG4gICAgICB0aGlzLmhpZGVEcm9wZG93bih0cnVlKTtcbiAgICAgIHRoaXMuY29udGFpbmVyT3V0ZXIuZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9vbkRpcmVjdGlvbktleSA9IGZ1bmN0aW9uIF9vbkRpcmVjdGlvbktleShfcmVmNikge1xuICAgIHZhciBldmVudCA9IF9yZWY2LmV2ZW50LFxuICAgICAgICBoYXNBY3RpdmVEcm9wZG93biA9IF9yZWY2Lmhhc0FjdGl2ZURyb3Bkb3duLFxuICAgICAgICBrZXlDb2RlID0gX3JlZjYua2V5Q29kZSxcbiAgICAgICAgbWV0YUtleSA9IF9yZWY2Lm1ldGFLZXk7XG4gICAgdmFyIGRvd25LZXkgPSBLRVlfQ09ERVMuRE9XTl9LRVksXG4gICAgICAgIHBhZ2VVcEtleSA9IEtFWV9DT0RFUy5QQUdFX1VQX0tFWSxcbiAgICAgICAgcGFnZURvd25LZXkgPSBLRVlfQ09ERVMuUEFHRV9ET1dOX0tFWTsgLy8gSWYgdXAgb3IgZG93biBrZXkgaXMgcHJlc3NlZCwgdHJhdmVyc2UgdGhyb3VnaCBvcHRpb25zXG5cbiAgICBpZiAoaGFzQWN0aXZlRHJvcGRvd24gfHwgdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50KSB7XG4gICAgICB0aGlzLnNob3dEcm9wZG93bigpO1xuICAgICAgdGhpcy5fY2FuU2VhcmNoID0gZmFsc2U7XG4gICAgICB2YXIgZGlyZWN0aW9uSW50ID0ga2V5Q29kZSA9PT0gZG93bktleSB8fCBrZXlDb2RlID09PSBwYWdlRG93bktleSA/IDEgOiAtMTtcbiAgICAgIHZhciBza2lwS2V5ID0gbWV0YUtleSB8fCBrZXlDb2RlID09PSBwYWdlRG93bktleSB8fCBrZXlDb2RlID09PSBwYWdlVXBLZXk7XG4gICAgICB2YXIgc2VsZWN0YWJsZUNob2ljZUlkZW50aWZpZXIgPSAnW2RhdGEtY2hvaWNlLXNlbGVjdGFibGVdJztcbiAgICAgIHZhciBuZXh0RWw7XG5cbiAgICAgIGlmIChza2lwS2V5KSB7XG4gICAgICAgIGlmIChkaXJlY3Rpb25JbnQgPiAwKSB7XG4gICAgICAgICAgbmV4dEVsID0gdGhpcy5kcm9wZG93bi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0YWJsZUNob2ljZUlkZW50aWZpZXIgKyBcIjpsYXN0LW9mLXR5cGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dEVsID0gdGhpcy5kcm9wZG93bi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0YWJsZUNob2ljZUlkZW50aWZpZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY3VycmVudEVsID0gdGhpcy5kcm9wZG93bi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyB0aGlzLmNvbmZpZy5jbGFzc05hbWVzLmhpZ2hsaWdodGVkU3RhdGUpO1xuXG4gICAgICAgIGlmIChjdXJyZW50RWwpIHtcbiAgICAgICAgICBuZXh0RWwgPSBnZXRBZGphY2VudEVsKGN1cnJlbnRFbCwgc2VsZWN0YWJsZUNob2ljZUlkZW50aWZpZXIsIGRpcmVjdGlvbkludCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dEVsID0gdGhpcy5kcm9wZG93bi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0YWJsZUNob2ljZUlkZW50aWZpZXIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXh0RWwpIHtcbiAgICAgICAgLy8gV2UgcHJldmVudCBkZWZhdWx0IHRvIHN0b3AgdGhlIGN1cnNvciBtb3ZpbmdcbiAgICAgICAgLy8gd2hlbiBwcmVzc2luZyB0aGUgYXJyb3dcbiAgICAgICAgaWYgKCFpc1Njcm9sbGVkSW50b1ZpZXcobmV4dEVsLCB0aGlzLmNob2ljZUxpc3QuZWxlbWVudCwgZGlyZWN0aW9uSW50KSkge1xuICAgICAgICAgIHRoaXMuY2hvaWNlTGlzdC5zY3JvbGxUb0NoaWxkRWxlbWVudChuZXh0RWwsIGRpcmVjdGlvbkludCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9oaWdobGlnaHRDaG9pY2UobmV4dEVsKTtcbiAgICAgIH0gLy8gUHJldmVudCBkZWZhdWx0IHRvIG1haW50YWluIGN1cnNvciBwb3NpdGlvbiB3aGlsc3RcbiAgICAgIC8vIHRyYXZlcnNpbmcgZHJvcGRvd24gb3B0aW9uc1xuXG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fb25EZWxldGVLZXkgPSBmdW5jdGlvbiBfb25EZWxldGVLZXkoX3JlZjcpIHtcbiAgICB2YXIgZXZlbnQgPSBfcmVmNy5ldmVudCxcbiAgICAgICAgdGFyZ2V0ID0gX3JlZjcudGFyZ2V0LFxuICAgICAgICBoYXNGb2N1c2VkSW5wdXQgPSBfcmVmNy5oYXNGb2N1c2VkSW5wdXQsXG4gICAgICAgIGFjdGl2ZUl0ZW1zID0gX3JlZjcuYWN0aXZlSXRlbXM7XG5cbiAgICAvLyBJZiBiYWNrc3BhY2Ugb3IgZGVsZXRlIGtleSBpcyBwcmVzc2VkIGFuZCB0aGUgaW5wdXQgaGFzIG5vIHZhbHVlXG4gICAgaWYgKGhhc0ZvY3VzZWRJbnB1dCAmJiAhdGFyZ2V0LnZhbHVlICYmICF0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2hhbmRsZUJhY2tzcGFjZShhY3RpdmVJdGVtcyk7XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fb25Ub3VjaE1vdmUgPSBmdW5jdGlvbiBfb25Ub3VjaE1vdmUoKSB7XG4gICAgaWYgKHRoaXMuX3dhc1RhcCkge1xuICAgICAgdGhpcy5fd2FzVGFwID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fb25Ub3VjaEVuZCA9IGZ1bmN0aW9uIF9vblRvdWNoRW5kKGV2ZW50KSB7XG4gICAgdmFyIF9yZWY4ID0gZXZlbnQgfHwgZXZlbnQudG91Y2hlc1swXSxcbiAgICAgICAgdGFyZ2V0ID0gX3JlZjgudGFyZ2V0O1xuXG4gICAgdmFyIHRvdWNoV2FzV2l0aGluQ29udGFpbmVyID0gdGhpcy5fd2FzVGFwICYmIHRoaXMuY29udGFpbmVyT3V0ZXIuZWxlbWVudC5jb250YWlucyh0YXJnZXQpO1xuXG4gICAgaWYgKHRvdWNoV2FzV2l0aGluQ29udGFpbmVyKSB7XG4gICAgICB2YXIgY29udGFpbmVyV2FzRXhhY3RUYXJnZXQgPSB0YXJnZXQgPT09IHRoaXMuY29udGFpbmVyT3V0ZXIuZWxlbWVudCB8fCB0YXJnZXQgPT09IHRoaXMuY29udGFpbmVySW5uZXIuZWxlbWVudDtcblxuICAgICAgaWYgKGNvbnRhaW5lcldhc0V4YWN0VGFyZ2V0KSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1RleHRFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2lzU2VsZWN0TXVsdGlwbGVFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5zaG93RHJvcGRvd24oKTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBQcmV2ZW50cyBmb2N1cyBldmVudCBmaXJpbmdcblxuXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICB0aGlzLl93YXNUYXAgPSB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiBIYW5kbGVzIG1vdXNlZG93biBldmVudCBpbiBjYXB0dXJlIG1vZGUgZm9yIGNvbnRhaW5ldE91dGVyLmVsZW1lbnRcbiAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5fb25Nb3VzZURvd24gPSBmdW5jdGlvbiBfb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBJZiB3ZSBoYXZlIG91ciBtb3VzZSBkb3duIG9uIHRoZSBzY3JvbGxiYXIgYW5kIGFyZSBvbiBJRTExLi4uXG5cblxuICAgIGlmIChJU19JRTExICYmIHRoaXMuY2hvaWNlTGlzdC5lbGVtZW50LmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICAgIC8vIGNoZWNrIGlmIGNsaWNrIHdhcyBvbiBhIHNjcm9sbGJhciBhcmVhXG4gICAgICB2YXIgZmlyc3RDaG9pY2UgPVxuICAgICAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi9cbiAgICAgIHRoaXMuY2hvaWNlTGlzdC5lbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgdmFyIGlzT25TY3JvbGxiYXIgPSB0aGlzLl9kaXJlY3Rpb24gPT09ICdsdHInID8gZXZlbnQub2Zmc2V0WCA+PSBmaXJzdENob2ljZS5vZmZzZXRXaWR0aCA6IGV2ZW50Lm9mZnNldFggPCBmaXJzdENob2ljZS5vZmZzZXRMZWZ0O1xuICAgICAgdGhpcy5faXNTY3JvbGxpbmdPbkllID0gaXNPblNjcm9sbGJhcjtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0ID09PSB0aGlzLmlucHV0LmVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaXRlbSA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1idXR0b25dLFtkYXRhLWl0ZW1dLFtkYXRhLWNob2ljZV0nKTtcblxuICAgIGlmIChpdGVtIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIHZhciBoYXNTaGlmdEtleSA9IGV2ZW50LnNoaWZ0S2V5O1xuICAgICAgdmFyIGFjdGl2ZUl0ZW1zID0gdGhpcy5fc3RvcmUuYWN0aXZlSXRlbXM7XG4gICAgICB2YXIgZGF0YXNldCA9IGl0ZW0uZGF0YXNldDtcblxuICAgICAgaWYgKCdidXR0b24nIGluIGRhdGFzZXQpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlQnV0dG9uQWN0aW9uKGFjdGl2ZUl0ZW1zLCBpdGVtKTtcbiAgICAgIH0gZWxzZSBpZiAoJ2l0ZW0nIGluIGRhdGFzZXQpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlSXRlbUFjdGlvbihhY3RpdmVJdGVtcywgaXRlbSwgaGFzU2hpZnRLZXkpO1xuICAgICAgfSBlbHNlIGlmICgnY2hvaWNlJyBpbiBkYXRhc2V0KSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUNob2ljZUFjdGlvbihhY3RpdmVJdGVtcywgaXRlbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICAvKipcbiAgICogSGFuZGxlcyBtb3VzZW92ZXIgZXZlbnQgb3ZlciB0aGlzLmRyb3Bkb3duXG4gICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZlbnRcbiAgICovXG4gIDtcblxuICBfcHJvdG8uX29uTW91c2VPdmVyID0gZnVuY3Rpb24gX29uTW91c2VPdmVyKF9yZWY5KSB7XG4gICAgdmFyIHRhcmdldCA9IF9yZWY5LnRhcmdldDtcblxuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiAnY2hvaWNlJyBpbiB0YXJnZXQuZGF0YXNldCkge1xuICAgICAgdGhpcy5faGlnaGxpZ2h0Q2hvaWNlKHRhcmdldCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fb25DbGljayA9IGZ1bmN0aW9uIF9vbkNsaWNrKF9yZWYxMCkge1xuICAgIHZhciB0YXJnZXQgPSBfcmVmMTAudGFyZ2V0O1xuICAgIHZhciBjbGlja1dhc1dpdGhpbkNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyT3V0ZXIuZWxlbWVudC5jb250YWlucyh0YXJnZXQpO1xuXG4gICAgaWYgKGNsaWNrV2FzV2l0aGluQ29udGFpbmVyKSB7XG4gICAgICBpZiAoIXRoaXMuZHJvcGRvd24uaXNBY3RpdmUgJiYgIXRoaXMuY29udGFpbmVyT3V0ZXIuaXNEaXNhYmxlZCkge1xuICAgICAgICBpZiAodGhpcy5faXNUZXh0RWxlbWVudCkge1xuICAgICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSB0aGlzLmlucHV0LmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zaG93RHJvcGRvd24oKTtcbiAgICAgICAgICB0aGlzLmNvbnRhaW5lck91dGVyLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5faXNTZWxlY3RPbmVFbGVtZW50ICYmIHRhcmdldCAhPT0gdGhpcy5pbnB1dC5lbGVtZW50ICYmICF0aGlzLmRyb3Bkb3duLmVsZW1lbnQuY29udGFpbnModGFyZ2V0KSkge1xuICAgICAgICB0aGlzLmhpZGVEcm9wZG93bigpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaGFzSGlnaGxpZ2h0ZWRJdGVtcyA9IHRoaXMuX3N0b3JlLmhpZ2hsaWdodGVkQWN0aXZlSXRlbXMubGVuZ3RoID4gMDtcblxuICAgICAgaWYgKGhhc0hpZ2hsaWdodGVkSXRlbXMpIHtcbiAgICAgICAgdGhpcy51bmhpZ2hsaWdodEFsbCgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbnRhaW5lck91dGVyLnJlbW92ZUZvY3VzU3RhdGUoKTtcbiAgICAgIHRoaXMuaGlkZURyb3Bkb3duKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX29uRm9jdXMgPSBmdW5jdGlvbiBfb25Gb2N1cyhfcmVmMTEpIHtcbiAgICB2YXIgX3RoaXMxNyA9IHRoaXMsXG4gICAgICAgIF9mb2N1c0FjdGlvbnM7XG5cbiAgICB2YXIgdGFyZ2V0ID0gX3JlZjExLnRhcmdldDtcbiAgICB2YXIgZm9jdXNXYXNXaXRoaW5Db250YWluZXIgPSB0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQuY29udGFpbnModGFyZ2V0KTtcblxuICAgIGlmICghZm9jdXNXYXNXaXRoaW5Db250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZm9jdXNBY3Rpb25zID0gKF9mb2N1c0FjdGlvbnMgPSB7fSwgX2ZvY3VzQWN0aW9uc1tURVhUX1RZUEVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRhcmdldCA9PT0gX3RoaXMxNy5pbnB1dC5lbGVtZW50KSB7XG4gICAgICAgIF90aGlzMTcuY29udGFpbmVyT3V0ZXIuYWRkRm9jdXNTdGF0ZSgpO1xuICAgICAgfVxuICAgIH0sIF9mb2N1c0FjdGlvbnNbU0VMRUNUX09ORV9UWVBFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMTcuY29udGFpbmVyT3V0ZXIuYWRkRm9jdXNTdGF0ZSgpO1xuXG4gICAgICBpZiAodGFyZ2V0ID09PSBfdGhpczE3LmlucHV0LmVsZW1lbnQpIHtcbiAgICAgICAgX3RoaXMxNy5zaG93RHJvcGRvd24odHJ1ZSk7XG4gICAgICB9XG4gICAgfSwgX2ZvY3VzQWN0aW9uc1tTRUxFQ1RfTVVMVElQTEVfVFlQRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGFyZ2V0ID09PSBfdGhpczE3LmlucHV0LmVsZW1lbnQpIHtcbiAgICAgICAgX3RoaXMxNy5zaG93RHJvcGRvd24odHJ1ZSk7IC8vIElmIGVsZW1lbnQgaXMgYSBzZWxlY3QgYm94LCB0aGUgZm9jdXNlZCBlbGVtZW50IGlzIHRoZSBjb250YWluZXIgYW5kIHRoZSBkcm9wZG93blxuICAgICAgICAvLyBpc24ndCBhbHJlYWR5IG9wZW4sIGZvY3VzIGFuZCBzaG93IGRyb3Bkb3duXG5cblxuICAgICAgICBfdGhpczE3LmNvbnRhaW5lck91dGVyLmFkZEZvY3VzU3RhdGUoKTtcbiAgICAgIH1cbiAgICB9LCBfZm9jdXNBY3Rpb25zKTtcbiAgICBmb2N1c0FjdGlvbnNbdGhpcy5wYXNzZWRFbGVtZW50LmVsZW1lbnQudHlwZV0oKTtcbiAgfTtcblxuICBfcHJvdG8uX29uQmx1ciA9IGZ1bmN0aW9uIF9vbkJsdXIoX3JlZjEyKSB7XG4gICAgdmFyIF90aGlzMTggPSB0aGlzO1xuXG4gICAgdmFyIHRhcmdldCA9IF9yZWYxMi50YXJnZXQ7XG4gICAgdmFyIGJsdXJXYXNXaXRoaW5Db250YWluZXIgPSB0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQuY29udGFpbnModGFyZ2V0KTtcblxuICAgIGlmIChibHVyV2FzV2l0aGluQ29udGFpbmVyICYmICF0aGlzLl9pc1Njcm9sbGluZ09uSWUpIHtcbiAgICAgIHZhciBfYmx1ckFjdGlvbnM7XG5cbiAgICAgIHZhciBhY3RpdmVJdGVtcyA9IHRoaXMuX3N0b3JlLmFjdGl2ZUl0ZW1zO1xuICAgICAgdmFyIGhhc0hpZ2hsaWdodGVkSXRlbXMgPSBhY3RpdmVJdGVtcy5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtLmhpZ2hsaWdodGVkO1xuICAgICAgfSk7XG4gICAgICB2YXIgYmx1ckFjdGlvbnMgPSAoX2JsdXJBY3Rpb25zID0ge30sIF9ibHVyQWN0aW9uc1tURVhUX1RZUEVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGFyZ2V0ID09PSBfdGhpczE4LmlucHV0LmVsZW1lbnQpIHtcbiAgICAgICAgICBfdGhpczE4LmNvbnRhaW5lck91dGVyLnJlbW92ZUZvY3VzU3RhdGUoKTtcblxuICAgICAgICAgIGlmIChoYXNIaWdobGlnaHRlZEl0ZW1zKSB7XG4gICAgICAgICAgICBfdGhpczE4LnVuaGlnaGxpZ2h0QWxsKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXMxOC5oaWRlRHJvcGRvd24odHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sIF9ibHVyQWN0aW9uc1tTRUxFQ1RfT05FX1RZUEVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczE4LmNvbnRhaW5lck91dGVyLnJlbW92ZUZvY3VzU3RhdGUoKTtcblxuICAgICAgICBpZiAodGFyZ2V0ID09PSBfdGhpczE4LmlucHV0LmVsZW1lbnQgfHwgdGFyZ2V0ID09PSBfdGhpczE4LmNvbnRhaW5lck91dGVyLmVsZW1lbnQgJiYgIV90aGlzMTguX2NhblNlYXJjaCkge1xuICAgICAgICAgIF90aGlzMTguaGlkZURyb3Bkb3duKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9LCBfYmx1ckFjdGlvbnNbU0VMRUNUX01VTFRJUExFX1RZUEVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGFyZ2V0ID09PSBfdGhpczE4LmlucHV0LmVsZW1lbnQpIHtcbiAgICAgICAgICBfdGhpczE4LmNvbnRhaW5lck91dGVyLnJlbW92ZUZvY3VzU3RhdGUoKTtcblxuICAgICAgICAgIF90aGlzMTguaGlkZURyb3Bkb3duKHRydWUpO1xuXG4gICAgICAgICAgaWYgKGhhc0hpZ2hsaWdodGVkSXRlbXMpIHtcbiAgICAgICAgICAgIF90aGlzMTgudW5oaWdobGlnaHRBbGwoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIF9ibHVyQWN0aW9ucyk7XG4gICAgICBibHVyQWN0aW9uc1t0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC50eXBlXSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPbiBJRTExLCBjbGlja2luZyB0aGUgc2NvbGxiYXIgYmx1cnMgb3VyIGlucHV0IGFuZCB0aHVzXG4gICAgICAvLyBjbG9zZXMgdGhlIGRyb3Bkb3duLiBUbyBzdG9wIHRoaXMsIHdlIHJlZm9jdXMgb3VyIGlucHV0XG4gICAgICAvLyBpZiB3ZSBrbm93IHdlIGFyZSBvbiBJRSAqYW5kKiBhcmUgc2Nyb2xsaW5nLlxuICAgICAgdGhpcy5faXNTY3JvbGxpbmdPbkllID0gZmFsc2U7XG4gICAgICB0aGlzLmlucHV0LmVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9vbkZvcm1SZXNldCA9IGZ1bmN0aW9uIF9vbkZvcm1SZXNldCgpIHtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChyZXNldFRvKHRoaXMuX2luaXRpYWxTdGF0ZSkpO1xuICB9O1xuXG4gIF9wcm90by5faGlnaGxpZ2h0Q2hvaWNlID0gZnVuY3Rpb24gX2hpZ2hsaWdodENob2ljZShlbCkge1xuICAgIHZhciBfdGhpczE5ID0gdGhpcztcblxuICAgIGlmIChlbCA9PT0gdm9pZCAwKSB7XG4gICAgICBlbCA9IG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGNob2ljZXMgPSBBcnJheS5mcm9tKHRoaXMuZHJvcGRvd24uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jaG9pY2Utc2VsZWN0YWJsZV0nKSk7XG5cbiAgICBpZiAoIWNob2ljZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBhc3NlZEVsID0gZWw7XG4gICAgdmFyIGhpZ2hsaWdodGVkQ2hvaWNlcyA9IEFycmF5LmZyb20odGhpcy5kcm9wZG93bi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIgKyB0aGlzLmNvbmZpZy5jbGFzc05hbWVzLmhpZ2hsaWdodGVkU3RhdGUpKTsgLy8gUmVtb3ZlIGFueSBoaWdobGlnaHRlZCBjaG9pY2VzXG5cbiAgICBoaWdobGlnaHRlZENob2ljZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hvaWNlKSB7XG4gICAgICBjaG9pY2UuY2xhc3NMaXN0LnJlbW92ZShfdGhpczE5LmNvbmZpZy5jbGFzc05hbWVzLmhpZ2hsaWdodGVkU3RhdGUpO1xuICAgICAgY2hvaWNlLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICdmYWxzZScpO1xuICAgIH0pO1xuXG4gICAgaWYgKHBhc3NlZEVsKSB7XG4gICAgICB0aGlzLl9oaWdobGlnaHRQb3NpdGlvbiA9IGNob2ljZXMuaW5kZXhPZihwYXNzZWRFbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEhpZ2hsaWdodCBjaG9pY2UgYmFzZWQgb24gbGFzdCBrbm93biBoaWdobGlnaHQgbG9jYXRpb25cbiAgICAgIGlmIChjaG9pY2VzLmxlbmd0aCA+IHRoaXMuX2hpZ2hsaWdodFBvc2l0aW9uKSB7XG4gICAgICAgIC8vIElmIHdlIGhhdmUgYW4gb3B0aW9uIHRvIGhpZ2hsaWdodFxuICAgICAgICBwYXNzZWRFbCA9IGNob2ljZXNbdGhpcy5faGlnaGxpZ2h0UG9zaXRpb25dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT3RoZXJ3aXNlIGhpZ2hsaWdodCB0aGUgb3B0aW9uIGJlZm9yZVxuICAgICAgICBwYXNzZWRFbCA9IGNob2ljZXNbY2hvaWNlcy5sZW5ndGggLSAxXTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFwYXNzZWRFbCkge1xuICAgICAgICBwYXNzZWRFbCA9IGNob2ljZXNbMF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGFzc2VkRWwuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5jbGFzc05hbWVzLmhpZ2hsaWdodGVkU3RhdGUpO1xuICAgIHBhc3NlZEVsLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgdGhpcy5wYXNzZWRFbGVtZW50LnRyaWdnZXJFdmVudChFVkVOVFMuaGlnaGxpZ2h0Q2hvaWNlLCB7XG4gICAgICBlbDogcGFzc2VkRWxcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmRyb3Bkb3duLmlzQWN0aXZlKSB7XG4gICAgICAvLyBJRTExIGlnbm9yZXMgYXJpYS1sYWJlbCBhbmQgYmxvY2tzIHZpcnR1YWwga2V5Ym9hcmRcbiAgICAgIC8vIGlmIGFyaWEtYWN0aXZlZGVzY2VuZGFudCBpcyBzZXQgd2l0aG91dCBhIGRyb3Bkb3duXG4gICAgICB0aGlzLmlucHV0LnNldEFjdGl2ZURlc2NlbmRhbnQocGFzc2VkRWwuaWQpO1xuICAgICAgdGhpcy5jb250YWluZXJPdXRlci5zZXRBY3RpdmVEZXNjZW5kYW50KHBhc3NlZEVsLmlkKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9hZGRJdGVtID0gZnVuY3Rpb24gX2FkZEl0ZW0oX3JlZjEzKSB7XG4gICAgdmFyIHZhbHVlID0gX3JlZjEzLnZhbHVlLFxuICAgICAgICBfcmVmMTMkbGFiZWwgPSBfcmVmMTMubGFiZWwsXG4gICAgICAgIGxhYmVsID0gX3JlZjEzJGxhYmVsID09PSB2b2lkIDAgPyBudWxsIDogX3JlZjEzJGxhYmVsLFxuICAgICAgICBfcmVmMTMkY2hvaWNlSWQgPSBfcmVmMTMuY2hvaWNlSWQsXG4gICAgICAgIGNob2ljZUlkID0gX3JlZjEzJGNob2ljZUlkID09PSB2b2lkIDAgPyAtMSA6IF9yZWYxMyRjaG9pY2VJZCxcbiAgICAgICAgX3JlZjEzJGdyb3VwSWQgPSBfcmVmMTMuZ3JvdXBJZCxcbiAgICAgICAgZ3JvdXBJZCA9IF9yZWYxMyRncm91cElkID09PSB2b2lkIDAgPyAtMSA6IF9yZWYxMyRncm91cElkLFxuICAgICAgICBfcmVmMTMkY3VzdG9tUHJvcGVydGkgPSBfcmVmMTMuY3VzdG9tUHJvcGVydGllcyxcbiAgICAgICAgY3VzdG9tUHJvcGVydGllcyA9IF9yZWYxMyRjdXN0b21Qcm9wZXJ0aSA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYxMyRjdXN0b21Qcm9wZXJ0aSxcbiAgICAgICAgX3JlZjEzJHBsYWNlaG9sZGVyID0gX3JlZjEzLnBsYWNlaG9sZGVyLFxuICAgICAgICBwbGFjZWhvbGRlciA9IF9yZWYxMyRwbGFjZWhvbGRlciA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmMTMkcGxhY2Vob2xkZXIsXG4gICAgICAgIF9yZWYxMyRrZXlDb2RlID0gX3JlZjEzLmtleUNvZGUsXG4gICAgICAgIGtleUNvZGUgPSBfcmVmMTMka2V5Q29kZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYxMyRrZXlDb2RlO1xuICAgIHZhciBwYXNzZWRWYWx1ZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZS50cmltKCkgOiB2YWx1ZTtcbiAgICB2YXIgcGFzc2VkS2V5Q29kZSA9IGtleUNvZGU7XG4gICAgdmFyIHBhc3NlZEN1c3RvbVByb3BlcnRpZXMgPSBjdXN0b21Qcm9wZXJ0aWVzO1xuICAgIHZhciBpdGVtcyA9IHRoaXMuX3N0b3JlLml0ZW1zO1xuICAgIHZhciBwYXNzZWRMYWJlbCA9IGxhYmVsIHx8IHBhc3NlZFZhbHVlO1xuICAgIHZhciBwYXNzZWRPcHRpb25JZCA9IGNob2ljZUlkIHx8IC0xO1xuICAgIHZhciBncm91cCA9IGdyb3VwSWQgPj0gMCA/IHRoaXMuX3N0b3JlLmdldEdyb3VwQnlJZChncm91cElkKSA6IG51bGw7XG4gICAgdmFyIGlkID0gaXRlbXMgPyBpdGVtcy5sZW5ndGggKyAxIDogMTsgLy8gSWYgYSBwcmVwZW5kZWQgdmFsdWUgaGFzIGJlZW4gcGFzc2VkLCBwcmVwZW5kIGl0XG5cbiAgICBpZiAodGhpcy5jb25maWcucHJlcGVuZFZhbHVlKSB7XG4gICAgICBwYXNzZWRWYWx1ZSA9IHRoaXMuY29uZmlnLnByZXBlbmRWYWx1ZSArIHBhc3NlZFZhbHVlLnRvU3RyaW5nKCk7XG4gICAgfSAvLyBJZiBhbiBhcHBlbmRlZCB2YWx1ZSBoYXMgYmVlbiBwYXNzZWQsIGFwcGVuZCBpdFxuXG5cbiAgICBpZiAodGhpcy5jb25maWcuYXBwZW5kVmFsdWUpIHtcbiAgICAgIHBhc3NlZFZhbHVlICs9IHRoaXMuY29uZmlnLmFwcGVuZFZhbHVlLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goaXRlbXNfYWRkSXRlbSh7XG4gICAgICB2YWx1ZTogcGFzc2VkVmFsdWUsXG4gICAgICBsYWJlbDogcGFzc2VkTGFiZWwsXG4gICAgICBpZDogaWQsXG4gICAgICBjaG9pY2VJZDogcGFzc2VkT3B0aW9uSWQsXG4gICAgICBncm91cElkOiBncm91cElkLFxuICAgICAgY3VzdG9tUHJvcGVydGllczogY3VzdG9tUHJvcGVydGllcyxcbiAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICAgIGtleUNvZGU6IHBhc3NlZEtleUNvZGVcbiAgICB9KSk7XG5cbiAgICBpZiAodGhpcy5faXNTZWxlY3RPbmVFbGVtZW50KSB7XG4gICAgICB0aGlzLnJlbW92ZUFjdGl2ZUl0ZW1zKGlkKTtcbiAgICB9IC8vIFRyaWdnZXIgY2hhbmdlIGV2ZW50XG5cblxuICAgIHRoaXMucGFzc2VkRWxlbWVudC50cmlnZ2VyRXZlbnQoRVZFTlRTLmFkZEl0ZW0sIHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIHZhbHVlOiBwYXNzZWRWYWx1ZSxcbiAgICAgIGxhYmVsOiBwYXNzZWRMYWJlbCxcbiAgICAgIGN1c3RvbVByb3BlcnRpZXM6IHBhc3NlZEN1c3RvbVByb3BlcnRpZXMsXG4gICAgICBncm91cFZhbHVlOiBncm91cCAmJiBncm91cC52YWx1ZSA/IGdyb3VwLnZhbHVlIDogdW5kZWZpbmVkLFxuICAgICAga2V5Q29kZTogcGFzc2VkS2V5Q29kZVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5fcmVtb3ZlSXRlbSA9IGZ1bmN0aW9uIF9yZW1vdmVJdGVtKGl0ZW0pIHtcbiAgICBpZiAoIWl0ZW0gfHwgIWlzVHlwZSgnT2JqZWN0JywgaXRlbSkpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHZhciBpZCA9IGl0ZW0uaWQsXG4gICAgICAgIHZhbHVlID0gaXRlbS52YWx1ZSxcbiAgICAgICAgbGFiZWwgPSBpdGVtLmxhYmVsLFxuICAgICAgICBjaG9pY2VJZCA9IGl0ZW0uY2hvaWNlSWQsXG4gICAgICAgIGdyb3VwSWQgPSBpdGVtLmdyb3VwSWQ7XG4gICAgdmFyIGdyb3VwID0gZ3JvdXBJZCA+PSAwID8gdGhpcy5fc3RvcmUuZ2V0R3JvdXBCeUlkKGdyb3VwSWQpIDogbnVsbDtcblxuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKGl0ZW1zX3JlbW92ZUl0ZW0oaWQsIGNob2ljZUlkKSk7XG5cbiAgICBpZiAoZ3JvdXAgJiYgZ3JvdXAudmFsdWUpIHtcbiAgICAgIHRoaXMucGFzc2VkRWxlbWVudC50cmlnZ2VyRXZlbnQoRVZFTlRTLnJlbW92ZUl0ZW0sIHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgZ3JvdXBWYWx1ZTogZ3JvdXAudmFsdWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhc3NlZEVsZW1lbnQudHJpZ2dlckV2ZW50KEVWRU5UUy5yZW1vdmVJdGVtLCB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBsYWJlbDogbGFiZWxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5fYWRkQ2hvaWNlID0gZnVuY3Rpb24gX2FkZENob2ljZShfcmVmMTQpIHtcbiAgICB2YXIgdmFsdWUgPSBfcmVmMTQudmFsdWUsXG4gICAgICAgIF9yZWYxNCRsYWJlbCA9IF9yZWYxNC5sYWJlbCxcbiAgICAgICAgbGFiZWwgPSBfcmVmMTQkbGFiZWwgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmMTQkbGFiZWwsXG4gICAgICAgIF9yZWYxNCRpc1NlbGVjdGVkID0gX3JlZjE0LmlzU2VsZWN0ZWQsXG4gICAgICAgIGlzU2VsZWN0ZWQgPSBfcmVmMTQkaXNTZWxlY3RlZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmMTQkaXNTZWxlY3RlZCxcbiAgICAgICAgX3JlZjE0JGlzRGlzYWJsZWQgPSBfcmVmMTQuaXNEaXNhYmxlZCxcbiAgICAgICAgaXNEaXNhYmxlZCA9IF9yZWYxNCRpc0Rpc2FibGVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYxNCRpc0Rpc2FibGVkLFxuICAgICAgICBfcmVmMTQkZ3JvdXBJZCA9IF9yZWYxNC5ncm91cElkLFxuICAgICAgICBncm91cElkID0gX3JlZjE0JGdyb3VwSWQgPT09IHZvaWQgMCA/IC0xIDogX3JlZjE0JGdyb3VwSWQsXG4gICAgICAgIF9yZWYxNCRjdXN0b21Qcm9wZXJ0aSA9IF9yZWYxNC5jdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgICBjdXN0b21Qcm9wZXJ0aWVzID0gX3JlZjE0JGN1c3RvbVByb3BlcnRpID09PSB2b2lkIDAgPyBudWxsIDogX3JlZjE0JGN1c3RvbVByb3BlcnRpLFxuICAgICAgICBfcmVmMTQkcGxhY2Vob2xkZXIgPSBfcmVmMTQucGxhY2Vob2xkZXIsXG4gICAgICAgIHBsYWNlaG9sZGVyID0gX3JlZjE0JHBsYWNlaG9sZGVyID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYxNCRwbGFjZWhvbGRlcixcbiAgICAgICAgX3JlZjE0JGtleUNvZGUgPSBfcmVmMTQua2V5Q29kZSxcbiAgICAgICAga2V5Q29kZSA9IF9yZWYxNCRrZXlDb2RlID09PSB2b2lkIDAgPyBudWxsIDogX3JlZjE0JGtleUNvZGU7XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gR2VuZXJhdGUgdW5pcXVlIGlkXG5cblxuICAgIHZhciBjaG9pY2VzID0gdGhpcy5fc3RvcmUuY2hvaWNlcztcbiAgICB2YXIgY2hvaWNlTGFiZWwgPSBsYWJlbCB8fCB2YWx1ZTtcbiAgICB2YXIgY2hvaWNlSWQgPSBjaG9pY2VzID8gY2hvaWNlcy5sZW5ndGggKyAxIDogMTtcbiAgICB2YXIgY2hvaWNlRWxlbWVudElkID0gdGhpcy5fYmFzZUlkICsgXCItXCIgKyB0aGlzLl9pZE5hbWVzLml0ZW1DaG9pY2UgKyBcIi1cIiArIGNob2ljZUlkO1xuXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goY2hvaWNlc19hZGRDaG9pY2Uoe1xuICAgICAgaWQ6IGNob2ljZUlkLFxuICAgICAgZ3JvdXBJZDogZ3JvdXBJZCxcbiAgICAgIGVsZW1lbnRJZDogY2hvaWNlRWxlbWVudElkLFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgbGFiZWw6IGNob2ljZUxhYmVsLFxuICAgICAgZGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICBjdXN0b21Qcm9wZXJ0aWVzOiBjdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgICAga2V5Q29kZToga2V5Q29kZVxuICAgIH0pKTtcblxuICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICB0aGlzLl9hZGRJdGVtKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBsYWJlbDogY2hvaWNlTGFiZWwsXG4gICAgICAgIGNob2ljZUlkOiBjaG9pY2VJZCxcbiAgICAgICAgY3VzdG9tUHJvcGVydGllczogY3VzdG9tUHJvcGVydGllcyxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgICAgICBrZXlDb2RlOiBrZXlDb2RlXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9hZGRHcm91cCA9IGZ1bmN0aW9uIF9hZGRHcm91cChfcmVmMTUpIHtcbiAgICB2YXIgX3RoaXMyMCA9IHRoaXM7XG5cbiAgICB2YXIgZ3JvdXAgPSBfcmVmMTUuZ3JvdXAsXG4gICAgICAgIGlkID0gX3JlZjE1LmlkLFxuICAgICAgICBfcmVmMTUkdmFsdWVLZXkgPSBfcmVmMTUudmFsdWVLZXksXG4gICAgICAgIHZhbHVlS2V5ID0gX3JlZjE1JHZhbHVlS2V5ID09PSB2b2lkIDAgPyAndmFsdWUnIDogX3JlZjE1JHZhbHVlS2V5LFxuICAgICAgICBfcmVmMTUkbGFiZWxLZXkgPSBfcmVmMTUubGFiZWxLZXksXG4gICAgICAgIGxhYmVsS2V5ID0gX3JlZjE1JGxhYmVsS2V5ID09PSB2b2lkIDAgPyAnbGFiZWwnIDogX3JlZjE1JGxhYmVsS2V5O1xuICAgIHZhciBncm91cENob2ljZXMgPSBpc1R5cGUoJ09iamVjdCcsIGdyb3VwKSA/IGdyb3VwLmNob2ljZXMgOiBBcnJheS5mcm9tKGdyb3VwLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdPUFRJT04nKSk7XG4gICAgdmFyIGdyb3VwSWQgPSBpZCB8fCBNYXRoLmZsb29yKG5ldyBEYXRlKCkudmFsdWVPZigpICogTWF0aC5yYW5kb20oKSk7XG4gICAgdmFyIGlzRGlzYWJsZWQgPSBncm91cC5kaXNhYmxlZCA/IGdyb3VwLmRpc2FibGVkIDogZmFsc2U7XG5cbiAgICBpZiAoZ3JvdXBDaG9pY2VzKSB7XG4gICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChncm91cHNfYWRkR3JvdXAoe1xuICAgICAgICB2YWx1ZTogZ3JvdXAubGFiZWwsXG4gICAgICAgIGlkOiBncm91cElkLFxuICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIGRpc2FibGVkOiBpc0Rpc2FibGVkXG4gICAgICB9KSk7XG5cbiAgICAgIHZhciBhZGRHcm91cENob2ljZXMgPSBmdW5jdGlvbiBhZGRHcm91cENob2ljZXMoY2hvaWNlKSB7XG4gICAgICAgIHZhciBpc09wdERpc2FibGVkID0gY2hvaWNlLmRpc2FibGVkIHx8IGNob2ljZS5wYXJlbnROb2RlICYmIGNob2ljZS5wYXJlbnROb2RlLmRpc2FibGVkO1xuXG4gICAgICAgIF90aGlzMjAuX2FkZENob2ljZSh7XG4gICAgICAgICAgdmFsdWU6IGNob2ljZVt2YWx1ZUtleV0sXG4gICAgICAgICAgbGFiZWw6IGlzVHlwZSgnT2JqZWN0JywgY2hvaWNlKSA/IGNob2ljZVtsYWJlbEtleV0gOiBjaG9pY2UuaW5uZXJIVE1MLFxuICAgICAgICAgIGlzU2VsZWN0ZWQ6IGNob2ljZS5zZWxlY3RlZCxcbiAgICAgICAgICBpc0Rpc2FibGVkOiBpc09wdERpc2FibGVkLFxuICAgICAgICAgIGdyb3VwSWQ6IGdyb3VwSWQsXG4gICAgICAgICAgY3VzdG9tUHJvcGVydGllczogY2hvaWNlLmN1c3RvbVByb3BlcnRpZXMsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IGNob2ljZS5wbGFjZWhvbGRlclxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGdyb3VwQ2hvaWNlcy5mb3JFYWNoKGFkZEdyb3VwQ2hvaWNlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKGdyb3Vwc19hZGRHcm91cCh7XG4gICAgICAgIHZhbHVlOiBncm91cC5sYWJlbCxcbiAgICAgICAgaWQ6IGdyb3VwLmlkLFxuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICBkaXNhYmxlZDogZ3JvdXAuZGlzYWJsZWRcbiAgICAgIH0pKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9nZXRUZW1wbGF0ZSA9IGZ1bmN0aW9uIF9nZXRUZW1wbGF0ZSh0ZW1wbGF0ZSkge1xuICAgIHZhciBfdGhpcyRfdGVtcGxhdGVzJHRlbXA7XG5cbiAgICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgY2xhc3NOYW1lcyA9IHRoaXMuY29uZmlnLmNsYXNzTmFtZXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gKF90aGlzJF90ZW1wbGF0ZXMkdGVtcCA9IHRoaXMuX3RlbXBsYXRlc1t0ZW1wbGF0ZV0pLmNhbGwuYXBwbHkoX3RoaXMkX3RlbXBsYXRlcyR0ZW1wLCBbdGhpcywgY2xhc3NOYW1lc10uY29uY2F0KGFyZ3MpKTtcbiAgfTtcblxuICBfcHJvdG8uX2NyZWF0ZVRlbXBsYXRlcyA9IGZ1bmN0aW9uIF9jcmVhdGVUZW1wbGF0ZXMoKSB7XG4gICAgdmFyIGNhbGxiYWNrT25DcmVhdGVUZW1wbGF0ZXMgPSB0aGlzLmNvbmZpZy5jYWxsYmFja09uQ3JlYXRlVGVtcGxhdGVzO1xuICAgIHZhciB1c2VyVGVtcGxhdGVzID0ge307XG5cbiAgICBpZiAoY2FsbGJhY2tPbkNyZWF0ZVRlbXBsYXRlcyAmJiB0eXBlb2YgY2FsbGJhY2tPbkNyZWF0ZVRlbXBsYXRlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdXNlclRlbXBsYXRlcyA9IGNhbGxiYWNrT25DcmVhdGVUZW1wbGF0ZXMuY2FsbCh0aGlzLCBzdHJUb0VsKTtcbiAgICB9XG5cbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSBjanNfZGVmYXVsdCgpKFRFTVBMQVRFUywgdXNlclRlbXBsYXRlcyk7XG4gIH07XG5cbiAgX3Byb3RvLl9jcmVhdGVFbGVtZW50cyA9IGZ1bmN0aW9uIF9jcmVhdGVFbGVtZW50cygpIHtcbiAgICB0aGlzLmNvbnRhaW5lck91dGVyID0gbmV3IGNvbnRhaW5lcl9Db250YWluZXIoe1xuICAgICAgZWxlbWVudDogdGhpcy5fZ2V0VGVtcGxhdGUoJ2NvbnRhaW5lck91dGVyJywgdGhpcy5fZGlyZWN0aW9uLCB0aGlzLl9pc1NlbGVjdEVsZW1lbnQsIHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCwgdGhpcy5jb25maWcuc2VhcmNoRW5hYmxlZCwgdGhpcy5wYXNzZWRFbGVtZW50LmVsZW1lbnQudHlwZSksXG4gICAgICBjbGFzc05hbWVzOiB0aGlzLmNvbmZpZy5jbGFzc05hbWVzLFxuICAgICAgdHlwZTogdGhpcy5wYXNzZWRFbGVtZW50LmVsZW1lbnQudHlwZSxcbiAgICAgIHBvc2l0aW9uOiB0aGlzLmNvbmZpZy5wb3NpdGlvblxuICAgIH0pO1xuICAgIHRoaXMuY29udGFpbmVySW5uZXIgPSBuZXcgY29udGFpbmVyX0NvbnRhaW5lcih7XG4gICAgICBlbGVtZW50OiB0aGlzLl9nZXRUZW1wbGF0ZSgnY29udGFpbmVySW5uZXInKSxcbiAgICAgIGNsYXNzTmFtZXM6IHRoaXMuY29uZmlnLmNsYXNzTmFtZXMsXG4gICAgICB0eXBlOiB0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC50eXBlLFxuICAgICAgcG9zaXRpb246IHRoaXMuY29uZmlnLnBvc2l0aW9uXG4gICAgfSk7XG4gICAgdGhpcy5pbnB1dCA9IG5ldyBpbnB1dF9JbnB1dCh7XG4gICAgICBlbGVtZW50OiB0aGlzLl9nZXRUZW1wbGF0ZSgnaW5wdXQnLCB0aGlzLl9wbGFjZWhvbGRlclZhbHVlKSxcbiAgICAgIGNsYXNzTmFtZXM6IHRoaXMuY29uZmlnLmNsYXNzTmFtZXMsXG4gICAgICB0eXBlOiB0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC50eXBlLFxuICAgICAgcHJldmVudFBhc3RlOiAhdGhpcy5jb25maWcucGFzdGVcbiAgICB9KTtcbiAgICB0aGlzLmNob2ljZUxpc3QgPSBuZXcgbGlzdF9MaXN0KHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuX2dldFRlbXBsYXRlKCdjaG9pY2VMaXN0JywgdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50KVxuICAgIH0pO1xuICAgIHRoaXMuaXRlbUxpc3QgPSBuZXcgbGlzdF9MaXN0KHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuX2dldFRlbXBsYXRlKCdpdGVtTGlzdCcsIHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudClcbiAgICB9KTtcbiAgICB0aGlzLmRyb3Bkb3duID0gbmV3IERyb3Bkb3duKHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuX2dldFRlbXBsYXRlKCdkcm9wZG93bicpLFxuICAgICAgY2xhc3NOYW1lczogdGhpcy5jb25maWcuY2xhc3NOYW1lcyxcbiAgICAgIHR5cGU6IHRoaXMucGFzc2VkRWxlbWVudC5lbGVtZW50LnR5cGVcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uX2NyZWF0ZVN0cnVjdHVyZSA9IGZ1bmN0aW9uIF9jcmVhdGVTdHJ1Y3R1cmUoKSB7XG4gICAgLy8gSGlkZSBvcmlnaW5hbCBlbGVtZW50XG4gICAgdGhpcy5wYXNzZWRFbGVtZW50LmNvbmNlYWwoKTsgLy8gV3JhcCBpbnB1dCBpbiBjb250YWluZXIgcHJlc2VydmluZyBET00gb3JkZXJpbmdcblxuICAgIHRoaXMuY29udGFpbmVySW5uZXIud3JhcCh0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudCk7IC8vIFdyYXBwZXIgaW5uZXIgY29udGFpbmVyIHdpdGggb3V0ZXIgY29udGFpbmVyXG5cbiAgICB0aGlzLmNvbnRhaW5lck91dGVyLndyYXAodGhpcy5jb250YWluZXJJbm5lci5lbGVtZW50KTtcblxuICAgIGlmICh0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaW5wdXQucGxhY2Vob2xkZXIgPSB0aGlzLmNvbmZpZy5zZWFyY2hQbGFjZWhvbGRlclZhbHVlIHx8ICcnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fcGxhY2Vob2xkZXJWYWx1ZSkge1xuICAgICAgdGhpcy5pbnB1dC5wbGFjZWhvbGRlciA9IHRoaXMuX3BsYWNlaG9sZGVyVmFsdWU7XG4gICAgICB0aGlzLmlucHV0LnNldFdpZHRoKCk7XG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVySW5uZXIuZWxlbWVudCk7XG4gICAgdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZHJvcGRvd24uZWxlbWVudCk7XG4gICAgdGhpcy5jb250YWluZXJJbm5lci5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuaXRlbUxpc3QuZWxlbWVudCk7XG5cbiAgICBpZiAoIXRoaXMuX2lzVGV4dEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZHJvcGRvd24uZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNob2ljZUxpc3QuZWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuY29udGFpbmVySW5uZXIuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0LmVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb25maWcuc2VhcmNoRW5hYmxlZCkge1xuICAgICAgdGhpcy5kcm9wZG93bi5lbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLmlucHV0LmVsZW1lbnQsIHRoaXMuZHJvcGRvd24uZWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNTZWxlY3RFbGVtZW50KSB7XG4gICAgICB0aGlzLl9oaWdobGlnaHRQb3NpdGlvbiA9IDA7XG4gICAgICB0aGlzLl9pc1NlYXJjaGluZyA9IGZhbHNlO1xuXG4gICAgICB0aGlzLl9zdGFydExvYWRpbmcoKTtcblxuICAgICAgaWYgKHRoaXMuX3ByZXNldEdyb3Vwcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fYWRkUHJlZGVmaW5lZEdyb3Vwcyh0aGlzLl9wcmVzZXRHcm91cHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fYWRkUHJlZGVmaW5lZENob2ljZXModGhpcy5fcHJlc2V0Q2hvaWNlcyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3N0b3BMb2FkaW5nKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzVGV4dEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2FkZFByZWRlZmluZWRJdGVtcyh0aGlzLl9wcmVzZXRJdGVtcyk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fYWRkUHJlZGVmaW5lZEdyb3VwcyA9IGZ1bmN0aW9uIF9hZGRQcmVkZWZpbmVkR3JvdXBzKGdyb3Vwcykge1xuICAgIHZhciBfdGhpczIxID0gdGhpcztcblxuICAgIC8vIElmIHdlIGhhdmUgYSBwbGFjZWhvbGRlciBvcHRpb25cbiAgICB2YXIgcGxhY2Vob2xkZXJDaG9pY2UgPSB0aGlzLnBhc3NlZEVsZW1lbnQucGxhY2Vob2xkZXJPcHRpb247XG5cbiAgICBpZiAocGxhY2Vob2xkZXJDaG9pY2UgJiYgcGxhY2Vob2xkZXJDaG9pY2UucGFyZW50Tm9kZS50YWdOYW1lID09PSAnU0VMRUNUJykge1xuICAgICAgdGhpcy5fYWRkQ2hvaWNlKHtcbiAgICAgICAgdmFsdWU6IHBsYWNlaG9sZGVyQ2hvaWNlLnZhbHVlLFxuICAgICAgICBsYWJlbDogcGxhY2Vob2xkZXJDaG9pY2UuaW5uZXJIVE1MLFxuICAgICAgICBpc1NlbGVjdGVkOiBwbGFjZWhvbGRlckNob2ljZS5zZWxlY3RlZCxcbiAgICAgICAgaXNEaXNhYmxlZDogcGxhY2Vob2xkZXJDaG9pY2UuZGlzYWJsZWQsXG4gICAgICAgIHBsYWNlaG9sZGVyOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBncm91cHMuZm9yRWFjaChmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgIHJldHVybiBfdGhpczIxLl9hZGRHcm91cCh7XG4gICAgICAgIGdyb3VwOiBncm91cCxcbiAgICAgICAgaWQ6IGdyb3VwLmlkIHx8IG51bGxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5fYWRkUHJlZGVmaW5lZENob2ljZXMgPSBmdW5jdGlvbiBfYWRkUHJlZGVmaW5lZENob2ljZXMoY2hvaWNlcykge1xuICAgIHZhciBfdGhpczIyID0gdGhpcztcblxuICAgIC8vIElmIHNvcnRpbmcgaXMgZW5hYmxlZCBvciB0aGUgdXNlciBpcyBzZWFyY2hpbmcsIGZpbHRlciBjaG9pY2VzXG4gICAgaWYgKHRoaXMuY29uZmlnLnNob3VsZFNvcnQpIHtcbiAgICAgIGNob2ljZXMuc29ydCh0aGlzLmNvbmZpZy5zb3J0ZXIpO1xuICAgIH1cblxuICAgIHZhciBoYXNTZWxlY3RlZENob2ljZSA9IGNob2ljZXMuc29tZShmdW5jdGlvbiAoY2hvaWNlKSB7XG4gICAgICByZXR1cm4gY2hvaWNlLnNlbGVjdGVkO1xuICAgIH0pO1xuICAgIHZhciBmaXJzdEVuYWJsZWRDaG9pY2VJbmRleCA9IGNob2ljZXMuZmluZEluZGV4KGZ1bmN0aW9uIChjaG9pY2UpIHtcbiAgICAgIHJldHVybiBjaG9pY2UuZGlzYWJsZWQgPT09IHVuZGVmaW5lZCB8fCAhY2hvaWNlLmRpc2FibGVkO1xuICAgIH0pO1xuICAgIGNob2ljZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hvaWNlLCBpbmRleCkge1xuICAgICAgdmFyIHZhbHVlID0gY2hvaWNlLnZhbHVlLFxuICAgICAgICAgIGxhYmVsID0gY2hvaWNlLmxhYmVsLFxuICAgICAgICAgIGN1c3RvbVByb3BlcnRpZXMgPSBjaG9pY2UuY3VzdG9tUHJvcGVydGllcyxcbiAgICAgICAgICBwbGFjZWhvbGRlciA9IGNob2ljZS5wbGFjZWhvbGRlcjtcblxuICAgICAgaWYgKF90aGlzMjIuX2lzU2VsZWN0RWxlbWVudCkge1xuICAgICAgICAvLyBJZiB0aGUgY2hvaWNlIGlzIGFjdHVhbGx5IGEgZ3JvdXBcbiAgICAgICAgaWYgKGNob2ljZS5jaG9pY2VzKSB7XG4gICAgICAgICAgX3RoaXMyMi5fYWRkR3JvdXAoe1xuICAgICAgICAgICAgZ3JvdXA6IGNob2ljZSxcbiAgICAgICAgICAgIGlkOiBjaG9pY2UuaWQgfHwgbnVsbFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIElmIHRoZXJlIGlzIGEgc2VsZWN0ZWQgY2hvaWNlIGFscmVhZHkgb3IgdGhlIGNob2ljZSBpcyBub3QgdGhlIGZpcnN0IGluXG4gICAgICAgICAgICogdGhlIGFycmF5LCBhZGQgZWFjaCBjaG9pY2Ugbm9ybWFsbHkuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBPdGhlcndpc2Ugd2UgcHJlLXNlbGVjdCB0aGUgZmlyc3QgZW5hYmxlZCBjaG9pY2UgaW4gdGhlIGFycmF5IChcInNlbGVjdC1vbmVcIiBvbmx5KVxuICAgICAgICAgICAqL1xuICAgICAgICAgIHZhciBzaG91bGRQcmVzZWxlY3QgPSBfdGhpczIyLl9pc1NlbGVjdE9uZUVsZW1lbnQgJiYgIWhhc1NlbGVjdGVkQ2hvaWNlICYmIGluZGV4ID09PSBmaXJzdEVuYWJsZWRDaG9pY2VJbmRleDtcbiAgICAgICAgICB2YXIgaXNTZWxlY3RlZCA9IHNob3VsZFByZXNlbGVjdCA/IHRydWUgOiBjaG9pY2Uuc2VsZWN0ZWQ7XG4gICAgICAgICAgdmFyIGlzRGlzYWJsZWQgPSBjaG9pY2UuZGlzYWJsZWQ7XG5cbiAgICAgICAgICBfdGhpczIyLl9hZGRDaG9pY2Uoe1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICAgICAgaXNTZWxlY3RlZDogaXNTZWxlY3RlZCxcbiAgICAgICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgICAgICBjdXN0b21Qcm9wZXJ0aWVzOiBjdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzMjIuX2FkZENob2ljZSh7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgICBpc1NlbGVjdGVkOiBjaG9pY2Uuc2VsZWN0ZWQsXG4gICAgICAgICAgaXNEaXNhYmxlZDogY2hvaWNlLmRpc2FibGVkLFxuICAgICAgICAgIGN1c3RvbVByb3BlcnRpZXM6IGN1c3RvbVByb3BlcnRpZXMsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge0l0ZW1bXX0gaXRlbXNcbiAgICovXG4gIDtcblxuICBfcHJvdG8uX2FkZFByZWRlZmluZWRJdGVtcyA9IGZ1bmN0aW9uIF9hZGRQcmVkZWZpbmVkSXRlbXMoaXRlbXMpIHtcbiAgICB2YXIgX3RoaXMyMyA9IHRoaXM7XG5cbiAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmIGl0ZW0udmFsdWUpIHtcbiAgICAgICAgX3RoaXMyMy5fYWRkSXRlbSh7XG4gICAgICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXG4gICAgICAgICAgbGFiZWw6IGl0ZW0ubGFiZWwsXG4gICAgICAgICAgY2hvaWNlSWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgY3VzdG9tUHJvcGVydGllczogaXRlbS5jdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBpdGVtLnBsYWNlaG9sZGVyXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIF90aGlzMjMuX2FkZEl0ZW0oe1xuICAgICAgICAgIHZhbHVlOiBpdGVtXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5fc2V0Q2hvaWNlT3JJdGVtID0gZnVuY3Rpb24gX3NldENob2ljZU9ySXRlbShpdGVtKSB7XG4gICAgdmFyIF90aGlzMjQgPSB0aGlzO1xuXG4gICAgdmFyIGl0ZW1UeXBlID0gZ2V0VHlwZShpdGVtKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhciBoYW5kbGVUeXBlID0ge1xuICAgICAgb2JqZWN0OiBmdW5jdGlvbiBvYmplY3QoKSB7XG4gICAgICAgIGlmICghaXRlbS52YWx1ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBJZiB3ZSBhcmUgZGVhbGluZyB3aXRoIGEgc2VsZWN0IGlucHV0LCB3ZSBuZWVkIHRvIGNyZWF0ZSBhbiBvcHRpb24gZmlyc3RcbiAgICAgICAgLy8gdGhhdCBpcyB0aGVuIHNlbGVjdGVkLiBGb3IgdGV4dCBpbnB1dHMgd2UgY2FuIGp1c3QgYWRkIGl0ZW1zIG5vcm1hbGx5LlxuXG5cbiAgICAgICAgaWYgKCFfdGhpczI0Ll9pc1RleHRFbGVtZW50KSB7XG4gICAgICAgICAgX3RoaXMyNC5fYWRkQ2hvaWNlKHtcbiAgICAgICAgICAgIHZhbHVlOiBpdGVtLnZhbHVlLFxuICAgICAgICAgICAgbGFiZWw6IGl0ZW0ubGFiZWwsXG4gICAgICAgICAgICBpc1NlbGVjdGVkOiB0cnVlLFxuICAgICAgICAgICAgaXNEaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBjdXN0b21Qcm9wZXJ0aWVzOiBpdGVtLmN1c3RvbVByb3BlcnRpZXMsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogaXRlbS5wbGFjZWhvbGRlclxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzMjQuX2FkZEl0ZW0oe1xuICAgICAgICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXG4gICAgICAgICAgICBsYWJlbDogaXRlbS5sYWJlbCxcbiAgICAgICAgICAgIGNob2ljZUlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgY3VzdG9tUHJvcGVydGllczogaXRlbS5jdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGl0ZW0ucGxhY2Vob2xkZXJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHN0cmluZzogZnVuY3Rpb24gc3RyaW5nKCkge1xuICAgICAgICBpZiAoIV90aGlzMjQuX2lzVGV4dEVsZW1lbnQpIHtcbiAgICAgICAgICBfdGhpczI0Ll9hZGRDaG9pY2Uoe1xuICAgICAgICAgICAgdmFsdWU6IGl0ZW0sXG4gICAgICAgICAgICBsYWJlbDogaXRlbSxcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IHRydWUsXG4gICAgICAgICAgICBpc0Rpc2FibGVkOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzMjQuX2FkZEl0ZW0oe1xuICAgICAgICAgICAgdmFsdWU6IGl0ZW1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgaGFuZGxlVHlwZVtpdGVtVHlwZV0oKTtcbiAgfTtcblxuICBfcHJvdG8uX2ZpbmRBbmRTZWxlY3RDaG9pY2VCeVZhbHVlID0gZnVuY3Rpb24gX2ZpbmRBbmRTZWxlY3RDaG9pY2VCeVZhbHVlKHZhbCkge1xuICAgIHZhciBfdGhpczI1ID0gdGhpcztcblxuICAgIHZhciBjaG9pY2VzID0gdGhpcy5fc3RvcmUuY2hvaWNlczsgLy8gQ2hlY2sgJ3ZhbHVlJyBwcm9wZXJ0eSBleGlzdHMgYW5kIHRoZSBjaG9pY2UgaXNuJ3QgYWxyZWFkeSBzZWxlY3RlZFxuXG4gICAgdmFyIGZvdW5kQ2hvaWNlID0gY2hvaWNlcy5maW5kKGZ1bmN0aW9uIChjaG9pY2UpIHtcbiAgICAgIHJldHVybiBfdGhpczI1LmNvbmZpZy52YWx1ZUNvbXBhcmVyKGNob2ljZS52YWx1ZSwgdmFsKTtcbiAgICB9KTtcblxuICAgIGlmIChmb3VuZENob2ljZSAmJiAhZm91bmRDaG9pY2Uuc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuX2FkZEl0ZW0oe1xuICAgICAgICB2YWx1ZTogZm91bmRDaG9pY2UudmFsdWUsXG4gICAgICAgIGxhYmVsOiBmb3VuZENob2ljZS5sYWJlbCxcbiAgICAgICAgY2hvaWNlSWQ6IGZvdW5kQ2hvaWNlLmlkLFxuICAgICAgICBncm91cElkOiBmb3VuZENob2ljZS5ncm91cElkLFxuICAgICAgICBjdXN0b21Qcm9wZXJ0aWVzOiBmb3VuZENob2ljZS5jdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgICBwbGFjZWhvbGRlcjogZm91bmRDaG9pY2UucGxhY2Vob2xkZXIsXG4gICAgICAgIGtleUNvZGU6IGZvdW5kQ2hvaWNlLmtleUNvZGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX2dlbmVyYXRlUGxhY2Vob2xkZXJWYWx1ZSA9IGZ1bmN0aW9uIF9nZW5lcmF0ZVBsYWNlaG9sZGVyVmFsdWUoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2VsZWN0RWxlbWVudCkge1xuICAgICAgdmFyIHBsYWNlaG9sZGVyT3B0aW9uID0gdGhpcy5wYXNzZWRFbGVtZW50LnBsYWNlaG9sZGVyT3B0aW9uO1xuICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyT3B0aW9uID8gcGxhY2Vob2xkZXJPcHRpb24udGV4dCA6IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBfdGhpcyRjb25maWc0ID0gdGhpcy5jb25maWcsXG4gICAgICAgIHBsYWNlaG9sZGVyID0gX3RoaXMkY29uZmlnNC5wbGFjZWhvbGRlcixcbiAgICAgICAgcGxhY2Vob2xkZXJWYWx1ZSA9IF90aGlzJGNvbmZpZzQucGxhY2Vob2xkZXJWYWx1ZTtcbiAgICB2YXIgZGF0YXNldCA9IHRoaXMucGFzc2VkRWxlbWVudC5lbGVtZW50LmRhdGFzZXQ7XG5cbiAgICBpZiAocGxhY2Vob2xkZXIpIHtcbiAgICAgIGlmIChwbGFjZWhvbGRlclZhbHVlKSB7XG4gICAgICAgIHJldHVybiBwbGFjZWhvbGRlclZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YXNldC5wbGFjZWhvbGRlcikge1xuICAgICAgICByZXR1cm4gZGF0YXNldC5wbGFjZWhvbGRlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIENob2ljZXM7XG59KCk7XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHNjcmlwdHNfY2hvaWNlcyA9IF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKGNob2ljZXNfQ2hvaWNlcyk7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKVtcImRlZmF1bHRcIl07XG59KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9wb3B1cC5jc3MnO1xuaW1wb3J0ICdjaG9pY2VzLmpzL3B1YmxpYy9hc3NldHMvc3R5bGVzL2Nob2ljZXMuY3NzJztcbmltcG9ydCBDaG9pY2VzIGZyb20gJ2Nob2ljZXMuanMnO1xuXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBjdXJyZW5jeUZyb20gPSAndXNkJ1xuICB2YXIgY3VycmVuY3lUbyA9ICdpZHInXG5cbiAgdmFyIGxpc3RDb3VudHJ5ID0gW1xuICAgIFwiRVVSXCIsXG4gICAgXCJVU0RcIixcbiAgICBcIkdCUFwiLFxuICAgIFwiSU5SXCIsXG4gICAgXCJDQURcIixcbiAgICBcIkFVRFwiLFxuICAgIFwiQ0hGXCIsXG4gICAgXCJNWE5cIixcbiAgICBcIkZKRFwiLFxuICAgIFwiU0NSXCIsXG4gICAgXCJCQkRcIixcbiAgICBcIkdUUVwiLFxuICAgIFwiQ0xQXCIsXG4gICAgXCJITkxcIixcbiAgICBcIlVHWFwiLFxuICAgIFwiWkFSXCIsXG4gICAgXCJUTkRcIixcbiAgICBcIkJTRFwiLFxuICAgIFwiU0xMXCIsXG4gICAgXCJHTURcIixcbiAgICBcIlRXRFwiLFxuICAgIFwiUlNEXCIsXG4gICAgXCJET1BcIixcbiAgICBcIktNRlwiLFxuICAgIFwiTVlSXCIsXG4gICAgXCJGS1BcIixcbiAgICBcIlhPRlwiLFxuICAgIFwiR0VMXCIsXG4gICAgXCJVWVVcIixcbiAgICBcIk1BRFwiLFxuICAgIFwiQ1ZFXCIsXG4gICAgXCJUT1BcIixcbiAgICBcIkFaTlwiLFxuICAgIFwiT01SXCIsXG4gICAgXCJQR0tcIixcbiAgICBcIktFU1wiLFxuICAgIFwiU0VLXCIsXG4gICAgXCJCVE5cIixcbiAgICBcIlVBSFwiLFxuICAgIFwiR05GXCIsXG4gICAgXCJNWk5cIixcbiAgICBcIlNWQ1wiLFxuICAgIFwiQVJTXCIsXG4gICAgXCJRQVJcIixcbiAgICBcIkNOWVwiLFxuICAgIFwiVEhCXCIsXG4gICAgXCJVWlNcIixcbiAgICBcIlhQRlwiLFxuICAgIFwiTVJVXCIsXG4gICAgXCJCRFRcIixcbiAgICBcIkJNRFwiLFxuICAgIFwiS1dEXCIsXG4gICAgXCJQSFBcIixcbiAgICBcIlJVQlwiLFxuICAgIFwiUFlHXCIsXG4gICAgXCJJU0tcIixcbiAgICBcIkpNRFwiLFxuICAgIFwiQ09QXCIsXG4gICAgXCJNS0RcIixcbiAgICBcIkRaRFwiLFxuICAgIFwiUEFCXCIsXG4gICAgXCJHR1BcIixcbiAgICBcIlNHRFwiLFxuICAgIFwiRVRCXCIsXG4gICAgXCJKRVBcIixcbiAgICBcIktHU1wiLFxuICAgIFwiVlVWXCIsXG4gICAgXCJMQUtcIixcbiAgICBcIkJORFwiLFxuICAgIFwiWEFGXCIsXG4gICAgXCJMUkRcIixcbiAgICBcIkhSS1wiLFxuICAgIFwiQUxMXCIsXG4gICAgXCJESkZcIixcbiAgICBcIlpNV1wiLFxuICAgIFwiVFpTXCIsXG4gICAgXCJWTkRcIixcbiAgICBcIklMU1wiLFxuICAgIFwiR0hTXCIsXG4gICAgXCJHWURcIixcbiAgICBcIkJPQlwiLFxuICAgIFwiS0hSXCIsXG4gICAgXCJNRExcIixcbiAgICBcIklEUlwiLFxuICAgIFwiS1lEXCIsXG4gICAgXCJBTURcIixcbiAgICBcIkJXUFwiLFxuICAgIFwiU0hQXCIsXG4gICAgXCJUUllcIixcbiAgICBcIkxCUFwiLFxuICAgIFwiVEpTXCIsXG4gICAgXCJKT0RcIixcbiAgICBcIkFFRFwiLFxuICAgIFwiSEtEXCIsXG4gICAgXCJSV0ZcIixcbiAgICBcIkxTTFwiLFxuICAgIFwiREtLXCIsXG4gICAgXCJCR05cIixcbiAgICBcIk1NS1wiLFxuICAgIFwiTVVSXCIsXG4gICAgXCJOT0tcIixcbiAgICBcIklNUFwiLFxuICAgIFwiR0lQXCIsXG4gICAgXCJST05cIixcbiAgICBcIkxLUlwiLFxuICAgIFwiTkdOXCIsXG4gICAgXCJDUkNcIixcbiAgICBcIkNaS1wiLFxuICAgIFwiUEtSXCIsXG4gICAgXCJYQ0RcIixcbiAgICBcIkFOR1wiLFxuICAgIFwiSFRHXCIsXG4gICAgXCJCSERcIixcbiAgICBcIktaVFwiLFxuICAgIFwiU1JEXCIsXG4gICAgXCJTWkxcIixcbiAgICBcIlNBUlwiLFxuICAgIFwiVFREXCIsXG4gICAgXCJNVlJcIixcbiAgICBcIkFXR1wiLFxuICAgIFwiS1JXXCIsXG4gICAgXCJOUFJcIixcbiAgICBcIkpQWVwiLFxuICAgIFwiTU5UXCIsXG4gICAgXCJBT0FcIixcbiAgICBcIlBMTlwiLFxuICAgIFwiU0JEXCIsXG4gICAgXCJCWU5cIixcbiAgICBcIkhVRlwiLFxuICAgIFwiTVdLXCIsXG4gICAgXCJNR0FcIixcbiAgICBcIkJaRFwiLFxuICAgIFwiQkFNXCIsXG4gICAgXCJFR1BcIixcbiAgICBcIk1PUFwiLFxuICAgIFwiTkFEXCIsXG4gICAgXCJOSU9cIixcbiAgICBcIlBFTlwiLFxuICAgIFwiTlpEXCIsXG4gICAgXCJXU1RcIixcbiAgICBcIlRNVFwiLFxuICAgIFwiQlJMXCJcbiAgXVxuXG4gIGZ1bmN0aW9uIHNldERyb3BEb3duICgpIHtcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgbGlzdENvdW50cnkpIHtcbiAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIG9wdGlvbi52YWx1ZSA9IGVsZW1lbnQudG9Mb3dlckNhc2UoKVxuICAgICAgb3B0aW9uLmlubmVySFRNTCA9IGVsZW1lbnRcblxuICAgICAgbGV0IGNsb25lT3B0aW9uID0gb3B0aW9uLmNsb25lTm9kZSh0cnVlKVxuXG4gICAgICBnZXRDdXJyZW5jeUZyb20oKS5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgICBnZXRDdXJyZW5jeVRvKCkuYXBwZW5kQ2hpbGQoY2xvbmVPcHRpb24pXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc2V0VmFsdWVEcm9wRG93biAoKSB7XG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbmN5KClcblxuICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmN1cnJlbmN5KSB7XG4gICAgICBpZiAocmVzdWx0LmN1cnJlbmN5LmN1cnJlbmN5X2Zyb20pIHtcbiAgICAgICAgY3VycmVuY3lGcm9tID0gcmVzdWx0LmN1cnJlbmN5LmN1cnJlbmN5X2Zyb21cbiAgICAgICAgZ2V0Q3VycmVuY3lGcm9tKCkudmFsdWUgPSBjdXJyZW5jeUZyb21cbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3VsdC5jdXJyZW5jeS5jdXJyZW5jeV90bykge1xuICAgICAgICBjdXJyZW5jeVRvID0gcmVzdWx0LmN1cnJlbmN5LmN1cnJlbmN5X3RvXG4gICAgICAgIGdldEN1cnJlbmN5VG8oKS52YWx1ZSA9IGN1cnJlbmN5VG9cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVuY3lGcm9tID0gJ3VzZCdcbiAgICAgIGdldEN1cnJlbmN5RnJvbSgpLnZhbHVlID0gJ3VzZCdcblxuICAgICAgY3VycmVuY3lUbyA9ICdpZHInXG4gICAgICBnZXRDdXJyZW5jeVRvKCkudmFsdWUgPSAnaWRyJ1xuICAgIH1cblxuICAgIHNldENob2ljZUxpYigpXG4gIH1cblxuICBmdW5jdGlvbiBnZXRDdXJyZW5jeUZyb20oKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW5jeV9mcm9tX3RmJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbmN5VG8oKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW5jeV90b190ZicpXG4gIH1cblxuICBmdW5jdGlvbiBzZXRDaG9pY2VMaWIgKCkge1xuICAgIG5ldyBDaG9pY2VzKGdldEN1cnJlbmN5RnJvbSgpLCB7XG4gICAgICBzZWFyY2hSZXN1bHRMaW1pdDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgIHJlbmRlckNob2ljZUxpbWl0OiAxXG4gICAgfSlcblxuICAgIGdldEN1cnJlbmN5RnJvbSgpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2hvaWNlJyxcbiAgICAgIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGN1cnJlbmN5RnJvbSA9IGV2ZW50LmRldGFpbC5jaG9pY2UudmFsdWVcbiAgICAgIH0sXG4gICAgICBmYWxzZSxcbiAgICApO1xuXG4gICAgbmV3IENob2ljZXMoZ2V0Q3VycmVuY3lUbygpLCB7XG4gICAgICBzZWFyY2hSZXN1bHRMaW1pdDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgIHJlbmRlckNob2ljZUxpbWl0OiAxXG4gICAgfSlcblxuICAgIGdldEN1cnJlbmN5VG8oKS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2Nob2ljZScsXG4gICAgICBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBjdXJyZW5jeVRvID0gZXZlbnQuZGV0YWlsLmNob2ljZS52YWx1ZVxuICAgICAgfSxcbiAgICAgIGZhbHNlLFxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDdXJyZW5jeSAoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCdjdXJyZW5jeScsIGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBzZXRTdG9yYWdlICgpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoe1xuICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgY3VycmVuY3lfZnJvbTogZ2V0Q3VycmVuY3lGcm9tKCkudmFsdWUsXG4gICAgICAgIGN1cnJlbmN5X3RvOiBnZXRDdXJyZW5jeVRvKCkudmFsdWUsXG4gICAgICB9XG4gICAgfSwgc2VuZE1lc3NhZ2VUb0JhY2tncm91bmQoKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbmRNZXNzYWdlVG9CYWNrZ3JvdW5kICgpIHtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7dHlwZTogXCJVUERBVEVfQ1VSUkVOQ1lcIn0sIGZ1bmN0aW9uKF9yZXNwb25zZSkge30pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VXJsKCkge1xuICAgIHJldHVybiBgaHR0cHM6Ly90cmFuc2Zlcndpc2UuY29tL2diL2N1cnJlbmN5LWNvbnZlcnRlci8ke2N1cnJlbmN5RnJvbX0tdG8tJHtjdXJyZW5jeVRvfS1yYXRlYFxuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgIGlmIChnZXRDdXJyZW5jeUZyb20oKSAmJiBnZXRDdXJyZW5jeVRvKCkpIHtcbiAgICAgIHNldERyb3BEb3duKClcbiAgICAgIHNldFZhbHVlRHJvcERvd24oKVxuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwbHknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXRTdG9yYWdlKClcbiAgICAgIH0pO1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2stbGluaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKGdldFVybCgpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==