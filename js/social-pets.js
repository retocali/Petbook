var typeCount = 0;
var petCount = 0;
var maxPets = 0;
var data;
var catagory="";
var base_url = "social_pets.html";

Util.events(document, {
	// Final initalization entry point: the Javascript code inside this block
	// runs at the end of start-up when the DOM is ready
	"DOMContentLoaded": function() {
		data = new Data();
        maxPets = data.cats.length-1;
        catagory = getQueryString("catagory", document.location.href);
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
    var pet = data.allData[catagory][petCount];
    document.getElementById("pet_name").innerHTML = pet.petName;
    document.getElementById("user").innerHTML = pet.userName;
    document.getElementById("location").innerHTML = pet.location;
    document.getElementById("age").innerHTML = pet.age;
    document.getElementById("gender").innerHTML = pet.gender;
    document.getElementById("species").innerHTML = pet.species;
    document.getElementById("status").innerHTML = pet.status;
    document.getElementById("bio").innerHTML = pet.bio;

    document.getElementById("pet_pic").style="background-image: \
                                                url(profiles/profile-pics/"+ pet.petName+".jpg),\
                                                url(profiles/sample/sample-"+catagory+".svg)";
    

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

}

function updateURL(){
    var new_url = base_url+"?catagory="+catagory+"&petCount="+petCount;
    var current_url = document.location.href;
    document.location.href = new_url;
}

