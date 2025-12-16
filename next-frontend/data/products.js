export const products = [
  // COB Light 5W
  {
    slug: "cob-light-5w",
    name: "COB Light 5W",
    category: "COB Downlight",
    description:
      "Adjustable 2 inch COB downlight with aluminium base, ideal for accent lighting and focused spots.",
    price: 850,
    badge: "COB",
    image: "/products/coblight.jfif"
  },
  // SMD Downlight 12W
  {
    slug: "smd-downlight-12w",
    name: "SMD Downlight 12W",
    category: "SMD Downlight",
    description:
      "12W adjustable 3 inch aluminium SMD downlight with uniform soft output, perfect for living rooms and offices.",
    price: 1150,
    badge: "Best Seller",
    image: "/products/Smd downlight.jfif"
  },
  // SMD Downlight 7W
  {
    slug: "smd-downlight-7w",
    name: "SMD Downlight 7W",
    category: "SMD Downlight",
    description:
      "7W adjustable 3 inch aluminium SMD downlight, compact size with efficient light spread.",
    price: 890,
    image: "/products/Smd downlight.jfif"
  },
  // PK Moon Light 12W
  {
    slug: "pk-moon-light-12w",
    name: "PK Moon Light 12W",
    category: "Moon Light",
    description:
      "12W PK Moon Light with adjustable 3 inch hole size and aluminium base, for smooth diffused ceilings.",
    price: 1250,
    badge: "New",
    image: "/products/pk moon light .jfif"
  },
  // PK Moon Light 7W
  {
    slug: "pk-moon-light-7w",
    name: "PK Moon Light 7W",
    category: "Moon Light",
    description:
      "7W PK Moon Light with 3 inch adjustable cut-out, ideal for bedrooms and lounges.",
    price: 920,
    image: "/products/pk moon light .jfif"
  },
  // LED Bulb 18W (Energy Saver)
  {
    slug: "led-bulb-18w",
    name: "LED Bulb 18W",
    category: "LED Bulb",
    description:
      "18W high-output LED bulb with up to 90% energy saving compared to traditional 85W bulbs, eye comfort design.",
    price: 650,
    badge: "Energy Saver",
    image: "/products/led light.jfif"
  },
  // Ice Panel Moon Light 24W
  {
    slug: "ice-panel-moon-light-24w",
    name: "Ice Panel Moon Light 24W",
    category: "Panel Light",
    description:
      "24W adjustable 2–4 inch Ice Panel Moon Light with aluminium base, suitable for larger rooms and halls.",
    price: 1650,
    image: "/products/ice panel moon light.jfif"
  },
  // Ice Panel Moon Light 18W
  {
    slug: "ice-panel-moon-light-18w",
    name: "Ice Panel Moon Light 18W",
    category: "Panel Light",
    description:
      "18W adjustable 2–3 inch Ice Panel Moon Light, slim profile with wide angle soft light.",
    price: 1390,
    image: "/products/ice panel moon light.jfif"
  },
  // Ice Panel Moon Light 12W
  {
    slug: "ice-panel-moon-light-12w",
    name: "Ice Panel Moon Light 12W",
    category: "Panel Light",
    description:
      "12W adjustable 2–3 inch Ice Panel Moon Light with aluminium base, ideal for compact spaces.",
    price: 1150,
    image: "/products/ice panel moon light.jfif"
  }
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}