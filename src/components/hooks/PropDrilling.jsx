export const PropDrilling = () => {
    return(
        
        <div className={`p-2 h-lvh font-display tracking-wider flex flex-col 
            justify-center items-center bg-gray-900 text-white`}>
            <h1> component A</h1>
            <ChilComponent data="React js" />
        </div>
        
    );
};

const ChilComponent = (props) => {
    return (
        <>
            <h1>hello component B</h1>
            <GrandChild data={props.data}/>
        </>
    );
};

const GrandChild = function(props) {
    return(
        <>
        <h1>hello component C</h1>
        <GrandGrandChild data={props.data}/>
        </>
    );
};

const GrandGrandChild = (props)=> {
    return(
        <>
        <h1>hello I love {props.data}</h1>
        </>
    )
}