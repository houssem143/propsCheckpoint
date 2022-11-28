import logo from './logo.svg';
import './App.css';
import Component from './profile/Component';

function App() {
  let fullName= 'Houssem Mguidich';
  let bio = 'I have good vibes';
  let profession = 'developper'
  let handleName = (x) => {
    alert (`The user name is ${x} `)
  }
  return (
    <div className="App">
      <Component name={fullName} bio={bio} job={profession} handleName={handleName}>
    <img src='https://audreytips.com/wp-content/uploads/2018/09/18-sites-de-photos-gratuites-libres-de-droit-a-usage-commercial-1.jpg' alt='photo' />
  
  </Component>
    </div>
  );
}

export default App;
