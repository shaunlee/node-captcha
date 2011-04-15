var Canvas = require('canvas'),
    fs = require('fs');

const CHARACTERS = '3456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ3456789';

var Captcha = exports.Captcha = function(length) {
  this._length = length || 5;
  this._width = 90;
  this._height = 30;

  this._canvas = new Canvas(this._width, this._height),
  this._ctx = this._canvas.getContext('2d'),

  //this._code = "";

  this.refresh();
}

Captcha.prototype.refresh = function() {
  this._code = "";
  while (this._code.length < this._length)
    this._code += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];

  this._ctx.fillStyle = "#efe";
  this._ctx.fillRect(0, 0, this._width, this._height);
  this._ctx.font = "bold 22px purisa";
  this._ctx.lineWidth = 1;
  this._ctx.textAlign = "center";
  this._ctx.strokeStyle = "#080";
  this._ctx.strokeText(this._code, this._width / 2 - 2, this._height / 2 - 2 + 10);
  this._ctx.save();
}

Captcha.prototype.toString = function() {
  return this._code;
}

Captcha.prototype.toDataURL = function() {
  return this._canvas.toDataURL();
}

Captcha.prototype.check = function(dest) {
  return dest.toLowerCase() === this._code.toLowerCase();
}

if (!module.parent) {
  var c = new Captcha();
  var c2 = new Captcha(3);
  var c3 = new Captcha(6);

  [c, c2, c3].forEach(function(o) {
    var i = 0;
    do {
      console.log('<img src="', o.toDataURL(), '">', o.toString());
      o.refresh();
    } while (i++ < 10);

    console.log('<br>');
  });
}

