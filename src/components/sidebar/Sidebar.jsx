import React from "react";
import { connect } from "react-redux";

import * as CourseActons from "../../actions/course";

const Sidebar = ({ modules, toggleLesson }) => (
  <aside>
    {modules.map(module => {
      return (
        <div key={module.id}>
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map(lesson => {
              return (
                <li key={lesson.id}>
                  {lesson.title}
                  <button onClick={() => toggleLesson(module, lesson)}>
                    Selecionar
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      );
    })}
  </aside>
);

const mapStateToProps = state => ({
  modules: state.course.modules
});

const mapDispatchToProps = dispatch => ({
  toggleLesson: (module, lesson) =>
    dispatch(CourseActons.toggleLesson(module, lesson))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
