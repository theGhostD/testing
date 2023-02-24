
import '../../App.css';
import Navigationcomponent from '../Navigation/Navigation.component';

function App() {
  const theCate = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]


  return (
      <div className="App">
      {
        theCate.map((value) => {
          return (
            <div className="main-container" key={value.id} >
              <div className="inner-container" style={
                {backgroundImage : `url("${value.imageUrl}")`}
                
              }>
                <div className="contentDiv">
                  <p >{value.title}</p>
                  <p>shop now</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  
  );
}

export default App;
