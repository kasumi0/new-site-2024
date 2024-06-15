import { style } from "@vanilla-extract/css"

const styles = {
    box: style({
        width: 202,
        height: 252,
        backgroundColor: "white",
        border: "1px solid silver",
        borderRadius: 5,
        color: "black",
        boxShadow: "0 0 10px white"
    }),
    picture: style({
        width: "100%",
        height: 125
    }),
    image: style({
        borderStartStartRadius: 5,
        borderStartEndRadius: 5
    }),
    textBox: style({
        width: "100%",
        height: 125
    }),
    h2: style({
        margin: 0
    }),
    descriptionBox: style({
        width: 200,
        height: 70,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
    }),
    description: style({
        color: "black",
        margin: 0,
        overflowWrap: "break-word"
    })
}

export default styles
