import React from 'react';

function Home() {
    function handleClick() {
        var input = document.querySelector('#search-input');
        window.location.replace(`./#/video/${input.value}`)
    }

    return (
        <div class="Search">
            <input id="search-input" placeholder="Enter a youtube video ID" type="text"></input>
            <button id="search" onClick={handleClick}>Go</button>
        </div>
    )
}

export default Home;