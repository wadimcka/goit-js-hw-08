var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n="Expected a function",i=0/0,o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,m=function(){return s.Date.now()};function p(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if("symbol"==typeof(e=t)||e&&"object"==typeof e&&"[object Symbol]"==d.call(e))return i;if(p(t)){var e,n="function"==typeof t.valueOf?t.valueOf():t;t=p(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var l=f.test(t);return l||a.test(t)?u(t.slice(2),l?2:8):r.test(t)?i:+t}e=function(t,e,i){var o=!0,r=!0;if("function"!=typeof t)throw TypeError(n);return p(i)&&(o="leading"in i?!!i.leading:o,r="trailing"in i?!!i.trailing:r),function(t,e,i){var o,r,f,a,u,l,c=0,s=!1,d=!1,b=!0;if("function"!=typeof t)throw TypeError(n);function h(e){var n=o,i=r;return o=r=void 0,c=e,a=t.apply(i,n)}function j(t){var n=t-l,i=t-c;return void 0===l||n>=e||n<0||d&&i>=f}function T(){var t,n,i,o=m();if(j(o))return O(o);u=setTimeout(T,(t=o-l,n=o-c,i=e-t,d?g(i,f-n):i))}function O(t){return(u=void 0,b&&o)?h(t):(o=r=void 0,a)}function w(){var t,n=m(),i=j(n);if(o=arguments,r=this,l=n,i){if(void 0===u)return c=t=l,u=setTimeout(T,e),s?h(t):a;if(d)return u=setTimeout(T,e),h(l)}return void 0===u&&(u=setTimeout(T,e)),a}return e=y(e)||0,p(i)&&(s=!!i.leading,f=(d="maxWait"in i)?v(y(i.maxWait)||0,e):f,b="trailing"in i?!!i.trailing:b),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=l=r=u=void 0},w.flush=function(){return void 0===u?a:O(m())},w}(t,e,{leading:o,maxWait:e,trailing:r})};const b=document.querySelector(".js-form");let h="feedback-form-state";b.addEventListener("input",e(function(t){j[t.target.name]=t.target.value.trim(),function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(t){console.log(t.message)}}(h,j)},500)),b.addEventListener("submit",function(t){t.preventDefault(),j&&(console.log("formValue",j),localStorage.removeItem(h),t.currentTarget.reset(),j={}),alert("fill the form")});let j={};
//# sourceMappingURL=03-feedback.0c4781d4.js.map
