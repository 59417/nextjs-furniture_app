import Head from 'next/head';
import styles from '../../../styles/Home.module.css';
import FormA from '../../../components/actuary/edit/FormA'; 
import FormB from '../../../components/actuary/edit/FormB';


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
];
const DUMMY_DATA_CLIENT3 = [
    { 1: [
        { room_quo_id: 1, room: "客房", date: '2001/01', discount: 0.11 }, { room_quo_id: 2, room: "陽台", date: '2001/03', discount: 0.12 }, { room_quo_id: 3, room: "廁所", date: '2001/04', discount: 0.13 },
        { room_quo_id: 4, room: "浴室", date: '2002/04', discount: 0.21 }, { room_quo_id: 5, room: "琴房", date: '2002/08', discount: 0.22 }, { room_quo_id: 6, room: "會議室", date: '2003/05', discount: 0.31 }, 
        { room_quo_id: 7, room: "書房", date: '2003/06', discount: 0.32 }, { room_quo_id: 8, room: "辦公室", date: '2003/08', discount: 0.33 }, { room_quo_id: 9, room: "臥室", date: '2003/09', discount: 0.34 },
        { room_quo_id: 10, room: "浴室", date: '2002/04', discount: 0.21 }, { room_quo_id: 11, room: "琴房", date: '2002/08', discount: 0.22 }, { room_quo_id: 12, room: "會議室", date: '2003/05', discount: 0.31 }, 
        { room_quo_id: 13, room: "浴室", date: '2002/04', discount: 0.21 },
    ] },
];



export default function QuotationPage(props) {

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
                </div>
            </main>
        </div>
    )
};


export async function getStaticPaths () {

    return {
        fallback: 'blocking',  
        paths: DUMMY_DATA.map(item => ({
            params: {
                quotationId: item.id.toString(),
            }
        }))
    }
};


export async function getStaticProps (context) {

    const quotationId = context.params.quotationId; 
    const quotationTarget = DUMMY_DATA.find((element) => (
        element['id'] === parseInt(quotationId)
    ));

    const roomQuotations = DUMMY_DATA_CLIENT2.find((element) => (
        Object.keys(element)[0] === quotationId
    ));

    return {
        props: {
            quotationData: {
                id: quotationTarget.id,
                version: quotationTarget.version,
                client: quotationTarget.client,
            },
            roomQuotations: roomQuotations ? roomQuotations : `/actuarial-valuate/${quotationId}/1`
        }
    };
};


