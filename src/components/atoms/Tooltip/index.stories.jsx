import React from "react"
import ToolTip from "./index"
import Button from "../Button/index"

export default {
    component: ToolTip,
    title: 'ToolTip',
    decorators: [(Story) => <div style={{ display : "flex" }}><Story/></div>]
};

const Template = args => (
    <ToolTip {...args} >
        <Button types={"primary"} size={"large"}>테스트</Button>
    </ToolTip>)
;

export const Top = Template.bind({});
Top.args = {
    position : "top",
    content : "이름 : 김형욱\n나이 : 19\n봉사장소 : 수성구 달구벌대로"
};
export const Bottom = Template.bind({});
Bottom.args = {
    position : "bottom",
    content : "이름 : 김형욱\n나이 : 19\n봉사장소 : 수성구 달구벌대로"
};
export const Right = Template.bind({});
Right.args = {
    position : "right",
    content : "이름 : 김형욱\n나이 : 19\n봉사장소 : 수성구 달구벌대로"
};
export const Left = Template.bind({});
Left.args = {
    position : "left",
    content : "이름 : 김형욱\n나이 : 19\n봉사장소 : 수성구 달구벌대로"
};