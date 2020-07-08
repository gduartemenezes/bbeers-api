const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'John',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
          email: 'johnDoe@test.com',
        },
        {
          name: 'Jane',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
          email: 'janeDoe@test.com',
        },
        {
          name: 'Rick',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
          email: 'rickDoe@test.com',
        },
        {
          name: 'Morty',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
          email: 'mortyDoe@test.com',
        },
        {
          name: 'Summer',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
          email: 'summerDoe@test.com',
        },
      ],
      {}
    );
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('users', [{}]);
  },
};

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     return queryInterface.bulkInsert(
//       'users',
//       [
//         {
//           name: 'Clebin',
//           email: 'clebin@gmail.com',
//           password_hash: bcrypt.hash('123456', 8),
//           created_at: new Date(),
//           updated_at: new Date(),
//         },
//       ],
//       {}
//     );
//   },

//   down: async (queryInterface) => {
//     return queryInterface.bulkDelete('users', null, {});
//   },
// };
