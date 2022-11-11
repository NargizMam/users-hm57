import React, {useState} from 'react';
import {User, UserMutation} from "../../types.d";
import './UserForm.css';
import {nanoid} from "nanoid";


interface Props {
    onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
    const [user, setUser] = useState<UserMutation>({
        name: '',
        email: '',
        isActive: false,
        role: ''
    });

    const onUserChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setUser(prev => ({...prev, [name]: value}));
    };

    const onUserChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(prev => ({...prev, isActive: e.target.checked}));
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            id: nanoid(),
            ...user,
        });
        setUser({
            name: '',
            email: '',
            isActive: false,
            role: 'Choose role'})
    };

    return (
        <form onSubmit={onFormSubmit} className="Form">
            <h4>Add new User <i className="bi bi-person-plus-fill px-5"></i></h4>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text"
                       id="name"
                       name="name"
                       className="form-control"
                       value={user.name}
                       onChange={onUserChange}
                       required
                />
            </div>
            <div className="form-group">
                <label htmlFor="name">Email</label>
                <input type="email"
                       id="email"
                       name="email"
                       className="form-control"
                       value={user.email}
                       onChange={onUserChange}
                       required

                />
            </div>
            <div className="form-check m-2">
                <input className="form-check-input" type="checkbox"
                       id="flexCheckChecked"
                       checked={user.isActive}
                       onChange={onUserChecked}
                />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Is Active
                    </label>
            </div>
            <div className="form-group">
                <div>
                    <select className="form-select" name="role" id="role"
                            required
                            onChange={onUserChange}
                    >
                        <option disabled  selected value="">Choose role</option>
                        <option>User</option>
                        <option>Editor</option>
                        <option>Admin</option>
                    </select>
                </div>
            </div>
            <button type="submit"
                    className="btn btn-warning m-3"
            >Create</button>
        </form>
    );
};

export default UserForm;