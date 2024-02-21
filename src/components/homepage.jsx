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
                  bookname: item.bookname.trim(),
                  author: item.author.trim(),
                  genre: item.genre.trim(),
                //   publishdate: new Date(item.publishdate).toLocaleDateString()
                  publishdate: item.publishdate.trim()
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

    const columns = [
        { field: 'id' , headerName: 'ID', width: 250 },
        { field: 'bookname', headerName: 'Bookname', width: 250 },
        { field: 'author', headerName: 'Author', width: 350 },
        { field: 'genre', headerName: 'Genre', width: 150 },
        { field: 'publishdate', headerName: 'Publishdate', width: 150},
      ];
    
      return (
        <div style={tableContainerStyle}>
          {/* <DataGrid rows={data} columns={columns} pageSize={5} pagination style={tableStyle} /> */}
          <DataGrid rows={data} columns={columns} pageSize={10} pagination rowsPerPageOptions={[10, 25, 50, 100]} />

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