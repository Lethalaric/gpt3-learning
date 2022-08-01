import React from 'react';
import './article.css';

function Article({articleImage, articleDate, articleTitle}) {
    return (
        <div className="gpt3__blog-container__article">
            <div className="gpt3__blog-container__article-image">
                <img src={articleImage} alt="article"/>
            </div>
            <div className="gpt3__blog-container__article-content">
                <div>
                    <p>{articleDate}</p>
                    <h1>{articleTitle}</h1>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    );
}

export default Article;