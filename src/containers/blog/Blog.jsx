import React from 'react';
import './blog.css';
import { Article } from "../../components";
import blog01Image from "../../assets/blog01.png";
import blog02Image from "../../assets/blog02.png";
import blog03Image from "../../assets/blog03.png";
import blog04Image from "../../assets/blog04.png";
import blog05Image from "../../assets/blog05.png";

function Blog(props) {
    return (
        <div className="gpt3__blog section__padding">
            <div className="gpt3__blog-title">
                <h1 className="gradient__text">A lot is happening,
                    We are blogging about it.</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container-A">
                    <Article articleImage={blog01Image} articleDate="15/06/2022" articleTitle="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                </div>
                <div className="gpt3__blog-container-B">
                    <Article articleImage={blog02Image} articleDate="14/06/2022" articleTitle="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                    <Article articleImage={blog03Image} articleDate="13/06/2022" articleTitle="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                    <Article articleImage={blog04Image} articleDate="12/06/2022" articleTitle="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                    <Article articleImage={blog05Image} articleDate="11/06/2022" articleTitle="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                </div>
            </div>
        </div>
    );
}

export default Blog;