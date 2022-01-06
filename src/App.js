import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { next } from './counterSlice'

function App() {

  const gif = useSelector((state) => state.counter.gif)
  const message = useSelector((state) => state.counter.message)
  const dispatch = useDispatch()

  return (
    <>
    <h1>
      <img className="header"
        src='https://joychurch.net/wp-content/uploads/2017/11/happy-thanksgiving-banner.png'
        alt='Happy Thanksgiving'
      />
    </h1>
    <p>
      <img className="bottomLeftPic"
        src='https://gobble-gobble-gobble.herokuapp.com/static/media/leaves.1ddf753d.png'
        alt='leaf swirl'
      />
      <img className="bottomRightPic"
        src='https://gobble-gobble-gobble.herokuapp.com/static/media/Cornucop1.6282d4d1.png'
        alt='cornucopia'
      />
    </p>
    <div>
      <img className="middleGIF"
        src = { gif.url }
        alt = { gif.name }
        onClick={() => dispatch(next())}
      />
      <span className="message">{message}</span>
    </div>
    </>
  );
}

export default App;
