export default function htmlTemp1(data) {
        const addSkill = (data) => {
            let skillLi = '';
        for (let key in data) {
            // if undifined continue loop
            if (data[key] === undefined) continue;
            let newSkill = 
                            `
                            <li class="skill-percentage">${key}</li>
                            `
            skillLi += newSkill;
            }
        return skillLi;}
        const htmlTempst = `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${data.firstName}  ${data.lastName} Resume</title>
                <link rel="stylesheet" href="style.css">
            </head>
            <body>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
                <div class="resume-wrapper">
                    <section class="profile section-padding">
                        <div class="container">
                            <div class="picture-resume-wrapper">
                        <div class="picture-resume">
                        <span><img src="${typeof data.files[0] === 'undefined' ? "" : data.files[0].name}" alt="" /></span>
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
                            <li>${data.cell}</li> <!-- YOUR PHONE NUMBER  -->
                            <li>${data.email}</li> <!-- YOUR EMAIL -->
                            <li><a href="${data.website}">${data.website}</a></li> <!-- YOUR WEBSITE  -->
                            <li>${data.address}</li> 
                        </ul>
                    </div>
                    <div class="contact-presentation"> 
                        <p><span class="bold">Professional Overview</span> <br> ${data.overview} </p>
                    </div>
                    <div class="contact-social clearfix">
                        <ul class="list-titles">
                            <li>${data.github}</li>
                            <li>${data.linkedin}</li>
                            <li>${data.facebook}</li>
                        </ul>
                        <ul class="list-content"> 
                            <li><a href="${data.github}">${data.github}</a></li>
                            <li><a href="${data.linkedin}">${data.linkedin}</a></li>
                            <li><a href="${data.facebook}">${data.facebook}</a></li> 
                        </ul>
                    </div>
                        </div>
                    </section>
                
                <section class="experience section-padding">
                    <div class="container">
                        <h3 class="experience-title">Personal Projects</h3>
                    
                    <div class="experience-wrapper">
                        <div class="company-wrapper clearfix">
                            <a href="${data.projectlink1}">${data.projectlink1}</a>
                        </div>
                        
                        <div class="job-wrapper clearfix">
                            <div class="experience-title">${data.project1}</div> 
                        <div class="company-description">
                            <p>${data.description1}</p>
                        </div>
                        </div>
                        
                        <div class="company-wrapper clearfix">
                            <a href="${data.projectlink2}">${data.projectlink2}</a>
                        </div>
                        
                        <div class="job-wrapper clearfix">
                            <div class="experience-title">${data.project2}</div> 
                        <div class="company-description">
                            <p>${data.description2}</p>
                        </div>
                        </div>
                        
                        <div class="company-wrapper clearfix">
                            <a href="${data.projectlink3}">${data.projectlink3}</a>
                        </div>
                        
                        <div class="job-wrapper clearfix">
                            <div class="experience-title">${data.project3}</div> 
                        <div class="company-description">
                            <p>${data.description3}</p>
                        </div>
                        </div>
                        
                    </div><!--Skill experience-->
                    
                    <div class="section-wrapper clearfix">
                        <h3 class="section-title">Skills</h3> 
                            <ul>
                               ${addSkill(data.skills)}
                            </ul>
                        
                    </div>
                    
                    <div class="section-wrapper clearfix">
                        <h3 class="section-title">Hobbies</h3>  
                        <p>${data.hobbies}</p>
                    </div>
                    <div class="section-wrapper clearfix">
                        <h3 class="section-title">Education</h3> 
                        <div class="experience-title">${data.school}<span style="color: #9099a0;">  ${data.schooldate}  </span> </div> 
                        <p>${data.program} </p>
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

