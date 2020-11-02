import React from 'react'


const MenuMake = () => {



    const handleClick = () => {
        window.open('http://localhost:3000/create', 'window_name',
            'width=530,height=633,location=no,status=no,scrollbars=yes');
    }



    return (
        <>
            <div className="make menu__make" onClick={handleClick}>

                <span role="img" aria-label="create">✍</span>게시글 작성<span role="img" aria-label="create">✍</span>

            </div>
        </>
    )
}

export default MenuMake;