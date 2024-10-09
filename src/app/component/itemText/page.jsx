export default function ItemText({item,itemCalories}){
    return(
        <section>
            <h3>{item}</h3>
            <sub>{itemCalories}</sub>
        </section>
    )
}