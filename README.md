# Krishna Gupta's Personal Portfolio

A sleek, modern, light-themed personal portfolio built with HTML, CSS (featuring glassmorphism), and Vanilla JavaScript. 

## 🎨 Customizing and Replacing Content

### 1. Replacing Placeholder Images
Currently, the portfolio uses high-quality placeholder images from Unsplash. To replace them with your own:
1. Put your image files (e.g., `my-photo.jpg`, `project1.png`) into the project folder.
2. Open `index.html`.
3. Search (Ctrl+F) for `<img src="https://images.unsplash.com/...`
4. Change the `src` attribute to point to your local image. 
   - **Example**: `<img src="my-photo.jpg" alt="Krishna Gupta Portrait" class="portrait-img">`

### 2. Setting Up the Contact Form (Formspree)
The contact form is built to send emails without reloading the page, but it needs an endpoint.
1. Go to [Formspree](https://formspree.io/) and create a free account.
2. Create a new form (e.g., "Portfolio Contact").
3. Formspree will give you an Endpoint URL that looks like this: `https://formspree.io/f/xyzabcde`
4. Open `script.js`.
5. Find the line (around line 59) that says:
   `const formEndpoint = 'https://formspree.io/f/YOUR_FORM_ID_HERE';`
6. Replace `YOUR_FORM_ID_HERE` with your actual Formspree ID.

### 3. Links and Socials
Your Email, GitHub, LinkedIn, and WhatsApp links have already been integrated into the HTML. If you ever need to change them, search `index.html` for `href="mailto:` or `href="https://github.com` and update the URL.

## 🚀 Deployment (Zero-Config)

This is a static site, meaning it can be deployed for free on platforms like **Vercel** or **Netlify** with zero configuration.

### Deploying to Vercel
1. Create a free account on [Vercel](https://vercel.com/).
2. You can either:
   - **Via GitHub**: Push this code to a GitHub repository. In Vercel, click "Add New..." -> "Project", import your GitHub repository, and click "Deploy". Vercel will automatically detect it's a static site.
   - **Via Drag and Drop**: Go to your Vercel Dashboard, click "Add New..." -> "Project", and simply drag and drop this entire project folder into the designated area.
3. Your site will be live on a custom `.vercel.app` domain within seconds!
