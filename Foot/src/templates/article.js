import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout' 
import Player from '../components/player';
import Team from '../components/team';
import Article from '../components/article';

const ArticleTemplate = ({ data }) => (
    <Layout>
        <Article article={data.strapiArticle}></Article>
        <ul>
            {data.strapiArticle.players.map(player => (
                <Player player={player} ></Player>
            ))}
            
            {data.strapiArticle.teams.map(team => (
                <Team team={team}></Team>
            ))}
        </ul>
    </Layout>
)

export default ArticleTemplate;

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: {eq: $id}) {
        title
        content
        image {
            childImageSharp {
                fluid(maxWidth: 700) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        user {
            id
            username
        }
        category {
            id
            name
        }
        players {
            id
            lastname
            firstname
            poste
        }
        teams {
            id
            name
        }
    }
  }
`