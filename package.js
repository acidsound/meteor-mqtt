Package.describe({
  name: 'spectrum:mqtt',
  version: '0.0.3',
  summary: 'MQTT library for Meteor',
  git: 'https://github.com/acidsound/meteor-mqtt.git',
  documentation: 'README.md'
});

Npm.depends({
  "mqtt": "1.0.8"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('mqtt.js', 'server');
  api.export('mqtt');
});
