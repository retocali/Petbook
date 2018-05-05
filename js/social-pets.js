var typeCount = 0;
var petCount = 0;
var maxPets = 0;
var data;
var category="";
var base_url = "social_pets.html";
var favorite_pets = new Set();

Util.events(document, {
	// Final initalization entry point: the Javascript code inside this block
	// runs at the end of start-up when the DOM is ready
	"DOMContentLoaded": function() {
		data = new Data();
        // favorite_pets = data.favorite_pets;
        // console.log(favorite_pets);

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
        })
	},
    
});


function goUp(){
    petCount++;
    if(petCount > maxPets){
        petCount = 0;
    }
    updateURL();
    // update_html();

    
}


function goDown(){
    petCount--;
    if(petCount < 0){
        petCount = maxPets;
    }
    updateURL();
    // update_html();

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

    var pet_id = pet.pet_id;
    if(favorite_pets.has(pet_id)){
        //if pet is marked as favorite
        document.getElementById("favorite").src = "img/gold_star.png";
    }
    else{
        document.getElementById("favorite").src = "img/star.png"
    }

    console.log(favorite_pets);

}

function updateURL(){
    var new_url = base_url+"?category="+category+"&petCount="+petCount;
    var current_url = document.location.href;
    document.location.href = new_url;
}

function toggleFavorite(){
    var pet_id = data.allData[category][petCount].pet_id;
    if(favorite_pets.has(pet_id)){
        favorite_pets.delete(pet_id);
    }
    else{
        favorite_pets.add(pet_id);
    }
    update_html();
    console.log(favorite_pets);

}