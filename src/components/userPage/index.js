import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchSingleUser, selectSingleUser} from "../../reducers/singleUser";

function userPage(){
    const dispatch =useDispatch();
    const params = useParams()
    const { id } = useParams();


    const singleUser = useSelector(selectSingleUser)
    const user =singleUser.info;


    React.useEffect(() => {
        dispatch(fetchSingleUser(id));
    }, [dispatch, params]);

    const fullName = ()=>{
        return user.fName+" "+user.lName;
    }



    return(
        <>
            <div id="userPage">
                <h1>{fullName()}</h1>
                <h2>{user.username}</h2>
                <p>{user.bio}</p>
            </div>
        </>
    )
}

export default userPage;