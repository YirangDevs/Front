/**
 * @Author : chaeeun
 * @Date : 2020-12-21 16:52:38
 * @Last Modified by: euncherry
 * @Last Modified time: 2020-12-21 16:53:23
 */


import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  overflow: auto;
  outline: 0;
`

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 0;
`

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: auto;
  max-width: 80%;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 30px 20px;

`
const CloseButton = styled.div`
  display : flex;
  flex-direction : row-reverse;
  font-weight: 700; 
  text-shadow: 0 1px 0 #fff;
  border : none;
  background-color: white;
  cursor: pointer;
`

function Modal({
    className,
    onClose,
    maskClosable,
    closable,
    visible,
    children,
}) {
    const onMaskClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose(e)
        }
    }

    const close = (e) => {
        if (onClose) {
            onClose(e)
        }
    }
    return (
        <>
            <ModalOverlay visible={visible} />
            <ModalWrapper
                className={className}
                onClick={maskClosable ? onMaskClick : null}
                tabIndex="-1"
                visible={visible}
            >
                <ModalInner tabIndex="0" className="modal-inner">
                    {closable && <CloseButton className="modal-close" onClick={close} >x</CloseButton>}
                    {children}
                </ModalInner>
            </ModalWrapper>
        </>
    )
}

Modal.propTypes = {
    visible: PropTypes.bool,
}

Modal.defaultProps = {
    closable: true,
    maskClosable: true,
    visible: false
}

export default Modal