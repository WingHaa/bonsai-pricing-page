import React from "react";
import checkMark from "../assets/checkmark.svg";
import * as Styled from "../styles/Utils.style";
import styled from "styled-components";

const $PriceOption = styled.div`
  max-width: 560px;
  padding: 30px 30px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 10%);
  background-color: white;

  .price-tier {
    font-size: 32px;
    font-weight: 700;
    margin: 10px;
  }
  .benefit {
    color: #65816d;
    text-align: center;
    max-width: 250px;
  }
`;

const $DetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 16px;
  .detail-item {
    display: flex;
    column-gap: 20px;
    max-width: 250px;
  }
`;

interface StyleProps {
  isMonthly: boolean;
}

const Price = ({ isMonthly }: StyleProps) => {
  return (
    <>
      <div className="price-option-container">
        <$PriceOption>
          <div className="price-tier">Starter</div>
          <div>
            <span style={{ fontSize: "20px", marginRight: "8px" }}>$</span>
            <span style={{ fontSize: "36px", marginRight: "8px" }}>
              {isMonthly ? "24" : "17"}
            </span>
            <span style={{ fontSize: "16px", color: "#65816d" }}>/month</span>
          </div>
          <Styled.$Spacer_15></Styled.$Spacer_15>
          <Styled.$DefaultButton>Start for free</Styled.$DefaultButton>
          <Styled.$Spacer_15></Styled.$Spacer_15>
          <div className="benefit">
            Ideal for freelancers and contractors just starting out.
          </div>
          <div className="benefit">{isMonthly ? "" : "Billed annually."}</div>
          <Styled.$Spacer_30></Styled.$Spacer_30>
          <Styled.$Separator></Styled.$Separator>
          <Styled.$Spacer_30></Styled.$Spacer_30>
          <$DetailGrid>
            <div className="detail-item">
              <img src={checkMark} alt="Check Mark" />
              <div>All Templates</div>
            </div>
            <div className="detail-item">
              <img src={checkMark} alt="Check Mark" />
              <div>Unlimited Clients & Projects</div>
            </div>
            <div className="detail-item">
              <img src={checkMark} alt="Check Mark" />
              <div>Invoicing & Payments</div>
            </div>
            <div className="detail-item">
              <img src={checkMark} alt="Check Mark" />
              <div>Proposal & Contracts</div>
            </div>
            <div className="detail-item">
              <img src={checkMark} alt="Check Mark" />
              <div>Scheduling</div>
            </div>
            <div className="detail-item">
              <img src={checkMark} alt="Check Mark" />
              <div>Tasks & Time Tracking</div>
            </div>
            <div className="detail-item">
              <img src={checkMark} alt="Check Mark" />
              <div>Client CRM</div>
            </div>
            <div className="detail-item">
              <img src={checkMark} alt="Check Mark" />
              <div>Expense Tracking</div>
            </div>
            <div className="detail-item">
              <img src={checkMark} alt="Check Mark" />
              <div>Up to 5 Project Collaborators</div>
            </div>
          </$DetailGrid>
          <Styled.$Spacer_15></Styled.$Spacer_15>
          <Styled.$DefaultButton>Start for free</Styled.$DefaultButton>
        </$PriceOption>
      </div>
      <div className="price-option-container">
        <div className="special-container">
          <$PriceOption>
            <div className="price-tier">Professional</div>
            <div>${isMonthly ? "39" : "32"} /month</div>
            <Styled.$Spacer_15></Styled.$Spacer_15>
            <Styled.$DefaultButton>Start for free</Styled.$DefaultButton>
            <Styled.$Spacer_15></Styled.$Spacer_15>
            <div className="benefit">
              Everything a growing independent business needs to thrive.
            </div>
            <div className="benefit">{isMonthly ? "" : "Billed annualy."}</div>
            <Styled.$Spacer_30></Styled.$Spacer_30>
            <Styled.$Separator></Styled.$Separator>
            <Styled.$Spacer_30></Styled.$Spacer_30>
            <$DetailGrid>
              <div className="detail-item">
                <img src={checkMark} alt="Check Mark" />
                <div>
                  <strong style={{ fontWeight: "600" }}>
                    Everything in Starter, plus:
                  </strong>
                </div>
              </div>
              <div className="detail-item">
                <img src={checkMark} alt="Check Mark" />
                <div>Custom Branding</div>
              </div>
              <div className="detail-item">
                <img src={checkMark} alt="Check Mark" />
                <div>Forms & Questionnaires</div>
              </div>
              <div className="detail-item">
                <img src={checkMark} alt="Check Mark" />
                <div>Workflow Automations</div>
              </div>
              <div className="detail-item">
                <img src={checkMark} alt="Check Mark" />
                <div>Client Portal</div>
              </div>
              <div className="detail-item">
                <img src={checkMark} alt="Check Mark" />
                <div>QuickBooks Integration</div>
              </div>
              <div className="detail-item">
                <img src={checkMark} alt="Check Mark" />
                <div>Calendly Integration</div>
              </div>
              <div className="detail-item">
                <img src={checkMark} alt="Check Mark" />
                <div>Zapier Integration</div>
              </div>
              <div className="detail-item">
                <img src={checkMark} alt="Check Mark" />
                <div>Up to 15 Project Collaborators</div>
              </div>
            </$DetailGrid>
            <Styled.$Spacer_15></Styled.$Spacer_15>
            <Styled.$DefaultButton>Start for free</Styled.$DefaultButton>
          </$PriceOption>
          <div className="special">Best value for money</div>
        </div>
      </div>
      <div className="price-option-container">
        <$PriceOption>
          <div className="price-tier">Business</div>
          <div>${isMonthly ? "79" : "52"} /month</div>
          <Styled.$Spacer_15></Styled.$Spacer_15>
          <Styled.$DefaultButton>Start for free</Styled.$DefaultButton>
          <Styled.$Spacer_15></Styled.$Spacer_15>
          <div className="benefit">
            The perfect package for small businesses and agencies.
          </div>
          <div className="benefit">{isMonthly ? "" : "Billed annualy."}</div>
          <Styled.$Spacer_30></Styled.$Spacer_30>
          <Styled.$Separator></Styled.$Separator>
          <Styled.$Spacer_30></Styled.$Spacer_30>
          <$DetailGrid>
            <div className="detail-item">
              <img src={checkMark} alt="Check Mark" />
              <div>
                <strong style={{ fontWeight: "600" }}>
                  Everything in Professional, plus:
                </strong>
              </div>
            </div>
            <div className="detail-item">
              <img src={checkMark} alt="Check Mark" />
              <div>Subcontractor Management</div>
            </div>
            <div className="detail-item">
              <img src={checkMark} alt="Check Mark" />
              <div>
                Invoicing & Payments
                <br />
                <span style={{ color: "#65816d" }}>(1099 contractors)</span>
              </div>
            </div>
            <div className="detail-item">
              <img src={checkMark} alt="Check Mark" />
              <div>Subcontractor Onboarding</div>
            </div>
            <div className="detail-item">
              <img src={checkMark} alt="Check Mark" />
              <div>Talent Pool</div>
            </div>
            <div className="detail-item">
              <img src={checkMark} alt="Check Mark" />
              <div>
                3 Team Seats
                <br />
                <span style={{ color: "#65816d" }}>
                  additional seats $9/month
                </span>
              </div>
            </div>
            <div className="detail-item">
              <img src={checkMark} alt="Check Mark" />
              <div>Accountant Access</div>
            </div>
            <div className="detail-item">
              <img src={checkMark} alt="Check Mark" />
              <div>Connect Multiple Bank Accounts</div>
            </div>
            <div className="detail-item">
              <img src={checkMark} alt="Check Mark" />
              <div>Unlimited Subcontractors</div>
            </div>
            <div className="detail-item">
              <img src={checkMark} alt="Check Mark" />
              <div>Unlimited Project Collaborators</div>
            </div>
          </$DetailGrid>
          <Styled.$Spacer_15></Styled.$Spacer_15>
          <Styled.$DefaultButton>Start for free</Styled.$DefaultButton>
        </$PriceOption>
      </div>
    </>
  );
};

export default Price;
