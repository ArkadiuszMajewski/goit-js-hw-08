!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",a=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,m=Math.max,v=Math.min,g=function(){return s.Date.now()};function b(e,t,n){var a,r,i,u,f,l,c=0,s=!1,d=!1,b=!0;if("function"!=typeof e)throw new TypeError(o);function S(t){var n=a,o=r;return a=r=void 0,c=t,u=e.apply(o,n)}function O(e){return c=e,f=setTimeout(N,t),s?S(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=i}function N(){var e=g();if(j(e))return w(e);f=setTimeout(N,function(e){var n=t-(e-l);return d?v(n,i-(e-c)):n}(e))}function w(e){return f=void 0,b&&a?S(e):(a=r=void 0,u)}function h(){var e=g(),n=j(e);if(a=arguments,r=this,l=e,n){if(void 0===f)return O(l);if(d)return f=setTimeout(N,t),S(l)}return void 0===f&&(f=setTimeout(N,t)),u}return t=y(t)||0,p(n)&&(s=!!n.leading,i=(d="maxWait"in n)?m(y(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,a=l=r=f=void 0},h.flush=function(){return void 0===f?u:w(g())},h}function p(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(p(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=p(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var l=i.test(e);return l||u.test(e)?f(e.slice(2),l?2:8):r.test(e)?NaN:+e}var S=document.querySelector(".feedback-form"),O=document.getElementsByName("email")[0],j=document.getElementsByName("message")[0];S.addEventListener("input",(function(e){var t={email:O.value,message:j.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))})),window.addEventListener("load",(function(e){var t=JSON.parse(localStorage.getItem("feedback-form-state"));null!==t&&(O.value=t.email,j.value=t.message)})),S.addEventListener("submit",(function(e){e.preventDefault(),null!==localStorage.getItem("feedback-form-state")&&(console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),console.log("Email = ".concat(JSON.parse(localStorage.getItem("feedback-form-state")).email)),console.log("Message = ".concat(JSON.parse(localStorage.getItem("feedback-form-state")).message))),O.value=null,j.value=null,localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.fa5ce7b6.js.map