# Shankar Portfolio

A modern, interactive portfolio website built with Next.js, React, and Three.js. Features smooth animations, 3D elements, and a responsive design.

![Portfolio Preview](https://img.shields.io/badge/Next.js-16.1.4-black) ![React-19.2.3](https://img.shields.io/badge/React-19.2.3-61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6)

## 🚀 Features

- **Smooth Scrolling** - Custom smooth scroll implementation with Lenis
- **3D Elements** - Interactive Three.js background and animations
- **Particle Effects** - Beautiful particle backgrounds
- **Responsive Design** - Fully responsive across all devices
- **Dark Mode** - Modern dark theme aesthetic
- **Interactive UI** - Glow cursors, reveal animations, and micro-interactions

## 🛠️ Tech Stack

- **Framework:** Next.js 16.1.4
- **UI Library:** React 19.2.3
- **Styling:** Tailwind CSS 4.1
- **3D Graphics:** Three.js, React Three Fiber, React Three Drei
- **Animations:** Framer Motion, Custom reveal animations
- **Smooth Scroll:** Lenis
- **Icons:** React Icons
- **Typewriter:** React Simple Typewriter
- **State Management:** React Context

## 📦 Installation

```
bash
# Clone the repository
git clone https://github.com/yourusername/shankar-portfolio.git

# Navigate to the project directory
cd shankar-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Project Structure

```
shankar-portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── providers.tsx     # React providers
│   ├── globals.css       # Global styles
│   └── emotion-cache.tsx # Chakra UI cache
├── components/           # React components
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills showcase
│   ├── Projects.tsx     # Projects portfolio
│   ├── Certificates.tsx # Certifications
│   ├── Contact.tsx      # Contact form
│   ├── Navbar.tsx       # Navigation bar
│   ├── Footer.tsx       # Footer
│   └── ...
├── public/               # Static assets
│   ├── Certificates/    # Certificate images
│   ├── images/          # Portfolio images
│   └── resume/          # Resume PDF
└── package.json         # Dependencies
```

## 📄 Resume

The resume is available in `public/resume/Shankar_K_Resume.pdf`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📝 License

MIT License

---

Built with ❤️ using Next.js and Three.js
