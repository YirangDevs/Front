import React, {useEffect, useState} from "react"
import styled from "styled-components"
import Row from "../../../../layout/Grid/Row";
import Col from "../../../../layout/Grid/Column";
import CheckBox from "../../../atoms/CheckBox";
import Image from "../../../atoms/Image";
import DefaultProfileImg from "../../../../img/ProfileDefaultImg.png"
import Typography from "../../../atoms/Typography";
import getAppliers from "../../../../service/api/get/get_appliers";

const headStyle = {
    backgroundColor : "#f5f5f5",
    borderTop : "1.8px solid black",
    borderBottom : "1px solid black",
    padding : "1rem"
}

const ProfileCard = styled.div`
  width : 100%;
  background-color : #f5f5f5;
  display : flex;
  padding : 2rem;
  align-items: center;
  border-bottom : 3px solid #bdbdbd ;
`

const VolunteerModalContent = ({visible, id}) => {

    const [appliers, setAppliers] = useState([])
    const [checked, setChecked] = useState("전체")

    const onChecked = (e) => {
        setChecked(e.target.value)
    }

    const translateServiceType = (type) => {
        if(type==="노력봉사") return "WORK"
        if(type==="말벗봉사") return "TALK"
    }

    useEffect(()=>{
        if(id===0) return;
        getAppliers(id).then((data)=>{
            console.log(data)
            setAppliers([...data.appliers])
        }).catch((e)=>{console.log(e); setAppliers([])})
    }, [id])

    useEffect(()=>{
        if(!visible) setChecked("전체")
    },[visible])


    return (
        <>
            <Row>
                <Col span={4} style={headStyle} justify={"center"} align={"center"}>
                    <CheckBox name={"type"} options={["전체"]} defaultChecked={[checked]} onChange={onChecked}></CheckBox>
                </Col>
                <Col span={4} style={headStyle} justify={"center"} align={"center"}>
                    <CheckBox name={"type"} options={["노력봉사"]} defaultChecked={[checked]} onChange={onChecked}></CheckBox>
                </Col>
                <Col span={4} style={headStyle} justify={"center"} align={"center"}>
                    <CheckBox name={"type"} options={["말벗봉사"]} defaultChecked={[checked]} onChange={onChecked}></CheckBox>
                </Col>
                <Col span={12}>

                    {
                        appliers.filter(user=>{
                            if(checked==="전체") return true
                            return user.serviceType===translateServiceType(checked)
                        }).map((user, index)=>{
                            return (
                                <ProfileCard key={index}>
                                    <Image src={user.profileImg ? user.profileImg : DefaultProfileImg} circle width={"5rem"}/>
                                    <Row style={{
                                        marginLeft : "2rem"
                                    }}>
                                        <Col span={12}>
                                            <Typography size={"1.5rem"} weight={"bold"}>{user.realname}</Typography>
                                        </Col>
                                        <Col>
                                            <Typography size={"0.8rem"} color={"gray"}>{user.email}</Typography>
                                        </Col>
                                    </Row>

                                </ProfileCard>
                            )
                        })
                    }


                </Col>
            </Row>
        </>
    )

}

export default VolunteerModalContent