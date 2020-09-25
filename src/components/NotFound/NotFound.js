import React from "react";

const NotFound = () => (
  <div className="broken-body">
    <main role="main" id="container" className="main-container push">
      <section className="broken-container">
        <div className="content">
          <h2>404</h2>
          <p>Страница не существует!</p>
          <a href="/" className="btn">
            На главную
          </a>
        </div>
      </section>
    </main>
  </div>
);

export default NotFound;
