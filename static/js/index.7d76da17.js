(function(t){function e(e){for(var i,u,l=e[0],o=e[1],r=e[2],d=0,p=[];d<l.length;d++)u=l[d],Object.prototype.hasOwnProperty.call(s,u)&&s[u]&&p.push(s[u][0]),s[u]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);c&&c(e);while(p.length)p.shift()();return a.push.apply(a,r||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,l=1;l<n.length;l++){var o=n[l];0!==s[o]&&(i=!1)}i&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var i={},s={index:0},a=[];function u(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=i,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)u.d(n,i,function(e){return t[e]}.bind(null,i));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var r=0;r<l.length;r++)e(l[r]);var c=o;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"08ff":function(t,e,n){},"2ce4":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:[t.type,{loading:t.loading,waiting:t.waiting}]},[t._t("default")],2)},s=[],a={name:"dwButton",props:{type:{type:String,default:"default"},loading:{type:Boolean,default:!1},waiting:{type:Boolean,default:!1}}},u=a,l=(n("e210"),n("2877")),o=Object(l["a"])(u,i,s,!1,null,"6708dda6",null);e["default"]=o.exports},4836:function(t,e,n){},"4a60":function(t,e,n){"use strict";n("08ff")},"4c5b":function(t,e,n){"use strict";n("e6f9")},"56bb":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav-menu",{attrs:{id:"menu",list:t.componentsList},model:{value:t.curName,callback:function(e){t.curName=e},expression:"curName"}}),n(t.curName,{tag:"component"})],1)},a=[],u=n("725b"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box "},[n("div",{staticClass:"row"},[n("div",{staticClass:"title"},[t._v("button按钮")]),n("div",{staticClass:"btn"},[n("dw-button",{attrs:{type:"default"}},[t._v("default")]),n("dw-button",{attrs:{type:"primary"}},[t._v("primary")]),n("dw-button",{attrs:{type:"success"}},[t._v("success")]),n("dw-button",{attrs:{type:"info"}},[t._v("info")]),n("dw-button",{attrs:{type:"warning",waiting:""}},[t._v("warning waiting")]),n("dw-button",{attrs:{type:"danger",loading:""}},[t._v("danger loading")]),n("dw-button",{attrs:{type:"text"}},[t._v("text")])],1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"title"},[t._v("input输入框")]),n("div",{staticClass:"input grid"},[n("div",{staticClass:"input-left"},[t._v("基础")]),n("dw-input",{attrs:{placeholder:"placeholder"},model:{value:t.input1,callback:function(e){t.input1=e},expression:"input1"}}),n("div",{staticClass:"input-left"},[t._v("禁用状态")]),n("dw-input",{attrs:{placeholder:"禁用",disabled:""},model:{value:t.input1,callback:function(e){t.input1=e},expression:"input1"}}),n("div",{staticClass:"input-left"},[t._v("可清空")]),n("dw-input",{attrs:{placeholder:"可清空",clearable:""},model:{value:t.input2,callback:function(e){t.input2=e},expression:"input2"}})],1)])])},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},t._l(t.list,(function(e,i){return n("div",{key:e,class:["row",t.cur==e?"select":""],on:{click:function(n){return t.switchMenu(e,i)}}},[t._v(t._s(e))])})),0)},c=[],d={model:{prop:"cur",event:"change"},props:{cur:{type:String},list:{type:Array,default:function(){return[]}}},methods:{switchMenu:function(t,e){this.$emit("change",t)},moveTo:function(t){var e=this.$refs["bg"].style;e.top="".concat(51*t,"px"),e.height="51px"}}},p=d,f=(n("4a60"),n("2877")),v=Object(f["a"])(p,r,c,!1,null,"620387d9",null),b=v.exports,h={components:{menuList:b},data:function(){return{curName:"button",menuList:["button","button2","button3"],input1:"",input2:""}}},m=h,w=(n("f8f9"),Object(f["a"])(m,l,o,!1,null,"803cceae",null)),y=w.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("div",{staticClass:"title"},[t._v("TODO LIST")]),n("input-btn",{on:{add:t.addNew}}),n("todo-list",{attrs:{list:t.list},on:{"update-row":t.updateRow,"delete-row":t.deleteRow}})],1)},g=[],x=(n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inp-box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"input",attrs:{type:"text",placeholder:"请输入待办事件"},domProps:{value:t.value},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add()},input:function(e){e.target.composing||(t.value=e.target.value)}}}),n("button",{staticClass:"primary",on:{click:function(e){return t.add()}}},[t._v("提交")])])}),C=[],k={data:function(){return{value:null}},methods:{add:function(){this.$emit("add",this.value,Date.now()),this.value=null}}},O=k,$=(n("b6c2"),Object(f["a"])(O,x,C,!1,null,null,null)),j=$.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-box"},[n("div",{class:["list",t.list.length?"":"none"]},t._l(t.list,(function(e,i){return n("div",{staticClass:"item"},[n("div",{class:["item-text",100==e.status?"finish":""],attrs:{title:e.value}},[t._v(t._s(e.value))]),0==e.status?n("button",{staticClass:"btn primary",on:{click:function(n){return t.updateRow(e,i,1)}}},[t._v("去执行")]):t._e(),1==e.status?n("button",{staticClass:"btn warning",on:{click:function(n){return t.updateRow(e,i,0)}}},[t._v("执行中")]):t._e(),100!=e.status?n("button",{staticClass:"btn success",on:{click:function(n){return t.updateRow(e,i,100)}}},[t._v("完成")]):t._e(),n("button",{staticClass:"btn danger",on:{click:function(e){return t.deleteRow(i)}}},[t._v("删除")])])})),0),n("div",[n("button",{class:["info pack-btn",t.list.length<=3?"disabled":""],on:{click:function(e){return t.packUp()}}},[t._v(t._s(t.isShowAll?"收起":"展开"))])])])},E=[],N={props:["list"],data:function(){return{isShowAll:!0}},methods:{updateRow:function(t,e,n){this.isShowAll=!1,this.$emit("update-row",t,e,n)},deleteRow:function(t){this.$emit("delete-row",t)},packUp:function(){this.list.length<=3||(this.isShowAll=!this.isShowAll)}}},A=N,R=(n("5d31"),Object(f["a"])(A,S,E,!1,null,"1e324732",null)),L=R.exports,M={name:"App",data:function(){return{list:[]}},components:{inputBtn:j,todoList:L},methods:{addNew:function(t){this.list.push({value:t,status:0})},updateRow:function(t,e,n){if(this.$set(t,"status",n),1==n||100==n){var i=this.list.splice(e,1)[0];1==n&&(this.list.length&&1==this.list[0].status&&(this.list[0].status=0),this.list.unshift(i))}},deleteRow:function(t){this.list.splice(t,1)}}},P=M,T=(n("7113"),Object(f["a"])(P,_,g,!1,null,"68d13f6d",null)),B=T.exports,D={name:"App",components:{navMenu:u["default"],todoList:B,myComponents:y},data:function(){return{curName:"myComponents",componentsList:["myComponents","todoList"]}}},U=D,I=(n("034f"),Object(f["a"])(U,s,a,!1,null,null,null)),J=I.exports,q=(n("d3b7"),n("ddb0"),n("159b"),n("ac1f"),n("b0c0"),n("8326")),z=q.keys(),F=/^dw[A-Za-z]+/,Z=/\.\/(.+?)\//,G=[];z.forEach((function(t){var e=Z.exec(t)[1];F.test(e)&&G.push(t)})),G.forEach((function(t){var e=q(t).default;/.vue$/.test(t)?i["a"].component(e.name,e):i["a"].use(e)})),i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(J)}}).$mount("#app")},"5d31":function(t,e,n){"use strict";n("9af6")},6418:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dw-input-box"},[n("input",{staticClass:"dw-input",class:{disabled:t.disabled,clearable:t.clearable},attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}),t.clearable?n("span",{staticClass:"btn",on:{click:function(e){return t.$emit("input","")}}}):t._e()])},s=[],a={name:"dwInput",model:{prop:"value",event:"input"},props:{value:{},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1}}},u=a,l=(n("4c5b"),n("2877")),o=Object(l["a"])(u,i,s,!1,null,"5f32907d",null);e["default"]=o.exports},7113:function(t,e,n){"use strict";n("734f")},"725b":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav grid",style:"grid-template: 1fr /repeat("+t.list.length+",1fr);"},[t._l(t.list,(function(e,i){return n("div",{key:e,class:["title",t.cur==e?"select":""],on:{click:function(n){return t.switchNav(e,i)}}},[t._v(t._s(e))])})),n("div",{ref:"line",staticClass:"line",style:"width:calc(100%/"+t.list.length+")"})],2)},s=[],a={model:{prop:"cur",event:"change"},props:{list:{type:Array,required:!0},cur:{type:String}},methods:{switchNav:function(t,e){this.moveTo(e),this.$emit("change",t)},moveTo:function(t){var e=this.$refs["line"].style;e.left="".concat(100/this.list.length*t,"%")}}},u=a,l=(n("e546"),n("2877")),o=Object(l["a"])(u,i,s,!1,null,"aa7d05ee",null);e["default"]=o.exports},"734f":function(t,e,n){},8326:function(t,e,n){var i={"./dwButton/index.vue":"2ce4","./dwInput/index.vue":"6418","./navMenu/index.vue":"725b"};function s(t){var e=a(t);return n(e)}function a(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=a,t.exports=s,s.id="8326"},"85ec":function(t,e,n){},"9af6":function(t,e,n){},b6c2:function(t,e,n){"use strict";n("56bb")},bea6:function(t,e,n){},d4c4:function(t,e,n){},e210:function(t,e,n){"use strict";n("4836")},e546:function(t,e,n){"use strict";n("bea6")},e6f9:function(t,e,n){},f8f9:function(t,e,n){"use strict";n("d4c4")}});
//# sourceMappingURL=index.7d76da17.js.map