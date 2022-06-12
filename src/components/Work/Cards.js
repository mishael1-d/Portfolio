import React from "react";
import "./Cards.css";

const cardItems = [
  {
    projectTitle: "Real Estate Website",
    projectThumbnail:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    previewLink: "https://mish-realestate.netlify.app/",
    repoLink: "https://github.com/mishael1-d/realestate-website.git",
    projectDescription: "Simple real estate website, built with ReactJS.",
  },
  {
    projectTitle: "Flytant Campaign Page",
    projectThumbnail:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    previewLink: "https://flytant-campaign-page.netlify.app/",
    repoLink: "https://github.com/mishael1-d/flytant-campaignPage.git",
    projectDescription: "Campaign page for registering of influencers",
  },
  {
    projectTitle: "Flytant Notification Page",
    projectThumbnail:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    previewLink: "https://flytant-notification-page.netlify.app/",
    repoLink: "https://github.com/mishael1-d/flytant-notificationPage.git",
    projectDescription: "A page for clients to view/search for influencers.",
  },
  {
    projectTitle: "El'mour Africa",
    projectThumbnail:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    previewLink: "https://elmour-africa.netlify.app/",
    repoLink: "https://github.com/mishael1-d/elmour-africa.git",
    projectDescription: "A consultancy firm agency website.",
  },
  {
    projectTitle: "Bonnie's Flair",
    projectThumbnail:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    previewLink: "https://mish-realestate.netlify.app/",
    repoLink: "https://github.com/mishael1-d/bonnie-flair.git",
    projectDescription: "An e-commerce website for selling glasses, bags etc.",
  },
];
function Cards() {
  return (
    <div className="card-section">
      {cardItems.map((cardItem) => {
        return (
          <div className="card__container">
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
