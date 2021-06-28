import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div>
      <section className="section section-2">
        <div className="container">
          <div className="row">
            <div
              className="single-page single-pageimage construction-bg cover-image "
              data-image-src="assets/img/weather1.jpeg"
            >
              <div className="row">
                <div className="col-lg-6 col-xl-6">
                  <div className="mt-xl-5">
                    <div className="bg-transparent carouselTestimonial1 p-4 mx-auto mt-xl-5 mb-3 w-600">
                      <div
                        id="carouselTestimonial"
                        className="carousel carousel-testimonial slide"
                        data-ride="carousel"
                      >
                        <ol className="carousel-indicators carousel-indicators1">
                          <li
                            data-target="#carouselTestimonial"
                            data-slide-to="0"
                            className="active"
                          ></li>
                          <li
                            data-target="#carouselTestimonial"
                            data-slide-to="1"
                          ></li>
                          <li
                            data-target="#carouselTestimonial"
                            data-slide-to="2"
                          ></li>
                        </ol>
                        <div className="carousel-inner">
                          <div className="carousel-item text-center active">
                            <img
                              src="assets/img/brand/logo-white.png"
                              className="mb-2  mt-lg-0 "
                              alt="logo"
                            />
                            <p className="m-0 pt-2 text-white">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nam eu sem tempor, consectetur adipiscing
                              elit varius quam at, luctus dui. Mauris magna
                              metus consectetur adipiscing elit.
                            </p>
                          </div>
                          <div className="carousel-item text-center">
                            <img
                              src="assets/img/brand/logo-white.png"
                              className="mb-2  mt-lg-0 "
                              alt="logo"
                            />
                            <p className="m-0 pt-2 text-white">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nam eu sem tempor, consectetur adip varius
                              quam at, luctus dui. Mauris magna metus, dapibus
                              nec turpis vel.
                            </p>
                          </div>
                          <div className="carousel-item text-center">
                            <img
                              src="assets/img/brand/logo-white.png"
                              className="mb-2  mt-lg-0 "
                              alt="logo"
                            />
                            <p className="m-0 pt-2 text-white">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nam eu sem tempor, varius quam at,
                              consectetur adipiscing elit consectetur adipiscing
                              elit luctus dui. Mauris magna metus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-6">
                  <div className="login-sec">
                    <div className=" text-center card mb-0">
                      <form id="login" className="card-body" tabindex="500">
                        <h4 className="mb-3">Login</h4>
                        <div className="">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              id="exampleInputEmail1"
                              placeholder="Enter email"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control"
                              id="exampleInputPassword1"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                        <div className="submit mt-3 mb-3">
                          <Link
                            className="btn btn-primary btn-block"
                            to="/dashboard"
                          >
                            Login
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
