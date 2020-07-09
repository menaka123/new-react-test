import React, {useState, useEffect} from 'react'
import { csv } from 'd3'
import Table from "../utils/Table";

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        csv('./users.csv').then(res => (setData(res)))
    }, []);

    return (
        <div>
            <h3>React test</h3>
            <Table
                title={'Users table'}
                data={data}
            />
        </div>
    )
};

export default Home;