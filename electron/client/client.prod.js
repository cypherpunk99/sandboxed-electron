!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./electron/client/index.js")}({"./electron/client/actions/counter.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.increment=function(){return{type:r}},t.decrement=function(){return{type:o}};var r=t.INCREMENT_COUNTER="INCREMENT_COUNTER",o=t.DECREMENT_COUNTER="DECREMENT_COUNTER"},"./electron/client/components/Counter/Counter.css":function(e,t){e.exports={backButton:"Counter__backButton__3GiJ0",counter:"Counter__counter__1Cfc3",btnGroup:"Counter__btnGroup__2npKO",btn:"Counter__btn__AWfkV"}},"./electron/client/components/Counter/Counter.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n("react"),u=a(o),c=a(n("./electron/client/components/Counter/Counter.css"));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.increment,n=e.decrement,r=e.counter;return u.default.createElement("div",null,u.default.createElement("div",{className:"counter "+c.default.counter,"data-tid":"counter"},r),u.default.createElement("div",{className:c.default.btnGroup},u.default.createElement("button",{className:c.default.btn,onClick:t,"data-tclass":"btn"},u.default.createElement("i",{className:"fa fa-plus"})),u.default.createElement("button",{className:c.default.btn,onClick:n,"data-tclass":"btn"},u.default.createElement("i",{className:"fa fa-minus"}))))}}]),t}();t.default=l},"./electron/client/containers/CounterPage.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("redux"),o=n("react-redux"),u=a(n("./electron/client/components/Counter/Counter.js")),c=a(n("./electron/client/actions/counter.js"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=(0,o.connect)(function(e){return{counter:e.counter}},function(e){return(0,r.bindActionCreators)(c.default,e)})(u.default)},"./electron/client/containers/Root.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n("react"),u=l(o),c=n("react-redux"),a=l(n("./electron/client/containers/CounterPage.js"));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){return u.default.createElement(c.Provider,{store:this.props.store},u.default.createElement(a.default,null))}}]),t}();t.default=i},"./electron/client/index.js":function(e,t,n){"use strict";var r=i(n("react")),o=n("react-dom"),u=n("react-hot-loader"),c=n("electron-redux"),a=i(n("./electron/client/containers/Root.js")),l=i(n("./electron/shared/store/configureStore.js"));function i(e){return e&&e.__esModule?e:{default:e}}var f=(0,c.getInitialStateRenderer)(),s=(0,l.default)(f,"renderer");(0,o.render)(r.default.createElement(u.AppContainer,null,r.default.createElement(a.default,{store:s})),document.getElementById("root"))},"./electron/client/reducers/counter.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{counter:0};switch(arguments[1].type){case r.INCREMENT_COUNTER:return e+1;case r.DECREMENT_COUNTER:return e-1;default:return e}};var r=n("./electron/client/actions/counter.js")},"./electron/client/reducers/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("redux"),u=n("./electron/client/reducers/counter.js"),c=(r=u)&&r.__esModule?r:{default:r};var a=(0,o.combineReducers)({counter:c.default});t.default=a},"./electron/shared/store/configureStore.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("redux"),o=l(n("redux-thunk")),u=n("redux-logger"),c=n("electron-redux"),a=l(n("./electron/client/reducers/index.js"));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"main",n=[];n.push(o.default);var l=(0,u.createLogger)({level:"info",collapsed:!0});n.push(l),"renderer"===t&&n.push(c.forwardToMain),"main"===t&&n.push(c.triggerAlias,c.forwardToRenderer);var i=[r.applyMiddleware.apply(void 0,n)],f=r.compose.apply(void 0,i),s=(0,r.createStore)(a.default,e,f);return"main"===t?(0,c.replayActionMain)(s):(0,c.replayActionRenderer)(s),s}},"electron-redux":function(e,t){e.exports=electron-redux},react:function(e,t){e.exports=react},"react-dom":function(e,t){e.exports=react-dom},"react-hot-loader":function(e,t){e.exports=react-hot-loader},"react-redux":function(e,t){e.exports=react-redux},redux:function(e,t){e.exports=redux},"redux-logger":function(e,t){e.exports=redux-logger},"redux-thunk":function(e,t){e.exports=redux-thunk}});
//# sourceMappingURL=client.prod.js.map