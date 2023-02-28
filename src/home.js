import logo from './logo.svg';
import './home.css';
import DashboardButton from './components/dashboardbutton/dbButton';

function Home() {
  return (
    <div className="Home">
      <div className="FrontMessage">
        Lets Get Coding!
      </div>
      <DashboardButton />
    </div>
  );
}

export default Home;
