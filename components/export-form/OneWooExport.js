import classes from './OneWooExport.module.css'; 

const DUMMY_DATA_TEST = {
    client: '布魯托',
    type: '系統家具',
    date: '2022/06/06',
    phone: '0912345678',
    project_name: '超級豪宅',
    designer: '吳季剛',
    designer_phone: '0987654321',
    address: '407台中市西屯區市政路456號',
    room: '玄關',
    room_quos: [
        { id: 1, configure: 'xxxxx', furniture: '', description: '', unit_price: 500, number: 5, unit: '個',  notes: '天氣晴', options: 'xxxxx', minor_total: 10000 },
        { id: 2, configure: 'xxxxx', furniture: '', description: '', unit_price: 500, number: 3, unit: '個', notes: '', options: 'xxxxx', minor_total: 4000 },
        { id: 3, configure: 'xxxxx', furniture: '', description: '', unit_price: 500, number: 5, unit: '個', notes: '天氣雨', options: 'xxxxx', minor_total: 6000 },
        { id: 4, configure: 'xxxxx', furniture: '', description: '', unit_price: 500, number: 1, unit: '個', notes: '', options: 'xxxxx', minor_total: 3000 },
        { id: 5, configure: 'xxxxx', furniture: '', description: '', unit_price: 500, number: 1, unit: '個', notes: '天氣雨', options: 'xxxxx', minor_total: 7000 },
        { id: 6, configure: 'xxxxx', furniture: '', description: '', unit_price: 500, number: 3, unit: '個', notes: '', options: 'xxxxx', minor_total: 3000 },
        { id: 7, configure: 'xxxxx', furniture: '', description: '', unit_price: 500, number: 3, unit: '個', notes: '天氣晴', options: 'xxxxx', minor_total: 2000 },
        { id: 8, configure: 'xxxxx', furniture: '', description: '', unit_price: 500, number: 5, unit: '個', notes: '', options: 'xxxxx', minor_total: 5000 },
        { id: 9, configure: 'xxxxx', furniture: '', description: '', unit_price: 500, number: 3, unit: '個', notes: '天氣陰', options: 'xxxxx', minor_total: 1000 },
        { id: 10, configure: 'xxxxx', furniture: '', description: '', unit_price: 500, number: 5, unit: '個', notes: '天氣雨', options: 'xxxxx', minor_total: 9000 },
        { id: 11, configure: 'xxxxx', furniture: '', description: '', unit_price: 500, number: 1, unit: '個', notes: '天氣晴', options: 'xxxxx', minor_total: 5000 },
        { id: 12, configure: 'xxxxx', furniture: '', description: '', unit_price: 500, number: 5, unit: '個', notes: '', options: 'xxxxx', minor_total: 5000 },
        { id: 13, configure: 'xxxxx', furniture: '', description: '', unit_price: 500, number: 5, unit: '個', notes: '天氣陰', options: 'xxxxx', minor_total: 4000 },
        { id: 14, configure: 'xxxxx', furniture: '', description: '', unit_price: 500, number: 1, unit: '個', notes: '', options: 'xxxxx', minor_total: 6000 },
        { id: 15, configure: 'xxxxx', furniture: '', description: '', unit_price: 500, number: 5, unit: '個', otes: '天氣晴', options: 'xxxxx', minor_total: 500 },
        { id: 16, configure: 'xxxxx', furniture: '', description: '', unit_price: 500, number: 5, unit: '個',  notes: '天氣晴', options: 'xxxxx', minor_total: 10000 },
        { id: 17, configure: 'xxxxx', furniture: '', description: '', unit_price: 500, number: 3, unit: '個', notes: '', options: 'xxxxx', minor_total: 4000 },
        { id: 18, configure: 'xxxxx', furniture: '', description: '', unit_price: 500, number: 5, unit: '個', notes: '天氣雨', options: 'xxxxx', minor_total: 6000 },
        { id: 19, configure: 'xxxxx', furniture: '', description: '', unit_price: 500, number: 1, unit: '個', notes: '', options: 'xxxxx', minor_total: 3000 },
        { id: 20, configure: 'xxxxx', furniture: '', description: '', unit_price: 500, number: 1, unit: '個', notes: '天氣雨', options: 'xxxxx', minor_total: 7000 },
        { id: 21, configure: 'xxxxx', furniture: '', description: '', unit_price: 500, number: 3, unit: '個', notes: '', options: 'xxxxx', minor_total: 3000 },
        { id: 22, configure: 'xxxxx', furniture: '', description: '', unit_price: 500, number: 3, unit: '個', notes: '天氣晴', options: 'xxxxx', minor_total: 2000 },
        { id: 23, configure: 'xxxxx', furniture: '', description: '', unit_price: 500, number: 5, unit: '個', notes: '', options: 'xxxxx', minor_total: 5000 },
        { id: 24, configure: 'xxxxx', furniture: '', description: '', unit_price: 500, number: 3, unit: '個', notes: '天氣陰', options: 'xxxxx', minor_total: 1000 },
        { id: 25, configure: 'xxxxx', furniture: '', description: '', unit_price: 500, number: 5, unit: '個', notes: '天氣雨', options: 'xxxxx', minor_total: 9000 },
        { id: 26, configure: 'xxxxx', furniture: '', description: '', unit_price: 500, number: 1, unit: '個', notes: '天氣晴', options: 'xxxxx', minor_total: 5000 },
        { id: 27, configure: 'xxxxx', furniture: '', description: '', unit_price: 500, number: 5, unit: '個', notes: '', options: 'xxxxx', minor_total: 5000 },
        { id: 28, configure: 'xxxxx', furniture: '', description: '', unit_price: 500, number: 5, unit: '個', notes: '天氣陰', options: 'xxxxx', minor_total: 4000 },
        { id: 29, configure: 'xxxxx', furniture: '', description: '', unit_price: 500, number: 1, unit: '個', notes: '', options: 'xxxxx', minor_total: 6000 },
        { id: 30, configure: 'xxxxx', furniture: '', description: '', unit_price: 500, number: 5, unit: '個', otes: '天氣晴', options: 'xxxxx', minor_total: 500 },
    ],
};

const minorTotals = DUMMY_DATA_TEST.room_quos.map(obj =>
    obj.minor_total
);

const total = minorTotals.reduce(
    (prev, curr) => prev + curr,
);


function OneWooExport() {

    return (
        <div className={classes.container}>
            <table>
                <thead>
                    <tr>
                        <td colSpan="10" align="center" >
                            {/* <h1 className={classes.thead_title}>窩百態系統家具&nbsp;估價單</h1> */}
                            <h1 className={classes.thead_title}>ABC系統家具&nbsp;估價單</h1>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="1"><p>屋主名稱</p></td>
                        <td colSpan="2"><p>{DUMMY_DATA_TEST.client}</p></td>
                        <td colSpan="1"><p>報價類別</p></td>
                        <td colSpan="3"><p>{DUMMY_DATA_TEST.type}</p></td>
                        <td colSpan="1"><p>報價日期</p></td>
                        <td colSpan="2"><p>{DUMMY_DATA_TEST.date}</p></td>
                    </tr>
                    <tr>
                        <td colSpan="1"><p>聯絡電話</p></td>
                        <td colSpan="2"><p>{DUMMY_DATA_TEST.phone}</p></td>
                        <td colSpan="1"><p>設計師</p></td>
                        <td colSpan="3"><p>{DUMMY_DATA_TEST.designer}</p></td>
                        <td colSpan="1"><p>設計師電話</p></td>
                        <td colSpan="2"><p>{DUMMY_DATA_TEST.designer_phone}</p></td>
                    </tr>
                    <tr>
                        <td colSpan="1"><p>房屋案名</p></td>
                        <td colSpan="2"><p>{DUMMY_DATA_TEST.project_name}</p></td>
                        <td colSpan="1"><p>助理</p></td>
                        <td colSpan="3"><p>{DUMMY_DATA_TEST.designer_phone}</p></td>
                        <td colSpan="1"><p>助理電話</p></td>
                        <td colSpan="2"><p>{DUMMY_DATA_TEST.designer_phone}</p></td>
                    </tr>
                    <tr>
                        <td colSpan="2"><p>工地地址</p></td>
                        <td colSpan="8"><p>{DUMMY_DATA_TEST.address}</p></td>
                    </tr>
                </thead>
                <tbody> 
                    <tr className={classes.tbody_title}>
                        <td colSpan="2" align="center">
                            <h1>區域</h1>
                        </td>
                        <td colSpan="8" align="center">
                            <h1>{DUMMY_DATA_TEST.room}</h1>
                        </td>
                    </tr>
                    <tr className={classes.tbody_subtitle}>
                        <td colSpan="10" align="center">
                            <h1>品項部材&nbsp;&#40;&nbsp;基本工及物料&nbsp;&#41;</h1>
                        </td>
                    </tr>
                    <tr className={classes.tbody_itemtitle}>
                        <td align="center"><p>項次</p></td>
                        <td align="center"><p>配置No.</p></td>
                        <td align="center"><p>施作項目</p></td>
                        <td align="center"><p>說明及規格</p></td>
                        <td align="center"><p>單價</p></td>
                        <td align="center"><p>數量</p></td>
                        <td align="center"><p>單位</p></td>
                        <td align="center"><p>備註</p></td>
                        <td align="center"><p>選擇</p></td>
                        <td align="center"><p>小計</p></td>
                    </tr>
                    {/* <tr>
                        <td align="center"><p>1</p></td>
                        <td colSpan="2" align="center"><p>(區域)</p></td>
                        <td align="center"><p>(數量)</p></td>
                        <td align="center"><p>(小計)</p></td>
                        <td align="center"><p>(備註)</p></td>
                    </tr> */}
                    {DUMMY_DATA_TEST.room_quos.map(obj => {
                        return (
                            <tr key={obj.id}>
                                <td align="center"><p>{obj.id}</p></td>
                                <td align="center"><p>{obj.configure}</p></td>
                                <td align="center"><p>{obj.furniture}</p></td>
                                <td align="center"><p>{obj.description}</p></td>
                                <td align="center"><p>{obj.unit_price}</p></td>
                                <td align="center"><p>{obj.number}</p></td>
                                <td align="center"><p>{obj.unit}</p></td>
                                <td align="center"><p>{obj.notes}</p></td>
                                <td align="center"><p>{obj.options}</p></td>
                                <td align="center"><p>{obj.minor_total}</p></td>
                            </tr>
                        )
                    })}
                    <tr className={classes.total}>
                        <td colSpan="7" align="center">
                            <p>系統櫃牌價合計</p>
                        </td>
                        <td colSpan="3" align="center">
                            <p>{total}</p>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="10" align="center">
                            {/* <p>窩百態室內裝修設計股份有限公司&emsp;/&emsp;電話:&#40;04&#41;24362988&emsp;/&emsp;傳真:&#40;04&#41;24370382</p> */}
                            <p>ABC室內裝修設計股份有限公司&emsp;/&emsp;電話:&#40;04&#41;98765432&emsp;/&emsp;傳真:&#40;04&#41;98765432</p>
                        </td>  
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default OneWooExport;