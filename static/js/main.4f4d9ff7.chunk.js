(this["webpackJsonptic-tac-toe-react"]=this["webpackJsonptic-tac-toe-react"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(7),l=a.n(s),o=(a(15),a(9)),i=a(1),c=a(2),u=a(4),m=a(3);var h=function(e){return n.a.createElement("button",{className:"square",onClick:e.onClick},e.value)},d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"renderSquare",value:function(e){var t=this;return n.a.createElement(h,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),n.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),n.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),a}(n.a.Component),v=function(){return n.a.createElement("h1",null,"Tic Tac Toe made by ",n.a.createElement("a",{href:"https://github.com/zhongjis"},"Zhongjie Shen"))};function f(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var r=Object(o.a)(t[a],3),n=r[0],s=r[1],l=r[2];if(e[n]&&e[n]===e[s]&&e[n]===e[l])return e[n]}return null}var E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={history:[{squares:Array(9).fill(null),move:[-1,-1]}],stepNumber:0,xIsNext:!0},r}return Object(c.a)(a,[{key:"handleClick",value:function(e){var t=Math.floor(e/3),a=e%3,r=this.state.history.slice(0,this.state.stepNumber+1),n=r[r.length-1].squares.slice();f(n)||n[e]||(n[e]=this.state.xIsNext?"X":"O",this.setState({history:r.concat([{squares:n,move:[a,t]}]),stepNumber:r.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,a=this.state.history,r=a[this.state.stepNumber],s=f(r.squares),l=a.map((function(e,a){var r=e.move[0],s=e.move[1],l=a?"Go to move #"+a+" ("+r+", "+s+")":"Go to game start";return n.a.createElement("li",{key:a},n.a.createElement("button",{onClick:function(){return t.jumpTo(a)}},l))}));return e=s?"Winner: "+s:"Next player: "+(this.state.xIsNext?"X":"O"),n.a.createElement("div",{className:"game"},n.a.createElement("div",{className:"game-title"},n.a.createElement(v,null)),n.a.createElement("div",{className:"game-body"},n.a.createElement("div",{className:"game-board"},n.a.createElement(d,{squares:r.squares,onClick:function(e){return t.handleClick(e)}})),n.a.createElement("div",{className:"game-info"},n.a.createElement("div",null,e),n.a.createElement("ol",null,l))))}}]),a}(n.a.Component),p=a(8),b=function(e){return e.listTodo.map((function(t,a){var r,s=Object(p.a)(e.completed);try{for(s.s();!(r=s.n()).done;){if(r.value===a)return n.a.createElement("li",{key:a},n.a.createElement("s",null,t))}}catch(l){s.e(l)}finally{s.f()}return n.a.createElement("li",{key:a},t)}))},y=function(e){return n.a.createElement("div",{className:"todo-list"},n.a.createElement("h2",null,"TODO"),n.a.createElement("ol",null,n.a.createElement(b,{listTodo:["Display the location for each move in the format (col, row) in the move history list.","Bold the currently selected item in the move list.","Rewrite Board to use two loops to make the squares instead of hardcoding them.","Add a toggle button that lets you sort the moves in either ascending or descending order.","When someone wins, highlight the three squares that caused the win.","When no one wins, display a message about the result being a draw."],completed:[0]})))},N=function(){return n.a.createElement("div",{className:"container"},n.a.createElement(E,null),n.a.createElement(y,null))};l.a.render(n.a.createElement(N,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.4f4d9ff7.chunk.js.map