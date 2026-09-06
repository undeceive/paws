
# Industrial Supply Co.

A modern e-commerce demo for industrial supplies — welding equipment, safety gear, tools, and hardware.

**Live Demo:** https://paws-undeceive.vercel.app/

## 🏗️ Project Status

**Currently in development.** This is a portfolio demo showcasing full-stack e-commerce capabilities.

### ✅ Working Features
- Product catalog with 8+ industrial products
- Product detail pages
- Shopping cart with quantity controls
- Add/remove items from cart
- Responsive dark theme with orange/amber accents

### 🚧 In Progress
- Stripe checkout integration
- Product image gallery
- "You may also like" recommendations
- Mobile responsiveness polish

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React** | UI library |
| **Next.js** | React framework with SSR/SSG |
| **Stripe** | Payment processing |
| **CSS Modules** | Styling |

---

## 🚀 Getting Started

### Clone the repository
```bash
git clone git@github.com:undeceive/paws.git
cd paws/paws
```

### Install dependencies
```bash
npm install
```

### Run the development server
```bash
npm run dev -- -p 3002
```

### Open your browser
```
http://localhost:3002
```

---

## 📁 Project Structure

```
paws/
├── pages/          # Next.js pages
│   ├── index.js    # Homepage
│   └── product/    # Product detail pages
├── components/     # React components
│   ├── Navbar.jsx
│   ├── Cart.jsx
│   ├── Product.jsx
│   └── Layout.jsx
├── context/        # State management
│   └── StateContext.js
├── lib/            # Utilities and mock data
│   └── mockData.js
├── public/         # Static assets
├── styles/         # CSS styles
└── README.md       # This file
```

---

## 📋 Features

### Product Catalog
- 8 industrial products (welding, safety, tools, hardware)
- Product names, prices, and descriptions
- Placeholder images (real images coming soon)

### Shopping Cart
- Add items to cart
- Adjust quantities with +/- buttons
- Remove items from cart
- Real-time total price calculation

### Checkout (Coming Soon)
- Stripe payment integration
- Order confirmation

---

## 🔧 Environment Variables

For Stripe checkout (not yet configured):

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
STRIPE_SECRET_KEY=your_stripe_secret
```

---

## 🤝 Contributing

This is a personal portfolio project, but feel free to fork it for your own learning!

### Forking Conditions
- Add a link to: [https://portfolio-undeceives-projects.vercel.app/](https://portfolio-undeceives-projects.vercel.app/)

---

## 📄 License

MIT License — feel free to use, modify, and distribute.

---

## 👤 Author

**Frank Garcia Sarmiento**

- GitHub: [@undeceive](https://github.com/undeceive)
- Portfolio: [https://portfolio-undeceives-projects.vercel.app/](https://portfolio-undeceives-projects.vercel.app/)
- Medium: [@undeceive](https://medium.com/@undeceive)

---

## 🎯 Why This Project?

This demo was built to showcase:
- Full-stack e-commerce development
- React/Next.js proficiency
- Payment integration experience
- Clean, professional UI design
- Problem-solving with real business needs

It's designed to impress potential employers and clients, including Charles at HYW Products.

---

## 📸 Screenshots

*Coming soon!*

---

## 🔗 Links

- **Live Demo:** https://paws-undeceive.vercel.app/
- **GitHub:** https://github.com/undeceive/paws
- **Portfolio:** https://portfolio-undeceives-projects.vercel.app/
