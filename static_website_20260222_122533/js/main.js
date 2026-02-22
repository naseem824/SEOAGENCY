// Main JavaScript for SEOBlogy
// Generated: 2026-02-22 12:26:00

// Business Configuration
const siteConfig = {
    name: "SEOBlogy",
    phone: "+923249615069",
    whatsapp: "923249615069",
    email: "info@seoblogy.com",
    city: "Sialkot",
    country: "Pakistan",
    industry: "Digital Marketing Technology",
    logo: "https://res.cloudinary.com/dyor4wsy0/image/upload/v1771748748/static_website/logos/logo_seoblogy.png"
};

// Social Media Links
const socialLinks = {
    facebook: "https://web.facebook.com/Naseem824",
    twitter: "https://twitter.com/seoblogy",
    instagram: "https://www.instagram.com/engrnaseem824/",
    linkedin: "https://www.linkedin.com/in/engr-naseem-aslam-023ba6a1/",
    youtube: "#",
    pinterest: "#"
};

// Make config globally available
window.siteConfig = siteConfig;
window.socialLinks = socialLinks;

// Lead Form Handler
window.handleLead = function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name')?.value || '';
    const location = document.getElementById('loc')?.value || '';
    const service = document.getElementById('svc')?.value || '';
    const email = document.getElementById('email')?.value || '';
    
    if (window.v360Config?.sheetUrl?.length > 10) {
        const data = new FormData();
        data.append('Source', window.v360Config.source);
        data.append('Name', name);
        data.append('Location', location);
        data.append('Service', service);
        data.append('Email', email);
        data.append('Date', new Date().toLocaleString());
        
        fetch(window.v360Config.sheetUrl, { method: 'POST', body: data, mode: 'no-cors' })
            .then(() => console.log('Lead saved'))
            .catch(err => console.error('Error:', err));
    }
    
    const waUrl = `https://wa.me/${window.v360Config?.whatsapp || siteConfig.whatsapp}?text=${encodeURIComponent(
        `New Lead from Website:\nName: ${name}\nLocation: ${location}\nService: ${service}\nEmail: ${email}\nDate: ${new Date().toLocaleString()}`
    )}`;
    window.open(waUrl, '_blank');
    
    alert(`Thank you, ${name}! We will contact you shortly.`);
    return false;
};

// FAQ Toggle
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                if(icon) icon.className = 'fas fa-plus';
            } else {
                document.querySelectorAll('.faq-answer').forEach(ans => {
                    ans.style.display = 'none';
                    const otherIcon = ans.previousElementSibling.querySelector('i');
                    if(otherIcon) otherIcon.className = 'fas fa-plus';
                });
                
                answer.style.display = 'block';
                if(icon) icon.className = 'fas fa-minus';
            }
        });
    });
    
    // Add smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Dynamic Year in Footer
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('current-year');
    if(yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// --- NEW LOCATIONS LOGIC ---
document.addEventListener("DOMContentLoaded", function() {
    // Check if locationData is defined (loaded from locations.js)
    if (typeof locationData !== 'undefined' && Array.isArray(locationData)) {
        renderLocations(locationData);
    }
});


    // 3. Footer Render
    const footerList = document.querySelector(".footer-locations-list");
    if (footerList) {
        let html = '';
        locations.forEach(loc => {
            html += `<li><a href="${loc.url}"><i class="fas fa-map-marker-alt"></i> ${loc.name}</a></li>`;
        });
        footerList.innerHTML = html;
    }
}
