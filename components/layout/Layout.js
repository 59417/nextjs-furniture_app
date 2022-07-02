import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import classes from './Layout.module.css';


function Layout(props) {

    const date = new Date();
    const nowTime = date.getSeconds();
    console.log('Welcome!', nowTime);

    const userName = 'userName';
    
    const [isPanel, setIsPanel] = useState(false);
    function handleClick() {
        setIsPanel(!isPanel);
    };
    
    function getPanel() {
        if (isPanel) {
            return {display: 'block'};
        } else {
            return null;
        };
    };
    
    const router = useRouter();
    function handleLogout() {
        router.push('/login');
    };

    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <Link href='/'>
                    {/* <div className={classes.logo}>
                        <img src="https://www.woobetter-fuchu.com/upload/images/窩百態logo小.png" width="100px" alt="logo"/>
                    </div> */}
                    <div className={classes.mylogo}>
                        {/* <img src="https://www.woobetter-fuchu.com/upload/images/窩百態logo小.png" width="100px" alt="logo"/> */}
                        <img src="/houses.png" width="40px" alt="mylogo"/>
                        <span>估價系統</span>
                    </div>
                </Link>
                <nav> 
                    <ol>
                        <Link href='/'>
                            <li><span>精算估價</span></li>
                        </Link>

                        <Link href='/'>
                            <li><span>圖片</span></li>
                        </Link>

                        <Link href='/'>
                            <li><span>圖片估價</span></li>   
                        </Link>

                        <Link href='/'>
                            <li><span>工程估價</span></li>
                        </Link>
                    </ol>
                </nav>
                <div className={classes.account}>
                    <i className="fa-solid fa-user fa-lg" onClick={handleClick}></i>  
                </div>
            </div>
            <div className={classes.panel} style={getPanel()}>
                <div className={classes.info}>
                    <i className="fa-solid fa-user fa-2x"></i>  
                    <a>{userName}</a>  
                    <button type="button" onClick={handleLogout} value="登出">登出</button>
                </div>
            </div>
            <main className={classes.main}>{props.children}</main>
            {/* <main>{React.cloneElement(props.children, {loginState: isLogin, setLoginState: setLoginState})}</main> */}
        </div>
    )
    
} ;

export default Layout;