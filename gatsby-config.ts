import type { GatsbyConfig } from "gatsby";
import path from "path";

const mapPagesUrls = {
  index: "/",
};

const config: GatsbyConfig = {
  siteMetadata: {
    title: `The Dark Between`,
    siteUrl: `http://midnightprioriem.github.io/the-dark-between/`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  pathPrefix: "/the-dark-between",
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: path.resolve("./src/layouts/DefaultLayout.tsx"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-obsidian`,
            options: {
              titleToURL: (title: string) => `./${title}`,
            },
          },
          "gatsby-remark-copy-linked-files",
          {
            resolve: path.resolve(`./plugins/gatsby-remark-hidden`),
          },
          {
            resolve: `gatsby-remark-images-anywhere`,
            options: {
              backgroundColor: `transparent`,
              createMarkup: (result) => {
                let classes = "";
                if (result.title) {
                  classes = `class="${result.title}"`;
                }
                let width = "";
                if (result.alt) {
                  width = `width="${result.alt.split("|")[1]}px"`;
                }
                return `<img src="${result.src}" srcSet="${result.srcSet}" ${classes} ${width}/>`;
              },
              maxWidth: 1500,
            },
          },
        ],
      },
    },
    "gatsby-plugin-catch-links",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/pages/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
        name: "pages",

        // Set the search engine to create the index. This is required.
        // The following engines are supported: flexsearch, lunr
        engine: "flexsearch",

        // Provide options to the engine. This is optional and only recommended
        // for advanced users.
        //
        // Note: Only the flexsearch engine supports options.
        engineOptions: {
          encode: "icase",
          tokenize: "full",
          resolution: 9,
          depth: 4,
          threshold: 1,
        },

        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: `
          {
            allMdx(filter: {frontmatter: {hide: {ne: true}}}) {
              nodes {
                id
                excerpt(pruneLength: 280)
                frontmatter {
                  title
                }
                rawBody
                slug
              }
            }
          }
        `,

        // Field used as the reference value for each document.
        // Default: 'id'.
        ref: "id",

        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        // Default: all fields
        index: ["title", "body"],

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        store: ["id", "path", "title", "excerpt"],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) =>
          data.allMdx.nodes.map((node) => {
            return {
              id: node.id,
              path: node.fileAbsolutePath,
              excerpt: node.excerpt,
              title: node.frontmatter.title,
              body: node.rawBody.split("!hidden")[0],
            };
          }),
      },
    },
  ],
};

export default config;
