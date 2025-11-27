// panel_script.js Sample team members - adjust images/titles/bios/linkedin as needed
// --- TEAM DATA ---
const teamMembers = [
    { id: 'founder1', name: 'Nam Nguyen', title: 'Founding Partner & Chairman', image: './image/NamNT.jpg', bgImage: './image/bg.NamNT.png', linkedin: 'https://www.linkedin.com/in/nam-nguyen-2b48aa77/', facebook: 'https://www.facebook.com/paradon', email: 'namnt@dichung.vn' },
    { id: 'founder2', name: 'Minh Hoang', title: 'Founding Partner & CEO', image: './image/MinhHH.png', bgImage: './image/bg.MinhHH.png', linkedin: 'https://www.linkedin.com/in/hoanghongminh/', facebook: 'https://www.facebook.com/Minh.Hoang.H', email: 'minhhh@dcinvest.vn' },
    { id: 'founder3', name: 'Jen Vu Huong', title: 'Founding Partner & CSO', image: './image/JenVH.webp', bgImage: './image/bg.JenVH.png', linkedin: 'https://www.linkedin.com/in/jenvuhuong/', facebook: 'https://www.facebook.com/JenEmpowerLeaders', email: 'jenvuhuong@gmail.com' },
];

const grid = document.getElementById('teamGrid');
// Only populate the team grid on pages that include #teamGrid
if (grid) {
    teamMembers.forEach(member => {
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
        grid.appendChild(card);
    });
}

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


// --- COMPANY DATA ---
const companiesData = [
    {
        id: 'dichung', name: 'DiChung', logo: './image/logos/DC_trans.png', heroImage: './image/logos/DC_hero.png', vertical: 'Shared Mobility', stage: 'Transition', year: 2013,
        website: 'https://dichung.vn', email: 'contact@dichung.vn',
        description: 'DiChung is the leading ride-sharing platform. '
    },
    {
        id: 'chungxe', name: 'Chungxe', logo: './image/logos/CX_trans.png', heroImage: './image/logos/CX_hero.png', vertical: 'Shared Mobility', stage: 'Transition', year: 2018,
        website: 'https://chungxe.vn', email: 'contact@chungxe.vn',
        description: 'Chungxe is the online vehicle rental and sharing platform.'
    },
    {
        id: 'parkchung', name: 'ParkChung', logo: './image/logos/Parkchung_logo.png', heroImage: './image/logos/Parkchung_hero.png', vertical: 'Shared Mobility', stage: 'Proof-of-Concept', year: 2025,
        website: 'https://parkchung.vn', email: 'contact@parkchung.vn',
        description: 'Parkchung is an online, cashless, pre-booked parking marketplace.'
    },
    {
        id: 'totmart', name: 'TotMart', logo: './image/logos/TotMart_logo.png', heroImage: './image/logos/TotMart_hero.png', vertical: 'eCommerce', stage: 'Seed', year: 2020,
        website: 'https://totmart.com.vn/', email: 'contact@totmart.com.vn',
        description: 'TotMart is the leading online marketplace for sustainability products in Vietnam.'
    },
    {
        id: 'oncar', name: 'OnCar', logo: './image/logos/onCar_logo.png', heroImage: './image/logos/onCar_hero.png', vertical: 'Transport Tech', stage: 'Proof-of-Concept', year: 2025,
        website: 'https://oncar.vn', email: 'partner@oncar.vn',
        description: 'Oncar is the car charter transport tech company specializing in full-trip car rental in Vietnam.'
    },
    {
        id: 'vshare', name: 'Vshare', logo: './image/logos/Vshare_logo.png', heroImage: './image/logos/Vshare_hero.png', vertical: 'Transport Tech', stage: 'Seed', year: 2022,
        website: 'https://vshare.asia', email: 'contact@vshare.asia',
        description: 'Vshare a residential car-sharing service.'
    },
    {
        id: 'carx', name: 'CarX', logo: './image/logos/CarX_logo.png', heroImage: './image/logos/CarX_hero.png', vertical: 'Automotive Tech', stage: 'Proof-of-Concept', year: 2020,
        website: 'https://carx.vn', email: 'contact@carx.vn',
        description: 'CarX offers an innovative online auto-retail experience, simplifying the process of buying and selling used cars with transparency and trust.'
    },
    {
        id: 'agrix', name: 'AgriX', logo: './image/logos/AgriX_logo.png', heroImage: './image/logos/AgriX_hero.png', vertical: 'Agri Tech', stage: 'Proof-of-Concept', year: 2025,
        website: 'https://agrix.vn', email: 'contact@agrix.vn',
        description: 'AgriX is a smart agriculture platform leveraging technology to optimize crop yields, improve farming efficiency, and promote sustainable practices'
    },
    {
        id: 'dcexpress', name: 'DC Express', logo: './image/logos/DCExpress_trans.png', heroImage: './image/logos/DCExpress_hero.png', vertical: 'Logistics', stage: 'Growth', year: 2020,
        website: 'https://dichungexpress.com', email: 'contact@dichungexpress.com',
        description: 'Interprovince delivery (ultrafast/same day/ next day).'
    },
    {
        id: 'dctransport', name: 'DC Transport', logo: './image/logos/DCTransport_trans.png', heroImage: './image/logos/DCTransport_hero.png', vertical: 'Transport Tech', stage: 'Transition', year: 2019,
        website: 'https://dichungtransport.com', email: 'contact@dichungtransport.com',
        description: 'DiChung Transport focuses on exploiting wasted means of transportation including transporting people and transporting goods.'
    },
    {
        id: 'dctech', name: 'DC Tech', logo: './image/logos/DCTech_trans.png', heroImage: './image/logos/DCTech_hero.png', vertical: 'SaaS', stage: 'Growth', year: 2020,
        website: 'https://dctech.vn', email: 'contact@dctech.vn',
        description: 'DC Tech is a SaaS platform providing advanced technological solutions for mobility and logistics operations, enhancing efficiency and scalability.'
    },
    {
        id: 'dichungtravel', name: 'DiChung Travel', logo: './image/logos/DCTravel_trans.png', heroImage: './image/logos/DCTravel_hero.jpg', vertical: 'Travel Tech', stage: 'Seed', year: 2021,
        website: 'https://dichungtravel.com', email: 'info@dichungtravel.com',
        description: 'DiChung Travel offers personalized and group travel services, focusing on sustainable tourism and unique cultural experiences.'
    },
    {
        id: 'nextu', name: 'NextU', logo: './image/logos/NextU_logo.png', heroImage: './image/logos/NextU_hero.png', vertical: 'Sustainable Living', stage: 'Proof-of-Concept', year: 2025,
        website: 'https://nextu.vn', email: 'hello@nextliving.com',
        description: 'NextU is the co-living platform designed for young professionals seeking community, convenience, and sustainability in urban living.'
    },
    {
        id: 'youthplus', name: 'Youth+', logo: './image/logos/Youthplus_logo.png', heroImage: './image/logos/Youthplus_hero.png', vertical: 'Community', stage: 'Seed', year: 2018,
        website: 'https://youth.com.vn', email: 'contact@youth.com.vn',
        description: 'Youth+ is a community-driven initiative empowering young individuals through educational programs, mentorship, and social impact projects.'
    },
    {
        id: 'fafifun', name: 'FaFiFun', logo: './image/logos/FFF_logo.webp', heroImage: './image/logos/FFF_hero.png', vertical: 'Edu Tech', stage: 'Growth', year: 2021,
        website: 'https://fafifun.edu.vn', email: 'chamsockhachhang@mdj.vn',
        description: 'FaFiFun is a financial training program for Vietnamese Kids.'
    },
];


// --- COMPANY PANEL LOGIC ---

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
