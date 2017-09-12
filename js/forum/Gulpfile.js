var flarum = require('flarum-gulp');

flarum({
  modules: {
    'botfactoryit/amazon-affiliation': [
      'src/**/*.js'
    ]
  }
});
