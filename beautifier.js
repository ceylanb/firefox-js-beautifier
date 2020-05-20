var content_type = document.contentType;

function swap(node1, node2) {
    const afterNode2 = node2.nextElementSibling;
    const parent = node2.parentNode;
    node1.replaceWith(node2);
    parent.insertBefore(node1, afterNode2);
}

function test(elements, parent_node) {
	for(i = 0; i < elements.length; i++) {
		var element = elements[i]

		var element_tag = element.tagName.toLowerCase()
		
		var childs = element.getElementsByTagName("*");
		if (childs.length > 0) {
			var parent_inner = element.cloneNode()
			parent_node.appendChild(parent_inner)
			test(childs, parent_inner)
		} else {
			if (element_tag == "script") {
				console.log(element)
				parent_node.appendChild(element);
			}else {
				var pre = document.createElement("pre");
				pre.innerText = element.outerHTML;
				parent_node.appendChild(pre);
				console.log(element)
			}
		}
	}
}

if (content_type.includes("javascript")) {
	var pre = document.getElementsByTagName('pre')[0];
	js_code = pre.innerText;
	pre.innerText = "";
	var code = document.createElement("code");
	code.classList.add("javascript");
	pre.appendChild(code)
	var source_code = js_beautify(js_code);
	code.innerText = source_code;
	hljs.highlightBlock(code);
	document.body.style.backgroundColor = window.getComputedStyle(code).backgroundColor
} else {
	/*var pre = document.createElement("pre");
	document.body.appendChild(pre);
	document.documentElement.insertBefore(pre, document.documentElement.firstChild);
	var scripts = document.getElementsByTagName("script");
	*/
	var dom = document.documentElement
	var clone = dom.cloneNode()
	var elements = dom.getElementsByTagName("*");
	test(elements, clone)
	dom.innerHTML = ""	
	//document.documentElement = clone 
	/*for(i = 0; i < elements.length; i++) {
		element = elements[i]
		element_tag = element.tagName.toLowerCase()
		if (element_tag == "script") {
			//console.log(element)
			//document.body.appendChild(element);
		}else {
			var pre = document.createElement("pre");
			console.log(element)
			pre.innerText = element.outerHTML;
			document.body.appendChild(pre);
		}
	}*/
	/**for(i = 0; i < scripts.length; i++) {
		var wrapper = document.createElement('code'); 
		wrapper.classList.add("javascript");
		wrapper.appendChild(scripts[i].cloneNode(true)); 
		scripts[i].innerHTML = js_beautify(scripts[i].innerText)
		scripts[i].parentNode.replaceChild(wrapper, scripts[i]);
		hljs.highlightBlock(wrapper);
		alert(scripts[i].innerText)
	}**/

	//source_code = document.documentElement.innerHTML
	//pre.innerText = source_code
	//document.documentElement.innerHTML = ""
	//document.documentElement.innerHTML = ""
	//var pre = document.createElement("pre");
	//pre.innerText = source_code
	//document.body.appendChild(pre);
}
