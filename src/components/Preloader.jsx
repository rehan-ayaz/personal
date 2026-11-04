import React from 'react';

/**
 * Preloader component displayed during initial asset hydration.
 * Animates initial kinetic brand lettering and reveals underlying viewport.
 */
export default function Preloader() {
  return (
    <div id="preloader" className="ra-preloader preloader" aria-hidden="true">
      <div className="ra-animation-preloader animation-preloader">
        <div className="ra-spinner spinner"></div>
        <div className="ra-txt-loading txt-loading">
          <span data-text-preloader="R" className="ra-letters-loading letters-loading">R</span>
          <span data-text-preloader="E" className="ra-letters-loading letters-loading">E</span>
          <span data-text-preloader="H" className="ra-letters-loading letters-loading">H</span>
          <span data-text-preloader="A" className="ra-letters-loading letters-loading">A</span>
          <span data-text-preloader="N" className="ra-letters-loading letters-loading ra-letter-space letter-space">N</span>
          <span data-text-preloader="A" className="ra-letters-loading letters-loading">A</span>
          <span data-text-preloader="Y" className="ra-letters-loading letters-loading">Y</span>
          <span data-text-preloader="A" className="ra-letters-loading letters-loading">A</span>
          <span data-text-preloader="Z" className="ra-letters-loading letters-loading">Z</span>
        </div>
        <p className="text-center">Loading</p>
      </div>
      <div className="ra-loader loader">
        <div className="row">
          <div className="col-3 ra-loader-section loader-section ra-section-left section-left">
            <div className="ra-bg bg"></div>
          </div>
          <div className="col-3 ra-loader-section loader-section ra-section-left section-left">
            <div className="ra-bg bg"></div>
          </div>
          <div className="col-3 ra-loader-section loader-section ra-section-right section-right">
            <div className="ra-bg bg"></div>
          </div>
          <div className="col-3 ra-loader-section loader-section ra-section-right section-right">
            <div className="ra-bg bg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
