var element_count = 0; //index count of the first circle in catagories
var data;
var category;
Util.events(document, {
	// Final initalization entry point: the Javascript code inside this block
	// runs at the end of start-up when the DOM is ready
	"DOMContentLoaded": function() {
		data = new Data();
		category = getQueryString("category", document.location.href);
		updateHTML();
		
	},
    
});


function checkboxChange(checkbox){
	var uncheckedList = State.getUncheckedTypes();
	var text = checkbox.parentNode.firstChild.innerHTML;
	if(uncheckedList.indexOf(text) != -1){
		//if in the list then remove from list
		State.removeUncheckedType(text);
	}
	else{
		//if not in list then add to list
		State.addUncheckedType(text);
	}
	updateHTML();
}

function getTypeList(){
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


function loadTypesHTML(){
	var types =getTypeList();
	var listing = document.getElementById('pet_type_list');
	listing.innerHTML = '';
	var newHTML='';

	var uncheckedList = State.getUncheckedTypes();

	for(var i=0; i<types.length; i++){
		// console.log(types[i]);
		newHTML += "<label class=\"checkbox_container\">";
		newHTML += "<div class=\"type_name\">"+types[i]+"</div>";
		newHTML += "<input id=\""+i+"\" type=\"checkbox\"";

		if(uncheckedList.indexOf(types[i]) == -1){
			//if not in the list, then load page with the check box checked
			newHTML += " checked=\"checked\"";
		}
		newHTML += "onclick=\"checkboxChange(this)\"/>";
		newHTML += "<span class=\"checkmark\"></span></label>";
	}
	listing.innerHTML = newHTML;
}

function petPicsHTML(){
	var alltypes = getTypeList();
	var skiptypes = State.getUncheckedTypes();
	var maxPets = data.allData[category].length-1;
	var view = document.getElementById('pet_view_container');
	view.innerHTML = '';
	var newHTML = '';
	console.log(skiptypes);
	for(var t=0; t<alltypes.length; t++){
		var type = alltypes[t];
		if(skiptypes.indexOf(type) == -1){
			//if type is not one of the ones in the skip list, then do the following
			newHTML += "<div class=\"view_container\">";
			newHTML += "<div class=\"type_label\">"+type+"</div>";
			newHTML += "<div class=\"circle_container\">";

			for(var i=0; i<= maxPets; i++){
				var pet = data.allData[category][i];
				if(pet.petName == "Cheshire"){
					console.log("Cheshire foudn!!!");
				}
				if(pet.type == type){
					newHTML += "<div>";
					newHTML += "<div class=\"pet_pic\" ";
					newHTML += "id=\""+pet.pet_id+"\" ";
					newHTML += 	"style=\"background-image: \
                                                url(profiles/profile-pics/"+ pet.petName+".jpg),\
                                                url(profiles/sample/sample-"+category+".svg)\"";
					newHTML += "></div></div>"
				}
			}
			newHTML += "</div></div></div>";
		}
	}
	if(newHTML == ''){
		//if no results are found
		newHTML += "<div id=\"no_pet_view\">No pet type selected.<div>";
	}
	view.innerHTML = newHTML;
}

function petPicsLinksHTML(){
	var views = document.getElementsByClassName("view_container");
	for(var v=0; v<views.length; v++){
		var pet_divs = views[v].childNodes[1].childNodes;
		console.log(pet_divs);
		for(var i=0; i<pet_divs.length; i++){
			var pet_id = pet_divs[i].firstChild.id;
			var petHTML = pet_divs[i].innerHTML;
			var newHTML = "<a href=\"social_pets.html?category="+category+"&pet_id="+pet_id+"\"";
			newHTML +=">"+petHTML+"</a>";
			pet_divs[i].innerHTML = newHTML;

		}

	}


}

function updateHTML(){
	loadTypesHTML();
	petPicsHTML();
	petPicsLinksHTML();
	
}