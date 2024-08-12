# Timur Talyatov's Portfolio

Welcome to my personal portfolio project! This retro-styled web application showcases my skills, projects, and journey as a web developer.

![Project Screenshot](/public/screenshots/defaultTheme.png)
![Project Screenshot](/public/screenshots/lightTheme.png)
![Project Screenshot](/public/screenshots/matrixTheme.png)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- 🎨 Retro-inspired design with customizable themes
- 💻 Interactive terminal simulation
- 📊 Dynamic system stats display
- 📱 Responsive layout for various screen sizes
- 🚀 Project showcase with weekly progress tracker
- 📝 Contact form for easy communication

## Technologies Used

- React.js
- Vite
- Tailwind CSS
- React Router
- Lucide React (for icons)

## Getting Started

To get a local copy up and running, follow these simple steps:

1. Clone the repository
   ```sh
   git clone https://github.com/timataliatov/wdpt-23-root.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the development server
   ```sh
   npm run dev
   ```

## Project Structure

```
wdpt-23-root/
├── src/
│   ├── components/
│   │   ├── AppContent.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── LeftSidebar.jsx
│   │   ├── MainContent.jsx
│   │   ├── MatrixRain.jsx
│   │   ├── RightSidebar.jsx
│   │   ├── SystemStats.jsx
│   │   └── Terminal.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Contact.jsx
│   │   └── projects/
│   │       ├── Projects.jsx
│   │       ├── ProjectCard.jsx
│   │       └── ProjectsSidebar.jsx
│   ├── styles/
│   │   ├── base/
│   │   ├── components/
│   │   ├── layout/
│   │   ├── themes/
│   │   ├── utils/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Customization

### Themes

The project supports three themes: default (dark), light, and green. You can easily switch between themes using the theme toggle button in the header.

To add or modify themes, edit the `colors.css` file in the `src/styles/themes/` directory.

### Content

To update the content of your portfolio:

1. Modify the `Home.jsx` file to change the main page content.
2. Update the `Projects.jsx` file to showcase your latest projects.
3. Adjust the `Contact.jsx` file to customize the contact form and information.

## Deployment

This project is set up for deployment on GitHub Pages. To deploy:

1. Update the `homepage` field in `package.json` with your GitHub Pages URL.
2. Run the deployment script:
   ```sh
   npm run deploy
   ```

This will build the project and push it to the `gh-pages` branch of your repository.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the ISC License. See `LICENSE` for more information.

## Contact

Timur Talyatov - [@timataliatov](https://x.com/timataliatov) - ttaliatov@gmail.com

Project Link: [https://github.com/timataliatov/wdpt-23-root](https://github.com/timataliatov/wdpt-23-root)

---

Thank you for checking out my portfolio project! I hope you enjoy exploring it as much as I enjoyed building it. If you have any questions or feedback, please don't hesitate to reach out.
