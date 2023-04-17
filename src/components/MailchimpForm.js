import MailchimpSubscribe from "react-mailchimp-subscribe";
import { useCallback, useState } from "react";

import { Newsletter } from "./Newsletter";
import styles from "../MailchimpForm.module.css";

const MailchimpForm = () => {
    const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [statusMsg, setStatusMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = useCallback((event) => {
        setEmail(event.target.value);
        setIsValid(validateEmail(event.target.value));
    }, []);

    const handleSubmit = useCallback(
        (formData, subscribe) => {
            if (isValid) {
                setIsLoading(true);
                subscribe(formData);
                setEmail("");
                setStatusMsg("Thank you for subscribing!");
                setIsLoading(false);
            } else {
                setStatusMsg("Please enter a valid email address.");
            }
        },
        [isValid]
    );

    return (
        <div className={styles.container}>
            <h2>Subscribe to our Newsletter:</h2>
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <Newsletter
                        status={status}
                        message={statusMsg || message}
                        onValidated={(formData) => handleSubmit(formData, subscribe)}
                        isLoading={isLoading}
                    />
                )}
            />
            {!isValid && <div className={styles.error}>Please enter a valid email address.</div>}
        </div>
    );
};

const validateEmail = (email) => {
    const re =
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return re.test(String(email).toLowerCase());
};

export default MailchimpForm;
