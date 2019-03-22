import { Link } from "gatsby"
import React from "react"
import Img from 'gatsby-image'

const Article = ({article}) => (
    <>
        <h1><Link to={`/categories/Category_${article.category.id}`}>{article.category.name}</Link> : {article.title}</h1>
        <p>by <Link to={`/authors/User_${article.user.id}`}>{article.user.username}</Link></p>
        <Img fluid={article.image.childImageSharp.fluid}/>
        <p>{article.content}</p>
    </>
)

export default Article;
