"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7355],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4875:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=["components"],i={sidebar_position:2},c="Real-time Collaboration",l={unversionedId:"cookbook/real-time",id:"cookbook/real-time",isDocsHomePage:!1,title:"Real-time Collaboration",description:"The Automerge library itself is agnostic to the network layer \u2014 that is, you can use whatever",source:"@site/docs/cookbook/real-time.md",sourceDirName:"cookbook",slug:"/cookbook/real-time",permalink:"/docs/cookbook/real-time",editUrl:"https://github.com/automerge/docs/edit/main/docs/cookbook/real-time.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Modeling Data",permalink:"/docs/cookbook/modeling-data"},next:{title:"Persistence",permalink:"/docs/cookbook/persistence"}},p=[{value:"Changes interface",id:"changes-interface",children:[],level:2},{value:"Sync protocol",id:"sync-protocol",children:[],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"real-time-collaboration"},"Real-time Collaboration"),(0,r.kt)("p",null,"The Automerge library itself is agnostic to the network layer \u2014 that is, you can use whatever\ncommunication mechanism you like to get changes from one node to another. There are currently a few\noptions, with more under development:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"Automerge.getChanges()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Automerge.applyChanges()")," to manually capture changes on one\nnode and apply them on another. These changes are encoded as byte arrays (",(0,r.kt)("inlineCode",{parentName:"li"},"Uint8Array"),"). You can\nalso store a log of these changes on disk in order to persist them."),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"Automerge.generateSyncMessage()")," to generate messages, send them over any transport protocol\n(e.g. WebSocket), and call ",(0,r.kt)("inlineCode",{parentName:"li"},"Automerge.receiveSyncMessage()")," on the recipient to process the\nmessages. ")),(0,r.kt)("h2",{id:"changes-interface"},"Changes interface"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"getChanges()/applyChanges()")," API works as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// On one node\nlet newDoc = Automerge.change(currentDoc, doc => {\n  // make arbitrary change to the document\n})\nlet changes = Automerge.getChanges(currentDoc, newDoc)\n// broadcast changes as a byte array\nnetwork.broadcast(changes)\n// On another node, receive the byte array\nlet changes = network.receive()\nlet [newDoc, patch] = Automerge.applyChanges(currentDoc, changes)\n// `patch` is a description of the changes that were applied (a kind of diff)\n")),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"Automerge.getChanges(oldDoc, newDoc)")," takes two documents as arguments: an old state and\na new state. It then returns a list of all the changes that were made in ",(0,r.kt)("inlineCode",{parentName:"p"},"newDoc")," since ",(0,r.kt)("inlineCode",{parentName:"p"},"oldDoc"),"."),(0,r.kt)("p",null,"The counterpart, ",(0,r.kt)("inlineCode",{parentName:"p"},"Automerge.applyChanges(oldDoc, changes)")," applies the list of ",(0,r.kt)("inlineCode",{parentName:"p"},"changes")," to the\ngiven document, and returns a new document with those changes applied. Automerge guarantees that\nwhenever any two documents have applied the same set of changes \u2014 even if the changes were applied\nin a different order \u2014 then those two documents are equal. That property is called ",(0,r.kt)("em",{parentName:"p"},"convergence"),",\nand it is the essence of what Automerge is all about."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Automerge.merge(doc1, doc2)")," is a related function that is useful for testing. It looks for any\nchanges that appear in ",(0,r.kt)("inlineCode",{parentName:"p"},"doc2")," but not in ",(0,r.kt)("inlineCode",{parentName:"p"},"doc1"),", and applies them to ",(0,r.kt)("inlineCode",{parentName:"p"},"doc1"),", returning an updated\nversion of ",(0,r.kt)("inlineCode",{parentName:"p"},"doc1"),". This function requires that ",(0,r.kt)("inlineCode",{parentName:"p"},"doc1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"doc2")," have different actor IDs (that is,\nthey originated from different calls to ",(0,r.kt)("inlineCode",{parentName:"p"},"Automerge.init()"),")."),(0,r.kt)("h2",{id:"sync-protocol"},"Sync protocol"),(0,r.kt)("p",null,"In the case that document history is quite large, and two devices are online at the same time, we want to only send the subset of changes that are relevant. The Automerge sync protocol is designed to help with this process. The Automerge sync protocol brings two documents into sync by exchanging messages between peers until both documents have the same contents. The protocol can run on top of any connection-based network link that supports bidirectional messages, including WebSocket, WebRTC, or plain TCP. It can be used in any network topology: client/server, peer-to-peer, or server-to-server sync are all supported."),(0,r.kt)("p",null,"The protocol works by exchanging rounds of sync messages. These sync messages contain two parts: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a lossily-compressed list of changes it already has (implicitly requesting the remainder)"),(0,r.kt)("li",{parentName:"ul"},"changes it believe the other peer needs")),(0,r.kt)("p",null,"On connection, each peer should start the exchange with an initial message via ",(0,r.kt)("inlineCode",{parentName:"p"},"generateSyncMessage(doc, syncState)"),". This first message generally does not include changes, but provides the recipient with the information it needs to determine which changes it should send. Upon receiving any message, a peer should always call ",(0,r.kt)("inlineCode",{parentName:"p"},"receiveSyncMessage(doc, syncState, message)"),". This will update the ",(0,r.kt)("inlineCode",{parentName:"p"},"syncState")," with the information necessary to calculate what changes to send, and also cause Automerge to apply any changes it received. The developer can now call ",(0,r.kt)("inlineCode",{parentName:"p"},"generateSyncMessage(doc, syncState)")," to produce the next message to a peer. "),(0,r.kt)("p",null,"From then on, a peer should continue to call these functions until ",(0,r.kt)("inlineCode",{parentName:"p"},"generateSyncMessage()")," returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," value, indicating both peers are synchronized and no further communication is necessary."),(0,r.kt)("p",null,"Here are a few demos that you can use if you'd prefer to see a full working implementation. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/pvh/automerge-demo/"},"https://github.com/pvh/automerge-demo/")," uses Svelte and BroadcastChannel for the network."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/okdistribute/automerge-chat-demo"},"https://github.com/okdistribute/automerge-chat-demo")," uses React and Websockets for the network.")),(0,r.kt)("p",null,"Read below for a step-by-step walkthrough."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Automerge synchronization occurs at a per-document level. Most Automerge-based applications will be built around more than one document, so in our example code here we will assume these documents are identified by a string ",(0,r.kt)("inlineCode",{parentName:"p"},"docId"),"."),(0,r.kt)("p",null,"Throughout the example code below we're going to assume a couple of global variables exist, described here:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// global variables (but maybe don't use global variables)\nconst syncStates = {} // a hash of [peerId][docId] containing in-memory sync states\nconst docs = {} // a hash by [docId] of current documents \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Connecting")),(0,r.kt)("p",null,"Every peer need it's own sync state. You can initialize a new sync state using ",(0,r.kt)("inlineCode",{parentName:"p"},"initSyncState()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"syncStates[peerId][docId] = Automerge.initSyncState()\n")),(0,r.kt)("p",null,"Automerge keeps track of ongoing exchanges with another peer using a ",(0,r.kt)("inlineCode",{parentName:"p"},"syncState")," data structure. During synchronization, Automerge uses a probabilistic structure known as a Bloom filter to avoid having to send the full descriptions of every local change to peers. To reduce the size and cost of this structure, it is only built for changes the other peer has not already told us they have. This is described in more detail later in the ",(0,r.kt)("a",{parentName:"p",href:"docs/how-it-works/sync"},"Internals section"),". "),(0,r.kt)("p",null,"To maintain this structure, when a peer is discovered, first create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"syncState")," via ",(0,r.kt)("inlineCode",{parentName:"p"},"initSyncState()"),". These ",(0,r.kt)("inlineCode",{parentName:"p"},"syncState")," objects can be persisted between program executions as an optimization, but it is not required. All subsequent sync operations with that peer will return a new ",(0,r.kt)("inlineCode",{parentName:"p"},"syncState")," to replace the previous one."),(0,r.kt)("p",null,"If you've already seen a peer, you should load your old ",(0,r.kt)("inlineCode",{parentName:"p"},"syncState")," for them via ",(0,r.kt)("inlineCode",{parentName:"p"},"decodeSyncState()"),". This is not strictly necessary, but will reduce unnecessary computation and network traffic."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  if (data.type === 'HELLO') {\n    if (syncStates[peerId] === undefined) {\n      syncStates[peerId] = {}\n      syncStates[peerId][docId] = Automerge.decodeSyncState(db.getSyncState(docId, peerId))\n      sendMessage({ peerId: workerId, target: peerId, type: 'HELLO' })\n    }\n    return\n  }\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Synchronizing with one or more peers")),(0,r.kt)("p",null,"In general, whenever a peer creates a local change or receives a sync message from another peer, it should respond to all the peers it is connected to with its updated status. This will both confirm receipt of any data to the sending peer and also allow other peers to request any changes they may still need. "),(0,r.kt)("p",null,"Generating new sync messages to other peers is straightforward. Simply call ",(0,r.kt)("inlineCode",{parentName:"p"},"generateSyncMessage")," and, if ",(0,r.kt)("inlineCode",{parentName:"p"},"syncMessage")," is not null, send it to the appropriate peer. You will also need to hold on to the returned ",(0,r.kt)("inlineCode",{parentName:"p"},"syncState")," for that peer, since it keeps track of what data you have sent them to avoid sending data twice."),(0,r.kt)("p",null,"Here is a simple example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function updatePeers(docId: string) {\n  Object.entries(syncStates).forEach(([peer, syncState]) => {\n    const [nextSyncState, syncMessage] = Automerge.generateSyncMessage(\n      docs[docId],\n      syncState[docId] || Automerge.initSyncState(),\n    )\n    syncStates[peer] = { ...syncStates[peer], [docId]: nextSyncState }\n    if (syncMessage) {\n      sendMessage({\n        docId, peerId: workerId, target: peer, syncMessage,\n      })\n    }\n  })\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Receiving sync messages")),(0,r.kt)("p",null,"Receiving sync messages requires the document, syncState, and incoming message. Pass these arguments to ",(0,r.kt)("inlineCode",{parentName:"p"},"receiveSyncMessage()"),", and keep the updated results. After receiving a sync message, you should check if you need to send new sync messages to any connected peers using the code above. In our example code below this is represented by a call to ",(0,r.kt)("inlineCode",{parentName:"p"},"updatePeers()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  const [nextDoc, nextSyncState, patch] = Automerge.receiveSyncMessage(\n    docs[docId],\n    syncStates[peerId][docId] || Automerge.initSyncState(),\n    syncMessage,\n  )\n  docs[docId] = nextDoc\n  syncStates[peerId] = { ...syncStates[peerId], [docId]: nextSyncState }\n\n  updatePeers(docId)\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Applying and distributing local changes")),(0,r.kt)("p",null,"When you create a local change to a document, simply call ",(0,r.kt)("inlineCode",{parentName:"p"},"generateSyncMessage()")," for each peer to produce a message to send them. In general, you can use the same ",(0,r.kt)("inlineCode",{parentName:"p"},"updatePeers()")," implementation for both receiving messages and creating local changes. You may want to rate limit or debounce these communications to reduce network traffic, but this isn't required. ",(0,r.kt)("em",{parentName:"p"},"Remember, after applying a local change to the document you will need to forward the resulting patch to your frontend!")),(0,r.kt)("p",null,"Here's a sample implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// sample message data format for sending from a renderer to a worker in a browser  \ninterface FrontendMessage {\n  docId: string\n  type: \"OPEN\" | \"LOCAL_CHANGE\"\n  payload: Uint8Array\n} \n\n// Respond to messages from the frontend document\nself.addEventListener('message', (event: Event) => {\n  const { data: FrontendMessage } = event\n  const { docId } = data\n\n  if (data.type === 'OPEN') {\n    docs[docId] = Automerge.init()\n  }\n\n  if (data.type === 'LOCAL_CHANGE') {\n    sendMessageToRenderer({ docId, patch })\n  }\n\n  // now tell everyone else about how things have changed\n  updatePeers(docId)\n})\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Handling disconnection")),(0,r.kt)("p",null,"Remember to save your syncState object for a peer upon disconnection via ",(0,r.kt)("inlineCode",{parentName:"p"},"encodeSyncState()"),". That might look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"db.storeSyncState(docId, peerId, encodeSyncState(syncStates[peerId]))\n")))}u.isMDXComponent=!0}}]);