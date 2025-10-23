/**
 * Garden Advice Application
 * Provides personalized gardening advice based on season and plant type
 * Refactored for better readability and modularity
 */

// ==========================================
// CONFIGURATION AND DEFAULT VALUES
// ==========================================

/**
 * Default configuration for the garden advice application
 * These values can be modified to change the default behavior
 */
const DEFAULT_CONFIG = {
    season: "summer",     // Default season - can be: spring, summer, autumn, winter
    plantType: "flower"   // Default plant type - can be: flower, vegetable, herb, tree
};

/**
 * South African plant recommendations for each season
 * Each season has 2 plants that grow well in South Africa
 */
const SOUTH_AFRICAN_PLANTS = {
    spring: {
        "beetroot": {
            name: "Beetroot",
            emoji: "🟣",
            category: "Spring vegetable",
            description: "Easy to grow root vegetable perfect for South African spring"
        },
        "gazania": {
            name: "Gazania",
            emoji: "�",
            category: "Spring flower",
            description: "Beautiful South African daisy that loves spring weather"
        }
    },
    summer: {
        "imphepho": {
            name: "Imphepho (Wild Sage)",
            emoji: "🌿",
            category: "Summer herb",
            description: "Traditional South African herb used for cleansing"
        },
        "strelitzia": {
            name: "Bird of Paradise",
            emoji: "🦅",
            category: "Summer flower",
            description: "Famous South African flower, very beautiful in summer"
        }
    },
    autumn: {
        "mealies": {
            name: "mealies (Sweet Corn)",
            emoji: "🌽",
            category: "Autumn vegetable",
            description: "Traditional South African corn, harvested in autumn"
        },
        "protea": {
            name: "Protea",
            emoji: "�",
            category: "Autumn flower",
            description: "South Africa's national flower, blooms in autumn"
        }
    },
    winter: {
        "buchu": {
            name: "Buchu",
            emoji: "🌿",
            category: "Winter herb",
            description: "Traditional South African medicinal herb"
        },
        "cycad": {
            name: "Cycad",
            emoji: "�",
            category: "Winter plant",
            description: "Ancient South African plant that survives winter"
        }
    }
};

// ==========================================
// CORE ADVICE FUNCTIONS
// ==========================================

/**
 * Simple seasonal advice for South African gardens
 */
function getSeasonalAdvice(season) {
    const normalizedSeason = season.toLowerCase();
    
    if (normalizedSeason === "spring") {
        return `🌸 SPRING GARDENING IN SOUTH AFRICA:
• Plant your vegetables now - it's the best time!
• Clean up your garden beds and remove weeds
• Start watering more as plants wake up
• Plant seeds for summer vegetables like tomatoes
• Spring is from September to November in SA
• Good time to plant beetroot and other root vegetables
• Watch out for late frost in the Highveld\n`;

    } else if (normalizedSeason === "summer") {
        return `☀️ SUMMER GARDENING IN SOUTH AFRICA:
• Water your plants early morning or late afternoon
• It's very hot, so give plants shade if needed
• Summer is December to February in SA
• Perfect time for herbs like imphepho
• Watch out for summer pests
• Mulch around plants to keep soil cool
• Plant heat-loving flowers like strelitzia\n`;

    } else if (normalizedSeason === "autumn") {
        return `🍂 AUTUMN GARDENING IN SOUTH AFRICA:
• Harvest your summer vegetables like mealies
• Autumn is March to May in SA
• Good time to plant proteas
• Prepare your garden for winter
• Plant bulbs for spring flowers
• Clean up fallen leaves
• Reduce watering as it gets cooler\n`;

    } else if (normalizedSeason === "winter") {
        return `❄️ WINTER GARDENING IN SOUTH AFRICA:
• Winter is June to August in SA
• Most of SA doesn't get snow, but it's cold
• Perfect time to plant buchu and other hardy herbs
• Protect tender plants from frost
• Plan your garden for next year
• Good time to prune trees
• Plant winter vegetables in warmer areas\n`;

    } else {
        return "Please choose a valid season.\n";
    }
}

/**
 * Generates plant-specific gardening advice based on plant type
 * @param {string} plantType - The type of plant (specific plant names or general categories)
 * @param {string} season - The current season for additional context
 * @returns {string} Plant-specific gardening advice
 */
function getPlantTypeAdvice(plantType, season = "") {
    // Convert to lowercase for case-insensitive comparison
    const normalizedPlantType = plantType.toLowerCase();
    
    // Check if it's a South African plant first
    if (season && SOUTH_AFRICAN_PLANTS[season.toLowerCase()] && SOUTH_AFRICAN_PLANTS[season.toLowerCase()][normalizedPlantType]) {
        const plant = SOUTH_AFRICAN_PLANTS[season.toLowerCase()][normalizedPlantType];
        return getSouthAfricanPlantAdvice(normalizedPlantType, plant, season);
    }
    
    // General plant types - simple advice
    if (normalizedPlantType === "flower") {
        return `🌺 FLOWER TIPS FOR SOUTH AFRICA:
• Water flowers in the morning or evening
• Remove old flowers to get more blooms
• Most flowers like sun but need some shade in hot areas
• Add compost to soil before planting
• South African flowers like gazanias are very hardy`;

    } else if (normalizedPlantType === "vegetable") {
        return `🥕 VEGETABLE TIPS FOR SOUTH AFRICA:
• Check your vegetables every day for bugs
• Give them enough space to grow
• Pick vegetables regularly so plants keep producing
• Popular SA vegetables: beetroot, mealies, pumpkin
• Water deeply but not too often`;

    } else if (normalizedPlantType === "herb") {
        return `🌿 HERB TIPS FOR SOUTH AFRICA:
• Most herbs don't need much water
• Pick herbs in the morning for best flavor
• Traditional SA herbs: buchu, imphepho, wild garlic
• Pinch off flowers to keep leaves tender
• Dry herbs in a cool, dark place`;

    } else if (normalizedPlantType === "tree") {
        return `🌳 TREE TIPS FOR SOUTH AFRICA:
• Water trees deeply once a week
• Put mulch around the base (not touching the trunk)
• Prune trees in winter when they're sleeping
• Native SA trees: yellowwood, wild fig, baobab
• Young trees need protection from wind`;

    } else {
        return "Please choose a plant type from the list.";
    }
}

/**
 * Simple advice for South African plants
 * Easy to understand tips for each plant
 */
function getSouthAfricanPlantAdvice(plantName, plantInfo, season) {
    // Simple if-else statements that beginners can understand
    if (plantName === "beetroot") {
        return `🟣 BEETROOT TIPS (${season.toUpperCase()}):
• Plant beetroot seeds in spring when it's not too hot
• Water them every 2-3 days
• They like sunny spots in your garden
• You can eat both the roots and the leaves
• Ready to harvest in about 8-10 weeks
• Pull them out when they are about the size of a tennis ball`;

    } else if (plantName === "gazania") {
        return `� GAZANIA TIPS (${season.toUpperCase()}):
• These are South African flowers - very easy to grow!
• Plant them in a sunny spot
• Water them once a week (they don't need much water)
• Flowers close at night and open in the sun
• Remove old flowers to get more blooms
• They come in many bright colors`;

    } else if (plantName === "imphepho") {
        return `🌿 IMPHEPHO TIPS (${season.toUpperCase()}):
• This is a traditional South African herb
• Plant in summer when it's warm
• Needs very little water once it grows
• Used for cleansing and traditional medicine
• Grows wild in the mountains
• Harvest leaves and dry them for use`;

    } else if (plantName === "strelitzia") {
        return `🦅 BIRD OF PARADISE TIPS (${season.toUpperCase()}):
• South Africa's most famous flower!
• Needs lots of sun and warmth
• Water regularly in summer
• Takes 3-4 years to flower from seed
• Protect from strong wind
• The orange and blue flowers look like a bird`;

    } else if (plantName === "mealies") {
        return `🌽 mealies TIPS (${season.toUpperCase()}):
• mealies is what we call corn in South Africa
• Plant in spring, harvest in autumn
• Needs lots of water when growing
• Plant in rows with space between plants
• Ready when the kernels are fat and yellow
• Great for pap, braai, or eating fresh`;

    } else if (plantName === "protea") {
        return `� PROTEA TIPS (${season.toUpperCase()}):
• This is South Africa's national flower!
• Grows naturally in the Western Cape
• Needs very little water (too much water kills them)
• Plant in sandy, well-draining soil
• Don't use fertilizer - they don't like it
• Beautiful flowers last long when cut`;

    } else if (plantName === "buchu") {
        return `🌿 BUCHU TIPS (${season.toUpperCase()}):
• Traditional Khoi-San medicinal plant
• Grows naturally in Western Cape mountains
• Needs very little water
• Harvest leaves for tea
• Used for kidney and stomach problems
• Plant in winter, grows slowly but lives long`;

    } else if (plantName === "cycad") {
        return `� CYCAD TIPS (${season.toUpperCase()}):
• Very old plant - older than dinosaurs!
• Grows very slowly (a few cm per year)
• Doesn't need much water
• Can live for hundreds of years
• Male and female plants are different
• Don't take from the wild - they are protected`;

    } else {
        return `${plantInfo.emoji} ${plantInfo.name.toUpperCase()} TIPS:
• This ${plantInfo.category} is good for ${season}
• ${plantInfo.description}
• Ask at your local nursery for more help`;
    }
}

/**
 * Simple function to combine season and plant advice
 */
function generateGardenAdvice(season, plantType) {
    // Get advice for the season
    const seasonalTips = getSeasonalAdvice(season);
    
    // Get advice for the plant
    const plantSpecificTips = getPlantTypeAdvice(plantType, season);
    
    // Put them together with a line break
    const completeAdvice = seasonalTips + "\n" + plantSpecificTips;
    
    return completeAdvice;
}

/**
 * Simple function to check if the user picked valid options
 */
function validateInputs(season, plantType) {
    // List of seasons we accept
    const validSeasons = ["spring", "summer", "autumn", "winter"];
    
    // List of general plant types
    const generalPlantTypes = ["flower", "vegetable", "herb", "tree"];
    
    // Get all South African plant names
    let validPlantTypes = generalPlantTypes.slice(); // Copy the array
    
    // Add all the South African plant names
    if (SOUTH_AFRICAN_PLANTS.spring) {
        validPlantTypes.push("beetroot", "gazania");
    }
    if (SOUTH_AFRICAN_PLANTS.summer) {
        validPlantTypes.push("imphepho", "strelitzia");
    }
    if (SOUTH_AFRICAN_PLANTS.autumn) {
        validPlantTypes.push("mealies", "protea");
    }
    if (SOUTH_AFRICAN_PLANTS.winter) {
        validPlantTypes.push("buchu", "cycad");
    }
    
    // Check if season is correct
    if (!validSeasons.includes(season.toLowerCase())) {
        return {
            isValid: false,
            error: `Please pick a valid season: ${validSeasons.join(", ")}`
        };
    }
    
    // Check if plant type is correct
    if (!validPlantTypes.includes(plantType.toLowerCase())) {
        return {
            isValid: false,
            error: `Please pick a plant from the list`
        };
    }
    
    return { isValid: true };
}

/**
 * Simple function to show advice on the webpage
 */
function displayAdvice(advice, season, plantType) {
    const adviceContainer = document.getElementById('advice-container');
    
    const adviceHTML = `
        <div class="advice-card">
            <h2>🌱 Your South African Garden Advice</h2>
            <div class="advice-header">
                <p><strong>Season:</strong> ${season}</p>
                <p><strong>Plant:</strong> ${plantType}</p>
            </div>
            <div class="advice-content">
                <pre>${advice}</pre>
            </div>
        </div>
    `;
    
    adviceContainer.innerHTML = adviceHTML;
    adviceContainer.style.display = 'block';
}

/**
 * What happens when user submits the form
 */
function handleFormSubmission(event) {
    event.preventDefault(); // Stop the form from refreshing the page
    
    // Get what the user chose
    const season = document.getElementById('season').value;
    const plantType = document.getElementById('plant-type').value;
    
    // Check if the choices are valid
    const validation = validateInputs(season, plantType);
    
    if (!validation.isValid) {
        displayError(validation.error);
        return;
    }
    
    // Get the advice and show it
    const advice = generateGardenAdvice(season, plantType);
    displayAdvice(advice, season, plantType);
}

/**
 * Simple function to update plant choices when season changes
 */
function updatePlantOptions(season) {
    const plantSelect = document.getElementById('plant-type');
    
    // Clear all options first
    plantSelect.innerHTML = '<option value="">Choose a plant for this season...</option>';
    
    // Add general types first
    const generalOptions = [
        { value: 'flower', text: '🌺 Flowers (General)' },
        { value: 'vegetable', text: '🥕 Vegetables (General)' },
        { value: 'herb', text: '🌿 Herbs (General)' },
        { value: 'tree', text: '🌳 Trees (General)' }
    ];
    
    // Add each general option
    for (let i = 0; i < generalOptions.length; i++) {
        const option = generalOptions[i];
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.text;
        plantSelect.appendChild(optionElement);
    }
    
    // Add South African plants for this season
    if (season && SOUTH_AFRICAN_PLANTS[season.toLowerCase()]) {
        // Add a separator line
        const separatorOption = document.createElement('option');
        separatorOption.disabled = true;
        separatorOption.textContent = `--- South African Plants for ${season} ---`;
        plantSelect.appendChild(separatorOption);
        
        // Get the plants for this season
        const seasonalPlants = SOUTH_AFRICAN_PLANTS[season.toLowerCase()];
        
        // Add each plant option
        for (const plantKey in seasonalPlants) {
            const plant = seasonalPlants[plantKey];
            const optionElement = document.createElement('option');
            optionElement.value = plantKey;
            optionElement.textContent = `${plant.emoji} ${plant.name} (${plant.category})`;
            optionElement.style.fontWeight = 'bold';
            optionElement.style.color = '#4CAF50';
            plantSelect.appendChild(optionElement);
        }
    }
}

/**
 * Show error messages to user
 */
function displayError(errorMessage) {
    const adviceContainer = document.getElementById('advice-container');
    adviceContainer.innerHTML = `
        <div class="error-card">
            <h3>❌ Oops!</h3>
            <p>${errorMessage}</p>
        </div>
    `;
    adviceContainer.style.display = 'block';
}

/**
 * What happens when user picks a season
 */
function handleSeasonChange(event) {
    const selectedSeason = event.target.value;
    updatePlantOptions(selectedSeason);
    
    // Reset plant choice
    const plantSelect = document.getElementById('plant-type');
    plantSelect.value = '';
    
    // Hide old advice
    const adviceContainer = document.getElementById('advice-container');
    adviceContainer.style.display = 'none';
}

/**
 * Set up the app when page loads
 */
function initializeApp() {
    // Listen for form submission
    const form = document.getElementById('garden-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmission);
    }
    
    // Listen for season changes
    const seasonSelect = document.getElementById('season');
    if (seasonSelect) {
        seasonSelect.addEventListener('change', handleSeasonChange);
    }
    
    console.log('🌱 South African Garden App is ready!');
}

// ==========================================
// MAIN PART - START THE APP
// ==========================================

/**
 * Main function - starts everything
 */
function runGardenAdviceApp() {
    initializeApp();
}

/**
 * Wait for page to load, then start the app
 */
document.addEventListener('DOMContentLoaded', function() {
    runGardenAdviceApp();
});

// ==========================================
// IDEAS FOR FUTURE IMPROVEMENTS
// ==========================================

// TODO: Things we could add later:
// - More South African plants (succulents, fynbos plants)
// - Pictures of the plants
// - Regional advice (Western Cape vs Gauteng vs KZN)
// - Planting calendar for South Africa
// - Common pests in South Africa
// - Water-wise gardening tips
