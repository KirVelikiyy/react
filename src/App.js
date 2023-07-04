import { useState } from 'react';

export default function EditProfile() {
    const [firstName, setFirstName] = useState('Jane');
    const [lastName, setLastName] = useState('Jacob');
    const [isEdit, setIsEdit] = useState(false);

    function handleSubmitClick(e) {
        e.preventDefault();
        setIsEdit(!isEdit);
    }

    return (
        <form>
            <label>
                First name:{' '}
                {isEdit ?
                    <input
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    /> :
                    <b>{firstName}</b>
                }
            </label>
            <label>
                Last name:{' '}
                {isEdit ?
                    <input
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    /> :
                    <b>{lastName}</b>
                }
            </label>
            <button type="submit" onClick={handleSubmitClick}>
                {isEdit ?
                    "Save Profile" :
                    "Edit Profile"
                }
            </button>
            <p><i>Hello, {firstName} {lastName}!</i></p>
        </form>
    );
}
