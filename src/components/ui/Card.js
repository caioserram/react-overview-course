import classes from './Card.module.css'

function Card (props) {
    // props.children refers to the element inside a element call, as a element "injection"
    return <div className={classes.card}>{props.children}</div>
}

export default Card;