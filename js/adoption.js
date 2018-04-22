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

		Util.one("#up_arrow").addEventListener('click', function(e) {
			goUp();
		});

        Util.one("#down_arrow").addEventListener('click', function(e) {
			goDown();
		}); 
	},
    
});


function goUp(){
    typeCount++;
    if(typeCount > 4){
        typeCount = 0;
        petCount++;
    }
    if(petCount > 4){
        petCount = 0;
    }
    console.log(typeCount)
    console.log(petCount)
    if(typeCount == 0){
        if(data.reptiles[petCount].adoptable == true){
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
        else{
            goUp();
        }
        
    }
    else if(typeCount == 1){
        if(data.birds[petCount].adoptable == true){
            document.getElementById("pet_name").innerHTML = data.birds[petCount].petName;
            document.getElementById("user").innerHTML = data.birds[petCount].userName;
            document.getElementById("location").innerHTML = data.birds[petCount].location;
            document.getElementById("age").innerHTML = data.birds[petCount].age;
            document.getElementById("gender").innerHTML = data.birds[petCount].gender;
            document.getElementById("species").innerHTML = data.birds[petCount].species;
            document.getElementById("status").innerHTML = data.birds[petCount].status;
            document.getElementById("bio").innerHTML = data.birds[petCount].bio;

            document.getElementById("pet_pic").style="background-image: url(profiles/profile-pics/"+ data.birds[petCount].petName+".jpg)";
        }
        else{
            goUp();
        }

    }
    else if(typeCount == 2){
        if(data.cats[petCount].adoptable == true){
            document.getElementById("pet_name").innerHTML = data.cats[petCount].petName;
            document.getElementById("user").innerHTML = data.cats[petCount].userName;
            document.getElementById("location").innerHTML = data.cats[petCount].location;
            document.getElementById("age").innerHTML = data.cats[petCount].age;
            document.getElementById("gender").innerHTML = data.cats[petCount].gender;
            document.getElementById("species").innerHTML = data.cats[petCount].species;
            document.getElementById("status").innerHTML = data.cats[petCount].status;
            document.getElementById("bio").innerHTML = data.cats[petCount].bio;

            document.getElementById("pet_pic").style="background-image: url(profiles/profile-pics/"+ data.cats[petCount].petName+".jpg)";
        }
        else{
            goUp();
        }
    }
    else if(typeCount == 3){
        if(data.dogs[petCount].adoptable == true){
            document.getElementById("pet_name").innerHTML = data.dogs[petCount].petName;
            document.getElementById("user").innerHTML = data.dogs[petCount].userName;
            document.getElementById("location").innerHTML = data.dogs[petCount].location;
            document.getElementById("age").innerHTML = data.dogs[petCount].age;
            document.getElementById("gender").innerHTML = data.dogs[petCount].gender;
            document.getElementById("species").innerHTML = data.dogs[petCount].species;
            document.getElementById("status").innerHTML = data.dogs[petCount].status;
            document.getElementById("bio").innerHTML = data.dogs[petCount].bio;

            document.getElementById("pet_pic").style="background-image: url(profiles/profile-pics/"+ data.dogs[petCount].petName+".jpg)";
        }
        else{
            goUp();
        }
    }
    else if(typeCount == 4){
        if(data.fish[petCount].adoptable == true){
            document.getElementById("pet_name").innerHTML = data.fish[petCount].petName;
            document.getElementById("user").innerHTML = data.fish[petCount].userName;
            document.getElementById("location").innerHTML = data.fish[petCount].location;
            document.getElementById("age").innerHTML = data.fish[petCount].age;
            document.getElementById("gender").innerHTML = data.fish[petCount].gender;
            document.getElementById("species").innerHTML = data.fish[petCount].species;
            document.getElementById("status").innerHTML = data.fish[petCount].status;
            document.getElementById("bio").innerHTML = data.fish[petCount].bio;

            document.getElementById("pet_pic").style="background-image: url(profiles/profile-pics/"+ data.fish[petCount].petName+".jpg)";
        }
        else{
            goUp();
        }
    }

}






function goDown(){
    typeCount--;
    if(typeCount < 0){
        typeCount = 4;
        petCount--;
    }
    if(petCount < 0){
        petCount = 4;
    }
    console.log(typeCount)
    console.log(petCount)
    if(typeCount == 0){
        if(data.reptiles[petCount].adoptable == true){
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
        else{
            goDown();
        }
        
    }
    else if(typeCount == 1){
        if(data.birds[petCount].adoptable == true){
            document.getElementById("pet_name").innerHTML = data.birds[petCount].petName;
            document.getElementById("user").innerHTML = data.birds[petCount].userName;
            document.getElementById("location").innerHTML = data.birds[petCount].location;
            document.getElementById("age").innerHTML = data.birds[petCount].age;
            document.getElementById("gender").innerHTML = data.birds[petCount].gender;
            document.getElementById("species").innerHTML = data.birds[petCount].species;
            document.getElementById("status").innerHTML = data.birds[petCount].status;
            document.getElementById("bio").innerHTML = data.birds[petCount].bio;

            document.getElementById("pet_pic").style="background-image: url(profiles/profile-pics/"+ data.birds[petCount].petName+".jpg)";
        }
        else{
            goDown();
        }

    }
    else if(typeCount == 2){
        if(data.cats[petCount].adoptable == true){
            document.getElementById("pet_name").innerHTML = data.cats[petCount].petName;
            document.getElementById("user").innerHTML = data.cats[petCount].userName;
            document.getElementById("location").innerHTML = data.cats[petCount].location;
            document.getElementById("age").innerHTML = data.cats[petCount].age;
            document.getElementById("gender").innerHTML = data.cats[petCount].gender;
            document.getElementById("species").innerHTML = data.cats[petCount].species;
            document.getElementById("status").innerHTML = data.cats[petCount].status;
            document.getElementById("bio").innerHTML = data.cats[petCount].bio;

            document.getElementById("pet_pic").style="background-image: url(profiles/profile-pics/"+ data.cats[petCount].petName+".jpg)";
        }
        else{
            goDown();
        }
    }
    else if(typeCount == 3){
        if(data.dogs[petCount].adoptable == true){
            document.getElementById("pet_name").innerHTML = data.dogs[petCount].petName;
            document.getElementById("user").innerHTML = data.dogs[petCount].userName;
            document.getElementById("location").innerHTML = data.dogs[petCount].location;
            document.getElementById("age").innerHTML = data.dogs[petCount].age;
            document.getElementById("gender").innerHTML = data.dogs[petCount].gender;
            document.getElementById("species").innerHTML = data.dogs[petCount].species;
            document.getElementById("status").innerHTML = data.dogs[petCount].status;
            document.getElementById("bio").innerHTML = data.dogs[petCount].bio;

            document.getElementById("pet_pic").style="background-image: url(profiles/profile-pics/"+ data.dogs[petCount].petName+".jpg)";
        }
        else{
            goDown();
        }
    }
    else if(typeCount == 4){
        if(data.fish[petCount].adoptable == true){
            document.getElementById("pet_name").innerHTML = data.fish[petCount].petName;
            document.getElementById("user").innerHTML = data.fish[petCount].userName;
            document.getElementById("location").innerHTML = data.fish[petCount].location;
            document.getElementById("age").innerHTML = data.fish[petCount].age;
            document.getElementById("gender").innerHTML = data.fish[petCount].gender;
            document.getElementById("species").innerHTML = data.fish[petCount].species;
            document.getElementById("status").innerHTML = data.fish[petCount].status;
            document.getElementById("bio").innerHTML = data.fish[petCount].bio;

            document.getElementById("pet_pic").style="background-image: url(profiles/profile-pics/"+ data.fish[petCount].petName+".jpg)";
        }
        else{
            goDown();
        }
    }

}






