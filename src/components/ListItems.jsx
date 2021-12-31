import styles from "../styles/ListItems.module.scss"

const ListItems = ({ listItems }) => {
    return (
        <>
            {listItems.map((listItem, index) => (
                <li className={styles.list_item} key={index}>
                    {listItem}
                </li>
            ))}
        </>
    )
}

export default ListItems
