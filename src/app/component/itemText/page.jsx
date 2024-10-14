export default function ItemText({item,itemCalories}){
    return(
        <section className="flex flex-col justify-center items-center mt-10 py-4">
            <h3 className="justify-center ">{item}</h3>
            <sub className="flex justify-center">{itemCalories}</sub>
        </section>
    )
}