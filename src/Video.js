import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Video() {
    const KEY = "AIzaSyAo9L34Cqn2JN9ib-3q9CBvCDm9Jtdlcv8";
    const { videoId } = useParams();
    const [items, setItems] = useState([]);
    const [isLoaded, setLoaded] = useState(false);
    useEffect(() => {
        fetchItems();
    }, []);

    async function fetchItems() {
        const fetchItems = await fetch(`https://www.googleapis.com/youtube/v3/videos?key=${KEY}&id=${videoId}&part=snippet,statistics`);
        const items = await fetchItems.json();
        setItems(items.items);
        setLoaded(true);
    }

    if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <div className="Video">
                {items.map(item => (
                    <div>
                        <h1>{item.snippet.title}</h1>
                        <iframe src={`https://youtube.com/embed/${item.id}`} frameBorder="0" allowFullScreen></iframe>
                        <h3>Description</h3>
                        <p className="description">{item.snippet.description}</p>
                        <hr />
                        <p className="count"><i className="fas fa-thumbs-up"></i>{item.statistics.likeCount}</p>
                        <p className="count"><i className="fas fa-thumbs-down"></i>{item.statistics.dislikeCount}</p>
                        <p className="count"><i className="fas fa-eye"></i>{item.statistics.viewCount}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default Video;