import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h2>Welcome to Furry Friends & Care!</h2>
        <p>My name is Yuliya!</p>
      </div>
    </div>
  );
}

export default AboutPage;
