module.exports = {
  apps : [{
    script: 'server.js',
    watch: '.',
    exec_mode  : "cluster",
    instances  : 3,
    port: 3000
  }]
};
