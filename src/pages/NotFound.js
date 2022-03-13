import AppNav from "../components/organisms/Nav";
import { StyledCenterWithFlexBox } from "../components/molecules/Center";

const NotFound = () => {

    return (
        <div>
            <AppNav version="1.0"/>
               
            <StyledCenterWithFlexBox>
                <h1>404 Page not found.</h1>
            </StyledCenterWithFlexBox>
            
        </div>
    )
}

export default NotFound;