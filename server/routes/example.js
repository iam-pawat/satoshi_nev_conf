export default function (server) {

  server.route({
    path: '/api/satoshi_nev_conf/example',
    method: 'GET',
    handler() {
      return { time: (new Date()).toISOString() };
    }
  });

}
