function customRender(reactElement,container){
    // const domElemnt=document.createElement(reactElement.type)
    // domElement.innerHTML=reactElement.children
    // domElement.setAttribute('href',reactElement.props.hreaf)
    // domElement.setAttribute('target',reactElement.props.target)

    // container.appendChild(domElement)

    const domElemnt=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for(const prop in reactElement.props){
        if(prop=='children') continue;
        domElemnt.setAttribute(prop,reactElement.props[props])
    }
    container.appendChild(domElent)
}

const reactElement={
    type: 'a',
    props:{
        href:'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}


const mainContainer = document.querySelector('#root')

customFRender(reactElement, mainContainer)