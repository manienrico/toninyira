import ItemFootnote from "../itemFootnote/page";
import ItemText from "../itemText/page";

export default function Card(){
    return(
        <div>
            <div>
                <section>pic</section>
                <ItemText />
            </div>
            <ItemFootnote />
        </div>
    )
}