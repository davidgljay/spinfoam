(this.webpackJsonpspinfoam=this.webpackJsonpspinfoam||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),a=n(8),o=n.n(a),c=(n(14),n(15),n(1)),s=n(2),l=n(4),u=n(3),h=n(5),p=n(6),g=Math.sin,v=Math.cos,f=Math.PI,m=function(t,e){return[0,1,2,3,4,5].reduce((function(n,r){var i=f/180*(60*r);return n+" ".concat(t.x+e*v(i),",").concat(t.y+e*g(i))}),"")},d=function(t,e,n,r,i){return t===n[0]&&e===n[1]?Object(p.a)({},y.hexagon,{},y.active):Object(p.a)({},y.hexagon,{opacity:.02*r[t][e]})},w=function(t){var e=t.width,n=t.height,r=t.size,a=t.grid,o=t.active,c=t.trail;t.turns;return i.a.createElement("div",null,i.a.createElement("svg",{id:"visualization",width:e,height:n,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},a.map((function(t,e){return t.map((function(t,n){return c[e][n]>0&&i.a.createElement("polygon",{key:"".concat(e,",").concat(n),points:m({x:r*(e+1)*1.5,y:r*(e%2+1+1.75*(n+1))},r),style:d(e,n,o,c)})}))}))))},y={hexagon:{fill:"lightgrey",stroke:"purple",strokeWidth:2},active:{fill:"purple"}},E=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).getshape=function(t){var e=n.props,r=e.width,i=e.height,a=[[0,i]],o=0;o=t.reduce((function(t){return o>t?t:o}),0);for(var c=0;c<t.length;c++)a.concat([i-t[c]/o*-1,r/100*c]);return a.map((function(t){return t.join(",")})).join(" ")},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props,e=t.trailEntropyLog,n=t.width,r=t.height;return i.a.createElement("div",null,i.a.createElement("svg",{id:"entropGraph",width:n,height:r,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},i.a.createElement("polygon",{points:this.getshape(e),style:j.entropyGraph})))}}]),e}(r.Component),j={entropyGraph:{fill:"purple"}},k=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={timer:null,active:[n.props.size/2,n.props.size/2],grid:[],trail:[],turns:0,trailEntropyLog:[0],gridEntropy:0},n.transitions=[[-1,-1],[0,-1],[0,1],[1,1],[1,0],[-1,0],[0,0]],n.setgrid=function(t){for(var e=[],r=[],i=0,a=0;a<t;a++){e[a]=[],r[a]=[];for(var o=0;o<t;o++){e[a][o]=[],r[a][o]=0;for(var c=0,s=0;s<7;s++)e[a][o][s]=Math.random(),c+=e[a][o][s];for(s=0;s<7;s++)e[a][o][s]=e[a][o][s]/c,i+=e[a][o][s]*Math.log(e[a][o][s])}}n.setState({grid:e,trail:r,gridEntropy:i})},n.jump=function(){for(var t,e=n.state,r=e.active,i=e.grid,a=e.trail,o=e.turns,c=e.trailEntropyLog,s=i[r[0]][r[1]],l=Math.random(),u=0,h=0;h<s.length;h++)if((u+=s[h])>l){t=h;break}var p=n.transitions[t],g=i.length,v=[(r[0]+p[0]+g)%g,(r[1]+p[1]+g)%g];if(a[v[0]][v[1]]+=1,o%100===1){var f=0;for(h=0;h<a.length;h++)for(var m=0;m<a[h].length;m++)f+=a[h][m]>0?a[h][m]/o*Math.log(a[h][m]/o):0;n.setState({trailEntropyLog:c.concat(f)})}n.setState({active:v,trail:a,turns:o+1})},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.size;this.setgrid(e),this.setState({timer:setInterval((function(){return t.jump()}),50)})}},{key:"componentWillUnmount",value:function(){this.state.timer()}},{key:"render",value:function(){var t=this.state,e=t.active,n=t.grid,r=t.trail,a=t.trailEntropyLog,o=t.turns;return i.a.createElement("div",null,i.a.createElement(w,{width:800,height:800,size:7,active:e,grid:n,trail:r,turns:o}),a&&i.a.createElement(E,{width:800,height:100,trailEntropyLog:a}))}}]),e}(r.Component);var b=function(){return i.a.createElement(k,{size:50})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},9:function(t,e,n){t.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.236a85b8.chunk.js.map