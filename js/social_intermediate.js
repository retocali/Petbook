var element_count = 0; //index count of the first circle in catagories
var data;
var category;
Util.events(document, {
	// Final initalization entry point: the Javascript code inside this block
	// runs at the end of start-up when the DOM is ready
	"DOMContentLoaded": function() {
		data = new Data();
		category = getQueryString("category", document.location.href);
		reloadHTML();
		console.log(State.getUncheckedTypes());
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
}

function reloadHTML(){
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