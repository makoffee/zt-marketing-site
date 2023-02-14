import React, { useState } from 'react';
import Layout from "../components/layout"
import { Container, Box, Heading, Text, Link, Flex } from "../components/ui"
import SEOHead from "../components/head"
import { useForm } from "react-hook-form";

export default function Contact() {
  return (
    <Layout>
      <Box paddingY={4}>
        <Container>

        </Container>
      </Box>
    </Layout>
  )
}
export const Head = () => {
  return <SEOHead title="404: Page not found" />
}

export function App(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
      const [state, setState] = useState({
          isSubmitted: false,
          isError: false
        });    
  
      const onSubmit = (data) => {
          const formData = new FormData();
  
          // Hidden field key/values.
          formData.append("u", "4");
          formData.append("f", "4");
          formData.append("s", "s");
          formData.append("c", "0");
          formData.append("m", "0");
          formData.append("act", "sub");
          formData.append("v", "2");
          formData.append("or", "c0c3bf12af7fa3ad55cceb047972db9");
  
          // Form field key/values.
          formData.append("fullname", data.fullname);
          formData.append("email", data.email);
          formData.append("ca[1][v]", data.contactmessage);
          
          // Pass FormData values into a POST request to ActiveCampaign.
          // Mark form submission successful, otherwise return error state. 
          fetch('https://myaccount.activehosted.com/proc.php', {
              method: 'POST',
              body: formData,
              mode: 'no-cors',
          })
          .then(response => {
              setState({
                  isSubmitted: true,
              });
          })
          .catch(err => {
              setState({
                  isError: true,
              });
          });
      }
  
    return (
        <Layout>
      <Box paddingY={4}>
        <Container>
      <div>
          {!state.isSubmitted ? 
              <form onSubmit={handleSubmit(onSubmit)}>
                  <fieldset>
                      <legend>Contact</legend>
                      <div>
                          <div>
                              <div>
                                  <label htmlFor="fullname">Name</label>
                                  <input id="fullname" name="fullname" placeholder="Type your name" className={errors.fullname ? "c-form__textbox error" : "c-form__textbox"} {...register("fullname", { required: true })} />
                                  {errors.fullname && <div className="validation--error"><p>Please enter your name</p></div>}
                              </div>
                          </div>
                          <div>
                              <div>
                                  <label htmlFor="email">Email</label>
                                  <input id="email" name="email" placeholder="Email" className={errors.contactemail ? "c-form__textbox error" : "c-form__textbox"} {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
                                  {errors.email && <div className="validation--error"><p>Please enter a valid email</p></div>}
                              </div>
                          </div>
                          <div>
                              <div>
                                  <label htmlFor="contactmessage">Message</label>
                                  <textarea id="contactmessage" name="contactmessage" placeholder="Message" className={errors.contactmessage ? "c-form__textarea error" : "c-form__textarea"} {...register("contactmessage", { required: true })}></textarea>
                                  {errors.contactmessage && <div className="validation--error"><p>Please enter your message</p></div>}
                              </div>
                          </div>
                          <div>
                              <input type="submit" value="Submit" />
                          </div>
                      </div>
                  </fieldset>
                  {state.isError ? <p>Unfortunately, your submission could not be sent. Please try again later.</p> : null}    
              </form>
              : <p>Thank you for your message. I will be in touch shortly.</p>}
      </div>
              </Container>
      </Box>
    </Layout>
    );
  }