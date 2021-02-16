/**
 * @author : chaeeun
 * @Date : 2021-02-16 23:47:36
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-02-17 00:01:01
 */

import React from 'react'
import ContentLayout from '../../../../layout/Content'
import Typo from '../../../atoms/Typography'


const MyPageContent = ({
    username,
    email,

}) => {

    return (
        <>
            <ContentLayout>
                <Typo>{username}</Typo>

            </ContentLayout>
        </>
    )

}

export default MyPageContent;