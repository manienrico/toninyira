import ItemFootnote from "../itemFootnote/page";
import ItemText from "../itemText/page";

import Image from "next/image";

export default function Card({altern}){
    return(
        <div className="flex items-center flex-col bg-white rounded-2xl relative shadow-xl">
            <div className="flex flex-col">
                <section className="flex flex-col absolute bottom-20 " >
                    <Image 
                        src="/images/png1.png"
                        width={100}
                        height={100}
                        alt={altern}
                        // className="shadow rounded-full "
                    />
                </section>
                <ItemText item="QQQQQQQQQ" itemCalories="qqqqq" />
            </div>
            <hr className="absolute border-t-4 border-blue-500 my-4" />
            <ItemFootnote footnoteHead="fffffffffffff" footnoteHead1="zzzzzzz" footnoteText="yyyyy" footnoteText1="xxxxxx" />
        </div>
    )
}