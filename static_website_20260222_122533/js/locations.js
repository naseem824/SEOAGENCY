// Global Multi-Hub Navigation for SEOBlogy
const locationData = [
    // --- HQ & National ---
    { name: "🏢 Sialkot (Global HQ)", url: "/" },
    { name: "🇵🇰 Pakistan Hub (National)", url: "/pakistan-seo/" },

    // --- Middle East ---
    { name: "🇦🇪 Dubai Hub (Middle East)", url: "/dubai-seo/" },
    { name: "🇸🇦 Riyadh Hub (KSA Growth)", url: "/riyadh-seo/" },
    { name: "🇶🇦 Qatar Hub (Premium Gulf)", url: "/qatar-seo/" },

    // --- UK & Europe ---
    { name: "🇬🇧 London Hub (UK Capital)", url: "/london-seo/" },
    { name: "🇬🇧 Manchester Hub (UK North)", url: "/manchester-seo/" },

    // --- North America ---
    { name: "🇺🇸 New York Hub (USA East)", url: "/nyc-seo/" },
    { name: "🇺🇸 Austin Hub (USA Tech)", url: "/usa-seo/" },
    { name: "🇨🇦 Toronto Hub (Canada)", url: "/toronto-seo/" },

    // --- Asia Pacific ---
    { name: "🇦🇺 Sydney Hub (Australia)", url: "/sydney-seo/" }
];

if (typeof renderLocations === 'function') {
    renderLocations(locationData);
}
