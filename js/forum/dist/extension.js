System.register('swissup/theme/main', ['flarum/extend', 'flarum/components/HeaderPrimary', 'flarum/components/HeaderSecondary'], function (_export) {
  'use strict';

  var extend, HeaderPrimary, HeaderSecondary;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumComponentsHeaderPrimary) {
      HeaderPrimary = _flarumComponentsHeaderPrimary['default'];
    }, function (_flarumComponentsHeaderSecondary) {
      HeaderSecondary = _flarumComponentsHeaderSecondary['default'];
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

        extend(HeaderSecondary.prototype, 'items', function (items) {
          items.remove('signUp');
        });
      });
    }
  };
});