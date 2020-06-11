var faker = require('faker');

var database = { users: []};

for (var i = 1; i<= 20; i++) {
    //Use faker to generate some data for the users
    //get the first and last name in order to generate emails
    var first_name =faker.name.firstName();
    var last_name =faker.name.lastName();

  database.users.push({
    id: i,
    name: first_name,
    surname: last_name,
    email: faker.internet.email(first_name,last_name),
    password: faker.internet.password(),
    role: faker.random.arrayElement(["regular","admin"]), //chose the role here
    token: faker.random.alphaNumeric(36)+ "." + faker.random.alphaNumeric(75)+"." + faker.random.alphaNumeric(43)
  });
}

console.log(JSON.stringify(database));