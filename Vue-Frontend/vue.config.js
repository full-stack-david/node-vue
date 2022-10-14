let HOST_NAME = 'localhost';

let APP_URL = 'http://' + HOST_NAME + ':8888';

module.exports = {
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 8888,
    public: APP_URL
  },
  transpileDependencies: ['vuetify']
};
