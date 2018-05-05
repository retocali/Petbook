var typeCount = 0;
var petCount = 0;
var maxPets = 0;
var data;

Util.events(document, {
	// Final initalization entry point: the Javascript code inside this block
	// runs at the end of start-up when the DOM is ready
	"DOMContentLoaded": function() {
		data = new Data();
        maxPets = data.cats.length-1;

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
    if(data.cats[petCount].catagory == 'cat'){
        update_html();
    }
    else{
        goUp();
    }
}


function goDown(){
    petCount--;
    if(petCount < 0){
        petCount = maxPets;
    }
    if(data.cats[petCount].catagory == 'cat'){
        update_html();
    }
    else{
        goUp();
    }

}


function update_html(){
    document.getElementById("pet_name").innerHTML = data.cats[petCount].petName;
    document.getElementById("user").innerHTML = data.cats[petCount].userName;
    document.getElementById("location").innerHTML = data.cats[petCount].location;
    document.getElementById("age").innerHTML = data.cats[petCount].age;
    document.getElementById("gender").innerHTML = data.cats[petCount].gender;
    document.getElementById("species").innerHTML = data.cats[petCount].species;
    document.getElementById("status").innerHTML = data.cats[petCount].status;
    document.getElementById("bio").innerHTML = data.cats[petCount].bio;

    document.getElementById("pet_pic").style="background-image: \
                                                url(profiles/profile-pics/"+ data.cats[petCount].petName+".jpg),\
                                                url(profiles/sample/sample-cat.svg)";
    

    var petpost = document.getElementById("pet_posts");
    petpost.innerHTML = "";

    var posts="";
    var post_pics = data.cats[petCount].profilePics;
    
    for(var i=0; i<post_pics.length; i++){
        var pic_location = post_pics[i];
        var post_html = "<div class=\"post\" style=\"background-image: url("+pic_location+")\"></div>";
        posts += post_html;
    }
    petpost.innerHTML = posts;
}



