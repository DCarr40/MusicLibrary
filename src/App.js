import React, {Component} from 'react'
import axios from "axios";
import MusicTable from "./components/MusicTable/MusicTable";
import NavBar from "./components/NavBar/NavBar";
// import SearchBar from "./components/SearchBar/SearchBar";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      music: [],
    };
  }

  componentDidMount() {
    console.log("Component mounted!");
    this.fetchMusic();
  }

  async fetchMusic() {
    try {
       let response = await axios.get("http://www.devcodecampmusiclibrary.com/api/music");
       debugger; this.setState({
         music: response.data,
      });
      console.log(this.state.music);
    } catch (err) {
      console.log(err);
    }
  }


  render() {
    console.log(this.state.music);
    console.log("Component rendered!");
    return (
      <React.Fragment>
        <NavBar />
        {/* <SearchBar/> */}
        <MusicTable music={this.state.music} />
      </React.Fragment>
    );
  }
  
 
}

export default App;
