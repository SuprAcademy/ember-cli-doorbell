/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-doorbell',
  contentFor: function(type, config) {
    var apiKey = config.APP.DOORBELL_APIKEY;
    var buttonId = config.APP.DOORBELL_BUTTONID;

    if (apiKey && type === 'body-footer') {
      var script = "<script type=\"text/javascript\">window.doorbellOptions = {appKey: '";
      script = script + apiKey;
      script = script + "'};(function(w, d, t) {var hasLoaded = false;function l() { if (hasLoaded) { return; } hasLoaded = true; window.doorbellOptions.windowLoaded = true; var g = d.createElement(t);g.id = 'doorbellScript';g.type = 'text/javascript';g.async = true;g.src = 'https://embed.doorbell.io/button/" + buttonId +"?t='+(new Date().getTime());(d.getElementsByTagName('head')[0]||d.getElementsByTagName('body')[0]).appendChild(g); }if (w.attachEvent) { w.attachEvent('onload', l); } else if (w.addEventListener) { w.addEventListener('load', l, false); } else { l(); }if (d.readyState == 'complete') { l(); }}(window, document, 'script'));</script>";

      return script;
    }
  }
};
