export const EN_TRANSLATIONS = {
  common: {
    close: 'Close',
  },

  menu: {
    filters: {
      all: 'All',
      spicy: 'Spicy',
      advanced: 'Advanced filters',
      allergies: 'Allergies',
    },

    search: {
      placeholder: 'Search dishes...',
      emptyTitle: 'No dishes available',
      emptyDescription:
        'Try another category, search or filter.',
    },

    detail: {
      allergens: 'Allergens',
      noAllergens: 'No declared allergens',
      information: 'Information',
      glutenFree: 'Gluten-free',
      ingredients: 'Main ingredients',
      discoverTitle: 'Discover every dish',
      discoverDescription:
        'Tap the eye icon to view its photo, allergens and ingredients.',
    },

    spicy: {
      none: 'Not spicy',
      mild: 'Mild',
      medium: 'Medium spicy',
      high: 'Very spicy',
      veryHigh: 'Extremely spicy',
    },

    advancedFilters: {
      eyebrow: 'CUSTOMIZE YOUR MENU',
      title: 'Advanced filters',
      maximumSpicy: 'Maximum spice level',
      allowedLevel: 'Allowed level',
      noSpicy: 'Not spicy',
      veryHigh: 'Very high',
      preferences: 'Preferences',
      glutenFree: 'Gluten-free',
      lactoseFree: 'Lactose-free',
      vegetarian: 'Vegetarian',
      vegan: 'Vegan',
      nutFree: 'Nut-free',
      excludeAllergens: 'Exclude allergens',
      excludeExplanation:
        'Select the allergens you want to avoid.',
      reset: 'Reset',
      apply: 'Apply filters',
    },

    allergenGuide: {
      eyebrow: 'FOOD INFORMATION',
      title: 'Allergen guide',
      description:
        'These are the allergens that may be indicated on our menu.',
      important: 'Important',
      warning:
        'If you have a food allergy or intolerance, please speak to our staff before placing your order.',
      understood: 'Got it',
    },
  },
} as const;