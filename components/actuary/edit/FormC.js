import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import Select from 'react-select';
import commons from './FormCommon.module.css'; 
import classes from './FormC.module.css';


const roomOps = [
    { value: 1, label: '玄關', name: 'room' },
    { value: 2, label: '客廳', name: 'room' },
    { value: 3, label: '臥室', name: 'room' },
    { value: 4, label: '廚房', name: 'room' }
];

const furnitureOps = [
    { value: 1, label: '書櫃' },
    { value: 2, label: '衣櫥' },
    { value: 3, label: '系統櫃' },
    { value: 4, label: '中島' }
];


function FormC(props) {

    const roomId = props.targetRoomQuo.room_quo_id;
    const createdRoomQuos = Object.values(props.roomQuotations)[0];
    // [{room_quo_id: 1, room: '客房', date: '2001/01', discount: 0.11}}, {...}, {...}]

    const currentRoomQuo = createdRoomQuos.find(obj => 
        obj.room_quo_id === roomId
    );
    // {room_quo_id: 1, room: '客房', date: '2001/01', discount: 0.11}

    const [quoData, setQuoData] = useState(currentRoomQuo);

    const customStyles = {
        indicatorsContainer: (styles) => ({ ...styles, cursor: 'pointer' }),
        valueContainer: (styles) => ({ ...styles, padding: 0 }), 
        input: (styles) => ({ ...styles, padding: 0, margin: 0 }), 
    };

    const [isForm3, setIsForm3] = useState(true);
    function handleEditClick() {
        setIsForm3(!isForm3)
    };

    const [currentRoomQuos, setCurrentRoomQuos] = useState(props.targetRoomQuo.furnitures.length);

    const [isEdit, setIsEdit] = useState(
        { room_edit: false, discount_edit: false }
    );
    function handleBtnClick(obj) {
        const myObj = Object.assign({}, isEdit, obj);
        setIsEdit(myObj);
        reset({
            ...getValues(),
            room_control: getValues('room_control'),
            discount: getValues('discount'),
        });

        const objKey = Object.keys(obj)[0];
        const k1 = objKey.includes('room') ? 'room_control' : 'discount';  // controller k:v
        const k2 = objKey.includes('room') ? 'room' : 'discount';  // stateData k:v
        setQuoData(prevData => {
            return {
                ...prevData,
                [k2]: getValues(k1)
            }
        });
    };

    const { control, register, handleSubmit, reset, getValues } = useForm({
        defaultValues: {
            quotationId: quoData.room_quo_id,
            room_control: quoData.room,
            discount: quoData.discount,
        }
    });

    const onSubmit = (data) => { 
        setCurrentRoomQuos(currentRoomQuos+1)
        reset({
            ...getValues(),
            discount: getValues('discount'),
            furniture_control: null,
        });
    };

    function getRoomSelect() {
        return (
            <div>
                <Controller
                    control={control}
                    name="room_control"
                    rules={{required:true}}
                    render={({ field: { value, ref, name, onChange } }) => (
                        <Select 
                            inputRef={ref}
                            closeMenuOnSelect={true}
                            options={roomOps} 
                            value={value!==null ? roomOps.find(ele => ele.value === value) : null}
                            onChange={changeValue => {
                                onChange(changeValue.label);
                            }}
                            instanceId="room_select"
                            styles={customStyles}
                            placeholder="請選擇"
                        />
                    )}
                />
            </div>
        )
    };
    

    return (
        <div className={commons.container}>
             <form id={classes.form3} onSubmit={handleSubmit(onSubmit)}>
                <table>
                    <thead>
                        <tr>
                            <td colSpan="6" align="center">
                                <h1>&#8546;.&nbsp;估價單項次(至多30項)&nbsp;
                                    <span><i className="fa-solid fa-caret-up" onClick={() => handleEditClick()} style={isForm3 ? null : {display: 'none'}}></i></span>
                                    <span><i className="fa-solid fa-caret-down" onClick={() => handleEditClick()} style={isForm3 ? {display: 'none'} : null}></i></span>
                                </h1>
                            </td>
                        </tr>
                    </thead>
                    <tbody style={isForm3 ? null : {display: 'none'}}>
                        <tr style={{height: '112px'}}>
                            <td>當前估價單號</td>
                            <td>{currentRoomQuo.room_quo_id}</td>
                            <td>當前區域</td>
                            <td style={{padding: '1rem', textAlign: 'center'}}>
                                { isEdit.room_edit ? getRoomSelect() : quoData.room }
                                <button 
                                    type="button" 
                                    style={isEdit.room_edit ? {display: 'none'} : {marginLeft: '1.5rem'}} 
                                    onClick={() => handleBtnClick({room_edit:true})}
                                >
                                    修改
                                </button>
                                <button 
                                    type="button" 
                                    style={isEdit.room_edit ? {marginTop: '0.5rem', backgroundColor: 'rgb(255, 224, 22)', color: 'rgb(54, 47, 0)'} : {display: 'none'}} 
                                    onClick={() => handleBtnClick({room_edit:false})}
                                >
                                    更新
                                </button>
                            </td>
                            <td>當前估價單折數</td>
                            <td style={{padding: '1rem'}}>
                                { isEdit.discount_edit ? 
                                    <input {...register("discount", { required: true })} type='number' style={{width: '60px'}}/> : 
                                    quoData.discount }
                                <button 
                                    type="button" 
                                    style={isEdit.discount_edit ? {display: 'none'} : {marginLeft: '1.5rem'}} 
                                    onClick={() => handleBtnClick({discount_edit:true})}
                                >
                                    修改
                                </button>
                                <button 
                                    type="button" 
                                    style={isEdit.discount_edit ? {marginLeft: '0.5rem', backgroundColor: 'rgb(255, 224, 22)', color: 'rgb(54, 47, 0)'} : {display: 'none'}} 
                                    onClick={() => handleBtnClick({discount_edit:false})}
                                >
                                    更新
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>新增施作項目</td>
                            <td colSpan="2">
                                <Controller
                                    control={control}
                                    name="furniture_control"
                                    rules={{required:true}}
                                    render={({ field: { value, ref, name, onChange } }) => (
                                        <Select 
                                            inputRef={ref}
                                            closeMenuOnSelect={true}
                                            options={furnitureOps} 
                                            value={value!==null ? furnitureOps.find(ele => ele.value === value) : null}
                                            onChange={changeValue => {
                                                onChange(changeValue.label);
                                            }}
                                            instanceId="furniture_select"
                                            styles={customStyles}
                                            placeholder="請選擇"
                                        />
                                    )}
                                />
                            </td>
                            <td colSpan="3" align="center" style={{padding: '0.5rem'}}>
                                <div className={classes.added}>
                                    <button 
                                        type="submit" 
                                        disabled={currentRoomQuos>=30 ? true : false} 
                                        style={currentRoomQuos>=30 ? {backgroundColor: 'silver', marginTop: '1rem'} : {marginTop: '1rem'}}
                                    >
                                        新增項次
                                    </button>
                                    &emsp;(已新增&nbsp;{currentRoomQuos}/30)
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form> 
        </div>
    );
};

export default FormC;