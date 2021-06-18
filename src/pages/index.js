import React,{useState} from "react"
import Layout from '../components/Layout'
import {AiFillPlayCircle} from 'react-icons/ai'
import {IoMdArrowRoundForward} from 'react-icons/io'
import ModalVideo from 'react-modal-video'

// markup
const IndexPage = () => {
  const [isopen, setIsopen] = useState(false)
const toggleModal = () => {
  setIsopen(!isopen)
}

  
  return (
 <Layout>
  <div className='welcome-page'>
    <div className='container'>
      <div className='hero-section'>
        <h1>Build internal tools, remarkably fast</h1>
        <p>Stop wrestling with UI libraries, hacking together data sources, and figuring out access controls. Start shipping apps that move your business forward.</p>
        <br/>
        <div className='cta-section d-flex justify-content-center'>
        <button className='btn cta-btn btn-primary btn-lg'>Try Super Power For Free <span><IoMdArrowRoundForward /></span> </button>


        <div className='watch-button'>
          <div class="d-flex align-items-center ">
            <div class="flex-shrink-0">
              <div>
                <AiFillPlayCircle className='watch-button-icon' size={40} />
              </div>
            </div>
            <div class="flex-grow-1 ms-3">
              <div className='watch-button-text' tabIndex={0} role='button' onKeyDown={() => toggleModal()} onClick={() => toggleModal()}>
                <div className='text-left watch-button-title'>Watch Demo</div>
                <div className=' text-left watch-button-meta'>4 min</div>
              </div>
            </div>
          </div>
        </div>


        </div>
      </div>
    </div>


    {/* VIDEO SECTION */}
    <div className='container'>
      <div className='video-banner' tabIndex={1} role='button' onKeyDown={() => toggleModal()} onClick={() => toggleModal()}>
      <img className='w-100' alt='video-back-drop' src='https://retool.com/static/25197658a6b942da270199b5344a6bd8/f4f38/retool-editor-screenshot.webp' />
        <div className='video-icon'>
            <AiFillPlayCircle className='video-icon-btn' />
        </div>
      </div>
    </div>

    {/* MODAL */}
    <ModalVideo  channel='youtube' autoplay isOpen={isopen} videoId="6YhqQ2ZW1sc"  onClose={() => toggleModal()} />

  </div>
 </Layout>
  )
}

export default IndexPage
