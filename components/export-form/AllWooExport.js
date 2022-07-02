import Select from 'react-select';
import { useState } from 'react';
import classes from './AllWooExport.module.css'; 

const DUMMY_DATA_TEST = {
    client: '布魯托',
    type: '系統家具',
    date: '2022/06/06',
    phone: '0912345678',
    project_name: '超級豪宅',
    designer: '吳季剛',
    designer_phone: '0987654321',
    address: '407台中市西屯區市政路456號',
    quotations: [
        { id: 1, room: '區域A', number: 5, minor_total: 10000, notes: '天氣晴' },
        { id: 2, room: '區域B', number: 3, minor_total: 4000, notes: '' },
        { id: 3, room: '區域C', number: 5, minor_total: 6000, notes: '天氣雨' },
        { id: 4, room: '區域D', number: 1, minor_total: 3000, notes: '' },
        { id: 5, room: '區域E', number: 1, minor_total: 7000, notes: '天氣雨' },
        { id: 6, room: '區域F', number: 3, minor_total: 3000, notes: '' },
        { id: 7, room: '區域E', number: 3, minor_total: 2000, notes: '天氣晴' },
        { id: 8, room: '區域G', number: 5, minor_total: 5000, notes: '' },
        { id: 9, room: '區域H', number: 3, minor_total: 1000, notes: '天氣陰' },
        { id: 10, room: '區域I', number: 5, minor_total: 9000, notes: '天氣雨' },
        { id: 11, room: '區域J', number: 1, minor_total: 5000, notes: '天氣晴' },
        { id: 12, room: '區域K', number: 5, minor_total: 5000, notes: '' },
        { id: 13, room: '區域L', number: 5, minor_total: 4000, notes: '天氣陰' },
        { id: 14, room: '區域M', number: 1, minor_total: 6000, notes: '' },
        { id: 15, room: '區域N', number: 5, minor_total: 500, notes: '天氣晴' },
    ],
    discount: 0.95
};

const minorTotals = DUMMY_DATA_TEST.quotations.map(obj =>
    obj.minor_total
);

const total = minorTotals.reduce(
    (prev, curr) => prev + curr,
);


function AllWooExport() {

    const options = [
        { value: 0, label: '各區域系統家具最終優惠價格' },
        { value: 1, label: '各區域系統家具牌價總計' },
    ];

    const customStyles = {
        control: (styles) => ({ ...styles, height: '3rem' }),
        indicatorsContainer: (styles) => ({ ...styles, cursor: 'pointer' }),
        valueContainer: (styles) => ({ ...styles, padding: 0 }), 
        input: (styles) => ({ ...styles, padding: 0, margin: 0 }), 
    };

    // const setSelectData = props.select_data;
    const [showTotal, setShowTotal] = useState(0)
    function handleChange(event) {
        setShowTotal(event.value);
    };

    return (
        <div className={classes.container}>
            <table>
                <thead>
                    <tr>
                        <td colSpan="6" align="center">
                            {/* <h1 className={classes.thead_title}>窩百態系統家具&nbsp;總估價單</h1> */}
                            <h1 className={classes.thead_title}>ABC系統家具&nbsp;總估價單</h1>
                        </td>
                    </tr>
                    <tr>
                        <td><p>屋主名稱</p></td>
                        <td><p>{DUMMY_DATA_TEST.client}</p></td>
                        <td><p>報價類別</p></td>
                        <td><p>{DUMMY_DATA_TEST.type}</p></td>
                        <td><p>報價日期</p></td>
                        <td><p>{DUMMY_DATA_TEST.date}</p></td>
                    </tr>
                    <tr>
                        <td><p>聯絡電話</p></td>
                        <td><p>{DUMMY_DATA_TEST.phone}</p></td>
                        <td><p>設計師</p></td>
                        <td colSpan="4"><p>{DUMMY_DATA_TEST.designer}</p></td>
                    </tr>
                    <tr>
                        <td><p>房屋案名</p></td>
                        <td><p>{DUMMY_DATA_TEST.project_name}</p></td>
                        <td><p>設計師電話</p></td>
                        <td colSpan="4"><p>{DUMMY_DATA_TEST.designer_phone}</p></td>
                    </tr>
                    <tr>
                        <td><p>工地地址</p></td>
                        <td colSpan="5"><p>{DUMMY_DATA_TEST.address}</p></td>
                    </tr>
                </thead>
                <tbody> 
                    <tr className={classes.tbody_title}>
                        <td colSpan="6" align="center">
                            <h1>估價總表</h1>
                        </td>
                    </tr>
                    <tr className={classes.tbody_title}>
                        <td align="center"><p>項次</p></td>
                        <td colSpan="2" align="center"><p>區域</p></td>
                        <td align="center"><p>數量</p></td>
                        <td align="center"><p>小計</p></td>
                        <td align="center"><p>備註</p></td>
                    </tr>
                    {DUMMY_DATA_TEST.quotations.map(obj => {
                        return (
                            <tr key={obj.id}>
                                <td align="center"><p>{obj.id}</p></td>
                                <td colSpan="2" align="center"><p>{obj.room}</p></td>
                                <td align="center"><p>{obj.number}</p></td>
                                <td align="center"><p>{obj.minor_total}</p></td>
                                <td align="center"><p>{obj.notes}</p></td>
                            </tr>
                        )
                    })}
                    <tr className={classes.total}>
                        <td colSpan="4" align="center">
                            <p>各區域系統家具牌價小計</p>
                        </td>
                        <td colSpan="2" align="center">
                            <p>{total}</p>
                        </td>
                    </tr>
                    <tr className={classes.total}>
                        <td colSpan="4" align="center">
                            <Select 
                                defaultValue={options[0]} 
                                closeMenuOnSelect={true}
                                options={options} 
                                instanceId={'total'}
                                onChange={handleChange}
                                styles={customStyles}
                                theme={(theme) => ({
                                    ...theme,
                                    colors: {
                                      ...theme.colors,
                                      neutral80: 'rgb(103, 94, 84)',
                                    },
                                })}
                            />
                        </td>
                        <td colSpan="2" align="center">
                            <p>{showTotal === 0 ? total*DUMMY_DATA_TEST.discount : total}</p>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="6" align="center">
                            {/* <p>窩百態室內裝修設計股份有限公司&emsp;/&emsp;電話:&#40;04&#41;24362988&emsp;/&emsp;傳真:&#40;04&#41;24370382</p> */}
                            <p>ABC室內裝修設計股份有限公司&emsp;/&emsp;電話:&#40;04&#41;98765432&emsp;/&emsp;傳真:&#40;04&#41;98765432</p>
                        </td>  
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default AllWooExport;