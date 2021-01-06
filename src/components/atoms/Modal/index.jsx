/**
 * @Author : chaeeun
 * @Date : 2020-12-30 18:37:07
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-01-06 20:58:33
 */

import React, { useState } from 'react'
import styled from 'styled-components'
import Col from '../../../layout/Grid/Column'
import Row from '../../../layout/Grid/Row'

const ModalWrapper = styled.div`
 display : ${props => (props.visible) ? `flex` : `none`};
 justify-content: center;
 align-items: center;
 flex-direction : column;
 top:0;
 right : 0;
 left : 0;
 bottom : 0;
 position : absolute;

 
 background-color: rgba(0, 0, 0, 0.6);
`



const ModalContainer = styled.div`
 display : ${props => (props.visible) ? `flex` : `none`};
 flex-direction : column;
 justify-content: center;
 align-items: center;
 width : auto; 
 height : auto;
 max-height : 60%;
 background-color: white;
 border-radius: 3px;
// antd
 position : relative;
 margin : auto auto;

`
const CloseButton = styled.button`
position : absolute;
top : 0;
right : 0;
padding : 0;

background-color : white;
border : 0;
outline : 0;
cursor : pointer;
display :block;
width : 54px;
height : 54px;

`

const ModalHeader = styled.div`
// antd
padding: 16px 24px;
color: rgba(0,0,0,.85);
background: #fff;
border-bottom: 1px solid #f0f0f0;
border-radius: 2px 2px 0 0;
line-height: 22px;
font-size: 16px;
font-weight: 600;

// my
width : 100%;
box-sizing : border-box;

`


const ModalContent = styled.div`
padding: 24px;
width : inherit;
box-sizing : border-box;
`


/**
 * @param title - modal title
 * @param visible true - open Modal / false - close Modal
 * @param closable true - 닫기 버튼 있음 / false - 닫기버튼 없음
 * @param maskClosable true - 배경 클릭시 모달 꺼짐 / false - 배경 클릭시 모달 안꺼짐
 * @param onClose - 모달 닫는 함수넣어주기 
 * @param size - 가로 크기 조절 
 * @param children 컴포넌트 테그 사이에 값을 조회
 * @see antD Modal
 */

const stopBubbling = (e) => {
    e.stopPropagation()
}

const Modal = ({ title, visible, closable, maskClosable, onClose, children, size }) => {



    return (
        <>
            <ModalWrapper
                visible={visible}
                onClick={maskClosable ? onClose : null}
            >
                <Row justify="center" gutter={[10, 10]}>
                    <Col span={size}>

                        <ModalContainer
                            visible={visible}
                            onClick={stopBubbling}
                        >
                            {closable && <CloseButton onClick={onClose}>< i className="fas fa-times" /></CloseButton>}

                            <ModalHeader>
                                {title}
                            </ModalHeader>

                            <ModalContent>
                                {children}
                            </ModalContent>
                        </ModalContainer>
                    </Col>
                </Row>

            </ModalWrapper>
        </>
    )
}

export default Modal;