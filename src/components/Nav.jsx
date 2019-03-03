import React from 'react'
import {
  translate,
  Nav as UINav,
  NavItem,
  NavIcon,
  NavText,
  genNavLink
} from 'cozy-ui/react'
import { Link } from 'react-router'

import bulletpoint from 'assets/icons/icon-bullet-point.svg'

const NavLink = genNavLink(Link)

const Nav = ({ t }) => (
  <UINav>
    <NavItem>
      <NavLink to="/videos">
        <NavIcon icon={bulletpoint} />
        <NavText>{t('Nav.videos')}</NavText>
      </NavLink>
    </NavItem>
  </UINav>
)

// translate() provide t() to use translations (ex: locales/en.json)
export default translate()(Nav)
