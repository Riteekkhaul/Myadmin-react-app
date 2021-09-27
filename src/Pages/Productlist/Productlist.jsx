import './Productlist.css';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { productdata } from '../../dummydata';
import { Link } from 'react-router-dom';
import { DeleteOutline } from '@material-ui/icons';



const Productlist =() => {

      const [data, setData] = useState(productdata);

      const handledelete =(id)=>{
        
        setData(data.filter((item)=> item.id !== id));
    };
      const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'Product', headerName: 'Product', width: 200 ,
        renderCell:(params)=>{
            return(
               <div className="productlistuser">
                   <img src={params.row.avatar} alt="" />{params.row.Name}
               </div>
            )
        }
    },
        { field: 'stock', headerName: 'Stock', width: 150 },
        { field: 'status', headerName: 'Status', width: 130,},
        { field: 'price', headerName: 'Price', width: 190,},
        { field: 'action', headerName: 'Action', width: 150, 
        renderCell:(params)=>{
            return(
                <>
          <Link  to={"/productlist/"+params.row.id}><button className="edit">Edit</button></Link> 
                <DeleteOutline  className="delete" onClick={()=>handledelete(params.row.id)}  />
                </>
            )
        }},
    
    ];


    return (
        <div className="product">
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

export default Productlist;