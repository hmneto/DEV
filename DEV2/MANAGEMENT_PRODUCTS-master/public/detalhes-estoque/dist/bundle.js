!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n=window.location.href,o=new URL(n).searchParams.get("id");document.getElementById("id_da_peca").value=o,document.getElementById("editar").addEventListener("click",function(){window.location="/editar-estoque/?id="+o}),fetch(`/estoque/${o}`).then(function(e){return console.log(e),e.text()}).then(function(e){if(JSON.parse(e)[0]){let{id:t,nome_da_peca:n,quantidade:o,preco:r,porcentagem:d}=JSON.parse(e)[0];document.getElementById("nome_da_peca").innerHTML=n,document.getElementById("quantidade").innerHTML=o,document.getElementById("id").innerHTML=t,document.getElementById("preco").innerHTML=r,document.getElementById("porcentagem").innerHTML=d,document.getElementById("vendaValor").innerHTML=r*d/100+r}}),fetch(`/imagem/${o}`).then(function(e){return e.text()}).then(function(e){a=JSON.parse(e);let t=document.getElementById("imagens");a.forEach(e=>{let n=document.createElement("img"),o=document.createElement("button");o.textContent="apagar imagem",o.style.color="black",o.style.backgroundColor="red",o.addEventListener("click",function(){5869==prompt("senha")&&fetch("/imagem/"+e.id,{method:"delete"}).then(function(e){console.log(e),window.location.reload()})}),n.src=e.url,n.addEventListener("click",function(){window.location=e.url}),n.width=300,t.appendChild(n),t.appendChild(o)})}),asd=document.getElementById("apagar"),asd.addEventListener("click",function(){5869==prompt("senha")&&fetch(`/estoque/${o}`,{method:"delete"}).then(function(e){return e.text()}).then(function(e){window.location="/lista-estoque/"})})}]);