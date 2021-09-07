const config = {
  siteTitle: 'Booker & Co || The official site of Booker & Co', // Site title.
  siteTitleShort: 'Booker & Co', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Booker & Co', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://craigbooker.com', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'We pride ourself on writing quality content.', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteRssTitle: 'Booker & Co RSS feed', // Title of the RSS feed
  siteFBAppID: '', // FB Application ID for using app insights
  //googleAnalyticsID: 'UA-47311644-5', // GA tracking ID.
  googleAnalyticsID: 'UA-127519592-2', // GA tracking ID.
  disqusShortname: 'craigbooker', // Disqus shortname.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  postsPerPage: 6, // Amount of posts displayed per listing page.
  seriesPerPage: 6, // Amount of series displayed per listing page.
  postsPerCategoryPage: 6, // Amount of posts displayed per catgegory listing page.
  userName: 'Craig Booker', // Username to display in the author segment.
  userEmail: 'AdvancedUser@example.com', // Email used for RSS feed's author segment
  userTwitter: '', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'Oklahoma City, OK', // User location to display in the author segment.
  userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/craigbooker/craigbooker',
      iconClassName: 'fa fa-github',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/bookerandco',
      iconClassName: 'fa fa-twitter',
    },
    {
      label: 'Facebook',
      url: 'https://facebook.com/bookerandcompany',
      iconClassName: 'fa fa-facebook',
    },

    {
      label: 'Email',
      url: 'mailto:arcadiaswx@gmail.com',
      iconClassName: 'fa fa-envelope',
    },
  ],
  copyright: 'Booker & Co', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.
}

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/')
  config.siteRss = `/${config.siteRss}`

module.exports = config
