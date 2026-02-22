// Global Multi-Hub Navigation for SEOBlogy
const locationData = [
    { name: "🏢 Sialkot (Global HQ)", url: "/" },
    { name: "🇦🇪 Dubai Hub (Middle East)", url: "/dubai-seo/" },
    { name: "🇸🇦 Riyadh Hub (KSA Growth)", url: "/gulf-marketing/" },
    { name: "🇬🇧 London Hub (UK & Europe)", url: "/london-seo/" },
    { name: "🇺🇸 Austin Hub (USA Tech)", url: "/usa-seo/" }
];

if (typeof renderLocations === 'function') {
    renderLocations(locationData);
}
