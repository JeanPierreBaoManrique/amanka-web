import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';

type CategoryId =
  | 'entradas'
  | 'tradiciones'
  | 'wok'
  | 'broaster'
  | 'parrilla'
  | 'ceviche'
  | 'combinados'
  | 'bebidas'
  | 'granizadas'
  | 'cervezas'
  | 'cocteles'
  | 'vinos'
  | 'desayuno'
  | 'sandwiches'
  | 'postres';

type MenuFilter = 'all' | 'spicy';

type AllergenId =
  | 'gluten'
  | 'crustaceans'
  | 'eggs'
  | 'fish'
  | 'peanuts'
  | 'soy'
  | 'milk'
  | 'nuts'
  | 'celery'
  | 'mustard'
  | 'sesame'
  | 'sulphites'
  | 'lupin'
  | 'molluscs';

interface Category {
  id: CategoryId;
  name: string;
  icon: string;
}

interface Allergen {
  id: AllergenId;
  name: string;
  icon: string;
}

interface Dish {
  id: string;
  categoryId: CategoryId;
  name: string;
  description: string;
  ingredients: string;
  price: number;
  image: string;
  allergens: AllergenId[];
  spicyLevel: 0 | 1 | 2 | 3 | 4 | 5;
  glutenFree: boolean;
}

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.html',
  styleUrl: './menu-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuPage {
  readonly categories: Category[] = [
    {
      id: 'entradas',
      name: 'Entradas',
      icon: '✣',
    },
    {
      id: 'tradiciones',
      name: 'Tradiciones',
      icon: '◉',
    },
    {
      id: 'wok',
      name: 'Wok peruano',
      icon: '♨',
    },
    {
      id: 'broaster',
      name: 'Broaster',
      icon: '◈',
    },
    {
      id: 'parrilla',
      name: 'Parrilla',
      icon: '♨',
    },
    {
      id: 'ceviche',
      name: 'Ceviches',
      icon: '◒',
    },
    {
      id: 'postres',
      name: 'Postres',
      icon: '♜',
    },
    {
      id: 'bebidas',
      name: 'Bebidas',
      icon: '◇',
    },
  ];

  readonly allergens: Allergen[] = [
    {
      id: 'gluten',
      name: 'Gluten',
      icon: '🌾',
    },
    {
      id: 'crustaceans',
      name: 'Crustáceos',
      icon: '🦐',
    },
    {
      id: 'eggs',
      name: 'Huevos',
      icon: '🥚',
    },
    {
      id: 'fish',
      name: 'Pescado',
      icon: '🐟',
    },
    {
      id: 'peanuts',
      name: 'Cacahuetes',
      icon: '🥜',
    },
    {
      id: 'soy',
      name: 'Soja',
      icon: '🫘',
    },
    {
      id: 'milk',
      name: 'Lácteos',
      icon: '🥛',
    },
    {
      id: 'nuts',
      name: 'Frutos secos',
      icon: '🌰',
    },
    {
      id: 'celery',
      name: 'Apio',
      icon: '🌿',
    },
    {
      id: 'mustard',
      name: 'Mostaza',
      icon: '🟡',
    },
    {
      id: 'sesame',
      name: 'Sésamo',
      icon: '⚪',
    },
    {
      id: 'sulphites',
      name: 'Sulfitos',
      icon: '🧪',
    },
    {
      id: 'lupin',
      name: 'Altramuces',
      icon: '🌱',
    },
    {
      id: 'molluscs',
      name: 'Moluscos',
      icon: '🦪',
    },
  ];

readonly dishes: Dish[] = [

  // =========================================================
  // ENTRADAS
  // =========================================================

  {
    id: 'leche-de-tigre',
    categoryId: 'entradas',
    name: 'Leche de Tigre',
    description:
      'Clásico marinado de pescado peruano con ají, limón, cebolla y cilantro.',
    ingredients:
      'Perca, limón, cebolla roja, cilantro, apio, kion, cancha chulpi, choclo, camote, sal y pimienta.',
    price: 15,
    image: 'images/entradas/lechetigre.jpg',
    allergens: ['fish', 'celery'],
    spicyLevel: 2,
    glutenFree: true,
  },

  {
    id: 'leche-tigre-aji-amarillo',
    categoryId: 'entradas',
    name: 'Leche de Tigre Ají Amarillo',
    description:
      'Leche de tigre con el toque cremoso del ají amarillo.',
    ingredients:
      'Perca, limón, cebolla roja, cilantro, apio, kion, ají amarillo, cancha chulpi, choclo, camote, sal y pimienta.',
    price: 15,
    image: 'images/entradas/lechetigre-ajiamarillo.jpg',
    allergens: ['fish', 'celery'],
    spicyLevel: 2,
    glutenFree: true,
  },

  {
    id: 'leche-tigre-rocoto',
    categoryId: 'entradas',
    name: 'Leche de Tigre de Rocoto',
    description:
      'Leche de tigre con rocoto para los amantes del picante.',
    ingredients:
      'Perca, limón, cebolla roja, cilantro, apio, kion, rocoto, cancha chulpi, choclo, camote, sal y pimienta.',
    price: 15,
    image: 'images/entradas/lechetigre-rocoto.jpg',
    allergens: ['fish', 'celery'],
    spicyLevel: 3,
    glutenFree: true,
  },

  {
    id: 'causa-limena',
    categoryId: 'entradas',
    name: 'Causa Limeña',
    description:
      'Tradicional causa peruana preparada con papa y ají amarillo.',
    ingredients:
      'Papa, ají amarillo, atún, mayonesa, aguacate, huevo y sal.',
    price: 10,
    image: 'images/entradas/causa.jpg',
    allergens: ['fish', 'eggs'],
    spicyLevel: 0,
    glutenFree: true,
  },

  {
    id: 'causa-acevichada',
    categoryId: 'entradas',
    name: 'Causa Acevichada',
    description:
      'Causa peruana coronada con ceviche de perca.',
    ingredients:
      'Papa, ají amarillo, sal, perca, limón, cebolla roja, cilantro, apio, kion, cancha chulpi, choclo y camote.',
    price: 15,
    image: 'images/entradas/causa-acevichada.jpg',
    allergens: ['fish', 'celery'],
    spicyLevel: 2,
    glutenFree: true,
  },

  {
    id: 'papa-rellena',
    categoryId: 'entradas',
    name: 'Papa Rellena',
    description:
      'Papa sancochada rellena de carne molida.',
    ingredients:
      'Papa sancochada, carne molida, sal y pimienta.',
    price: 8,
    image: 'images/entradas/paparellena.jpg',
    allergens: [],
    spicyLevel: 0,
    glutenFree: true,
  },

  {
    id: 'papa-huancaina',
    categoryId: 'entradas',
    name: 'Papa a la Huancaína Peruano',
    description:
      'Papa sancochada acompañada de salsa huancaína.',
    ingredients:
      'Papa sancochada, ají amarillo, galleta de cocina, leche, huevo y sal.',
    price: 10,
    image: 'images/entradas/papahuancayna.jpg',
    allergens: ['gluten', 'milk', 'eggs'],
    spicyLevel: 1,
    glutenFree: false,
  },

  {
    id: 'anticucho-papa-ensalada',
    categoryId: 'entradas',
    name: 'Anticucho con Papa y Ensalada',
    description:
      'Corazón de res marinado con ají panca y preparado a la parrilla.',
    ingredients:
      'Corazón de res, ají panca, sal, papa y ensalada.',
    price: 10,
    image: 'images/entradas/la-panka-anticuchos.jpg',
    allergens: [],
    spicyLevel: 1,
    glutenFree: true,
  },

  {
    id: 'anticucho-rachi',
    categoryId: 'entradas',
    name: 'Anticucho + Rachi con Papa',
    description:
      'Anticucho acompañado de rachi y papa.',
    ingredients:
      'Corazón de res, rachi, ají panca, sal y papa.',
    price: 13,
    image: 'images/entradas/anticucho-rachi.jpg',
    allergens: [],
    spicyLevel: 1,
    glutenFree: true,
  },

  {
    id: 'salchipapa',
    categoryId: 'entradas',
    name: 'Salchipapa',
    description:
      'Salchicha acompañada de patatas fritas.',
    ingredients:
      'Salchicha y patatas fritas.',
    price: 10,
    image: 'images/entradas/salchipapas.jpg',

    // Producto comercial: revisar etiqueta de la salchicha
    // antes de considerar definitiva la información de alérgenos.
    allergens: [],
    spicyLevel: 0,
    glutenFree: false,
  },

  {
    id: 'calamares-romana',
    categoryId: 'entradas',
    name: 'Calamares a la Romana',
    description:
      'Calamares fritos crujientes.',
    ingredients:
      'Calamar, huevo, harina de trigo, harina de maíz, sal y pimienta.',
    price: 10,
    image: 'images/entradas/calamares-romana.jpg',
    allergens: ['gluten', 'eggs', 'molluscs'],
    spicyLevel: 0,
    glutenFree: false,
  },

  {
    id: 'choritos-chalaca',
    categoryId: 'entradas',
    name: 'Choritos a la Chalaca',
    description:
      'Mejillones preparados al estilo chalaca.',
    ingredients:
      'Mejillones, cebolla roja, tomate, maíz, cilantro, limón y ají.',
    price: 10,
    image: 'images/entradas/Choritos_a_la_chalaca.jpg',
    allergens: ['molluscs'],
    spicyLevel: 1,
    glutenFree: true,
  },


  // =========================================================
  // TRADICIONES
  // =========================================================

  {
    id: 'arroz-mariscos',
    categoryId: 'tradiciones',
    name: 'Arroz con Mariscos',
    description:
      'Arroz preparado con mariscos y verduras al estilo peruano.',
    ingredients:
      'Arroz, gambas, calamar, mejillones, cebolla, tomate, zanahoria, alberjitas, ajo, cilantro y ají amarillo.',
    price: 20,
    image: 'assets/menu/arroz-mariscos.jpg',
    allergens: ['crustaceans', 'molluscs'],
    spicyLevel: 1,
    glutenFree: true,
  },

  {
    id: 'lomo-saltado',
    categoryId: 'tradiciones',
    name: 'Lomo Saltado',
    description:
      'Carne de res salteada al wok con cebolla y tomate, acompañada de arroz y patatas.',
    ingredients:
      'Carne de res, cebolla, tomate, salsa de soja, salsa de ostras, papa frita y arroz blanco.',
    price: 17,
    image: 'assets/menu/lomo-saltado.jpg',
    allergens: ['gluten', 'soy', 'molluscs'],
    spicyLevel: 0,
    glutenFree: false,
  },

  {
    id: 'aji-gallina',
    categoryId: 'tradiciones',
    name: 'Ají de Gallina',
    description:
      'Pollo deshilachado preparado con una cremosa salsa de ají amarillo.',
    ingredients:
      'Pollo, ají amarillo, galleta de cocina, leche, sal, arroz blanco, huevo y aceituna.',
    price: 18,
    image: 'assets/menu/aji-gallina.jpg',
    allergens: ['gluten', 'milk', 'eggs'],
    spicyLevel: 1,
    glutenFree: false,
  },

  {
    id: 'fetuccini-lomo',
    categoryId: 'tradiciones',
    name: 'Fetuccini con Lomo Saltado',
    description:
      'Fetuccini en crema huancaína acompañado de lomo saltado.',
    ingredients:
      'Fetuccini, carne de res, cebolla, tomate, salsa de soja, salsa de ostras, ají amarillo, galleta de cocina, leche y sal.',
    price: 17,
    image: 'assets/menu/fetuccini-lomo.jpg',
    allergens: ['gluten', 'milk', 'soy', 'molluscs'],
    spicyLevel: 1,
    glutenFree: false,
  },

  {
    id: 'jalea-mixta',
    categoryId: 'tradiciones',
    name: 'Jalea Mixta',
    description:
      'Pescado y mariscos rebozados y fritos.',
    ingredients:
      'Perca, gambas, calamar, mejillones, huevo, harina de trigo, harina de maíz, sal y pimienta.',
    price: 17,
    image: 'assets/menu/jalea-mixta.jpg',
    allergens: [
      'fish',
      'crustaceans',
      'molluscs',
      'eggs',
      'gluten',
    ],
    spicyLevel: 0,
    glutenFree: false,
  },

  {
    id: 'dorada-frita',
    categoryId: 'tradiciones',
    name: 'Dorada Frita',
    description:
      'Dorada frita acompañada de arroz blanco y yuca.',
    ingredients:
      'Dorada, arroz blanco, yuca y sal.',
    price: 20,
    image: 'assets/menu/dorada-frita.jpg',
    allergens: ['fish'],
    spicyLevel: 0,
    glutenFree: true,
  },

  {
    id: 'chicharron-pescado',
    categoryId: 'tradiciones',
    name: 'Chicharrón de Pescado',
    description:
      'Perca marinada, rebozada y frita hasta quedar crujiente.',
    ingredients:
      'Perca, huevo, harina de trigo, harina de maíz, sal y pimienta.',
    price: 15,
    image: 'assets/menu/chicharron-pescado.jpg',
    allergens: ['fish', 'eggs', 'gluten'],
    spicyLevel: 0,
    glutenFree: false,
  },

  {
    id: 'chicharron-cerdo',
    categoryId: 'tradiciones',
    name: 'Chicharrón de Cerdo',
    description:
      'Tradicional chicharrón peruano de cerdo acompañado de camote.',
    ingredients:
      'Cerdo y camote.',
    price: 16,
    image: 'assets/menu/chicharron-cerdo.jpg',
    allergens: [],
    spicyLevel: 0,
    glutenFree: true,
  },

  {
    id: 'parihuela',
    categoryId: 'tradiciones',
    name: 'Parihuela',
    description:
      'Sopa peruana preparada con dorada y concentrado de pescado.',
    ingredients:
      'Dorada, zanahoria, pescado, ají panca, sal, arroz blanco y yuca.',
    price: 25,
    image: 'assets/menu/parihuela.jpg',
    allergens: ['fish'],
    spicyLevel: 1,
    glutenFree: true,
  },

  {
    id: 'tallarin-saltado',
    categoryId: 'tradiciones',
    name: 'Tallarín Saltado',
    description:
      'Tallarines salteados al wok con pollo o carne.',
    ingredients:
      'Tallarines, pollo o carne de res, cebolla, tomate, cebolla china, salsa de soja y salsa de ostras.',
    price: 17,
    image: 'assets/menu/tallarin-saltado.jpg',
    allergens: ['gluten', 'soy', 'molluscs'],
    spicyLevel: 0,
    glutenFree: false,
  },


  // =========================================================
  // WOK PERUANO
  // =========================================================

  {
    id: 'chaufa-pollo',
    categoryId: 'wok',
    name: 'Chaufa de Pollo',
    description:
      'Arroz chaufa preparado al wok con pollo.',
    ingredients:
      'Arroz, pollo, huevo, cebolla china, salsa de soja, salsa de ostras, canela china, aceite y sal.',
    price: 14,
    image: 'assets/menu/chaufa-pollo.jpg',
    allergens: ['gluten', 'eggs', 'soy', 'molluscs'],
    spicyLevel: 0,
    glutenFree: false,
  },

  {
    id: 'chaufa-carne',
    categoryId: 'wok',
    name: 'Chaufa de Carne',
    description:
      'Arroz chaufa preparado al wok con carne de res.',
    ingredients:
      'Arroz, carne de res, huevo, cebolla china, salsa de soja, salsa de ostras, canela china, aceite y sal.',
    price: 15,
    image: 'assets/menu/chaufa-carne.jpg',
    allergens: ['gluten', 'eggs', 'soy', 'molluscs'],
    spicyLevel: 0,
    glutenFree: false,
  },

  {
    id: 'chaufa-especial',
    categoryId: 'wok',
    name: 'Chaufa Especial',
    description:
      'Arroz chaufa preparado con pollo, carne de res y cerdo.',
    ingredients:
      'Arroz, pollo, carne de res, cerdo, huevo, cebolla china, salsa de soja, salsa de ostras, canela china, aceite y sal.',
    price: 18,
    image: 'assets/menu/chaufa-especial.jpg',
    allergens: ['gluten', 'eggs', 'soy', 'molluscs'],
    spicyLevel: 0,
    glutenFree: false,
  },

  {
    id: 'chaufa-marisco',
    categoryId: 'wok',
    name: 'Chaufa de Marisco',
    description:
      'Arroz chaufa preparado al wok con mariscos.',
    ingredients:
      'Arroz, gambas, calamar, mejillones, huevo, cebolla china, salsa de soja, salsa de ostras, canela china, aceite y sal.',
    price: 20,
    image: 'assets/menu/chaufa-mariscos.jpg',
    allergens: [
      'gluten',
      'eggs',
      'soy',
      'crustaceans',
      'molluscs',
    ],
    spicyLevel: 0,
    glutenFree: false,
  },

  {
    id: 'tipakay',
    categoryId: 'wok',
    name: 'Tipakay',
    description:
      'Pollo crujiente terminado con salsa agridulce.',
    ingredients:
      'Pollo, huevo, harina de trigo, harina de maíz, pimienta, salsa agridulce.',
    price: 13,
    image: 'assets/menu/tipakay.jpg',
    allergens: ['gluten', 'eggs'],
    spicyLevel: 0,
    glutenFree: false,
  },

  {
    id: 'chijaukay',
    categoryId: 'wok',
    name: 'Chijaukay',
    description:
      'Pollo crujiente preparado al estilo chifa.',
    ingredients:
      'Pollo, huevo, harina de trigo, harina de maíz, pimienta.',
    price: 13,
    image: 'assets/menu/chijaukay.jpg',
    allergens: ['gluten', 'eggs'],
    spicyLevel: 0,
    glutenFree: false,
  },

  {
    id: 'aeropuerto',
    categoryId: 'wok',
    name: 'Aeropuerto',
    description:
      'Arroz chaufa acompañado de tallarines.',
    ingredients:
      'Arroz, tallarines, pollo, huevo, cebolla china, cebolla, tomate, salsa de soja, salsa de ostras y canela china.',
    price: 16,
    image: 'assets/menu/aeropuerto.jpg',
    allergens: ['gluten', 'eggs', 'soy', 'molluscs'],
    spicyLevel: 0,
    glutenFree: false,
  },

  {
    id: 'entrecot-patatas',
    categoryId: 'wok',
    name: 'Entrecot con Patatas',
    description:
      'Entrecot a la plancha acompañado de patatas fritas.',
    ingredients:
      'Entrecot de ternera y patatas.',
    price: 18,
    image: 'assets/menu/entrecot-patatas.jpg',
    allergens: [],
    spicyLevel: 0,
    glutenFree: true,
  },


  // =========================================================
  // BROASTER
  // =========================================================

  {
    id: 'mostrito-broaster',
    categoryId: 'broaster',
    name: 'Mostrito Broaster',
    description:
      'Pollo broaster acompañado de arroz chaufa.',
    ingredients:
      'Pollo, huevo, harina de trigo, harina de maíz, sal, pimienta, arroz, cebolla china, salsa de soja, salsa de ostras y canela china.',
    price: 13,
    image: 'assets/menu/mostrito-broaster.jpg',
    allergens: ['gluten', 'eggs', 'soy', 'molluscs'],
    spicyLevel: 0,
    glutenFree: false,
  },

  {
    id: 'broaster-familiar',
    categoryId: 'broaster',
    name: 'Broaster con Patatas + Arroz y Ensalada',
    description:
      'Pollo broaster acompañado de patatas, arroz y ensalada.',
    ingredients:
      'Pollo, huevo, harina de trigo, harina de maíz, sal, pimienta, patatas, arroz y ensalada.',
    price: 25,
    image: 'assets/menu/broaster-familiar.jpg',
    allergens: ['gluten', 'eggs'],
    spicyLevel: 0,
    glutenFree: false,
  },

  {
    id: 'alitas-broaster',
    categoryId: 'broaster',
    name: 'Alitas Broaster con Patatas',
    description:
      'Alitas de pollo broaster acompañadas de patatas.',
    ingredients:
      'Alitas de pollo, huevo, harina de trigo, harina de maíz, sal, pimienta y patatas.',
    price: 10,
    image: 'assets/menu/alitas-broaster.jpg',
    allergens: ['gluten', 'eggs'],
    spicyLevel: 0,
    glutenFree: false,
  },


  // =========================================================
  // PARRILLA 2 PERSONAS
  // =========================================================

  {
    id: 'parrilla-dos-personas',
    categoryId: 'parrilla',
    name: 'Parrilla 2 Personas',
    description:
      'Parrilla para compartir con una selección de carnes y acompañamientos.',
    ingredients:
      '1/4 de pollo, 6 alitas de pollo, chorizo, chuleta de cerdo, 2 palitos de anticucho, rachi, patatas y ensalada.',
    price: 35,
    image: 'assets/menu/parrilla-dos-personas.jpg',

    // El chorizo es un producto comercial:
    // revisaremos su etiqueta antes de declarar alérgenos definitivos.
    allergens: [],
    spicyLevel: 0,
    glutenFree: false,
  },


  // =========================================================
  // CEVICHE
  // =========================================================

  {
    id: 'ceviche-perca',
    categoryId: 'ceviche',
    name: 'Ceviche Peruano Perca',
    description:
      'Perca fresca marinada al estilo tradicional peruano.',
    ingredients:
      'Perca, limón, cilantro, apio, kion, cebolla roja, sal, pimienta, cancha chulpi, choclo y camote.',
    price: 15,
    image: 'assets/menu/ceviche-perca.jpg',
    allergens: ['fish', 'celery'],
    spicyLevel: 2,
    glutenFree: true,
  },

  {
    id: 'ceviche-mixto',
    categoryId: 'ceviche',
    name: 'Ceviche Mixto',
    description:
      'Ceviche preparado con pescado y mariscos.',
    ingredients:
      'Perca, gambas, calamar, mejillones, limón, cilantro, apio, kion, cebolla roja, sal, pimienta, cancha chulpi, choclo y camote.',
    price: 18,
    image: 'assets/menu/ceviche-mixto.jpg',
    allergens: [
      'fish',
      'celery',
      'crustaceans',
      'molluscs',
    ],
    spicyLevel: 2,
    glutenFree: true,
  },

  {
    id: 'ceviche-corvina',
    categoryId: 'ceviche',
    name: 'Ceviche Peruano Corvina',
    description:
      'Corvina fresca marinada al estilo tradicional peruano.',
    ingredients:
      'Corvina, limón, cilantro, apio, kion, cebolla roja, sal, pimienta, cancha chulpi, choclo y camote.',
    price: 20,
    image: 'assets/menu/ceviche-corvina.jpg',
    allergens: ['fish', 'celery'],
    spicyLevel: 2,
    glutenFree: true,
  },


  // =========================================================
  // COMBINADOS
  // =========================================================

  {
    id: 'combo-1',
    categoryId: 'combinados',
    name: 'Combo 1',
    description:
      'Ceviche acompañado de chicharrón de pescado.',
    ingredients:
      'Perca, limón, cilantro, apio, kion, cebolla roja, cancha chulpi, choclo, camote, huevo, harina de trigo, harina de maíz, sal y pimienta.',
    price: 19,
    image: 'assets/menu/combo-1.jpg',
    allergens: ['fish', 'celery', 'eggs', 'gluten'],
    spicyLevel: 2,
    glutenFree: false,
  },

  {
    id: 'duo-marino',
    categoryId: 'combinados',
    name: 'Dúo Marino',
    description:
      'Ceviche acompañado de arroz con mariscos.',
    ingredients:
      'Perca, limón, cilantro, apio, kion, cebolla roja, cancha chulpi, choclo, camote, arroz, gambas, calamar, mejillones, cebolla, tomate, zanahoria, alberjitas, ajo y ají amarillo.',
    price: 20,
    image: 'assets/menu/duo-marino.jpg',
    allergens: [
      'fish',
      'celery',
      'crustaceans',
      'molluscs',
    ],
    spicyLevel: 2,
    glutenFree: true,
  },

  {
    id: 'trio-marino',
    categoryId: 'combinados',
    name: 'Trío Marino',
    description:
      'Leche de tigre, arroz con mariscos y chicharrón de pescado.',
    ingredients:
      'Perca, limón, cilantro, apio, kion, cebolla roja, cancha chulpi, choclo, camote, arroz, gambas, calamar, mejillones, cebolla, tomate, zanahoria, alberjitas, ajo, ají amarillo, huevo, harina de trigo, harina de maíz, sal y pimienta.',
    price: 26,
    image: 'assets/menu/trio-marino.jpg',
    allergens: [
      'fish',
      'celery',
      'crustaceans',
      'molluscs',
      'eggs',
      'gluten',
    ],
    spicyLevel: 2,
    glutenFree: false,
  },

  {
    id: 'ronda-marina',
    categoryId: 'combinados',
    name: 'Ronda Marina',
    description:
      'Ceviche, causa limeña, arroz con mariscos y chicharrón de pescado.',
    ingredients:
      'Perca, limón, cilantro, apio, kion, cebolla roja, cancha chulpi, choclo, camote, papa, ají amarillo, atún, mayonesa, aguacate, huevo, arroz, gambas, calamar, mejillones, tomate, zanahoria, alberjitas, ajo, harina de trigo y harina de maíz.',
    price: 30,
    image: 'assets/menu/ronda-marina.jpg',
    allergens: [
      'fish',
      'celery',
      'crustaceans',
      'molluscs',
      'eggs',
      'gluten',
    ],
    spicyLevel: 2,
    glutenFree: false,
  },


  // =========================================================
  // POSTRES
  // =========================================================

  {
    id: 'copa-helado',
    categoryId: 'postres',
    name: 'Copa de Helado',
    description:
      'Copa de helado de chocolate, vainilla y fresa.',
    ingredients:
      'Helado de chocolate, vainilla y fresa.',
    price: 6,
    image: 'assets/menu/copa-helado.jpg',

    // Producto comprado: confirmar etiqueta concreta.
    allergens: ['milk'],
    spicyLevel: 0,
    glutenFree: false,
  },

  {
    id: 'bizcocho-zanahoria',
    categoryId: 'postres',
    name: 'Bizcocho de Zanahoria',
    description:
      'Bizcocho casero de zanahoria, jugoso y esponjoso.',
    ingredients:
      'Harina, zanahoria, huevo, azúcar y mantequilla.',
    price: 3.8,
    image: 'assets/menu/bizcocho-zanahoria.jpg',
    allergens: ['gluten', 'eggs', 'milk'],
    spicyLevel: 0,
    glutenFree: false,
  },

  {
    id: 'tarta-chocolate',
    categoryId: 'postres',
    name: 'Tarta de Chocolate',
    description:
      'Tarta con cobertura de chocolate.',
    ingredients:
      'Chocolate, harina, huevo, leche, mantequilla y azúcar.',
    price: 6,
    image: 'assets/menu/tarta-chocolate.jpg',
    allergens: ['gluten', 'eggs', 'milk'],
    spicyLevel: 0,
    glutenFree: false,
  },

];

  readonly selectedCategory = signal<CategoryId>('entradas');
  readonly searchTerm = signal('');
  readonly activeFilter = signal<MenuFilter>('all');
  readonly selectedDish = signal<Dish | null>(null);
  readonly advancedFiltersOpen = signal(false);
  readonly allergenGuideOpen = signal(false);

  readonly maximumSpicyLevel = signal<0 | 1 | 2 | 3 | 4 | 5>(5);

  readonly excludeGluten = signal(false);
  readonly excludeLactose = signal(false);
  readonly vegetarianOnly = signal(false);
  readonly veganOnly = signal(false);
  readonly excludeNuts = signal(false);

  readonly excludedAllergens = signal<AllergenId[]>([]);

readonly filteredDishes = computed(() => {
  const category = this.selectedCategory();
  const search = this.searchTerm().trim().toLowerCase();
  const quickFilter = this.activeFilter();

  const maximumSpicyLevel = this.maximumSpicyLevel();
  const excludedAllergens = this.excludedAllergens();

  return this.dishes.filter((dish) => {
    const matchesCategory = dish.categoryId === category;

    const matchesSearch =
      search.length === 0 ||
      dish.name.toLowerCase().includes(search) ||
      dish.description.toLowerCase().includes(search) ||
      dish.ingredients.toLowerCase().includes(search);

    const matchesQuickFilter =
      quickFilter === 'all' ||
      (quickFilter === 'spicy' && dish.spicyLevel > 0)

    const matchesSpicyLevel =
      dish.spicyLevel <= maximumSpicyLevel;

    const matchesGluten =
      !this.excludeGluten() ||
      !dish.allergens.includes('gluten');

    const matchesLactose =
      !this.excludeLactose() ||
      !dish.allergens.includes('milk');

    const matchesVegetarian =
      !this.vegetarianOnly() ||
      this.isVegetarianDish(dish);

    const matchesVegan =
      !this.veganOnly() ||
      this.isVeganDish(dish);

    const matchesNuts =
      !this.excludeNuts() ||
      (
        !dish.allergens.includes('nuts') &&
        !dish.allergens.includes('peanuts')
      );

    const avoidsExcludedAllergens =
      excludedAllergens.length === 0 ||
      !dish.allergens.some((allergen) =>
        excludedAllergens.includes(allergen),
      );

    return (
      matchesCategory &&
      matchesSearch &&
      matchesQuickFilter &&
      matchesSpicyLevel &&
      matchesGluten &&
      matchesLactose &&
      matchesVegetarian &&
      matchesVegan &&
      matchesNuts &&
      avoidsExcludedAllergens
    );
  });
});
isVegetarianDish(dish: Dish): boolean {
  const nonVegetarianAllergens: AllergenId[] = [
    'fish',
    'crustaceans',
    'molluscs',
  ];

  return !dish.allergens.some((allergen) =>
    nonVegetarianAllergens.includes(allergen),
  );
}

isVeganDish(dish: Dish): boolean {
  const nonVeganAllergens: AllergenId[] = [
    'fish',
    'crustaceans',
    'molluscs',
    'eggs',
    'milk',
  ];

  return !dish.allergens.some((allergen) =>
    nonVeganAllergens.includes(allergen),
  );
}
  selectCategory(categoryId: CategoryId): void {
    this.selectedCategory.set(categoryId);
    this.selectedDish.set(null);
  }

  updateSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
  }

  selectFilter(filter: MenuFilter): void {
    this.activeFilter.set(filter);
  }

  openDish(dish: Dish): void {
    this.selectedDish.set(dish);
    document.body.classList.add('detail-open');
  }

  closeDish(): void {
    this.selectedDish.set(null);
    document.body.classList.remove('detail-open');
  }
  openAdvancedFilters(): void {
    this.advancedFiltersOpen.set(true);
    document.body.classList.add('detail-open');
  }

  closeAdvancedFilters(): void {
    this.advancedFiltersOpen.set(false);
    document.body.classList.remove('detail-open');
  }
  openAllergenGuide(): void {
    this.allergenGuideOpen.set(true);
    document.body.classList.add('detail-open');
  }

  closeAllergenGuide(): void {
    this.allergenGuideOpen.set(false);
    document.body.classList.remove('detail-open');
  }

  updateMaximumSpicyLevel(event: Event): void {
  const value = Number((event.target as HTMLInputElement).value);

  if (value >= 0 && value <= 5) {
    this.maximumSpicyLevel.set(
      value as 0 | 1 | 2 | 3 | 4 | 5,
    );
  }
}

toggleExcludedAllergen(allergenId: AllergenId): void {
  this.excludedAllergens.update((current) =>
    current.includes(allergenId)
      ? current.filter((id) => id !== allergenId)
      : [...current, allergenId],
  );
}

isAllergenExcluded(allergenId: AllergenId): boolean {
  return this.excludedAllergens().includes(allergenId);
}

resetAdvancedFilters(): void {
  this.maximumSpicyLevel.set(5);
  this.excludeGluten.set(false);
  this.excludeLactose.set(false);
  this.vegetarianOnly.set(false);
  this.veganOnly.set(false);
  this.excludeNuts.set(false);
  this.excludedAllergens.set([]);
}
  getAllergen(allergenId: AllergenId): Allergen {
    const allergen = this.allergens.find((item) => item.id === allergenId);

    if (!allergen) {
      throw new Error(`Alérgeno no encontrado: ${allergenId}`);
    }

    return allergen;
  }

  spicyLabel(level: Dish['spicyLevel']): string {
    const labels = [
      'Sin picante',
      'Picante suave',
      'Picante medio',
      'Muy picante',
    ];

    return labels[level];
  }
}