import * as Styled from "../styles/Utils.style";
import styled from "styled-components";

const Addons = styled.div`
  margin-top: 30px;
  > div:first-child {
    font-size: 42px;
    font-weight: 700;
    margin: 20px auto 10px;
    text-align: center;
    max-width: 470px;
  }
  > div:nth-child(2) {
    margin-top: 30px;
    > div {
      display: flex;
      overflow-x: auto;
      overflow-y: hidden;
      justify-content: space-between;
      gap: 15px;
      min-height: 291px;
      min-width: 250px;

      @media (min-width: 1000px) {
        min-height: 356px;
      }

      > div {
        padding: 28px;
        border: 1px solid #d3dcd4;
        border-radius: 20px;
        display: flex;
        flex-direction: column;

        > h3 {
          font-size: 22px;
          font-weight: 700;
        }

        > div:nth-child(2) {
          font-size: 16px;
        }

        > div:nth-last-child(2) {
          flex-grow: 1;
        }

        > div:last-child {
          align-self: flex-end;
          font-size: 36px;
          font-weight: 700;

          > span:first-child {
            margin-right: 8px;
          }

          > span:last-child {
            font-size: 16px;
            color: grey;
          }
        }
      }
    }
  }
`;

const Addon = () => {
  return (
    <Styled.$Container>
      <Addons>
        <div>Take it to the next level with add-ons</div>
        <div>
          <div>
            <div>
              <h3>Collaborators</h3>
              <div>
                Invite other users to specific projects for limited access and
                functionality.
              </div>
              <div>Free</div>
            </div>
            <div>
              <h3>Partners</h3>
              <div>
                Invite other users for full account access and company
                management.
              </div>
              <div>
                <span>$9</span>
                <span>/month</span>
              </div>
            </div>
            <div>
              <h3>Tax Assistant</h3>
              <Styled.$Spacer_15></Styled.$Spacer_15>
              <div>
                Track expenses, identify write-offs, and estimate quarterly
                taxes easily.
              </div>
              <Styled.$Spacer_30></Styled.$Spacer_30>
              <div>
                <Styled.$FancyLink href="#">Learn more</Styled.$FancyLink>
              </div>
              <div>
                <span>$10</span>
                <span>/month</span>
              </div>
            </div>
          </div>
        </div>
      </Addons>
    </Styled.$Container>
  );
};

export default Addon;
