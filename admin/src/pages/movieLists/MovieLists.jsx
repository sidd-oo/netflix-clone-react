import React, { useContext } from "react";
import "./MovieLists.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { deleteList, getLists } from "../../context/listsContext/apiCalls";
import { ListsContext } from "../../context/listsContext/ListContext";

const MovieLists = () => {
  const { lists, dispatch } = useContext(ListsContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteList(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "title", headerName: "Title", width: 150},
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "type", headerName: "Type", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
              <Link to={{pathname:"/list/" + params.row._id}} state={{list: params.row}}>
              <button className="movieListsEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="movieListsDelete"
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
    <div className="movieLists">
      <DataGrid
        disableSelectionOnClick
        rows={lists}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
};

export default MovieLists;
