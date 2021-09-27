import './Userlist.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import {rows} from "../../dummydata";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Userlist = () => {



    const [data, setData] = useState(rows);
  
    const handledelete=(id)=>{
                setData(data.filter((item)=>item.id !==id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'User', headerName: 'User', width: 150 ,
        renderCell:(params)=>{
            return(
               <div className="userlistuser">
                   <img src={params.row.avatar} alt="" />{params.row.UserName}
               </div>
            )
        }
    },
        { field: 'email', headerName: 'E-mail', width: 200 },
        { field: 'status', headerName: 'Status', width: 130,},
        { field: 'transaction', headerName: 'Transaction', width: 190,},
        { field: 'action', headerName: 'Action', width: 150, 
        renderCell:(params)=>{
            return(
                <>
          <Link  to={"/users/"+params.row.id}><button className="edit">Edit</button></Link> 
                <DeleteOutline  className="delete" onClick={()=>handledelete(params.row.id)}  />
                </>
            )
        }},
    
    ];

   
    return (
        <div className="userlist">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={9}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default Userlist
