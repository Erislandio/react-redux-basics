const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Comecando com react e redux",
      lessons: [
        {
          id: 1,
          title: "Primeira aula"
        },
        {
          id: 2,
          title: "Segunda aula"
        }
      ]
    },
    {
      id: 2,
      title: "Comecando com o node js",
      lessons: [
        {
          id: 1,
          title: "Primeira aula"
        },
        {
          id: 2,
          title: "Segunda aula"
        }
      ]
    }
  ]
};

export default function course(state = INITIAL_STATE, action) {
  console.log(action);

  if (action.type === "TOGGLE_LESSON") {
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module
    };
  }

  return state;
}
