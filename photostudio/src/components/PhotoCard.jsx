import "./PhotoCard.css";
function PhotoCard(props){
    return(
        <div
            className="card">
            <h2>{props.name}</h2>
            <p>location:{props.location}</p>
            <h3>{props.price}</h3>
        </div>
    );
}
export default PhotoCard;