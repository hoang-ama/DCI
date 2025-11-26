// script.js

// --- 1. POST DATA ---
// Note: Dates are in YYYY-MM-DD format for accurate sorting.
const postsData = [
    {
        id: 10,
        title: "5 Keys to Success for Tech Startups",
        date: "2025-10-25",
        imageUrl: "./image/The-Startups-Keys-to-Success.png",
        content: "Discover the breakthrough strategies to take your startup to the next level...",
    detail: `
Five keys to success for tech startups are a strong value proposition, building a skilled and adaptable team, developing a product with an MVP approach, securing adequate funding, and creating a robust network. These five pillars provide a solid foundation for navigating the challenges of a fast-paced and competitive industry.

### Summary
- Strong value proposition and clear vision
- Skilled, adaptable team
- MVP-driven product development
- Adequate funding and attention to profitability
- Active networking and user engagement

### 1. Define a clear value proposition and vision
- Identify a specific problem or unmet need in the market.
- Develop a unique and valuable solution.
- Align the business plan and roadmap with your company's mission.

### 2. Assemble the right team
- Hire complementary skills and prioritize essential roles.
- Favor versatile team members who can adapt as priorities shift.
- Invest in culture, communication, and collaboration.

### 3. Develop a Minimum Viable Product (MVP)
- Focus on core features that deliver value.
- Test with users and iterate quickly using agile methods.

### 4. Secure adequate funding
- Build a sensible financial plan and target runway milestones.
- Balance growth investments with unit economics and path to profitability.

### 5. Build a strong network
- Engage users early to gather actionable feedback.
- Network with mentors, partners, and peers for hiring and fundraising.

### Conclusion
These five pillars—value proposition, team, MVP, funding, and network—form a practical playbook for founders: start small, iterate fast, and cultivate relationships that scale.`
    },
    {
        id: 9,
        title: "Investing in AI: Opportunity or Challenge?",
        date: "2025-10-20",
        imageUrl: "https://thecriticalscript.com/public/uploads/blog/6447c929746bc_tmpphpwtkyrf.jpg",
        content: "An in-depth analysis of the potential and risks of investing in AI...",
        detail: `
        A balanced look at the promise and pitfalls of AI investment,
    ### Summary
- AI offers transformative returns across sectors.
- Risks include ethical issues, regulatory uncertainty, and model reliability.
- Diversification and due diligence are critical for investors.

### Key Points
- Opportunity: automation, new product categories, productivity gains.
- Challenge: data quality, bias, opaque models, and evolving regulation.
- Strategy: focus on business fundamentals and risk-managed exposure.

### Detailed Discussion
- Assess teams and datasets: strong execution and clean data matter more than buzz.
- Evaluate defensibility: what moat does the AI solution have (data, integration, domain expertise)?
- Consider ethical and governance practices: model explainability and compliance.

### Conclusion
AI presents major opportunities but requires careful underwriting; prioritize explainability, product-market fit, and ethical guardrails.`
    },
    {
        id: 8,
        title: "Sustainable Growth: A New Direction for Startups",
        date: "2025-10-15",
        imageUrl: "https://www.toolagen.com/wp-content/uploads/2024/05/Strategies-to-Build-a-Sustainable-Startup-1024x559.png",
        content: "How startups can integrate sustainability into their business model...",
        detail: `
        Integrating sustainability can drive purpose and economic value.

 ### Summary
- Sustainability is both a mission and a business advantage.
- Embed environmental and social considerations into product and operations.
- Measure impact and communicate transparently to stakeholders.

### Key Points
- Align product-market fit with sustainability goals.
- Reduce waste and improve resource efficiency early.
- Use sustainability as a differentiator for customers and talent.

### Detailed Discussion
- Product design: choose materials and processes that minimize environmental cost.
- Operations: implement circular practices and energy-efficient workflows.
- Metrics: track scope 1/2/3 emissions where relevant, and set measurable targets.

### Conclusion
Startups that bake sustainability into their core often see stronger customer loyalty and access to mission-aligned capital.`
    },
    {
        id: 7,
        title: "The Rise of No-Code Platforms",
        date: "2025-10-10",
        imageUrl: "https://media.licdn.com/dms/image/v2/D5612AQHYWh46tdk16g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1714564591065?e=2147483647&v=beta&t=5ohMG7jQuBHwbTLnE77M7mXlIzr5nAxWFLeeKpIVoz8",
        content: "Empowering non-developers to build powerful applications quickly.",
        detail: 
        `No-code tools are lowering the barrier to building digital products.

 ### Summary
- No-code accelerates prototyping and empowers non-technical builders.
- Not a replacement for engineers, but complements development workflows.
- Choose no-code for speed-to-market and validation; migrate when scale or complexity demands it.

### Key Points
- Rapid iteration and prototyping for product teams.
- Great for internal tools, MVPs, and marketing automations.
- Consider technical debt and exportability when choosing a platform.

### Detailed Discussion
- Use cases: internal dashboards, landing pages, workflows, and simple apps.
- Risk management: maintain data export options and clear ownership of integrations.

### Conclusion
No-code platforms democratize product creation—pick the right tool for the job and plan migration when necessary.
        `
    },
    {
        id: 6,
        title: "Deep Dive into Blockchain Technology",
        date: "2025-09-30",
        imageUrl: "https://media.licdn.com/dms/image/v2/D4D12AQHhWfQkzG9xiA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1679411636821?e=2147483647&v=beta&t=MFCaCi-sXWPrfmlEQ1m9ZmAxXJRa44D9BLTi-EENngs",
        content: "Understanding the decentralized ledger and its impact across industries.",
        detail:
        `Fundamentals, use-cases, and considerations beyond cryptocurrency.

### Summary
- Blockchain offers tamper-evident ledgers useful for trust minimization.
- Not all problems need a blockchain—evaluate decentralization vs centralized alternatives.
- Focus on real-world use cases with clear incentives.

### Key Points
- Core components: consensus, cryptography, and distributed storage.
- Use-cases: supply chain provenance, identity, and tokenized assets.
- Challenges: scalability, UX, and regulatory clarity.

### Detailed Discussion
- When to use: multiple parties need a shared, auditable record without a central authority.
- Integration: layer blockchain where it adds trust; use off-chain systems for heavy computation.

### Conclusion
Blockchain can solve niche but high-impact problems when designed with user experience and real incentives in mind.
        `
    },
    {
        id: 5,
        title: "Cybersecurity Essentials for Small Businesses",
        date: "2025-09-25",
        imageUrl: "https://www.clearnetwork.com/wp-content/uploads/2018/05/cybersecurity-for-small-business.jpg",
        content: "Protecting your data from common digital threats.",
        detail: 
        `Practical steps small teams can take to reduce digital risk.

### Summary
- Start with strong password and identity management.
- Keep systems patched and backups reliable.
- Train staff on phishing and safe practices.

### Key Points
- Identity: MFA and centralized access controls.
- Backups: regular, tested backups with off-site copies.
- Awareness: phishing simulations and clear reporting channels.

### Detailed Discussion
- Implement MFA for all critical services and enforce least privilege.
- Use automated patch management for servers and endpoints.
- Maintain incident response basics: backups, contact lists, and recovery procedures.

### Conclusion
Security doesn't have to be expensive—prioritize the basics and plan for recovery.
        `
    },
    {
        id: 4,
        title: "Mastering Remote Team Management",
        date: "2025-09-20",
        imageUrl: "https://www.proofhub.com/articles/wp-content/uploads/2023/11/A-Manager-Guide-to-Manage-Remote-Team.jpg",
        content: "Strategies for leading high-performing teams from anywhere.",
        detail: 
        `Best practices for leading distributed teams effectively.

### Summary
- Communicate clearly and over-communicate expectations.
- Measure outcomes, not hours.
- Invest in asynchronous processes and strong documentation.

### Key Points
- Set clear goals and OKRs tied to outputs.
- Use regular check-ins, but favor async updates.
- Create rituals to build culture and psychological safety.

### Detailed Discussion
- Onboarding: give new hires a clear ramp with mentors and documentation.
- Meetings: time-box, have agendas, and publish notes.
- Tools: invest in collaboration platforms that support async work.

### Conclusion
Remote teams thrive with clarity, trust, and repeatable communication practices.
        `
    },
    {
        id: 3,
        title: "The Power of Data Visualization",
        date: "2025-09-15",
        imageUrl: "https://assets.justinmind.com/wp-content/uploads/2024/06/data-visualization-header-768x512.png",
        content: "Turning complex data into actionable insights with compelling visuals.",
        detail: 
        `Use visuals to make data accessible and actionable.

### Summary
- Good visuals reveal patterns quickly.
- Choose the right chart for the data and audience.
- Annotate and tell a story—context matters.

### Key Points
- Use aggregation and sampling to manage large datasets.
- Emphasize clarity: labels, legends, and scales.
- Leverage interactivity where helpful for exploration.

### Detailed Discussion
- Start with the question you want to answer, then choose visual encodings.
- Avoid chart junk; focus on signal over decoration.

### Conclusion
Visualization is a force-multiplier for decision making when designed around user questions.
        `
    },
    {
        id: 2,
        title: "Introduction to Cloud Computing",
        date: "2025-09-01",
        imageUrl: "https://homenest.com.vn/wp-content/uploads/2025/11/Cloud-Computing-Tat-ca-ve-dien-toan-dam-may-va-cac-buoc-trien-khai-scaled.jpg",
        content: "A fundamental guide to Infrastructure as a Service (IaaS) and more.",
        detail:
        `Core concepts and deployment models for modern infrastructure.

### Summary
- Cloud offers on-demand resources: IaaS, PaaS, SaaS.
- Benefits: scalability, cost efficiency, and faster time-to-market.
- Consider security, vendor lock-in, and architecture patterns.

### Key Points
- Understand the shared responsibility model.
- Design for failure and automate recovery.
- Use managed services to focus on product differentiation.

### Detailed Discussion
- Service models: IaaS (VMs), PaaS (platform services), SaaS (managed apps).
- Deployment models: public, private, hybrid, and multi-cloud.

### Conclusion
Cloud computing provides flexible building blocks—choose the right abstractions to accelerate development while managing risk.
        `
    },
    {
        id: 1,
        title: "Future of Quantum Computing",
        date: "2025-08-01",
        imageUrl: "https://gmo-research.ai/en/application/files/5716/6080/5815/Quantum_Computing_Image.png",
        content: "Exploring the next generation of computing power and its implications...   ",
        detail:
        `An overview of where quantum computing might take industry and research.

### Summary
- Quantum promises new algorithms for chemistry, optimization, and cryptography.
- Hardware and error correction remain major hurdles.
- Hybrid classical-quantum approaches are the near-term path to value.

### Key Points
- Quantum advantage is problem-specific and not yet general-purpose.
- Near-term impact: materials simulation, optimization, and niche cryptanalysis.
- Prepare by learning quantum-safe cryptography and hybrid workflows.

### Detailed Discussion
- Hardware: qubit types, coherence times, and error correction challenges.
- Software: algorithm development, simulators, and cloud-based quantum access.

### Conclusion
Quantum computing is promising but remains an emerging tech; keep an eye on practical use-cases and tooling that enable hybrid solutions.
        `
    }
];

// Sort posts in reverse chronological order (Newest to Oldest)
const sortedPosts = postsData.sort((a, b) => new Date(b.date) - new Date(a.date));


// --- 2. COMMON FUNCTIONS ---

// Function to create the HTML structure for a single post card
function createPostHTML(post) {
    // prefer post.imageUrl (local or remote) and fall back to a placeholder
    const placeholderImage = `https://www.michaeltaus.com/wp-content/uploads/2025/02/startup-risk.png?text=Image+for+Post+${post.id}`;
    const imageUrl = post.imageUrl ? post.imageUrl : placeholderImage;
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    // Build slug used for the markdown filename and include it as a query param
    const fileSlug = `${post.date}-${post.id}-${slugify(post.title)}`;

    // Row-style post: image on the left, summary on the right with date underneath
    return `
        <article class="post-row">
            <div class="post-image" style="background-image: url('${imageUrl}')" aria-hidden="true"></div>
            <div class="post-summary">
                <h3><a href="blog-details.html?id=${post.id}&slug=${fileSlug}">${post.title}</a></h3>
                <p class="excerpt">${post.content}</p>
                <p class="post-meta">by Henry • ${formattedDate} • 3 mins read</p>
            </div>
        </article>
    `;
}

// --- Markdown helpers ---

// Create a slug from a title similar to the filenames in /posts/
function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^a-z0-9\-]/g, '')    // Remove invalid chars
        .replace(/\-+/g, '-')           // Replace multiple - with single -
        .replace(/^-+/, '')              // Trim - from start
        .replace(/-+$/, '');             // Trim - from end
}

// Fetch the markdown file for a post (by date, id, title slug)
async function fetchMarkdownForPost(post, slugOverride) {
    const filenameBase = slugOverride ? slugOverride : `${post.date}-${post.id}-${slugify(post.title)}`;
    const filename = `./posts/${filenameBase}.md`;
    try {
        const res = await fetch(filename);
        if (!res.ok) throw new Error('Not found');
        const text = await res.text();
        const { frontmatter, body } = parseFrontmatterFromMarkdown(text);
        // Merge frontmatter fields back onto post where applicable
        if (frontmatter.image) post.imageUrl = frontmatter.image.replace(/^"|"$/g, '');
        if (frontmatter.excerpt) post.content = frontmatter.excerpt.replace(/^"|"$/g, '');
        // Use the markdown body as the detailed content
        post.markdownDetail = body.trim();
        return post;
    } catch (err) {
        // If the file isn't present or parse fails, leave post unchanged
        return post;
    }
}

// Very small YAML/frontmatter parser (expects --- frontmatter --- then body)
function parseFrontmatterFromMarkdown(md) {
    const match = md.match(/^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/m);
    if (!match) return { frontmatter: {}, body: md };
    const fmRaw = match[1];
    const body = match[2];
    const lines = fmRaw.split(/\r?\n/);
    const fm = {};
    for (let line of lines) {
        const idx = line.indexOf(':');
        if (idx === -1) continue;
        const key = line.slice(0, idx).trim();
        let value = line.slice(idx + 1).trim();
        // basic array handling for tags: ["a", "b"]
        if (value.startsWith('[') && value.endsWith(']')) {
            try { fm[key] = JSON.parse(value); } catch (e) { fm[key] = value; }
        } else {
            fm[key] = value.replace(/^"|"$/g, '');
        }
    }
    return { frontmatter: fm, body };
}

// Minimal Markdown -> HTML converter for headings, lists, blockquotes and paragraphs
function markdownToHTML(md) {
    const lines = md.split(/\r?\n/);
    let html = '';
    let inList = false;
    for (let raw of lines) {
        const line = raw.trim();
        if (!line) {
            if (inList) { html += '</ul>'; inList = false; }
            continue;
        }
        if (line.startsWith('### ')) { html += `<h3>${line.slice(4)}</h3>`; continue; }
        if (line.startsWith('## ')) { html += `<h2>${line.slice(3)}</h2>`; continue; }
        if (line.startsWith('# ')) { html += `<h1>${line.slice(2)}</h1>`; continue; }
        if (line.startsWith('> ')) { html += `<blockquote>${line.slice(2)}</blockquote>`; continue; }
        if (line.startsWith('- ')) {
            if (!inList) { html += '<ul>'; inList = true; }
            html += `<li>${line.slice(2)}</li>`;
            continue;
        }
        // default paragraph
        html += `<p>${line}</p>`;
    }
    if (inList) html += '</ul>';
    return html;
}

// Heuristic to decide if a text block is markdown-like
function isProbablyMarkdown(text) {
    if (!text || typeof text !== 'string') return false;
    // Look for common markdown patterns: headings, lists, blockquotes or multiple line breaks
    const mdPatterns = [/^#\s+/m, /^##\s+/m, /^###\s+/m, /^-\s+/m, /^>\s+/m, /\n\s*\n/];
    return mdPatterns.some(re => re.test(text));
}


// --- 3. PAGE-SPECIFIC RENDERING FUNCTIONS ---

// Renders the 3 most recent posts on the Home Page (index.html)
function renderHomePosts() {
    const container = document.getElementById('home-posts-container');
    if (!container) return; 
    
    // 1. Get the 3 newest posts
    const recentPosts = sortedPosts.slice(0, 3);
    
    // 2. Separate the static title from the dynamic content
    let postsHTML = '';
    recentPosts.forEach(post => {
        postsHTML += createPostHTML(post);
    });
    
    // 3. Insert the cards after the static h2 title
    // The container already has the <h2 class="section-title">From the Blog</h2>
    // We select the container and append the new div to maintain the structure.
    
    // Create a temporary div to hold the posts, so we don't overwrite the H2
    const postsWrapper = document.createElement('div');
    postsWrapper.innerHTML = postsHTML;
    
    // Append the posts to the container
    container.appendChild(postsWrapper);
}


// Renders all posts with pagination on the Blog Page (blog.html)
const POSTS_PER_PAGE = 5; 

function renderBlogPage() {
    const container = document.getElementById('blog-posts-container');
    const paginationContainer = document.getElementById('pagination-controls');
    if (!container || !paginationContainer) return;

    // 1. Get the current page from URL (defaults to page 1)
    const urlParams = new URLSearchParams(window.location.search);
    const currentPage = parseInt(urlParams.get('page')) || 1;

    // 2. Calculate pagination details
    const totalPosts = sortedPosts.length;
    const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
    
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;

    // 3. Slice the array to get posts for the current page
    const postsOnPage = sortedPosts.slice(startIndex, endIndex);

    // 4. Display posts (centered container)
    let postsHTML = '';
    postsOnPage.forEach(post => {
        postsHTML += createPostHTML(post);
    });

    // Wrap posts in a centered container to match the page layout
    container.innerHTML = `<div class="posts-list">${postsHTML}</div>`;

    // 5. Create pagination buttons
    let paginationHTML = '';
    if (totalPages > 1) {
        for (let i = 1; i <= totalPages; i++) {
            const isActive = i === currentPage ? 'active' : '';
            // Link to blog.html?page=i
            paginationHTML += `<a href="blog.html?page=${i}" class="${isActive}">${i}</a>`;
        }
    }
    paginationContainer.innerHTML = paginationHTML;
}


// Renders the full content for a single post (blog-details.html)
async function renderDetailPost() {
    const container = document.getElementById('single-post-container');
    if (!container) return; 

    // 1. Get the ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));

    // 2. Find the corresponding post
    let post = sortedPosts.find(p => p.id === postId);

    if (!post) {
        container.innerHTML = '<h1>Error: Article not found.</h1>';
        return;
    }

    // Try to fetch a markdown source for this post and enrich the post object
    const slugParam = urlParams.get('slug');
    post = await fetchMarkdownForPost(post, slugParam);

    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const detailImage = post.imageUrl ? `<img src="${post.imageUrl}" alt="${post.title}" style="max-width:100%;border-radius:12px;margin-bottom:18px;"/>` : '';

    // Prefer fetched markdown detail if available. Otherwise always convert the
    // fallback `post.detail` through the markdown parser so headings/lists render.
    let detailHTML = '';
    if (post.markdownDetail) {
        detailHTML = markdownToHTML(post.markdownDetail);
    } else {
        // Force-convert fallback detail (handles plain text, headings, lists, etc.)
        detailHTML = markdownToHTML(String(post.detail || ''));
    }

    container.innerHTML = `
        <article class="single-post">
            ${detailImage}
            <h1>${post.title}</h1>
            <p class="post-meta">Published on: ${formattedDate}</p>
            <hr>
            ${detailHTML}
        </article>
    `;
    // Update the document title dynamically
    document.getElementById('post-title-meta').textContent = post.title;
}


// --- 4. MOBILE MENU TOGGLE ---
// Function to handle the mobile menu toggle functionality

function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Chỉ chạy nếu cả nút và menu đều tồn tại (giúp code không bị lỗi nếu header khác nhau)
    if (menuToggle && navLinks) {
        // Thêm nút toggle vào header (chỉ hiển thị trên mobile qua CSS)
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Đóng menu khi người dùng chọn một liên kết (chỉ áp dụng cho mobile)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }
}



// --- COMPANY DATA ---
const companiesData = [
    {
        id: 'dichung', name: 'DiChung', logo: './image/logos/DC_trans.png', heroImage: './image/logos/Dichung_hero.jpg', vertical: 'Shared Mobility', stage: 'Growth', year: 2013,
        website: 'https://dichung.vn', email: 'contact@dichung.vn',
        description: 'DiChung is the leading ride-sharing platform'
    },
    {
        id: 'chungxe', name: 'Chungxe', logo: './image/logos/CX_trans.png', heroImage: './image/logos/Chungxe_hero.jpg', vertical: 'Shared Mobility', stage: 'Transition', year: 2018,
        website: 'https://chungxe.vn', email: 'contact@chungxe.vn',
        description: 'Chungxe offers a diverse fleet of vehicles for rent, from motorbikes to cars, providing flexible and affordable transportation solutions within the Sharing Economy.'
    },
    {
        id: 'parkchung', name: 'ParkChung', logo: './image/logos/Parkchung_logo.png', heroImage: './image/logos/Parkchung_hero.jpg', vertical: 'Shared Mobility', stage: 'Transition', year: 2020,
        website: 'https://parkchung.vn', email: 'contact@parkchung.vn',
        description: 'ParkChung offers smart parking solutions, helping drivers find available parking spots quickly and efficiently, reducing urban congestion in Shared Mobility.'
    },
    {
        id: 'totmart', name: 'TotMart', logo: './image/logos/TotMart_logo.png', heroImage: './image/logos/TotMart_hero.jpg', vertical: 'Circular Economy', stage: 'Seed', year: 2021,
        website: 'https://totmart.vn', email: 'contact@totmart.vn',
        description: 'TotMart is an e-commerce platform focused on sustainable consumption, offering eco-friendly products and promoting responsible shopping habits in the Circular Economy.'
    },
    {
        id: 'oncar', name: 'OnCar', logo: './image/logos/onCar_logo.png', heroImage: './image/logos/OnCar_hero.jpg', vertical: 'Logistics', stage: 'Seed', year: 2022,
        website: 'https://oncar.vn', email: 'contact@oncar.vn',
        description: 'Oncar provides premium car charter services, offering comfort and convenience for business and leisure travelers in the Mobility sector.'
    },
    {
        id: 'vshare', name: 'Vshare', logo: './image/logos/Vshare_logo.png', heroImage: './image/logos/Vshare_hero.jpg', vertical: 'Shared Mobility', stage: 'Transition', year: 2019,
        website: 'https://vshare.vn', email: 'contact@vshare.vn',
        description: 'Vshare is a peer-to-peer car sharing platform, allowing individuals to rent out their personal vehicles, maximizing asset utilization and fostering the Sharing Economy.'
    },
    {
        id: 'carx', name: 'CarX', logo: './image/logos/CarX_logo.png', heroImage: './image/logos/CarX_hero.jpg', vertical: 'Automotive Tech', stage: 'Seed', year: 2022,
        website: 'https://carx.vn', email: 'contact@carx.vn',
        description: 'CarX offers an innovative online auto-retail experience, simplifying the process of buying and selling used cars with transparency and trust.'
    },
    {
        id: 'agrix', name: 'AgriX', logo: './image/logos/AgriX_logo.png', heroImage: './image/logos/AgriX_hero.jpg', vertical: 'Green Economy', stage: 'Proof-of-Concept', year: 2023,
        website: 'https://agrix.vn', email: 'contact@agrix.vn',
        description: 'AgriX is a smart agriculture platform leveraging technology to optimize crop yields, improve farming efficiency, and promote sustainable practices in the Green Economy.'
    },
    {
        id: 'dcexpress', name: 'DC Express', logo: './image/logos/DCExpress_trans.png', heroImage: './image/logos/DCExpress_hero.jpg', vertical: 'Logistics', stage: 'Growth', year: 2017,
        website: 'https://dcexpress.vn', email: 'contact@dcexpress.vn',
        description: 'DC Express provides fast and reliable express delivery services for both B2C and B2B clients, ensuring timely and secure package transportation in Logistics.'
    },
    {
        id: 'dctransport', name: 'DC Transport', logo: './image/logos/DCTransport_trans.png', heroImage: './image/logos/DCTransport_hero.jpg', vertical: 'Logistics', stage: 'Transition', year: 2016,
        website: 'https://dichungtransport.vn', email: 'contact@dctransport.vn',
        description: 'DiChung Transport specializes in large-scale logistics and freight services, offering efficient and cost-effective solutions for businesses.'
    },
    {
        id: 'dctech', name: 'DC Tech', logo: './image/logos/DCTech_trans.png', heroImage: './image/logos/DCTech_hero.jpg', vertical: 'SaaS', stage: 'Transition', year: 2018,
        website: 'https://dctech.vn', email: 'contact@dctech.vn',
        description: 'DC Tech is a SaaS platform providing advanced technological solutions for mobility and logistics operations, enhancing efficiency and scalability.'
    },
    {
        id: 'dichungtravel', name: 'DiChung Travel', logo: './image/logos/DCTravel_trans.png', heroImage: './image/logos/DCTravel_hero.jpg', vertical: 'Travel', stage: 'Seed', year: 2021,
        website: 'https://dichungtravel.vn', email: 'contact@dichungtravel.vn',
        description: 'DiChung Travel offers personalized and group travel services, focusing on sustainable tourism and unique cultural experiences.'
    },
    {
        id: 'youthplus', name: 'Youth+', logo: './image/logos/Youthplus_logo.png', heroImage: './image/logos/Youthplus_hero.jpg', vertical: 'Social Impact', stage: 'Seed', year: 2022,
        website: 'https://youthplus.vn', email: 'contact@youthplus.vn',
        description: 'Youth+ is a community-driven initiative empowering young individuals through educational programs, mentorship, and social impact projects.'
    },
    {
        id: 'fafifun', name: 'FaFiFun', logo: './image/logos/FFF_logo.webp', heroImage: './image/logos/FairPlay_hero.jpg', vertical: 'Circular Economy', stage: 'Proof-of-Concept', year: 2023,
        website: 'https://fairplay.vn', email: 'contact@fairplay.vn',
        description: 'FaFiFun is a platform dedicated to promoting fair trade practices and ethical consumerism, connecting conscious consumers with responsible producers.'
    },
];


// --- NEW COMPANY PANEL LOGIC ---

// Try to fetch markdown profile by company id or slug
async function fetchCompanyMarkdown(company) {
    const candidates = [
        `./companies/${company.id}.md`,
        `./companies/${slugify(company.name)}.md`
    ];
    for (const url of candidates) {
        try {
            const res = await fetch(url);
            if (!res.ok) continue;
            const text = await res.text();
            // Simple check for frontmatter (---) and body
            if (text.startsWith('---')) {
                const parts = text.split('---');
                const body = parts.slice(2).join('---').trim();
                // Note: Skipping complex frontmatter parsing for simplicity; all required data is in companiesData.
                return body;
            }
            return text; // Return plain text/simple markdown body
        } catch (err) {
            // console.warn(`Could not load MD for ${company.name} at ${url}: ${err.message}`);
        }
    }
    return null; // No markdown file found
}

// Open the detail panel for a company
async function openCompanyPanel(company) {
    const overlay = document.getElementById('company-overlay');
    const panelInner = document.getElementById('companyPanelInner');
    const companyPanel = document.getElementById('companyPanel');
    
    // --- 1. Fetch detailed content (Markdown) ---
    const mdBody = await fetchCompanyMarkdown(company);
    let contentHTML = '';
    
    if (mdBody) {
        contentHTML = markdownToHTML(mdBody);
    } else {
        // Fallback: use description from JS data and convert to HTML
        contentHTML = `<p>${company.description}</p>`;
    }
    
    // --- 2. Build Panel HTML ---
    panelInner.innerHTML = `
        <div class="panel-header">
            <div class="header-logo-area">
                <img src="${company.logo}" alt="${company.name} Logo">
            </div>
            <div class="header-hero-img" style="background-image: url('${company.heroImage}')">
                </div>
        </div>

        <div class="panel-body">
            <div class="panel-left">
                <div class="company-name">${company.name}</div>
                
                <div class="company-meta-item">
                    <span class="meta-label">Website</span>
                    <a class="meta-value" href="${company.website}" target="_blank">${company.website.replace(/https?:\/\//, '')}</a>
                </div>
                <div class="company-meta-item">
                    <span class="meta-label">Email</span>
                    <a class="meta-value" href="mailto:${company.email}">${company.email}</a>
                </div>
                
                <div class="company-meta-item">
                    <span class="meta-label">Founded</span>
                    <span class="meta-value">${company.year}</span>
                </div>
                
                <div class="company-meta-item">
                    <span class="meta-label">Vertical</span>
                    <span class="meta-value">${company.vertical}</span>
                </div>
                
                <div class="company-meta-item">
                    <span class="meta-label">Stage</span>
                    <span class="meta-value">${company.stage}</span>
                </div>
            </div>

            <div class="panel-right">
                ${contentHTML}
            </div>
        </div>
    `;

    // --- 3. Show Panel ---
    overlay.classList.add('show');
    overlay.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden'; // Lock background scroll
}

// Function to close the panel
function closeCompanyPanel() {
    const overlay = document.getElementById('company-overlay');
    if (overlay) {
        overlay.classList.remove('show');
        overlay.setAttribute('aria-hidden','true');
        document.body.style.overflow = '';
    }
}

// --- RENDER COMPANIES GRID (Update to use new panel logic) ---
function renderCompaniesPage() {
    const companiesGridContainer = document.querySelector('.companies-grid');
    if (!companiesGridContainer) return; 

    companiesGridContainer.innerHTML = ''; 

    companiesData.forEach(company => {
        const companyItem = document.createElement('div');
        companyItem.classList.add('company-item');
        // No longer storing ID, but attaching event listener directly
        companyItem.innerHTML = `
            <img src="${company.logo}" alt="${company.name} Logo">
        `;
        // Attach the new panel opening function
        companyItem.addEventListener('click', () => openCompanyPanel(company));
        companiesGridContainer.appendChild(companyItem);
    });

    // Add event listeners for closing the panel
    const closeBtn = document.getElementById('companyClose');
    const backdrop = document.getElementById('companyBackdrop');
    const overlay = document.getElementById('company-overlay');

    if (closeBtn) closeBtn.addEventListener('click', closeCompanyPanel);
    if (backdrop) backdrop.addEventListener('click', closeCompanyPanel);
    if (overlay) {
         overlay.addEventListener('click', (event) => {
            if (event.target === overlay) {
                closeCompanyPanel();
            }
        });
    }
    
    document.addEventListener('keydown', (e) => { 
        if (e.key === 'Escape' && overlay.classList.contains('show')) {
            closeCompanyPanel();
        } 
    });
}


// --- GLOBAL INITIALIZATION UPDATE ---
// Add the check to run renderCompaniesPage when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu initialization should run on all pages
    initMobileMenu();

    // Check for specific page elements to determine render function
    if (document.getElementById('single-post-container')) {
        renderDetailPost();
    } else if (document.getElementById('blog-posts-container')) {
        renderBlogPage();
    } else if (document.getElementById('home-posts-container')) {
        renderHomePosts();
    } else if (document.querySelector('.companies-grid')) { // Check for companies page container
        renderCompaniesPage();
    }
});

