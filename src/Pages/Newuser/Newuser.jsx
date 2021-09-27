import './Newuser.css';

export default function Newuser() {
    return (
        <div className="newuser">
            <h1 className="icon">New User</h1>
            <form action="" className="form">
                <div className="item">
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="Allu arjun" />
                </div>
                <div className="item">
                    <label htmlFor="">Full Name</label>
                    <input type="text" placeholder="Allu arjun" />
                </div>
                <div className="item">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="alluarjun@gmail.com" />
                </div>
                <div className="item">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="password" />
                </div>
                <div className="item">
                    <label htmlFor="">Phone</label>
                    <input type="number" placeholder="+1 456 1326 45" />
                </div>
                <div className="item">
                    <label htmlFor="">Address</label>
                    <input type="text" placeholder="Mumbai | India" />
                </div>
                <div className="item">
                    <label htmlFor="">Gender</label>
                 <div className="gender">
                    <input type="radio"  name="gender"  id="male" value="male" />
                    <label htmlFor="male">Male</label>
                    <input type="radio"  name="gender"  id="female" value="female" />
                    <label htmlFor="female">Female</label>
                    <input type="radio"  name="gender"  id="other" value="others" />
                    <label htmlFor="other">Other</label>
                </div>       
                </div>
                <div className="item">
                    <label htmlFor="">Active</label>
                    <select name="active" id="active" className="select">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                </form>
                <button className="button">Create</button>
        </div>
    )
}
