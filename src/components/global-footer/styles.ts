import styled from 'styled-components'

import { UseResponsive } from '../../hooks/useResponsive'

import { flexbox, inlineFlexbox, textStyle } from '../../styles/utils'

export const StyledGlobalFooter = styled.footer`
  margin-bottom: 80px;
`

export const StyledGlobalFooterWrapper = styled.div<UseResponsive>`
  ${flexbox('between', 'center')};
  padding: 24px 12px;

  ${({ isTablet }) => isTablet && `padding: 48px 24px;`}
`
export const StyledGlobalFooterLeft = styled.div`
  ${flexbox()}
`

export const StyledGlobalFooterLogo = styled.div<UseResponsive>`
  ${inlineFlexbox()};
  width: 108px;
  height: 108px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${({ isTablet }) => isTablet && `width: 120px; height: 120px;`}
  ${({ isDesktop }) => isDesktop && `margin: 0 82px 0 16px;`}
`

export const StyledGlobalFooterRight = styled.div`
  ${inlineFlexbox('between', 'end')};
  flex-direction: column;
  height: 100%;
`

export const StyledGlobalFooterSubMenuList = styled.ul`
  margin: 16px;
`

export const StyledGlobalFooterSubMenuListItem = styled.li`
  &:not(:last-child) {
    margin-botom: 8px;
  }

  a {
    ${textStyle('base')};
    font-weight: 400;
    padding: 8px;
  }
`

export const StyledGlobalFooterSocialIconGroup = styled.div`
  ${flexbox('space', 'center')};
  margin-bottom: 54px;
`

export const StyledGlobalFooterIconButton = styled.button`
  ${flexbox()};
  padding: 4px;

  &:not(:last-child) {
    margin-right: 8px;
  }

  svg {
    width: 24px;
    height: 24px;
    overflow: hidden;
    object-fit: cover;
  }
`

export const StyledGlobalFooterSubMenuText = styled.p<UseResponsive>`
  ${textStyle('xxs')};
  font-weight: 600;
  text-align: right;

  ${({ isTablet, theme }) =>
    isTablet && `font-size: ${theme.fontSizes.md}; font-weight: 500;`}

  ${({ isDesktop, theme }) =>
    isDesktop && `font-size: ${theme.fontSizes.md}; font-weight: 500;`}
`
