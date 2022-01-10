"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2691],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return u}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return n?o.createElement(m,i(i({ref:t},h),{},{components:n})):o.createElement(m,i({ref:t},h))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4768:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return d}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={},l="Sync Protocol",c={unversionedId:"how-it-works/sync",id:"how-it-works/sync",isDocsHomePage:!1,title:"Sync Protocol",description:"The Automerge network sync protocol is designed to bring two documents into sync by exchanging messages between peers until both documents have the same contents. The protocol can run on top of any connection-based network link that supports bidirectional messages, including WebSocket, WebRTC, or plain TCP. It can be used in any network topology: client/server, peer-to-peer, or server-to-server sync are all supported.",source:"@site/docs/how-it-works/sync.md",sourceDirName:"how-it-works",slug:"/how-it-works/sync",permalink:"/docs/how-it-works/sync",editUrl:"https://github.com/automerge/docs/edit/main/docs/how-it-works/sync.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Binary Document Format",permalink:"/docs/how-it-works/binary-format"},next:{title:"API",permalink:"/docs/api"}},h=[{value:"The first exchanges",id:"the-first-exchanges",children:[],level:3},{value:"On the Bloom Filter",id:"on-the-bloom-filter",children:[],level:3},{value:"False positives",id:"false-positives",children:[],level:3},{value:"Shared Heads",id:"shared-heads",children:[],level:3},{value:"Bloom filter example",id:"bloom-filter-example",children:[],level:3},{value:"Error Recovery",id:"error-recovery",children:[],level:3},{value:"Multiple Peers, Multiple Documents",id:"multiple-peers-multiple-documents",children:[],level:3},{value:"Sequencing Network Communication",id:"sequencing-network-communication",children:[],level:3}],p={toc:h};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sync-protocol"},"Sync Protocol"),(0,r.kt)("p",null,"The Automerge network sync protocol is designed to bring two documents into sync by exchanging messages between peers until both documents have the same contents. The protocol can run on top of any connection-based network link that supports bidirectional messages, including WebSocket, WebRTC, or plain TCP. It can be used in any network topology: client/server, peer-to-peer, or server-to-server sync are all supported."),(0,r.kt)("p",null,"The protocol works by exchanging rounds of sync messages. These sync messages contain two parts: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a lossily-compressed list of changes it already has (implicitly requesting the remainder)"),(0,r.kt)("li",{parentName:"ul"},"changes it believe the other peer needs")),(0,r.kt)("p",null,"Each node will also maintain a local ",(0,r.kt)("inlineCode",{parentName:"p"},"syncState")," for each peer they want to synchronize with, which keeps track of what the local node knows about that peer. This sync state has to be kept around during synchronization, and can be saved to disk between executions as a performance optimization, but will be automatically regenerated if the protocol detects any problems."),(0,r.kt)("p",null,"On connection, each peer should start the exchange with an initial message via ",(0,r.kt)("inlineCode",{parentName:"p"},"generateSyncMessage(doc, syncState)"),". This first message generally does not include changes, but provides the recipient with the information it needs to determine which changes it should send. Upon receiving any message, a peer should always call ",(0,r.kt)("inlineCode",{parentName:"p"},"receiveSyncMessage(doc, syncState, message)"),". This will update the ",(0,r.kt)("inlineCode",{parentName:"p"},"syncState")," with the information necessary to calculate what changes to send, and also cause Automerge to apply any changes it received. The developer can now call ",(0,r.kt)("inlineCode",{parentName:"p"},"generateSyncMessage(doc, syncState)")," to produce the next message to a peer. "),(0,r.kt)("p",null,"From then on, a peer should continue to call these functions until ",(0,r.kt)("inlineCode",{parentName:"p"},"generateSyncMessage()")," returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," value, indicating both peers are synchronized and no further communication is necessary."),(0,r.kt)("p",null,"The algorithm is described in more detail in ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2012.00472"},"this paper")," and ",(0,r.kt)("a",{parentName:"p",href:"https://martin.kleppmann.com/2020/12/02/bloom-filter-hash-graph-sync.html"},"this blog post"),"."),(0,r.kt)("h3",{id:"the-first-exchanges"},"The first exchanges"),(0,r.kt)("p",null,"If we don't already have any existing sync state with a peer, the first call to ",(0,r.kt)("inlineCode",{parentName:"p"},"generateSyncMessage()"),' will create a Bloom filter which contains encoded hashes of all the changes in the document. The recipient of this message will walk their local graph of changes backwards from each "head" in their document until the Bloom filter indicates the other peer has the change in question. Everything from that point forward is collected and sent in a response message -- along with a new bloom filter so the other peer can reciprocate.'),(0,r.kt)("h3",{id:"on-the-bloom-filter"},"On the Bloom Filter"),(0,r.kt)("p",null,"Conceptually, the most straightforward way to synchronize the two sets of changes would be to send over the complete list of changes from one peer to another, which could then exactly request the changes it was needed and offer any changes only it had. Unfortunately, this approach is prohibitively expensive. Every change is notionally represented by a 256-bit hash, which in cases like text editing can be larger than the actual change. By sending the compressed list of changes a document already ",(0,r.kt)("em",{parentName:"p"},"has")," to the other peer, the recipient can then reply with their own changes they believe the sender is lacking. To reiterate because this was counter-intuitive: the receiver cannot determine which changes it needs by looking at the Bloom filter, only (estimate) what changes the sender needs."),(0,r.kt)("h3",{id:"false-positives"},"False positives"),(0,r.kt)("p",null,"Bloom filters encode data probabalistically. The Automerge Bloom filter implementation is tuned such that there is a 1% chance per change of mistakenly believing the other peer already has the change in question. When this occurs, the receiving peer will not see any result from applying those changes. Until all change dependencies are in place, the new changes will remain invisible. To resolve this, the next syncMessage will include a ",(0,r.kt)("inlineCode",{parentName:"p"},"need")," request which specifies particular changes by hash to send from the other peer."),(0,r.kt)("h3",{id:"shared-heads"},"Shared Heads"),(0,r.kt)("p",null,"To avoid constantly recalculating and retransmitting Bloom filters, the ",(0,r.kt)("inlineCode",{parentName:"p"},"syncState"),' tracks the "greatest common document" the two peers have in common. Every time changes are received and applied, we can safely skip adding those changes to any subsequent the Bloom filter. Thus, we simply begin adding changes to the Bloom filter at that point in the document history.'),(0,r.kt)("h3",{id:"bloom-filter-example"},"Bloom filter example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"a: [ a0, b0, a1, b1 ] + [ a2, a3 ]\nb: [ a0, b0, a1, b1 ] + [ b2, b3 ]\n")),(0,r.kt)("p",null,'In this example, we show data on two peers. If we imagine in some past synchronization exchange both peers synchronized and wound up with "shared heads" of ',(0,r.kt)("inlineCode",{parentName:"p"},"[a1, b1]"),'. This is the "greatest common document". To synchronize the two nodes, peer ',(0,r.kt)("inlineCode",{parentName:"p"},"a")," would encode their local changes ",(0,r.kt)("inlineCode",{parentName:"p"},"[a2, a3]")," into a Bloom filter and send them to ",(0,r.kt)("inlineCode",{parentName:"p"},"b"),"."),(0,r.kt)("p",null,"Upon receipt, ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," would check the Bloom filter for each of its local changes beginning with ",(0,r.kt)("inlineCode",{parentName:"p"},"b2"),". Once it found a change ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," was missing, it would assume all subsequent changes should be sent. Thus 99% of the time (as we noted, the Bloom filter is probabalistic), it would send all the changes ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," needed. The remaining 1% of the time, it would mistakenly not send ",(0,r.kt)("inlineCode",{parentName:"p"},"b2"),", but rather begin sending changes with ",(0,r.kt)("inlineCode",{parentName:"p"},"b3"),". In this case, upon receiving those changes, ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," would see that it was still missing the ",(0,r.kt)("inlineCode",{parentName:"p"},"b2")," dependency for ",(0,r.kt)("inlineCode",{parentName:"p"},"b3")," and explicitly request it. "),(0,r.kt)("h3",{id:"error-recovery"},"Error Recovery"),(0,r.kt)("p",null,"Finally, Automerge helps recover failed peer nodes by resetting the list of ",(0,r.kt)("inlineCode",{parentName:"p"},"sharedHeads")," in the document and beginning sync again from scratch. This can come in handy if one of the peers crashes after confirming data but before writing it to disk."),(0,r.kt)("p",null,"If the connection times out due to packet loss, when you reconnect, you should reset the sync state as follows, if you haven't already:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"for (let docId of Object.keys(syncStates[peer])) {\n  syncStates[peer][docId] = decodeSyncState(encodeSyncState(syncStates[peer][docId]))\n}\n")),(0,r.kt)("p",null,'This tells the sync protocol that the last message it sent may have been lost, and restarts the sync protocol from the last known "greatest common document".'),(0,r.kt)("h3",{id:"multiple-peers-multiple-documents"},"Multiple Peers, Multiple Documents"),(0,r.kt)("p",null,"The Automerge sync protocol behaves correctly when synchronizing with multiple peers at once, though specific implementation details will vary by domain. Synchronizing multiple documents is not currently supported by the protocol, and must be handled by the user at a layer above."),(0,r.kt)("h3",{id:"sequencing-network-communication"},"Sequencing Network Communication"),(0,r.kt)("p",null,"Many communication protocols require that only one of the two peers initiates the exchange. With Automerge this is not the case: messages between peers can interleave arbitrarily, though each peer's messages should be delivered in-order to the recipient."))}d.isMDXComponent=!0}}]);