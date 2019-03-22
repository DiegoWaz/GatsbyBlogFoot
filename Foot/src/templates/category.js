import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const CategoryTemplate = ({ data }) => (
    <Layout>
      <h1>{data.strapiCategory.name}</h1>
      <h2>{data.strapiCategory.description}</h2>
      <ul>
        {data.strapiCategory.articles.map(article => (
          <li key={article.id}>
            <h2>
              <Link to={`/Article_${article.id}`}>{article.title}</Link>
            </h2>
          </li>
        ))}
    </ul>
    </Layout>
)
  
export default CategoryTemplate

export const query = graphql`
  query CategoryTemplate($id: String!) {
    strapiCategory(id: { eq: $id }) {
        id
        name
        description
        articles {
            id
            title
            content
        }
    }
  }
` 