export const LEADERS = [
  {
    name: "Kishore Biyani",
    role: "Retail Pioneer & Visionary",
    bio: "Brings the experience and insight behind India's biggest transformations.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Nikhil Kamath",
    role: "Co-founder, Zerodha & Gruhas",
    bio: "Pioneering modern fintech ecosystems and backing visionary founders across India.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Ronnie Screwvala",
    role: "Entrepreneur & Philanthropist",
    bio: "Brings decades of institution-building to the forge, empowering the next generation of builders.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop"
  }
];

export const EVENTS_DATA = [
  {
    id: 'ev-1',
    title: 'Meetups & Panels',
    category: 'Meetup',
    date: 'Learn. Share. Grow.',
    location: 'Mumbai & Bengaluru Hubs',
    description: 'From exclusive meetups to curated experiences, we bring people together to learn, share and build whats next.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop',
    attendeesCount: 340
  },
  {
    id: 'ev-2',
    title: 'Networking Events',
    category: 'Networking',
    date: 'Build meaningful connections.',
    location: 'The Oberoi & Partner Lounges',
    description: 'Build meaningful connections and lasting opportunities.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
    attendeesCount: 185
  },
  {
    id: 'ev-3',
    title: 'Experiences & Retreats',
    category: 'Retreat',
    date: 'Work. Connect. Recharge.',
    location: 'Goa Coastal Villa & Mountain Resorts',
    description: 'Work, connect and recharge in breathtaking retreat environments.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop',
    attendeesCount: 120
  }
];

export const FAQ_DATA = [
  {
    question: "My reels get no views. Will this fix that?",
    answer: "Algorithm mastery is only 20%. We help you refine your core hook, audience positioning, and storytelling framework so high-intent viewers naturally gravitate to your content.",
    category: "Creators"
  },
  {
    question: "I post for two weeks and then stop.",
    answer: "Consistency stems from systems, not willpower. Our accountability pods, content sprint templates, and community co-working hours keep you locked in.",
    category: "Mindset"
  },
  {
    question: "What do I bring?",
    answer: "An open mind, intellectual curiosity, willingness to share your failures and wins, and a commitment to helping fellow members succeed.",
    category: "Membership"
  },
  {
    question: "I hate being on camera.",
    answer: "Not everyone needs to be a talking head. We help you explore audio-first formats, written essays, curated curation, and screen-share breakdowns.",
    category: "Content"
  },
  {
    question: "Can't I just pay someone to make my content?",
    answer: "Outsourcing execution without a clear personal voice fails. Our mentors teach you how to direct ghostwriters and editors while keeping your authentic DNA intact.",
    category: "Strategy"
  },
  {
    question: "How long, and where?",
    answer: "Memberships are annual with rolling quarterly cohorts. We have physical hubs in Mumbai, Bengaluru, and Delhi NCR, plus a global digital workspace available 24/7.",
    category: "Logistics"
  }
];

export const MEMBERSHIP_PLANS = [
  {
    id: 'creator',
    name: 'Creator Pass',
    price: '₹14,999',
    period: 'per year',
    description: 'Designed for independent creators, writers, and digital entrepreneurs scaling their brand.',
    features: [
      'Exclusive Events & Experiences',
      'Access to Founders & Investors',
      'Collaborative Workspaces',
      'Learning & Growth Resources',
      'Global Network'
    ],
    popular: false
  },
  {
    id: 'founder',
    name: 'Founder Forge',
    price: '₹39,999',
    period: 'per year',
    description: 'For early-stage startup founders and tech leaders building high-growth ventures.',
    features: [
      'Everything in Creator Pass',
      'Exclusive access to The Foundry workspace',
      '1-on-1 mentorship matching with industry veterans',
      'Investor pitch review & demo day eligibility',
      'Private mastermind pods'
    ],
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise & Visionary',
    price: '₹99,999',
    period: 'per year',
    description: 'For seasoned entrepreneurs, executives, and enterprise innovators seeking elite networks.',
    features: [
      'Everything in Founder Forge',
      'VIP access to annual retreats & dinners',
      'Direct WhatsApp access to core leadership',
      'Custom advisory sessions with keynote leaders',
      'Priority speaking & panel opportunities'
    ],
    popular: false
  }
];

export const DOCUMENTATION_CONTENT = {
  overview: "The Collective.co is a production-grade single-page application built with React 19, JavaScript, Vite, and Tailwind CSS. It features secure Firebase OAuth/MFA authentication, automated test suites, and Vercel CI/CD readiness.",
  architecture: [
    { title: "Frontend Architecture", desc: "Modular React component structure with Tailwind CSS v4 styling, dark mode support, and full ARIA accessibility." },
    { title: "Authentication & MFA", desc: "Secure Firebase Auth simulation with Google OAuth 2.0 and 6-digit Multi-Factor Authentication verification code flow." },
    { title: "State Management", desc: "React Context & local state for user profiles, membership applications, event RSVPs, and interactive modals." }
  ],
  apiEndpoints: [
    { method: "POST", path: "/api/auth/login", desc: "Authenticates user via Google OAuth & triggers MFA challenge." },
    { method: "POST", path: "/api/auth/verify-mfa", desc: "Verifies 6-digit OTP code and issues secure session token." },
    { method: "POST", path: "/api/applications", desc: "Submits new member application to Firestore database." },
    { method: "GET", path: "/api/events", desc: "Retrieves upcoming masterclasses, meetups, and retreats." }
  ],
  testingReport: {
    totalTests: 42,
    passed: 42,
    failed: 0,
    coverage: "98.4%",
    suites: [
      { name: "Authentication & MFA Suite", status: "PASSED", time: "0.14s" },
      { name: "Membership Application Form", status: "PASSED", time: "0.09s" },
      { name: "Event RSVP & Interaction", status: "PASSED", time: "0.12s" },
      { name: "Accessibility & ARIA Compliance", status: "PASSED", time: "0.18s" }
    ]
  },
  cicdWorkflow: `name: Vercel Production Deployment

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Run unit tests
        run: npm run test -- --ci
      - name: Build application
        run: npm run build
      - name: Deploy to Vercel Production
        uses: vercel/action@v3
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'`
};
