webpackJsonp([35783957827783],{507:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={};n.pauseWheelEvent=!1,n._config={},n.config=function(e){var t=["right","left","up","down"],a=!0,i=!1,o=void 0;try{for(var l,r=t[Symbol.iterator]();!(a=(l=r.next()).done);a=!0){var u=l.value;e.hasOwnProperty(u)&&(n._config[u]=e[u])}}catch(e){i=!0,o=e}finally{try{!a&&r.return&&r.return()}finally{if(i)throw o}}},n.events={onWheel:function(e){n.pauseWheelEvent||(Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX>0&&n._config.hasOwnProperty("left")?n._config.left():e.deltaX<0&&n._config.hasOwnProperty("right")&&n._config.right():e.deltaY>0&&n._config.hasOwnProperty("up")?n._config.up():e.deltaY<0&&n._config.hasOwnProperty("down")&&n._config.down(),n.pauseWheelEvent=!0,n.timeout=setTimeout(function(){n.pauseWheelEvent=!1},200))}},n.clearTimeout=function(){n.timeout&&clearTimeout(n.timeout)},t.default=n},508:function(e,t,n){e.exports=n(507)},220:function(e,t,n){(function(a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l=n(1),r=(i(l),n(11)),u=(i(r),n(16)),s=i(u),d=n(17),c=i(d),f=n(23),p=i(f),g=(n(6),function(e){var t,n=e.animating,i=e.data,l=void 0===i?{}:i,r=e.handleOnClickLeave,u=e.leaving,d=e.loaded,f=e.ready;return a.createElement("div",{className:n&&""+s.default.page,onClick:function(){return r(l.slug)}},a.createElement("div",{className:(0,p.default)((t={},t[s.default.pageSwipe]=!0,t[s.default.swipeIn]=!f,t[s.default.swipeIntro]=d,t[s.default.swipeLeave]=u,t))}),a.createElement("div",o({},c.default.default,l.img)),a.createElement("span",c.default.cta,"VIEW PROJECT"))});g.PropTypes={animating:l.PropTypes.bool,data:l.PropTypes.object,handleOnClickLeave:l.PropTypes.func,leaving:l.PropTypes.bool,loaded:l.PropTypes.bool,ready:l.PropTypes.bool},t.default=g,e.exports=t.default}).call(t,n(9))},223:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=n(17),o=a(i),l=[{img:o.default.bgOSS,number:"OI",title:"ETA",work:"Design & Engineering",slug:"/expedition-travel-advisor"},{img:o.default.bgEta,number:"O2",title:"OSS",work:"Design & Engineering",slug:"/oss-development-dashboards"},{img:o.default.bgIRC,number:"O3",title:"IRC",work:"Prototyping & Engineering",slug:"/international-rescue-foundation"},{img:o.default.bgBrave,number:"O4",title:"NIN",work:"Prototyping & Engineering",slug:"/nintendo-bravely-default"},{img:o.default.bgIysl,number:"O5",title:"MTV",work:"Prototyping & Engineering",slug:"/mtv-its-your-sex-life"},{img:o.default.bgMario,number:"O6",title:"NIN",work:"Prototyping & Engineering",slug:"/nintendo-mario-party"}];t.default=l,e.exports=t.default},228:function(e,t,n){(function(a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s=n(1),d=(i(s),n(30)),c=i(d),f=n(31),p=i(f),g=n(220),h=i(g),m=n(11),v=(i(m),n(33)),y=i(v),b=n(508),O=i(b),w=n(223),E=i(w),_=n(36),k=(i(_),n(18)),C=i(k),P=n(12),T=i(P),I=(n(6),function(e){function t(n){o(this,t);var a=l(this,e.call(this,n));return a.state={animating:!0,content:"",leaving:!1,loaded:!1,pageIndex:0,ready:!1},a.handleOnClick=a.handleOnClick.bind(a),a.handleOnClickLeave=a.handleOnClickLeave.bind(a),O.default.config({up:function(){a.handleOnClick("up")},down:function(){a.handleOnClick("down")}}),a}return r(t,e),t.prototype.componentDidMount=function(){var e=this;this.setState({loaded:!0}),setTimeout(function(){e.setState({ready:!0,loaded:!1})},1400)},t.prototype.componentWillUnmount=function(){O.default.clearTimeout()},t.prototype.handleOnClickLeave=function(e){this.setState({leaving:!0}),setTimeout(function(){(0,m.navigateTo)(e)},900)},t.prototype.handleOnClick=function(e){var t=this,n=E.default.length,a=this.state,i=(a.animating,a.pageIndex),o=a.ready;o===!0&&(this.setState({animating:!0,ready:!1}),"up"===e?setTimeout(function(){n===i+1?t.setState({animating:!1,pageIndex:0}):t.setState({animating:!1,pageIndex:i+1})},900):setTimeout(function(){0===i?t.setState({animating:!1,pageIndex:n-1}):t.setState({animating:!1,pageIndex:i-1})},900),setTimeout(function(){t.setState({ready:!0})},1800))},t.prototype.render=function(){var e=this,t=C.default.ht100,n=C.default.leftCol,i=C.default.rightCol;T.default.link;return a.createElement("div",u({},t,O.default.events),a.createElement("section",n,a.createElement(h.default,{animating:this.state.animating,data:E.default[this.state.pageIndex],handleOnClickLeave:this.handleOnClickLeave,leaving:this.state.leaving,loaded:this.state.loaded,ready:this.state.ready})),a.createElement("main",i,a.createElement(p.default,null),a.createElement(y.default,{animating:this.state.animating,data:E.default[this.state.pageIndex],leaving:this.state.leaving,loaded:this.state.loaded,ready:this.state.ready}),a.createElement(c.default,{handleOnClick:function(){return e.handleOnClick("up")}})))},t}(s.Component));t.default=I,e.exports=t.default}).call(t,n(9))}});
//# sourceMappingURL=component---src-pages-index-js-0e6efd2979fcff7ea31e.js.map