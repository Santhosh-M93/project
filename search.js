// Aggregate all products for search (from homepage data; expand if needed for other pages)
const allProducts = [
    // Top deals
    ...[
        { name: 'Red Granite Tiles', desc: '1st Class', originalPrice: 1199, discountedPrice: 1079, discount: 10, unit: '1 Box', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/681b8a95-3acd-439a-9b0d-896e7a3ec867.jpg', link: 'redgranitetiles.html' },
        { name: 'Dalmia White Cement', desc: 'Premium', originalPrice: 2799, discountedPrice: 2519, discount: 10, unit: '50 Kg', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/a8e9b63e-1eee-41d0-aa5e-a1b7ddd685d5.jpg', link: 'dalmiawhitecement.html' },
        { name: 'Marble Stone', desc: 'Natural Finish', originalPrice: 3199, discountedPrice: 2879, discount: 10, unit: '1 Ton', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/7da054dc-3103-4658-90b2-3a3a3a306108.jpg', link: 'marblestone.html' },
        { name: 'Indigo Interior (White)', desc: 'Fine Grade', originalPrice: 799, discountedPrice: 719, discount: 10, unit: '5 Litre', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/bc8204d8-e931-4059-bd51-9d62ae3822d5.jpg', link: 'indigowhiteinteriorpaint.html' },
        { name: 'Filter Sand', desc: 'Interior', originalPrice: 1299, discountedPrice: 1169, discount: 10, unit: '1 Tonne', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/93c7d514-e239-4948-b91a-b8907b3cf3b4.jpg', link: 'filtersand.html' },
        { name: 'Galvanized Sheets', desc: 'Marine Grade', originalPrice: 1599, discountedPrice: 1439, discount: 10, unit: '300 x 300 mm', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/ea92d53a-5f71-4749-ac88-bc994a076b09.jpg', link: 'galvanizedsheets.html' },
        { name: 'HDPE Pumbs', desc: 'Lightweight', originalPrice: 899, discountedPrice: 809, discount: 10, unit: '15mm Diameter', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/619546a4-18f9-465d-acd4-a61a7b194776.jpg', link: 'hdpepumps.html' }
    ].map(p => ({ ...p, category: 'Top Deals' })),
    // Cement
    ...[
        { name: 'Ordinary Portland Cement', desc: 'OPC Grade ', discountedPrice: 359, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/ce78525f-1e48-462f-8199-dbbf2fa29479.jpg', link: 'opc.html' },
        { name: 'Portland Pozzolana Cement', desc: 'PPC High Durability', discountedPrice: 350, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/681b8a95-3acd-439a-9b0d-896e7a3ec867.jpg', link: 'ppc.html' },
        { name: 'Rapid Hardening Cement', desc: 'Quick Strength Gain', discountedPrice: 404, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/ce78525f-1e48-462f-8199-dbbf2fa29479.jpg', link: 'rapidhardeningcement.html' },
        { name: 'Quick Setting Cement', desc: 'Instant Set Formula', discountedPrice: 413, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/ce78525f-1e48-462f-8199-dbbf2fa29479.jpg', link: 'quicksettingcement.html' },
        { name: 'High Alumina Cement', desc: 'Reduced Heat', discountedPrice: 386, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/681b8a95-3acd-439a-9b0d-896e7a3ec867.jpg', link: 'highaluminacement.html' },
        { name: 'Sulphate Resisting Cement', desc: 'Chemical Resistant', discountedPrice: 395, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/ce78525f-1e48-462f-8199-dbbf2fa29479.jpg', link: 'sulphateresistingcement.html' },
        { name: 'Low Heat Cement', desc: 'Chemical Resistant', discountedPrice: 395, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/ce78525f-1e48-462f-8199-dbbf2fa29479.jpg', link: 'lowheatcement.html' }
    ].map(p => ({ ...p, category: 'Cement' })),
    
    ...[
                { name: 'Red Bricks', desc: '1st Class', discountedPrice: 879, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/681b8a95-3acd-439a-9b0d-896e7a3ec867.jpg', link: 'redbricks.html' },
                { name: 'Fly Ash Bricks', desc: 'Eco-Friendly', discountedPrice: 809, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/97de7670-931d-4bf8-a7be-2a8741a14e79.jpg', link: 'flyashbricks.html' },
                { name: 'AAC Blocks', desc: 'Traditional', discountedPrice: 989, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/681b8a95-3acd-439a-9b0d-896e7a3ec867.jpg', link: 'aacblocks.html' },
                { name: 'Hollow Blocks', desc: 'Durable', discountedPrice: 769, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/79eabf47-7c4b-4af2-b2bf-0712e9b767a4.jpg', link: 'hollowblocks.html' },
                { name: 'Engg Bricks', desc: 'High Strength', discountedPrice: 849, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/681b8a95-3acd-439a-9b0d-896e7a3ec867.jpg', link: 'engineeringbricks.html' },
                { name: 'Fire Bricks', desc: 'Heat Resistant', discountedPrice: 529, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/681b8a95-3acd-439a-9b0d-896e7a3ec867.jpg', link: 'firebricks.html' },
                { name: 'Lightweight Bricks', desc: 'Lightweight', discountedPrice: 899, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/19727098-12c6-4bee-8e33-43e9b8cfc80e.jpg', link: 'lightweightbricks.html' }
    ].map(p => ({ ...p, category: 'Bricks' })),
    ...[
                { name: 'River Sand', desc: 'Natural', discountedPrice: 629, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/90b825c6-989a-465c-8e40-1b164bc6838e.jpg', link: 'riversand.html' },
                { name: 'M-Sand', desc: 'Manufactured', discountedPrice: 539, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/8b642cbf-2213-43ca-86a8-d2061602cea0.jpg', link: 'msand.html' },
                { name: 'pit Sand', desc: 'Fine Grade', discountedPrice: 584, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/5605f97b-6fae-452e-ab97-e03c58122c11.jpg', link: 'pitsand.html' },
                { name: 'Special Purpose Sand', desc: 'Finishing', discountedPrice: 566, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/90b825c6-989a-465c-8e40-1b164bc6838e.jpg', link: 'specialpurposesand.html' },
                { name: 'Industrial Sand', desc: 'Finishing', discountedPrice: 566, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/90b825c6-989a-465c-8e40-1b164bc6838e.jpg', link: 'industrialsand.html' }
    ].map(p => ({ ...p, category: 'Sand' })),
    ...[
                { name: 'Wooden Doors & Frames', desc: 'Solid Wood', discountedPrice: 2519, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/a8e9b63e-1eee-41d0-aa5e-a1b7ddd685d5.jpg', link: 'woodendoors.html' },
                { name: 'Roofing & Structural Wood', desc: 'Modern Design', discountedPrice: 1799, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/a8e9b63e-1eee-41d0-aa5e-a1b7ddd685d5.jpg', link: 'roofingwood.html' },
                { name: 'Interior Woodcraft Products', desc: 'Marine Grade', discountedPrice: 1439, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/ea92d53a-5f71-4749-ac88-bc994a076b09.jpg', link: 'interiorwood.html' },
                { name: 'Exterior Woodcraft Products', desc: 'Decorative', discountedPrice: 1809, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/706163da-6c5d-4ea9-a156-707fa45bb50a.jpg', link: 'exteriorwood.html' },
                { name: 'Wooden Flooring Products', desc: 'Premium Oak', discountedPrice: 3149, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/f4d47ef6-1430-4621-b304-b0611c09ce95.jpg', link: 'woodenflooring.html' },
                { name: 'Treated & Special Wood', desc: 'Premium Quality', discountedPrice: 3869, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/7da054dc-3103-4658-90b2-3a3a3a306108.jpg', link: 'treatedspecialwood.html' },
                { name: 'Boards & Panels Products', desc: 'Wall Cladding', discountedPrice: 1979, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/7da054dc-3103-4658-90b2-3a3a3a306108.jpg', link: 'boardpanels.html' }
    ].map(p => ({ ...p, category: 'Woodcraft' })),
    ...[
                { name: 'Interior Paint', desc: 'Interior', discountedPrice: 1169, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/93c7d514-e239-4948-b91a-b8907b3cf3b4.jpg', link: 'interiorpaint.html' },
                { name: 'Exterior Paint', desc: 'Exterior', discountedPrice: 1349, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/1fb3c97c-5d7b-4f6a-8ca9-a22956c0f2e7.jpg', link: 'exterior.html' },
                { name: 'Water Paint', desc: 'Glossy Finish', discountedPrice: 1079, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/42500c89-56ce-4a67-9789-557cf78b7272.jpg', link: 'waterpaint.html' },
                { name: 'Oil-Based Paint', desc: 'Base Coat', discountedPrice: 1809, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/9b611bd6-ac28-4344-903c-a4393ba0865b.jpg', link: 'oilpaint.html' },
                { name: 'Primer Paint', desc: 'Decorative', discountedPrice: 1439, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/8720b1a1-9c3a-4e24-b172-191ffb786df1.jpg', link: 'primerpaint.html' },
                { name: 'Special Paint', desc: 'Budget Friendly', discountedPrice: 1719, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/8720b1a1-9c3a-4e24-b172-191ffb786df1.jpg', link: 'specialpurposepaint.html' },
                { name: 'Wood Paint', desc: 'Protective', discountedPrice: 1989, discount: 10, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/42500c89-56ce-4a67-9789-557cf78b7272.jpg', link: 'woodpaint.html' }
    ].map(p => ({ ...p, category: 'Paint' })),

    

    // Add similar for bricks, sand, woodcraft, paint, buildingExcellence (expand as needed)
    // For brevity, include key ones; you can add all from homepage.html
];
// ...existing code...
function renderSearchDropdown(results) {
    let dropdown = document.getElementById('searchDropdown');

    if (!dropdown) {
        dropdown = document.createElement('div');
        dropdown.id = 'searchDropdown';
        dropdown.style.position = 'absolute';
        dropdown.style.background = '#fff';
        dropdown.style.width = '100%';
        dropdown.style.maxHeight = '200px';
        dropdown.style.overflowY = 'auto';
        dropdown.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
        dropdown.style.zIndex = '999';
        dropdown.style.color = '#421F16';  // Changed to black

        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.parentNode.appendChild(dropdown);
    }

    dropdown.innerHTML = '';

    if (results.length === 0) {
        dropdown.innerHTML = `<div style="padding:10px;color:#888;">No results found</div>`;
        return;
    }

    results.forEach(item => {
        const div = document.createElement('div');
        div.style.padding = '10px';
        div.style.cursor = 'pointer';
        div.style.color = 'black';  // Changed to black
        div.textContent = `${item.name} (${item.category})`;

        div.onmouseover = () => div.style.background = '#f3efe6';
        div.onmouseout = () => div.style.background = '';

        div.onclick = () => {
            if (item.link) {
                window.location.href = item.link;
            } else {
                const searchInput = document.getElementById('searchInput');
                if (searchInput) searchInput.value = item.name;
            }
            dropdown.innerHTML = '';
        };

        dropdown.appendChild(div);
    });
}
// ...existing code...

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');

    if (searchInput) {
        searchInput.addEventListener('input', function (e) {
            const query = e.target.value.trim().toLowerCase();

            const dropdown = document.getElementById('searchDropdown');
            if (!query) {
                if (dropdown) dropdown.innerHTML = '';
                return;
            }

            const results = allProducts.filter(p => {
                const name = (p.name || '').toLowerCase();
                const desc = (p.desc || '').toLowerCase();
                return name.includes(query) || desc.includes(query);
            }).map(p => ({
                name: p.name,
                category: p.category,
                link: p.link || null
            })).slice(0, 20);

            renderSearchDropdown(results);
        });
    }
});