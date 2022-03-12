import AppNav from "../components/organisms/Nav";
import FlexWrapper from "../components/molecules/FlexWrapper";

const NotFound = () => {

    return (
        <div>
            <AppNav version="1.0"/>
               
            <FlexWrapper>
                <h1>404 Page not found.</h1>
            </FlexWrapper>
            
        </div>
    )
}

export default NotFound;