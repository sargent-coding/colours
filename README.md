# Sargent Coding Icons
These icons were originally created for Sargent Coding projects, but they're open for everyone to use now.

You can use the library via JSDelivr at https://cdn.jsdelivr.net/gh/sargent-coding/icons/icons.js

## How to use
The icons library has three ways of adding icons:

<sup>**Quick note:** Icons like `caret.right` and `font.family` are nested. These can be used as names too: `new Icon("caret.right")`</sup>

### Inline icons
You can add an inline icon in an HTML by placing something like:
```html
<saco-icon name="pencil"></saco-icon>
```

### Adding icons via Javascript
You also have ***two*** methods of adding icons using Javascript:

#### The `new` keyword
It's simpler to use the `new` keyword to make icons:
```javascript
let myNewIcon = new Icon("pencil");
document.body.append(myNameIcon);
```

#### The `document.createElement()` method
But, you can also create an element and set its `name` attribute:
```javascript
let myNewIcon = document.createElement("saco-icon");
myNewIcon.setAttribute("name", "pencil");
document.body.append(newNewIcon);
```

### Changing an icon
Changing an icon is really easy-- and you also have two ways to do it:

#### Setting the `name` property
You can set the `name` property to something else:
```javascript
myNewIcon.name = "javascript";
```

#### Settings the `name` attribute
or you can also use `Element.setAttribute()`:
```javascript
myNewIcon.setAttribute("name", "javascript");
```

### Changing the colours of an icon
Colours automatically change to the font colour using the really cool `currentColor` keyword!

## Credits
###### All icons were designed by @aetinx.

###### [Sargent Coding Icons](https://github.com/sargent-coding/icons/) by [Sargent Coding](https://saco.ml) is licensed under [CC BY-ND 4.0](http://creativecommons.org/licenses/by-nd/4.0/)

![image](https://user-images.githubusercontent.com/65425469/164231828-a7803d92-4b53-484f-8828-038b1af5bf6b.png)
