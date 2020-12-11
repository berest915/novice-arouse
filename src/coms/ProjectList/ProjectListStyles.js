import styled, { css } from 'styled-components';

const CARD_BG = {
  BG_DARKER: 'rgba(211,211,211, 0.8)',
  BG_LIGHTER: 'rgba(211,211,211, 0.3)',
  CARD_BG_ONE: '#F0F0F6',
  CARD_LINK_COLOR: '#6888ff',
}
const { CARD_LINK_COLOR } = CARD_BG;

//! css
const leftBoxShadow = css`
	-webkit-box-shadow: -12px -4px 36px -8px rgba(112, 100, 112, 0.55);
	-moz-box-shadow: -12px -4px 36px -8px rgba(112, 100, 112, 0.55);
	box-shadow: -12px -4px 36px -8px rgba(112, 100, 112, 0.55);
`;

const rightBoxShadow = css`
	-webkit-box-shadow: 12px 4px 36px -8px rgba(112, 100, 112, 0.55);
	-moz-box-shadow: 12px 4px 36px -8px rgba(112, 100, 112, 0.55);
	box-shadow: 12px 4px 36px -8px rgba(112, 100, 112, 0.55);
`;

//! styled
export const Wrapper = styled.div`
	padding: 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	${props => props.isRowReverse && 'flex-direction: row-reverse'};
  
	.w-46 {
		width: 46%;
	}
`;

export const ImageDiv = styled.div`
  ${props => (props.isRowReverse === false ? leftBoxShadow : rightBoxShadow)}
  
  img {
    width: 100%;
		border-radius: 8px;
	}
`;

export const ContentDiv = styled.div`
	font-family: Roboto 'san-serif';
	font-weight: 500;
  text-align: justify;
	.title {
    margin: 1rem 0;
    text-transform: uppercase;
  }

  .stack {
    margin: 1rem 0;
    text-transform: capitalize;
    letter-spacing: 1px;
    color: rgba(80, 80, 110, 0.8);
  }
  
	.card-link {
		color: ${CARD_LINK_COLOR};
		display: flex;
		justify-content: space-between;
		width: 50%;
    margin-right: 50%;
    
		a {
      color: #59619b;
			text-decoration: none;
		}
	}
`;
