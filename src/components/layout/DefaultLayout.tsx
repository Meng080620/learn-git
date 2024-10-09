import React from "react";
import "./style.css"

interface DefaultLayoutProps {
    children: React.ReactNode
}

const DefaultLayout: React.FC<DefaultLayoutProps> = (props) =>{

    const {children} = props;
    return(
        <div className="container">
            {/* {props.children} */}
            {children}
        </div>
    )
}

export default DefaultLayout;