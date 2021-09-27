
import './WidgetLg.css';

const WidgetLg = () => {

    const button =({type}) =>{
        return( <button className={"lgbutton " + type}>{type}</button> );
    };
    return (
        <div className="widgetlg">
            <h3 className="lgtitle">Latest Transactions</h3>
            <table className="lgtable">
                <tr className="lgtr">
                    <th className="lgth">Customer</th>
                    <th className="lgth">Date</th>
                    <th className="lgth">Amount</th>
                    <th className="lgth">Status</th>
                </tr>
                <tr className="lgtr">
                    <td className="lguser">
                        <img src="AA.jpg"/>
                        <span className="lgname">Allu Arjun</span>
                    </td>
                    <td className="lgdate">21 Sept 2021</td>
                    <td className="lgamount">$122.00</td>
                    <td className="lgstatus"> <button type="Approved">Approved</button> </td>
                </tr>
                <tr className="lgtr">
                    <td className="lguser">
                        <img src="AA.jpg"/>
                        <span className="lgname">Allu Arjun</span>
                    </td>
                    <td className="lgdate">21 Sept 2021</td>
                    <td className="lgamount">$122.00</td>
                    <td className="lgstatus"><button type="Decline">Decline</button></td>
                </tr>
                <tr className="lgtr">
                    <td className="lguser">
                        <img src="AA.jpg"/>
                        <span className="lgname">Allu Arjun</span>
                    </td>
                    <td className="lgdate">21 Sept 2021</td>
                    <td className="lgamount">$122.00</td>
                    <td className="lgstatus"><button type="Pending" >Pending</button> </td>
                </tr>
                <tr className="lgtr">
                    <td className="lguser">
                        <img src="AA.jpg"/>
                        <span className="lgname">Allu Arjun</span>
                    </td>
                    <td className="lgdate">21 Sept 2021</td>
                    <td className="lgamount">$122.00</td>
                    <td className="lgstatus"><button type="Approved">Approved</button></td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg;
