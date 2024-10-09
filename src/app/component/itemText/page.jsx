export default function ItemText({item,itemCalories}){
    return(
        <div>
            <h3>{item}</h3>
            <sub>{itemCalories}</sub>
        </div>
    )
}