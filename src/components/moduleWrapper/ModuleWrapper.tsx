const ModuleWrapper = ({children, name}: any) => {
    return (<>
        <span className="text-5xl font-primary heading-text-shadow-colored text-sky-200 pb-10 justify-start">{name} &#123;</span>

        {children}

        <span className="text-5xl font-primary heading-text-shadow-colored text-sky-200 pt-5 justify-end">&#125;</span>
    </>)
}

export default ModuleWrapper