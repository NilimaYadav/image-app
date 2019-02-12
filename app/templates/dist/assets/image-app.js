'use strict';



;define('image-app/adapters/image', ['exports', 'image-app/adapters/typicode'], function (exports, _typicode) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _typicode.default.extend({

		pathForType() {
			return 'photos';
		}

	});
});
;define('image-app/adapters/photo', ['exports', 'image-app/adapters/typicode'], function (exports, _typicode) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _typicode.default.extend({

		pathForType() {
			return 'photos';
		}

	});
});
;define('image-app/adapters/post', ['exports', 'image-app/adapters/typicode'], function (exports, _typicode) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _typicode.default.extend({

		pathForType() {
			return 'photos';
		}

	});
});
;define('image-app/adapters/typicode', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.RESTAdapter.extend({
		host: 'https://jsonplaceholder.typicode.com'
	});
});
;define('image-app/app', ['exports', 'image-app/resolver', 'ember-load-initializers', 'image-app/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
;define('image-app/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define('image-app/helpers/app-version', ['exports', 'image-app/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
;define('image-app/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
;define('image-app/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
;define('image-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'image-app/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define('image-app/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
;define('image-app/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define('image-app/initializers/export-application-global', ['exports', 'image-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
;define('image-app/instance-initializers/ember-data', ['exports', 'ember-data/initialize-store-service'], function (exports, _initializeStoreService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
});
;define('image-app/models/home', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({});
});
;define('image-app/models/image', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});


	const { attr } = _emberData.default;

	exports.default = _emberData.default.Model.extend({

		url: attr('string')

	});
});
;define('image-app/models/photo', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});


	const { attr } = _emberData.default;

	exports.default = _emberData.default.Model.extend({
		title: attr('string'),
		url: attr('string'),
		thumbnailUrl: attr('string')

	});
});
;define('image-app/models/photos', ['exports', 'ember-data/model'], function (exports, _model) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});


	const { attr } = _model.default;

	exports.default = _model.default.Model.extend({
		title: attr('string')

	});
});
;define('image-app/models/post', ['exports', 'ember-data/model'], function (exports, _model) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});


	const { attr } = _model.default;

	exports.default = _model.default.Model.extend({
		title: attr('string')

	});
});
;define('image-app/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
;define('image-app/router', ['exports', 'image-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('post');
    this.route('photos');
    this.route('photo', function () {
      this.route('image', { path: '/photo/:id' });
    });
    this.route('image');
  });

  exports.default = Router;
});
;define('image-app/routes/image', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		beforeModel() {},

		model(params) {
			debugger;
			return this.store.query('photo', { photoId: params.id });
		},

		setupController(controller, model) {
			debugger;
		}
	});
});
;define('image-app/routes/photo', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		model() {
			return this.store.findAll('photo');
		}
	});
});
;define('image-app/routes/photos', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		model() {
			return this.store.findAll('photo');
		}
	});
});
;define('image-app/routes/post', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		model() {
			return this.store.findAll('photos');
		}
	});
});
;define('image-app/serializers/image', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.RESTSerializer.extend({
		normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {

			payload = { images: payload };
			console.log(payload);
			return this._super(store, primaryModelClass, payload, id, requestType);
		}
	});
});
;define('image-app/serializers/photo', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.RESTSerializer.extend({
		normalizeResponse(store, primaryModelClass, payload, id, requestType) {

			payload = { photos: payload };
			console.log(payload);
			return this._super(store, primaryModelClass, payload, id, requestType);
		}
	});
});
;define('image-app/serializers/post', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.RESTSerializer.extend({
		normalizeResponse(store, primaryModelClass, payload, id, requestType) {

			payload = { photos: payload };
			console.log(payload);
			return this._super(store, primaryModelClass, payload, id, requestType);
		}
	});
});
;define('image-app/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("image-app/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "0F4E/C05", "block": "{\"symbols\":[],\"statements\":[[0,\"\\t\"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n\\t\"],[7,\"nav\"],[11,\"class\",\"navbar navbar-inverse\"],[9],[0,\"\\n\\t\"],[7,\"div\"],[11,\"class\",\"container-fluid\"],[9],[0,\"\\n\\t\"],[7,\"div\"],[11,\"class\",\"navbar-header\"],[9],[0,\"\\n\\t\"],[7,\"button\"],[11,\"class\",\" navbar-toggle collapsed\"],[11,\"data-toggle\",\"collapsed\"],[11,\"data-target\",\"#main-navbar\"],[11,\"type\",\"button\"],[9],[0,\"\\n\\t\"],[7,\"span\"],[11,\"class\",\"sr-only\"],[9],[0,\"Toggle navigation\"],[10],[0,\"\\n\\t\"],[7,\"span\"],[11,\"class\",\"icon-bar\"],[9],[10],[0,\"\\n\\t\"],[7,\"span\"],[11,\"class\",\"icon-bar\"],[9],[10],[0,\"\\n\\t\"],[7,\"span\"],[11,\"class\",\"icon-bar\"],[9],[10],[0,\"\\n\\t\"],[10],[0,\"\\n\\t\"],[4,\"link-to\",[\"index\"],[[\"class\"],[\"navbar-brand\"]],{\"statements\":[[0,\"Image Gallery Application\"]],\"parameters\":[]},null],[0,\"\\n\\t\"],[10],[0,\"\\n\\t\"],[7,\"div\"],[11,\"class\",\"collapse-navbar-collapse\"],[11,\"id\",\"main-navbar\"],[9],[0,\"\\n\\t\"],[7,\"ul\"],[11,\"class\",\"nav navbar-nav\"],[9],[0,\"\\n\\t\"],[4,\"link-to\",[\"index\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[7,\"a\"],[11,\"href\",\"\"],[9],[0,\"Home\"],[10]],\"parameters\":[]},null],[0,\"\\n\\t\"],[4,\"link-to\",[\"post\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[7,\"a\"],[11,\"href\",\"\"],[9],[0,\"post\"],[10]],\"parameters\":[]},null],[0,\"\\n\\t\"],[4,\"link-to\",[\"photo\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[7,\"a\"],[11,\"href\",\"\"],[9],[0,\"photo\"],[10]],\"parameters\":[]},null],[0,\"\\n\\t\"],[4,\"link-to\",[\"image\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[7,\"a\"],[11,\"href\",\"\"],[9],[0,\"image preview\"],[10]],\"parameters\":[]},null],[0,\"\\n\\t\"],[10],[0,\"\\n\\t\"],[10],[0,\"\\n\\t\"],[10],[0,\"\\n\\t\"],[10],[0,\"\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "image-app/templates/application.hbs" } });
});
;define("image-app/templates/image", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "0EYf6ZJk", "block": "{\"symbols\":[\"photos\"],\"statements\":[[7,\"h1\"],[9],[0,\"image preview\"],[10],[0,\"\\n\"],[4,\"each\",[[23,[\"model\"]]],null,{\"statements\":[[7,\"p\"],[9],[7,\"img\"],[12,\"src\",[28,[[22,1,[\"url\"]]]]],[9],[10],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "image-app/templates/image.hbs" } });
});
;define("image-app/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "T9irWpKx", "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[0,\"Home page\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "image-app/templates/index.hbs" } });
});
;define("image-app/templates/photo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "UpF1hHfg", "block": "{\"symbols\":[\"photos\"],\"statements\":[[7,\"h1\"],[9],[0,\" view posts here\"],[10],[0,\"\\n\\n\"],[4,\"each\",[[23,[\"model\"]]],null,{\"statements\":[[7,\"div\"],[11,\"class\",\"col-sm-4\"],[9],[0,\"\\n\\t\"],[7,\"div\"],[11,\"class\",\"panel panel-default photo-item\"],[9],[0,\"\\n\\t\\t\"],[7,\"div\"],[11,\"class\",\"panel-heading\"],[9],[0,\"\\n\\t\\t\\t\"],[7,\"h3\"],[11,\"class\",\"panel-title\"],[9],[1,[22,1,[\"title\"]],false],[10],[0,\"\\n\\t\\t\"],[10],[0,\"\\n\\t\\t\"],[7,\"div\"],[11,\"class\",\"panel-body\"],[9],[0,\"\\n\\t\\t\\t\"],[7,\"p\"],[9],[4,\"link-to\",[\"image\"],null,{\"statements\":[[0,\"View image\"]],\"parameters\":[]},null],[10],[0,\"\\n\"],[7,\"p\"],[9],[7,\"img\"],[12,\"src\",[28,[[22,1,[\"thumbnailUrl\"]]]]],[9],[10],[10],[0,\"\\n\\t\\t\"],[10],[0,\"\\n\\n\\t\\t\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\\n\"]],\"parameters\":[1]},null],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "image-app/templates/photo.hbs" } });
});
;define("image-app/templates/photos", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "S7jtTbIu", "block": "{\"symbols\":[\"photos\"],\"statements\":[[7,\"h1\"],[9],[0,\" view posts here\"],[10],[0,\"\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"],[4,\"each\",[[23,[\"model\"]]],null,{\"statements\":[[7,\"h2\"],[9],[1,[22,1,[\"title\"]],false],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[22,1,[\"url\"]],false],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[22,1,[\"thumbnailUrl\"]],false],[10],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "image-app/templates/photos.hbs" } });
});
;define("image-app/templates/post", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "xyqiomrb", "block": "{\"symbols\":[\"photos\"],\"statements\":[[7,\"h1\"],[9],[0,\" view posts here\"],[10],[0,\"\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"],[4,\"each\",[[23,[\"model\"]]],null,{\"statements\":[[7,\"h2\"],[9],[1,[22,1,[\"title\"]],false],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[22,1,[\"url\"]],false],[10],[0,\"\\n\"],[7,\"p\"],[9],[7,\"img\"],[12,\"src\",[28,[[22,1,[\"thumbnailUrl\"]]]]],[9],[10],[10],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "image-app/templates/post.hbs" } });
});
;

;define('image-app/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("image-app/app")["default"].create({"name":"image-app","version":"0.0.0+6fe3e899"});
          }
        
//# sourceMappingURL=image-app.map
