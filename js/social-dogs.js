var typeCount = 0;
var petCount = 0;

var data;

Util.events(document, {
	// Final initalization entry point: the Javascript code inside this block
	// runs at the end of start-up when the DOM is ready
	"DOMContentLoaded": function() {
		data = new Data();

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
    if(petCount > 4){
        petCount = 0;
    }
    if(data.dogs[petCount].catagory == 'dog'){
        update_html();
    }
    else{
        goUp();
    }
}


function goDown(){
    petCount--;
    if(petCount < 0){
        petCount = 4;
    }
    if(data.dogs[petCount].catagory == 'dog'){
        update_html();
    }
    else{
        goUp();
    }

}


function update_html(){
    document.getElementById("pet_name").innerHTML = data.dogs[petCount].petName;
    document.getElementById("user").innerHTML = data.dogs[petCount].userName;
    document.getElementById("location").innerHTML = data.dogs[petCount].location;
    document.getElementById("age").innerHTML = data.dogs[petCount].age;
    document.getElementById("gender").innerHTML = data.dogs[petCount].gender;
    document.getElementById("species").innerHTML = data.dogs[petCount].species;
    document.getElementById("status").innerHTML = data.dogs[petCount].status;
    document.getElementById("bio").innerHTML = data.dogs[petCount].bio;

    document.getElementById("pet_pic").style="background-image: url(profiles/profile-pics/"+ data.dogs[petCount].petName+".jpg)";
    

    var petpost = document.getElementById("pet_posts");
    petpost.innerHTML = "";

    var posts="";
    var post_pics = data.dogs[petCount].profilePics;
    
    for(var i=0; i<post_pics.length; i++){
        var pic_location = post_pics[i];
        var post_html = "<div class=\"post\" style=\"background-image: url("+pic_location+")\"></div>";
        posts += post_html;
    }
    petpost.innerHTML = posts;
}



