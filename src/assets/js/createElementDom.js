

export const createElemDOM = (typeElem, classes, inner = "") => {
    const node = document.createElement(typeElem);
    if (classes) {
        node.className = classes;
    }

    if (inner) node.innerHTML = inner;
    return node;
};