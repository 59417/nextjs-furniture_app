import { useState } from 'react';
import commons from './FormCommon.module.css'; 
import classes from './FormA.module.css';


function FormA(props) {

    const clientData = props.client;
    const allQuotation = props.quotations;

    const [isForm1, setIsForm1] = useState(true);
    function handleClick() {
        setIsForm1(!isForm1)
    };

    return (
        <div className={commons.container}>
            <form action="/api/formA" method="post" id={classes.form1}>
                <table>
                    <thead>
                        <tr>
                            <td colSpan="8" align="center">
                                <h1>&#8544;.&nbsp;客戶基本資料&nbsp;
                                    <span><i className="fa-solid fa-caret-up" onClick={() => handleClick()} style={isForm1 ? null : {display: 'none'}}></i></span>
                                    <span><i className="fa-solid fa-caret-down" onClick={() => handleClick()} style={isForm1 ? {display: 'none'} : null}></i></span>
                                </h1>
                            </td>
                        </tr>
                    </thead>
                    <tbody style={isForm1 ? null : {display: 'none'}}>
                        <tr>
                            <td><label htmlFor="client">屋主名稱</label></td>
                            <td><input type="text" id="client" name="client" /*required*/ defaultValue={clientData.client}/></td>
                            <td><label htmlFor="phone">聯絡電話</label></td>
                            <td><input type="text" id="phone" name="phone" /*required*/ /></td>
                            <td><label htmlFor="project">房屋案名</label></td>
                            <td colSpan="3"><input type="text" id="project" name="project" /*required*/ /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="type">報價類別</label></td>
                            <td><input type="text" id="type" name="type" /*required*/ /></td>
                            <td><label htmlFor="date">報價日期</label></td>
                            <td><input type="text" id="date" name="date" /*required*/ /></td>
                            <td><label htmlFor="total">總噸數</label></td>
                            <td colSpan="3"><input type="text" id="total" name="total" /*required*/ /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="designer">設計師</label></td>
                            <td><input type="text" id="designer" name="designer" /*required*/ /></td>
                            <td><label htmlFor="designerphone">設技師電話</label></td>
                            <td><input type="text" id="designerphone" name="designerphone" /*required*/ /></td>
                            <td><label htmlFor="assistant">設計師助理</label></td>
                            <td><input type="text" id="assistant" name="assistant" /*required*/ /></td>
                            <td><label htmlFor="assistantphone">設技師助理電話</label></td>
                            <td><input type="text" id="assistantphone" name="assistantphone" /*required*/ /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="address">工地地址</label></td>
                            <td colSpan="5"><input type="text" id="address" name="address" /*required*/ /></td>
                            <td align="center"><button type="reset">清除重填</button></td>
                            <td align="center"><button type="submit">儲存更新</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default FormA;