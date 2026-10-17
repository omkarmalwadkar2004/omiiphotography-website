// Site copy and gallery data in one place.
// NOTE: testimonials and process wording are PLACEHOLDERS —
// replace them with real client reviews before going live.

import { MdPregnantWoman } from "react-icons/md";
import { FaBaby, FaBirthdayCake, FaMagic, FaDumbbell } from "react-icons/fa";
import { GiLargeDress } from "react-icons/gi";
import { FiCamera, FiHeart, FiClock, FiShield, FiCalendar, FiEdit3, FiSmile, FiSun } from "react-icons/fi";

// Gallery photos: web-sized copies of D:/P/photos — thumb/ for the grid, full/ for the lightbox.
// To add a photo, drop it in both folders and add a photo(...) line to `gallery` below.
const thumbs = require.context("../img/gallery/thumb", false, /\.jpg$/);
const fulls = require.context("../img/gallery/full", false, /\.jpg$/);
const photo = (file, title, category, w, h) => ({
  src: thumbs(`./${file}`),
  full: fulls(`./${file}`),
  title,
  category,
  w,
  h,
});

// Stock SAMPLES (CC0, StockSnap) filling categories that have no photos of our own yet.
// They are labelled "Sample" with a photographer credit on the site; delete a line once you have your own shots.
const sampleThumbs = require.context("../img/samples/thumb", false, /\.jpg$/);
const sampleFulls = require.context("../img/samples/full", false, /\.jpg$/);
const sample = (file, title, category, w, h, credit, creditUrl) => ({
  src: sampleThumbs(`./${file}`),
  full: sampleFulls(`./${file}`),
  title,
  category,
  w,
  h,
  sample: true,
  credit: credit || "StockSnap",
  creditUrl,
});

export const owner = { name: "Omkar Malwadkar", role: "Founder & Photographer" };

// Browser-tab title and search-result description for each page ("*" = not found)
export const pageMeta = {
  "/": {
    title: "Omii's Photography | Photographer & Film Maker in Pune",
    description:
      "Omii's Photography by Omkar Malwadkar — nature, street, night, portrait, family and baby photography in Pune, Maharashtra. Book a shoot on WhatsApp.",
  },
  "/about": {
    title: "About | Omii's Photography",
    description: "Meet Omkar Malwadkar, founder and photographer at Omii's Photography in Pune — how a shoot works and why clients choose us.",
  },
  "/portfolio": {
    title: "Portfolio | Omii's Photography",
    description: "Browse the Omii's Photography portfolio — nature, landscapes, street, night, animals, still life, baby, family, fashion and fitness photography.",
  },
  "/contact": {
    title: "Contact | Omii's Photography",
    description: "Book a photoshoot with Omii's Photography in Pune. Chat on WhatsApp at +91 82753 26005 or send an enquiry.",
  },
  "/feedback": {
    title: "Feedback | Omii's Photography",
    description: "Had a session with Omii's Photography? Share your feedback and rating — it helps other families choose with confidence.",
  },
  "*": {
    title: "Page not found | Omii's Photography",
    description: "This page doesn't exist. Head back to Omii's Photography to see the portfolio or book a shoot.",
  },
};

// Every social icon on the site (header, contact, feedback, footer) reads from here.
export const contactLinks = {
  instagram: "https://www.instagram.com/osmlens_1504",
  linkedin: "https://www.linkedin.com/in/omkar-malwadkar-462258253",
  facebook: "https://www.facebook.com/omkar.malwadkar.94",
  x: "https://x.com/OmkarMalwadkar2",
  pinterest: "https://pin.it/1YExSyH12",
  instagramHandle: "@osmlens_1504",
  // WhatsApp number in international format, digits only (91 + 10-digit mobile).
  // The contact & feedback forms and every WhatsApp button send messages here.
  whatsappNumber: "918275326005",
  whatsappDisplay: "+91 82753 26005",
  // shown in the contact details
  email: "omkarmalwatkar@gmail.com",
};

export const faqs = [
  {
    q: "How far in advance should I book?",
    a: "2–3 weeks is ideal for most sessions. For maternity, book around your 28th week; for newborns, get in touch during pregnancy and we'll pencil in a window around your due date.",
  },
  {
    q: "Where do the shoots happen?",
    a: "In the studio in Pune, or on location — your home, a park or any spot that means something to you. Travel outside Pune can be arranged.",
  },
  {
    q: "Do you provide outfits and props?",
    a: "Yes — there's a collection of baby outfits, wraps, props and themed backdrops. For maternity and fashion shoots we'll plan outfits together beforehand.",
  },
  {
    q: "When will I get my photos?",
    a: "You'll get a few sneak-peek images within days, and the full hand-edited gallery shortly after, delivered through a private online link.",
  },
  {
    q: "Is a newborn session safe for my baby?",
    a: "Safety comes first. Posing is slow and gentle, the studio is kept warm, and every pose is done with a parent close by. Breaks for feeding and cuddles are built in.",
  },
];

export const stats = [
  { value: "2.5+", label: "Years behind the lens" },
  { value: "50+", label: "Shoots completed" },
  { value: "30", label: "Happy families" },
  { value: "6", label: "Photography styles" },
];

export const services = [
  {
    icon: MdPregnantWoman,
    title: "Maternity",
    text: "Elegant, glowing portraits that celebrate the journey to parenthood.",
  },
  {
    icon: FaBaby,
    title: "Newborn",
    text: "Gentle, safe and cosy sessions for your little one's first days.",
  },
  {
    icon: FaBirthdayCake,
    title: "Cake Smash",
    text: "Colourful, messy, joyful first-birthday celebrations on camera.",
  },
  {
    icon: FaMagic,
    title: "Theme Based",
    text: "Custom sets and props built around a story you want to tell.",
  },
  {
    icon: FaDumbbell,
    title: "Fitness",
    text: "Bold, high-contrast frames that show off strength and hard work.",
  },
  {
    icon: GiLargeDress,
    title: "Fashion",
    text: "Editorial and lookbook shoots for models, brands and designers.",
  },
];

export const testimonials = [
  {
    quote:
      "He was so patient with our baby — the photos came out better than we imagined. We'll treasure them forever.",
    author: "Newborn session client",
    place: "Pune",
  },
  {
    quote:
      "The cake smash set was beautiful and the whole shoot felt like a party. Fast delivery and lovely edits.",
    author: "Cake smash client",
    place: "Pune",
  },
  {
    quote:
      "Professional, creative and fun to work with. Our family pictures finally look like us at our best.",
    author: "Family shoot client",
    place: "Pimpri-Chinchwad",
  },
];

export const highlights = [
  { icon: FiCamera, title: "Studio & outdoor", text: "Fully equipped studio in Pune, plus on-location shoots." },
  { icon: FiShield, title: "Baby-safe handling", text: "Newborn posing done slowly, safely and always parent-approved." },
  { icon: FiSun, title: "Props & themes", text: "A growing collection of outfits, props and themed backdrops." },
  { icon: FiClock, title: "Quick delivery", text: "A sneak peek within days and the full edited gallery soon after." },
];

export const process = [
  { icon: FiCalendar, title: "Consult", text: "We talk about your idea, the mood you want and pick a date." },
  { icon: FiEdit3, title: "Plan & style", text: "Outfits, props, set and location are planned around your story." },
  { icon: FiSmile, title: "Shoot day", text: "A relaxed, unhurried session — breaks for babies are built in." },
  { icon: FiHeart, title: "Edit & deliver", text: "Hand-edited photos delivered in a private online gallery." },
];

// Original categories stay; the portfolio only shows filter buttons that have photos.
export const categories = [
  "All",
  "Baby", "Cake Smash", "Family", "Fashion", "Fitness", "Portraits",
  "Nature", "Landscapes", "Street", "Night", "Animals", "Still Life",
];

export const gallery = [
  photo("omii-20240925-110548.jpg", "Powder puff", "Nature", 800, 1067),
  photo("omii-20240521-145521.jpg", "Old Fiat in mono", "Street", 800, 1182),
  photo("omii-20240808-085836.jpg", "Night walk", "Night", 800, 1067),
  photo("omii-20240419-001331-0930.jpg", "Sunset over the hills", "Landscapes", 800, 800),
  photo("omii-20240928-112324-1.jpg", "Horses on the hill", "Animals", 800, 803),
  photo("omii-20240908-161833.jpg", "Ganpati Bappa", "Still Life", 800, 686),
  photo("omii-20240501-150624.jpg", "Red hibiscus", "Nature", 800, 1181),
  photo("omii-20240928-112411.jpg", "Palm & yellow van", "Street", 800, 1067),
  photo("omii-20240607-232841-0798.jpg", "Fairy lights", "Night", 800, 1000),
  photo("omii-20240725-124230-0428.jpg", "Monsoon valley", "Landscapes", 800, 1000),
  photo("omii-20240817-114916.jpg", "White duck", "Animals", 800, 600),
  photo("omii-20240811-124550.jpg", "Game night", "Still Life", 800, 1067),
  photo("omii-20240503-141656.jpg", "Pink bougainvillea", "Nature", 800, 1181),
  photo("omii-20240503-035326.jpg", "Classic ride", "Street", 800, 600),
  photo("omii-20240421-045558.jpg", "Window in the dark", "Night", 800, 1067),
  photo("omii-20240530-130338-0507.jpg", "Pink dawn", "Landscapes", 800, 1000),
  photo("omii-20240616-144645.jpg", "Beetle on bark", "Animals", 800, 1182),
  photo("omii-20240830-002241.jpg", "Controllers in mono", "Still Life", 800, 686),
  photo("omii-20240503-142847.jpg", "Crown flowers", "Nature", 800, 1181),
  photo("omii-20240503-182346.jpg", "Branches & blue sky", "Street", 800, 1181),
  photo("omii-20240503-182457.jpg", "Starry sky", "Night", 800, 686),
  photo("omii-20240616-114050-0357.jpg", "Bullock cart", "Landscapes", 800, 1422),
  photo("omii-20240616-144723.jpg", "Climbing beetle", "Animals", 800, 1181),
  photo("omii-20240830-003546.jpg", "Player two", "Still Life", 800, 1181),
  photo("omii-20240503-182249.jpg", "Coleus leaves", "Nature", 800, 1181),
  photo("omii-20240601-183512-0787.jpg", "City from above", "Street", 800, 1422),
  photo("omii-20240503-182509.jpg", "Night sky", "Night", 800, 686),
  photo("omii-20240616-115037.jpg", "Cart in high contrast", "Landscapes", 800, 1055),
  photo("omii-20240817-114829.jpg", "Turkey strut", "Animals", 800, 600),
  photo("omii-20240830-003615.jpg", "Desk notes", "Still Life", 800, 1181),
  photo("omii-20240511-172459.jpg", "Yellow bougainvillea", "Nature", 800, 1181),
  photo("omii-20240601-205316-0106.jpg", "Hoop at sundown", "Street", 800, 1000),
  photo("omii-20240523-140357.jpg", "Moonlit leaves", "Night", 800, 1181),
  photo("omii-20240616-121048-0160.jpg", "Open fields", "Landscapes", 800, 450),
  photo("omii-20240817-114902.jpg", "By the pond", "Animals", 800, 600),
  photo("omii-20240830-003652.jpg", "Pen stand", "Still Life", 800, 1181),
  photo("omii-20240511-172512.jpg", "Peach bloom", "Nature", 800, 1181),
  photo("omii-20240615-131521-0870.jpg", "Palms & power lines", "Street", 800, 1422),
  photo("omii-20240711-195809.jpg", "Evening lights", "Night", 800, 1067),
  photo("omii-20240810-081524.jpg", "Rainy morning", "Landscapes", 800, 633),
  photo("omii-20240905-200003.jpg", "Duck by the lake", "Animals", 800, 1181),
  photo("omii-20240511-172524.jpg", "White bougainvillea", "Nature", 800, 1181),
  photo("omii-20240615-131532-0276.jpg", "Palms in mono", "Street", 800, 1422),
  photo("omii-20240807-214523.jpg", "Little door at night", "Night", 800, 1067),
  photo("omii-20240625-144247-0448.jpg", "Looking up", "Nature", 800, 1422),
  photo("omii-20240808-085531.jpg", "Misty town", "Street", 800, 1067),
  photo("omii-20240802-005621-0847.jpg", "Clouds through leaves", "Nature", 800, 1000),
  photo("omii-20240817-131451.jpg", "Statue & storm clouds", "Street", 800, 1189),
  photo("omii-20240813-113338.jpg", "Red ixora", "Nature", 800, 1067),
  photo("omii-20240922-143307-0589.jpg", "Old garage", "Street", 800, 800),
  // samples
  sample("sample-baby-2.jpg", "Sweet dreams", "Baby", 800, 600, "Studio 7042", "https://stocksnap.io/photo/happy-baby-6UCQGZ6Q0W"),
  sample("sample-baby-10.jpg", "Snug newborn", "Baby", 800, 533, "Candace McDaniel", "https://stocksnap.io/photo/baby-newborn-ILUIZBPPTT"),
  sample("sample-baby-11.jpg", "Tiny grip", "Baby", 800, 533, "Matt Bango", "https://stocksnap.io/photo/hand-finger-WM7PX0T9C3"),
  sample("sample-baby-16.jpg", "Curious eyes", "Baby", 800, 1200, "Candace McDaniel", "https://stocksnap.io/photo/baby-boy-4J2VADZ5UY"),
  sample("sample-cake-smash-1.jpg", "Sprinkles & candles", "Cake Smash", 800, 533, "Altered Reality", "https://stocksnap.io/photo/birthday-cake-W7T1J6B7DM"),
  sample("sample-cake-smash-3.jpg", "Make a wish", "Cake Smash", 800, 533, "Freestocks.org", "https://stocksnap.io/photo/events-birthday-7XQHYBOHLC"),
  sample("sample-cake-smash-6.jpg", "Rainbow slice", "Cake Smash", 800, 533, "Robin C Samuel", "https://stocksnap.io/photo/cakes-cake-R9EK2G0ADL"),
  sample("sample-cake-smash-12.jpg", "Chocolate celebration", "Cake Smash", 800, 1200, "Markus Spiske", "https://stocksnap.io/photo/food-dessert-AQGKC6CVMK"),
  sample("sample-family-5.jpg", "Family in the park", "Family", 800, 533, "Family Moments", "https://stocksnap.io/photo/family-portrait-KPAKLGPS7E"),
  sample("sample-family-9.jpg", "Big smiles", "Family", 800, 533, "Family Moments", "https://stocksnap.io/photo/family-portrait-FZYVYFH6VX"),
  sample("sample-family-17.jpg", "Weekend walk", "Family", 800, 1200, "Family Moments", "https://stocksnap.io/photo/family-portrait-K3JHHJBDQU"),
  sample("sample-family-18.jpg", "Hand in hand", "Family", 800, 533, "Family Moments", "https://stocksnap.io/photo/family-portrait-LNN5HBYIRT"),
  sample("sample-fashion-2.jpg", "Cobblestone street", "Fashion", 800, 1203, "Daria Shevtsova", "https://stocksnap.io/photo/fashion-model-YVWBHIROVS"),
  sample("sample-fashion-3.jpg", "White columns", "Fashion", 800, 517, "Afta Putta Gunawan", "https://stocksnap.io/photo/fashion-model-AKOSRTQSHH"),
  sample("sample-fashion-4.jpg", "Olive jacket", "Fashion", 800, 1071, "Kris Kemp", "https://stocksnap.io/photo/fashion-model-ZI3P3U28P8"),
  sample("sample-fashion-12.jpg", "Hat in the woods", "Fashion", 800, 533, "Demetrius Washington", "https://stocksnap.io/photo/girl-woman-CNKX126N9M"),
  sample("sample-fitness-4.jpg", "Field yoga", "Fitness", 800, 533, "Dominik%20Wycis%u0142o", "https://stocksnap.io/photo/yoga-fitness-4S23GF9HGW"),
  sample("sample-fitness-9.jpg", "Warm-up stretch", "Fitness", 800, 533, "Direct Media", "https://stocksnap.io/photo/male-fitness-XLGET53CAN"),
  sample("sample-fitness-11.jpg", "Reach high", "Fitness", 800, 1200, "Matt Moloney", "https://stocksnap.io/photo/female-fitness-EJEVZOGS4W"),
  sample("sample-fitness-14.jpg", "Morning run", "Fitness", 800, 533, "The Lazy Artist Gallery", "https://stocksnap.io/photo/fitness-woman-MIBKRELQIO"),
  sample("sample-portraits-2.jpg", "Silver beard", "Portraits", 800, 1001, "George Desipris", "https://stocksnap.io/photo/oldman-portrait-TTOM5R7SFF"),
  sample("sample-portraits-7.jpg", "Young gaze", "Portraits", 800, 800, "QASIM SADIQ", "https://stocksnap.io/photo/emotionalboy-portrait-MYVSKSRBTC"),
  sample("sample-portraits-8.jpg", "The pilot", "Portraits", 800, 1120, "Elliott Chau", "https://stocksnap.io/photo/portrait-pilot-SW0YN0Z5T0"),
  sample("sample-portraits-10.jpg", "Soft light", "Portraits", 800, 1203, "", "https://stocksnap.io/photo/girl-portrait-OWJB5WGPME"),
];
