import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const TeamTemplate = ({data}) => (
    <Layout>
        <h1>{data.strapiTeam.name} {data.strapiTeam.section} {data.strapiTeam.sexe}</h1>
    </Layout>
)
  
export default TeamTemplate

export const query = graphql`
  query TeamTemplate($id: String!) {
    strapiTeam(id: { eq: $id }) {
        id
        name
        sexe
        section
    }
  }
` 