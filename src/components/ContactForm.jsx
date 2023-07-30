import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import Button from "./Button";
import styles from "./ContactForm.module.css"
import {HiMail} from "react-icons/hi";
const ContactForm = () => {
  return (
    <>
    <section className={styles.container}>
    <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
          <Button text="VIA CALL" icon={<MdCall fontSize="24px"/>}/>
        </div>
        <Button text="VIA EMAIL FORM" isOutline="true" icon={<HiMail fontSize="24px"/>}/>
      

      <form>
        <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name"/>
        </div>
        <div className={styles.form_control}>
            <label htmlFor="email">E-Mail</label>
            <input type="email" name="email"/>
        </div>
        <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea rows="8" type="text" name="name"/>
        </div>
        <div className={styles.submit}>
            <Button text="SUBMIT" />
        </div>
    
      </form>
    </div>
<div className={styles.image}>
  <img src="/images/contact.png"></img>
</div>
    </section>

    </>
  );
};

export default ContactForm;
