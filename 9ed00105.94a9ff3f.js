(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{76:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return r})),a.d(t,"default",(function(){return b}));var n=a(2),s=a(6),o=(a(0),a(96)),i={title:"Configuration"},c={unversionedId:"configuration",id:"configuration",isDocsHomePage:!1,title:"Configuration",description:"The .upptimerc.yml file is used as the central configuration for Upptime, with this syntax:",source:"@site/docs/configuration.md",slug:"/configuration",permalink:"/docs/configuration",editUrl:"https://github.com/upptime/upptime.js.org/blob/master/docs/configuration.md",version:"current",sidebar:"sidebar",previous:{title:"Getting started",permalink:"/docs/get-started"},next:{title:"Scheduled maintenance",permalink:"/docs/scheduled-maintenance"}},r=[{value:"Configuration options",id:"configuration-options",children:[{value:"Repository",id:"repository",children:[]},{value:"Endpoints",id:"endpoints",children:[]},{value:"Notifications",id:"notifications",children:[]},{value:"Assignees",id:"assignees",children:[]},{value:"Skip delete issues",id:"skip-delete-issues",children:[]},{value:"Status website",id:"status-website",children:[]},{value:"Internationalization",id:"internationalization",children:[]},{value:"Repository metadata",id:"repository-metadata",children:[]},{value:"Git commit options",id:"git-commit-options",children:[]},{value:"CI schedule",id:"ci-schedule",children:[]},{value:"Self-hosted runners",id:"self-hosted-runners",children:[]},{value:"User agent",id:"user-agent",children:[]}]}],l={rightToc:r};function b(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},".upptimerc.yml")," file is used as the central configuration for Upptime, with this syntax:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"owner: koj-co # GitHub username\nrepo: upptime # GitHub repository name\nuser-agent: koj-co\nsites: # List of endpoints to track\n  - name: Google\n    url: https://www.google.com\nassignees: # Users to assign downtime issues (optional)\n  - AnandChowdhary\nstatus-website: # Status website (optional)\n  cname: upptime.js.org # Custom domain CNAME\n  # baseUrl: /repo\n  name: Upptime # Status website title\n")),Object(o.b)("h2",{id:"configuration-options"},"Configuration options"),Object(o.b)("h3",{id:"repository"},"Repository"),Object(o.b)("p",null,'A GitHub repository is used as the "source of truth" for your uptime logs, and the static site uses the GitHub API and fetches data from this repository.'),Object(o.b)("p",null,"After you've created a new repository using this template (see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template"}),"Creating a repository from a template"),"), specify the username and repository name in the configuration:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"owner: koj-co\nrepo: upptime\n")),Object(o.b)("h3",{id:"endpoints"},"Endpoints"),Object(o.b)("p",null,"You can track as many websites as you like. Add the names and URLs of your endpoints in the sites key:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"sites:\n  - name: Google\n    url: https://www.google.com\n  - name: DuckDuckGo\n    url: https://duckduckgo.com\n")),Object(o.b)("h4",{id:"http-verbs"},"HTTP verbs"),Object(o.b)("p",null,"To make POST requests (or any other HTTP verb), you can add the method key:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"sites:\n  - name: POST to Google\n    url: https://www.google.com\n    method: POST\n  - name: DELETE Example\n    url: https://example.com\n    method: DELETE\n")),Object(o.b)("h4",{id:"tcp-port-enpoints"},"TCP Port Enpoints"),Object(o.b)("p",null,'To make a TCP ping to any port, you can add the check key "tcp-ping":'),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'sites:\n  - name: Google DNS 1\n    check: "tcp-ping"\n    url: 8.8.4.4\n    port: 53\n  - name: Google DNS 2\n    check: "tcp-ping"\n    url: 8.8.8.8\n    port: 53\n')),Object(o.b)("p",null,'You can also use hostnames with "tcp-ping":'),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'sites:\n  - name: Google DNS\n    check: "tcp-ping"\n    url: dns.google\n    port: 53\n')),Object(o.b)("p",null,"If you want to test only IPv6 for specific hostnames (e.g. use only the AAAA DNS records), then set the ",Object(o.b)("inlineCode",{parentName:"p"},"ipv6")," flag to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'sites:\n  - name: Google DNS\n    check: "tcp-ping"\n    url: dns.google\n    port: 53\n    ipv6: true\n')),Object(o.b)("h4",{id:"secret-urls"},"Secret URLs"),Object(o.b)("p",null,"If you don't want to show a URL publicly, you can use repository secrets (see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.github.com/en/free-pro-team@latest/actions/reference/encrypted-secrets"}),"Creating and storing encrypted secrets"),"). Instead of the plain text URL, add the name of the secret prefixed with a $ character:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"- name: Secret Site\n  url: $SECRET_SITE\n")),Object(o.b)("p",null,"In the above example, a secret named ",Object(o.b)("inlineCode",{parentName:"p"},"SECRET_SITE")," (without the $) is stored in the repository. You can add as many secrets as you like, and use them in URLs by adding the ",Object(o.b)("inlineCode",{parentName:"p"},"$"),"prefix. For example, if your environment variable is called",Object(o.b)("inlineCode",{parentName:"p"},"API_URL"),", the site URL can be ",Object(o.b)("inlineCode",{parentName:"p"},"$API_URL"),"."),Object(o.b)("p",null,"You can also use these secrets as part of the URL, for example using a secret called ",Object(o.b)("inlineCode",{parentName:"p"},"MY_API_KEY"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"- name: API endpoint\n  url: https://example.com/get-user/3?api_key=$MY_API_KEY\n")),Object(o.b)("h4",{id:"request-headers"},"Request headers"),Object(o.b)("p",null,"Similarly, you can set headers in a request like so:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'- name: API endpoint\n  url: https://example.com/get-user/3\n  headers:\n    - "Authorization: Bearer $SECRET_SITE_2"\n    - "Content-Type: application/json"\n')),Object(o.b)("h4",{id:"request-body"},"Request body"),Object(o.b)("p",null,"If you want to send data alongside the headers, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"body")," key:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'- name: API endpoint with data\n  method: POST\n  url: https://example.com/login\n  headers:\n    - "Content-Type: application/json"\n  body: \'{ "password": "hello" }\'\n')),Object(o.b)("p",null,"You can add any string to the ",Object(o.b)("inlineCode",{parentName:"p"},"body")," parameter, but make sure that you supply the relevant content-type header too."),Object(o.b)("h4",{id:"custom-icons"},"Custom icons"),Object(o.b)("p",null,"Each API endpoint has an icon visible on the README.md file and the status website. By default, we use the GitHub Favicon Service to fetch the favicon for the domain of your endpoint (with a fallback to a generic globe icon), but you can also provide a custom icon URL, preferably a transparent square PNG:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"sites:\n  - name: Google\n    url: https://www.google.com\n    icon: https://www.google.com/favicon.ico\n")),Object(o.b)("h4",{id:"status-codes"},"Status codes"),Object(o.b)("p",null,"If you, for example, expect a ",Object(o.b)("inlineCode",{parentName:"p"},"404")," response (which is traditionally an error response), you can set it as ",Object(o.b)("inlineCode",{parentName:"p"},"expectedStatusCodes")," to mark your site as up. By default, all 20x and 30x responses are as ",Object(o.b)("inlineCode",{parentName:"p"},"expectedStatusCodes"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"sites:\n  - name: Google\n    url: https://www.google.com\n    expectedStatusCodes:\n      - 200\n      - 201\n      - 404\n")),Object(o.b)("h4",{id:"maximum-response-time"},"Maximum response time"),Object(o.b)("p",null,'Upptime endpoints can be up, down, or degraded. By default, if an endpoint takes more than 30 seconds to respond, its performance is tracked as "degraded". You can customize the maximum response time:'),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"- name: Slow endpoint\n  url: https://example.com\n  maxResponseTime: 5000\n")),Object(o.b)("p",null,"In the above example, this endpoint will be measured as degraded if it takes more than 5 seconds to respond."),Object(o.b)("h4",{id:"self-signed-ssl-certificates"},"Self-signed SSL certificates"),Object(o.b)("p",null,"If you're using a self-signed SSL certificate, you can set the ",Object(o.b)("inlineCode",{parentName:"p"},"__dangerous__disable_verify_peer")," option to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," to skip verifying the certificate:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"- name: API endpoint\n  url: https://example.com/get-user/3\n  __dangerous__disable_verify_peer: true\n")),Object(o.b)("p",null,"If you don't want to check for certificate name mismatches, you can set the ",Object(o.b)("inlineCode",{parentName:"p"},"__dangerous__disable_verify_host")," option to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," to skip verifying the certificate:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"- name: API endpoint\n  url: https://example.com/get-user/3\n  __dangerous__disable_verify_host: true\n")),Object(o.b)("p",null,"Alternately, you can disable both of the above settings using ",Object(o.b)("inlineCode",{parentName:"p"},"__dangerous__insecure"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"- name: API endpoint\n  url: https://example.com/get-user/3\n  __dangerous__insecure: true\n")),Object(o.b)("h4",{id:"custom-status-detection"},"Custom status detection"),Object(o.b)("p",null,"In some cases, your endpoint may return a 200 response but you show the user an error message. This is not a recommended approach, but you can add custom strings to check for."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'sites:\n  - name: Custom down\n    url: https://example.com\n    __dangerous__body_down: "File not found"\n')),Object(o.b)("p",null,'In the above example, if the body HTML response includes the string "File not found", the site will be marked as "down". Similarly, you can use ',Object(o.b)("inlineCode",{parentName:"p"},"__dangerous__body_degraded"),' to mark the site as "degraded" instead.'),Object(o.b)("p",null,"In other cases your endpoint may return a 200 response with a success message in the body. You might want to check for a specific success message in the body:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'sites:\n  - name: Custom up\n    url: https://example.com/api/system/status\n    __dangerous__body_down_if_text_missing: \'"status":"UP"\'\n')),Object(o.b)("p",null,"In the above example, if the body HTML response does ",Object(o.b)("strong",{parentName:"p"},"not"),' include "status":"UP", the site will be marked as "down". Similarly, you can use ',Object(o.b)("inlineCode",{parentName:"p"},"__dangerous__body_degraded_if_text_missing"),' to mark the site as "degraded" instead.'),Object(o.b)("h3",{id:"notifications"},"Notifications"),Object(o.b)("p",null,"You can add services to send downtime notifications to, such as SMS, Slack, or email. For more information about notifications, visit the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/notifications"}),"Notifications docs")," page. You can directly configure the notifications in repository secrets (environment variables)."),Object(o.b)("h3",{id:"assignees"},"Assignees"),Object(o.b)("p",null,"You can add members of your team to be assigned to every downtime issue:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"assignees:\n  - AnandChowdhary\n  - CarloBadini\n")),Object(o.b)("p",null,"If you want particular users to be assigned per-site, you can add assignees under each entry in sites:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"sites:\n  - name: Google\n    url: https://www.google.com\n    assignees:\n      - AnandChowdhary\n")),Object(o.b)("h3",{id:"skip-delete-issues"},"Skip delete issues"),Object(o.b)("p",null,"Issues are automatically closed once they are resolved, however if they are open for less than 15 minutes they are deleted instead."),Object(o.b)("p",null,"You can disable this behaviour by setting the ",Object(o.b)("inlineCode",{parentName:"p"},"skipDeleteIssues")," key to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," in your configuration file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"skipDeleteIssues: true\n")),Object(o.b)("p",null,"If issues are deleted, they won't show up in the incident history."),Object(o.b)("h3",{id:"status-website"},"Status website"),Object(o.b)("h4",{id:"theme"},"Theme"),Object(o.b)("p",null,"You can select one of many themes available to customize your status website:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"status-website:\n  theme: light\n")),Object(o.b)("p",null,"Available themes are ",Object(o.b)("inlineCode",{parentName:"p"},"light"),", ",Object(o.b)("inlineCode",{parentName:"p"},"dark"),", ",Object(o.b)("inlineCode",{parentName:"p"},"night")," or ",Object(o.b)("inlineCode",{parentName:"p"},"ocean"),"."),Object(o.b)("p",null,"You can also write your own custom theme by creating a CSS file in the ",Object(o.b)("inlineCode",{parentName:"p"},"assets/")," directory of your Upptime repository. For example, if you create a file ",Object(o.b)("inlineCode",{parentName:"p"},"assets/my-custom-theme.css"),", you can use CSS variables to style your theme. To see a list of all available variables, see the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/upptime/status-page/blob/HEAD/static/themes/dark.css"}),Object(o.b)("inlineCode",{parentName:"a"},"dark.css")," theme"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),":root {\n  --body-background-color: #001716;\n  --body-text-color: #f0ffff;\n  --card-background-color: #002b29;\n  --nav-background-color: #002b29;\n  --nav-border-bottom-color: #015450;\n}\n/* . . . */\n")),Object(o.b)("p",null,"Then, this file will be available at ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://example.com/my-custom-theme.css"}),"https://example.com/my-custom-theme.css"),". All files from the ",Object(o.b)("inlineCode",{parentName:"p"},"assets")," directory are served as-is, so you can use this URL to specify your new theme using ",Object(o.b)("inlineCode",{parentName:"p"},"themeUrl"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"status-website:\n  themeUrl: https://example.com/my-custom-theme.css\n")),Object(o.b)("h4",{id:"branding"},"Branding"),Object(o.b)("p",null,"A static website with PWA is also generated, and you can customize the logo and name in the navbar:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"status-website:\n  name: Upptime\n  logoUrl: https://example.com/image.jpg\n")),Object(o.b)("h4",{id:"custom-domain"},"Custom domain"),Object(o.b)("p",null,"If you want to add a custom domain, you can add the cname key:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"status-website:\n  name: Upptime\n  logoUrl: https://example.com/image.jpg\n  cname: upptime.js.org # Custom CNAME\n")),Object(o.b)("p",null,"If you're not using a custom domain, you should add the base URL to support the default GitHub Pages URL."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'status-website:\n  baseUrl: /repo # where "repo" is your repository name\n  name: Your Status Website\n')),Object(o.b)("p",null,"Then, your status page may be hosted on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://user.github.io/repo/"}),"https://user.github.io/repo/"),", where ",Object(o.b)("inlineCode",{parentName:"p"},"user")," is your GitHub username and ",Object(o.b)("inlineCode",{parentName:"p"},"repo")," is your repository name."),Object(o.b)("h4",{id:"navbar-links"},"Navbar links"),Object(o.b)("p",null,"You can customize the navbar by adding or removing top-level navigation links."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"status-website:\n  navbar:\n    - title: Status\n      href: /\n    - title: GitHub\n      href: https://github.com/$OWNER/$REPO\n")),Object(o.b)("h4",{id:"intro-text"},"Intro text"),Object(o.b)("p",null,"Optionally, you can add some introductory text to the website. You can use Markdown:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'status-website:\n  introTitle: "**Upptime** is the open-source uptime monitor and status page, powered entirely by GitHub."\n  introMessage: This is a sample status page which uses **real-time** data from our [Github repository](https://github.com/koj-co/upptime). No server required \u2014 just GitHub Actions, Issues, and Pages.\n')),Object(o.b)("h4",{id:"custom-favicons"},"Custom favicons"),Object(o.b)("p",null,"You can add a custom favicon in both SVG and PNG formats:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"status-website:\n  favicon: https://example.com/favicon.png\n  faviconSvg: https://example.com/logo.svg\n")),Object(o.b)("h4",{id:"custom-html"},"Custom HTML"),Object(o.b)("p",null,"To add any custom HTML (unsanitized), you can use ",Object(o.b)("inlineCode",{parentName:"p"},"customHeadHtml")," and ",Object(o.b)("inlineCode",{parentName:"p"},"customBodyHtml"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'status-website:\n  customHeadHtml: "\x3c!-- Custom HTML to add in the <head> tag --\x3e"\n  customBodyHtml: "\x3c!-- Custom HTML to add at the beginning of <body> --\x3e"\n')),Object(o.b)("h4",{id:"custom-javascript"},"Custom JavaScript"),Object(o.b)("p",null,"You can add custom scripts:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"status-website:\n  scripts:\n    - src: https://example.com/script.js\n    - src: https://example.com/script-2.js\n      async: true\n")),Object(o.b)("p",null,"Or, directly add inline JS:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"status-website:\n  js: \"window.onload = function() { alert('Hello!') }\"\n")),Object(o.b)("h4",{id:"custom-css"},"Custom CSS"),Object(o.b)("p",null,"You can add custom stylesheets:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"status-website:\n  links:\n    - rel: stylesheet\n      href: https://example.com/custom-styles.css\n")),Object(o.b)("p",null,"Or, directly add inline CSS:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'status-website:\n  css: "body { opacity: 0.5 }"\n')),Object(o.b)("h4",{id:"custom-meta-tags"},"Custom meta tags"),Object(o.b)("p",null,"To add any custom meta tags, you can use a syntax similar to the ",Object(o.b)("inlineCode",{parentName:"p"},"links"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'status-website:\n  metaTags:\n    - name: "color-scheme"\n      content: "dark light"\n    - name: "robots"\n      content: "noindex"\n')),Object(o.b)("h4",{id:"custom-robotstxt-files"},"Custom robots.txt files"),Object(o.b)("p",null,"You might want to have custom search engine indexing rules:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'status-website:\n  robotsText: "User-agent: * \\n Disallow: /"\n')),Object(o.b)("h4",{id:"custom-api-base-url"},"Custom API base URL"),Object(o.b)("p",null,"By default, Upptime uses the official GitHub API to fetch data for your status page website. If you have a proxy API (perhaps using a personal access token with readonly access to your private repository), you can set the ",Object(o.b)("inlineCode",{parentName:"p"},"apiBaseUrl")," key under ",Object(o.b)("inlineCode",{parentName:"p"},"status-website"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"status-website:\n  apiBaseUrl: https://api.github.com\n")),Object(o.b)("h3",{id:"internationalization"},"Internationalization"),Object(o.b)("p",null,"Though our status page is in English, you can use any language with Upptime by supplying the required strings. The list of all required strings is available in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/upptime/status-page/blob/master/i18n.yml"}),Object(o.b)("inlineCode",{parentName:"a"},"upptime/status-page/i18n.yml")),", and you can add them under the i18n key in the configuration file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"i18n:\n  activeIncidents: Incidentes activos\n  allSystemsOperational: Todos los sistemas est\xe1n operativos\n  # ...\n")),Object(o.b)("p",null,"You can, for example, change the footer copyright text by changing the internationalization key for ",Object(o.b)("inlineCode",{parentName:"p"},"footer"),". These i18n keys are also used for your README.md file."),Object(o.b)("p",null,"Similarly, you can also localize the ",Object(o.b)("inlineCode",{parentName:"p"},"README.md")," file by adding these to the same ",Object(o.b)("inlineCode",{parentName:"p"},"i18n.yml")," file: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/upptime/upptime/discussions/161#discussioncomment-256389"}),"List of README.md strings"),"."),Object(o.b)("h3",{id:"repository-metadata"},"Repository metadata"),Object(o.b)("p",null,"If you've just set up your new repository and don't have repository metadata (like description, topics, and homepage), Upptime will update that for you. It will update the metadata as follows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Description:"),' "\ud83d\udcc8 Uptime monitor and status page for $TITLE, powered by @upptime", where $TITLE is the name of your GitHub organization or user'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Topics:"),' "uptime-monitor", "status-page", "upptime"'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Homepage:")," Link to your status website")),Object(o.b)("p",null,"You can add these configuration properties if you don't want these updates to occur:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"skipDescriptionUpdate: true\nskipTopicsUpdate: true\nskipHomepageUpdate: true\n")),Object(o.b)("h3",{id:"git-commit-options"},"Git commit options"),Object(o.b)("p",null,"Upptime commits to git history to keep a track of response times, and also commits graphs and README updates. You can change the commit messages for each of these actions:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'commitMessages:\n  readmeContent: ":pencil: Update summary in README [skip ci] [upptime]"\n  summaryJson: ":card_file_box: Update status summary [skip ci] [upptime]"\n  statusChange: "$EMOJI $SITE_NAME is $STATUS ($RESPONSE_CODE in $RESPONSE_TIME ms) [skip ci] [upptime]"\n  graphsUpdate: ":bento: Update graphs [skip ci] [upptime]"\n')),Object(o.b)("p",null,"By default, these commits are done by ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/upptime-bot"}),"Upptime Bot"),", but you can overwrite these commits to use your bot instead."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'commitMessages:\n  commitAuthorName: "Upptime Bot"\n  commitAuthorEmail: "upptime@koj.co"\n')),Object(o.b)("h3",{id:"ci-schedule"},"CI schedule"),Object(o.b)("p",null,"You can customize the schedule when Uptime workflows run by adding the ",Object(o.b)("inlineCode",{parentName:"p"},"workflowSchedule")," key in your configuration file. The syntax followed is that of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/cron"}),Object(o.b)("inlineCode",{parentName:"a"},"cron")),". The default values are like so:"),Object(o.b)("p",null,"Keep in mind that a scheduled GitHub Action cannot run faster than every 5 minutes."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'workflowSchedule:\n  graphs: "0 0 * * *"\n  responseTime: "0 23 * * *"\n  staticSite: "0 1 * * *"\n  summary: "0 0 * * *"\n  updateTemplate: "0 0 * * *"\n  updates: "0 3 * * *"\n  uptime: "*/5 * * * *"\n')),Object(o.b)("h3",{id:"self-hosted-runners"},"Self-hosted runners"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"As of now, the workflows CANNOT run on windows runner.")),Object(o.b)("p",null,"You may want to use a self-hosted runner instead of the publicly available GitHub runners in your project for more accurate uptime monitoring (ensuring scheduled workflows run on time) or to save build minutes. You can specify your self-hosted runner like so:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'runner: "[self-hosted, linux, ARM64]"\n')),Object(o.b)("h3",{id:"user-agent"},"User agent"),Object(o.b)("p",null,"Requests made to the GitHub API must include a valid User-Agent header (see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.github.com/en/rest/overview/resources-in-the-rest-api#user-agent-required"}),"User Agent required"),"). It is recommended to use your GitHub username here:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"user-agent: your-github-username\n")))}b.isMDXComponent=!0}}]);