import Chart  from "../../components/Charts/Chart";
import FeaturedInfo from "../../components/Featured/FeaturedInfo";
import "./Home.css";
import {data} from "../../dummydata";
import WidgetLg from "../../components/Widgetlg/WidgetLg";
import WidgetSm from "../../components/Widgetsm/WidgetSm";

const Home = () => {
    return (
        <div className="home">
           <FeaturedInfo />
           <Chart data={data} title="User Analytics" grid dataKey="Active User" />
           <div className="homewidgets"> 
               <WidgetSm />
               <WidgetLg />
           </div>
        </div>
    )
}

export default Home;
