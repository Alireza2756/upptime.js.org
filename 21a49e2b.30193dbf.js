(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{66:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return O})),a.d(t,"default",(function(){return j}));var b=a(2),n=a(6),r=(a(0),a(96)),l={title:"Notifications"},c={unversionedId:"notifications",id:"notifications",isDocsHomePage:!1,title:"Notifications",description:"Using notifications, you can alert your team when an endpoint goes down or experiences degraded performance. To add notifications, you have to add environment variables as GitHub repository secrets (Settings -> Secrets -> Actions) and add Environment variable as your Secret name and Value in environment variable as value in secret (see Creating and storing encrypted secrets).",source:"@site/docs/notifications.md",slug:"/notifications",permalink:"/docs/notifications",editUrl:"https://github.com/upptime/upptime.js.org/blob/master/docs/notifications.md",version:"current",sidebar:"sidebar",previous:{title:"Triggers",permalink:"/docs/triggers"},next:{title:"Badges",permalink:"/docs/badges"}},O=[{value:"Strategy",id:"strategy",children:[]},{value:"Providers",id:"providers",children:[{value:"Slack",id:"slack",children:[]},{value:"Telegram",id:"telegram",children:[]},{value:"Discord",id:"discord",children:[]},{value:"Zulip",id:"zulip",children:[]},{value:"Microsoft Teams",id:"microsoft-teams",children:[]},{value:"Email",id:"email",children:[]},{value:"SMS",id:"sms",children:[]}]}],i={rightToc:O};function j(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(b.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Using notifications, you can alert your team when an endpoint goes down or experiences degraded performance. To add notifications, you have to add environment variables as ",Object(r.b)("strong",{parentName:"p"},"GitHub repository secrets")," (",Object(r.b)("em",{parentName:"p"},"Settings")," -> ",Object(r.b)("em",{parentName:"p"},"Secrets")," -> ",Object(r.b)("em",{parentName:"p"},"Actions"),") and add ",Object(r.b)("em",{parentName:"p"},"Environment variable")," as your ",Object(r.b)("em",{parentName:"p"},"Secret name")," and ",Object(r.b)("em",{parentName:"p"},"Value")," in environment variable as ",Object(r.b)("em",{parentName:"p"},"value")," in secret (see ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://docs.github.com/en/free-pro-team@latest/actions/reference/encrypted-secrets"}),"Creating and storing encrypted secrets"),")."),Object(r.b)("p",null,"Every time an endpoint goes down, a notification with the following text is sent:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\ud83d\udfe5 Example Site (",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://example.koj.co"}),"https://example.koj.co"),") is ",Object(r.b)("strong",{parentName:"p"},"down"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/upptime/upptime/issues/4"}),"https://github.com/upptime/upptime/issues/4"))),Object(r.b)("p",null,"If it experiences degraded performance, a notification with the following text is sent:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\ud83d\udfe8 Example Site (",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://example.koj.co"}),"https://example.koj.co"),") has ",Object(r.b)("strong",{parentName:"p"},"degraded performance"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/upptime/upptime/issues/4"}),"https://github.com/upptime/upptime/issues/4"))),Object(r.b)("p",null,"When it comes back up, another notification is sent:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\ud83d\udfe9 Example Site is back up.")),Object(r.b)("h2",{id:"strategy"},"Strategy"),Object(r.b)("p",null,"If you have more than one configurations of each provider (say multiple email configurations, both SMTP and SES), you can choose the strategy. For each notification provider (Slack, email, etc.), you can specify the strategy using the ",Object(r.b)("inlineCode",{parentName:"p"},"NOTIFICATION_{PROVIDER}_STRATEGY")," environment variable, where ",Object(r.b)("inlineCode",{parentName:"p"},"{PROVIDER}")," is the constant-case service name, for example ",Object(r.b)("inlineCode",{parentName:"p"},"NOTIFICATION_SLACK_STRATEGY"),". The strategy can be any one of:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Value"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"fallback")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"If one provider returns an error, try the next")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"roundrobin")," (default)"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Use every provider in turns")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"no-fallback")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Deactivates fallback strategy")))),Object(r.b)("p",null,"More information is available on the ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/notifme/notifme-sdk#multi-provider-strategies"}),"Multi-provider strategies")," page in the documentation."),Object(r.b)("h2",{id:"providers"},"Providers"),Object(r.b)("p",null,"For each notification type (Slack, email, etc.), you need to first enable it by setting the ",Object(r.b)("inlineCode",{parentName:"p"},"NOTIFICATION_{PROVIDER}")," to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", where ",Object(r.b)("inlineCode",{parentName:"p"},"{PROVIDER}")," is the constant-case service name, for example ",Object(r.b)("inlineCode",{parentName:"p"},"NOTIFICATION_SLACK"),". Each notification type also requires additional environment variables. See the examples below."),Object(r.b)("h3",{id:"slack"},"Slack"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Environment variable"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_SLACK")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Set to ",Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_SLACK_WEBHOOK")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Set to ",Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_SLACK_WEBHOOK_URL")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Slack webhook URL")))),Object(r.b)("p",null,"To create a Slack webhook URL, see the article ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://slack.com/intl/en-in/help/articles/115005265063-Incoming-webhooks-for-Slack"}),"Incoming webhooks for Slack")," on the Slack website."),Object(r.b)("h3",{id:"telegram"},"Telegram"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Environment variable"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_TELEGRAM")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Set to ",Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_TELEGRAM_BOT_KEY")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Your bot key")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_TELEGRAM_CHAT_ID")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Your chat ID")))),Object(r.b)("p",null,"To create a Telegram bot key, see the documentation for ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://core.telegram.org/bots#6-botfather"}),"Botfather")," on the Telegram Support website."),Object(r.b)("h3",{id:"discord"},"Discord"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Environment variable"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_DISCORD")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Set to ",Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_DISCORD_WEBHOOK")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Set to ",Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_DISCORD_WEBHOOK_URL")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Discord webhook URL")))),Object(r.b)("p",null,"To create a Discord webhook URL, see the article ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks"}),"Intro to Webhooks")," on the Discord Support website."),Object(r.b)("h3",{id:"zulip"},"Zulip"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Environment variable"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_ZULIP_MESSAGE_URL")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Zulip Message API URL")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_ZULIP_API_EMAIL")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Email of the Zulip bot")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_ZULIP_API_KEY")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"API Key of the Zulip bot")))),Object(r.b)("p",null,"To create a Zulip Incoming Webhook bot, see the article ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://zulip.com/help/add-a-bot-or-integration"}),"Add a bot or integration")," in the Zulip docs.\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"NOTIFICATION_ZULIP_MESSAGE_URL")," should include the ",Object(r.b)("inlineCode",{parentName:"p"},"type"),", ",Object(r.b)("inlineCode",{parentName:"p"},"to")," and ",Object(r.b)("inlineCode",{parentName:"p"},"topic")," query params and would look something like this:\n",Object(r.b)("inlineCode",{parentName:"p"},"https://domain.zulipchat.com/api/v1/messages?type=stream&to=general&topic=Upptime%20notifications"),"."),Object(r.b)("h3",{id:"microsoft-teams"},"Microsoft Teams"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Environment variable"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_TEAMS")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Set to ",Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_TEAMS_WEBHOOK_URL")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Teams webhook URL")))),Object(r.b)("p",null,"To create a Microsoft Teams webhook URL, see the article ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook"}),"Create Incoming Webhooks")," on the Microsoft Learn website."),Object(r.b)("h3",{id:"email"},"Email"),Object(r.b)("p",null,"To send an email, you can use SMTP or a hosted service such as AWS SES, Sendgrid, Sparkpost, or Mailgun."),Object(r.b)("p",null,"All services require you to specify the email address from and to:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Environment variable"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_EMAIL")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Set to ",Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_EMAIL_FROM")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),'"From" email address')),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_EMAIL_TO")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),'"To" email address')))),Object(r.b)("h4",{id:"sendgrid"},"Sendgrid"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Environment variable"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_EMAIL_SENDGRID")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Set to ",Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_EMAIL_SENDGRID_API_KEY")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Sendgrid API key")))),Object(r.b)("h4",{id:"aws-ses"},"AWS SES"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Environment variable"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_EMAIL_SES")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Set to ",Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_EMAIL_SES_REGION")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"AWS region")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_EMAIL_SES_ACCESS_KEY_ID")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"AWS access key ID")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_EMAIL_SES_SECRET_ACCESS_KEY")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"AWS secret access key")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_EMAIL_SES_SESSION_TOKEN")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"AWS session token")))),Object(r.b)("h4",{id:"sparkpost"},"Sparkpost"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Environment variable"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_EMAIL_SPARKPOST")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Set to ",Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_EMAIL_SPARKPOST_API_KEY")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Sparkpost API key")))),Object(r.b)("h4",{id:"mailgun"},"Mailgun"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Environment variable"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_EMAIL_MAILGUN")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Set to ",Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_EMAIL_MAILGUN_API_KEY")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Mailgun API key")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_EMAIL_MAILGUN_DOMAIN_NAME")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Mailgun domain name")))),Object(r.b)("h4",{id:"smtp"},"SMTP"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Environment variable"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_EMAIL_SMTP")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Set to ",Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_EMAIL_SMTP_PORT")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"SMTP Port")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_EMAIL_SMTP_HOST")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"SMTP Host")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_EMAIL_SMTP_USERNAME")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"SMTP Username")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_EMAIL_SMTP_PASSWORD")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"SMTP Password")))),Object(r.b)("h3",{id:"sms"},"SMS"),Object(r.b)("p",null,"To send a text message, you can any one of several services: Callr, Clickatell, Infobip, Nexmo, OVH, Plivo, Twilio, or 46elks. You'll have to create an account at the service of your choice and provide authentication information as specified below."),Object(r.b)("p",null,"All services require you to specify the phone number from and to:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Environment variable"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_SMS_FROM")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),'"From" phone number')),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_SMS_TO")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),'"To" phone number')))),Object(r.b)("h4",{id:"46elks"},"46elks"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Environment variable"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_SMS_46ELKS")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Set to ",Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_SMS_46ELKS_API_USERNAME")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"46elks username")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_SMS_46ELKS_API_PASSWORD")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"46elks password")))),Object(r.b)("h4",{id:"callr"},"Callr"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Environment variable"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_SMS_CALLR")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Set to ",Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_SMS_CALLR_LOGIN")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Callr login")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_SMS_CALLR_PASSWORD")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Callr password")))),Object(r.b)("h4",{id:"clickatell"},"Clickatell"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Environment variable"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_SMS_CLICKATELL")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Set to ",Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_SMS_CLICKATELL_API_KEY")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Clickatell API key")))),Object(r.b)("h4",{id:"infobip"},"Infobip"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Environment variable"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_SMS_INFOBIP")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Set to ",Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_SMS_INFOBIP_USERNAME")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Infobip username")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_SMS_INFOBIP_PASSWORD")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Infobip password")))),Object(r.b)("h4",{id:"nexmo"},"Nexmo"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Environment variable"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_SMS_NEXMO")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Set to ",Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_SMS_NEXMO_API_KEY")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Nexmo API key")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_SMS_NEXMO_API_SECRET")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Nexmo API secret")))),Object(r.b)("h4",{id:"ovh"},"OVH"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Environment variable"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_SMS_OVH")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Set to ",Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_SMS_OVH_APP_KEY")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OVH app key")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_SMS_OVH_APP_SECRET")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OVH app secret")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_SMS_OVH_CONSUMER_KEY")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OVH consumer key")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_SMS_OVH_ACCOUNT")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OVH account")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_SMS_OVH_HOST")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OVH host")))),Object(r.b)("h4",{id:"plivo"},"Plivo"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Environment variable"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_SMS_PLIVO")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Set to ",Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_SMS_PLIVO_AUTH_ID")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Plivo auth ID")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_SMS_PLIVO_AUTH_TOKEN")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Plivo auth token")))),Object(r.b)("h4",{id:"twilio"},"Twilio"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Environment variable"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_SMS_TWILIO")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Set to ",Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_SMS_TWILIO_ACCOUNT_SID")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Twilio account SID")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NOTIFICATION_SMS_TWILIO_AUTH_TOKEN")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Twilio auth token")))))}j.isMDXComponent=!0}}]);