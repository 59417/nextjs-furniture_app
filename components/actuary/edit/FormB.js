import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import Select from 'react-select';
import commons from './FormCommon.module.css'; 
import classes from './FormB.module.css';


function FormB(props) {

    const isType = typeof props.roomQuotations === 'object';
    // const clientId = Object.keys(props.roomQuotations)[0];
    const createdRoomQuos = isType ? Object.values(props.roomQuotations)[0] : [];
    const totalQuos = createdRoomQuos.length;
    // [{room_quo_id: 1, room: '客房', date: '2001/01', discount: 0.11}}, {...}, {...}]

    const [allRoomQuo, setAllRoomQuo] = useState(createdRoomQuos.map(function(quo) {
        var quoObj = {};
        quoObj['quotationId'] = quo.room_quo_id;
        quoObj['room_control'] = quo.room;
        quoObj['date_control'] = quo.date;
        quoObj['discount'] = quo.discount;
        return quoObj;
    }));

    const roomOps = [
        { value: 1, label: '玄關', name: 'room' },
        { value: 2, label: '客廳', name: 'room' },
        { value: 3, label: '臥室', name: 'room' },
        { value: 4, label: '廚房', name: 'room' }
    ];

    const dateOps = [
        { value: 1, label: '2022/03', name: 'date' },
        { value: 2, label: '2022/02', name: 'date' },
        { value: 3, label: '2022/01', name: 'date' },
        { value: 4, label: '2021/12', name: 'date' }
    ];

    const customStyles = {
        indicatorsContainer: (styles) => ({ ...styles, cursor: 'pointer' }),
        valueContainer: (styles) => ({ ...styles, padding: 0 }), 
        input: (styles) => ({ ...styles, padding: 0, margin: 0 }), 
    };

    const [isForm2, setIsForm2] = useState(true);
    function handleClick() {
        setIsForm2(!isForm2)
    };

    function handleMySubmit(event) {
        event.preventDefault();
        if (formData.room && formData.date) {
            alert('新增成功！' + JSON.stringify(formData));
            setFormData(prevFormData => {
                return {
                    quotationId: prevFormData.quotationId+1,
                    room_control: "",
                    date_control: "",
                    discount: "",
                }
            });
        } else {
            alert('請選擇區域/施作日期！');
        }
        reset();
    };

    const { control, register, handleSubmit, reset, getValues, setValue, formState } = useForm({
        defaultValues: {
            quotationId: totalQuos+1,
            room_control: null,
            date_control: null,
            discount: 0,
        }
    });

    const router = useRouter();
    const onSubmit = (data) => { 
        setAllRoomQuo(allRoomQuo.concat(data));
        if (allRoomQuo.length === 0) {
            router.push(props.roomQuotations)
        }
    };

    const [currentQuos, setCurrentQuos] = useState(totalQuos);
    useEffect(() => {
        if (formState.isSubmitSuccessful) {  
            setCurrentQuos(currentQuos+1);
            reset({
                ...getValues(),
                quotationId: getValues('quotationId')+1,
                room_control: null,
                date_control: null,
                discount: 0,
            });
        };
    }, [formState, reset, getValues, currentQuos]);


    return (
        <div className={commons.container}>
            <form id={classes.form2} onSubmit={handleSubmit(onSubmit)}>
                <table>
                    <thead>
                        <tr>
                            <td colSpan="8" align="center">
                                <h1>&#8545;.&nbsp;新增估價單(至多15張)&nbsp;
                                    <span><i className="fa-solid fa-caret-up" onClick={() => handleClick()} style={isForm2 ? null : {display: 'none'}}></i></span>
                                    <span><i className="fa-solid fa-caret-down" onClick={() => handleClick()} style={isForm2 ? {display: 'none'} : null}></i></span>
                                </h1>
                            </td>
                        </tr>
                    </thead>
                    <tbody style={isForm2 ? null : {display: 'none'}}>
                        <tr>
                            <td><label htmlFor="quotationId">估價單號碼</label></td>
                            <td>
                                <input readOnly {...register("quotationId", { required: true })} type='number'/>
                            </td>
                            <td>區域名稱</td>
                            <td>
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
                            </td>
                            <td rowSpan="2">
                                <button type="submit" disabled={currentQuos>=15 ? true : false} style={currentQuos>=15 ? {backgroundColor: 'silver'} : null}>新增估價單</button>
                                <br/><p className={classes.added}>(已新增&nbsp;{currentQuos}/15)</p>
                            </td>
                        </tr>
                        <tr>
                            <td>施作日期</td>
                            <td>
                                <Controller
                                    control={control}
                                    rules={{required:true}}
                                    name="date_control"
                                    render={({ field: { value, ref, name, onChange } }) => (
                                        <Select 
                                            inputRef={ref}
                                            closeMenuOnSelect={true}
                                            options={dateOps} 
                                            value={value!==null ? roomOps.find(ele => ele.value === value) : null}
                                            onChange={changeValue => {
                                                onChange(changeValue.label);
                                                // console.log(name, value)
                                            }}
                                            instanceId="date_select"
                                            styles={customStyles}
                                            placeholder="請選擇"
                                        />
                                    )}
                                />
                            </td>
                            <td><label htmlFor="discount">輸入折數</label></td>
                            <td>
                                <input {...register("discount", { required: true })} type='number'/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>  
        </div>
    );
};

export default FormB;