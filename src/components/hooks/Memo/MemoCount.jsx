import { memo, useRef } from "react";

export const Count = memo(function() {
    const renderCount = useRef(0);
    console.log(renderCount);
    console.log("Greeting was rendered at", new Date().toLocaleTimeString());
    
    return(
        <div>
            <h1>`child component render {renderCount.current++} time(s)`</h1>
        </div>
    );
});