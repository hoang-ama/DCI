// script.js

// ==========================================
// 1. CẤU HÌNH FIREBASE 
// ==========================================
   const firebaseConfig = {
        apiKey: "AIzaSyAeaWwx00U2fLJDCneUWB6OnIe-IotGX8Q",
        authDomain: "dci-website-181225.firebaseapp.com",
        projectId: "dci-website-181225",
        storageBucket: "dci-website-181225.firebasestorage.app",
        messagingSenderId: "925113398750",
        appId: "1:925113398750:web:c6ab114f37db529a0ed94f",
        measurementId: "G-6EXZF52E4T"
    };

// Khởi tạo Firebase nếu chưa có
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
// Khởi tạo Firestore database
const db = (typeof firebase !== 'undefined') ? firebase.firestore() : null;


// ==========================================
// 2. DỮ LIỆU TĨNH (STATIC DATA - DỮ LIỆU CŨ)
// ==========================================
// Giữ nguyên mảng postsData cũ của bạn để không bị mất bài cũ


// --- 1.1 POST DATA ---
// NOTE: Added 'category' (for buttons), 'tags' (array for tags), and 'featured' (boolean for homepage display) fields.
const postsData = [
    {
        id: "14",
        title: "How Startup Studio build successful startups?",
        date: "2025-12-15",
        imageUrl: "./image/DCI_SSfunnel.png",
        content: "How Startup Studios systematically create and scale successful startups...",
        category: "Studio", 
        tags: ["model"],
        featured: true,
    },
    {
        id: "13",
        title: "What is the Startup Studio?",
        date: "2025-12-08",
        imageUrl: "./image/What-is-Startup-Studio.png",
        content: "Understanding the startup studio model, its key characteristics, and how it differs ...",
        category: "Studio", 
        tags: ["model"],
        featured: true,
    },
     {
        id: "12",
        title: "Startup Studio vs. Other models",
        date: "2025-12-08",
        imageUrl: "./image/Startup-Studio-vs-Incubators-Accelerators-VCs.png",
        content: "What is make a Startup Studio different from Incubator, Accelerator and VC...",
        category: "Studio",
        tags: ["model"],
        featured: true,
    },
    {
        id: "11",
        title: "The Evolution of Startup Studios",
        date: "2025-12-08",
        imageUrl: "./image/The-Evolution-of-Startup-Studios.jpg",
        content: "The Startup Studio model has evolved through several waves since its inception in the 1990s...",
        category: "Studio", 
        tags: ["model"],
        featured: false,
     },
    {
        id: "10",
        title: "5 Keys to Success for Tech Startups",
        date: "2025-10-25",
        imageUrl: "./image/The-Startups-Keys-to-Success.png",
        content: "Discover the breakthrough strategies to take your startup to the next level...",
        category: "Startup",
        tags: ["model", "management"],
        featured: false,
    },
    {
        id: "9",
        title: "Investing in AI: Opportunity or Challenge?",
        date: "2025-10-20",
        imageUrl: "https://thecriticalscript.com/public/uploads/blog/6447c929746bc_tmpphpwtkyrf.jpg",
        content: "An in-depth analysis of the potential and risks of investing in AI...",
        category: "Investor", 
        tags: ["ai"],
        featured: false,
      },
    {
        id: "8",
        title: "Sustainable Growth: A New Direction for Startups",
        date: "2025-10-15",
        imageUrl: "https://www.toolagen.com/wp-content/uploads/2024/05/Strategies-to-Build-a-Sustainable-Startup-1024x559.png",
        content: "How startups can integrate sustainability into their business model...",
        category: "Startup",
        tags: ["model", "management"],
        featured: false,
    },
    {
        id: "7",
        title: "The Rise of No-Code Platforms",
        date: "2025-10-10",
        imageUrl: "https://media.licdn.com/dms/image/v2/D5612AQHYWh46tdk16g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1714564591065?e=2147483647&v=beta&t=5ohMG7jQuBHwbTLnE77M7mXlIzr5nAxWFLeeKpIVoz8",
        content: "Empowering non-developers to build powerful applications quickly.",
        category: "Startup", 
        tags: ["product"],
        featured: false,
    },
    {
        id: "6",
        title: "Deep Dive into Blockchain Technology",
        date: "2025-09-30",
        imageUrl: "https://media.licdn.com/dms/image/v2/D4D12AQHhWfQkzG9xiA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1679411636821?e=2147483647&v=beta&t=MFCaCi-sXWPrfmlEQ1m9ZmAxXJRa44D9BLTi-EENngs",
        content: "Understanding the decentralized ledger and its impact across industries.",
        category: "Startup", 
        tags: ["blockchain"],
        featured: false,
    },
    {
        id: "5",
        title: "Cybersecurity Essentials for Small Businesses",
        date: "2025-09-25",
        imageUrl: "https://www.clearnetwork.com/wp-content/uploads/2018/05/cybersecurity-for-small-business.jpg",
        content: "Protecting your data from common digital threats.",
        category: "Founder", 
        tags: ["cybersecurity"],
        featured: false,
    },
    {
        id: "4",
        title: "Mastering Remote Team Management",
        date: "2025-09-20",
        imageUrl: "https://www.proofhub.com/articles/wp-content/uploads/2023/11/A-Manager-Guide-to-Manage-Remote-Team.jpg",
        content: "Strategies for leading high-performing teams from anywhere.",
        category: "Founder", 
        tags: ["management"],
        featured: false,
    },
    {
        id: "3",
        title: "The Power of Data Visualization",
        date: "2025-09-15",
        imageUrl: "https://assets.justinmind.com/wp-content/uploads/2024/06/data-visualization-header-768x512.png",
        content: "Turning complex data into actionable insights with compelling visuals.",
        category: "Startup", 
        tags: ["data", "product"],
        featured: false,
    },
    {
        id: "2",
        title: "Introduction to Cloud Computing",
        date: "2025-09-01",
        imageUrl: "https://homenest.com.vn/wp-content/uploads/2025/11/Cloud-Computing-Tat-ca-ve-dien-toan-dam-may-va-cac-buoc-trien-khai-scaled.jpg",
        content: "A fundamental guide to Infrastructure as a Service (IaaS) and more.",
        category: "Startup", 
        tags: ["clound"],
        featured: false,
    },
    {
        id: "1",
        title: "Future of Quantum Computing",
        date: "2025-08-01",
        imageUrl: "https://gmo-research.ai/en/application/files/5716/6080/5815/Quantum_Computing_Image.png",
        content: "Exploring the next generation of computing power and its implications...   ",
        category: "Startup", 
        tags: ["quantum"],
        featured: false,
  }
];
// Sort posts in reverse chronological order (Newest to Oldest)
const sortedPosts = postsData.sort((a, b) => new Date(b.date) - new Date(a.date));

// --- 1.2 JOBS DATA ---
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

// Hàm chuyển đổi Markdown sang HTML đơn giản
function markdownToHTML(md) {
   const lines = md.split(/\r?\n/);
   let html = '';
   let inList = false;
   
   // Helper function to process inline formatting (bold, italic, links)
   function processInlineFormatting(text) {
       // Handle markdown links [text](url)
       text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
       
       // Handle plain URLs (https://... or http://...)
       text = text.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>');
       
       // Handle bold **text** (including inline)
       text = text.replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>');
       
       // Handle italic *text* (including inline)
       text = text.replace(/\*([^\*]+)\*/g, '<em>$1</em>');
       
       return text;
   }
   
   for (let raw of lines) {
       const line = raw.trim();
       if (!line) {
           if (inList) { html += '</ul>'; inList = false; }
           continue;
       }
       
       // Headings
       if (line.startsWith('### ')) { 
           html += `<h3>${processInlineFormatting(line.slice(4))}</h3>`; 
           continue; 
       }
       if (line.startsWith('## ')) { 
           html += `<h2>${processInlineFormatting(line.slice(3))}</h2>`; 
           continue; 
       }
       if (line.startsWith('# ')) { 
           html += `<h1>${processInlineFormatting(line.slice(2))}</h1>`; 
           continue; 
       }
       
       // Blockquote
       if (line.startsWith('> ')) { 
           html += `<blockquote>${processInlineFormatting(line.slice(2))}</blockquote>`; 
           continue; 
       }
       
       // Horizontal rule
       if (line.startsWith('---')) { 
           html += `<hr>`; 
           continue; 
       }
       
       // List items
       if (line.startsWith('- ')) {
           if (!inList) { html += '<ul>'; inList = true; }
           html += `<li>${processInlineFormatting(line.slice(2))}</li>`;
           continue;
       }
       
       // Default paragraph - process inline formatting
       html += `<p>${processInlineFormatting(line)}</p>`;
   }
   
   if (inList) html += '</ul>';
   return html;
}


// Hàm lấy nội dung bài viết tĩnh (Markdown file)
async function fetchStaticPostContent(filename) {
    try {
        // Giả sử file md nằm trong thư mục posts/
        const res = await fetch(`./posts/${filename}`);
        if (!res.ok) throw new Error('File not found');
        return await res.text();
    } catch (err) {
        console.warn('Không tải được nội dung bài viết tĩnh:', filename);
        return '';
    }
}

// === LOGIC CHÍNH: LẤY CẢ 2 NGUỒN DỮ LIỆU ===
async function fetchAllPosts() {
    let firebasePosts = [];
    
    // 1. Lấy từ Firebase
    if (db) {
        try {
            const snapshot = await db.collection('posts').get();
            firebasePosts = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                isStatic: false // Đánh dấu là bài từ DB
            }));
        } catch (error) {
            console.error("Lỗi lấy dữ liệu Firebase:", error);
        }
    }

    // 2. Gộp với dữ liệu tĩnh (Static Data)
    const allPosts = [...firebasePosts, ...postsData];

    // 3. Sắp xếp theo ngày giảm dần (Mới nhất lên đầu)
    allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    return allPosts;
}

// Hàm lấy chi tiết 1 bài viết theo ID (Tìm cả 2 nơi)
async function fetchPostById(id) {
    // 1. Tìm trong Static Data trước
    // Chuyển id thành string để so sánh
    const staticPost = postsData.find(p => String(p.id) === String(id));
    
    if (staticPost) {
        // Mark as static so renderDetailPost knows to fetch markdown file
        return { ...staticPost, isStatic: true };
    }

    // 2. Tìm trong Firebase
    if (db) {
        try {
            const doc = await db.collection('posts').doc(id).get();
            if (doc.exists) {
                return { id: doc.id, ...doc.data(), isStatic: false };
            }
        } catch (error) {
            console.error("Lỗi lấy chi tiết bài viết Firebase:", error);
        }
    }
    return null;
}

// End --- 

function isProbablyMarkdown(text) {
    if (!text || typeof text !== 'string') return false;
    // Look for common markdown patterns: headings, lists, blockquotes or multiple line breaks
    const mdPatterns = [/^#\s+/m, /^##\s+/m, /^###\s+/m, /^-\s+/m, /^>\s+/m, /\n\s*\n/];
    return mdPatterns.some(re => re.test(text));
}


// --- 3. PAGE-SPECIFIC RENDERING FUNCTIONS ---



// Renders all posts with pagination on the Blog Page (blog.html)
const POSTS_PER_PAGE = 5; 

// --- NEW: Global filter states for Blog ---
let currentCategoryFilter = 'All';
let currentTagFilter = 'All';
let currentBlogPage = 1;



// ==========================================
// I. RENDER TRANG BLOG
// ==========================================

// --- 4.1 Trang Blog (Danh sách) với Pagination và Filtering ---
async function renderBlogPage() {
    const container = document.getElementById('blog-posts-container');
    const paginationContainer = document.getElementById('pagination-controls');
    
    if (!container) return;

    container.innerHTML = '<div class="loading">Loading posts...</div>';
    
    const allPosts = await fetchAllPosts();

    if (allPosts.length === 0) {
        container.innerHTML = '<p>No posts found.</p>';
        if (paginationContainer) paginationContainer.innerHTML = '';
        return;
    }

    // Apply category and tag filters
    const filteredPosts = allPosts.filter(post => {
        const categoryMatch = currentCategoryFilter === 'All' || post.category === currentCategoryFilter;
        const tagMatch = currentTagFilter === 'All' || (post.tags && post.tags.includes(currentTagFilter));
        return categoryMatch && tagMatch;
    });

    if (filteredPosts.length === 0) {
        container.innerHTML = '<p>No posts found matching your filters.</p>';
        if (paginationContainer) paginationContainer.innerHTML = '';
        return;
    }

    // Calculate pagination based on filtered posts
    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    
    // Ensure currentBlogPage is within valid range
    if (currentBlogPage > totalPages) {
        currentBlogPage = 1;
    }
    
    // Get posts for current page
    const startIdx = (currentBlogPage - 1) * POSTS_PER_PAGE;
    const endIdx = startIdx + POSTS_PER_PAGE;
    const postsToDisplay = filteredPosts.slice(startIdx, endIdx);

    // Render blog posts
    container.innerHTML = ''; 
    postsToDisplay.forEach(post => {
        const thumb = post.image || post.imageUrl || './image/default-post.png';
        // Xử lý tóm tắt: Nếu là static, dùng content sẵn. Nếu firebase, dùng summary hoặc cắt content
        let excerpt = post.summary;
        if (!excerpt && post.content) {
             excerpt = post.content.substring(0, 100) + '...';
        }

        const cardHTML = `
            <article class="blog-card">
                <div class="blog-card-image">
                    <a href="blog-details.html?id=${post.id}">
                        <img src="${thumb}" alt="${post.title}">
                    </a>
                </div>
                <div class="blog-card-content">
                    <div class="blog-meta">
                        <span class="blog-date"><i class="far fa-calendar-alt"></i> ${post.date}</span>
                        ${post.category ? `<span class="blog-category">${post.category}</span>` : ''}
                    </div>
                    <h3 class="blog-title">
                        <a href="blog-details.html?id=${post.id}">${post.title}</a>
                    </h3>
                    <p class="blog-excerpt">${excerpt}</p>
                    <a href="blog-details.html?id=${post.id}" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
                </div>
            </article>
        `;
        container.innerHTML += cardHTML;
    });

    // Render pagination controls
    if (paginationContainer) {
        renderPaginationControls(paginationContainer, totalPages, currentBlogPage);
    }
}

// Helper function to render pagination buttons
function renderPaginationControls(container, totalPages, currentPage) {
    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }

    let paginationHTML = '';

    // Previous button
    if (currentPage > 1) {
        paginationHTML += `<a href="#" onclick="goToBlogPage(${currentPage - 1}); return false;" class="prev-page"><i class="fas fa-chevron-left"></i> Previous</a>`;
    }

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const isActive = i === currentPage ? 'active' : '';
        paginationHTML += `<a href="#" onclick="goToBlogPage(${i}); return false;" class="page-number ${isActive}">${i}</a>`;
    }

    // Next button
    if (currentPage < totalPages) {
        paginationHTML += `<a href="#" onclick="goToBlogPage(${currentPage + 1}); return false;" class="next-page">Next <i class="fas fa-chevron-right"></i></a>`;
    }

    container.innerHTML = paginationHTML;
}

// Function to navigate to a specific blog page
function goToBlogPage(pageNumber) {
    currentBlogPage = pageNumber;
    renderBlogPage();
    // Scroll to top of blog section
    document.getElementById('blog-posts-container')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Function to set category filter and reset to page 1
function filterByCategory(category) {
    currentCategoryFilter = category;
    currentBlogPage = 1; // Reset to first page when filter changes
    renderBlogPage();
    updateCategoryFilterUI();
}

// Function to set tag filter and reset to page 1
function filterByTag(tag) {
    currentTagFilter = tag;
    currentBlogPage = 1; // Reset to first page when filter changes
    renderBlogPage();
    updateTagFilterUI();
}

// Function to update category filter button UI
function updateCategoryFilterUI() {
    const categoryFilters = document.getElementById('category-filters');
    if (categoryFilters) {
        const buttons = categoryFilters.querySelectorAll('button');
        buttons.forEach(btn => {
            const filterValue = btn.getAttribute('data-filter');
            if (filterValue === currentCategoryFilter) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
}

// Function to update tag filter UI
function updateTagFilterUI() {
    const tagFilters = document.getElementById('tag-filters');
    if (tagFilters) {
        const tags = tagFilters.querySelectorAll('a.tag');
        tags.forEach(tag => {
            const filterValue = tag.getAttribute('data-filter');
            if (filterValue === currentTagFilter) {
                tag.classList.add('active');
            } else {
                tag.classList.remove('active');
            }
        });
    }
}

// Function to initialize blog page filters
function initializeBlogFilters() {
    // Setup category filter event listeners
    const categoryFilters = document.getElementById('category-filters');
    if (categoryFilters) {
        const categoryButtons = categoryFilters.querySelectorAll('button');
        categoryButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = btn.getAttribute('data-filter') || 'All';
                filterByCategory(category);
            });
        });
    }

    // Setup tag filter event listeners
    const tagFilters = document.getElementById('tag-filters');
    if (tagFilters) {
        const tagLinks = tagFilters.querySelectorAll('a.tag');
        tagLinks.forEach(tag => {
            tag.addEventListener('click', (e) => {
                e.preventDefault();
                const tagValue = tag.getAttribute('data-filter') || 'All';
                filterByTag(tagValue);
            });
        });
    }
}

// --- 4.2 Trang Chi tiết Bài viết ---
// Helper function to generate markdown filename from post data
function generatePostMarkdownFilename(post) {
    // Format: YYYY-MM-DD-{id}-{slugified-title}.md
    // Example: 2025-12-15-14-how-startup-studio-build-successful-startups.md
    const slug = slugify(post.title);
    return `${post.date}-${post.id}-${slug}.md`;
}

// Helper function to fetch and convert markdown file for a post
async function fetchPostMarkdownContent(post) {
    const filename = generatePostMarkdownFilename(post);
    const filepath = `./posts/${filename}`;
    
    try {
        const res = await fetch(filepath);
        if (!res.ok) throw new Error(`File not found: ${filepath}`);
        const markdown = await res.text();
        const htmlContent = markdownToHTML(markdown);
        return htmlContent;
    } catch (err) {
        console.warn(`Could not load markdown file (${filepath}). Using content from script instead.`, err);
        // Fallback to post.content if markdown file not found
        return markdownToHTML(post.content);
    }
}

// Helper function to update meta tags dynamically
function updateMetaTags(post) {
    // Update page title
    document.title = `${post.title} - DCI Blog`;
    
    // Update or create meta description
    let descriptionMeta = document.querySelector('meta[name="description"]');
    const metaDescription = post.summary || post.content?.substring(0, 160) || 'Read more about DCI startup insights';
    
    if (descriptionMeta) {
        descriptionMeta.setAttribute('content', metaDescription);
    } else {
        descriptionMeta = document.createElement('meta');
        descriptionMeta.name = 'description';
        descriptionMeta.content = metaDescription;
        document.head.appendChild(descriptionMeta);
    }
    
    // Update Open Graph tags for social sharing
    updateOpenGraphTags(post);
}

// Helper function to update Open Graph meta tags (for social media sharing)
function updateOpenGraphTags(post) {
    const ogTags = {
        'og:title': post.title,
        'og:description': post.summary || post.content?.substring(0, 160) || 'Read more about DCI startup insights',
        'og:image': post.imageUrl || post.image || './image/default-post.png',
        'og:url': window.location.href,
        'og:type': 'article'
    };
    
    for (const [property, content] of Object.entries(ogTags)) {
        let ogMeta = document.querySelector(`meta[property="${property}"]`);
        
        if (ogMeta) {
            ogMeta.setAttribute('content', content);
        } else {
            ogMeta = document.createElement('meta');
            ogMeta.setAttribute('property', property);
            ogMeta.setAttribute('content', content);
            document.head.appendChild(ogMeta);
        }
    }
}

async function renderDetailPost() {
    const container = document.getElementById('single-post-container');
    if (!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (!postId) {
        container.innerHTML = '<p>Post not found.</p>';
        return;
    }

    container.innerHTML = '<div class="loading">Loading content...</div>';

    const post = await fetchPostById(postId);

    if (!post) {
        container.innerHTML = '<p>Post not found or deleted.</p>';
        return;
    }

    const thumb = post.image || post.imageUrl || './image/default-post.png';
    
    // Fetch markdown content from posts folder
    // For static posts: try to load from markdown file
    // For Firebase posts: convert markdown content to HTML
    let contentHTML = '';
    
    if (post.isStatic) {
        // For static posts, fetch from markdown file in posts/ folder
        contentHTML = await fetchPostMarkdownContent(post);
    } else {
        // For Firebase posts, convert the content field (assumed to be markdown)
        contentHTML = markdownToHTML(post.content);
    }

    container.innerHTML = `
        <article class="single-post">
            <div class="post-header">
                <h1 class="post-title">${post.title}</h1>
                <div class="post-meta">
                    <span><i class="far fa-calendar-alt"></i> ${post.date}</span>
                    ${post.category ? `<span> | ${post.category}</span>` : ''}
                </div>
            </div>
            <div class="post-featured-image">
                <img src="${thumb}" alt="${post.title}">
            </div>
            <div class="post-content-body">
                ${contentHTML}
            </div>
            <div class="post-navigation">
                <a href="blog.html" class="back-btn"><i class="fas fa-arrow-left"></i> Back to Blog</a>
            </div>
        </article>
    `;
    
    // Update the document title dynamically
    document.getElementById('post-title-meta').textContent = post.title;
    
    // Update meta tags for SEO
    updateMetaTags(post);
}

// --- 4.3 Trang Chủ (Featured Posts - up to 3) ---
async function renderHomePosts() {
    const container = document.getElementById('home-posts-container');
    if (!container) return;

    const posts = await fetchAllPosts(); // Lấy tất cả (đã sort)
    
    // Filter for featured posts and sort by date (newest first)
    const featuredPosts = posts
        .filter(post => post.featured === true)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3); // Lấy tối đa 3 posts

    // If less than 3 featured posts, fill with recent non-featured posts
    let homePosts = [...featuredPosts];
    if (homePosts.length < 3) {
        const nonFeaturedPosts = posts
            .filter(post => post.featured !== true)
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 3 - homePosts.length);
        homePosts = [...homePosts, ...nonFeaturedPosts];
    }

    container.innerHTML = '';
    homePosts.forEach(post => {
        const thumb = post.image || post.imageUrl || './image/default-post.png';
        let excerpt = post.summary;
        if (!excerpt && post.content) excerpt = post.content.substring(0, 80) + '...'; // Cắt ngắn nếu cần

        const cardHTML = `
            <div class="col-md-4">
                <div class="news-item">
                    <div class="news-thumb">
                        <a href="blog-details.html?id=${post.id}">
                            <img src="${thumb}" alt="${post.title}">
                        </a>
                    </div>
                    <div class="news-content">
                        <span class="date">${post.date}</span>
                        <h3><a href="blog-details.html?id=${post.id}">${post.title}</a></h3>
                        <p>${excerpt}</p>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// ==========================================
// II. RENDER TRANG COMPANY
// ==========================================


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

// ==========================================
// III. RENDER TRANG CAREERS
// ==========================================

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
    // Insert a bottom back button (same pattern as blog details)
    const navDiv = document.createElement('div');
    navDiv.className = 'post-navigation';
    navDiv.innerHTML = `<a href="careers.html" class="back-btn" aria-label="Back to Careers"><i class="fas fa-arrow-left"></i>&nbsp; Back to Careers</a>`;
    // Append navigation after the article
    contentContainer.querySelector('.single-post').appendChild(navDiv);
    
    // 5. Update titles and hidden form field
    const pageTitle = `${job.title} - ${job.company}`;
    titleMeta.textContent = pageTitle;
    heroDesc.textContent = `${job.department} position in ${job.location}.`;
    jobTitleField.value = pageTitle; // Đặt tên công việc vào trường ẩn của form

// 6. Setup Form Submission
 form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.btn');
        const status = document.getElementById('applyFormStatus');

        // 1. Kiểm tra nhập liệu
        if (!form.checkValidity()) {
            status.textContent = 'Please fill all required fields.';
            status.style.color = 'red';
            return;
        }

        // 2. Chuẩn bị gửi
        status.textContent = 'Sending application & uploading CV...';
        status.style.color = 'var(--primary-color)';
        submitBtn.disabled = true;
        submitBtn.textContent = 'Processing...';

        // 3. Lấy dữ liệu
        const formDataObj = {
            jobTitle: document.getElementById('jobTitleField').value,
            applicantName: form.querySelector('input[name="applicantName"]').value,
            applicantEmail: form.querySelector('input[name="applicantEmail"]').value,
            applicantPhone: form.querySelector('input[name="applicantPhone"]').value,
            applicantMessage: form.querySelector('textarea[name="applicantMessage"]').value
        };

        const fileInput = form.querySelector('input[name="applicantCV"]');
        const file = fileInput.files[0];

        // Hàm gửi dữ liệu sang Google Script
        const sendData = (dataPayload) => {
            // *** Dán URL Web App của bạn vào đây ***
             const scriptURL = 'https://script.google.com/macros/s/AKfycbz187iS-sxcj1tMO_Y1u29X-ZxCC0RpJTqPBqhOmSdlPjY1uuVtdk2fzvYtl4HNwxHgSA/exec'; // - File chung // 

            fetch(scriptURL, {
                method: 'POST',
                body: JSON.stringify(dataPayload)
            })
            .then(res => res.json())
            .then(response => {
                if (response.result === 'success') {
                    status.textContent = 'Application submitted successfully! We will contact you soon.';
                    status.style.color = 'green';
                    form.reset();
                } else {
                    throw new Error(response.error);
                }
            })
            .catch(error => {
                console.error(error);
                status.textContent = 'Error submitting application. Please try again later.';
                status.style.color = 'red';
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Submit Application';
            });
        };

        // 4. Đọc file (nếu có) và gửi
        if (file) {
            if (file.size > 5 * 1024 * 1024) { // Giới hạn 5MB
                status.textContent = 'File is too large. Max size is 5MB.';
                status.style.color = 'red';
                submitBtn.disabled = false;
                return;
            }

            const reader = new FileReader();
            reader.onload = function(e) {
                // Lấy chuỗi mã hóa file để gửi đi
                formDataObj.fileData = e.target.result.split(',')[1];
                formDataObj.fileName = file.name;
                formDataObj.fileMimeType = file.type;
                sendData(formDataObj); // Gửi
            };
            reader.readAsDataURL(file);
        } else {
            sendData(formDataObj); // Gửi không kèm file
        }
    });

}

// --- 6. MOBILE MENU TOGGLE ---
// Function to handle the mobile menu toggle functionality (Kept the same)

// --- 4.4 Mobile Menu Logic ---
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
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
        initializeBlogFilters(); // Initialize blog filters
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