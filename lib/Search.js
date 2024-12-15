const keywordMapping = {
    "home": "../Screens/HomePage.html",
    "about": "../Screens/AboutPage.html",
    "services": "../Screens/ServicePage.html",
    "more": "../Screens/MorePage.html",
    "crafting": "../Screens/Services/Classes/CraftingClassHome.html",
    "gathering": "../Screens/Services/Classes/GatheringClassHome.html",
    "dps": "../Screens/Services/Classes/DPSClassHome.html",
    "tank": "../Screens/Services/Classes/TankClassHome.html",
    "healer": "../Screens/Services/Classes/HealerClassHome.html",
    "raiding": "../Screens/Services/Raids/RaidingHome.html",
    "ocean fishing": "../Screens/Services/OceanFishingHome.html",
    "fish guide": "../Screens/Services/FishTypesHome.html",
};

document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const query = searchInput.value.trim().toLowerCase();
        if (query) {
            const matches = Object.keys(keywordMapping).filter(key => key.includes(query));

            if (matches.length === 1) {
                window.location.href = keywordMapping[matches[0]];
            } else if (matches.length > 1) {
                alert(`Multiple matches found: ${matches.join(", ")}`);
            } else {
                alert("No match found. Please try a different keyword.");
            }
        } else {
            alert('Please enter a search query.');
        }
    });
});