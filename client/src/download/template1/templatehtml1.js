export default function htmlTemp(data) {
        const htmlTempst = `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Template</title>
                <link rel="stylesheet" href="style.css">
            </head>
            <body>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
                <div class="resume-wrapper">
                    <section class="profile section-padding">
                        <div class="container">
                            <div class="picture-resume-wrapper">
                        <div class="picture-resume">
                        <span><img src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg" alt="" /></span>
                        <svg version="1.1" viewBox="0 0 350 350">
                
                <defs>
                    <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9" result="cm" />
                    </filter>
                </defs>
                
                
                <g filter="url(#goo)" >  
                
                <circle id="main_circle" class="st0" cx="171.5" cy="175.6" r="130"/>
                
                <circle id="circle" class="bubble0 st1" cx="171.5" cy="175.6" r="122.7"/>
                <circle id="circle" class="bubble1 st1" cx="171.5" cy="175.6" r="122.7"/>
                <circle id="circle" class="bubble2 st1" cx="171.5" cy="175.6" r="122.7"/>
                <circle id="circle" class="bubble3 st1" cx="171.5" cy="175.6" r="122.7"/>
                <circle id="circle" class="bubble4 st1" cx="171.5" cy="175.6" r="122.7"/>
                <circle id="circle" class="bubble5 st1" cx="171.5" cy="175.6" r="122.7"/>
                <circle id="circle" class="bubble6 st1" cx="171.5" cy="175.6" r="122.7"/>
                <circle id="circle" class="bubble7 st1" cx="171.5" cy="175.6" r="122.7"/>
                <circle id="circle" class="bubble8 st1" cx="171.5" cy="175.6" r="122.7"/>
                <circle id="circle" class="bubble9 st1" cx="171.5" cy="175.6" r="122.7"/>
                <circle id="circle" class="bubble10 st1" cx="171.5" cy="175.6" r="122.7"/>
                </g>  
                </svg>
                    </div>
                        <div class="clearfix"></div>
                </div>
                    <div class="name-wrapper">
                        <h1>${data.firstName} <br/>${data.lastName}</h1><!-- YOUR NAME AND LAST NAME  -->
                    </div>
                    <div class="clearfix"></div>
                    <div class="contact-info clearfix">
                        <ul class="list-titles">
                            <li>Call</li>
                            <li>Mail</li>
                            <li>Web</li>
                            <li>Home</li>
                        </ul>
                        <ul class="list-content ">
                            <li>+34 123 456 789</li> <!-- YOUR PHONE NUMBER  -->
                            <li>j.anderson@gmail.com</li> <!-- YOUR EMAIL -->
                            <li><a href="#">janderson.com</a></li> <!-- YOUR WEBSITE  -->
                            <li>Los Angeles, CA</li> <!-- YOUR STATE AND COUNTRY  -->
                        </ul>
                    </div>
                    <div class="contact-presentation"> <!-- YOUR PRESENTATION RESUME  -->
                        <p><span class="bold">Lorem</span> ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod congue nisi, nec consequat quam. In consectetur faucibus turpis eget laoreet. Sed nec imperdiet purus. </p>
                    </div>
                    <div class="contact-social clearfix">
                        <ul class="list-titles">
                            <li>Twitter</li>
                            <li>Dribbble</li>
                            <li>Codepen</li>
                        </ul>
                        <ul class="list-content"> <!-- REMEMBER TO PUT THE URL ON THE HREF TAG  -->
                            <li><a href="">@janderson</a></li> <!-- YOUR TWITTER USER  -->
                            <li><a href="">janderson</a></li> <!-- YOUR DRIBBBLE USER  -->
                            <li><a href="">janderson</a></li> <!-- YOUR BEHANCE USER  -->
                        </ul>
                    </div>
                        </div>
                    </section>
                
                <section class="experience section-padding">
                    <div class="container">
                        <h3 class="experience-title">Experience</h3>
                    
                    <div class="experience-wrapper">
                        <div class="company-wrapper clearfix">
                            <div class="experience-title">Company name</div> <!-- NAME OF THE COMPANY YOUWORK WITH  -->
                        <div class="time">Nov 2012 - Present</div> <!-- THE TIME YOU WORK WITH THE COMPANY  -->
                        </div>
                        
                        <div class="job-wrapper clearfix">
                            <div class="experience-title">Front End Developer </div> <!-- JOB TITLE  -->
                        <div class="company-description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>  <!-- JOB DESCRIPTION  -->
                        </div>
                        </div>
                        
                        <div class="company-wrapper clearfix">
                            <div class="experience-title">Company name</div> <!-- NAME OF THE COMPANY YOUWORK WITH  -->
                        <div class="time">Nov 2010 - Present</div> <!-- THE TIME YOU WORK WITH THE COMPANY  -->
                        </div>
                        
                        <div class="job-wrapper clearfix">
                            <div class="experience-title">Freelance, Web Designer / Web Developer</div> <!-- JOB TITLE  -->
                        <div class="company-description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>  <!-- JOB DESCRIPTION  -->
                        </div>
                        </div>
                        
                        <div class="company-wrapper clearfix">
                            <div class="experience-title">Company name</div> <!-- NAME OF THE COMPANY YOUWORK WITH  -->
                        <div class="time">Nov 2009 - Nov 2010</div> <!-- THE TIME YOU WORK WITH THE COMPANY  -->
                        </div> 
                        
                        <div class="job-wrapper clearfix">
                            <div class="experience-title">Web Designer </div> <!-- JOB TITLE  -->
                        <div class="company-description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>   <!-- JOB DESCRIPTION  -->
                        </div>
                        </div>
                        
                    </div><!--Skill experience-->
                    
                    <div class="section-wrapper clearfix">
                        <h3 class="section-title">Skills</h3>  <!-- YOUR SET OF SKILLS  -->
                            <ul>
                                <li class="skill-percentage">HTML / HTML5</li>
                                <li class="skill-percentage">CSS / CSS3 / SASS / LESS</li>
                                <li class="skill-percentage">Javascript</li>
                                <li class="skill-percentage">Jquery</li>
                                <li class="skill-percentage">Wordpress</li>
                                <li class="skill-percentage">Photoshop</li>
                            
                            </ul>
                        
                    </div>
                    
                    <div class="section-wrapper clearfix">
                        <h3 class="section-title">Hobbies</h3>  <!-- DESCRIPTION OF YOUR HOBBIES -->
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p> 
                    </div>
                    
                    </div>
                </section>
                
                <div class="clearfix"></div>
                </div>
                <script src="index.js"></script>
            </body>
        </html>
            `;
            return htmlTempst
};

