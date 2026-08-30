// Shared food demo data — used by FoodMenuSection, LocationPage, etc.
// Will be replaced by backend API calls later.

const BASE_FOODS = [
  {
    id: 1,
    name: 'Saffron Burrata',
    price: 850,
    location: 'Thamel',
    slug: 'thamel',
    description: 'Creamy burrata, saffron honey, pistachio crumble, and micro herbs.',
    image: '/images/saffron-burreta.webp',
    fullDescription: 'Nestled in the vibrant heart of Thamel, this dish brings together the finest Italian burrata with Nepali saffron harvested from the hills. Each plate is a canvas of flavors — the creamy richness of fresh burrata, drizzled with golden saffron honey, topped with hand-crushed pistachio crumble and delicate micro herbs sourced from local urban gardens.',
    chef: 'Chef Anil Sharma',
    prepTime: '25 mins',
    servingSize: '1 person',
    ingredients: ['Fresh Burrata', 'Saffron', 'Honey', 'Pistachio', 'Micro Herbs', 'Olive Oil'],
    rating: 4.8,
    reviews: 124,
    available: true,
  },
  {
    id: 2,
    name: 'Seared Scallops',
    price: 1200,
    location: 'Jhamsikhel',
    slug: 'jhamsikhel',
    description: 'Saffron carrot purée, yuzu beurre blanc, and crispy lotus root.',
    image: '/images/seared-scallops.webp',
    fullDescription: 'From the upscale dining scene of Jhamsikhel, our Seared Scallops are a celebration of ocean meets valley. Perfectly caramelized scallops rest on a bed of vibrant saffron carrot purée, kissed with Japanese yuzu beurre blanc, and crowned with paper-thin crispy lotus root chips for an unforgettable textural experience.',
    chef: 'Chef Priya Thapa',
    prepTime: '30 mins',
    servingSize: '1 person',
    ingredients: ['Fresh Scallops', 'Saffron', 'Carrots', 'Yuzu', 'Butter', 'Lotus Root'],
    rating: 4.9,
    reviews: 98,
    available: true,
  },
  {
    id: 3,
    name: 'Lamb Ragout',
    price: 950,
    location: 'Durbar Marg',
    slug: 'durbar-marg',
    description: 'Slow-braised lamb, black garlic, saffron jus, and herb oil.',
    image: '/images/lamb-ragout.webp',
    fullDescription: 'Inspired by the regal elegance of Durbar Marg, our Lamb Ragout is a tribute to slow-cooking mastery. Tender lamb shoulder, braised for 8 hours in aromatic spices, served with fermented black garlic, a shimmering saffron jus, and finished with house-made herb oil. This dish embodies the rich culinary heritage of Nepal\'s royal cuisine.',
    chef: 'Chef Bikram Rana',
    prepTime: '45 mins',
    servingSize: '2 persons',
    ingredients: ['Lamb Shoulder', 'Black Garlic', 'Saffron', 'Fresh Herbs', 'Red Wine', 'Root Vegetables'],
    rating: 4.7,
    reviews: 156,
    available: true,
  },
  {
    id: 4,
    name: 'Rose & Fig Delice',
    price: 750,
    location: 'Patan Dhoka',
    slug: 'patan-dhoka',
    description: 'Rose panna cotta, fig compote, pistachio crunch, and saffron tuile.',
    image: '/images/rose-fig.webp',
    fullDescription: 'Drawing inspiration from the ancient artistry of Patan Dhoka, this dessert is a masterpiece of flavors and textures. Silky rose-infused panna cotta, topped with sweet fig compote made from locally grown figs, a satisfying pistachio crunch, and a delicate saffron tuile that shatters beautifully with each bite.',
    chef: 'Chef Sunita Maharjan',
    prepTime: '20 mins',
    servingSize: '1 person',
    ingredients: ['Cream', 'Rose Extract', 'Figs', 'Pistachio', 'Saffron', 'Sugar'],
    rating: 4.6,
    reviews: 89,
    available: true,
  },
  {
    id: 5,
    name: "Chef's Tasting Platter",
    price: 1500,
    location: 'Lazimpat',
    slug: 'lazimpat',
    description: 'A curated five-course journey through the finest seasonal ingredients.',
    image: '/images/chefs-tasting.webp',
    fullDescription: 'Experience the culinary sophistication of Lazimpat with our exclusive Chef\'s Tasting Platter. This five-course gastronomic journey showcases the best of seasonal produce, artfully presented by our head chef. From amuse-bouche to dessert, each course tells a story of Nepal\'s diverse terroir and the chef\'s creative vision.',
    chef: 'Chef Rajesh Hamal',
    prepTime: '60 mins',
    servingSize: '1 person',
    ingredients: ['Seasonal Vegetables', 'Premium Proteins', 'Artisan Cheese', 'Truffles', 'Edible Flowers', 'House Spice Blend'],
    rating: 4.9,
    reviews: 203,
    available: true,
  },
  {
    id: 6,
    name: 'Seasonal Harvest Bowl',
    price: 680,
    location: 'Boudha',
    slug: 'boudha',
    description: 'Farm-fresh seasonal vegetables, ancient grains, and herb-infused broth.',
    image: '/images/seasonal-menu.webp',
    fullDescription: 'Inspired by the spiritual serenity of Boudhanath, our Seasonal Harvest Bowl is a mindful dining experience. Farm-fresh vegetables from the valley\'s organic farms, ancient Himalayan grains like amaranth and buckwheat, gently simmered in an herb-infused broth that warms both body and soul. A dish that celebrates simplicity and purity.',
    chef: 'Chef Dawa Sherpa',
    prepTime: '35 mins',
    servingSize: '1 person',
    ingredients: ['Seasonal Vegetables', 'Amaranth', 'Buckwheat', 'Fresh Herbs', 'Vegetable Broth', 'Himalayan Salt'],
    rating: 4.5,
    reviews: 67,
    available: true,
  },
  {
    id: 7,
    name: 'Heritage Dining Experience',
    price: 1800,
    location: 'Baneshwor',
    slug: 'baneshwor',
    description: 'Private dining with locally sourced ingredients and traditional techniques.',
    image: '/images/private-dining.webp',
    fullDescription: 'In the bustling heart of Baneshwor, discover an exclusive Heritage Dining Experience that transports you through Nepal\'s culinary history. An intimate multi-course meal featuring locally sourced ingredients prepared using traditional Newari cooking techniques, paired with contemporary presentation. Each dish is a bridge between ancient flavors and modern gastronomy.',
    chef: 'Chef Binod Baral',
    prepTime: '90 mins',
    servingSize: '2-4 persons',
    ingredients: ['Local Heritage Grains', 'Free-Range Poultry', 'Himalayan Herbs', 'Artisan Spices', 'Seasonal Fruits', 'Aged Chhurpi'],
    rating: 4.8,
    reviews: 142,
    available: true,
  },
  {
    id: 8,
    name: 'Signature Artisan Dish',
    price: 1100,
    location: 'Baluwatar',
    slug: 'baluwatar',
    description: "Our chef's signature creation, plated with artistic precision and seasonal flair.",
    image: '/images/hero-dish.webp',
    fullDescription: 'From the elegant neighborhood of Baluwatar, our Signature Artisan Dish represents the pinnacle of culinary craftsmanship. Each element on the plate is meticulously placed — a harmony of textures, temperatures, and flavors that evolve with every bite. Seasonal ingredients are transformed through modern techniques into a dish that is as beautiful to behold as it is extraordinary to taste.',
    chef: 'Chef Manish Gurung',
    prepTime: '40 mins',
    servingSize: '1 person',
    ingredients: ['Premium Seasonal Protein', 'Microgreens', 'Truffle Oil', 'Artisan Sauce', 'Edible Flowers', 'Gold Leaf'],
    rating: 4.7,
    reviews: 178,
    available: true,
  },
];

// Location details for the location pages
export const LOCATION_DETAILS = {
  'thamel': {
    name: 'Thamel',
    tagline: 'The Vibrant Heart of Kathmandu',
    description: 'Thamel is the bustling tourist hub of Kathmandu, known for its narrow streets filled with shops, restaurants, and cultural experiences. Our Thamel outlet brings world-class dining to this iconic neighborhood.',
    address: 'Thamel Marg, Kathmandu 44600',
    hours: '11:00 AM – 10:00 PM',
    phone: '+977-1-4700001',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14127.653457008139!2d85.30397775!3d27.7199516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fcb77fd4bd%3A0x58099b1deffed8d4!2sThamel%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp',
  },
  'jhamsikhel': {
    name: 'Jhamsikhel',
    tagline: 'The Culinary Capital of Lalitpur',
    description: 'Jhamsikhel is Lalitpur\'s premier dining destination, where modern cafes and fine dining establishments line the streets. Our Jhamsikhel kitchen specializes in contemporary fusion cuisine.',
    address: 'Jhamsikhel Road, Lalitpur 44700',
    hours: '10:00 AM – 10:30 PM',
    phone: '+977-1-5550002',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14131.78204642279!2d85.30325515!3d27.6803273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18357f897df9%3A0xc621fc5cd8a38c20!2sJhamsikhel%2C%20Lalitpur%2044600!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp',
  },
  'durbar-marg': {
    name: 'Durbar Marg',
    tagline: 'Where Royalty Meets Gastronomy',
    description: 'Durbar Marg, the grand boulevard of Kathmandu, has been the city\'s most prestigious address for decades. Our presence here pays homage to Nepal\'s royal culinary traditions with a modern twist.',
    address: 'Durbar Marg, Kathmandu 44600',
    hours: '12:00 PM – 11:00 PM',
    phone: '+977-1-4220003',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.222384074213!2d85.3168278!3d27.7104332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1905df756b15%3A0xc85dd9e46a51d95!2sDurbar%20Marg%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp',
  },
  'patan-dhoka': {
    name: 'Patan Dhoka',
    tagline: 'Ancient Arts, Modern Flavors',
    description: 'Located near the historic Patan Durbar Square, our Patan Dhoka outlet is surrounded by centuries of Newari art and architecture. The menu draws inspiration from this rich cultural heritage.',
    address: 'Patan Dhoka, Lalitpur 44700',
    hours: '10:30 AM – 9:30 PM',
    phone: '+977-1-5530004',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.250550186196!2d85.3182103!3d27.6786638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cd79815bd5%3A0x63cd2d573c063121!2sPatan%20Dhoka%2C%20Lalitpur%2044600!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp',
  },
  'lazimpat': {
    name: 'Lazimpat',
    tagline: 'Elegant Dining in the Embassy Quarter',
    description: 'Lazimpat, Kathmandu\'s distinguished embassy quarter, is home to some of the city\'s most refined dining experiences. Our outlet here offers an elevated culinary journey in a sophisticated setting.',
    address: 'Lazimpat Road, Kathmandu 44600',
    hours: '11:00 AM – 10:00 PM',
    phone: '+977-1-4440005',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14127.311739506692!2d85.3150535!3d27.7222384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19114b7e8ff1%3A0xa64b38340d0f4d38!2sLazimpat%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp',
  },
  'boudha': {
    name: 'Boudha',
    tagline: 'Mindful Dining by the Stupa',
    description: 'Near the sacred Boudhanath Stupa, our Boudha location offers a peaceful and mindful dining experience. The menu emphasizes organic, locally-sourced ingredients prepared with care and intention.',
    address: 'Boudha, Kathmandu 44600',
    hours: '9:00 AM – 9:00 PM',
    phone: '+977-1-4480006',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14127.6042127264!2d85.3524671!3d27.7202809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bdab48c2635%3A0xc0d78fbcf1e37517!2sBoudhha%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp',
  },
  'baneshwor': {
    name: 'Baneshwor',
    tagline: 'The Modern Foodie\'s Paradise',
    description: 'Baneshwor is one of Kathmandu\'s most dynamic commercial districts. Our outlet here caters to the modern professional with heritage-inspired dishes that deliver bold flavors in a contemporary setting.',
    address: 'New Baneshwor, Kathmandu 44600',
    hours: '10:00 AM – 10:00 PM',
    phone: '+977-1-4780007',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.638531093129!2d85.3314051!3d27.6896225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1997dcf562f7%3A0xd6891eb10a30b427!2sNew%20Baneshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp',
  },
  'baluwatar': {
    name: 'Baluwatar',
    tagline: 'Premium Dining in the Diplomatic Zone',
    description: 'Baluwatar, home to embassies and elite residences, is where our most exclusive dining experience resides. Expect impeccable service, artisan dishes, and a refined atmosphere befitting this prestigious address.',
    address: 'Baluwatar, Kathmandu 44600',
    hours: '12:00 PM – 10:30 PM',
    phone: '+977-1-4410008',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14126.960233075244!2d85.321606!3d27.7245899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1918a2ea6f3d%3A0xc3485ce2b4c10c14!2sBaluwatar%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp',
  },
};

// Generate 9 more dishes for each location
const EXTRA_IMAGES = [
  '/images/saffron-burreta.webp',
  '/images/seared-scallops.webp',
  '/images/lamb-ragout.webp',
  '/images/rose-fig.webp',
  '/images/chefs-tasting.webp',
  '/images/seasonal-menu.webp',
  '/images/private-dining.webp',
  '/images/hero-dish.webp'
];

const FOOD_ADJECTIVES = ['Truffle', 'Spicy', 'Grilled', 'Roasted', 'Crispy', 'Smoked', 'Glazed', 'Heritage', 'Classic'];
const FOOD_NOUNS = ['Risotto', 'Momo Platter', 'Pork Belly', 'Salmon', 'Duck Breast', 'Tofu Bowl', 'Ribeye', 'Pasta', 'Curry'];

const generateExtraFoods = () => {
  const generated = [];
  let idCounter = 9;

  BASE_FOODS.forEach((baseFood) => {
    for (let i = 0; i < 9; i++) {
      const adj = FOOD_ADJECTIVES[i % FOOD_ADJECTIVES.length];
      const noun = FOOD_NOUNS[(i + baseFood.id) % FOOD_NOUNS.length];
      const img = EXTRA_IMAGES[(i + baseFood.id) % EXTRA_IMAGES.length];
      
      generated.push({
        id: idCounter++,
        name: `${adj} ${noun} (${baseFood.location})`,
        price: 500 + (Math.floor(Math.random() * 100) * 10),
        location: baseFood.location,
        slug: baseFood.slug,
        description: `A delightful ${adj.toLowerCase()} variation of our famous ${noun.toLowerCase()}, prepared locally in ${baseFood.location}.`,
        image: img,
        fullDescription: `Locally prepared in ${baseFood.location}, this ${adj.toLowerCase()} ${noun.toLowerCase()} brings out the vibrant culinary identity of the region. Served hot and fresh with artisanal accompaniments.`,
        chef: baseFood.chef,
        prepTime: `${20 + (Math.floor(Math.random() * 20))} mins`,
        servingSize: '1 person',
        ingredients: ['Premium Ingredients', 'Local Herbs', 'Spices'],
        rating: (4.0 + Math.random()).toFixed(1),
        reviews: 50 + Math.floor(Math.random() * 200),
        available: true,
      });
    }
  });
  
  return generated;
};

export const DEMO_FOODS = [...BASE_FOODS, ...generateExtraFoods()];

// Extract unique locations for the filter dropdown
export const ALL_LOCATIONS = [...new Set(BASE_FOODS.map(f => f.location))];
