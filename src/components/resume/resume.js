import React, { Component } from 'react';
import style from '../resume/resume.module.css';
import mekarosi from '../images/mekarosi.JPG';

export default class resume extends Component {
  render() {
    return (
      <div className={style.container}>
        <nav>
          <h1>
            <strong>Mekarosi Assa Portfolio</strong>
          </h1>
        </nav>
        <br />

        <div>
          <h2>Personal Information</h2>
          <br />

          <ul>
            <li>
              <strong>Name:</strong> Mekarosi Assa
            </li>
            <br />
            <li>
              <strong>Sex:</strong> Female
            </li>
            <br />
            <li>
              <strong>Address:</strong> 24/26 Olanipekun Street, Ikosi-Ketu
              Lagos State.
            </li>
            <br />
            <li>
              <strong>Description:</strong> I am a software developer, am
              proficency in Javascript and Ruby on Rails programming languages.
              Node.js and react.js and express.js are the Javascript Library
              that I am proficency in.{' '}
            </li>
            <br />
          </ul>
        </div>

        <img src={mekarosi} alt='mekarosi assa' />
        <br />

        <h2>Projects worked on</h2>
        <br />
        <ul>
          <li>Digital Clock</li>
          <br />
          <li>​Express App</li>
          <br />
          <li>​Shopping Cart App</li>
          <br />
          <li>​Events Todo App</li>
          <br />
          <li>​Volunteer Training For Web Developers App​</li>
          <br />
        </ul>

        <h2>Link to Github profile</h2>
        <a href='https://github.com/Mekarosi'>http://github.com/Mekarosi</a>
        <br />

        <footer>
          <br />
          <h2 class='inform-heading'>Contact Information</h2>
          <br />
          <a href='mailto:mekarosi_assa@yahoo.com'>mekarosi_assa@yahoo.com</a>
          <br />
          <p>
            <a href='+234-803-720-2424'>+234-803-720-2424</a>
          </p>
          <br />
        </footer>
      </div>
    );
  }
}
