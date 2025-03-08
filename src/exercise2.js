import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';

function exercise2() {

  const head1 = "Home Page";
  const head2 = "About Us";
  const head3 = "Contact Us";

  const message1 = "Welcome to our website.";
  const message2 = "We are passionate about delivering quality experiences.";
  const message3 = "Feel free to reach out to us via email or phone.";

  return (
    <div>
      <Home message={message1} header={head1} />
      <About message={message2} header={head2} />
      <Contact message={message3} header={head3} />
    </div>
  );
}

export default exercise2;
