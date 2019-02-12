'use strict';

define('image-app/tests/lint/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/image.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/image.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/photo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/photo.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/post.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/typicode.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/typicode.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('models/home.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/home.js should pass ESLint\n\n');
  });

  QUnit.test('models/image.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/image.js should pass ESLint\n\n');
  });

  QUnit.test('models/photo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/photo.js should pass ESLint\n\n');
  });

  QUnit.test('models/photos.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/photos.js should pass ESLint\n\n');
  });

  QUnit.test('models/post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/post.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass ESLint\n\n13:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('routes/image.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/image.js should pass ESLint\n\n9:3 - Unexpected \'debugger\' statement. (no-debugger)\n10:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n14:30 - \'model\' is defined but never used. (no-unused-vars)\n15:3 - Unexpected \'debugger\' statement. (no-debugger)');
  });

  QUnit.test('routes/photo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/photo.js should pass ESLint\n\n');
  });

  QUnit.test('routes/photos.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/photos.js should pass ESLint\n\n');
  });

  QUnit.test('routes/post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/post.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/image.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'serializers/image.js should pass ESLint\n\n7:3 - Unexpected console statement. (no-console)');
  });

  QUnit.test('serializers/photo.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'serializers/photo.js should pass ESLint\n\n7:3 - Unexpected console statement. (no-console)');
  });

  QUnit.test('serializers/post.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'serializers/post.js should pass ESLint\n\n7:3 - Unexpected console statement. (no-console)');
  });
});
define('image-app/tests/lint/templates.template.lint-test', [], function () {
  'use strict';

  QUnit.module('TemplateLint');

  QUnit.test('image-app/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'image-app/templates/application.hbs should pass TemplateLint.\n\nimage-app/templates/application.hbs\n  1:1  error  Incorrect indentation for `<div>` beginning at L1:C1. Expected `<div>` to be at an indentation of 0, but was found at 1.  block-indentation\n  24:6  error  Incorrect indentation for `div` beginning at L1:C1. Expected `</div>` ending at L24:C6 to be at an indentation of 1 but was found at 0.  block-indentation\n  2:1  error  Incorrect indentation for `<nav>` beginning at L2:C1. Expected `<nav>` to be at an indentation of 3 but was found at 1.  block-indentation\n  23:0  error  Incorrect indentation for `{{outlet}}` beginning at L23:C0. Expected `{{outlet}}` to be at an indentation of 3 but was found at 0.  block-indentation\n  3:1  error  Incorrect indentation for `<div>` beginning at L3:C1. Expected `<div>` to be at an indentation of 3 but was found at 1.  block-indentation\n  4:1  error  Incorrect indentation for `<div>` beginning at L4:C1. Expected `<div>` to be at an indentation of 3 but was found at 1.  block-indentation\n  13:1  error  Incorrect indentation for `<div>` beginning at L13:C1. Expected `<div>` to be at an indentation of 3 but was found at 1.  block-indentation\n  5:1  error  Incorrect indentation for `<button>` beginning at L5:C1. Expected `<button>` to be at an indentation of 3 but was found at 1.  block-indentation\n  11:1  error  Incorrect indentation for `{{#link-to}}` beginning at L11:C1. Expected `{{#link-to}}` to be at an indentation of 3 but was found at 1.  block-indentation\n  6:1  error  Incorrect indentation for `<span>` beginning at L6:C1. Expected `<span>` to be at an indentation of 3 but was found at 1.  block-indentation\n  7:1  error  Incorrect indentation for `<span>` beginning at L7:C1. Expected `<span>` to be at an indentation of 3 but was found at 1.  block-indentation\n  8:1  error  Incorrect indentation for `<span>` beginning at L8:C1. Expected `<span>` to be at an indentation of 3 but was found at 1.  block-indentation\n  9:1  error  Incorrect indentation for `<span>` beginning at L9:C1. Expected `<span>` to be at an indentation of 3 but was found at 1.  block-indentation\n  14:1  error  Incorrect indentation for `<ul>` beginning at L14:C1. Expected `<ul>` to be at an indentation of 3 but was found at 1.  block-indentation\n  15:1  error  Incorrect indentation for `{{#link-to}}` beginning at L15:C1. Expected `{{#link-to}}` to be at an indentation of 3 but was found at 1.  block-indentation\n  16:1  error  Incorrect indentation for `{{#link-to}}` beginning at L16:C1. Expected `{{#link-to}}` to be at an indentation of 3 but was found at 1.  block-indentation\n  17:1  error  Incorrect indentation for `{{#link-to}}` beginning at L17:C1. Expected `{{#link-to}}` to be at an indentation of 3 but was found at 1.  block-indentation\n  18:1  error  Incorrect indentation for `{{#link-to}}` beginning at L18:C1. Expected `{{#link-to}}` to be at an indentation of 3 but was found at 1.  block-indentation\n  11:12  error  you must use double quotes in templates  quotes\n  15:12  error  you must use double quotes in templates  quotes\n  16:12  error  you must use double quotes in templates  quotes\n  17:12  error  you must use double quotes in templates  quotes\n  18:12  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('image-app/templates/image.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'image-app/templates/image.hbs should pass TemplateLint.\n\nimage-app/templates/image.hbs\n  4:10  error  Incorrect indentation for `each` beginning at L2:C0. Expected `{{/each}}` ending at L4:C10 to be at an indentation of 0 but was found at 1.  block-indentation\n  3:0  error  Incorrect indentation for `<p>` beginning at L3:C0. Expected `<p>` to be at an indentation of 2 but was found at 0.  block-indentation\n  3:3  error  img tags must have an alt attribute  img-alt-attributes\n  3:12  error  Unnecessary string concatenation. Use {{photos.url}} instead of "{{photos.url}}".  no-unnecessary-concat\n');
  });

  QUnit.test('image-app/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'image-app/templates/index.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('image-app/templates/photo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'image-app/templates/photo.hbs should pass TemplateLint.\n\nimage-app/templates/photo.hbs\n  4:0  error  Incorrect indentation for `<div>` beginning at L4:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  5:1  error  Incorrect indentation for `<div>` beginning at L5:C1. Expected `<div>` to be at an indentation of 2 but was found at 1.  block-indentation\n  14:8  error  Incorrect indentation for `div` beginning at L5:C1. Expected `</div>` ending at L14:C8 to be at an indentation of 1 but was found at 2.  block-indentation\n  6:2  error  Incorrect indentation for `<div>` beginning at L6:C2. Expected `<div>` to be at an indentation of 3 but was found at 2.  block-indentation\n  9:2  error  Incorrect indentation for `<div>` beginning at L9:C2. Expected `<div>` to be at an indentation of 3 but was found at 2.  block-indentation\n  7:3  error  Incorrect indentation for `<h3>` beginning at L7:C3. Expected `<h3>` to be at an indentation of 4 but was found at 3.  block-indentation\n  10:3  error  Incorrect indentation for `<p>` beginning at L10:C3. Expected `<p>` to be at an indentation of 4 but was found at 3.  block-indentation\n  11:0  error  Incorrect indentation for `<p>` beginning at L11:C0. Expected `<p>` to be at an indentation of 4 but was found at 0.  block-indentation\n  11:3  error  img tags must have an alt attribute  img-alt-attributes\n  11:12  error  Unnecessary string concatenation. Use {{photos.thumbnailUrl}} instead of "{{photos.thumbnailUrl}}".  no-unnecessary-concat\n  10:17  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('image-app/templates/photos.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'image-app/templates/photos.hbs should pass TemplateLint.\n\nimage-app/templates/photos.hbs\n  4:0  error  Incorrect indentation for `<h2>` beginning at L4:C0. Expected `<h2>` to be at an indentation of 2 but was found at 0.  block-indentation\n  5:0  error  Incorrect indentation for `<p>` beginning at L5:C0. Expected `<p>` to be at an indentation of 2 but was found at 0.  block-indentation\n  6:0  error  Incorrect indentation for `<p>` beginning at L6:C0. Expected `<p>` to be at an indentation of 2 but was found at 0.  block-indentation\n');
  });

  QUnit.test('image-app/templates/post.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'image-app/templates/post.hbs should pass TemplateLint.\n\nimage-app/templates/post.hbs\n  4:0  error  Incorrect indentation for `<h2>` beginning at L4:C0. Expected `<h2>` to be at an indentation of 2 but was found at 0.  block-indentation\n  5:0  error  Incorrect indentation for `<p>` beginning at L5:C0. Expected `<p>` to be at an indentation of 2 but was found at 0.  block-indentation\n  6:0  error  Incorrect indentation for `<p>` beginning at L6:C0. Expected `<p>` to be at an indentation of 2 but was found at 0.  block-indentation\n  6:3  error  img tags must have an alt attribute  img-alt-attributes\n  6:12  error  Unnecessary string concatenation. Use {{photos.thumbnailUrl}} instead of "{{photos.thumbnailUrl}}".  no-unnecessary-concat\n');
  });
});
define('image-app/tests/lint/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/image-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/image-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/photo-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/photo-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/post-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/post-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/typicode-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/typicode-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/home-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/home-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/image-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/image-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/photo-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/photo-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/photos-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/photos-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/post-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/post-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/image-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/image-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/photo-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/photo-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/photos-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/photos-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/post-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/post-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/image-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/image-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/photo-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/photo-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/post-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/post-test.js should pass ESLint\n\n');
  });
});
define('image-app/tests/test-helper', ['image-app/app', 'image-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('image-app/tests/unit/adapters/image-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Adapter | image', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:image');
      assert.ok(adapter);
    });
  });
});
define('image-app/tests/unit/adapters/photo-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Adapter | photo', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:photo');
      assert.ok(adapter);
    });
  });
});
define('image-app/tests/unit/adapters/post-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Adapter | post', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:post');
      assert.ok(adapter);
    });
  });
});
define('image-app/tests/unit/adapters/typicode-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Adapter | typicode', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:typicode');
      assert.ok(adapter);
    });
  });
});
define('image-app/tests/unit/models/home-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | home', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('home', {});
      assert.ok(model);
    });
  });
});
define('image-app/tests/unit/models/image-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | image', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('image', {});
      assert.ok(model);
    });
  });
});
define('image-app/tests/unit/models/photo-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | photo', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('photo', {});
      assert.ok(model);
    });
  });
});
define('image-app/tests/unit/models/photos-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | photos', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('photos', {});
      assert.ok(model);
    });
  });
});
define('image-app/tests/unit/models/post-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | post', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('post', {});
      assert.ok(model);
    });
  });
});
define('image-app/tests/unit/routes/image-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | image', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:image');
      assert.ok(route);
    });
  });
});
define('image-app/tests/unit/routes/photo-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | photo', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:photo');
      assert.ok(route);
    });
  });
});
define('image-app/tests/unit/routes/photos-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | photos', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:photos');
      assert.ok(route);
    });
  });
});
define('image-app/tests/unit/routes/post-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | post', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:post');
      assert.ok(route);
    });
  });
});
define('image-app/tests/unit/serializers/image-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Serializer | image', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let serializer = store.serializerFor('image');

      assert.ok(serializer);
    });

    (0, _qunit.test)('it serializes records', function (assert) {
      let store = this.owner.lookup('service:store');
      let record = store.createRecord('image', {});

      let serializedRecord = record.serialize();

      assert.ok(serializedRecord);
    });
  });
});
define('image-app/tests/unit/serializers/photo-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Serializer | photo', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let serializer = store.serializerFor('photo');

      assert.ok(serializer);
    });

    (0, _qunit.test)('it serializes records', function (assert) {
      let store = this.owner.lookup('service:store');
      let record = store.createRecord('photo', {});

      let serializedRecord = record.serialize();

      assert.ok(serializedRecord);
    });
  });
});
define('image-app/tests/unit/serializers/post-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Serializer | post', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let serializer = store.serializerFor('post');

      assert.ok(serializer);
    });

    (0, _qunit.test)('it serializes records', function (assert) {
      let store = this.owner.lookup('service:store');
      let record = store.createRecord('post', {});

      let serializedRecord = record.serialize();

      assert.ok(serializedRecord);
    });
  });
});
define('image-app/config/environment', [], function() {
  var prefix = 'image-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('image-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
