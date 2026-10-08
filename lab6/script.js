// Get the main content area 
const mainContent = document.getElementById("main-content");

// Get the sidebar buttons 
const aboutBakerButton = document.getElementById("about-baker"); const offeringsButton = document.getElementById("offerings"); const cateringButton = document.getElementById("catering");

aboutBakerButton.addEventListener("click", function() { mainContent.innerHTML = "<h2>About the Baker</h2> <p> Hi! My name is Victoria and I started Baking.Co because I stress bake and often have lots of left-over sweet treats, enough to share with family, friends, and through catering. Stop by my bakery on Bakers Street or look at some of my offerings on this website! </p>" ; });

offeringsButton.addEventListener("click", function() { mainContent.innerHTML = "<h2>Sweet Treats Available!</h2> <p> Fresh baked sourdough bread daily, this month's special of pumpkin cupcakes, and my famous Chocolate Chips! </p>" ; });

cateringButton.addEventListener("click", function() { mainContent.innerHTML = "<h2>I Love to Party!</h2> <p> I can bring sweet treats to you or you can pick them up! I will send you my test schedule and on the days before I have a large physics exam I will be more than happy to bake 100+ of your choice of items for your gathering. You can choose from cookies, cupcakes, or cakepops! </p>" ; }); 