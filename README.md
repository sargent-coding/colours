# Sargent Coding Colours
You can use the library via JSDelivr at https://cdn.jsdelivr.net/gh/sargent-coding/colours/colours.js

## Types of colours
There are 3 supported colour types: `HEX`, `RGBA` and `HSLA`.

### Hex colours
When making a hex colour, you can add the prefixes `#` or `0x`, but hex prefixes aren't necessary. Hex colours can also be 3, 4, 6 or 8 digits long (not including the prefix).

### RGBA and HSLA colours
When making a RGBA or HSLA colour, you should note that the alpha (transparency) parameter isn't necessary. Also, the alpha parameter uses the unit interval (0 to 1) instead of a percentage.

## How to use
### Making a colour
You can make a colour by using the `new` keyboard:
```js
new HEX("0x17f")
```

### Getting the CSS value of a colour
Getting the CSS value of a colour is really easy because every colour has a value getter property.
```js
new HSLA(214, 100, 53).value // Returns hsla(214, 100, 53, 1)
```

### Converting colours
You can convert colours by making a new colour with the old colour as the parameter. The colour classes are smart and can differentiate colours (1 parameter) from the typical parameters.
```js
new RGBA(new HEX("#1177ff")).value // Returns rgba(17, 119, 255, 1)
```

### Editing a colour
All colours but HEX colours have a property for each letter that you can edit.
```js
let newColour = new HSLA(214, 100, 53)
newColour.h = 69 // newColour is now {a: 1, h: 69, l: 53, s: 100}
  ```

## Credits
###### Made by @aetinx.

###### [Sargent Coding Colours](https://github.com/sargent-coding/colours/) by [Sargent Coding](https://saco.ml) is licensed under [CC BY-ND 4.0](http://creativecommons.org/licenses/by-nd/4.0/)

![CC BY-ND](https://licensebuttons.net/l/by-nd/4.0/88x31.png)
