import ItemFootnote from "../itemFootnote/page";
import ItemText from "../itemText/page";

import Image from "next/image";

export default function Card({altern}){
    return(
        <div className="flex items-center flex-col bg-white rounded-2xl relative shadow-xl p-1.5 max-w-72">
            <div className="flex flex-col my-1 items-center">
                <section className="flex flex-col absolute mb-4 mt--5" >
                    <Image 
                        src="/images/png1.png"
                        width={100}
                        height={100}
                        alt={altern}
                        // className="justify-start  "
                    />
                </section>
                <ItemText item="Lorem ipsum dolor sit amet, consectetuer" itemCalories="Lorem ipsum dolor sit" />
                {/* <hr className="absolute border-t border-gray-300 my-6" /> */}
            </div>
            
            <ItemFootnote footnoteHead="Head 1" footnoteHead1="Head 11" footnoteText="Lorem ipsum dolor sit amet," footnoteText1="Lorem ipsum dolor" />
        </div>
    )
}