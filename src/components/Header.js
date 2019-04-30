import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-leaf"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Corn</h1>
                <p>A thirst that unites and divides us, ground in the great mill that turns men into machines.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Begin</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>End</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Why</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Who</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
