import './index.css'

const ShowPassword = props => {
  const {eachList, onDeletePassword, isPassShow} = props
  const {website, name, password, id} = eachList

  const onClickingDeleteIcon = () => {
    onDeletePassword(id)
  }

  return (
    <li className="list-container">
      <div className="mini-container">
        <div>
          <h1 className="heading-password-list">{name[0]}</h1>
        </div>

        <div>
          <p className="name-description">{website}</p>
          <p className="name-description">{name}</p>
          <p className="password-description">
            {isPassShow ? (
              <img
                className="start"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                alt="stars"
              />
            ) : (
              password
            )}
          </p>
        </div>

        <div>
          <button
            className="button-pass"
            type="button"
            onClick={onClickingDeleteIcon}
          >
            <img
              className="del-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default ShowPassword
