import ModuleWrapper from "@/components/moduleWrapper/ModuleWrapper";

const Experience = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            <div className="flex flex-col">
                <ModuleWrapper
                    name=".experience"
                >
                    <>
                        <span className="text-2xl font-primary text-blue-200 pl-10 pb-5 justify-start">👩‍🏫 B.Sc. in Software Engineering</span>
                    </>
                </ModuleWrapper>
            </div>
        </div>
    )
}

export default Experience;