import React from "react";
import { connect } from "react-redux";

const Video = ({ lesson, module }) => {
  return (
    <div>
      <h1>Modulo {module.title}</h1>
      <h4>Aula {lesson.title}</h4>
    </div>
  );
};

export default connect(state => ({
  lesson: state.course.activeLesson,
  module: state.course.activeModule
}))(Video);
