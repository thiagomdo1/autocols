# Autocols

## Automatically hide table columns when there is not enough space.

## Installation

```sh
npm i autocols
```

## Usage

Import Autocols:

```js
import "autocols";
```

Or add it via script tag:

```html
<script src="node_modules/autocols/autocols.min.js"></script>
```

Add "autocols" class to table elements:

```html
<table class="autocols">...</table>
```

Create an instance to initialize Autocols:

```js
new Autocols();
```

To force keeping columns add "data-keepindexes" attribute with comma separated indexes:

```html
<table class="autocols" data-keepindexes="2,3">...</table>
```
