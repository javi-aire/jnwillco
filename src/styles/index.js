/**
 * styled-components mixins for helping write styles.
 */
import { css } from 'styled-components';

/**
 * Media query template that renders only on mobile sizes.
 * Use like:
 *   ${mobile`color: black;`}
 */
export function mobile(...args) {
  return css`
    @media (max-width: ${props => props.theme.breakpoints.large - 1}px) {
      ${css(...args)};
    }
  `;
}

/**
 * Media query template that renders only on desktop sizes.
 * Use like:
 *   ${desktop`color: black;`}
 */
export function desktop(...args) {
  return css`
    @media (min-width: ${props => props.theme.breakpoints.large - 1}px) {
      ${css(...args)};
    }
  `;
}
