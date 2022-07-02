import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import Select from 'react-select';
import commons from './FormCommon.module.css'; 
import classes from './FormD.module.css';
import FormDPage from './FormDPage';
import FormDChild from './FormDChild';


// const pages0 = [
//     {'quatation': '01', 'room': '玄關'},
//     {'quatation': '02', 'room': '臥室'},
//     {'quatation': '03', 'room': '廚房'},
//     {'quatation': '04', 'room': '客廳'},
//     {'quatation': '05', 'room': '陽台'},
//     {'quatation': '06', 'room': '書房'},
//     {'quatation': '07', 'room': '玄關'},
//     {'quatation': '08', 'room': '臥室'},
//     {'quatation': '09', 'room': '廚房'},
//     {'quatation': '10', 'room': '客廳'},
//     {'quatation': '11', 'room': '陽台'},
//     {'quatation': '12', 'room': '書房'},
//     {'quatation': '13', 'room': '客廳'},
//     {'quatation': '14', 'room': '陽台'},
//     {'quatation': '15', 'room': '書房'}
// ];

// const pages = pages0.slice(0,9);



function FormD(props) {

    const [isFresh, setIsFresh] = useState(true);

    function handleChangeRoom() {
        setValue('furniture_control', null);
        console.log('handleChangeRoom - FormD', roomData);
        setRoomData(roomData);
        if (!isFresh) { setIsFresh(true); };
    };

    const targetRoomQuo = props.targetRoomQuo;
    // { room_quo_id: 1, furnitures: [ { furnitureId: '01', room: '餐桌' }, {...} * n ] }

    const furnitures = targetRoomQuo.furnitures;
    const furnitureOps = furnitures.map(element => { return {value: element.furnitureId, label: element.furnitureId+element.room, item: element.room} });
    const [currentFurn, setCurrentFurn] = useState(furnitureOps[0]);

    const customStyles = {
        indicatorsContainer: (styles) => ({ ...styles, cursor: 'pointer' }),
        valueContainer: (styles) => ({ ...styles, padding: 0 }), 
        input: (styles) => ({ ...styles, padding: 0, margin: 0 }), 
    };

    const [isForm4, setIsForm4] = useState(true);
    function handleClick(no) {
        setIsForm4(!isForm4)
    };

    const { control, register, handleSubmit, reset, getValues, setValue } = useForm({
        defaultValues: {
            furniture_control: null
        }
    });

    const onSubmit = (data) => { 
        console.log(data);
    };

    const roomQuotations = Object.values(props.roomQuotations)[0];
    // [ { room_quo_id: 1, room: '客房', date: '2001/01', discount: 0.11 }, {...}, {...} ]
    const roomData = roomQuotations.find(obj => obj.room_quo_id === targetRoomQuo.room_quo_id); 
    roomData.furniture = currentFurn.item;
    roomData.furn_label = currentFurn.label;
    roomData.furn_id = currentFurn.value;
    const [childRoomData, setRoomData] = useState(roomData);

    useEffect(() => {
        console.log('first render roomData', roomData);
    },[roomData]);

    return (
        <div className={commons.container}>
             <form onSubmit={handleSubmit(onSubmit)} id={classes.form4}>
                <table>
                    <thead>
                        <tr>
                            <td colSpan="8" align="center">
                                <h1>&#8547;.&nbsp;編輯項次&nbsp;
                                    <span><i className="fa-solid fa-caret-up" onClick={() => handleClick(4)} style={isForm4 ? null : {display: 'none'}}></i></span>
                                    <span><i className="fa-solid fa-caret-down" onClick={() => handleClick(4)} style={isForm4 ? {display: 'none'} : null}></i></span>
                                </h1>
                            </td>
                        </tr>
                    </thead>
                    <tbody style={isForm4 ? null : {display: 'none'}}>
                        <tr>
                            <td>切換估價單</td>
                            <td colSpan="3">
                                <FormDPage handleChangeRoom={handleChangeRoom} roomQuotations={props.roomQuotations} targetRoomQuo={targetRoomQuo}/>
                            </td>
                            <td>切換編輯項次</td>
                            <td>
                                <Controller
                                    control={control}
                                    name="furniture_control"
                                    rules={{required:true}}
                                    render={({ field: { value, ref, name, onChange } }) => (
                                        <Select 
                                            inputRef={ref}
                                            closeMenuOnSelect={true}
                                            options={furnitureOps} 
                                            value={value!==null ? furnitureOps.find(ele => ele.label === value) : null}
                                            onChange={changeValue => {
                                                onChange(changeValue.label);
                                                setCurrentFurn(changeValue);
                                                console.log('onChange', roomData);
                                                setIsFresh(false);
                                            }}
                                            instanceId="furniture_select"
                                            styles={customStyles}
                                            placeholder="請選擇"
                                        />
                                    )}
                                />
                            </td>
                        </tr>
                        <tr style={{height: '112px'}}>
                            <td>填完必需欄位後<br/>請點選取得數據</td>
                            <td align="center">
                                <button type="submit" disabled={isFresh ? true : false} style={isFresh ? {backgroundColor: 'silver'} : null}>
                                    取得數據
                                </button>
                            </td>
                            <td>若有修改請儲存</td>
                            <td align="center"><button type="submit">儲存更新</button></td>
                            <td>刪除當前項次</td>
                            <td align="center"><button type="submit" style={{height: '4rem'}}>刪除項次<br/>- {isFresh ? '- -' : currentFurn.label} -</button></td>
                        </tr>
                    </tbody>
                    <tfoot style={isForm4 ? null : {display: 'none'}}>
                        <tr style={isFresh ? {display: 'none'} : null}>
                            <td colSpan="8">
                                <FormDChild roomData={roomData} />
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </form> 
        </div>
    );
};

export default FormD;