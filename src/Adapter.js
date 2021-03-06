import React, { Component } from 'react';

class Adapter extends Component {
  static getShows() {
    return fetch("http://api.tvmaze.com/shows")
      .then(res => res.json())
  }

  static getShowEpisodes(showID) {
    return fetch(`http://api.tvmaze.com/shows/${showID}/episodes`)
      .then(res => res.json());
  }
  render() {
    return null
  }
}

export default Adapter

/*
 static getShowEpisodes(showID) {
    let holder = fetch(`http://api.tvmaze.com/shows/${showID}/episodes`)
      .then(res => res.json());
    console.log(holder);
    return holder
  }
*/
