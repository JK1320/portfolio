import React, { useRef, useState } from 'react';
import "./contact.css";
import emailjs from 'emailjs-com';

const Contact = () => {
    const formRef = useRef();
// const [done, setDone] = useState(false);


//  const reset = () => {
//     formRef.current.value = "";
//   };
// const handleClick= () => {
//  formRef.current.reset();
// }

    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_155ff5g",
          "template_9ey3a7p",
          formRef.current,
          "TAafFvEsKqP6ItEaL"
        )
        .then(
          (result) => {
            console.log(result.text);
            // setDone(true);
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    };

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src="data:image/png;base64,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" alt="" className="c-icon" />
                            07803702899
                        </div>
                        <div className="c-info-item">
                            <img src="data:image/png;base64,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" alt="" className="c-icon" />
                            kaurjus1@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src="data:image/png;base64,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" alt="" className="c-icon" />
                            https://github.com/JK1320
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Get in touch. Looking for full stack role.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" name="user_name" id="" placeholder="Name" />
                         <input type="text" name="user_subject" id="" placeholder="Subject" />
                          <input type="text" name="user_email" id="" placeholder="Email" />
                          <textarea name="message" id="" cols="" rows="5" placeholder="Message"></textarea>
                          <button>Submit</button>
                          {/* {done && "Thank you..."} */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
