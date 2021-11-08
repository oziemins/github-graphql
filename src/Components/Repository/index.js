import React from "react";
import "./style.css";

const Repository = (props) => {
  const { name, description, isFork, url, pushedAt, issues, pullRequests } = props.repository;
  const pushedAtDate = pushedAt.split("T")[0];
  const pushedAtHour = pushedAt.split("T")[1].split("Z")[0];

  return (
    <div className="repository-container">
      <div className="repository-field">
        <span className="repository-label">Name:</span>{" "}
        <a href={url} className="repository-link">
          {name}
        </a>{" "}
      </div>
      <div className="repository-field">
        <span className="repository-label">Description:</span>{" "}
        <span className="repository-text">
          {{ description } === null ? { description } : "No description"}
        </span>{" "}
      </div>
      <div className="repository-field">
        <span className="repository-label">Is it a fork?</span>
        <span className="repository-text"> {isFork ? "Yes" : "No"}</span>{" "}
      </div>
      <div className="repository-field">
        <span className="repository-label">Last commit date:</span>{" "}
        <span className="repository-text">
          {pushedAtDate} at {pushedAtHour}
        </span>{" "}
      </div>
      <div className="repository-field">
        <span className="repository-label">Issue count:</span>{" "}
        <span className="repository-text">{issues.totalCount}</span>
      </div>
      <div className="repository-field">
        <span className="repository-label">Pull requests count:</span>{" "}
        <span className="repository-text">{pullRequests.totalCount}</span>
      </div>
    </div>
  );
};

export default Repository;
