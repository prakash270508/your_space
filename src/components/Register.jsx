import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <div className="login-root">
        <div
          className="box-root flex-flex flex-direction--column"
          style={{ minHeight: "100vh", flexGrow: 1 }}
        >
          <div className="loginbackground box-background--white padding-top--64">
            <div className="loginbackground-gridContainer">
              <div
                className="box-root flex-flex"
                style={{ gridArea: "top / start / 8 / end" }}
              >
                <div
                  className="box-root"
                  style={{
                    backgroundImage:
                      "linear-gradient(white 0%, rgb(247, 250, 252) 33%)",
                    flexGrow: 1,
                  }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "4 / 2 / auto / 5" }}
              >
                <div
                  className="box-root box-divider--light-all-2 animationLeftRight tans3s"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "6 / start / auto / 2" }}
              >
                <div
                  className="box-root box-background--blue800"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "7 / start / auto / 4" }}
              >
                <div
                  className="box-root box-background--blue animationLeftRight"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "8 / 4 / auto / 6" }}
              >
                <div
                  className="box-root box-background--gray100 animationLeftRight tans3s"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "2 / 15 / auto / end" }}
              >
                <div
                  className="box-root box-background--cyan200 animationRightLeft tans4s"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "3 / 14 / auto / end" }}
              >
                <div
                  className="box-root box-background--blue animationRightLeft"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "4 / 17 / auto / 20" }}
              >
                <div
                  className="box-root box-background--gray100 animationRightLeft tans4s"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "5 / 14 / auto / 17" }}
              >
                <div
                  className="box-root box-divider--light-all-2 animationRightLeft tans3s"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>
            </div>
          </div>
          <div
            className="box-root padding-top--24 flex-flex flex-direction--column"
            style={{ flexGrow: 1, zIndex: 9 }}
          >
            <div className="formbg-outer">
              <div className="formbg">
                <div className="formbg-inner padding-horizontal--48">
                  <div className="flex-flex flex-justifyContent--center">
                    <h1>
                      <a href="/" rel="dofollow">
                        Register
                      </a>
                    </h1>
                  </div>
                  <form id="stripe-login">
                    <div className="field padding-bottom--24">
                      <label htmlFor="email">Email</label>
                      <input type="email" name="email" />
                    </div>
                    <div className="field padding-bottom--24">
                      <div className="grid--50-50">
                        <label htmlFor="password">Password</label>
                      </div>
                      <input type="password" name="password" />
                    </div>
                    <div className="field padding-bottom--24">
                      <div className="grid--50-50">
                        <label htmlFor="password">Confirm Password</label>
                      </div>
                      <input type="password" name="confirm-password" />
                    </div>
                    <div className="field padding-bottom--24">
                      <input type="submit" name="submit" value="Register" />
                    </div>
                    <div className="field padding-bottom--24 d-flex">
                        Already have account ?
                      <Link className="ssolink mx-2" to={'/'}>
                        Login
                      </Link>
                    </div>
                    <div className="field">
                      <a className="ssolink" href="#">
                        Use single sign-on (Google) instead
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
