import { Link } from "gatsby"
import React from "react"

const Player = ({player}) => (
    <li key={player.id}>
      <h2>
        <Link to={`/players/Player_${player.id}`}>{player.firstname} {player.lastname}</Link>
      </h2>
      <p>{player.poste}</p>
    </li>
)

export default Player;