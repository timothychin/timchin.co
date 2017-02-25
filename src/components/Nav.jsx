var Nav = () => (
  <nav>
  <div className="nav-container">
    <span className="title">TIMOTHY CHIN</span>
    <span className="description"> Software Engineer</span>
    <ul className="media-icons-container">
      <li className="media-icons">
        <a href="https://www.linkedin.com/in/chintimothy" target="_blank"><i className="fa fa-linkedin-square"></i></a>
      </li>
      <li className="media-icons">
        <a href="https://github.com/timothychin" target="_blank"><i className="fa fa-github-square"></i></a>
      </li>
      <li className="media-icons">
        <a href="https://drive.google.com/file/d/0B9eXeLfM_UvFSmxuakpiazFEeE0/view" target="_blank"><i className="fa fa-file-text"></i></a>
      </li>
      <li className="media-icons">
        <a href="mailto:timm.chin@gmail.com" target="_top"><i className="fa fa-envelope"></i></a>
      </li>
    </ul>
  </div>
  </nav>
); 

window.Nav = Nav;