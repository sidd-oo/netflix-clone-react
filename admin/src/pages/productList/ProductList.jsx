import React, { useContext} from "react";
import "./ProductList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { MovieContext } from "../../context/moviesContext/MoviesContext";
import { deleteMovie, getMovies } from "../../context/moviesContext/apiCalls";
import { useEffect } from "react";

const ProductList = () => {
  const { movies, dispatch } = useContext(MovieContext);

  useEffect(()=>{
    getMovies(dispatch)
  },[dispatch])

  console.log(movies);

  const handleDelete = (id) => {
    deleteMovie(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "movie",
      headerName: "Movie",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img src={params.row.image} alt="" className="productListImg" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "year", headerName: "Year", width: 120 },
    { field: "limit", headerName: "Limit", width: 120 },
    { field: "isSeries", headerName: "isSeries", width: 120 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={{pathname:"/product/" + params.row._id, movie: params.row}}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => {
                handleDelete(params.row._id);
              }}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        disableSelectionOnClick
        rows={movies}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId = {(r)=> r._id}
      />
    </div>
  );
};

export default ProductList;
