import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'jquery'

import Container from './container/container';
import Header from './header/header';
function App() {
  return (
    <div className="App">
      <Header/>
      <Container/>
      
    </div>
  );
}

export default App;
