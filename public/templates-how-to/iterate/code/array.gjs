const anIterable = [1, 2, 3, 4];

<template>
  Iterating over an array <br>
  <br>
  {{#each anIterable as |item|}}
    Item: {{item}} <br>
  {{/each}}
</template>
