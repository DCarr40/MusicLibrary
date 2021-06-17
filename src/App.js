import React, {Component} from 'react'
import axios from "axios";

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
        music: response.data.results,
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

      </React.Fragment>
    );
  }
  
 
}

export default App;
