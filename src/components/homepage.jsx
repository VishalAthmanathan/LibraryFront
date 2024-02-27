import react, {useState,useEffect} from "react";
import { DataGrid } from '@mui/x-data-grid';
import Header from "./header";
import axios from 'axios';

function Table(){
  const tableContainerStyle = {
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%'
  };

    
    const [data, setData] = useState([]);
    const tableStyle = { width: '100%' };
    useEffect(()=>{
        const fetchdata= async () =>{
            try {
                console.log('Before request');
                const response = await axios.get('/getBooks');
                console.log('After request');
                console.log(response.data);
                const transformedData = response.data.map(item => ({
                  id: item.id.toString(),
                  bookname: item.bookname,
                  author: item.author,
                  genre: item.genre,
                //   publishdate: new Date(item.publishdate).toLocaleDateString()
                  publishdate: item.publishdate
                }));
                setData(transformedData);
                console.log(data);
              } catch (error) {
                console.error('Error fetching data:', error);
              }
        };
        fetchdata();
    },[])

    useEffect(() => {
      console.log(data);
    }, [data]);

    function Button(props) {
      const handleBooking = async(id) => {
        const res = axios.post('/deleteItem',{
          id : id
        });
        console.log(res);
        window.location.reload();
      }
      
      return (
        <>
            <button onClick={() => handleBooking(props.value.id)}>Delete</button>
  
        </>
      );
    }

    const columns = [
        { field: 'id' , headerName: 'ID', width: 250 },
        { field: 'bookname', headerName: 'Bookname', width: 250 },
        { field: 'author', headerName: 'Author', width: 350 },
        { field: 'genre', headerName: 'Genre', width: 150 },
        { field: 'publishdate', headerName: 'Publishdate', width: 150},
        {
          field: 'deleteButton',
          headerName: 'Action',
          renderCell: (cellValues) => <Button value={cellValues} variant="danger" >Delete</Button>,
          disableClickEventBubbling: true,
          width: 100,
          filterable: false,
        },
      ];
    
      return (
        <div style={tableContainerStyle}>
          {/* <DataGrid rows={data} columns={columns} pageSize={5} pagination style={tableStyle} /> */}
          <DataGrid rows={data} columns={columns} initialState={{...data.initialState, pagination :{paginationModel :{pageSize :10}},}} pageSizeOptions={[5,10,25]} />

        </div>
      );
}


function Homepage() {
    return(
        <div>
            <Header />
            <Table />
        </div>
    )
}

export default Homepage;