Package.describe({
  name: 'spectrum:mqtt',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'MQTT library for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/acidsound/meteor-mqtt',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "mqtt": "1.0.8"
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.addFiles('mqtt.js', 'server');
  api.export('mqtt');
});
