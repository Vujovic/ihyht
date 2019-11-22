import React from "react"
import styled from "styled-components"

export default () => (
  <ContactForm>
    <h2>联系我们</h2>
    <h3>Tell us a bit about your project</h3>
    <form
      name="contact"
      action="https://formsubmit.io/send/hello@njegos.dev"
      method="POST"
    >
      <input name="_formsubmit_id" type="hidden" />
      <input
        name="_redirect"
        type="hidden"
        id="name"
        value="https://njegos.dev"
      ></input>
      <label>
        您的姓名 :
        <input type="text" id="name" name="name" required />
      </label>
      <label>
        联系地址 :
        <input type="text" id="address" name="address" required />
      </label>
      <label>
        联系方式
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{11}"
          required
        />
      </label>
      <label>
        电子邮件
        <input type="email" name="email" id="email" required />
      </label>
      <label>
        项目类型
        <input type="text" name="subject" id="subject" required />
      </label>
      <label>
        留言信息
        <textarea name="message" id="message" rows="3" required />
      </label>
      <input type="submit" id="submit" />
    </form>
  </ContactForm>
)

const ContactForm = styled.div`
  background-color: #fff;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.15);
  max-width: 960px;
  padding: 20px 0;
  h2 {
    padding: 0 50px 0 200px;
    text-align: center;
  }
  h3 {
    color: #555555;
    font-weight: 400;
    padding: 0 50px 0 200px;
    text-align: center;
  }
  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 50px 0 200px;
    label {
      margin: 15px 0;
    }
    input,
    textarea {
      background-color: #eee;
      border: none;
      border-radius: 10px;
      box-sizing: border-box;
      display: block;
      margin: 0 auto;
      font-family: inherit;
      font-size: inherit;
      padding: 8px 15px;
      width: 375px;
    }
    #submit {
      align-self: flex-start;
      background-color: #2e83e6;
      border-radius: 50px;
      color: #fff;
      cursor: pointer;
    }
  }
`
