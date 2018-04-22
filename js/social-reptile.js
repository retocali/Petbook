var typeCount = 0;
var petCount = 0;

var data;

Util.events(document, {
	// Final initalization entry point: the Javascript code inside this block
	// runs at the end of start-up when the DOM is ready
	"DOMContentLoaded": function() {
		data = new Data();

        document.getElementById("pet_name").innerHTML = data.reptiles[petCount].petName;
        document.getElementById("user").innerHTML = data.reptiles[petCount].userName;
        document.getElementById("location").innerHTML = data.reptiles[petCount].location;
        document.getElementById("age").innerHTML = data.reptiles[petCount].age;
        document.getElementById("gender").innerHTML = data.reptiles[petCount].gender;
        document.getElementById("species").innerHTML = data.reptiles[petCount].species;
        document.getElementById("status").innerHTML = data.reptiles[petCount].status;
        document.getElementById("bio").innerHTML = data.reptiles[petCount].bio;


        //html for the posts
        var petpost = document.getElementById("pet-post");
        petpost.innerHTML = "";

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
    if(data.reptiles[petCount].catagory == 'reptile'){
        update_html();
        var petpost = document.getElementById("pet-post");
        petpost.innerHTML = "";
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
    if(data.reptiles[petCount].catagory == 'reptile'){
        update_html();
        var petpost = document.getElementById("pet-post");
        petpost.innerHTML = "";
    }
    else{
        goUp();
    }

}


function update_html(){
    document.getElementById("pet_name").innerHTML = data.reptiles[petCount].petName;
    document.getElementById("user").innerHTML = data.reptiles[petCount].userName;
    document.getElementById("location").innerHTML = data.reptiles[petCount].location;
    document.getElementById("age").innerHTML = data.reptiles[petCount].age;
    document.getElementById("gender").innerHTML = data.reptiles[petCount].gender;
    document.getElementById("species").innerHTML = data.reptiles[petCount].species;
    document.getElementById("status").innerHTML = data.reptiles[petCount].status;
    document.getElementById("bio").innerHTML = data.reptiles[petCount].bio;

    document.getElementById("pet_pic").style="background-image: url(profiles/profile-pics/"+ data.reptiles[petCount].petName+".jpg)";
        
}



