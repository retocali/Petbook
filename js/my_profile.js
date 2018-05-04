
Util.events(document, {
	// Final initalization entry point: the Javascript code inside this block
	// runs at the end of start-up when the DOM is ready
	"DOMContentLoaded": function() {
        showMyProfile();
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
        document.getElementById("signup").addEventListener(
			"click", () => {
                addPet();
                document.getElementById("hovermenu").style.display = "none"
			}
		);		
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
function showMyProfile() {
    document.getElementById("username").innerHTML = "USERNAME: " + State.getUsername();
    document.getElementById("fullName").innerHTML = "FULL NAME: "+ State.getFullName();
    document.getElementById("location").innerHTML = "LOCATION: " + State.getLocation();
    document.getElementById("status").innerHTML = "STATUS: " + State.getStatus();
    document.getElementById("bio").innerHTML = "BIO: " + State.getBio();

}
function showMyPets() {
    let allPets = State.getPets();
    if (!allPets) {
        return;
    }
    let card = document.getElementById(showMyPets);
    let node = document.getElementById(addPet);
    for (let i = 0; i < allPets.length; i++) {
        const element = allPets[i];
        let newNode = node.cloneNode();
        newNode.parentElement = card;
    }
}

function addPet() {
    var defaultPet = {
        "petName": "Petty White",
        "userName": State.getUsername(),
        "location": State.getLocation(),
        "age": "100",
        "gender": "female",
        "species": "pet",
        "status": "hi!",
        "bio": "...",
        "profilePics" : [
            
        ],
        "catagory": "cat",
        "adopted": false,
        "adoptable": false, 
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
    console.log(defaultPet);
    State.setPet(defaultPet);
}

