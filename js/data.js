function Data() {
  /**
   * Usage:
   *  
   *  Each species has their own member variable with there profiles
   *
   *  Every profile is under the member variable "allData" 
   *  and points to each species using a string as a key
   * 
   */
  this.cats = [
    {
      "petName": "Miki",
      "userName": "RubyDuby",
      "location": "Washington D.C.",
      "age": "3",
      "gender": "Female",
      "species": "Tabbycat",
      "status": "Miki's a butt",

      "bio": "Miki loves her mouse toys and lasers",
      "profilePics" : [
        
      ],
      "adoptable" : false,
    },
    {
      "petName": "Tom",
      "userName": "cartoon123",
      "location": "California",
      "age": "15",
      "gender": "Male",
      "species": "Felis Cartoonis",
      "status": "Cat fight",
      "bio": "Always out on the lookout for Jerry",
      "profilePics" : [
        
      ],
      "adoptable" : true,
    },
    {
      "petName": "Fluffy",
      "userName": "jeanie",
      "location": "Virginia",
      "age": "20",
      "gender": "Female",
      "species": "Birman",
      "status": "looking for a sunny place to nap",
      "bio": "meow?",
      "profilePics" : [
        
      ],
      "adoptable" : true,
    },
    {
      "petName": "Simba",
      "userName": "lion_king",
      "location": "New York",
      "age": "4",
      "gender": "Male",
      "species": "King Cat",
      "status": "Hakuna Matata",
      "bio": "I just can't wait to be king",
      "profilePics" : [
        
      ],
      "adoptable" : false,
    },

    {
      "petName": "Cheshire Cat",
      "userName": "wanderer_al1c3",
      "location": "Boston",
      "age": "??",
      "gender": "Male",
      "species": "British Shorthair",
      "status": "*Grins*",
      "bio": "Most everyone's mad here",
      "profilePics" : [
        
      ],
      "adoptable" : false,
    },
  ];
  this.dogs = [
    {
      "petName": "Luna",
      "userName": "rodger",
      "location": "California",
      "age": "11",
      "gender": "Female",
      "species": "Husky",
      "status": "Woof",
      "bio": "Hates baths",
      "profilePics" : [
      
      ],
      "adoptable" : false,
    },
    {
      "petName": "Rocky",
      "userName": "hamburger321",
      "location": "Utah",
      "age": "6",
      "gender": "Male",
      "species": "Chihuahua",
      "status": "I bite strangers",
      "bio": "",
      "profilePics" : [
      
      ],
      "adoptable" : true,
    },
    {
      "petName": "Sebastian",
      "userName": "ivan_snow",
      "location": "Minnesota",
      "age": "18",
      "gender": "Male",
      "species": "Great Dane",
      "status": "View's nice up here",
      "bio": "4 feet tall",
      "profilePics" : [
      
      ],
      "adoptable" : true,
    },
    {
      "petName": "Coco",
      "userName": "elsa_icy",
      "location": "Canada",
      "age": "9",
      "gender": "Female",
      "species": "Poodle",
      "status": "fluff fluff",
      "bio": "diva doggo",
      "profilePics" : [
      
      ],
      "adoptable" : false,
    },
    {
      "petName": "Bailey",
      "userName": "10richard01",
      "location": "Massachusetts",
      "age": "3",
      "gender": "Female",
      "species": "Golden Retriver",
      "status": "Loooooooves People",
      "bio": "Friendliest Doggo in town, 2 years in a row",
      "profilePics" : [
      
      ],
      "adoptable" : true,
    },
  ];

  this.reptiles = [
    {
      "petName": "",
      "userName": "",
      "location": "",
      "age": "",
      "gender": "",
      "species": "",
      "status": "",
      "bio": "",
      "profilePics" : [
      
      ],
      "adoptable" : false,
    },
  ];

  this.birds = [
    {
      "petName": "",
      "userName": "",
      "location": "",
      "age": "",
      "gender": "",
      "species": "",
      "status": "",
      "bio": "",
      "profilePics" : [
      
      ],
      "adoptable" : false,
    },
  ];

  this.fish = [
    {
      "petName": "",
      "userName": "",
      "location": "",
      "age": "",
      "gender": "",
      "species": "",
      "status": "",
      "bio": "",
      "profilePics" : [
      
      ],
      "adoptable" : false,
    },
  ];
  this.allData = {
    "cats" : this.cats,
    "dogs" : this.dogs,
    "fish" : this.fish,
    "birds" : this.birds,
    "reptiles" : this.reptiles,
  }
}
