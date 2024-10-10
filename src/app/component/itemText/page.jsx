export default function ItemText({item,itemCalories}){
    return(
        <section className="flex flex-col z-10 mt-12 py-6">
            <h3>{item}</h3>
            <sub className="flex justify-center">{itemCalories}</sub>
        </section>
    )
}