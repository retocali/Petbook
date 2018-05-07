
Util.events(document, {
	// Final initalization entry point: the Javascript code inside this block
	// runs at the end of start-up when the DOM is ready
	"DOMContentLoaded": function() {
        data = new Data();
        showMyProfile();
        showMyFavorite();
		showMyPets();
		document.getElementById("addPet").addEventListener(
			"click", () => {
				document.getElementById("hovermenu").style.display = "inline"
			}
        );
        document.getElementById("cancel").addEventListener(
			"click", () => {
				document.getElementById("hovermenu").style.display = "none"
			}
        );
        document.getElementById("form").onsubmit = () => {
            addPet();
            document.getElementById("hovermenu").style.display = "none"
        }		
	},

	// Keyboard events arrive here
	"keydown": function(evt) {

    },

    // Click events arrive here
	"click": function(evt) {
	
    },
	"mousedown": function(evt) {

    },
	"mousemove": function(evt) {

    },
	"mouseup": function(evt) {

    }
});
function showMyFavorite() {
    let pets = data.getAllData();
    let favoritePets = State.getFavoritePets();
    let parent = document.getElementById("following");
    let followContainer = document.getElementById("followingPetContainer");
    
    for (let i = 0; i < favoritePets.length; i++) {
        const fav = favoritePets[i];
        const pet = data.getPet(fav);
        let newContainer = followContainer.cloneNode(true);
        let newDiv = newContainer.children[0];
        console.log(pets[fav]);
        newContainer.setAttribute("href", "social_pets.html?category=" + pet.category + 
                                          "&pet_id=" + pet.pet_id);
        newDiv.style.backgroundImage = "url(profiles/profile-pics/" + pet.petName + ".jpg), \
                                        url(profiles/sample/sample-"+pet.category+".svg)";
        parent.appendChild(newContainer);
    }
    
    followContainer.style.display = "none";
}

function showMyProfile() {
    document.getElementById("username").value = State.getUsername();
    document.getElementById("fullName").value = State.getFullName();
    document.getElementById("location").value = State.getLocation();
    document.getElementById("status").value = State.getStatus();
    document.getElementById("bio").value = State.getBio();

}
function showMyPets() {
    let allPets = State.getPets();
    if (!allPets) {
        return;
    }
    
    
    let card = document.getElementById("mypets");
    let node = document.getElementById("addPet");
    let newAdd = node.cloneNode(true);
    while (card.firstChild) {
        card.removeChild(card.firstChild);
    }
    card.appendChild(newAdd);
    
    for (let i = 0; i < allPets.length; i++) {
        const element = allPets[i];
        let newNode = newAdd.cloneNode(true);
        let image = newNode.children[1];
        console.log(element);
        image.href.baseVal = "profiles/sample/sample-" + element.category + ".svg";
       
        image.setAttribute("height", "10vh");
        image.setAttribute("width", "10vh");
        image.setAttribute("x", "3vh");
        image.setAttribute("y", "3vh");
        newNode.children[2].setAttribute("href", "social_pets.html?category=" + element.category + 
                                                 "&pet_id=" + element.pet_id);
        newNode.children[3].innerHTML = element.petName;
       
        newNode.id = "";
       
        newNode.classList.add("addedPets");
        card.appendChild(newNode);
    }
    document.getElementById("addPet").addEventListener(
        "click", () => {
            document.getElementById("hovermenu").style.display = "inline";  
        }
    );
}

function addPet() {
    var defaultPet = {
        "petName": "Petty White",
        "userName": State.getUsername(),
        "location": State.getLocation(),
        "age": "100",
        "gender": "female",
        "type": "pet",
        "status": "hi!",
        "bio": "...",
        "profilePics" : [
            
        ],
        "category": "cat",
        "adopted": false,
        "adoptable": false, 
        "pet_id": data.getAllData().length,
    };
    let array = document.getElementById("form").children;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log(element);
        let field = element.children[1];
        if (field) {
            console.log(element.children[1].name)
            console.log(element.children[1].value)
            if (field.value != "") {
                defaultPet[field.name] = field.value;
            }
        }
    }
    State.setPet(defaultPet);
    showMyPets();
}

