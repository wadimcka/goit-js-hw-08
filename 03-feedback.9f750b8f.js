!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={};function n(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var o="Expected a function",i=0/0,r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,y=function(){return d.Date.now()};function p(e){var t=void 0===e?"undefined":n(e);return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if((void 0===(t=e)?"undefined":n(t))=="symbol"||t&&"object"==typeof t&&"[object Symbol]"==v.call(t))return i;if(p(e)){var t,o="function"==typeof e.valueOf?e.valueOf():e;e=p(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var c=f.test(e);return c||u.test(e)?l(e.slice(2),c?2:8):a.test(e)?i:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw TypeError(o);return p(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),function(e,t,n){var i,r,a,f,u,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw TypeError(o);function h(t){var n=i,o=r;return i=r=void 0,c=t,f=e.apply(o,n)}function j(e){var n=e-l,o=e-c;return void 0===l||n>=t||n<0||d&&o>=a}function O(){var e,n,o,i=y();if(j(i))return S(i);u=setTimeout(O,(e=i-l,n=i-c,o=t-e,d?g(o,a-n):o))}function S(e){return(u=void 0,v&&i)?h(e):(i=r=void 0,f)}function T(){var e,n=y(),o=j(n);if(i=arguments,r=this,l=n,o){if(void 0===u)return c=e=l,u=setTimeout(O,t),s?h(e):f;if(d)return u=setTimeout(O,t),h(l)}return void 0===u&&(u=setTimeout(O,t)),f}return t=b(t)||0,p(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(b(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=l=r=u=void 0},T.flush=function(){return void 0===u?f:S(y())},T}(e,t,{leading:i,maxWait:t,trailing:r})};var h=document.querySelector(".feedback-form"),j="feedback-form-state";h.addEventListener("input",t(function(e){O[e.target.name]=e.target.value;try{localStorage.setItem(j,JSON.stringify(O))}catch(e){console.log(e.name),console.log(e.message)}},500)),h.addEventListener("submit",function(e){if(e.preventDefault(),""===h.email.value||""===h.message.value)return alert("Fill in the required fields");console.log(O),localStorage.removeItem(j),e.currentTarget.reset(),O={}});var O={};console.dir(h),function(){var e=localStorage.getItem(j);try{var t=JSON.parse(e);new FormData(h).forEach(function(e,n){t.hasOwnProperty(n)&&(h.elements[n].value=t[n],O[n]=t[n],console.dir(O))})}catch(e){console.log(e.name),console.log(e.message)}}()}();
//# sourceMappingURL=03-feedback.9f750b8f.js.map
