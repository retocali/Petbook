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
    let resultsHTML = "<a class='resultTop' style='display:flex;'> \
    <div id='resultbox' style='border-right: 0'> PETNAME: </div>" +
   "<div id='resultbox' style='border-left: 0; border-right: 0'> USER: </div>" +
   "<div id='resultbox' style='border-left: 0;'> TYPE: </div></a>";
    for (let i = 0; i < data.length; i++) {
        let element = data[i];
        resultsHTML += "<a href=social_pets.html?category=" + element.category + "&petCount=" + i + " class='resultLink' style='display:flex;'> \
                        <div id='resultbox' style='border-right: 0'>" + element.petName + "</div>" +
                       "<div id='resultbox' style='border-left: 0; border-right: 0'>" + element.userName + "</div>" +
                       "<div id='resultbox' style='border-left: 0;'>" + element.type + "</div></a>";
    }
    return resultsHTML;
}