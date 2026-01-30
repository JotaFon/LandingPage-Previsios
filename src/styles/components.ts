export const header = {
  wrapper:
    "fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-lg border-b border-dark-700/50",
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  inner: "flex items-center justify-between h-16 md:h-20",
  logo: "flex items-center gap-2 group",
  logoImage: "group-hover:scale-110 transition-transform",
  logoText: "text-xl font-bold tracking-tight font-heading",
  nav: "hidden md:flex items-center gap-8",
  navLink: "text-gray-300 hover:text-white transition-colors",
  mobileMenuButton: "md:hidden p-2 text-gray-400 hover:text-white",
  mobileMenu: "md:hidden py-4 border-t border-dark-700/50",
  mobileNav: "flex flex-col gap-4",
};

export const hero = {
  section:
    "relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20",
  gridPattern: "absolute inset-0 bg-grid-pattern opacity-40",
  orbLeft:
    "absolute top-1/4 -left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#022e7b]/30 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow",
  orbRight:
    "absolute bottom-1/4 -right-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-[#07a8da]/20 rounded-full blur-[60px] md:blur-[100px] animate-pulse-slow",
  content: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
  badge:
    "inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-dark-800/60 backdrop-blur-sm border border-dark-700/50 rounded-full mb-5 md:mb-8 animate-fade-in",
  badgeDot: "relative flex h-2 w-2",
  badgeDotPing:
    "animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-400 opacity-75",
  badgeDotInner: "relative inline-flex rounded-full h-2 w-2 bg-secondary-500",
  badgeText: "text-xs md:text-sm text-gray-300",
  headline:
    "text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 animate-slide-up",
  headlineWhite: "block text-white",
  headlineGradient: "block gradient-text",
  subheadline:
    "max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 mb-7 md:mb-10 animate-slide-up [animation-delay:200ms]",
  highlight: "text-white font-medium",
  ctaContainer:
    "flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 animate-slide-up [animation-delay:400ms]",
  ctaPrimary:
    "group relative inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#0162b1] to-[#07a8da] text-white text-sm md:text-base font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#07a8da]/30 hover:scale-105 overflow-hidden",
  ctaShine:
    "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700",
  ctaSecondary:
    "inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-dark-800/60 backdrop-blur-sm border border-dark-700/50 text-white text-sm md:text-base font-semibold rounded-xl hover:bg-dark-700/60 hover:border-primary-500/50 transition-all duration-300",
  statsGrid:
    "grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 mt-12 md:mt-20 animate-slide-up [animation-delay:600ms]",
  statCard: "text-center group",
  statCardInner:
    "glass-card p-3 md:p-6 hover:border-primary-500/30 transition-colors",
  statIcon:
    "inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 mb-2 md:mb-3 rounded-lg md:rounded-xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border border-primary-500/30",
  statValue: "text-3xl md:text-4xl font-bold gradient-text mb-2",
  statLabel: "text-xs md:text-sm text-gray-300",
};

export const features = {
  section: "relative py-14 md:py-32 overflow-hidden",
  gridPattern: "absolute inset-0 bg-grid-pattern opacity-20",
  orb: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#022e7b]/15 rounded-full blur-[100px] md:blur-[150px]",
  container: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  header: "text-center mb-10 md:mb-20",
  badge:
    "inline-block px-3 md:px-4 py-1 md:py-1.5 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-xs md:text-sm font-medium mb-3 md:mb-4",
  title: "text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6",
  titleGradient: "gradient-text",
  description: "max-w-2xl mx-auto text-sm md:text-lg text-gray-300",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8",
  card: "group relative glass-card p-5 md:p-8 hover:bg-dark-700/50 transition-all duration-300 hover:-translate-y-1",
  cardIcon: (gradient: string) =>
    `inline-flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br ${gradient} mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`,
  cardTitle: "text-base md:text-xl font-semibold text-white mb-2 md:mb-3",
  cardDescription: "text-sm md:text-base text-gray-300 leading-relaxed",
};

export const demoCarousel = {
  section: "relative py-14 md:py-32 overflow-hidden",
  gridPattern: "absolute inset-0 bg-grid-pattern opacity-20",
  orb: "absolute top-1/2 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#0162b1]/10 rounded-full blur-[100px] md:blur-[150px]",
  container: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  header: "text-center mb-8 md:mb-16",
  badge:
    "inline-block px-3 md:px-4 py-1 md:py-1.5 bg-secondary-500/10 border border-secondary-500/20 rounded-full text-secondary-400 text-xs md:text-sm font-medium mb-3 md:mb-4",
  title: "text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6",
  titleGradient: "gradient-text",
  description: "max-w-2xl mx-auto text-sm md:text-lg text-gray-300",
  carouselContainer: "max-w-5xl mx-auto",
  card: "glass-card p-4 md:p-6",
  slideHeader:
    "flex flex-wrap items-center justify-between gap-2 md:gap-4 mb-3 md:mb-4",
  slideTitle: "text-white font-semibold text-base md:text-lg",
  slideDescription: "text-gray-300 text-xs md:text-sm",
  slideCounter: "text-gray-500 text-sm",
  slideArea:
    "relative aspect-[16/9] rounded-xl overflow-hidden border border-dark-700/50 bg-dark-900",
  slideTrack: "flex transition-transform duration-500 ease-out h-full",
  slide: "min-w-full h-full relative",
  navButton:
    "absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-dark-900/80 backdrop-blur-sm border border-dark-700/50 flex items-center justify-center text-white hover:bg-dark-800 hover:border-primary-500/50 transition-all",
  navButtonLeft: "left-4",
  navButtonRight: "right-4",
  dots: "flex items-center justify-center gap-2 mt-4",
  dot: (active: boolean) =>
    `h-2 rounded-full transition-all duration-300 ${active ? "w-8 bg-gradient-to-r from-[#0162b1] to-[#07a8da]" : "w-2 bg-dark-600 hover:bg-dark-500"}`,
  pills: "flex flex-wrap items-center justify-center gap-3 mt-8",
  pill: "flex items-center gap-2 px-4 py-2 bg-dark-800/50 border border-dark-700/50 rounded-full",
  pillIcon: "w-4 h-4 text-primary-400",
  pillText: "text-sm text-gray-300",
};

export const howItWorks = {
  section: "relative py-14 md:py-32 bg-dark-800/30",
  gridPattern: "absolute inset-0 bg-grid-pattern opacity-10",
  container: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  header: "text-center mb-10 md:mb-20",
  badge:
    "inline-block px-3 md:px-4 py-1 md:py-1.5 bg-secondary-500/10 border border-secondary-500/20 rounded-full text-secondary-400 text-xs md:text-sm font-medium mb-3 md:mb-4",
  title: "text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6",
  titleGradient: "gradient-text",
  description: "max-w-2xl mx-auto text-xs md:text-lg text-gray-300",
  stepsContainer: "relative",
  connectionLine:
    "hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#022e7b]/50 via-[#07a8da]/50 to-[#62cfd1]/50 -translate-y-1/2",
  grid: "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8",
  stepWrapper: "relative",
  card: "relative glass-card p-2 md:p-6 text-center h-full hover:bg-dark-700/50 transition-all duration-300 group",
  stepNumber:
    "absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-[#022e7b] to-[#07a8da] rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold text-white z-10",
  iconWrapper:
    "w-10 h-10 md:w-16 md:h-16 mx-auto mt-3 md:mt-4 mb-3 md:mb-6 bg-dark-700/50 rounded-xl md:rounded-2xl flex items-center justify-center text-primary-400 group-hover:scale-110 group-hover:bg-primary-500/20 transition-all duration-300",
  stepTitle: "text-xs md:text-xl font-semibold text-white mb-1.5 md:mb-3",
  stepDescription: "text-gray-300 text-xs md:text-sm leading-relaxed",
  mobileArrow: "lg:hidden hidden md:flex justify-center my-4",
};

export const contact = {
  section: "relative py-14 md:py-32 overflow-hidden",
  gridPattern: "absolute inset-0 bg-grid-pattern opacity-20",
  orbLeft:
    "absolute bottom-0 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#022e7b]/15 rounded-full blur-[100px] md:blur-[150px]",
  orbRight:
    "absolute top-0 right-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-[#07a8da]/10 rounded-full blur-[80px] md:blur-[120px]",
  container: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  grid: "grid lg:grid-cols-2 gap-8 lg:gap-20 items-center",
  badge:
    "inline-block px-3 md:px-4 py-1 md:py-1.5 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-xs md:text-sm font-medium mb-4 md:mb-6",
  title: "text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6",
  titleGradient: "gradient-text",
  description: "text-sm md:text-lg text-gray-300 mb-6 md:mb-8",
  benefitsList: "space-y-3 md:space-y-4",
  benefitItem: "flex items-center gap-3",
  benefitIcon:
    "flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[#0162b1] to-[#07a8da] flex items-center justify-center",
  benefitText: "text-sm md:text-base text-gray-300",
  contactInfo: "mt-6 md:mt-10 pt-6 md:pt-10 border-t border-dark-700/50",
  contactLabel: "text-xs md:text-sm text-gray-300 mb-3 md:mb-4",
  contactLinks: "flex flex-wrap gap-6",
  contactLink:
    "flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors",
  formCard: "glass-card p-5 md:p-10",
  successIcon:
    "w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#0162b1] to-[#07a8da] rounded-full flex items-center justify-center",
  successTitle: "text-2xl font-bold text-white mb-2",
  successText: "text-gray-300",
  successButton:
    "mt-6 text-primary-400 hover:text-primary-300 transition-colors",
  form: "space-y-4 md:space-y-6",
  errorBox:
    "p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm",
  inputGrid: "grid sm:grid-cols-2 gap-4 md:gap-6",
  label: "block text-xs md:text-sm font-medium text-gray-300 mb-1.5 md:mb-2",
  input:
    "w-full px-3 md:px-4 py-2.5 md:py-3 bg-dark-700/50 border border-dark-600 rounded-lg text-sm md:text-base text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors",
  textarea:
    "w-full px-3 md:px-4 py-2.5 md:py-3 bg-dark-700/50 border border-dark-600 rounded-lg text-sm md:text-base text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none",
  submitButton:
    "w-full flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#0162b1] to-[#07a8da] hover:from-[#0156a0] hover:to-[#0697c4] text-white text-sm md:text-base font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#07a8da]/25 disabled:opacity-70 disabled:cursor-not-allowed",
  disclaimer: "text-xs text-gray-500 text-center",
};

export const footer = {
  wrapper: "relative bg-dark-800/50 border-t border-dark-700/50",
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12",
  grid: "grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12",
  brandSection: "md:col-span-2",
  logo: "flex items-center gap-2 group mb-4",
  logoText: "text-xl font-bold tracking-tight font-heading",
  socialLinks: "flex gap-4",
  socialLink:
    "w-10 h-10 flex items-center justify-center rounded-lg bg-dark-700/50 text-gray-400 hover:text-primary-400 hover:bg-dark-600/50 transition-colors",
  sectionTitle: "text-white font-semibold mb-4",
  linkList: "space-y-3",
  link: "text-gray-400 hover:text-primary-400 transition-colors",
  bottom:
    "mt-12 pt-8 border-t border-dark-700/50 flex flex-col sm:flex-row justify-between items-center gap-4",
  copyright: "text-gray-500 text-sm",
  legalLinks: "flex gap-6 text-sm",
  legalLink: "text-gray-500 hover:text-gray-400 transition-colors",
};

export const mapDemo = {
  section: "relative py-24 md:py-32 overflow-hidden",
  gridPattern: "absolute inset-0 bg-grid-pattern opacity-20",
  orb: "absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#0162b1]/10 rounded-full blur-[150px]",
  container: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  header: "text-center mb-12 md:mb-16",
  badge:
    "inline-block px-4 py-1.5 bg-secondary-500/10 border border-secondary-500/20 rounded-full text-secondary-400 text-sm font-medium mb-4",
  title: "text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6",
  titleGradient: "gradient-text",
  description: "max-w-2xl mx-auto text-lg text-gray-400",
  content: "max-w-5xl mx-auto",
  card: "glass-card p-4 md:p-6",
  mapHeader: "flex flex-wrap items-center justify-between gap-4 mb-4",
  liveIndicator: "w-3 h-3 rounded-full bg-green-500 animate-pulse",
  locationLabel: "text-white font-medium",
  separator: "text-gray-500 text-sm",
  updateLabel: "text-gray-400 text-sm",
  legendItem: "flex items-center gap-1.5",
  legendDot: (bgColor: string) => `w-2.5 h-2.5 rounded-full ${bgColor}`,
  legendLabel: "text-gray-300 hidden sm:inline",
  mapArea:
    "relative aspect-[16/10] rounded-xl overflow-hidden border border-dark-700/50",
  mapHint: "text-xs text-gray-500 mt-3 text-center",
  detailCard: "glass-card p-5 mt-6",
  detailHeader: "flex flex-col md:flex-row md:items-center gap-4",
  detailName: "text-lg font-semibold text-white",
  detailBadge: (bgColor: string) =>
    `px-2 py-1 rounded-full text-xs font-medium ${bgColor} text-white`,
  detailLocation: "text-gray-400 text-sm",
  detailStats: "flex items-center gap-6 md:ml-auto",
  detailStatLabel: "text-xs text-gray-400",
  detailStatFlow: "text-lg font-semibold text-primary-400",
  detailStatPressure: "text-lg font-semibold text-secondary-400",
  detailStatCoverage: "text-lg font-semibold text-white",
  alertCritical: "bg-red-500/10 border border-red-500/30 rounded-lg p-3 mt-4",
  alertCriticalHeader: "flex items-center gap-2 text-red-400",
  alertCriticalTitle: "text-sm font-medium",
  alertCriticalText: "text-xs text-red-300/70 mt-1",
  alertWarning:
    "bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mt-4",
  alertWarningHeader: "flex items-center gap-2 text-yellow-400",
  alertWarningTitle: "text-sm font-medium",
  alertWarningText: "text-xs text-yellow-300/70 mt-1",
  loadingContainer:
    "w-full h-full bg-dark-800 rounded-xl flex items-center justify-center",
  loadingText: "text-gray-400",
};

export const waterEffects = {
  neuralNetwork:
    "absolute inset-0 overflow-hidden pointer-events-none opacity-15 md:opacity-30",
  dataStreams:
    "hidden md:block absolute inset-0 overflow-hidden pointer-events-none",
  dataStreamLine:
    "absolute h-px bg-gradient-to-r from-transparent via-[#07a8da]/50 to-transparent",
  codeParticles:
    "absolute inset-0 overflow-hidden pointer-events-none opacity-50 md:opacity-100",
  codeParticle:
    "absolute text-[#07a8da]/20 font-mono text-[10px] md:text-xs animate-float-particle",
  techCircles:
    "hidden md:block absolute inset-0 overflow-hidden pointer-events-none",
  techCircleRight: "absolute top-1/4 -right-20 w-96 h-96 opacity-10",
  techCircleLeft: "absolute bottom-1/4 -left-10 w-64 h-64 opacity-10",
  waterWaves:
    "absolute bottom-0 left-0 right-0 h-[280px] md:h-[520px] overflow-hidden pointer-events-none",
  waterParticles:
    "absolute inset-0 overflow-hidden pointer-events-none opacity-60 md:opacity-100",
  waterParticle:
    "absolute rounded-full bg-gradient-to-br from-primary-400/30 to-transparent animate-float-particle",
};

export const legal = {
  main: "pt-24 pb-16",
  container: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
  card: "glass-card p-8 md:p-12",
  title: "text-3xl md:text-4xl font-bold text-white mb-2",
  date: "text-gray-400 mb-8",
  content: "prose prose-invert max-w-none space-y-8",
  sectionTitle: "text-xl font-semibold text-white mb-4",
  sectionText: "text-gray-300 leading-relaxed",
  list: "list-disc list-inside text-gray-300 space-y-2",
  backLink: "mt-10 pt-8 border-t border-dark-700/50",
  backLinkText:
    "inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors",
};
