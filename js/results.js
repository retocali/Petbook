Util.events(document, {
	// Final initalization entry point: the Javascript code inside this block
	// runs at the end of start-up when the DOM is ready
	"DOMContentLoaded": function() {
		data = new Data();
        let query = getQueryString("search");
        console.log(query);
        document.getElementById("searchResults").innerHTML = 
                    "Results for <text style='color: #8BCBC8'>"+ query + "</text><div id='results'></div>";
        showResults(query);
	},
    
}); 

function showResults(query) {
    let results = document.getElementById("results");
    switch (query) {
        case "dog":
            results.innerHTML = generateResults(data.dogs);
            return;
        case "cat":
            results.innerHTML = generateResults(data.cats);
            return;
        case "bird":
            results.innerHTML = generateResults(data.birds);
            return;
        case "fish":
            results.innerHTML = generateResults(data.fish);
            return; 
        case "reptile":
            results.innerHTML = generateResults(data.reptiles);
            return;
    }
    
}

function generateResults(data) {
    let resultsHTML = "";
    for (let i = 0; i < data.length; i++) {
        let element = data[i];
        resultsHTML += "<a href=social_pets.html?catagory=" + element.catagory +
                        "&petCount=" + i + " id='resultLink'>" + element.petName + "</a><br>";
    }
    return resultsHTML;
}