(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[372],{8030:function(e,t,a){"use strict";var n,r;a.r(t),a.d(t,{DataContext:function(){return S},DataCtxReader:function(){return N},DataProvider:function(){return F},PageParamsProvider:function(){return L},PlasmicCanvasContext:function(){return g},PlasmicCanvasHost:function(){return y},applySelector:function(){return O},mkMetaName:function(){return C},mkMetaValue:function(){return A},registerComponent:function(){return q},registerGlobalContext:function(){return T},registerTrait:function(){return V},repeatedElement:function(){return I},unstable_registerFetcher:function(){return j},useDataEnv:function(){return R},usePlasmicCanvasContext:function(){return v},useSelector:function(){return M},useSelectors:function(){return k}});var i=a(7294),s=a(3935);function _(){return _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},_.apply(this,arguments)}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function c(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(a)return(a=a.call(e)).next.bind(a);if(Array.isArray(e)||(a=function(e,t){if(e){if("string"===typeof e)return o(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?o(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u=globalThis;null==u.__PlasmicHostVersion&&(u.__PlasmicHostVersion="2");var m=[],d=new function(e){var t=this;this.value=e,this.set=function(e){t.value=e,m.forEach((function(e){return e()}))},this.get=function(){return t.value}}(null);function h(){return function(e,t){if(void 0===t&&(t=""),null===e||void 0===e)throw t=(function(e){return"string"===typeof e}(t)?t:t())||"",new Error("Value must not be undefined or null"+(t?"- "+t:""));return e}(new URL("https://fakeurl/"+location.hash.replace(/#/,"?")).searchParams.get("origin"),"Missing information from Plasmic window.")}var p=0;function f(e){p++,d.set(e)}var g=(0,i.createContext)(!1),v=function(){return(0,i.useContext)(g)};function b(){var e,t,a=!!window.parent,n=!(null==(e=location.hash)||!e.match(/\bcanvas=true\b/)),r=!(null==(t=location.hash)||!t.match(/\blive=true\b/))||!a,_=a&&!document.querySelector("#plasmic-studio-tag")&&!n&&!r,l=function(){var e=(0,i.useState)(0)[1];return(0,i.useCallback)((function(){e((function(e){return e+1}))}),[])}();if((0,i.useLayoutEffect)((function(){return m.push(l),function(){var e=m.indexOf(l);e>=0&&m.splice(e,1)}}),[l]),(0,i.useEffect)((function(){_&&a&&window.parent!==window&&function(){var e=document.createElement("script"),t=h();e.src=t+"/static/js/studio.js",document.body.appendChild(e)}()}),[_,a]),(0,i.useEffect)((function(){if(!_&&!document.querySelector("#getlibs")&&r){var e=document.createElement("script");e.id="getlibs",e.src=h()+"/static/js/getlibs.js",e.async=!1,e.onload=function(){null==window.__GetlibsReadyResolver||window.__GetlibsReadyResolver()},document.head.append(e)}}),[_]),!a)return null;if(n||r){var o=document.querySelector("#plasmic-app.__wab_user-body");o||((o=document.createElement("div")).id="plasmic-app",o.classList.add("__wab_user-body"),document.body.appendChild(o));var c=new URLSearchParams(location.hash),u=!!n&&{componentName:c.get("componentName")};return(0,s.createPortal)((0,i.createElement)(P,{key:""+p},(0,i.createElement)(g.Provider,{value:u},d.get())),o,"plasmic-app")}return _&&window.parent===window?(0,i.createElement)("iframe",{src:"https://docs.plasmic.app/app-content/app-host-ready#appHostUrl="+encodeURIComponent(location.href),style:{width:"100vw",height:"100vh",border:"none",position:"fixed",top:0,left:0,zIndex:99999999}}):null}var y=function(e){var t=e.enableWebpackHmr,a=(0,i.useState)(null),n=a[0],r=a[1];return(0,i.useEffect)((function(){r((0,i.createElement)(b,null))}),[]),(0,i.createElement)(i.Fragment,null,!t&&(0,i.createElement)(E,null),n)},w=[];function x(e){return w.push(e),function(){var t=w.indexOf(e);t>=0&&w.splice(t,1)}}var P=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,l(t,a),n.getDerivedStateFromError=function(e){return{error:e}};var r=n.prototype;return r.componentDidCatch=function(e){w.forEach((function(t){return t(e)}))},r.render=function(){return this.state.error?(0,i.createElement)("div",null,"Error: ",""+this.state.error.message):(0,i.createElement)(i.Fragment,null,this.props.children)},n}(i.Component);function E(){return null}var S=(0,i.createContext)(void 0);function C(e){return"__plasmic_meta_"+e}function A(e){return e}function O(e,t){if(t){for(var a,n=e,r=c(t.split("."));!(a=r()).done;){var i,s=a.value;n=null==(i=n)?void 0:i[s]}return n}}function M(e){return O(R(),e)}function k(e){void 0===e&&(e={});var t=R();return Object.fromEntries(Object.entries(e).filter((function(e){var t=e[0],a=e[1];return!!t&&!!a})).map((function(e){var a=e[0],n=e[1];return function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t}(a,O(t,n))})))}function R(){return(0,i.useContext)(S)}function F(e){var t,a,n=e.name,r=e.data,s=e.hidden,l=e.children,o=null!=(t=R())?t:{};return n?i.createElement(S.Provider,{value:_({},o,(a={},a[n]=r,a[C(n)]={hidden:s},a))},l):i.createElement(i.Fragment,null,l)}function L(e){var t=e.children,a=e.params,n=void 0===a?{}:a,r=e.query,s=void 0===r?{}:r;return i.createElement(F,{name:"params",data:n},i.createElement(F,{name:"query",data:s},t))}function N(e){return(0,e.children)(R())}var z=globalThis;function j(e,t){z.__PlasmicFetcherRegistry.push({fetcher:e,meta:t})}z.__PlasmicFetcherRegistry=[];var K=globalThis;function q(e,t){K.__PlasmicComponentRegistry.push({component:e,meta:t})}null==K.__PlasmicComponentRegistry&&(K.__PlasmicComponentRegistry=[]);var H=globalThis;function T(e,t){H.__PlasmicContextRegistry.push({component:e,meta:t})}null==H.__PlasmicContextRegistry&&(H.__PlasmicContextRegistry=[]);var D,B,W=globalThis;function V(e,t){W.__PlasmicTraitRegistry.push({trait:e,meta:t})}function I(e,t){return G(e,t)}null==W.__PlasmicTraitRegistry&&(W.__PlasmicTraitRegistry=[]);var G=function(e,t){return e?t:Array.isArray(t)?t.map((function(t){return I(e,t)})):t&&(0,i.isValidElement)(t)&&"string"!==typeof t?(0,i.cloneElement)(t):t},U=globalThis,Q=null!=(D=null==U||null==(B=U.__Sub)?void 0:B.setRepeatedElementFn)?D:function(e){G=e},X={__proto__:null,PlasmicCanvasContext:g,PlasmicCanvasHost:y,usePlasmicCanvasContext:v,unstable_registerFetcher:j,registerComponent:q,registerGlobalContext:T,registerTrait:V,repeatedElement:I,DataContext:S,mkMetaName:C,mkMetaValue:A,applySelector:O,useSelector:M,useSelectors:k,useDataEnv:R,DataProvider:F,PageParamsProvider:L,DataCtxReader:N},Y=globalThis;null==Y.__Sub&&(console.log("Plasmic: Setting up app host dependencies"),Y.__Sub=_({React:n||(n=a.t(i,2)),ReactDOM:r||(r=a.t(s,2)),hostModule:X,hostVersion:"1.0.56",hostUtils:{setPlasmicRootNode:f,registerRenderErrorListener:x,setRepeatedElementFn:Q},setPlasmicRootNode:f,registerRenderErrorListener:x,setRepeatedElementFn:Q},X))},8896:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new-page",function(){return a(6252)}])},6252:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return y}});var n=a(5893),r=a(7294),i=a(7175),s=a(8030);var _=i.Hf(!0,{tabletPortrait:"(min-width:0px) and (max-width:768px)",phone:"(max-width:420px)"}),l=(a(8834),a(5085)),o=a.n(l),c=a(1748),u=a.n(c);function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function d(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h=new Array,p=new Array,f={};var g={root:["root","img","freeBox"],img:["img"],freeBox:["freeBox"]};function v(e){var t=function(t){var a=(0,i.xf)(t,{name:e,descendantNames:d(g[e]),internalArgPropNames:p,internalVariantPropNames:h});return function(e){e.variants;var t,a=e.overrides,n=e.forNode;return Object.assign({},f,e.args),null===(t=s.useDataEnv)||void 0===t||t.call(s),(0,i.LK)({screen:_()}),(0,i.eh)(r.Fragment,null,(0,i.eh)("style",null,"\n        body {\n          margin: 0;\n        }\n      "),(0,i.eh)("div",{className:o().plasmic_page_wrapper},(0,i.eh)("div",{"data-plasmic-name":"root","data-plasmic-override":a.root,"data-plasmic-root":!0,"data-plasmic-for-node":n,className:(0,i.AK)(o().all,o().root_reset,o().plasmic_default_styles,o().plasmic_mixins,o().plasmic_tokens,u().root)},(0,i.eh)("div",{className:(0,i.AK)(o().all,o().__wab_text,u().text___2Olc6)},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "),(0,i.eh)("div",{className:(0,i.AK)(o().all,o().__wab_text,u().text___9TjS)},"Oh"),(0,i.eh)("div",{className:(0,i.AK)(o().all,o().__wab_text,u().text__bdzeS)},"my"),(0,i.eh)("div",{className:(0,i.AK)(o().all,o().__wab_text,u().text__l9OWa)},"Lord!"),(0,i.eh)(i.Vv,{"data-plasmic-name":"img","data-plasmic-override":a.img,alt:"",className:(0,i.AK)(u().img),displayHeight:"485px",displayMaxHeight:"none",displayMaxWidth:"100%",displayMinHeight:"0",displayMinWidth:"0",displayWidth:"713px",loading:"lazy",src:{src:"/plasmic/sta_draghi/images/_844Da0Eb089248CfA13E3Fc528Eb2308Jpg.jpeg",fullWidth:805,fullHeight:538,aspectRatio:void 0}}),(0,i.eh)("div",{className:(0,i.AK)(o().all,o().__wab_text,u().text__uem3X)},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. "),(0,i.eh)(i.Kq,{as:"div","data-plasmic-name":"freeBox","data-plasmic-override":a.freeBox,hasGap:!0,className:(0,i.AK)(o().all,u().freeBox)},(0,i.eh)("div",{className:(0,i.AK)(o().all,o().__wab_text,u().text___5Cqio)},(0,i.eh)(r.Fragment,null,(0,i.eh)(r.Fragment,null,""),(0,i.eh)("h6",{className:(0,i.AK)(o().all,o().h6,o().__wab_text,u().h6__cW3Hn)},(0,i.eh)(r.Fragment,null,(0,i.eh)(r.Fragment,null,""),(0,i.eh)("h5",{className:(0,i.AK)(o().all,o().h5,o().__wab_text,u().h5__sKnUv)},"Pro"),(0,i.eh)(r.Fragment,null,"Doris Priesching"))),(0,i.eh)(r.Fragment,null,"\nAls Bridgerton 2020 startete, war ich fassungslos. Frauen, deren alleiniger Zweck es ist, sich h\xfcbsch rauszuputzen, um am Heiratsmarkt Chancen zu haben? M\xe4nner, die als Herren der Sch\xf6pfung antanzen, geboren, Verantwortung zu \xfcbernehmen, f\xfcr Hab und Gut und zuletzt f\xfcr die hinter ihnen hertrippelnden Schnatterg\xe4nse? Verrat am Feminismus! Ich schob die Begei-sterung auf Weihnachten, den Lockdown, der Herzen und Hirne des Publikums weich gemacht haben musste. Meine feministische Welt war damals noch in Ordnung.\n\nZwei Jahre sp\xe4ter bestimmt die Pandemie noch immer unser Leben. Jedes Mal, wenn ich dachte, jetzt haben wir es \xfcber-standen (\u201eOmikron ist der Gamechanger.\u201c Haha), geschah das exakte Gegenteil. Nichts wurde besser. Winter, kalt, grau, eint\xf6nig, infekti\xf6s. Was f\xfcr eine Mischung!\n\nUnd jetzt ist da wieder Bridgerton, die zweite Staffel. Ich habe alle Folgen gesehen und nehme alles zur\xfcck. "))),(0,i.eh)("div",{className:(0,i.AK)(o().all,o().__wab_text,u().text__vsvcs)},(0,i.eh)(r.Fragment,null,(0,i.eh)(r.Fragment,null,""),(0,i.eh)("h6",{className:(0,i.AK)(o().all,o().h6,o().__wab_text,u().h6___8A7Yv)},(0,i.eh)(r.Fragment,null,(0,i.eh)(r.Fragment,null,""),(0,i.eh)("h5",{className:(0,i.AK)(o().all,o().h5,o().__wab_text,u().h5___4SKr9)},"Contra"),(0,i.eh)(r.Fragment,null,"Nana Siebert"))),(0,i.eh)(r.Fragment,null,"\nWenn Sie dem aufgeregten Geschnatter im Freundeskreis folgen, dann beschleicht Sie bei der Erw\xe4hnung von Bridgerton fast so was wie Fomo, die \u201efear of missing out\u201c \u2013 also die Angst, etwas zu verpassen? Gemach! Ehe Sie ein Netflix-Abo abschlie\xdfen und \xfcber acht neuen Folgen Bridgerton exakt 464 Minuten Ihrer Lebenszeit verschwenden, gibt es hier einen wertvollen Tipp: Googeln Sie das schriftstellerische \u0152uvre der amerikanischen Autorin Julia Quinn, Verfasserin der achtteiligen Bridgerton-Buchreihe. Wer sich die Umschl\xe4ge von Werken wie Mein wildes, ungez\xe4hmtes Herz oder Wie verf\xfchrt man einen Lord anschaut, hat die \xc4sthetik der Serie erfasst: Herz, Schmerz, Drama und ganz viel Romantik.\n\nAuf dieser groschenromanigen Kitschspur wandeln eine Reihe von heiratsf\xe4higen Frauen der britischen High Society durch die aufwendig-schrillen Kulissen von Luftschl\xf6ssern, allen voran die liebliche Edwina Sharma (Charithra Chandran), die erst k\xfcrzlich von Bombay nach London gekommen ist. ")))))))}({variants:a.variants,args:a.args,overrides:a.overrides,forNode:e})};return t.displayName="root"===e?"PlasmicOhMyLord":"PlasmicOhMyLord.".concat(e),t}var b=Object.assign(v("root"),{img:v("img"),freeBox:v("freeBox"),internalVariantProps:h,internalArgProps:p});var y=function(){return(0,n.jsx)(b,{})}},1748:function(e){e.exports={root:"PlasmicOhMyLord_root__Mm_JF",text___2Olc6:"PlasmicOhMyLord_text___2Olc6__E6wGR",text___9TjS:"PlasmicOhMyLord_text___9TjS__BEIYa",text__bdzeS:"PlasmicOhMyLord_text__bdzeS__k2Kg_",text__l9OWa:"PlasmicOhMyLord_text__l9OWa__z1ED_",img:"PlasmicOhMyLord_img__FVz7d","__wab_img-spacer":"PlasmicOhMyLord___wab_img-spacer__5G4iV",text__uem3X:"PlasmicOhMyLord_text__uem3X__lWYiQ",freeBox:"PlasmicOhMyLord_freeBox__spz1C",text___5Cqio:"PlasmicOhMyLord_text___5Cqio__amuGu",h6__cW3Hn:"PlasmicOhMyLord_h6__cW3Hn__haS0_",h5__sKnUv:"PlasmicOhMyLord_h5__sKnUv__YFytB",text__vsvcs:"PlasmicOhMyLord_text__vsvcs__9qf0U",h6___8A7Yv:"PlasmicOhMyLord_h6___8A7Yv__0iljJ",h5___4SKr9:"PlasmicOhMyLord_h5___4SKr9__mS8D8"}},5085:function(e){e.exports={plasmic_tokens:"plasmic_sta_draghi_plasmic_tokens___84Pj",plasmic_default_styles:"plasmic_sta_draghi_plasmic_default_styles__bXr5y",all:"plasmic_sta_draghi_all__DRozq",__wab_rich_text:"plasmic_sta_draghi___wab_rich_text__uRFWP",__wab_text:"plasmic_sta_draghi___wab_text__DIzxo",img:"plasmic_sta_draghi_img__BuTuT",li:"plasmic_sta_draghi_li__ORLiL",span:"plasmic_sta_draghi_span__HDQuS",input:"plasmic_sta_draghi_input__DYuib",textarea:"plasmic_sta_draghi_textarea__OLbpW",button:"plasmic_sta_draghi_button__H7JQE",code:"plasmic_sta_draghi_code__t5E3K",pre:"plasmic_sta_draghi_pre__X1Ohn",p:"plasmic_sta_draghi_p__lo0n4",h1:"plasmic_sta_draghi_h1__gGXeT",h2:"plasmic_sta_draghi_h2__uSCmP",h3:"plasmic_sta_draghi_h3__rVepi",h4:"plasmic_sta_draghi_h4__40F2U",h5:"plasmic_sta_draghi_h5__3aKp7",h6:"plasmic_sta_draghi_h6__Vcgah",address:"plasmic_sta_draghi_address__dZ6kq",a:"plasmic_sta_draghi_a___mLpv",ol:"plasmic_sta_draghi_ol__qNCHB",ul:"plasmic_sta_draghi_ul__5eVRg",select:"plasmic_sta_draghi_select__bXli_",plasmic_default__component_wrapper:"plasmic_sta_draghi_plasmic_default__component_wrapper__900Sz",plasmic_default__inline:"plasmic_sta_draghi_plasmic_default__inline__pAYhq",plasmic_page_wrapper:"plasmic_sta_draghi_plasmic_page_wrapper__vM5Iq",root_reset:"plasmic_sta_draghi_root_reset__us47_",plasmic_default__h1:"plasmic_sta_draghi_plasmic_default__h1__VqVha",plasmic_default__h2:"plasmic_sta_draghi_plasmic_default__h2__p_nK2",plasmic_default__a:"plasmic_sta_draghi_plasmic_default__a__7u5wM",plasmic_default__h3:"plasmic_sta_draghi_plasmic_default__h3__pT_4w",plasmic_default__h4:"plasmic_sta_draghi_plasmic_default__h4__dQa6Q",plasmic_default__code:"plasmic_sta_draghi_plasmic_default__code__RnswT",plasmic_default__blockquote:"plasmic_sta_draghi_plasmic_default__blockquote__sIIpe",blockquote:"plasmic_sta_draghi_blockquote__cfbMY",plasmic_default__pre:"plasmic_sta_draghi_plasmic_default__pre__K4pZA",plasmic_default__ul:"plasmic_sta_draghi_plasmic_default__ul__kCZ7P",plasmic_default__ol:"plasmic_sta_draghi_plasmic_default__ol__QzQA2",plasmic_default__h5:"plasmic_sta_draghi_plasmic_default__h5__Jm01_",plasmic_default__h6:"plasmic_sta_draghi_plasmic_default__h6__mQU04"}},8834:function(){}},function(e){e.O(0,[8,774,888,179],(function(){return t=8896,e(e.s=t);var t}));var t=e.O();_N_E=t}]);