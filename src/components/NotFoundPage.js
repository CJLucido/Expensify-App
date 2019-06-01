import React from "react";
import {Link} from "react-router-dom";

//anchor tags should be/couldbe used for links that go outside of webpage or app because cant take advantage of clientside rendering anyway
const NotFoundPage = () => (
    <div>404! - <Link to="/">Go Home</Link> 
    </div>
);

export default NotFoundPage;