export const makeDOMwithProperties = (domType, propertyMap) => {
    // domType : div, a, li...
    // propertyMap : {"className" : "product-card", ...}
    // Object.keys(propertyMap) -> ["className"]

    const dom = document.createElement(domType);
    Object.keys(propertyMap).forEach((key) => {
        dom[key] = propertyMap[key];
    });

    return dom;
}