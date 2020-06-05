/*
class User {
  private String userName;
  private String password;

  public User(String userName, String password) {
    this.userName = userName;
    this.password = password;
  }
}

--------------------------------------------------------------

class Runner {
  String name;
  String email;
  int category;
  String age;
  String maxDistance;

  consturctor(name, email, category, age, maxDistance) {
    this.name = name;
    this.email = email;
    this.category = category;
    this.age = age;
    this.maxDistance = maxDistance;
  }
}
*/

const Runner = (_name, _email, _category, _age, _maxDistance) => ({
  name: typeof _name === 'string' && _name,
  email: typeof _email === 'string' && _email,
  category: typeof _category === 'number' && _category,
  age: typeof _age === 'number' && _age,
  maxDistance: typeof _maxDistance === 'number' && _maxDistance,
});

const CATEGORIES = {
  TURTLE: 0,
  LAZY: 1,
  HUMAN: 2,
  CHEETAH: 3,
};

const runner1 = Runner('Ismael Bakkali', 'ismaelocaramelo@gsrunning.com', CATEGORIES.CHEETAH, 24, 15);

console.log('\nrunner1');
console.log(runner1);

const runner2 = Runner('Trolete Martínez', '...notanemail[dot]com', 8, -33, '34');

console.log('\nrunner2');
console.log(runner2);
