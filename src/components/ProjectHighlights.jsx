import React from 'react';

const borderClasses = [' border-design', ' border-design', ' design-over-border'];

export default function ProjectHighlights({ highlights, stackedOnTablet = false }) {
  return (
    <div className={`avrage-data row${stackedOnTablet ? '' : ' my-5'}`}>
      {highlights.map(({ title, description }, index) => (
        <div key={title} className={`col-xl-6 col-lg-6 ${stackedOnTablet ? 'col-md-12' : 'col-md-6'}`}>
          <div className={`box-project-avrage${borderClasses[index] ?? ''}`}>
            <div className="image-tick">
              <img src="/assets/images/services/arrow-tic.png" alt="" />
            </div>
            <div className="average-code">
              <p>{title}</p>
              <span>{description}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
