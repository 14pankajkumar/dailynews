import React, { Component } from "react";

export default class Newsitems extends Component {
  render() {
      let {title, description, imageUrl, newsUrl, author, date, source} = this.props
    return (
      <div className="my-3">
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex: 1, left: "90%"}}>
              {source}</span> 
          <img src={imageUrl} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}...
            </p>
            <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toDateString()} {new Date(date).toLocaleTimeString()} </small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
