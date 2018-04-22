Util.events(document, {
	// Final initalization entry point: the Javascript code inside this block
	// runs at the end of start-up when the DOM is ready
	"DOMContentLoaded": function() {


        function select(event){
            //Check if already selected, o.w deselect
            if (event.path.length==8){
                var elt=event.path[0]
            }
            if (event.path.length==9){
                var elt=event.path[1]
                console.log(elt.id);
            }
            var color=elt.style.backgroundColor;
            if (elt.id.substring(0,2)=="up"){
                //Act on the other button
                var other_button=document.getElementById("down_"+elt.id.substring(elt.id.length-1));
            }
            else{
                var other_button=document.getElementById("up_"+elt.id.substring(elt.id.length-1));
            } 
            if (color!="#ECC7C0"){
                elt.style.backgroundColor="#ECC7C0";
                //make the other button the other color
                other_button.style.backgroundColor="#3C2E3D";
            }
            else{
                elt.style.backgroundColor="#3C2E3D";
                other_button.style.backgroundColor="#ECC7C0";
            }
        }
        var up_button=document.getElementById("up_1");

        //console.log(up_button);
        Util.one("[id='up_1']").addEventListener("click",select);
        Util.one("[id='down_1']").addEventListener("click",select);
        Util.one("[id='up_2']").addEventListener("click",select);
        Util.one("[id='down_2']").addEventListener("click",select);
        Util.one("[id='up_3']").addEventListener("click",select);
        Util.one("[id='down_3']").addEventListener("click",select);

	},

	// Keyboard events arrive here
	"keydown": function(evt) {

    },

    // Click events arrive here
	"click": function(evt) {

    },
	"mousedown": function(evt) {

    },
	"mousemove": function(evt) {

    },
	"mouseup": function(evt) {

    }
});