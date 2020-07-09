import React, {Fragment} from 'react'
import './table.css'

const Table = ({data, title}) => {

    const reformatTitle = (title) => {
        return title && (title[0].toUpperCase()+title.slice(1)).split('_').join(' ')
    };

    return (
        <Fragment>
            <h2>{title}</h2>
            <table>
                <tbody>
                {
                    data && data.columns && <tr>
                        {
                            data.columns.map((item, index) => (
                                <th key={index}>{ reformatTitle(item) }</th>
                            ))
                        }
                    </tr>
                }
                {
                    data && data.map((row, index) => (
                        <tr key={index}>
                            {
                                data.columns && data.columns.map((col, index) => (<td key={index}> { row[col] }</td>))
                            }
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </Fragment>
    )
};

export default Table;