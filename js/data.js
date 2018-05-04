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
      "catagory": "cat",
      "adopted": false,
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
      "catagory": "cat",
      "adopted": false,
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
      "profilePics" : [ 'profiles/profile-posts/Fluffy1.jpg',
                        'profiles/profile-posts/Fluffy2.jpg',
        
      ],
      "catagory": "cat",
      "adopted": false,
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
      "profilePics" : ['profiles/profile-posts/Simba1.jpg',
                        'profiles/profile-posts/Simba2.jpg',
                        'profiles/profile-posts/Simba3.jpg',
                        'profiles/profile-posts/Simba4.jpg',
                        'profiles/profile-posts/Simba5.jpg',
                        'profiles/profile-posts/Simba6.jpg', 
        
      ],
      "catagory": "cat",
      "adopted": false,
      "adoptable" : false,
    },

    {
      "petName": "Cheshire",
      "userName": "wanderer_al1c3",
      "location": "Boston",
      "age": "??",
      "gender": "Male",
      "species": "British Shorthair",
      "status": "*Grins*",
      "bio": "Most everyone's mad here",
      "profilePics" : [ 'profiles/profile-posts/Cheshire1.jpg',
                        'profiles/profile-posts/Cheshire2.jpg',
                        'profiles/profile-posts/Cheshire3.jpg',
        
      ],
      "catagory": "cat",
      "adopted": false,
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
      "profilePics" : ['profiles/profile-posts/luna1.jpg',
                      'profiles/profile-posts/luna2.jpg',
                      'profiles/profile-posts/luna3.jpg',
                      'profiles/profile-posts/luna4.jpg',
                      'profiles/profile-posts/luna5.jpg',
                      'profiles/profile-posts/luna6.jpg',
      
      ],
      "catagory": "dog",
      "adopted": false,
      "adoptable" : false,
    },
    {
      "petName": "Rocky",
      "userName": "hamburger321",
      "location": "Utah",
      "age": "6",
      "gender": "Male",
      "species": "Chihuahua",
      "status": "Quero TacoBell",
      "bio": "Eats tacos and only tacos.  Surprisingly not obese",
      "profilePics" : ['profiles/profile-posts/rocky1.jpg',
                      'profiles/profile-posts/rocky2.jpg',
                      'profiles/profile-posts/rocky3.jpg',
      
      ],
      "catagory": "dog",
      "adopted": false,
      "adoptable" : true,
    },
    {
      "petName": "Sebastian",
      "userName": "ivan_snow",
      "location": "Minnesota",
      "age": "18",
      "gender": "Male",
      "species": "Great Dane",
      "catagory": "dog",
      "status": "View's nice up here",
      "bio": "4 feet tall",
      "profilePics" : ['profiles/profile-posts/sebastian1.jpg',
                      'profiles/profile-posts/sebastian2.jpg',
      
      ],
      "catagory": "dog",
      "adopted": false,
      "adoptable" : true,
    },
    {
      "petName": "Coco",
      "userName": "elsa_icy",
      "location": "Canada",
      "age": "9",
      "gender": "Female",
      "species": "Poodle",
      "catagory": "dog",
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
      "catagory": "dog",
      "adopted": false,
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
      "profilePics" : [ 'profiles/profile-posts/bailey1.jpg',
                        'profiles/profile-posts/bailey2.jpg',
                        'profiles/profile-posts/bailey3.jpg',
                        'profiles/profile-posts/bailey4.jpg',
                        'profiles/profile-posts/bailey5.jpg'
          
      ],
      "catagory": "dog",
      "adopted": false,
      "adoptable" : true,
    },
  ];

  this.reptiles = [
    {
      "petName": "Sheldon",
      "userName": "King_Leopold_IV",
      "location": "Sheldon Court, NY",
      "age": "87",
      "gender": "Male",
      "species": "Argentinian Sand Turtle",
      "status": "Feeling Lively",
      "bio": "Ruler of New York.  Loves his top hat and cane",
      "profilePics" : [ 'profiles/profile-posts/Sheldon1.jpg',
                        'profiles/profile-posts/Sheldon2.jpg',
                        'profiles/profile-posts/Sheldon3.jpg',
                        'profiles/profile-posts/Sheldon4.jpg',
                        'profiles/profile-posts/Sheldon5.jpg',
                        'profiles/profile-posts/Sheldon6.jpg'
      ],
      "catagory": "reptile",
      "adopted": false,
      "adoptable" : true,
    },
    {
      "petName": "Reptar",
      "userName": "Tom",
      "location": "Louisiana",
      "age": "28",
      "gender": "Male",
      "species": "Reptar Species",
      "status": "GRAAAARRR",
      "bio": "Protects and destroys cities.  He does whatever",
      "profilePics" : [ "profiles/profile-posts/Reptar1.png",
                        "profiles/profile-posts/Reptar2.png",
      ],
      "catagory": "reptile",
      "adopted": false,
      "adoptable" : false,
    },
    {
      "petName": "Smaug",
      "userName": "Bilba_Baggos11111",
      "location": "New Zealand",
      "age": "?",
      "gender": "Male",
      "species": "Smol lizard",
      "status": "I AM FIRE. I AM DEATH.",
      "bio": "Likes money.  Likes to make money.  Likes to kill to make money",
      "profilePics" : [ "profiles/profile-posts/Smaug1.jpg",
                        "profiles/profile-posts/Smaug2.jpg",
                        "profiles/profile-posts/Smaug3.jpg",
      ],
      "catagory": "reptile",
      "adopted": false,
      "adoptable" : true,
    },

    {
      "petName": "MasterOfBurgs",
      "userName": "SandwichKingII",
      "location": "Sandwich, MA",
      "age": "5",
      "gender": "Female",
      "species": "Burger Turtle",
      "status": "Medium Well",
      "bio": "Master of the burger arts, this turt is all about the burgers.  Please, no pickles",
      "profilePics" : [ "profiles/profile-posts/MasterOfBurgs1.jpg",
                        "profiles/profile-posts/MasterOfBurgs2.jpg",
                        "profiles/profile-posts/MasterOfBurgs3.jpg"
      ],
      "catagory": "reptile",
      "adopted": false,
      "adoptable" : false,
    },

    {
      "petName": "Smaugbaby",
      "userName": "Frodoo2",
      "location": "New Zealand",
      "age": "?",
      "gender": "Male",
      "species": "Large Dragon",
      "status": "I AM DRAGON. I AM DEATH",
      "bio": "Likes money.  Likes to make money.  Likes to make money to compensate.",
      "profilePics" : [ "profiles/profile-posts/Smaugbaby1.jpg",
                        "profiles/profile-posts/Smaugbaby2.jpg",
                        "profiles/profile-posts/Smaugbaby3.jpg",
      ],
      "catagory": "reptile",
      "adopted": false,
      "adoptable" : true,
    },
  ];

  this.birds = [
    {
      "petName": "Birbsy",
      "userName": "Tea_Time23",
      "location": "Pandora",
      "age": "2",
      "gender": "Female",
      "species": "Budgerigar",
      "status": "It's time for Tea!",
      "bio": "Survives on a healthy diet of tea and pop rocks",
      "profilePics" : [
      
      ],
      "catagory": "bird",
      "adopted": false,
      "adoptable" : true,
    },

    {
      "petName": "Fortweny",
      "userName": "Maddie_Jhonson",
      "location": "Colorado",
      "age": "40",
      "gender": "Male",
      "species": "Hawk",
      "status": "duuuuuuuuuuude",
      "bio": "Tends to fixate on things and slowly melt.  Looking for someone to chill with",
      "profilePics" : [
      
      ],
      "catagory": "bird",
      "adopted": false,
      "adoptable" : true,
    },

    {
      "petName": "TorpedoDan",
      "userName": "TorpedosForSale",
      "location": "Australia",
      "age": "24",
      "gender": "Male",
      "species": "Shrike",
      "status": "weeeeeeeeeeeeeeeeeeeeeeeeee",
      "bio": "Incredibly throwable.  Flies through the air at Mach 2",
      "profilePics" : [
      
      ],
      "catagory": "bird",
      "adopted": false,
      "adoptable" : false,
    },
    {
      "petName": "CoolBirb",
      "userName": "RadMcStud",
      "location": "California",
      "age": "16",
      "gender": "Female",
      "species": "Parrotlet",
      "status": "Haters gonna hate",
      "bio": "Coolest bird on the market.  Skating is her passion",
      "profilePics" : [
      
      ],
      "catagory": "bird",
      "adopted": false,
      "adoptable" : true,
    },
    {
      "petName": "TonyBudgie",
      "userName": "TonyHawk23",
      "location": "Nevada",
      "age": "49",
      "gender": "Female",
      "species": "Budgie",
      "status": "KickFlip!",
      "bio": "CoolBirb's mentor.  Retired from her skating career, she still got the moves",
      "profilePics" : [
      
      ],
      "catagory": "bird",
      "adopted": false,
      "adoptable" : false,
    },
  ];

  this.fish = [
    {
      "petName": "Sushi",
      "userName": "Yamato's",
      "location": "Massachusetts",
      "age": "Eternal",
      "gender": "Female",
      "species": "Atlantic Trout",
      "status": "Delicious",
      "bio": "Swims deep in the arctic, tends to be caught by fisherman.  Constantly gets resurrected from death",
      "profilePics" : [
      
      ],
      "catagory": "fish",
      "adopted": false,
      "adoptable" : true,
    },

    {
      "petName": "LifeVest",
      "userName": "SafteyFirst12223",
      "location": "Arizona",
      "age": "9",
      "gender": "Male",
      "species": "Bubble Eyed Goldfish",
      "status": "Safe, for now",
      "bio": "This fish can't swim.  Uses floatation devices to float out to the surface and escape.",
      "profilePics" : [
      
      ],
      "catagory": "fish",
      "adopted": false,
      "adoptable" : true,
    },
    {
      "petName": "Filet",
      "userName": "McDonald's",
      "location": "Arkansas",
      "age": "0",
      "gender": "Male",
      "species": "Sandwich Fish",
      "status": "This was fate",
      "bio": "Doesn't eat much.  Needs little care.  Please give walks at least once a week",
      "profilePics" : [
      
      ],
      "catagory": "fish",
      "adopted": false,
      "adoptable" : true,
    },

    {
      "petName": "Boxy",
      "userName": "FedEx3456",
      "location": "Minnesota",
      "age": "4",
      "gender": "Female",
      "species": "CowFish",
      "status": "Boxed up",
      "bio": "Hates being in boxes.  Prefers pina coladas and long airplane flights",
      "profilePics" : [
      
      ],
      "catagory": "fish",
      "adopted": false,
      "adoptable" : false,
    },

    {
      "petName": "Puffy",
      "userName": "BuffyVS223",
      "location": "New York",
      "age": "32",
      "gender": "Female",
      "species": "Puffer fish",
      "status": "Slaying Vampires",
      "bio": "Kills vampires and turns into balloons.  Read her novel (To Puff and Slay)",
      "profilePics" : [
      
      ],
      "catagory": "fish",
      "adopted": false,
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

class State {
  
  static signIn() {
    sessionStorage.setItem("signedIn", true);
    console.log(sessionStorage.getItem("signedIn"));
  }
  static isSignedIn() {
    let result = sessionStorage.getItem("signedIn");
    if( typeof result == 'undefined' ) {
      return false;
    }
    return result;
  }
  static getUsername() {
    let result = sessionStorage.getItem("username");
    if( typeof result == 'undefined' ) {
      return "username123";
    }
    return result;
  }
  static getFullName() {
    let result1 = sessionStorage.getItem("firstName");
    let result2 = sessionStorage.getItem("lastName");
    if( typeof result1 == 'undefined' ) {
      result1 = "John";
    } if( typeof result2 == 'undefined' ) {
      result2 = "Doe";
    }
    return result1 + " " + result2;
  }
  static getUsername() {
    let result = sessionStorage.getItem("location");
    if( typeof result == 'undefined' ) {
      return "Unknown";
    }
    return result;
  }
  static getBio() {
    let result = sessionStorage.getItem("bio");
    if( typeof result == 'undefined' ) {
      return "Hello!";
    }
    return result;
  }
}
