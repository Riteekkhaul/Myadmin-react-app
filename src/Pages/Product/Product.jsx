import { Link } from 'react-router-dom';
import Chart from '../../components/Charts/Chart';
import './Product.css';
import { productinfo } from '../../dummydata';
import { Publish } from '@material-ui/icons';
import img from '../../images/img.png';


const Product = () => {
    return (
        <div className="product">
            <div className="titlecon">
                <h1 className="title">Product</h1>
                <Link to="/newproduct">
                <button className="addbutton">Create</button>
                </Link>
            </div>
            <div className="protop">
                <div className="protopleft">
                    <Chart data={productinfo} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="protopright">
                  <div className="infotop">
                    <img src={img} alt="Photo" />
                    <span className="name">Apple Airpod</span>
                  </div>
                  <div className="protopbottom">
                
                    <div className="infoitem">
                        <span className="key">id:</span>
                        <span className="value">15</span>
                    </div>
                    <div className="infoitem">
                        <span className="key">sales :</span>
                        <span className="value">122</span>
                    </div>
                    <div className="infoitem">
                        <span className="key">active :</span>
                        <span className="value">yes</span>
                    </div>
                    <div className="infoitem">
                        <span className="key">in stock :</span>
                        <span className="value">no</span>
                    </div>
            
                  </div>
                </div>  
            </div>
            <div className="probottom">
                <form action="" className="proform">
                    <div className="proformleft">
                        <label htmlFor="">Product Name</label>
                        <input type="text" placeholder="Apple Airpod" />
                        <label htmlFor="">In Stock</label>
                        <select name="instock" id="idstock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label htmlFor="">Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="proformright">
                        <div className="proupload">
                            <img src={img} alt="" />
                            <label htmlFor="file"><Publish /></label>
                            <input type="file" id="file" style={{display:"none"}} />
                        </div>
                        <button className="probutton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product
