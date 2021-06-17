import React, {Component} from 'react'
import axios from "axios";
import MusicTable from "./components/MusicTable/MusicTable";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import SearchBar from "./components/SearchBar/SearchBar";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      music: null,
    };
  }

  componentDidMount() {
    console.log("Component mounted!");
  }

  async fetchMusic() {
    try {
      let response = await axios.get("http://www.devcodecampmusiclibrary.com/api/music");
      this.setState({
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
        <h1>Music Table</h1>
        {this.state.music ? (
          <MusicTable music={this.state.music} />
        ) : (
            <h1>Loading....</h1>
            )}
      </React.Fragment>
    );
  }
  
 
}

export default App;
