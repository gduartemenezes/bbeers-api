module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: '5436',
  username: 'postgres',
  password: 'docker',
  database: 'bbeers',
  define: {
    timstamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
