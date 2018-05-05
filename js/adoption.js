var count = 0;

var data;

var currentPet;

var totalShelters = 3;



Util.events(document, {
	// Final initalization entry point: the Javascript code inside this block
	// runs at the end of start-up when the DOM is ready
	"DOMContentLoaded": function() {
		data = new shelterData();
        setShelter();
        
		Util.one("#up_arrow").addEventListener('click', function(e) {
			count++
            if(count == totalShelters){
                count = 0;
            }
            setShelter();
		});

        Util.one("#down_arrow").addEventListener('click', function(e) {
			count--
            if(count < 0){
                count = totalShelters -1;
            }
            setShelter();
		});

        Util.one("#adopt_btn").addEventListener('click', function(e) {
            if(data.shelters[count].sentEmail == "false"){
                document.getElementById("warning").innerHTML = "Send an email to visit and adopt an animal at this shelter?"
            }
            else{
                document.getElementById("warning").innerHTML = "Cancel visit to the shelter?"
            }
			document.getElementById("hovermenu").setAttribute("style", "display:flex")
		});

        Util.one("#yesbtn").addEventListener('click', function(e) {
			if(data.shelters[count].sentEmail == "false"){
                data.shelters[count].sentEmail = "true"
                document.getElementById("adopt_container").innerHTML = "Cancel Adoption"
                document.getElementById("hovermenu").setAttribute("style", "display:flex")
            }
            else{
                data.shelters[count].sentEmail = "false"
                document.getElementById("adopt_container").innerHTML = "Set Up Adoption"
            }
            document.getElementById("hovermenu").setAttribute("style", "display:none")
		});

        Util.one("#nobtn").addEventListener('click', function(e) {
			document.getElementById("hovermenu").setAttribute("style", "display:none")
		});
	},
    
});


function setShelter(){
        currentPet = data.shelters[count];

        if(currentPet.sentEmail == "false"){
                document.getElementById("adopt_container").innerHTML = "Set Up Adoption"
            }
            else{
                document.getElementById("adopt_container").innerHTML = "Cancel Adoption"
            }

        var petPic = document.getElementById("pet_pic");

        petPic.setAttribute("style", "background-image: url("+currentPet.mainPic+")")

        var petpost = document.getElementById("pet_posts");
        petpost.innerHTML = "";

        var posts="";
        var post_pics = currentPet.profilePics;
        
        for(var i=0; i<post_pics.length; i++){
            var pic_location = post_pics[i];
            var post_html = "<div class=\"post\" style=\"background-image: url("+pic_location+")\"></div>";
            posts += post_html;
        }
        petpost.innerHTML = posts;

        var shelterName = document.getElementById("shelter-label")
        var locationName = document.getElementById("location-label")

        shelterName.innerHTML = currentPet.name;
        locationName.innerHTML = currentPet.location;
}









