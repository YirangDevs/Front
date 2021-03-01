import React from "react"
import styled from "styled-components"
import store from "../../../../store/store";
import ACTION from "../../../../store/actions/action"
import Notification from "../../../../components/atoms/Notification";
import {connect} from "react-redux";
import {v4 as uuidv4} from "uuid"


const Container = styled.div`
  position: fixed;
  right : 0;
  top : 0;
  width: auto;
  height: auto;
  z-index: 1000;
`
class NotificationPool extends React.Component {
    render(){
        return (<Container>
                {this.props.notification.map((instance)=>{
                    console.log("instance" ,instance)
                    return <Notification title={instance.title} key={instance.uuid} uuid={instance.uuid} content={instance.content} status={instance.status} duration={instance.duration}></Notification>
                })}
            </Container>)

    }
}



NotificationPool.api = {
    add : (payload) => {
        const uuid = uuidv4()
        store.dispatch(ACTION.ADD_NOTIFICATION__ACTION_FUNC({
            notification : {
                ...payload,
                uuid : uuid
            }
        }))
    },

    delete : (payload) => {

        store.dispatch(ACTION.DELETE_NOTIFICATION__ACTION_FUNC({
            uuid : payload
        }))
    }
}

const mapStateToProps = (state) => {
    return {
        notification : state.notification_reducer.notification
    }
}

export default connect(mapStateToProps,null)(NotificationPool)