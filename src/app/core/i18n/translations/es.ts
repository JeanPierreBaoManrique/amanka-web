export const ES_TRANSLATIONS = {
  common: {
    close: 'Cerrar',
  },

  menu: {
    filters: {
      all: 'Todos',
      spicy: 'Picante',
      advanced: 'Filtros avanzados',
      allergies: 'Alergias',
    },

    search: {
      placeholder: 'Buscar plato...',
      emptyTitle: 'No hay platos disponibles',
      emptyDescription:
        'Prueba otra categoría, búsqueda o filtro.',
    },

    detail: {
      allergens: 'Alérgenos',
      noAllergens: 'Sin alérgenos declarados',
      information: 'Información',
      glutenFree: 'Sin gluten',
      ingredients: 'Ingredientes principales',
      discoverTitle: 'Descubre cada plato',
      discoverDescription:
        'Pulsa el ojo para ver su fotografía, alérgenos e ingredientes.',
    },

    spicy: {
      none: 'Sin picante',
      mild: 'Picante suave',
      medium: 'Picante medio',
      high: 'Muy picante',
      veryHigh: 'Picante muy alto',
    },

    advancedFilters: {
      eyebrow: 'PERSONALIZA TU CARTA',
      title: 'Filtros avanzados',
      maximumSpicy: 'Picante máximo',
      allowedLevel: 'Nivel permitido',
      noSpicy: 'Sin picante',
      veryHigh: 'Muy alto',
      preferences: 'Preferencias',
      glutenFree: 'Sin gluten',
      lactoseFree: 'Sin lactosa',
      vegetarian: 'Vegetariano',
      vegan: 'Vegano',
      nutFree: 'Sin frutos secos',
      excludeAllergens: 'Excluir alérgenos',
      excludeExplanation:
        'Selecciona los alérgenos que quieres evitar.',
      reset: 'Restablecer',
      apply: 'Aplicar filtros',
    },

    allergenGuide: {
      eyebrow: 'INFORMACIÓN ALIMENTARIA',
      title: 'Guía de alérgenos',
      description:
        'Estos son los alérgenos que pueden aparecer indicados en nuestra carta.',
      important: 'Importante',
      warning:
        'Si tienes una alergia o intolerancia alimentaria, consulta con nuestro personal antes de realizar tu pedido.',
      understood: 'Entendido',
    },
  },
} as const;