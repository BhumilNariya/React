function customRender(ReactElement,container){

    // const domElement=document.createElement(ReactElement.type);
    // domElement.innerHTML=ReactElement.children
    // domElement.setAttribute('href',ReactElement.props.href)
    // domElement.setAttribute('target',ReactElement.props.target)

    // Container.appendChild(domElement)

    const domElement=document.createElement(ReactElement.type);
    domElement.innerHTML=ReactElement.children;
    for (const prop in ReactElement.props) {
        if (prop ==='children') continue;
        domElement.setAttribute(prop,ReactElement.props[prop])
    
    }
    container.appendChild(domElement)


}
const ReactElement={
    type: 'a',
    props:{
        href: 'https://google.com',
        target:'_blank',
    },
    children:"click me to visit google!!"
}
//how js convert in to the react endof the -- react understand this syntax no understand the function  syntax..

const mainContainer=document.getElementById("root");
customRender(ReactElement,mainContainer)
