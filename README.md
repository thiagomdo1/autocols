# Autocols

## Automatically hide table columns when there is not enough space.

[![npm version](https://badge.fury.io/js/autocols.svg)](https://badge.fury.io/js/autocols)

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
<script src="node_modules/autocols/autocols.js"></script>
```

Add "autocols" class to table elements:

```html
<table class="autocols">...</table>
```

Create an instance to initialize Autocols:

```js
new window.Autocols();
```

To force keeping columns add "data-keepindexes" attribute with comma separated indexes:

```html
<table class="autocols" data-keepindexes="2,3">...</table>
```
