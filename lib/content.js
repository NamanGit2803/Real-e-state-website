// Mock property dataset for Jaipur
// Phone/WhatsApp share a single number for the demo.
export const AGENT = {
    websiteName: 'Adarsh Property',
    since: '2008',
    name: "Adarsh",
    role: "Senior Property Advisor",
    phone: "+91 9214999444",       // tel: link
    whatsapp: "919214999444",      // wa.me link (no +)
    email: "hello@gmail.in",
};

export const AMENITIES = [
    "Parking", "Security", "Lift", "Power Backup",
    "Swimming Pool", "Gym", "Garden", "Clubhouse",
];

const img = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

// BHK sizes 
export const BHK_OPTIONS = [
    "1 BHK",
    "2 BHK",
    "3 BHK",
    "4 BHK",
    "5 BHK"
];

// popular location 
export const POPULAR_LOCATIONS = [
    {
        name: "Jagatpura",
        count: 124,
        img: "/jagatpura.jpg",
    },
    {
        name: "Mansarovar",
        count: 98,
        img: "/mansarover.jpg",
    },
    {
        name: "C-Scheme",
        count: 56,
        img: "/c-scheme.jpg",
    },
    {
        name: "Vaishali Nagar",
        count: 87,
        img: "/vaishali.jpg",
    },
];

// properties 
export const PROPERTIES = [
    {
        id: "1",
        slug: "luxury-4bhk-villa-jagatpura-jaipur",
        title: "Luxury 4BHK Villa with Private Pool",
        project: "Royal Greens Estate",
        category: "Residential",
        propertyType: "Villa",
        purpose: "sell",
        price: 32500000,
        location: "Jagatpura, Jaipur",
        bhk: "4 BHK",
        size: 3200,
        sizeUnit: "sq.ft",
        facing: "East",
        roadWidth: "40 ft",
        approvedBy: "JDA",
        floor: null,
        totalFloors: 3,
        furnishing: "Semi Furnished",
        bathrooms: 5,
        balcony: 4,
        parking: 2,
        amenities: ["Parking", "Security", "Swimming Pool", "Garden", "Power Backup", "Gym"],
        images: [
            img("1613490493576-7fde63acd811"),
            img("1600596542815-ffad4c1539a9"),
            img("1600585154340-be6161a56a0c"),
            img("1600566753190-17f0baa2a6c8"),
        ],
        description:
            "An architectural statement on the eastern edge of Jaipur. This 4BHK villa pairs Rajasthani sandstone detailing with crisp modern lines, a 30-foot private pool and a triple-height living core.",
        status: "Available",
        featured: true,
        lat: 26.8206, lng: 75.8479,
    },
    {
        id: "2",
        slug: "3bhk-apartment-mansarovar-jaipur",
        title: "Premium 3BHK Apartment, Sky View",
        project: "Mansarovar Heights",
        category: "Residential",
        propertyType: "Flat",
        purpose: "sell",
        price: 9800000,
        location: "Mansarovar, Jaipur",
        bhk: "3 BHK",
        size: 1640,
        sizeUnit: "sq.ft",
        facing: "North-East",
        floor: 11,
        totalFloors: 14,
        furnishing: "Furnished",
        approvedBy: "RERA",
        bathrooms: 3,
        balcony: 2,
        parking: 1,
        amenities: ["Lift", "Security", "Parking", "Clubhouse", "Gym", "Power Backup"],
        images: [
            img("1522708323590-d24dbb6b0267"),
            img("1560448204-e02f11c3d0e2"),
            img("1505691938895-1758d7feb511"),
        ],
        description:
            "A bright corner residence with floor-to-ceiling windows, modular kitchen and dual balconies overlooking the Aravallis. Walk to schools, hospitals and metro.",
        status: "Available",
        featured: true,
        lat: 26.8505, lng: 75.7628,
    },
    {
        id: "3",
        slug: "residential-plot-tonk-road-jaipur",
        title: "JDA Approved Residential Plot",
        project: "Aravali Greens Phase 2",
        category: "Plot/Land",
        propertyType: "Plot",
        purpose: "sell",
        price: 4200000,
        location: "Tonk Road, Jaipur",
        size: 1800,
        sizeUnit: "sq.ft",
        facing: "West",
        roadWidth: "30 ft",
        approvedBy: "JDA",
        amenities: ["Security", "Power Backup"],
        images: [
            img("1500382017468-9049fed747ef"),
            img("1500382017468-9049fed747ef"),
        ],
        description:
            "Clean-title JDA-approved plot inside a gated community. Internal roads, drainage and street lighting already in place. Ready to register, ready to build.",
        status: "Available",
        featured: true,
        lat: 26.8136, lng: 75.7898,
    },
    {
        id: "4",
        slug: "2bhk-rental-vaishali-nagar-jaipur",
        title: "Bright 2BHK for Rent",
        project: "Vaishali Residency",
        category: "Residential",
        propertyType: "Flat",
        purpose: "rent",
        price: 22000,
        location: "Vaishali Nagar, Jaipur",
        bhk: "2 BHK",
        size: 1150,
        sizeUnit: "sq.ft",
        facing: "East",
        floor: 4,
        totalFloors: 7,
        furnishing: "Semi Furnished",
        approvedBy: "JDA",
        bathrooms: 2,
        balcony: 1,
        parking: 1,
        amenities: ["Lift", "Parking", "Security", "Power Backup"],
        images: [
            img("1502672260266-1c1ef2d93688"),
            img("1493809842364-78817add7ffb"),
        ],
        description:
            "Move-in ready 2BHK with modular kitchen and east balcony. Family-friendly society, 24x7 security, dedicated parking and reliable water supply.",
        status: "Available",
        featured: false,
        lat: 26.9124, lng: 75.7402,
    },
    {
        id: "5",
        slug: "commercial-shop-c-scheme-jaipur",
        title: "Ground Floor Retail Shop",
        project: "C-Scheme Plaza",
        category: "Commercial",
        propertyType: "Shop",
        purpose: "lease",
        price: 85000,
        location: "C-Scheme, Jaipur",
        size: 480,
        sizeUnit: "sq.ft",
        facing: "Main Road",
        roadWidth: "60 ft",
        approvedBy: "Local Authority",
        amenities: ["Parking", "Power Backup", "Security"],
        images: [
            img("1582407947304-fd86f028f716"),
            img("1604328698692-f76ea9498e76"),
        ],
        description:
            "Prime ground-floor retail frontage on the busiest stretch of C-Scheme. High footfall, glass facade, washroom inside, dedicated visitor parking.",
        status: "Available",
        featured: true,
        lat: 26.9077, lng: 75.7951,
    },
    {
        id: "6",
        slug: "3bhk-villa-mahindra-sez-jaipur",
        title: "Designer 3BHK Villa",
        project: "Mahindra World City",
        category: "Residential",
        propertyType: "Villa",
        purpose: "sell",
        price: 18500000,
        location: "Mahindra SEZ, Jaipur",
        bhk: "3 BHK",
        size: 2200,
        sizeUnit: "sq.ft",
        facing: "North",
        roadWidth: "33 ft",
        approvedBy: "RERA",
        totalFloors: 2,
        furnishing: "Unfurnished",
        bathrooms: 4,
        balcony: 3,
        parking: 2,
        amenities: ["Parking", "Security", "Clubhouse", "Garden", "Gym", "Power Backup"],
        images: [
            img("1564013799919-ab600027ffc6"),
            img("1600210492486-724fe5c67fb0"),
        ],
        description:
            "Award-winning township residence with private lawn, designer kitchen and double-height foyer. Resort-style clubhouse and 24x7 medical on call.",
        status: "Available",
        featured: false,
        lat: 26.7390, lng: 75.8350,
    },
    {
        id: "7",
        slug: "office-space-malviya-nagar-jaipur",
        title: "Furnished Office Space",
        project: "Malviya Corporate Tower",
        category: "Commercial",
        propertyType: "Office",
        purpose: "rent",
        price: 145000,
        location: "Malviya Nagar, Jaipur",
        size: 1850,
        sizeUnit: "sq.ft",
        facing: "South",
        floor: 6,
        totalFloors: 9,
        furnishing: "Furnished",
        approvedBy: "JDA",
        amenities: ["Lift", "Parking", "Security", "Power Backup"],
        images: [
            img("1497366216548-37526070297c"),
            img("1497366754035-f200968a6e72"),
        ],
        description:
            "Plug-and-play workspace with 30 workstations, two cabins, boardroom and pantry. Backup power, central AC, secure card access.",
        status: "Available",
        featured: false,
        lat: 26.8535, lng: 75.8133,
    },
    {
        id: "8",
        slug: "farm-land-ajmer-road-jaipur",
        title: "Fertile Farm Land",
        project: "Aravalli Farms",
        category: "Plot/Land",
        propertyType: "Farm Land",
        purpose: "sell",
        price: 6500000,
        location: "Ajmer Road, Jaipur",
        size: 21780,
        sizeUnit: "sq.ft",
        facing: "South",
        roadWidth: "20 ft",
        approvedBy: "Local Authority",
        amenities: ["Power Backup"],
        images: [
            img("1500382017468-9049fed747ef"),
        ],
        description:
            "Half-acre fertile farm land with borewell, perimeter fencing and tar-road access. Ideal for weekend farmhouse or organic farming.",
        status: "Available",
        featured: false,
        lat: 26.8870, lng: 75.6500,
    },
];

export const CATEGORIES = [
    { key: "all", label: "All" },
    { key: "Residential", label: "Residential" },
    { key: "Commercial", label: "Commercial" },
    { key: "Plot/Land", label: "Plots & Land" },
];

export const TYPE_OPTIONS = ["Villa", "Flat", "Plot", "Shop", "Office", "Farm Land"];
export const PURPOSE_OPTIONS = [
    { key: "all", label: "All" },
    { key: "sell", label: "Buy" },
    { key: "rent", label: "Rent" },
    { key: "lease", label: "Lease" },
];

export function formatPrice(p, purpose) {
    if (purpose === "rent" || purpose === "lease") {
        return `₹${p.toLocaleString("en-IN")}/mo`;
    }
    if (p >= 10000000) return `₹${(p / 10000000).toFixed(2)} Cr`;
    if (p >= 100000) return `₹${(p / 100000).toFixed(2)} Lac`;
    return `₹${p.toLocaleString("en-IN")}`;
}

export function getProperty(slug) {
    return PROPERTIES.find((p) => p.slug === slug);
}

export function buildWhatsAppLink(property) {
    const text =
        `Hi, I'm interested in *${property.title}* (${property.project}) ` +
        `at ${property.location}. Price: ${formatPrice(property.price, property.purpose)}. ` +
        `Please share more details.`;
    return `https://wa.me/${AGENT.whatsapp}?text=${encodeURIComponent(text)}`;
}
