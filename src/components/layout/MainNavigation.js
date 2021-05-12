import {Link} from "react-router-dom";

export default function MainNavigation() {
  return (
    <header>
      <div> React Meetups</div>
      <nav>
        <ul>
          <li>
            {/* Here we could use <a> tag but instead we use link component since it is
            not necessary to call the server to change link once react can do it itself*/}
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
