import './App.css'
import Navbar from './components/Navbar';
import ContactHeader from './components/ContactHeader';
import ContactForm from './components/contactForm';
const App=()=>{
return (
<>
<Navbar/>
<main className='main_container'>
<ContactHeader/>
<ContactForm/>
</main>
</>
);
};
export default App;


