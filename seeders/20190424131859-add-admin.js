'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'helga.sitanggang93@gmail.com',
      password: '$2a$10$gQ8BfLj3WHfxAyOYAlLAEe5Gmh50QEB91CQE4Wm3jG9qmm.WbAu3y',
      name: 'helga',
      gender: 'male',
      phone: '088989879908',
      role: 'admin',
      address: 'jln. raya foot store',
      createdAt: new Date(),
      updatedAt : new Date()
    },{
      email: 'admin@footstep.com',
      password: '$2a$10$bwylUOLZLf3xqPZL1RUygulSmbGoQv96ljSht6KeaZ/eEyCtoJM1W',
      name: 'sukma',
      gender: 'male',
      phone: '0819999999999',
      role: 'admin',
      address: 'jln. raya foot store',
      createdAt: new Date(),
      updatedAt : new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Users', null, {});

  }
};
