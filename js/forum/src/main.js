import { extend } from 'flarum/extend';
import HeaderPrimary from 'flarum/components/HeaderPrimary';

app.initializers.add('swissup-theme', function() {
  extend(HeaderPrimary.prototype, 'items', function(items) {
    items.add(
      'swissup',
      <a href="http://swissuplabs.com" className="Button Button--link">
        Back to the main site
      </a>
    );
  });
});
