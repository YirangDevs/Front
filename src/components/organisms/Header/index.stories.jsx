import React from "react"
import TopBar from "./index"
import Header from "../../../layout/Header"

export default {
    title : "TopBar",
    component : TopBar,
    decorators: [(Story) => <Header><Story/></Header>]
}

const Template = (args) => (
    <>
        <TopBar {...args}></TopBar>
    </>
)

export const DefaultTheme = Template.bind({})

export const DarkTheme = Template.bind({})
DarkTheme.args = {
    theme : "dark"
}

