"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[353],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,g=f["".concat(i,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(g,c(c({ref:t},s),{},{components:n})):r.createElement(g,c({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5732:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],l={sidebar_position:7},i="Multi-user apps",u={unversionedId:"tutorial/sync-changes",id:"tutorial/sync-changes",isDocsHomePage:!1,title:"Multi-user apps",description:"Until now, you've built an Automerge application for a single user only. Are you ready to add multi-user collaboration?",source:"@site/docs/tutorial/sync-changes.md",sourceDirName:"tutorial",slug:"/tutorial/sync-changes",permalink:"/docs/docs/tutorial/sync-changes",editUrl:"https://github.com/automerge/docs/tree/main/docs/docs/tutorial/sync-changes.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Save and Load",permalink:"/docs/docs/tutorial/save-and-load"},next:{title:"Values",permalink:"/docs/docs/types/values"}},s=[{value:"Gotcha",id:"gotcha",children:[],level:2}],p={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"multi-user-apps"},"Multi-user apps"),(0,a.kt)("p",null,"Until now, you've built an Automerge application for a single user only. Are you ready to add multi-user collaboration?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let changes = Automerge.getChanges(doc2, doc)\nlet [newDoc, ] = Automerge.applyChanges(doc2, changes);\n\nconsole.log(newDoc.count); // <== SHOULD BE: 2\n")),(0,a.kt)("h2",{id:"gotcha"},"Gotcha"),(0,a.kt)("p",null,"The following will not work, for example, as you're passing the same beforeDoc into applyChanges more than once (the second time you do that will throw an exception):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const beforeDoc = ...\nconst after1 = Automerge.applyChanges(beforeDoc, [change1])\nconst after2 = Automerge.applyChanges(beforeDoc, [change2])\n")),(0,a.kt)("p",null,"But if you've got a linear chain of changes, you can still refer to old document versions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const beforeDoc = ...\nconst after1 = Automerge.applyChanges(beforeDoc, [change1])\nconst after2 = Automerge.applyChanges(after1, [change2])\n// beforeDoc, after1, and after2 are all valid documents\n")))}f.isMDXComponent=!0}}]);