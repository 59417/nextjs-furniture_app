import Select from 'react-select';
import { useState } from 'react';
import classes from './ActuarialValuate.module.css';
import Quotation from './Quotation';

const DUMMY_DATA = [
    { id: 1, version: '2022/03', client: '辛普森', is_empty: false, },
    { id: 2, version: '2021/12', client: '唐老鴨', is_empty: false, },
    { id: 3, version: '2022/01', client: '小小兵', is_empty: false, },
    { id: 4, version: '2022/05', client: '三眼仔', is_empty: true, },
];


function ActuarialValuate() {

    const nowDate = new Date;
    const year = nowDate.getFullYear();
    const month = nowDate.getMonth()+1;
    function getVer(year, month) {
        if (month < 0) {
            correctMonth = month + 12;
            if (correctMonth.toString().length < 2) {
                const monthStr = '0' + correctMonth;
                return year + '/' + monthStr;
            } 
        } else {
            if (month.toString().length < 2) {
                const monthStr = '0' + month;
                return year + '/' + monthStr;
            }
        };
    };

    const options = [
        { value: getVer(year, month), label: getVer(year, month) },
        { value: getVer(year, month-1), label: getVer(year, month-1) },
        { value: getVer(year, month-2), label: getVer(year, month-2) },
        { value: getVer(year, month-3), label: getVer(year, month-3) }
      ];

    const customStyles = {
        control: (styles) => ({ ...styles, height: '3rem' }),
        indicatorsContainer: (styles) => ({ ...styles, cursor: 'pointer' }),
        valueContainer: (styles) => ({ ...styles, padding: 0 }), 
        input: (styles) => ({ ...styles, padding: 0, margin: 0 }), 
    };

    const [ver,setVer] = useState('2021/12')
    function handleChange(event) {
        setVer(event.value);
        console.log(ver);
    };

    const SORTED_DUMMY_DATA = DUMMY_DATA.sort(function (a, b) {
        return b.id - a.id;
    });

    return (
        <div className={classes.wrapper}>
            <h1>所有估價單</h1>
            <div className={classes.table}>
                <table>
                    <thead><tr>
                        <td id={classes.col1}>選擇估價單</td>
                        <td>估價單號碼</td>
                        <td>版本</td>
                        <td>屋主名稱</td>
                        <td>刪除估價單</td>
                        <td id={classes.col2}>複製估價單</td>
                </tr></thead></table>

                {SORTED_DUMMY_DATA.map(item => {
                    return <Quotation key={item.id} data={item}/>
                })}

                <form><table><tfoot><tr>
                <td id={classes.col3}>
                    <button type="submit" value="新增">
                        <i className="fa-solid fa-plus"></i>&nbsp;確定新增
                    </button>
                </td>
                <td><input type="text" required placeholder="輸入號碼" /></td>
                <td>
                    <Select 
                        defaultValue={options[0]} 
                        closeMenuOnSelect={true}
                        options={options} 
                        instanceId={'version'}
                        onChange={handleChange}
                        styles={customStyles}
                    />
                </td>
                <td><input type="text" required placeholder="輸入屋主名稱" /></td>
                <td>-</td>
                <td id={classes.col4}>-</td>
            </tr></tfoot></table></form></div>
        </div>
    );
};

export default ActuarialValuate; 