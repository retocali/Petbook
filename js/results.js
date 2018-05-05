Util.events(document, {
	// Final initalization entry point: the Javascript code inside this block
	// runs at the end of start-up when the DOM is ready
	"DOMContentLoaded": function() {
		data = new Data();
        let query = getQueryString("search");
        console.log(query);
        document.getElementById("searchResults").innerHTML = "Results for <text style='color: #8BCBC8'>"+ query + "</text>";
	},
    
}); 