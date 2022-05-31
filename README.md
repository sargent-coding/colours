# Sargent Coding Colours
You can use the library via JSDelivr at https://cdn.jsdelivr.net/gh/sargent-coding/colours/colours.js

## Types of colours
There are 3 supported colour types: `HEX`, `RGBA` and `HSLA`.

### Hex colours
When making a hex colour, you can add the prefixes `#` or `0x`, but hex prefixes aren't necessary. Hex colours can also be 3, 4, 6 or 8 digits long (not including the prefix).

### RGBA and HSLA colours
When making a RGBA or HSLA colour, you should note that the alpha (transparency) parameter isn't necessary.

## How to use
### Making a colour
You can make a colour by using the `new` keyboard:
```js
new HEX("0x17f")
```

### Getting the CSS value of a colour
Getting the CSS value of a colour is really easy because every colour has a value getter property.
```js
new HSLA(214, 100, 53) // Returns hsla(214, 100, 53, 1)
```

### Converting colours
You can convert colours by making a new colour with the old colour as the parameter. The colour classes are smart and can differentiate colours (1 parameter) from the typical parameters.
```js
new RGBA(new HEX("#1177ff")).value // Returns rgba(17, 119, 255, 1)
```

## Credits
###### Made by @aetinx.

###### [Sargent Coding Colours](https://github.com/sargent-coding/colours/) by [Sargent Coding](https://saco.ml) is licensed under [CC BY-ND 4.0](http://creativecommons.org/licenses/by-nd/4.0/)

![image](https://user-images.githubusercontent.com/65425469/164231828-a7803d92-4b53-484f-8828-038b1af5bf6b.png)
