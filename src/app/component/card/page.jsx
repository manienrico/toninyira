import ItemFootnote from "../itemFootnote/page";
import ItemText from "../itemText/page";

export default function Card({pic}){
    return(
        <div className="flex items-center flex-col bg-white rounded-2xl ">
            <div className="flex justify-center items-center flex-col">
                <section>{pic}</section>
                <ItemText item="QQQQQQQQQ" itemCalories="qqqqq" />
            </div>
            <ItemFootnote footnoteHead="fffffffffffff" footnoteHead1="zzzzzzz" footnoteText1="xxxxxxxxxxxxx" footnoteText="yyyyyyyyy" />
        </div>
    )
}