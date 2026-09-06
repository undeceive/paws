/**
 * Mock product data for Industrial Supply Co. demo
 * This replaces Sanity data so the site works without a CMS
 */

export const mockProducts = [
  {
    _id: 'prod-001',
    name: 'MIG Welding Wire .035" 10lb Spool',
    slug: { current: 'mig-welding-wire-035-10lb' },
    price: 45.99,
    details: 'Premium ER70S-6 MIG welding wire. 0.035" diameter, 10lb spool. Ideal for mild steel welding applications.',
    image: [
      { asset: { _ref: 'mock-img-001' } }
    ],
    category: 'Welding'
  },
  {
    _id: 'prod-002',
    name: 'Heavy-Duty Welding Gloves (Large)',
    slug: { current: 'heavy-duty-welding-gloves-large' },
    price: 32.50,
    details: 'Premium cowhide leather welding gloves. Reinforced stitching, heat-resistant lining. Size Large.',
    image: [
      { asset: { _ref: 'mock-img-002' } }
    ],
    category: 'Safety'
  },
  {
    _id: 'prod-003',
    name: '4.5" Angle Grinder - 7.5 Amp',
    slug: { current: 'angle-grinder-45-75amp' },
    price: 79.99,
    details: 'Powerful 7.5 amp angle grinder with 4.5" wheel. Variable speed control, tool-free guard adjustment.',
    image: [
      { asset: { _ref: 'mock-img-003' } }
    ],
    category: 'Tools'
  },
  {
    _id: 'prod-004',
    name: '10" Heavy-Duty C-Clamp',
    slug: { current: 'heavy-duty-c-clamp-10inch' },
    price: 24.99,
    details: 'Industrial grade cast iron C-clamp. 10" opening capacity, 4" throat depth. Ideal for welding and fabrication.',
    image: [
      { asset: { _ref: 'mock-img-004' } }
    ],
    category: 'Hardware'
  },
  {
    _id: 'prod-005',
    name: 'Auto-Darkening Welding Helmet',
    slug: { current: 'auto-darkening-welding-helmet' },
    price: 89.99,
    details: 'Auto-darkening welding helmet with 4 shade range. Solar powered, adjustable sensitivity and delay.',
    image: [
      { asset: { _ref: 'mock-img-005' } }
    ],
    category: 'Safety'
  },
  {
    _id: 'prod-006',
    name: '25ft Welding Extension Cord',
    slug: { current: 'welding-extension-cord-25ft' },
    price: 42.50,
    details: 'Heavy-duty 10 gauge extension cord. 25ft length, 50 amp rating. Ideal for welding equipment.',
    image: [
      { asset: { _ref: 'mock-img-006' } }
    ],
    category: 'Hardware'
  },
  {
    _id: 'prod-007',
    name: 'TIG Welding Torch - WP-17',
    slug: { current: 'tig-welding-torch-wp17' },
    price: 68.75,
    details: 'WP-17 TIG welding torch. 150 amp rating, air-cooled. Flexible head design, includes gas nozzle.',
    image: [
      { asset: { _ref: 'mock-img-007' } }
    ],
    category: 'Welding'
  },
  {
    _id: 'prod-008',
    name: 'Safety Glasses - Impact Resistant',
    slug: { current: 'safety-glasses-impact-resistant' },
    price: 12.99,
    details: 'Z87+ rated safety glasses. Anti-scratch coating, UV protection. Clear lens, lightweight design.',
    image: [
      { asset: { _ref: 'mock-img-008' } }
    ],
    category: 'Safety'
  }
];

// Helper function to get a product by slug
export function getProductBySlug(slug) {
  return mockProducts.find(p => p.slug.current === slug);
}

// Helper function to get related products (excluding current)
export function getRelatedProducts(slug) {
  return mockProducts.filter(p => p.slug.current !== slug);
}
