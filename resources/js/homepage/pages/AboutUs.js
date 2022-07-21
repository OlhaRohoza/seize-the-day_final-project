import './AboutUsStyle.css';


export function AboutUs() {
   

    
    return (
        // <div className='main'>
        //     <div>
        //         <h1 className="h1">Seize the day</h1>
        <div class="main_card">

            <div class="main">
                {/* <div className='main_text'>
                    <h1 className='main_text1'>How Seize The Day Can Benefit You</h1> 
                    <div className="card_image">
                        <img className="img" src="./images/desk-3076954_640.jpg/"/>
                    </div>
                    
                    <h2 className= 'text'>Every day is filled with a variety of feelings! </h2> 
                    <h3 className= 'text2'>We assist you in keeping precious memories alive..</h3> 
                    <div className='text3'>
                        <p>Every day, you can add a special image.</p>
                        <p>Never lose your crucial notes.</p>
                        <p>Your day can be reviewed.</p>
                        <p>You may sum up your day, week, month, and year.</p>
                        <p>You can look through your memories.</p>
                    </div>
                    <div className="card_content1">
                                <div className="card_title1">
                                <h2 className="card_title1"></h2>
                                <p className="card_text1"></p>
                                </div>
                    </div>
                </div> */}
                
                <div className="cards">
                    <div className="cards_item">
                        <div className="card">
                            {/* <div className="card_image">
                            <img className="img" src=""/>
                            </div> */}
                            <div className="card_content">
                                <div className="card_title">
                                <h2 className="card_title">Our Team</h2>
                                <p className="card_text"></p>
                                </div>
                                
                            </div>
                            <div className='about-team'>
                                <div>
                                  <div className='main_layer'>
                                     <img className="img2" src="./images/haris.webp"/>
                                     <p className='img_name'> Nallattuthodika HarisRahman</p>
                                     <p className='img_name'>junior full stack developer </p>
                                     <p className='icon_one'><img className='icon' src='./images/LinkedIn-Symbole.png'/>
                                     <a className='icon1' href='https://www.linkedin.com/in/nallattuthodika-harisrahman/'>https://www.linkedin.com/in/nallattuthodika-harisrahman/</a>
                                     </p>
                                     <p className='icon_one'><img className='icon_im' src='./images/email.webp'/>harisrahman9249@gmail.com</p>
                                     {/* <p className='git'><img className='icon_im_git' src='./images/git.jpg'/><a href='https://github.com/harisrahan9249'>https://github.com/harisrahan9249</a></p> */}
                                    
                                     
                                    </div>
                                    
                                </div>
                                <div>
                                  <div className='main_layer'>
                                     <img className="img1" src="./images/olha.jpg"/>
                                     <p className='img_name'> Olha Rohoza</p>
                                     <p className='img_name'>junior full stack developer</p>
                                     <p className='icon_one'><img className='icon' src='./images/LinkedIn-Symbole.png'/>
                                     <a className='icon1' href='https://www.linkedin.com/in/olha-rohoza/'>https://www.linkedin.com/in/olha-rohoza/</a>
                                     </p>
                                     <p className='icon_one'><img className='icon_im' src='./images/email.webp'/>
                                     <p className='icon2' >olha.rohoza@gmail.com</p>
                                     </p>
                                    </div>
                                    
                                </div>
                            </div>
                          
                        </div>
                    </div>
                  
                </div>
            </div>

        </div>
    )
}