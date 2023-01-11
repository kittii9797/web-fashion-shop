import React from 'react';
import Grid from '@material-ui/core/Grid';
import './styles.css';
import Button from '@material-ui/core/Button';


const MediawithText = () => {

    return (
    <div class="bodymonial">
        <section class="container">
        <div class="testimonial">
          <div class="avatar">
            <img src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=996&t=st=1673446329~exp=1673446929~hmac=0563605e5c5905a16cfffc84f6e11f3027c4015ff3627128e5a7c55e4693f8bf" alt="" />
          </div>
          <div class="body">
          <div class="header">
            <h1>Elina Wilson</h1>
            <p>★★★★★</p>
          </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde commodi possimus sequi esse, iste sunt?</p>
          </div>
        </div>

        <div class="testimonial">
          <div class="avatar">
            <img src="https://img.freepik.com/free-photo/portrait-smiling-attractive-redhead-young-woman-with-long-wavy-hair_295783-487.jpg?w=2000" alt="" />
          </div>
          <div class="body">
          <div class="header">
            <h1>Katie White</h1>
            <p>★★★★★</p>
          </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde commodi possimus sequi esse, iste sunt?</p>
          </div>
        </div>

        <div class="testimonial">
          <div class="avatar">
            <img src="https://img.freepik.com/free-photo/portrait-young-beautiful-playful-woman-with-bun-posing_176420-12392.jpg?w=2000" alt="" />
          </div>
          <div class="body">
          <div class="header">
            <h1>Mary Holmes</h1>
            <p>★★★★★</p>
          </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde commodi possimus sequi esse, iste sunt?</p>
          </div>
        </div>
      </section>
    </div>
     
    )
}

export default MediawithText;