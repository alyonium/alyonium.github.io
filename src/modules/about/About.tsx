import ModuleWrapper from "@/components/moduleWrapper/ModuleWrapper";
import {getYears} from "@/utils/getYears";
import {BIRTHDAY, START_WORK} from "@/const/const";

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
           <div className="flex flex-col">
               <ModuleWrapper
                   name=".about"
               >
                   <>
                       <span className="text-2xl font-primary text-blue-200 pl-10 pb-5 justify-start">😊 Alena Stovpets</span>
                       <span className="text-2xl font-primary text-blue-200 pl-10 pb-5 justify-start">🎂 {getYears(BIRTHDAY)}  years old</span>
                       <span className="text-2xl font-primary text-blue-200 pl-10 pb-5 justify-start">💙️ frontend </span>
                       <span className="text-2xl font-primary text-blue-200 pl-10 pb-5 justify-start">👩‍🏫 B.Sc. in Software Engineering</span>
                       <span className="text-2xl font-primary text-blue-200 pl-10 pb-5 justify-start">👩‍💻 {getYears(START_WORK)}  years of experience</span>
                   </>
               </ModuleWrapper>
           </div>
        </div>
    )
}

export default About;