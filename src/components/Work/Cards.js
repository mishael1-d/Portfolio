import React from "react";
import "./Cards.css";
import real from '../../assets/real.png'
import notification from '../../assets/notification.png'
import elmour from '../../assets/elmour.png'
import hovatravel from '../../assets/hovatravel.png'

const cardItems = [
  {
    projectTitle: "HovaTravels Website",
    projectThumbnail: hovatravel,
    previewLink: "https://hovatravel.netlify.app/",
    repoLink: "https://github.com/mishael1-d/hovatravels",
    projectDescription: "Travel agency website.",
  },
  {
    projectTitle: "Real Estate Website",
    projectThumbnail: real,
    previewLink: "https://mish-realestate-website.netlify.app/",
    repoLink: "https://github.com/mishael1-d/realestate-website.git",
    projectDescription: "Simple real estate website.",
  },
  {
    projectTitle: "Flytant Campaign Page",
    projectThumbnail:notification,
    previewLink: "https://flytant-campaign-page.netlify.app/",
    repoLink: "https://github.com/mishael1-d/flytant-campaignPage.git",
    projectDescription: "Campaign page influencers",
  },
  {
    projectTitle: "Flytant Notification Page",
    projectThumbnail:notification,
    previewLink: "https://flytant-notification-page.netlify.app/",
    repoLink: "https://github.com/mishael1-d/flytant-notificationPage.git",
    projectDescription: "A page to view/search for influencers.",
  },
  {
    projectTitle: "El'mour Africa",
    projectThumbnail:elmour,
    previewLink: "https://elmour-africa.netlify.app/",
    repoLink: "https://github.com/mishael1-d/elmour-africa.git",
    projectDescription: "A consultancy firm agency website.",
  }
];
function Cards() {
  return (
    <div className="card-section">
      {cardItems.map((cardItem) => {
        return (
          <div className="card__container" key={cardItem.projectTitle}>
            <div className="card-thumbnail">
              <img
                src={cardItem.projectThumbnail}
                alt=""
              />
            </div>
            <div className="card-text">
              <h4 className="card-text-title">{cardItem.projectTitle}</h4>
              <p>{cardItem.projectDescription}</p>
              <div className="card-links">
                <a href={cardItem.repoLink} target="_blank" rel="noreferrer">
                  <button className="pri">View Code</button>
                </a>
                <a href={cardItem.previewLink} target="_blank" rel="noreferrer">
                  <button className="previewLink-btn">Preview</button>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
