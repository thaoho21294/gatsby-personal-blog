import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPost = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { hero_image, title, date, hero_image_alt },
      html,
    },
  } = data;
  const image = getImage(hero_image);

  return (
    <Layout pageTitle={title}>
      <p>Posted: {date}</p>
      <GatsbyImage image={image} alt={hero_image_alt} />
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = ({ data }) => (
  <Seo title={data.markdownRemark.frontmatter.title} />
);

export default BlogPost;
