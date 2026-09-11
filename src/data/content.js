// Single source of truth for all landing-page copy, nav links, and structured
// content arrays. Keeping this separate from JSX keeps components declarative
// and makes future copy edits a one-file change.

// NOTE: About/Gallery/Contact don't have their own pages yet (landing-page-only
// scope for now) — these anchors are provisional stand-ins pointing at the
// closest matching section on this single page.
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#founder' },
  { label: 'Gallery', href: '#featured-videos' },
  { label: 'Contact', href: '#signup' },
]

export const hero = {
  eyebrow: 'More Than Dance',
  headingLine1: 'A SPACE TO',
  headingLine2: 'BELONG',
  subtextLine1: 'Train. create. perform. glow.',
  subtextLine2: 'Join a community that moves together',
  primaryCta: { label: 'Join Your Academy', href: '#signup' },
  secondaryCta: { label: 'Show Reel', href: '#featured-videos' },
}

export const stats = [
  { icon: 'trophy', value: '10+', label: 'Years of Experience' },
  { icon: 'crew', value: '50+', label: 'Workshops Conducted' },
  { icon: 'cap', value: '500+', label: 'Students Trained' },
]

export const programs = {
  eyebrow: 'Our Programs',
  heading: ['What We ', { gold: 'Offer' }],
  items: [
    {
      key: 'regular-classes',
      title: 'Regular Classes',
      body: 'Structured weekly training across all styles — open to every age, from 4 years and up.',
      details:
        'Four sessions a week designed to build technique, discipline and confidence. There’s no upper age limit, so anyone from age 4 onward can begin their dance journey with us.',
    },
    {
      key: 'school-college',
      title: 'Schools & College Events',
      body: 'Choreography for annual days, Independence Day, cultural fests and inter-college competitions.',
      details:
        'We design and train performances for your institution’s biggest moments — annual day showcases, Independence/Republic Day programs, cultural fests, and competitive choreography that helps your team stand out.',
    },
    {
      key: 'sangeet-wedding',
      title: 'Sangeet & Wedding Choreography',
      body: 'Bride, groom & friends-team choreography to make your big day unforgettable.',
      details:
        'From the couple’s showstopper number to a fun routine for the friends’ squad, we choreograph and rehearse sangeet and wedding performances tailored to the occasion — so every dance-floor moment is picture-perfect.',
    },
    {
      key: 'online-classes',
      title: 'Online Classes',
      body: 'Live online sessions open to all age groups, wherever you are.',
      details:
        'Can’t make it to the studio? Join live online classes crafted for every age group, with the same personalised attention and structured progression as our in-studio training.',
    },
  ],
}

export const featuredVideos = {
  eyebrow: 'Social Highlights',
  heading: ['Featured ', { gold: 'Videos' }],
  instagramCta: {
    label: 'Follow on Instagram',
    href: 'https://www.instagram.com/mmx_dance_studio/',
  },
  items: [
    {
      key: 'reel-1',
      href: 'https://www.instagram.com/reel/C-aVKpByxrF/',
      alt: 'Maddy performing a hip hop routine on stage',
    },
    {
      key: 'reel-2',
      href: 'https://www.instagram.com/reel/DCoiHEeTMFV/',
      alt: 'Vichu dancing on a rooftop',
    },
    {
      key: 'reel-3',
      href: 'https://www.instagram.com/reel/C5qRK9Ox7_h/',
      alt: 'The crew rehearsing a group choreography',
    },
  ],
  caption: 'Watch our latest performance on Instagram and part of our journey.',
}

export const founder = {
  watermark: 'FOUNDER',
  heading: ['Meet Our ', { gold: 'Expert' }],
  name: 'Maddy',
  role: 'Founder & Choreographer',
  experience: '10+ Years of Experience',
  bio: 'With over 10 years in the industry, Maddy has trained dancers of every age and level, shaping raw energy into disciplined, expressive performance. A versatile choreographer at heart, he moves fluidly between styles — building each student’s technique while helping them find their own voice on stage.',
  styles: [
    'Hip Hop',
    'Lyrical',
    'Cinematic',
    'Locking',
    'Waacking',
    'Contemporary',
    'Semi-Classical',
  ],
  quote: 'Dance Isn’t just what I do it’s how I connect, create and give back',
  instagramCta: { label: '@madhan_core', href: 'https://www.instagram.com/madhan_core/' },
}

export const achievements = {
  eyebrow: 'Recognition',
  heading: ['Crew ', { gold: 'Achievements' }],
  intro:
    'From competitors to collaborators our journey has been starts and inspire us to keep moving forward',
  awards: [
    { key: 'award-1', alt: 'Special Award — Summerholic ’26, Prozone' },
    { key: 'award-2', alt: 'Crew with their competition certificate and trophy' },
    { key: 'award-3', alt: 'Crew celebrating their 3rd place win at Nadanam Finals' },
    { key: 'award-4', alt: 'Award presentation at Nadanam Finals' },
  ],
  groupPicAlt: 'The MMX Dance Studio crew at their Flash Mob in Coimbatore',
}

export const testimonials = {
  eyebrow: 'Real Stories',
  heading: ['What Our Students ', { gold: 'Say' }],
  items: [
    {
      quote:
        'The training here completely changed the way I see dance it’s more than class it’s family.',
      name: 'Ankitha Sekar',
    },
    {
      quote: 'Maddie masters style is inspiring and makes you push your limits Best place to grow.',
      name: 'Rajiv Kumar',
    },
    {
      quote: 'I gained confidence friends a new version of myself through this academy.',
      name: 'Sneha',
    },
  ],
}

export const startsHere = {
  label: 'Your Next Move',
  heading: ['Starts ', { gold: 'Here' }],
  subtext:
    'Join Our Academy And Be Part Of Community That Moves Learns And Grows Together.',
  cta: { label: 'Join Your Academy', href: '#signup' },
}

export const signup = {
  heading: ['Join Our Dance ', { gold: 'Crew' }],
  script: 'Good Dancers Better Humans',
  subtext: 'Begin your dance journey with us today',
  formTitle: 'Student Information',
  submitLabel: 'Start your Dance Journey',
  submittingLabel: 'Submitting…',
  successMessage: 'Thanks! We’ll be in touch to start your dance journey.',
  errorMessage: 'Something went wrong — please try again or contact us directly.',
  resetLabel: 'Submit another',
  fields: [
    {
      id: 'student-name',
      name: 'student_name',
      label: 'Student Name*',
      type: 'text',
      placeholder: "Student's Full Name",
      required: true,
    },
    {
      id: 'age',
      name: 'age',
      label: 'Age*',
      type: 'number',
      placeholder: 'Age',
      required: true,
    },
    {
      id: 'gender',
      name: 'gender',
      label: 'Gender*',
      type: 'select',
      placeholder: 'Select Gender',
      options: ['Male', 'Female', 'Other'],
      required: true,
    },
    {
      id: 'parent-name',
      name: 'parent_guardian_name',
      label: 'Parent/Guardian Name*',
      type: 'text',
      placeholder: "Parent/Guardian's Full Name",
      required: true,
    },
    {
      id: 'whatsapp',
      name: 'whatsapp_number',
      label: 'WhatsApp Number*',
      type: 'tel',
      placeholder: 'WhatsApp Number',
      required: true,
    },
    {
      id: 'email',
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Email Address',
      required: false,
    },
    {
      id: 'location',
      name: 'area_location',
      label: 'Area / Location*',
      type: 'text',
      placeholder: 'Your Area / Location',
      required: true,
    },
    {
      id: 'hear-about-us',
      name: 'how_did_you_hear_about_us',
      label: 'How did you hear about us?',
      type: 'select',
      placeholder: 'Select an option',
      options: ['Instagram', 'WhatsApp', 'Google', 'Friend', 'Other'],
      required: false,
    },
  ],
}

export const footer = {
  tagline: 'Mastery. Movement. Xpression.',
  address: 'Ajjanur Road, Gujan’s Atreya Apartment opposite, Vadavalli, Coimbatore 641 046.',
  mapLink: 'https://www.google.com/maps?q=11.01723861694336,76.88504028320312&z=17&hl=en',
  phone: '+91 97918 78197',
  phoneHref: 'tel:+919791878197',
  email: 'mmxdancestudio26@gmail.com',
  socialLabel: 'Follow us on',
  socials: [
    { icon: 'facebook', href: 'https://facebook.com', label: 'Facebook' },
    { icon: 'youtube', href: 'https://youtube.com', label: 'YouTube' },
    { icon: 'instagram', href: 'https://instagram.com', label: 'Instagram' },
  ],
  copyright: 'MMX Dance Studio. All rights reserved.',
}
