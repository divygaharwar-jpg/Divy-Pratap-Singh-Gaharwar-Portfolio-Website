export const blogPosts = [
  {
    slug: "my-first-36-hour-hackathon-learnings",
    title: "What 36 Hours at a Hackathon Taught Me About Frontend & Rapid Prototyping",
    date: "August 18, 2024",
    readTime: "5 min read",
    category: "Hackathons",
    excerpt: "The adrenaline rush of a 36-hour hackathon taught me more about shipping MVPs, clean component architecture, and team communication than weeks of solitary coding.",
    coverGradient: "from-emerald-500/20 to-teal-500/10",
    tags: ["Hackathons", "Frontend", "Career", "Teamwork"],
    content: [
      {
        type: "paragraph",
        text: "Walking into my first major hackathon, my mind was racing with questions: Would my frontend knowledge be enough? How do you coordinate Git branches across four teammates under a ticking 36-hour clock? Could we actually build a working application before the final demo buzzer?"
      },
      {
        type: "heading",
        text: "1. Scope Is Everything: The MVP Mindset"
      },
      {
        type: "paragraph",
        text: "During the first two hours, our team had brainstormed enough features for a multi-year enterprise roadmap. We quickly realized our biggest risk wasn't technical—it was over-engineering. We trimmed down the core concept to a single critical flow: allowing users to search, filter, and connect without superfluous onboarding friction."
      },
      {
        type: "heading",
        text: "2. The Power of Modular Component Design"
      },
      {
        type: "paragraph",
        text: "Because we split our UI into reusable React components and established clear props early, two of us worked on different views concurrently without stepping on each other's toes. Tailwind CSS was an absolute game changer here—we didn't have to debate class names or maintain massive CSS stylesheets in the middle of the night."
      },
      {
        type: "heading",
        text: "3. Presentation & Polish Win Hearts"
      },
      {
        type: "paragraph",
        text: "When demo time came, having responsive layouts that didn't break on the judging tablets, smooth loading indicators, and a clean color palette stood out. The judges commented on how intuitive the interface felt even though it had only been built hours prior."
      },
      {
        type: "quote",
        text: "A hackathon isn't just a test of how much code you can write; it's an exercise in prioritizing what truly creates value for the user under strict constraints."
      }
    ]
  },
  {
    slug: "why-tailwind-css-changed-my-frontend-workflow",
    title: "Why Tailwind CSS & Utility-First Styling Transformed My Frontend Speed",
    date: "June 04, 2024",
    readTime: "4 min read",
    category: "Styling & UI",
    excerpt: "Why I traded hundreds of lines of custom CSS files for utility classes, and how it accelerated my design iteration time and made responsive coding second nature.",
    coverGradient: "from-teal-500/20 to-emerald-500/10",
    tags: ["Tailwind CSS", "CSS", "UI/UX", "Productivity"],
    content: [
      {
        type: "paragraph",
        text: "Like many developers starting out, my initial reaction to Tailwind CSS was skeptical: 'Isn't this just inline styles with extra steps?' But after building my third project with it, I realized I never wanted to return to the old way of maintaining separate stylesheets."
      },
      {
        type: "heading",
        text: "No More Inventing Meaningless Class Names"
      },
      {
        type: "paragraph",
        text: "Remember spending minutes debating whether a div should be named `card-wrapper-inner`, `card-container`, or `card-body-box`? Tailwind eliminates naming fatigue entirely. You style directly where the structure lives, drastically reducing context switching between HTML and CSS files."
      },
      {
        type: "heading",
        text: "Responsive Design without Media Query Sprawl"
      },
      {
        type: "paragraph",
        text: "With prefixes like `md:grid-cols-2 lg:grid-cols-3`, responsive styling becomes an integral part of component composition rather than an afterthought buried at the bottom of a 500-line CSS file. Designing for mobile-first feels natural and fluid."
      },
      {
        type: "heading",
        text: "Consistent Design Tokens"
      },
      {
        type: "paragraph",
        text: "Having a constrained set of spacing units, typography scales, and color shades prevents the chaotic inconsistency that happens when arbitrary pixels and hex values are scattered across a codebase."
      }
    ]
  }
];
