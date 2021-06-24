import React, {Component} from 'react'
import axios from "axios";
import MusicTable from "./components/MusicTable/MusicTable";
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      music: [],
      filters:""
    };
  }

  componentDidMount() {
    console.log("Component mounted!");
    this.fetchMusic();
  }

  //  test comment
  async fetchMusic() {
    try {
       let response = await axios.get("http://localhost:5000/api/songs");
        this.setState({
         music: response.data,
      });
      console.log(this.state.music);
    } catch (err) {
      console.log(err);
    }
  }

  handleChange(event){

    event.preventDefault();
    this.setState({filters:event.target.value})
    console.log(this.state.filters)
  }

  // gefiltefFish(){
  //   let musicData = this.state.music;
  //   let result = musicData.filter(trimData =>(item) {
  //       if(item.textContent.toLowerCase().indexOf(musicData) !== item.textContent.toLowerCase().indexOf(musicData)){
  //         item.closest("li").style.display = "block";
  //       }
  //   });
  // }



  render() {
  
    let newArrayOfMusic = this.state.music.filter(song => {
      if(song.title.toLowerCase().includes(this.state.filters.toLowerCase())){return true;}
      // else if(song.album.toLowerCase().includes(this.state.filters.toLowerCase())){return true;}
      // else if(song.artist.toLowerCase().includes(this.state.filters.toLowerCase())){return true;}
      // else if(song.genre.toLowerCase().includes(this.state.filters.toLowerCase())){return true;}
      // else if(song.releaseDate.toLowerCase().includes(this.state.filters.toLowerCase())){return true;}
      return true;
    });
      


 


    //
    console.log(this.state.music);
    console.log("Component rendered!");
    return (
      <React.Fragment>
        <NavBar />
        <SearchBar handleChange={(event)=>this.handleChange(event)}/>
        <MusicTable music={newArrayOfMusic} />
      </React.Fragment>
    );
  }
  
 
}

export default App;

/* 
array.filter -- remember if conditional returns true, song is part of new array
array.filter(.includes)-- look up .includes
once you search, make sure you save results to a variable, and pass in that variable to music table

*/
