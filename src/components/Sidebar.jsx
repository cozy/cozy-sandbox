import React from 'react'
import Icon from 'cozy-ui/transpiled/react/Icon'
import { useI18n } from 'cozy-ui/transpiled/react/providers/I18n'
import Nav, { NavItem, genNavLink } from 'cozy-ui/transpiled/react/Nav'
import UISidebar from 'cozy-ui/transpiled/react/Sidebar'
import { NavLink as RNavLink } from 'react-router-dom'
import NavIcon from '../assets/icons/icon-bullet-point.svg'

const NavLink = genNavLink(RNavLink)

const Sidebar = () => {
  const { t } = useI18n()
  return (
  <UISidebar>
    <Nav>
      <NavItem>
        <NavLink to="/intents" className="c-nav-link">
          <Icon className="c-nav-icon" icon={NavIcon} />
          {t('Nav.intents')}
        </NavLink>
      </NavItem>
    </Nav>
  </UISidebar>
)
  }

export default Sidebar
