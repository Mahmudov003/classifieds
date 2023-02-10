import React from "react";

function Registration() {
  return (
    <section>
      <div className="registration">
        <div className="registration-header">
          <h3>Ro'yhatdan o'tish</h3>
        </div>
        <form action="" className="registration-form">
          <label htmlFor="user-name">
            Ism
            <input type="text" name="name" id="user-name" />
          </label>
          <label htmlFor="user-surname">
            Familya
            <input type="text" name="surname" id="user-surname" />
          </label>
          <label htmlFor="user-phone">
            Telefon raqami
            <input type="text" name="phone" id="user-phone" />
          </label>
          <label htmlFor="user-password">
            Parol
            <input type="password" name="password" id="user-password" />
          </label>
          <label htmlFor="user-reload-password">
            Parolni tasdiqlash
            <input type="password" name="password" id="user-reload-password" />
          </label>
          <button id="registration-submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Registration;
