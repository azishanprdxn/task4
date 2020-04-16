// Creating Array of Movies
var movies = [];

// Creating Object Constructor
class movie {
  constructor(name, releaseDate, actorsName, producersName) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.actorsName = actorsName;
    this.producersName = producersName;
  }
}

// Adding Movie Details in Movies Array
movies.push(new movie("Aquaman", 2018, "Jason Momoa", "Peter Safran"));
movies.push(new movie("Avatar", 2009, "Sam Worthington", "James Cameron"));
movies.push(new movie("Batman Begins", 2005, "Christian Bale", "Larry Franco"));
movies.push(new movie("Interstellar", 2014, "Matthew McConaughey", "Christopher Nolan"));
movies.push(new movie("John Wick", 2014, "Keanu Reeves", "Basil Iwanyk"));
movies.push(new movie("Man of Steel", 2013, "Henry Cavill", "Charles Roven"));
movies.push(new movie("The Avengers", 2012, "Robert Downey Jr.", "Kevin Feige"));
movies.push(new movie("The Martian", 2015, "Matt Damon", "Ridley Scott"));
movies.push(new movie("The Matrix", 1999, "Hugo Weaving", "Joel Silver"));
movies.push(new movie("Transformers", 2007, "Shia LaBeouf", "Ian Bryce"));

// Getting length of the Array
var length = movies.length;

// Display the Data in Table
for (var i = 0; i < length; i++) {
  document.getElementById("data").innerHTML +=
    "<tr>" +
    "<td>" + movies[i].name + "</td>" +
    "<td>" + movies[i].releaseDate + "</td>" +
    "<td>" + movies[i].actorsName + "</td>" +
    "<td>" + movies[i].producersName + "</td>" +
    "</tr>";
}

// Search Function
function onSearch() {
  var searchText = document.getElementById("search").value;
  searchText = searchText.toLowerCase();
  var isFound = false;
  if (!searchText) {
    document.getElementsByClassName('helper')[0].style.display = "block";
  } else {
    document.getElementsByClassName('helper')[0].style.display = "none";
    for (var i = 0; i < length; i++) {
      if (searchText == movies[i].name.toLowerCase() || searchText == movies[i].actorsName.toLowerCase()) {
        // Display the Result
        document.getElementById("data").innerHTML =
          "<tr>" +
          "<td>" + movies[i].name + "</td>" +
          "<td>" + movies[i].releaseDate + "</td>" +
          "<td>" + movies[i].actorsName + "</td>" +
          "<td>" + movies[i].producersName + "</td>" +
          "</tr>";
        isFound = true; // Set isFound = true once an entry is found
      }
    }
    // Alert If Entry is Found/Not Found
    if (!isFound) {
      alert("Entry not found!");
    } else {
      alert("Entry Found");
    }
    document.getElementById("search").value = ""; // Resets the Input Area
  }
}