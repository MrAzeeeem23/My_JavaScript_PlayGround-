function SetRender(CostomComponent, container){
    const newElement = document.createElement(CostomComponent.name)
    newElement.innerHTML = CostomComponent.childern
    // newElement.setAttribute('href', CostomComponent.prop.href)
    // newElement.setAttribute('target', CostomComponent.prop.target)

    for (props in CostomComponent.prop) {
        if (props === "children" ) continue;
        newElement.setAttribute(props, CostomComponent.prop[props])
    }

    container.appendChild(newElement)
}

const CostomComponent = {
    name: 'a',
    prop: {
        target: "_blank",
        link: {
            href : "https:/google.com"
        }
    },
    childern: "Click me to open google!"
}
CostomComponent.prop.href = "https:/google.com"

const container = document.querySelector('#root');

const InputBox = {
    name: 'input',
    prop: {
        type: 'radio',
    },
    childern: "something"
}

SetRender(CostomComponent,container)
SetRender(InputBox,container)