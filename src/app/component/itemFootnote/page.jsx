export default function ItemFootnote({footnoteHead,footnoteHead1,footnoteText,footnoteText1}){
    return(
        <section className="flex flex-col justify-around">
            <sub className="flex flex-row justify-between">
                <h5>{footnoteHead}</h5>
                <h5>{footnoteHead1}</h5>
            </sub>
            <div className="flex flex-row justify-between ">
                <div>{footnoteText}</div>
                <div>{footnoteText1}</div>
            </div>
        </section>
    )
}