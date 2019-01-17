# jsts-node

**Helper functions for working with JSTS templates in Node**

## About

A set of helper functions for working with JSTS templates as files, processing, and outputting interpolated templates as other files.

By using JavaScript Template Strings for templating content in node you can make use of any variables JavaScript knows about, make use of JavaScript's built-in logic for templating any other language you're working with, and even write plugins and mixins that help you extend your templates all in 100% vanilla JavaScript.

## Usage

This package is provided in CommonJS module format and is intended to be run in Node. You can download it here from Github, or grab a copy from npm:

### Installing from npm

```
npm install jsts-node
```

## Functions

### Load

```js
load(path)
```

- `path` a path to one or more files which should be read as JSTS templates

Use `load()` to load the contents of files in your filesystem as JSTS templates. This function returns an array containing strings of file contents matching the `path` supplied to the function.

### Process

```js
process(files, environment)
```

- `files` a string or array of strings containing JSTS templates to be interpolated
- `environment` any object containing any objects you wish to be available to the template during interpolation

This function accepts an array of JSTS templates and any JavaScript objects you wish to be made available to your JSTS template during its interpolation and sends them to be processed by the `jsts-engine` package. The return from this function is the return from processing the templates with the `jsts-engine` package, an array containing the final interpolated template as well as an `output` object which isn't used by the other functions in this plugin.

### Output

```js
output(files, filename)
```

- `files` a string or array of strings containing interpolated templates
- `filename` a filename to write to

The `output()` function accepts strings to be written to a file, and a filename to write them to.

### Compile

```js
compile(path, filename, environment)

// equivalent to
output(process(load(filename), environment), path)
```

- `path` a path to one or more files which should be read as JSTS templates
- `filename` a filename to write to
- `environment` any object containing any objects you wish to be available to the template during interpolation

This function is a `load`-`process`-`output` workflow expressed at a higher level, where you only supply the path of JSTS template(s) to be read, a filename to write the result to, and any JS objects you want available to the template(s) during interpolation.