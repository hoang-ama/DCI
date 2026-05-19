// panel_script.js Sample team members - adjust images/titles/bios/linkedin as needed
// --- 1. TEAM DATA ---
const teamMembers = [
    { id: 'NamNT', name: 'Nam Nguyen', title: 'DCI Founding Partner & Chairman', image: './image/NamNT.jpg', bgImage: './image/bg.NamNT.png', linkedin: 'https://www.linkedin.com/in/nam-nguyen-2b48aa77/', facebook: 'https://www.facebook.com/paradon', email: 'namnt@dichung.vn' },
    { id: 'MinhHH', name: 'Minh Hoang', title: 'DCI Founding Partner & CEO', image: './image/MinhHH.png', bgImage: './image/bg.MinhHH.png', linkedin: 'https://www.linkedin.com/in/hoanghongminh/', facebook: 'https://www.facebook.com/Minh.Hoang.H', email: 'minhhh@dcinvest.vn' },
    { id: 'JenVH', name: 'Jen Vu Huong', title: 'DCI Founding Partner & CSE', image: './image/JenVH.webp', bgImage: './image/bg.JenVH.png', linkedin: 'https://www.linkedin.com/in/jenvuhuong/', facebook: 'https://www.facebook.com/JenEmpowerLeaders', email: 'jenvuhuong@gmail.com' },
    { id: 'Taka', name: 'Takahiro Hosokawa', title: 'Parkchung Co-Founder & CEO', image: './image/Takahiro.png', bgImage: './image/bg.Taka.png', linkedin: 'https://www.linkedin.com/in/takahiro-hosokawa-853931176/', facebook: 'https://www.facebook.com/profile.php?id=100004193649646', email: 'taka@dichung.vn' },
    { id: 'LinhNV', name: 'Linh Nguyen', title: 'YouthPlus Founder & CEO', image: './image/LinhNV.jpeg', bgImage: './image/bg.LinhNV.png', linkedin: 'https://www.linkedin.com/in/peterhoangminh/', facebook: 'https://www.facebook.com/nguyenvanlinh.dav/', email: 'linhnv@youth.com.vn' },
    { id: 'GiangNH', name: 'Giang Ngo', title: 'FaFiFun Founder & CEO', image: './image/GiangNH.jpg', bgImage: './image/bg.GiangNH.png', linkedin: 'https://www.linkedin.com/in/ngohuonggiangrichmom/', facebook: 'https://www.facebook.com/giangnh511', email: 'ceo@mdj.vn' },
];

// --- LOGIC HIỂN THỊ TEAM ĐÃ CẬP NHẬT (Chia 2 nhóm) ---
const coreGrid = document.getElementById('coreTeamGrid');
const founderGrid = document.getElementById('founderTeamGrid');

// Hàm tạo thẻ HTML cho từng thành viên (Code cũ dùng lại)
function createMemberCard(member) {
    const card = document.createElement('div');
    card.className = 'team-card';
    card.setAttribute('data-id', member.id);
    card.innerHTML = `
        <img src="${member.image}" alt="${member.name}">
        <div class="card-body">
            <h3>${member.name}</h3>
            <p>${member.title}</p>
        </div>
    `;
    card.addEventListener('click', () => openPanel(member));
    return card;
}

// Chỉ chạy nếu tìm thấy các grid (tức là đang ở trang team.html)
if (coreGrid || founderGrid) {
    teamMembers.forEach(member => {
        const card = createMemberCard(member);
        
        // Logic phân loại: Nếu chức danh có chứa "DCI", đưa vào Core Team
        // Các trường hợp còn lại đưa vào Founder Team
        if (member.title.includes('DCI') && coreGrid) {
            coreGrid.appendChild(card);
        } else if (founderGrid) {
            founderGrid.appendChild(card);
        }
    });
}

// --- PANEL ELEMENTS ---

const overlay = document.getElementById('teamOverlay');
const backdrop = document.getElementById('teamBackdrop');
const panel = document.getElementById('teamPanel');
const panelInner = document.getElementById('panelInner');
const closeBtn = document.getElementById('teamClose');

// --- Markdown-aware team panel loader --------------------------------------------------
// small markdown -> HTML converter (supports headings, lists, links, bold, italic, paragraphs)
function markdownToHTML(md) {
    if (!md) return '';
    // strip CRs, normalize
    md = md.replace(/\r/g, '');
    // basic link, bold, italic inline replacements
    md = md.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    md = md.replace(/\*(.+?)\*/g, '<em>$1</em>');
    md = md.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

    // block-level: headings
    md = md.replace(/^###### (.+)$/gm, '<h6>$1</h6>');
    md = md.replace(/^##### (.+)$/gm, '<h5>$1</h5>');
    md = md.replace(/^#### (.+)$/gm, '<h4>$1</h4>');
    md = md.replace(/^### (.+)$/gm, '<h3>$1</h3>');
    md = md.replace(/^## (.+)$/gm, '<h2>$1</h2>');
    md = md.replace(/^# (.+)$/gm, '<h1>$1</h1>');

    // unordered lists
    md = md.replace(/^\s*[-*] (.+)$/gm, '<li>$1</li>');
    md = md.replace(/(<li>[\s\S]+?<\/li>)/g, function(m) {
        // wrap consecutive list items in <ul>
        return m.replace(/(?:<\/li>\s*<li>)/g, '</li><li>');
    });
    // collapse adjacent <li> into ul blocks
    md = md.replace(/(?:<\/li>\n?)(?=<li>)/g, '');
    md = md.replace(/(?:^|\n)(<li>[\s\S]+?<\/li>)(?:\n|$)/g, function(_, items) {
        return '<ul>' + items + '</ul>\n';
    });

    // blockquotes
    md = md.replace(/^\> (.+)$/gm, '<blockquote>$1</blockquote>');

    // paragraphs (lines separated by blank line)
    const blocks = md.split(/\n{2,}/).map(block => block.trim()).filter(Boolean);
    const html = blocks.map(block => {
        if (/^<\/?(h\d|ul|li|blockquote|pre|img|a|p|strong|em)/i.test(block)) {
            return block;
        }
        // if block already contains list or heading tags, return as-is
        if (/^<h|^<ul|^<blockquote/.test(block)) return block;
        // otherwise wrap in <p>
        return '<p>' + block.replace(/\n/g, '<br>') + '</p>';
    }).join('\n\n');

    return html;
}

// try to fetch markdown profile by member id or slug
async function fetchMarkdownForMember(member) {
    const candidates = [
        `./team-profiles/${member.id}.md`,
        `./team-profiles/${(member.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g,'')}.md`
    ];
    for (const url of candidates) {
        try {
            const res = await fetch(url);
            if (!res.ok) continue;
            const text = await res.text();
            // support optional YAML frontmatter (---)
            if (text.startsWith('---')) {
                const parts = text.split('---');
                // parts[1] = frontmatter, parts[2] = body (may include extra --- but common case)
                const body = parts.slice(2).join('---').trim();
                // simple frontmatter parse (key: value)
                const fmLines = parts[1].split('\n').map(l => l.trim()).filter(Boolean);
                const fm = {};
                fmLines.forEach(line => {
                    const idx = line.indexOf(':');
                    if (idx > -1) {
                        const k = line.slice(0, idx).trim();
                        const v = line.slice(idx+1).trim();
                        fm[k] = v.replace(/^['"]|['"]$/g,'');
                    }
                });
                return { body, fm };
            }
            return { body: text, fm: null };
        } catch (err) {
            // continue to next candidate
        }
    }
    return null;
}

async function openPanel(member) {
    // prefer a horizontal bg image when available
    const topImgSrc = member.bgImage || member.image;
    // try fetch md
    const mdRes = await fetchMarkdownForMember(member);
    let contentHTML = '';
    if (mdRes && mdRes.body) {
        contentHTML = markdownToHTML(mdRes.body);
        // if frontmatter contained alternate title/link, merge
        if (mdRes.fm && mdRes.fm.linkedin) {
            member.linkedin = mdRes.fm.linkedin;
        }
        if (mdRes.fm && mdRes.fm.title) {
            member.title = mdRes.fm.title;
        }
    } else {
        // fallback: simple bio + fields
        contentHTML = `<h3>Overview</h3><p>${member.bio || ''}</p>`;
    }

    // build panel HTML: top image then two-column meta + markdown body (body displayed in right column)
    panelInner.innerHTML = `
        <img class="panel-top-img" src="${topImgSrc}" alt="${member.name}">
        <div class="panel-body">
            <div class="panel-left" aria-hidden="false">
                <h2>${member.name}</h2>
                <div class="panel-title">${member.title || ''}</div>
                <div class="social-links">
                    ${member.linkedin ? `<a href="${member.linkedin}" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i class="fab fa-linkedin"></i></a>` : ''}
                    ${member.facebook ? `<a href="${member.facebook}" target="_blank" rel="noopener noreferrer" title="Facebook"><i class="fab fa-facebook"></i></a>` : ''}
                    ${member.email ? `<a href="mailto:${member.email}" title="Email"><i class="fas fa-envelope"></i></a>` : ''}
                </div>
            </div>
            <div class="panel-right">
                ${contentHTML}
            </div>
        </div>
    `;
    overlay.classList.add('show');
    overlay.setAttribute('aria-hidden','false');
}

function closePanel() {
    if (!overlay) return;
    overlay.classList.remove('show');
    overlay.setAttribute('aria-hidden','true');
}

// Attach listeners only if elements exist (some pages don't include the team overlay)
if (backdrop) backdrop.addEventListener('click', closePanel);
if (closeBtn) closeBtn.addEventListener('click', closePanel);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePanel(); });





// --- 2. COMPANY PANEL LOGIC ---

// --- COMPANY DATA ---
const companiesData = [
    {
        id: 'dichung', name: 'DiChung', logo: './image/logos/DC_trans.png', heroImage: './image/logos/DC_hero.png', vertical: 'Shared Mobility', pillar: 'Sharing & Rental Economy', stage: 'Transition', year: 2013,
        website: 'https://dichung.vn', email: 'contact@dichung.vn',
        description: 'Carpooling & Ridesharing platform. '
    },
    {
        id: 'chungxe', name: 'Chungxe', logo: './image/logos/CX_trans.png', heroImage: './image/logos/CX_hero.png', vertical: 'Shared Mobility', pillar: 'Sharing & Rental Economy', stage: 'Transition', year: 2018,
        website: 'https://chungxe.vn', email: 'contact@chungxe.vn',
        description: 'Vehicle Rental and Sharing platform.'
    },
    {
        id: 'parkchung', name: 'Parkchung', logo: './image/logos/Parkchung_logo.png', heroImage: './image/logos/Parkchung_hero.png', vertical: 'Shared Mobility', pillar: 'Sharing & Rental Economy', stage: 'Proof-of-Concept', year: 2025,
        website: 'https://parkchung.com', email: 'contact@parkchung.com',
        description: 'Online Parking marketplace.'
    },
    {
        id: 'oncar', name: 'onCar', logo: './image/logos/onCar_logo.png', heroImage: './image/logos/onCar_hero.png', vertical: 'Transport', pillar: 'Sharing & Rental Economy', stage: 'Proof-of-Concept', year: 2025,
        website: 'https://oncar.vn', email: 'partner@oncar.vn',
        description: 'Bus charter rental.'
    },
    {
        id: 'vshare', name: 'Vshare', logo: './image/logos/Vshare_logo.png', heroImage: './image/logos/Vshare_hero.png', vertical: 'Transport', pillar: 'Membership & Subscription Economy', stage: 'Seed', year: 2022,
        website: 'https://vshare.asia', email: 'contact@vshare.asia',
        description: 'Residential Carsharing service.'
    },
    {
        id: 'dctransport', name: 'DC Transport', logo: './image/logos/DCTransport_trans.png', heroImage: './image/logos/DCTransport_hero.png', vertical: 'Transport', pillar: 'Sharing & Rental Economy', stage: 'Transition', year: 2019,
        website: 'https://dichungtransport.com', email: 'contact@dichungtransport.com',
        description: 'Mobility Operator'
    },
    {
        id: 'dichungtravel', name: 'DC Travel', logo: './image/logos/DCTravel_trans.png', heroImage: './image/logos/DCTravel_hero.jpg', vertical: 'Travel', pillar: 'Sharing & Rental Economy', stage: 'Seed', year: 2021,
        website: 'https://dichungtravel.com', email: 'info@dichungtravel.com',
        description: 'Personalized Travel services.'
    },
    {
        id: 'nextu', name: 'NextU', logo: './image/logos/NextU_logo.png', heroImage: './image/logos/NextU_hero.png', vertical: 'Travel', pillar: 'Membership & Subscription Economy', stage: 'Proof-of-Concept', year: 2025,
        website: 'https://nextu.vn', email: 'hello@nextliving.com',
        description: 'Co-Living platform.'
    },
    {
        id: 'dcexpress', name: 'DC Express', logo: './image/logos/DCExpress_trans.png', heroImage: './image/logos/DCExpress_hero.png', vertical: 'Logistics', pillar: 'Sharing & Rental Economy', stage: 'Growth', year: 2020,
        website: 'https://dichungexpress.com', email: 'contact@dichungexpress.com',
        description: 'Ultrafast Interprovince Delivery.'
    },
    {
        id: 'dctech', name: 'DC Tech', logo: './image/logos/DCTech_trans.png', heroImage: './image/logos/DCTech_hero.png', vertical: 'Software', pillar: 'Membership & Subscription Economy', stage: 'Growth', year: 2020,
        website: 'https://dctech.vn', email: 'contact@dctech.vn',
        description: 'SaaS platform for Mobility.'
    },
    {
        id: 'carx', name: 'CarX', logo: './image/logos/CarX_logo.png', heroImage: './image/logos/CarX_hero.png', vertical: 'Automotive', pillar: 'Membership & Subscription Economy', stage: 'Proof-of-Concept', year: 2020,
        website: 'https://carx.vn', email: 'contact@carx.vn',
        description: 'Online Auto mall.'
    },
    {
        id: 'totmart', name: 'TotMart', logo: './image/logos/TotMart_logo.png', heroImage: './image/logos/TotMart_hero.png', vertical: 'eCommerce', pillar: 'Membership & Subscription Economy', stage: 'Seed', year: 2020,
        website: 'https://totmart.com.vn', email: 'contact@totmart.com.vn',
        description: 'eCommerce for Green products.'
    },
    {
        id: 'agrix', name: 'AgriX', logo: './image/logos/AgriX_logo.png', heroImage: './image/logos/AgriX_hero.png', vertical: 'Agriculture', pillar: 'Sharing & Rental Economy', stage: 'Proof-of-Concept', year: 2025,
        website: 'https://agrix.vn', email: 'contact@agrix.vn',
        description: 'AgiDrone for smart Agriculture.'
    },
    {
        id: 'youthplus', name: 'Youth+', logo: './image/logos/Youthplus_logo.png', heroImage: './image/logos/Youthplus_hero.png', vertical: 'Community', pillar: 'Membership & Subscription Economy', stage: 'Transition', year: 2018,
        website: 'https://youth.com.vn', email: 'contact@youth.com.vn',
        description: 'Young Community platform.'
    },
    {
        id: 'fafifun', name: 'FaFiFun', logo: './image/logos/FFF_logo.webp', heroImage: './image/logos/FFF_hero.png', vertical: 'Education', pillar: 'Membership & Subscription Economy', stage: 'Growth', year: 2021,
        website: 'https://fafifun.edu.vn', email: 'chamsockhachhang@mdj.vn',
        description: 'Financial Education for Kids.'
    },
];

function getPortfolioOrderValue(company) {
    const parsed = Number(company && company.portfolioOrder);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
}

function sortCompaniesByPortfolioOrder(companies) {
    return [...companies].sort((a, b) => {
        const aOrder = getPortfolioOrderValue(a);
        const bOrder = getPortfolioOrderValue(b);
        if (aOrder !== null && bOrder !== null) return aOrder - bOrder;
        if (aOrder !== null) return -1;
        if (bOrder !== null) return 1;
        return String(a.name || '').localeCompare(String(b.name || ''));
    });
}

async function syncCompaniesDataFromFirestore() {
    if (typeof firebase === 'undefined') {
        return;
    }
    try {
        const firestoreDb = firebase.firestore();
        const snapshot = await firestoreDb.collection('companies').get();
        if (snapshot.empty) {
            return;
        }

        const allFromDb = snapshot.docs.map((doc) => {
            const data = doc.data();
            const detailContent = data.content || data.details || data.markdown || '';
            return {
                id: data.id || doc.id,
                name: data.name || doc.id,
                logo: data.logo || '',
                heroImage: data.heroImage || data.logo || '',
                vertical: data.vertical || data.industry || 'Other',
                pillar: data.pillar || 'Unknown',
                stage: data.stage || data.status || 'Unknown',
                year: data.year || '',
                website: data.website || '',
                email: data.email || '',
                description: data.description || detailContent || '',
                content: detailContent,
                isVisible: data.isVisible !== false,
                showOnHome: data.showOnHome === true,
                portfolioOrder: data.portfolioOrder
            };
        });

        const visibleFromDb = allFromDb.filter(c => c.isVisible !== false);
        const sortedVisibleFromDb = sortCompaniesByPortfolioOrder(visibleFromDb);
        companiesData.splice(0, companiesData.length, ...sortedVisibleFromDb);
    } catch (err) {
        console.warn('Could not sync companies from Firestore:', err);
    }
}

function getPanelCompanyIndustry(company) {
    return company.vertical || company.industry || 'Other';
}

function getPanelCompanyPillar(company) {
    return company.pillar || 'Unknown';
}

function getPanelCompanyStage(company) {
    return company.stage || company.status || 'Unknown';
}

function getPanelCompanyStageLabel(company) {
    const stage = getPanelCompanyStage(company);
    return stage === 'Proof-of-Concept' ? 'Proof-of-Concepts' : stage;
}
// Try to fetch markdown profile by company id or slug
async function fetchCompanyMarkdown(company) {
    const inlineContent = company.content || company.details || company.markdown || '';
    if (inlineContent && String(inlineContent).trim()) {
        return String(inlineContent).trim();
    }
    return null;
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
                    <span class="meta-label">Pillar</span>
                    <span class="meta-value">${getPanelCompanyPillar(company)}</span>
                </div>
                
                <div class="company-meta-item">
                    <span class="meta-label">Industry</span>
                    <span class="meta-value">${getPanelCompanyIndustry(company)}</span>
                </div>

                <div class="company-meta-item">
                    <span class="meta-label">Stage</span>
                    <span class="meta-value">${getPanelCompanyStageLabel(company)}</span>
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
// --- NEW: RENDER PORTFOLIO GRID ON INDEX PAGE WITH FLIP EFFECT ---

function createPortfolioCardHTML(company) {
    // Check if the current page is the index.html and if the portfolio grid exists
    if (!document.getElementById('portfolioGrid')) {
        return `<img src="${company.logo}" alt="${company.name} Logo" class="portfolio-logo">`;
    }

    // Return the full flip card structure for the index page
    return `
        <div class="portfolio-item-wrapper" data-company-id="${company.id}">
            <div class="portfolio-card">
                <div class="card-face card-face-front">
                    <img src="${company.logo}" alt="${company.name} Logo" class="portfolio-logo">
                </div>
                <div class="card-face card-face-back">
                    <h4 class="card-title">${company.name}</h4>
                    <p class="card-vertical">${company.vertical}</p>
                    <p class="card-description">${company.description.substring(0, 70)}...</p>
                    <a href="${company.website}" class="card-link">Details &rarr;</a>
                </div>
            </div>
        </div>
    `;
}

// Function to attach the click listener to all portfolio items for flipping
function addFlipListeners() {
    const wrappers = document.querySelectorAll('.portfolio-item-wrapper');
    wrappers.forEach(wrapper => {
        wrapper.addEventListener('click', (e) => {
            // Check if the click target is the link itself, if so, don't flip, just follow the link
            if (e.target.closest('.card-link')) {
                return;
            }
            wrapper.classList.toggle('flipped');
        });
        
        // Optional: Reset flip when mouse leaves the card (for desktop UX)
        wrapper.addEventListener('mouseleave', () => {
             wrapper.classList.remove('flipped');
        });
    });
}

// Function to dynamically render the Portfolio Grid on index.html
function renderIndexPortfolioGrid() {
    const container = document.getElementById('portfolioGrid');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Homepage only shows featured startups explicitly marked for home.
    const displayCompanies = companiesData
        .filter(c => c.isVisible !== false && c.showOnHome === true)
        .slice(0, 16);
    
    displayCompanies.forEach(company => {
        const cardHTML = createPortfolioCardHTML(company);
        container.innerHTML += cardHTML;
    });

    // Attach flip listeners after all elements are added
    setTimeout(addFlipListeners, 100); 
}

// --- 3. NEW INVESTOR PANEL LOGIC ---

// Function to open the Investor Form Panel
function openInvestorFormPanel() {
    const overlay = document.getElementById('investorOverlay');
    if (overlay) {
        overlay.classList.add('show');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Lock background scroll
    }
}

// Function to close the Investor Form Panel
function closeInvestorFormPanel() {
    const overlay = document.getElementById('investorOverlay');
    if (overlay) {
        overlay.classList.remove('show');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Unlock background scroll
    }
}


// Function to open the Build With Us Panel
    function openBuildPanel() {
        const overlay = document.getElementById('buildOverlay');
        if (overlay) {
            overlay.classList.add('show');
            overlay.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden'; // Lock background scroll
        }
    }

    // Function to close the Build With Us Panel
    function closeBuildPanel() {
        const overlay = document.getElementById('buildOverlay');
        if (overlay) {
            overlay.classList.remove('show');
            overlay.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = ''; // Unlock background scroll
        }
    }

// --- 4. GLOBAL INITIALIZATION UPDATE ---
document.addEventListener('DOMContentLoaded', async () => {
    await syncCompaniesDataFromFirestore();

    // NEW: Check for the index page portfolio grid
    if (document.getElementById('portfolioGrid')) {
        renderIndexPortfolioGrid();
    } 

    // Investor Panel Initialization Logic (NEW)
    const openBtn = document.getElementById('openInvestorFormBtn');
    const closeBtn = document.getElementById('investorClose');
    const backdrop = document.getElementById('investorBackdrop');
    const overlay = document.getElementById('investorOverlay');

    // --- NEW: BUILD WITH US PANEL INITIALIZATION ---
    const buildBtn = document.querySelector('.hero-content .btn.hero-btn');
    const buildCloseBtn = document.getElementById('buildClose');
    const buildBackdrop = document.getElementById('buildBackdrop');
    const buildOverlay = document.getElementById('buildOverlay');

    if (buildBtn) {
        // Thay đổi hành vi mặc định của nút 'Build with us' thành mở panel
        buildBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Ngăn chặn chuyển hướng đến contact.html
            openBuildPanel();
        });
    }
    
    // Gắn sự kiện đóng cho Panel mới
    if (buildCloseBtn) buildCloseBtn.addEventListener('click', closeBuildPanel);
    if (buildBackdrop) buildBackdrop.addEventListener('click', closeBuildPanel);

    // Gán sự kiện đóng panel (phím Escape) cho panel mới
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && buildOverlay && buildOverlay.classList.contains('show')) {
            closeBuildPanel();
        }
    });
    // --- END: BUILD WITH US PANEL INITIALIZATION ---

    if (openBtn) {
        // Gắn sự kiện mở panel
        openBtn.addEventListener('click', openInvestorFormPanel);
    }
    if (closeBtn) {
        // Gắn sự kiện đóng panel (nút X)
        closeBtn.addEventListener('click', closeInvestorFormPanel);
    }
    if (backdrop) {
        // Gắn sự kiện đóng panel (click ngoài)
        backdrop.addEventListener('click', closeInvestorFormPanel);
    }
    
    // Gắn sự kiện đóng panel (phím Escape)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay && overlay.classList.contains('show')) {
            closeInvestorFormPanel();
        }
    });
    
});