import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Parentbox">
    <div className="Foto">
      <img src="gambarrrrr.jpg"/>
    </div>
    <div className="Deskripsi">
      <p className="Cate">COFFEE ADDICT</p>
      <h1 className="Title">CAFE LATTE AFFOGATO</h1>
      <p className="Price">IDR 82.000 - 215.000</p>
      <p className="Info">
      Perpaduan espresso dan latte yang unik membuat orang yang tidak terlalu menyukai cita rasa kopi yang terlalu pahit dan serius, kini dapat menikmati varian rasa terbaru kami. Juga tersedia dalam beberapa ukuran yang cocok sesuai selera dan sangat praktis untuk dibawa kemana-mana namun tetap tidak meninggalkan kesan aesthetic. 
      </p>
      <div>
        <h2>Size</h2> 
      <button className="A">S = 236ml</button>
      <button className="B">M = 354ml</button>
      <button className="C">L = 473ml</button>
      <button className="D">XL = 591ml</button>
      </div>
      <button className="buy">BUY</button>
      <button className="Add">ADD ANOTHER MENU</button>
    </div>
   </div>
  );
}

export default App;



