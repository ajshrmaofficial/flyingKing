import React from "react"
import { Image, View } from "react-native"
import stylesheet from "./stylesheet"

const King = ({kingPosY}) => {
    let kingHeigh = 50
    return(
        // <View style={[stylesheet.king, {bottom: kingPosY-kingHeigh}]}/>
        <Image source={require('../assets/king.png')} style={[stylesheet.king, {bottom: kingPosY-kingHeigh}]}/>
    )
}

export default King