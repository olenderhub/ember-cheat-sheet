let anObject = { foo: '2', bar: '3', baz: '4' };
let anArray = [1, 2, 3, 4];

<template>
  Iterating over an array <br>
  {{#each anArray as |item|}}
    Item: {{item}} <br>
  {{/each}}

  Iterating over an an object<br>
  {{#each-in anObject as |key value|}}
    {{key}} : {{value}} <br>
  {{/each-in}}
</template>
