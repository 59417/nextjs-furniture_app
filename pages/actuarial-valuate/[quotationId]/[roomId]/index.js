import Head from 'next/head';
import styles from '../../../../styles/Home.module.css';
import FormA from '../../../../components/actuary/edit/FormA'; 
import FormB from '../../../../components/actuary/edit/FormB';
import FormC from '../../../../components/actuary/edit/FormC';
import FormD from '../../../../components/actuary/edit/FormD';
import ExportAllForm from '../../../../components/actuary/edit/ExportAllForm';


const DUMMY_DATA = [
    { id: 1, version: '2022/03', client: '辛普森', is_empty: false, },
    { id: 2, version: '2021/12', client: '唐老鴨', is_empty: false, },
    { id: 3, version: '2022/01', client: '小小兵', is_empty: false, },
    { id: 4, version: '2022/05', client: '三眼仔', is_empty: true, },
];

const DUMMY_DATA_CLIENT = [{1: [1,2,3]}, {2: [1,2]}, {3: [1,2,3,4]}];
const DUMMY_DATA_CLIENT2 = [
    { 1: [{ room_quo_id: 1, room: "客房", date: '2001/01', discount: 0.11 }, { room_quo_id: 2, room: "陽台", date: '2001/03', discount: 0.12 }, { room_quo_id: 3, room: "廁所", date: '2001/04', discount: 0.13 }] },
    { 2: [{ room_quo_id: 1, room: "浴室", date: '2002/04', discount: 0.21 }, { room_quo_id: 2, room: "琴房", date: '2002/08', discount: 0.22 }] },
    { 3: [{ room_quo_id: 1, room: "會議室", date: '2003/05', discount: 0.31 }, { room_quo_id: 2, room: "書房", date: '2003/06', discount: 0.32 }, { room_quo_id: 3, room: "辦公室", date: '2003/08', discount: 0.33 }, { room_quo_id: 4, room: "臥室", date: '2003/09', discount: 0.34 }] },
    { 4: [{ room_quo_id: 1, room: "健身房", date: '2021/12', discount: 0.99 },] },
]

const CLIENT1_PAGES = [
    { room_quo_id: 1, furnitures: [{'furnitureId': '01', 'room': '餐桌'}, {'furnitureId': '02', 'room': '書櫃'}, {'furnitureId': '03', 'room': '衣櫥'}, {'furnitureId': '04', 'room': '書桌'}, {'furnitureId': '05', 'room': '鞋櫃'}, {'furnitureId': '06', 'room': '矮桌'}] },
    { room_quo_id: 2, furnitures: [{'furnitureId': '01', 'room': '餐桌'}, {'furnitureId': '02', 'room': '書櫃'}, {'furnitureId': '03', 'room': '衣櫥'}, {'furnitureId': '04', 'room': '書桌'}, {'furnitureId': '05', 'room': '鞋櫃'}, {'furnitureId': '06', 'room': '矮桌'}, {'furnitureId': '07', 'room': '鞋架'}, {'furnitureId': '08', 'room': '儲藏櫃'}, {'furnitureId': '09', 'room': '茶几'}] },
    { room_quo_id: 3, furnitures: [{'furnitureId': '01', 'room': '餐桌'}, {'furnitureId': '02', 'room': '書櫃'}, {'furnitureId': '03', 'room': '衣櫥'}, {'furnitureId': '04', 'room': '書桌'}, {'furnitureId': '05', 'room': '鞋櫃'}, {'furnitureId': '06', 'room': '矮桌'}, {'furnitureId': '07', 'room': '鞋架'}, {'furnitureId': '08', 'room': '儲藏櫃'}, {'furnitureId': '09', 'room': '茶几'}, {'furnitureId': '10', 'room': '書桌'}, {'furnitureId': '11', 'room': '拉門'}, {'furnitureId': '12', 'room': '床頭櫃'}, {'furnitureId': '13', 'room': '書櫃'}, {'furnitureId': '14', 'room': '衣櫥'}, {'furnitureId': '15', 'room': '鞋櫃'}] },
];
const CLIENT2_PAGES = [
    { room_quo_id: 1, furnitures: [{'furnitureId': '01', 'room': '餐桌'}, {'furnitureId': '02', 'room': '書櫃'}, {'furnitureId': '03', 'room': '衣櫥'}] },
    { room_quo_id: 2, furnitures: [{'furnitureId': '01', 'room': '餐桌'}, {'furnitureId': '02', 'room': '書櫃'}, {'furnitureId': '03', 'room': '衣櫥'}, {'furnitureId': '04', 'room': '書桌'}, {'furnitureId': '05', 'room': '鞋櫃'}, {'furnitureId': '06', 'room': '矮桌'}, {'furnitureId': '07', 'room': '鞋架'}] },
];
const CLIENT3_PAGES = [
    { room_quo_id: 1, furnitures: [{'furnitureId': '01', 'room': '餐桌'}, {'furnitureId': '02', 'room': '書櫃'}, {'furnitureId': '03', 'room': '衣櫥'}, {'furnitureId': '04', 'room': '書桌'}, {'furnitureId': '05', 'room': '鞋櫃'}, {'furnitureId': '06', 'room': '矮桌'}, {'furnitureId': '07', 'room': '鞋架'}, {'furnitureId': '08', 'room': '儲藏櫃'}, {'furnitureId': '09', 'room': '茶几'}, {'furnitureId': '10', 'room': '書桌'}, {'furnitureId': '11', 'room': '拉門'}, {'furnitureId': '12', 'room': '床頭櫃'}, {'furnitureId': '13', 'room': '書櫃'}, {'furnitureId': '14', 'room': '衣櫥'}, {'furnitureId': '15', 'room': '鞋櫃'}] },
    { room_quo_id: 2, furnitures: [{'furnitureId': '01', 'room': '矮桌'}, {'furnitureId': '02', 'room': '儲藏櫃'}, {'furnitureId': '03', 'room': '書桌'}, {'furnitureId': '04', 'room': '衣櫥'}, {'furnitureId': '05', 'room': '鞋櫃'}] },
    { room_quo_id: 3, furnitures: [{'furnitureId': '01', 'room': '鞋架'}, {'furnitureId': '02', 'room': '茶几'}, {'furnitureId': '03', 'room': '衣櫥'}, {'furnitureId': '04', 'room': '書桌'}, {'furnitureId': '05', 'room': '鞋櫃'}, {'furnitureId': '06', 'room': '矮桌'}, {'furnitureId': '07', 'room': '鞋架'}, {'furnitureId': '08', 'room': '儲藏櫃'}, {'furnitureId': '09', 'room': '茶几'}, {'furnitureId': '10', 'room': '書桌'}, {'furnitureId': '11', 'room': '拉門'}, {'furnitureId': '12', 'room': '床頭櫃'}, {'furnitureId': '13', 'room': '書櫃'}] },
    { room_quo_id: 4, furnitures: [{'furnitureId': '01', 'room': '拉門'}] },
];
const CLIENT4_PAGES = [];
const ALL_CLIENT_PAGES = [CLIENT1_PAGES, CLIENT2_PAGES, CLIENT3_PAGES, CLIENT4_PAGES];


export default function QuotationPage(props) {

    console.log('roomQuotations', props.roomQuotations, 'targetRoomQuo', props.targetRoomQuo)

    function getClientAllFurniture(clientId) {
        return ALL_CLIENT_PAGES[clientId-1]
    };

    return (
        <div className={styles.container}>
            <Head>
                {/* <title>精算估價 | 窩百態傢俱估價系統</title> */}
                <title>精算估價 | ABC傢俱估價系統</title>
                <meta name="description" content="The appraisal system of Woobetter furniture store" />
            </Head>
            <main className={styles.main}>
                <div className={styles.inputform}>
                    <FormA client={props.quotationData}/>
                    <FormB roomQuotations={props.roomQuotations}/>
                    <FormC roomQuotations={props.roomQuotations} targetRoomQuo={props.targetRoomQuo}/>
                    <FormD roomQuotations={props.roomQuotations} targetRoomQuo={props.targetRoomQuo}/>
                    <ExportAllForm roomQuotations={props.roomQuotations} allfurniture={getClientAllFurniture(props.quotationData.id)}/>
                </div>
            </main>
        </div>
    )
};


export async function getStaticPaths () {

    const quotationIds = DUMMY_DATA_CLIENT.map(item =>
        Array(Object.values(item)[0].length).fill(Object.keys(item)[0])
    ).flat();
    
    const roomIds = DUMMY_DATA_CLIENT.map(item => 
        Object.values(item).flat()
    ).flat();

    const pathIds = quotationIds.map(function(a, b) {
        return { 'quotationId': a, 'roomId': roomIds[b]}
    });

    return {
        fallback: 'blocking',  // true: immediately return an empty page
        // fallback: false,  // if user enter an url not included > return 404
        paths: pathIds.map(id => ({
            params: {
                quotationId: id.quotationId.toString(),
                roomId: id.roomId.toString(),
            }
        })
    )};
};


export async function getStaticProps (context) {

    const { quotationId, roomId } = context.params; 

    const quotationTarget = DUMMY_DATA.find((element) => (
        element['id'] === parseInt(quotationId)
        ));

    const roomQuotations = DUMMY_DATA_CLIENT2.find((element) => (
        Object.keys(element)[0] === quotationId
    ));

    const targetRoomQuo = ALL_CLIENT_PAGES[parseInt(quotationId)-1]
        .find(obj => obj.room_quo_id === parseInt(roomId));
    
    return {
        props: {
            quotationData: {
                id: quotationTarget.id,
                version: quotationTarget.version,
                client: quotationTarget.client,
            },
            roomQuotations: roomQuotations,
            targetRoomQuo: targetRoomQuo,
            // roomQuotations: roomQuotations ? roomQuotations : `/actuarial-valuate/${quotationId}/1`
        }
    };
}


