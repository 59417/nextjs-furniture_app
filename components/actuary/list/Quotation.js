import Link from 'next/link';
import classes from './Quotation.module.css';

function Quotation(props) {
    const data = props.data;
    return (
        <table className={classes.table}><tbody><tr>
            <td id={classes.edit}>
                <div>
                    <Link href={data.is_empty ? `/actuarial-valuate/${data.id}` : `/actuarial-valuate/${data.id}/1` }>
                        <button type="button" value="edit">
                            <i className="fa-solid fa-pen"></i>&nbsp;進入編輯
                        </button>
                    </Link>
                </div>
            </td>
            <td>{data.id}</td>
            <td>{data.version}</td>
            <td>{data.client}</td>
            <td>
                <button type="button" value="delete" id={classes.del}>
                    <i className="fa-solid fa-xmark"></i>&nbsp;確定刪除
                </button>
            </td>
            <td id={classes.copy}>
                <form>
                    <button type="submit" value="copy">
                        <i className="fa-solid fa-copy"></i>&nbsp;複製
                    </button>
                    <span>
                        <input type="text" required placeholder="輸入新估價單號碼" />
                    </span>
                </form>
            </td>
        </tr></tbody></table>
    )
};

export default Quotation;