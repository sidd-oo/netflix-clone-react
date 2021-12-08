import React, {useState, useEffect} from 'react';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import './Home.scss';
import '../../App.scss';
import axios from 'axios';

const Home = ({type}) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
       const getRandomLists = async () => {
            try{
                const res = await fetch( `http://localhost:8800/api/lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
                {
                    headers: {
                            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjA4YmEyOWM0MmE5ODYxNTNmNDczYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODk2NTczMCwiZXhwIjoxNjM5Mzk3NzMwfQ.IY5DuACyQVQKCk6sji9y74N3WQ9HzevcACZSEzqSZPk"
                    }
                });

                // const res = await axios.get(
                //     `http://localhost:8800/api/lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
                //     {
                //         headers: {
                //             token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjA4YmEyOWM0MmE5ODYxNTNmNDczYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODk2NTczMCwiZXhwIjoxNjM5Mzk3NzMwfQ.IY5DuACyQVQKCk6sji9y74N3WQ9HzevcACZSEzqSZPk"
                //         },
                //     }
                // );
                console.log(res);
                // setLists(res.data);
            }catch(err){
                console.log(err);
            }
       };
       getRandomLists();
    },[type, genre]);
    return (
        <div className = "home">
            <Navbar/>
            <Featured type={type}/>
            <List/>
            <List/>
            <List/>
            <List/>
        </div>
    )
}

export default Home;
