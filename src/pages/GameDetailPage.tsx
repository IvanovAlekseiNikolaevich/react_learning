import {useParams} from "react-router-dom";

const GameDetailPage = () => {
    const params = useParams()

  return (
      <div>game id is {params.id}</div>
  )
}

export default GameDetailPage