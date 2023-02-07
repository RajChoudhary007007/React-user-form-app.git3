import {Component} from 'react'

import {v4} from 'uuid'

import ShowPassword from '../ShowPassword'

import './index.css'

class PasswordManager extends Component {
  state = {
    userWebsite: '',
    userName: '',
    userPassword: '',
    searchUser: '',
    isPassShow: false,
    newListItem: [],
    newLength: 0,
  }

  addNewPassword = event => {
    event.preventDefault()
    const {userWebsite, userName, userPassword} = this.state

    const newList = {
      id: v4(),
      website: userWebsite,
      name: userName,
      password: userPassword,
    }
    this.setState(prevState => ({
      newListItem: [...prevState.newListItem, newList],
      userWebsite: '',
      userName: '',
      userPassword: '',
    }))
    this.setState(prevState => ({
      newLength: prevState.newLength + 1,
    }))
    this.setState({isPassShow: true})
  }

  onChangWebSite = event => {
    this.setState({userWebsite: event.target.value})
  }

  onChangeUserInput = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({userPassword: event.target.value})
  }

  onChangeUserSearch = event => {
    this.setState({searchUser: event.target.value})
  }

  onChangeTrueFalse = () => {
    this.setState(prevState => ({isPassShow: !prevState.isPassShow}))
  }

  showNoPassword = () => {
    const passwords = `No Passwords`

    return (
      <div className="show-hide-container">
        <img
          className="show-hide-img"
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
        />
        <p className="noPasswords">{passwords}</p>
      </div>
    )
  }

  showPassword = () => {
    const {newListItem, isPassShow, searchUser} = this.state
    const searchResult = newListItem.filter(eachList =>
      eachList.name.toLowerCase().includes(searchUser.toLowerCase()),
    )

    return (
      <div className="unordered-List">
        {searchResult.map(eachList => (
          <ShowPassword
            key={eachList.id}
            eachList={eachList}
            onDeletePassword={this.onDeletePassword}
            isPassShow={isPassShow}
          />
        ))}
      </div>
    )
  }

  onDeletePassword = id => {
    const {newListItem} = this.state

    this.setState({
      newListItem: newListItem.filter(eachList => eachList.id !== id),
    })
    this.setState(prevState => ({
      newLength: prevState.newLength - 1,
    }))
  }

  render() {
    const {
      userWebsite,
      userName,
      userPassword,
      searchUser,
      newLength,
      isPassShow,
    } = this.state

    return (
      <div className="app-container">
        <div className="password-manger-container">
          <img
            className="app-logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
        </div>
        <div className="password-container">
          <form className="add-password" onSubmit={this.addNewPassword}>
            <h1 className="heading">Add New Password</h1>

            <div className="input-container">
              <img
                className="input-img"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png  "
                alt="website"
              />
              <input
                type="text"
                className="user-input"
                placeholder="Enter Website"
                onChange={this.onChangWebSite}
                value={userWebsite}
              />
            </div>

            <div className="input-container">
              <img
                className="input-img"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                alt="username"
              />
              <input
                type="text"
                className="user-input"
                placeholder="Enter UserName"
                onChange={this.onChangeUserInput}
                value={userName}
              />
            </div>

            <div className="input-container">
              <img
                className="input-img"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png  "
                alt="password"
              />
              <input
                type="password"
                className="user-input"
                placeholder="Enter Password"
                onChange={this.onChangePassword}
                value={userPassword}
              />
            </div>
            <button type="submit" className="button">
              ADD
            </button>
          </form>
          <div className="img-container">
            <img
              className="container-img"
              alt=" password manager"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
            />
            <img
              className="container-img2"
              alt=" password manager"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            />
          </div>
        </div>

        <div className="footer-container">
          <div className="footer-heading-container">
            <div className="footer-box">
              <h1 className="footer-heading">Your Passwords</h1>
              <p className="password-count">{newLength}</p>
            </div>
            <div className="footer-box-search">
              <img
                className="search"
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
              />
              <input
                type="search"
                className="user-input-search"
                onChange={this.onChangeUserSearch}
                value={searchUser}
              />
            </div>
          </div>
          <hr className="line" />
          <div className="password-container-div">
            <div className="show-password-mark">
              <input
                type="checkbox"
                id="check"
                value={isPassShow}
                onChange={this.onChangeTrueFalse}
              />
              <label className="show-pass-heading" htmlFor="check">
                Show passwords
              </label>
            </div>
            <ul className="footer-show-container">
              {newLength !== 0 ? this.showPassword() : this.showNoPassword()}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
