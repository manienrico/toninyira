export default function ItemFootnote({footnoteHead,footnoteHead1,footnoteText,footnoteText1}){
    return(
        <section className="flex m-2">
            <sub className="flex justify-evenly">
                <h5>{footnoteHead}</h5>
                <h5>{footnoteHead1}</h5>
            </sub>
            <div className="">
                <div>{footnoteText}</div>
                <div>{footnoteText1}</div>
            </div>
        </section>
    )
}