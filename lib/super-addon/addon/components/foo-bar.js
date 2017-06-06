import Ember from 'ember';
import layout from 'super-addon/templates/components/foo-bar';

const { Component } = Ember;

export default Component.extend({
  layout,

  foo: 1337,
  bar: 42
});
