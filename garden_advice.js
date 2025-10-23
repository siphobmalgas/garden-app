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

// ==========================================
// CORE ADVICE FUNCTIONS
// ==========================================

/**
 * Generates seasonal gardening advice based on the current season
 * @param {string} season - The current season (spring, summer, autumn, winter)
 * @returns {string} Seasonal gardening advice
 */
function getSeasonalAdvice(season) {
    // Convert to lowercase for case-insensitive comparison
    const normalizedSeason = season.toLowerCase();
    
    switch (normalizedSeason) {
        case "spring":
            return "Start planting seeds and prepare your garden beds. Remove weeds and add compost.\n";
        case "summer":
            return "Water your plants regularly and provide some shade during hot days.\n";
        case "autumn":
        case "fall":
            return "Harvest your crops and prepare plants for winter. Plant bulbs for next spring.\n";
        case "winter":
            return "Protect your plants from frost with covers. Plan for next year's garden.\n";
        default:
            return "No specific advice available for this season. Please check your season input.\n";
    }
}

/**
 * Generates plant-specific gardening advice based on plant type
 * @param {string} plantType - The type of plant (flower, vegetable, herb, tree)
 * @returns {string} Plant-specific gardening advice
 */
function getPlantTypeAdvice(plantType) {
    // Convert to lowercase for case-insensitive comparison
    const normalizedPlantType = plantType.toLowerCase();
    
    switch (normalizedPlantType) {
        case "flower":
            return "Use fertilizer to encourage blooms. Deadhead spent flowers regularly.";
        case "vegetable":
            return "Keep an eye out for pests! Ensure proper spacing and regular harvesting.";
        case "herb":
            return "Pinch flowers to keep leaves tender. Harvest regularly to encourage growth.";
        case "tree":
            return "Ensure deep watering and proper mulching. Prune during dormant season.";
        default:
            return "No specific advice available for this plant type. Please check your plant type input.";
    }
}

/**
 * Combines seasonal and plant-specific advice into a comprehensive recommendation
 * @param {string} season - The current season
 * @param {string} plantType - The type of plant
 * @returns {string} Complete gardening advice combining both seasonal and plant-specific tips
 */
function generateGardenAdvice(season, plantType) {
    // Get individual advice components
    const seasonalTips = getSeasonalAdvice(season);
    const plantSpecificTips = getPlantTypeAdvice(plantType);
    
    // Combine advice with proper formatting
    const completeAdvice = `${seasonalTips}${plantSpecificTips}`;
    
    return completeAdvice;
}

/**
 * Validates input parameters to ensure they are valid
 * @param {string} season - The season to validate
 * @param {string} plantType - The plant type to validate
 * @returns {Object} Validation result with isValid boolean and error message if invalid
 */
function validateInputs(season, plantType) {
    const validSeasons = ["spring", "summer", "autumn", "fall", "winter"];
    const validPlantTypes = ["flower", "vegetable", "herb", "tree"];
    
    // Check if season is valid
    if (!validSeasons.includes(season.toLowerCase())) {
        return {
            isValid: false,
            error: `Invalid season: ${season}. Valid seasons are: ${validSeasons.join(", ")}`
        };
    }
    
    // Check if plant type is valid
    if (!validPlantTypes.includes(plantType.toLowerCase())) {
        return {
            isValid: false,
            error: `Invalid plant type: ${plantType}. Valid types are: ${validPlantTypes.join(", ")}`
        };
    }
    
    return { isValid: true };
}

/**
 * Displays the gardening advice to the console with proper formatting
 * @param {string} advice - The advice to display
 * @param {string} season - The season for context
 * @param {string} plantType - The plant type for context
 */
function displayAdvice(advice, season, plantType) {
    console.log("=".repeat(50));
    console.log("🌱 GARDEN ADVICE 🌱");
    console.log("=".repeat(50));
    console.log(`The current Season is: ${season.charAt(0).toUpperCase() + season.slice(1)}`);
    console.log(`The recommended Plant Type is: ${plantType.charAt(0).toUpperCase() + plantType.slice(1)}`);
    console.log("-".repeat(50));
    console.log("Plant Care Advice:");
    console.log("-".repeat(50));
    console.log(advice);
    console.log("=".repeat(50));
}

// ==========================================
// MAIN APPLICATION LOGIC
// ==========================================

/**
 * Main function that orchestrates the garden advice generation process
 * This function ties together all the modular components
 */
function runGardenAdviceApp() {
    // Get current season and plant type (currently hardcoded)
    const currentSeason = DEFAULT_CONFIG.season;
    const currentPlantType = DEFAULT_CONFIG.plantType;
    
    // Validate inputs before processing
    const validation = validateInputs(currentSeason, currentPlantType);
    
    if (!validation.isValid) {
        console.error("❌ Input Error:", validation.error);
        return;
    }
    
    // Generate comprehensive gardening advice
    const gardenAdvice = generateGardenAdvice(currentSeason, currentPlantType);
    
    // Display the advice to the user
    displayAdvice(gardenAdvice, currentSeason, currentPlantType);
}

// ==========================================
// APPLICATION INITIALIZATION
// ==========================================

/**
 * Initialize and run the garden advice application
 * This is the entry point of the application
 */
runGardenAdviceApp();

// ==========================================
// FUTURE ENHANCEMENT IDEAS
// ==========================================

// TODO: Possible future enhancements:
// - Add user input functionality with prompt() or HTML forms
// - Store advice in a comprehensive object/database for multiple scenarios
// - Add plant recommendations based on season and climate
// - Include watering schedules and fertilizer recommendations
