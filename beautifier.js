if (document.body.childNodes.length === 1 &&
  document.body.children[0].nodeName === 'PRE' &&
  document.body.children[0].children.length === 0 &&
  document.head.children.length === 1 &&
  ddocument.head.children[0].rel === "stylesheet") {

  var pre = document.getElementsByTagName('pre')[0];
  js_code = pre.innerText;
  pre.innerText = "";
  var code = document.createElement("code");
  code.classList.add("javascript");
  pre.appendChild(code)
  var source_code = js_beautify(js_code);
  code.innerHTML = source_code;
  hljs.highlightBlock(code);
  document.body.style.backgroundColor = window.getComputedStyle(code).backgroundColor

}
