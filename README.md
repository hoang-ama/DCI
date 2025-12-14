# DCI - High-Impact Startup Studio Website

This repository contains the front-end code for the DCI (Impact Startup Studio) corporate website, focusing on digital and sustainable transformation ventures in Vietnam.

## 📁 Project Structure

The project follows a standard structure for a static/semi-dynamic website, separating content pages, stylesheets, scripts, and assets.


.├── .github/ 
│└── workflows/ 
│   └── deploy.yml # CI/CD deployment configuration for Google Cloud Storage 
├── companies/ 
│   └── *.md # Markdown source files containing detailed content for each Portfolio Company 
├── image/ │ 
    ├── logos/ │ ├── ... # All website image assets (logos, hero images, banners, etc.) 
├── team-profiles/ 
│   └── *.md # Markdown source files containing detailed bios for each Team Member 
├── index.html # Homepage (Trang chủ) 
├── about.html # About Us page (Về chúng tôi) 
├── companies.html # Portfolio / Companies listing page (Danh mục đầu tư) 
├── team.html # Team listing page (Đội ngũ) 
├── blog.html # Blog listing page (Danh sách bài viết) 
├── blog-details.html # Single Blog Post detail page (Chi tiết bài viết) 
├── contact.html # Contact page (Liên hệ) 
├── founder.html # Founder application page (Cổng thông tin Founder) 
├── investor.html # Investor portal page (Cổng thông tin Nhà đầu tư) 
├── privacy.html # Privacy Policy page (Chính sách bảo mật) 
├── style.css # Main site global CSS (CSS toàn cục) 
├── panel_style.css # CSS for modal panels (Team member/Company details, Investor form) 
├── script.js # Core site functionality and Blog logic 
└── panel_script.js # Interactive panel logic (Team/Company/Investor forms, Portfolio flip cards)


***

## 📝 File Descriptions

| File/Folder | Mục đích chính | Nội dung nổi bật |
| :--- | :--- | :--- |
| **`index.html`** | The main landing page, featuring mission overview, portfolio highlights (with flip cards), and blog previews. | Hero, Mission, Portfolio, Blog Preview, CTA. |
| **`about.html`** | Details about the DCI Startup Studio model, vision, mission, and verticals (Sharing, Green, Circular Economy). | Infographics, Mission/Vision statements, Core Activities. |
| **`companies.html`** | A grid view listing all portfolio companies with interactive detail panels. | Dynamic company grid loaded by `panel_script.js`. |
| **`team.html`** | A grid view listing all founding and leadership team members with interactive bio panels. | Dynamic team grid loaded by `panel_script.js`. |
| **`blog.html`**, **`blog-details.html`** | Pages for displaying the blog list and single posts. | Dynamic post rendering handled by **`script.js`**. |
| **`investor.html`**, **`founder.html`** | Dedicated portals with personas and call-to-action buttons to open the inquiry forms. | Form interaction handled by **`panel_script.js`**. |
| **`companies/*.md`**, **`team-profiles/*.md`** | **Data Source**. These Markdown files provide detailed, structured content for the dynamic side panels (Team/Company bios and information). | Overview, Vision, Mission, Experience, Education, etc. |
| **`style.css`** | **Global Styling**. Contains all responsive layouts, color variables, typography, and general element styling. | Global styles, header/footer styles, main layout. |
| **`panel_style.css`** | **Panel Styling**. Manages the look and feel of the right-hand sliding overlay panels (Team, Company, and Forms), including transitions and responsiveness. | Styles for `.team-panel`, `.company-panel`, `.investor-panel`. |
| **`script.js`** | **Core Logic & Blog**. Contains post data (`postsData`), utility functions (e.g., `slugify`, markdown conversion), and the core rendering logic for the **Blog** and **Homepage** post sections. | `renderBlogPage()`, `renderDetailPost()`, Mobile Menu Toggle. |
| **`panel_script.js`**| **Interactive Panel Logic**. Contains data (`teamMembers`, `companiesData`) and functions to dynamically render grids, handle click-to-open logic for the sliding side panels, and manage the flip-card effect on `index.html`. | `openPanel()`, `openCompanyPanel()`, `renderIndexPortfolioGrid()`. |

***

## 🔗 Component Linking (HTML, CSS, and JS)

The website uses a standard linking methodology for modern web development, ensuring styles are loaded early and scripts are deferred to the end of the document body for optimal performance (non-blocking render).

### 1. CSS Linking
All stylesheets are linked in the `<head>` section of the HTML files.
* **Global Styles:** Every page links to the global stylesheet:
    ```html
    <link rel="stylesheet" href="style.css">
    ```
* **Panel Styles:** Pages featuring the dynamic side panels (`team.html`, `companies.html`, `investor.html`, `founder.html`) additionally include `panel_style.css`:
    ```html
    <link rel="stylesheet" href="panel_style.css">
    ```

### 2. JavaScript Linking
Scripts are loaded just before the closing `</body>` tag to ensure the DOM is fully loaded before the scripts attempt to manipulate it.

* **For pages with interactive panels (e.g., `team.html`):**
    The `panel_script.js` is typically included first as it contains the data and core functions (`markdownToHTML`, `openPanel`, etc.) used by various DOM manipulation logic, followed by `script.js` (which handles generic utility like the mobile menu and blog rendering).
    ```html
    <script src="panel_script.js"></script>
    <script src="script.js"></script>
    ```
* **For simple content pages (e.g., `contact.html`, `about.html`):**
    Only the main logic file is needed:
    ```html
    <script src="script.js"></script>
    ```

### 3. Data Flow
* **Markdown to HTML:** The contents of `companies/*.md` and `team-profiles/*.md` are read by fetch requests in **`panel_script.js`** (or **`script.js`** for blog posts) and converted into HTML using the embedded `markdownToHTML` utility function before being injected into the respective detail panels.
* **Dynamic Grids:** **`panel_script.js`** uses data arrays (`companiesData`, `teamMembers`) to dynamically render the grids on `companies.html` and `team.html`.

***

## 🚀 Getting Started

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone [repository-url]
    cd DCI-website
    ```
2.  **Run with a Local Server:**
    Because the site uses `fetch` to load local Markdown (`*.md`) files, you must use a simple local web server to avoid browser security restrictions (CORS/file protocol).
    * **Recommended:** Use the **Live Server** extension in VS Code.
    * **Alternative (Python):** Run the following command in the project root directory:
        ```bash
        python3 -m http.server
        ```
3.  **Access:** Open your browser and navigate to `http://localhost:8000` (or the address provided by your server).



## Menu:

*Mission*  -> index.html/mission (Home page only)
*About us*  -> about.html (investor.html <> founder.html)
*Portfolio* -> companies.html
*Team* -> team.html
*Blog* -> blog.html/blog-details.html
*Contact* -> contact.html/privacy.html

---

