CSS

Cascading Style Sheets

selector {
    property1: value;
    property2: value;
}

1. Inline CSS
2. Internal CSS
3. External CSS

Inline style overrides internal style.

Concepts

1. Inheritance

-> Inheritance allows child elements to inherit styles from parent elements.
-> Requires knowledge of classes and id to know Inheritance

2. Rule Order

3. Style level hierarchy

-> Universal Selector -> lowest specificity but applies to all the elements initially.
-> Class selector -> higher than universal selector
-> Id selector -> higher than class selectors.

id > class > universal

4. Specificity 

which rule takes precedecnce when multiple rules are applied to the same element.

CSS Selectors

p {
    color: red
}

Types of Selectors

- Element Selector
- ID Selector
- Class Selector
- Universal Selector
- Group Selector
- Attribute Selector

Element Selector

p, div, h1, span {
    color: red
}

ID Selector

# -> id selector is unique and selects one unique element

#id {
    color: red
}

Class Selector

.class {
    color: red
}

Universal Selector

* {
    color: red
}

Group Selector

h1 p {
    color: red
}

Attribute Selector

CSS Fonts

<p class=class1></p>
class=class2

p.class1 -> Target p elements with a specific class names class

p[class] -> Target p elements with any class attribute
p[class=class1]