var element_count = 0; //index count of the first circle in catagories
var data;

Util.events(document, {
	// Final initalization entry point: the Javascript code inside this block
	// runs at the end of start-up when the DOM is ready
	"DOMContentLoaded": function() {
		data = new SocialData();

        update_html();

		Util.one("#left_arrow").addEventListener('click', function(e) {
			goLeft();
		});

        Util.one("#right_arrow").addEventListener('click', function(e) {
			goRight();
		}); 
	},
    
});


function goLeft(){
    element_count++;
    if(element_count > 4){
        element_count = 0;
    }
    update_html();

    
}


function goRight(){
    element_count--;
    if(element_count < 0){
        element_count = 4;
    }
    update_html();
}


function update_html(){
	update_circle("circle1", element_count); //1st circle
	update_circle("circle2", (element_count+1)%data.catagories.length); //2nd circle 
	update_circle("circle3", (element_count+2)%data.catagories.length); //3rd circle 
	update_circle("circle4", (element_count+3)%data.catagories.length); //4th circle 
}

function update_circle(id, count){
	var circle1 = document.getElementById(id);
	circle1.innerHTML = "";
	var item = data.catagories[count];
	var circle1html = "<a href=\""+item.href+"\">";
	circle1html += "<div class=\"type\" style=\"background-image: url("+item.image;
	circle1html += ")\">"+"<div class=\"text_label\">"+item.catagory+"</div>";
	circle1html += "</div></a>";
	circle1.innerHTML = circle1html; 

}


