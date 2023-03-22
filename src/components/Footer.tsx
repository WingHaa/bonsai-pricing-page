import * as Styled from "../styles/Utils.style";
import rect from "../assets/Rectangle.svg";
import bonsai from "../assets/bonsai-icon.svg";
import linkedIn from "../assets/linked-in.svg";
import twitter from "../assets/twitter.svg";
import github from "../assets/github-mark.png";
import styled from "styled-components";
import { useState } from "react";
const FooterWrap = styled.footer`
  box-sizing: border-box;
  > div {
    padding: 120px 40px 50px;
    margin-right: auto;
    margin-left: auto;
  }
`;

const $Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  @media (min-width: 990px) {
    flex-direction: row;
  }
  > div {
    flex-basis: 100%;
    max-width: 250px;
  }
  h6 {
    color: #003c2f;
    font-weight: 600;
    margin-bottom: 20px;
  }
  a {
    text-decoration: none;
    color: #65816d;
    &:hover {
      color: #22ad01;
    }
  }
`;

const $InfoItems = styled.div`
  display: grid;
  gap: 0.2rem;
`;

const $MarginBox = styled.div`
  margin-top: 30px;
`;

const $DropDown = styled.div`
  position: relative;
`;

const $DropDownButton = styled.div<{ show: boolean }>`
  display: flex;
  justify-content: space-between;
  border-color: transparent;
  background-color: ${({ show }) => (show ? "#f2f7f2" : "#fff")};
  padding-left: ${({ show }) => (show ? "20px" : null)};
  transition: all 250ms ease-in;
`;

const $DropDownList = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "grid" : "none")};
  position: absolute;
  background-color: #fff;
  box-shadow: 0 0 32px 0 rgb(0 0 0 / 5%);
  z-index: 1;
`;

const $Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  @media (min-width: 1000px) {
    flex-direction: row;
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
`;

const $Notice = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  img {
    height: 43px;
    width: 43px;
  }
  > div {
    display: inline-block;
  }
  p {
    font-size: 1rem;
    font-weight: 700;
  }
  a:hover {
    color: #22ad01;
  }
`;

function Footer() {
  const [showDropDown, setShowDropDown] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleSetDropDownShow = (position: number) => {
    setShowDropDown((prevState) =>
      prevState.map((state, index) => {
        if (position === index) return !state;
        return false;
      })
    );
  };
  return (
    <FooterWrap>
      <div>
        <$Information>
          <div>
            <a href="#">
              <img src={bonsai} alt="" />
            </a>
            <$MarginBox>
              <h6>Company</h6>
            </$MarginBox>
            <$InfoItems>
              <a href="#">Help center</a>
              <a href="#">Contact us</a>
              <a href="#">Privacy</a>
              <a href="#">Terms and conditions</a>
              <a href="#">Careers</a>
              <Styled.$Spacer_30></Styled.$Spacer_30>
              <a href="#">Affiliate Program</a>
            </$InfoItems>
          </div>
          <div>
            <div>
              <h6>Products</h6>
            </div>
            <$InfoItems>
              <a href="#">Proposals</a>
              <a href="#">Contracts</a>
              <a href="#">Invoicing</a>
              <a href="#">Client CRM</a>
              <a href="#">Scheduling</a>
              <a href="#">Time tracking</a>
              <a href="#">Tasks management</a>
              <a href="#">Forms</a>
              <a href="#">Accounting</a>
              <a href="#">Taxes</a>
              <a href="#">Banking</a>
              <Styled.$Spacer_30></Styled.$Spacer_30>
              <a href="#">Reviews</a>
              <a href="#">Pricing</a>
            </$InfoItems>
          </div>
          <div>
            <div>
              <h6>Resources</h6>
            </div>
            <$InfoItems>
              <a href="#">Freelance Resources</a>
              <a href="#">Blog</a>
              <a href="#">How to Write a Contract</a>
              <a href="#">Online Signature Maker</a>
              <a href="#">Self-Employed Taxes Hub</a>
              <a href="#">Self-Employed Tax Calculator</a>
              <a href="#">Self-Employed Tax Deductions</a>
            </$InfoItems>
            <$DropDown>
              <div onClick={() => handleSetDropDownShow(0)}>
                <$DropDownButton show={showDropDown[0]}>
                  <div>Comparisons</div>
                  <img src={rect} alt="" />
                </$DropDownButton>
              </div>
              <$DropDownList show={showDropDown[0]}>
                <a href="#">Freshbooks alternatives</a>
                <a href="#">Quickbooks alternatives</a>
                <a href="#">Wave vs. Quickbooks</a>
                <a href="#">Xero vs. Quickbooks</a>
                <a href="#">Freshbooks vs. Quickbooks</a>
                <a href="#">Honeybook alternatives</a>
                <a href="#">Dubsado alternatives</a>
                <a href="#">Proposify alternatives</a>
                <a href="#">Xero alternatives</a>
              </$DropDownList>
            </$DropDown>
          </div>
          <div>
            <div>
              <h6>Templates</h6>
            </div>
            <$InfoItems>
              <$DropDown>
                <div onClick={() => handleSetDropDownShow(1)}>
                  <$DropDownButton show={showDropDown[1]}>
                    <div>Contracts</div>
                    <img src={rect} alt="" />
                  </$DropDownButton>
                </div>
                <$DropDownList show={showDropDown[1]}>
                  <a href="#">Contract templates</a>
                  <a href="#">Lorem ipsum dolor sit amet.</a>
                  <a href="#">Lorem ipsum dolor sit amet.</a>
                  <a href="#">Fuga porro cumque distinctio in!</a>
                  <a href="#">Excepturi adipisci molestias soluta deleniti.</a>
                  <a href="#">Quia eum temporibus voluptates vitae?</a>
                  <a href="#">Ea dolorem porro adipisci deleniti.</a>
                  <a href="#">Excepturi harum quidem enim quaerat!</a>
                  <a href="#">Ipsam hic suscipit harum fugit!</a>
                  <a href="#">Distinctio molestias odit quisquam quas.</a>
                  <a href="#">Voluptas nemo molestiae dicta incidunt.</a>
                  <a href="#">Quisquam corporis officiis eius enim!</a>
                  <a href="#">
                    Facilis asperiores explicabo delectus inventore!
                  </a>
                  <a href="#">Ipsam debitis dicta a consequuntur.</a>
                  <a href="#">Accusantium illo commodi a aut!</a>
                  <a href="#">Quod consectetur placeat deleniti repellendus.</a>
                  <a href="#">Quos laboriosam aperiam dolorum est.</a>
                  <a href="#">Fugit et asperiores porro reiciendis!</a>
                </$DropDownList>
              </$DropDown>
              <$DropDown>
                <div onClick={() => handleSetDropDownShow(2)}>
                  <$DropDownButton show={showDropDown[2]}>
                    <div>Proposals</div>
                    <img src={rect} alt="" />
                  </$DropDownButton>
                </div>
                <$DropDownList show={showDropDown[2]}>
                  <a href="#">Contract templates</a>
                  <a href="#">Lorem ipsum dolor sit amet.</a>
                  <a href="#">Lorem ipsum dolor sit amet.</a>
                  <a href="#">Fuga porro cumque distinctio in!</a>
                  <a href="#">Excepturi adipisci molestias soluta deleniti.</a>
                  <a href="#">Quia eum temporibus voluptates vitae?</a>
                  <a href="#">Ea dolorem porro adipisci deleniti.</a>
                  <a href="#">Excepturi harum quidem enim quaerat!</a>
                  <a href="#">Ipsam hic suscipit harum fugit!</a>
                  <a href="#">Distinctio molestias odit quisquam quas.</a>
                  <a href="#">Voluptas nemo molestiae dicta incidunt.</a>
                  <a href="#">Quisquam corporis officiis eius enim!</a>
                  <a href="#">
                    Facilis asperiores explicabo delectus inventore!
                  </a>
                  <a href="#">Ipsam debitis dicta a consequuntur.</a>
                  <a href="#">Accusantium illo commodi a aut!</a>
                  <a href="#">Quod consectetur placeat deleniti repellendus.</a>
                  <a href="#">Quos laboriosam aperiam dolorum est.</a>
                  <a href="#">Fugit et asperiores porro reiciendis!</a>
                </$DropDownList>
              </$DropDown>
              <$DropDown>
                <div onClick={() => handleSetDropDownShow(3)}>
                  <$DropDownButton show={showDropDown[3]}>
                    <div>Invoices</div>
                    <img src={rect} alt="" />
                  </$DropDownButton>
                </div>
                <$DropDownList show={showDropDown[3]}>
                  <a href="#">Contract templates</a>
                  <a href="#">Lorem ipsum dolor sit amet.</a>
                  <a href="#">Lorem ipsum dolor sit amet.</a>
                  <a href="#">Fuga porro cumque distinctio in!</a>
                  <a href="#">Excepturi adipisci molestias soluta deleniti.</a>
                  <a href="#">Quia eum temporibus voluptates vitae?</a>
                  <a href="#">Ea dolorem porro adipisci deleniti.</a>
                  <a href="#">Excepturi harum quidem enim quaerat!</a>
                  <a href="#">Ipsam hic suscipit harum fugit!</a>
                  <a href="#">Distinctio molestias odit quisquam quas.</a>
                  <a href="#">Voluptas nemo molestiae dicta incidunt.</a>
                  <a href="#">Quisquam corporis officiis eius enim!</a>
                  <a href="#">
                    Facilis asperiores explicabo delectus inventore!
                  </a>
                  <a href="#">Ipsam debitis dicta a consequuntur.</a>
                  <a href="#">Accusantium illo commodi a aut!</a>
                  <a href="#">Quod consectetur placeat deleniti repellendus.</a>
                  <a href="#">Quos laboriosam aperiam dolorum est.</a>
                  <a href="#">Fugit et asperiores porro reiciendis!</a>
                </$DropDownList>
              </$DropDown>
              <$DropDown>
                <div onClick={() => handleSetDropDownShow(4)}>
                  <$DropDownButton show={showDropDown[4]}>
                    <div>Forms</div>
                    <img src={rect} alt="" />
                  </$DropDownButton>
                </div>
                <$DropDownList show={showDropDown[4]}>
                  <a href="#">Contract templates</a>
                  <a href="#">Lorem ipsum dolor sit amet.</a>
                  <a href="#">Lorem ipsum dolor sit amet.</a>
                  <a href="#">Fuga porro cumque distinctio in!</a>
                  <a href="#">Excepturi adipisci molestias soluta deleniti.</a>
                  <a href="#">Quia eum temporibus voluptates vitae?</a>
                  <a href="#">Ea dolorem porro adipisci deleniti.</a>
                  <a href="#">Excepturi harum quidem enim quaerat!</a>
                  <a href="#">Ipsam hic suscipit harum fugit!</a>
                  <a href="#">Distinctio molestias odit quisquam quas.</a>
                  <a href="#">Voluptas nemo molestiae dicta incidunt.</a>
                  <a href="#">Quisquam corporis officiis eius enim!</a>
                  <a href="#">
                    Facilis asperiores explicabo delectus inventore!
                  </a>
                  <a href="#">Ipsam debitis dicta a consequuntur.</a>
                  <a href="#">Accusantium illo commodi a aut!</a>
                  <a href="#">Quod consectetur placeat deleniti repellendus.</a>
                  <a href="#">Quos laboriosam aperiam dolorum est.</a>
                  <a href="#">Fugit et asperiores porro reiciendis!</a>
                </$DropDownList>
              </$DropDown>
              <$DropDown>
                <div onClick={() => handleSetDropDownShow(5)}>
                  <$DropDownButton show={showDropDown[5]}>
                    <div>Quotes</div>
                    <img src={rect} alt="" />
                  </$DropDownButton>
                </div>
                <$DropDownList show={showDropDown[5]}>
                  <a href="#">Contract templates</a>
                  <a href="#">Lorem ipsum dolor sit amet.</a>
                  <a href="#">Lorem ipsum dolor sit amet.</a>
                  <a href="#">Fuga porro cumque distinctio in!</a>
                  <a href="#">Excepturi adipisci molestias soluta deleniti.</a>
                  <a href="#">Quia eum temporibus voluptates vitae?</a>
                  <a href="#">Ea dolorem porro adipisci deleniti.</a>
                  <a href="#">Excepturi harum quidem enim quaerat!</a>
                  <a href="#">Ipsam hic suscipit harum fugit!</a>
                  <a href="#">Distinctio molestias odit quisquam quas.</a>
                  <a href="#">Voluptas nemo molestiae dicta incidunt.</a>
                  <a href="#">Quisquam corporis officiis eius enim!</a>
                  <a href="#">
                    Facilis asperiores explicabo delectus inventore!
                  </a>
                  <a href="#">Ipsam debitis dicta a consequuntur.</a>
                  <a href="#">Accusantium illo commodi a aut!</a>
                  <a href="#">Quod consectetur placeat deleniti repellendus.</a>
                  <a href="#">Quos laboriosam aperiam dolorum est.</a>
                  <a href="#">Fugit et asperiores porro reiciendis!</a>
                </$DropDownList>
              </$DropDown>
              <$DropDown>
                <div onClick={() => handleSetDropDownShow(6)}>
                  <$DropDownButton show={showDropDown[6]}>
                    <div>Scopes of work</div>
                    <img src={rect} alt="" />
                  </$DropDownButton>
                </div>
                <$DropDownList show={showDropDown[6]}>
                  <a href="#">Contract templates</a>
                  <a href="#">Lorem ipsum dolor sit amet.</a>
                  <a href="#">Lorem ipsum dolor sit amet.</a>
                  <a href="#">Fuga porro cumque distinctio in!</a>
                  <a href="#">Excepturi adipisci molestias soluta deleniti.</a>
                  <a href="#">Quia eum temporibus voluptates vitae?</a>
                  <a href="#">Ea dolorem porro adipisci deleniti.</a>
                  <a href="#">Excepturi harum quidem enim quaerat!</a>
                  <a href="#">Ipsam hic suscipit harum fugit!</a>
                  <a href="#">Distinctio molestias odit quisquam quas.</a>
                  <a href="#">Voluptas nemo molestiae dicta incidunt.</a>
                  <a href="#">Quisquam corporis officiis eius enim!</a>
                  <a href="#">
                    Facilis asperiores explicabo delectus inventore!
                  </a>
                  <a href="#">Ipsam debitis dicta a consequuntur.</a>
                  <a href="#">Accusantium illo commodi a aut!</a>
                  <a href="#">Quod consectetur placeat deleniti repellendus.</a>
                  <a href="#">Quos laboriosam aperiam dolorum est.</a>
                  <a href="#">Fugit et asperiores porro reiciendis!</a>
                </$DropDownList>
              </$DropDown>
              <$DropDown>
                <div onClick={() => handleSetDropDownShow(7)}>
                  <$DropDownButton show={showDropDown[7]}>
                    <div>Agreements</div>
                    <img src={rect} alt="" />
                  </$DropDownButton>
                </div>
                <$DropDownList show={showDropDown[7]}>
                  <a href="#">Contract templates</a>
                  <a href="#">Lorem ipsum dolor sit amet.</a>
                  <a href="#">Lorem ipsum dolor sit amet.</a>
                  <a href="#">Fuga porro cumque distinctio in!</a>
                  <a href="#">Excepturi adipisci molestias soluta deleniti.</a>
                  <a href="#">Quia eum temporibus voluptates vitae?</a>
                  <a href="#">Ea dolorem porro adipisci deleniti.</a>
                  <a href="#">Excepturi harum quidem enim quaerat!</a>
                  <a href="#">Ipsam hic suscipit harum fugit!</a>
                  <a href="#">Distinctio molestias odit quisquam quas.</a>
                  <a href="#">Voluptas nemo molestiae dicta incidunt.</a>
                  <a href="#">Quisquam corporis officiis eius enim!</a>
                  <a href="#">
                    Facilis asperiores explicabo delectus inventore!
                  </a>
                  <a href="#">Ipsam debitis dicta a consequuntur.</a>
                  <a href="#">Accusantium illo commodi a aut!</a>
                  <a href="#">Quod consectetur placeat deleniti repellendus.</a>
                  <a href="#">Quos laboriosam aperiam dolorum est.</a>
                  <a href="#">Fugit et asperiores porro reiciendis!</a>
                </$DropDownList>
              </$DropDown>
              <$DropDown>
                <div onClick={() => handleSetDropDownShow(8)}>
                  <$DropDownButton show={showDropDown[8]}>
                    <div>Briefs</div>
                    <img src={rect} alt="" />
                  </$DropDownButton>
                </div>
                <$DropDownList show={showDropDown[8]}>
                  <a href="#">Contract templates</a>
                  <a href="#">Lorem ipsum dolor sit amet.</a>
                  <a href="#">Lorem ipsum dolor sit amet.</a>
                  <a href="#">Fuga porro cumque distinctio in!</a>
                  <a href="#">Excepturi adipisci molestias soluta deleniti.</a>
                  <a href="#">Quia eum temporibus voluptates vitae?</a>
                  <a href="#">Ea dolorem porro adipisci deleniti.</a>
                  <a href="#">Excepturi harum quidem enim quaerat!</a>
                  <a href="#">Ipsam hic suscipit harum fugit!</a>
                  <a href="#">Distinctio molestias odit quisquam quas.</a>
                  <a href="#">Voluptas nemo molestiae dicta incidunt.</a>
                  <a href="#">Quisquam corporis officiis eius enim!</a>
                  <a href="#">
                    Facilis asperiores explicabo delectus inventore!
                  </a>
                  <a href="#">Ipsam debitis dicta a consequuntur.</a>
                  <a href="#">Accusantium illo commodi a aut!</a>
                  <a href="#">Quod consectetur placeat deleniti repellendus.</a>
                  <a href="#">Quos laboriosam aperiam dolorum est.</a>
                  <a href="#">Fugit et asperiores porro reiciendis!</a>
                </$DropDownList>
              </$DropDown>
            </$InfoItems>
          </div>
        </$Information>
        <Styled.$Spacer_30></Styled.$Spacer_30>
        <Styled.$Separator></Styled.$Separator>
        <Styled.$Spacer_30></Styled.$Spacer_30>
        <$Social>
          <div>
            <a href="https://www.linkedin.com/company/bonsai/">
              <img src={linkedIn} alt="" />
            </a>
            <a href="https://twitter.com/bonsaiinc">
              <img src={twitter} alt="" />
            </a>
          </div>
          <div>
            <div>© Bonsai 2023</div>
            <div>FDIC insured up to $250k</div>
          </div>
        </$Social>
        <$Notice>
          <a href="https://github.com/WingHaa/bonsai-pricing-page">
            <img src={github} alt="GitHub Repo Link" />
          </a>
          <p>
            This website is an unofficial version of:&nbsp;
            <a href="https://www.hellobonsai.com/pricing">
              https://www.hellobonsai.com/pricing
            </a>
            &nbsp; and hold no commercial value.
          </p>
        </$Notice>
      </div>
    </FooterWrap>
  );
}

export default Footer;
