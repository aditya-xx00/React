
//this function takes 2 element what to inject and where to inject and render them on page
function customRender(reactElement,container){
   /* const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)//this line appends domElement in conatiner which we passed in function
    */
    
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    //use for in loop to set any no. of attributes
    for(const prop in reactElement.props){
        if(prop=='children')  continue;
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(domElement)
}
//this is how's react see any element tags like <p>,<h1> etc. in custom render method
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target: '_blank'
    },
    children:'Click me to visit google'
}
const mainContainer=document.querySelector("#root" );

customRender(reactElement,mainContainer)