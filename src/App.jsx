import playerData from "/src/playerData.js"
import { useState } from "react"

function BaseballCard(props) {
  const [showPicture, setShowPicture] = useState(true)

  function toggleCard() {
    setShowPicture(!showPicture)
  }

  if (showPicture) {
    return (
      <div className="card" onClick={toggleCard}>
        <h2>{props.name}</h2>
        <img src={props.imgUrl} />
      </div>
    );
  } else {
    const statsDisplay = []
    for (const stat in props.stats) {
      statsDisplay.push(<p>{stat}: {props.stats[stat]}</p>)
    }
    return (
      <div className="card" onClick={toggleCard}>
      <h2>{props.name}</h2>
      <p>Team: {props.team}</p>
      <p>Position: {props.position}</p>
      {statsDisplay}
    </div>
  )
}
}

function App() {
  const cards = playerData.map((el, idx) => {
    return <BaseballCard 
              name={el.name}
              team={el.team}
              position={el.position}
              stats={el.stats}
              imgUrl={el.imgUrl}
              key={el.cardId} />
  })

  return cards;
}

export default App;
