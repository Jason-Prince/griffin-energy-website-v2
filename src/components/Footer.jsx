import { AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone } from "react-icons/ai"

import { VscLocation } from "react-icons/vsc"
import styles from "../styles/Footer.module.scss"

const contacts = [
  {
    icon: AiOutlinePhone,
    info: "480-235-0899",
  },
  {
    icon: AiOutlineMail,
    info: "info@griffinec.com",
  },
  {
    icon: VscLocation,
    info: "303 N. 350 W. Bountiful, Ut 84010",
  },
]

const Footer = () => {
  const sendMessage = (event) => {
    event.preventDefalut()
  }
  return (
    <>
      <div className={styles.grid_wrapper}>
        <div className={styles.item_info}>
          <div className={styles.item_info_wrapper}>
            <div className={styles.grid_info_phone}>
              <AiOutlinePhone className={styles.item_icon} />
              <div className={styles.item_info}>480-235-0899</div>
            </div>

            <div className={styles.grid_info_email}>
              <AiOutlineMail className={styles.item_icon} />
              <div className={styles.item_info}>info@griffinec.com</div>
            </div>

            <div className={styles.grid_info_location}>
              <VscLocation className={styles.item_icon} />
              <div className={styles.item_info}>303 N. 350 W. Bountiful, Ut 84010</div>
            </div>
          </div>
        </div>
        <div className={styles.item_field}>
          <form onSubmit={sendMessage}>
            <div className={styles.grid_field}>
              <label htmlFor="name" className={styles.item_label}>
                Name
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                required
                className={styles.item_input}
              />
            </div>
            <div className={styles.grid_field}>
              <label htmlFor="email" className={styles.item_label}>
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                className={styles.item_input}
              />
            </div>
            <div className={styles.grid_message}>
              <label htmlFor="message" className={styles.item_label}>
                Message
              </label>
              <textarea
                id="message"
                type="text"
                autoComplete="message"
                required
                className={styles.item_textarea}
              />
            </div>
            <div className={styles.grid_submit}>
              <button type="submit" className={styles.item_btn}>
                Send
              </button>
            </div>
          </form>
        </div>
        <div className={styles.grid_copyright}>
          <div className={styles.item_copyright}>© David Griffin 2021</div>
        </div>
      </div>
    </>
  )
}

export default Footer
