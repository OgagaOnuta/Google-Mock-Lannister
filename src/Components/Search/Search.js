import React from 'react';
import './Search.css';
import {HiOutlineSearch} from 'react-icons/hi';

class Search extends React.Component {
  render() {
    return (
      <div className="Search">
        <div className="SearchBox">
          <HiOutlineSearch />
          <input type="search" name="search" id="search" />
          <img src="assets/images/google-voice.png" alt="google voice" width="24" height="24" />
        </div>
        <button>Google Search</button>
        <button>I'm Feeling Lucky</button>
        <p>
          Google offered in: 
          <a href="https://www.google.com/setprefs?sig=0_E-TN-zbj_Md8WaqEl4N0lZfn58o%3D&hl=ha&source=homepage&sa=X&ved=0ahUKEwjw-L2th4T0AhXJqZUCHbQQBz8Q2ZgBCA4">Hausa</a>
          <a href="https://www.google.com/setprefs?sig=0_E-TN-zbj_Md8WaqEl4N0lZfn58o%3D&hl=ig&source=homepage&sa=X&ved=0ahUKEwjw-L2th4T0AhXJqZUCHbQQBz8Q2ZgBCA8">Igbo</a>
          <a href="https://www.google.com/setprefs?sig=0_E-TN-zbj_Md8WaqEl4N0lZfn58o%3D&hl=yo&source=homepage&sa=X&ved=0ahUKEwjw-L2th4T0AhXJqZUCHbQQBz8Q2ZgBCBA">Èdè Yorùbá</a>
          <a href="https://www.google.com/setprefs?sig=0_E-TN-zbj_Md8WaqEl4N0lZfn58o%3D&hl=pcm&source=homepage&sa=X&ved=0ahUKEwjw-L2th4T0AhXJqZUCHbQQBz8Q2ZgBCBE">Nigerian Pidgin</a>
        </p>
      </div>
    );
  }
}

export default Search;