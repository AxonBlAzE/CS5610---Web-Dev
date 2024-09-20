import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="https://miro.medium.com/v2/1*K0a7xINk0RM5gfXGSN68cw.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="../Courses/1234/Home"> CS1234 React JS </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer </p>
            <Link to="../Courses/1234/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1619358925225/50e2XssdE.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="../Courses/1234/Home"> Svelte </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer </p>
            <Link to="../Courses/1234/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/640px-Vue.js_Logo_2.svg.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="../Courses/1234/Home"> Vue </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer </p>
            <Link to="../Courses/1234/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="https://miro.medium.com/v2/resize:fit:588/1*15CYVZdpsxir8KLdxEZytg.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="../Courses/1234/Home"> Angular </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer </p>
            <Link to="../Courses/1234/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="https://preactjs.com/app-icon.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="../Courses/1234/Home"> Preact </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer </p>
            <Link to="../Courses/1234/Home"> Go </Link>
          </div>

          <div className="wd-dashboard-course">
            <img src="https://miro.medium.com/v2/resize:fit:860/0*eFomJUFua8tuqe8g.png" width={200} />
            <div>
              <Link className="wd-dashboard-course-link"
                to="../Courses/1234/Home"> JQuery </Link>
              <p className="wd-dashboard-course-title">
                Full Stack software developer </p>
              <Link to="../Courses/1234/Home"> Go </Link>
            </div>

            <div className="wd-dashboard-course">
              <img src="https://lh5.googleusercontent.com/proxy/OHJkO9--W5k32NfojBIktnJbQ0H0izVH9dVTK04DmVc6PQWragjBwlPXNzJudzXn417DWeTVqnQ3_xjv" width={200} />
              <div>
                <Link className="wd-dashboard-course-link"
                  to="../Courses/1234/Home"> Backbone </Link>
                <p className="wd-dashboard-course-title">
                  Full Stack software developer </p>
                <Link to="../Courses/1234/Home"> Go </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}