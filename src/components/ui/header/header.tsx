import { Back } from "../back"
import MenuList from "./menuList/menuList.logic"
import styles from "./style.css"

interface props {
    /**
     * ページのタイトル
     */
    title: string
    /**
     * 戻る時のpath
     */
    path?: string
}

export const Header = (props: props) => {
    return (
        <header className={styles.header}>
            <Back {...props} />
            <div className={styles.menuBox}>
                <MenuList />
            </div>
        </header>
    )
}
