import exampleRoute from './server/routes/example';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'satoshi_nev_conf',
    uiExports: {
      app: {
        title: 'Satoshi Nev Conf',
        description: 'nev config',
        main: 'plugins/satoshi_nev_conf/app',
      },
      hacks: [
        'plugins/satoshi_nev_conf/hack'
      ],
      styleSheetPaths: require('path').resolve(__dirname, 'public/app.scss'),
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    init(server, options) { // eslint-disable-line no-unused-vars
      // Add server routes and initialize the plugin here
      exampleRoute(server);
    }
  });
}
