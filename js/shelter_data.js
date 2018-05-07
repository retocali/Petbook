function shelterData() {
  /**
   * Usage:
   *  
   *  Each species has their own member variable with there profiles
   *
   *  Every profile is under the member variable "allData" 
   *  and points to each species using a string as a key
   * 
   */
  
  this.shelters = [
    {
      "name": "Save the Turtles",
      "location": "410 Memorial Dr, Cambridge, MA 02139",
      "mainPic": "adoption-info/shelter-pics/turtle-shelter.jpg",
      "profilePics" : [ 'profiles/profile-posts/Sheldon1.jpg',
                        'profiles/profile-posts/Sheldon2.jpg',
                        'profiles/profile-posts/Sheldon3.jpg',
                        'profiles/profile-posts/Sheldon4.jpg',
                        'profiles/profile-posts/Sheldon5.jpg',
                        'profiles/profile-posts/Sheldon6.jpg'
      ],
      "sentEmail": "false"
    },
    {
      "name": "All Fish Go To Heaven",
      "location": "1 Central Wharf, Boston, MA 02110",
      "mainPic": "adoption-info/shelter-pics/fish-shelter.jpg",
      "profilePics" : [ "adoption-info/shelter-pics/cuteFish1.jpg",
                        "adoption-info/shelter-pics/cuteFish2.jpg",
                        "adoption-info/shelter-pics/cuteFish3.jpg",
                        "adoption-info/shelter-pics/cuteFish4.png",
                        "adoption-info/shelter-pics/cuteFish5.jpg"

      ],
      "sentEmail": "false"
    },
    {
      "name": "Sticks Save Lives",
      "location": "77 Massachusetts Ave, Cambridge, MA 02139",
      "mainPic": "adoption-info/shelter-pics/stick-shelter.jpg",
      "profilePics" : [ "adoption-info/shelter-pics/cutePuppy1.jpg",
                        "adoption-info/shelter-pics/cutePuppy2.jpg",
                        "adoption-info/shelter-pics/cutePuppy3.jpg",
                        "adoption-info/shelter-pics/cutePuppy4.jpg",
                        "adoption-info/shelter-pics/cutePuppy5.jpg"
      ],
      "sentEmail": "false"
    }
  ]
  this.shelters = checkStorage(this.shelters);
}

function checkStorage(shelters) {
  for (let i = 0; i < shelters.length; i++) {
    let shelter = shelters[i];
    let result = sessionStorage.getItem(shelter.name+"-emailed", true);
    if (result) {
      shelter.sentEmail = true;
    }
  }
  return shelters;
}