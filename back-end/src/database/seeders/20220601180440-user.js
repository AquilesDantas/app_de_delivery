module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('users', [
      {
        name: 'Delivery App Admin',
        email: 'adm@deliveryapp.com',
        password: 'a4c86edecc5aee06eff8fdeda69e0d04', 
        role: 'administrator',
      },
      {
        name: 'Fulana Pereira',
        email: 'fulana@deliveryapp.com',
        password: '3c28d2b0881bf46457a853e0b07531c6', 
        role: 'seller',
      },
      {
        name: 'Cliente Zé Birita',
        email: 'zebirita@email.com',
        password: '1c37466c159755ce1fa181bd247cb925', 
        role: 'customer',
      },
      {
        name: 'Robert Martin',
        email: 'unclebob@email.com',
        password: '6c42120f7dd5bbd6db2819b1582563e4', // senha: unclebob
        role: 'seller'
      }, 
      {
        name: 'Ada Lovelace',
        email: 'ada@email.com', 
        password: '398e62b1556a0f7d4c769bd612c63989', // senha: 398e62b1556a0f7d4c769bd612c63989
        role: 'customer',
      }
    ], { timeStamps: false });
  },
  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('users', null, {});
  },
};
