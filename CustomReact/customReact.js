const root = document.querySelector("#root");

const reactElement = {
    type : "a",
    props : {
        href: "https://google.com",
        target: "_blank" 
    },
    children: "Click me to visit Google!"
};

// CREATED HOW REACT HANDLES AND CREATES HTML ELEMENTS*****
// BUT THIS IS HECTIC AS WE ARE CREATING PROPS MANUALLY****

function customRender (reactElement,container)  {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute("href",reactElement.props.href);
    domElement.setAttribute("target",reactElement.props.target);

    container.appendChild(domElement)
}

// THIS IS BEST APPROACH AS WE ARE NOT MANUALLY 
// SETTING ATTRIBUTES 
function customRender(reactElement,container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop == "children") continue;
            domElement.setAttribute(prop,reactElement.props[prop]);
        
    }
    container.appendChild(domElement)
}




customRender(reactElement,root);