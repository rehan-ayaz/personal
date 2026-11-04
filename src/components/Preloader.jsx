import React from 'react';

export default function Preloader(props) {
  return (
    <>
    {/* ==================== [ Preloader Section Start ] ==================== */}
    <div id="preloader" className="preloader" aria-hidden="true">
        <div className="animation-preloader">
            <div className="spinner"></div>
            <div className="txt-loading">
                <span data-text-preloader="R" className="letters-loading">
                    R
                </span>
                <span data-text-preloader="E" className="letters-loading">
                    E
                </span>
                <span data-text-preloader="H" className="letters-loading">
                    H
                </span>
                <span data-text-preloader="A" className="letters-loading">
                    A
                </span>
                <span data-text-preloader="N" className="letters-loading letter-space">
                    N
                </span>
                <span data-text-preloader="A" className="letters-loading">
                    A
                </span>
                <span data-text-preloader="Y" className="letters-loading">
                    Y
                </span>
                <span data-text-preloader="A" className="letters-loading">
                    A
                </span>
                <span data-text-preloader="Z" className="letters-loading">
                    Z
                </span>
            </div>
            <p className="text-center">Loading</p>
        </div>
        <div className="loader">
            <div className="row">
                <div className="col-3 loader-section section-left">
                    <div className="bg"></div>
                </div>
                <div className="col-3 loader-section section-left">
                    <div className="bg"></div>
                </div>
                <div className="col-3 loader-section section-right">
                    <div className="bg"></div>
                </div>
                <div className="col-3 loader-section section-right">
                    <div className="bg"></div>
                </div>
            </div>
        </div>
    </div>

    </>
  );
}
