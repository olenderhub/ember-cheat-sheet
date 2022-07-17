import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

import { trackedFunction } from 'ember-resources/util/function';

export default class Editable extends Component {
  code = trackedFunction(this, async () => {
    let { path, code } = this.args;

    if (code) return wrap(code);

    let response = await fetch(`/${path}`);
    let text = await response.text();

    return wrap(text);
  });

  get title() {
    return this.args.title ?? guidFor(this.code);
  }
}

function wrap(code) {
  const params = new URLSearchParams();

  let sample = '```gjs live\n' + code + '\n```';

  params.set('t', sample);

  return params.toString();
}
