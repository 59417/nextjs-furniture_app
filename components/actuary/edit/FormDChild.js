import { useState, useEffect } from 'react';
import classes from './FormDChild.module.css';


function FormDChild(props) {

    const [roomData, setRoomData] = useState(props.roomData);
    useEffect(() => {
        console.log(roomData);
    }, [roomData, props.roomData]);
    // console.log(roomData); 
    // date: "2003/06"
    // discount: 0.32
    // furn_id: "01"
    // furn_label: "01餐桌"
    // furniture: "餐桌"
    // room: "書房"
    // room_quo_id: 2

    function isRequired(no, furnId) {
        if ('1357'.includes(furnId[1])) {
            if (no === 1) {
                return true
            } else {
                return false
            }
        } else if ('2468'.includes(furnId[1])) {
            if (no === 2) {
                return true
            } else {
                return false
            }
        } else {
            if (no === 3) {
                return true
            } else {
                return false
            }
        }
    };

    return (
        <table id={classes.childform}>
            <thead>
                <tr className={classes.info}>
                    <td><label htmlFor="client">施作日期</label></td>
                    <td colSpan="2">
                        <input type="text" id="client" name="client" readOnly defaultValue={props.roomData.date}/>
                    </td>
                    <td><label htmlFor="phone">估價單號</label></td>
                    <td><input type="text" id="phone" name="phone" readOnly defaultValue={props.roomData.room_quo_id}/></td>
                    <td><label htmlFor="project">項次</label></td>
                    <td><input type="text" id="project" name="project" readOnly defaultValue={props.roomData.furn_id}/></td>
                    <td><label htmlFor="project">區域</label></td>
                    <td colSpan="2"><input type="text" id="project" name="project" readOnly defaultValue={props.roomData.room}/></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan="6" id={classes.item0}><h3>設計師&#40;項目資訊輸入&#41;</h3></td>
                    <td id={classes.item1}><h3>1.項目</h3></td>
                    <td colSpan="3" id={classes.item2}><h3>2.輸入尺寸</h3></td>
                </tr>
                <tr>
                    <td className={classes.content0}><label htmlFor="0-1">配置</label></td>
                    <td className={classes.content0}><label htmlFor="0-2">品項</label></td>
                    <td colSpan="2" className={classes.content0}><label htmlFor="0-3">說明及規格</label></td>
                    <td colSpan="2" className={classes.content0}><label htmlFor="0-4">備註</label></td>
                    <td className={classes.content1}><label htmlFor="1-1">施作項目</label></td>
                    <td className={classes.content2}><label htmlFor="2-1">寬</label></td>
                    <td className={classes.content2}><label htmlFor="2-2">高</label></td>
                    <td className={classes.content2}><label htmlFor="2-3">深</label></td>
                </tr>
                <tr>
                    <td className={classes.content0}><input type="text" id="0-1" name="0-1" /*required*/ required={isRequired(1, roomData.furn_id)} placeholder={isRequired(1, roomData.furn_id) ? '必填' : null}/></td>
                    <td className={classes.content0}><input type="text" id="0-2" name="0-2" /*required*/ required={isRequired(3, roomData.furn_id)} placeholder={isRequired(3, roomData.furn_id) ? '必填' : null}/></td>
                    <td colSpan="2" className={classes.content0}><input type="text" id="0-3" name="0-3" /*required*/ /></td>
                    <td colSpan="2" className={classes.content0}><input type="text" id="0-4" name="0-4" /*required*/ /></td>
                    <td className={classes.content1}><input type="text" id="1-1" name="1-1" readOnly defaultValue={props.roomData.furniture}/></td>
                    <td className={classes.content2}><input type="text" id="2-1" name="2-1" /*required*/ required={isRequired(1, roomData.furn_id)} placeholder={isRequired(1, roomData.furn_id) ? '必填' : null}/></td>
                    <td className={classes.content2}><input type="text" id="2-2" name="2-2" /*required*/ required={isRequired(3, roomData.furn_id)} placeholder={isRequired(3, roomData.furn_id) ? '必填' : null}/></td>
                    <td className={classes.content2}><input type="text" id="2-3" name="2-3" /*required*/ /></td>
                </tr>

                <tr>
                    <td colSpan="10" id={classes.item3}><h3>3.桶身</h3></td>
                </tr>
                <tr>
                    <td className={classes.content3}><label htmlFor="3-1">板材品牌</label></td>
                    <td className={classes.content3}><label htmlFor="3-2">櫃體<br/>&#40;分割數量&#41;</label></td>
                    <td colSpan="2" className={classes.content3}><label htmlFor="3-3">抽框-書桌用<br/>&#40;數量&#41;</label></td>
                    <td className={classes.content3}><label htmlFor="3-4">櫃面</label></td>
                    <td className={classes.content3}><label htmlFor="3-5">導角</label></td>
                    <td className={classes.content3}><label htmlFor="3-6">中立板</label></td>
                    <td className={classes.content3}><label htmlFor="3-7">中立板<br/>數量</label></td>
                    <td className={classes.content3}><label htmlFor="3-8">吊衣桿<br/>&#40;一般&#41;</label></td>
                    <td className={classes.content3}><label htmlFor="3-9">吊衣桿<br/>數量</label></td>
                </tr>
                <tr>
                    <td className={classes.content3}><input type="text" id="3-1" name="3-1" /*required*/ required={isRequired(2, roomData.furn_id)} placeholder={isRequired(2, roomData.furn_id) ? '必填' : null}/></td>
                    <td className={classes.content3}><input type="text" id="3-2" name="3-2" /*required*/ required={isRequired(2, roomData.furn_id)} placeholder={isRequired(2, roomData.furn_id) ? '必填' : null}/></td>
                    <td colSpan="2" className={classes.content3}><input type="text" id="3-3" name="3-3" /*required*/ /></td>
                    <td className={classes.content3}><input type="text" id="3-4" name="3-4" /*required*/ /></td>
                    <td className={classes.content3}><input type="text" id="3-5" name="3-5" /*required*/ /></td>
                    <td className={classes.content3}><input type="text" id="3-6" name="3-6" /*required*/ /></td>
                    <td className={classes.content3}><input type="text" id="3-7" name="3-7" /*required*/ required={isRequired(1, roomData.furn_id)} placeholder={isRequired(1, roomData.furn_id) ? '必填' : null}/></td>
                    <td className={classes.content3}><input type="text" id="3-8" name="3-8" /*required*/ required={isRequired(1, roomData.furn_id)} placeholder={isRequired(1, roomData.furn_id) ? '必填' : null}/></td>
                    <td className={classes.content3}><input type="text" id="3-9" name="3-9" /*required*/ /></td>
                </tr>

                <tr>
                    <td colSpan="2" id={classes.item4}><h3>4.層板</h3></td>
                    <td colSpan="8" id={classes.item5}><h3>5.門片</h3></td>
                </tr>
                <tr>
                    <td className={classes.content4}><label htmlFor="4-1">層板厚度</label></td>
                    <td className={classes.content4}><label htmlFor="4-2">層板<br/>&#40;數量&#41;</label></td>
                    <td className={classes.content5}><label htmlFor="5-1">門片<br/>品牌選擇</label></td>
                    <td className={classes.content5}><label htmlFor="5-2">玻璃門板</label></td>
                    <td className={classes.content5}><label htmlFor="5-3">新古典門板</label></td>
                    <td className={classes.content5}><label htmlFor="5-4">美耐/<br/>儷仕/瓷釉</label></td>
                    <td className={classes.content5}><label htmlFor="5-5">分割數量</label></td>
                    <td className={classes.content5}><label htmlFor="5-6">鉸鍊選擇</label></td>
                    <td className={classes.content5}><label htmlFor="5-7">把手選擇</label></td>
                    <td className={classes.content5}><label htmlFor="5-8">*斜把手<br/>&#40;cm&#41;</label></td>
                </tr>
                <tr>
                    <td className={classes.content4}><input type="text" id="4-1" name="4-1" /*required*/ /></td>
                    <td className={classes.content4}><input type="text" id="4-2" name="4-2" /*required*/ /></td>
                    <td className={classes.content5}><input type="text" id="5-1" name="5-1" /*required*/ /></td>
                    <td className={classes.content5}><input type="text" id="5-2" name="5-2" /*required*/ /></td>
                    <td className={classes.content5}><input type="text" id="5-3" name="5-3" /*required*/ /></td>
                    <td className={classes.content5}><input type="text" id="5-4" name="5-4" /*required*/ /></td>
                    <td className={classes.content5}><input type="text" id="5-5" name="5-5" /*required*/ /></td>
                    <td className={classes.content5}><input type="text" id="5-6" name="5-6" /*required*/ /></td>
                    <td className={classes.content5}><input type="text" id="5-7" name="5-7" /*required*/ /></td>
                    <td className={classes.content5}><input type="text" id="5-8" name="5-8" /*required*/ /></td>
                </tr>

                <tr>
                    <td colSpan="3" id={classes.item6}><h3>6.加工</h3></td>
                    <td colSpan="2" id={classes.item7}><h3>7.特殊五金</h3></td>
                    <td colSpan="2" id={classes.item8}><h3>8.抽屜</h3></td>
                    <td colSpan="3" id={classes.item9}><h3>9.拉門</h3></td>
                </tr>
                <tr>
                    <td className={classes.content6}><label htmlFor="6-1">加工</label></td>
                    <td colSpan="2" className={classes.content6}><label htmlFor="6-2">*注意部分加工&#40;cm&#41;</label></td>
                    <td className={classes.content7}><label htmlFor="7-1">特殊五金</label></td>
                    <td className={classes.content7}><label htmlFor="7-2">數量</label></td>
                    <td className={classes.content8}><label htmlFor="8-1">抽屜數量</label></td>
                    <td className={classes.content8}><label htmlFor="8-2">抽盤數量</label></td>
                    <td className={classes.content9}><label htmlFor="9-1">區隔條橫</label></td>
                    <td className={classes.content9}><label htmlFor="9-2">區隔條直</label></td>
                    <td className={classes.content9}><label htmlFor="9-3">數量</label></td>
                </tr>
                <tr>
                    <td className={classes.content6}><input type="text" id="6-1" name="6-1" /*required*/ /></td>
                    <td colSpan="2" className={classes.content6}><input type="text" id="6-2" name="6-2" /*required*/ /></td>
                    <td className={classes.content7}><input type="text" id="7-1" name="7-1" /*required*/ /></td>
                    <td className={classes.content7}><input type="text" id="7-2" name="7-2" /*required*/ /></td>
                    <td className={classes.content8}><input type="text" id="8-1" name="8-1" /*required*/ /></td>
                    <td className={classes.content8}><input type="text" id="8-2" name="8-2" /*required*/ /></td>
                    <td className={classes.content9}><input type="text" id="9-1" name="9-1" /*required*/ /></td>
                    <td className={classes.content9}><input type="text" id="9-2" name="9-2" /*required*/ /></td>
                    <td className={classes.content9}><input type="text" id="9-3" name="9-3" /*required*/ /></td>
                </tr>

                <tr>
                    <td colSpan="4" id={classes.item10}><h3>10.拉籃</h3></td>
                    <td colSpan="6" id={classes.item11}><h3>其他</h3></td>
                </tr>
                <tr>
                    <td colSpan="2" className={classes.content10}><label htmlFor="10-1">拉籃</label></td>
                    <td colSpan="2" className={classes.content10}><label htmlFor="10-2">拉籃數量</label></td>
                    <td className={classes.content11}><label htmlFor="11-1">滑軌適用</label></td>
                    <td className={classes.content11}><label htmlFor="11-2">單位</label></td>
                    <td colSpan="2" className={classes.content11}><label htmlFor="11-3">噸</label></td>
                    <td colSpan="2" className={classes.content11}><label htmlFor="11-4">總價</label></td>
                </tr>
                <tr>
                    <td colSpan="2" className={classes.content10}><input type="text" id="10-1" name="10-1" /*required*/ /></td>
                    <td colSpan="2" className={classes.content10}><input type="text" id="10-2" name="10-2" /*required*/ /></td>
                    <td className={classes.content11}><input type="text" id="11-1" name="11-1" /*required*/ /></td>
                    <td className={classes.content11}><input type="text" id="11-2" name="11-2" /*required*/ /></td>
                    <td colSpan="2" className={classes.content11}><input type="text" id="11-3" name="11-3" /*required*/ /></td>
                    <td colSpan="2" className={classes.content11}><input type="text" id="11-4" name="11-4" /*required*/ /></td>
                </tr>
            </tbody>
        </table>
    );
};

export default FormDChild;