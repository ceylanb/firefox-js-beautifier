var pre = document.getElementsByTagName('pre')[0];
js_code = pre.innerText;
pre.innerText = "";
var code = document.createElement("code");
code.classList.add("javascript");
pre.appendChild(code)
var source_code = js_beautify(js_code);
code.innerText = source_code;
hljs.configure({useBR: true});
hljs.highlightBlock(code);
document.body.style.backgroundColor = window.getComputedStyle(code).backgroundColor
