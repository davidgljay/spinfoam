(this.webpackJsonpspinfoam=this.webpackJsonpspinfoam||[]).push([[0],{14:function(e,t,r){e.exports=r(25)},19:function(e,t,r){},20:function(e,t,r){},25:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(3),l=r.n(i),o=(r(19),r(20),r(4)),s=r(5),c=r(7),u=r(6),h=r(8),p=r(9),d=Math.sin,m=Math.cos,g=Math.PI,v=function(e,t){return[0,1,2,3,4,5].reduce((function(r,n){var a=g/180*(60*n);return r+" ".concat(e.x+t*m(a),",").concat(e.y+t*d(a))}),"")},f=function(e,t,r,n,a){return e===r[0]&&t===r[1]?Object(p.a)({},w.hexagon,{},w.active):Object(p.a)({},w.hexagon,{opacity:.02*n[e][t]})},y=function(e){var t=e.width,r=e.height,n=e.size,i=e.grid,l=e.active,o=e.trail;e.turns;return a.a.createElement("div",null,a.a.createElement("svg",{id:"visualization",width:t,height:r,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},i.map((function(e,t){return e.map((function(e,r){return o[t][r]>0&&a.a.createElement("polygon",{key:"".concat(t,",").concat(r),points:v({x:n*(t+1)*1.5,y:n*(t%2+1+1.75*(r+1))},n),style:f(t,r,l,o)})}))}))))},w={hexagon:{fill:"lightgrey",stroke:"purple",strokeWidth:2},active:{fill:"purple"}},E=function(e){function t(e){var r;return Object(o.a)(this,t),(r=Object(c.a)(this,Object(u.a)(t).call(this,e))).getshape=function(e){var t=r.props,n=t.width,a=t.height,i=[[0,a]],l=0;l=e.reduce((function(e){return l>e?e:l}),0);for(var o=0;o<e.length;o++)i.concat([a-e[o]/l*-1,n/100*o]);return i.map((function(e){return e.join(",")})).join(" ")},r}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.trailEntropyLog,r=e.width,n=e.height;return a.a.createElement("div",null,a.a.createElement("svg",{id:"entropGraph",width:r,height:n,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},a.a.createElement("polygon",{points:this.getshape(t),style:b.entropyGraph})))}}]),t}(n.Component),b={entropyGraph:{fill:"purple"}},k=r(36),x=function(e){function t(e){var r;return Object(o.a)(this,t),(r=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={timer:null,active:[r.props.size/2,r.props.size/2],grid:[],trail:[],turns:0,trailEntropyLog:[0],gridEntropy:0,bumpiness:1,checkSlider:!1,sliderTimer:null},r.transitions=[[-1,-1],[0,-1],[0,1],[1,1],[1,0],[-1,0],[0,0]],r.setgrid=function(e){for(var t=r.state.bumpiness,n=[],a=[],i=0,l=0;l<e;l++){n[l]=[],a[l]=[];for(var o=0;o<e;o++){n[l][o]=[],a[l][o]=0;for(var s=0,c=0;c<6;c++)n[l][o][c]=Math.pow(Math.random(),t),s+=n[l][o][c];for(c=0;c<6;c++)n[l][o][c]=n[l][o][c]/s,i+=n[l][o][c]*Math.log(n[l][o][c])}}r.setState({grid:n,trail:a,gridEntropy:i})},r.checkSlider=function(){var e=r.state,t=e.checkSlider,n=e.timer,a=r.props.size;t&&(clearInterval(n),r.setState({active:[r.props.size/2,r.props.size/2],turns:0,trailEntropyLog:[0],gridEntropy:0,checkSlider:!1}),r.setgrid(a),r.setState({timer:setInterval((function(){return r.jump()}),50)}))},r.jump=function(){for(var e,t=r.state,n=t.active,a=t.grid,i=t.trail,l=t.turns,o=t.trailEntropyLog,s=a[n[0]][n[1]],c=Math.random(),u=0,h=0;h<s.length;h++)if((u+=s[h])>c){e=h;break}var p=r.transitions[e],d=a.length,m=[(n[0]+p[0]+d)%d,(n[1]+p[1]+d)%d];if(i[m[0]][m[1]]+=1,l%100===1){var g=0;for(h=0;h<i.length;h++)for(var v=0;v<i[h].length;v++)g+=i[h][v]>0?i[h][v]/l*Math.log(i[h][v]/l):0;r.setState({trailEntropyLog:o.concat(g)})}r.setState({active:m,trail:i,turns:l+1})},r.handleSlider=function(e,t){r.setState({bumpiness:t,checkSlider:!0})},r}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.size;this.setgrid(t),this.setState({timer:setInterval((function(){return e.jump()}),50),sliderTimer:setInterval((function(){return e.checkSlider()}),500)})}},{key:"componentWillUnmount",value:function(){var e=this.state,t=e.timer,r=e.sliderTimer;clearInterval(t),clearInterval(r)}},{key:"render",value:function(){var e=this.state,t=e.active,r=e.grid,n=e.trail,i=e.trailEntropyLog,l=e.turns,o=e.bumpiness;return a.a.createElement("div",null,a.a.createElement("div",{style:S.header},a.a.createElement("h2",null,"A Model Evolutionary System"),a.a.createElement("div",{style:S.headerText},"The purple hex traverses a landscape with randomly defined probabilities.",a.a.createElement("br",null),'The landscape can be made "flat" (probabilities are similar) or "bumpy" (probabilities diverge).')),a.a.createElement("div",{style:S.sliderContainer},a.a.createElement("div",null,"Flat"),a.a.createElement("div",{style:S.slider},a.a.createElement(k.a,{className:"bumpinessSlider",value:o,"aria-labelledby":"Bumpiness",onChange:this.handleSlider,min:0,step:.1,max:10})),a.a.createElement("div",null,"Bumpy")),a.a.createElement(y,{width:650,height:650,size:7,active:t,grid:r,trail:n,turns:l}),i&&a.a.createElement(E,{width:800,height:100,trailEntropyLog:i}))}}]),t}(n.Component),S={header:{textAlign:"center",maxWidth:650,margin:40},headerText:{fontSize:16},sliderContainer:{display:"flex",alignItems:"center"},slider:{flex:1,margin:20}};var j=function(){return a.a.createElement(x,{size:50})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.cc2ecd9e.chunk.js.map