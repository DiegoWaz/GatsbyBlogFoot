import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'

const PlayerTemplate = ({ data }) => (
    <Layout>
        <Img fixed={data.strapiPlayer.image.childImageSharp.fixed}/>
      <h1>{data.strapiPlayer.firstname} {data.strapiPlayer.lastname}</h1>
    </Layout>
)
  
export default PlayerTemplate

export const query = graphql`
  query PlayerTemplate($id: String!) {
    strapiPlayer(id: { eq: $id }) {
        id
        lastname
        firstname
        image {
            childImageSharp {
                fixed(width: 200, height: 125) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
  }
` 