module.exports = ({ name, price1, price2, receiptId }) => {
    const today = new Date();
return `
    <!doctype html>
        <html>
            <head><meta http-equiv=Content-Type content="text/html; charset=UTF-8">
            <style type="text/css">
            <!--
            span.cls_003{font-family:Arial,serif;font-size:18.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
            div.cls_003{font-family:Arial,serif;font-size:18.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
            span.cls_004{font-family:Arial,serif;font-size:14.4px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
            div.cls_004{font-family:Arial,serif;font-size:14.4px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
            span.cls_018{font-family:Arial,serif;font-size:12.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: underline}
            div.cls_018{font-family:Arial,serif;font-size:12.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
            span.cls_019{font-family:Arial,serif;font-size:9.4px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: underline}
            div.cls_019{font-family:Arial,serif;font-size:9.4px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
            span.cls_008{font-family:Times,serif;font-size:16.8px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
            div.cls_008{font-family:Times,serif;font-size:16.8px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
            span.cls_009{font-family:Times,serif;font-size:13.5px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
            div.cls_009{font-family:Times,serif;font-size:13.5px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
            span.cls_010{font-family:Times,serif;font-size:12.1px;color:rgb(0,0,0);font-weight:normal;font-style:italic;text-decoration: none}
            div.cls_010{font-family:Times,serif;font-size:12.1px;color:rgb(0,0,0);font-weight:normal;font-style:italic;text-decoration: none}
            span.cls_011{font-family:Arial,serif;font-size:12.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
            div.cls_011{font-family:Arial,serif;font-size:12.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
            span.cls_012{font-family:Times,serif;font-size:12.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
            div.cls_012{font-family:Times,serif;font-size:12.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
            span.cls_013{font-family:Times,serif;font-size:9.4px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
            div.cls_013{font-family:Times,serif;font-size:9.4px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
            span.cls_002{font-family:Times,serif;font-size:12.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
            div.cls_002{font-family:Times,serif;font-size:12.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
            span.cls_014{font-family:Times,serif;font-size:9.4px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
            div.cls_014{font-family:Times,serif;font-size:9.4px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
            span.cls_015{font-family:Arial,serif;font-size:9.9px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
            div.cls_015{font-family:Arial,serif;font-size:9.9px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
            span.cls_016{font-family:Arial,serif;font-size:12.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
            div.cls_016{font-family:Arial,serif;font-size:12.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
            span.cls_005{font-family:Arial,serif;font-size:12.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
            div.cls_005{font-family:Arial,serif;font-size:12.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
            span.cls_020{font-family:Arial,serif;font-size:8.1px;color:rgb(0,84,155);font-weight:normal;font-style:normal;text-decoration: underline}
            div.cls_020{font-family:Arial,serif;font-size:8.1px;color:rgb(0,84,155);font-weight:normal;font-style:normal;text-decoration: none}
            -->
            </style>
            <script type="text/javascript" src="6bbdee5c-eff4-11eb-a980-0cc47a792c0a_id_6bbdee5c-eff4-11eb-a980-0cc47a792c0a_files/wz_jsgraphics.js"></script>
            </head>
            <body>
            <div style="position:absolute;left:50%;margin-left:-306px;top:0px;width:612px;height:792px;border-style:outset;overflow:hidden">
            <div style="position:absolute;left:0px;top:0px">
            <img src="6bbdee5c-eff4-11eb-a980-0cc47a792c0a_id_6bbdee5c-eff4-11eb-a980-0cc47a792c0a_files/background1.jpg" width=612 height=792></div>
            <div style="position:absolute;left:90.12px;top:56.40px" class="cls_003"><span class="cls_003">${name}</span></div>
            <div style="position:absolute;left:90.12px;top:77.28px" class="cls_018"><span class="cls_018">600 M</span><span class="cls_019">OUNTAIN </span><span class="cls_018">D</span><span class="cls_019">RIVE </span><span class="cls_018">• S</span><span class="cls_019">AN </span><span class="cls_018">J</span><span class="cls_019">OSE</span><span class="cls_018">, CA 94965  •  415-321-0055  •  L</span><span class="cls_019">EED</span><span class="cls_018">@</span><span class="cls_019">ZOMMAIL</span><span class="cls_018">.</span><span class="cls_019">COM</span></div>
            <div style="position:absolute;left:143.16px;top:115.92px" class="cls_008"><span class="cls_008">S</span><span class="cls_009">OFTWARE </span><span class="cls_008">E</span><span class="cls_009">NGINEER AND </span><span class="cls_008">P</span><span class="cls_009">ROJECT </span><span class="cls_008">M</span><span class="cls_009">ANAGER</span></div>
            <div style="position:absolute;left:99.24px;top:143.76px" class="cls_010"><span class="cls_010">Relentless problem solver applying analytical, design, and technical skills.  Effective,</span></div>
            <div style="position:absolute;left:99.24px;top:157.68px" class="cls_010"><span class="cls_010">hands-on leader with outstanding success developing applications to analyze sales growth</span></div>
            <div style="position:absolute;left:99.24px;top:171.60px" class="cls_010"><span class="cls_010">and marketing strategy for established and startup firms in Silicon Valley. Gained early</span></div>
            <div style="position:absolute;left:99.24px;top:185.28px" class="cls_010"><span class="cls_010">experience with internship through Stanford’s program in entrepreneurship.</span></div>
            <div style="position:absolute;left:170.04px;top:235.20px" class="cls_011"><span class="cls_011">P R O F E S S I O N A L   E X P E R I E N C E</span></div>
            <div style="position:absolute;left:90.12px;top:260.88px" class="cls_012"><span class="cls_012">C</span><span class="cls_013">ROMEMCO </span><span class="cls_012">S</span><span class="cls_013">YSTEMS</span><span class="cls_012">, I</span><span class="cls_013">NC</span><span class="cls_012">.,  </span><span class="cls_002">S</span><span class="cls_014">ANTA </span><span class="cls_002">C</span><span class="cls_014">LARA</span><span class="cls_002">, CA</span></div>
            <div style="position:absolute;left:471.72px;top:260.88px" class="cls_002"><span class="cls_002">2001 </span><span class="cls_014">TO </span><span class="cls_002">P</span><span class="cls_014">RESENT</span></div>
            <div style="position:absolute;left:90.12px;top:277.20px" class="cls_012"><span class="cls_012">Software Developer and Project Manager</span><span class="cls_002">. Supervised entire software development</span></div>
            <div style="position:absolute;left:90.12px;top:291.36px" class="cls_002"><span class="cls_002">lifecycle, from analysis of client needs to prototyping and implementation. Sped resolution of</span></div>
            <div style="position:absolute;left:90.12px;top:305.28px" class="cls_002"><span class="cls_002">common inquiries by over 70% with faster analysis. Converted several applications from Perl</span></div>
            <div style="position:absolute;left:90.12px;top:319.20px" class="cls_002"><span class="cls_002">to a J2EE web application in Java using Oracle databases (SQL, PL/SQL).</span></div>
            <div style="position:absolute;left:90.12px;top:337.44px" class="cls_015"><span class="cls_015">NOTABLE ACCOMPLISHMENTS</span></div>
            <div style="position:absolute;left:99.48px;top:351.12px" class="cls_016"><span class="cls_016">•</span><span class="cls_005"> </span><span class="cls_002">  Hands-on development and management of code tracking application used internally and</span></div>
            <div style="position:absolute;left:117.48px;top:365.28px" class="cls_002"><span class="cls_002">to support clients worldwide.</span></div>
            <div style="position:absolute;left:99.48px;top:381.36px" class="cls_016"><span class="cls_016">•</span><span class="cls_005"> </span><span class="cls_002">  Success of project led to promotion and opportunity to lead significant new project.</span></div>
            <div style="position:absolute;left:99.48px;top:397.20px" class="cls_016"><span class="cls_016">•</span><span class="cls_005"> </span><span class="cls_002">  Application achieved national recognition and was adopted by DOD for top-secret</span></div>
            <div style="position:absolute;left:117.48px;top:411.36px" class="cls_002"><span class="cls_002">projects.</span></div>
            <div style="position:absolute;left:90.12px;top:431.28px" class="cls_011"><span class="cls_011">Skills and Development Tools</span></div>
            <div style="position:absolute;left:90.12px;top:451.44px" class="cls_012"><span class="cls_012">Programming Languages:</span><span class="cls_002"> Assembly languages, Basic, C, C++, HTML, MMX, Perl, PHP,</span></div>
            <div style="position:absolute;left:90.12px;top:465.36px" class="cls_002"><span class="cls_002">PLC Ladder, Tcl/Tk, Java, SQL, PL/SQL, Javascript, Oracle Reports, Microsoft Visual C++</span></div>
            <div style="position:absolute;left:90.12px;top:481.20px" class="cls_012"><span class="cls_012">Platforms/Operating Systems:</span><span class="cls_002"> UNIX, Windows 2000 Server, Macintosh, LINUX, MS-DOS,</span></div>
            <div style="position:absolute;left:90.12px;top:495.36px" class="cls_002"><span class="cls_002">Oracle Developer Suite, and XP Programming</span></div>
            <div style="position:absolute;left:90.12px;top:511.20px" class="cls_012"><span class="cls_012">Internet Standards: </span><span class="cls_002">XML/SOAP, HTTP/SSL, XHTML/CSS, SMTP, H323, TCP/IP, MIME,</span></div>
            <div style="position:absolute;left:90.12px;top:525.36px" class="cls_002"><span class="cls_002">CGI, LDAP</span></div>
            <div style="position:absolute;left:90.12px;top:545.28px" class="cls_012"><span class="cls_012">Software:</span></div>
            <div style="position:absolute;left:90.12px;top:565.44px" class="cls_012"><span class="cls_012">Analysis</span><span class="cls_002">: UML Design & Modeling, MS Office, Adobe PhotoShop.</span></div>
            <div style="position:absolute;left:90.12px;top:581.28px" class="cls_012"><span class="cls_012">Database</span><span class="cls_002">: MySQL, SQL Plus.</span></div>
            <div style="position:absolute;left:90.12px;top:598.08px" class="cls_012"><span class="cls_012">Development</span><span class="cls_002">: Dreamweaver Ultra Dev, Fireworks, XML, Oracle JDeveloper, OC4J, CVS,</span></div>
            <div style="position:absolute;left:90.12px;top:612.96px" class="cls_002"><span class="cls_002">Eclipse, Apache Maven, Ant, Visual Works, Xemacs, WSFTP, JMeter, Gemstone.</span></div>
            <div style="position:absolute;left:150.60px;top:648.00px" class="cls_011"><span class="cls_011">E D U C A T I O N   A N D   A F F F I L I A T I O N S</span></div>
            <div style="position:absolute;left:98.76px;top:672.00px" class="cls_002"><span class="cls_002">Masters in Computer Science, Stanford University, Palo Alto, CA -  2000</span></div>
            <div style="position:absolute;left:227.89px;top:772.00px" class="cls_020"><span class="cls_020">Resume Contributed for Sample Purposes Only</span></div>
            <div style="position:absolute;left:472.12px;top:772.00px" class="cls_020"><span class="cls_020"> </span><A HREF="http://www.shimmeringresumes.com">Written by ©Shimmering Resumes 2008</A> </div>
            </div>

            </body>
        </html>
    `;
};