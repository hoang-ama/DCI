// script.js

// --- 1. POST & JOBS DATA ---
// NOTE: Added 'category' (for buttons) and 'tags' (array for tags) fields.
const postsData = [
    {
        id: 14,
        title: "How Startup Studio build successful startups?",
        date: "2025-12-15",
        imageUrl: "./image/DCI_SSfunnel.png",
        content: "How Startup Studios systematically create and scale successful startups...",
        category: "Studio", 
        tags: ["model"], 
    },
    {
        id: 13,
        title: "What is the Startup Studio?",
        date: "2025-12-08",
        imageUrl: "./image/What-is-Startup-Studio.png",
        content: "Understanding the startup studio model, its key characteristics, and how it differs ...",
        category: "Studio", 
        tags: ["model"], 
    },
     {
        id: 12,
        title: "Startup Studio vs. Other models",
        date: "2025-12-08",
        imageUrl: "./image/Startup-Studio-vs-Incubators-Accelerators-VCs.png",
        content: "What is make a Startup Studio different from Incubator, Accelerator and VC...",
        category: "Studio",
        tags: ["model"],
    },
    {
        id: 11,
        title: "The Evolution of Startup Studios",
        date: "2025-12-08",
        imageUrl: "./image/The-Evolution-of-Startup-Studios.jpg",
        content: "The Startup Studio model has evolved through several waves since its inception in the 1990s...",
        category: "Studio", 
        tags: ["model"], 
     },
    {
        id: 10,
        title: "5 Keys to Success for Tech Startups",
        date: "2025-10-25",
        imageUrl: "./image/The-Startups-Keys-to-Success.png",
        content: "Discover the breakthrough strategies to take your startup to the next level...",
        category: "Startup",
        tags: ["model", "management"], 
    },
    {
        id: 9,
        title: "Investing in AI: Opportunity or Challenge?",
        date: "2025-10-20",
        imageUrl: "https://thecriticalscript.com/public/uploads/blog/6447c929746bc_tmpphpwtkyrf.jpg",
        content: "An in-depth analysis of the potential and risks of investing in AI...",
        category: "Investor", 
        tags: ["ai"], 
      },
    {
        id: 8,
        title: "Sustainable Growth: A New Direction for Startups",
        date: "2025-10-15",
        imageUrl: "https://www.toolagen.com/wp-content/uploads/2024/05/Strategies-to-Build-a-Sustainable-Startup-1024x559.png",
        content: "How startups can integrate sustainability into their business model...",
        category: "Startup",
        tags: ["model", "management"], 
    },
    {
        id: 7,
        title: "The Rise of No-Code Platforms",
        date: "2025-10-10",
        imageUrl: "https://media.licdn.com/dms/image/v2/D5612AQHYWh46tdk16g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1714564591065?e=2147483647&v=beta&t=5ohMG7jQuBHwbTLnE77M7mXlIzr5nAxWFLeeKpIVoz8",
        content: "Empowering non-developers to build powerful applications quickly.",
        category: "Startup", 
        tags: ["product"], 
    },
    {
        id: 6,
        title: "Deep Dive into Blockchain Technology",
        date: "2025-09-30",
        imageUrl: "https://media.licdn.com/dms/image/v2/D4D12AQHhWfQkzG9xiA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1679411636821?e=2147483647&v=beta&t=MFCaCi-sXWPrfmlEQ1m9ZmAxXJRa44D9BLTi-EENngs",
        content: "Understanding the decentralized ledger and its impact across industries.",
        category: "Startup", 
        tags: ["blockchain"], 
    },
    {
        id: 5,
        title: "Cybersecurity Essentials for Small Businesses",
        date: "2025-09-25",
        imageUrl: "https://www.clearnetwork.com/wp-content/uploads/2018/05/cybersecurity-for-small-business.jpg",
        content: "Protecting your data from common digital threats.",
        category: "Founder", 
        tags: ["cybersecurity"], 
    },
    {
        id: 4,
        title: "Mastering Remote Team Management",
        date: "2025-09-20",
        imageUrl: "https://www.proofhub.com/articles/wp-content/uploads/2023/11/A-Manager-Guide-to-Manage-Remote-Team.jpg",
        content: "Strategies for leading high-performing teams from anywhere.",
        category: "Founder", 
        tags: ["management"], 
    },
    {
        id: 3,
        title: "The Power of Data Visualization",
        date: "2025-09-15",
        imageUrl: "https://assets.justinmind.com/wp-content/uploads/2024/06/data-visualization-header-768x512.png",
        content: "Turning complex data into actionable insights with compelling visuals.",
        category: "Startup", 
        tags: ["data", "product"], 
    },
    {
        id: 2,
        title: "Introduction to Cloud Computing",
        date: "2025-09-01",
        imageUrl: "https://homenest.com.vn/wp-content/uploads/2025/11/Cloud-Computing-Tat-ca-ve-dien-toan-dam-may-va-cac-buoc-trien-khai-scaled.jpg",
        content: "A fundamental guide to Infrastructure as a Service (IaaS) and more.",
        category: "Startup", 
        tags: ["clound"], 
    },
    {
        id: 1,
        title: "Future of Quantum Computing",
        date: "2025-08-01",
        imageUrl: "https://gmo-research.ai/en/application/files/5716/6080/5815/Quantum_Computing_Image.png",
        content: "Exploring the next generation of computing power and its implications...   ",
        category: "Startup", 
        tags: ["quantum"], 
  }
];
// Sort posts in reverse chronological order (Newest to Oldest)
const sortedPosts = postsData.sort((a, b) => new Date(b.date) - new Date(a.date));

// --- NEW: JOBS DATA ---
const jobsData = [
    {
        id: 1,
        title: "Senior Full Stack Developer",
        department: "Technology",
        type: "Full-time",
        location: "Hanoi/Remote",
        company: "DC Tech",
        description: "Develop and maintain SaaS platform features using Node.js and React. Requires 5+ years experience.",
        link: "https://dcinvest.vn/careers/senior-dev",
        slug: "senior-full-stack-developer" // <--- THÊM TRƯỜNG NÀY
    },
    {
        id: 2,
        title: "Product Manager (Mobility)",
        department: "Business",
        type: "Full-time",
        location: "Hanoi",
        company: "DiChung",
        description: "Define product roadmap for shared mobility services, focusing on user acquisition and retention.",
        link: "https://dcinvest.vn/careers/pm-mobility",
        slug: "product-manager-mobility"
    },
    {
        id: 3,
        title: "Digital Marketing Specialist",
        department: "Marketing",
        type: "Full-time",
        location: "Hanoi",
        company: "DCI Studio",
        description: "Manage digital campaigns (SEO, SEM) for DCI and portfolio companies. Focus on performance marketing.",
        link: "https://dcinvest.vn/careers/digital-marketing",
        slug: "digital-marketing-specialist"
    },
    {
        id: 4,
        title: "Operations Intern",
        department: "Business",
        type: "Internship",
        location: "Ho Chi Minh City",
        company: "Chungxe",
        description: "Assist with fleet management, logistics coordination, and customer service optimization.",
        link: "https://dcinvest.vn/careers/ops-intern",
        slug: "operations-intern"
    },
    {
        id: 5,
        title: "HR & Talent Acquisition",
        department: "HR",
        type: "Full-time",
        location: "Hanoi",
        company: "DCI Studio",
        description: "Lead recruitment process for senior management and engineering roles across the studio ecosystem.",
        link: "https://dcinvest.vn/careers/hr-talent",
        slug: "hr-talent-acquisition"
    }
];


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

// --- Markdown helpers (kept the same) ---
function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^a-z0-9\-]/g, '')    // Remove invalid chars
        .replace(/\-+/g, '-')           // Replace multiple - with single -
        .replace(/^-+/, '')              // Trim - from start
        .replace(/-+$/, '');             // Trim - from end
}

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

function isProbablyMarkdown(text) {
    if (!text || typeof text !== 'string') return false;
    // Look for common markdown patterns: headings, lists, blockquotes or multiple line breaks
    const mdPatterns = [/^#\s+/m, /^##\s+/m, /^###\s+/m, /^-\s+/m, /^>\s+/m, /\n\s*\n/];
    return mdPatterns.some(re => re.test(text));
}


// --- 3. PAGE-SPECIFIC RENDERING FUNCTIONS ---

// Renders the 3 most recent posts on the Home Page (index.html)
function renderHomePosts() {
    // ... (logic remains the same) ...
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

// --- NEW: Global filter states for Blog ---
let currentCategoryFilter = 'All';
let currentTagFilter = 'All';
let currentBlogPage = 1;


function renderBlogPage() {
    const container = document.getElementById('blog-posts-container');
    const paginationContainer = document.getElementById('pagination-controls');
    const categoryFilters = document.getElementById('category-filters'); // NEW ID
    const tagFilters = document.getElementById('tag-filters');         // NEW ID

    if (!container || !paginationContainer) return;

    // 1. Get the current page from URL (defaults to page 1)
    const urlParams = new URLSearchParams(window.location.search);
    currentBlogPage = parseInt(urlParams.get('page')) || 1;
    
    // --- Core Rendering & Filtering Logic ---
    function updateBlogList() {
        
        const postsToDisplay = sortedPosts; 
        
        // --- START FILTERING LOGIC ---
        const filteredPosts = postsToDisplay.filter(post => {
            const categoryMatch = currentCategoryFilter === 'All' || post.category === currentCategoryFilter;
            // Check if the post's tags array includes the currently selected tag
            const tagMatch = currentTagFilter === 'All' || (post.tags && post.tags.includes(currentTagFilter));
            return categoryMatch && tagMatch;
        });
        // --- END FILTERING LOGIC ---

        const totalPosts = filteredPosts.length;
        const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
        
        const startIndex = (currentBlogPage - 1) * POSTS_PER_PAGE;
        const endIndex = startIndex + POSTS_PER_PAGE;

        // Slice the array to get posts for the current page
        const postsOnPage = filteredPosts.slice(startIndex, endIndex);

        // Display posts
        let postsHTML = '';
        if (postsOnPage.length === 0) {
             postsHTML = `<p style="text-align: center; color: var(--grey-text); padding: 30px;">No articles found matching the selected filters.</p>`;
        } else {
             postsOnPage.forEach(post => {
                postsHTML += createPostHTML(post);
            });
        }
        
        container.innerHTML = `<div class="posts-list">${postsHTML}</div>`;

        // Create pagination buttons
        let paginationHTML = '';
        if (totalPages > 1) {
            for (let i = 1; i <= totalPages; i++) {
                const isActive = i === currentBlogPage ? 'active' : '';
                // Simple pagination (no filter state persistence in URL for simplicity)
                paginationHTML += `<a href="blog.html?page=${i}" class="${isActive}">${i}</a>`;
            }
        }
        paginationContainer.innerHTML = paginationHTML;
    }
    
    // --- Setup Filters ---
    
    // 1. Category Filter Setup (Buttons)
    if (categoryFilters) {
        categoryFilters.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn')) {
                categoryFilters.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                // Ensure Tags filter is reset when Category changes
                tagFilters.querySelectorAll('.tag').forEach(tag => tag.classList.remove('active'));
                currentTagFilter = 'All'; 

                currentCategoryFilter = e.target.getAttribute('data-filter') || 'All';
                currentBlogPage = 1; 
                updateBlogList();
            }
        });
    }

    // 2. Tag Filter Setup (Tags)
    if (tagFilters) {
        tagFilters.addEventListener('click', (e) => {
            if (e.target.classList.contains('tag')) {
                // Determine the new filter value
                const selectedTag = e.target.getAttribute('data-filter');
                
                // Toggle logic: If the selected tag is currently active, unselect it.
                const isCurrentlyActive = e.target.classList.contains('active');
                
                // Reset active class on all tags
                tagFilters.querySelectorAll('.tag').forEach(tag => tag.classList.remove('active'));
                
                if (!isCurrentlyActive) {
                    // Activate the selected tag
                    e.target.classList.add('active');
                    currentTagFilter = selectedTag;
                } else {
                    // Deactivate all
                    currentTagFilter = 'All';
                }

                currentBlogPage = 1; 
                updateBlogList();
                e.preventDefault(); 
            }
        });
    }

    // Initial rendering
    updateBlogList();
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


// --- 4. RENDER COMPANIES GRID (Bao gồm logic lọc Vertical) ---
// Thêm một biến trạng thái toàn cục mới để lưu bộ lọc Vertical
let currentVerticalFilter = 'All'; 

// --- RENDER COMPANIES GRID (Updated with Mobile Dropdown) ---
function renderCompaniesPage() {
    const companiesGridContainer = document.querySelector('.companies-grid');
    const verticalFiltersContainer = document.getElementById('vertical-filters'); 
    const mobileSelect = document.getElementById('mobile-vertical-filter'); // NEW: Lấy thẻ Select

    if (!companiesGridContainer) return; 

    // 1. Thu thập các Vertical độc nhất
    const allVerticals = companiesData.map(c => c.vertical);
    const uniqueVerticals = ['All', ...new Set(allVerticals)];

    // Core rendering/filtering logic function
    function updateCompaniesGrid() {
        companiesGridContainer.innerHTML = ''; 

        // Filtering Logic
        const filteredCompanies = companiesData.filter(company => {
            return currentVerticalFilter === 'All' || company.vertical === currentVerticalFilter;
        });

        if (filteredCompanies.length === 0) {
            companiesGridContainer.innerHTML = `<p style="text-align: center; color: var(--grey-text); padding: 30px; grid-column: 1 / -1;">No companies found in the selected vertical.</p>`;
        } else {
            filteredCompanies.forEach(company => {
                const companyItem = document.createElement('div');
                companyItem.classList.add('company-item');
                companyItem.innerHTML = `
                    <img src="${company.logo}" alt="${company.name} Logo">
                `;
                companyItem.addEventListener('click', () => openCompanyPanel(company));
                companiesGridContainer.appendChild(companyItem);
            });
        }
    }
    
    // 2. Render Filter Controls (Both Buttons and Dropdown)
    
    // A. Render Desktop Buttons
    if (verticalFiltersContainer) {
        let buttonsHTML = '';
        uniqueVerticals.forEach(vertical => {
            const isActive = vertical === currentVerticalFilter ? 'active' : '';
            buttonsHTML += `<button class="btn nav-btn ${isActive}" data-filter="${vertical}">${vertical}</button>`;
        });
        verticalFiltersContainer.innerHTML = buttonsHTML;
    }

    // B. Render Mobile Dropdown Options (NEW)
    if (mobileSelect) {
        let optionsHTML = '';
        uniqueVerticals.forEach(vertical => {
            // Chọn option tương ứng với filter hiện tại
            const isSelected = vertical === currentVerticalFilter ? 'selected' : '';
            optionsHTML += `<option value="${vertical}" ${isSelected}>${vertical}</option>`;
        });
        mobileSelect.innerHTML = optionsHTML;
    }

    // 3. Setup Event Listeners

    // A. Desktop Buttons Click
    if (verticalFiltersContainer) {
        verticalFiltersContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn')) {
                currentVerticalFilter = e.target.getAttribute('data-filter') || 'All';
                
                // Update UI: Re-render buttons/select to reflect active state
                renderControlsAndGrid(); 
            }
        });
    }

    // B. Mobile Dropdown Change (NEW)
    if (mobileSelect) {
        mobileSelect.addEventListener('change', (e) => {
            currentVerticalFilter = e.target.value;
            
            // Update UI
            renderControlsAndGrid();
        });
    }

    // Helper to refresh grid and sync both controls
    function renderControlsAndGrid() {
        updateCompaniesGrid();
        
        // Sync Buttons Active State
        if (verticalFiltersContainer) {
            const buttons = verticalFiltersContainer.querySelectorAll('.btn');
            buttons.forEach(btn => {
                if (btn.getAttribute('data-filter') === currentVerticalFilter) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }

        // Sync Select Value
        if (mobileSelect) {
            mobileSelect.value = currentVerticalFilter;
        }
    }
    
    // Initial render
    updateCompaniesGrid();

    // ... (Phần logic đóng/mở panel giữ nguyên) ...
    const closeBtn = document.getElementById('companyClose');
    const backdrop = document.getElementById('companyBackdrop');
    const overlay = document.getElementById('company-overlay');

    if (closeBtn) closeBtn.addEventListener('click', closeCompanyPanel);
    if (backdrop) backdrop.addEventListener('click', closeCompanyPanel);
    if (overlay) {
         overlay.addEventListener('click', (event) => {
            if (event.target === overlay) closeCompanyPanel();
        });
    }
    document.addEventListener('keydown', (e) => { 
        if (e.key === 'Escape' && overlay.classList.contains('show')) closeCompanyPanel();
    });
}

// --- 5. CAREERS PAGE RENDERING FUNCTIONS (Kept the same) ---

// Function to create the HTML structure for a single job posting (reusing .post-row style)
function createJobHTML(job) {
    // SỬA ĐỔI LINK Apply Now
    const jobLink = `job-details.html?id=${job.id}&slug=${job.slug}`;
    return `
        <article class="post-row job-row">
            <div class="post-summary" style="flex: 1;">
                <h3 style="margin-bottom: 5px;">${job.title} - ${job.company}</h3>
                <p class="excerpt">${job.description}</p>
                <p class="post-meta" style="margin-top: 10px;">
                    <i class="fas fa-building"></i> ${job.department} &bull; 
                    <i class="fas fa-map-marker-alt"></i> ${job.location} &bull; 
                    <i class="fas fa-clock"></i> ${job.type}
                </p>
            </div>
            <div style="flex-shrink: 0; display: flex; align-items: center;">
                <a href="${jobLink}" class="btn" style="white-space: nowrap;">Apply Now</a>
            </div>
        </article>
    `;
}

// Function to render the careers page with filtering logic (Kept the same)
function renderCareersPage() {
    const container = document.getElementById('jobs-list');
    const departmentFilters = document.getElementById('department-filters');
    const typeFilters = document.getElementById('type-filters');
    if (!container) return;

    let currentDepartmentFilter = 'All';
    let currentTypeFilter = 'All';

    // Core rendering function
    function updateJobList() {
        container.innerHTML = '';
        const filteredJobs = jobsData.filter(job => {
            const departmentMatch = currentDepartmentFilter === 'All' || job.department === currentDepartmentFilter;
            const typeMatch = currentTypeFilter === 'All' || job.type === currentTypeFilter;
            return departmentMatch && typeMatch;
        });

        if (filteredJobs.length === 0) {
            container.innerHTML = `<p style="text-align: center; color: var(--grey-text); padding: 30px;">No open positions found matching the current filters.</p>`;
        } else {
            let jobsHTML = '';
            filteredJobs.forEach(job => {
                jobsHTML += createJobHTML(job);
            });
            container.innerHTML = jobsHTML;
        }
    }

    // Initialize job list
    updateJobList();
    
    // Setup Department Filtering
    if (departmentFilters) {
        departmentFilters.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn')) {
                // Reset active class
                departmentFilters.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');

                currentDepartmentFilter = e.target.getAttribute('data-filter') || 'All';
                updateJobList();
            }
        });
    }

    // Setup Job Type Filtering
    if (typeFilters) {
        typeFilters.addEventListener('click', (e) => {
            if (e.target.classList.contains('tag')) {
                // Check if already active, toggle it
                const isCurrentlyActive = e.target.classList.contains('active');
                
                typeFilters.querySelectorAll('.tag').forEach(tag => tag.classList.remove('active'));

                if (!isCurrentlyActive) {
                    e.target.classList.add('active');
                    currentTypeFilter = e.target.getAttribute('data-filter');
                } else {
                    currentTypeFilter = 'All';
                }
                updateJobList();
            }
        });
    }
}

// Function to fetch and render the Markdown content for a single job (Kept the same)
async function renderJobDetails() {
    const contentContainer = document.getElementById('job-content-container');
    const titleMeta = document.getElementById('job-title-meta');
    const heroDesc = document.getElementById('job-description-hero');
    const jobTitleField = document.getElementById('jobTitleField');
    const form = document.getElementById('jobApplyForm');

    if (!contentContainer) return;

    // 1. Get the ID and slug from URL
    const urlParams = new URLSearchParams(window.location.search);
    const jobId = parseInt(urlParams.get('id'));
    const jobSlug = urlParams.get('slug');

    // 2. Find the job data
    const job = jobsData.find(j => j.id === jobId);

    if (!job || !jobSlug) {
        contentContainer.innerHTML = '<h1>Error: Job posting not found.</h1>';
        return;
    }

    // 3. Construct Markdown filename and fetch content
    const filename = `./jobs-details/${jobSlug}.md`;
    let jobContentMD = '';

    try {
        const res = await fetch(filename);
        if (!res.ok) throw new Error('Markdown file not found');
        jobContentMD = await res.text();
    } catch (err) {
        // Fallback: Use job description if markdown fails
        jobContentMD = `# ${job.title} - ${job.company}\n\n### Mô tả Tóm tắt\n${job.description}\n\n*Vui lòng kiểm tra lại cấu trúc file Markdown tại: ${filename}*`;
    }

    // 4. Render Content
    contentContainer.innerHTML = `
        <article class="single-post">
            ${markdownToHTML(jobContentMD)}
        </article>
    `;
    
    // 5. Update titles and hidden form field
    const pageTitle = `${job.title} - ${job.company}`;
    titleMeta.textContent = pageTitle;
    heroDesc.textContent = `${job.department} position in ${job.location}.`;
    jobTitleField.value = pageTitle; // Đặt tên công việc vào trường ẩn của form

    // 6. Setup Form Submission (Simulated)
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const status = document.getElementById('applyFormStatus');
        if (!form.checkValidity()) {
            status.textContent = 'Please fill all required fields.';
            return;
        }
        
        status.textContent = 'Submitting application...';
        
        // GIẢ LẬP GỬI DỮ LIỆU ĐẾN GOOGLE SHEET / BACKEND
        // LƯU Ý: Nếu bạn dùng Apps Script, bạn cần cấu hình lại hàm này để gửi dữ liệu form
        // Bao gồm cả file CV (rất phức tạp với Apps Script, nên dùng Google Form hoặc dịch vụ backend thực)
        
        setTimeout(() => {
            status.textContent = `Application for "${jobTitleField.value}" received successfully! We will contact you soon.`;
            form.reset();
        }, 1200);
    });
}

// --- 6. MOBILE MENU TOGGLE ---
// Function to handle the mobile menu toggle functionality (Kept the same)

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



// --- 7. GLOBAL INITIALIZATION UPDATE (Kept the same) ---
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
    } else if (document.getElementById('careers-posts-container')) { // <--- NEW CAREERS LOGIC
        renderCareersPage();
    } else if (document.getElementById('job-content-container')) { // <--- NEW JOB DETAILS LOGIC
        renderJobDetails();
    }

});