import React, { Suspense, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '../../components/Contact/Fox';
import UseAlert from '../../components/hooks/UseAlert';
import Alert from '../../components/Contact/Alert';

const Contact = () => {
  //const formRef = useRef(null);

  const { alert, showAlert } = UseAlert();

  const [form, setForm] = useState<any>({name: '', email: '', message: ''});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentAnimation, setCurrentAnimation] = useState<any>('idle');

  const handleChange = (e: any) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const handleBlur = () => {
    setCurrentAnimation('idle');
  }

  const handleFocus = () => {
    setCurrentAnimation('walk');
  }

  const handleSubmit = async (e: any) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      setCurrentAnimation('hit')
      const formParams: any = {
        from_name: form.name,
        to_name: "Jude",
        from_email: form.email,
        to_email: 'judebb4@gmail.com',
        message: form.message
      }

      let emailjsResponse: any = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "",
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "",
        formParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      console.log(emailjsResponse)
      if(emailjsResponse && emailjsResponse.status && emailjsResponse.status === 200) {
        showAlert({ show: true, text: "Message sent successfully!", type: "success"});
      } else {
        showAlert({ show: true, text: "I didn't recieve your message. There may have been an error. Please contact me directly at judebb4@gmail.com or try again.", type: "danger"});
      }
      setTimeout(() => {
        setCurrentAnimation('idle');
        setForm({ name: '', email: '', message: ''});
      });
      setIsLoading(false);
    } catch(e) {
      console.error(e); 
      showAlert({ show: true, text: "I didn't recieve your message. There may have been an error. Please contact me directly at judebb4@gmail.com or try again.", type: "danger"});
    }
  }

  return (
    <section className="relative flex lg:flex-row flex-col max-container">

      {alert.show ? <Alert {...alert} /> : ""}
      {/* <Alert {...alert} /> */}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text text-white">Get in touch</h1>

        <form
          className="w-full flex flex-col gap-7 mt-14"
        >
          <label 
            className="text-white font-semibold"
          >
            Name
            <input 
              type="text"
              name="name"
              className="input"
              placeholder="John Doe"
              required
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />

          </label>

          <label 
            className="text-white font-semibold"
          >
            Email
            <input 
              type="email"
              name="email"
              className="input"
              placeholder="John.Doe@email.com"
              required
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />

          </label>

          <label 
            className="text-white font-semibold"
          >
            Message
            <textarea 
              name="message"
              className="input"
              placeholder="How can I help?"
              required
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />

          </label>

          <button 
            className="btn"
            type="submit"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onClick={handleSubmit}
          >
            {isLoading ? `Sending...` : 'Send'}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]}/>
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <Fox
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
              currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact