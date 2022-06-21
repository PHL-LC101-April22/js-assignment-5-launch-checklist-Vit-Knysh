// Write your JavaScript code here!

const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       let pickedPlanet = pickPlanet (listedPlanets);
       addDestinationInfo (
        document,
        pickedPlanet.name,
        pickedPlanet.diameter,
        pickedPlanet.star,
        pickedPlanet.distance,
        pickedPlanet.moons,
        pickedPlanet.image
       );
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});