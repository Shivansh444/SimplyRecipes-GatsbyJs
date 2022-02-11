import React from 'react';
import {graphql} from 'gatsby'
//page graph ql query 
const Testing = ({data}) => {
    const author = data.site.info.author
  return <div>
      <h2>author: {author}</h2>
  </div>;
};

export const data = graphql`
{
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          name
          age
        }
        person {
          name
          age
        }
      }
    }
  }
` 
export default Testing;
