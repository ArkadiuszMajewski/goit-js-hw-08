var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,r=parseInt,i="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,f=i||l||Function("return this")(),u=Object.prototype.toString,c=Math.max,s=Math.min,m=function(){return f.Date.now()};function d(e,t,n){var o,a,r,i,l,f,u=0,d=!1,b=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=a;return o=a=void 0,u=t,i=e.apply(r,n)}function S(e){return u=e,l=setTimeout(N,t),d?y(e):i}function O(e){var n=e-f;return void 0===f||n>=t||n<0||b&&e-u>=r}function N(){var e=m();if(O(e))return j(e);l=setTimeout(N,function(e){var n=t-(e-f);return b?s(n,r-(e-u)):n}(e))}function j(e){return l=void 0,p&&o?y(e):(o=a=void 0,i)}function w(){var e=m(),n=O(e);if(o=arguments,a=this,f=e,n){if(void 0===l)return S(f);if(b)return l=setTimeout(N,t),y(f)}return void 0===l&&(l=setTimeout(N,t)),i}return t=v(t)||0,g(n)&&(d=!!n.leading,r=(b="maxWait"in n)?c(v(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==l&&clearTimeout(l),u=0,o=f=a=l=void 0},w.flush=function(){return void 0===l?i:j(m())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(g(e)){var i="function"==typeof e.valueOf?e.valueOf():e;e=g(i)?i+"":i}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var l=o.test(e);return l||a.test(e)?r(e.slice(2),l?2:8):n.test(e)?NaN:+e}const b=document.querySelector(".feedback-form");let p=document.getElementsByName("email")[0],y=document.getElementsByName("message")[0];b.addEventListener("input",(e=>{const t={email:p.value,message:y.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))})),window.addEventListener("load",(e=>{const t=JSON.parse(localStorage.getItem("feedback-form-state"));null!==t&&(p.value=t.email,y.value=t.message)})),b.addEventListener("submit",(e=>{e.preventDefault(),null!==localStorage.getItem("feedback-form-state")&&(console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),console.log(`Email = ${JSON.parse(localStorage.getItem("feedback-form-state")).email}`),console.log(`Message = ${JSON.parse(localStorage.getItem("feedback-form-state")).message}`)),p.value=null,y.value=null,localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.6e7c1278.js.map