const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/sequelize_practice', { logging: false });

const User = db.define(
  'user',
  {
    // YOUR CODE HERE...
    // slug: {
    //   //creating a custom primary key
    //   type: Sequelize.STRING,
    //   primaryKey: true,
    // },

    first: {
      type: Sequelize.STRING,
    },
    last: {
      type: Sequelize.STRING,
    },
    age: {
      type: Sequelize.INTEGER,
      validate: { min: 18 },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    bio: {
      type: Sequelize.TEXT,
    },
  },
  {
    getterMethods: {
      fullName() {
        return this.first + ' ' + this.last;
      },
    },
  }
);

User.prototype.haveBirthday = function() {
  // var age = this.age;

  // var newAge = User.find({ where: { age: age } }).then(function(age) {
  //   age.dataValues.age++;
  //   this.age = age.dataValues.age;
  //   // console.log('this.age', this.age);

  //   return age;
  // });

  // return newAge;

  this.age++;
  return this.save();
};

module.exports = User;
