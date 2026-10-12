// Tesseract worker entry. Artifact hosting cannot serve .gz files, so the
// language data ships as base64 text; answer Tesseract's request for
// eng.traineddata.gz by decoding that file, then load the real worker.
(function () {
  var base = self.location.href.replace(/[^/]*$/, '');
  var realFetch = self.fetch.bind(self);
  self.fetch = function (input, init) {
    var url = typeof input === 'string' ? input : input && input.url;
    if (url && /\/eng\.traineddata\.gz$/.test(url)) {
      return realFetch(base + 'eng.traineddata.gz.b64.txt').then(function (r) {
        if (!r.ok) return r;
        return r.text().then(function (b64) {
          var bin = atob(b64.trim());
          var bytes = new Uint8Array(bin.length);
          for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
          return new Response(bytes);
        });
      });
    }
    return realFetch(input, init);
  };
  importScripts(base + 'worker.min.js');
})();
