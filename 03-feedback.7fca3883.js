var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",i=0/0,o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,m=function(){return s.Date.now()};function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return i;if(p(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=p(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var l=a.test(e);return l||f.test(e)?u(e.slice(2),l?2:8):r.test(e)?i:+e}t=function(e,t,i){var o=!0,r=!0;if("function"!=typeof e)throw TypeError(n);return p(i)&&(o="leading"in i?!!i.leading:o,r="trailing"in i?!!i.trailing:r),function(e,t,i){var o,r,a,f,u,l,c=0,s=!1,d=!1,b=!0;if("function"!=typeof e)throw TypeError(n);function h(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function j(e){var n=e-l,i=e-c;return void 0===l||n>=t||n<0||d&&i>=a}function O(){var e,n,i,o=m();if(j(o))return T(o);u=setTimeout(O,(e=o-l,n=o-c,i=t-e,d?g(i,a-n):i))}function T(e){return(u=void 0,b&&o)?h(e):(o=r=void 0,f)}function w(){var e,n=m(),i=j(n);if(o=arguments,r=this,l=n,i){if(void 0===u)return c=e=l,u=setTimeout(O,t),s?h(e):f;if(d)return u=setTimeout(O,t),h(l)}return void 0===u&&(u=setTimeout(O,t)),f}return t=y(t)||0,p(i)&&(s=!!i.leading,a=(d="maxWait"in i)?v(y(i.maxWait)||0,t):a,b="trailing"in i?!!i.trailing:b),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=l=r=u=void 0},w.flush=function(){return void 0===u?f:T(m())},w}(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form"),h="feedback-form-state";b.addEventListener("input",t(function(e){j[e.target.name]=e.target.value,localStorage.setItem(h,JSON.stringify(j))},500)),b.addEventListener("submit",function(e){if(e.preventDefault(),""===b.email.value||""===b.message.value)return alert("Fill in the required fields");localStorage.removeItem(h),e.currentTarget.reset()});const j={};!function(){let e=localStorage.getItem(h);try{let t=JSON.parse(e),n=new FormData(b);n.forEach((e,n)=>{t.hasOwnProperty(n)&&(b.elements[n].value=t[n])})}catch(e){console.log(e.name),console.log(e.message)}}();
//# sourceMappingURL=03-feedback.7fca3883.js.map