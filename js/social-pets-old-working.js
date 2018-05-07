var typeCount = 0;
var petCount = 0;
var maxPets = 0;
var data;
var category="";
var base_url = "social_pets.html";

Util.events(document, {
	// Final initalization entry point: the Javascript code inside this block
	// runs at the end of start-up when the DOM is ready
	"DOMContentLoaded": function() {
		data = new Data();

        category = getQueryString("category", document.location.href);
        maxPets = data.allData[category].length-1;
        var url_petcount = getQueryString("petCount", document.location.href);
        if(url_petcount!= null){
            petCount = parseInt(url_petcount);
        }

        update_html();

		Util.one("#up_arrow").addEventListener('click', function(e) {
			goUp();
		});

        Util.one("#down_arrow").addEventListener('click', function(e) {
			goDown();
		}); 

        Util.one("#favorite").addEventListener('click', function(e){
            toggleFavorite();
        });

        
        Util.one("#adopt_btn").addEventListener('click', function(e) {
            var adopt_pets = State.getAdoptPets();
            var pet_id = data.allData[category][petCount].pet_id;
            var adopted = (adopt_pets.indexOf(pet_id) != -1); //if it's not -1 then its in the list

            if(adopted){
                document.getElementById("warning").innerHTML = "Cancle adoption process?"
            }else{
                document.getElementById("warning").innerHTML = "Contact pet owner about adopting this pet?"
            }

            //show menu
            document.getElementById("hovermenu").setAttribute("style", "display:flex"); 
        });

        Util.one("#yesbtn").addEventListener('click', function(e) {
            var adopt_pets = State.getAdoptPets();
            var pet_id = data.allData[category][petCount].pet_id;
            var adopted = (adopt_pets.indexOf(pet_id) != -1); //if it's not -1 then its in the list

            if(adopted){
                State.unadoptPet(pet_id);
                document.getElementById("adopt_btn").style.backgroundColor ="var(--cranberry-color)";
                document.getElementById("adopt_container").style.backgroundColor ="var(--cranberry-color)";
                document.getElementById("adopt_container").style.color ="var(--icing-color)";
            }
            else{
                State.adoptPet(pet_id);
                document.getElementById("adopt_btn").style.backgroundColor ="var(--orange-color)";
                document.getElementById("adopt_container").style.backgroundColor ="var(--orange-color)";
                document.getElementById("adopt_container").style.color ="var(--cranberry-color)";

            }

            //hide menu
            document.getElementById("hovermenu").setAttribute("style", "display:none")
        });

        Util.one("#nobtn").addEventListener('click', function(e) {
            //hide menu
            document.getElementById("hovermenu").setAttribute("style", "display:none");
        });
	},
    
});


function goUp(){
    petCount++;
    if(petCount > maxPets){
        petCount = 0;
    }
    updateURL();    
}


function goDown(){
    petCount--;
    if(petCount < 0){
        petCount = maxPets;
    }
    updateURL();
}


function update_html(){
    var pet = data.allData[category][petCount];
    document.getElementById("pet_name").innerHTML = pet.petName;
    document.getElementById("user").innerHTML = pet.userName;
    document.getElementById("location").innerHTML = pet.location;
    document.getElementById("age").innerHTML = pet.age;
    document.getElementById("gender").innerHTML = pet.gender;
    document.getElementById("type").innerHTML = pet.type;
    document.getElementById("status").innerHTML = pet.status;
    document.getElementById("bio").innerHTML = pet.bio;

    document.getElementById("pet_pic").style="background-image: \
                                                url(profiles/profile-pics/"+ pet.petName+".jpg),\
                                                url(profiles/sample/sample-"+category+".svg)";
    

    var petpost = document.getElementById("pet_posts");
    petpost.innerHTML = "";

    var posts="";
    var post_pics = pet.profilePics;
    
    for(var i=0; i<post_pics.length; i++){
        var pic_location = post_pics[i];
        var post_html = "<div class=\"post\" style=\"background-image: url("+pic_location+")\"></div>";
        posts += post_html;
    }
    petpost.innerHTML = posts;

    //handling favorites
    var pet_id = pet.pet_id;
    var favorite_pets = State.getFavoritePets();
    if(favorite_pets.indexOf(pet_id) != -1){ //if index is not -1 then the pet id is marked as favorite
        document.getElementById("favorite").src = "img/star_on.svg";
    }
    else{
        document.getElementById("favorite").src = "img/star.svg"
    }

    //if pet is not adoptable, make adopt button disappear
    if(!pet.adoptable){
        document.getElementById('adopt_btn').style.display = "none";
    }

    var adopt_pets = State.getAdoptPets();
    var pet_id = data.allData[category][petCount].pet_id;
    var adopted = (adopt_pets.indexOf(pet_id) != -1); //if it's not -1 then its in the list
    if(adopted){
        document.getElementById("adopt_btn").style.backgroundColor ="var(--orange-color)";
        document.getElementById("adopt_container").style.backgroundColor ="var(--orange-color)";
        document.getElementById("adopt_container").style.color ="var(--cranberry-color)";
    }
    else{
        document.getElementById("adopt_btn").style.backgroundColor ="var(--cranberry-color)";
        document.getElementById("adopt_container").style.backgroundColor ="var(--cranberry-color)";
        document.getElementById("adopt_container").style.color ="var(--icing-color)";
    }

}

function updateURL(){
    var new_url = base_url+"?category="+category+"&petCount="+petCount;
    var current_url = document.location.href;
    document.location.href = new_url;
}

function toggleFavorite(){
    var pet_id = data.allData[category][petCount].pet_id;
    console.log(data.allData[category][petCount]);
    var favorite_pets = State.getFavoritePets();
    if(favorite_pets.indexOf(pet_id) != -1){ //if index is not -1 then the pet id is marked as favorite
        State.unfavoritePet(pet_id);
    }
    else{
        State.favoritePet(pet_id);
    }
    update_html();
}
