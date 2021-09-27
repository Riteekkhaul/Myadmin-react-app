import './Newproduct.css';

const Newproduct = () => {
    return (
        <div className="newproduct">
            <h1 className="addprotitle">New Product</h1>
                <form action="" className="addproform">
                    <div className="addproitem">
                        <label htmlFor="">Image</label>
                        <input type="file" id="file" style={{border:"none"}} />
                    </div>
                    <div className="addproitem">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Apple Airpod" />
                    </div>
                    <div className="addproitem">
                        <label htmlFor="">Stock</label>
                        <input type="text" placeholder="123" />
                    </div>
                    <div className="addproitem">
                        <label htmlFor="">Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                        <button className="addprobutton">Create</button>
                </form>
            </div>
    );
}

export default Newproduct
