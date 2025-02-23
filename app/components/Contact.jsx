"use client";

import { Mail, Phone, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { motion } from "motion/react"

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "68d8c317-78b5-43ff-8d71-eb91978b391c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "nurealam151068@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+8801921342610",
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "WhatsApp",
      value: "+8801921342610",
    }
  ];

  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
      <motion.h4 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.3}}
      className="text-center mb-2 text-lg font-Ovo">Connect with me</motion.h4>
      <motion.h2 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.5}}
      className="text-center text-5xl font-Ovo">Get in touch</motion.h2>
      <motion.p 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.5, delay: 0.7}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I'd love to hear from you! If you have any questions, comments or feedback please use the form below.
      </motion.p>
      <motion.form 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.5, delay: 0.9}}
      onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-6 mt-10 mb-8'>
          <motion.input 
          initial={{opacity: 0, x: -50}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 0.6, delay: 1.1}}
            type="text" 
            placeholder='Enter your name' 
            required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-gray-700' 
            name='name'
          />
          <motion.input 
          initial={{opacity: 0, x: 50}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 0.6, delay: 1.2}}
            type="email" 
            placeholder='Enter your email' 
            required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-gray-700' 
            name='email'
          />
        </div>
        <motion.textarea 
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6, delay: 1.3}}
          rows='6' 
          placeholder='Enter your message' 
          required
          className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-gray-700' 
          name='message'
        ></motion.textarea>
        <motion.button 
        whileHover={{scale: 1.05}}
        transition={{duration: 0.3}}
          type='submit'
          className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'
        >
          Submit now 
          <span className="ml-2">→</span>
        </motion.button>
        <p className='text-center mt-4'>{result}</p>
      </motion.form>
      {/* Contact Information */}
      <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto mt-12">
        {contactInfo.map((info, index) => (
          <span
            key={index}
            className="flex flex-col items-center backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-black border dark:border-gray-700 dark:hover:shadow-white dark:hover:bg-darkHover/50"
          >
            <div className="p-3 rounded-full bg-primary/5 mb-4">
              {info.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
            <p className="text-muted-foreground text-center">{info.value}</p>
          </span>
        ))}
      </div>
    </motion.div>
  );
}