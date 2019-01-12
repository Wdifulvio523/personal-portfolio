import React from "react";
import Slider from "react-slick";

const settings = {
  // dots: true,
  infinite: true,
  autoplay: true,
  speed: 300,
  slideToShow: 1,
  slideToScroll: 1,
  swipeToSlide: true
};

const Testimonials = () => (
  <section id="testimonials">
    <div className="text-container">
      <div className="row">
        <div className="two columns header-col" />
        <div className="ten columns">
          <h1>Testimonials</h1>
          <ul>
            <Slider {...settings}>
              <li>
                <blockquote>
                  <p>
                    "William showed three of the most important attributes of a
                    successful student and software engineer: grit, curiosity
                    and a willingness to share the things he learned, so much so
                    that we hired him as a Project Manager to mentor a group of
                    students.""
                  </p>
                  <cite>Luis Hernandez - Instructor, Lambda School </cite>
                </blockquote>
              </li>
              <li>
                <blockquote>
                  <p>
                    William is one of the most patient and hardworking people I
                    know. He’s able to take tough material and make it simple
                    for others. He would be a terrific asset on any team”
                  </p>
                  <cite>Allen Hai - Section Leader, Lambda School</cite>
                </blockquote>
              </li>
              <li>
                <blockquote>
                  <p>
                    "I worked with William while he was a project manager at
                    Lambda School. William successfully managed and taught 10+
                    people while I worked with him. William always took
                    initiative when given a challenge. There were many times
                    William would come to me with ideas or solutions which freed
                    up invaluable hours in my day. I slept better knowing
                    William was on my team. I never had to micro manage and
                    always felt aligned with what William was leading. William
                    has an infectious positive attitude that makes everyone
                    better around him. He leads by example, and doesn't take
                    himself too seriously. I would hire William if I had the
                    chance."
                  </p>
                  <cite>Josh Knell - Instructor - UX/UI, Lambda School</cite>
                </blockquote>
              </li>
            </Slider>
          </ul>
        </div>
        {/* <div className="ten columns flex-container">
          <div className="flexslider">
            <ul className="slides">
              <li>
                <blockquote>
                  <p>
                    Your work is going to fill a large part of your life, and
                    the only way to be truly satisfied is to do what you believe
                    is great work. And the only way to do great work is to love
                    what you do. If you haven't found it yet, keep looking.
                    Don't settle. As with all matters of the heart, you'll know
                    when you find it.
                  </p>
                  <cite>Steve Jobs</cite>
                </blockquote>
              </li>

              <li>
                <blockquote>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum, nec
                    sagittis sem nibh id elit. Duis sed odio sit amet nibh
                    vulputate cursus a sit amet mauris.
                  </p>
                  <cite>Mr. Adobe</cite>
                </blockquote>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  </section>
);

export default Testimonials;
