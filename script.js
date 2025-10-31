// script.js

// --- 1. POST DATA ---
// Note: Dates are in YYYY-MM-DD format for accurate sorting.
const postsData = [
    {
        id: 10, 
        title: "5 Keys to Success for Tech Startups",
        date: "2025-10-25", 
        content: "Discover the breakthrough strategies to take your startup to the next level...",
        detail: "This is the detailed content for Post 9, covering five essential strategies for tech startups to achieve long-term success and rapid growth."
    },
    {
        id: 9, 
        title: "Investing in AI: Opportunity or Challenge?",
        date: "2025-10-20", 
        content: "An in-depth analysis of the potential and risks of investing in AI...",
        detail: "This is the detailed content for Post 8. It provides a deep dive into the investment landscape of Artificial Intelligence, highlighting both the significant opportunities and the ethical/financial challenges."
    },
    {
        id: 8, 
        title: "Sustainable Growth: A New Direction for Startups",
        date: "2025-10-15", 
        content: "How startups can integrate sustainability into their business model...",
        detail: "This is the detailed content for Post 7. It explores modern strategies for startups to integrate sustainability, which benefits both the environment and their bottom line."
    },
    {
        id: 7, 
        title: "The Rise of No-Code Platforms",
        date: "2025-10-10", 
        content: "Empowering non-developers to build powerful applications quickly.",
        detail: "This is the detailed content for Post 6, focusing on how 'No-Code' tools are revolutionizing software development and democratizing technology."
    },
    {
        id: 6, 
        title: "Deep Dive into Blockchain Technology",
        date: "2025-09-30", 
        content: "Understanding the decentralized ledger and its impact across industries.",
        detail: "This is the detailed content for Post 5, explaining the fundamentals of Blockchain and its applications beyond cryptocurrency."
    },
    {
        id: 5, 
        title: "Cybersecurity Essentials for Small Businesses",
        date: "2025-09-25", 
        content: "Protecting your data from common digital threats.",
        detail: "This is the detailed content for Post 4, providing critical, actionable cybersecurity tips tailored for small businesses."
    },
    {
        id: 4, 
        title: "Mastering Remote Team Management",
        date: "2025-09-20", 
        content: "Strategies for leading high-performing teams from anywhere.",
        detail: "This is the detailed content for Post 3, offering best practices and tools for successfully managing remote and distributed teams."
    },
    {
        id: 3, 
        title: "The Power of Data Visualization",
        date: "2025-09-15", 
        content: "Turning complex data into actionable insights with compelling visuals.",
        detail: "This is the detailed content for Post 2, illustrating how effective data visualization can unlock hidden insights in large datasets."
    },
    {
        id: 2, 
        title: "Introduction to Cloud Computing",
        date: "2025-09-01", 
        content: "A fundamental guide to Infrastructure as a Service (IaaS) and more.",
        detail: "This is the detailed content for Post 1, serving as a comprehensive introduction to the concepts and services of cloud computing."
    },
    {
        id: 1, 
        title: "Future of Quantum Computing",
        date: "2025-08-01", 
        content: "Exploring the next generation of computing power and its implications...",
        detail: "This is the detailed, longer content for Post 10, focusing on the future of quantum computing and its massive potential."
    }
];

// Sort posts in reverse chronological order (Newest to Oldest)
const sortedPosts = postsData.sort((a, b) => new Date(b.date) - new Date(a.date));


// --- 2. COMMON FUNCTIONS ---

// Function to create the HTML structure for a single post card
function createPostHTML(post) {
    // Note: I'm including a placeholder image URL here. 
    // You might want to add an 'imageUrl' field to your postsData array later.
    const placeholderImage = `https://www.michaeltaus.com/wp-content/uploads/2025/02/startup-risk.png?text=Image+for+Post+${post.id}`;
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    // Row-style post: image on the left, summary on the right with date underneath
    return `
        <article class="post-row">
            <div class="post-image" style="background-image: url('${placeholderImage}')" aria-hidden="true"></div>
            <div class="post-summary">
                <h3><a href="blog-details.html?id=${post.id}">${post.title}</a></h3>
                <p class="excerpt">${post.content}</p>
                <p class="post-meta">by Author • ${formattedDate} • 3 mins read</p>
            </div>
        </article>
    `;
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
function renderDetailPost() {
    const container = document.getElementById('single-post-container');
    if (!container) return; 

    // 1. Get the ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));

    // 2. Find the corresponding post
    const post = sortedPosts.find(p => p.id === postId);

    if (post) {
        const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // 3. Display the detailed content
        container.innerHTML = `
            <article class="single-post">
                <h1>${post.title}</h1>
                <p class="post-meta">Published on: ${formattedDate}</p>
                <hr>
                <p>${post.detail}</p> 
            </article>
        `;
        // Update the document title dynamically
        document.getElementById('post-title-meta').textContent = post.title;
    } else {
        container.innerHTML = '<h1>Error: Article not found.</h1>';
    }
}


// --- 4. INITIALIZATION ---

// Determine which function to run based on the current page's structure
if (document.getElementById('single-post-container')) {
    // If element for detail page exists, run detail renderer
    renderDetailPost();
} else if (document.getElementById('blog-posts-container')) {
    // If element for blog list page exists, run blog renderer
    renderBlogPage();
} else if (document.getElementById('home-posts-container')) {
    // If element for home page exists, run home renderer
    renderHomePosts();
}