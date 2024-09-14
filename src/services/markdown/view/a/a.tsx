import Link from "next/link"
import React, { DetailedHTMLProps } from "react"
import LinkCustom from "./components/link-custom/link-custom"

const A = (
    props: DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
    >
) => {
    if (props.href === props.children)
        return (
            <span
                style={{
                    width: "100%",
                    marginTop: 4,
                    border: "1px solid silver",
                    borderRadius: 8
                }}
            >
                <LinkCustom url={props.href as string} />
            </span>
        )

    return (
        <Link href={props.href as string} target="_blank">
            {props.children}
        </Link>
    )
}

export default A
