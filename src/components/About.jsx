import React from "react"

const About = () => (
  <section id="about" className="about-me-area section-padding">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="section-title">
              <h2>about Eric Maicon</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="about-text">
            <p>I started working with Java, PHP and Adobe Flex. I have been working with PHP and Javascript for the last three years. Initially, I worked with Backbone, Angular (Ionic) and now I am focusing in React and its libraries. I have installed servers and dealt with DevOps teams. I have experience with development environment creation (Vagrant and Docker), cloud services (AWS - S3, SNS, Cloudfront, Route53, EC2 - Linode, Digital Ocean and Scaleway), CI/CD (Gitlab-ci, travis-ci and codeship), monitoring (new Relic) and logs (Sentry e Rollbar). Expertise with Oracle, MySQL and PostgreSQL. Experience with PLSQL language and also, NoSQL (Mongo).</p>

            <p>You can drop me a line at the following email or say hello by calling at my phone. You can also check about me on Github.</p>
            <ul>
                <li><i className="fa fa-envelope-open"></i>eric@ericmaicon.com.br</li>
                <li><i className="fa fa-mobile"></i>+55 62 98166-6874</li>
                <li><i className="fa fa-github"></i>github.com/ericmaicon</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About
