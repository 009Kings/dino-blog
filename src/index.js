import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dino from './Dino';
import * as serviceWorker from './serviceWorker';

let post = {
  title: "dinosaurs are awesome",
  author: "stealthy stegasaurus",
  body: "check out this body property",
  comments: ["first!", "great post", "higher this author now!"]
}

ReactDOM.render(
  <React.StrictMode>
    <Dino
      title={post.title}
      author={post.author}
      body={post.body}
      comments={post.comments}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
