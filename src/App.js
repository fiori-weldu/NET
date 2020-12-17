 

import Banner from './componenet/Banner';
import Nav from './componenet/Nav';
import Row from './componenet/Row';
import requests from './request';

function App() {
  return (
    
    <div className="App">
      <Nav />
      <Banner/>
      <Row title="NETFLIX ORGINALS" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow/>
      <Row title="Trending Now"
       fetchUrl={requests.fetchTrending} />
       <Row title="Top Rated"
       fetchUrl={requests.fetchTopRatedMovies} />
       <Row title="Action Movies"
       fetchUrl={requests.fetchActionMovies} />
       <Row title="Comedy Movies"
       fetchUrl={requests.fetchComedyMovies} />
       <Row title="Horror Movies"
       fetchUrl={requests.fetchHorrorMovies} />
       <Row title="Romantic Movies"
       fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
