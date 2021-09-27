import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./FeturedInfo.css";

const FeaturedInfo = () => {
    return (
        <div className="featured">
            <div className="featureditem">
                <span className="featuredtitle">Revanue</span>
                <div className="moneycontainer">
                    <span className="money">$2,415</span>
                    <span className="moneyrate">-11.4 <ArrowDownward   className="featuredicon negative"  /></span>
                </div>
                <span className="featuredsub">Compared to last month</span>
            </div> 
            <div className="featureditem">
                <span className="featuredtitle">Salse</span>
                <div className="moneycontainer">
                    <span className="money">$4,415</span>
                    <span className="moneyrate">-1.4 <ArrowDownward   className="featuredicon negative"/></span>
                </div>
                <span className="featuredsub">Compared to last month</span>
            </div> 
            <div className="featureditem">
                <span className="featuredtitle">Cost</span>
                <div className="moneycontainer">
                    <span className="money">$2,225</span>
                    <span className="moneyrate">-+2.4 <ArrowUpward   className="featuredicon harts"/></span>
                </div>
                <span className="featuredsub">Compared to last month</span>
            </div> 
        </div>
    )
}

export default FeaturedInfo
