const Notification = (props) => {
  //  Write your code here.
  const { className, iconUrl, message } = props;
  const containerClassName = `notification-container ${className}`;
  return (
    <div className={containerClassName}>
      <img className="icon" src={iconUrl} />

      <p className="message">{message}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="notification-list-container">
      <Notification
        className="color1"
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="Information Message"
      />
      <Notification
        className="color2"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Information Message"
      />
      <Notification
        className="color3"
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Information Message"
      />
      <Notification
        className="color4"
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Information Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
