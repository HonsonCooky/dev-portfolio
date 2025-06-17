# Assets

The assets folder is designed for static files that will be processed by Webpack. You'll find the typical static `.css`,
`.js` and `.png` files in this folder - global elements that are not tightly coupled to an element.

# Data Files

You will also find `data-{name}.js` files in this folder. These are JavaScript files containing objects holding variable
data. `.vue` files will present this data, but the data is likely to change over time - so the presentation of this data
doesn't assume it's static.

For example, as I change jobs or create new blogs, I will update the data in these JS files, without having to alter my
UI.
