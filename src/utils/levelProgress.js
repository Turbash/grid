const GRID_LEVEL_KEY = "fruitbox-grid-level";
const FLEX_LEVEL_KEY = "fruitbox-flex-level";

export const saveLevelProgress = (mode, level) => {
  try {
    const key = mode === "grid" ? GRID_LEVEL_KEY : FLEX_LEVEL_KEY;
    localStorage.setItem(key, level.toString());
  } catch (error) {
    console.warn("Failed to save level progress:", error);
  }
};

export const loadLevelProgress = (mode) => {
  try {
    const key = mode === "grid" ? GRID_LEVEL_KEY : FLEX_LEVEL_KEY;
    const savedLevel = localStorage.getItem(key);
    return savedLevel ? parseInt(savedLevel, 10) : 1;
  } catch (error) {
    console.warn("Failed to load level progress:", error);
    return 1;
  }
};

export const getMaxReachedLevel = (mode) => {
  return loadLevelProgress(mode);
};

export const resetProgress = (mode) => {
  try {
    const key = mode === "grid" ? GRID_LEVEL_KEY : FLEX_LEVEL_KEY;
    localStorage.removeItem(key);
  } catch (error) {
    console.warn("Failed to reset progress:", error);
  }
};

export const resetAllProgress = () => {
  try {
    localStorage.removeItem(GRID_LEVEL_KEY);
    localStorage.removeItem(FLEX_LEVEL_KEY);
  } catch (error) {
    console.warn("Failed to reset all progress:", error);
  }
};
