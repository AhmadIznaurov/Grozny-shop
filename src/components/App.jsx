import { Header } from './Header/Header'
import { GroznyShop } from './Content/GroznyShop'
import { OpenAdverst } from '../Pages/OpenAdverst'
import { Slider } from './Slider'


export const App = () => {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <GroznyShop />
        <OpenAdverst />
      </div>

    </div>
  );
}

