# Daccord

Daccord is a website developed using Vite (build tool) & Spline (3D Design tool). This project aims to showcase the integration of React components with Spline's 3D scenes to provide users with immersive & interactive experience.

This project is deployed to : https://nephydecode.github.io/daccord-spline-react/

[Spline Design](https://my.spline.design/untitled-d85cd63a822dbe56b09c0ed25a9fcb0c/)

| Hovering Spline UI Elements                      | Orbitting the 3D Scene                           |
|--------------------------------------------------|--------------------------------------------------|
| ![](https://github.com/nephydecode/daccord-spline-react/blob/main/src/assets/daccord-hover.gif)| ![](https://github.com/nephydecode/daccord-spline-react/blob/main/src/assets/daccord-orbit.gif)|

## Installation

To run this project locally, follow the following steps:

1. Clone the repository:
```git clone https://github.com/nephydecode/daccord-spline-react.git```

2. Navigate to project directory:
```cd daccord-spline-react```

3. Install dependencies
```npm install```

4. Run development server
```npm run dev```

## Deployment

Deployment is done using `gh-pages` packages & deployed to GitHub Pages.

1. Install gh-pages:
```npm install gh-pages ---save-dev```

2. Add predeploy & deploy scripts to package.json:
```
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Configure vite.config.js:
```
export default defineConfig({
  base: "/daccord-spline-react",
  build: {
    outDir: 'build', // Specify the output directory
  },
  plugins: [react()],
})
```

4. Deploy project (Note: pushing code to GitHub is necessary for the first time)
```npm run deploy```

## Contact
For inquiries or support, feel free to contact me at nephydecode@gmail.com.