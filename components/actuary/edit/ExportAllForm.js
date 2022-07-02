import Link from 'next/link';
import { useState } from 'react';
import classes from './ExportAllForm.module.css'

function ExportAllForm(props) {

    const clientId = Object.keys(props.roomQuotations)[0];

    const quoData = props.allfurniture.map(obj => 
        Object.assign({}, Object.values(props.roomQuotations)[0][obj.room_quo_id-1], obj)
    );
    // [...Array(N)].map((v, i) => from + i * step);
    const nullData = [...Array(15-quoData.length)].map((e, i) => {
        const id = quoData.length + i + 1;
        return ( {room_quo_id: id, room: "-", furnitures: []} );
    });
    const all = quoData.concat(nullData)

    const [isForm7, setIsForm7] = useState(true);
    function handleClick() {
        setIsForm7(!isForm7)
    };

    return (
        <div className={classes.container}>
            <form action="/api/loginform" method="post" id={classes.form1}>
                <table>
                    <thead>
                        <tr>
                            <td colSpan="16" align="center">
                                <h1 htmlFor="username">&#8548;.&nbsp;輸出總估價單
                                    <span><i className="fa-solid fa-caret-up" onClick={() => handleClick()} style={isForm7 ? null : {display: 'none'}}></i></span>
                                    <span><i className="fa-solid fa-caret-down" onClick={() => handleClick()} style={isForm7 ? {display: 'none'} : null}></i></span>
                                </h1>
                            </td>
                        </tr>
                    </thead>
                    <tbody style={isForm7 ? null : {display: 'none'}}>
                        <tr style={{letterSpacing: '1rem', fontWeight: 'bold'}}>
                            <td colSpan="16">估價單區域總數:{quoData.length}</td>
                        </tr>
                        <tr>
                            <td>各單<br/>區域</td>
                            {all.map(obj => {
                                return (
                                    <td key={obj.room_quo_id}>{obj.room}</td>
                                )
                            })}
                        </tr>
                        <tr>
                            <td>項次<br/>總數</td>
                            {all.map(obj => {
                                return (
                                    <td key={obj.room_quo_id}>{obj.furnitures.length !== 0 ? obj.furnitures.length : '-'}</td>
                                )
                            })}
                        </tr>
                    </tbody>
                    <tfoot style={isForm7 ? null : {display: 'none'}}>
                        <tr>
                            <td align="center" colSpan="4">
                                <Link href={`/actuarial-valuate/${clientId}/export-quotation/individual/woobetter`} passHref>
                                    <a target="_blank" rel="noopener noreferrer">
                                        {/* <button type="button">窩百態估價單&nbsp;<i className="fa-solid fa-arrow-up-right-from-square" /></button> */}
                                        <button type="button">估價單A&nbsp;<i className="fa-solid fa-arrow-up-right-from-square" /></button>
                                    </a>
                                </Link>
                            </td>
                            <td align="center" colSpan="4">
                                <Link href={`/actuarial-valuate/${clientId}/export-quotation/all-room/woobetter`} passHref>
                                    <a target="_blank" rel="noopener noreferrer">
                                        {/* <button type="button">窩百態總估價單&nbsp;<i className="fa-solid fa-arrow-up-right-from-square" /></button> */}
                                        <button type="button">總估價單A&nbsp;<i className="fa-solid fa-arrow-up-right-from-square" /></button>
                                    </a>
                                </Link>
                                
                            </td>
                            <td align="center" colSpan="4">
                                <Link href={`/actuarial-valuate/${clientId}/export-quotation/individual/fuchu`} passHref>
                                    <a target="_blank" rel="noopener noreferrer">
                                        {/* <button type="button">富廚估價單&nbsp;<i className="fa-solid fa-arrow-up-right-from-square" /></button> */}
                                        <button type="button">估價單B&nbsp;<i className="fa-solid fa-arrow-up-right-from-square" /></button>
                                    </a>
                                </Link>
                            </td>
                            <td align="center" colSpan="4">
                                <Link href={`/actuarial-valuate/${clientId}/export-quotation/all-room/fuchu`} passHref>
                                    <a target="_blank" rel="noopener noreferrer">
                                        {/* <button type="button">富廚總估價單&nbsp;<i className="fa-solid fa-arrow-up-right-from-square" /></button> */}
                                        <button type="button">總估價單B&nbsp;<i className="fa-solid fa-arrow-up-right-from-square" /></button>
                                    </a>
                                </Link>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </form>
        </div>
    )
};

export default ExportAllForm;