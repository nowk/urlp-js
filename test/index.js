/* jshint node: true, esnext: true */
/* global describe:false, it: false  */
"use strict";

let assert = require("chai").assert;
let match = require("..");

describe("urlp", function() {
  it("returns false if urls do not match", function() {
    [
      ["/foo", "/bar"],
      ["/foo", "/foos"],
      ["/foo/:bar", "/foo/bar/baz"],
    ].forEach(function(v) {
      let m = match(v[0], v[1]);
      assert.isFalse(m.match);
    });
  });

  it("returns true for exact url matches", function() {
    [
      ["/foo", "/foo"],
      ["/bars", "/bars"],
    ].forEach(function(v) {
      let m = match(v[0], v[1]);
      assert.isTrue(m.match);
    });
  });

  it("returns named params", function() {
    [
      ["/posts/:id", "/posts/123", {id: "123"}],
      ["/posts/:post_id/comments/:id", "/posts/123/comments/456", {post_id: "123", id: "456"}],
    ].forEach(function(v) {
      let m = match(v[0], v[1]);
      assert.isTrue(m.match);
      assert.deepEqual(m.params, v[2]);
    });
  });
});
