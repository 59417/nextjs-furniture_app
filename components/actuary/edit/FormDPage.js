import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useState, useEffect } from 'react';
import classes from './FormDPage.module.css';

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

// const pages = pages0.slice(0,12);


function FormPage(props) {

    const roomQuotations = props.roomQuotations;    
    const clientId = Object.keys(roomQuotations)[0];
    const pages =  Object.values(roomQuotations)[0];
    const pagesNum = Math.ceil(pages.length / 5);

    const targetRoomQuo = props.targetRoomQuo;
    const handleChangeRoom = props.handleChangeRoom;  
    // change FormD state - currentRoom
    const [page, setPage] = useState(targetRoomQuo.room_quo_id);
    const router = useRouter();
    function handleClick(id) {
        setPage(parseInt(id));
        handleChangeRoom();
        router.push(`/actuarial-valuate/${clientId}/${id}`);
    };

    useEffect(() => {
    }, [page]);
    
    function getStyle(id) {
        if (parseInt(id) === page) {
            return {
                color: '#ffffff',
                backgroundColor: '#774355b0',
            };
        } else {
            return {
                color: 'inherit'
            };
        }
    };

    function getPage(room_quo_id, room) {
        if (room_quo_id < 10) {
            return '0' + room_quo_id + room
        } else {
            return room_quo_id + room
        }
    };

    const [showPage, setShowPage] = useState({'start': 0, 'end': 5});

    function handleClickLeft() {
        if (showPage.start === 0) {
            setShowPage({'start': (pagesNum-1) * 5, 'end': pagesNum * 5})
        } else {
            setShowPage({'start': showPage.start-5, 'end': showPage.end-5})
        };
    };

    function handleClickRight() {
        if (pagesNum*5 === showPage.end) {
            setShowPage({'start': 0, 'end': 5})
        } else {
            setShowPage({'start': showPage.start+5, 'end': showPage.end+5})
        };
    };


    return  (
        <div className={classes.tabs}>
            {
                pagesNum===1 || showPage.start===0 ?
                    null : <i className="fa-solid fa-caret-left fa-2xl" onClick={handleClickLeft}></i>
            }
            {pages.slice(showPage.start,showPage.end).map(p => {
                return (
                    <div 
                        key={p.room_quo_id} 
                        onClick={() => {handleClick(p.room_quo_id)}} 
                        className={classes.tab}
                        style={getStyle(p.room_quo_id)}
                    >
                        <span className={classes.tab_title}>{getPage(p.room_quo_id, p.room)}</span>
                    </div>
                )
            })}
            {
                pagesNum===1 || showPage.end===pagesNum*5 ? 
                    null : <i className="fa-solid fa-caret-right fa-2xl" onClick={handleClickRight}></i>
            }
        </div>
    );
};

export default FormPage;