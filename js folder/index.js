
const projectSection = document.querySelector("#Projects"); //refers to Projects section by id
const projectsList = projectSection.querySelector("ul"); //assigning a projectsList name to the referenced ul element


//fetch for populating Projects section of portfolio
fetch("https://api.github.com/users/Medinab27/repos")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const repositories = data;
    console.log(repositories);

    for (let i = 0; i < repositories.length; i++) {
      const project = repositories[i].name; // assign to a variable project the name portion of the i array.
      //create an <li> element in the HTML document using DOM
      const li = document.createElement("li");
      li.innerText = project; //assign the name of the project to the li element 
      projectsList.appendChild(li); //add the li element with the project name to the HTML through the projectsList called in up above
    }
  })
  .catch((error) => {
    console.error("An error occured", error);
  });