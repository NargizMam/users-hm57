import React, {useEffect} from 'react';
import {User} from "../../../types.d";
import './UserItem.css'

interface Props {
    user: User;
}

const UserItem: React.FC<Props> = ({user}) => {


    return (
        <>
            <div className="card col-7 m-2"  >
                <div className="card-body">
                    <div className={user.isActive ? 'IsActive' : '' }>
                        <h5 className="card-title" id='card' >{user.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
                        <p className={user.role === 'Admin' ? 'text-primary' : 'card-text'}>{user.role}</p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default UserItem;