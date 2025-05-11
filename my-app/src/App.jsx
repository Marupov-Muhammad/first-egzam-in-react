import './App.css'
import { Header, Card, Button, Clients, Tel, True, Number, Icon } from "./companent/companent"
import image35 from '@/assets/IMAGE (35).png'
import image36 from '@/assets/IMAGE (36).png'
import image37 from '@/assets/IMAGE (37).png'
import image38 from '@/assets/IMAGE (38).png'
import image39 from '@/assets/IMAGE (39).png'
import image40 from '@/assets/IMAGE (40).png'
import image41 from '@/assets/IMAGE (41).png'
import image42 from '@/assets/IMAGE (42).png'
import image43 from '@/assets/IMAGE (43).png'
import image44 from '@/assets/IMAGE (44).png'
import image45 from '@/assets/IMAGE (45).png'
import image47 from '@/assets/IMAGE (47).png'
import image49 from '@/assets/IMAGE (49).png'
import image50 from '@/assets/IMAGE (50).png'
import image51 from '@/assets/IMAGE (51).png'
import frame from '@/assets/Frame (32).png'

import frame31 from '@/assets/frame (31).png'


export default function App() {
  return <>
    <Header />
    <section className='textCenter'>
      <p style={{ fontSize: '40px', fontWeight: '500' }}>How our service works?</p>
      <p style={{ color: 'gray' }}>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed <br /> neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
    </section>
    <section>
      <div className='sec2'>
        <Card image={image36} name={"1. Schedule online"} title={"Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n."} />
        <Card image={image37} name={"2. Pay online easily"} title={"Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc."} />
        <Card image={image38} name={"3. Get your house cleaned"} title={"Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend."} />
      </div>
      <div className='allyour'>
        <Button button={"Get a free quote"} />
        <Button style={{ backgroundColor: "white", color: 'black', border: "1px solid gray" }} button={"Explore services"} />
      </div>
    </section>
    <section>
      <div className='centerAlltext'>
        <p style={{ fontSize: '40px', fontWeight: '700', fontFamily: 'sans-serif', color: '#211F54' }}>Our cleaning services have <br /> no comparison</p>
        <p style={{ color: 'gray' }}>Lobortis mattis odio leo eget mauris met aliquet semper molestie <br /> sollicitudin congue massa mauris lectus vitae cras viverra gravida sapien.</p>
      </div>
      <div className='flexing'>
        <Clients images={image39} name={"clients"} price={"3,480+"} />
        <Clients images={image40} name={"Jobs done"} price={"12,540+"} />
        <Clients images={image41} name={"Employees"} price={"100+"} />
      </div>
      <div style={{ display: 'flex', justifyContent: "center", marginTop: '60px', }}>
        <img src={frame31} alt="" />
      </div>
    </section>
    <section>
      <div className='city' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20%' }}>
        <p style={{ fontSize: '40px', fontWeight: '700', color: '#211F54' }}>Take a look at our <br /> professional services</p>
        <Button style={{ backgroundColor: "white", color: 'black', border: "1px solid gray", boxShadow: '4px 5px 10px 1px gray' }} button={"Explore services"} />
      </div>
    </section>
    <section>
      <div className='sec2'>
        <Card image={image42} name={"House cleaning"} title={"Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est."} />
        <Card image={image43} name={"Office cleaning"} title={"Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est."} />
        <Card image={image44} name={"Industrial cleaning"} title={"Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est."} />
      </div>
    </section>
    <section className='border' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <img src={image45} alt="" />
      </div>
      <div>
        <p>Covid-19 sanitization</p>
        <h1 style={{ fontSize: '50px' }}>We follow guidelines <br /> to keep you safe from <br /> the COVID-19 virus</h1>
        <p>Lobortis mattis odio leo eget mauris met aliquet <br /> semper molestie sollicitudin congue massa <br /> mauris lectus.</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Button button={"Get a free quote"} />
          <Tel />
        </div>
      </div>
    </section>
    <section className='forMedia' style={{ display: 'flex', alignItems: 'center', gap: '50px', marginTop: '100px' }}>
      <div>
        <img src={image47} alt="" />
      </div>
      <div>
        <h1 style={{ color: '#211F54', fontSize: '40px' }}>We cover all areas of <br /> your home or office</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua. Ut enim ad minim veniam.</p>
        <div style={{ display: 'flex', gap: '100px', marginTop: '30px' }}>
          <div>
            <True name={"Bathrooms"} />
            <True name={"Kitchens"} />
            <True name={"Living Rooms"} />
            <True name={"Carpets"} />
          </div>
          <div>
            <True name={"Bedrooms"} />
            <True name={"Offices"} />
            <True name={"Businesses"} />
            <True name={"Windows"} />
          </div>
        </div>
        <Button style={{ marginTop: '50px' }} button={"Get a free quote"} />
      </div>
    </section>
    <section>
      <div className='bossFlex'>
        <div>
          <h1 style={{ fontSize: '40px', color: '#211F54' }}>What makes us <br /> different?</h1>
          <p style={{ color: 'gray' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua. Ut enim ad minim veniam.</p>
          <p style={{ fontSize: '12px', color: 'gray' }}>Sed ut perspiciatis unde omnis iste natus error sit atem accusantium doloremque <br />  laudantiu sed ut.</p>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Number num={"10+"} year={"Years"} />
            <Number num={"5k+"} year={"Clients"} />
            <Number num={"20k+"} year={"Jobs done"} />
          </div>
          <Button style={{ marginTop: '50px' }} button={"Get a free quote"} />
        </div>
        <div>
          <img src={image49} alt="" />
        </div>
      </div>
    </section>
    <section className='kldnjwfkr' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '100px' }}>
      <div>
        <h1>Articles & resources</h1>
        <p>Lobortis mattis odio leo eget mauris met aliquet <br /> semper molestie sollicitudin congue massa <br /> mauris lectus.</p>
      </div>
      <div className='nfwiohrf' style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        <Button style={{ marginTop: '50px' }} button={"Get a free quote"} />
        <Button style={{ marginTop: '50px', backgroundColor: 'white', color: 'black', border: '1px solid black' }} button={"Browse articles"} />
      </div>
    </section>
    <section>
      <div className='emkojibgwr' style={{ display: 'flex', gap: '30px' }}>
        <Icon image={image50} title={"8 best vacuum cleaners to clean any mess for your home in 2022"} description={"Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males."} month={"Jan 28, 2022"} />
        <Icon image={image51} title={"How to properly disinfect your phone and other electronics"} description={"Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males."} month={"Feb 1, 2022"} />
      </div>
    </section>
    <section className='main' style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#F7F9FC', padding: '30px' }}>
      <div>
        <h1 style={{ color: '#211F54' }}>Request a free <br /> cleaning quote today</h1>
        <p style={{ color: 'gray' }}>In dignissim euismod pretium amet enim a eu nam <br /> ut urna accumsan pellentesque lacus duis pharetra <br /> eutortor.</p>
        <Tel />
        <p style={{ marginTop: '50px', color: '#211F54' }}>Not convinced yet?</p>
        <p style={{ color: 'gray' }}>Massa bibendum consectetur maurisid gravida <br /> purus, dolor dui amet morbi non nunc urna <br /> purus diam.</p>
        <Button style={{ marginTop: '50px', backgroundColor: 'white', color: 'black', border: '1px solid black' }} button={"Browse our packages"} />
      </div>
      <div>
        <div>
          <form class="quote-form">
            <input type="text" placeholder="Full name" />
            <input type="text" placeholder="Phone number" />
            <input type="text" placeholder="Address" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Requested service" />
            <input type="date" placeholder="Day of service" />
            <textarea placeholder="Add a note"></textarea>
            <Button style={{ marginTop: '50px' }} button={"Submit message"} />
          </form>
        </div>
      </div>
    </section>




    <footer className='footer'>
      <div>
        <h1 style={{ color: '#211F54' }}>Quality cleaning for <br /> your home</h1>
        <p style={{ color: 'gray' }}>Lorem ipsum dolor sit amet cteturdo <br /> adipiscing elit, sed do eiusmo.</p>
        <img style={{marginTop: '30px'}} src={frame} alt="" />
      </div>
      <div>
        <strong style={{ color: '#211F54' }}>Contact us</strong>
        <p style={{ color: 'gray' }}>1827 Nickel Road, Los Angeles, <br /> CA, 90017, United States</p>
        <p style={{ color: 'gray' }}>(414) 567 - 2109</p>
        <p style={{ color: 'gray' }}>contact@cleaning.com</p>
      </div>
      <div>
        <strong style={{ color: '#211F54' }}>Hours</strong>
        <strong style={{ color: '#211F54' }}>Monday to Friday</strong>
        <p style={{ color: 'gray' }}>6:00 AM - 9:00 PM</p>
        <strong style={{ color: '#211F54' }}>Saturday & Sunday</strong>
        <p style={{ color: 'gray' }}>8:00 AM - 8:00 PM</p>
      </div>
      <div>
        <strong style={{ color: '#211F54' }}>Get a free estimate</strong>
        <h2 style={{ color: '#0075FF' }}>(414) 567 - 2109</h2>
        <p style={{ color: 'gray' }}>Lorem ipsum dolor sit amet ectetur <br /> adipiscing elit, sed do eiusmod.</p>
        <Button button={"Request a free quote"} />
      </div>
    </footer>

    <div className='finish' style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '100px'}}>
          <div className="logo"><img src={image35} alt="" /></div>
          <p>
            Copyright © Cleaning X | Designed by <a href="#">BRIX Templates</a> – Powered by <a href="#">Webflow</a> – <a href="#">Licenses</a>
          </p>
        </div>
  </>
}