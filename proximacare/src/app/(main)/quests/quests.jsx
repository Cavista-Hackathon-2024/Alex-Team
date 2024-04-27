// import Quest from "../../../../public/quest.svg"
import Image from "next/image"
import Quest1 from "../../../../public/explore-quest1.svg"
import Quest2 from "../../../../public/explore-quest2.svg"
import Quest3 from "../../../../public/explore-quest3.svg"
import Quest4 from "../../../../public/explore-quest4.svg"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
function Quest () {
    return(
        <div className=" pb-20  mb-30">
       
    <span className="font-bold text-[18px] ml-[10rem]">Explore Quests</span>
<div className="ml-[10rem]  flex flex-wrap gap-5">
     {/* Quest 1 */}
    <Card className="w-[300px] shadow-md border border-[#5C4A6D]">
      <CardHeader>
        <Image src={Quest1} alt="first quest" className="w-50 h-50" />
      </CardHeader>
      <CardContent>
    
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
                <div  className="flex space-x-8">
                    <div>
                    <span className="font-bold text-[16px] text-[#5C4A6D]">Invite family and <br /> friends</span>
                    </div>
                    <div>
                    <button className="bg-[#5C4A6D] text-[#F7DF02] text-[12px] py-1 px-1 rounded-md">+20XP</button>
                    </div>
                    </div>
              <span className="text-[12px] text-[#5C4A6D]">Engaging in physical activities such as walking, running and HIIT cardiovascular
                 workouts have been proven...<span className="font-bold">Read more</span></span>
            </div>
          </div>

      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="bg-[#5C4A6D] text-white px-3 py-3">Start Quest</Button>
      </CardFooter>
    </Card>

 {/* Quest 2 */}
    <Card className="w-[300px] shadow-md border border-[#5C4A6D]">
      <CardHeader>
        <Image src={Quest2} alt="second quest"/>
      </CardHeader>
      <CardContent>
       
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
                <div  className="flex space-x-8">
                    
                <div>
                <span className="font-bold text-[16px] text-[#5C4A6D]">Breast Cancer self <br />examination</span>
                </div>
                <div>
                <button className="bg-[#5C4A6D] text-[#F7DF02] text-[12px] py-1 px-1 rounded-md">+20XP</button>
                </div>
                </div>
              
              <span className="text-[12px] text-[#5C4A6D]">Engaging in physical activities such as walking, running and HIIT cardiovascular
                 workouts have been proven...<span className="font-bold">Read more</span></span>
            </div>
          </div>
      
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="bg-[#5C4A6D] text-white px-3 py-3">Start Quest</Button>
      </CardFooter>
    </Card>

 {/* Quest 3 */}
    <Card className="w-[300px] shadow-md border border-[#5C4A6D]">
      <CardHeader>
        <Image src={Quest3} alt="third quest" />
      </CardHeader>
      <CardContent>
       
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
                <div  className="flex space-x-8">
                    
                <div>
                <span className="font-bold text-[16px] text-[#5C4A6D]">Schedule screening with a doctor</span>
                </div>
                <div>
                <button className="bg-[#5C4A6D] text-[#F7DF02] text-[12px] py-1 px-1 rounded-md">+20XP</button>
                </div>
                </div>
              
              <span className="text-[12px] text-[#5C4A6D]">Engaging in physical activities such as walking, running and HIIT cardiovascular
                 workouts have been proven...<span className="font-bold">Read more</span></span>
            </div>
          </div>
      
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="bg-[#5C4A6D] text-white px-3 py-3">Start Quest</Button>
      </CardFooter>
    </Card>

    {/* Quest 4 */}
    <Card className="w-[300px] shadow-md border border-[#5C4A6D]">
      <CardHeader>
        <Image src={Quest4} alt="third quest" />
      </CardHeader>
      <CardContent>
       
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
                <div  className="flex space-x-8">
                    
                <div>
                <span className="font-bold text-[16px] text-[#5C4A6D]">Schedule screening with a doctor</span>
                </div>
                <div>
                <button className="bg-[#5C4A6D] text-[#F7DF02] text-[12px] py-1 px-1 rounded-md">+20XP</button>
                </div>
                </div>
              
              <span className="text-[12px] text-[#5C4A6D]">Engaging in physical activities such as walking, running and HIIT cardiovascular
                 workouts have been proven...<span className="font-bold">Read more</span></span>
            </div>
          </div>
      
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="bg-[#5C4A6D] text-white px-3 py-3">Start Quest</Button>
      </CardFooter>
    </Card>
</div>
        </div>

   )
}
export default Quest;