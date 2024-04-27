import Image from "next/image";
import dyk from "../../../../public/dyk.svg"
import Prevention from "../../../../public/prevent-img.svg"
import Quest from "../../../../public/quest.svg";

import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import * as React from "react"



function Feature () {
    return(
        <div className="">
            <Image src={dyk} className="w-100vw -mt-32" />

            <div className="flex justify-end">
                <span className="text-black md:text-[36px] text-[22px] md:mr-[15rem]">What can i do to prevent this ?</span>
            </div>
            <div className="md:ml-[41rem] max-w-[470px] mt-5">
                <span className="text-[13px]">
                    Your personalized path to prevention and wellness. Discover engaging quests, expert guidance, and a supportive community—all
                     aimed at empowering you to take control of your health journey. Join us in the fight against cancer and embark on a quest 
                     towards a healthier, happier you.</span>
            </div>

            <div className="ml-[15rem] -mt-[11.5rem]">
                <Image src={Prevention} alt="Prevention image" className="w-80 h-80" />
            </div>

            <div className="flex justify-start">
                <span className="text-black text-[36px] ml-[10rem]">What are Quests?</span>
            </div>
            <div className="ml-[10rem] max-w-[470px] mt-5">
                <span className="text-[13px]">
                Your personalized path to prevention and wellness. Discover engaging quests, expert guidance,
                 and a supportive community—all aimed at empowering you to take control of your health journey.
                  Join us in the fight against cancer and embark on a quest towards a healthier, happier you.</span>
            </div>

            <div className="ml-[46rem] -mt-[11.5rem]">
                <Image src={Quest} alt="Quest image" className="w-80 h-80" />
            </div>
           

  )
        </div>
        
    )
}

export default Feature;