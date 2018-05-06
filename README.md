# what-im-reading
Serverless Backend for a geo-distributed headless CMS PoC

## Supported Headless-CMSs

### Prismic

[Prismic](https://prismic.io/docs/rest-api/basics/introduction-to-the-content-query-api) is a headless CMS with a very easy to use Content Model and a really nice Content Creation experience. It has the best UX from all CMSs I've tried so far. Its content model does a very good job separating format from content. 

It has support for customizable Content Models with the fullest set of content elements: UUID, Title, Rich Text, Images, Content Relationships, Links (which include Phone numbers, smart!), Date picker, Timestamp, Color picker, Numbers, Key text (for search), Select dropdown lists, Embeds (videos, songs, twitts, Geo Points, Repeatable Items (groups of repeatable fields of all these) and Slices.

#### APIs

Prismic only has a [Content API](https://prismic.io/docs/rest-api/basics/introduction-to-the-content-query-api), with helpers to preview content, serialize content as HTML and resolve links. The SDK is available for PHP, NodeJS, React, Ruby, Java, .NET and the RESTful API.

#### Webhooks

Prismic's Webhooks is very simple. It will ping you when there's a content update. It has no other information. But with the help of the SDK you can query for items that changed recently. Webhooks were added recently, they're still on the works.


### Kentico

[Kentico](https://kenticocloud.com) is an advanced headless CMS, with a clear [roadmap](https://kenticocloud.com/roadmap). It has support for customizable Workflows, Revisions, Commenting, Sitemaps, Categories, Relationship between Content items, Tracking and Analytics.

It has support for Text, Rich text, Numbers, Multiple-choice (radio and checkmarks), Date-time and Group of content items. It also has Guidelines (to help you guide your Editors), Taxonomy and URL slugs that can be generated from another item (like the title).

It adds "Snippets" so you can have groups of content that you can reuse on your models.

#### APIs
On the Development side it has a [five APIs](https://developer.kenticocloud.com/v1/reference):

- **CONTENT DELIVERY**: To get and preview content. It has SDKs  for PHP, JavaScript (including Node, TypeScript and browser support), Java, .NET and the RESTful API.

- **CONTENT MANAGEMET**: Write access to create, manage or import content from another CMS (Paid feature).

- **MIGRATION API**: Read-only API to get data out of Kentico into another CMS.

- **TRACKING AND PERSONALIZATION**: Gives you the means to have user segments, track users, personalize content and do experiments.

#### Webhooks

Kentico's Webhooks give you information about the item that changed. It's triggered everytime you publish content items and with the help of the SDK you can get all the data and related content.


### Contentful

:soon:
