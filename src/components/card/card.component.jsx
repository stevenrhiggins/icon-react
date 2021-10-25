import './card.styles.css';

export const Card = props => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="Monsters"/>
        <h1>{props.monster.name}</h1>
        <p><strong>{props.monster.email}</strong></p>
    </div>
)