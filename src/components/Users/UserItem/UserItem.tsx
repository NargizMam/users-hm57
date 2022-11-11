import React from 'react';
import {User} from "../../../types.d";


interface Props {
    user: User;
};

const UserItem: React.FC<Props> = ({user}) => {
    if(user.isActive){

    }
    return (
        <>
            <div className="card col-6" >
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
                    <p className="card-text">{user.role}</p>

                </div>
            </div>
        </>
    );
};

export default UserItem;