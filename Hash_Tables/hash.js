let user = {
  name: "John",
  magic: "true",
  scream: function () {
    console.log("ahhhhhhhhh!");
  },
};

user.age; //O(1)

user.spell = "abra kadbra"; //O(1)
user.game = "ded";

console.log(user); //O(1)

console.log(user.scream()); //O(1)

//Map --> Gives you some order
//Set --> No duplicate keys
