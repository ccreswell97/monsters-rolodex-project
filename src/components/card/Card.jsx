import './Card.css'

export const Card = (props) => {
    console.log("Card: ", props)
    return (
        <div className="card-container">
            <img alt='monster-picture' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}></img>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}