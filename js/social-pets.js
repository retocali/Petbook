var pet_id = 0;
var data;
var category="";
var base_url = "social_pets.html";

Util.events(document, {
	// Final initalization entry point: the Javascript code inside this block
	// runs at the end of start-up when the DOM is ready
	"DOMContentLoaded": function() {
		data = new Data();

        category = getQueryString("category", document.location.href);
        var url_pet_id = getQueryString("pet_id", document.location.href);
        if(url_pet_id!= null){
            pet_id = parseInt(url_pet_id);
        }

        console.log(getPetIDOrder());
        update_html();

        Util.one("#back_btn").addEventListener('click', function(e) {
            document.location.href = "social_intermediate.html?category="+category;
        });

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
            var adopted = (adopt_pets.indexOf(pet_id) != -1); //if it's not -1 then its in the list

            if(adopted){
                document.getElementById("warning").innerHTML = "Cancle adoption process?"
            }else{
                document.getElementById("warning").innerHTML = "Email pet owner about adopting this pet?"
            }

            //show menu
            document.getElementById("hovermenu").setAttribute("style", "display:flex"); 
        });

        Util.one("#yesbtn").addEventListener('click', function(e) {
            var adopt_pets = State.getAdoptPets();
            var adopted = (adopt_pets.indexOf(pet_id) != -1); //if it's not -1 then its in the list

            if(adopted){
                State.unadoptPet(pet_id);
                document.getElementById("adopt_btn").style.backgroundColor ="var(--cranberry-color)";
                document.getElementById("adopt_btn").style.color ="var(--icing-color)";
            }
            else{
                State.adoptPet(pet_id);
                document.getElementById("adopt_btn").style.backgroundColor ="var(--orange-color)";
                document.getElementById("adopt_btn").style.color ="var(--cranberry-color)";

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


function getPetIDOrder(){
    var ids = [];
    var alltypes = getTypeCatagoryList();
    console.log(alltypes)
    var allpets = data.getAllData();
    var unwantedtypes = State.getUncheckedTypes();
    
    //doing things in this order to keep the same ordering as in the intermediate page
    for(var t=0; t<alltypes.length; t++){
        var type = alltypes[t];
        if(unwantedtypes.indexOf(type) == -1){
            //if type is not one of the ones in the skip list, then do the following
            for(var p=0; p<allpets.length; p++){
                var pet = allpets[p];
                if(pet.type == type){
                    ids.push(pet.pet_id);
                }
            }            
        }
    }
    return ids;
}

function goUp(){
    var order = getPetIDOrder();
    var current_index = order.indexOf(pet_id);
    if(current_index > 0){
        pet_id = order[current_index-1];
    }
    else{
        pet_id = order[order.length-1];
    }
    updateURL();    
}


function goDown(){
    var order = getPetIDOrder();
    var current_index = order.indexOf(pet_id);
    if(current_index < order.length-1){
        pet_id = order[current_index+1];
    }
    else{
        pet_id = order[0];
    }
    updateURL();  
}


function getPet(){
    var allpets = data.allData[category];
    for(var i=0; i<allpets.length; i++){
        if(allpets[i].pet_id == pet_id){
            return allpets[i];
        }
    }
}

function update_html(){
    var pet = getPet();
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
    var adopted = (adopt_pets.indexOf(pet_id) != -1); //if it's not -1 then its in the list
    if(adopted){
        document.getElementById("adopt_btn").style.backgroundColor ="var(--orange-color)";
        document.getElementById("adopt_btn").style.color ="var(--cranberry-color)";
    }
    else{
        document.getElementById("adopt_btn").style.backgroundColor ="var(--cranberry-color)";
        document.getElementById("adopt_btn").style.color ="var(--icing-color)";
    }

}


function updateURL(){
    var new_url = base_url+"?category="+category+"&pet_id="+pet_id;
    var current_url = document.location.href;
    document.location.href = new_url;
}

function toggleFavorite(){
    var favorite_pets = State.getFavoritePets();
    if(favorite_pets.indexOf(pet_id) != -1){ //if index is not -1 then the pet id is marked as favorite
        State.unfavoritePet(pet_id);
    }
    else{
        State.favoritePet(pet_id);
    }
    update_html();
}



function getTypeCatagoryList(){
    var pets = data.allData[category];
    var types = [];
    for(var i=0; i< pets.length; i++){
        var type = pets[i].type;
        if(!types.includes(type)){
            types.push(type);
        }
    }
    return types.sort();
}