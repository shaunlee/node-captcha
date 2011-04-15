# node-captcha - Captcha maker

  Captcha maker for nodejs

## Dependences

  - node-canvas

## Examples

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

