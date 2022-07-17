let anObject = { foo: '2', bar: '3', baz: '4' };

<template>
  Iterating over an an object<br>
  <br>

  {{#each-in anObject as |key value|}}
    {{key}} : {{value}} <br>
  {{/each-in}}
</template>
