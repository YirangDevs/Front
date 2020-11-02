import React from 'react'


const MenuMake = () => {
    return (
        <>
            <div className="make menu__make">
                <a className="make__btn" href="http://localhost:3000/create">
                    <span role="img" aria-label="create">✍</span>게시글 작성<span role="img" aria-label="create">✍</span>
                </a>
            </div>
        </>
    )
}

export default MenuMake;