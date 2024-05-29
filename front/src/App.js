import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Possibilities from './Components/Possibilities'
import Plans from './Components/Plans'
import Products from './Components/Products'
// import {makeStyles} from '@mui/styles'

// import SvgIcon from '../public/Group16svg'

// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   },
//   menuSpace: {
//     justifyContent: 'space-between'
//   }
// });
 

function App() {
  // const classes = useStyles();
  return (
    <div>
      <Header />
      <Main />
      <Possibilities />
      <Plans />
      <Products />
    </div>
  );
}

export default App;
