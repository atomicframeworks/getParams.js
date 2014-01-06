# getParams.js
Get a query string parameter value, an object containing all parameters and values, or a subset in object or array form.

## Installation
Include the source script in your html <br>
```html
<script src="getParams.js"></script>
```
This script will create the getParams function that can be used to get a single parameter value, a subset of parameters as either an array or object, or an object containg the keys and values for all params.

## Usage

Example URL `http://www.google.com?a=1&b=test&c`

##### No argument
Calling getParams() with no argument will return an object containing key->value pairs for each query string parameter.
If one of the parameters has no value it's value will return as undefined.

```js
var allParams = getParams();
```

allParams will equal:
```js
{
    a: 1,
    b: 'test',
    c: undefined
}
```

##### Array as argument
Passing an array as the argument will return an array with containg the values for each parameter in the argument array.
If one of the parameters does not exist it's value will return as null.

```js
var paramArray = getParams(['a', 'b', 'c', 'd']);
```

paramArray will equal:
```js
[1, 'test', undefined, null]
```

##### Object as argument
Passing an object as the argument will return an object with the parameters values set for the associated key.
If one of the parameters does not exist it's value will return as null.

```js
var paramObject = getParams({
    a: 0,
    b: 1,
    c: 'c',
    d: true
};
```

paramObject will equal:
```js
{
    a: 1,
    b: 'test', 
    c: undefined, 
    d: null]
```

## License 
getParams.js is released under the MIT license <br>
[www.opensource.org/licenses/MIT](www.opensource.org/licenses/MIT)
