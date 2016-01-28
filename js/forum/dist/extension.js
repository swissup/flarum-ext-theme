System.register('swissup/theme/main', ['flarum/extend', 'flarum/components/HeaderPrimary'], function (_export) {
  'use strict';

  var extend, HeaderPrimary;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumComponentsHeaderPrimary) {
      HeaderPrimary = _flarumComponentsHeaderPrimary['default'];
    }],
    execute: function () {

      app.initializers.add('swissup-theme', function () {
        extend(HeaderPrimary.prototype, 'items', function (items) {
          items.add('swissup', m(
            'a',
            { href: 'http://swissuplabs.com', className: 'Button Button--link' },
            'Back to the main site'
          ));
        });
      });
    }
  };
});