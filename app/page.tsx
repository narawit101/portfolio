import React from 'react'
import Navbar from '@/components/navbar'
import '@/styles/homepage.css'
export default function page() {
  return (
    <>
      <Navbar />
      <div className="main-body">
        <section className='main-content'>
          <img className='bg-img' src="/bg.png" alt="" />
          <h1 className='head-title'>Narawit Soiaudom</h1>
          {/* <img className='profile-img' src="https://cms.dmpcdn.com/musicarticle/2021/02/10/859764d0-6b96-11eb-8049-198d8fbfb912_original.jpg" alt="" /> */}
          <img className='profile-img' src="/profile.jpg" alt="" />

          <p className='pharagraph'>Interested in frontend web application development. Skilled in HTML, CSS, and JavaScript. Able to create personal projects and continuously learn new technologies. Also committed to developing and expanding comprehensive software skills.
          </p>
        </section>
        <section className='section-skills' >
          <h1 className='skill-head'> ทักษะ</h1>
          <div className="categories-skill">
            <div className="container-skill">
              <p>Frontend</p>
              <div className="grid-skills">
                <div className="skil-item">HTML
                  <img src="/skill-icons--html.png" alt="" />
                </div>
                <div className="skil-item">CSS
                  <img src="/skill-icons--css.png" alt="" />
                </div>
                <div className="skil-item">JAVASCRIPT
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZR9npLfmApWYC0keCwuwCDzeini7NocCW8w&s" alt="" />
                </div>
                <div className="skil-item">PHP
                  <img src="/devicon--php.png" alt="" /></div>

                <div className="skil-item">react
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png" alt="" />
                </div>
                <div className="skil-item">nextjs
                  <img src="https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp" alt="" />
                </div>
              </div>
            </div>
            <div className="container-skill">
              <p>Backend</p>
              <div className="grid-skills">
                <div className="skil-item">Express.js

                  <img src="https://miro.medium.com/v2/resize:fit:1400/1*XP-mZOrIqX7OsFInN2ngRQ.png" alt="" />
                </div>
                <div className="skil-item">Node.js
                  <img src="https://bizidea.co.th/uploads/media/8d5e51c2c64f0014c503eb38568480ce.png" alt="" />

                </div>
                <div className="skil-item">SQL
                  <img src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2019/07/image2-1.png?fit=600%2C315&ssl=1" alt="" />
                </div>
              </div>

            </div>
            <div className="container-skill">
              <p> Database</p>
              <div className="grid-skills">
                <div className="skil-item">postgresql

                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png" alt="" />
                </div>
                <div className="skil-item">phpMyadmin
                  <img src="https://i0.wp.com/saixiii.com/wp-content/uploads/2017/04/logo-phpmyadmin.png?fit=1600%2C1131&ssl=1" alt="" />

                </div>
                <div className="skil-item">mongodb
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcC_kssKzVz-xOR9BM88d12Z3Ushqlg9olUg&s" alt="" />

                </div>

              </div>
            </div>
            <div className="container-skill">
              <p>Tools</p>
              <div className="grid-skills">

                <div className="skil-item">docker

                  <img src="https://www.opc-router.de/wp-content/uploads/2023/07/Docker_150x150px-01-01-01.png" alt="" />
                </div>
                <div className="skil-item">git
                  <img src="https://avatars.githubusercontent.com/u/18133?s=280&v=4" alt="" />

                </div>
                <div className="skil-item">figma
                  <img src="https://cdn.sanity.io/images/599r6htc/regionalized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png" alt="" />

                </div>

              </div>
            </div>
          </div>
        </section>
        <section className='section-product'>
          <h1 className='project-head'> Project & MiniProject</h1>
          <div className="project-container">
            <div className="project">
              <p>เว็บไซต์กระทู้สาธารณะ</p>

              <img src="/project1.png" alt="" />
            </div>
            <div className="project">
              <p>IOT ระบบแจ้งเตือนผ่านเซ็นเซอร์แจ้งเตือนผ่าน Telegram</p>

              {/* <img src="/project2.jpg" alt="" /> */}
              <img src="/project2.1.png" alt="" />
            </div>
            <div className="project">
              
              <p>เว็บไซต์เข้าคิวแจกเงิน</p>
              <img src="/project3.png" alt="" />
            </div>
            <div className="project">
              <p>แพลตฟอร์มการจองสนามกีฬาออนไลน์</p>
              <img src="/project4.png" alt="" />
            </div>
          </div>
        </section>
        <section className='section-contact' ><h1>ติดต่อ</h1>
          <div className="p">
            <div className='icon-text'>  <img src="data:image/png;base64,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"
              width={20} height={20} alt="" />
              0981848532</div>
            <div className='icon-text'>   <img
              width={20} height={20}
              src="/mdi--gmail.png" alt="" /> narawit532@gmail.com</div>
            <div className='icon-text'>  <img
              width={20} height={20}
              src="/line-app-logo-block.png" alt="" /> narawit101</div>
            <div className='icon-text-ig'>  <img
              width={20} height={20}
              src="/fe--instagram.png" alt="" /> <a href="https://www.instagram.com/iiceee.n/" target="_blank" rel="noopener noreferrer"> iiceee.n</a></div>
            <div className='icon-text-facebook'>  <img
              width={20} height={20}
              src="/--facebook.png" alt="" /> <a href="https://www.facebook.com/iceXD" target="_blank" rel="noopener noreferrer">Narawit Soiaudom</a></div>
          </div>
        </section>
      </div>
    </>
  )
}
