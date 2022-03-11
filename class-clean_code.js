//--Contoh Clean Code Task No.1 (Class)
class User {
  constructor(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = password;
  }
}

class UserService extends User {
  constructor(users, id) {
    super(id);
    this.users = users;
  }

  getAllUsers() {
    return this.users;
  }

  getUserById(id) {
    return this.users.filter((user) => (user.id = id));
  }
}

const user = new User(1, "Adif", "Password");
const userService = new UserService([
  { id: 1, name: "Adif" },
  { id: 2, name: "Luthfi" }
]);

console.log(userService.users);
console.log(userService.getUserById(1));
