import { Link } from "gatsby"
import React from "react"

const Team = ({team}) => (
    <li key={team.id}>
        <h2>
            <Link to={`/teams/Team_${team.id}`}>{team.name}</Link>
        </h2>
    </li>
)

export default Team;
