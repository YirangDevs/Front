import React from 'react'
import { Link } from "react-router-dom";


const MenuMake = () => {



    // const handleClick = () => {
    //     window.open('http://localhost:3000/create', 'window_name',
    //         'width=530,height=633,location=no,status=no,scrollbars=yes');
    // }



    return (
        <>
            <Link to="/create" className="make menu__make">
                <div >

                    <span role="img" aria-label="create">✍</span>게시글 작성<span role="img" aria-label="create">✍</span>

                </div>
            </Link>
        </>
    )
}

export default MenuMake;