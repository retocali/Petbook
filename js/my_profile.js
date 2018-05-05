
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
function showMyProfile() {
    // document.getElementById("username").innerHTML = "USERNAME: " + State.getUsername();
    // document.getElementById("fullName").innerHTML = "FULL NAME: "+ State.getFullName();
    // document.getElementById("location").innerHTML = "LOCATION: " + State.getLocation();
    // document.getElementById("status").innerHTML = "STATUS: " + State.getStatus();
    // document.getElementById("bio").innerHTML = "BIO: " + State.getBio();
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
    
    // let addedPets = document.getElementsByClassName("addedPets");
    // console.log(addedPets);
    // for (let i = 0; i < addedPets.length; i++) {
    //     let element = addedPets[i];
    //     element.remove()
    // }
    
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

        image.href.baseVal = "profiles/sample/sample-" + element.category + ".svg";
       
        image.setAttribute("height", "10vh");
        image.setAttribute("width", "10vh");
        image.setAttribute("x", "3vh");
        image.setAttribute("y", "3vh");
       
        newNode.children[3].innerHTML = element.petName;
       
        newNode.id = "";
       
        newNode.classList.add("addedPets");
        card.appendChild(newNode);
    }
    document.getElementById("addPet").addEventListener(
        "click", () => {
            document.getElementById("hovermenu").style.display = "inline"
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
        "species": "pet",
        "status": "hi!",
        "bio": "...",
        "profilePics" : [
            
        ],
        "category": "cat",
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
    showMyPets();
}

