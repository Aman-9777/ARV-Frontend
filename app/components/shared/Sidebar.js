"use client";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="sidebar sidebar-dark sidebar-fixed show" id="sidebar">
      <div className="sidebar-brand d-none d-md-flex user_b">
        <Image src="/images/vector.png" width={100} height={40} alt="logo" />
      </div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse"
              aria-expanded="false"
              aria-controls="collapse"
            >
              <a className="nav-link nav-group-toggle" href="#">
                <i className="fa-regular fa-clipboard me-2"></i>
                RP
              </a>
            </button>
          </h2>
          <div
            id="collapse"
            className="accordion-collapse collapse"
            aria-labelledby="heading"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="nav-group-items">
                <li className="nav-item">
                  <Link className="nav-link" href="/RP">
                    Add RP
                  </Link>
                </li>
                <li className="nav-item  me-2">
                  <Link className="nav-link" href="/viewrp">
                    View/EDIT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <i className="fa-solid fa-building me-2"></i>
              Company
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="nav-group-items">
                <li className="nav-item">
                  <Link className="nav-link" href="/dashboard">
                    Add Company
                  </Link>
                </li>
                <li className="nav-item  me-2">
                  <Link className="nav-link" href="/viewcompany">
                    View Company
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingar">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsear"
              aria-expanded="false"
              aria-controls="collapsear"
            >
              <a className="nav-link nav-group-toggle" href="#">
                <i className="fa-regular fa-clipboard me-2"></i>
                AR
              </a>
            </button>
          </h2>
          <div
            id="collapsear"
            className="accordion-collapse collapse "
            aria-labelledby="headingar"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="nav-group-items">
                <li className="nav-item">
                  <Link className="nav-link" href="/AR">
                    Add AR
                  </Link>
                </li>
                <li className="nav-item  me-2">
                  <Link className="nav-link" href="/viewar">
                    View AR
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <a className="nav-link nav-group-toggle" href="#">
                <i className="fa-regular fa-clipboard me-2"></i>
                Voter List
              </a>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="nav-group-items">
                <li className="nav-item">
                  <Link className="nav-link" href="/add-voter">
                    Add Voter
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/view-voter">
                    View Voter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <a className="nav-link nav-group-toggle" href="#">
                <i className="fa-solid fa-calendar-days  me-2"></i>
                Event Meeting
              </a>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="nav-group-items">
                <li className="nav-item">
                  <Link className="nav-link" href="/create-meeting">
                    Create Meeting
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/view-meeting">
                    View Meeting
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingfr">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsefr"
              aria-expanded="false"
              aria-controls="collapsefr"
            >
              <a className="nav-link nav-group-toggle" href="#">
                <i className="fa-solid fa-bullseye me-2"></i>
                Agenda
              </a>
            </button>
          </h2>
          <div
            id="collapsefr"
            className="accordion-collapse collapse"
            aria-labelledby="headingfr"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="nav-group-items">
                <li className="nav-item">
                  <Link className="nav-link" href="/create-agenda">
                    <i className="fa-regular fa-clipboard me-2"></i>
                    Create Agenda
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/view-agenda">
                    <i className="fa-regular fa-clipboard me-2"></i>
                    View Agenda
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingfv">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsefv"
              aria-expanded="false"
              aria-controls="collapsefv"
            >
              <a className="nav-link nav-group-toggle" href="#">
                <i className="fa-solid fa-bullseye me-2"></i>
                Reports
              </a>
            </button>
          </h2>
          <div
            id="collapsefv"
            className="accordion-collapse collapse"
            aria-labelledby="headingfv"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="nav-group-items">
                <li className="nav-item">
                  <Link className="nav-link" href="/create-agenda">
                    <i className="fa-regular fa-clipboard me-2"></i>
                    View Reports
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
