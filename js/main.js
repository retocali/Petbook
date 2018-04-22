Util.events(document, {
	// Final initalization entry point: the Javascript code inside this block
	// runs at the end of start-up when the DOM is ready
	"DOMContentLoaded": function() {
		var rawfile = new XMLHttpRequest();
		rawfile.open("GET","profiles/example.json",true);

		rawfile.onreadystatechange = function () {               
           if (rawfile.readyState == 4) {                   
             var lines = rawfile.responseText;    //*here we get all lines from text file*
             console.log(lines);
             intoArray(lines);     *//here we call function with parameter "lines*"                   
           }               
       }
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

