import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faDribbble } from '@fortawesome/free-brands-svg-icons'
import Post from './Components/Post';
import Latest from './Components/Latest';
import "./App.scss";


function App() {
  return (
    <div className="container">
      <header>

        <h1 className="App-header">Furniture</h1>

      </header>

      <main>

        <Post />
        <Post />
        <Post />

      </main>

      <aside>

        <div className="categories">
          <div className='headcontainer'>
            <h3 className="widget-title">Categories</h3>
          </div>
          <div className='bodycontainer'>
            <a href="">
              <h5 class="widget-cate">Dining & Kitchen</h5>
            </a>
          </div>
          <div className='bodycontainer'>
            <a href="">
              <h5 class="widget-cate">Dining & Kitchen</h5>
            </a>
          </div>
          <div className='bodycontainer'>
            <a href="">
              <h5 class="widget-cate">Dining & Kitchen</h5>
            </a>
          </div>
          <div className='bodycontainer'>
            <a href="">
              <h5 class="widget-cate">Dining & Kitchen</h5>
            </a>
          </div>
          <div className='bodycontainer'>
            <a href="">
              <h5 class="widget-cate">Dining & Kitchen</h5>
            </a>
          </div>
          <div className='bodycontainer'>
            <a href="">
              <h5 class="widget-cate">Dining & Kitchen</h5>
            </a>
          </div>

        </div>

        <div className="categories">

          <div className='headcontainer'>
            <h3 className="widget-title">Latest Posts</h3>
          </div>

          <Latest />
          <Latest />
          <Latest />

        </div>

        <div className="categories">

          <div className='headcontainer'>
            <h3 className="widget-title">Socials</h3>
          </div>

          <div className="bodycontainer mt-7 mb-5">
            <ul className='social'>
              <li>
                <a className="icons me-3" href=''>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a className="icons me-3" href=''>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a className="icons me-3" href=''>
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a className="icons me-3" href=''>
                  <FontAwesomeIcon icon={faDribbble} />
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="categories">

          <div className='headcontainer'>
            <h3 className="widget-title">Tags</h3>
          </div>

          <div className="tagscontain">

            <a class="post-thumbnail" href="" title="Easy Fixes For Home Decor">
              <button className="but" variant="outline-secondary">Secondary</button>{' '}
            </a>
            <a class="post-thumbnail" href="" title="Easy Fixes For Home Decor">
              <button className="but" variant="outline-secondary">Secondary</button>{' '}
            </a>

          </div>
          <div className="tagscontain">

            <a class="post-thumbnail" href="" title="Easy Fixes For Home Decor">
              <button className="but" variant="outline-secondary">Secondary</button>{' '}
            </a>
            <a class="post-thumbnail" href="" title="Easy Fixes For Home Decor">
              <button className="but" variant="outline-secondary">Secondary</button>{' '}
            </a>

          </div>
          <div className="tagscontain">

            <a class="post-thumbnail" href="" title="Easy Fixes For Home Decor">
              <button className="but" variant="outline-secondary">Secondary</button>{' '}
            </a>
            <a class="post-thumbnail" href="" title="Easy Fixes For Home Decor">
              <button className="but" variant="outline-secondary">Secondary</button>{' '}
            </a>

          </div>
          <div className="tagscontain">

            <a class="post-thumbnail" href="" title="Easy Fixes For Home Decor">
              <button className="but" variant="outline-secondary">Secondary</button>{' '}
            </a>
            <a class="post-thumbnail" href="" title="Easy Fixes For Home Decor">
              <button className="but" variant="outline-secondary">Secondary</button>{' '}
            </a>

          </div>



        </div>

      </aside>

    </div>
  )
}

export default App;