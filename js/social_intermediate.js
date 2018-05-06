var element_count = 0; //index count of the first circle in catagories
var data;
var category;
Util.events(document, {
	// Final initalization entry point: the Javascript code inside this block
	// runs at the end of start-up when the DOM is ready
	"DOMContentLoaded": function() {
		data = new Data();
		category = getQueryString("category", document.location.href);
		updateTypesHTML();
	},
    
});

function updateTypesHTML(){
	var types =getTypeList();
	var listing = document.getElementById('pet_type_list');
	listing.innerHTML = '';
	var newHTML='';
	for(var i=0; i<types.length; i++){
		// console.log(types[i]);
		newHTML += "<label class=\"checkbox_container\">"+ types[i];
		newHTML += "<input type=\"checkbox\" checked=\"checked\">";
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