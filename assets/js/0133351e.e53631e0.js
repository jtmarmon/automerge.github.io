"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3989],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1163:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:4},l="Make a Change",u={unversionedId:"tutorial/make-a-change",id:"tutorial/make-a-change",isDocsHomePage:!1,title:"Make a Change",description:"In our MVP of the todo app, users will need two main interactions:",source:"@site/docs/tutorial/make-a-change.md",sourceDirName:"tutorial",slug:"/tutorial/make-a-change",permalink:"/docs/tutorial/make-a-change",editUrl:"https://github.com/automerge/docs/edit/main/docs/tutorial/make-a-change.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Your first document",permalink:"/docs/tutorial/create-a-document"},next:{title:"Observing changes",permalink:"/docs/tutorial/observing-changes"}},s=[],m={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"make-a-change"},"Make a Change"),(0,a.kt)("p",null,"In our MVP of the todo app, users will need two main interactions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a todo item"),(0,a.kt)("li",{parentName:"ul"},"Toggle a todo item as complete or not complete")),(0,a.kt)("p",null,"To add a todo item to the list, we will call ",(0,a.kt)("inlineCode",{parentName:"p"},"Automerge.change"),". We will make\nsure ",(0,a.kt)("inlineCode",{parentName:"p"},"doc.items")," exists, and then add a new item to the list with ",(0,a.kt)("inlineCode",{parentName:"p"},"done: false"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function addItem (doc, text) {\n  let newDoc = Automerge.change(doc, doc => {\n    if (!doc.items) doc.items = []\n    doc.items.push({\n      text, \n      done: false\n    })\n  })\n  return newDoc\n}\n")),(0,a.kt)("p",null,"We return the new document from this function. Because Automerge is functional,\neach document is immutable. The ",(0,a.kt)("inlineCode",{parentName:"p"},"newDoc")," is now the document that should be\nreferenced after this change is made. The older document becomes stale and\ncannot be used anymore."),(0,a.kt)("p",null,"Now, let's create an input element in the HTML so that items can be added to the list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<form>\n  <input type="text" id="new-todo" />\n</form>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let form = document.querySelector("form")\nlet input = document.querySelector("#new-todo")\nform.onsubmit = (ev) => {\n  ev.preventDefault()\n  addItem(doc, value)\n  input.value = null\n}\n')),(0,a.kt)("p",null,"Next, we have to render the items in the list every time an item is added."))}d.isMDXComponent=!0}}]);