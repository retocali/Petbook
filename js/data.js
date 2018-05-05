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
      "type": "Tabbycat",
      "status": "Miki's a butt",
      "bio": "Miki loves her mouse toys and lasers",
      "profilePics" : [ 'profiles/profile-posts/Miki1.jpg',
                        'profiles/profile-posts/Miki2.jpg',
                        'profiles/profile-posts/Miki3.jpg',
                        'profiles/profile-posts/Miki4.jpg',
                        'profiles/profile-posts/Miki5.jpg',
                        'profiles/profile-posts/Miki6.jpg',
                        'profiles/profile-posts/Miki7.jpg',
                        'profiles/profile-posts/Miki8.jpg',
                        'profiles/profile-posts/Miki9.jpg',
                        'profiles/profile-posts/Miki10.jpg',        
      ],
      "category": "cat",
      "adopted": false,
      "adoptable" : false,
      "pet_id": 1,
    },
    {
      "petName": "Tom",
      "userName": "cartoon123",
      "location": "California",
      "age": "15",
      "gender": "Male",
      "type": "Felis Cartoonis",
      "status": "Cat fight",
      "bio": "Always out on the lookout for Jerry",
      "profilePics" : [ 'profiles/profile-posts/Tom1.jpg',
                        'profiles/profile-posts/Tom2.jpg',
                        'profiles/profile-posts/Tom3.jpg',
                        'profiles/profile-posts/Tom4.jpg',
                        'profiles/profile-posts/Tom5.jpg',
                        'profiles/profile-posts/Tom6.jpg',
                        'profiles/profile-posts/Tom7.jpg',
                        'profiles/profile-posts/Tom8.jpg',
                        'profiles/profile-posts/Tom9.jpg',
                        'profiles/profile-posts/Tom10.jpg',
                        'profiles/profile-posts/Tom11.jpg',
                        'profiles/profile-posts/Tom12.jpg',
        
      ],
      "category": "cat",
      "adopted": false,
      "adoptable" : true,
      "pet_id": 2,
    },
    {
      "petName": "Fluffy",
      "userName": "jeanie",
      "location": "Virginia",
      "age": "20",
      "gender": "Female",
      "type": "Birman",
      "status": "looking for a sunny place to nap",
      "bio": "meow?",
      "profilePics" : [ 'profiles/profile-posts/Fluffy1.jpg',
                        'profiles/profile-posts/Fluffy2.jpg',
        
      ],
      "category": "cat",
      "adopted": false,
      "adoptable" : true,
      "pet_id":3,
    },
    {
      "petName": "Simba",
      "userName": "lion_king",
      "location": "New York",
      "age": "4",
      "gender": "Male",
      "type": "King Cat",
      "status": "Hakuna Matata",
      "bio": "I just can't wait to be king",
      "profilePics" : ['profiles/profile-posts/Simba1.jpg',
                        'profiles/profile-posts/Simba2.jpg',
                        'profiles/profile-posts/Simba3.jpg',
                        'profiles/profile-posts/Simba4.jpg',
                        'profiles/profile-posts/Simba5.jpg',
                        'profiles/profile-posts/Simba6.jpg', 
        
      ],
      "category": "cat",
      "adopted": false,
      "adoptable" : false,
      "pet_id": 4,
    },

    {
      "petName": "Cheshire",
      "userName": "wanderer_al1c3",
      "location": "Boston",
      "age": "??",
      "gender": "Male",
      "type": "British Shorthair",
      "status": "*Grins*",
      "bio": "Most everyone's mad here",
      "profilePics" : [ 'profiles/profile-posts/Cheshire1.jpg',
                        'profiles/profile-posts/Cheshire2.jpg',
                        'profiles/profile-posts/Cheshire3.jpg',
        
      ],
      "category": "cat",
      "adopted": false,
      "adoptable" : false,
      "pet_id": 5,
    },
  ];
  this.dogs = [
    {
      "petName": "Luna",
      "userName": "rodger",
      "location": "California",
      "age": "11",
      "gender": "Female",
      "type": "Husky",
      "status": "Woof",
      "bio": "Hates baths",
      "profilePics" : ['profiles/profile-posts/luna1.jpg',
                      'profiles/profile-posts/luna2.jpg',
                      'profiles/profile-posts/luna3.jpg',
                      'profiles/profile-posts/luna4.jpg',
                      'profiles/profile-posts/luna5.jpg',
                      'profiles/profile-posts/luna6.jpg',
      
      ],
      "category": "dog",
      "adopted": false,
      "adoptable" : false,
      "pet_id": 6,
    },
    {
      "petName": "Rocky",
      "userName": "hamburger321",
      "location": "Utah",
      "age": "6",
      "gender": "Male",
      "type": "Chihuahua",
      "status": "Quero TacoBell",
      "bio": "Eats tacos and only tacos.  Surprisingly not obese",
      "profilePics" : ['profiles/profile-posts/rocky1.jpg',
                      'profiles/profile-posts/rocky2.jpg',
                      'profiles/profile-posts/rocky3.jpg',
      
      ],
      "category": "dog",
      "adopted": false,
      "adoptable" : true,
      "pet_id": 7,
    },
    {
      "petName": "Sebastian",
      "userName": "ivan_snow",
      "location": "Minnesota",
      "age": "18",
      "gender": "Male",
      "type": "Great Dane",
      "category": "dog",
      "status": "View's nice up here",
      "bio": "4 feet tall",
      "profilePics" : ['profiles/profile-posts/sebastian1.jpg',
                      'profiles/profile-posts/sebastian2.jpg',
      
      ],
      "category": "dog",
      "adopted": false,
      "adoptable" : true,
      "pet_id": 8,
    },
    {
      "petName": "Coco",
      "userName": "elsa_icy",
      "location": "Canada",
      "age": "9",
      "gender": "Female",
      "type": "Poodle",
      "category": "dog",
      "status": "fluff fluff",
      "bio": "diva doggo",
      "profilePics" : [ 'profiles/profile-posts/coco1.jpg',
                        'profiles/profile-posts/coco2.jpg',
                        'profiles/profile-posts/coco3.jpg',
                        'profiles/profile-posts/coco4.jpg',
                        'profiles/profile-posts/coco5.jpg',
                        'profiles/profile-posts/coco6.jpg',
                        'profiles/profile-posts/coco7.jpg',
                        'profiles/profile-posts/coco8.jpg',
                        'profiles/profile-posts/coco9.jpg',      
      ],
      "category": "dog",
      "adopted": false,
      "adoptable" : false,
      "pet_id": 9,
    },
    {
      "petName": "Bailey",
      "userName": "10richard01",
      "location": "Massachusetts",
      "age": "3",
      "gender": "Female",
      "type": "Golden Retriver",
      "status": "Loooooooves People",
      "bio": "Friendliest Doggo in town, 2 years in a row",
      "profilePics" : [ 'profiles/profile-posts/bailey1.jpg',
                        'profiles/profile-posts/bailey2.jpg',
                        'profiles/profile-posts/bailey3.jpg',
                        'profiles/profile-posts/bailey4.jpg',
                        'profiles/profile-posts/bailey5.jpg'
          
      ],
      "category": "dog",
      "adopted": false,
      "adoptable" : true,
      "pet_id": 10,
    },
  ];

  this.reptiles = [
    {
      "petName": "Sheldon",
      "userName": "King_Leopold_IV",
      "location": "Sheldon Court, NY",
      "age": "87",
      "gender": "Male",
      "type": "Argentinian Sand Turtle",
      "status": "Feeling Lively",
      "bio": "Ruler of New York.  Loves his top hat and cane",
      "profilePics" : [ 'profiles/profile-posts/Sheldon1.jpg',
                        'profiles/profile-posts/Sheldon2.jpg',
                        'profiles/profile-posts/Sheldon3.jpg',
                        'profiles/profile-posts/Sheldon4.jpg',
                        'profiles/profile-posts/Sheldon5.jpg',
                        'profiles/profile-posts/Sheldon6.jpg'
      ],
      "category": "reptile",
      "adopted": false,
      "adoptable" : true,
      "pet_id": 11,
    },
    {
      "petName": "Reptar",
      "userName": "Tom",
      "location": "Louisiana",
      "age": "28",
      "gender": "Male",
      "type": "Reptar Species",
      "status": "GRAAAARRR",
      "bio": "Protects and destroys cities.  He does whatever",
      "profilePics" : [ "profiles/profile-posts/Reptar1.png",
                        "profiles/profile-posts/Reptar2.png",
      ],
      "category": "reptile",
      "adopted": false,
      "adoptable" : false,
      "pet_id": 12,
    },
    {
      "petName": "Smaug",
      "userName": "Bilba_Baggos11111",
      "location": "New Zealand",
      "age": "?",
      "gender": "Male",
      "type": "Smol lizard",
      "status": "I AM FIRE. I AM DEATH.",
      "bio": "Likes money.  Likes to make money.  Likes to kill to make money",
      "profilePics" : [ "profiles/profile-posts/Smaug1.jpg",
                        "profiles/profile-posts/Smaug2.jpg",
                        "profiles/profile-posts/Smaug3.jpg",
      ],
      "category": "reptile",
      "adopted": false,
      "adoptable" : true,
      "pet_id": 13,
    },

    {
      "petName": "MasterOfBurgs",
      "userName": "SandwichKingII",
      "location": "Sandwich, MA",
      "age": "5",
      "gender": "Female",
      "type": "Burger Turtle",
      "status": "Medium Well",
      "bio": "Master of the burger arts, this turt is all about the burgers.  Please, no pickles",
      "profilePics" : [ "profiles/profile-posts/MasterOfBurgs1.jpg",
                        "profiles/profile-posts/MasterOfBurgs2.jpg",
                        "profiles/profile-posts/MasterOfBurgs3.jpg"
      ],
      "category": "reptile",
      "adopted": false,
      "adoptable" : false,
      "pet_id": 14,
    },

    {
      "petName": "Smaugbaby",
      "userName": "Frodoo2",
      "location": "New Zealand",
      "age": "?",
      "gender": "Male",
      "type": "Large Dragon",
      "status": "I AM DRAGON. I AM DEATH",
      "bio": "Likes money.  Likes to make money.  Likes to make money to compensate.",
      "profilePics" : [ "profiles/profile-posts/Smaugbaby1.jpg",
                        "profiles/profile-posts/Smaugbaby2.jpg",
                        "profiles/profile-posts/Smaugbaby3.jpg",
      ],
      "category": "reptile",
      "adopted": false,
      "adoptable" : true,
      "pet_id": 15,
    },
  ];

  this.birds = [
    {
      "petName": "Birbsy",
      "userName": "Tea_Time23",
      "location": "Pandora",
      "age": "2",
      "gender": "Female",
      "type": "Budgerigar",
      "status": "It's time for Tea!",
      "bio": "Survives on a healthy diet of tea and pop rocks",
      "profilePics" : [
      
      ],
      "category": "bird",
      "adopted": false,
      "adoptable" : true,
      "pet_id": 16,
    },

    {
      "petName": "Fortweny",
      "userName": "Maddie_Jhonson",
      "location": "Colorado",
      "age": "40",
      "gender": "Male",
      "type": "Hawk",
      "status": "duuuuuuuuuuude",
      "bio": "Tends to fixate on things and slowly melt.  Looking for someone to chill with",
      "profilePics" : [
      
      ],
      "category": "bird",
      "adopted": false,
      "adoptable" : true,
      "pet_id": 17,
    },

    {
      "petName": "TorpedoDan",
      "userName": "TorpedosForSale",
      "location": "Australia",
      "age": "24",
      "gender": "Male",
      "type": "Shrike",
      "status": "weeeeeeeeeeeeeeeeeeeeeeeeee",
      "bio": "Incredibly throwable.  Flies through the air at Mach 2",
      "profilePics" : [
      
      ],
      "category": "bird",
      "adopted": false,
      "adoptable" : false,
      "pet_id": 18,
    },
    {
      "petName": "CoolBirb",
      "userName": "RadMcStud",
      "location": "California",
      "age": "16",
      "gender": "Female",
      "type": "Parrotlet",
      "status": "Haters gonna hate",
      "bio": "Coolest bird on the market.  Skating is her passion",
      "profilePics" : [
      
      ],
      "category": "bird",
      "adopted": false,
      "adoptable" : true,
      "pet_id": 19,
    },
    {
      "petName": "TonyBudgie",
      "userName": "TonyHawk23",
      "location": "Nevada",
      "age": "49",
      "gender": "Female",
      "type": "Budgie",
      "status": "KickFlip!",
      "bio": "CoolBirb's mentor.  Retired from her skating career, she still got the moves",
      "profilePics" : [
      
      ],
      "category": "bird",
      "adopted": false,
      "adoptable" : false,
      "pet_id": 20,
    },
  ];

  this.fish = [
    {
      "petName": "Sushi",
      "userName": "Yamato's",
      "location": "Massachusetts",
      "age": "Eternal",
      "gender": "Female",
      "type": "Atlantic Trout",
      "status": "Delicious",
      "bio": "Swims deep in the arctic, tends to be caught by fisherman.  Constantly gets resurrected from death",
      "profilePics" : [
      
      ],
      "category": "fish",
      "adopted": false,
      "adoptable" : true,
      "pet_id": 21,
    },

    {
      "petName": "LifeVest",
      "userName": "SafteyFirst12223",
      "location": "Arizona",
      "age": "9",
      "gender": "Male",
      "type": "Bubble Eyed Goldfish",
      "status": "Safe, for now",
      "bio": "This fish can't swim.  Uses floatation devices to float out to the surface and escape.",
      "profilePics" : [
      
      ],
      "category": "fish",
      "adopted": false,
      "adoptable" : true,
      "pet_id": 22,
    },
    {
      "petName": "Filet",
      "userName": "McDonald's",
      "location": "Arkansas",
      "age": "0",
      "gender": "Male",
      "type": "Sandwich Fish",
      "status": "This was fate",
      "bio": "Doesn't eat much.  Needs little care.  Please give walks at least once a week",
      "profilePics" : [
      
      ],
      "category": "fish",
      "adopted": false,
      "adoptable" : true,
      "pet_id": 23,
    },

    {
      "petName": "Boxy",
      "userName": "FedEx3456",
      "location": "Minnesota",
      "age": "4",
      "gender": "Female",
      "type": "CowFish",
      "status": "Boxed up",
      "bio": "Hates being in boxes.  Prefers pina coladas and long airplane flights",
      "profilePics" : [
      
      ],
      "category": "fish",
      "adopted": false,
      "adoptable" : false,
      "pet_id": 24,
    },

    {
      "petName": "Puffy",
      "userName": "BuffyVS223",
      "location": "New York",
      "age": "32",
      "gender": "Female",
      "type": "Puffer fish",
      "status": "Slaying Vampires",
      "bio": "Kills vampires and turns into balloons.  Read her novel (To Puff and Slay)",
      "profilePics" : [
      
      ],
      "category": "fish",
      "adopted": false,
      "adoptable" : false,
      "pet_id": 25,
    },

  ];  
  State.addMyPets(this);
  this.allData = {
    "cat" : this.cats,
    "dog" : this.dogs,
    "fish" : this.fish,
    "bird" : this.birds,
    "reptile" : this.reptiles,
  }
  this.categories = [
    "cat", "dog", "fish", "bird", "reptile"
  ]
  this.getAllData = function() {
    let n = [];
    for (let i = 0; i < data.categories.length; i++) {
      const c = data.categories[i];
      for (let i = 0; i < data.allData[c].length; i++) {
          const element = data.allData[c][i];
          n.push(element)
      }
    } 
    
    return n;  
  }
  this.convertProfileToString = function(profile) {
    let s = "";
    if (profile.adoptable) { s += "adopt "}
    if (profile.adopted) { s += "adopted "}
    s += profile.age + " ";
    s += profile.bio + " ";
    s += profile.category + " ";
    s += profile.gender + " ";
    s += profile.location + " ";
    s += profile.petName + " ";
    s += profile.status + " ";
    s += profile.type + " ";
    s += profile.userName + " ";
    return s.toLowerCase();
  }
}

class State {
  // Signing In
  static signIn() {
    sessionStorage.setItem("signedIn", true);
    console.log(sessionStorage.getItem("signedIn"));
  }
  static isSignedIn() {
    let result = sessionStorage.getItem("signedIn");
    if(!result) {
      return false;
    }
    return result;
  }
  
  // Username
  static setUsername(user) {
    sessionStorage.setItem("username", user);
  }
  static getUsername() {
    let result = sessionStorage.getItem("username");
    if(!result) {
      return "username123";
    }
    return result;
  }

  // Full name
  static setFullName(name) {
    sessionStorage.setItem("fullName", name);
  }
  static getFullName() {
    let result = sessionStorage.getItem("fullName");
    if(!result) {
      result = "John Doe";
    }
    return result;
  }

  // Location
  static setLocation(loc) {
    sessionStorage.setItem("location", loc);
  }
  static getLocation() {
    let result = sessionStorage.getItem("location");
    if (!result) {
      return "Boston, MA";
    }
    return result;
  }

  // Bio
  static setBio(bio) {
    sessionStorage.setItem("bio", bio);
  }
  static getBio() {
    let result = sessionStorage.getItem("bio");
    if(!result) {
      return "I love pets!";
    }
    return result;
  }

  // Status
  static setStatus(status) {
    sessionStorage.setItem("status", status);
  }
  static getStatus() {
    let result = sessionStorage.getItem("status");
    if(!result) {
      return "Hello!";
    }
    return result;
  }

  // Pets
  static setPet(petInfo) {
    let result = sessionStorage.getItem("myPets");
    if(!result) {
      sessionStorage.setItem("myPets", JSON.stringify([petInfo]));
    } else {
      result = JSON.parse(result);
      result.push(petInfo);
      sessionStorage.setItem("myPets", JSON.stringify(result));
    } 
  }
  static getPets() {
    let result = sessionStorage.getItem("myPets");
    if(!result) {
      return []
    } 
    return JSON.parse(result);
  }
  static addMyPets(data) {
    let result = State.getPets()
    console.log(result);
    for (let i = 0; i < result.length; i++) {
        let element = result[i];
        console.log(element)
        switch (element["category"]) {
          case "cat":
            data.cats.push(element);
            break;
          case "dog":
            console.log("Here");
            data.dogs.push(element);
            break;
          case "bird":
            data.birds.push(element);
            break;
          case "fish":
            data.fish.push(element);
            break;
          case "reptile":
            data.reptiles.push(element);
            break;
        }
      }
    }
    static favoritePet(petID) {
      let result = sessionStorage.getItem("favorites");
      if (!result) {
        sessionStorage.setItem("favorites", [petID]);
        return;
      }
      if (result.indexOf(petID) == -1) {
        result.push(petID)
        sessionStorage.setItem("favorites", result);
      }
    }

    static unfavoritePet(petID) {
      let result = sessionStorage.getItem("favorites");
      if (!result) {
        return;
      }
      if (result.indexOf(petID) != -1) {
        for (let i = 0; i < result.length; i++) {
          const element = result[i];
          if (element == petID) {
            result.splice(i, 1);
          }
        }
        sessionStorage.setItem("favorites", result);  
      }
    }
    static getFavoritePets() {
      let result = sessionStorage.getItem("favorites");
      if (!result) {
        return []
      }
      return result;
    }
  }

// Borrowed from https://gomakethings.com/how-to-get-the-value-of-a-querystring-with-native-javascript/
  var getQueryString = function ( field, url ) {
    var href = url ? url : window.location.href;
    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    var string = reg.exec(href);
    return string ? string[1] : null;
  };

