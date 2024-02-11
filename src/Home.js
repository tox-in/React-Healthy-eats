import './App.css';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import Food from './components/Food';
import Category from './components/Category';
// import Register from './User/Register';

function Home() {
  return (
    <div>
      <Hero />
      <HeadlineCards/>
      <Food/>
      <Category/>
      {/* <Register/> */}
    </div>
  );
}

export default Home;